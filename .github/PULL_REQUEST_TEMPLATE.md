<!--
  Plantilla de PR — borra las secciones que no apliquen.
  Para PRs académicas (entrega de actividades), basta con la sección "Contexto".
-->

## Contexto

<!-- Por qué se hace este cambio. Issue, ticket, conversación, deadline, decisión técnica. -->

## Cambios

<!-- Qué hace este PR. Bullet list, no más de 6 bullets. -->

-

## Test plan

<!-- Cómo se verificó que esto funciona. Si tocó UI, incluir screenshot/GIF. -->

- [ ] `npm run lint` pasa (0 errores)
- [ ] `npm run build` pasa
- [ ] Smoke test manual: <qué se probó>
- [ ] Si tocó Python: `uv run ruff check .` + `uv run pytest`

## Screenshots / evidencia

<!-- Solo si aplica -->

## Breaking changes

<!-- Si rompe rutas, APIs, build, dependencias. Si nada se rompe, escribe "Ninguno". -->

Ninguno

## Checklist

- [ ] Conventional Commit en el título del PR
- [ ] Actualicé `context.md` si cambia algo estructural
- [ ] Anoté la sesión en `sessions/YYYY-MM-DD.md`
