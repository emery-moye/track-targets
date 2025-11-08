import { readFileSync, writeFileSync } from 'fs';

// Conversion formulas based on Penn State, VCU, Florida State, Fordham data
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

function processLine(line, nextLines, isMens) {
  // Check if this is a 400m Hurdles line
  if (!line.includes('"400m Hurdles"')) {
    return null;
  }

  // Check if 300m Hurdles already exists in previous lines
  const prevLinesStr = nextLines.slice(0, 5).join('\n');
  if (prevLinesStr.includes('"300m Hurdles"')) {
    return null;
  }

  // Extract the 400m Hurdles times
  const targetMatch = line.match(/target:\s*"([^"]+)"/);
  const recruitMatch = line.match(/recruit:\s*"([^"]+)"/);
  const walkonMatch = line.match(/walkon:\s*"([^"]+)"/);

  if (!targetMatch || !recruitMatch) {
    return null;
  }

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
  
  return newLine;
}

function processFile() {
  console.log('Reading file...');
  const content = readFileSync('src/data/schoolStandards.ts', 'utf-8');
  const lines = content.split('\n');
  
  const newLines = [];
  let addedCount = 0;
  let currentGender = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track which gender section we're in
    if (line.includes('maleStandards:')) {
      currentGender = 'male';
    } else if (line.includes('femaleStandards:')) {
      currentGender = 'female';
    }
    
    // Check if we need to add 300m Hurdles before this 400m Hurdles line
    if (line.includes('"400m Hurdles"') && currentGender) {
      // Look back to see if 300m Hurdles already exists
      const lookback = newLines.slice(-10).join('\n');
      if (!lookback.includes('"300m Hurdles"')) {
        const isMens = currentGender === 'male';
        const newLine = processLine(line, lines.slice(i), isMens);
        
        if (newLine) {
          newLines.push(newLine);
          addedCount++;
        }
      }
    }
    
    newLines.push(line);
  }
  
  console.log(`Added ${addedCount} 300m Hurdles standards`);
  console.log('Writing file...');
  writeFileSync('src/data/schoolStandards.ts', newLines.join('\n'), 'utf-8');
  console.log('✅ Done!');
}

processFile();
