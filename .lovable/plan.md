

## Plan: Increase Men's Shot Put Standards for D1 Schools (Target < 55'0")

### What
Add approximately 3' to all three tiers (target, recruit, walk-on) for every D1 school where men's shot put target is currently under 55'0". Schools with `hasOfficialStandards: true` will be skipped since those are verified published numbers.

### Scope
This affects a large number of D1 schools across many conferences, including:
- **SoCon** (8 schools): current targets ~50'6"–53'0" → ~53'6"–56'0"
- **SEC** (non-official, ~14 schools): current targets ~50'0"–54'0" → ~53'0"–57'0"  
- **Big Ten / ACC / Big 12** (non-official schools): similar adjustments
- **Mid-major D1 conferences** (MAC, CAA, A-10, Sun Belt, MVC, Patriot, MAAC, NEC, Horizon, etc.): all schools with target < 55'0"

Estimated **100+ schools** affected, with changes to men's shot put only (women's standards untouched).

### Adjustment Logic
- **Target**: +3' (e.g., 52'0" → 55'0", 50'6" → 53'6")
- **Recruit**: +3' (e.g., 48'0" → 51'0", 46'6" → 49'6")
- **Walk-on** (if present): +3' (e.g., 44'0" → 47'0")

This brings most D1 targets into the 53'–57' range, closer to the ~58' level the user expects for D1 target recruits.

### Technical Details
- **File**: `src/data/schoolStandards.ts`
- Must identify each D1 school with men's shot put target < 55'0" that does NOT have `hasOfficialStandards: true`
- Only modify the men's `"Shot Put"` line within `maleStandards` blocks
- Preserve all other values and formatting
- Due to scale (~100+ individual line edits), this will be done systematically conference by conference

