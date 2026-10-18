import {
  type BadgeOptions,
  type ButtonSize,
  type ButtonVariant,
  type CardOptions,
} from "@schlaufuchs/tokens/classes";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
/** Button with a variant and size from the token scale. */
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
export declare function Button({
  variant,
  size,
  className,
  type,
  ...rest
}: ButtonProps): import("react").JSX.Element;
export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "size"> {
  /** Required: an icon-only button has no visible text. */
  "aria-label": string;
  children: ReactNode;
}
export declare function IconButton({
  className,
  variant,
  ...rest
}: IconButtonProps): import("react").JSX.Element;
export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  tone?: BadgeOptions["tone"];
  outline?: boolean;
  mono?: boolean;
}
export declare function Badge({
  tone,
  outline,
  mono,
  className,
  ...rest
}: BadgeProps): import("react").JSX.Element;
export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  padding?: CardOptions["padding"];
  elevated?: boolean;
  accent?: boolean;
}
export declare function Card({
  padding,
  elevated,
  accent,
  className,
  ...rest
}: CardProps): import("react").JSX.Element;
export declare function CardHeader({
  title,
  children,
  className,
  ...rest
}: {
  title?: ReactNode;
} & ComponentPropsWithoutRef<"div">): import("react").JSX.Element;
export declare function CardBody({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">): import("react").JSX.Element;
export declare function CardFooter({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">): import("react").JSX.Element;
