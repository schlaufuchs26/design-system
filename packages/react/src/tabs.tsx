import { Tabs } from "@base-ui/react/tabs";
import { parts } from "@schlaufuchs/tokens/classes";
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
export function TabsView({
  tabs,
  label,
  value,
  defaultValue,
  onValueChange,
  className,
}: TabsProps) {
  return (
    <Tabs.Root
      value={value}
      defaultValue={defaultValue ?? tabs[0]?.value}
      onValueChange={(next) => onValueChange?.(String(next))}
      className={className}
    >
      <Tabs.List className={parts.tabsList} aria-label={label}>
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            className={parts.tab}
            disabled={tab.disabled}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel
          key={tab.value}
          value={tab.value}
          className={parts.tabsPanel}
        >
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
