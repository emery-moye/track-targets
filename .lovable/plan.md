

## Plan: Add Three Additional NACC Schools

### Overview
Add Wisconsin Lutheran College, Benedictine University (IL), and Illinois Institute of Technology to the NACC conference using the same style of standards as the existing NACC schools (based on easier Colgate standards), but with unique variations for each school.

### File to Modify
`src/data/schoolStandards.ts` - Add 3 new entries to the existing `naccSchools` array (before line 31635)

### School Details

| Field | Wisconsin Lutheran | Benedictine (IL) | Illinois Tech |
|-------|-------------------|------------------|---------------|
| id | nacc_wisconsin_lutheran | nacc_benedictine_il | nacc_illinois_tech |
| schoolName | Wisconsin Lutheran College | Benedictine University | Illinois Institute of Technology |
| state | WI | IL | IL |
| division | D3 | D3 | D3 |
| searchKeywords | "wisconsin lutheran", "wlc", "warriors" | "benedictine", "benedictine university", "eagles" | "illinois tech", "iit", "scarlet hawks" |

### Variation Strategy
Each school will have slightly different standards to ensure uniqueness:
- **Wisconsin Lutheran**: Middle ground - slightly faster than Concordia Chicago in some events, slightly slower in others
- **Benedictine (IL)**: Slightly more accessible overall - easier hurdles and field events
- **Illinois Tech**: Competitive D3 engineering school - similar to MSOE with slight technical school adjustments

### Men's Standards Comparison

| Event | St. Norbert (ref) | Wisconsin Lutheran | Benedictine (IL) | Illinois Tech |
|-------|-------------------|-------------------|------------------|---------------|
| 100m | 10.85 / 11.00 / 11.50 | 10.92 / 11.07 / 11.57 | 10.95 / 11.10 / 11.60 | 10.89 / 11.04 / 11.54 |
| 200m | 22.10 / 22.35 / 23.00 | 22.20 / 22.45 / 23.10 | 22.25 / 22.50 / 23.15 | 22.16 / 22.41 / 23.06 |
| 400m | 50.00 / 50.75 / 53.00 | 50.20 / 50.95 / 53.20 | 50.30 / 51.05 / 53.30 | 50.12 / 50.87 / 53.12 |
| 800m | 1:56.00 / 1:58.50 / 2:05.00 | 1:56.50 / 1:59.00 / 2:05.50 | 1:56.80 / 1:59.30 / 2:05.80 | 1:56.25 / 1:58.75 / 2:05.25 |
| 1500m | 4:05.00 / 4:12.00 / 4:25.00 | 4:06.00 / 4:13.00 / 4:26.00 | 4:07.00 / 4:14.00 / 4:27.00 | 4:05.60 / 4:12.60 / 4:25.60 |
| 1600m | 4:28.00 / 4:35.00 / 4:50.00 | 4:29.00 / 4:36.00 / 4:51.00 | 4:30.00 / 4:37.00 / 4:52.00 | 4:28.60 / 4:35.60 / 4:50.60 |
| Mile | 4:30.00 / 4:37.00 / 4:52.00 | 4:31.00 / 4:38.00 / 4:53.00 | 4:32.00 / 4:39.00 / 4:54.00 | 4:30.60 / 4:37.60 / 4:52.60 |
| 5000m | 15:45.00 / 16:05.00 / 16:45.00 | 15:50.00 / 16:10.00 / 16:50.00 | 15:52.00 / 16:12.00 / 16:52.00 | 15:48.00 / 16:08.00 / 16:48.00 |
| 10000m | 33:00.00 / 33:45.00 / 35:00.00 | 33:12.00 / 33:57.00 / 35:12.00 | 33:18.00 / 34:03.00 / 35:18.00 | 33:06.00 / 33:51.00 / 35:06.00 |
| 3200m | 9:55.00 / 10:10.00 / 10:50.00 | 9:58.00 / 10:13.00 / 10:53.00 | 10:00.00 / 10:15.00 / 10:55.00 | 9:57.00 / 10:12.00 / 10:52.00 |
| 110m Hurdles | 14.85 / 15.40 / 16.30 | 14.92 / 15.47 / 16.37 | 14.98 / 15.53 / 16.43 | 14.89 / 15.44 / 16.34 |
| 400m Hurdles | 56.00 / 57.00 / 60.00 | 56.20 / 57.20 / 60.20 | 56.35 / 57.35 / 60.35 | 56.12 / 57.12 / 60.12 |
| High Jump | 6'2" / 6'0" / 5'9" | 6'1.5" / 5'11.5" / 5'8.5" | 6'1" / 5'11" / 5'8" | 6'2.25" / 6'0.25" / 5'9.25" |
| Pole Vault | 14'6" / 14'0" / 13'0" | 14'3" / 13'9" / 12'9" | 14'1" / 13'7" / 12'7" | 14'5" / 13'11" / 12'11" |
| Long Jump | 22'0" / 21'4" / 20'0" | 21'10" / 21'2" / 19'10" | 21'8" / 21'0" / 19'8" | 22'1" / 21'5" / 20'1" |
| Triple Jump | 44'0" / 43'0" / 41'6" | 43'8" / 42'8" / 41'2" | 43'5" / 42'5" / 40'11" | 44'1" / 43'1" / 41'7" |
| Shot Put | 51'6" / 50'0" / 44'3" | 51'2" / 49'8" / 43'11" | 50'10" / 49'4" / 43'7" | 51'4" / 49'10" / 44'1" |
| Discus | 160'0" / 155'0" / 145'0" | 158'6" / 153'6" / 143'6" | 157'0" / 152'0" / 142'0" | 159'6" / 154'6" / 144'6" |
| Hammer | 150'0" / 145'0" / 135'0" | 148'6" / 143'6" / 133'6" | 147'0" / 142'0" / 132'0" | 150'3" / 145'3" / 135'3" |
| Javelin | 179'0" / 172'0" / 160'0" | 177'6" / 170'6" / 158'6" | 176'0" / 169'0" / 157'0" | 179'3" / 172'3" / 160'3" |

