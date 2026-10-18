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
export declare function PopoverPanel({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
  side,
  className,
}: PopoverProps): import("react").JSX.Element;
