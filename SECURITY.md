# Política de seguridad

## Versiones soportadas

Este repo es un proyecto académico personal. Solo la rama `main` recibe parches.

| Versión | Soporte |
|---|---|
| `main` | ✅ |
| ramas feature | ❌ |
| forks | ❌ (responsabilidad del fork) |

## Reportar una vulnerabilidad

Si encuentras una vulnerabilidad de seguridad **NO abras un issue público**. En su lugar:

1. **Privado**: usa [GitHub Security Advisories](https://github.com/fos-duoc/programador-computacional-duocuc/security/advisories/new) (preferido).
2. **Email**: si no tienes cuenta de GitHub, escribe a `fuadonates@gmail.com` con el asunto `[SECURITY] <descripción corta>`.

Incluye en el reporte:

- Descripción del problema y su impacto.
- Pasos para reproducirlo.
- Versión / commit afectado.
- Posible mitigación si la conoces.

## Tiempo de respuesta

Como es un proyecto personal de un estudiante, no garantizo SLA. Esperá:

- **Acuse de recibo**: 7 días.
- **Triage inicial**: 14 días.
- **Fix o workaround**: depende de la severidad.

Te avisaré antes de publicar cualquier disclosure y te daré crédito si lo deseás.

## Alcance

**En alcance:**

- Código en `apps/astro-site/` (sitio público)
- Workflows en `.github/workflows/`
- Scripts de build/deploy en `scripts/`

**Fuera de alcance:**

- Material académico en `coursework/` (entregables del alumno, no production code)
- Vulnerabilidades en deps del coursework Python (`pyproject.toml`) — son para experimentos locales
- Vulnerabilidades teóricas sin PoC reproducible
- Configuración del propio fork del usuario

## Hardening en curso

El repo usa:

- **Dependabot** para bumps automáticos de npm, pip y GitHub Actions (`.github/dependabot.yml`).
- **`npm audit`** y **`uv lock --check`** en CI.
- **Secret scanning** automático de GitHub + futura integración con gitleaks.
- **CodeQL** (pendiente — ver `context.md` sección tech debt).
- **Permisos mínimos** en workflows (`contents: read` por default, escala solo cuando hace falta).

Ver `docs/architecture/astro-site.md` para detalles.
