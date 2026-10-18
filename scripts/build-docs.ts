/**
 * Renders the component reference into docs/components/, one page per entry
 * in docs-data.ts, plus the index. Runs as part of `bun run build`, so the
 * published Pages site always matches the source.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { type ComponentDoc, components } from "./docs-data";
import { galleryPage } from "./gallery";

const DOCS = join(import.meta.dir, "..", "docs", "components");

const html = (text: string) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function page(doc: ComponentDoc): string {
  const props = doc.props
    .map(
      (row) => `        <tr>
          <td><code>${html(row.name)}</code></td>
          <td><code>${html(row.type)}</code></td>
          <td>${row.default ? `<code>${html(row.default)}</code>` : "—"}</td>
          <td>${html(row.notes)}</td>
        </tr>`,
    )
    .join("\n");
  const accessibility = doc.accessibility
    .map((note) => `        <li>${html(note)}</li>`)
    .join("\n");
  const keyboard = doc.keyboard
    ? `      <section>
        <h2>Keyboard</h2>
        <ul>
${doc.keyboard.map((key) => `          <li>${html(key)}</li>`).join("\n")}
        </ul>
      </section>`
    : "";
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${html(doc.title)} · Schlaufuchs design system</title>
  <link rel="stylesheet" href="../design-system.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <style>
    body { padding: 0 0 var(--fox-space-16); }
    .wrap { max-width: 900px; margin: 0 auto; padding: 0 var(--fox-space-6); }
    nav { padding: var(--fox-space-6) 0; font-size: var(--fox-text-sm); }
    nav a { margin-right: var(--fox-space-3); }
    h1 { font-size: var(--fox-text-xl); margin-bottom: var(--fox-space-2); }
    .lead { color: var(--fox-color-text-muted); max-width: 68ch; margin-bottom: var(--fox-space-8); }
    section { margin-bottom: var(--fox-space-8); }
    section h2 { font-size: var(--fox-text-lg); margin-bottom: var(--fox-space-3); }
    pre { padding: var(--fox-space-3); background: var(--fox-color-bg-inset); border: 1px solid var(--fox-color-border-subtle); border-radius: var(--fox-radius-md); overflow-x: auto; font-size: var(--fox-text-xs); }
    .demo { display: flex; flex-wrap: wrap; gap: var(--fox-space-3); align-items: center; padding: var(--fox-space-4); border: 1px solid var(--fox-color-border-subtle); border-radius: var(--fox-radius-md); background: var(--fox-color-bg-panel); }
    table { width: 100%; border-collapse: collapse; font-size: var(--fox-text-sm); }
    th, td { padding: var(--fox-space-2); border-bottom: 1px solid var(--fox-color-border-subtle); text-align: left; vertical-align: top; }
    th { color: var(--fox-color-text-muted); font-size: var(--fox-text-xs); text-transform: uppercase; letter-spacing: 0.06em; }
    td code { font-family: var(--fox-font-mono); font-size: var(--fox-text-xs); color: var(--fox-color-text-secondary); }
    ul { padding-left: var(--fox-space-5); }
    li { margin-bottom: var(--fox-space-1); }
  </style>
</head>
<body>
  <div class="wrap">
    <nav><a href="../">← Design system</a><a href="./">All components</a></nav>
    <h1>${html(doc.title)}</h1>
    <p class="lead">${html(doc.lead)}</p>
    <section>
      <h2>Import</h2>
      <pre>${html(doc.imports)}</pre>
    </section>
    <section>
      <h2>Example</h2>
      <div class="demo">
${doc.demo
  .split("\n")
  .map((line) => `        ${line}`)
  .join("\n")}
      </div>
      <pre>${html(doc.demo)}</pre>
    </section>
    <section>
      <h2>Props</h2>
      <table>
        <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Notes</th></tr></thead>
        <tbody>
${props}
        </tbody>
      </table>
    </section>
    <section>
      <h2>Accessibility</h2>
      <ul>
${accessibility}
      </ul>
    </section>
${keyboard}
  </div>
</body>
</html>
`;
}

function indexPage(): string {
  const cards = components
    .map(
      (
        doc,
      ) => `      <a class="fox-card" data-elevated href="./${doc.slug}.html">
        <span class="fox-card-header"><span class="fox-card-title">${html(doc.title)}</span></span>
        <span class="fox-card-body">${html(doc.lead)}</span>
      </a>`,
    )
    .join("\n");
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Components · Schlaufuchs design system</title>
  <link rel="stylesheet" href="../design-system.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <style>
    body { padding: 0 0 var(--fox-space-16); }
    .wrap { max-width: 1040px; margin: 0 auto; padding: 0 var(--fox-space-6); }
    nav { padding: var(--fox-space-6) 0; font-size: var(--fox-text-sm); }
    h1 { font-size: var(--fox-text-xl); margin-bottom: var(--fox-space-2); }
    .lead { color: var(--fox-color-text-muted); max-width: 68ch; margin-bottom: var(--fox-space-8); }
    .list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--fox-space-4); }
    .list a { color: inherit; text-decoration: none; }
    .list a:hover { border-color: var(--fox-color-border-strong); text-decoration: none; }
    .list .fox-card-body { color: var(--fox-color-text-muted); font-size: var(--fox-text-sm); }
  </style>
</head>
<body>
  <div class="wrap">
    <nav><a href="../">← Design system</a></nav>
    <h1>Components</h1>
    <p class="lead">Typed React components from <code>@schlaufuchs/react</code>, styled by the plain CSS classes in <code>@schlaufuchs/tokens</code>. Every page lists the props, the markup and the keyboard contract.</p>
    <div class="list">
${cards}
    </div>
  </div>
</body>
</html>
`;
}

mkdirSync(DOCS, { recursive: true });
for (const doc of components) {
  writeFileSync(join(DOCS, `${doc.slug}.html`), page(doc));
}
writeFileSync(join(DOCS, "index.html"), indexPage());
writeFileSync(join(DOCS, "..", "gallery.html"), galleryPage());
console.log(`${components.length} component pages, one gallery`);
