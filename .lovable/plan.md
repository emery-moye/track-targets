
## Plan: Tighten 200m and 400m Standards for Empire 8 Schools

### Overview
36 targeted line edits in `src/data/schoolStandards.ts`. All exact current values have been verified by reading the file directly, so these edits will apply cleanly.

### Adjustment Logic
- **Target:** ~0.30s faster for 200m; ~0.80s faster for 400m — a decent bit harder
- **Recruit:** ~0.30-0.32s faster for 200m; ~0.80-0.80s faster for 400m — a decent bit harder
- **Walk-on:** ~0.06s faster for 200m; ~0.20s faster for 400m — barely harder
- Incremental steps between schools are preserved throughout

---

### Men's 200m

| School | Line | Current T/R/W | New T/R/W |
|--------|------|---------------|-----------|
| Geneseo | 33392 | 22.30 / 22.74 / 23.18 | **22.00 / 22.44 / 23.12** |
| Brockport | 33445 | 22.30 / 22.78 / 23.24 | **22.00 / 22.48 / 23.18** |
| St. John Fisher | 33498 | 22.30 / 22.82 / 23.30 | **22.00 / 22.52 / 23.24** |
| Utica | 33551 | 22.30 / 22.86 / 23.36 | **22.00 / 22.56 / 23.30** |
| Nazareth | 33604 | 22.30 / 22.90 / 23.42 | **22.00 / 22.60 / 23.36** |
| Houghton | 33657 | 22.30 / 22.94 / 23.48 | **22.00 / 22.64 / 23.42** |
| Alfred | 33710 | 22.30 / 22.98 / 23.54 | **22.00 / 22.68 / 23.48** |
| Hartwick | 33763 | 22.30 / 23.02 / 23.60 | **22.00 / 22.72 / 23.54** |
| Sage | 33816 | 22.30 / 23.06 / 23.66 | **22.00 / 22.76 / 23.60** |

### Men's 400m

| School | Line | Current T/R/W | New T/R/W |
|--------|------|---------------|-----------|
| Geneseo | 33393 | 49.80 / 50.60 / 51.40 | **49.00 / 49.80 / 51.20** |
| Brockport | 33446 | 49.80 / 50.70 / 51.60 | **49.00 / 49.90 / 51.40** |
| St. John Fisher | 33499 | 49.80 / 50.80 / 51.80 | **49.00 / 50.00 / 51.60** |
| Utica | 33552 | 49.80 / 50.90 / 52.00 | **49.00 / 50.10 / 51.80** |
| Nazareth | 33605 | 49.80 / 51.00 / 52.20 | **49.00 / 50.20 / 52.00** |
| Houghton | 33658 | 49.80 / 51.10 / 52.40 | **49.00 / 50.30 / 52.20** |
| Alfred | 33711 | 49.80 / 51.20 / 52.60 | **49.00 / 50.40 / 52.40** |
| Hartwick | 33764 | 49.80 / 51.30 / 52.80 | **49.00 / 50.50 / 52.60** |
| Sage | 33817 | 49.80 / 51.40 / 53.00 | **49.00 / 50.60 / 52.80** |

### Women's 200m

| School | Line | Current T/R/W | New T/R/W |
|--------|------|---------------|-----------|
| Geneseo | 33415 | 24.80 / 25.34 / 25.88 | **24.40 / 24.88 / 25.78** |
| Brockport | 33468 | 24.80 / 25.38 / 25.96 | **24.40 / 24.92 / 25.86** |
| St. John Fisher | 33521 | 24.80 / 25.42 / 26.04 | **24.40 / 24.96 / 25.94** |
| Utica | 33574 | 24.80 / 25.46 / 26.12 | **24.40 / 25.00 / 26.02** |
| Nazareth | 33627 | 24.80 / 25.50 / 26.20 | **24.40 / 25.04 / 26.10** |
| Houghton | 33680 | 24.80 / 25.54 / 26.28 | **24.40 / 25.08 / 26.18** |
| Alfred | 33733 | 24.80 / 25.58 / 26.36 | **24.40 / 25.12 / 26.26** |
| Hartwick | 33786 | 24.80 / 25.62 / 26.44 | **24.40 / 25.16 / 26.34** |
| Sage | 33839 | 24.80 / 25.66 / 26.52 | **24.40 / 25.20 / 26.42** |

### Women's 400m

| School | Line | Current T/R/W | New T/R/W |
|--------|------|---------------|-----------|
| Geneseo | 33416 | 56.50 / 58.10 / 59.70 | **55.50 / 57.10 / 59.50** |
| Brockport | 33469 | 56.50 / 58.20 / 59.90 | **55.50 / 57.20 / 59.70** |
| St. John Fisher | 33522 | 56.50 / 58.30 / 60.10 | **55.50 / 57.30 / 59.90** |
| Utica | 33575 | 56.50 / 58.40 / 60.30 | **55.50 / 57.40 / 60.10** |
| Nazareth | 33628 | 56.50 / 58.50 / 60.50 | **55.50 / 57.50 / 60.30** |
| Houghton | 33681 | 56.50 / 58.60 / 60.70 | **55.50 / 57.60 / 60.50** |
| Alfred | 33734 | 56.50 / 58.70 / 60.90 | **55.50 / 57.70 / 60.70** |
| Hartwick | 33787 | 56.50 / 58.80 / 61.10 | **55.50 / 57.80 / 60.90** |
| Sage | 33840 | 56.50 / 58.90 / 61.30 | **55.50 / 57.90 / 61.10** |

### Technical Details
- 36 single-line edits — all line numbers verified by direct file inspection
- Each edit uses the exact current content as the search string to guarantee a match
- All 36 parallel edits will fire simultaneously for speed
