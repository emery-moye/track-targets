const fs = require('fs');
const path = require('path');

// Generate comprehensive search keywords for a school
const generateKeywords = (schoolName, state, conference) => {
  const keywords = new Set();
  const nameLower = schoolName.toLowerCase();
  
  // Add the full school name variations
  keywords.add(nameLower);
  
  // Remove common words for shorter versions
  const withoutCommon = schoolName
    .replace(/\b(university|college|of|the|at|state)\b/gi, '')
    .trim()
    .replace(/\s+/g, ' ');
  if (withoutCommon && withoutCommon.toLowerCase() !== nameLower) {
    keywords.add(withoutCommon.toLowerCase());
  }
  
  // Generate abbreviations and nicknames based on patterns
  const words = schoolName.split(/\s+/);
  
  // UC System patterns (UC Berkeley, UCLA, etc.)
  if (schoolName.includes('University of California')) {
    const campus = schoolName.replace('University of California', '').trim().replace(/[,-]/g, '');
    if (campus) {
      keywords.add(`uc ${campus.toLowerCase()}`);
      keywords.add(`uc${campus.toLowerCase()}`);
      keywords.add(campus.toLowerCase());
      // Special cases
      if (campus.toLowerCase() === 'berkeley') {
        keywords.add('cal');
        keywords.add('cal berkeley');
        keywords.add('california berkeley');
        keywords.add('berk');
        keywords.add('cal bears');
        keywords.add('golden bears');
      }
      if (campus.toLowerCase() === 'los angeles') {
        keywords.add('ucla');
      }
      if (campus.toLowerCase() === 'san diego') {
        keywords.add('ucsd');
      }
      if (campus.toLowerCase() === 'santa barbara') {
        keywords.add('ucsb');
      }
      if (campus.toLowerCase() === 'irvine') {
        keywords.add('uci');
      }
      if (campus.toLowerCase() === 'davis') {
        keywords.add('ucd');
      }
    }
  }
  
  // State University patterns
  if (schoolName.includes('State University') || schoolName.includes('State College')) {
    const stateName = words[0];
    if (stateName) {
      keywords.add(`${stateName.toLowerCase()} state`);
      // Common abbreviations
      if (stateName.toLowerCase() === 'ohio') {
        keywords.add('osu');
        keywords.add('buckeyes');
        keywords.add('the ohio state');
      }
      if (stateName.toLowerCase() === 'penn') {
        keywords.add('psu');
        keywords.add('penn state');
        keywords.add('nittany lions');
      }
      if (stateName.toLowerCase() === 'michigan') {
        keywords.add('msu');
        keywords.add('spartans');
      }
      if (stateName.toLowerCase() === 'florida') {
        keywords.add('fsu');
        keywords.add('seminoles');
      }
    }
  }
  
  // University of X patterns
  if (schoolName.startsWith('University of ')) {
    const name = schoolName.replace('University of ', '');
    keywords.add(name.toLowerCase());
    keywords.add(`u of ${name.toLowerCase()}`);
    const initials = name.split(/\s+/).map(w => w[0]).join('').toLowerCase();
    if (initials.length >= 2 && initials.length <= 4) {
      keywords.add(`u${initials}`);
    }
    
    // Specific university nicknames
    if (name.toLowerCase() === 'michigan') {
      keywords.add('umich');
      keywords.add('wolverines');
      keywords.add('u of m');
    }
    if (name.toLowerCase() === 'texas') {
      keywords.add('ut');
      keywords.add('longhorns');
    }
    if (name.toLowerCase() === 'southern california') {
      keywords.add('usc');
      keywords.add('trojans');
    }
    if (name.toLowerCase() === 'notre dame') {
      keywords.add('nd');
      keywords.add('fighting irish');
    }
  }
  
  // Texas A&M pattern
  if (schoolName.includes('Texas A&M')) {
    keywords.add('tamu');
    keywords.add('texas am');
    keywords.add('aggies');
    keywords.add('a&m');
  }
  
  // Generate initials for multi-word schools
  if (words.length >= 2 && words.length <= 4) {
    const initials = words
      .filter(w => !['of', 'the', 'at', 'and'].includes(w.toLowerCase()))
      .map(w => w[0])
      .join('')
      .toLowerCase();
    if (initials.length >= 2) {
      keywords.add(initials);
    }
  }
  
  // Add partial matches for longer schools
  words.forEach(word => {
    if (word.length > 4 && !['university', 'college', 'state', 'institute'].includes(word.toLowerCase())) {
      keywords.add(word.toLowerCase());
      // Add common partial matches
      if (word.length > 6) {
        keywords.add(word.substring(0, 4).toLowerCase());
      }
    }
  });
  
  // Add state name and abbreviation
  if (state) {
    keywords.add(state.toLowerCase());
  }
  
  // Common nickname patterns based on last word
  const lastName = words[words.length - 1];
  if (lastName && !['university', 'college', 'state', 'institute', 'of'].includes(lastName.toLowerCase())) {
    keywords.add(lastName.toLowerCase());
  }
  
  // Remove empty strings and duplicates
  return Array.from(keywords).filter(k => k && k.length > 0);
};

// Process the file
const processFile = () => {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'schoolStandards.ts');
  
  console.log('Reading schoolStandards.ts...');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let modified = false;
  let addedCount = 0;
  let updatedCount = 0;
  const newLines = [];
  
  let currentSchoolName = '';
  let currentState = '';
  let currentConference = '';
  let inSchoolObject = false;
  let schoolStartLine = -1;
  let hasKeywords = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect school object start
    if (line.trim() === '{' && i > 0 && lines[i - 1].includes('schoolStandards')) {
      inSchoolObject = true;
      schoolStartLine = i;
      currentSchoolName = '';
      currentState = '';
      currentConference = '';
      hasKeywords = false;
    }
    
    // Track school properties
    if (inSchoolObject) {
      if (line.includes('schoolName:')) {
        const match = line.match(/schoolName:\s*["']([^"']+)["']/);
        if (match) currentSchoolName = match[1];
      }
      if (line.includes('state:')) {
        const match = line.match(/state:\s*["']([^"']+)["']/);
        if (match) currentState = match[1];
      }
      if (line.includes('conference:')) {
        const match = line.match(/conference:\s*["']([^"']+)["']/);
        if (match) currentConference = match[1];
      }
      if (line.includes('searchKeywords:')) {
        hasKeywords = true;
      }
      
      // End of school object
      if (line.trim() === '},' || (line.trim() === '}' && lines[i + 1]?.includes('];'))) {
        inSchoolObject = false;
        
        // Add keywords if not present
        if (currentSchoolName && !hasKeywords) {
          const keywords = generateKeywords(currentSchoolName, currentState, currentConference);
          const indent = '    ';
          const keywordsLine = `${indent}searchKeywords: [${keywords.map(k => `"${k}"`).join(', ')}],`;
          
          // Insert before the closing brace
          newLines.push(keywordsLine);
          modified = true;
          addedCount++;
          console.log(`Added keywords for: ${currentSchoolName}`);
        } else if (currentSchoolName && hasKeywords) {
          updatedCount++;
        }
      }
    }
    
    newLines.push(line);
  }
  
  if (modified) {
    console.log('\nWriting updated file...');
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log('\n✅ Successfully added search keywords!');
    console.log(`\nTotal schools with new keywords: ${addedCount}`);
    console.log(`Total schools with existing keywords: ${updatedCount}`);
  } else {
    console.log('\n⚠️  No changes needed - all schools already have keywords!');
  }
};

// Run the script
try {
  processFile();
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
