import { Popover } from "@base-ui/react/popover";
import { cx, parts } from "@schlaufuchs/tokens/classes";
import type { ReactElement, ReactNode } from "react";

export type Side = "top" | "bottom" | "left" | "right";

export interface PopoverProps {
  trigger: ReactElement;
  title?: string;
  description?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: Side;
  className?: string;
}

/** A non-modal panel anchored to its trigger; Escape and outside clicks close it. */
export function PopoverPanel({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
  side = "bottom",
  className,
}: PopoverProps) {
  return (
    <Popover.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(next) => onOpenChange?.(next)}
    >
      <Popover.Trigger render={trigger} />
      <Popover.Portal>
        <Popover.Positioner side={side} sideOffset={6}>
          <Popover.Popup className={cx(parts.popover, className)}>
            {title ? (
              <Popover.Title className={parts.popoverTitle}>
                {title}
              </Popover.Title>
            ) : null}
            {description ? (
              <Popover.Description className={parts.popoverDescription}>
                {description}
              </Popover.Description>
            ) : null}
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
