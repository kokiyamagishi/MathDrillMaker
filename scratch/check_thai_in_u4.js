const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('--- タイ文字スキャン開始 (src/data/units4.tsx) ---');
let foundCount = 0;

lines.forEach((line, index) => {
  const lineNum = index + 1;
  const thaiMatches = [];
  
  for (let i = 0; i < line.length; i++) {
    const code = line.charCodeAt(i);
    if (code >= 0x0E00 && code <= 0x0E7F) {
      thaiMatches.push({
        char: line[i],
        code: 'U+' + code.toString(16).toUpperCase().padStart(4, '0'),
        index: i
      });
    }
  }
  
  if (thaiMatches.length > 0) {
    foundCount++;
    console.log(`行 ${lineNum}: タイ文字を ${thaiMatches.length} 個検出`);
    console.log(`  内容: "${line.trim()}"`);
    console.log(`  詳細: ${thaiMatches.map(m => `${m.char} (${m.code})`).join(', ')}`);
    console.log('---');
  }
});

console.log(`スキャン完了。タイ文字が検出された行数: ${foundCount}`);
