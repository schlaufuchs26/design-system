import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button, Dialog, TextField } from "../src";

describe("Dialog", () => {
  test("opens from its trigger and moves focus inside", async () => {
    render(
      <Dialog
        trigger={<Button>Rename</Button>}
        title="Rename session"
        description="The old name stays in the archive."
      >
        <TextField label="Name" />
      </Dialog>,
    );
    expect(screen.queryByRole("dialog")).toBeNull();
    await userEvent.click(screen.getByRole("button", { name: "Rename" }));
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAccessibleName("Rename session");
    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(
      screen.getByText("The old name stays in the archive."),
    ).toBeInTheDocument();
  });

  test("Escape closes it and focus returns to the trigger", async () => {
    render(
      <Dialog trigger={<Button>Open</Button>} title="Settings">
        body
      </Dialog>,
    );
    const trigger = screen.getByRole("button", { name: "Open" });
    await userEvent.click(trigger);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(trigger).toHaveFocus();
  });

  test("the corner close button closes it", async () => {
    render(
      <Dialog trigger={<Button>Open</Button>} title="Settings">
        body
      </Dialog>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByRole("dialog");
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });

  test("a controlled dialog follows its open prop", async () => {
    const { rerender } = render(
      <Dialog trigger={<Button>Open</Button>} title="Settings" open={false}>
        body
      </Dialog>,
    );
    expect(screen.queryByRole("dialog")).toBeNull();
    rerender(
      <Dialog trigger={<Button>Open</Button>} title="Settings" open>
        body
      </Dialog>,
    );
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });
});
