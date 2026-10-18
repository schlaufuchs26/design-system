import { type ReactElement, type ReactNode } from "react";
export interface MenuEntry {
  label: ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  /** Renders in the danger colour, for a destructive action. */
  tone?: "default" | "danger";
  /** Draws a separator above this entry. */
  separatorBefore?: boolean;
  /** A short hint on the right, e.g. a keyboard shortcut. */
  hint?: ReactNode;
}
export interface MenuProps {
  trigger: ReactElement;
  items: readonly MenuEntry[];
  label?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}
/** A dropdown menu: arrow keys move, Enter selects, Escape closes. */
export declare function MenuButton({
  trigger,
  items,
  label,
  open,
  defaultOpen,
  onOpenChange,
  side,
  className,
}: MenuProps): import("react").JSX.Element;
