const fs = require('fs');

console.log('Removing walkon properties from elite conference schools...');

// Read the file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Elite conferences
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];

// Process each elite conference
eliteConferences.forEach(conference => {
  console.log(`Processing ${conference} schools...`);
  
  // Escape conference name for regex
  const escapedConference = conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Find all school objects for this conference and remove walkon properties
  const schoolPattern = new RegExp(
    `(\\{[^{}]*?conference:\\s*"${escapedConference}"[^{}]*?(?:\\{[^{}]*?\\}[^{}]*?)*?\\})`,
    'gs'
  );
  
  content = content.replace(schoolPattern, (schoolMatch) => {
    // Remove all walkon properties from this school
    const cleanedSchool = schoolMatch.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    return cleanedSchool;
  });
});

// Write back the updated content
fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');

console.log('Successfully removed walkon properties from all elite conference schools!');