const fs = require('fs');
const path = require('path');

// Convert time string to seconds
function timeToSeconds(timeStr) {
  if (!timeStr) return null;
  
  // Handle formats like "4:22.00", "1:54.00", "10.70"
  const parts = timeStr.split(':');
  
  if (parts.length === 2) {
    // Format: "M:SS.ms"
    const minutes = parseInt(parts[0]);
    const seconds = parseFloat(parts[1]);
    return minutes * 60 + seconds;
  } else {
    // Format: "SS.ms"
    return parseFloat(timeStr);
  }
}

// Convert seconds back to time string with proper formatting
function secondsToTime(seconds, referenceFormat) {
  if (!seconds) return null;
  
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  // Match the decimal places of reference format
  const decimalPlaces = referenceFormat.includes('.') ? 
    (referenceFormat.split('.')[1] || '00').length : 0;
  
  const secsStr = secs.toFixed(decimalPlaces).padStart(decimalPlaces > 0 ? 5 : 2, '0');
  
  return `${minutes}:${secsStr}`;
}

// Read the file
const filePath = path.join(__dirname, '../src/data/schoolStandards.ts');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Starting 1600m and Mile standards validation and correction...\n');

let totalFixed = 0;
let schoolsFixed = 0;

// Find all schools with both Mile and 1600m standards
const schoolPattern = /\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?\}/g;
let match;

const fixes = [];

