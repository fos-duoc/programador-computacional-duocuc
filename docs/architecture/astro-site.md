# Arquitectura — apps/astro-site

> Decisiones técnicas y tech debt del sitio Astro del repo.

## Stack

- **Astro** 5.18.x — SSG con islands. Build sale a `docs/` (GitHub Pages).
- **TypeScript** 5.9.x — `extends astro/tsconfigs/strict`.
- **Iconos**: `astro-icon` + `@iconify-json/{devicon,mdi,simple-icons}`.
- **Compresión**: `astro-compress` + `@playform/compress` (HTML, CSS, JS, imágenes).
- **SEO**: `astro-seo` + `@astrojs/sitemap`.
- **Generador interactivo**: `frappe-gantt` para cartas Gantt.
- **Tutor AI**: TTS con Puter.js + Web Speech API como fallback (cuando rate ≠ 1x).

## Decisiones clave

### outDir compartido (`../../docs`) — tech debt

El `astro.config.mjs` produce a `../../docs` (raíz del repo) para que GitHub Pages lo sirva sin GitHub Actions adicional. Esto significa que **el contenido de `docs/` está commiteado** y se actualiza con cada `npm run build`.

**Problema**: `docs/` también aloja documentación estructurada (`context.md`, `sessions/`, `conventions.md`, `architecture/`, `archive/`). Astro por defecto **vacía el outDir** antes de cada build, lo que borraría esos `.md`.

**Mitigación actual**: en `astro.config.mjs` se setea `vite.build.emptyOutDir: false`. El build escribe encima de los archivos generados (HTML, CSS, JS, sitemap) sin tocar los `.md` que viven al lado.

**Migración recomendada (follow-up)**:

1. Cambiar `outDir` de Astro a `dist/` (default).
2. Crear `.github/workflows/deploy-pages.yml` que construye y publica con `actions/deploy-pages@v4`.
3. En GitHub repo settings → Pages → Source: cambiar de "Deploy from a branch (docs/)" a "GitHub Actions".
4. Eliminar de git los archivos generados en `docs/` (dejando solo los `.md` estructurados).

Esta migración convierte `docs/` en una carpeta 100% source-of-truth y desacopla deploy del workflow local.

### TTS dual-engine

- **Velocidad 1x**: Puter.js (voces neuronales de calidad).
- **Velocidad ≠ 1x**: Web Speech API nativa (porque Puter.js no soporta `playbackRate` confiablemente).

Ver historial reciente:
- `fix (Tutor AI): usar Web Speech API para control de velocidad TTS`
- `fix (Tutor AI): implementar control de velocidad TTS con Web Audio API` (descartado en favor del approach actual)

### View Transitions

El layout usa View Transitions de Astro. **Cuidado con `transform`** en animaciones del `<Layout>` — rompe `position: fixed` en side panels (MDN: transform crea containing block). Ya hay un fix histórico al respecto.

### `tooltipSystem` global

`window.tooltipSystem` se expone explícitamente para que el panel del Tutor AI pueda ocultar tooltips al abrir dropdowns (interferencia visual con selector de velocidad TTS).

---

## Tech debt conocida (2026-04-11)

### TypeScript strict — 379 errores pre-existentes

`astro check` reporta 379 errores con `astro/tsconfigs/strict`. Origen: el código del Tutor AI/TTS se escribió rápido y muchos bindings carecen de tipos. **No bloquear CI con `astro check`** hasta que haya una sesión dedicada a tipar `src/scripts/` y `src/components/AITutorSidePanel.astro`.

**Plan de limpieza propuesto:**
1. Empezar por `src/scripts/main.js` (renombrar a `.ts`, añadir tipos).
2. `AITutorSidePanel.astro` y `MergedSidebarPanel.astro`.
3. Páginas de `src/pages/sala-de-estudio/` (las más grandes).

### ESLint — 87 warnings post-restructure

Tras añadir ESLint flat config con reglas relajadas a `warn`, quedan 87 warnings (unused vars, prefer-const, no-var en código legacy). **0 errores**, exit 0. `npm run lint:fix` puede arreglar ~22 automáticamente, pero antes hay que hacer smoke test del Tutor AI porque algunos `let → const` o eliminación de unused podría tocar closures activos.

### Archivos con tokens HTML problemáticos

Estos archivos hacen crashear el parser de Astro/Prettier (usan `>` literal en JSX en lugar de `&gt;` o `{'>'}`, o tienen JSX expressions sin parent element). Están **excluidos de prettier y eslint**:

- `src/pages/laboratorios.astro` (línea 358: `Consistencia > Intensidad`)
- `src/components/DataPipeline.astro`
- `src/components/NotionEmbed.astro`
- `src/components/CapstoneProjects.astro`
- `src/components/LearningRoadmap.astro`
- `src/components/TechStack2025.astro`
- `src/pages/trayectorias.astro`

**Fix sugerido**: reemplazar `>` por `&gt;` en texto literal y envolver expresiones JSX huérfanas en un fragment `<>...</>`. Es trabajo mecánico de ~30 min.

### Astro 6 pendiente

Astro 6.x (latest) requiere **Node ≥22.12.0**. Actualmente Node 20.20 en `.nvmrc` simbólico (`.nvmrc` dice `22` pero el sistema no lo ha instalado). Plan:

1. `nvm install 22 && nvm use 22`
2. Verificar que el sitio compile en Node 22 con la versión actual de Astro (5.18.x).
3. Bump a Astro 6.x.
4. Revisar CHANGELOG por breaking changes (especialmente Content Collections, integrations API).
5. Smoke test integral del Tutor AI y todas las páginas.

---

## Scripts útiles

```bash
cd apps/astro-site

npm run dev        # localhost:4321
npm run build      # genera ../../docs/ (cuidado: se mezcla con docs estructuradas)
npm run preview    # sirve docs/ buildeado
npm run check      # astro check (informativo, no bloqueante)
npm run lint       # eslint + prettier check
npm run lint:fix   # arregla lo arreglable
npm run format     # prettier --write
```
