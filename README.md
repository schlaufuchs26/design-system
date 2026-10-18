# Schlaufuchs design system

One design system for the fox's frontends: DTCG tokens and plain CSS in
`@schlaufuchs/tokens`, typed React components in `@schlaufuchs/react`, one
static docs site. No Tailwind, no runtime CSS-in-JS, no build step for a plain
HTML page.

Docs: <https://schlaufuchs26.github.io/design-system/>

## Layout

```
packages/tokens/   @schlaufuchs/tokens   tokens, generated CSS, typed class maps
packages/react/    @schlaufuchs/react    React components on Base UI primitives
docs/                                    the Pages site (tokens page + components/)
scripts/                                 docs generation
```

Bun workspaces. `bun run checks` builds both packages, type-checks, lints and
tests everything; CI runs the same command.

`docs/` is a folder, not a package: it has no dependencies and the Pages
workflow publishes it after `bun run build` regenerates the CSS and the
component pages.

## Use it

```html
<link rel="stylesheet" href="index.css" />
<button class="fox-button" data-variant="solid">Move</button>
<span class="fox-badge" data-tone="warning">review</span>
```

```ts
import { button, tokens, cssVar } from "@schlaufuchs/tokens";
// React: <button {...button({ variant: "solid" })}>Move</button>
const amber = tokens.color.accent.default; // "#f2b134"
const bg = cssVar("color.bg.deep"); // "--fox-color-bg-deep"
```

```tsx
import "@schlaufuchs/tokens/index.css";
import { Button, Dialog, TextField } from "@schlaufuchs/react";

<Dialog trigger={<Button variant="solid">Rename</Button>} title="Rename">
  <TextField label="Name" />
</Dialog>;
```

`@schlaufuchs/react` ships TypeScript sources (Bun and every bundler compile
them), so a consumer's bundler tree-shakes to what it imports: the dashboard's
subset (Button, Badge, Card, Table, Stack) is 3.3 kB minified, 1.2 kB gzipped.

## Tokens

