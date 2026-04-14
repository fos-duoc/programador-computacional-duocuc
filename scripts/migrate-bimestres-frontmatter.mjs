#!/usr/bin/env node
// migrate-bimestres-frontmatter.mjs
//
// One-off: lee apps/astro-site/src/data/bimestres.ts y enriquece el
// frontmatter YAML de coursework/bimestre-XX-SLUG/README.md con los campos
// visuales: year, shortTitle, techIcons, subjectsMeta, featured.
//
// Uso: node scripts/migrate-bimestres-frontmatter.mjs

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Mapeo hardcoded de data/bimestres.ts — preservamos la metadata visual exacta.
// year=1..4 se deriva del grupo en el TS original:
//   Year1: 01-04, Year2: 05-10, Year3: 11-14, Year4: 15-17.
const VISUAL = {
  1: {
    year: 1,
    shortTitle: "Fundamentos",
    techIcons: ["python-plain", "oracle-original"],
    subjectsMeta: [
      { icon: "python-plain", name: "Fundamentos Prog." },
      { icon: "oracle-original", name: "Modelamiento BD" },
      { icon: "fas fa-book", iconType: "fontawesome", name: "Antropologia" },
    ],
  },
  2: {
    year: 1,
    shortTitle: "POO & Cloud",
    techIcons: ["java-plain", "amazonwebservices-plain-wordmark"],
    subjectsMeta: [
      { icon: "java-plain", name: "POO I" },
      { icon: "amazonwebservices-plain-wordmark", name: "Computacion Nube" },
      { icon: "fas fa-comments", iconType: "fontawesome", name: "Comunicacion" },
    ],
  },
  3: {
    year: 1,
    shortTitle: "POO & DevOps",
    techIcons: ["java-plain", "docker-plain"],
    subjectsMeta: [
      { icon: "java-plain", name: "POO II" },
      { icon: "docker-plain", name: "DevOps" },
      { icon: "fas fa-balance-scale", iconType: "fontawesome", name: "Etica" },
    ],
  },
  4: {
    year: 1,
    shortTitle: "SQL & Security",
    techIcons: ["oracle-original"],
    subjectsMeta: [
      { icon: "oracle-original", name: "SQL Consultas" },
      { icon: "fas fa-shield-alt", iconType: "fontawesome", name: "Seguridad Informatica" },
    ],
  },
  5: {
    year: 2,
    shortTitle: "SQL & Cloud Native",
    techIcons: ["oracle-original", "kubernetes-plain"],
    featured: true,
    subjectsMeta: [
      { icon: "oracle-original", name: "SQL Programacion" },
      { icon: "kubernetes-plain", name: "Cloud Native" },
      { icon: "fas fa-clipboard-list", iconType: "fontawesome", name: "Ing. Requisitos" },
    ],
  },
  6: {
    year: 2,
    shortTitle: "Backend I",
    techIcons: ["spring-plain"],
    subjectsMeta: [
      { icon: "spring-plain", name: "Backend I" },
      { icon: "fas fa-project-diagram", iconType: "fontawesome", name: "Ing. Software I" },
    ],
  },
  7: {
    year: 2,
    shortTitle: "Backend II-III",
    techIcons: ["spring-plain"],
    subjectsMeta: [
      { icon: "spring-plain", name: "Backend II-III" },
      { icon: "fas fa-project-diagram", iconType: "fontawesome", name: "Ing. Software II" },
    ],
  },
  8: {
    year: 2,
    shortTitle: "Frontend & Arq.",
    techIcons: ["angularjs-plain"],
    subjectsMeta: [
      { icon: "angularjs-plain", name: "Frontend I-II" },
      { icon: "fas fa-sitemap", iconType: "fontawesome", name: "Arquitectura Software" },
    ],
  },
  9: {
    year: 2,
    shortTitle: "Mobile & Frontend",
    techIcons: ["kotlin-plain", "angularjs-plain"],
    subjectsMeta: [
      { icon: "kotlin-plain", name: "Mobile I" },
      { icon: "angularjs-plain", name: "Frontend III" },
    ],
  },
  10: {
    year: 2,
    shortTitle: "Mobile II & Titulo",
    techIcons: [],
    subjectsMeta: [
      { icon: "fas fa-mobile-alt", iconType: "fontawesome", name: "Mobile II" },
      { icon: "fas fa-graduation-cap", iconType: "fontawesome", name: "Taller de Titulo" },
    ],
  },
  11: {
    year: 3,
    shortTitle: "Fullstack I & BD",
    techIcons: ["react-original", "postgresql-plain"],
    subjectsMeta: [
      { icon: "react-original", name: "Desarrollo Fullstack I" },
      { icon: "postgresql-plain", name: "BD Aplicada" },
    ],
  },
  12: {
    year: 3,
    shortTitle: "Fullstack II & Cloud",
    techIcons: ["nodejs-plain", "amazonwebservices-plain-wordmark"],
    subjectsMeta: [
      { icon: "nodejs-plain", name: "Desarrollo Fullstack II" },
      { icon: "amazonwebservices-plain-wordmark", name: "Cloud Computing" },
    ],
  },
  13: {
    year: 3,
    shortTitle: "Fullstack III & DevOps",
    techIcons: ["typescript-plain", "docker-plain"],
    subjectsMeta: [
      { icon: "typescript-plain", name: "Desarrollo Fullstack III" },
      { icon: "docker-plain", name: "DevOps" },
    ],
  },
  14: {
    year: 3,
    shortTitle: "Mobile & Cloud Native",
    techIcons: ["flutter-plain", "kubernetes-plain"],
    subjectsMeta: [
      { icon: "flutter-plain", name: "Desarrollo App Moviles" },
      { icon: "kubernetes-plain", name: "Cloud Native I" },
    ],
  },
  15: {
    year: 4,
    shortTitle: "Cloud Native II & Seguridad",
    techIcons: ["amazonwebservices-plain-wordmark", "fas fa-shield-alt"],
    subjectsMeta: [
      { icon: "amazonwebservices-plain-wordmark", name: "Cloud Native II" },
      { icon: "fas fa-shield-alt", iconType: "fontawesome", name: "Seguridad y Calidad" },
    ],
  },
  16: {
    year: 4,
    shortTitle: "Gestion de Proyectos",
    techIcons: ["jira-plain"],
    subjectsMeta: [
      { icon: "jira-plain", name: "Evaluacion Proyectos SW" },
      { icon: "fas fa-tasks", iconType: "fontawesome", name: "Gestion Proyectos SW" },
    ],
  },
  17: {
    year: 4,
    shortTitle: "Etica & Titulo Ing.",
    techIcons: [],
    subjectsMeta: [
      { icon: "fas fa-balance-scale", iconType: "fontawesome", name: "Etica Profesional" },
      { icon: "fas fa-graduation-cap", iconType: "fontawesome", name: "Taller Aplicado SW" },
    ],
  },
};

