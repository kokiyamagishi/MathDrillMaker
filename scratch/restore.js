const fs = require('fs');

const unitsPath = 'src/data/units4.tsx';
const helperPath = 'scratch/add_units_7_8.js';

const helperContent = fs.readFileSync(helperPath, 'utf8');

// Extract u7_u8_code from helper content
const match = helperContent.match(/const u7_u8_code = `([\s\S]+?)`;/);
if (!match) {
  console.error("Failed to extract u7_u8_code from helper script!");
  process.exit(1);
}

const u7_u8_code = match[1];

let unitsContent = fs.readFileSync(unitsPath, 'utf8');

// We want to replace everything from the start of Unit 7 object to right before Unit 9 object.
// We will search for 'unitNumber: 7,' and find the '{' right before it.
const u7Match = unitsContent.match(/\{[\s]*\n[\s]*unitNumber:\s*7,/);
const u9Match = unitsContent.match(/\{[\s]*\n[\s]*unitNumber:\s*9,/);

if (!u7Match || !u9Match) {
  console.error("Could not locate Unit 7 or Unit 9 start in the file!");
  process.exit(1);
}

const u7Index = u7Match.index;
const u9Index = u9Match.index;

console.log(`Found Unit 7 at index: ${u7Index}, Unit 9 at index: ${u9Index}`);

if (u7Index >= u9Index) {
  console.error("Unit 7 is located after Unit 9!");
  process.exit(1);
}

const prefix = unitsContent.substring(0, u7Index);
const suffix = unitsContent.substring(u9Index);

const newContent = prefix + u7_u8_code.trim() + ',\n\n  ' + suffix;

fs.writeFileSync(unitsPath, newContent, 'utf8');
console.log("Successfully restored Unit 7 & 8 inside src/data/units4.tsx!");
