

## Plan: Add SUNYAC Conference Schools (D3)

### Overview
Add 11 SUNYAC Conference schools using Le Moyne College as the baseline template. Each school gets slightly different recruit and walk-on values to differentiate them, while targets stay very close to Le Moyne's. The same event set as Empire 8 will be used (including 1600m, 300m Hurdles, 10000m, Decathlon/Heptathlon).

### Schools (ranked best to worst)
1. Cortland State (NY)
2. PSU Behrend (PA)
3. Oneonta State (NY)
4. Plattsburgh State (NY)
5. SUNY Delhi (NY)
6. Fredonia State (NY)
7. Buffalo State (NY)
8. Alfred State (NY)
9. Oswego State (NY)
10. Morrisville State (NY)
11. SUNY Cobleskill (NY)

### Template (Le Moyne Standards)
**Men's:** 100m: 10.80/10.95/11.10, 200m: 22.20/22.60/22.80, 400m: 49.35/50.10/50.60, 800m: 1:57.00/1:58.00/1:59.50, 1500m: 4:08.00/4:10.00/4:12.00, Mile: 4:22.00/4:24.00/4:28.00, 5000m: 15:35.00/15:50.00/16:00.00, etc.

**Women's:** 100m: 12.20/12.40/12.70, 200m: 24.90/25.40/25.70, 400m: 57.30/58.30/58.80, 800m: 2:21.00/2:23.00/2:25.00, etc.

### Differentiation Approach
- Targets stay the same as Le Moyne for all schools
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
| Cortland St | 10.80 | 10.97 | 11.12 |
| PSU Behrend | 10.80 | 10.99 | 11.16 |
| Oneonta St | 10.80 | 11.01 | 11.20 |
| Plattsburgh St | 10.80 | 11.03 | 11.24 |
| SUNY Delhi | 10.80 | 11.05 | 11.28 |
| Fredonia St | 10.80 | 11.07 | 11.32 |
| Buffalo St | 10.80 | 11.09 | 11.36 |
| Alfred St | 10.80 | 11.11 | 11.40 |
| Oswego St | 10.80 | 11.13 | 11.44 |
| Morrisville St | 10.80 | 11.15 | 11.48 |
| SUNY Cobleskill | 10.80 | 11.17 | 11.52 |

### File to Modify
`src/data/schoolStandards.ts` -- Add a new `sunyacSchools` array after line 33864 (after the Empire 8 push), then push to `schoolStandards`.

### Technical Details
- Add ~600 lines of new school entries as a `sunyacSchools: SchoolStandards[]` array
- Use `conference: "SUNYAC"`, `division: "D3"`
- Include same event set as Empire 8 (100m, 200m, 400m, 800m, 1500m, 1600m, Mile, 5000m, 10000m, 110m/100m Hurdles, 300m Hurdles, 400m Hurdles, High Jump, Pole Vault, Long Jump, Triple Jump, Shot Put, Discus, Hammer, Javelin, Decathlon/Heptathlon)
- Each school gets unique `id` (e.g., `sunyac_cortland`), `searchKeywords`, and `coachesUrl`
- States: All NY except PSU Behrend which is PA
- Push to `schoolStandards` array via `schoolStandards.push(...sunyacSchools)`
- Insert after line 33864 (after `schoolStandards.push(...empire8Schools)`), before the `findSchoolStandards` export

