const fs = require('fs');

const CONVERSION = 1.0667;
const CONFERENCES = ['Liberty League', 'HCAC', 'CCS', 'Little East'];

function parseTime(timeStr) {
  const parts = timeStr.split(':');
  return parts.length === 2 ? parseFloat(parts[0]) * 60 + parseFloat(parts[1]) : parseFloat(timeStr);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toFixed(2).padStart(5, '0')}`;
}

function convert(time1500) {
  return formatTime(parseTime(time1500) * CONVERSION);
}

const filePath = 'src/data/schoolStandards.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');
const newLines = [];

let conf = null, school = null, gender = null, count = 0;
const stats = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  newLines.push(line);
  
  if (line.includes('conference:')) {
    const m = line.match(/conference:\s*["']([^"']+)["']/);
    if (m) conf = m[1];
  }
  
  if (line.includes('schoolName:')) {
    const m = line.match(/schoolName:\s*["']([^"']+)["']/);
    if (m) school = m[1];
  }
  
  if (line.includes('maleStandards:')) gender = 'M';
  if (line.includes('femaleStandards:')) gender = 'F';
  
  if (CONFERENCES.includes(conf) && line.includes('"1500m"')) {
    if (!(lines[i + 1] || '').includes('"1600m"')) {
      const t = line.match(/target:\s*["']([^"']+)["']/);
      const r = line.match(/recruit:\s*["']([^"']+)["']/);
      const w = line.match(/walkon:\s*["']([^"']+)["']/);
      
      if (t && r) {
        let newLine = `      "1600m": { target: "${convert(t[1])}", recruit: "${convert(r[1])}"`;
        if (w) newLine += `, walkon: "${convert(w[1])}"`;
        newLine += ' },';
        
        newLines.push(newLine);
        count++;
        stats[conf] = (stats[conf] || 0) + 1;
        console.log(`✓ ${school} (${gender})`);
      }
    }
  }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');

console.log('\n' + '='.repeat(60));
console.log(`✅ Added ${count} 1600m standards`);
console.log('='.repeat(60));
Object.entries(stats).forEach(([c, n]) => console.log(`  ${c.padEnd(18)}: ${n}`));
console.log('='.repeat(60));
