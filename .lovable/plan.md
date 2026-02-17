

## Plan: Add Landmark Conference Schools (D3)

### Overview
Create 8 new Landmark Conference schools using La Salle University as the template. Keep all target standards the same as La Salle, but make recruit and walk-on values easier (as specified: e.g., men's 100m recruit ~11.00, walk-on ~11.30 instead of La Salle's 10.90/11.05). Each school gets barely different values to differentiate them.

### Schools (ranked best to worst)
1. Susquehanna University (PA)
2. Moravian University (PA)
3. Elizabethtown College (PA)
4. Catholic University (DC)
5. University of Scranton (PA)
6. Juniata College (PA)
7. Drew University (NJ)
8. Goucher College (MD)

### File to Modify
`src/data/schoolStandards.ts` -- Add a new `landmarkSchools` array after the CCC block (before `findSchoolStandards`), then push to `schoolStandards`.

### Approach for Standards
Using La Salle as the base, targets stay exactly the same. Recruit and walk-on are made easier by roughly the same proportional amount across all events:

**Men's sprint example (100m):**
- La Salle: 10.73 / 10.90 / 11.05
- Susquehanna (best): 10.73 / 11.00 / 11.30
- Moravian: 10.73 / 11.02 / 11.34
- Elizabethtown: 10.73 / 11.04 / 11.38
- Catholic: 10.73 / 11.06 / 11.42
- Scranton: 10.73 / 11.08 / 11.46
- Juniata: 10.73 / 11.10 / 11.50
- Drew: 10.73 / 11.12 / 11.54
- Goucher (worst): 10.73 / 11.14 / 11.58

**General adjustments from La Salle baseline:**
- Sprint events (100m, 200m): recruit ~+0.10-0.24s easier, walk-on ~+0.25-0.53s easier
- Mid-distance (400m, 800m): recruit ~+1-2s easier, walk-on ~+2-4s easier
- Distance (1500m, 5000m, 10000m): recruit ~+3-8s easier, walk-on ~+8-20s easier
- Hurdles: recruit ~+0.15-0.50s easier, walk-on ~+0.50-1.5s easier
- Field events (jumps): recruit ~2-4" easier, walk-on ~4-8" easier
- Throws: recruit ~3-6' easier, walk-on ~8-15' easier
- Same proportional approach applied to women's events
- Each school offset by a small increment (0.02-0.06s for sprints, proportional for others)

### Technical Details
- Add ~450 lines of new school entries as a `landmarkSchools` array
- Use `conference: "Landmark"`, `division: "D3"`
- Include same event set as CCC schools (with 1600m, 300m Hurdles, Decathlon/Heptathlon)
- Push to `schoolStandards` array
- Each school gets unique `id` (e.g., `landmark_susquehanna`), `searchKeywords`, `coachesUrl`, and `state`
- Insert before the `findSchoolStandards` export function (around line 32941)

