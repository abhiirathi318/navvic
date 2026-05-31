#!/usr/bin/env python3
"""Outline the Navvic wordmark + tagline from Plus Jakarta Sans and compose
fully-vector SVG logo lockups (no live text -> renders identically everywhere)."""
import pathlib
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen

ROOT = pathlib.Path(__file__).parent
OCEAN = "#22a7c9"
INK = "#06192c"
WHITE = "#ffffff"

def instance(weight):
    f = TTFont(ROOT / "PlusJakartaSans-var.ttf")
    instantiateVariableFont(f, {"wght": weight}, inplace=True)
    return f

def layout(font, text, tracking_units):
    """Return [(glyphName, xOffset)], total advance width (font units)."""
    cmap = font.getBestCmap()
    gs = font.getGlyphSet()
    out, x = [], 0
    for ch in text:
        gname = cmap.get(ord(ch))
        if gname is None:
            x += tracking_units
            continue
        out.append((gname, x))
        x += gs[gname].width + tracking_units
    return out, x

def glyph_d(font, gname, dx):
    """SVG path data for one glyph, flipped to y-down, shifted by dx."""
    gs = font.getGlyphSet()
    pen = SVGPathPen(gs)
    tpen = TransformPen(pen, (1, 0, 0, -1, dx, 0))  # flip y, translate x
    gs[gname].draw(tpen)
    return pen.getCommands()

def group_bounds(font, glyphs):
    bp = BoundsPen(font.getGlyphSet())
    gs = font.getGlyphSet()
    minx = miny = 1e9; maxx = maxy = -1e9
    for gname, dx in glyphs:
        bp = BoundsPen(gs)
        tpen = TransformPen(bp, (1, 0, 0, -1, dx, 0))
        gs[gname].draw(tpen)
        if bp.bounds:
            x0, y0, x1, y1 = bp.bounds
            minx, miny = min(minx, x0), min(miny, y0)
            maxx, maxy = max(maxx, x1), max(maxy, y1)
    return minx, miny, maxx, maxy

def paths_for(font, glyphs, fill):
    d = " ".join(glyph_d(font, g, dx) for g, dx in glyphs if glyph_d(font, g, dx))
    return f'<path d="{d}" fill="{fill}"/>'

# ---- the gradient tile (vector, square 64-unit grid) ----
def tile(sz):
    return (f'<svg x="0" y="0" width="{sz}" height="{sz}" viewBox="0 0 64 64" '
            f'overflow="visible">'
            '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="#22a7c9"/><stop offset="1" stop-color="#0a2540"/>'
            '</linearGradient></defs>'
            '<rect width="64" height="64" rx="16" fill="url(#g)"/>'
            '<g fill="none" stroke="#fff" stroke-width="4.6" stroke-linecap="round" '
            'stroke-linejoin="round"><path d="M16 27 L32 17 L48 27"/>'
            '<path d="M16 38 L32 28 L48 38"/><path d="M16 49 L32 39 L48 49"/></g></svg>')

EM = 1000
F800 = instance(800)
EM = F800["head"].unitsPerEm
TRACK = -0.03 * EM  # -0.03em letter-spacing

def wordmark_inner(nav_fill, vic_fill):
    """Return (svg_fragment, width, top, bottom) for 'Navvic' in font units, baseline y=0."""
    gl, total = layout(F800, "Navvic", TRACK)
    nav = [g for g in gl if g[1] < gl[3][1]]   # first 3 glyphs (Nav)
    nav = gl[:3]; vic = gl[3:]
    x0, y0, x1, y1 = group_bounds(F800, gl)
    frag = paths_for(F800, nav, nav_fill) + paths_for(F800, vic, vic_fill)
    return frag, x0, x1, y0, y1, total

def write_wordmark(name, nav_fill, vic_fill, pad=40):
    frag, x0, x1, y0, y1, total = wordmark_inner(nav_fill, vic_fill)
    w = (x1 - x0) + 2 * pad
    h = (y1 - y0) + 2 * pad
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w/ (EM/200):.0f}" '
           f'height="{h/(EM/200):.0f}" viewBox="{x0-pad:.1f} {y0-pad:.1f} {w:.1f} {h:.1f}">'
           f'{frag}</svg>')
    (ROOT / f"{name}.svg").write_text(svg)
    return x0, x1, y0, y1

