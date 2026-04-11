#!/usr/bin/env bash
#
# install-hooks.sh — instala los pre-commit hooks del repo.
#
# Idempotente: correrlo varias veces no rompe nada.
# Requisitos: uv ya sincronizado (uv sync).
#
# Uso:
#   ./scripts/install-hooks.sh
#
# Para correr los hooks manualmente sobre todo el repo:
#   uv run pre-commit run --all-files
#
# Para bypass (NO recomendado, romper convenciones):
#   git commit --no-verify

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

if ! command -v uv >/dev/null 2>&1; then
  echo "❌ uv no está instalado. Instalalo desde https://docs.astral.sh/uv/" >&2
  exit 1
fi

echo "📦 Sincronizando dev dependencies..."
uv sync --quiet

echo "🔗 Instalando pre-commit hooks (pre-commit + commit-msg)..."
uv run pre-commit install --install-hooks
uv run pre-commit install --hook-type commit-msg

echo ""
echo "✅ Hooks instalados. A partir de ahora cada git commit corre:"
echo "   - Higiene (whitespace, EOL, large files, JSON/YAML/TOML válidos)"
echo "   - Ruff lint+format en archivos Python staged"
echo "   - Prettier + ESLint en archivos staged de apps/astro-site/"
echo "   - Conventional Commits enforcement en el mensaje de commit"
echo ""
echo "ℹ️  Para correr los hooks sobre todo el repo (no solo lo staged):"
echo "   uv run pre-commit run --all-files"
