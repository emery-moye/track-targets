const fs = require('fs');
const path = require('path');

// Target conferences
const TARGET_CONFERENCES = ['SCAC', 'SCIAC', 'MASCAC', 'MIAC'];

// Conversion factor for 1500m to 1600m
const CONVERSION_FACTOR = 1.0667;

// Helper function to parse time string to seconds
const parseTime = (timeStr) => {
  if (timeStr.includes(':')) {
    const [minutes, seconds] = timeStr.split(':');
    return parseInt(minutes) * 60 + parseFloat(seconds);
  }
  return parseFloat(timeStr);
};

// Helper function to format seconds to time string
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = (seconds % 60).toFixed(2);
  return `${minutes}:${secs.padStart(5, '0')}`;
};

// Convert 1500m time to 1600m time
const convert1500to1600 = (time1500) => {
  const seconds1500 = parseTime(time1500);
  const seconds1600 = seconds1500 * CONVERSION_FACTOR;
  return formatTime(seconds1600);
};

// Process the file
const processFile = () => {
  const filePath = path.join(__dirname, 'src', 'data', 'schoolStandards.ts');
  
  console.log('Reading file...');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let currentConference = '';
  let currentSchool = '';
  let inMaleStandards = false;
  let inFemaleStandards = false;
  let modified = false;
  let addedCount = 0;
  const conferenceStats = { SCAC: 0, SCIAC: 0, MASCAC: 0, MIAC: 0 };
  
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    
    // Track current conference
    if (line.includes('conference:')) {
      const match = line.match(/conference:\s*["']([^"']+)["']/);
      if (match) {
        currentConference = match[1];
      }
    }
    
    // Track current school
    if (line.includes('schoolName:')) {
      const match = line.match(/schoolName:\s*["']([^"']+)["']/);
      if (match) {
        currentSchool = match[1];
      }
    }
    
    // Track gender sections
    if (line.includes('maleStandards:')) {
      inMaleStandards = true;
      inFemaleStandards = false;
    } else if (line.includes('femaleStandards:')) {
      inFemaleStandards = true;
      inMaleStandards = false;
    } else if (line.trim() === '},') {
      inMaleStandards = false;
      inFemaleStandards = false;
    }
    
    // Check if we're in a target conference and found a 1500m entry
    if (TARGET_CONFERENCES.includes(currentConference) && line.includes('"1500m"')) {
      // Check if next line is Mile (meaning no 1600m exists)
      if (i + 1 < lines.length && lines[i + 1].includes('"Mile"')) {
        // Extract 1500m times
        const match = line.match(/target:\s*"([^"]+)",\s*recruit:\s*"([^"]+)"(?:,\s*walkon:\s*"([^"]+)")?/);
        if (match) {
          const [, target1500, recruit1500, walkon1500] = match;
          
          // Convert times
          const target1600 = convert1500to1600(target1500);
          const recruit1600 = convert1500to1600(recruit1500);
          const walkon1600 = walkon1500 ? convert1500to1600(walkon1500) : null;
          
          // Get indentation
          const indent = line.match(/^\s*/)[0];
          
          // Create 1600m line
          let line1600;
          if (walkon1600) {
            line1600 = `${indent}"1600m": { target: "${target1600}", recruit: "${recruit1600}", walkon: "${walkon1600}" },`;
          } else {
            line1600 = `${indent}"1600m": { target: "${target1600}", recruit: "${recruit1600}" },`;
          }
          
          newLines.push(line1600);
          modified = true;
          addedCount++;
          conferenceStats[currentConference]++;
          
          const gender = inMaleStandards ? "Men's" : "Women's";
          console.log(`Added 1600m for ${currentSchool} (${currentConference}) - ${gender}`);
        }
      }
    }
  }
  
  if (modified) {
    console.log('\nWriting updated file...');
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log('\n✅ Successfully added 1600m standards!');
    console.log(`\nTotal additions: ${addedCount}`);
    console.log('\nBreakdown by conference:');
    Object.entries(conferenceStats).forEach(([conf, count]) => {
      console.log(`  ${conf}: ${count} standards`);
    });
  } else {
    console.log('\n⚠️  No changes needed - all 1600m standards already exist!');
  }
};

// Run the script
try {
  processFile();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
