import type { ComponentPropsWithoutRef } from "react";
/** Steps of the `space` token scale, in px: 1=4 … 16=64. */
export type SpaceStep = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
export interface StackProps extends ComponentPropsWithoutRef<"div"> {
  gap?: SpaceStep;
}
/** Vertical flow; the gap is a token step, never a raw pixel value. */
export declare function Stack({
  gap,
  className,
  style,
  ...rest
}: StackProps): import("react").JSX.Element;
export interface RowProps extends ComponentPropsWithoutRef<"div"> {
  gap?: SpaceStep;
}
/** Horizontal, wrapping row for a toolbar or a label with its control. */
export declare function Row({
  gap,
  className,
  style,
  ...rest
}: RowProps): import("react").JSX.Element;
export interface GridProps extends ComponentPropsWithoutRef<"div"> {
  /** Minimum column width in px; columns fill the available width. */
  min?: number;
  gap?: SpaceStep;
}
export declare function Grid({
  min,
  gap,
  className,
  style,
  ...rest
}: GridProps): import("react").JSX.Element;
