## Plan: Raise D1 men's Shot Put walk-on floor to 50'0"

**Scope:** All D1 schools, men's Shot Put only, where current walk-on is below 50'0". 

**Skip:** Schools with `hasOfficialStandards: true` (Fordham, Kent State, Brown, etc.) — verified standards stay as-is, per project convention.

**Affected:** ~91 D1 schools (94 matched, minus 3 official).

**Method (per school):**
1. Compute `delta = 50'0" − current walk-on` (in inches).
2. Add `delta` to **walkon, recruit, and target** so the existing tier spacing is preserved.

**Examples:**
- UNH (was 48 / 44 / 40) → **52'0" / 46'0" / 50'0"**
- VMI (was 50'6" / 46'6" / 42'6") → **58'0" / 54'0" / 50'0"**
- Wofford (was 52'0" / 48'0" / 44'0") → **58'0" / 54'0" / 50'0"**
- Saint Joseph's (was 59'6" / 54'6" / 49'6") → **60'0" / 55'0" / 50'0"** (only +6")

Walk-on becomes a hard floor of 50'0" across all D1 men's Shot Put. Schools already ≥ 50'0" walk-on are untouched. Women, other events, and other divisions are not affected.

**Implementation:** Single Node script over `src/data/schoolStandards.ts`, gated by division, gender, event, and the official-standards flag.
