# Plantilla de README.md para bimestres

Esta es la plantilla canónica para el `README.md` de cada bimestre en
[`coursework/bimestre-XX-<slug>/`](../../coursework/). Copiar y adaptar.

El frontmatter YAML permitirá migrar a Astro Content Collections (ver Sesión 3
del plan de modernización) sin reescribir los archivos.

---

## Plantilla — copiar desde la siguiente línea

```markdown
---
bimestre: 00
slug: bimestre-00-slug-del-bimestre
title: "Bimestre 00 - Título del Bimestre"
status: pending
asignaturas:
  - asignatura-uno
  - asignatura-dos
---

# Bimestre 00 - Título del Bimestre

## Analista Programador Computacional - DuocUC

Breve descripción del bimestre y su rol en la malla.

---

## Asignaturas

### 1. Nombre Asignatura 1
Descripción corta (1-2 líneas).

**Competencias:**
- Competencia 1
- Competencia 2

**Tecnologías:**
- Tecnología 1
- Tecnología 2

### 2. Nombre Asignatura 2
(Mismo patrón.)

---

## Estructura del Bimestre

\`\`\`
bimestre-00-slug-del-bimestre/
├── asignatura-uno/
│   ├── actividades/
│   ├── archivos-curso/
│   ├── exp1/
│   ├── exp2/
│   └── exp3/
└── asignatura-dos/
    └── ...
\`\`\`

---

## Proyecto Integrador

(Opcional — describir si aplica.)

---

## Recursos Recomendados

- [Recurso 1](https://example.com)
- [Recurso 2](https://example.com)
```

---

## Campos del frontmatter

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `bimestre` | int (1-17) | sí | Número del bimestre |
| `slug` | string kebab-case | sí | Debe coincidir con el nombre de carpeta |
| `title` | string | sí | Título humano |
| `status` | `pending` \| `current` \| `done` | sí | Estado del bimestre |
| `asignaturas` | lista kebab-case | sí | Slugs de subcarpetas (1 por asignatura) |

## Reglas

- El `slug` debe coincidir exactamente con el nombre de la carpeta.
- `status: pending` mientras no se haya cursado; `current` durante; `done` al finalizar.
- Bimestres sin cursar pueden omitir secciones **Competencias** y **Tecnologías**.
- El bloque de estructura se genera con `scripts/new-bimestre.sh` (ver Sesión 2).
