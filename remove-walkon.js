const fs = require('fs');

console.log('Reading schoolStandards.ts...');
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

console.log('Removing walkon properties from elite conference schools...');

// Define elite conferences
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];

// Track changes made
let totalReplacements = 0;

// For each elite conference
eliteConferences.forEach(conference => {
  console.log(`Processing ${conference} schools...`);
  
  let conferenceReplacements = 0;
  
  // Escape special regex characters in conference name
  const escapedConference = conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Find all instances of walkon properties after this conference declaration
  const conferencePattern = new RegExp(`(conference:\\s*"${escapedConference}"[\\s\\S]*?)(?=\\s*\\},\\s*\\{[\\s\\S]*?conference:|$)`, 'g');
  
  content = content.replace(conferencePattern, (match) => {
    // Remove all walkon properties from this school section
    const updated = match.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    const replacementCount = (match.match(/,\s*walkon:\s*"[^"]*"/g) || []).length;
    conferenceReplacements += replacementCount;
    return updated;
  });
  
  console.log(`  Removed ${conferenceReplacements} walkon properties from ${conference}`);
  totalReplacements += conferenceReplacements;
});

console.log(`Total walkon properties removed: ${totalReplacements}`);

// Write the updated content back
fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');
console.log('Successfully updated schoolStandards.ts!');