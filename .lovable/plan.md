

## Plan: Update Mansfield University to Official PSAC/NCAA D2 Standards

Replace Mansfield University standards (lines 14093-14144) with official data. Add `hasOfficialStandards: true`. Target = NCAA D2 Provisional, Recruit = PSAC Automatic, Walk-on = current recruit values.

### Metric-to-Imperial Conversions (field events)

| Metric | NCAA D2 Prov (Target) | PSAC Auto (Recruit) |
|--------|----------------------|---------------------|
| **Men's** | | |
| High Jump | 2.05m → 6'8 3/4" | 1.90m → 6'2 3/4" |
| Pole Vault | 4.85m → 15'11" | 4.35m → 14'3 1/4" |
| Long Jump | 7.32m → 24'0 1/4" | 6.85m → 22'5 3/4" |
| Triple Jump | 14.70m → 48'2 3/4" | 13.70m → 44'11 1/2" |
| Shot Put | 16.59m → 54'5 1/4" | 14.40m → 47'3" |
| Discus | 50.51m → 165'8" | 43.70m → 143'5" |
| Hammer | 57.13m → 187'5" | 47.15m → 154'8" |
| Javelin | 58.93m → 193'4" | 52.70m → 172'11" |
| **Women's** | | |
| High Jump | 1.68m → 5'6 1/4" | 1.60m → 5'3" |
| Pole Vault | 3.79m → 12'5 1/4" | 3.40m → 11'2" |
| Long Jump | 5.86m → 19'2 3/4" | 5.45m → 17'10 3/4" |
| Triple Jump | 11.99m → 39'4" | 11.00m → 36'1" |
| Shot Put | 13.90m → 45'7 1/4" | 11.90m → 39'0 1/2" |
| Discus | 45.24m → 148'5" | 37.00m → 121'5" |
| Hammer | 52.80m → 173'3" | 45.00m → 147'8" |
| Javelin | 42.12m → 138'2" | 36.50m → 119'9" |

### Men's Standards

| Event | Target (NCAA D2) | Recruit (PSAC Auto) | Walk-on (old recruit) |
|-------|-----------------|--------------------|-----------------------|
| 100m | 10.47 | 10.90 | 11.50 |
| 200m | 21.17 | 22.05 | 23.30 |
| 400m | 47.66 | 49.50 | 51.50 |
| 800m | 1:51.02 | 1:56.50 | 2:01.00 |
| 1500m | 3:48.16 | 4:02.00 | 4:20.00 |
| 1600m | 4:03.84* | 4:17.60* | 4:36.87* |
| 3000m Steeplechase | 9:11.00 | 10:05.00 | - |
| 5000m | 14:17.53 | 15:10.00 | 17:00.00 |
| 10000m | 30:03.95 | 32:35.00 | 35:00.00 |
| 110m Hurdles | 14.39 | 15.20 | 15.80 |
| 300m Hurdles | 37.64* | 41.39* | 43.39* |
| 400m Hurdles | 53.15 | 56.50 | 58.50 |
| High Jump | 6'8 3/4" | 6'2 3/4" | 6'1" |
| Pole Vault | 15'11" | 14'3 1/4" | 12'6" |
| Long Jump | 24'0 1/4" | 22'5 3/4" | 21'0" |
| Triple Jump | 48'2 3/4" | 44'11 1/2" | 43'0" |
| Shot Put | 54'5 1/4" | 47'3" | 42'0" |
| Discus | 165'8" | 143'5" | 130'0" |
| Hammer | 187'5" | 154'8" | 140'0" |
| Javelin | 193'4" | 172'11" | 155'0" |
| Decathlon | 6294 | 5850 | 5400 |

*Derived: 1600m from 1500m×1.0667, 300m Hurdles from 400mH−15.11

### Women's Standards

| Event | Target (NCAA D2) | Recruit (PSAC Auto) | Walk-on (old recruit) |
|-------|-----------------|--------------------|-----------------------|
| 100m | 11.76 | 12.40 | 13.00 |
| 200m | 24.18 | 25.50 | 26.40 |
| 400m | 55.70 | 59.00 | 60.50 |
| 800m | 2:11.62 | 2:22.50 | 2:31.00 |
| 1500m | 4:30.17 | 4:55.00 | 5:13.00 |
| 1600m | 4:48.06* | 5:14.68* | 5:34.24* |
| 3000m Steeplechase | 11:00.51 | 12:20.00 | - |
| 5000m | 16:59.79 | 18:15.00 | 19:20.00 |
| 10000m | 36:12.34 | 40:00.00 | 40:30.00 |
| 100m Hurdles | 14.18 | 15.30 | 16.10 |
| 300m Hurdles | 44.41* | 48.81* | 50.81* |
| 400m Hurdles | 1:02.10 | 1:06.50 | 1:08.50 |
| High Jump | 5'6 1/4" | 5'3" | 5'2" |
| Pole Vault | 12'5 1/4" | 11'2" | 10'7" |
| Long Jump | 19'2 3/4" | 17'10 3/4" | 16'6" |
| Triple Jump | 39'4" | 36'1" | 34'0" |
| Shot Put | 45'7 1/4" | 39'0 1/2" | 36'0" |
| Discus | 148'5" | 121'5" | 115'0" |
| Hammer | 173'3" | 147'8" | 130'0" |
| Javelin | 138'2" | 119'9" | 115'0" |
| Heptathlon | 4564 | 4200 | 3900 |

### Technical Details
- File: `src/data/schoolStandards.ts`, lines 14093-14144
- Single block replacement of entire Mansfield object
- Add `hasOfficialStandards: true`
- New events: 3000m Steeplechase (no walk-on since no old recruit exists)
- Removed: Mile (replaced by 1600m derived values)
- Decathlon/Heptathlon: PSAC uses "Top 16" so recruit estimated as midpoint between target and walk-on

