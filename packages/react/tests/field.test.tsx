import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { TextArea, TextField } from "../src";

describe("TextField", () => {
  test("labels the input and links hint and error by id", () => {
    render(
      <TextField
        label="Name"
        hint="As it appears on the card"
        error="Required"
      />,
    );
    const input = screen.getByRole("textbox", { name: "Name" });
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    expect(describedBy.split(" ")).toHaveLength(2);
    for (const id of describedBy.split(" ")) {
      expect(document.getElementById(id)).not.toBeNull();
    }
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  test("types into the field and reports the value", async () => {
    let value = "";
    render(
      <TextField
        label="Name"
        onChange={(event) => {
          value = event.target.value;
        }}
      />,
    );
    await userEvent.type(screen.getByRole("textbox", { name: "Name" }), "fox");
    expect(value).toBe("fox");
  });

  test("hideLabel keeps the name and drops the label from the layout", () => {
    render(<TextField label="Search tickets" hideLabel />);
    const input = screen.getByRole("textbox", { name: "Search tickets" });
    expect(input).toBeInTheDocument();
    expect(screen.getByText("Search tickets")).toHaveClass("fox-sr-only");
  });

  test("no error means no aria-invalid and no alert", () => {
    render(<TextField label="Name" hint="Optional" />);
    const input = screen.getByRole("textbox", { name: "Name" });
    expect(input).not.toHaveAttribute("aria-invalid");
    expect(screen.queryByRole("alert")).toBeNull();
  });
});

describe("TextArea", () => {
  test("renders a labelled textarea", () => {
    render(<TextArea label="Notes" rows={4} />);
    const area = screen.getByRole("textbox", { name: "Notes" });
    expect(area.tagName).toBe("TEXTAREA");
    expect(area).toHaveAttribute("rows", "4");
    expect(area.className).toBe("fox-textarea");
  });
});
