

## Plan: Adjust High Jump Standards for MAC Schools

### Current State (Men's)
The 15 MAC schools currently range from 6'3"-6'7" (target), 6'0"-6'4" (recruit), 5'9"-6'1" (walk-on) — too wide a spread.

### Desired (Men's)
- **Target:** 6'5"-6'6" (spread across 15 schools)
- **Recruit:** 6'2"-6'3"
- **Walk-on:** 5'11"-6'0"

### Women's (proportional adjustment)
Current range is 5'2"-5'6" target, 4'11"-5'3" recruit, 4'9"-5'1" walk-on. Will compress similarly:
- **Target:** 5'3"-5'4"
- **Recruit:** 5'0"-5'1"
- **Walk-on:** 4'9"-4'10"

### Technical Details
- **File:** `src/data/schoolStandards.ts`, lines 34476-35241
- Update 30 "High Jump" lines (15 male + 15 female) across all MAC schools
- Top-ranked schools (Lebanon Valley, Misericordia, York) get the higher end; bottom-ranked schools (Stevenson, Hood, FDU-Florham) get the lower end
- Distribution: ~5 schools at 6'6"/6'3"/6'0", ~5 at 6'5"/6'3"/6'0", ~5 at 6'5"/6'2"/5'11" for men

