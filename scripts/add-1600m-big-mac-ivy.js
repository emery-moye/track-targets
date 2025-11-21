const fs = require('fs');
const path = require('path');

// Conversion factors
const MENS_CONVERSION = 1.096;  // 1500m to 1600m for men
const WOMENS_CONVERSION = 1.138; // 1500m to 1600m for women

// Target conferences
const TARGET_CONFERENCES = ['Big Ten', 'MAC', 'Ivy League'];

// Parse time string to seconds
function parseTime(timeStr) {
  const parts = timeStr.split(':');
  if (parts.length === 2) {
    return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
  }
  return parseFloat(timeStr);
}

// Format seconds to time string
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toFixed(2).padStart(5, '0')}`;
}

// Convert 1500m to 1600m
function convert1500to1600(time1500, isMens) {
  const seconds = parseTime(time1500);
  const conversionFactor = isMens ? MENS_CONVERSION : WOMENS_CONVERSION;
  const converted = seconds * conversionFactor;
  return formatTime(converted);
}

// Process the file
function processFile() {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'schoolStandards.ts');
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  let result = [];
  let currentConference = null;
  let currentGender = null;
  let inTargetConference = false;
  let addedCount = 0;
  let currentSchool = null;
  const conferenceStats = {
    'Big Ten': 0,
    'MAC': 0,
    'Ivy League': 0
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track conference
    if (line.includes('conference:')) {
      const match = line.match(/conference:\s*"([^"]+)"/);
      if (match) {
        currentConference = match[1];
        inTargetConference = TARGET_CONFERENCES.includes(currentConference);
      }
    }
    
    // Track school name
    if (line.includes('schoolName:')) {
      const match = line.match(/schoolName:\s*"([^"]+)"/);
      if (match) {
        currentSchool = match[1];
      }
    }
    
    // Track gender
    if (line.includes('maleStandards:')) {
      currentGender = 'male';
    } else if (line.includes('femaleStandards:')) {
      currentGender = 'female';
    }
    
    // Process 1500m lines in target conferences
    if (inTargetConference && currentGender && line.includes('"1500m":')) {
      result.push(line);
      
      // Check if next line is Mile (no 1600m exists)
      if (i + 1 < lines.length && lines[i + 1].includes('"Mile":')) {
        // Extract 1500m times
        const targetMatch = line.match(/target:\s*"([^"]+)"/);
        const recruitMatch = line.match(/recruit:\s*"([^"]+)"/);
        const walkonMatch = line.match(/walkon:\s*"([^"]+)"/);
        
        if (targetMatch && recruitMatch) {
          const isMens = currentGender === 'male';
          const target1600 = convert1500to1600(targetMatch[1], isMens);
          const recruit1600 = convert1500to1600(recruitMatch[1], isMens);
          
          // Get indentation
          const indent = line.match(/^(\s*)/)[1];
          
          // Big Ten doesn't have walkon standards
          if (currentConference === 'Big Ten' || !walkonMatch) {
            result.push(`${indent}"1600m": { target: "${target1600}", recruit: "${recruit1600}" },`);
          } else {
            const walkon1600 = convert1500to1600(walkonMatch[1], isMens);
            result.push(`${indent}"1600m": { target: "${target1600}", recruit: "${recruit1600}", walkon: "${walkon1600}" },`);
          }
          
          addedCount++;
          conferenceStats[currentConference]++;
          console.log(`Added 1600m for ${currentSchool} (${currentConference}, ${currentGender})`);
        }
      }
    } else {
      result.push(line);
    }
  }
  
  // Write back to file
  fs.writeFileSync(filePath, result.join('\n'), 'utf-8');
  
  console.log('\n=== Summary ===');
  console.log(`Total 1600m standards added: ${addedCount}`);
  console.log('\nBy Conference:');
  Object.entries(conferenceStats).forEach(([conf, count]) => {
    if (count > 0) {
      console.log(`  ${conf}: ${count}`);
    }
  });
  console.log('\n✅ Done!');
}

// Run the script
try {
  processFile();
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
