const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

let currentUnit = 0;
lines.forEach((line, idx) => {
  if (line.includes('unitNumber:')) {
    const match = line.match(/unitNumber:\s*(\d+)/);
    if (match) {
      currentUnit = parseInt(match[1]);
    }
  }
  if (currentUnit <= 8 && line.includes('ຄະແນນ')) {
    console.log(`Unit ${currentUnit} | Line ${idx + 1}: ${line.trim()}`);
  }
});
