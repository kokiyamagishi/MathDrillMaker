const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const units = content.split(/unitNumber:\s*/);
const u5Text = units[5];
console.log("=== Unit 5 Exact Answers block in units3.tsx ===");
const idx = u5Text.indexOf('answers:');
if (idx !== -1) {
  console.log(u5Text.slice(idx, idx + 1000));
}
