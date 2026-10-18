import { cell, type Section } from "./gallery-types";

export const overlays: Section[] = [
  {
    id: "dialog",
    title: "Dialog",
    note: "The largest surface: xl radius, lg shadow, header and footer at 12px vertical, body at 16px.",
    rows: [
      {
        title: "Surface",
        cells: [
          cell(
            "with footer",
            '<div class="fox-dialog" role="dialog" aria-modal="true" aria-labelledby="g-dialog-title"><div class="fox-dialog-header"><h2 class="fox-dialog-title" id="g-dialog-title">Rename session</h2></div><div class="fox-dialog-body">A short explanation of what the change does.</div><div class="fox-dialog-footer"><button class="fox-button">Cancel</button><button class="fox-button" data-variant="solid">Save</button></div></div>',
            true,
          ),
        ],
      },
      {
        title: "Backdrop",
        cells: [
          cell(
            "scrim",
            '<div style="position: relative; height: 120px; overflow: hidden; border-radius: var(--fox-radius-lg)"><div class="fox-dialog-backdrop" style="position: absolute"></div></div>',
            true,
          ),
        ],
      },
    ],
  },
  {
    id: "tooltip",
    title: "Tooltip",
    note: "The one overlay that keeps the sm radius: a single line of text reads as a hint, not as a bubble.",
    rows: [
      {
        title: "Surface",
        cells: [
          cell("default", '<div class="fox-tooltip">Load 12 more cards</div>'),
        ],
      },
    ],
  },
  {
    id: "popover",
    title: "Popover",
    note: "A floating surface: lg radius, md shadow, default border, 16px padding.",
    rows: [
      {
        title: "Surface",
        cells: [
          cell(
            "title and description",
            '<div class="fox-popover" style="width: var(--fox-measure-popover)"><div class="fox-popover-title">Session tokens</div><div class="fox-popover-description">The context window is 78% full.</div></div>',
            true,
          ),
        ],
      },
    ],
  },
  {
    id: "menu",
    title: "Menu",
    note: "Items take the sm control height and the sm radius; highlighted and focused items share one background plus the amber ring.",
    rows: [
      {
        title: "Surface",
        cells: [
          cell(
            "items, label, separator",
            '<div class="fox-menu"><div class="fox-menu-label">Ticket</div><button class="fox-menu-item" type="button">Open</button><button class="fox-menu-item" data-highlighted type="button">Rename</button><button class="fox-menu-item" type="button">Duplicate</button><div class="fox-menu-separator"></div><button class="fox-menu-item" data-tone="danger" type="button">Delete</button><button class="fox-menu-item" data-disabled type="button">Archive</button></div>',
            true,
          ),
        ],
      },
    ],
  },
  {
    id: "tabs",
    title: "Tabs",
    note: "The active tab is the accent underline; the ring sits inside the tab so it does not cross the list's border.",
    rows: [
      {
        title: "States",
        cells: [
          cell(
            "list and panel",
            '<div><div class="fox-tabs-list"><button class="fox-tab" data-active type="button">Board</button><button class="fox-tab" type="button">Archived</button><button class="fox-tab" type="button">Stats</button><button class="fox-tab" data-disabled type="button" disabled>Logs</button></div><div class="fox-tabs-panel">Panel content</div></div>',
          ),
          cell(
            "focus",
            '<div class="fox-tabs-list"><button class="fox-tab" type="button">Board</button><button class="fox-tab" data-active type="button">Archived</button><button class="fox-tab" type="button">Stats</button></div>',
          ),
        ],
      },
    ],
  },
  {
    id: "table",
    title: "Table",
    note: "One header rule and one row rule, both subtle; numbers right-aligned in mono.",
    rows: [
      {
        title: "Variants",
        cells: [
          cell(
            "default",
            '<table class="fox-table"><thead><tr><th>Ticket</th><th>Column</th><th class="fox-num">Points</th></tr></thead><tbody><tr><td>#2758</td><td>In Progress</td><td class="fox-num">3</td></tr><tr><td>#2757</td><td>Done</td><td class="fox-num">5</td></tr><tr><td>#2756</td><td>Ready</td><td class="fox-num">1</td></tr></tbody></table>',
            true,
          ),
          cell(
            "zebra",
            '<table class="fox-table" data-zebra><thead><tr><th>Ticket</th><th>Column</th></tr></thead><tbody><tr><td>#2755</td><td>Done</td></tr><tr><td>#2754</td><td>Done</td></tr><tr><td>#2753</td><td>Review</td></tr></tbody></table>',
            true,
          ),
          cell(
            "wrapped",
            '<div class="fox-table-wrap"><table class="fox-table"><thead><tr><th>Ticket</th><th>Owner</th><th>Updated</th></tr></thead><tbody><tr><td>#2752</td><td>fox</td><td>10:55</td></tr></tbody></table></div>',
            true,
          ),
        ],
      },
    ],
  },
  {
    id: "toast",
    title: "Toast",
    note: "A 3px accent bar on the left edge, lg radius, md shadow; the tone only changes the bar.",
    rows: [
      {
        title: "Tones",
        cells: [
          cell(
            "default",
            '<div class="fox-toast"><div><div class="fox-toast-title">Scan finished</div><div class="fox-toast-description">35 new articles.</div></div><button class="fox-toast-close" type="button" aria-label="Dismiss">×</button></div>',
            true,
          ),
          cell(
            "success",
            '<div class="fox-toast" data-tone="success"><div><div class="fox-toast-title">Saved</div><div class="fox-toast-description">The card is on the board.</div></div><button class="fox-toast-close" type="button" aria-label="Dismiss">×</button></div>',
            true,
          ),
          cell(
            "danger",
            '<div class="fox-toast" data-tone="danger"><div><div class="fox-toast-title">Scan failed</div><div class="fox-toast-description">The feed returned 503.</div></div><button class="fox-toast-close" type="button" aria-label="Dismiss">×</button></div>',
            true,
          ),
        ],
      },
    ],
  },
  {
    id: "badge",
    title: "Badge",
    note: "Pills at xs size. The tone sets fill and text together; outline keeps the fill transparent.",
    rows: [
      {
        title: "Tones",
        cells: [
          cell("neutral", '<span class="fox-badge">idle</span>'),
          cell(
            "accent",
            '<span class="fox-badge" data-tone="accent">active</span>',
          ),
          cell("info", '<span class="fox-badge" data-tone="info">info</span>'),
          cell(
            "queued",
            '<span class="fox-badge" data-tone="queued">ready</span>',
          ),
          cell(
            "success",
            '<span class="fox-badge" data-tone="success">done</span>',
            true,
          ),
          cell(
            "warning",
            '<span class="fox-badge" data-tone="warning">review</span>',
          ),
          cell(
            "danger",
            '<span class="fox-badge" data-tone="danger">failed</span>',
          ),
        ],
      },
      {
        title: "Shapes",
        cells: [
          cell(
            "outline",
            '<span class="fox-badge" data-tone="accent" data-outline>active</span>',
          ),
          cell("mono", '<span class="fox-badge" data-mono>#2758</span>'),
          cell(
            "with a dot",
            '<span class="fox-badge"><span class="fox-dot" data-tone="success"></span>running</span>',
          ),
        ],
      },
    ],
  },
  {
    id: "card",
    title: "Card",
    note: "Surfaces stay flat; elevated lifts by one shadow step, accent uses the accent border token.",
    rows: [
      {
        title: "Variants",
        cells: [
          cell(
            "default",
            '<div class="fox-card" style="padding: var(--fox-space-4)">A plain card.</div>',
          ),
          cell(
            "elevated",
            '<div class="fox-card" data-elevated style="padding: var(--fox-space-4)">Lifted by shadow-sm.</div>',
          ),
          cell(
            "accent",
            '<div class="fox-card" data-accent style="padding: var(--fox-space-4)">Marked as active.</div>',
          ),
          cell(
            "header, body, footer",
            '<div class="fox-card"><div class="fox-card-header"><span class="fox-card-title">Session</span><span class="fox-spacer"></span><span class="fox-badge" data-tone="success">live</span></div><div class="fox-card-body">Body text at 13px.</div><div class="fox-card-footer"><button class="fox-button" data-size="sm">Close</button></div></div>',
            true,
          ),
          cell(
            "padding sm",
            '<div class="fox-card" data-padding="sm"><div class="fox-card-body">Two steps tighter.</div></div>',
          ),
        ],
      },
    ],
  },
  {
    id: "layout",
    title: "Layout and type helpers",
    note: "Stack, row and grid carry the gap; the type helpers are the only place a label size is set outside a component.",
    rows: [
      {
        title: "Surfaces",
        cells: [
          cell(
            "panel",
            '<div class="fox-panel" style="padding: var(--fox-space-4)">Panel</div>',
          ),
          cell(
            "surface",
            '<div class="fox-surface" style="padding: var(--fox-space-4)">Surface</div>',
          ),
          cell(
            "inset",
            '<div class="fox-inset" style="padding: var(--fox-space-4)">Inset</div>',
          ),
        ],
      },
      {
        title: "Text",
        cells: [
          cell("eyebrow", '<span class="fox-eyebrow">In progress</span>'),
          cell("muted", '<span class="fox-muted">Muted body text</span>'),
          cell("mono", '<span class="fox-mono">--fox-space-4</span>'),
          cell("accent", '<span class="fox-accent">Accent text</span>'),
          cell("divider", '<hr class="fox-divider" style="width: 120px" />'),
        ],
      },
      {
        title: "Dots",
        cells: [
          cell("neutral", '<span class="fox-dot"></span>'),
          cell("accent", '<span class="fox-dot" data-tone="accent"></span>'),
          cell("success", '<span class="fox-dot" data-tone="success"></span>'),
          cell("warning", '<span class="fox-dot" data-tone="warning"></span>'),
          cell("danger", '<span class="fox-dot" data-tone="danger"></span>'),
        ],
      },
      {
        title: "Stack and row",
        cells: [
          cell(
            "stack",
            '<div class="fox-stack" style="width: 100%"><span class="fox-badge">one</span><span class="fox-badge">two</span><span class="fox-badge">three</span></div>',
            true,
          ),
          cell(
            "row",
            '<div class="fox-row"><span class="fox-badge">one</span><span class="fox-badge">two</span><span class="fox-badge">three</span></div>',
            true,
          ),
        ],
      },
    ],
  },
  {
    id: "type",
    title: "Type scale",
    note: "Six sizes, four weights, two leadings. Every size on this page is one of them.",
    rows: [
      {
        title: "Sizes",
        cells: [
          cell(
            "2xl / xl / lg",
            '<div class="fox-stack" style="gap: var(--fox-space-1)"><span style="font-size: var(--fox-text-2xl); font-weight: var(--fox-weight-semibold); line-height: var(--fox-leading-tight); color: var(--fox-color-text-primary)">32 Heading one</span><span style="font-size: var(--fox-text-xl); font-weight: var(--fox-weight-semibold); line-height: var(--fox-leading-tight); color: var(--fox-color-text-primary)">24 Heading two</span><span style="font-size: var(--fox-text-lg); font-weight: var(--fox-weight-semibold); color: var(--fox-color-text-primary)">18 Heading three</span></div>',
            true,
          ),
          cell(
            "base / sm / xs",
            '<div class="fox-stack" style="gap: var(--fox-space-1)"><span style="font-size: var(--fox-text-base); color: var(--fox-color-text-secondary)">15 Body text</span><span style="font-size: var(--fox-text-sm); color: var(--fox-color-text-secondary)">13 Control and table text</span><span style="font-size: var(--fox-text-xs); color: var(--fox-color-text-muted)">11 Micro label and hint</span></div>',
            true,
          ),
        ],
      },
      {
        title: "Weights",
        cells: [
          cell(
            "400 regular",
            '<span style="font-weight: var(--fox-weight-regular)">Body copy</span>',
          ),
          cell(
            "500 medium",
            '<span style="font-weight: var(--fox-weight-medium)">Control label</span>',
          ),
          cell(
            "600 semibold",
            '<span style="font-weight: var(--fox-weight-semibold)">Section title</span>',
          ),
          cell(
            "700 bold",
            '<span style="font-weight: var(--fox-weight-bold)">Emphasis</span>',
          ),
        ],
      },
    ],
  },
];
