#!/usr/bin/env bash
#
# update-context.sh — helper para mantener el sistema de contexto vivo.
#
# Uso:
#   ./scripts/update-context.sh           # crea entrada de hoy desde template + stamp en context.md
#   ./scripts/update-context.sh --stamp   # solo refresca el footer de docs/context.md
#
# El script:
#   1. Crea (si no existe) docs/sessions/YYYY-MM-DD.md a partir de _template.md.
#   2. Actualiza el footer "Última actualización" de docs/context.md con fecha + branch + hash.
#
# Idempotente: si la entrada del día ya existe, no la pisa.

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

CONTEXT_FILE="context.md"
SESSIONS_DIR="sessions"
TEMPLATE_FILE="$SESSIONS_DIR/_template.md"

TODAY="$(date -u +%Y-%m-%d)"
BRANCH="$(git symbolic-ref --short HEAD 2>/dev/null || echo 'detached')"
SHORT_HASH="$(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')"
TODAY_FILE="$SESSIONS_DIR/${TODAY}.md"

stamp_context() {
  if [[ ! -f "$CONTEXT_FILE" ]]; then
    echo "⚠️  $CONTEXT_FILE no existe — nada que stampar." >&2
    return 0
  fi

  python3 - "$CONTEXT_FILE" "$TODAY" "$BRANCH" "$SHORT_HASH" <<'PY'
import re
import sys
from pathlib import Path

path, today, branch, short_hash = sys.argv[1:5]
content = Path(path).read_text(encoding="utf-8")

footer = (
    "## Última actualización\n\n"
    f"- **Fecha**: {today}\n"
    f"- **Sesión**: sessions/{today}.md\n"
    f"- **Branch al cierre**: `{branch}`\n"
    f"- **Commit**: `{short_hash}`\n"
)

pattern = re.compile(r"## Última actualización.*\Z", re.S)
new_content = pattern.sub(footer, content) if pattern.search(content) else content.rstrip() + "\n\n---\n\n" + footer

Path(path).write_text(new_content, encoding="utf-8")
PY
  echo "✅ $CONTEXT_FILE actualizado (fecha=$TODAY, branch=$BRANCH, hash=$SHORT_HASH)"
}

create_today_session() {
  if [[ ! -f "$TEMPLATE_FILE" ]]; then
    echo "⚠️  $TEMPLATE_FILE no existe — saltando creación de sesión." >&2
    return 0
  fi

  if [[ -f "$TODAY_FILE" ]]; then
    echo "ℹ️  $TODAY_FILE ya existe — no se sobreescribe."
    return 0
  fi

  sed \
    -e "s/YYYY-MM-DD/$TODAY/g" \
    -e "s/<nombre de la rama de trabajo>/$BRANCH/g" \
    "$TEMPLATE_FILE" > "$TODAY_FILE"
  echo "✅ Creado $TODAY_FILE"
}

case "${1:-}" in
  --stamp)
    stamp_context
    ;;
  ""|--all)
    create_today_session
    stamp_context
    ;;
  -h|--help)
    sed -n '2,20p' "$0"
    ;;
  *)
    echo "Argumento no reconocido: $1" >&2
    echo "Usa --help para ver opciones." >&2
    exit 1
    ;;
esac
