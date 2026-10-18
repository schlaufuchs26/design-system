import { describe, expect, test } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button, PopoverPanel, TooltipHint, TooltipProvider } from "../src";

describe("PopoverPanel", () => {
  test("opens from its trigger and closes on Escape", async () => {
    render(
      <PopoverPanel
        trigger={<Button>Details</Button>}
        title="What is this?"
        description="A short explanation."
      >
        <p>Body</p>
      </PopoverPanel>,
    );
    expect(screen.queryByRole("dialog")).toBeNull();
    await userEvent.click(screen.getByRole("button", { name: "Details" }));
    expect(await screen.findByText("What is this?")).toBeInTheDocument();
    expect(screen.getByText("A short explanation.")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByText("What is this?")).toBeNull());
  });
});

describe("TooltipHint", () => {
  test("renders the hint in a tooltip when it is open", () => {
    // The hover and focus timing lives in Base UI's useHover, which needs
    // pointer events happy-dom does not send; the open state proves the
    // wiring, and the keyboard path is Base UI's own tested behaviour.
    render(
      <TooltipProvider delay={0}>
        <TooltipHint
          trigger={<Button>Save</Button>}
          content="Saves the draft"
          defaultOpen
        />
      </TooltipProvider>,
    );
    expect(screen.getByRole("tooltip")).toHaveTextContent("Saves the draft");
  });

  test("keeps the trigger's own semantics", () => {
    render(
      <TooltipHint trigger={<Button>Save</Button>} content="Saves the draft" />,
    );
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
});
