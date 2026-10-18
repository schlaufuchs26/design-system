import {
  type BadgeOptions,
  type ButtonSize,
  type ButtonVariant,
  badge,
  button,
  type CardOptions,
  card,
  cx,
  parts,
} from "@schlaufuchs/tokens/classes";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Button with a variant and size from the token scale. */
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "outline",
  size = "md",
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const recipe = button({ variant, size });
  return (
    <button
      type={type}
      {...rest}
      {...recipe}
      className={cx(recipe.className, className)}
    />
  );
}

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "size"> {
  /** Required: an icon-only button has no visible text. */
  "aria-label": string;
  children: ReactNode;
}

export function IconButton({
  className,
  variant = "ghost",
  ...rest
}: IconButtonProps) {
  return (
    <Button variant={variant} size="icon" className={className} {...rest} />
  );
}

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  tone?: BadgeOptions["tone"];
  outline?: boolean;
  mono?: boolean;
}

export function Badge({ tone, outline, mono, className, ...rest }: BadgeProps) {
  const recipe = badge({ tone, outline, mono });
  return (
    <span {...rest} {...recipe} className={cx(recipe.className, className)} />
  );
}

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  padding?: CardOptions["padding"];
  elevated?: boolean;
  accent?: boolean;
}

export function Card({
  padding,
  elevated,
  accent,
  className,
  ...rest
}: CardProps) {
  const recipe = card({ padding, elevated, accent });
  return (
    <div {...rest} {...recipe} className={cx(recipe.className, className)} />
  );
}

export function CardHeader({
  title,
  children,
  className,
  ...rest
}: { title?: ReactNode } & ComponentPropsWithoutRef<"div">) {
  return (
    <div {...rest} className={cx(parts.cardHeader, className)}>
      {title ? <span className={parts.cardTitle}>{title}</span> : null}
      {children}
    </div>
  );
}

export function CardBody({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return <div {...rest} className={cx(parts.cardBody, className)} />;
}

export function CardFooter({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return <div {...rest} className={cx(parts.cardFooter, className)} />;
}
