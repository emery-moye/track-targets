## Plan: Update Fordham to new official standards

Replace Fordham's `maleStandards` and `femaleStandards` (lines 3318–3363 in `src/data/schoolStandards.ts`) using the uploaded charts:

- **Target tier** = chart's "Recruit" column
- **Walk-On tier** = chart's "Walk On" column
- **Recruit tier** = midpoint between target and walk-on (rounded sensibly to existing precision)

Throws will use HS implements (25lb SP, 12lb hammer, 1.67kg discus, 35lb WT) per your answer.

### Men's (target / recruit / walkon)

- 100m: 10.4 / 10.55 / 10.70
- 200m: 21.17 / 21.50 / 21.84
- 400m: 47.80 / 48.23 / 48.67
- 800m: 1:52.0 / 1:53.2 / 1:54.5
- 1600m: 4:14 / 4:19 / 4:25
- 3200m: 9:05 / 9:15 / 9:25
- 5000m XC: 14:45 / 15:07 / 15:30
- 110m Hurdles: 14.20 / 14.50 / 14.80
- 300m Hurdles: 38.62 / 39.70 / 40.77
- Long Jump: 23'7" / 23'0" / 22'5"
- Triple Jump: 49'2" / 48'3" / 47'5"
- High Jump: 6'6" / 6'5" / 6'5" (close — set recruit 6'5")
- Pole Vault: 16'8" / 15'9" / 14'11"
- Shot Put: 57'0" / 55'0" / 53'0"
- Weight Throw: 60'0" / 57'0" / 54'0"
- Discus: 165'0" / 157'6" / 150'0"
- Hammer: 190'0" / 180'0" / 170'0"
- Javelin: 180'0" / 172'6" / 165'0"

### Women's (target / recruit / walkon)

- 100m: 11.57 / 11.79 / 12.01
- 200m: 24.01 / 24.50 / 24.98
- 400m: 55.41 / 56.54 / 57.67
- 800m: 2:07 / 2:10.5 / 2:14
- 1600m: 4:55 / 5:05 / 5:15
- 3200m: 10:30 / 10:50 / 11:10
- 5000m XC: 16:55 / 17:22 / 17:50
- 100m Hurdles: 13.79 / 14.06 / 14.34
- 300m Hurdles: 43.36 / 44.60 / 45.84
- Long Jump: 19'6" / 19'1" / 18'10"
- Triple Jump: 39'4" / 38'9" / 38'5"
- High Jump: 5'7" / 5'6" / 5'5"
- Pole Vault: 13'3" / 12'6" / 12'1"
- Shot Put: 45'9" / 43'10" / 38'0"
- Weight Throw: 55'9" / 53'3" / 50'10"
- Discus: 141'0" / 135'6" / 130'0"
- Hammer: 164'0" / 157'0" / 150'11"
- Javelin: 131'3" / 127'11" / 124'8"

### Notes

- `400m Hurdles` and `Mile`/`1500m` are not on the new chart — I will remove them so only events listed by Fordham remain.
- `hasOfficialStandards: true` stays.
- 5K XC will be stored under key `"5000m"` (existing convention).

After the edit I'll verify the block parses and spot-check a few rows.
