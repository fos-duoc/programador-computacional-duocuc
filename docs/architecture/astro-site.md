# Arquitectura — apps/astro-site

> Decisiones técnicas y tech debt del sitio Astro del repo.

## Stack

- **Astro** 5.18.x — SSG con islands. Build sale a `apps/astro-site/dist/` (gitignored). Deploy vía `.github/workflows/deploy-pages.yml`.
- **TypeScript** 5.9.x — `extends astro/tsconfigs/strict`.
- **Iconos**: `astro-icon` + `@iconify-json/{devicon,mdi,simple-icons}`.
- **Compresión**: `astro-compress` + `@playform/compress` (HTML, CSS, JS, imágenes).
- **SEO**: `astro-seo` + `@astrojs/sitemap`.
- **Generador interactivo**: `frappe-gantt` para cartas Gantt.
- **Tutor AI**: TTS con Puter.js + Web Speech API como fallback (cuando rate ≠ 1x).

## Decisiones clave

### Deploy vía GitHub Actions (no más `docs/` compartido)

`apps/astro-site/astro.config.mjs` usa el `outDir` por defecto (`dist/`, gitignored). El sitio se publica con `.github/workflows/deploy-pages.yml` que:

1. Hace build de `apps/astro-site/` en CI con Node del `.nvmrc`.
2. Sube `apps/astro-site/dist/` como artifact con `actions/upload-pages-artifact@v3`.
3. Despliega con `actions/deploy-pages@v4`.

**Trigger**: push a `main` con cambios en `apps/astro-site/**` o el propio workflow. También `workflow_dispatch` manual.

**Concurrency**: una deploy a la vez (cancel-in-progress: false), para no dejar el sitio en estado intermedio.

**Permisos mínimos**: `contents:read`, `pages:write`, `id-token:write`.

#### Requisito de configuración manual

En GitHub repo settings → **Pages → Source** debe estar en **"GitHub Actions"** (no "Deploy from a branch"). Si está en branch, los pushes no triggerizan el workflow.

#### Historia previa (eliminada)

Antes, el sitio se deployaba directo desde `docs/` en `main` (configuración de Pages). Esto causaba:
- `docs/` mezclaba ~50 archivos generados (HTML, CSS, JS, sitemap) con docs estructuradas (`context.md`, `conventions.md`, `architecture/`, `archive/`).
- Astro vaciaba el outDir por defecto, borrando los `.md` accidentalmente. Mitigado temporalmente con `vite.build.emptyOutDir: false`.
- Cada `npm run build` ensuciaba el git status con los hashes nuevos del compress.

La migración a workflow + `dist/` resuelve los tres problemas.

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

### Data dumps inline en HTML (~880 KB por página) — refactor pendiente

`/sala-de-estudio/index.html` pesa **1.26 MB** post-build. Forensics:

| Inline `<script>` | Tamaño | Origen |
|---|---|---|
| `subjectNavData` | 278 KB | `SubjectNavigationSidebar.astro` con `define:vars` desde `data/asignaturas.ts` (8022 líneas) |
| `tooltipData` (tecnologías) | 325 KB | `TechDrawer.astro` con `define:vars` desde `data/technologies.ts` |
| `asignaturasData` (full) | 276 KB | `SubjectDrawer.astro` con `define:vars` desde `data/asignaturas.ts` |
| SOLID/Python data | 68 KB | Tooltips dumpeados inline |
| Tutor AI logic | 44 KB | Lógica del componente |

**Total ~880 KB son DATA dumps** que se inlinean en CADA página vía `<script define:vars={{ ... }}>`. El resto (~150 KB) es lógica JS legítima.

**Por qué duele**:
- Sin caché entre páginas: cada navegación re-baja toda la data.
- 6× sobre el budget recomendado de 200 KB para una page.
- LCP/FCP impactados: el browser tiene que parsear ~1 MB antes de hidratar.

**Plan de migración (sesión dedicada con smoke test visual)**:
1. Mover `data/asignaturas.ts` y `data/technologies.ts` a JSON estático en `public/data/*.json`.
2. Reemplazar `define:vars` por `fetch('/data/asignaturas.json')` con loading state en los componentes que lo consumen.
3. Cachear con `Cache-Control: public, max-age=31536000` (los JSON tienen hash en URL).
4. Astro Content Collections opcional para type-safety si vale la pena.
5. **Riesgo**: el Tutor AI y SubjectNavigationSidebar asumen data sync al script start. Async cambia la timing — hay que probar dropdowns, búsquedas y View Transitions.

**Ahorro estimado**: -800 KB en cada page (sala-de-estudio: 1.26 MB → ~400 KB).

---

## Scripts útiles

```bash
cd apps/astro-site

npm run dev        # localhost:4321
npm run build      # genera apps/astro-site/dist/ (gitignored)
npm run preview    # sirve dist/ buildeado en localhost:4321
npm run check      # astro check (informativo, no bloqueante)
npm run lint       # eslint + prettier check
npm run lint:fix   # arregla lo arreglable
npm run format     # prettier --write
```
