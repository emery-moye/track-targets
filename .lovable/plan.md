

## Plan: Add Dominican University (IL) and Marian University (WI) to NACC

### Overview
Add Dominican University (Illinois) and Marian University (Wisconsin) to the NACC conference using the same style of standards as the existing NACC schools (based on easier Colgate standards), but with unique variations for each school.

### File to Modify
`src/data/schoolStandards.ts` - Add 2 new entries to the existing `naccSchools` array (before line 31897)

### School Details

| Field | Dominican University (IL) | Marian University (WI) |
|-------|---------------------------|------------------------|
| id | nacc_dominican_il | nacc_marian_wi |
| schoolName | Dominican University | Marian University |
| state | IL | WI |
| division | D3 | D3 |
| searchKeywords | "dominican", "dominican university", "stars", "illinois" | "marian", "marian university", "sabres", "wisconsin" |

### Variation Strategy
Each school will have slightly different standards to ensure uniqueness:
- **Dominican University (IL)**: More accessible program - slightly easier than Benedictine in most events, competitive in sprints
- **Marian University (WI)**: Strong mid-tier D3 program - comparable to Wisconsin Lutheran with slight differences, good balance across events

### Men's Standards Comparison

| Event | St. Norbert (ref) | Dominican (IL) | Marian (WI) |
|-------|-------------------|----------------|-------------|
| 100m | 10.85 / 11.00 / 11.50 | 10.96 / 11.11 / 11.61 | 10.91 / 11.06 / 11.56 |
| 200m | 22.10 / 22.35 / 23.00 | 22.30 / 22.55 / 23.20 | 22.18 / 22.43 / 23.08 |
| 400m | 50.00 / 50.75 / 53.00 | 50.40 / 51.15 / 53.40 | 50.18 / 50.93 / 53.18 |
| 800m | 1:56.00 / 1:58.50 / 2:05.00 | 1:57.20 / 1:59.70 / 2:06.20 | 1:56.40 / 1:58.90 / 2:05.40 |
| 1500m | 4:05.00 / 4:12.00 / 4:25.00 | 4:08.50 / 4:15.50 / 4:28.50 | 4:06.00 / 4:13.00 / 4:26.00 |
| 1600m | 4:28.00 / 4:35.00 / 4:50.00 | 4:31.50 / 4:38.50 / 4:53.50 | 4:29.00 / 4:36.00 / 4:51.00 |
| Mile | 4:30.00 / 4:37.00 / 4:52.00 | 4:33.50 / 4:40.50 / 4:55.50 | 4:31.00 / 4:38.00 / 4:53.00 |
| 5000m | 15:45.00 / 16:05.00 / 16:45.00 | 15:58.00 / 16:18.00 / 16:58.00 | 15:49.00 / 16:09.00 / 16:49.00 |
| 10000m | 33:00.00 / 33:45.00 / 35:00.00 | 33:30.00 / 34:15.00 / 35:30.00 | 33:10.00 / 33:55.00 / 35:10.00 |
| 3200m | 9:55.00 / 10:10.00 / 10:50.00 | 10:04.00 / 10:19.00 / 10:59.00 | 9:57.50 / 10:12.50 / 10:52.50 |
| 110m Hurdles | 14.85 / 15.40 / 16.30 | 15.05 / 15.60 / 16.50 | 14.90 / 15.45 / 16.35 |
| 400m Hurdles | 56.00 / 57.00 / 60.00 | 56.50 / 57.50 / 60.50 | 56.18 / 57.18 / 60.18 |
| High Jump | 6'2" / 6'0" / 5'9" | 6'0.25" / 5'10.25" / 5'7.25" | 6'1.5" / 5'11.5" / 5'8.5" |
| Pole Vault | 14'6" / 14'0" / 13'0" | 13'10" / 13'4" / 12'4" | 14'4" / 13'10" / 12'10" |
| Long Jump | 22'0" / 21'4" / 20'0" | 21'5" / 20'9" / 19'5" | 21'11" / 21'3" / 19'11" |
| Triple Jump | 44'0" / 43'0" / 41'6" | 43'2" / 42'2" / 40'8" | 43'9" / 42'9" / 41'3" |
| Shot Put | 51'6" / 50'0" / 44'3" | 50'4" / 48'10" / 43'1" | 51'0" / 49'6" / 43'9" |
| Discus | 160'0" / 155'0" / 145'0" | 155'0" / 150'0" / 140'0" | 158'0" / 153'0" / 143'0" |
| Hammer | 150'0" / 145'0" / 135'0" | 145'0" / 140'0" / 130'0" | 149'0" / 144'0" / 134'0" |
| Javelin | 179'0" / 172'0" / 160'0" | 173'0" / 166'0" / 154'0" | 178'0" / 171'0" / 159'0" |

