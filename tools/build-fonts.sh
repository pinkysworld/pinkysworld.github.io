#!/usr/bin/env bash
# Regenerate the self-hosted webfonts in assets/fonts/.
#
# Downloads the official upstream releases, subsets them to the characters this
# site actually uses, and writes variable woff2 files. Run from the repo root.
#
# Requires: python3 with fonttools and brotli  (pip3 install --user fonttools brotli)

set -euo pipefail

JBM_VERSION="2.304"
INTER_VERSION="4.1"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "→ downloading JetBrains Mono ${JBM_VERSION} and Inter ${INTER_VERSION}"
curl -sSL -o "$WORK/jbm.zip" \
  "https://github.com/JetBrains/JetBrainsMono/releases/download/v${JBM_VERSION}/JetBrainsMono-${JBM_VERSION}.zip"
curl -sSL -o "$WORK/inter.zip" \
  "https://github.com/rsms/inter/releases/download/v${INTER_VERSION}/Inter-${INTER_VERSION}.zip"

unzip -o -q "$WORK/jbm.zip" "fonts/variable/*" "OFL.txt" -d "$WORK"
unzip -o -q "$WORK/inter.zip" "InterVariable.ttf" "InterVariable-Italic.ttf" "LICENSE.txt" -d "$WORK"

# latin + latin-ext (the ranges Google Fonts itself serves for these families),
# plus the arrows, geometric shapes and math symbols used across the site.
# Regenerate the EXTRAS list with: tools/list-glyphs.py
LATIN="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
LATIN_EXT="U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
EXTRAS="U+0394,U+03B4,U+03B5,U+2075,U+207B,U+2082,U+209B,U+2190,U+2192,U+2194,U+2197,U+2198,U+21B5,U+21CC,U+2202,U+2211,U+221E,U+2295,U+229E,U+2302,U+2308,U+2309,U+2317,U+2318,U+2325,U+232C,U+25B8,U+25C6,U+25C7,U+25CF,U+25D0,U+2699,U+2713,U+2717,U+2726"
UNICODES="${LATIN},${LATIN_EXT},${EXTRAS}"
FEATURES="kern,liga,calt,ccmp,locl,mark,mkmk,rlig,rvrn,tnum"

subset() {
  local src="$1" dst="$2"
  pyftsubset "$src" \
    --output-file="${REPO_ROOT}/assets/fonts/${dst}" \
    --flavor=woff2 \
    --unicodes="$UNICODES" \
    --layout-features="$FEATURES" \
    --drop-tables+=DSIG
  printf '  %-34s %4s KB\n' "$dst" "$(( $(stat -f%z "${REPO_ROOT}/assets/fonts/${dst}" 2>/dev/null || stat -c%s "${REPO_ROOT}/assets/fonts/${dst}") / 1024 ))"
}

echo "→ subsetting"
mkdir -p "${REPO_ROOT}/assets/fonts"
subset "$WORK/fonts/variable/JetBrainsMono[wght].ttf"        jetbrains-mono-var.woff2
subset "$WORK/fonts/variable/JetBrainsMono-Italic[wght].ttf" jetbrains-mono-var-italic.woff2
subset "$WORK/InterVariable.ttf"                             inter-var.woff2
subset "$WORK/InterVariable-Italic.ttf"                      inter-var-italic.woff2

cp "$WORK/OFL.txt"     "${REPO_ROOT}/assets/fonts/JetBrainsMono-OFL.txt"
cp "$WORK/LICENSE.txt" "${REPO_ROOT}/assets/fonts/Inter-LICENSE.txt"

echo "→ done"
