// This script will update the schoolStandards.ts file to remove walkon properties
// from SEC, Big Ten, ACC, and Big 12 schools

const fs = require('fs');

// Read the current file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Elite conferences to process
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];

// For each conference, find schools and remove walkon properties
eliteConferences.forEach(conference => {
  console.log(`Processing ${conference} schools...`);
  
  // Create a regex to find school objects for this conference
  const conferenceRegex = new RegExp(
    `(\\{[^{}]*conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\})`,
    'gs'
  );
  
  content = content.replace(conferenceRegex, (match) => {
    // Remove all walkon properties from this school object
    return match.replace(/,\s*walkon:\s*"[^"]*"/g, '');
  });
});

// Write back the updated content
fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');
console.log('Update completed!');