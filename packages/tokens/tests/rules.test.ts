import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Guards for the rules in the README's "The rules" section. Each test names
 * one rule, so a change that breaks the system fails with the rule it broke
 * instead of with a screenshot nobody diffs.
 */
const ROOT = join(import.meta.dir, "..");
const FILES = ["components.css", "overlays.css"];
const sources = Object.fromEntries(
  FILES.map((file) => [file, readFileSync(join(ROOT, "src", file), "utf8")]),
);

/** Comments blanked out, newlines kept, so line numbers still match. */
function stripComments(text: string): string {
  return text.replace(/\/\*[\s\S]*?\*\//g, (comment) =>
    comment.replace(/[^\n]/g, " "),
  );
}

interface Block {
  selector: string;
  body: string;
  file: string;
  line: number;
}

/** Splits a stylesheet into top-level rule blocks (no nesting in this CSS). */
function blocks(): Block[] {
  const out: Block[] = [];
  for (const [file, text] of Object.entries(sources)) {
    const pattern = /([^{}]+)\{([^{}]*)\}/g;
    const clean = stripComments(text);
    let match = pattern.exec(clean);
    while (match) {
      const before = clean.slice(0, match.index);
      out.push({
        selector: match[1].trim(),
        body: match[2],
        file,
        line: before.split("\n").length,
      });
      match = pattern.exec(clean);
    }
  }
  return out;
}

const rules = blocks();

describe("spacing and sizing", () => {
  test("no pixel literal above 4px: sizes come from a token", () => {
    const offenders: string[] = [];
    for (const [file, text] of Object.entries(sources)) {
      stripComments(text)
        .split("\n")
        .forEach((line, index) => {
          for (const match of line.matchAll(/(\d+(?:\.\d+)?)px/g)) {
            if (Number(match[1]) > 4) {
              offenders.push(`${file}:${index + 1} ${line.trim()}`);
            }
          }
        });
    }
    expect(offenders).toEqual([]);
  });

  test("border-radius is always a radius token", () => {
    const offenders = rules
      .filter(
        (rule) =>
          /border-radius\s*:/.test(rule.body) &&
          !/border-radius\s*:\s*var\(--fox-radius-[a-z]+\)\s*;/.test(rule.body),
      )
      .map((rule) => `${rule.file}:${rule.line} ${rule.selector}`);
    expect(offenders).toEqual([]);
  });

  test("transitions use the motion and ease tokens", () => {
    for (const rule of rules) {
      for (const match of rule.body.matchAll(/transition\s*:\s*([^;]+);/g)) {
        const value = match[1];
        for (const part of value.split(",")) {
          expect(part, `${rule.selector} transition`).toMatch(
            /var\(--fox-motion-(fast|base)\) var\(--fox-ease-out\)/,
          );
        }
      }
    }
  });
});

describe("the one focus ring", () => {
  test("no rule removes the ring on a focusable selector", () => {
    const offenders = rules
      .filter((rule) => /:focus-visible/.test(rule.selector))
      .filter((rule) => /outline\s*:\s*none/.test(rule.body))
      .map((rule) => `${rule.file}:${rule.line} ${rule.selector}`);
    expect(offenders).toEqual([]);
  });

  test("a focus-visible rule either keeps the shared ring or only shifts it", () => {
    const ring = "outline: 2px solid var(--fox-color-accent-default)";
    const offenders: string[] = [];
    for (const rule of rules) {
      if (!/:focus-visible/.test(rule.selector)) continue;
      const outline = rule.body.match(/outline\s*:\s*([^;]+);/);
      if (outline && !outline[1].startsWith(ring)) {
        offenders.push(`${rule.file}:${rule.line} ${rule.selector}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  test("the base layer draws the ring without reshaping the element", () => {
    const base = readFileSync(join(ROOT, "src", "base.css"), "utf8");
    const rule = base.slice(base.indexOf(":focus-visible {"));
    const block = rule.slice(0, rule.indexOf("}"));
    expect(block).toContain(
      "outline: 2px solid var(--fox-color-accent-default)",
    );
    expect(block).toContain("outline-offset: 2px");
    expect(block).not.toContain("border-radius");
  });
});

describe("radii and surfaces", () => {
  const radiusOf = (selector: string) => {
    const rule = rules.find((candidate) => candidate.selector === selector);
    if (!rule) throw new Error(`no rule for ${selector}`);
    const match = rule.body.match(
      /border-radius\s*:\s*var\(--fox-radius-(\w+)\)/,
    );
    return match?.[1];
  };

  test("floating surfaces share one radius", () => {
    for (const selector of [
      ".fox-menu",
      ".fox-select-popup",
      ".fox-popover",
      ".fox-toast",
    ]) {
      expect(radiusOf(selector), selector).toBe("lg");
    }
    expect(radiusOf(".fox-dialog")).toBe("xl");
  });

  test("the tooltip is the one documented exception", () => {
    expect(radiusOf(".fox-tooltip")).toBe("sm");
  });
});

describe("type", () => {
  test("uppercase micro labels share one letter-spacing", () => {
    const spacing = new Set<string>();
    for (const text of Object.values(sources)) {
      stripComments(text)
        .split("\n")
        .forEach((line) => {
          if (line.includes("letter-spacing")) spacing.add(line.trim());
        });
    }
    expect([...spacing]).toEqual(["letter-spacing: 0.06em;"]);
  });
});
