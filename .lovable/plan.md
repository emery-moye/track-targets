

## Plan: Add Edgewood College and Lakeland University to NACC

### Overview
Add Edgewood College and Lakeland University to the NACC conference using the same style of standards as the existing NACC schools (based on easier Colgate standards), but with unique variations for each school.

### File to Modify
`src/data/schoolStandards.ts` - Add 2 new entries to the existing `naccSchools` array (before line 31791)

### School Details

| Field | Edgewood College | Lakeland University |
|-------|------------------|---------------------|
| id | nacc_edgewood | nacc_lakeland |
| schoolName | Edgewood College | Lakeland University |
| state | WI | WI |
| division | D3 | D3 |
| searchKeywords | "edgewood", "edgewood college", "eagles" | "lakeland", "lakeland university", "muskies" |

### Variation Strategy
Each school will have slightly different standards to ensure uniqueness:
- **Edgewood College**: Slightly more accessible than Aurora/Concordia Chicago - a bit easier in distance events, comparable in sprints
- **Lakeland University**: Strong mid-tier D3 program - slightly faster than Wisconsin Lutheran in some events, competitive overall

### Men's Standards Comparison

| Event | St. Norbert (ref) | Edgewood | Lakeland |
|-------|-------------------|----------|----------|
| 100m | 10.85 / 11.00 / 11.50 | 10.98 / 11.13 / 11.63 | 10.94 / 11.09 / 11.59 |
| 200m | 22.10 / 22.35 / 23.00 | 22.28 / 22.53 / 23.18 | 22.22 / 22.47 / 23.12 |
| 400m | 50.00 / 50.75 / 53.00 | 50.35 / 51.10 / 53.35 | 50.25 / 51.00 / 53.25 |
| 800m | 1:56.00 / 1:58.50 / 2:05.00 | 1:57.00 / 1:59.50 / 2:06.00 | 1:56.60 / 1:59.10 / 2:05.60 |
| 1500m | 4:05.00 / 4:12.00 / 4:25.00 | 4:08.00 / 4:15.00 / 4:28.00 | 4:06.50 / 4:13.50 / 4:26.50 |
| 1600m | 4:28.00 / 4:35.00 / 4:50.00 | 4:31.00 / 4:38.00 / 4:53.00 | 4:29.50 / 4:36.50 / 4:51.50 |
| Mile | 4:30.00 / 4:37.00 / 4:52.00 | 4:33.00 / 4:40.00 / 4:55.00 | 4:31.50 / 4:38.50 / 4:53.50 |
| 5000m | 15:45.00 / 16:05.00 / 16:45.00 | 15:55.00 / 16:15.00 / 16:55.00 | 15:52.00 / 16:12.00 / 16:52.00 |
| 10000m | 33:00.00 / 33:45.00 / 35:00.00 | 33:25.00 / 34:10.00 / 35:25.00 | 33:15.00 / 34:00.00 / 35:15.00 |
| 3200m | 9:55.00 / 10:10.00 / 10:50.00 | 10:02.00 / 10:17.00 / 10:57.00 | 9:59.00 / 10:14.00 / 10:54.00 |
| 110m Hurdles | 14.85 / 15.40 / 16.30 | 15.02 / 15.57 / 16.47 | 14.95 / 15.50 / 16.40 |
| 400m Hurdles | 56.00 / 57.00 / 60.00 | 56.45 / 57.45 / 60.45 | 56.28 / 57.28 / 60.28 |
| High Jump | 6'2" / 6'0" / 5'9" | 6'0.5" / 5'10.5" / 5'7.5" | 6'1.75" / 5'11.75" / 5'8.75" |
| Pole Vault | 14'6" / 14'0" / 13'0" | 13'11" / 13'5" / 12'5" | 14'2" / 13'8" / 12'8" |
| Long Jump | 22'0" / 21'4" / 20'0" | 21'6" / 20'10" / 19'6" | 21'9" / 21'1" / 19'9" |
| Triple Jump | 44'0" / 43'0" / 41'6" | 43'3" / 42'3" / 40'9" | 43'6" / 42'6" / 41'0" |
| Shot Put | 51'6" / 50'0" / 44'3" | 50'6" / 49'0" / 43'3" | 50'10" / 49'4" / 43'7" |
| Discus | 160'0" / 155'0" / 145'0" | 156'0" / 151'0" / 141'0" | 157'6" / 152'6" / 142'6" |
| Hammer | 150'0" / 145'0" / 135'0" | 146'0" / 141'0" / 131'0" | 147'6" / 142'6" / 132'6" |
| Javelin | 179'0" / 172'0" / 160'0" | 174'0" / 167'0" / 155'0" | 176'0" / 169'0" / 157'0" |

