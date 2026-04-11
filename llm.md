# llm.md — instrucciones para agentes de IA

> Lee esto al inicio de cada sesión cuando trabajes con un asistente LLM en este repositorio. Filename `llm.md` (lowercase) es la convención del repo para instrucciones a agentes.

## Antes de tocar nada

1. **Lee `context.md`** (en la raíz) — snapshot vivo del proyecto, stack, layout, tech debt.
2. **Lee la última entrada de `sessions/`** (en la raíz) — qué pasó en la sesión anterior, qué quedó pendiente.
3. Confirma que tu intuición sobre el repo no choca con esos dos archivos. Si choca, **pregunta** antes de actuar.

## Al cerrar la sesión

1. Actualiza `context.md` si:
   - Cambió el stack (versión de algo).
   - Cambió la estructura de carpetas.
   - Apareció o desapareció tech debt importante.
2. Crea/actualiza `sessions/YYYY-MM-DD.md` con: objetivo, cambios, decisiones, próximos pasos.
3. Corre `./scripts/update-context.sh --stamp` para refrescar el footer de fecha/branch/commit en `context.md`.

## Convenciones obligatorias

- **Conventional Commits** (`feat`, `fix`, `docs`, `refactor`, `chore`, ...). Ver `docs/conventions.md`. Pre-commit hook enforza el formato.
- **kebab-case** en todas las carpetas estructurales nuevas. Carpetas de entregables estudiantiles (proyectos en `coursework/*/exp*/semana-*/`) **no se renombran** — son del alumno.
- **No commits sin que el usuario lo pida explícitamente.**
- **No `--no-verify`, no `git push --force`, no `git reset --hard`** sin pedir permiso.
- **Edita `.gitignore`/`.editorconfig`/`docs/conventions.md`** si introduces un patrón nuevo y notable.
- **Gatekeeper anti-IA-mentions activo**: pre-commit hook bloquea menciones a marcas de asistentes de IA en commits y archivos staged. **No incluir Co-Authored-By trailers, ni firmas "Generated with [...]" en commits.** Ver `scripts/check-no-ai-mentions.sh`.

## Capas del repo

- `apps/astro-site/` — código del sitio (Astro 5). Usa `npm run lint && npm run build` antes de cerrar cualquier cambio aquí.
- `coursework/bimestre-XX-<slug>/` — material académico. Cada bimestre es independiente; no hay deps cruzadas.
- `resources/` — assets compartidos (mallas, plantillas).
- `docs/` — documentación viva. Si necesitas tomar una decisión técnica importante, escríbela en `docs/architecture/`.
- `scripts/` — helpers reutilizables.
- Python (`pyproject.toml` en raíz) — coursework experiments con `uv run`.

## Tech debt — no abrir lata sin pedir permiso

- ~880 KB de data dumps inline en `sala-de-estudio/index.html` (data/asignaturas.ts y data/technologies.ts via define:vars). Migración a `public/data/*.json` con fetch async — sesión dedicada con smoke visual.
- 379 errores de TypeScript strict en `astro-site` — limpieza gradual.
- 65 warnings de ESLint residuales — limpiables a mano sin riesgo.
- Astro 6.x pendiente — requiere bump de Node a 22.

Ver `docs/architecture/astro-site.md` para detalles.

## Flujo dev habitual

```bash
# Empezar el día
git pull
cat context.md
ls -lt sessions/ | head

# Asegurar hooks instalados (idempotente)
./scripts/install-hooks.sh

# Trabajo Python (coursework)
uv sync          # asegura .venv al día
uv run python ... # ejecuta scripts/notebooks

# Trabajo astro-site
cd apps/astro-site
npm install      # si hay cambios en package.json
npm run dev      # localhost:4321

# Cerrar el día
./scripts/update-context.sh
# editar sessions/YYYY-MM-DD.md
git add ... && git commit -m "..."
```
