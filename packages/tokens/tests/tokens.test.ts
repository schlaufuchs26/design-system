import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { flatten } from "../scripts/build";

const ROOT = join(import.meta.dir, "..");
const source = JSON.parse(
  readFileSync(join(ROOT, "tokens", "fox.tokens.json"), "utf8"),
);
const leaves = flatten(source);

function value(path: string): string {
  const leaf = leaves.find((candidate) => candidate.path.join(".") === path);
  if (!leaf) throw new Error(`missing token ${path}`);
  return String(leaf.value);
}

/** #rgb, #rrggbb and #rrggbbaa (alpha as the last byte). */
function parse(hex: string): { r: number; g: number; b: number; a: number } {
  const raw = hex.replace("#", "");
  const expand = (pair: string) => Number.parseInt(pair, 16) / 255;
  if (raw.length === 3) {
    return {
      r: expand(raw[0] + raw[0]),
      g: expand(raw[1] + raw[1]),
      b: expand(raw[2] + raw[2]),
      a: 1,
    };
  }
  return {
    r: expand(raw.slice(0, 2)),
    g: expand(raw.slice(2, 4)),
    b: expand(raw.slice(4, 6)),
    a: raw.length === 8 ? expand(raw.slice(6, 8)) : 1,
  };
}

/** WCAG relative luminance with source-over compositing onto an opaque backdrop. */
function luminance(hex: string, backdrop?: string): number {
  const colour = parse(hex);
  const channel = (c: number) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  let { r, g, b } = colour;
  if (colour.a < 1) {
    const base = parse(backdrop ?? "#000000");
    r = colour.r * colour.a + base.r * (1 - colour.a);
    g = colour.g * colour.a + base.g * (1 - colour.a);
    b = colour.b * colour.a + base.b * (1 - colour.a);
  }
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(foreground: string, background: string): number {
  const bg = parse(background);
  const opaqueBg = bg.a < 1 ? "#000000" : background;
  const light = Math.max(luminance(foreground, opaqueBg), luminance(opaqueBg));
  const dark = Math.min(luminance(foreground, opaqueBg), luminance(opaqueBg));
  return (light + 0.05) / (dark + 0.05);
}

const DARK = "color";
const LIGHT = "color-light";

describe.each([
  ["dark", DARK],
  ["light", LIGHT],
])("%s theme contrast (WCAG AA)", (_name, theme) => {
  const token = (rest: string) => value(`${theme}.${rest}`);

  test("primary and secondary text on every surface", () => {
    for (const surface of [
      "bg.deep",
      "bg.panel",
      "bg.surface",
      "bg.elevated",
    ]) {
      expect(
        contrast(token("text.primary"), token(surface)),
      ).toBeGreaterThanOrEqual(7);
      expect(
        contrast(token("text.secondary"), token(surface)),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrast(token("text.muted"), token(surface)),
      ).toBeGreaterThanOrEqual(4.5);
    }
  });

  test("accent ink on an accent fill", () => {
    expect(
      contrast(token("accent.ink"), token("accent.default")),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrast(token("accent.ink"), token("accent.press")),
    ).toBeGreaterThanOrEqual(4.5);
  });

  test("danger ink on a danger fill", () => {
    expect(
      contrast(token("status.danger-ink"), token("status.danger")),
    ).toBeGreaterThanOrEqual(4.5);
  });

  test("accent text on panels", () => {
    expect(
      contrast(token("accent.text"), token("bg.panel")),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrast(token("accent.text"), token("bg.surface")),
    ).toBeGreaterThanOrEqual(4.5);
  });

  test("status colours are readable on cards", () => {
    for (const status of [
      "neutral",
      "info",
      "queued",
      "success",
      "warning",
      "danger",
    ]) {
      expect(
        contrast(token(`status.${status}`), token("bg.surface")),
      ).toBeGreaterThanOrEqual(4.5);
    }
  });
});

test("subtle text is still legible (>= 3:1)", () => {
  expect(
    contrast(value("color.text.subtle"), value("color.bg.panel")),
  ).toBeGreaterThanOrEqual(3);
});

describe("size scale", () => {
  const px = (path: string) => Number.parseInt(value(path), 10);

  test("control steps are 8px apart", () => {
    expect(px("control.md") - px("control.sm")).toBe(8);
    expect(px("control.lg") - px("control.md")).toBe(8);
  });

  test("the switch fits its track", () => {
    // thumb + 2px inset on both sides, so the checked thumb lands flush.
    expect(px("control.switch-height") - px("control.thumb")).toBe(6);
    expect(px("control.switch") - px("control.thumb")).toBe(22);
  });

  test("compact density shrinks every control step", () => {
    for (const step of ["sm", "md", "lg"]) {
      expect(px(`density-compact.control.${step}`)).toBeLessThan(
        px(`control.${step}`),
      );
    }
  });
});
