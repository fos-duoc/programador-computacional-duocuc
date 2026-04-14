import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bimestres = defineCollection({
  loader: glob({
    pattern: "bimestre-*/README.md",
    base: "../../coursework",
  }),
  schema: z.object({
    bimestre: z.number().int().min(1).max(17),
    slug: z.string().regex(/^bimestre-\d{2}-[a-z0-9-]+$/),
    title: z.string(),
    status: z.enum(["pending", "current", "done"]),
    asignaturas: z.array(z.string()).min(1),
  }),
});

export const collections = { bimestres };
