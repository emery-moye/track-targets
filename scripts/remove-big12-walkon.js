const fs = require('fs');

let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Schools to update
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

let removed = 0;

schools.forEach(schoolId => {
  // Find school object and remove walkon properties
  const schoolRegex = new RegExp(`(id:\\s*"${schoolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?)(?=\\s*\\},\\s*\\{|\\}\\s*\\])`, 'g');
  
  content = content.replace(schoolRegex, (match) => {
    const walkons = (match.match(/,\\s*walkon:\\s*"[^"]*"/g) || []).length;
    removed += walkons;
    console.log(`Removing ${walkons} walkon properties from ${schoolId}`);
    return match.replace(/,\\s*walkon:\\s*"[^"]*"/g, '');
  });
});

fs.writeFileSync('./src/data/schoolStandards.ts', content);
console.log(`Successfully removed ${removed} walkon properties from Big 12 schools!`);