import { Checkbox } from "@base-ui/react/checkbox";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Switch } from "@base-ui/react/switch";
import { cx, parts } from "@schlaufuchs/tokens/classes";
import type { ReactNode } from "react";

export interface CheckboxProps {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  className?: string;
}

/** A checkbox with its label; Space toggles, the label forwards clicks. */
export function CheckboxField({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  value,
  className,
}: CheckboxProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Base UI owns the control id and the label wiring
    <label
      className={cx("fox-choice", className)}
      data-disabled={disabled ? "" : undefined}
    >
      <Checkbox.Root
        className={parts.checkbox}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(next) => onCheckedChange?.(next)}
        disabled={disabled}
        name={name}
        value={value}
      >
        <Checkbox.Indicator className={parts.checkboxIndicator}>
          <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="m2.5 8.5 4 4 7-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span>{label}</span>
    </label>
  );
}

export interface SwitchProps {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
}

export function SwitchField({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  className,
}: SwitchProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Base UI owns the control id and the label wiring
    <label
      className={cx("fox-choice", className)}
      data-disabled={disabled ? "" : undefined}
    >
      <Switch.Root
        className={parts.switch}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(next) => onCheckedChange?.(next)}
        disabled={disabled}
        name={name}
      >
        <Switch.Thumb className={parts.switchThumb} />
      </Switch.Root>
      <span>{label}</span>
    </label>
  );
}

export interface RadioOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupFieldProps {
  label: string;
  options: readonly RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
}

/** One-of-N choice in a fieldset; arrow keys move between the radios. */
export function RadioGroupField({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  className,
}: RadioGroupFieldProps) {
  return (
    <fieldset className={cx("fox-choice-group", className)}>
      <legend className="fox-label">{label}</legend>
      <RadioGroup
        value={value}
        defaultValue={defaultValue}
        onValueChange={(next) => onValueChange?.(String(next))}
        disabled={disabled}
        name={name}
      >
        {options.map((option) => (
          // biome-ignore lint/a11y/noLabelWithoutControl: Base UI owns the control id and the label wiring
          <label
            key={option.value}
            className="fox-choice"
            data-disabled={option.disabled || disabled ? "" : undefined}
          >
            <Radio.Root
              value={option.value}
              className={parts.radio}
              disabled={option.disabled}
            >
              <Radio.Indicator className={parts.radioIndicator} />
            </Radio.Root>
            <span>{option.label}</span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
