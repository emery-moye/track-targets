

## Plan: Add Empire 8 Conference Schools (D3)

### Overview
Add 9 Empire 8 Conference schools using Tufts University as the baseline template. Standards will be kept very similar to Tufts but with small variations between schools to differentiate them (same approach used for Landmark Conference).

### Schools (ranked best to worst)
1. SUNY Geneseo (NY)
2. Brockport State (NY)
3. St. John Fisher (NY)
4. Utica University (NY)
5. Nazareth University (NY)
6. Houghton University (NY)
7. Alfred University (NY)
8. Hartwick College (NY)
9. Sage Colleges (NY)

### Template (Tufts Standards)
**Men's:** 100m: 10.90/11.10/11.30, 200m: 22.30/22.70/23.10, 400m: 49.80/50.50/51.20, 800m: 1:55.00/1:58.00/2:01.00, etc.
**Women's:** 100m: 12.20/12.50/12.80, 200m: 24.80/25.30/25.80, 400m: 56.50/58.00/59.50, etc.

### Differentiation Approach
- Targets stay exactly the same as Tufts for all schools
- Recruit and walk-on values get slightly easier as you go down the ranking
- Small incremental offsets between schools:
  - Sprints (100m, 200m): ~0.02-0.04s per school
  - Mid-distance (400m, 800m): ~0.10-0.30s per school
  - Distance (1500m, 5K, 10K): ~1-3s per school
  - Hurdles: ~0.04-0.10s per school
  - Jumps: ~0.25-0.5" per school
  - Throws: ~1-2' per school

**Men's 100m example:**
| School | Target | Recruit | Walk-on |
|--------|--------|---------|---------|
| SUNY Geneseo | 10.90 | 11.12 | 11.32 |
| Brockport St | 10.90 | 11.14 | 11.36 |
| St. John Fisher | 10.90 | 11.16 | 11.40 |
| Utica | 10.90 | 11.18 | 11.44 |
| Nazareth | 10.90 | 11.20 | 11.48 |
| Houghton | 10.90 | 11.22 | 11.52 |
| Alfred | 10.90 | 11.24 | 11.56 |
| Hartwick | 10.90 | 11.26 | 11.60 |
| Sage | 10.90 | 11.28 | 11.64 |

### File to Modify
`src/data/schoolStandards.ts` -- Add a new `empire8Schools` array after the Landmark block (before `findSchoolStandards`), then push to `schoolStandards`.

### Technical Details
- Add ~500 lines of new school entries as an `empire8Schools: SchoolStandards[]` array
- Use `conference: "Empire 8"`, `division: "D3"`
- Include same event set as Tufts (with 1600m, 300m Hurdles)
- Add Decathlon/Heptathlon entries matching Landmark pattern
- Push to `schoolStandards` array via `schoolStandards.push(...empire8Schools)`
- Each school gets unique `id` (e.g., `empire8_geneseo`), `searchKeywords`, `coachesUrl`, and `state: "NY"` for all schools
- Insert after line 33379 (after the Landmark push), before the `findSchoolStandards` export function

