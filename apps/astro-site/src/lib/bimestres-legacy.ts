/**
 * Adapter que expone la forma histórica de `src/data/bimestres.ts` (arrays
 * bimestresYear1..4 con Subject + techIcons) leyendo el content collection.
 *
 * Permite que consumers existentes migren sin cambiar su render logic —
 * solo cambian el import de `../data/bimestres` a este módulo.
 */

import { getCollection } from "astro:content";

export interface Subject {
  icon: string;
  iconType?: "devicon" | "fontawesome";
  name: string;
}

export interface Bimestre {
  number: string;
  title: string;
  techIcons: string[];
  subjects: Subject[];
  featured?: boolean;
}

export interface BimestresByYear {
  bimestresYear1: Bimestre[];
  bimestresYear2: Bimestre[];
  bimestresYear3: Bimestre[];
  bimestresYear4: Bimestre[];
}

export async function getBimestresByYear(): Promise<BimestresByYear> {
  const all = (await getCollection("bimestres")).sort((a, b) => a.data.bimestre - b.data.bimestre);

  const toLegacy = (e: (typeof all)[number]): Bimestre => ({
    number: String(e.data.bimestre).padStart(2, "0"),
    title: e.data.shortTitle ?? e.data.title,
    techIcons: e.data.techIcons ?? [],
    subjects: e.data.subjectsMeta ?? [],
    featured: e.data.featured,
  });

  return {
    bimestresYear1: all.filter((e) => e.data.year === 1).map(toLegacy),
    bimestresYear2: all.filter((e) => e.data.year === 2).map(toLegacy),
    bimestresYear3: all.filter((e) => e.data.year === 3).map(toLegacy),
    bimestresYear4: all.filter((e) => e.data.year === 4).map(toLegacy),
  };
}
