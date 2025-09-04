const fs = require('fs');

console.log('Removing ALL walkon properties from SEC, Big Ten, ACC, and Big 12 schools...');

let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Elite conferences
const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];

let totalRemovals = 0;

eliteConferences.forEach(conference => {
  console.log(`Processing ${conference} schools...`);
  
  // Find each school in this conference and remove walkon properties
  const conferenceRegex = new RegExp(`conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
  
  let match;
  while ((match = conferenceRegex.exec(content)) !== null) {
    // Find the start of this school object (look backwards for opening brace)
    let schoolStart = content.lastIndexOf('{', match.index);
    
    // Find the end of this school object by counting braces
    let braceCount = 1;
    let schoolEnd = schoolStart + 1;
    
    while (braceCount > 0 && schoolEnd < content.length) {
      if (content[schoolEnd] === '{') braceCount++;
      if (content[schoolEnd] === '}') braceCount--;
      schoolEnd++;
    }
    
    // Extract the school object
    const schoolObject = content.substring(schoolStart, schoolEnd);
    
    // Count walkon properties before removal
    const walkonMatches = schoolObject.match(/,\s*walkon:\s*"[^"]*"/g) || [];
    const walkonCount = walkonMatches.length;
    
    if (walkonCount > 0) {
      // Remove all walkon properties from this school
      const cleanedSchool = schoolObject.replace(/,\s*walkon:\s*"[^"]*"/g, '');
      
      // Replace in main content
      content = content.substring(0, schoolStart) + cleanedSchool + content.substring(schoolEnd);
      
      // Update the regex position since we modified the content
      const lengthDiff = cleanedSchool.length - schoolObject.length;
      conferenceRegex.lastIndex = match.index + lengthDiff;
      
      totalRemovals += walkonCount;
      console.log(`  Removed ${walkonCount} walkon properties from school at position ${schoolStart}`);
    }
  }
});

console.log(`Total walkon properties removed: ${totalRemovals}`);

// Write the updated content back
fs.writeFileSync('./src/data/schoolStandards.ts', content, 'utf8');
console.log('✅ Successfully removed all walkon properties from elite conference schools!');