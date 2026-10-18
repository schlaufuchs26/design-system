import type { ReactNode } from "react";
export interface TabDefinition {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}
export interface TabsProps {
  tabs: readonly TabDefinition[];
  /** Accessible name for the tab list, e.g. "Settings sections". */
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}
/**
 * A tab list and its panels. Arrow keys move between tabs, Home/End jump to
 * the ends, and only the active panel is in the tab order.
 */
export declare function TabsView({
  tabs,
  label,
  value,
  defaultValue,
  onValueChange,
  className,
}: TabsProps): import("react").JSX.Element;
