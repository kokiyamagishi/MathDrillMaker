const fs = require('fs');
const path = require('path');

const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Let's find each unit block by looking for:
// {
//   unitNumber: X,
//   unitTitle: "...",
//   ...
// }
// Let's use simple line scanning to find lines like "unitNumber: " and "unitTitle: " and "basicProblems", etc.
const lines = content.split('\n');
let currentUnit = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith('unitNumber:')) {
    if (currentUnit) {
      console.log(`Unit ${currentUnit.number}: "${currentUnit.title}"`);
    }
    const num = line.match(/\d+/)[0];
    currentUnit = { number: num, title: '', start: i };
  } else if (line.startsWith('unitTitle:') && currentUnit) {
    const titleMatch = line.match(/["']([^"']+)["']/);
    if (titleMatch) {
      currentUnit.title = titleMatch[1];
    }
  }
}
if (currentUnit) {
  console.log(`Unit ${currentUnit.number}: "${currentUnit.title}"`);
}
