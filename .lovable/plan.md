

## Plan: Make Long Jump Target Slightly Easier for MAC Schools

### Current Men's Long Jump Targets
- Top (Lebanon Valley, Misericordia, York): 23'4", 23'3", 23'4"
- Mid-high (Widener, Messiah, Eastern): 23'2", 23'2", 23'2"
- Mid (Stevens, DeSales, Arcadia): 23'0", 23'0", 23'0"
- Mid-low (Delaware Valley, King's, Alvernia): 22'8", 22'8", 22'8"
- Low (Stevenson, Hood, FDU-Florham): 22'6", 22'6", 22'6"

### Proposed Change: Reduce target by ~6 inches (men) / ~4-6 inches (women)
Recruit and walk-on remain unchanged.

**Men's new targets:**
- Top: 22'10", 22'9", 22'10"
- Mid-high: 22'8", 22'8", 22'8"
- Mid: 22'6", 22'6", 22'6"
- Mid-low: 22'2", 22'2", 22'2"
- Low: 22'0", 22'0", 22'0"

**Women's new targets (proportional ~4" reduction):**
- Top: 19'0", 19'0", 19'0"
- Mid-high: 18'10", 18'10", 18'10"
- Mid: 18'8", 18'8", 18'8"
- Mid-low: 18'6", 18'6", 18'6"
- Low: 18'4", 18'4", 18'4"

### Technical Details
- **File:** `src/data/schoolStandards.ts`
- **Lines:** 30 Long Jump lines across 15 MAC schools (lines 34478–35243)
- Only the `target` value changes on each line; `recruit` and `walkon` stay the same

