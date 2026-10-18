import type { ComponentPropsWithoutRef, ReactNode } from "react";
export interface TableProps extends ComponentPropsWithoutRef<"table"> {
  /** Alternating row background. */
  zebra?: boolean;
  /** Scrolls horizontally instead of squeezing the columns. */
  scroll?: boolean;
  caption?: ReactNode;
}
/** A table with the design system's row and header styles. */
export declare function Table({
  zebra,
  scroll,
  caption,
  className,
  children,
  ...rest
}: TableProps): import("react").JSX.Element;
export declare function THead(
  props: ComponentPropsWithoutRef<"thead">,
): import("react").JSX.Element;
export declare function TBody(
  props: ComponentPropsWithoutRef<"tbody">,
): import("react").JSX.Element;
export declare function Tr(
  props: ComponentPropsWithoutRef<"tr">,
): import("react").JSX.Element;
export interface ThProps extends ComponentPropsWithoutRef<"th"> {
  /** Right-aligns and uses the mono face, for counts and dates. */
  numeric?: boolean;
}
export declare function Th({
  numeric,
  className,
  ...rest
}: ThProps): import("react").JSX.Element;
export interface TdProps extends ComponentPropsWithoutRef<"td"> {
  numeric?: boolean;
}
export declare function Td({
  numeric,
  className,
  ...rest
}: TdProps): import("react").JSX.Element;
