

## Plan: Prioritize Power 4 and Division Tiers in Search Results

### What Changes

Update the `searchSchools` function in `src/data/schoolStandards.ts` to add a secondary sort by conference/division tier when schools have the same text-match score.

### How

After computing the text-match `score`, add a `tierBonus` that acts as a tiebreaker:

- **Power 4** (SEC, Big Ten, ACC, Big 12): +50
- **Other D1**: +30
- **D2**: +10
- **D3**: +0

The sort becomes: primary by `score` descending, secondary by `tierBonus` descending. This means within each text-relevance tier (e.g., all "name contains query" schools), Power 4 schools appear first, then other D1, then D2, then D3.

### File: `src/data/schoolStandards.ts`, lines ~34522-34590

Add a `tierBonus` calculation after the score assignment, then update the sort comparator from `b.score - a.score` to `(b.score + b.tierBonus) - (a.score + a.tierBonus)` (or sort by score first, then tierBonus as tiebreaker).

Using tiebreaker approach so text relevance still wins:
```
const power4 = ['SEC', 'Big Ten', 'ACC', 'Big 12'];
const tierBonus = power4.includes(school.conference) ? 50
  : school.division === 'D1' ? 30
  : school.division === 'D2' ? 10
  : 0;
```

Sort: `.sort((a, b) => b.score - a.score || b.tierBonus - a.tierBonus)`

