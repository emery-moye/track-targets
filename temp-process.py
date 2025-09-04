import re

# Read the entire file
with open('./src/data/schoolStandards.ts', 'r') as f:
    content = f.read()

print("Starting comprehensive walkon removal for elite conferences...")

# Elite conferences to process
elite_conferences = ['SEC', 'Big Ten', 'ACC', 'Big 12']

# Split content into individual school objects
school_pattern = r'(\{\s*id:[^}]+?(?:\{[^}]+\}[^}]+?)*\})'
schools = re.findall(school_pattern, content, re.DOTALL)

processed_content = content

for conference in elite_conferences:
    print(f"Processing {conference} schools...")
    
    # Find schools from this conference and remove their walkon properties
    conference_pattern = rf'(\{{[^{{}}]*?conference:\s*"{re.escape(conference)}".*?\}})'
    
    def remove_walkon_props(match):
        school_text = match.group(1)
        # Remove all walkon properties from this school
        cleaned = re.sub(r',\s*walkon:\s*"[^"]*"', '', school_text)
        return cleaned
    
    processed_content = re.sub(conference_pattern, remove_walkon_props, processed_content, flags=re.DOTALL)

# Count remaining walkon properties
remaining_walkons = len(re.findall(r'walkon:', processed_content))
print(f"Remaining walkon properties: {remaining_walkons}")

# Write the processed content
with open('./src/data/schoolStandards.ts', 'w') as f:
    f.write(processed_content)

print("Comprehensive walkon removal completed!")