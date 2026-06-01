const fs = require('fs');
const path = require('path');

function analyzeFile(filePath) {
  console.log(`\n=== Analyzing ${path.basename(filePath)} ===`);
  const content = fs.readFileSync(filePath, 'utf8');

  // 単元ごとの分割を簡易的に行う
  // export const unitsDataX = [ ... ] の中身をパース
  // 各単元は { unitNumber: N, ... } というオブジェクト
  // 正規表現で unitNumber を見つける
  const unitRegex = /unitNumber:\s*(\d+)/g;
  let match;
  const unitIndices = [];
  while ((match = unitRegex.exec(content)) !== null) {
    unitIndices.push({
      unitNumber: parseInt(match[1]),
      index: match.index
    });
  }

  for (let i = 0; i < unitIndices.length; i++) {
    const start = unitIndices[i].index;
    const end = (i + 1 < unitIndices.length) ? unitIndices[i + 1].index : content.length;
    const unitContent = content.substring(start, end);

    console.log(`\nUnit ${unitIndices[i].unitNumber}:`);

    // basicProblems の大問を検索
    // number: 1, number: 2 などを検索
    const basicProblemsBlock = extractBlock(unitContent, 'basicProblems');
    if (basicProblemsBlock) {
      console.log('  [basicProblems]');
      analyzeSectionProblems(basicProblemsBlock);
    }

    const challengeProblemsBlock = extractBlock(unitContent, 'challengeProblems');
    if (challengeProblemsBlock) {
      console.log('  [challengeProblems]');
      analyzeSectionProblems(challengeProblemsBlock);
    }

    const summaryProblemsBlock = extractBlock(unitContent, 'summaryProblems');
    if (summaryProblemsBlock) {
      console.log('  [summaryProblems]');
      analyzeSectionProblems(summaryProblemsBlock);
    }

    // answers を検索
    const answersBlock = extractBlock(unitContent, 'answers');
    if (answersBlock) {
      console.log('  [answers]');
      const answerItems = [];
      const itemRegex = /questionNumber:\s*([^,}\n]+)[\s\S]*?answers:\s*\[([\s\S]*?)\]/g;
      let itemMatch;
      while ((itemMatch = itemRegex.exec(answersBlock)) !== null) {
        const qNum = itemMatch[1].trim();
        const ansText = itemMatch[2].replace(/\s+/g, ' ').trim();
        console.log(`    questionNumber: ${qNum} => ${ansText}`);
      }
    }
  }
}

// 指定したキー（例: basicProblems）に続くオブジェクト/配列のブロック {} or [] を簡易パースして抽出
function extractBlock(content, key) {
  const index = content.indexOf(key);
  if (index === -1) return null;

  let bracketCount = 0;
  let startChar = '';
  let endChar = '';
  let startIdx = -1;

  for (let i = index + key.length; i < content.length; i++) {
    const char = content[i];
    if (char === '{' || char === '[') {
      if (bracketCount === 0) {
        startChar = char;
        endChar = (char === '{') ? '}' : ']';
        startIdx = i;
      }
      bracketCount++;
    } else if (char === endChar) {
      bracketCount--;
      if (bracketCount === 0) {
        return content.substring(startIdx, i + 1);
      }
    }
  }
  return null;
}

function analyzeSectionProblems(block) {
  // 大問の number: X を検索
  const numberRegex = /number:\s*([^,}\n]+)/g;
  let match;
  const numbers = [];
  while ((match = numberRegex.exec(block)) !== null) {
    numbers.push({
      num: match[1].trim(),
      index: match.index
    });
  }

  for (let i = 0; i < numbers.length; i++) {
    const start = numbers[i].index;
    const end = (i + 1 < numbers.length) ? numbers[i + 1].index : block.length;
    const probContent = block.substring(start, end);

    // 問題番号 (1), (2) などのパターンを抽出
    // {"(1)"} や (1) や "(1)" などを検索
    const pNumRegex = /\((?:\d+|[a-zA-Z]+)\)/g;
    const foundNums = [];
    let pMatch;
    while ((pMatch = pNumRegex.exec(probContent)) !== null) {
      foundNums.push(pMatch[0]);
    }
    console.log(`    大問 ${numbers[i].num}: sub-questions => ${foundNums.join(', ')}`);
  }
}

// 実行
const baseDir = '/Users/openclaw/Antigravity/MathDrillMaker';
analyzeFile(path.join(baseDir, 'src/data/units3.tsx'));
analyzeFile(path.join(baseDir, 'src/data/units4.tsx'));
analyzeFile(path.join(baseDir, 'src/data/units5.tsx'));
