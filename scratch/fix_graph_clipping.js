const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the viewBox attributes for all four Unit 3 line graph SVGs (lines 2046 - 2706)
const lines = content.split('\n');
let replacedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;
  if (lineNum >= 2040 && lineNum <= 2715) {
    if (lines[i].includes('viewBox="0 0 400 250"')) {
      lines[i] = lines[i].replace('viewBox="0 0 400 250"', 'viewBox="-20 0 420 250"');
      replacedCount++;
      console.log(`Updated viewBox on line ${lineNum}`);
    } else if (lines[i].includes('viewBox="0 0 400 200"')) {
      lines[i] = lines[i].replace('viewBox="0 0 400 200"', 'viewBox="-20 0 420 200"');
      replacedCount++;
      console.log(`Updated viewBox on line ${lineNum}`);
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully completed clipping adjustment for ${replacedCount} line graphs.`);
