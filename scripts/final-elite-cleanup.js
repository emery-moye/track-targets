const fs = require('fs');

let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');

// Remove ALL walkon properties from SEC, Big Ten, ACC, and Big 12 schools
console.log('Removing walkon properties from elite conferences...');

// First pass: Remove from SEC schools
content = content.replace(
  /(conference:\s*"SEC"[\s\S]*?)(\},\s*\{)/g, 
  (match, schoolContent, ending) => {
    const cleaned = schoolContent.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    return cleaned + ending;
  }
);

// Second pass: Remove from Big Ten schools
content = content.replace(
  /(conference:\s*"Big Ten"[\s\S]*?)(\},\s*\{)/g, 
  (match, schoolContent, ending) => {
    const cleaned = schoolContent.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    return cleaned + ending;
  }
);

// Third pass: Remove from ACC schools
content = content.replace(
  /(conference:\s*"ACC"[\s\S]*?)(\},\s*\{)/g, 
  (match, schoolContent, ending) => {
    const cleaned = schoolContent.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    return cleaned + ending;
  }
);

// Fourth pass: Remove from Big 12 schools
content = content.replace(
  /(conference:\s*"Big 12"[\s\S]*?)(\},\s*\{)/g, 
  (match, schoolContent, ending) => {
    const cleaned = schoolContent.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    return cleaned + ending;
  }
);

// Handle the last school in the array (no ending comma/brace pattern)
content = content.replace(
  /(conference:\s*"(?:SEC|Big Ten|ACC|Big 12)"[\s\S]*?)(\}\s*\])/g, 
  (match, schoolContent, ending) => {
    const cleaned = schoolContent.replace(/,\s*walkon:\s*"[^"]*"/g, '');
    return cleaned + ending;
  }
);

fs.writeFileSync('./src/data/schoolStandards.ts', content);
console.log('Elite conference walkon removal completed!');