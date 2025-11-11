import { readFileSync, writeFileSync } from 'fs';

const MENS_CONVERSION = 15.11;
const WOMENS_CONVERSION = 17.69;

function parseTime(timeStr) {
  const cleaned = timeStr.replace(/['"]/g, '');
  if (cleaned.includes(':')) {
    const [min, sec] = cleaned.split(':');
    return parseFloat(min) * 60 + parseFloat(sec);
  }
  return parseFloat(cleaned);
}

function formatTime(seconds) {
  return seconds.toFixed(2);
}

function convert400to300(time400, isMens) {
  const seconds = parseTime(time400);
  const conversion = isMens ? MENS_CONVERSION : WOMENS_CONVERSION;
  return formatTime(seconds - conversion);
}

function processFile() {
  console.log('Reading file...');
  const content = readFileSync('src/data/schoolStandards.ts', 'utf-8');
  const lines = content.split('\n');
  
  const newLines = [];
  let addedCount = 0;
  let currentDivision = null;
  let currentGender = null;
  let currentSchool = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track school name
    if (line.includes('schoolName:')) {
      const match = line.match(/schoolName:\s*"([^"]+)"/);
      if (match) currentSchool = match[1];
    }
    
    // Track division
    if (line.includes('division:')) {
      const match = line.match(/division:\s*"([^"]+)"/);
      if (match) currentDivision = match[1];
    }
    
    // Track which gender section we're in
    if (line.includes('maleStandards:')) {
      currentGender = 'male';
    } else if (line.includes('femaleStandards:')) {
      currentGender = 'female';
    }
    
    // Only process D3 schools
    if (currentDivision === 'D3' && line.includes('"400m Hurdles"') && currentGender) {
      // Look back to see if 300m Hurdles already exists
      const lookback = newLines.slice(-10).join('\n');
      if (!lookback.includes('"300m Hurdles"')) {
        const isMens = currentGender === 'male';
        
        // Extract the 400m Hurdles times
        const targetMatch = line.match(/target:\s*"([^"]+)"/);
        const recruitMatch = line.match(/recruit:\s*"([^"]+)"/);
        const walkonMatch = line.match(/walkon:\s*"([^"]+)"/);
        
        if (targetMatch && recruitMatch) {
          const target300 = convert400to300(targetMatch[1], isMens);
          const recruit300 = convert400to300(recruitMatch[1], isMens);
          
          // Get indentation from current line
          const indent = line.match(/^(\s*)/)[1];
          
          let newLine = `${indent}"300m Hurdles": { target: "${target300}", recruit: "${recruit300}"`;
          
          if (walkonMatch) {
            const walkon300 = convert400to300(walkonMatch[1], isMens);
            newLine += `, walkon: "${walkon300}"`;
          }
          
          newLine += ' },';
          
          newLines.push(newLine);
          addedCount++;
          console.log(`Added 300m Hurdles to ${currentSchool} - ${currentGender}`);
        }
      }
    }
    
    newLines.push(line);
  }
  
  if (addedCount === 0) {
    console.log('✅ All D3 schools already have 300m Hurdles!');
  } else {
    console.log(`\nAdded ${addedCount} 300m Hurdles standards to D3 schools`);
    console.log('Writing file...');
    writeFileSync('src/data/schoolStandards.ts', newLines.join('\n'), 'utf-8');
    console.log('✅ Done!');
  }
}

try {
  processFile();
} catch (error) {
  console.error('Error:', error.message);
}
