const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;
  if (lineNum === 9843 || lineNum === 9917) {
    const line = lines[i];
    if (line.includes('2.5')) {
      lines[i] = line.replace(/\{"\(ຂໍ້ລະ 2\.5 [^\"]+"\}/, '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}');
      fixedCount++;
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully fixed ${fixedCount} leftover labels.`);
