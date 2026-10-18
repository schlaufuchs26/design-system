import type { ReactElement, ReactNode } from "react";
import type { Side } from "./popover";
export interface TooltipProps {
  /** The element that shows the tooltip on hover and focus. */
  trigger: ReactElement;
  content: ReactNode;
  side?: Side;
}
/**
 * A short label on hover or focus. It is not a place for interactive
 * content; use PopoverPanel for that.
 */
export declare function TooltipHint({
  trigger,
  content,
  side,
}: TooltipProps): import("react").JSX.Element;
/** Groups tooltips so moving between them skips the shared delay. */
export declare function TooltipProvider({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}): import("react").JSX.Element;
