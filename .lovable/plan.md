

## Plan: Adjust Men's Pole Vault Walk-on for CCC Schools

### Overview
Change the men's pole vault walk-on standard for all 7 CCC schools. Hartford gets 11'10", and the others spread across the 12'0" to 11'9" range. Targets and recruits remain unchanged.

### File to Modify
`src/data/schoolStandards.ts` -- 7 line edits (1 per school)

### Men's Pole Vault (walk-on only changes)

| School | Line | Current T/R/W | New T/R/W |
|--------|------|--------------|-----------|
| Hartford | 32579 | 14'3" / 13'3" / 12'3" | 14'3" / 13'3" / 11'10" |
| Roger Williams | 32633 | 14'2" / 13'2" / 12'2" | 14'2" / 13'2" / 12'0" |
| Gordon | 32687 | 14'1" / 13'1" / 12'1" | 14'1" / 13'1" / 11'11" |
| Wentworth | 32741 | 14'0" / 13'0" / 12'0" | 14'0" / 13'0" / 11'10" |
| Suffolk | 32795 | 13'11" / 12'11" / 11'11" | 13'11" / 12'11" / 11'9" |
| Western NE | 32849 | 13'10" / 12'10" / 11'10" | 13'10" / 12'10" / 11'9" |
| Nichols | 32903 | 13'9" / 12'9" / 11'9" | 13'9" / 12'9" / 11'8" |

### Technical Details
- 7 line edits total (men's pole vault walk-on only)
- Targets and recruits remain unchanged
- Walk-on values now cluster in the 11'8"-12'0" range as requested
- Descending rank pattern preserved

