import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parts } from "../src/classes";

const ROOT = join(import.meta.dir, "..");
const css = readFileSync(join(ROOT, "dist", "index.css"), "utf8");

describe("component parts", () => {
  test("every part class is defined in the built CSS", () => {
    for (const [name, className] of Object.entries(parts)) {
      expect(className.startsWith("fox-"), `${name} is fox-prefixed`).toBe(
        true,
      );
      expect(css.includes(`.${className}`), `${className} has a rule`).toBe(
        true,
      );
    }
  });

  test("part names are unique", () => {
    const names = Object.values(parts);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe("colour tokens", () => {
  test("the component CSS uses no colour literals", () => {
    const files = readdirSync(join(ROOT, "src")).filter((file) =>
      file.endsWith(".css"),
    );
    const literal = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\boklch\(/;
    for (const file of files) {
      const text = readFileSync(join(ROOT, "src", file), "utf8");
      const hits = text
        .split("\n")
        .map((line, index) => ({ line, index: index + 1 }))
        .filter(({ line }) => literal.test(line));
      expect(hits, `${file} has colour literals`).toEqual([]);
    }
  });

  test("the modal scrim is a token in both themes", () => {
    expect(css).toContain("--fox-color-overlay: #000000a6;");
    expect(css).toContain("--fox-color-overlay: #2a201640;");
    expect(css).toContain("background: var(--fox-color-overlay);");
  });
});
