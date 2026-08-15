#!/usr/bin/env python3
"""List every non-ASCII character used anywhere on the site.

The output feeds the EXTRAS list in tools/build-fonts.sh. Characters that fall
inside the latin / latin-ext ranges are already covered and are reported
separately from the ones that need to be named explicitly.
"""

import glob
import html
import os
import unicodedata

# Ranges already covered by the LATIN / LATIN_EXT sets in build-fonts.sh.
COVERED = [
    (0x0000, 0x00FF), (0x0131, 0x0131), (0x0152, 0x0153), (0x02BB, 0x02BC),
    (0x02C6, 0x02C6), (0x02DA, 0x02DA), (0x02DC, 0x02DC), (0x0304, 0x0304),
    (0x0308, 0x0308), (0x0329, 0x0329), (0x2000, 0x206F), (0x2074, 0x2074),
    (0x20AC, 0x20AC), (0x2122, 0x2122), (0x2191, 0x2191), (0x2193, 0x2193),
    (0x2212, 0x2212), (0x2215, 0x2215), (0xFEFF, 0xFEFF), (0xFFFD, 0xFFFD),
    (0x0100, 0x02BA), (0x02BD, 0x02C5), (0x02C7, 0x02CC), (0x02CE, 0x02D7),
    (0x02DD, 0x02FF), (0x1D00, 0x1DBF), (0x1E00, 0x1E9F), (0x1EF2, 0x1EFF),
    (0x2020, 0x2020), (0x20A0, 0x20AB), (0x20AD, 0x20C0), (0x2113, 0x2113),
    (0x2C60, 0x2C7F), (0xA720, 0xA7FF),
]

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def covered(code):
    return any(lo <= code <= hi for lo, hi in COVERED)


def main():
    chars = set()
    for pattern in ("**/*.html", "**/*.js", "**/*.css"):
        for path in glob.glob(os.path.join(ROOT, pattern), recursive=True):
            with open(path, encoding="utf-8", errors="replace") as handle:
                chars |= set(html.unescape(handle.read()))

    extras = sorted(c for c in chars if ord(c) > 127 and not covered(ord(c)))
    print(f"{len(extras)} characters outside latin / latin-ext:\n")
    for char in extras:
        print(f"  U+{ord(char):04X}  {char}  {unicodedata.name(char, '?')}")
    print("\nEXTRAS=\"" + ",".join(f"U+{ord(c):04X}" for c in extras) + "\"")


if __name__ == "__main__":
    main()
