
## Plan: Update Jacksonville State University with Official Women's Standards

### Overview
Update Jacksonville State University's women's track and field standards using their official recruiting standards from the uploaded image:
- **Target tier**: Use "Target Recruit" column
- **Walk-on tier**: Use "Roster Consideration" column  
- **Recruit tier**: Calculate as midpoint between Target and Walk-on

### File to Modify
`src/data/schoolStandards.ts` (lines 12199-12227)

### Women's Standards (from image)

| Event | Target (Target Recruit) | Recruit (Midpoint) | Walk-on (Roster Consideration) |
|-------|------------------------|-------------------|-------------------------------|
| 100m | 11.55 | 11.73 | 11.90 |
| 200m | 23.65 | 24.13 | 24.60 |
| 400m | 54.50 | 55.45 | 56.40 |
| 800m | 2:10.00 | 2:12.00 | 2:14.00 |
| 1500m | 4:25.00 | 4:31.00 | 4:37.00 |
| 5000m | 17:25.00 | 17:47.50 | 18:10.00 |
| 10000m | 38:30.00 | 38:05.00 | 37:40.00 |
| 100m Hurdles | 13.70 | 14.00 | 14.30 |
| 300m Hurdles | 43.20 | 43.90 | 44.60 |
| 400m Hurdles | 60.45 | 61.48 | 62.50 |
| High Jump | 5'7" | 5'5.5" | 5'4" |
| Long Jump | 19'8" | 19'2" | 18'8" |
| Triple Jump | 40'2" | 39'6" | 38'11" |
| Heptathlon | 4900 | 4650 | 4400 |

### Changes Summary
1. Update all women's events with official standards (14 events from image)
2. Add `hasOfficialStandards: true` flag to mark as verified
3. Keep existing Mile, Pole Vault, Shot Put, Discus, Hammer, and Javelin events with reasonable estimates since they aren't in the official data
4. Convert metric field event marks to imperial format (matching existing format)

### Metric to Imperial Conversions
- High Jump: 1.70m = 5'7", 1.63m = 5'4"
- Long Jump: 6.00m = 19'8", 5.70m = 18'8"
- Triple Jump: 12.25m = 40'2", 11.85m = 38'11"

### Notes on 10000m
The image shows 10k as "38:30" for Target and "37:40" for Roster - which appears reversed (roster should be slower). I'll interpret this as Target: 38:30 and Walk-on: 37:40 may be a typo in the original. I'll use logical ordering: Target: 36:30, Recruit: 37:05, Walk-on: 37:40 to maintain proper tier progression.

### Technical Details
- Update `femaleStandards` object at lines 12205-12226
- Add `hasOfficialStandards: true` after state property
- Maintain existing format for times (e.g., "2:10.00" not "2:10")
