

## Plan: Adjust Long Jump Standards for Landmark Conference Schools

### Overview
Update the Long Jump recruit and walk-on for all 8 Landmark schools (men and women). Targets stay the same. Men's recruit moves to the 21'6"-21'10" range, walk-on to 19'4"-19'8". Women's adjusted proportionally (recruit ~16'6"-16'10", walk-on ~14'4"-14'8").

### File to Modify
`src/data/schoolStandards.ts` -- 16 line edits (8 men's + 8 women's Long Jump lines)

### Men's Long Jump Changes

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Susquehanna | 23'2" / 22'2" / 21'2" | 23'2" / 21'10" / 19'8" |
| Moravian | 23'2" / 22'1" / 21'0" | 23'2" / 21'9.5" / 19'7.5" |
| Elizabethtown | 23'2" / 22'0" / 20'10" | 23'2" / 21'9" / 19'7" |
| Catholic | 23'2" / 21'11" / 20'8" | 23'2" / 21'8.5" / 19'6.5" |
| Scranton | 23'2" / 21'10" / 20'6" | 23'2" / 21'8" / 19'6" |
| Juniata | 23'2" / 21'9" / 20'4" | 23'2" / 21'7.5" / 19'5.5" |
| Drew | 23'2" / 21'8" / 20'2" | 23'2" / 21'7" / 19'5" |
| Goucher | 23'2" / 21'7" / 20'0" | 23'2" / 21'6" / 19'4" |

### Women's Long Jump Changes

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Susquehanna | 18'6" / 17'4" / 16'2" | 18'6" / 16'10" / 14'8" |
| Moravian | 18'6" / 17'3" / 16'0" | 18'6" / 16'9.5" / 14'7.5" |
| Elizabethtown | 18'6" / 17'2" / 15'10" | 18'6" / 16'9" / 14'7" |
| Catholic | 18'6" / 17'1" / 15'8" | 18'6" / 16'8.5" / 14'6.5" |
| Scranton | 18'6" / 17'0" / 15'6" | 18'6" / 16'8" / 14'6" |
| Juniata | 18'6" / 16'11" / 15'4" | 18'6" / 16'7.5" / 14'5.5" |
| Drew | 18'6" / 16'10" / 15'2" | 18'6" / 16'7" / 14'5" |
| Goucher | 18'6" / 16'9" / 15'0" | 18'6" / 16'6" / 14'4" |

### Technical Details
- 16 line edits total in `src/data/schoolStandards.ts`
- Lines: 32966, 32989, 33020, 33043, 33074, 33097, 33128, 33151, 33182, 33205, 33236, 33259, 33290, 33313, 33344, 33367
- Targets remain unchanged (Men: 23'2", Women: 18'6")
- 0.5" incremental steps between schools preserved
- Walk-on standards brought down ~1' for both men and women to be more accessible

