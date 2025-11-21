const fs = require('fs');

// Conversion constants
const MENS_CONVERSION = 1.096;
const WOMENS_CONVERSION = 1.138;

// Target conferences
const TARGET_CONFERENCES = ['A10', 'Big West', 'SEC', 'ACC'];

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

function convert1500to1600(time1500, isMens) {
  const seconds = parseTime(time1500);
  const conversionFactor = isMens ? MENS_CONVERSION : WOMENS_CONVERSION;
  return formatTime(seconds * conversionFactor);
}

function processFile() {
  const filePath = 'src/data/schoolStandards.ts';
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  
  let currentConference = null;
  let currentGender = null;
  let addedCount = 0;
  const conferenceStats = {};
  const addedSchools = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    
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
    
    // Check if we're in a target conference and found a 1500m line
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
        // Extract the 1500m standards
        const targetMatch = line.match(/target:\s*["']([^"']+)["']/);
        const recruitMatch = line.match(/recruit:\s*["']([^"']+)["']/);
        const walkonMatch = line.match(/walkon:\s*["']([^"']+)["']/);
        
        if (targetMatch && recruitMatch) {
          const isMens = currentGender === 'male';
          
          const target1600 = convert1500to1600(targetMatch[1], isMens);
          const recruit1600 = convert1500to1600(recruitMatch[1], isMens);
          
          let newStandard = `        "1600m": { target: "${target1600}", recruit: "${recruit1600}"`;
          
          if (walkonMatch) {
            const walkon1600 = convert1500to1600(walkonMatch[1], isMens);
            newStandard += `, walkon: "${walkon1600}"`;
          }
          
          newStandard += ' },';
          
          newLines.push(newStandard);
          addedCount++;
          
          // Track conference stats
          if (!conferenceStats[currentConference]) {
            conferenceStats[currentConference] = 0;
          }
          conferenceStats[currentConference]++;
          
          // Get school name from previous lines
          let schoolName = 'Unknown';
          for (let k = i - 1; k >= Math.max(0, i - 50); k--) {
            if (lines[k].includes('schoolName:')) {
              const nameMatch = lines[k].match(/schoolName:\s*["']([^"']+)["']/);
              if (nameMatch) {
                schoolName = nameMatch[1];
                break;
              }
            }
          }
          
          addedSchools.push(`${schoolName} (${currentGender})`);
          console.log(`✓ Added 1600m for ${schoolName} (${currentGender}): ${target1600}`);
        }
      }
    }
  }
  
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total 1600m standards added: ${addedCount}`);
  console.log('\nBreakdown by conference:');
  Object.entries(conferenceStats).sort((a, b) => b[1] - a[1]).forEach(([conf, count]) => {
    console.log(`  ${conf}: ${count} standards`);
  });
  console.log('\n' + '='.repeat(60));
}

try {
  console.log('Starting 1600m standards addition...\n');
  processFile();
  console.log('\n✅ Successfully added 1600m standards!');
} catch (error) {
  console.error('❌ Error processing file:', error);
  process.exit(1);
}
