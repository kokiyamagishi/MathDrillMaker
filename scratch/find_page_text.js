const fs = require('fs');

const content = fs.readFileSync('src/data/units2.tsx', 'utf8');

// 簡易的に各セクションの出現位置を特定する
const lines = content.split('\n');
const pages = ['Cover Page']; // Page 1 is CoverPage

let currentUnit = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('unitNumber:')) {
    const match = line.match(/unitNumber:\s*(\d+)/);
    if (match) {
      currentUnit = parseInt(match[1], 10);
    }
  }
  
  if (line.includes('keyPoints:')) {
    pages.push(`Unit ${currentUnit} - KeyPoints (Line ${i+1})`);
  }
  
  if (line.includes('basicProblems: [')) {
    pages.push(`Unit ${currentUnit} - BasicProblems (Line ${i+1})`);
  }
  
  if (line.includes('challengeProblems: {')) {
    pages.push(`Unit ${currentUnit} - ChallengeProblems (Line ${i+1})`);
  }
  
  if (line.includes('summaryProblems: [')) {
    pages.push(`Unit ${currentUnit} - SummaryProblems (Line ${i+1})`);
  }
}

// ページ範囲の出力
pages.forEach((page, index) => {
  console.log(`Page ${index + 1}: ${page}`);
});
