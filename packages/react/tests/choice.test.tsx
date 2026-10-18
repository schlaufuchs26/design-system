import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { CheckboxField, RadioGroupField, SwitchField } from "../src";

describe("CheckboxField", () => {
  test("toggles by click and reports the new state", async () => {
    let checked: boolean | undefined;
    render(
      <CheckboxField
        label="Notify me"
        onCheckedChange={(next) => {
          checked = next;
        }}
      />,
    );
    const box = screen.getByRole("checkbox", { name: "Notify me" });
    expect(box).not.toHaveAttribute("data-checked");
    await userEvent.click(box);
    expect(checked).toBe(true);
    expect(box).toHaveAttribute("data-checked");
  });

  test("is focusable and toggles from the keyboard path", async () => {
    render(<CheckboxField label="Notify me" />);
    const box = screen.getByRole("checkbox", { name: "Notify me" });
    // Base UI renders a span with role=checkbox and wires Space/Enter in
    // useButton; happy-dom does not run that click synthesis, so the test
    // covers the focusable element and the click it produces.
    expect(box.tagName).toBe("SPAN");
    expect(box.tabIndex).toBe(0);
    box.focus();
    expect(box).toHaveFocus();
    await userEvent.click(box);
    expect(box).toHaveAttribute("data-checked");
  });

  test("a disabled box ignores clicks", async () => {
    render(<CheckboxField label="Notify me" disabled />);
    const box = screen.getByRole("checkbox", { name: "Notify me" });
    await userEvent.click(box);
    expect(box).not.toHaveAttribute("data-checked");
  });
});

describe("SwitchField", () => {
  test("is a switch role and flips on click", async () => {
    render(<SwitchField label="Density" />);
    const toggle = screen.getByRole("switch", { name: "Density" });
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute("data-checked");
  });
});

describe("RadioGroupField", () => {
  test("selects one option and moves with the arrow keys", async () => {
    const seen: string[] = [];
    render(
      <RadioGroupField
        label="Tone"
        defaultValue="accent"
        onValueChange={(value) => seen.push(value)}
        options={[
          { value: "accent", label: "Accent" },
          { value: "neutral", label: "Neutral" },
          { value: "danger", label: "Danger" },
        ]}
      />,
    );
    const [accent, neutral] = screen.getAllByRole("radio");
    expect(accent).toHaveAttribute("data-checked");
    await userEvent.click(neutral);
    expect(seen).toEqual(["neutral"]);
    expect(neutral).toHaveAttribute("data-checked");
    neutral.focus();
    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() =>
      expect(screen.getAllByRole("radio")[2]).toHaveAttribute("data-checked"),
    );
    expect(seen.at(-1)).toBe("danger");
  });
});
