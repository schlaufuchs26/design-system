import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { cx, parts } from "@schlaufuchs/tokens/classes";
import type { ReactElement, ReactNode } from "react";

export interface DialogProps {
  /** The element that opens the dialog; receives the trigger props. */
  trigger: ReactElement;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Accessible label for the corner close button. */
  closeLabel?: string;
  className?: string;
}

/**
 * A modal dialog on Base UI: focus moves into the popup, Tab stays inside,
 * Escape closes it and focus returns to the trigger.
 */
export function Dialog({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  defaultOpen,
  onOpenChange,
  closeLabel = "Close",
  className,
}: DialogProps) {
  return (
    <BaseDialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(next) => onOpenChange?.(next)}
    >
      <BaseDialog.Trigger render={trigger} />
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={parts.dialogBackdrop} />
        <BaseDialog.Popup
          className={cx("fox-dialog", "fox-dialog-popup", className)}
        >
          <div className={parts.dialogHeader}>
            <BaseDialog.Title className={parts.dialogTitle}>
              {title}
            </BaseDialog.Title>
            <BaseDialog.Close
              className="fox-button fox-dialog-close"
              data-size="icon"
              data-variant="ghost"
              aria-label={closeLabel}
            >
              ×
            </BaseDialog.Close>
          </div>
          <div className={parts.dialogBody}>
            {description ? (
              <BaseDialog.Description className="fox-hint">
                {description}
              </BaseDialog.Description>
            ) : null}
            {children}
          </div>
          {footer ? <div className={parts.dialogFooter}>{footer}</div> : null}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
