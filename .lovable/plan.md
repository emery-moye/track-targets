
## Plan: Add Bethune-Cookman University with Official Standards

### Overview
Add Bethune-Cookman University as a new SWAC D1 school using their official recruiting standards from the uploaded images:
- **Target tier**: Athletic Scholarship standards
- **Walk-on tier**: Walk-on standards  
- **Recruit tier**: Calculate as midpoint between Target and Walk-on

### File to Modify
`src/data/schoolStandards.ts` - Add new entry after Arkansas Pine Bluff (around line 29324)

### School Details
| Field | Value |
|-------|-------|
| id | swac_bethune_cookman |
| schoolName | Bethune-Cookman University |
| division | D1 |
| conference | SWAC |
| state | FL |
| hasOfficialStandards | true |
| searchKeywords | "bethune cookman", "bcu", "wildcats", "b-cu" |

### Men's Standards (from official documents)

| Event | Target (Scholarship) | Recruit (Midpoint) | Walk-on |
|-------|---------------------|-------------------|---------|
| 100m | 10.50 | 10.70 | 10.90 |
| 200m | 21.50 | 21.70 | 21.90 |
| 400m | 47.50 | 48.50 | 49.50 |
| 800m | 1:54.00 | 1:57.00 | 2:00.00 |
| 1500m | 4:00.00 | 4:10.00 | 4:20.00 |
| Mile | 4:23.00 | 4:29.00 | 4:35.00 |
| Steeplechase | 9:30.00 | 10:05.00 | 10:40.00 |
| 110m Hurdles | 14.00 | 14.50 | 15.00 |
| 300m Hurdles | 38.00 | 39.00 | 40.00 |
| 400m Hurdles | 53.00 | 54.50 | 56.00 |
| High Jump | 6'10" | 6'7" | 6'4" |
| Long Jump | 23'5" | 22'11" | 22'6" |
| Triple Jump | 48'0" | 47'0" | 46'0" |
| Pole Vault | 14'0" | 12'6" | 11'0" |
| Shot Put | 58'0" | 54'0" | 50'0" |
| Discus | 170'0" | 162'6" | 155'0" |
| Javelin | 200'0" | 174'0" | 148'0" |
| Hammer | 150'0" | 145'6" | 141'0" |
| 5K XC | 15:55.00 | 16:12.50 | 16:30.00 |

### Women's Standards (from official documents)

| Event | Target (Scholarship) | Recruit (Midpoint) | Walk-on |
|-------|---------------------|-------------------|---------|
| 100m | 11.75 | 12.03 | 12.30 |
| 200m | 24.40 | 24.85 | 25.30 |
| 400m | 56.00 | 57.00 | 58.00 |
| 800m | 2:15.00 | 2:17.50 | 2:20.00 |
| 1500m | 4:50.00 | 5:02.50 | 5:15.00 |
| Mile | 5:15.00 | 5:22.50 | 5:30.00 |
| 100m Hurdles | 14.20 | 14.70 | 15.20 |
| 300m Hurdles | 43.50 | 44.50 | 45.50 |
| 400m Hurdles | 1:02.00 | 1:04.00 | 1:06.00 |
| High Jump | 5'6" | 5'4.5" | 5'3" |
| Long Jump | 19'0" | 18'0" | 17'0" |
| Triple Jump | 40'0" | 38'6" | 37'0" |
| Pole Vault | 10'6" | 10'0" | 9'6" |
| Shot Put | 45'0" | 43'6" | 42'0" |
| Discus | 135'0" | 132'6" | 130'0" |
| Javelin | 125'0" | 125'0" | 125'0" |
| Hammer | 166'11" | 157'11" | 148'11" |
| 5K XC | 19:00.00 | 20:00.00 | 21:00.00 |

### Notes on Data Corrections
- **Men's 1500m walk-on**: The image shows 4:00 for both tiers, which appears to be a typo. I'll use 4:20.00 for walk-on to create proper progression.
- **Men's Long Jump walk-on**: The image shows "22"57" which appears to be a formatting error. Interpreting as 22'6".
- **Women's Discus walk-on**: The image shows "13'0" which is clearly a typo - should be 130'0".
- **Women's Javelin**: Both tiers show 125'0", so recruit will also be 125'0".
- **5K XC**: Converting from CC (3 miles/3.1 miles) to 5K XC format for consistency with the database.

### Technical Implementation
- Insert new entry after Arkansas Pine Bluff (line 29324)
- Add `hasOfficialStandards: true` since these are from official recruiting sheets
- Include 19 events for men and 18 events for women (matching official document)
- Use proper time formatting (e.g., "1:54.00" not "1:54")