// Serializa un valor a YAML minimal (sin quotes si es seguro).
function toYaml(value, indent = "") {
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value === "string") {
    // Quote si tiene caracteres especiales.
    return /[:#&*!|>%@`'"]|^\s|\s$/.test(value) ? `"${value.replace(/"/g, '\\"')}"` : value;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return value
      .map((v) => {
        if (typeof v === "object" && v !== null) {
          const entries = Object.entries(v);
          const first = `${indent}  - ${entries[0][0]}: ${toYaml(entries[0][1], indent + "    ")}`;
          const rest = entries
            .slice(1)
            .map(([k, val]) => `${indent}    ${k}: ${toYaml(val, indent + "    ")}`);
          return [first, ...rest].join("\n");
        }
        return `${indent}  - ${toYaml(v, indent + "    ")}`;
      })
      .join("\n")
      .replace(/^/, "\n");
  }
  throw new Error(`Unsupported: ${typeof value}`);
}

async function updateReadme(bimestreNum, dirName) {
  const readmePath = join(ROOT, "coursework", dirName, "README.md");
  const content = await readFile(readmePath, "utf8");

  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.warn(`⚠️  ${dirName}: sin frontmatter, skip`);
    return;
  }

  const [, existingYaml, body] = match;
  const visual = VISUAL[bimestreNum];
  if (!visual) {
    console.warn(`⚠️  ${dirName}: sin metadata visual para B${bimestreNum}`);
    return;
  }

  // Verificar que no tenga ya los campos (idempotente).
  if (/^year:\s/m.test(existingYaml)) {
    console.log(`✓  ${dirName}: ya migrado`);
    return;
  }

  const extraLines = [
    `year: ${visual.year}`,
    `shortTitle: "${visual.shortTitle}"`,
    visual.featured ? `featured: true` : null,
    `techIcons:${toYaml(visual.techIcons)}`,
    `subjectsMeta:${toYaml(visual.subjectsMeta)}`,
  ].filter(Boolean);

  const newYaml = existingYaml.trimEnd() + "\n" + extraLines.join("\n");
  const newContent = `---\n${newYaml}\n---\n${body}`;

  await writeFile(readmePath, newContent);
  console.log(`✅ ${dirName}: frontmatter enriquecido`);
}

async function main() {
  const courseworkDir = join(ROOT, "coursework");
  const dirs = readdirSync(courseworkDir).filter((d) => /^bimestre-\d{2}-/.test(d));

  for (const dir of dirs.sort()) {
    const num = parseInt(dir.match(/^bimestre-(\d{2})-/)[1], 10);
    await updateReadme(num, dir);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
