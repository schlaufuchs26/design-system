import { Tooltip } from "@base-ui/react/tooltip";
import { parts } from "@schlaufuchs/tokens/classes";
import { cloneElement, type ReactElement, type ReactNode, useId } from "react";
import type { Side } from "./popover";

export interface TooltipProps {
  /** The element that shows the tooltip on hover and focus. */
  trigger: ReactElement;
  content: ReactNode;
  side?: Side;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * A short label on hover or focus. It is not a place for interactive
 * content; use PopoverPanel for that.
 */
export function TooltipHint({
  trigger,
  content,
  side = "top",
  open,
  defaultOpen,
  onOpenChange,
}: TooltipProps) {
  const id = useId();
  // Base UI 1.9 wires neither the role nor the description, so the wrapper
  // does: the popup is the described element of the trigger.
  const described = cloneElement(trigger, {
    "aria-describedby": id,
  } as Partial<unknown>);
  return (
    <Tooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(next) => onOpenChange?.(next)}
    >
      <Tooltip.Trigger render={described} />
      <Tooltip.Portal>
        <Tooltip.Positioner side={side} sideOffset={6}>
          <Tooltip.Popup id={id} role="tooltip" className={parts.tooltip}>
            {content}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

/** Groups tooltips so moving between them skips the shared delay. */
export function TooltipProvider({
  children,
  delay = 400,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return <Tooltip.Provider delay={delay}>{children}</Tooltip.Provider>;
}
