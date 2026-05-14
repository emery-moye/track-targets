## Plan: Tighten select men's standards for A10 schools (no official standards)

**Scope:** Men's standards only, A10 conference, **excluding** the 3 schools with `hasOfficialStandards: true` (Rhode Island, VCU, Fordham).

**Affected schools (11):** Saint Louis, Duquesne, Saint Joseph's, Davidson, Loyola Chicago, La Salle, St. Bonaventure, George Mason, Dayton, Richmond, George Washington.

**Events to tighten (men only):**

| Event | Tier(s) tightened | Adjustment |
|---|---|---|
| 400m | walk-on only | −0.50s faster |
| 110m Hurdles | target / recruit / walkon | −0.20s faster each |
| 300m Hurdles | target / recruit / walkon | −0.30s faster each |
| Discus | target / recruit / walkon | +5'0" farther each |

Times round to 2 decimals; discus stays in `FT'IN"` format.

**Implementation:** A small Node script that:
1. Walks `src/data/schoolStandards.ts` line-by-line.
2. Tracks current school + `hasOfficialStandards` flag.
3. Inside `maleStandards` of A10 schools without official standards, applies the deltas above to those four events.
4. Writes the file back. Skips invalid values (`TBD`/`N/A`/missing).

No UI changes, no other conferences, no women's standards touched.
