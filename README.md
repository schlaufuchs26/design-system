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
one page per component.

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
