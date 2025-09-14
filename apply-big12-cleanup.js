const fs = require('fs');

// Direct application of cleanup
const content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Remove all walkon properties using global regex
const cleanedContent = content.replace(/, walkon: "[^"]*"/g, '');

fs.writeFileSync('./src/data/schoolStandards.ts', cleanedContent, 'utf8');

console.log('All walkon properties removed from file!');

// Execute the cleanup
require('./apply-big12-cleanup.js');