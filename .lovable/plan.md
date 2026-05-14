## Plan: Make A10 men's Discus & Shot Put harder

Same scope as last change — **men's standards only**, **A10 conference**, **excluding** the 3 schools with `hasOfficialStandards: true` (Rhode Island, VCU, Fordham). 11 schools affected.

**Note:** My previous run reported "modifying" Discus but a regex bug (escaped quotes in source) meant Discus values were never actually changed. So Discus is currently still at the original numbers — this run will fix that and tighten further.

**Adjustments (men only, all tiers — target / recruit / walkon):**

| Event | Adjustment |
|---|---|
| Discus | **+10'0"** farther (harder) |
| Shot Put | **+5'0"** farther (a lot harder) |

Throws marks are minimums, so a farther mark = harder standard.

**Implementation:** Reuse the previous Node script with a fixed regex that correctly handles the `\"` escaped quotes inside the TS source, applied only to `Discus` and `Shot Put` lines inside `maleStandards` of A10 schools without official standards. No other events, conferences, or women's standards touched.
