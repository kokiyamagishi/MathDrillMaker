const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('--- 英語表記スキャン開始 (src/data/units4.tsx) ---');
let foundCount = 0;

// 括弧で囲まれた英語の文字列パターン (例: (Trapezoid) や (Types of Quadrilaterals))
// アルファベット、スペース、記号を含む括弧
const englishPattern = /\([A-Za-z\s&,/-]+\)/g;

lines.forEach((line, index) => {
  const lineNum = index + 1;
  const matches = line.match(englishPattern);
  
  if (matches) {
    // Reactコンポーネント内のSVGタグの属性(width="...", fill="none", viewBox="..." 等)や、style属性のfontFamily: "monospace"等は除外する
    // また、単位「cm」「m」「kg」「g」「mL」「L」や、「A」「B」「C」などの単一アルファベット、SVG関連のコードは除外
    const filteredMatches = matches.filter(m => {
      const clean = m.replace(/[()]/g, '').trim();
      // 単位や単一文字以外の一般的な英単語を含んでいるかチェック
      if (/^(cm|m|kg|g|mL|L|mm|A|B|C|D|E|F|X|Y|Z|kp|id)$/i.test(clean)) {
        return false;
      }
      return true;
    });

    if (filteredMatches.length > 0) {
      foundCount++;
      console.log(`行 ${lineNum}: ${filteredMatches.join(', ')}`);
      console.log(`  内容: "${line.trim()}"`);
      console.log('---');
    }
  }
});

console.log(`スキャン完了。英語表記が検出された行数: ${foundCount}`);
