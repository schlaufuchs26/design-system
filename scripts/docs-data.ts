/**
 * The component reference the docs site is generated from. One entry per
 * component; the props table is the public API of @schlaufuchs/react, the
 * markup is what the same component renders without React.
 */
export interface PropRow {
  name: string;
  type: string;
  default?: string;
  notes: string;
}

export interface ComponentDoc {
  slug: string;
  title: string;
  lead: string;
  imports: string;
  demo: string;
  props: PropRow[];
  variants?: string;
  accessibility: string[];
  keyboard?: string[];
}

import { core } from "./docs-data-core";
import { overlays } from "./docs-data-overlays";

/** Every component page, in the order the index lists them. */
export const components: ComponentDoc[] = [...core, ...overlays];
