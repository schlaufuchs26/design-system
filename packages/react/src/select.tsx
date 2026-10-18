import { Select as BaseSelect } from "@base-ui/react/select";
import { cx, parts } from "@schlaufuchs/tokens/classes";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: readonly SelectOption[];
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

/** Single-choice select on a Base UI listbox: arrow keys, typeahead, Escape. */
export function Select({
  options,
  label,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select…",
  disabled,
  name,
  id,
  className,
}: SelectProps) {
  return (
    <div className={cx("fox-field", className)}>
      <BaseSelect.Root
        items={options}
        value={value}
        defaultValue={defaultValue}
        onValueChange={(next) => onValueChange?.(String(next))}
        disabled={disabled}
        name={name}
        id={id}
      >
        <BaseSelect.Label className="fox-label">{label}</BaseSelect.Label>
        <BaseSelect.Trigger className={parts.selectTrigger}>
          <BaseSelect.Value placeholder={placeholder} />
          <BaseSelect.Icon className={parts.selectIcon} aria-hidden="true">
            ▾
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner sideOffset={4}>
            <BaseSelect.Popup className={parts.selectPopup}>
              <BaseSelect.List>
                {options.map((option) => (
                  <BaseSelect.Item
                    key={option.value}
                    value={option.value}
                    className={parts.selectItem}
                  >
                    <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
                    <BaseSelect.ItemIndicator aria-hidden="true">
                      ✓
                    </BaseSelect.ItemIndicator>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  );
}
