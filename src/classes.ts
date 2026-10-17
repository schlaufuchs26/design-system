/**
 * Typed class and attribute maps for the component layer. Each recipe returns
 * a flat object: `className` plus the `data-*` attributes the CSS reads, so
 * React (`<button {...button({ variant: "solid" })} />`) and Vue
 * (`<button v-bind="button({ variant: 'solid' })" />`) share one call site.
 */

export type ButtonVariant = "solid" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";
export type Tone =
  | "neutral"
  | "accent"
  | "info"
  | "queued"
  | "success"
  | "warning"
  | "danger";
export type CardPadding = "none" | "sm" | "md";

/** `className` plus `data-*` attributes; every value is a string. */
export type Recipe = { className: string } & {
  [key: `data-${string}`]: string;
} & {
  "aria-invalid"?: string;
};

function recipe(
  className: string,
  attrs: Record<string, string | undefined> = {},
): Recipe {
  const out: Record<string, string> = { className };
  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined) continue;
    // ARIA attributes are not data attributes; keep them verbatim.
    out[key.startsWith("aria-") ? key : `data-${key}`] = value;
  }
  return out as Recipe;
}

export interface ButtonOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function button(options: ButtonOptions = {}): Recipe {
  return recipe("fox-button", { variant: options.variant, size: options.size });
}

export interface BadgeOptions {
  tone?: Tone;
  outline?: boolean;
  mono?: boolean;
}

export function badge(options: BadgeOptions = {}): Recipe {
  return recipe("fox-badge", {
    tone: options.tone,
    outline: options.outline ? "" : undefined,
    mono: options.mono ? "" : undefined,
  });
}

export interface CardOptions {
  padding?: CardPadding;
  elevated?: boolean;
  accent?: boolean;
}

export function card(options: CardOptions = {}): Recipe {
  return recipe("fox-card", {
    padding: options.padding,
    elevated: options.elevated ? "" : undefined,
    accent: options.accent ? "" : undefined,
  });
}

export function dot(tone?: Tone): Recipe {
  return recipe("fox-dot", { tone });
}

export function field(): Recipe {
  return recipe("fox-field");
}

export function label(): Recipe {
  return recipe("fox-label");
}

export function hint(): Recipe {
  return recipe("fox-hint");
}

export function input(invalid = false): Recipe {
  return recipe("fox-input", { "aria-invalid": invalid ? "true" : undefined });
}

export function textarea(invalid = false): Recipe {
  return recipe("fox-textarea", {
    "aria-invalid": invalid ? "true" : undefined,
  });
}

export function select(): Recipe {
  return recipe("fox-select");
}

export interface TableOptions {
  zebra?: boolean;
}

export function table(options: TableOptions = {}): Recipe {
  return recipe("fox-table", { zebra: options.zebra ? "" : undefined });
}

export function dialog(): Recipe {
  return recipe("fox-dialog");
}

/** Join class names, dropping falsy parts. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
