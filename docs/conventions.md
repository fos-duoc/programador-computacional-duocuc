# Convenciones del repositorio

> Reglas que aplican a todo el código y documentación de este repo. Si encuentras una excepción, documéntala en `docs/architecture/` y enlázala desde aquí.

---

## 📁 Naming de archivos y carpetas

| Elemento | Convención | Ejemplo |
|---|---|---|
| Carpetas | `kebab-case` sin espacios ni comas | `bimestre-04-consulta-bd-cloud-computing` |
| Archivos código JS/TS/Astro | `PascalCase.astro` para componentes, `kebab-case.{ts,js}` para utilidades | `BimestreCard.astro`, `update-context.sh` |
| Archivos Python | `snake_case.py` | `analizador_csv.py` |
| Archivos Markdown | `UPPER_CASE.md` para meta-docs raíz, `kebab-case.md` para resto | `README.md`, `2026-04-11.md` |
| Carpetas de proyectos estudiantiles | **respetar lo que entrega el alumno/curso** — no se renombran | `SalmonttApp_S6/`, `Fuad_Onate_*` |

---

## 🌳 Branches

```
main                          ← rama estable, protegida
chore/<topic>                 ← refactors, tooling, dependencias
feat/<topic>                  ← funcionalidad nueva
fix/<topic>                   ← bug fix
docs/<topic>                  ← cambios solo de documentación
exp/<bimestre>-<topic>        ← exploración o experimentos académicos
```

- Ramas cortas (< 1 semana). Si crece, dividir.
- Rebase + merge (no merge commit) salvo PRs grandes que merezcan history.
- Eliminar la rama tras mergear.

---

## ✍️ Commits — Conventional Commits

Formato: `<type>(<scope>): <subject>`

| Type | Cuándo |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Solo documentación |
| `refactor` | Cambio de código sin alterar comportamiento |
| `chore` | Mantenimiento (deps, tooling) |
| `build` | Cambios al sistema de build o deps |
| `ci` | Cambios a config de CI |
| `test` | Agregar/arreglar tests |
| `style` | Formato (whitespace, prettier) |
| `perf` | Mejora de performance |

**Reglas:**
- Subject ≤ 72 caracteres, en imperativo presente, sin punto final.
- Body opcional con detalles del **por qué** (no del qué — eso lo dice el diff).
- Footer para breaking changes (`BREAKING CHANGE:`) o issues (`Refs #123`).
- En español o inglés, consistente dentro del PR.

**Ejemplos:**
```
feat(astro-site): añadir generador de queries SQL en /recursos
fix(tutor-ai): exponer tooltipSystem a window para acceso externo
chore(deps): bump astro 5.16.6 → 5.18.1
refactor!: reorganize repo to coursework/apps/resources layout

BREAKING CHANGE: rutas de Bimestre-XX renombradas a coursework/bimestre-XX-<slug>.
```

---

## 🧪 Calidad

### astro-site

- `npm run lint` debe pasar (warnings permitidos, errores no).
- `npm run build` debe pasar.
- `npm run check` (astro check) es informativo, no bloqueante (tech debt — ver `docs/architecture/astro-site.md`).
- Prettier formatea automáticamente; nunca cometas archivos sin formatear (`npm run format` antes de commit).

### Python coursework

- `uv run ruff check .` debe pasar.
- `uv run pytest` debe pasar (cuando existan tests).
- `uv sync` antes de empezar trabajo nuevo.

---

## 📝 Pull requests

1. Branch desde `main` actualizada.
2. Commits Conventional, foco claro.
3. Descripción del PR usa el template de `.github/PULL_REQUEST_TEMPLATE.md`.
4. Si toca el sitio: incluir screenshot o GIF del cambio.
5. Si rompe rutas: marcar `BREAKING CHANGE` en commit y describir migración en el PR.
6. Mergear con squash si hay >5 commits ruidosos, rebase si los commits son limpios.

---

## 🧠 Sesiones de trabajo

Ver `sessions/_template.md` y `context.md` (ambos en la raíz) para el flujo de inicio/cierre.

**Regla de oro**: ningún día de trabajo sustancial cierra sin entrada en `sessions/YYYY-MM-DD.md`. Si fueron 5 minutos para arreglar un typo, omítelo. Si fue >30 min de trabajo o introdujo decisiones, anótalo.

---

## 🔒 Lo que nunca va al repo

- Credenciales (`.env`, `secrets.json`, tokens).
- Archivos descargados de OneDrive/Google Drive grandes (>10 MB) — usar `resources/` con un README explicando dónde vivir.
- `node_modules/`, `.venv/`, `dist/`, `.astro/` (gitignored).
- Archivos personales de IDE (`.idea/`, `.vscode/settings.json` salvo el compartido).
