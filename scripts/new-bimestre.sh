#!/usr/bin/env bash
#
# new-bimestre.sh — scaffold de un nuevo bimestre en coursework/
#
# Crea el directorio bimestre-XX-<slug>/ con:
#   - README.md con frontmatter YAML y estructura estándar
#   - Subcarpetas por asignatura con actividades/, archivos-curso/, exp1-3/
#
# Uso:
#   ./scripts/new-bimestre.sh <numero> <slug> <asignatura1> [<asignatura2> ...]
#
# Ejemplo:
#   ./scripts/new-bimestre.sh 1 fundamentos-prog-antropologia fundamentos-programacion antropologia

set -euo pipefail

if [[ $# -lt 3 ]]; then
  echo "Uso: $0 <numero> <slug> <asignatura1> [<asignatura2> ...]" >&2
  echo "Ejemplo: $0 1 fundamentos-prog-antropologia fundamentos-programacion antropologia" >&2
  exit 1
fi

NUM="$1"
SLUG="$2"
shift 2
ASIGNATURAS=("$@")

# Validar número
if ! [[ "$NUM" =~ ^[0-9]+$ ]] || (( NUM < 1 || NUM > 17 )); then
  echo "❌ Número de bimestre debe estar entre 1 y 17 (recibido: $NUM)" >&2
  exit 1
fi

# Validar slug kebab-case
if ! [[ "$SLUG" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "❌ Slug debe ser kebab-case (recibido: $SLUG)" >&2
  exit 1
fi

# Cero-pad número
NUM_PADDED=$(printf "%02d" "$NUM")
DIR="coursework/bimestre-${NUM_PADDED}-${SLUG}"

if [[ -d "$DIR" ]]; then
  echo "❌ Directorio ya existe: $DIR" >&2
  exit 1
fi

echo "📁 Creando $DIR con ${#ASIGNATURAS[@]} asignatura(s)..."

# Crear estructura de directorios
mkdir -p "$DIR"
for asig in "${ASIGNATURAS[@]}"; do
  for sub in actividades archivos-curso exp1 exp2 exp3; do
    mkdir -p "$DIR/$asig/$sub"
  done
  # .gitkeep en carpetas vacías para que git las trackee
  touch "$DIR/$asig/actividades/.gitkeep"
  touch "$DIR/$asig/archivos-curso/.gitkeep"
  touch "$DIR/$asig/exp1/.gitkeep"
  touch "$DIR/$asig/exp2/.gitkeep"
  touch "$DIR/$asig/exp3/.gitkeep"
done

# Componer título humano desde slug
TITLE_HUMAN=$(echo "$SLUG" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')

# Lista YAML de asignaturas (ordenada alfabéticamente para estabilidad)
ASIG_YAML=""
for asig in $(printf "%s\n" "${ASIGNATURAS[@]}" | sort); do
  ASIG_YAML+=$'\n  - '"$asig"
done

# Generar README.md
cat > "$DIR/README.md" <<EOF
---
bimestre: ${NUM}
slug: bimestre-${NUM_PADDED}-${SLUG}
title: "Bimestre ${NUM_PADDED} - ${TITLE_HUMAN}"
status: pending
asignaturas:${ASIG_YAML}
---

# Bimestre ${NUM_PADDED} - ${TITLE_HUMAN}

## Analista Programador Computacional - DuocUC

(Descripción breve del bimestre.)

> **Estado:** pendiente — completar al iniciar.

---

## Asignaturas

EOF

i=1
for asig in $(printf "%s\n" "${ASIGNATURAS[@]}" | sort); do
  asig_human=$(echo "$asig" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
  cat >> "$DIR/README.md" <<EOF
### ${i}. ${asig_human}
- Carpeta: [${asig}/](${asig}/)

EOF
  i=$((i+1))
done

cat >> "$DIR/README.md" <<EOF
---

## Estructura del Bimestre

\`\`\`text
bimestre-${NUM_PADDED}-${SLUG}/
EOF

for asig in "${ASIGNATURAS[@]}"; do
  cat >> "$DIR/README.md" <<EOF
├── ${asig}/
│   ├── actividades/
│   ├── archivos-curso/
│   ├── exp1/
│   ├── exp2/
│   └── exp3/
EOF
done

cat >> "$DIR/README.md" <<EOF
\`\`\`
EOF

echo "✅ $DIR creado."
echo ""
echo "Siguiente paso:"
echo "  git add $DIR"
echo "  Editar $DIR/README.md para llenar descripción y recursos."
