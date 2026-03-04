

## Plan: Make Middle Atlantic Conference Standards Easier

### What Changes
Adjust all 15 MAC (D3) schools' standards to be easier/slower across all events for both men's and women's programs.

### Calibration (based on user's men's 100m guidance)
Current men's 100m range: target ~10.58-10.65, recruit ~10.78-10.85, walk-on ~10.98-11.05
Desired men's 100m range: target ~10.66-10.72, recruit ~10.92-11.01, walk-on ~11.18-11.25

Approximate shifts:
- **Target**: +0.08-0.10s slower (sprints), proportionally scaled for longer events
- **Recruit**: +0.14-0.19s slower (sprints), proportionally scaled
- **Walk-on**: +0.20-0.25s slower (sprints), proportionally scaled

### Proportional scaling for other events
| Event type | Target shift | Recruit shift | Walk-on shift |
|-----------|-------------|--------------|--------------|
| 100m | +0.08-0.10 | +0.14-0.19 | +0.20-0.25 |
| 200m | +0.15-0.20 | +0.30-0.40 | +0.40-0.50 |
| 400m | +0.40-0.50 | +0.70-0.90 | +1.00-1.20 |
| 800m | +1.5-2.5s | +3.0-4.5s | +4.5-6.0s |
| 1500m/Mile/1600m | +3-5s | +6-9s | +9-13s |
| 5000m | +10-20s | +25-35s | +35-50s |
| 10000m | +25-40s | +50-75s | +75-100s |
| Hurdles | +0.10-0.15 | +0.25-0.35 | +0.35-0.45 |
| Field events | -0.5 to -1.5ft | -1.0 to -2.5ft | -1.5 to -3.0ft |
| Multi-events | -100-200pts | -200-350pts | -300-450pts |

Women's events scaled similarly with appropriate proportions.

### Technical Details
- **File:** `src/data/schoolStandards.ts`, lines 34456-35253
- Replace all 15 MAC school entries with updated, easier standards
- Maintain the same small inter-school variations (higher-ranked schools slightly harder)
- Each school keeps its unique variation pattern, just shifted easier overall

