const fs = require('fs');
let content = fs.readFileSync('./src/data/schoolStandards.ts', 'utf8');
const eliteConfs = ['SEC', 'Big Ten', 'ACC', 'Big 12'];
eliteConfs.forEach(conf => {
  const regex = new RegExp(`(conference:\\s*"${conf.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}"[\\s\\S]*?)(?=\\s*\\},\\s*\\{|\\}\\s*\\])`, 'g');
  content = content.replace(regex, (match) => match.replace(/,\\s*walkon:\\s*"[^"]*"/g, ''));
});
fs.writeFileSync('./src/data/schoolStandards.ts', content);
console.log('Elite conferences cleaned!');