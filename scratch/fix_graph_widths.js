const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

// 1. Resizing other SVGs (lines 2068, 2169, 2333) to width="500" height="300"
// 2. Resizing page 13 SVG (around line 2488) to width="560" height="240"

let otherCount = 0;
let p13Count = 0;

for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;
  
  if (lineNum >= 2040 && lineNum <= 2400) {
    if (lines[i].includes('width="400"') || lines[i].includes('width="480"')) {
      lines[i] = lines[i].replace(/width="[45][08]0"/, 'width="500"');
      otherCount++;
    }
    if (lines[i].includes('height="250"') || lines[i].includes('height="300"')) {
      lines[i] = lines[i].replace(/height="[23][50]0"/, 'height="300"');
    }
  }
  
  if (lineNum >= 2470 && lineNum <= 2505) {
    if (lines[i].includes('width="400"') || lines[i].includes('width="480"')) {
      lines[i] = lines[i].replace(/width="[45][08]0"/, 'width="560"');
      p13Count++;
    }
    if (lines[i].includes('height="200"') || lines[i].includes('height="240"')) {
      lines[i] = lines[i].replace(/height="[22][40]0"/, 'height="240"');
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully resized: ${otherCount} regular graphs (Unit 3) and ${p13Count} summary graph (Page 13).`);
