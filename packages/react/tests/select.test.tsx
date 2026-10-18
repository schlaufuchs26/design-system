import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Select } from "../src";

const options = [
  { value: "all", label: "All runs" },
  { value: "pass", label: "Passed only" },
  { value: "fail", label: "Failed only" },
];

describe("Select", () => {
  test("shows the label and the placeholder", () => {
    render(<Select label="Filter" options={options} placeholder="Pick one" />);
    expect(screen.getByText("Filter")).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Filter" })).toHaveTextContent(
      "Pick one",
    );
  });

  test("opens the list and selects with the mouse", async () => {
    const seen: string[] = [];
    render(
      <Select
        label="Filter"
        options={options}
        onValueChange={(value) => seen.push(value)}
      />,
    );
    await userEvent.click(screen.getByRole("combobox", { name: "Filter" }));
    const listbox = await screen.findByRole("listbox");
    expect(listbox).toBeInTheDocument();
    await userEvent.click(screen.getByRole("option", { name: "Passed only" }));
    expect(seen).toEqual(["pass"]);
    await waitFor(() => expect(screen.queryByRole("listbox")).toBeNull());
  });

  test("keyboard: ArrowDown opens, Enter selects", async () => {
    const seen: string[] = [];
    render(
      <Select
        label="Filter"
        options={options}
        onValueChange={(value) => seen.push(value)}
      />,
    );
    const trigger = screen.getByRole("combobox", { name: "Filter" });
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await screen.findByRole("listbox");
    await userEvent.keyboard("{Enter}");
    expect(seen).toEqual(["all"]);
  });

  test("a controlled value is shown", () => {
    render(<Select label="Filter" options={options} value="fail" />);
    expect(screen.getByRole("combobox", { name: "Filter" })).toHaveTextContent(
      "Failed only",
    );
  });
});
