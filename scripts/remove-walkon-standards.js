const fs = require('fs');
const path = require('path');

// Read the schoolStandards.ts file
const filePath = path.join(__dirname, '../src/data/schoolStandards.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Elite conferences that should not have walk-on standards
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];

// Function to remove walkon properties from a standards object
const removeWalkonFromStandards = (standardsStr) => {
  // Remove walkon properties from all events
  return standardsStr.replace(/,\s*walkon:\s*"[^"]*"/g, '');
};

// Process each elite conference
eliteConferences.forEach(conference => {
  console.log(`Processing ${conference} schools...`);
  
  // Find all schools in this conference
  const conferenceRegex = new RegExp(`conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
  let match;
  
  while ((match = conferenceRegex.exec(content)) !== null) {
    const schoolStart = content.lastIndexOf('{', match.index);
    let braceCount = 1;
    let schoolEnd = schoolStart + 1;
    
    // Find the end of this school object
    while (braceCount > 0 && schoolEnd < content.length) {
      if (content[schoolEnd] === '{') braceCount++;
      if (content[schoolEnd] === '}') braceCount--;
      schoolEnd++;
    }
    
    const schoolObject = content.substring(schoolStart, schoolEnd);
    const updatedSchoolObject = removeWalkonFromStandards(schoolObject);
    
    // Replace the school object in the content
    content = content.substring(0, schoolStart) + updatedSchoolObject + content.substring(schoolEnd);
    
    // Reset the regex lastIndex since we modified the content
    conferenceRegex.lastIndex = schoolStart + updatedSchoolObject.length;
  }
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully removed walk-on standards from elite conference schools!');