

## Plan: Adjust Men's Javelin and Triple Jump for CACC Schools

### Overview
For all 10 CACC schools, make two changes to **men's standards only**:
1. **Javelin**: Reduce by ~15' across all tiers to make standards even easier
2. **Triple Jump**: Subtract 2' from each tier (target, recruit, walk-on)

### File to Modify
`src/data/schoolStandards.ts` -- Lines 32034-32524 (men's Javelin and Triple Jump for all 10 CACC schools)

### Changes Summary

#### Men's Triple Jump (-2' each tier)

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Goldey-Beacom | 47'6" / 45'6" / 43'6" | 45'6" / 43'6" / 41'6" |
| Georgian Court | 47'4" / 45'4" / 43'4" | 45'4" / 43'4" / 41'4" |
| Holy Family | 47'2" / 45'2" / 43'2" | 45'2" / 43'2" / 41'2" |
| Wilmington | 47'0" / 45'0" / 43'0" | 45'0" / 43'0" / 41'0" |
| Felician | 46'10" / 44'10" / 42'10" | 44'10" / 42'10" / 40'10" |
| Caldwell | 46'8" / 44'8" / 42'8" | 44'8" / 42'8" / 40'8" |
| Jefferson | 46'6" / 44'6" / 42'6" | 44'6" / 42'6" / 40'6" |
| Dominican NY | 46'4" / 44'4" / 42'4" | 44'4" / 42'4" / 40'4" |
| Bridgeport | 46'2" / 44'2" / 42'2" | 44'2" / 42'2" / 40'2" |
| Chestnut Hill | 46'0" / 44'0" / 42'0" | 44'0" / 42'0" / 40'0" |

#### Men's Javelin (-15' each tier)

| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Goldey-Beacom | 170'0" / 158'0" / 146'0" | 155'0" / 143'0" / 131'0" |
| Georgian Court | 169'0" / 157'0" / 145'0" | 154'0" / 142'0" / 130'0" |
| Holy Family | 168'0" / 156'0" / 144'0" | 153'0" / 141'0" / 129'0" |
| Wilmington | 167'0" / 155'0" / 143'0" | 152'0" / 140'0" / 128'0" |
| Felician | 166'0" / 154'0" / 142'0" | 151'0" / 139'0" / 127'0" |
| Caldwell | 165'0" / 153'0" / 141'0" | 150'0" / 138'0" / 126'0" |
| Jefferson | 164'0" / 152'0" / 140'0" | 149'0" / 137'0" / 125'0" |
| Dominican NY | 163'0" / 151'0" / 139'0" | 148'0" / 136'0" / 124'0" |
| Bridgeport | 162'0" / 150'0" / 138'0" | 147'0" / 135'0" / 123'0" |
| Chestnut Hill | 161'0" / 149'0" / 137'0" | 146'0" / 134'0" / 122'0" |

### Technical Details
- 20 line edits total (1 Javelin line + 1 Triple Jump line per school x 10 schools)
- Only `maleStandards` sections are modified -- women's standards remain unchanged
- The descending rank pattern is preserved (each school still slightly worse than the one above)
