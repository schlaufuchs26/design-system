import { Toast } from "@base-ui/react/toast";
import { parts } from "@schlaufuchs/tokens/classes";
import type { ReactNode } from "react";

export type ToastTone = "accent" | "success" | "danger";

interface ToastData {
  tone?: ToastTone;
}

export interface ToastInput {
  title: string;
  description?: string;
  tone?: ToastTone;
}

export interface ToastApi {
  add: (toast: ToastInput) => void;
  close: (id: string) => void;
}

/**
 * Wraps the app so `useToast()` can post a message. The viewport sits in the
 * bottom-right corner and announces toasts politely.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <Toast.Provider>
      <Toast.Portal>
        <Toast.Viewport className={parts.toastViewport}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
      {children}
    </Toast.Provider>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager<ToastData>();
  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className={parts.toast}
      data-tone={toast.data?.tone}
    >
      <div>
        <Toast.Title className={parts.toastTitle} />
        <Toast.Description className={parts.toastDescription} />
      </div>
      <Toast.Close className={parts.toastClose} aria-label="Dismiss">
        ×
      </Toast.Close>
    </Toast.Root>
  ));
}

/** Post and dismiss toasts from anywhere inside ToastProvider. */
export function useToast(): ToastApi {
  const manager = Toast.useToastManager<ToastData>();
  return {
    add: (toast) =>
      manager.add({
        title: toast.title,
        description: toast.description,
        data: { tone: toast.tone },
      }),
    close: (id) => manager.close(id),
  };
}
