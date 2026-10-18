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
export declare function CheckboxField({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  value,
  className,
}: CheckboxProps): import("react").JSX.Element;
export interface SwitchProps {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
}
export declare function SwitchField({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  className,
}: SwitchProps): import("react").JSX.Element;
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
export declare function RadioGroupField({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  className,
}: RadioGroupFieldProps): import("react").JSX.Element;
