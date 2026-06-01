const fs = require('fs');
const path = require('path');

function fixMismatch(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);
  let content = fs.readFileSync(filePath, 'utf8');

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

  // 逆順で処理してインデックス崩れを防ぐ
  for (let i = unitPositions.length - 1; i >= 0; i--) {
    const start = unitPositions[i].index;
    const end = (i + 1 < unitPositions.length) ? unitPositions[i + 1].index : content.length;
    let unitContent = content.substring(start, end);
    const originalUnitLength = unitContent.length;

    // "2.5" と "5" を含む配点ラベルを探す
    // 例: (ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)
    // 波括弧付き・ダブルクォート等、様々な形式に対応
    const labelRegex = /(\{?\s*["']\s*\(ຂໍ້ລະ\s*2\.5\s*ຄະແນນ,\s*ລວມ\s*5\s*ຄະແນນ\)\s*["']\s*\}?)/g;
    let labelMatch;
    
    // 見つかったラベルを逆順に処理するための配列
    const foundLabels = [];
    while ((labelMatch = labelRegex.exec(unitContent)) !== null) {
      foundLabels.push({
        full: labelMatch[0],
        index: labelMatch.index
      });
    }

    if (foundLabels.length > 0) {
      // 逆順に置換
      for (let j = foundLabels.length - 1; j >= 0; j--) {
        const label = foundLabels[j];
        const labelIdx = label.index;
        
        // 大問ブロックの範囲をスキャン
        const blockStart = Math.max(0, labelIdx - 200);
        const blockEnd = Math.min(unitContent.length, labelIdx + 1500);
        const blockText = unitContent.substring(blockStart, blockEnd);

        // 小問数カウント
        const num1Count = (blockText.match(/\(1\)/g) || []).length;
        const num2Count = (blockText.match(/\(2\)/g) || []).length;

        // もし (2) が存在しない場合（小問が1問しかない）
        if (num1Count > 0 && num2Count === 0) {
          console.log(`[Fix] Mismatch found in Unit ${unitPositions[i].unitNumber}. Correcting label to 5 points.`);
          
          // 新しいラベル
          // 波括弧の形式を保つ
          let newLabel = '';
          if (label.full.startsWith('{')) {
            newLabel = '{"(5 ຄະແນນ)"}';
          } else {
            newLabel = '"(5 ຄະແນນ)"';
          }

          const before = unitContent.substring(0, labelIdx);
          const after = unitContent.substring(labelIdx + label.full.length);
          unitContent = before + newLabel + after;
        }
      }
    }

    // 全体コンテンツへ書き戻す
    const fileBefore = content.substring(0, start);
    const fileAfter = content.substring(start + originalUnitLength);
    content = fileBefore + unitContent + fileAfter;
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

const baseDir = '/Users/openclaw/Antigravity/MathDrillMaker';
fixMismatch(path.join(baseDir, 'src/data/units3.tsx'));
fixMismatch(path.join(baseDir, 'src/data/units4.tsx'));
fixMismatch(path.join(baseDir, 'src/data/units5.tsx'));
console.log('\nAll files processed for score labels!');
