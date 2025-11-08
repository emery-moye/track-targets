import { readFileSync, writeFileSync } from 'fs';

// Conversion formulas
const MENS_CONVERSION = 15.11;
const WOMENS_CONVERSION = 17.69;

function parseTime(timeStr) {
  return parseFloat(timeStr);
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
  console.log('📖 Reading schoolStandards.ts...');
  const content = readFileSync('src/data/schoolStandards.ts', 'utf-8');
  const lines = content.split('\n');
  
  const newLines = [];
  let addedCount = 0;
  let currentGender = null;
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Track which gender section we're in
    if (line.includes('maleStandards:')) {
      currentGender = 'male';
    } else if (line.includes('femaleStandards:')) {
      currentGender = 'female';
    } else if (line.trim() === '},') {
      // End of a standards section
      currentGender = null;
    }
    
    // Check if this is a 400m Hurdles line and we need to add 300m Hurdles
    if (line.includes('"400m Hurdles"') && currentGender) {
      // Look back in newLines to see if 300m Hurdles already exists
      const lookback = newLines.slice(-15).join('\n');
      
      if (!lookback.includes('"300m Hurdles"')) {
        // Extract the 400m Hurdles values
        const targetMatch = line.match(/target:\s*"([^"]+)"/);
        const recruitMatch = line.match(/recruit:\s*"([^"]+)"/);
        const walkonMatch = line.match(/walkon:\s*"([^"]+)"/);
        
        if (targetMatch && recruitMatch) {
          const isMens = currentGender === 'male';
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
          
          console.log(`✅ Added 300m Hurdles for ${currentGender}: ${target300}/${recruit300}${walkonMatch ? `/${convert400to300(walkonMatch[1], isMens)}` : ''}`);
        }
      }
    }
    
    newLines.push(line);
    i++;
  }
  
  console.log(`\n🎉 Added ${addedCount} 300m Hurdles standards`);
  console.log('💾 Writing updated file...');
  
  writeFileSync('src/data/schoolStandards.ts', newLines.join('\n'), 'utf-8');
  
  console.log('✅ Done! File updated successfully.');
}

// Run the processor
try {
  processFile();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
