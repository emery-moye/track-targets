

## Plan: Make SUNYAC Javelin Standards Easier

### Overview
Reduce javelin standards for all 11 SUNYAC schools. Men get 15 feet easier across all tiers. Women get 12 feet easier on target and recruit, and 16 feet easier on walk-on.

### Changes: 22 line edits total

#### Men's Javelin (all tiers -15')

| School | Line | Current T / R / W | New T / R / W |
|--------|------|--------------------|---------------|
| Cortland St | 33895 | 185'0" / 174'10" / 164'10" | **170'0"** / **159'10"** / **149'10"** |
| PSU Behrend | 33948 | 185'0" / 174'8" / 164'8" | **170'0"** / **159'8"** / **149'8"** |
| Oneonta St | 34001 | 185'0" / 174'6" / 164'6" | **170'0"** / **159'6"** / **149'6"** |
| Plattsburgh St | 34054 | 185'0" / 174'4" / 164'4" | **170'0"** / **159'4"** / **149'4"** |
| SUNY Delhi | 34107 | 185'0" / 174'2" / 164'2" | **170'0"** / **159'2"** / **149'2"** |
| Fredonia St | 34160 | 185'0" / 174'0" / 164'0" | **170'0"** / **159'0"** / **149'0"** |
| Buffalo St | 34213 | 185'0" / 173'10" / 163'10" | **170'0"** / **158'10"** / **148'10"** |
| Alfred St | 34266 | 185'0" / 173'8" / 163'8" | **170'0"** / **158'8"** / **148'8"** |
| Oswego St | 34319 | 185'0" / 173'6" / 163'6" | **170'0"** / **158'6"** / **148'6"** |
| Morrisville St | 34372 | 185'0" / 173'4" / 163'4" | **170'0"** / **158'4"** / **148'4"** |
| SUNY Cobleskill | 34425 | 185'0" / 173'2" / 163'2" | **170'0"** / **158'2"** / **148'2"** |

#### Women's Javelin (target/recruit -12', walk-on -16')

| School | Line | Current T / R / W | New T / R / W |
|--------|------|--------------------|---------------|
| Cortland St | 33918 | 130'0" / 119'10" / 109'10" | **118'0"** / **107'10"** / **93'10"** |
| PSU Behrend | 33971 | 130'0" / 119'8" / 109'8" | **118'0"** / **107'8"** / **93'8"** |
| Oneonta St | 34024 | 130'0" / 119'6" / 109'6" | **118'0"** / **107'6"** / **93'6"** |
| Plattsburgh St | 34077 | 130'0" / 119'4" / 109'4" | **118'0"** / **107'4"** / **93'4"** |
| SUNY Delhi | 34130 | 130'0" / 119'2" / 109'2" | **118'0"** / **107'2"** / **93'2"** |
| Fredonia St | 34183 | 130'0" / 119'0" / 109'0" | **118'0"** / **107'0"** / **93'0"** |
| Buffalo St | 34236 | 130'0" / 118'10" / 108'10" | **118'0"** / **106'10"** / **92'10"** |
| Alfred St | 34289 | 130'0" / 118'8" / 108'8" | **118'0"** / **106'8"** / **92'8"** |
| Oswego St | 34342 | 130'0" / 118'6" / 108'6" | **118'0"** / **106'6"** / **92'6"** |
| Morrisville St | 34395 | 130'0" / 118'4" / 108'4" | **118'0"** / **106'4"** / **92'4"** |
| SUNY Cobleskill | 34448 | 130'0" / 118'2" / 108'2" | **118'0"** / **106'2"** / **92'2"** |

### Technical Details
- File: `src/data/schoolStandards.ts`
- 22 single-line edits, all fired in parallel
- Men: subtract 15' from target, recruit, and walk-on uniformly
- Women: subtract 12' from target and recruit, subtract 16' from walk-on
- Incremental offsets between schools preserved (2" gaps)

