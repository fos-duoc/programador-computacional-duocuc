# Arquitectura — programador-computacional-duocuc

Portafolio académico del programa **Analista Programador Computacional** (DuocUC, 17 bimestres modalidad online). Este documento describe la estructura del monorepo, flujo de CI/CD, deploy y convenciones de trabajo.

## Visión general

Monorepo educativo con cuatro dominios independientes pero vinculados:

- **Código académico** por bimestre (Java, Python, SQL, Kotlin, Angular)
- **Sitio web interactivo** del portafolio (Astro 5 → GitHub Pages)
- **Recursos institucionales** (mallas curriculares, reglamentos, protocolos DuocUC)
- **Tooling del repo** (scripts, hooks, documentación, bitácoras)

## Componentes

```
programador-computacional-duocuc/
│
├── apps/
│   └── astro-site/          ──►  Sitio público (Astro 5 + TS)
│                                 Deploy: GitHub Pages via Actions
│
├── coursework/              ──►  17 bimestres académicos
│   ├── bimestre-01-...      ──►  Fundamentos + Antropología
│   ├── bimestre-02-...      ──►  POO I + Comunicación
│   └── ...                       Cada uno con su propio README
│
├── resources/               ──►  Material institucional DuocUC
│   ├── mallas/              ──►  Mallas curriculares 2025 (jpg/png)
│   ├── documentos/          ──►  Planes y propuestas
│   └── *.pdf                ──►  Reglamentos, protocolos, calendarios
│
├── docs/                    ──►  Documentación técnica del repo
│   ├── conventions.md       ──►  Naming, branches, Conventional Commits
│   ├── architecture/        ──►  Deep-dives (astro-site tech debt, etc.)
│   ├── trello-setup.md      ──►  Onboarding Trello API
│   └── recursos-github.md   ──►  Herramientas externas para perfiles
│
├── scripts/                 ──►  Automatización local
│   ├── check-no-ai-mentions.sh  (gatekeeper anti-IA)
│   ├── install-hooks.sh         (pre-commit installer)
│   └── update-context.sh        (bitácora de sesiones)
│
├── sessions/                ──►  Bitácora cronológica de trabajo
│
├── README.md                ──►  Landing del repo
├── ARCHITECTURE.md          ──►  Este archivo
├── CONTRIBUTING.md          ──►  Guía de contribución
├── SECURITY.md              ──►  Policy de seguridad
├── LICENSE                  ──►  MIT
├── context.md               ──►  Estado vivo del proyecto
└── llm.md                   ──►  Notas de asistentes técnicos (fuera de CI)
```

## Stack tecnológico

| Capa | Herramienta | Propósito |
|------|-------------|-----------|
| Python | 3.13 + [uv](https://github.com/astral-sh/uv) | Coursework de programación base |
| Node | 20.x (pin en [.nvmrc](.nvmrc)) | Toolchain del sitio |
| Sitio web | Astro 5.18 + TypeScript 5.9 | `apps/astro-site/` |
| Backend JVM | Java 17+, Spring Boot | Bimestres 6-8, 11-13 |
| Frontend | Angular, HTML/CSS, JS | Bimestres 8-10 |
| Mobile | Kotlin | Bimestres 9, 10, 14 |
| BD | Oracle, PostgreSQL | Bimestres 3-5, 11 |
| Cloud | AWS, Azure | Bimestres 4, 7, 12, 14, 15 |
| Lint Python | [ruff](https://docs.astral.sh/ruff/) | Lint + format |
| Lint JS/TS | ESLint + Prettier | Via pre-commit |
| Hooks | [pre-commit](https://pre-commit.com/) + commitlint | Gatekeeping local |

## Flujo CI/CD

Seis workflows en [.github/workflows/](.github/workflows/):

| Workflow | Trigger | Propósito |
|----------|---------|-----------|
| [ci.yml](.github/workflows/ci.yml) | push/PR a `main` | Lint + build de astro-site, ruff + pytest de coursework |
| [deploy-pages.yml](.github/workflows/deploy-pages.yml) | push a `main` | Build Astro → publish a GitHub Pages |
| [ai-mentions.yml](.github/workflows/ai-mentions.yml) | push/PR a `main` | Gatekeeper anti-IA en CI (reusa script local) |
| [security.yml](.github/workflows/security.yml) | push/PR + weekly | Secret scanning, deps audit |
| [mirror-repos.yml](.github/workflows/mirror-repos.yml) | push a `main` | Mirror a GitLab y Bitbucket |
| [sync-google-drive.yml](.github/workflows/sync-google-drive.yml) | manual | Sincroniza `resources/` con Drive |

### Deploy GitHub Pages

```
main ──► CI ──► deploy-pages.yml
                    │
                    ├─ cd apps/astro-site
                    ├─ npm ci && npm run build
                    └─ upload dist/ como artifact Pages
                            │
                            └─► https://fos-duoc.github.io/...
```

Requiere **Settings → Pages → Source: GitHub Actions** (no branch).

### Mirrors

- **Primary**: [github.com/fos-duoc/programador-computacional-duocuc](https://github.com/fos-duoc/programador-computacional-duocuc)
- **Mirrors** (asimetría temporal tras rename del repo): GitLab y Bitbucket tienen slug antiguo hasta completar rename ahí. Ver [context.md](context.md) § Rename.

## Gatekeeping

Tres capas para bloquear menciones de asistentes de IA en commits y archivos:

1. **Pre-commit local** ([scripts/check-no-ai-mentions.sh](scripts/check-no-ai-mentions.sh)) — escanea staged
2. **Commit-msg local** (mismo script) — valida el mensaje antes de cerrar el commit
3. **CI** ([.github/workflows/ai-mentions.yml](.github/workflows/ai-mentions.yml)) — `--all` en cada PR; bloquea merge si falla

Cobertura: contenido y nombres de archivo que mencionen asistentes de IA conocidos (lista exacta en el script). Whitelist explícita para componentes Astro que listan herramientas IA como content legítimo (Tutor AI del sitio).

Instalar hooks: `./scripts/install-hooks.sh`.

## Convenciones

- **Naming**: kebab-case para directorios y archivos (excepto docs TitleCase de raíz)
- **Branches**: `feat/*`, `fix/*`, `docs/*`, `chore/*`, `refactor/*`
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/) enforced via commitlint
- **No atribuciones de IA** en commits (sin `Co-Authored-By`, sin "Generated with")

Detalle completo: [docs/conventions.md](docs/conventions.md).

## Integraciones externas

- **Google Drive** (sync de recursos institucionales): workflow manual.

## Contexto vivo

- [context.md](context.md) — estado actual del proyecto, decisiones recientes, TODOs
- [sessions/](sessions/) — bitácora cronológica de sesiones de trabajo
- [docs/archive/](docs/archive/) — planes y memos obsoletos archivados