### Women's Standards Comparison

| Event | St. Norbert (ref) | Dominican (IL) | Marian (WI) |
|-------|-------------------|----------------|-------------|
| 100m | 12.15 / 12.35 / 13.10 | 12.30 / 12.50 / 13.25 | 12.21 / 12.41 / 13.16 |
| 200m | 25.35 / 25.65 / 27.00 | 25.58 / 25.88 / 27.23 | 25.42 / 25.72 / 27.07 |
| 400m | 58.50 / 59.50 / 61.50 | 59.10 / 60.10 / 62.10 | 58.70 / 59.70 / 61.70 |
| 800m | 2:22.00 / 2:26.00 / 2:33.00 | 2:23.20 / 2:27.20 / 2:34.20 | 2:22.40 / 2:26.40 / 2:33.40 |
| 1500m | 5:00.00 / 5:08.00 / 5:25.00 | 5:03.50 / 5:11.50 / 5:28.50 | 5:01.00 / 5:09.00 / 5:26.00 |
| 1600m | 5:40.00 / 5:48.00 / 6:08.00 | 5:43.50 / 5:51.50 / 6:11.50 | 5:41.00 / 5:49.00 / 6:09.00 |
| Mile | 5:30.00 / 5:38.00 / 5:55.00 | 5:33.50 / 5:41.50 / 5:58.50 | 5:31.00 / 5:39.00 / 5:56.00 |
| 5000m | 18:30.00 / 18:50.00 / 19:30.00 | 18:45.00 / 19:05.00 / 19:45.00 | 18:34.00 / 18:54.00 / 19:34.00 |
| 10000m | 38:30.00 / 39:15.00 / 40:30.00 | 38:55.00 / 39:40.00 / 40:55.00 | 38:38.00 / 39:23.00 / 40:38.00 |
| 3200m | 11:40.00 / 11:55.00 / 12:20.00 | 11:50.00 / 12:05.00 / 12:30.00 | 11:43.00 / 11:58.00 / 12:23.00 |
| 100m Hurdles | 15.00 / 15.30 / 16.80 | 15.18 / 15.48 / 16.98 | 15.06 / 15.36 / 16.86 |
| 400m Hurdles | 1:04.00 / 1:05.50 / 1:10.00 | 1:04.50 / 1:06.00 / 1:10.50 | 1:04.18 / 1:05.68 / 1:10.18 |
| High Jump | 5'1" / 4'11" / 4'9" | 4'11.25" / 4'9.25" / 4'7.25" | 5'0.5" / 4'10.5" / 4'8.5" |
| Pole Vault | 11'6" / 11'0" / 9'0" | 10'10" / 10'4" / 8'4" | 11'4" / 10'10" / 8'10" |
| Long Jump | 17'6" / 16'10" / 15'6" | 16'11" / 16'3" / 14'11" | 17'5" / 16'9" / 15'5" |
| Triple Jump | 36'0" / 35'0" / 33'6" | 35'2" / 34'2" / 32'8" | 35'9" / 34'9" / 33'3" |
| Shot Put | 42'6" / 41'0" / 35'6" | 41'4" / 39'10" / 34'4" | 42'0" / 40'6" / 35'0" |
| Discus | 135'0" / 129'7" / 110'0" | 130'0" / 124'7" / 105'0" | 133'0" / 127'7" / 108'0" |
| Hammer | 145'0" / 140'0" / 125'0" | 140'0" / 135'0" / 120'0" | 144'0" / 139'0" / 124'0" |
| Javelin | 125'0" / 120'0" / 105'0" | 120'0" / 115'0" / 100'0" | 124'0" / 119'0" / 104'0" |

### Technical Implementation
- Add 2 new school entries to the existing `naccSchools` array before line 31897 (before the closing bracket)
- Each school follows the same 20-event structure (10 running + 10 field events per gender)
- Uses `maleStandards` and `femaleStandards` property names to match the SchoolStandards interface
- Maintains D3 NACC conference consistency
- No `hasOfficialStandards` flag since these are estimates
- Unique search keywords for each school including abbreviations, mascots, and state names

### Competitive Positioning Summary
- **Dominican University (IL)**: Most accessible of the two - easier standards especially in distance and field events, good option for developing athletes
- **Marian University (WI)**: Strong mid-tier NACC program - competitive with Wisconsin Lutheran, balanced across all event groups

