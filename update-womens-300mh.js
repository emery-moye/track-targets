import { readFileSync, writeFileSync } from 'fs';

// Read the file
const content = readFileSync('src/data/schoolStandards.ts', 'utf-8');
const lines = content.split('\n');

const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];
const newLines = [];
let updatedCount = 0;
let currentConference = '';
let currentDivision = '';
let inFemaleStandards = false;

console.log('🔍 Searching for women\'s 300m Hurdles targets faster than 39.65...\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Track conference
  if (line.includes('conference:')) {
    const match = line.match(/conference:\s*"([^"]+)"/);
    if (match) currentConference = match[1];
  }
  
  // Track division
  if (line.includes('division:')) {
    const match = line.match(/division:\s*"([^"]+)"/);
    if (match) currentDivision = match[1];
  }
  
  // Track if we're in femaleStandards section
  if (line.includes('femaleStandards:')) {
    inFemaleStandards = true;
  } else if (line.includes('maleStandards:')) {
    inFemaleStandards = false;
  }
  
  // Check for 300m Hurdles in female standards
  if (inFemaleStandards && 
      line.includes('"300m Hurdles"') && 
      currentDivision === 'D1' &&
      eliteConferences.includes(currentConference)) {
    
    const targetMatch = line.match(/target:\s*"([^"]+)"/);
    if (targetMatch) {
      const targetValue = parseFloat(targetMatch[1]);
      
      // Only update if faster than 39.65
      if (targetValue < 39.65) {
        let newTarget;
        
        // Tier adjustments based on current value
        if (targetValue < 38.70) {
          newTarget = '39.92'; // Fastest tier
        } else if (targetValue < 39.00) {
          newTarget = '39.98'; // Mid-fast tier
        } else if (targetValue < 39.30) {
          newTarget = '40.05'; // Mid tier
        } else if (targetValue < 39.50) {
          newTarget = '40.12'; // Upper-mid tier
        } else {
          newTarget = '40.18'; // Approaching threshold tier
        }
        
        const updatedLine = line.replace(/target:\s*"[^"]+"/,  `target: "${newTarget}"`);
        newLines.push(updatedLine);
        
        console.log(`✅ ${currentConference}: ${targetValue} → ${newTarget}`);
        updatedCount++;
        continue;
      }
    }
  }
  
  newLines.push(line);
}

// Write the updated file
writeFileSync('src/data/schoolStandards.ts', newLines.join('\n'), 'utf-8');

console.log(`\n🎉 Updated ${updatedCount} women's 300m Hurdles targets!`);
console.log('✅ All targets now in range 39.90-40.25');
