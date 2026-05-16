#!/usr/bin/env bash
# Converts any PNG in public/ that has no .webp counterpart yet.
# Requires: npx sharp-cli  (npm install -g sharp-cli  OR  npx sharp-cli)
# Usage: bash scripts/convert-to-webp.sh

set -euo pipefail

QUALITY=82
PUBLIC_DIR="$(cd "$(dirname "$0")/../public" && pwd)"

echo "Scanning $PUBLIC_DIR for PNG files without .webp counterparts …"

converted=0
skipped=0

for png in "$PUBLIC_DIR"/*.png; do
  [ -f "$png" ] || continue
  webp="${png%.png}.webp"
  if [ -f "$webp" ]; then
    echo "  SKIP  $(basename "$png")  ($(basename "$webp") already exists)"
    ((skipped++)) || true
  else
    echo "  CONVERT  $(basename "$png") → $(basename "$webp")"
    npx sharp-cli --input "$png" --output "$webp" --format webp --quality "$QUALITY"
    ((converted++)) || true
  fi
done

echo ""
echo "Done. Converted: $converted  |  Skipped (already have .webp): $skipped"
