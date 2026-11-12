# 3Dz – design (úvodní stránka 3dz.cz)

Směr: **cyberpunk** – tmavá noc, neonová žlutá a azurová, šikmo seříznuté rohy, jemná mřížka a řádkování obrazovky. Nadpisy technickým písmem, běžný text čitelným bezpatkovým písmem (kvůli starším zákazníkům).
Nestaví na příkladech z reálných webů (UXKIN nebyl připojený) – rozhodnuto podle přání majitele.

## Barvy
| token | hodnota | role |
|---|---|---|
| `--noc` | #07070c | pozadí |
| `--panel` / `--panel2` | #0e0e17 / #151522 | karty |
| `--text` | #eef1f7 | hlavní text |
| `--slaby` | #a2a8bd | vedlejší text (kontrast 8:1) |
| `--zluta` | #f5e400 | hlavní akce: tlačítka, logo, zvýraznění; text na ní #0a0a0a |
| `--azur` | #00e5ff | linky, rámečky, záře, sekundární tlačítko |
| `--magenta` | #ff2e88 | jediný doplněk: štítek „Připravujeme“, nadtitulek |

## Písmo
- Nadpisy, tlačítka, štítky: **Chakra Petch 700** (vlastní soubory `/fonts`, celá čeština), často verzálkami.
- Text: **Plus Jakarta Sans 500 / 800**, základ 18 px.

## Tvar a efekty
- Rohy šikmo seříznuté (`clip-path`, 18 px karty / 12 px tlačítka), žádné zaoblení.
- Rámeček karty = 2px přechod azurová → magenta. Záře jen u azurových linek a při najetí.
- Nadpis H1: posun azurová/magenta 2 px (chromatická aberace), nic víc.

## Obrázky
- Rendery výrobků z návrháře (`/img`), u vlastního návrhu hlavně zápichy na dort.
