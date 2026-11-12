# 3Dz – design (úvodní stránka 3dz.cz)

Směr: **pixelový / retro hra**, ale čitelný pro starší zákazníky. Pixelové jsou nadpisy, rámečky, stíny a ikonky; běžný text je normální bezpatkové písmo.
Nestaví na příkladech z reálných webů (UXKIN nebyl připojený) – rozhodnuto podle značky 3Dz (oranžová z návrháře) a přání „ať to nevypadá jako od AI“.

## Barvy
| token | hodnota | role |
|---|---|---|
| `--noc` | #16121f | pozadí stránky |
| `--karta` | #221a30 | karty, bloky |
| `--karta2` | #2c2240 | vnořené plochy, dlaždice |
| `--obrys` | #0a0710 | pixelové rámečky a stíny |
| `--linka` | #3d3152 | jemné oddělovače |
| `--text` | #f6f0e6 | hlavní text (kontrast 15:1) |
| `--slaby` | #bcb1cc | vedlejší text (kontrast 8:1) |
| `--oranz` | #ff6b1a | hlavní barva: tlačítka, odkazy, zvýraznění |
| `--zluta` | #ffd23f | jediný akcent: cenovka, fokus |
| text na oranžové | #1a0d04 | |

## Písmo
- Nadpisy: **Pixelify Sans 700** (vlastní soubory v `/fonts`, latin + latin-ext = celá čeština).
- Text: **Plus Jakarta Sans 500 / 800**, základ 18 px, řádek 1.5.
- Velikosti: 13 / 15 / 18 / 22 / 28 / 40 / clamp(40–64) px.

## Rozestupy a tvar
- Mřížka 8 px; sekce od sebe 56–72 px; obsah max. 1040 px.
- Žádné zaoblení. Rámeček 4 px `--obrys`, pixelový stín `6px 6px 0 --obrys`, schodovité rohy (`clip-path`).

## Komponenty
- Tlačítko hlavní: oranžové, rámeček + pixelový stín; stisk = posun o 3 px a menší stín; fokus = žlutý přerušovaný obrys.
- Tlačítko vypnuté (e-shop): `--karta2`, přerušovaný rámeček, šedý text.
- Karta: `--karta`, rámeček, pixelový stín, štítek v rohu.
- Ikony: vlastní pixel-art SVG (`shape-rendering: crispEdges`), žádné emoji.

## Obrázky
- Výrobky = rendery z návrháře (průhledné pozadí, `/img`). Až budou fotky skutečných výrobků, nahradí je.
