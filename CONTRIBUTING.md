# Contribuir

Repo personal de un estudiante del programa Analista Programador Computacional (DuocUC). Aceptamos PRs externos pero las decisiones de scope son del owner.

## Setup rápido

```bash
# 1. Clonar
git clone https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC.git
cd Analista-Programador-Computacional-DuocUC

# 2. Tooling Python (uv) — coursework + dev tools
uv sync

# 3. Hooks de git (pre-commit + commit-msg)
./scripts/install-hooks.sh

# 4. Sitio Astro
cd apps/astro-site
npm ci
npm run dev   # localhost:4321
```

## Workflow esperado

1. Lee [`context.md`](context.md) y la última entrada de [`sessions/`](sessions/) para entender el estado actual.
2. Crea una rama desde `main`: `feat/<topic>`, `fix/<topic>`, `chore/<topic>` o `docs/<topic>`.
3. Hacé tus cambios. Los pre-commit hooks corren prettier, eslint, ruff, y validan el commit message.
4. Conventional Commits obligatorio (los hooks lo enforzan): `feat(scope): ...`, `fix: ...`, etc. Ver [`docs/conventions.md`](docs/conventions.md).
5. Antes del PR:
   - `cd apps/astro-site && npm run lint && npm run build`
   - `uv run ruff check . && uv run pytest`
   - Smoke test visual del Tutor AI si tocaste `apps/astro-site/`.
6. Abre PR con el [template](.github/PULL_REQUEST_TEMPLATE.md). Marca breaking changes con `!` en el commit.
7. Anota la sesión en [`sessions/YYYY-MM-DD.md`](sessions/) si fue trabajo sustancial.

## Convenciones rápidas

- **Naming carpetas**: `kebab-case` sin espacios ni comas. Excepción: carpetas de proyectos estudiantiles dentro de `coursework/*/exp*/semana-*/` se preservan tal cual (son entregables del alumno).
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/). Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Ramas**: cortas (< 1 semana). Eliminar tras mergear.
- **PRs**: rebase + merge si los commits son limpios; squash si hay >5 commits ruidosos.

Detalles completos en [`docs/conventions.md`](docs/conventions.md).

## Reportar bugs / pedir features

- 🐛 Bug en el sitio: usá la plantilla [bug.md](.github/ISSUE_TEMPLATE/bug.md).
- 📚 Tarea de curso a trackear: usá la plantilla [tarea-curso.md](.github/ISSUE_TEMPLATE/tarea-curso.md).
- 🔒 Vulnerabilidad de seguridad: NO abras issue público. Ver [SECURITY.md](SECURITY.md).

## Estructura del repo (resumen)

```
.
├── apps/astro-site/   # Sitio Astro 5 con Tutor AI/TTS
├── coursework/        # 17 bimestres con material académico
├── resources/         # Mallas, plantillas, documentos institucionales
├── docs/              # Convenciones, decisiones de arquitectura, archivo
├── sessions/          # Bitácora de sesiones de trabajo
├── scripts/           # Helpers (update-context.sh, install-hooks.sh)
├── context.md         # Snapshot vivo del proyecto
├── CLAUDE.md          # Instrucciones para agentes IA
└── pyproject.toml     # uv coursework
```

Detalles en [`context.md`](context.md).
