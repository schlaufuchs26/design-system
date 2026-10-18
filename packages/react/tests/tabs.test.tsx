import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { TabsView } from "../src";

const tabs = [
  { value: "overview", label: "Overview", content: "Overview panel" },
  { value: "runs", label: "Runs", content: "Runs panel" },
  { value: "answers", label: "Answers", content: "Answers panel" },
];

describe("TabsView", () => {
  test("shows the first tab by default and links tab to panel", () => {
    render(<TabsView label="Sections" tabs={tabs} />);
    const tab = screen.getByRole("tab", { name: "Overview" });
    expect(tab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Overview panel");
    expect(tab.getAttribute("aria-controls")).toBe(
      screen.getByRole("tabpanel").id,
    );
  });

  test("clicking a tab switches the panel", async () => {
    render(<TabsView label="Sections" tabs={tabs} />);
    await userEvent.click(screen.getByRole("tab", { name: "Runs" }));
    expect(screen.getByRole("tab", { name: "Runs" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Runs panel");
  });

  test("arrow keys move the roving tab stop", async () => {
    // happy-dom does not move focus from Base UI's key handler, and automatic
    // activation follows focus; the roving tabindex is what the handler does
    // before that, and a real browser moves focus with it.
    render(<TabsView label="Sections" tabs={tabs} />);
    screen.getByRole("tab", { name: "Overview" }).focus();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Runs" })).toHaveAttribute(
        "tabindex",
        "0",
      ),
    );
    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute(
      "tabindex",
      "-1",
    );
  });

  test("Home and End jump to the ends", async () => {
    render(<TabsView label="Sections" tabs={tabs} defaultValue="runs" />);
    screen.getByRole("tab", { name: "Runs" }).focus();
    await userEvent.keyboard("{End}");
    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Answers" })).toHaveAttribute(
        "tabindex",
        "0",
      ),
    );
    await userEvent.keyboard("{Home}");
    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute(
        "tabindex",
        "0",
      ),
    );
  });
});
