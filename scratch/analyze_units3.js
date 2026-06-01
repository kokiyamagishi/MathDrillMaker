const fs = require('fs');
const path = require('path');

const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// 1. Let's find all occurrences of gridTemplateColumns
console.log('--- gridTemplateColumns occurrences ---');
const gridRegex = /gridTemplateColumns:\s*['"`]([^'"`]+)['"`]/g;
let match;
while ((match = gridRegex.exec(content)) !== null) {
  const lineNum = content.slice(0, match.index).split('\n').length;
  console.log(`Line ${lineNum}: gridTemplateColumns = "${match[1]}"`);
}

// 2. Let's find all subquestion styles containing fontWeight: "bold" or similar in spans
console.log('\n--- spans with potential subquestion style issues ---');
const spanRegex = /<span\s+style=\{\{\s*fontSize:\s*['"`]18px['"`],\s*fontWeight:\s*['"`]bold['"`]\s*\}\}>\s*\{['"`]\(\d+\)['"`]\}/g;
let spanMatch;
let count = 0;
while ((spanMatch = spanRegex.exec(content)) !== null) {
  count++;
  if (count <= 10) {
    const lineNum = content.slice(0, spanMatch.index).split('\n').length;
    console.log(`Line ${lineNum}: ${spanMatch[0]}`);
  }
}
console.log(`Total subquestion bold spans found: ${count}`);
