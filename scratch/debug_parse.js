const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Unit 1
const unitRegex = /unitNumber:\s*(\d+)/g;
let match;
const unitPositions = [];
while ((match = unitRegex.exec(content)) !== null) {
  unitPositions.push({
    unitNumber: parseInt(match[1]),
    index: match.index
  });
}

const start = unitPositions[0].index;
const end = unitPositions[1].index;
let unitContent = content.substring(start, end);

const sectionKey = 'basicProblems';
const sectionIdx = unitContent.indexOf(sectionKey);
console.log(`sectionIdx for ${sectionKey}:`, sectionIdx);

let bracketCount = 0;
let startChar = '';
let endChar = '';
let startIdx = -1;
let endIdx = -1;

for (let i = sectionIdx + sectionKey.length; i < unitContent.length; i++) {
  const char = unitContent[i];
  if (char === '{' || char === '[') {
    if (bracketCount === 0) {
      startChar = char;
      endChar = (char === '{') ? '}' : ']';
      startIdx = i;
    }
    // 開始文字（[ または {）と同じ文字の時だけカウントを増やす
    if (char === startChar) {
      bracketCount++;
    }
  } else if (char === endChar) {
    bracketCount--;
    if (bracketCount === 0) {
      endIdx = i + 1;
      break;
    }
  }
}

console.log('startIdx:', startIdx, 'endIdx:', endIdx);
if (endIdx !== -1) {
  let sectionBlock = unitContent.substring(startIdx, endIdx);
  console.log('Successfully extracted sectionBlock! Length:', sectionBlock.length);

  // sectionBlock の中の number: を検索
  const numberRegex = /number:\s*(\d+|"[^"]+"|'[^']+')/g;
  const matches = [];
  let numMatch;
  while ((numMatch = numberRegex.exec(sectionBlock)) !== null) {
    matches.push({
      num: numMatch[1],
      index: numMatch.index
    });
  }

  console.log('Matches in basicProblems:', matches);

  // 範囲
  const ranges = [];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = (i + 1 < matches.length) ? matches[i + 1].index : sectionBlock.length;
    ranges.push({
      num: matches[i].num,
      start: start,
      end: end
    });
  }

  // 大問2のコンテンツを表示
  if (ranges.length > 1) {
    const originalContent = sectionBlock.substring(ranges[1].start, ranges[1].end);
    console.log('Original 大問2 snippet:', originalContent.substring(0, 300));

    const numRegex = /\((\d+)\)/g;
    const subMatches = [];
    let subMatch;
    while ((subMatch = numRegex.exec(originalContent)) !== null) {
      subMatches.push({
        full: subMatch[0],
        num: parseInt(subMatch[1]),
        index: subMatch.index
      });
    }
    console.log('Sub-matches (numbers) in 大問2:', subMatches);
  }
}
