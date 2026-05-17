# Spectrum Drop

A color-mixing merge puzzle. Drop tiles into columns, merge matching numbers, blend the three primaries for bonus multipliers, and survive the rising floor.

**Live:** <https://spectrum-drop.pages.dev>

## Play

Tap (or click) a column to drop. The current tile is shown above the column you're hovering.

| Input | Action |
| --- | --- |
| Tap column | Drop |
| Drag across columns | Move target |
| Arrow keys + Space | Drop (desktop) |
| `M` | Mute |
| `R` | Restart |

## Rules

- Tiles merge when they share **the same number AND at least one color bit**. A red 2 and a green 2 will NOT merge — they share no color. A red 2 and a yellow 2 (yellow = R + G) WILL merge — they share red.
- Merged tiles' **colors blend** (R + G = Y, R + B = M, G + B = C, all three = white). Blends are connectors: a yellow tile can chain a red group to a green group in a single merge.
- The new value doubles per extra tile in the cluster.
- The floor **rises every 12 drops** early, faster as you score (10 at 1.5k, 8 at 3.5k, 6 at 6k).
- Drop values escalate with score (more 4s and 8s late game). Wild tiles get rarer.
- Game over when the top row is occupied.
- **★ Wild** matches any number AND any color — use it as a bridge. **💥 Bomb** detonates a 3×3 area when it merges.

## Color blend multiplier

Color isn't cosmetic — the more primaries you blend in one merge, the bigger the score:

| Blend | Multiplier |
| --- | --- |
| Single primary | ×1 |
| Two-color (yellow / magenta / cyan) | ×1.5 |
| Three-color (white) | ×3 |

Engineering a white tile from a red + green + blue cluster is the highest-value move in the game.

## Stack

One static HTML file, vanilla JavaScript, ~30 MB of audio assets. No build step, no dependencies. Open `index.html` and it runs.
