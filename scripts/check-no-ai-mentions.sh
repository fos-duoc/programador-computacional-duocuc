#!/usr/bin/env bash
#
# check-no-ai-mentions.sh — gatekeeper que bloquea menciones a asistentes
# de IA en commits y archivos staged.
#
# Patrones bloqueados (case-insensitive):
#   - "claude code"
#   - "claude opus|sonnet|haiku" + "claude.com"
#   - "anthropic"
#   - "co-authored-by:.*claude"
#   - "generated with [claude code]"
#
# Excludes:
#   - El propio script (apps/.../tests pueden referenciar el patrón)
#   - .git/, node_modules/, dist/, .astro/, .venv/, .pre-commit cache
#   - sessions/*.md (bitácora histórica de trabajo donde se anota qué herramientas se usaron)
#
# Uso (vía pre-commit):
#   - Como check-msg hook: recibe path al COMMIT_EDITMSG como $1
#   - Como pre-commit hook (sin args): escanea archivos staged
#
# Uso manual:
#   ./scripts/check-no-ai-mentions.sh                         # escanea staged
#   ./scripts/check-no-ai-mentions.sh path/to/COMMIT_EDITMSG  # escanea ese archivo
#   ./scripts/check-no-ai-mentions.sh --all                   # escanea TODO el repo

set -euo pipefail

# Patrones a buscar (extended regex, case-insensitive)
PATTERNS=(
  'claude[ -]code'
  'claude (opus|sonnet|haiku)'
  'claude\.com'
  'anthropic\.com'
  '\banthropic\b'
  'co-authored-by:[[:space:]]*claude'
  'generated with \[claude'
  '🤖 Generated with'
)

# Excludes regex (archivos cuya ruta matchea esto se saltan)
EXCLUDE_PATHS_REGEX='^(\.git/|node_modules/|dist/|\.astro/|\.venv/|\.cache/|coursework/.*/(archivos-curso|exp[123])/|scripts/check-no-ai-mentions\.sh$|sessions/.*\.md$|\.pre-commit-config\.yaml$|llm\.md$|docs/archive/|apps/astro-site/src/components/(TechStack2025|AIToolsSection)\.astro$|resources/documentos/Plan-Mejoras-Sitio-Web\.md$)'

# NOTA: TechStack2025.astro, AIToolsSection.astro y Plan-Mejoras-Sitio-Web.md
# están whitelisted porque listan Anthropic/Claude como herramientas reales del
# stack educativo (no son credits/attribution sino content del catálogo).
# Si querés removerlos, edita estos archivos a mano y luego saca el whitelist.

# ──────────────────────────────────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────────────────────────────────

red()   { printf '\033[0;31m%s\033[0m\n' "$*" >&2; }
yellow(){ printf '\033[0;33m%s\033[0m\n' "$*" >&2; }
green() { printf '\033[0;32m%s\033[0m\n' "$*" >&2; }

build_grep_pattern() {
  local pat=""
  for p in "${PATTERNS[@]}"; do
    if [ -n "$pat" ]; then pat="$pat|"; fi
    pat="$pat$p"
  done
  printf '%s' "$pat"
}

scan_file() {
  local file="$1"
  local pattern="$2"
  if [ ! -f "$file" ]; then return 0; fi
  if grep -E -i -n -H "$pattern" "$file" 2>/dev/null; then
    return 1
  fi
  return 0
}

# ──────────────────────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────────────────────

PATTERN="$(build_grep_pattern)"
violations=0

if [ "${1:-}" = "--all" ]; then
  # Modo --all: escanea todo el repo (excluyendo paths bloqueados)
  yellow "Escaneando todo el repo en busca de menciones bloqueadas..."
  while IFS= read -r file; do
    if echo "$file" | grep -E -q "$EXCLUDE_PATHS_REGEX"; then continue; fi
    if ! scan_file "$file" "$PATTERN"; then
      violations=$((violations + 1))
    fi
  done < <(git ls-files)
elif [ -n "${1:-}" ] && [ -f "${1}" ]; then
  # Modo commit-msg: el primer argumento es el archivo del mensaje
  if ! scan_file "$1" "$PATTERN"; then
    violations=$((violations + 1))
  fi
else
  # Modo pre-commit: escanea archivos staged
  while IFS= read -r file; do
    if [ -z "$file" ]; then continue; fi
    if echo "$file" | grep -E -q "$EXCLUDE_PATHS_REGEX"; then continue; fi
    if ! scan_file "$file" "$PATTERN"; then
      violations=$((violations + 1))
    fi
  done < <(git diff --cached --name-only --diff-filter=ACM)
fi

if [ "$violations" -gt 0 ]; then
  red ""
  red "❌ Gatekeeper: detectadas menciones a asistentes de IA bloqueadas."
  red "   Patrones bloqueados: claude code/opus/sonnet/haiku, anthropic,"
  red "   co-authored-by claude, '🤖 Generated with', etc."
  red ""
  red "   Bypass de emergencia (NO recomendado): git commit --no-verify"
  exit 1
fi

green "✅ Gatekeeper: sin menciones bloqueadas."
exit 0