def write_horizontal(name, nav_fill, vic_fill, pad=40):
    frag, x0, x1, y0, y1, total = wordmark_inner(nav_fill, vic_fill)
    word_h = y1 - y0
    tile_sz = word_h * 1.18
    gap = tile_sz * 0.30
    # tile placed left, vertically centered on word; word starts after tile+gap
    tile_x = 0
    tile_y = y0 + (word_h - tile_sz) / 2
    word_shift = tile_sz + gap - x0
    inner = (f'<g transform="translate({tile_x},{tile_y}) scale({tile_sz/64:.4f})">{tile(64)}</g>'
             f'<g transform="translate({word_shift:.1f},0)">{frag}</g>')
    total_w = tile_sz + gap + (x1 - x0)
    vb_x = -pad; vb_y = min(tile_y, y0) - pad
    vb_w = total_w + 2 * pad
    vb_h = max(tile_sz, word_h) + 2 * pad
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{vb_w/(EM/200):.0f}" '
           f'height="{vb_h/(EM/200):.0f}" viewBox="{vb_x:.1f} {vb_y:.1f} {vb_w:.1f} {vb_h:.1f}">'
           f'{inner}</svg>')
    (ROOT / f"{name}.svg").write_text(svg)

def write_stacked(name, nav_fill, vic_fill, tag_fill, pad=70):
    frag, x0, x1, y0, y1, total = wordmark_inner(nav_fill, vic_fill)
    word_w = x1 - x0
    word_h = y1 - y0
    # tagline at weight 700, uppercase, wide tracking
    f700 = instance(700)
    cmap = f700.getBestCmap(); gs = f700.getGlyphSet()
    tag_text = "GLOBAL TRADE & LOGISTICS"
    tag_track = 0.38 * EM
    tg, t = [], 0
    for ch in tag_text:
        gname = cmap.get(ord(ch))
        if gname is None:
            t += tag_track; continue
        tg.append((gname, t)); t += gs[gname].width + tag_track
    tb = group_bounds(f700, tg)               # minx, miny, maxx, maxy (flipped)
    tag_w_raw = tb[2] - tb[0]; tag_h_raw = tb[3] - tb[1]
    tscale = (word_w * 0.94) / tag_w_raw       # fit tagline to ~94% of word width
    tag_frag = '<path d="' + " ".join(glyph_d(f700, g, dx) for g, dx in tg) + f'" fill="{tag_fill}"/>'

    tile_sz = word_h * 1.5
    gap1 = word_h * 0.46                        # tile -> word
    gap2 = word_h * 0.42                        # word -> tagline
    content_w = max(tile_sz, word_w, tag_w_raw * tscale)
    cx = pad + content_w / 2

    parts, y = [], pad
    parts.append(f'<g transform="translate({cx - tile_sz/2:.1f},{y:.1f}) scale({tile_sz/64:.4f})">{tile(64)}</g>')
    y += tile_sz + gap1
    parts.append(f'<g transform="translate({cx - word_w/2 - x0:.1f},{y - y0:.1f})">{frag}</g>')
    y += word_h + gap2
    parts.append(f'<g transform="translate({cx - (tag_w_raw*tscale)/2 - tb[0]*tscale:.1f},'
                 f'{y - tb[1]*tscale:.1f}) scale({tscale:.4f})">{tag_frag}</g>')
    y += tag_h_raw * tscale + pad
    vb_w = content_w + 2 * pad
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{vb_w/(EM/200):.0f}" '
           f'height="{y/(EM/200):.0f}" viewBox="0 0 {vb_w:.1f} {y:.1f}">' + "".join(parts) + '</svg>')
    (ROOT / f"{name}.svg").write_text(svg)

write_wordmark("navvic-wordmark-vector", INK, OCEAN)
write_wordmark("navvic-wordmark-white-vector", WHITE, OCEAN)
write_horizontal("navvic-horizontal-vector", INK, OCEAN)
write_horizontal("navvic-horizontal-white-vector", WHITE, OCEAN)
write_stacked("navvic-stacked-vector", INK, OCEAN, OCEAN)
print("wrote vector lockups")
