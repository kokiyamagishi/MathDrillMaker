const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 削除対象の英語表記マッピング定義 (スペース付きの括弧表記)
const replacements = [
  // Unit 1 / Unit 2 etc.
  { target: ' (Number Line)', replace: '' },
  { target: ' (Rounding)', replace: '' },
  { target: ' (Round Down)', replace: '' },
  { target: ' (Round Up)', replace: '' },
  
  // Unit 5 etc.
  { target: ' (Line Graphs)', replace: '' },
  { target: ' (Line Graph)', replace: '' },
  
  // Unit 6 etc.
  { target: ' (Division)', replace: '' },
  { target: ' (Multiply)', replace: '' },
  { target: ' (Subtract)', replace: '' },
  
  // Unit 7 / 8 / 9 etc.
  { target: ' (Angles)', replace: '' },
  { target: ' (Right angle)', replace: '' },
  { target: ' (Decimals)', replace: '' },
  
  // Unit 9 / 10 etc.
  { target: ' (Types of Quadrilaterals)', replace: '' },
  { target: ' (Trapezoid)', replace: '' },
  { target: ' (Rhombus)', replace: '' },
  { target: ' (Two-way table)', replace: '' },
  { target: ' (Two-Way Tables)', replace: '' },
  { target: ' (Row)', replace: '' },
  { target: ' (Column)', replace: '' },
  { target: ' (Triangle)', replace: '' },
  { target: ' (Quadrilateral)', replace: '' },
  
  // Unit 11 etc.
  { target: ' (Even and Odd Numbers)', replace: '' },
  { target: ' (Even Numbers)', replace: '' },
  { target: ' (Odd Numbers)', replace: '' },
  
  // Unit 12 etc.
  { target: ' (Types of Fractions)', replace: '' },
  { target: ' (Proper)', replace: '' },
  { target: ' (Improper)', replace: '' },
  { target: ' (Mixed)', replace: '' },
  
  // Unit 14 / 15 / 16 / 17 etc.
  { target: ' (Using Letters for Numbers)', replace: '' },
  { target: ' (Proportion)', replace: '' },
  { target: ' (Area Formulas)', replace: '' },
  { target: ' (Rectangle)', replace: '' },
  { target: ' (Square)', replace: '' },
  { target: ' (Large Area Units)', replace: '' },
  { target: ' (Cuboid)', replace: '' },
  { target: ' (Cube)', replace: '' },
  { target: ' (Faces)', replace: '' },
  { target: ' (Edges)', replace: '' },
  
  // 頂点という日本語および Vertices という英語を削除
  { target: ' / 頂点 (Vertices)', replace: '' },
  { target: ' (Vertices)', replace: '' }
];

console.log('--- 英語表記の一括クリーンアップ処理を開始 ---');

let matchCount = 0;
replacements.forEach(item => {
  // すべての出現箇所を置換するため、エスケープして正規表現のグローバルマッチを作成
  const escapedTarget = item.target.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(escapedTarget, 'g');
  
  const occurrences = (content.match(regex) || []).length;
  if (occurrences > 0) {
    matchCount += occurrences;
    content = content.replace(regex, item.replace);
    console.log(`置換対象: "${item.target}" ➔ ${occurrences} 箇所を削除`);
  }
});

if (matchCount > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`クリーンアップ成功！合計 ${matchCount} 箇所の不要な表記を削除し、ファイルを更新しました。`);
} else {
  console.log('クリーンアップの対象となる不要表記は見つかりませんでした。');
}
