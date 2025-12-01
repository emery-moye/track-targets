#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Conversion factor for 1500m to 1600m
const CONVERSION = 1.0667;

// Target conferences
const CONFERENCES = ['Liberty League', 'HCAC', 'CCS', 'Little East'];

// Helper functions
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
  return formatTime(parseTime(time1500) * CONVERSION);
}

// Main processing function
function processSchoolStandards() {
  const filePath = path.join(__dirname, 'src/data/schoolStandards.ts');
  
  console.log('📖 Reading file...');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const newLines = [];
  let currentConference = null;
  let currentSchool = null;
  let currentGender = null;
  let addedCount = 0;
  const stats = { 'Liberty League': 0, 'HCAC': 0, 'CCS': 0, 'Little East': 0 };
  
  console.log('🔄 Processing schools...\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    
    // Track conference
    if (line.includes('conference:')) {
      const match = line.match(/conference:\s*["']([^"']+)["']/);
      if (match) currentConference = match[1];
    }
    
    // Track school
    if (line.includes('schoolName:')) {
      const match = line.match(/schoolName:\s*["']([^"']+)["']/);
      if (match) currentSchool = match[1];
    }
    
    // Track gender
    if (line.includes('maleStandards:')) currentGender = 'M';
    if (line.includes('femaleStandards:')) currentGender = 'F';
    
    // Process 1500m entries
    if (CONFERENCES.includes(currentConference) && line.includes('"1500m"')) {
      // Check if 1600m already exists
      const nextLine = lines[i + 1] || '';
      if (!nextLine.includes('"1600m"')) {
        // Extract times from current line
        const targetMatch = line.match(/target:\s*["']([^"']+)["']/);
        const recruitMatch = line.match(/recruit:\s*["']([^"']+)["']/);
        const walkonMatch = line.match(/walkon:\s*["']([^"']+)["']/);
        
        if (targetMatch && recruitMatch) {
          const target1600 = convert1500to1600(targetMatch[1]);
          const recruit1600 = convert1500to1600(recruitMatch[1]);
          const walkon1600 = walkonMatch ? convert1500to1600(walkonMatch[1]) : null;
          
          // Build new 1600m line
          let new1600Line = `      "1600m": { target: "${target1600}", recruit: "${recruit1600}"`;
          if (walkon1600) {
            new1600Line += `, walkon: "${walkon1600}"`;
          }
          new1600Line += ' },';
          
          newLines.push(new1600Line);
          addedCount++;
          stats[currentConference]++;
          
          console.log(`  ✅ ${currentSchool} (${currentGender})`);
        }
      }
    }
  }
  
  console.log('\n💾 Writing updated file...');
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  
  // Print summary
  console.log('\n' + '═'.repeat(70));
  console.log('  📊 SUMMARY - 1600m Standards Added');
  console.log('═'.repeat(70));
  console.log(`\n  Total additions: ${addedCount} standards\n`);
  console.log('  By conference:');
  Object.entries(stats).forEach(([conf, count]) => {
    console.log(`    ${conf.padEnd(18)}: ${count.toString().padStart(2)} standards`);
  });
  console.log('\n  Formula: 1600m = 1500m × 1.0667');
  console.log('═'.repeat(70));
  console.log('\n✨ Success! File updated successfully.\n');
}

// Run the script
try {
  processSchoolStandards();
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
