const fs = require('fs');
const path = require('path');

function findMismatch(filePath) {
  console.log(`\nScanning: ${path.basename(filePath)}`);
  const content = fs.readFileSync(filePath, 'utf8');

  // 単元定義の開始位置
  const unitRegex = /unitNumber:\s*(\d+)/g;
  let match;
  const unitPositions = [];
  while ((match = unitRegex.exec(content)) !== null) {
    unitPositions.push({
      unitNumber: parseInt(match[1]),
      index: match.index
    });
  }

  for (let i = 0; i < unitPositions.length; i++) {
    const start = unitPositions[i].index;
    const end = (i + 1 < unitPositions.length) ? unitPositions[i + 1].index : content.length;
    const unitContent = content.substring(start, end);

    // このUnit内で、"2.5" と "5" を含む配点ラベルを探す
    // 例: (ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)
    const labelRegex = /\(ຂໍ້ລະ\s*2\.5\s*ຄະແນນ,\s*ລວມ\s*5\s*ຄະແນນ\)/g;
    let labelMatch;
    
    while ((labelMatch = labelRegex.exec(unitContent)) !== null) {
      const labelIdx = labelMatch.index;
      
      // このラベルが含まれる大問ブロックを切り出す。
      // ラベルの手前 200 文字から、後ろ 1500 文字までを大問の範囲とする
      const blockStart = Math.max(0, labelIdx - 200);
      const blockEnd = Math.min(unitContent.length, labelIdx + 1500);
      const blockText = unitContent.substring(blockStart, blockEnd);

      // ブロック内にある小問 (1), (2) などの数をカウントする
      // ※既に (1), (2) にリセットされているため、(\d+) ではなく単に (1), (2) を探す
      const num1Count = (blockText.match(/\(1\)/g) || []).length;
      const num2Count = (blockText.match(/\(2\)/g) || []).length;

      // もし (2) が存在しない場合、1問しか存在しないことになる！
      if (num1Count > 0 && num2Count === 0) {
        console.log(`[!] Mismatch Found in Unit ${unitPositions[i].unitNumber}!`);
        console.log(`    Label: "${labelMatch[0]}"`);
        console.log(`    Sub-question (1) count: ${num1Count}, (2) count: ${num2Count}`);
        console.log(`    Snippet:\n${unitContent.substring(labelIdx - 100, labelIdx + 400)}\n`);
      }
    }
  }
}

const baseDir = '/Users/openclaw/Antigravity/MathDrillMaker';
findMismatch(path.join(baseDir, 'src/data/units3.tsx'));
findMismatch(path.join(baseDir, 'src/data/units4.tsx'));
findMismatch(path.join(baseDir, 'src/data/units5.tsx'));
