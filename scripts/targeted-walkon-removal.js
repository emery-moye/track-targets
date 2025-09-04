const fs = require('fs');

// Read the current file content
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

console.log('🎯 Starting targeted removal of walkon properties from elite conferences...');

// Count initial walkon properties in elite conferences
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];
let initialCount = 0;

eliteConferences.forEach(conference => {
  const regex = new RegExp(`conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?(?=\\s*\\},?\\s*(?:\\{|$))`, 'g');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const walkons = (match[0].match(/walkon:/g) || []).length;
    initialCount += walkons;
  }
});

console.log(`📊 Found ${initialCount} walkon properties in elite conferences`);

// Remove all walkon properties using a more comprehensive approach
const originalLength = content.length;

// Use a single comprehensive regex to remove all walkon properties from elite conference schools
eliteConferences.forEach(conference => {
  console.log(`\n🏫 Processing ${conference} schools...`);
  
  // Escape conference name for regex
  const escapedConference = conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Find each school in this conference
  const schoolRegex = new RegExp(`(\\{[^{}]*?conference:\\s*"${escapedConference}"[\\s\\S]*?\\})(?=\\s*,?\\s*(?:\\{|\\]|$))`, 'g');
  
  content = content.replace(schoolRegex, (schoolMatch) => {
    // Count walkon properties before removal
    const walkonCount = (schoolMatch.match(/,\s*walkon:\s*"[^"]*"/g) || []).length;
    
    if (walkonCount > 0) {
      console.log(`  📝 Cleaning school with ${walkonCount} walkon properties`);
      // Remove all walkon properties
      return schoolMatch.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    }
    return schoolMatch;
  });
});

// Count remaining walkon properties in elite conferences
let finalCount = 0;
eliteConferences.forEach(conference => {
  const regex = new RegExp(`conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?(?=\\s*\\},?\\s*(?:\\{|$))`, 'g');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const walkons = (match[0].match(/walkon:/g) || []).length;
    finalCount += walkons;
  }
});

console.log(`\n📈 Summary:`);
console.log(`Initial walkon properties: ${initialCount}`);
console.log(`Final walkon properties: ${finalCount}`);
console.log(`Properties removed: ${initialCount - finalCount}`);

if (initialCount > finalCount) {
  // Write the updated content back to the file
  fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');
  console.log(`✅ Successfully updated schoolStandards.ts`);
  console.log(`📏 File size: ${originalLength} → ${content.length} characters`);
} else {
  console.log(`ℹ️ No changes needed - all elite conferences already clean`);
}

console.log('\n🎉 Elite conference cleanup completed!');