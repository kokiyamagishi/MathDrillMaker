const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const parts = content.split(/unitNumber:\s*/g);
const u2 = parts.find(p => p.trim().startsWith('2'));

const kpStart = u2.indexOf('keyPoints:');
const kpEnd = u2.indexOf('basicProblems:');

console.log(u2.substring(kpStart, kpEnd));
