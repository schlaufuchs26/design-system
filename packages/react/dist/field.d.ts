import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface FieldShellProps {
  label: string;
  hint?: ReactNode;
  error?: string;
  /** Wires the label and the hint to the control. */
  id: string;
  hintId?: string;
  errorId?: string;
}
export interface TextFieldProps
  extends Omit<ComponentPropsWithoutRef<"input">, "id">,
    Omit<FieldShellProps, "id" | "hintId" | "errorId"> {
  id?: string;
}
export declare function TextField({
  label,
  hint,
  error,
  id,
  className,
  ...rest
}: TextFieldProps): import("react").JSX.Element;
export interface TextAreaProps
  extends Omit<ComponentPropsWithoutRef<"textarea">, "id">,
    Omit<FieldShellProps, "id" | "hintId" | "errorId"> {
  id?: string;
}
export declare function TextArea({
  label,
  hint,
  error,
  id,
  className,
  ...rest
}: TextAreaProps): import("react").JSX.Element;
