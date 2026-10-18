import type { ReactElement, ReactNode } from "react";
export interface DialogProps {
  /** The element that opens the dialog; receives the trigger props. */
  trigger: ReactElement;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Accessible label for the corner close button. */
  closeLabel?: string;
  className?: string;
}
/**
 * A modal dialog on Base UI: focus moves into the popup, Tab stays inside,
 * Escape closes it and focus returns to the trigger.
 */
export declare function Dialog({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  defaultOpen,
  onOpenChange,
  closeLabel,
  className,
}: DialogProps): import("react").JSX.Element;
