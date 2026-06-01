const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const units = content.split(/unitNumber:\s*/);
const u5Text = units[5];
console.log("=== Unit 5 Challenge Problems ===");
const idx = u5Text.indexOf('challengeProblems:');
if (idx !== -1) {
  // Let's find summaryProblems
  const sumIdx = u5Text.indexOf('summaryProblems:');
  console.log(u5Text.slice(idx, sumIdx));
}
