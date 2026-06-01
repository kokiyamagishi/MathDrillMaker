const fs = require('fs');
const path = require('path');

const files = [
  'units1.tsx',
  'units3.tsx',
  'units4.tsx',
  'units5.tsx'
];

const dataDir = path.join(__dirname, '../src/data');

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. 文字列レベルの置換（タイ語表現や重複崩れの修正）
  content = content.replace(/การ/g, 'ການ');
  content = content.replace(/และ/g, 'ແລະ');
  content = content.replace(/ເເຊືອກ/g, 'ເຊືອກ');
  content = content.replace(/ເเືອກ/g, 'ເຊືອກ');

  // 2. 文字レベルの置換（タイ文字コードポイント U+0E00〜U+0E7F のマッピング）
  let newContent = '';
  let replacedCount = 0;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const code = char.charCodeAt(0);

    if (code >= 0x0E00 && code <= 0x0E7F) {
      replacedCount++;
      if (char === 'จ') {
        newContent += 'ຈ'; // U+0E08 -> U+0E8C (Cho)
      } else if (char === 'ร') {
        // 'ร' U+0E23 が単体で残っている場合はラオス文字の 'ຣ' U+0EA3 にする
        newContent += 'ຣ';
      } else {
        // 多くのタイ文字は +0x80 すると対応するラオス文字になる
        newContent += String.fromCharCode(code + 0x80);
      }
    } else {
      newContent += char;
    }
  }

  if (replacedCount > 0 || content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully fixed ${replacedCount} Thai characters in ${file}`);
  } else {
    console.log(`No Thai characters found in ${file}`);
  }
});
