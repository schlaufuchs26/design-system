import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button, ToastProvider, useToast } from "../src";

function Harness() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast.add({ title: "Saved", description: "The draft is safe" })
      }
    >
      Notify
    </Button>
  );
}

describe("ToastProvider", () => {
  test("shows a toast posted through the hook and dismisses it", async () => {
    render(
      <ToastProvider>
        <Harness />
      </ToastProvider>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Notify" }));
    expect(await screen.findByText("Saved")).toBeInTheDocument();
    expect(screen.getByText("The draft is safe")).toBeInTheDocument();
    // Base UI hides the close button until the toast is expanded (hover or
    // focus), so query the visible glyph rather than the role.
    const close = screen.getByText("×");
    expect(close).toHaveAttribute("aria-label", "Dismiss");
    await userEvent.click(close);
    await waitFor(() => expect(screen.queryByText("Saved")).toBeNull());
  });

  test("a toast carries its tone as a data attribute", async () => {
    function Toned() {
      const toast = useToast();
      return (
        <Button onClick={() => toast.add({ title: "Failed", tone: "danger" })}>
          Fail
        </Button>
      );
    }
    render(
      <ToastProvider>
        <Toned />
      </ToastProvider>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Fail" }));
    const title = await screen.findByText("Failed");
    expect(title.closest(".fox-toast")).toHaveAttribute("data-tone", "danger");
  });
});
