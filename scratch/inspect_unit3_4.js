const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const parts = content.split(/unitNumber:\s*/g);
const u3 = parts.find(p => p.trim().startsWith('3'));
const u4 = parts.find(p => p.trim().startsWith('4'));

console.log('=== UNIT 3 ===');
console.log(u3.substring(u3.indexOf('basicProblems:'), u3.indexOf('answers:')));

console.log('=== UNIT 4 ===');
console.log(u4.substring(u4.indexOf('basicProblems:'), u4.indexOf('answers:')));
