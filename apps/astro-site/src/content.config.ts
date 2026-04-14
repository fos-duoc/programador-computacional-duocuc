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
    // Metadata visual (opcional): migrada de src/data/bimestres.ts.
    year: z.number().int().min(1).max(4).optional(),
    shortTitle: z.string().optional(),
    featured: z.boolean().optional().default(false),
    techIcons: z.array(z.string()).optional().default([]),
    subjectsMeta: z
      .array(
        z.object({
          icon: z.string(),
          iconType: z.enum(["devicon", "fontawesome"]).optional(),
          name: z.string(),
        }),
      )
      .optional()
      .default([]),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    category: z.enum(["generadores", "gestion", "utilidades", "ai"]),
    url: z.string(),
    icon: z.string(),
    iconType: z.enum(["devicon", "fontawesome"]).default("fontawesome"),
    bimestres: z.array(z.number().int().min(1).max(17)).default([]),
    asignaturas: z.array(z.string()).default([]),
    descripcion: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { bimestres, tools };
