// Script to remove walkon properties from elite conference schools
const fs = require('fs');

const filePath = './src/data/schoolStandards.ts';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Removing walkon properties from elite conference schools...');

// Simple pattern to remove all walkon properties
// This will remove lines like: walkon: "10.70" or , walkon: "value"
const walkonPattern = /,\s*walkon:\s*"[^"]*"/g;

// Count matches before replacement
const matches = content.match(walkonPattern) || [];
console.log(`Found ${matches.length} walkon properties to remove`);

// Remove all walkon properties
content = content.replace(walkonPattern, '');

// Count remaining matches
const remainingMatches = content.match(walkonPattern) || [];
console.log(`Remaining walkon properties: ${remainingMatches.length}`);

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleanup completed!');