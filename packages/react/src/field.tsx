import { cx } from "@schlaufuchs/tokens/classes";
import { type ComponentPropsWithoutRef, type ReactNode, useId } from "react";

interface FieldShellProps {
  label: string;
  hint?: ReactNode;
  error?: string;
  /** Wires the label and the hint to the control. */
  id: string;
  hintId?: string;
  errorId?: string;
}

function describedBy(...ids: Array<string | undefined>): string | undefined {
  const list = ids.filter(Boolean);
  return list.length > 0 ? list.join(" ") : undefined;
}

export interface TextFieldProps
  extends Omit<ComponentPropsWithoutRef<"input">, "id">,
    Omit<FieldShellProps, "id" | "hintId" | "errorId"> {
  id?: string;
}

export function TextField({
  label,
  hint,
  error,
  id,
  className,
  ...rest
}: TextFieldProps) {
  const generated = useId();
  const inputId = id ?? generated;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  return (
    <div className="fox-field">
      <label className="fox-label" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...rest}
        id={inputId}
        className={cx("fox-input", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(hintId, errorId)}
      />
      {hint ? (
        <p className="fox-hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="fox-hint" data-tone="danger" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export interface TextAreaProps
  extends Omit<ComponentPropsWithoutRef<"textarea">, "id">,
    Omit<FieldShellProps, "id" | "hintId" | "errorId"> {
  id?: string;
}

export function TextArea({
  label,
  hint,
  error,
  id,
  className,
  ...rest
}: TextAreaProps) {
  const generated = useId();
  const inputId = id ?? generated;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  return (
    <div className="fox-field">
      <label className="fox-label" htmlFor={inputId}>
        {label}
      </label>
      <textarea
        {...rest}
        id={inputId}
        className={cx("fox-textarea", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(hintId, errorId)}
      />
      {hint ? (
        <p className="fox-hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="fox-hint" data-tone="danger" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
