

## Plan: Adjust High Jump Standards for Landmark Conference Schools

### Overview
Update the High Jump target, recruit, and walk-on for all 8 Landmark schools (men and women). Men's target moves to the 6'3"-6'4" range, recruit to 5'11"-6'0", walk-on to 5'8"-5'9". Women's standards adjusted proportionally (roughly 10-11 inches lower across all tiers).

### File to Modify
`src/data/schoolStandards.ts` -- 16 line edits (8 men's + 8 women's High Jump lines)

### Men's High Jump Changes

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Susquehanna | 6'6" / 6'2" / 5'10" | 6'4" / 6'0" / 5'9" |
| Moravian | 6'6" / 6'1.5" / 5'9.5" | 6'4" / 5'11.75" / 5'8.75" |
| Elizabethtown | 6'6" / 6'1" / 5'9" | 6'3.75" / 5'11.5" / 5'8.5" |
| Catholic | 6'6" / 6'0.5" / 5'8.5" | 6'3.5" / 5'11.25" / 5'8.25" |
| Scranton | 6'6" / 6'0" / 5'8" | 6'3.25" / 5'11" / 5'8" |
| Juniata | 6'6" / 5'11.5" / 5'7.5" | 6'3" / 5'10.75" / 5'7.75" |
| Drew | 6'6" / 5'11" / 5'7" | 6'3" / 5'10.5" / 5'7.5" |
| Goucher | 6'6" / 5'10.5" / 5'6.5" | 6'3" / 5'10.25" / 5'7.25" |

### Women's High Jump Changes
Proportional adjustment -- target moves from 5'4.75" down to roughly 5'2"-5'3", recruit to 4'11"-5'0", walk-on to 4'8"-4'9".

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Susquehanna | 5'4.75" / 5'1" / 4'9" | 5'3" / 5'0" / 4'9" |
| Moravian | 5'4.75" / 5'0.5" / 4'8.5" | 5'3" / 4'11.75" / 4'8.75" |
| Elizabethtown | 5'4.75" / 5'0" / 4'8" | 5'2.75" / 4'11.5" / 4'8.5" |
| Catholic | 5'4.75" / 4'11.5" / 4'7.5" | 5'2.5" / 4'11.25" / 4'8.25" |
| Scranton | 5'4.75" / 4'11" / 4'7" | 5'2.25" / 4'11" / 4'8" |
| Juniata | 5'4.75" / 4'10.5" / 4'6.5" | 5'2" / 4'10.75" / 4'7.75" |
| Drew | 5'4.75" / 4'10" / 4'6" | 5'2" / 4'10.5" / 4'7.5" |
| Goucher | 5'4.75" / 4'9.5" / 4'5.5" | 5'2" / 4'10.25" / 4'7.25" |

### Technical Details
- 16 line edits total in `src/data/schoolStandards.ts`
- Lines: 32964, 32987, 33018, 33041, 33072, 33095, 33126, 33149, 33180, 33203, 33234, 33257, 33288, 33311, 33342, 33365
- Each edit changes only the High Jump line for that school/gender
- Targets and recruits/walk-ons all shift down together to match the requested ranges
- Small incremental differences between schools preserved (0.25" steps)

