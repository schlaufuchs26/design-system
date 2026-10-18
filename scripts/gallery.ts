/**
 * The gallery: every component in every variant, size and state on one page,
 * dark and light. build-docs.ts writes it to docs/gallery.html, so the
 * published site always shows what the current CSS does.
 *
 * Each cell carries data-cell="<section>-<row><index>"; the screenshot pass
 * forces the matching pseudo-class on the stage's first element, which is how
 * hover, focus and active get photographed without a second copy of the CSS.
 */
import { core } from "./gallery-data-core";
import { overlays } from "./gallery-data-overlays";
import type { Cell, Section } from "./gallery-types";

export const sections: Section[] = [...core, ...overlays];

const pageStyle = `
    body { padding: 0 0 var(--fox-space-16); }
    .wrap { max-width: 1120px; margin: 0 auto; padding: 0 var(--fox-space-6); }
    .top { display: flex; align-items: center; gap: var(--fox-space-3); padding: var(--fox-space-8) 0 var(--fox-space-6); border-bottom: 1px solid var(--fox-color-border-subtle); margin-bottom: var(--fox-space-6); }
    .top h1 { font-size: var(--fox-text-xl); }
    .top p { color: var(--fox-color-text-muted); font-size: var(--fox-text-sm); }
    nav { display: flex; flex-wrap: wrap; gap: var(--fox-space-2); margin-bottom: var(--fox-space-8); }
    nav a { font-size: var(--fox-text-xs); color: var(--fox-color-text-muted); }
    section { margin-bottom: var(--fox-space-8); scroll-margin-top: var(--fox-space-4); }
    section > h2 { font-size: var(--fox-text-lg); margin-bottom: var(--fox-space-1); }
    section > .note { color: var(--fox-color-text-muted); font-size: var(--fox-text-sm); max-width: 76ch; margin-bottom: var(--fox-space-4); }
    h3.row-title { font-size: var(--fox-text-xs); font-weight: var(--fox-weight-semibold); letter-spacing: 0.06em; text-transform: uppercase; color: var(--fox-color-text-muted); margin-bottom: var(--fox-space-2); }
    .row { margin-bottom: var(--fox-space-4); }
    .cells { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--fox-space-3); }
    .cell.wide { grid-column: span 2; }
    .cell { display: flex; flex-direction: column; gap: var(--fox-space-2); padding: var(--fox-space-3); border: 1px solid var(--fox-color-border-subtle); border-radius: var(--fox-radius-md); background: var(--fox-color-bg-panel); min-width: 0; }
    .cell > figcaption { font-size: var(--fox-text-xs); color: var(--fox-color-text-subtle); }
    .stage { display: flex; align-items: center; flex-wrap: wrap; gap: var(--fox-space-2); min-height: var(--fox-control-lg); }
    .stage > * { max-width: 100%; }
    .light { margin-top: var(--fox-space-4); padding: var(--fox-space-4); border: 1px solid var(--fox-color-border-subtle); border-radius: var(--fox-radius-lg); background: var(--fox-color-bg-deep); color: var(--fox-color-text-secondary); }
    .light > h3 { font-size: var(--fox-text-xs); font-weight: var(--fox-weight-semibold); letter-spacing: 0.06em; text-transform: uppercase; color: var(--fox-color-text-muted); margin-bottom: var(--fox-space-3); }
`;

function cellHtml(section: Section, state: string, item: Cell): string {
  return `        <figure class="cell${item.wide ? " wide" : ""}" data-cell="${section.id}-${state}">
          <figcaption>${item.label}</figcaption>
          <div class="stage">${item.html}</div>
        </figure>`;
}

function sectionHtml(section: Section): string {
  const rows = section.rows
    .map(
      (row, rowIndex) => `      <div class="row">
        <h3 class="row-title">${row.title}</h3>
        <div class="cells">
${row.cells.map((item, index) => cellHtml(section, `r${rowIndex}c${index}`, item)).join("\n")}
        </div>
      </div>`,
    )
    .join("\n");
  // The light strip repeats the first row inside [data-theme="light"], so every
  // component is checked against both themes on the same page.
  const first = section.rows[0];
  const light = `      <div class="light" data-theme="light">
        <h3>Light theme</h3>
        <div class="cells">
${first.cells.map((item, index) => cellHtml(section, `light-c${index}`, item)).join("\n")}
        </div>
      </div>`;
  return `    <section id="${section.id}">
      <h2>${section.title}</h2>
      <p class="note">${section.note}</p>
${rows}
${light}
    </section>`;
}

export function galleryPage(): string {
  const nav = sections
    .map((section) => `<a href="#${section.id}">${section.title}</a>`)
    .join("");
  const body = sections.map(sectionHtml).join("\n");
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gallery · Schlaufuchs design system</title>
  <link rel="stylesheet" href="./design-system.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <style>${pageStyle}  </style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div style="flex:1">
        <h1>Gallery</h1>
        <p>Every component, variant, size and state on one page, dark and light. Hover and focus work live; the state cells are what the screenshot pass photographs.</p>
      </div>
      <div class="fox-row">
        <a class="fox-button" data-variant="outline" data-size="sm" href="./components/">Components →</a>
      </div>
    </header>
    <nav>${nav}</nav>
${body}
  </div>
</body>
</html>
`;
}
