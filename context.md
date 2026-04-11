# Context — Analista Programador Computacional · DuocUC

> **Snapshot vivo del proyecto**. Lee este archivo al inicio de cada sesión.
> Última actualización abajo. Si la fecha es vieja, puede haber drift — verifica con `git log` y `git status`.

---

## ¿Qué es este repo?

Repositorio personal del programa **Analista Programador Computacional** (DuocUC, 17 bimestres, modalidad online). Combina:

1. **Material académico** (`coursework/`) — un directorio por bimestre con todas las asignaturas, experiencias y semanas.
2. **Sitio web** (`apps/astro-site/`) — portal Astro 5 con generadores interactivos, Tutor AI con TTS, índices de recursos. Es la cara pública del proyecto.
3. **Recursos compartidos** (`resources/`) — mallas curriculares, plantillas, documentos institucionales.
4. **Documentación viva** — `context.md` (este archivo) y `sessions/` viven en la raíz para acceso rápido. Convenciones, decisiones de arquitectura y archivo histórico viven en `docs/` (que ahora es 100% source-of-truth markdown). El sitio se publica vía GitHub Actions desde `apps/astro-site/dist/` (gitignored).

GitHub: https://github.com/fos-duoc/programador-computacional-duocuc

---

## Estado actual

| Aspecto | Valor |
|---|---|
| Bimestres con material real | 1, 2, 3 (programación) |
| Resto de bimestres | placeholders (`.gitkeep` + READMEs cheatsheet) |
| Sitio Astro | funcional, deploya a Pages vía Actions desde `apps/astro-site/dist/` |
| Tutor AI | activo (TTS Puter.js + Web Speech API fallback) |
| Última gran refactor | 2026-04-11 — reestructura a `apps/`/`coursework/`/`resources/` + sistema de contexto |
| Rename del repo | 2026-04-11 — `Analista-Programador-Computacional-DuocUC` → `programador-computacional-duocuc` (ver [Rename del repo — estado](#rename-del-repo--estado)) |

---

## Stack técnico

| Capa | Versión | Pin |
|---|---|---|
| Python | 3.13 | `.python-version` |
| Node | 22 LTS (sugerido), corriendo en 20.x | `.nvmrc` |
| uv | 0.11.6+ | global (`uv self update`) |
| Astro | 5.18.x | `apps/astro-site/package.json` |
| TypeScript | 5.9.x | `apps/astro-site/package.json` |

**Deps Python clave** (`pyproject.toml`): jupyter, pandas, numpy, sqlalchemy, psycopg, pytest, ruff, mypy.

**Deps Astro clave**: `astro-icon`, `@astrojs/sitemap`, `astro-compress`, `astro-seo`, `frappe-gantt`.

---

## Layout

```
.
├── context.md               # ← este archivo (snapshot vivo del repo)
├── sessions/                # bitácora por sesión (YYYY-MM-DD.md)
│   ├── _template.md
│   └── 2026-04-11.md
├── apps/astro-site/         # Astro 5 — código deployable
├── coursework/              # 17 bimestres en kebab-case
│   └── bimestre-XX-<slug>/
│       └── <asignatura>/
│           ├── archivos-curso/
│           ├── actividades/
│           └── exp{1,2,3}/semana-NN/
├── resources/               # mallas, plantillas, docs institucionales
├── docs/                    # 100% source-of-truth markdown
│   ├── conventions.md
│   ├── architecture/
│   └── archive/             # docs históricos (CLAUDE_backup, PLAN-INTERACTIVE, etc.)
├── scripts/                 # helpers (update-context.sh, etc.)
├── pyproject.toml           # uv coursework
├── llm.md                   # instrucciones para agentes IA
└── README.md
```

---

## Convenciones (resumen)

- **Naming de carpetas**: kebab-case sin espacios ni comas.
- **Commits**: Conventional Commits (`feat`, `fix`, `docs`, `refactor`, `chore`, `build`, `ci`, `test`). Ver [docs/conventions.md](docs/conventions.md).
- **Branches**: `feat/<topic>`, `fix/<topic>`, `chore/<topic>`. PR a `main` con descripción y test plan.
- **Sesiones de trabajo**: ver [sessions/](sessions/) — copiar `_template.md` al inicio.
- **Gatekeeper anti-IA-mentions**: pre-commit + commit-msg hooks bloquean menciones a marcas de asistentes de IA en archivos staged y mensajes de commit. Mantiene el repo neutral. Script: [scripts/check-no-ai-mentions.sh](scripts/check-no-ai-mentions.sh). Modos: staged (default), COMMIT_EDITMSG, `--all`.
- **Instrucciones para agentes LLM**: en [llm.md](llm.md) (lowercase, nombre neutral — antes `CLAUDE.md`).

---

## Workflow de sesiones

**Al iniciar una sesión:**
1. `git pull && git status`
2. Leer este archivo (`context.md`).
3. Leer la última sesión en `sessions/` para retomar contexto.
4. Crear nueva entrada del día desde `sessions/_template.md` (o usar `./scripts/update-context.sh`).

**Al cerrar una sesión:**
1. Llenar la entrada del día con: objetivo, cambios, decisiones, próximos pasos.
2. Si hubo cambios estructurales o de stack, actualizar este archivo.
3. Commit con mensaje Conventional + push.

Hay un script helper: `scripts/update-context.sh` — crea la entrada del día y stampa este archivo.

---

## Rename del repo — estado

El 2026-04-11 (commit `33950e90`) se renombró el repo de `Analista-Programador-Computacional-DuocUC` a `programador-computacional-duocuc` (kebab-case, más corto, neutral). El cambio se ejecutó como sed mass replace sobre 23 archivos (base path de Astro, manifest, OG image URL, canonical, asset paths, data files, docs y sesiones).

**Migrados** al slug nuevo:

- GitHub: `github.com/fos-duoc/programador-computacional-duocuc`
- Azure DevOps: `dev.azure.com/fos-duoc/programador-computacional-duocuc`

**Pendientes** (mirrors externos siguen con el slug viejo porque los repos en esas plataformas aún no fueron renombrados):

- GitLab: `gitlab.com/fos-duoc/analista-programador-computacional-duocuc`
- Bitbucket: `bitbucket.org/fos-duoc/analista-programador-computacional-duocuc`

Las URLs hard-coded en [apps/astro-site/src/components/Footer.astro](apps/astro-site/src/components/Footer.astro), [apps/astro-site/src/components/Header.astro](apps/astro-site/src/components/Header.astro) y [.github/workflows/mirror-repos.yml](.github/workflows/mirror-repos.yml) reflejan esta asimetría **intencionalmente** — hay comentarios inline en los 3 archivos apuntando a esta sección. Follow-up: renombrar en GitLab y Bitbucket desde la UI de cada plataforma, luego completar el sed.

**Whitelist** (no se tocaron en el rename, intencional): `docs/archive/CLAUDE_backup_12_Jan_2026.md`, `apps/astro-site/public/original.html`, `apps/astro-site/original_index_backup.html`, `resources/documentos/Analista-Programador-Computacional-Guia-Completa.md` (este último es el nombre del PDF oficial DuocUC, no el del repo).

---

## Tech debt conocida

- **🔥 Data dumps inline (~880 KB/page)**: `sala-de-estudio/index.html` pesa 1.26 MB porque `data/asignaturas.ts` (8022 líneas) y `data/technologies.ts` se serializan inline vía `define:vars` en cada componente que los usa. Migración propuesta: mover a `public/data/*.json` con fetch async + loading state. Riesgo medio (toca el Tutor AI). Plan completo en `docs/architecture/astro-site.md`. Ahorro estimado: -800 KB por page.
- **astro-site/tsconfig**: `extends astro/tsconfigs/strict` con 379 errores de TS pre-existentes en el código del Tutor AI. `astro check` no es bloqueante en CI hasta limpieza gradual.
- **astro-site lint warnings**: 65 warnings residuales (post auto-fix) — mayormente unused vars sin prefijo `_` y ocasional `any`. Limpiables a mano.
- **Astro 6**: requiere Node ≥22.12. Pendiente bump de runtime + test integral del Tutor AI.
- **5 vulnerabilidades npm moderate** en `@astrojs/check` → volar-service-yaml. Sin fix mayor disponible. Esperar upstream.
- **Tests**: ni JS/Astro ni Python tienen tests. Sprint 5 del audit lo cubre.
- **Lighthouse CI**: no configurado todavía. Sprint 5 del audit.

### ⚠️ Acción manual requerida del usuario

**Antes de mergear el PR de modernización**, ir a GitHub repo settings → Pages → Source y cambiar de "Deploy from a branch (docs/)" a **"GitHub Actions"**. Sin este cambio, el sitio público se rompe en cuanto se mergee porque el build output ya no vive en `docs/`.

---

## Última actualización

- **Fecha**: 2026-04-11
- **Sesión**: sessions/2026-04-11.md
- **Branch al cierre**: `chore/modernize-and-restructure`
- **Commit**: `33950e90`
