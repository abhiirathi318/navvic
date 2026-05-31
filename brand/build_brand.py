#!/usr/bin/env python3
"""Generate per-asset HTML export frames for the Navvic logo system.
Each frame is sized to an exact canvas with built-in clear space; render
with headless Chrome (transparent bg) to get ready-to-use PNGs."""
import pathlib

root = pathlib.Path(__file__).parent
frames = root / "_frames"
frames.mkdir(exist_ok=True)

OCEAN = "#22a7c9"
INK = "#06192c"

# the gradient app tile (mark)
TILE = """<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#22a7c9"/><stop offset="1" stop-color="#0a2540"/>
  </linearGradient></defs>
  <rect width="64" height="64" rx="16" fill="url(#g)"/>
  <g fill="none" stroke="#fff" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 27 L32 17 L48 27"/><path d="M16 38 L32 28 L48 38"/><path d="M16 49 L32 39 L48 49"/>
  </g></svg>"""

def page(name, w, h, body, bg="transparent", color=INK):
    html = f"""<!doctype html><html><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet"/>
<style>
  *{{margin:0;padding:0;box-sizing:border-box}}
  html,body{{width:{w}px;height:{h}px}}
  body{{background:{bg};display:flex;align-items:center;justify-content:center;
        font-family:'Plus Jakarta Sans',sans-serif;color:{color};-webkit-font-smoothing:antialiased}}
  .lockup{{display:flex;align-items:center}}
  .stack{{display:flex;flex-direction:column;align-items:center}}
  .tile{{display:block}}
  .wm{{font-weight:800;letter-spacing:-.03em;line-height:1}}
  .wm i{{font-style:normal;color:{OCEAN}}}
  .tag{{font-weight:700;text-transform:uppercase;color:{OCEAN}}}
</style></head><body>{body}</body></html>"""
    (frames / f"{name}.html").write_text(html)
    return name, w, h, bg

assets = []

# 1 — Primary horizontal lockup, dark text (for light backgrounds)
assets.append(page("navvic-horizontal-ink", 1600, 520,
    f'<div class="lockup" style="gap:34px">'
    f'<span class="tile" style="width:188px;height:188px">{TILE}</span>'
    f'<span class="wm" style="font-size:150px">Nav<i>vic</i></span></div>'))

# 2 — Primary horizontal lockup, white text (for dark backgrounds) — shown on abyss for preview
assets.append(page("navvic-horizontal-white", 1600, 520,
    f'<div class="lockup" style="gap:34px">'
    f'<span class="tile" style="width:188px;height:188px">{TILE}</span>'
    f'<span class="wm" style="font-size:150px">Nav<i>vic</i></span></div>',
    color="#ffffff"))

# 3 — Stacked lockup with tagline (light bg)
assets.append(page("navvic-stacked-ink", 1000, 920,
    f'<div class="stack" style="gap:30px">'
    f'<span class="tile" style="width:230px;height:230px">{TILE}</span>'
    f'<div class="stack" style="gap:14px">'
    f'<span class="wm" style="font-size:128px">Nav<i>vic</i></span>'
    f'<span class="tag" style="font-size:30px;letter-spacing:.42em">Global Trade &amp; Logistics</span>'
    f'</div></div>'))

# 4 — Wordmark only, dark
assets.append(page("navvic-wordmark-ink", 1200, 360,
    '<span class="wm" style="font-size:170px">Nav<i>vic</i></span>'))

# 5 — Wordmark only, white
assets.append(page("navvic-wordmark-white", 1200, 360,
    '<span class="wm" style="font-size:170px">Nav<i>vic</i></span>', color="#ffffff"))

# manifest for the render loop:  name|w|h|bg
(root / "_frames" / "manifest.txt").write_text(
    "\n".join(f"{n}|{w}|{h}|{bg}" for (n, w, h, bg) in assets) + "\n")
print(f"wrote {len(assets)} frames to {frames}")
