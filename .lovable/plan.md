
## Plan: Add Prairie View A&M University to SWAC

### Overview
Add Prairie View A&M University as a new D1 school in the SWAC conference with limited events (distance running only), using Alabama A&M standards as a baseline with slight variations.

### File to Modify
`src/data/schoolStandards.ts` - Add new school entry after Alabama A&M (around line 29168)

### School Details
| Field | Value |
|-------|-------|
| id | swac_prairie_view_am |
| schoolName | Prairie View A&M University |
| division | D1 |
| conference | SWAC |
| state | TX |
| searchKeywords | "prairie view", "pvamu", "panthers" |

### Events to Include (Distance Only)
Only 3 events per gender, using Alabama A&M as baseline with slight variations (~1-3 seconds different):

**Men's Standards**
| Event | Alabama A&M | Prairie View A&M (Variation) |
|-------|-------------|------------------------------|
| 1600m | 4:21.00 / 4:30.00 / 4:38.00 | 4:22.00 / 4:31.00 / 4:39.00 (+1s) |
| 3200m | 9:12.00 / 9:30.00 / 9:40.00 | 9:15.00 / 9:33.00 / 9:43.00 (+3s) |
| 5K XC | 15:53.00 / 16:15.00 / 16:30.00 | 15:55.00 / 16:18.00 / 16:33.00 (+2-3s) |

**Women's Standards**
| Event | Alabama A&M | Prairie View A&M (Variation) |
|-------|-------------|------------------------------|
| 1600m | 5:17.00 / 5:27.00 / 5:38.00 | 5:18.00 / 5:28.00 / 5:39.00 (+1s) |
| 3200m | 11:28.00 / 11:49.00 / 12:05.00 | 11:31.00 / 11:52.00 / 12:08.00 (+3s) |
| 5K XC | 19:21.00 / 20:21.00 / 21:00.00 | 19:25.00 / 20:25.00 / 21:04.00 (+4s) |

### New Entry Structure
```typescript
{
  id: "swac_prairie_view_am",
  schoolName: "Prairie View A&M University",
  searchKeywords: ["prairie view", "pvamu", "panthers"],
  division: "D1",
  conference: "SWAC",
  state: "TX",
  maleStandards: {
    "1600m": { target: "4:22.00", recruit: "4:31.00", walkon: "4:39.00" },
    "3200m": { target: "9:15.00", recruit: "9:33.00", walkon: "9:43.00" },
    "5K XC": { target: "15:55.00", recruit: "16:18.00", walkon: "16:33.00" }
  },
  femaleStandards: {
    "1600m": { target: "5:18.00", recruit: "5:28.00", walkon: "5:39.00" },
    "3200m": { target: "11:31.00", recruit: "11:52.00", walkon: "12:08.00" },
    "5K XC": { target: "19:25.00", recruit: "20:25.00", walkon: "21:04.00" }
  }
}
```

### Technical Implementation
- Insert new entry after Alabama A&M (line 29168)
- Use slight variations (+1 to +4 seconds slower) to differentiate from Alabama A&M while keeping standards comparable
- Limited to only the 3 requested distance events (1600m, 3200m, 5K XC)
- No `hasOfficialStandards` flag since these are estimates based on Alabama A&M
