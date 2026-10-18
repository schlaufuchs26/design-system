import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button, MenuButton } from "../src";

const items = [
  { label: "Rename", hint: "R" },
  { label: "Duplicate" },
  { label: "Delete", tone: "danger" as const, separatorBefore: true },
];

describe("MenuButton", () => {
  test("opens from its trigger and lists the entries", async () => {
    render(<MenuButton trigger={<Button>Actions</Button>} items={items} />);
    await userEvent.click(screen.getByRole("button", { name: "Actions" }));
    const menu = await screen.findByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(screen.getAllByRole("menuitem")).toHaveLength(3);
  });

  test("Enter selects the highlighted entry and closes the menu", async () => {
    const seen: string[] = [];
    render(
      <MenuButton
        trigger={<Button>Actions</Button>}
        items={[
          { label: "Rename", onSelect: () => seen.push("rename") },
          { label: "Delete", onSelect: () => seen.push("delete") },
        ]}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Actions" }));
    await screen.findByRole("menu");
    await userEvent.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    expect(seen).toEqual(["delete"]);
    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
  });

  test("Escape closes the menu without selecting", async () => {
    let selected = 0;
    render(
      <MenuButton
        trigger={<Button>Actions</Button>}
        items={[{ label: "Rename", onSelect: () => selected++ }]}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Actions" }));
    await screen.findByRole("menu");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
    expect(selected).toBe(0);
  });

  test("a disabled entry is not selectable", async () => {
    let selected = 0;
    render(
      <MenuButton
        trigger={<Button>Actions</Button>}
        items={[
          { label: "Rename", disabled: true, onSelect: () => selected++ },
        ]}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Actions" }));
    const item = await screen.findByRole("menuitem");
    await userEvent.click(item);
    expect(selected).toBe(0);
  });
});
