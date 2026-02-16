

## Plan: Make 400m Recruit and Walk-on 1 Second Slower for CCC Schools

### Overview
For all 7 CCC schools, add 1 second to the recruit and walk-on 400m standards for both men and women. Targets remain unchanged.

### File to Modify
`src/data/schoolStandards.ts` -- 14 line edits (1 men's 400m + 1 women's 400m per school x 7 schools)

### Men's 400m (recruit +1s, walk-on +1s)

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Hartford | 50.30 / 51.30 / 52.30 | 50.30 / 52.30 / 53.30 |
| Roger Williams | 50.36 / 51.36 / 52.36 | 50.36 / 52.36 / 53.36 |
| Gordon | 50.42 / 51.42 / 52.42 | 50.42 / 52.42 / 53.42 |
| Wentworth | 50.48 / 51.48 / 52.48 | 50.48 / 52.48 / 53.48 |
| Suffolk | 50.54 / 51.54 / 52.54 | 50.54 / 52.54 / 53.54 |
| Western NE | 50.60 / 51.60 / 52.60 | 50.60 / 52.60 / 53.60 |
| Nichols | 50.66 / 51.66 / 52.66 | 50.66 / 52.66 / 53.66 |

### Women's 400m (recruit +1s, walk-on +1s)

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Hartford | 58.80 / 60.80 / 62.80 | 58.80 / 61.80 / 63.80 |
| Roger Williams | 58.86 / 60.86 / 62.86 | 58.86 / 61.86 / 63.86 |
| Gordon | 58.92 / 60.92 / 62.92 | 58.92 / 61.92 / 63.92 |
| Wentworth | 58.98 / 60.98 / 62.98 | 58.98 / 61.98 / 63.98 |
| Suffolk | 59.04 / 61.04 / 63.04 | 59.04 / 62.04 / 64.04 |
| Western NE | 59.10 / 61.10 / 63.10 | 59.10 / 62.10 / 64.10 |
| Nichols | 59.16 / 61.16 / 63.16 | 59.16 / 62.16 / 64.16 |

### Technical Details
- 14 line edits total (7 men's + 7 women's 400m lines)
- Only recruit and walk-on are modified; targets remain unchanged
- Descending rank pattern preserved
