const fs = require('fs');

// Read the file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

console.log('Processing elite conference schools...');

// Split content into lines for processing
let lines = content.split('\n');
let inEliteSchool = false;
let currentConference = '';
let processedLines = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Check if we're entering a new school object
  if (line.trim().startsWith('{') && lines[i-1] && lines[i-1].includes('],')) {
    inEliteSchool = false;
    currentConference = '';
  }
  
  // Check for conference declaration
  if (line.includes('conference:')) {
    const match = line.match(/conference:\s*"([^"]+)"/);
    if (match) {
      currentConference = match[1];
      inEliteSchool = ['SEC', 'Big Ten', 'ACC', 'Big 12'].includes(currentConference);
      console.log(`Found ${currentConference} school - Elite: ${inEliteSchool}`);
    }
  }
  
  // If we're in an elite school, remove walkon properties
  if (inEliteSchool && line.includes('walkon:')) {
    // Remove the walkon property from this line
    line = line.replace(/,\s*walkon:\s*"[^"]*"/, '');
    console.log('Removed walkon property from elite school');
  }
  
  processedLines.push(line);
}

// Join lines back together
const processedContent = processedLines.join('\n');

// Write the result
fs.writeFileSync('./src/data/schoolStandards.ts', processedContent, 'utf8');

console.log('Processing complete!');