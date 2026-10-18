import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  buildCss,
  buildTailwind,
  buildTs,
  cssValue,
  flatten,
  varName,
} from "../scripts/build";

const ROOT = join(import.meta.dir, "..");
const source = JSON.parse(
  readFileSync(join(ROOT, "tokens", "fox.tokens.json"), "utf8"),
);
const leaves = flatten(source);

describe("token compilation", () => {
  test("every leaf has a type and a value", () => {
    expect(leaves.length).toBeGreaterThan(60);
    for (const leaf of leaves) {
      expect(leaf.type.length).toBeGreaterThan(0);
      expect(leaf.value).not.toBeUndefined();
    }
  });

  test("dark and light define the same colour names", () => {
    const names = (prefix: string) =>
      leaves
        .filter((leaf) => leaf.path[0] === prefix)
        .map((leaf) => leaf.path.slice(1).join("."))
        .sort();
    expect(names("color-light")).toEqual(names("color"));
  });

  test("CSS variables carry the fox prefix and the token path", () => {
    expect(varName(["color", "bg", "deep"])).toBe("--fox-color-bg-deep");
    const css = buildCss(leaves);
    expect(css).toContain("--fox-color-bg-deep: #0a0908;");
    expect(css).toContain("--fox-space-4: 16px;");
    expect(css).toContain('[data-theme="light"] {');
    expect(css).toContain('[data-density="compact"] {');
    // A light override reuses the dark variable name.
    expect(css).toContain("--fox-color-bg-deep: #f4eee3;");
  });

  test("values are formatted for CSS", () => {
    const font = leaves.find((leaf) => leaf.path.join(".") === "font.mono");
    expect(font && cssValue(font)).toBe(
      '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
    );
    const ease = leaves.find((leaf) => leaf.path.join(".") === "ease.out");
    expect(ease && cssValue(ease)).toBe("cubic-bezier(0.2, 0.7, 0.3, 1)");
  });

  test("the typed module exposes tokens, a name union and cssVar", () => {
    const ts = buildTs(leaves);
    expect(ts).toContain("export const tokens = {");
    expect(ts).toContain("as const;");
    expect(ts).toContain('"color.bg.deep"');
    expect(ts).toContain("export type TokenName =");
    expect(ts).toContain("export function cssVar(path: TokenName)");
    expect(ts).not.toContain("color-light");
  });

  test("the Tailwind layer maps tokens into @theme namespaces", () => {
    const tw = buildTailwind(leaves);
    expect(tw).toContain("@theme {");
    expect(tw).toContain("--color-fox-bg-deep: #0a0908;");
    expect(tw).toContain("--spacing-fox-4: 16px;");
    expect(tw).toContain("--radius-fox-lg: 10px;");
  });

  test("generation is deterministic", () => {
    expect(buildCss(leaves)).toBe(buildCss(leaves));
    expect(buildTs(leaves)).toBe(buildTs(leaves));
  });

  test("the committed dist matches a fresh build", () => {
    expect(readFileSync(join(ROOT, "dist", "tokens.css"), "utf8")).toBe(
      buildCss(leaves),
    );
    expect(readFileSync(join(ROOT, "dist", "tokens.ts"), "utf8")).toBe(
      buildTs(leaves),
    );
    expect(readFileSync(join(ROOT, "dist", "theme.tailwind.css"), "utf8")).toBe(
      buildTailwind(leaves),
    );
  });
});
