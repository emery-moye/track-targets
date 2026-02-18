
## Plan: Tighten 200m and 400m Standards for Empire 8 Schools

### Overview
Update the 200m and 400m standards for all 9 Empire 8 schools. Target and recruit get a decent bit harder (faster), while walk-on gets only barely harder. The incremental steps between schools are preserved throughout.

### Current vs. New Values

#### Men's 200m
| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Geneseo | 22.30 / 22.78 / 23.24 | **22.00** / **22.44** / **23.18** |
| Brockport | 22.30 / 22.82 / 23.30 | **22.00** / **22.48** / **23.24** |
| St. John Fisher | 22.30 / 22.86 / 23.36 | **22.00** / **22.52** / **23.30** |
| Utica | 22.30 / 22.90 / 23.42 | **22.00** / **22.56** / **23.36** |
| Nazareth | 22.30 / 22.94 / 23.48 | **22.00** / **22.60** / **23.42** |
| Houghton | 22.30 / 22.98 / 23.54 | **22.00** / **22.64** / **23.48** |
| Alfred | 22.30 / 23.02 / 23.60 | **22.00** / **22.68** / **23.54** |
| Hartwick | 22.30 / 23.06 / 23.66 | **22.00** / **22.72** / **23.60** |
| Sage | 22.30 / 23.10 / 23.72 | **22.00** / **22.76** / **23.66** |

*Target: 0.30s faster. Recruit: ~0.34-0.40s faster. Walk-on: ~0.06s faster.*

#### Men's 400m
| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Geneseo | 49.80 / 50.70 / 51.60 | **49.00** / **49.80** / **51.40** |
| Brockport | 49.80 / 50.80 / 51.80 | **49.00** / **49.90** / **51.60** |
| St. John Fisher | 49.80 / 50.90 / 52.00 | **49.00** / **50.00** / **51.80** |
| Utica | 49.80 / 51.00 / 52.20 | **49.00** / **50.10** / **52.00** |
| Nazareth | 49.80 / 51.10 / 52.40 | **49.00** / **50.20** / **52.20** |
| Houghton | 49.80 / 51.20 / 52.60 | **49.00** / **50.30** / **52.40** |
| Alfred | 49.80 / 51.30 / 52.80 | **49.00** / **50.40** / **52.60** |
| Hartwick | 49.80 / 51.40 / 53.00 | **49.00** / **50.50** / **52.80** |
| Sage | 49.80 / 51.50 / 53.20 | **49.00** / **50.60** / **53.00** |

*Target: 0.80s faster. Recruit: ~0.90-1.00s faster. Walk-on: ~0.20s faster.*

#### Women's 200m
| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Geneseo | 24.80 / 25.38 / 25.96 | **24.40** / **24.92** / **25.86** |
| Brockport | 24.80 / 25.42 / 26.04 | **24.40** / **24.96** / **25.94** |
| St. John Fisher | 24.80 / 25.46 / 26.12 | **24.40** / **25.00** / **26.02** |
| Utica | 24.80 / 25.50 / 26.20 | **24.40** / **25.04** / **26.10** |
| Nazareth | 24.80 / 25.54 / 26.28 | **24.40** / **25.08** / **26.18** |
| Houghton | 24.80 / 25.58 / 26.36 | **24.40** / **25.12** / **26.26** |
| Alfred | 24.80 / 25.62 / 26.44 | **24.40** / **25.16** / **26.34** |
| Hartwick | 24.80 / 25.66 / 26.52 | **24.40** / **25.20** / **26.42** |
| Sage | 24.80 / 25.70 / 26.60 | **24.40** / **25.24** / **26.50** |

*Target: 0.40s faster. Recruit: ~0.44-0.50s faster. Walk-on: ~0.10s faster.*

#### Women's 400m
| School | Current T/R/W | New T/R/W |
|--------|--------------|-----------|
| Geneseo | 56.50 / 58.20 / 59.90 | **55.50** / **57.10** / **59.70** |
| Brockport | 56.50 / 58.30 / 60.10 | **55.50** / **57.20** / **59.90** |
| St. John Fisher | 56.50 / 58.40 / 60.30 | **55.50** / **57.30** / **60.10** |
| Utica | 56.50 / 58.50 / 60.50 | **55.50** / **57.40** / **60.30** |
| Nazareth | 56.50 / 58.60 / 60.70 | **55.50** / **57.50** / **60.50** |
| Houghton | 56.50 / 58.70 / 60.90 | **55.50** / **57.60** / **60.70** |
| Alfred | 56.50 / 58.80 / 61.10 | **55.50** / **57.70** / **60.90** |
| Hartwick | 56.50 / 58.90 / 61.30 | **55.50** / **57.80** / **61.10** |
| Sage | 56.50 / 59.00 / 61.50 | **55.50** / **57.90** / **61.30** |

*Target: 1.00s faster. Recruit: ~1.00-1.10s faster. Walk-on: ~0.20s faster.*

### File to Modify
`src/data/schoolStandards.ts` — 36 line edits total (9 schools × 2 genders × 2 events = 36 lines)

### Technical Details
- Men's 200m lines: 33445, 33498, 33551, 33604, 33657, 33710, 33763, 33816, 33869 (need to verify Sage)
- Men's 400m lines: 33446, 33499, 33552, 33605, 33658, 33711, 33764, 33817, 33870 (need to verify Sage)
- Women's 200m lines: 33468, 33521, 33574, 33627, 33680, 33733, 33786, 33839, +53 for Sage
- Women's 400m lines: 33469, 33522, 33575, 33628, 33681, 33734, 33787, 33840, +53 for Sage
- Incremental steps between schools preserved (0.04s for sprints, 0.10s for 400m)
- Walk-on changes are modest (~0.06s for 200m, ~0.20s for 400m) — barely harder
- Target and recruit changes are meaningful (~0.30-0.40s for 200m, ~0.80-1.00s for 400m) — decent bit harder
