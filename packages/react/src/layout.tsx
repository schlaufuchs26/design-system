import { cx, parts } from "@schlaufuchs/tokens/classes";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";

/** Steps of the `space` token scale, in px: 1=4 … 16=64. */
export type SpaceStep = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

function gapStyle(gap: SpaceStep): CSSProperties {
  return { gap: `var(--fox-space-${gap})` };
}

export interface StackProps extends ComponentPropsWithoutRef<"div"> {
  gap?: SpaceStep;
}

/** Vertical flow; the gap is a token step, never a raw pixel value. */
export function Stack({ gap = 3, className, style, ...rest }: StackProps) {
  return (
    <div
      {...rest}
      className={cx(parts.stack, className)}
      style={{ ...gapStyle(gap), ...style }}
    />
  );
}

export interface RowProps extends ComponentPropsWithoutRef<"div"> {
  gap?: SpaceStep;
}

/** Horizontal, wrapping row for a toolbar or a label with its control. */
export function Row({ gap = 2, className, style, ...rest }: RowProps) {
  return (
    <div
      {...rest}
      className={cx(parts.row, className)}
      style={{ ...gapStyle(gap), ...style }}
    />
  );
}

export interface GridProps extends ComponentPropsWithoutRef<"div"> {
  /** Minimum column width in px; columns fill the available width. */
  min?: number;
  gap?: SpaceStep;
}

export function Grid({
  min = 240,
  gap = 4,
  className,
  style,
  ...rest
}: GridProps) {
  return (
    <div
      {...rest}
      className={cx(parts.grid, className)}
      style={{
        ...gapStyle(gap),
        gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
        ...style,
      }}
    />
  );
}