### Women's Standards Comparison

| Event | St. Norbert (ref) | Edgewood | Lakeland |
|-------|-------------------|----------|----------|
| 100m | 12.15 / 12.35 / 13.10 | 12.28 / 12.48 / 13.23 | 12.24 / 12.44 / 13.19 |
| 200m | 25.35 / 25.65 / 27.00 | 25.55 / 25.85 / 27.20 | 25.48 / 25.78 / 27.13 |
| 400m | 58.50 / 59.50 / 61.50 | 59.00 / 60.00 / 62.00 | 58.85 / 59.85 / 61.85 |
| 800m | 2:22.00 / 2:26.00 / 2:33.00 | 2:23.00 / 2:27.00 / 2:34.00 | 2:22.60 / 2:26.60 / 2:33.60 |
| 1500m | 5:00.00 / 5:08.00 / 5:25.00 | 5:03.00 / 5:11.00 / 5:28.00 | 5:01.50 / 5:09.50 / 5:26.50 |
| 1600m | 5:40.00 / 5:48.00 / 6:08.00 | 5:43.00 / 5:51.00 / 6:11.00 | 5:41.50 / 5:49.50 / 6:09.50 |
| Mile | 5:30.00 / 5:38.00 / 5:55.00 | 5:33.00 / 5:41.00 / 5:58.00 | 5:31.50 / 5:39.50 / 5:56.50 |
| 5000m | 18:30.00 / 18:50.00 / 19:30.00 | 18:42.00 / 19:02.00 / 19:42.00 | 18:38.00 / 18:58.00 / 19:38.00 |
| 10000m | 38:30.00 / 39:15.00 / 40:30.00 | 38:52.00 / 39:37.00 / 40:52.00 | 38:44.00 / 39:29.00 / 40:44.00 |
| 3200m | 11:40.00 / 11:55.00 / 12:20.00 | 11:48.00 / 12:03.00 / 12:28.00 | 11:45.00 / 12:00.00 / 12:25.00 |
| 100m Hurdles | 15.00 / 15.30 / 16.80 | 15.15 / 15.45 / 16.95 | 15.10 / 15.40 / 16.90 |
| 400m Hurdles | 1:04.00 / 1:05.50 / 1:10.00 | 1:04.45 / 1:05.95 / 1:10.45 | 1:04.30 / 1:05.80 / 1:10.30 |
| High Jump | 5'1" / 4'11" / 4'9" | 4'11.5" / 4'9.5" / 4'7.5" | 5'0.75" / 4'10.75" / 4'8.75" |
| Pole Vault | 11'6" / 11'0" / 9'0" | 10'11" / 10'5" / 8'5" | 11'2" / 10'8" / 8'8" |
| Long Jump | 17'6" / 16'10" / 15'6" | 17'0" / 16'4" / 15'0" | 17'3" / 16'7" / 15'3" |
| Triple Jump | 36'0" / 35'0" / 33'6" | 35'3" / 34'3" / 32'9" | 35'6" / 34'6" / 33'0" |
| Shot Put | 42'6" / 41'0" / 35'6" | 41'6" / 40'0" / 34'6" | 41'10" / 40'4" / 34'10" |
| Discus | 135'0" / 129'7" / 110'0" | 131'0" / 125'7" / 106'0" | 132'6" / 127'1" / 107'6" |
| Hammer | 145'0" / 140'0" / 125'0" | 141'0" / 136'0" / 121'0" | 142'6" / 137'6" / 122'6" |
| Javelin | 125'0" / 120'0" / 105'0" | 121'0" / 116'0" / 101'0" | 122'6" / 117'6" / 102'6" |

### Technical Implementation
- Add 2 new school entries to the existing `naccSchools` array before line 31791
- Each school follows the same 20-event structure (10 running + 10 field events per gender)
- Maintains D3 NACC conference consistency
- No `hasOfficialStandards` flag since these are estimates
- Unique search keywords for each school including abbreviations and mascots

### Competitive Positioning Summary
- **Edgewood College**: Most accessible of the new additions - slightly easier standards especially in distance and field events
- **Lakeland University**: Strong mid-tier NACC program - competitive with Wisconsin Lutheran and MSOE

