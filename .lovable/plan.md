

## Plan: Adjust HJ and Long Jump for CCC Schools (Men's and Women's)

### Overview
For all 7 CCC schools, make two adjustments to both men's and women's standards:
1. **High Jump**: Lower recruit by 1" and walk-on by 1" (targets stay the same)
2. **Long Jump**: Lower recruit by 8" and walk-on by 8" (targets stay the same)

### File to Modify
`src/data/schoolStandards.ts` -- 28 line edits (2 events x 2 genders x 7 schools)

### Men's High Jump (recruit -1", walk-on -1")

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Hartford | 6'3" / 6'1" / 5'11" | 6'3" / 6'0" / 5'10" |
| Roger Williams | 6'3" / 6'1" / 5'11" | 6'3" / 6'0" / 5'10" |
| Gordon | 6'2.5" / 6'0.5" / 5'10.5" | 6'2.5" / 5'11.5" / 5'9.5" |
| Wentworth | 6'2.5" / 6'0.5" / 5'10.5" | 6'2.5" / 5'11.5" / 5'9.5" |
| Suffolk | 6'2" / 6'0" / 5'10" | 6'2" / 5'11" / 5'9" |
| Western NE | 6'2" / 6'0" / 5'10" | 6'2" / 5'11" / 5'9" |
| Nichols | 6'1.5" / 5'11.5" / 5'9.5" | 6'1.5" / 5'10.5" / 5'8.5" |

### Women's High Jump (recruit -1", walk-on -1")

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Hartford | 5'4" / 5'2" / 5'0" | 5'4" / 5'1" / 4'11" |
| Roger Williams | 5'4" / 5'2" / 5'0" | 5'4" / 5'1" / 4'11" |
| Gordon | 5'3.5" / 5'1.5" / 4'11.5" | 5'3.5" / 5'0.5" / 4'10.5" |
| Wentworth | 5'3.5" / 5'1.5" / 4'11.5" | 5'3.5" / 5'0.5" / 4'10.5" |
| Suffolk | 5'3" / 5'1" / 4'11" | 5'3" / 5'0" / 4'10" |
| Western NE | 5'3" / 5'1" / 4'11" | 5'3" / 5'0" / 4'10" |
| Nichols | 5'2.5" / 5'0.5" / 4'10.5" | 5'2.5" / 4'11.5" / 4'9.5" |

### Men's Long Jump (recruit -8", walk-on -8")

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Hartford | 22'3" / 21'3" / 20'3" | 22'3" / 20'7" / 19'7" |
| Roger Williams | 22'2" / 21'2" / 20'2" | 22'2" / 20'6" / 19'6" |
| Gordon | 22'1" / 21'1" / 20'1" | 22'1" / 20'5" / 19'5" |
| Wentworth | 22'0" / 21'0" / 20'0" | 22'0" / 20'4" / 19'4" |
| Suffolk | 21'11" / 20'11" / 19'11" | 21'11" / 20'3" / 19'3" |
| Western NE | 21'10" / 20'10" / 19'10" | 21'10" / 20'2" / 19'2" |
| Nichols | 21'9" / 20'9" / 19'9" | 21'9" / 20'1" / 19'1" |

### Women's Long Jump (recruit -8", walk-on -8")

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Hartford | 17'9" / 16'9" / 15'9" | 17'9" / 16'1" / 15'1" |
| Roger Williams | 17'8" / 16'8" / 15'8" | 17'8" / 16'0" / 15'0" |
| Gordon | 17'7" / 16'7" / 15'7" | 17'7" / 15'11" / 14'11" |
| Wentworth | 17'6" / 16'6" / 15'6" | 17'6" / 15'10" / 14'10" |
| Suffolk | 17'5" / 16'5" / 15'5" | 17'5" / 15'9" / 14'9" |
| Western NE | 17'4" / 16'4" / 15'4" | 17'4" / 15'8" / 14'8" |
| Nichols | 17'3" / 16'3" / 15'3" | 17'3" / 15'7" / 14'7" |

### Technical Details
- 28 line edits total (HJ male + HJ female + LJ male + LJ female per school x 7 schools)
- Only recruit and walk-on tiers are modified; targets remain unchanged
- The descending rank pattern between schools is preserved

