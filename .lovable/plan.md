

## Plan: Make Triple Jump Recruit and Walk-on Easier for MAC Schools

### Current vs Proposed (Men's)

User example: recruit 45'6" → ~44'0" (drop ~1'6"), walkon 43'6" → ~41'0" (drop ~2'6"). Target stays the same.

| Tier | Current Recruit | New Recruit | Current Walkon | New Walkon |
|------|----------------|-------------|----------------|------------|
| Top (Lebanon Valley, Misericordia, York) | 45'6" | 44'0" | 43'6" | 41'0" |
| Mid-high (Widener, Messiah, Eastern) | 45'0" | 43'6" | 43'0" | 40'6" |
| Mid (Stevens, DeSales, Arcadia) | 44'6" | 43'0" | 42'6" | 40'0" |
| Mid-low (Delaware Valley, King's, Alvernia) | 44'0" | 42'6" | 42'0" | 39'6" |
| Low (Stevenson, Hood, FDU-Florham) | 43'6" | 42'0" | 41'6" | 39'0" |

### Women's (proportional ~1'0"-1'6" recruit drop, ~2'0" walkon drop)

| Tier | Current Recruit | New Recruit | Current Walkon | New Walkon |
|------|----------------|-------------|----------------|------------|
| Top | 35'6" | 34'0" | 33'6" | 31'6" |
| Mid-high | 35'0" | 33'6" | 33'0" | 31'0" |
| Mid | 34'6" | 33'0" | 32'6" | 30'6" |
| Mid-low | 34'0" | 32'6" | 32'0" | 30'0" |
| Low | 33'6" | 32'0" | 31'6" | 29'6" |

### Technical Details
- **File:** `src/data/schoolStandards.ts`, 30 Triple Jump lines (lines 34479-35244)
- Only `recruit` and `walkon` values change; `target` stays the same

