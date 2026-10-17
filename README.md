# Schlaufuchs design system

One small design system for the fox's frontends: the dashboard (React), the
game prototypes (Vue) and static pages. Tokens live in one DTCG file; the
output is plain CSS custom properties plus a typed TypeScript module. No
Tailwind, no compiler in the consumer, no build step for a plain HTML page.

Docs: <https://schlaufuchs26.github.io/design-system/>

## Use it

```html
<link rel="stylesheet" href="design-system.css" />
<button class="fox-button" data-variant="solid">Move</button>
<span class="fox-badge" data-tone="warning">review</span>
```

```ts
import { button, tokens, cssVar } from "@schlaufuchs/design-system";
// React: <button {...button({ variant: "solid" })}>Move</button>
// Vue:   <button v-bind="button({ variant: 'solid' })">Move</button>
const amber = tokens.color.accent.default; // "#f2b134"
const bg = cssVar("color.bg.deep"); // "--fox-color-bg-deep"
```

The CSS ships as `dist/index.css` (tokens + base + components), or split as
`dist/tokens.css` and the two source layers.

## Tokens

`tokens/fox.tokens.json` is the single source, in the
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
| Badge | `.fox-badge` + `data-tone="neutral\|accent\|info\|queued\|success\|warning\|danger"`, `data-outline`, `data-mono` |
| Input | `.fox-field`, `.fox-label`, `.fox-input`/`.fox-textarea`/`.fox-select`, `.fox-hint` |
| Table | `.fox-table` + `data-zebra`, `.fox-num` for numeric columns |
| Dialog | native `<dialog class="fox-dialog">` with `.fox-dialog-header/-title/-body/-footer` |
| Status dot | `.fox-dot` + `data-tone` |

Layout and type helpers: `.fox-stack`, `.fox-row`, `.fox-grid`, `.fox-spacer`,
`.fox-panel`, `.fox-surface`, `.fox-inset`, `.fox-eyebrow`, `.fox-muted`,
`.fox-mono`, `.fox-num`, `.fox-divider`, `.fox-sr-only`.

`src/classes.ts` wraps each component in a typed function that returns
`className` plus the data attributes; a wrong variant or tone is a `tsc`
error.

## Develop

```sh
bun install
bun run build     # regenerate dist/ and docs/design-system.css
bun run test      # token compilation, contrast (WCAG AA), class maps
bun run tsc
bun run biome
bun run checks    # all of the above
```

`dist/` is committed: it is the artifact consumers import, and committing it
keeps a consumer's build offline. Tests fail when `dist/` drifts from a fresh
generation.

## Not in scope

No JavaScript components and no headless primitives yet: when the dashboard
needs a combobox or a real focus trap, it uses Base UI (React) or Ark UI (Vue)
and keeps these classes. See `wiki/entries/design-system.md` in the fox repo
for the decision and its sources.
