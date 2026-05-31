#!/usr/bin/env python3
"""Inject parametric SVG glyphs into the concepts gallery placeholders."""
import re, pathlib

def svg(inner: str, c: str, size: int) -> str:
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 64 64" fill="none" '
            f'xmlns="http://www.w3.org/2000/svg">{inner.format(c=c)}</svg>')

GLYPHS = {
    # 01 Compass Rose
    "C": (
        '<circle cx="32" cy="32" r="22.5" stroke="{c}" stroke-width="2.2" opacity="0.5"/>'
        '<polygon points="48,16 38,32 48,48 32,38 16,48 26,32 16,16 32,26" fill="{c}" opacity="0.42"/>'
        '<polygon points="32,7 37,27 57,32 37,37 32,57 27,37 7,32 27,27" fill="{c}"/>'
        '<circle cx="32" cy="32" r="3" fill="{c}"/>'
    ),
    # 02 Wave Chevrons
    "W": (
        '<path d="M14 26 L32 14 L50 26" stroke="{c}" stroke-width="4.6" '
        'stroke-linecap="round" stroke-linejoin="round"/>'
        '<path d="M14 38 L32 26 L50 38" stroke="{c}" stroke-width="4.6" '
        'stroke-linecap="round" stroke-linejoin="round"/>'
        '<path d="M14 50 L32 38 L50 50" stroke="{c}" stroke-width="4.6" '
        'stroke-linecap="round" stroke-linejoin="round"/>'
    ),
    # 03 Route N
    "N": (
        '<path d="M18 48 L18 16 L46 48 L46 16" stroke="{c}" stroke-width="4.4" '
        'stroke-linecap="round" stroke-linejoin="round"/>'
        '<circle cx="18" cy="16" r="4.8" fill="{c}"/>'
        '<circle cx="46" cy="48" r="4.8" fill="{c}"/>'
    ),
    # 04 Globe & Route
    "G": (
        '<circle cx="32" cy="33" r="18" stroke="{c}" stroke-width="2.6"/>'
        '<ellipse cx="32" cy="33" rx="7.5" ry="18" stroke="{c}" stroke-width="1.9"/>'
        '<line x1="14" y1="33" x2="50" y2="33" stroke="{c}" stroke-width="1.9"/>'
        '<path d="M14 46 Q24 8 52 18" stroke="{c}" stroke-width="2.6" '
        'stroke-dasharray="1.6 5" stroke-linecap="round"/>'
        '<circle cx="52" cy="18" r="3.8" fill="{c}"/>'
    ),
    # 05 Origami Vessel
    "B": (
        '<path d="M11 33 H53 L43 47 H21 Z" fill="{c}"/>'
        '<path d="M23 33 L32 15 L32 33 Z" fill="{c}"/>'
        '<path d="M35 33 L35 17 L46 33 Z" fill="{c}"/>'
        '<path d="M11 52 q6 -4 12 0 t12 0 t12 0" stroke="{c}" stroke-width="2.6" '
        'stroke-linecap="round"/>'
    ),
    # 06 Refined Anchor
    "A": (
        '<circle cx="32" cy="13" r="5" stroke="{c}" stroke-width="3"/>'
        '<line x1="32" y1="18" x2="32" y2="49" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
        '<line x1="22" y1="26" x2="42" y2="26" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
        '<path d="M15 38 a17 17 0 0 0 34 0" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
        '<line x1="15" y1="38" x2="11.5" y2="33.5" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
        '<line x1="49" y1="38" x2="52.5" y2="33.5" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
    ),
}

VARIANTS = {
    "WHITE": ("#ffffff", 50),
    "OCEAN": ("#22a7c9", 30),  # on dark abyss tile
    "DARK":  ("#ffffff", 30),  # on solid ocean tile
    "FAV":   ("#ffffff", 19),
}

root = pathlib.Path(__file__).parent
html = (root / "concepts.html").read_text()

def repl(m):
    key, variant = m.group(1), m.group(2)
    inner = GLYPHS[key]
    color, size = VARIANTS[variant]
    return svg(inner, color, size)

html = re.sub(r"__([CWNGBA])_(WHITE|OCEAN|DARK|FAV)__", repl, html)
(root / "concepts.built.html").write_text(html)
print("wrote concepts.built.html")
