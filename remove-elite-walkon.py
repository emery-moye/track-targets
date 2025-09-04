#!/usr/bin/env python3
import re

# Read the file
with open('./src/data/schoolStandards.ts', 'r') as f:
    content = f.read()

# Elite conferences
elite_conferences = ['SEC', 'Big Ten', 'ACC', 'Big 12']

# Process each elite conference
for conference in elite_conferences:
    print(f'Processing {conference} schools...')
    
    # Find all walkon properties in schools of this conference
    # Pattern to match: school object containing this conference
    pattern = rf'(\{{[^{{}}]*?conference:\s*"{re.escape(conference)}".*?\}})'
    
    def remove_walkon_from_school(match):
        school_obj = match.group(1)
        # Remove all walkon properties
        updated_obj = re.sub(r',\s*walkon:\s*"[^"]*"', '', school_obj)
        return updated_obj
    
    # Apply the replacement
    content = re.sub(pattern, remove_walkon_from_school, content, flags=re.DOTALL)

# Write back the updated content
with open('./src/data/schoolStandards.ts', 'w') as f:
    f.write(content)

print('Successfully removed walkon properties from elite conference schools!')