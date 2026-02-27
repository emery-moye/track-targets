

## Plan: Update Bridgewater College to Official Standards

Replace all Bridgewater College standards (lines 26025-26072) with official data from the provided image. Add `hasOfficialStandards: true`. Map BC Minimum → walk-on, BC Ideal → recruit, midpoint of ODAC #1 and ODAC #8 → target.

### Event Mapping

Events change from current set (1500m, Mile, 10000m, Hammer, Decathlon/Heptathlon) to official set (1600m, 3200m, 300m Hurdles, 5000m). Indoor-only events from the image (55m, 60m, 300m, 500m, 1000m, 55mH) are excluded.

### Men's Standards (computed)

| Event | Target (avg ODAC#1 & #8) | Recruit (BC Ideal) | Walkon (BC Min) |
|-------|--------------------------|--------------------|-----------------| 
| 100m | 10.47 | 10.80 | 11.20 |
| 200m | 21.40 | 21.99 | 22.80 |
| 400m | 48.25 | 50.10 | 52.00 |
| 800m | 1:52.45 | 1:58.00 | 2:05.00 |
| 1600m | 4:05.85 | 4:30.00 | 4:45.00 |
| 3200m | 8:52.00 | 9:45.00 | 10:00.00 |
| 110m Hurdles | 15.50* | 16.05 | 16.50 |
| 300m Hurdles | 40.50* | 41.65 | 43.00 |
| 400m Hurdles | 55.69 | 1:00.00 | 1:03.00 |
| High Jump | 6'7" | 6'3" | 6'0"* |
| Pole Vault | 14'7" | 14'0" | 12'6" |
| Long Jump | 22'2" | 22'0" | 20'10" |
| Triple Jump | 45'4" | 44'0" | 42'6" |
| Shot Put | 50'0"* | 48'0" | 40'0" |
| Discus | 155'0"* | 150'0" | 130'0" |
| Javelin | 156'0" | 140'0" | 125'0" |
| 5000m | 15:50.00* | 16:20.00 | 17:30.00 |

*Estimated (ODAC data N/A, target set slightly better than recruit)

### Women's Standards (computed)

| Event | Target (avg ODAC#1 & #8) | Recruit (BC Ideal) | Walkon (BC Min) |
|-------|--------------------------|--------------------|-----------------| 
| 100m | 12.37 | 12.75 | 13.25 |
| 200m | 25.47 | 26.60 | 27.50 |
| 400m | 58.11 | 60.45 | 62.00 |
| 800m | 2:15.90 | 2:25.00 | 2:39.00 |
| 1600m | 4:58.36 | 5:29.00 | 5:59.00 |
| 3200m | 10:47.00 | 11:30.00 | 12:30.00 |
| 100m Hurdles | 14.74 | 15.75 | 16.50 |
| 300m Hurdles | 49.50* | 50.75 | 52.00 |
| 400m Hurdles | 1:05.17 | 1:10.00 | 1:13.00 |
| High Jump | 5'4" | 5'2" | 4'10" |
| Pole Vault | 11'3" | 10'6" | 9'0" |
| Long Jump | 17'9" | 17'4" | 16'4" |
| Triple Jump | 37'10" | 37'6" | 34'8" |
| Shot Put | 39'3" | 37'6" | 34'0" |
| Discus | 133'9" | 125'0" | 105'0" |
| Javelin | 116'1" | 110'0" | 90'0" |
| 5000m | 18:45.00 | 19:20.00 | 21:59.00 |

### Technical Details
- File: `src/data/schoolStandards.ts`, lines 26025-26072
- Single block replacement: replace the entire Bridgewater College object
- Add `hasOfficialStandards: true` property
- Events updated to match official BC event list (removes Mile, 10000m, Hammer, Decathlon/Heptathlon; adds 1600m, 3200m, 300m Hurdles, 5000m)

