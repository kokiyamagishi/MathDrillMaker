const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const parts = content.split(/unitNumber:\s*/g);
let output = '';

for (let i = 1; i <= 2; i++) {
  const part = parts.find(p => p.trim().startsWith(String(i)));
  if (!part) continue;

  output += `\n======================================================\n`;
  output += `UNIT ${i} KEYPOINTS:\n`;
  output += `======================================================\n`;
  
  const kpIndex = part.indexOf('keyPoints:');
  if (kpIndex !== -1) {
    let bracketCount = 0;
    let index = kpIndex;
    let kpText = '';
    while (index < part.length) {
      const char = part[index];
      kpText += char;
      if (char === '[') bracketCount++;
      else if (char === '{') bracketCount++;
      else if (char === ']') bracketCount--;
      else if (char === '}') bracketCount--;
      if (bracketCount === 0 && index > kpIndex + 15) {
        break;
      }
      index++;
    }
    output += kpText + '\n';
  }
}

fs.writeFileSync(path.join(__dirname, 'inspect_kp_out.txt'), output, 'utf8');
console.log('Saved to inspect_kp_out.txt');
