import type { ReactNode } from "react";
export type ToastTone = "accent" | "success" | "danger";
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
export declare function ToastProvider({
  children,
}: {
  children: ReactNode;
}): import("react").JSX.Element;
/** Post and dismiss toasts from anywhere inside ToastProvider. */
export declare function useToast(): ToastApi;
