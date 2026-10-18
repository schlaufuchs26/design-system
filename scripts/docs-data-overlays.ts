import type { ComponentDoc } from "./docs-data";

export const overlays: ComponentDoc[] = [
  {
    slug: "popover",
    title: "Popover",
    lead: "A non-modal panel anchored to a trigger. Use it for details or a small form; it does not trap focus.",
    imports: 'import { PopoverPanel } from "@schlaufuchs/react";',
    demo: `<div class="fox-popover">
  <p class="fox-popover-title">What is this?</p>
  <p class="fox-popover-description">A short explanation.</p>
</div>`,
    props: [
      {
        name: "trigger",
        type: "ReactElement (required)",
        notes: "Anchors the panel.",
      },
      {
        name: "title / description",
        type: "string / ReactNode",
        notes: "Optional heading and lead text.",
      },
      { name: "children", type: "ReactNode", notes: "The panel body." },
      {
        name: "open / defaultOpen",
        type: "boolean",
        notes: "Controlled or uncontrolled visibility.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        notes: "Called when it opens or closes.",
      },
      {
        name: "side",
        type: '"top" | "bottom" | "left" | "right"',
        default: '"bottom"',
        notes: "Preferred side; it flips when there is no room.",
      },
    ],
    accessibility: [
      "The popup is a dialog with the title as its name.",
      "Focus is not trapped; Tab leaves the panel.",
      "Escape and a click outside close it.",
    ],
    keyboard: ["Enter or Space on the trigger opens it.", "Escape closes it."],
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    lead: "A short hint on hover or focus. The wrapper adds role=tooltip and aria-describedby, which Base UI 1.9 leaves to the consumer.",
    imports:
      'import { TooltipHint, TooltipProvider } from "@schlaufuchs/react";',
    demo: `<span class="fox-tooltip">Saves the draft</span>`,
    props: [
      {
        name: "trigger",
        type: "ReactElement (required)",
        notes: "The element the hint describes.",
      },
      {
        name: "content",
        type: "ReactNode (required)",
        notes: "Short text, never interactive content.",
      },
      {
        name: "side",
        type: '"top" | "bottom" | "left" | "right"',
        default: '"top"',
        notes: "Preferred side.",
      },
      {
        name: "open / defaultOpen",
        type: "boolean",
        notes: "Controlled or uncontrolled visibility.",
      },
      {
        name: "TooltipProvider delay",
        type: "number",
        default: "400",
        notes: "Shared delay in ms for grouped tooltips.",
      },
    ],
    accessibility: [
      "The popup carries role=tooltip and the trigger points at it with aria-describedby.",
      "The trigger keeps its own name; a tooltip is not a substitute for a label.",
    ],
    keyboard: ["Focusing the trigger shows the hint; Escape hides it."],
  },
  {
    slug: "menu",
    title: "Menu",
    lead: "A dropdown list of actions on Base UI. Arrow keys move, Enter selects and Escape closes.",
    imports: 'import { MenuButton } from "@schlaufuchs/react";',
    demo: `<div class="fox-menu" role="menu">
  <button class="fox-menu-item" role="menuitem" type="button">Rename</button>
  <div class="fox-menu-separator"></div>
  <button class="fox-menu-item" role="menuitem" type="button" data-tone="danger">Delete</button>
</div>`,
    props: [
      {
        name: "trigger",
        type: "ReactElement (required)",
        notes: "Opens the menu.",
      },
      {
        name: "items",
        type: "readonly MenuEntry[] (required)",
        notes: "label, onSelect, disabled, tone, separatorBefore, hint.",
      },
      {
        name: "label",
        type: "string",
        notes: "A group label above the entries.",
      },
      {
        name: "open / defaultOpen",
        type: "boolean",
        notes: "Controlled or uncontrolled visibility.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        notes: "Called when it opens or closes.",
      },
      {
        name: "side",
        type: "Side",
        default: '"bottom"',
        notes: "Preferred side.",
      },
    ],
    accessibility: [
      "The popup is a menu; entries are menuitems with a highlight state.",
      "A destructive entry sets tone=danger and keeps the same semantics.",
    ],
    keyboard: [
      "ArrowDown/ArrowUp move the highlight; Home/End jump.",
      "Enter or Space selects the highlighted entry.",
      "Escape closes without selecting.",
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    lead: "A tab list and its panels. The roving tab stop follows the arrow keys and only the active panel is in the tab order.",
    imports: 'import { TabsView } from "@schlaufuchs/react";',
    demo: `<div>
  <div class="fox-tabs-list" role="tablist">
    <button class="fox-tab" data-active role="tab" aria-selected="true" type="button">Overview</button>
    <button class="fox-tab" role="tab" aria-selected="false" type="button">Runs</button>
  </div>
  <div class="fox-tabs-panel" role="tabpanel">Overview panel</div>
</div>`,
    props: [
      {
        name: "tabs",
        type: "readonly { value, label, content, disabled? }[] (required)",
        notes: "The tabs and their panels.",
      },
      {
        name: "label",
        type: "string (required)",
        notes: "Names the tab list.",
      },
      {
        name: "value / defaultValue",
        type: "string",
        notes:
          "Controlled or uncontrolled selection; defaults to the first tab.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        notes: "Called when the selection changes.",
      },
    ],
    accessibility: [
      "The list is a tablist and each tab controls its panel with aria-controls.",
      "Panels are labelled by their tab and only the active one is rendered visible.",
    ],
    keyboard: [
      "ArrowLeft/ArrowRight move the roving tab stop.",
      "Home and End jump to the first and last tab.",
      "Enter or Space activates the focused tab.",
    ],
  },
  {
    slug: "table",
    title: "Table",
    lead: "A table with the design system's row styles, an optional scroll wrapper and numeric cells in the mono face.",
    imports:
      'import { Table, THead, TBody, Tr, Th, Td } from "@schlaufuchs/react";',
    demo: `<div class="fox-table-wrap">
  <table class="fox-table" data-zebra>
    <thead><tr><th>Feed</th><th class="fox-num">Unread</th></tr></thead>
    <tbody><tr><td>Blog</td><td class="fox-num">3</td></tr></tbody>
  </table>
</div>`,
    props: [
      { name: "zebra", type: "boolean", notes: "Alternating row background." },
      {
        name: "scroll",
        type: "boolean",
        default: "true",
        notes: "Wraps the table for horizontal scrolling.",
      },
      {
        name: "caption",
        type: "ReactNode",
        notes: "A table caption, announced by screen readers.",
      },
      {
        name: "Th / Td numeric",
        type: "boolean",
        notes: "Right-aligns and uses the mono face.",
      },
    ],
    accessibility: [
      "Header cells are scoped to their column by default.",
      "A caption is the accessible table name; use it when the heading above is not enough.",
    ],
  },
  {
    slug: "toast",
    title: "Toast",
    lead: "A short message after an action, posted from anywhere inside the provider with useToast().",
    imports: 'import { ToastProvider, useToast } from "@schlaufuchs/react";',
    demo: `<div class="fox-toast">
  <div>
    <p class="fox-toast-title">Saved</p>
    <p class="fox-toast-description">The draft is safe</p>
  </div>
  <button class="fox-toast-close" aria-label="Dismiss" type="button">×</button>
</div>`,
    props: [
      {
        name: "ToastProvider children",
        type: "ReactNode (required)",
        notes: "Wraps the app; renders the viewport once.",
      },
      {
        name: "useToast().add",
        type: "(toast: { title, description?, tone? }) => void",
        notes: "Posts a toast.",
      },
      {
        name: "useToast().close",
        type: "(id: string) => void",
        notes: "Dismisses a toast early.",
      },
      {
        name: "tone",
        type: '"accent" | "success" | "danger"',
        default: '"accent"',
        notes: "Colours the left edge.",
      },
    ],
    accessibility: [
      "The viewport announces politely; a danger toast keeps the same live region.",
      "The close button is hidden from the accessibility tree until the toast is expanded by hover or focus.",
    ],
    keyboard: ["Focusing the toast expands it and reveals the close button."],
  },
  {
    slug: "badge",
    title: "Badge",
    lead: "A small status label with a tone from the status palette. Monospace is for counts and IDs.",
    imports: 'import { Badge } from "@schlaufuchs/react";',
    demo: `<span class="fox-badge" data-tone="success">ok</span>
<span class="fox-badge" data-tone="danger" data-outline>error</span>
<span class="fox-badge" data-tone="neutral" data-mono>3</span>`,
    props: [
      {
        name: "tone",
        type: '"neutral" | "accent" | "info" | "queued" | "success" | "warning" | "danger"',
        default: '"neutral"',
        notes: "Background and text from the status tokens.",
      },
      {
        name: "outline",
        type: "boolean",
        notes: "Transparent fill with a current-colour border.",
      },
      {
        name: "mono",
        type: "boolean",
        notes: "Mono face and tabular numbers.",
      },
    ],
    accessibility: [
      "A badge is text, not a control; the tone never carries meaning alone, the label says it.",
    ],
  },
  {
    slug: "card",
    title: "Card",
    lead: "A surface with a header, body and footer. The header and footer take actions; the body holds content.",
    imports:
      'import { Card, CardHeader, CardBody, CardFooter } from "@schlaufuchs/react";',
    demo: `<section class="fox-card" data-elevated>
  <header class="fox-card-header"><span class="fox-card-title">Feeds</span></header>
  <div class="fox-card-body">4 feeds, 34 unread</div>
  <footer class="fox-card-footer"><button class="fox-button" data-variant="outline">Scan</button></footer>
</section>`,
    props: [
      {
        name: "elevated",
        type: "boolean",
        notes: "Raised background and a small shadow.",
      },
      { name: "accent", type: "boolean", notes: "Accent-tinted border." },
      {
        name: "padding",
        type: '"none" | "sm" | "md"',
        notes: "Body padding; none lets a table run edge to edge.",
      },
      {
        name: "CardHeader title",
        type: "ReactNode",
        notes: "Rendered in the card title style.",
      },
    ],
    accessibility: [
      "Sections and headings stay the consumer's job; use a real heading inside the header when the card is a landmark.",
    ],
  },
  {
    slug: "layout",
    title: "Stack, Row and Grid",
    lead: "The three layout helpers. Gaps are token steps (1=4px … 16=64px), never raw pixel values.",
    imports: 'import { Stack, Row, Grid } from "@schlaufuchs/react";',
    demo: `<div class="fox-stack" style="gap: var(--fox-space-4)">
  <div class="fox-row" style="gap: var(--fox-space-2)">a</div>
  <div class="fox-grid" style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))">b</div>
</div>`,
    props: [
      {
        name: "Stack gap",
        type: "1|2|3|4|5|6|8|10|12|16",
        default: "3",
        notes: "Vertical gap.",
      },
      {
        name: "Row gap",
        type: "1|2|3|4|5|6|8|10|12|16",
        default: "2",
        notes: "Horizontal gap; the row wraps.",
      },
      {
        name: "Grid min",
        type: "number",
        default: "240",
        notes: "Minimum column width in px.",
      },
      {
        name: "Grid gap",
        type: "1|2|3|4|5|6|8|10|12|16",
        default: "4",
        notes: "Gap in both directions.",
      },
    ],
    accessibility: [
      "Layout is visual only; it does not change reading or focus order.",
    ],
  },
];
