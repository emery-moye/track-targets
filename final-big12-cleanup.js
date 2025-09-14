// Final cleanup for Big 12 schools - remove walkon properties
const fs = require('fs');

// Read the file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

console.log('🧹 Starting Big 12 walkon cleanup...');

// Count initial walkons
const initialWalkons = (content.match(/, walkon: "[^"]*"/g) || []).length;
console.log(`Initial walkon properties: ${initialWalkons}`);

// Schools to clean
const schools = [
  'university-of-arizona',
  'arizona-state-university',
  'baylor-university', 
  'university-of-cincinnati',
  'university-of-colorado-boulder',
  'iowa-state-university',
  'university-of-kansas',
  'kansas-state-university',
  'oklahoma-state-university',
  'texas-christian-university'
];

let totalRemoved = 0;

// Process each school individually
schools.forEach(schoolId => {
  console.log(`Processing ${schoolId}...`);
  
  // Find school start
  const schoolIdPattern = `id: "${schoolId}"`;
  const schoolStartIndex = content.indexOf(schoolIdPattern);
  
  if (schoolStartIndex === -1) {
    console.log(`  ❌ School not found: ${schoolId}`);
    return;
  }
  
  // Find the opening brace of the school object (before the id)
  let objectStart = content.lastIndexOf('{', schoolStartIndex);
  
  // Find the closing brace of the school object
  let braceCount = 1;
  let pos = objectStart + 1;
  
  while (pos < content.length && braceCount > 0) {
    if (content[pos] === '{') braceCount++;
    else if (content[pos] === '}') braceCount--;
    pos++;
  }
  
  let objectEnd = pos;
  
  // Extract school object
  const schoolObject = content.substring(objectStart, objectEnd);
  
  // Count and remove walkon properties
  const walkons = (schoolObject.match(/, walkon: "[^"]*"/g) || []).length;
  
  if (walkons > 0) {
    console.log(`  Removing ${walkons} walkon properties`);
    totalRemoved += walkons;
    
    const cleanedObject = schoolObject.replace(/, walkon: "[^"]*"/g, '');
    
    // Replace in main content
    content = content.substring(0, objectStart) + cleanedObject + content.substring(objectEnd);
  } else {
    console.log(`  No walkon properties found`);
  }
});

// Write cleaned content
fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');

// Final count
const finalWalkons = (content.match(/, walkon: "[^"]*"/g) || []).length;

console.log(`\n📊 Results:`);
console.log(`  Total removed: ${totalRemoved}`);
console.log(`  Before: ${initialWalkons} walkons`);
console.log(`  After: ${finalWalkons} walkons`);

// Verification
console.log('\n🔍 Verifying cleanup...');
schools.forEach(schoolId => {
  const schoolIndex = content.indexOf(`id: "${schoolId}"`);
  if (schoolIndex !== -1) {
    const schoolArea = content.substring(schoolIndex, schoolIndex + 3000);
    if (schoolArea.includes(', walkon:')) {
      console.log(`  ⚠️  ${schoolId} still has walkon properties!`);
    } else {
      console.log(`  ✅ ${schoolId} cleaned successfully`);
    }
  }
});

console.log('\n🎉 Big 12 cleanup completed!');