// Final cleanup script
const fs = require('fs');
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Remove ALL walkon properties since we want elite conferences clean
// and made walkon optional in interface
content = content.replace(/, walkon: "[^"]*"/g, '');

fs.writeFileSync('./src/data/schoolStandards.ts', content);
console.log('All walkon properties removed!');