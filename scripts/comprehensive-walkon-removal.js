const fs = require('fs');

console.log('🚀 Starting comprehensive walkon removal for elite conferences...');

let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');
const originalContent = content;

// Elite conferences that should not have walk-on standards
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];

let totalRemovals = 0;

console.log(`📋 Target conferences: ${eliteConferences.join(', ')}`);

// Simple approach: remove ALL walkon properties from the specified conferences
eliteConferences.forEach(conference => {
  console.log(`\n🏫 Processing ${conference} schools...`);
  
  // Use a more robust pattern to find and clean each school
  const conferencePattern = new RegExp(
    `(\\{[^{}]*?conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?(?=\\s*\\},?\\s*(?:\\{|\\])))`,
    'g'
  );
  
  let conferenceRemovals = 0;
  
  content = content.replace(conferencePattern, (schoolMatch) => {
    // Count walkon properties before removal
    const walkonMatches = schoolMatch.match(/,\s*walkon:\s*"[^"]*"/g) || [];
    const walkonCount = walkonMatches.length;
    
    if (walkonCount > 0) {
      console.log(`  📍 Found school with ${walkonCount} walkon properties`);
      
      // Remove all walkon properties
      const cleanedSchool = schoolMatch.replace(/,\s*walkon:\s*"[^"]*"/g, '');
      
      conferenceRemovals += walkonCount;
      return cleanedSchool;
    }
    
    return schoolMatch;
  });
  
  console.log(`  ✅ Removed ${conferenceRemovals} walkon properties from ${conference}`);
  totalRemovals += conferenceRemovals;
});

console.log(`\n🎯 Summary:`);
console.log(`Total walkon properties removed: ${totalRemovals}`);

if (totalRemovals > 0) {
  // Write the updated content back
  fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');
  console.log('✅ File updated successfully!');
  
  // Verify the changes
  const updatedContent = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');
  const remainingWalkons = (updatedContent.match(/,\s*walkon:\s*"[^"]*"/g) || []).length;
  console.log(`🔍 Verification: ${remainingWalkons} walkon properties remain in file`);
  
  // Check elite conferences specifically
  eliteConferences.forEach(conference => {
    const conferenceWalkons = updatedContent.match(new RegExp(`conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?walkon:`, 'g')) || [];
    if (conferenceWalkons.length > 0) {
      console.log(`⚠️ Warning: ${conference} still has ${conferenceWalkons.length} walkon references`);
    } else {
      console.log(`✅ ${conference}: All walkon properties removed`);
    }
  });
  
} else {
  console.log('ℹ️ No walkon properties found to remove');
}

console.log('\n🎉 Operation completed!');