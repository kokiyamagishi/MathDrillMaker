const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const parts = content.split(/unitNumber:\s*/g);
const u1 = parts.find(p => p.trim().startsWith('1'));

console.log('=== UNIT 1 Questions ===');
console.log(u1.substring(u1.indexOf('basicProblems:'), u1.indexOf('answers:')));
