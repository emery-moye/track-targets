const fs = require('fs');

console.log('Starting Big 12 walk-on cleanup...');

// Read the file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Big 12 schools to clean
const targetSchools = [
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

// Process each school
targetSchools.forEach(schoolId => {
  console.log(`Processing ${schoolId}...`);
  
  // Find the school section and remove walkon properties
  const beforeLength = content.length;
  
  // Simple but effective regex to match walkon properties
  let schoolStartIndex = content.indexOf(`id: "${schoolId}"`);
  if (schoolStartIndex === -1) {
    console.log(`  School ${schoolId} not found`);
    return;
  }
  
  // Find the school object bounds
  let braceCount = 0;
  let schoolStart = content.lastIndexOf('{', schoolStartIndex);
  let pos = schoolStart;
  
  // Find the matching closing brace
  while (pos < content.length) {
    if (content[pos] === '{') braceCount++;
    if (content[pos] === '}') {
      braceCount--;
      if (braceCount === 0) break;
    }
    pos++;
  }
  
  let schoolEnd = pos + 1;
  let schoolContent = content.substring(schoolStart, schoolEnd);
  
  // Remove walkon properties from this school
  const walkonCount = (schoolContent.match(/, walkon: "[^"]*"/g) || []).length;
  if (walkonCount > 0) {
    console.log(`  Removing ${walkonCount} walkon properties`);
    totalRemoved += walkonCount;
    
    const cleanedSchool = schoolContent.replace(/, walkon: "[^"]*"/g, '');
    content = content.substring(0, schoolStart) + cleanedSchool + content.substring(schoolEnd);
  } else {
    console.log(`  No walkon properties found`);
  }
});

// Write the cleaned content
fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');
console.log(`\n✅ Successfully removed ${totalRemoved} walkon properties from Big 12 schools!`);

// Verify cleanup
console.log('\nVerifying cleanup...');
const finalContent = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');
targetSchools.forEach(schoolId => {
  const schoolIndex = finalContent.indexOf(`id: "${schoolId}"`);
  if (schoolIndex !== -1) {
    // Check area around this school for walkon properties
    const checkStart = Math.max(0, schoolIndex - 500);
    const checkEnd = Math.min(finalContent.length, schoolIndex + 3000);
    const schoolArea = finalContent.substring(checkStart, checkEnd);
    
    if (schoolArea.includes(', walkon:')) {
      console.log(`⚠️  ${schoolId} may still have walkon properties`);
    } else {
      console.log(`✓ ${schoolId} cleaned successfully`);
    }
  }
});

console.log('\n🎉 Big 12 cleanup completed!');