### Women's Standards Comparison

| Event | St. Norbert (ref) | Wisconsin Lutheran | Benedictine (IL) | Illinois Tech |
|-------|-------------------|-------------------|------------------|---------------|
| 100m | 12.15 / 12.35 / 13.10 | 12.22 / 12.42 / 13.17 | 12.25 / 12.45 / 13.20 | 12.19 / 12.39 / 13.14 |
| 200m | 25.35 / 25.65 / 27.00 | 25.45 / 25.75 / 27.10 | 25.50 / 25.80 / 27.15 | 25.41 / 25.71 / 27.06 |
| 400m | 58.50 / 59.50 / 61.50 | 58.75 / 59.75 / 61.75 | 58.90 / 59.90 / 61.90 | 58.62 / 59.62 / 61.62 |
| 800m | 2:22.00 / 2:26.00 / 2:33.00 | 2:22.50 / 2:26.50 / 2:33.50 | 2:22.80 / 2:26.80 / 2:33.80 | 2:22.25 / 2:26.25 / 2:33.25 |
| 1500m | 5:00.00 / 5:08.00 / 5:25.00 | 5:01.00 / 5:09.00 / 5:26.00 | 5:02.00 / 5:10.00 / 5:27.00 | 5:00.60 / 5:08.60 / 5:25.60 |
| 1600m | 5:40.00 / 5:48.00 / 6:08.00 | 5:41.00 / 5:49.00 / 6:09.00 | 5:42.00 / 5:50.00 / 6:10.00 | 5:40.60 / 5:48.60 / 6:08.60 |
| Mile | 5:30.00 / 5:38.00 / 5:55.00 | 5:31.00 / 5:39.00 / 5:56.00 | 5:32.00 / 5:40.00 / 5:57.00 | 5:30.60 / 5:38.60 / 5:55.60 |
| 5000m | 18:30.00 / 18:50.00 / 19:30.00 | 18:35.00 / 18:55.00 / 19:35.00 | 18:38.00 / 18:58.00 / 19:38.00 | 18:32.50 / 18:52.50 / 19:32.50 |
| 10000m | 38:30.00 / 39:15.00 / 40:30.00 | 38:40.00 / 39:25.00 / 40:40.00 | 38:45.00 / 39:30.00 / 40:45.00 | 38:36.00 / 39:21.00 / 40:36.00 |
| 3200m | 11:40.00 / 11:55.00 / 12:20.00 | 11:44.00 / 11:59.00 / 12:24.00 | 11:46.00 / 12:01.00 / 12:26.00 | 11:42.00 / 11:57.00 / 12:22.00 |
| 100m Hurdles | 15.00 / 15.30 / 16.80 | 15.08 / 15.38 / 16.88 | 15.12 / 15.42 / 16.92 | 15.04 / 15.34 / 16.84 |
| 400m Hurdles | 1:04.00 / 1:05.50 / 1:10.00 | 1:04.20 / 1:05.70 / 1:10.20 | 1:04.35 / 1:05.85 / 1:10.35 | 1:04.12 / 1:05.62 / 1:10.12 |
| High Jump | 5'1" / 4'11" / 4'9" | 5'0.5" / 4'10.5" / 4'8.5" | 5'0" / 4'10" / 4'8" | 5'1.25" / 4'11.25" / 4'9.25" |
| Pole Vault | 11'6" / 11'0" / 9'0" | 11'3" / 10'9" / 8'9" | 11'1" / 10'7" / 8'7" | 11'5" / 10'11" / 8'11" |
| Long Jump | 17'6" / 16'10" / 15'6" | 17'4" / 16'8" / 15'4" | 17'2" / 16'6" / 15'2" | 17'7" / 16'11" / 15'7" |
| Triple Jump | 36'0" / 35'0" / 33'6" | 35'8" / 34'8" / 33'2" | 35'5" / 34'5" / 32'11" | 36'1" / 35'1" / 33'7" |
| Shot Put | 42'6" / 41'0" / 35'6" | 42'2" / 40'8" / 35'2" | 41'10" / 40'4" / 34'10" | 42'4" / 40'10" / 35'4" |
| Discus | 135'0" / 129'7" / 110'0" | 133'6" / 128'1" / 108'6" | 132'0" / 126'7" / 107'0" | 134'6" / 129'1" / 109'6" |
| Hammer | 145'0" / 140'0" / 125'0" | 143'6" / 138'6" / 123'6" | 142'0" / 137'0" / 122'0" | 145'3" / 140'3" / 125'3" |
| Javelin | 125'0" / 120'0" / 105'0" | 123'6" / 118'6" / 103'6" | 122'0" / 117'0" / 102'0" | 125'3" / 120'3" / 105'3" |

### Technical Implementation
- Add 3 new school entries to the existing `naccSchools` array before the closing bracket (line 31635)
- Each school follows the same 20-event structure (10 running + 10 field events per gender)
- Maintains D3 NACC conference consistency
- No `hasOfficialStandards` flag since these are estimates
- Unique search keywords for each school including abbreviations and mascots

### Competitive Positioning Summary
- **Wisconsin Lutheran**: Mid-tier NACC - good all-around D3 program
- **Benedictine (IL)**: Most accessible - slightly easier standards across most events
- **Illinois Tech**: Engineering school competitive - similar to MSOE, slightly faster in technical events

