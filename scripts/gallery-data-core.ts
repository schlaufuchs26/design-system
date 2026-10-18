import { button, cell, type Section } from "./gallery-types";

export const core: Section[] = [
  {
    id: "button",
    title: "Button",
    note: "Four variants, three sizes plus the icon square. Hover, active, focus and disabled are the same state rules for every variant.",
    rows: [
      {
        title: "Variants",
        cells: [
          button("solid", 'data-variant="solid"', "Save"),
          button("outline (default)", "", "Cancel"),
          button("ghost", 'data-variant="ghost"', "Dismiss"),
          button("danger", 'data-variant="danger"', "Delete"),
        ],
      },
      {
        title: "Sizes",
        cells: [
          button("sm", 'data-variant="solid" data-size="sm"', "Small"),
          button("md", 'data-variant="solid"', "Medium"),
          button("lg", 'data-variant="solid" data-size="lg"', "Large"),
          cell(
            "icon",
            '<button class="fox-button" data-variant="outline" data-size="icon" aria-label="Close">×</button>',
          ),
        ],
      },
      {
        title: "States",
        cells: [
          button("default", 'data-variant="solid"'),
          button("hover", 'data-variant="solid"'),
          button("active", 'data-variant="solid"'),
          button("focus", 'data-variant="solid"'),
          button("disabled", 'data-variant="solid" disabled'),
          button("loading", 'data-variant="solid" data-loading', "Saving…"),
        ],
      },
      {
        title: "With an icon",
        cells: [
          cell(
            "icon and label",
            '<button class="fox-button" data-variant="outline"><span aria-hidden="true">＋</span>Add card</button>',
          ),
          cell(
            "ghost icon",
            '<button class="fox-button" data-variant="ghost"><span aria-hidden="true">⟳</span>Refresh</button>',
          ),
        ],
      },
    ],
  },
  {
    id: "icon-button",
    title: "IconButton",
    note: "A square md control with a required accessible name. Ghost is the default so toolbars stay quiet.",
    rows: [
      {
        title: "Variants",
        cells: [
          cell(
            "ghost (default)",
            '<button class="fox-button" data-variant="ghost" data-size="icon" aria-label="Refresh">⟳</button>',
          ),
          cell(
            "outline",
            '<button class="fox-button" data-variant="outline" data-size="icon" aria-label="Add">＋</button>',
          ),
          cell(
            "solid",
            '<button class="fox-button" data-variant="solid" data-size="icon" aria-label="Confirm">✓</button>',
          ),
          cell(
            "danger",
            '<button class="fox-button" data-variant="danger" data-size="icon" aria-label="Delete">✕</button>',
          ),
        ],
      },
      {
        title: "States",
        cells: [
          cell(
            "hover",
            '<button class="fox-button" data-variant="ghost" data-size="icon" aria-label="Refresh">⟳</button>',
          ),
          cell(
            "focus",
            '<button class="fox-button" data-variant="outline" data-size="icon" aria-label="Add">＋</button>',
          ),
          cell(
            "disabled",
            '<button class="fox-button" data-variant="ghost" data-size="icon" aria-label="Refresh" disabled>⟳</button>',
          ),
        ],
      },
    ],
  },
  {
    id: "text-field",
    title: "TextField",
    note: "The label sits one step above the control, the hint and the error below it. Invalid is aria-invalid plus a danger border; focus is the shared ring.",
    rows: [
      {
        title: "States",
        cells: [
          cell(
            "default",
            '<div class="fox-field"><label class="fox-label" for="g-name">Name</label><input class="fox-input" id="g-name" placeholder="Ticket title" /></div>',
          ),
          cell(
            "with hint",
            '<div class="fox-field"><label class="fox-label" for="g-hint">Name</label><input class="fox-input" id="g-hint" aria-describedby="g-hint-text" /><p class="fox-hint" id="g-hint-text">As it appears on the card</p></div>',
          ),
          cell(
            "invalid",
            '<div class="fox-field"><label class="fox-label" data-tone="danger" for="g-invalid">Name</label><input class="fox-input" id="g-invalid" aria-invalid="true" value="" aria-describedby="g-invalid-text" /><p class="fox-hint" data-tone="danger" id="g-invalid-text">Required</p></div>',
          ),
          cell(
            "focus",
            '<div class="fox-field"><label class="fox-label" for="g-focus">Name</label><input class="fox-input" id="g-focus" value="AnomalyGuessr" /></div>',
          ),
          cell(
            "disabled",
            '<div class="fox-field"><label class="fox-label" for="g-disabled">Name</label><input class="fox-input" id="g-disabled" value="Read only" disabled /></div>',
          ),
          cell(
            "search",
            '<div class="fox-field"><label class="fox-label fox-sr-only" for="g-search">Search</label><input class="fox-input" id="g-search" type="search" placeholder="Search tickets…" /></div>',
          ),
        ],
      },
    ],
  },
  {
    id: "text-area",
    title: "TextArea",
    note: "Same field shell as TextField; it grows vertically and never sideways.",
    rows: [
      {
        title: "States",
        cells: [
          cell(
            "default",
            '<div class="fox-field"><label class="fox-label" for="g-notes">Notes</label><textarea class="fox-textarea" id="g-notes" rows="3"></textarea></div>',
          ),
          cell(
            "invalid",
            '<div class="fox-field"><label class="fox-label" data-tone="danger" for="g-notes-bad">Notes</label><textarea class="fox-textarea" id="g-notes-bad" aria-invalid="true" rows="3"></textarea><p class="fox-hint" data-tone="danger">Too long</p></div>',
          ),
          cell(
            "focus",
            '<div class="fox-field"><label class="fox-label" for="g-notes-focus">Notes</label><textarea class="fox-textarea" id="g-notes-focus" rows="3">Two lines\nof notes.</textarea></div>',
          ),
        ],
      },
    ],
  },
  {
    id: "select",
    title: "Select",
    note: "The native select and the Base UI trigger share one control box, so a form row has one height and one border.",
    rows: [
      {
        title: "Native",
        cells: [
          cell(
            "default",
            '<div class="fox-field"><label class="fox-label" for="g-select">Filter</label><select class="fox-select" id="g-select"><option>All runs</option><option>Passed only</option></select></div>',
          ),
          cell(
            "disabled",
            '<div class="fox-field"><label class="fox-label" for="g-select-off">Filter</label><select class="fox-select" id="g-select-off" disabled><option>All runs</option></select></div>',
          ),
        ],
      },
      {
        title: "Base UI trigger",
        cells: [
          cell(
            "chosen",
            '<div class="fox-field"><label class="fox-label" for="g-trigger">Filter</label><button class="fox-select-trigger" id="g-trigger" type="button"><span>All runs</span><span class="fox-select-icon" aria-hidden="true">▾</span></button></div>',
          ),
          cell(
            "placeholder",
            '<div class="fox-field"><label class="fox-label" for="g-trigger-empty">Filter</label><button class="fox-select-trigger" id="g-trigger-empty" type="button" data-placeholder><span>Select…</span><span class="fox-select-icon" aria-hidden="true">▾</span></button></div>',
          ),
          cell(
            "open",
            '<div class="fox-field"><label class="fox-label" for="g-trigger-open">Filter</label><button class="fox-select-trigger" id="g-trigger-open" type="button" data-popup-open><span>All runs</span><span class="fox-select-icon" aria-hidden="true">▾</span></button></div>',
          ),
          cell(
            "popup",
            '<div class="fox-select-popup" style="min-width: 0"><div class="fox-select-item" data-selected>All runs<span aria-hidden="true">✓</span></div><div class="fox-select-item" data-highlighted>Passed only</div><div class="fox-select-item">Failed only</div></div>',
          ),
        ],
      },
    ],
  },
  {
    id: "checkbox",
    title: "Checkbox",
    note: "18px box, sm radius, accent fill when checked. The row label is the click target.",
    rows: [
      {
        title: "States",
        cells: [
          cell(
            "unchecked",
            '<label class="fox-choice"><button class="fox-checkbox" role="checkbox" aria-checked="false" type="button"></button><span>Notify me</span></label>',
          ),
          cell(
            "checked",
            '<label class="fox-choice"><button class="fox-checkbox" data-checked role="checkbox" aria-checked="true" type="button"><span class="fox-checkbox-indicator"></span></button><span>Notify me</span></label>',
          ),
          cell(
            "hover",
            '<label class="fox-choice"><button class="fox-checkbox" role="checkbox" aria-checked="false" type="button"></button><span>Hover me</span></label>',
          ),
          cell(
            "focus",
            '<label class="fox-choice"><button class="fox-checkbox" role="checkbox" aria-checked="false" type="button"></button><span>Focus me</span></label>',
          ),
          cell(
            "disabled",
            '<label class="fox-choice" data-disabled><button class="fox-checkbox" data-disabled role="checkbox" aria-checked="false" type="button" disabled></button><span>Disabled</span></label>',
          ),
          cell(
            "disabled checked",
            '<label class="fox-choice" data-disabled><button class="fox-checkbox" data-checked data-disabled role="checkbox" aria-checked="true" type="button" disabled><span class="fox-checkbox-indicator"></span></button><span>Disabled</span></label>',
          ),
        ],
      },
    ],
  },
  {
    id: "switch",
    title: "Switch",
    note: "36×20 track with a 14px thumb; the thumb moves on motion.base, the track changes colour on motion.fast.",
    rows: [
      {
        title: "States",
        cells: [
          cell(
            "off",
            '<label class="fox-choice"><button class="fox-switch" role="switch" aria-checked="false" type="button"><span class="fox-switch-thumb"></span></button><span>Compact density</span></label>',
          ),
          cell(
            "on",
            '<label class="fox-choice"><button class="fox-switch" data-checked role="switch" aria-checked="true" type="button"><span class="fox-switch-thumb"></span></button><span>Compact density</span></label>',
          ),
          cell(
            "focus",
            '<label class="fox-choice"><button class="fox-switch" role="switch" aria-checked="false" type="button"><span class="fox-switch-thumb"></span></button><span>Focus me</span></label>',
          ),
          cell(
            "disabled",
            '<label class="fox-choice" data-disabled><button class="fox-switch" data-disabled role="switch" aria-checked="false" type="button" disabled><span class="fox-switch-thumb"></span></button><span>Disabled</span></label>',
          ),
        ],
      },
    ],
  },
  {
    id: "radio-group",
    title: "Radio group",
    note: "A fieldset with a legend, so the question is announced with every option.",
    rows: [
      {
        title: "States",
        cells: [
          cell(
            "selected",
            '<fieldset class="fox-choice-group"><legend class="fox-label">Tone</legend><label class="fox-choice"><button class="fox-radio" data-checked role="radio" aria-checked="true" type="button"><span class="fox-radio-indicator"></span></button><span>Accent</span></label><label class="fox-choice"><button class="fox-radio" role="radio" aria-checked="false" type="button"></button><span>Neutral</span></label></fieldset>',
          ),
          cell(
            "focus",
            '<fieldset class="fox-choice-group"><legend class="fox-label">Tone</legend><label class="fox-choice"><button class="fox-radio" role="radio" aria-checked="false" type="button"></button><span>Accent</span></label><label class="fox-choice"><button class="fox-radio" role="radio" aria-checked="false" type="button"></button><span>Neutral</span></label></fieldset>',
          ),
          cell(
            "disabled",
            '<fieldset class="fox-choice-group" disabled><legend class="fox-label">Tone</legend><label class="fox-choice" data-disabled><button class="fox-radio" data-disabled role="radio" aria-checked="false" type="button" disabled></button><span>Accent</span></label></fieldset>',
          ),
        ],
      },
    ],
  },
];
