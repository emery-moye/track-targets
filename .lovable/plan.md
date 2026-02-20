

## Plan: Update SUNYAC High Jump Recruit and Walk-on Standards

### Overview
Set men's High Jump recruit to the 6'1"--6'0" range and walk-on to 5'11"--5'10" across all 11 SUNYAC schools. Apply proportional changes for women (recruit 5'0"--4'11", walk-on 4'10"--4'9"). Target stays unchanged for both.

Schools are grouped into 3 tiers to keep clean half/whole-inch values while preserving the ranked hierarchy.

### Changes: 22 line edits total

#### Men's High Jump (target unchanged at 6'4")

| School | Line | Current R / W | New R / W |
|--------|------|--------------|-----------|
| Cortland St | 33888 | 6'1.75" / 5'11.75" | **6'1"** / **5'11"** |
| PSU Behrend | 33941 | 6'1.5" / 5'11.5" | **6'1"** / **5'11"** |
| Oneonta St | 33994 | 6'1.25" / 5'11.25" | **6'1"** / **5'11"** |
| Plattsburgh St | 34047 | 6'1" / 5'11" | **6'1"** / **5'11"** |
| SUNY Delhi | 34100 | 6'0.75" / 5'10.75" | **6'0.5"** / **5'10.5"** |
| Fredonia St | 34153 | 6'0.5" / 5'10.5" | **6'0.5"** / **5'10.5"** |
| Buffalo St | 34206 | 6'0.25" / 5'10.25" | **6'0.5"** / **5'10.5"** |
| Alfred St | 34259 | 6'0" / 5'10" | **6'0"** / **5'10"** |
| Oswego St | 34312 | 5'11.75" / 5'9.75" | **6'0"** / **5'10"** |
| Morrisville St | 34365 | 5'11.5" / 5'9.5" | **6'0"** / **5'10"** |
| SUNY Cobleskill | 34418 | 5'11.25" / 5'9.25" | **6'0"** / **5'10"** |

#### Women's High Jump (target unchanged at 5'3")

| School | Line | Current R / W | New R / W |
|--------|------|--------------|-----------|
| Cortland St | 33911 | 5'0.75" / 4'10.75" | **5'0"** / **4'10"** |
| PSU Behrend | 33964 | 5'0.5" / 4'10.5" | **5'0"** / **4'10"** |
| Oneonta St | 34017 | 5'0.25" / 4'10.25" | **5'0"** / **4'10"** |
| Plattsburgh St | 34070 | 5'0" / 4'10" | **5'0"** / **4'10"** |
| SUNY Delhi | 34123 | 4'11.75" / 4'9.75" | **4'11.5"** / **4'9.5"** |
| Fredonia St | 34176 | 4'11.5" / 4'9.5" | **4'11.5"** / **4'9.5"** |
| Buffalo St | 34229 | 4'11.25" / 4'9.25" | **4'11.5"** / **4'9.5"** |
| Alfred St | 34282 | 4'11" / 4'9" | **4'11"** / **4'9"** |
| Oswego St | 34335 | 4'10.75" / 4'8.75" | **4'11"** / **4'9"** |
| Morrisville St | 34388 | 4'10.5" / 4'8.5" | **4'11"** / **4'9"** |
| SUNY Cobleskill | 34441 | 4'10.25" / 4'8.25" | **4'11"** / **4'9"** |

### Key Notes
- Schools are grouped into 3 tiers using clean half/whole-inch values (no fractional oddities)
- Men's recruit: 6'1" (top 4), 6'0.5" (middle 3), 6'0" (bottom 4)
- Men's walkon: 5'11" (top 4), 5'10.5" (middle 3), 5'10" (bottom 4)
- Women follow the same tier grouping proportionally
- Bottom schools (Oswego, Morrisville, Cobleskill) actually get slightly easier standards than current values
- Target remains unchanged throughout

### Technical Details
- File: `src/data/schoolStandards.ts`
- 22 single-line edits, all fired in parallel
- Only `recruit` and `walkon` values change on each line; `target` stays as-is

