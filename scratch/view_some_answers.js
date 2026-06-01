const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const units = content.split(/unitNumber:\s*/);
for (let idx = 1; idx <= 5; idx++) {
  const uText = units[idx];
  const unitNum = uText.match(/^(\d+)/)[1];
  const answersMatch = uText.match(/answers:\s*\{([\s\S]*?)\n\s*\}\s*(?:,|\r?\n)/);
  if (answersMatch) {
    console.log(`\n=== Unit ${unitNum} Answers ===`);
    console.log(answersMatch[0].trim());
  }
}
