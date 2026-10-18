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
export declare function Select({
  options,
  label,
  value,
  defaultValue,
  onValueChange,
  placeholder,
  disabled,
  name,
  id,
  className,
}: SelectProps): import("react").JSX.Element;
