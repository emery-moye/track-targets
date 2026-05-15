## Plan: Update University of Rhode Island men's official standards

Edit `src/data/schoolStandards.ts` lines 3016–3035 (`maleStandards` for `a10_rhodeisland`). Women's standards untouched.

### Tier mapping
- **Walk-On** = chart "Walk-On Standard"
- **Recruit** = chart "Scholarship Consideration"
- **Target** = slightly harder than recruit (small deltas: ~0.1–0.15s sprints, ~1s 800, ~3–5s 1600/3200, ~0.15s hurdles, +6–9" jumps, +3–5' throws)

Throws use the chart's implements as listed (12 lb SP, 1.6k Discus, 12 lb Hammer, 25 lb Weight) — same convention used for Fordham. `hasOfficialStandards: true` stays.

### Men's events (target / recruit / walkon)

- 100m: 10.50 / 10.60 / 10.80
- 200m: 21.35 / 21.50 / 22.00
- 400m: 47.20 / 47.50 / 49.00
- 800m: 1:52.00 / 1:53.00 / 1:55.00
- 1600m: 4:06.00 / 4:10.00 / 4:16.00
- 3200m: 8:52.00 / 9:00.00 / 9:16.00
- 110m Hurdles: 13.90 / 14.05 / 14.50
- 400m Hurdles: 52.30 / 53.00 / 55.00
- Long Jump: 24'3" / 23'9" / 23'0"
- Triple Jump: 49'0" / 48'0" / 46'0"
- Pole Vault: 16'3" / 15'9" / 15'0"
- High Jump: 6'11" / 6'9" / 6'6"
- Shot Put: 61'0" / 59'0" / 54'0"
- Discus: 182'0" / 175'0" / 160'0"
- Javelin: 207'0" / 200'0" / 180'0"
- Hammer: 218'0" / 210'0" / 185'0"
- Weight Throw: 73'0" / 70'0" / 64'0"

### Removed (not on the official chart)
`1500m`, `Mile`, `5000m`, `10000m` removed from men's (matches the Fordham precedent of only keeping events listed by the school).

### Notes
- Indoor-only / parenthetical chart rows (55m, 300m, 600m, 1000m, 55HH, 300IH) and Decathlon are not part of the existing standards schema — skipped.
- Women's standards unchanged.
- After edit I'll spot-check the block parses and a couple values render on the school page.