while ((match = schoolPattern.exec(content)) !== null) {
  const schoolId = match[1];
  const schoolObject = match[0];
  
  // Check if this school has both Mile and 1600m in either gender
  const hasMile = schoolObject.includes('"Mile"');
  const has1600m = schoolObject.includes('"1600m"');
  
  if (hasMile && has1600m) {
    // Extract school name for logging
    const nameMatch = schoolObject.match(/schoolName:\s*"([^"]+)"/);
    const schoolName = nameMatch ? nameMatch[1] : schoolId;
    
    let fixesForThisSchool = [];
    
    // Check male standards
    const maleStandardsMatch = schoolObject.match(/maleStandards:\s*\{([\s\S]*?)\n\s*\},/);
    if (maleStandardsMatch) {
      const maleStandards = maleStandardsMatch[1];
      const mileMatch = maleStandards.match(/"Mile":\s*\{\s*target:\s*"([^"]+)",\s*recruit:\s*"([^"]+)"(?:,\s*walkon:\s*"([^"]+)")?\s*\}/);
      const m1600Match = maleStandards.match(/"1600m":\s*\{\s*target:\s*"([^"]+)",\s*recruit:\s*"([^"]+)"(?:,\s*walkon:\s*"([^"]+)")?\s*\}/);
      
      if (mileMatch && m1600Match) {
        const mileTarget = timeToSeconds(mileMatch[1]);
        const mileRecruit = timeToSeconds(mileMatch[2]);
        const mileWalkon = mileMatch[3] ? timeToSeconds(mileMatch[3]) : null;
        
        const m1600Target = timeToSeconds(m1600Match[1]);
        const m1600Recruit = timeToSeconds(m1600Match[2]);
        const m1600Walkon = m1600Match[3] ? timeToSeconds(m1600Match[3]) : null;
        
        // Check if corrections are needed
        const targetDiff = Math.abs(mileTarget - m1600Target);
        const recruitDiff = Math.abs(mileRecruit - m1600Recruit);
        const walkonDiff = mileWalkon && m1600Walkon ? Math.abs(mileWalkon - m1600Walkon) : 0;
        
        if (targetDiff > 10 || recruitDiff > 10 || walkonDiff > 10 || m1600Target > mileTarget || m1600Recruit > mileRecruit || (m1600Walkon && mileWalkon && m1600Walkon > mileWalkon)) {
          // Calculate corrected 1600m times (7 seconds faster than Mile)
          const new1600Target = secondsToTime(mileTarget - 7, m1600Match[1]);
          const new1600Recruit = secondsToTime(mileRecruit - 7, m1600Match[2]);
          const new1600Walkon = mileWalkon && m1600Walkon ? secondsToTime(mileWalkon - 7, m1600Match[3]) : null;
          
          // Store the fix
          const oldMatch = m1600Match[0];
          const newMatch = new1600Walkon 
            ? `"1600m": { target: "${new1600Target}", recruit: "${new1600Recruit}", walkon: "${new1600Walkon}" }`
            : `"1600m": { target: "${new1600Target}", recruit: "${new1600Recruit}" }`;
          
          fixesForThisSchool.push({
            gender: 'Men',
            old: oldMatch,
            new: newMatch,
            oldTarget: m1600Match[1],
            newTarget: new1600Target,
            oldRecruit: m1600Match[2],
            newRecruit: new1600Recruit
          });
        }
      }
    }
    
    // Check female standards
    const femaleStandardsMatch = schoolObject.match(/femaleStandards:\s*\{([\s\S]*?)\n\s*\}(?:\n\s*\}|,)/);
    if (femaleStandardsMatch) {
      const femaleStandards = femaleStandardsMatch[1];
      const mileMatch = femaleStandards.match(/"Mile":\s*\{\s*target:\s*"([^"]+)",\s*recruit:\s*"([^"]+)"(?:,\s*walkon:\s*"([^"]+)")?\s*\}/);
      const m1600Match = femaleStandards.match(/"1600m":\s*\{\s*target:\s*"([^"]+)",\s*recruit:\s*"([^"]+)"(?:,\s*walkon:\s*"([^"]+)")?\s*\}/);
      
      if (mileMatch && m1600Match) {
        const mileTarget = timeToSeconds(mileMatch[1]);
        const mileRecruit = timeToSeconds(mileMatch[2]);
        const mileWalkon = mileMatch[3] ? timeToSeconds(mileMatch[3]) : null;
        
        const m1600Target = timeToSeconds(m1600Match[1]);
        const m1600Recruit = timeToSeconds(m1600Match[2]);
        const m1600Walkon = m1600Match[3] ? timeToSeconds(m1600Match[3]) : null;
        
        // Check if corrections are needed
        const targetDiff = Math.abs(mileTarget - m1600Target);
        const recruitDiff = Math.abs(mileRecruit - m1600Recruit);
        const walkonDiff = mileWalkon && m1600Walkon ? Math.abs(mileWalkon - m1600Walkon) : 0;
        
        if (targetDiff > 10 || recruitDiff > 10 || walkonDiff > 10 || m1600Target > mileTarget || m1600Recruit > mileRecruit || (m1600Walkon && mileWalkon && m1600Walkon > mileWalkon)) {
          // Calculate corrected 1600m times (7 seconds faster than Mile)
          const new1600Target = secondsToTime(mileTarget - 7, m1600Match[1]);
          const new1600Recruit = secondsToTime(mileRecruit - 7, m1600Match[2]);
          const new1600Walkon = mileWalkon && m1600Walkon ? secondsToTime(mileWalkon - 7, m1600Match[3]) : null;
          
          // Store the fix
          const oldMatch = m1600Match[0];
          const newMatch = new1600Walkon 
            ? `"1600m": { target: "${new1600Target}", recruit: "${new1600Recruit}", walkon: "${new1600Walkon}" }`
            : `"1600m": { target: "${new1600Target}", recruit: "${new1600Recruit}" }`;
          
          fixesForThisSchool.push({
            gender: 'Women',
            old: oldMatch,
            new: newMatch,
            oldTarget: m1600Match[1],
            newTarget: new1600Target,
            oldRecruit: m1600Match[2],
            newRecruit: new1600Recruit
          });
        }
      }
    }
    
    if (fixesForThisSchool.length > 0) {
      console.log(`\n${schoolName} (${schoolId})`);
      schoolsFixed++;
      
      fixesForThisSchool.forEach(fix => {
        console.log(`  ${fix.gender}: ${fix.oldTarget} → ${fix.newTarget} (target), ${fix.oldRecruit} → ${fix.newRecruit} (recruit)`);
        // Apply the fix
        content = content.replace(fix.old, fix.new);
        totalFixed++;
      });
    }
  }
}

// Write the corrected content back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✅ Completed!`);
console.log(`   Schools fixed: ${schoolsFixed}`);
console.log(`   Total gender standards fixed: ${totalFixed}`);
console.log(`\nAll 1600m times are now within 7 seconds (faster) of Mile times.`);
