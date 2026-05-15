## Plan: Raise D1 men's Discus walk-on floor to 156'0"

**Scope:** All D1 schools, men's Discus only, where current walk-on is below 156'0".

**Skip:** Schools with `hasOfficialStandards: true` (verified standards stay as-is).

**Method (per school):**
1. Compute `delta = 156'0" − current walk-on` (in inches).
2. Add `delta` to **walkon, recruit, and target** so existing tier spacing is preserved.

**Examples:**
- School with 150 / 145 / 140 → **166'0" / 161'0" / 156'0"** (+6'0")
- School with 155'0 / 150'0 / 145'0 → **156'0" / 151'0" / 146'0"**... wait that lowers recruit. Correct: add delta of 11" to all → **155'11" / 150'11" / 145'11"**... 

Re-stating clearly: delta is added uniformly to all three tiers, so target stays highest, recruit middle, walk-on at the new 156'0" floor.

- 150'0" / 145'0" / 140'0" (delta = 16') → **166'0" / 161'0" / 156'0"**
- 154'0" / 149'0" / 144'0" (delta = 12') → **166'0" / 161'0" / 156'0"**
- 155'6" / 150'6" / 145'6" (delta = 10'6") → **165'6"... 

Let me recompute: walk-on 145'6" → delta to 156'0" is 10'6". Add to all: target 155'6"+10'6" = 166'0", recruit 150'6"+10'6" = 161'0", walkon 156'0". ✓

**Affected:** Only D1 men's Discus rows where walk-on < 156'0" and `hasOfficialStandards: false`. Women, other events, and other divisions untouched.

**Implementation:** Single Node script over `src/data/schoolStandards.ts`, gated by division (D1), gender (male section only), event (Discus), and the official-standards flag. Mirrors the shot put floor script pattern, with careful `maleStandards:` / `femaleStandards:` boundary tracking to avoid touching female rows.
