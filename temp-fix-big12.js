const fs = require('fs');

// Read the file
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Big 12 schools to clean
const schoolIds = [
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

console.log('Starting Big 12 walkon removal...');

let totalRemoved = 0;

schoolIds.forEach(schoolId => {
  // Find the school object
  const schoolPattern = new RegExp(
    `(\\{[\\s\\S]*?id:\\s*"${schoolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?\\})`, 
    'g'
  );
  
  content = content.replace(schoolPattern, (schoolMatch) => {
    // Count and remove walkon properties
    const walkonCount = (schoolMatch.match(/,\\s*walkon:\\s*"[^"]*"/g) || []).length;
    if (walkonCount > 0) {
      console.log(`Removing ${walkonCount} walkon properties from ${schoolId}`);
      totalRemoved += walkonCount;
      return schoolMatch.replace(/,\\s*walkon:\\s*"[^"]*"/g, '');
    }
    return schoolMatch;
  });
});

// Write the updated content
fs.writeFileSync('./src/data/schoolStandards.ts', content);
console.log(`Successfully removed ${totalRemoved} walkon properties from Big 12 schools!`);

// Verify the results
const finalContent = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');
schoolIds.forEach(schoolId => {
  const schoolRegex = new RegExp(`id:\\s*"${schoolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?\\}`);
  const match = finalContent.match(schoolRegex);
  if (match && match[0].includes('walkon:')) {
    console.log(`WARNING: ${schoolId} still has walkon properties`);
  } else {
    console.log(`✓ ${schoolId} cleaned successfully`);
  }
});

// Execute the script immediately
module.exports = {};