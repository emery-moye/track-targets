const fs = require('fs');

console.log('🚀 Starting bulk cleanup of walkon properties for elite conferences...');

// Read the file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Track initial state
const initialWalkons = (content.match(/walkon:/g) || []).length;
console.log(`📊 Initial walkon properties in file: ${initialWalkons}`);

// Remove all walkon properties from elite conferences using regex
console.log('🧹 Removing walkon properties...');

// Simple but effective: remove all ", walkon: "value"" patterns from the entire file for elite conferences
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];
let totalRemoved = 0;

eliteConferences.forEach(conference => {
  const before = content;
  
  // Find all schools in this conference and clean them
  const conferenceRegex = new RegExp(
    `(conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?)(?=\\s*\\},\\s*\\{[\\s\\S]*?conference:|\\}\\s*\\];?)`,
    'g'
  );
  
  content = content.replace(conferenceRegex, (match) => {
    const walkonCount = (match.match(/,\s*walkon:\s*"[^"]*"/g) || []).length;
    if (walkonCount > 0) {
      console.log(`  🎯 Cleaning ${conference} school with ${walkonCount} walkon properties`);
      totalRemoved += walkonCount;
      return match.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    }
    return match;
  });
});

// Final count
const finalWalkons = (content.match(/walkon:/g) || []).length;
console.log(`\n📈 Results:`);
console.log(`Walkon properties removed: ${totalRemoved}`);
console.log(`Initial count: ${initialWalkons}`);
console.log(`Final count: ${finalWalkons}`);

if (totalRemoved > 0) {
  // Save the cleaned file
  fs.writeFileSync('./src/data/schoolStandards.ts', content);
  console.log('✅ File updated successfully!');
} else {
  console.log('ℹ️ No changes needed');
}

console.log('🎉 Cleanup completed!');