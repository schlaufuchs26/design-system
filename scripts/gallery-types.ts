/**
 * The gallery's data model plus the two helpers every section uses, so the
 * section lists can live in two files without repeating the shapes.
 */
export interface Cell {
  label: string;
  html: string;
  /** A cell whose component needs two grid columns (tables, overlays). */
  wide?: boolean;
}

export interface Row {
  title: string;
  cells: Cell[];
}

export interface Section {
  id: string;
  title: string;
  note: string;
  rows: Row[];
}

export const cell = (label: string, html: string, wide = false): Cell => ({
  label,
  html,
  ...(wide ? { wide } : {}),
});

export const button = (label: string, attrs: string, text = "Button") =>
  cell(label, `<button class="fox-button" ${attrs}>${text}</button>`);