`packages/tokens/tokens/fox.tokens.json` is the single source, in the
[DTCG 2025.10](https://www.designtokens.org/) format. `bun run build` writes:

| File | What |
|------|------|
| `dist/tokens.css` | `:root` custom properties, plus `[data-theme="light"]` and `[data-density="compact"]` overrides |
| `dist/tokens.ts` | `tokens` (`as const`), `TokenName` union, `cssVar()` |
| `dist/theme.tailwind.css` | optional `@theme` layer for projects that use Tailwind v4 |
| `dist/tokens.json` | flat `path -> { value, type }` map for tooling |
| `dist/index.css` | everything a consumer needs, in one file |

Two groups are selector overrides rather than `:root` values: `color-light`
(same variable names, emitted under `[data-theme="light"]`) and
`density-compact` (`[data-density="compact"]`).

## Components

Plain classes plus data attributes, so the same markup works everywhere:

| Component | Markup |
|-----------|--------|
| Button | `.fox-button` + `data-variant="solid\|outline\|ghost\|danger"`, `data-size="sm\|md\|lg\|icon"` |
| Card | `.fox-card` + `data-elevated`, `data-accent`, `data-padding="none\|sm"`; `.fox-card-header/-title/-body/-footer` |
| Badge | `.fox-badge` + `data-tone`, `data-outline`, `data-mono` |
| Input | `.fox-field`, `.fox-label`, `.fox-input`/`.fox-textarea`/`.fox-select`, `.fox-hint` |
| Table | `.fox-table` + `data-zebra`, `.fox-table-wrap`, `.fox-num` |
| Dialog | native `<dialog class="fox-dialog">` or the React Dialog; `.fox-dialog-header/-title/-body/-footer` |
| Menu, Popover, Tooltip, Tabs, Toast | `.fox-menu*`, `.fox-popover*`, `.fox-tooltip`, `.fox-tabs*`, `.fox-toast*` |
| Choice controls | `.fox-checkbox`, `.fox-radio`, `.fox-switch`, `.fox-choice`, `.fox-choice-group` |
| Status dot | `.fox-dot` + `data-tone` |

Layout and type helpers: `.fox-stack`, `.fox-row`, `.fox-grid`, `.fox-spacer`,
`.fox-panel`, `.fox-surface`, `.fox-inset`, `.fox-eyebrow`, `.fox-muted`,
`.fox-mono`, `.fox-num`, `.fox-divider`, `.fox-sr-only`.

`packages/tokens/src/classes.ts` wraps each component in a typed function that
returns `className` plus the data attributes; a wrong variant or tone is a
`tsc` error. `parts` holds the class names for parts without variants.

The React package exposes 18 components: Button, IconButton, TextField,
TextArea, Select, Checkbox, Switch, Radio group, Dialog, Tooltip, Popover,
Menu, Tabs, Table, Toast, Badge, Card, and Stack/Row/Grid. Props, variants,
accessibility notes and keyboard contracts are on the published Pages site,
one page per component. The [gallery](https://schlaufuchs26.github.io/design-system/gallery.html)
shows every component in every variant, size and state, dark and light.

## The rules

The set was designed on 2026-10-18 in one pass, so the eighteen components
look like one system rather than eighteen decisions. Each rule below is
checkable: `packages/tokens/tests/rules.test.ts` fails when the CSS breaks
one, and the gallery is the page a change is judged against.

### Spacing

One 4-based scale, no ad-hoc value: `space.1` 4, `2` 8, `3` 12, `4` 16,
`5` 20, `6` 24, `8` 32, `10` 40, `12` 48, `16` 64. Component padding is one
of those steps, and a test rejects any pixel literal above 4px in the
component CSS (1-4px stay legal for borders and hairlines).

| Where | Padding | Gap |
|-------|---------|-----|
| Control inline (sm / md / lg) | 8 / 12 / 16 | 8 |
| Card, dialog, popover, toast | 16 | 8 |
| Card and dialog header/footer | 12 vertical, 16 horizontal | 8 |
| Menu and select popup | 4 around the list, 8 inside an item | 8 |
| Badge | 8 inline | 4 |
| Table cell | 8 vertical, 12 horizontal | — |

Adapted from the [Material 3 spacing
overview](https://m3.material.io/styles/spacing/overview) (4dp/8dp grid) and
the [Primer spacing
scale](https://primer.style/foundations/primitives/spacing) (4px base,
4/8/12/16/24/32).

### Type

Six sizes and four weights; every size on the gallery is one of them.

| Token | Size | Where |
|-------|------|-------|
| `text.2xl` | 32px | page title (h1) |
| `text.xl` | 24px | section title (h2), docs page title |
| `text.lg` | 18px | dialog title, h3 |
| `text.base` | 15px | body, lg button |
| `text.sm` | 13px | control and table text, card title, labels |
| `text.xs` | 11px | badge, hint, eyebrow, table header, tooltip |

Weights: 400 body, 500 control labels and buttons, 600 titles and section
headings, 700 reserved for emphasis inside prose. Leadings: `tight` 1.2 for
headings and single-line controls, `normal` 1.55 for body, `loose` 1.7 for
long text. Uppercase micro labels (eyebrow, menu label, table header) share
one tracking, 0.06em.

Adapted from the [Material 3 type
scale](https://m3.material.io/styles/typography/type-scale-tokens) (11/14/16/22
label, body and title steps) and the [Radix Themes type
scale](https://www.radix-ui.com/themes/docs/theme/typography).

### Size steps

| Step | Height | Font |
|------|--------|------|
| `sm` | 28px (`control.sm`) | 11px |
| `md` | 36px (`control.md`) | 13px |
| `lg` | 44px (`control.lg`) | 15px |
| icon | 36×36, the md square | 13px |

Buttons, inputs, native selects, the Base UI select trigger, tabs and menu
items all take one of these heights, so a form row lines up. Steps are 8px
apart, and `[data-density="compact"]` lowers all three by 4px. Checkbox and
radio are 18px (`control.check`), the switch is a 36×20 track
(`control.switch`, `control.switch-height`) with a 14px thumb.

Adapted from [Radix Themes sizes
1-3](https://www.radix-ui.com/themes/docs/theme/spacing) (24/32/40) and
[Primer control
heights](https://primer.style/foundations/primitives/size) (28/32/40); the
8px step is ours so the heights sit on the spacing scale.

### Radii

| Token | Value | Where |
|-------|-------|-------|
| `radius.sm` | 4px | menu item, select item, checkbox, kbd, tooltip |
| `radius.md` | 6px | every control: button, input, select, table wrapper |
| `radius.lg` | 10px | surfaces: card, panel, popover, menu, select popup, toast |
| `radius.xl` | 14px | dialog only |
| `radius.pill` | 999px | badge, dot, switch, scrollbar |

The tooltip is the one deliberate exception: it keeps 4px because a single
line of text should read as a hint, not as a bubble. Adapted from [Material 3
shape tokens](https://m3.material.io/styles/shape/shape-scale-tokens)
(4/8/12/16) and [Primer
borders](https://primer.style/foundations/primitives/border) (6px controls,
12px overlays).

### Borders and elevation

| Token | Use |
|-------|-----|
| `color.border.subtle` | a divider inside a surface: card header and footer, table cells and header, tabs list, menu separator |
| `color.border.default` | an outer edge or a control: dialog, popover, menu, select, toast, input, outline button |
| `color.border.strong` | an unchecked control that must read as editable: checkbox, radio, switch track |
| `color.border.accent` | an accent-tinted edge, e.g. a card marked active |

Surfaces are flat. `shadow.sm` lifts a raised card, `shadow.md` floats a
popover, menu, select popup or toast, `shadow.lg` is the dialog. Nothing else
casts a shadow. Adapted from the [Material 3 elevation
levels](https://m3.material.io/styles/elevation/tokens) and the [Primer shadow
scale](https://primer.style/foundations/primitives/color#shadows).

### Focus

One ring for the whole system: `outline: 2px solid var(--fox-color-accent-default)`
with `outline-offset: 2px`, declared once in `base.css`. It never changes the
element's radius. Components that sit on a border (tabs, menu and select
items) pull the same ring inside with `outline-offset: -2px`; they never draw
a second treatment, and no rule sets `outline: none` on a focusable element.
The popup container of a menu, select or popover takes focus without a ring,
because the highlighted item inside it carries the ring.

Adapted from the [Fluent 2 focus
rectangle](https://fluent2.microsoft.design/components/web/react/core/focus)
(2px stroke with a visible gap) and [Radix Themes
focus](https://www.radix-ui.com/themes/docs/theme/visual-style) (one accent
ring, offset outside).

### Motion

Two durations and one easing: `motion.fast` 120ms for colour, background and
border; `motion.base` 180ms for movement (the switch thumb). Easing is
`ease.out` for everything. Nothing else animates, and
`prefers-reduced-motion` collapses both to 0.01ms. Adapted from the [Material
3 motion
durations](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs)
(short 50-200ms) and [Radix Themes
animation](https://www.radix-ui.com/themes/docs/theme/animation) (150ms).

### States

Every interactive component has the same five states: rest, hover, active
(pressed), focus-visible and disabled. Hover and press are **state layers**:
`color.state.hover` (8% white in the dark theme, 6% ink in the light one) and
`color.state.active` (16% / 12%) paint over whatever surface the control sits
on, so the same rule reads on a panel, a card and a floating menu. Filled
variants instead darken on press (`accent.press`) or brighten then dim
(`filter` on danger). Disabled is `opacity: 0.45` and `cursor: not-allowed`
everywhere. Invalid is `aria-invalid="true"` plus the danger border and the
danger hint, on inputs, textareas and selects alike.

Adapted from the [Material 3 state
layers](https://m3.material.io/foundations/interaction/states/state-layers)
(on-surface at 8% hover, 12% press) and [Primer's interaction
states](https://primer.style/foundations/primitives/color#interaction-states).

## Primitive layer: Base UI

Decided 2026-10-18, measured the same day. The candidates:

| Library | State | Why not (or why) |
|---------|-------|------------------|
| **Base UI** `@base-ui/react` | v1.0 on 2025-12-11, v1.9.0 on 2026-10-18; shadcn/ui's default primitive layer since July 2026; 35 components, backed by MUI ([InfoQ, 2026-02-06](https://www.infoq.com/news/2026/02/baseui-v1-accessible/); [Untitled UI, 2026-09-17](https://www.untitledui.com/blog/base-ui-vs-react-aria)) | **Chosen**: unstyled, no runtime CSS-in-JS, accepts our `className` and data attributes, small tree-shaken cost |
| Radix Primitives | maintained by WorkOS; update velocity slowed for complex components such as Combobox ([GreatFrontEnd, 2026-05-05](https://www.greatfrontend.com/blog/top-headless-ui-libraries-for-react-in-2026)) | Its own team rewrote the library as Base UI; a new build should not start on the older one |
| React Aria Components | v1.22.1; strongest i18n and the widest component set ([PkgPulse, 2026-03-08](https://www.pkgpulse.com/guides/react-aria-vs-radix-primitives-2026)) | We need no date picker or calendar, and its bundle is the largest of the three ([react-spectrum discussion](https://github.com/adobe/react-spectrum/discussions/5636) puts `react-aria-components` at 165 kB) |

Measured with Bun 1.4.2 on 2026-10-18: the full React package barrel is
268,053 B minified (88,010 B gzipped), but a consumer pays only for what it
imports. The dashboard's subset bundles to 3,263 B minified (1,213 B gzipped).

Our styling layer on top stays plain CSS plus typed class maps: Base UI
components get a `className` from the tokens package, and no colour literal
lives outside the token file (a test enforces both).

## Dashboard consumption

The dashboard vendors the packages instead of depending on a registry:

```sh
bun run build                      # here
dashboard/scripts/sync-design-system.sh
```

The sync script copies `packages/tokens/dist/*.css` and the sources of both
packages into `dashboard/vendor/design-system/`, and the dashboard's
`tsconfig.json` maps `@schlaufuchs/react` and `@schlaufuchs/tokens/classes` to
those files. That keeps the dashboard build offline and hermetic, and the
vendored copy is type-checked as source. See `wiki/entries/design-system.md`
for the direction.

## Develop

```sh
bun install
bun run build     # tokens, type-check, docs pages
bun run test      # token compilation, contrast (WCAG AA), class maps, components
bun run tsc
bun run biome
bun run checks    # all of the above
```

`packages/tokens/dist/` and `docs/components/` are committed: they are the
artifacts consumers and the published site read, and committing them keeps a
consumer's build offline. Tests fail when `dist/` drifts from a fresh
generation.
