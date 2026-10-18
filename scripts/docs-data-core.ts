import type { ComponentDoc } from "./docs-data";

export const core: ComponentDoc[] = [
  {
    slug: "button",
    title: "Button",
    lead: "The main action control. Variants and sizes come from the token scale; the element is a native button, so Enter and Space work without code.",
    imports: 'import { Button } from "@schlaufuchs/react";',
    demo: `<button class="fox-button" data-variant="solid">Save</button>
<button class="fox-button" data-variant="outline">Cancel</button>
<button class="fox-button" data-variant="ghost">Dismiss</button>
<button class="fox-button" data-variant="danger">Delete</button>
<button class="fox-button" data-variant="solid" data-size="sm">Small</button>
<button class="fox-button" data-variant="solid" data-size="lg">Large</button>`,
    props: [
      {
        name: "variant",
        type: '"solid" | "outline" | "ghost" | "danger"',
        default: '"outline"',
        notes: "Colour treatment; solid is the one primary action on a screen.",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "icon"',
        default: '"md"',
        notes: "Height and padding from the space tokens.",
      },
      {
        name: "type",
        type: '"button" | "submit" | "reset"',
        default: '"button"',
        notes: "Defaults to button so a form does not submit by accident.",
      },
      {
        name: "...rest",
        type: "ComponentPropsWithoutRef<'button'>",
        notes: "disabled, onClick, aria-*, form attributes.",
      },
    ],
    accessibility: [
      "Native button element; no role or tabindex is added.",
      "The focus ring is the accent outline; disabled uses opacity and a not-allowed cursor.",
      "An icon-only action uses IconButton with a required aria-label.",
    ],
    keyboard: [
      "Enter or Space activates the button.",
      "Tab moves to and from it.",
    ],
  },
  {
    slug: "icon-button",
    title: "IconButton",
    lead: "A square button for a single glyph. The accessible name is a required prop because there is no visible text.",
    imports: 'import { IconButton } from "@schlaufuchs/react";',
    demo: `<button class="fox-button" data-size="icon" data-variant="ghost" aria-label="Close">×</button>`,
    props: [
      {
        name: "aria-label",
        type: "string (required)",
        notes: "The name screen readers announce; there is no visible text.",
      },
      {
        name: "variant",
        type: '"solid" | "outline" | "ghost" | "danger"',
        default: '"ghost"',
        notes: "Ghost keeps toolbars quiet.",
      },
    ],
    accessibility: [
      "Requires aria-label; a tooltip can repeat the label but never replaces it.",
      "Renders a 34×34 button from the icon size step.",
    ],
    keyboard: ["Enter or Space activates it."],
  },
  {
    slug: "text-field",
    title: "TextField",
    lead: "A labelled input with a hint and an error. The label, hint and error are wired to the input by generated ids.",
    imports: 'import { TextField } from "@schlaufuchs/react";',
    demo: `<div class="fox-field">
  <label class="fox-label" for="demo-name">Name</label>
  <input class="fox-input" id="demo-name" aria-describedby="demo-name-hint" />
  <p class="fox-hint" id="demo-name-hint">As it appears on the card</p>
</div>`,
    props: [
      {
        name: "label",
        type: "string (required)",
        notes: "Rendered as the label.",
      },
      {
        name: "hint",
        type: "ReactNode",
        notes: "Helper text below the input, linked with aria-describedby.",
      },
      {
        name: "error",
        type: "string",
        notes: "Sets aria-invalid and renders a role=alert message.",
      },
      {
        name: "id",
        type: "string",
        notes: "Generated when omitted; pass one to link an external label.",
      },
      {
        name: "...rest",
        type: "input attributes",
        notes: "value, onChange, placeholder, type, disabled.",
      },
    ],
    accessibility: [
      "Every field has a visible label; the placeholder is not a label.",
      "The error text is announced as an alert and the input carries aria-invalid.",
      "Focus uses the accent border and a 3px accent-subtle ring.",
    ],
    keyboard: ["Standard text editing keys; Tab leaves the field."],
  },
  {
    slug: "text-area",
    title: "TextArea",
    lead: "The multi-line sibling of TextField, with the same label, hint and error wiring.",
    imports: 'import { TextArea } from "@schlaufuchs/react";',
    demo: `<div class="fox-field">
  <label class="fox-label" for="demo-notes">Notes</label>
  <textarea class="fox-textarea" id="demo-notes" rows="3"></textarea>
</div>`,
    props: [
      {
        name: "label",
        type: "string (required)",
        notes: "Rendered as the label.",
      },
      { name: "hint", type: "ReactNode", notes: "Helper text, linked by id." },
      {
        name: "error",
        type: "string",
        notes: "Marks the field invalid and renders the message.",
      },
      { name: "rows", type: "number", notes: "Passed to the textarea." },
    ],
    accessibility: [
      "Same label and error contract as TextField.",
      "The control is resizable vertically, never horizontally.",
    ],
    keyboard: ["Standard text editing keys; Enter inserts a newline."],
  },
  {
    slug: "select",
    title: "Select",
    lead: "A single-choice listbox on Base UI. Arrow keys, typeahead and Escape work without custom code.",
    imports: 'import { Select } from "@schlaufuchs/react";',
    demo: `<div class="fox-field">
  <label class="fox-label" for="demo-filter">Filter</label>
  <select class="fox-select" id="demo-filter">
    <option>All runs</option>
    <option>Passed only</option>
  </select>
</div>`,
    props: [
      {
        name: "options",
        type: "readonly { value, label }[] (required)",
        notes: "The items to choose from.",
      },
      { name: "label", type: "string (required)", notes: "Names the listbox." },
      {
        name: "value",
        type: "string",
        notes: "Controlled value; pair with onValueChange.",
      },
      {
        name: "defaultValue",
        type: "string",
        notes: "Uncontrolled initial value.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        notes: "Called on every selection.",
      },
      {
        name: "placeholder",
        type: "string",
        default: '"Select…"',
        notes: "Shown while nothing is chosen.",
      },
      { name: "disabled", type: "boolean", notes: "Blocks opening and focus." },
      { name: "name", type: "string", notes: "Submits the value with a form." },
    ],
    accessibility: [
      "The trigger is a combobox; the popup is a listbox with aria-activedescendant tracking.",
      "The chosen item is marked data-selected and repeats as the trigger's text.",
    ],
    keyboard: [
      "ArrowDown opens the list; ArrowUp/Down move the highlight.",
      "Enter selects, Escape closes without changing the value.",
      "Typing letters jumps to the next matching option.",
    ],
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    lead: "A single on/off choice with its label. The control is a Base UI checkbox with role=checkbox and a hidden input for forms.",
    imports: 'import { CheckboxField } from "@schlaufuchs/react";',
    demo: `<label class="fox-choice">
  <button class="fox-checkbox" data-checked role="checkbox" aria-checked="true" type="button">
    <span class="fox-checkbox-indicator"></span>
  </button>
  <span>Notify me</span>
</label>`,
    props: [
      {
        name: "label",
        type: "ReactNode (required)",
        notes: "The visible label and the accessible name.",
      },
      { name: "checked", type: "boolean", notes: "Controlled state." },
      {
        name: "defaultChecked",
        type: "boolean",
        notes: "Uncontrolled initial state.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        notes: "Called after every change.",
      },
      { name: "disabled", type: "boolean", notes: "Blocks interaction." },
      { name: "name / value", type: "string", notes: "Submitted with a form." },
    ],
    accessibility: [
      "Wrapping label, so clicking the text toggles the box.",
      "Checked state is exposed as aria-checked and as data-checked for styling.",
    ],
    keyboard: [
      "Space toggles the focused box.",
      "Tab moves to the next control.",
    ],
  },
  {
    slug: "switch",
    title: "Switch",
    lead: "An immediate on/off setting, styled as a track and thumb. Use it for a setting that applies at once, not for a form choice.",
    imports: 'import { SwitchField } from "@schlaufuchs/react";',
    demo: `<label class="fox-choice">
  <button class="fox-switch" data-checked role="switch" aria-checked="true" type="button">
    <span class="fox-switch-thumb"></span>
  </button>
  <span>Compact density</span>
</label>`,
    props: [
      {
        name: "label",
        type: "ReactNode (required)",
        notes: "The visible label and the accessible name.",
      },
      {
        name: "checked / defaultChecked",
        type: "boolean",
        notes: "Controlled or uncontrolled state.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        notes: "Called after every change.",
      },
      { name: "disabled", type: "boolean", notes: "Blocks interaction." },
    ],
    accessibility: [
      "role=switch with aria-checked; the thumb is decorative.",
      "The track turns accent when on and keeps a 14px thumb for a visible position.",
    ],
    keyboard: ["Space toggles the switch."],
  },
  {
    slug: "radio-group",
    title: "Radio group",
    lead: "One choice out of a few, in a fieldset with a legend. Arrow keys move the selection.",
    imports: 'import { RadioGroupField } from "@schlaufuchs/react";',
    demo: `<fieldset class="fox-choice-group">
  <legend class="fox-label">Tone</legend>
  <label class="fox-choice">
    <button class="fox-radio" data-checked role="radio" aria-checked="true" type="button">
      <span class="fox-radio-indicator"></span>
    </button>
    <span>Accent</span>
  </label>
  <label class="fox-choice">
    <button class="fox-radio" role="radio" aria-checked="false" type="button">
      <span class="fox-radio-indicator"></span>
    </button>
    <span>Neutral</span>
  </label>
</fieldset>`,
    props: [
      {
        name: "label",
        type: "string (required)",
        notes: "Rendered as the fieldset legend.",
      },
      {
        name: "options",
        type: "readonly { value, label, disabled? }[] (required)",
        notes: "The choices.",
      },
      {
        name: "value / defaultValue",
        type: "string",
        notes: "Controlled or uncontrolled selection.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        notes: "Called on every change.",
      },
      { name: "disabled", type: "boolean", notes: "Disables the whole group." },
    ],
    accessibility: [
      "The group is a fieldset with a legend, so the question is announced with each radio.",
      "Only the selected radio is in the tab order.",
    ],
    keyboard: [
      "Arrow keys move the selection through the group.",
      "Tab leaves the group; Space selects the focused radio.",
    ],
  },
  {
    slug: "dialog",
    title: "Dialog",
    lead: "A modal on Base UI. Focus moves into the popup, Tab stays inside, Escape closes it and focus returns to the trigger.",
    imports: 'import { Dialog } from "@schlaufuchs/react";',
    demo: `<div class="fox-dialog" role="dialog" aria-modal="true" aria-labelledby="demo-dialog-title">
  <div class="fox-dialog-header">
    <h2 class="fox-dialog-title" id="demo-dialog-title">Rename session</h2>
  </div>
  <div class="fox-dialog-body">A short explanation.</div>
  <div class="fox-dialog-footer">
    <button class="fox-button" data-variant="outline">Cancel</button>
    <button class="fox-button" data-variant="solid">Save</button>
  </div>
</div>`,
    props: [
      {
        name: "trigger",
        type: "ReactElement (required)",
        notes: "Gets the trigger props merged in.",
      },
      { name: "title", type: "string (required)", notes: "Names the dialog." },
      {
        name: "description",
        type: "ReactNode",
        notes: "Shown under the title and linked to the dialog.",
      },
      { name: "children", type: "ReactNode", notes: "The body." },
      {
        name: "footer",
        type: "ReactNode",
        notes: "Actions; usually a Cancel and a primary button.",
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
        name: "closeLabel",
        type: "string",
        default: '"Close"',
        notes: "Accessible name of the corner button.",
      },
    ],
    accessibility: [
      "role=dialog with aria-modal, titled by the title element.",
      "The backdrop is a real element, so a click outside closes the dialog.",
      "Focus is trapped while open and returns to the trigger on close.",
    ],
    keyboard: [
      "Escape closes the dialog.",
      "Tab and Shift+Tab cycle inside the popup.",
      "Enter activates the focused button.",
    ],
  },
];
