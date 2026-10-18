import { cx, parts, table } from "@schlaufuchs/tokens/classes";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TableProps extends ComponentPropsWithoutRef<"table"> {
  /** Alternating row background. */
  zebra?: boolean;
  /** Scrolls horizontally instead of squeezing the columns. */
  scroll?: boolean;
  caption?: ReactNode;
}

/** A table with the design system's row and header styles. */
export function Table({
  zebra,
  scroll = true,
  caption,
  className,
  children,
  ...rest
}: TableProps) {
  const recipe = table({ zebra });
  const element = (
    <table {...rest} {...recipe} className={cx(recipe.className, className)}>
      {caption ? <caption>{caption}</caption> : null}
      {children}
    </table>
  );
  return scroll ? <div className={parts.tableWrap}>{element}</div> : element;
}

export function THead(props: ComponentPropsWithoutRef<"thead">) {
  return <thead {...props} />;
}

export function TBody(props: ComponentPropsWithoutRef<"tbody">) {
  return <tbody {...props} />;
}

export function Tr(props: ComponentPropsWithoutRef<"tr">) {
  return <tr {...props} />;
}

export interface ThProps extends ComponentPropsWithoutRef<"th"> {
  /** Right-aligns and uses the mono face, for counts and dates. */
  numeric?: boolean;
}

export function Th({ numeric, className, ...rest }: ThProps) {
  return (
    <th
      {...rest}
      scope={rest.scope ?? "col"}
      className={cx(numeric && parts.num, className)}
    />
  );
}

export interface TdProps extends ComponentPropsWithoutRef<"td"> {
  numeric?: boolean;
}

export function Td({ numeric, className, ...rest }: TdProps) {
  return <td {...rest} className={cx(numeric && parts.num, className)} />;
}
