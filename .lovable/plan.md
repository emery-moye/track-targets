

## Plan: Add Middle Atlantic Conference (D3) Schools Using Furman as Baseline

### Overview
Add 15 Middle Atlantic Conference (MAC) D3 schools to `src/data/schoolStandards.ts`, using Furman's standards as the baseline template. Each school gets small unique variations (per existing methodology: 0.02-0.15s for sprints, 0.5-2 feet for field events) to differentiate them while keeping D3-appropriate standards.

### Schools (15 total)
Lebanon Valley, Misericordia, York (Pa.), Widener, Messiah, Eastern, Stevens, DeSales, Arcadia, Delaware Valley, King's (Pa.), Alvernia, Stevenson, Hood, FDU-Florham

### State Assignments
All PA except: Stevens (NJ), Stevenson (MD), Hood (MD), FDU-Florham (NJ)

### Approach
- Create a `macSchools` array (same pattern as `naccSchools`)
- Conference: `"Middle Atlantic"`, Division: `"D3"`
- Use Furman's exact event list and tier structure as the base
- Apply small variations per school (higher-ranked schools slightly harder, lower-ranked slightly easier) following existing methodology
- Push to `schoolStandards` at the end

### Technical Details
- **File:** `src/data/schoolStandards.ts`
- **Location:** Add new block after the last conference block, before the `searchSchools` function (~line 34515)
- **Pattern:** Same as NACC block (lines 31372-32004) — define array, then `schoolStandards.push(...macSchools)`
- **Events:** Mirror Furman's full event list (100m through Decathlon/Heptathlon, including 1600m, Mile, 300m Hurdles)

