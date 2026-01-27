

## Plan: Update Arizona State University with Official Standards

### Overview
Update Arizona State University's track and field standards using their official recruiting standards from the uploaded images:
- **Walk-on tier**: Use "Walk-On (Out of State)" column
- **Recruit tier**: Use "Scholarship Requirements" column  
- **Target tier**: Use "Goal Recruit Marks" column

### File to Modify
`src/data/schoolStandards.ts` (lines 6536-6586)

### Men's Standards (from image-49.png)

| Event | Target (Goal Recruit) | Recruit (Scholarship) | Walk-on (Out of State) |
|-------|----------------------|----------------------|------------------------|
| 100m | 10.20 | 10.50 | 10.60 |
| 200m | 20.50 | 21.00 | 21.30 |
| 400m | 46.50 | 47.20 | 48.50 |
| 800m | 1:49.00 | 1:52.00 | 1:53.00 |
| 1600m | 4:05 | 4:11 | 4:15 |
| 3200m | 8:55 | 9:05 | 9:12 |
| 110m Hurdles | 13.40 | 13.90 | 14.20 |
| 300m Hurdles | 36.50 | 37.20 | 38.00 |
| 400m Hurdles | 50.50 | 51.50 | 52.50 |
| Long Jump | 25'3" | 24'6" | 23'0" |
| Triple Jump | 51'8" | 50'10" | 49'0" |
| High Jump | 7'2" | 7'0" | 6'8" |
| Pole Vault | 17'3" | 16'5" | 15'6" |
| Shot Put | 63'0" | 60'0" | 57'0" |
| Discus | 200'0" | 185'0" | 170'0" |
| Javelin | 230'0" | 210'0" | 190'0" |
| Hammer | 230'0" | 215'0" | 200'0" |

### Women's Standards (from image-48.png)

| Event | Target (Goal Recruit) | Recruit (Scholarship) | Walk-on (Out of State) |
|-------|----------------------|----------------------|------------------------|
| 100m | 11.50 | 11.70 | 11.80 |
| 200m | 23.50 | 24.00 | 24.30 |
| 400m | 52.50 | 54.20 | 55.50 |
| 800m | 2:06.00 | 2:12.00 | 2:16.00 |
| 1600m | 4:48 | 4:55 | 5:05 |
| 3200m | 10:30 | 10:40 | 11:00 |
| 100m Hurdles | 13.40 | 13.80 | 14.20 |
| 300m Hurdles | 41.50 | 42.50 | 44.00 |
| 400m Hurdles | 58.50 | 59.50 | 1:01.00 |
| Long Jump | 20'4" | 19'6" | 18'10" |
| Triple Jump | 42'0" | 40'6" | 39'0" |
| High Jump | 5'10" | 5'8" | 5'7" |
| Pole Vault | 13'3" | 12'5" | 11'6" |
| Shot Put | 50'0" | 47'0" | 43'0" |
| Discus | 170'0" | 155'0" | 140'0" |
| Javelin | 160'0" | 145'0" | 130'0" |
| Hammer | 185'0" | 170'0" | 155'0" |

### Changes Summary
1. Update all men's events with official standards (17 events)
2. Update all women's events with official standards (17 events)
3. Add `hasOfficialStandards: true` flag to mark as verified
4. Add 1600m and 3200m events (currently missing from entry)
5. Keep existing 5000m, 10000m, 1500m, and Mile events with reasonable estimates since they aren't in the official data

### Additional Notes
- The images show 1600m instead of Mile - I'll add 1600m as a new event
- The images show 3200m instead of 5000m - I'll add 3200m and keep 5000m with adjusted values
- Cross Country 5K standards are also shown (Men's Walk-on: 15:15-15:30, Scholarship: 14:20-14:55) - these can inform 5000m estimates

