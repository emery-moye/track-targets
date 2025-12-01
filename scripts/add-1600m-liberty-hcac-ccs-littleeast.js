const fs = require('fs');

const CONVERSION_FACTOR = 1.0667; // Both men's and women's
const TARGET_CONFERENCES = ['Liberty League', 'HCAC', 'CCS', 'Little East'];

function parseTime(timeStr) {
  const parts = timeStr.split(':');
  if (parts.length === 2) {
    return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
  }
  return parseFloat(timeStr);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toFixed(2).padStart(5, '0')}`;
}

function convert1500to1600(time1500) {
  const seconds = parseTime(time1500);
  return formatTime(seconds * CONVERSION_FACTOR);
}

function processFile() {
  const filePath = 'src/data/schoolStandards.ts';
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  
  let currentConference = null;
  let currentGender = null;
  let currentSchoolName = null;
  let addedCount = 0;
  const conferenceStats = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    
    // Track school name
    if (line.includes('schoolName:')) {
      const match = line.match(/schoolName:\s*["']([^"']+)["']/);
      if (match) {
        currentSchoolName = match[1];
      }
    }
    
    // Track conference
    if (line.includes('conference:')) {
      const match = line.match(/conference:\s*["']([^"']+)["']/);
      if (match) {
        currentConference = match[1];
      }
    }
    
    // Track gender section
    if (line.includes('maleStandards:')) {
      currentGender = 'male';
    } else if (line.includes('femaleStandards:')) {
      currentGender = 'female';
    }
    
    // Process 1500m lines in target conferences
    if (currentConference && TARGET_CONFERENCES.includes(currentConference) && 
        currentGender && line.includes('"1500m"')) {
      
      // Check if 1600m already exists in the next few lines
      let has1600m = false;
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        if (lines[j].includes('"1600m"')) {
          has1600m = true;
          break;
        }
      }
      
      if (!has1600m) {
        const targetMatch = line.match(/target:\s*["']([^"']+)["']/);
        const recruitMatch = line.match(/recruit:\s*["']([^"']+)["']/);
        const walkonMatch = line.match(/walkon:\s*["']([^"']+)["']/);
        
        if (targetMatch && recruitMatch) {
          const target1600 = convert1500to1600(targetMatch[1]);
          const recruit1600 = convert1500to1600(recruitMatch[1]);
          
          let newStandard = `      "1600m": { target: "${target1600}", recruit: "${recruit1600}"`;
          
          if (walkonMatch) {
            const walkon1600 = convert1500to1600(walkonMatch[1]);
            newStandard += `, walkon: "${walkon1600}"`;
          }
          
          newStandard += ' },';
          
          newLines.push(newStandard);
          addedCount++;
          
          if (!conferenceStats[currentConference]) {
            conferenceStats[currentConference] = 0;
          }
          conferenceStats[currentConference]++;
          
          const schoolKey = `${currentSchoolName} (${currentGender})`;
          console.log(`✓ Added: ${schoolKey}`);
        }
      }
    }
  }
  
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  
  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY - 1600m Standards Addition Complete');
  console.log('='.repeat(70));
  console.log(`Total additions: ${addedCount}`);
  console.log('\nBy conference:');
  Object.entries(conferenceStats).sort((a, b) => b[1] - a[1]).forEach(([conf, count]) => {
    console.log(`  ${conf.padEnd(15)}: ${count} standards`);
  });
  console.log('\n' + '='.repeat(70));
  console.log('\nConversion formula used:');
  console.log('  1600m = 1500m × 1.0667 (Men & Women)');
  console.log('='.repeat(70));
}

try {
  console.log('Processing 1600m standards for Liberty League, HCAC, CCS, and Little East...\n');
  processFile();
  console.log('\n✅ Success! All 1600m standards have been added.');
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
