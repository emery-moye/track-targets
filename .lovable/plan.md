## Plan: Bump A10 men's Discus toward ~175-180' targets

Same 11 non-official A10 schools, **men's Discus only**.

**Approach:** add **+12'0"** to all three tiers (target / recruit / walkon), but **skip schools whose target is already ≥ 180'** so we don't push elite throwers to unrealistic 200'+ marks.

Current state (men's Discus targets):
- Already ≥ 180' (skip): Saint Louis 180', St. Bonaventure 190', George Mason 190', George Washington 180'
- Will be bumped (+12'): Duquesne 165→177, Saint Joseph's 163→175, Davidson 164→176, Loyola Chicago 164'6→176'6, La Salle 162'6→174'6
- No men's Discus data: Dayton, Richmond (untouched)

After this change every adjusted school's target lands in the 174-177' range, with the existing higher-bar schools left as-is.

**Implementation:** rerun the throws script with Shot Put disabled, Discus delta = 144 inches, and a guard that skips the school's Discus line when the existing target ≥ 180'0".
