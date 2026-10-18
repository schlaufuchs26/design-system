import { Menu } from "@base-ui/react/menu";
import { cx, parts } from "@schlaufuchs/tokens/classes";
import { Fragment, type ReactElement, type ReactNode } from "react";

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
export function MenuButton({
  trigger,
  items,
  label,
  open,
  defaultOpen,
  onOpenChange,
  side = "bottom",
  className,
}: MenuProps) {
  return (
    <Menu.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(next) => onOpenChange?.(next)}
    >
      <Menu.Trigger render={trigger} />
      <Menu.Portal>
        <Menu.Positioner side={side} sideOffset={6}>
          <Menu.Popup className={cx(parts.menu, className)}>
            {label ? (
              <Menu.GroupLabel className={parts.menuLabel}>
                {label}
              </Menu.GroupLabel>
            ) : null}
            {items.map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: the items prop is a fixed list per menu
              <Fragment key={`${index}-${String(item.label)}`}>
                {item.separatorBefore ? (
                  <Menu.Separator className={parts.menuSeparator} />
                ) : null}
                <Menu.Item
                  className={parts.menuItem}
                  data-tone={item.tone}
                  disabled={item.disabled}
                  onClick={item.onSelect}
                >
                  <span>{item.label}</span>
                  {item.hint ? (
                    <span className="fox-muted fox-mono">{item.hint}</span>
                  ) : null}
                </Menu.Item>
              </Fragment>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
