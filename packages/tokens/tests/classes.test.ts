import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  badge,
  button,
  card,
  cx,
  dialog,
  dot,
  field,
  hint,
  input,
  label,
  select,
  table,
  textarea,
} from "../src/classes";

const ROOT = join(import.meta.dir, "..");
const css = `${readFileSync(join(ROOT, "src", "base.css"), "utf8")}\n${readFileSync(
  join(ROOT, "src", "components.css"),
  "utf8",
)}`;

const recipes = {
  button: button(),
  badge: badge(),
  card: card(),
  dot: dot(),
  field: field(),
  label: label(),
  hint: hint(),
  input: input(),
  textarea: textarea(),
  select: select(),
  table: table(),
  dialog: dialog(),
};

describe("typed class maps", () => {
  test("every recipe's class is defined in the CSS", () => {
    for (const [name, recipe] of Object.entries(recipes)) {
      expect(css, `${name} class ${recipe.className}`).toContain(
        `.${recipe.className}`,
      );
    }
  });

  test("variants become data attributes, not new classes", () => {
    expect(button({ variant: "solid", size: "sm" })).toEqual({
      className: "fox-button",
      "data-variant": "solid",
      "data-size": "sm",
    });
    expect(badge({ tone: "danger", outline: true })).toEqual({
      className: "fox-badge",
      "data-tone": "danger",
      "data-outline": "",
    });
    expect(card({ elevated: true })).toEqual({
      className: "fox-card",
      "data-elevated": "",
    });
    expect(input(true)).toEqual({
      className: "fox-input",
      "aria-invalid": "true",
    });
  });

  test("defaults emit no data attributes", () => {
    expect(button()).toEqual({ className: "fox-button" });
    expect(badge()).toEqual({ className: "fox-badge" });
    expect(table()).toEqual({ className: "fox-table" });
  });

  test("cx drops empty parts", () => {
    expect(cx("a", false, undefined, null, "b")).toBe("a b");
  });
});
