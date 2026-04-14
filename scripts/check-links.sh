#!/usr/bin/env bash
#
# check-links.sh — verifica links relativos en archivos .md del repo.
#
# Escanea todos los archivos Markdown (excluyendo dist/, node_modules/, archive/,
# archivos-curso/, exp1-3/) y confirma que cada link relativo apunta a un archivo
# o carpeta existente. No chequea URLs HTTP(S) — eso requiere red y falla por flaky.
#
# Uso:
#   ./scripts/check-links.sh              # escanea todo el repo
#   ./scripts/check-links.sh path/to.md   # escanea un archivo
#
# Exit code:
#   0  todo ok
#   1  encontró links rotos

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

EXCLUDE_REGEX='^(apps/astro-site/(node_modules|dist|\.astro)/|coursework/.*/(archivos-curso|exp[123])/|docs/archive/|resources/mallas/)'

# Colectar archivos Markdown
if [[ $# -gt 0 ]]; then
  FILES=("$@")
else
  mapfile -t FILES < <(git ls-files '*.md' | grep -Ev "$EXCLUDE_REGEX" || true)
fi

if [[ ${#FILES[@]} -eq 0 ]]; then
  echo "ℹ️  No hay archivos Markdown para revisar."
  exit 0
fi

echo "🔍 Escaneando ${#FILES[@]} archivo(s) Markdown..."

BROKEN=0
declare -a BROKEN_LINKS=()

for f in "${FILES[@]}"; do
  [[ -f "$f" ]] || continue
  dir=$(dirname "$f")

  # Extraer links [text](path) donde path no empieza con http(s):// o mailto:
  # y no es solo un ancla (#foo)
  while IFS= read -r link; do
    # Descartar anchor-only, URLs absolutas, mailto
    if [[ -z "$link" ]] || [[ "$link" =~ ^# ]] || [[ "$link" =~ ^https?:// ]] || \
       [[ "$link" =~ ^mailto: ]] || [[ "$link" =~ ^ftp:// ]]; then
      continue
    fi

    # Separar path de anchor (file.md#section)
    path="${link%%#*}"
    [[ -z "$path" ]] && continue

    # Path absoluto desde root del repo si empieza con /
    if [[ "$path" =~ ^/ ]]; then
      target="$ROOT${path}"
    else
      target="$dir/$path"
    fi

    if [[ ! -e "$target" ]]; then
      BROKEN_LINKS+=("$f → $link")
      BROKEN=$((BROKEN+1))
    fi
  done < <(grep -oP '\[[^\]]*\]\(\K[^)]+' "$f" 2>/dev/null || true)
done

if (( BROKEN > 0 )); then
  echo ""
  echo "❌ Encontrados $BROKEN link(s) roto(s):"
  printf '   %s\n' "${BROKEN_LINKS[@]}"
  exit 1
fi

echo "✅ Todos los links relativos están OK."
