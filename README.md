# Spectrum Drop

A color-mixing merge puzzle. Drop tiles into columns, merge matching numbers, blend the three primaries for bonus multipliers, and survive the rising floor.

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

- Same-number tiles merge into one — the new value doubles per extra tile in the cluster.
- Merged tiles' **colors blend** (R + G = Y, R + B = M, G + B = C, all three = white).
- The floor **rises every 12 drops**. Game over when the top row is occupied.
- **★ Wild** matches any number. **💥 Bomb** detonates a 3×3 area when it merges.

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
