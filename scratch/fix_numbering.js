const fs = require('fs');
const path = require('path');

// 括弧付き数字を検出して各大問内で1から順にリセットする関数
function resetNumberingInBlock(blockContent) {
  const numRegex = /\((\d+)\)/g;
  
  // マッチした数字の一覧を取得
  const matches = [];
  let match;
  while ((match = numRegex.exec(blockContent)) !== null) {
    matches.push({
      full: match[0],
      num: parseInt(match[1]),
      index: match.index
    });
  }

  if (matches.length === 0) return blockContent;

  // 出現順にユニークな元の数字のリストを作成
  const originalNums = [];
  matches.forEach(m => {
    if (!originalNums.includes(m.num)) {
      originalNums.push(m.num);
    }
  });

  // 元の数字から、1から始まる連番へのマップ
  const numMap = {};
  originalNums.forEach((oldNum, idx) => {
    numMap[oldNum] = idx + 1;
  });

  // 置換処理（後ろから置換してインデックスが崩れないようにする）
  let result = blockContent;
  const sortedMatches = [...matches].sort((a, b) => b.index - a.index);
  sortedMatches.forEach(m => {
    const newNum = numMap[m.num];
    const before = result.substring(0, m.index);
    const after = result.substring(m.index + m.full.length);
    result = before + `(${newNum})` + after;
  });

  return result;
}

// 括弧/波括弧の対応を考慮してブロックを抽出する関数
function parseAndFixFile(filePath) {
  console.log(`Processing file: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');

  // 単元 (Unit) ごとに分割して処理する
  const unitRegex = /unitNumber:\s*(\d+)/g;
  let match;
  const unitPositions = [];
  while ((match = unitRegex.exec(content)) !== null) {
    unitPositions.push({
      unitNumber: parseInt(match[1]),
      index: match.index
    });
  }

  // 逆順（ファイルの後ろから）で処理することで、置換による文字列の長さ変化が
  // 前方のインデックスに影響しないようにする
  for (let i = unitPositions.length - 1; i >= 0; i--) {
    const start = unitPositions[i].index;
    const end = (i + 1 < unitPositions.length) ? unitPositions[i + 1].index : content.length;
    let unitContent = content.substring(start, end);
    const originalUnitLength = unitContent.length;

    // このUnit内で、各大問ブロックを抽出して問題番号をリセットする
    unitContent = processSection(unitContent, 'basicProblems');
    unitContent = processSection(unitContent, 'challengeProblems');
    unitContent = processSection(unitContent, 'summaryProblems');
    unitContent = processAnswersSection(unitContent);

    // 全体コンテンツへ書き戻す
    const fileBefore = content.substring(0, start);
    const fileAfter = content.substring(start + originalUnitLength);
    content = fileBefore + unitContent + fileAfter;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully completed processing: ${filePath}`);
}

// basicProblems や challengeProblems, summaryProblems のセクションを処理
function processSection(unitContent, sectionKey) {
  const sectionIdx = unitContent.indexOf(sectionKey);
  if (sectionIdx === -1) return unitContent;

  // セクションの開始括弧 { または [ を探す
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
      // バグ修正: 開始括弧と同じ文字の時だけカウントを増やす
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

  if (startIdx === -1 || endIdx === -1) return unitContent;

  let sectionBlock = unitContent.substring(startIdx, endIdx);
  const originalSectionLength = sectionBlock.length;

  // レンジスキャン方式: number: X の位置関係から各大問のテキスト範囲を切り出す
  const numberRegex = /number:\s*(\d+|"[^"]+"|'[^']+')/g;
  const matches = [];
  let numMatch;
  while ((numMatch = numberRegex.exec(sectionBlock)) !== null) {
    matches.push({
      num: numMatch[1],
      index: numMatch.index
    });
  }

  if (matches.length > 0) {
    // 各大問の区間を特定する
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

    // 逆順で各大問内の小問番号をリセットする
    for (let i = ranges.length - 1; i >= 0; i--) {
      const range = ranges[i];
      const originalContent = sectionBlock.substring(range.start, range.end);
      const fixedContent = resetNumberingInBlock(originalContent);
      const before = sectionBlock.substring(0, range.start);
      const after = sectionBlock.substring(range.end);
      sectionBlock = before + fixedContent + after;
    }
  }

  // セクションブロックを書き戻す
  const unitBefore = unitContent.substring(0, startIdx);
  const unitAfter = unitContent.substring(endIdx);
  return unitBefore + sectionBlock + unitAfter;
}

// answers セクションを処理
function processAnswersSection(unitContent) {
  const answersIdx = unitContent.indexOf('answers:');
  if (answersIdx === -1) return unitContent;

  // answers: { ... } のブロックを抽出
  let bracketCount = 0;
  let startChar = '';
  let endChar = '';
  let startIdx = -1;
  let endIdx = -1;

  for (let i = answersIdx + 8; i < unitContent.length; i++) {
    const char = unitContent[i];
    if (char === '{') {
      if (bracketCount === 0) {
        startChar = char;
        endChar = '}';
        startIdx = i;
      }
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

  if (startIdx === -1 || endIdx === -1) return unitContent;

  let answersBlock = unitContent.substring(startIdx, endIdx);
  const originalAnswersLength = answersBlock.length;

  // answers.items: [ ... ] の配列ブロックを抽出
  const itemsIdx = answersBlock.indexOf('items:');
  if (itemsIdx === -1) return unitContent;

  let arrayBracketCount = 0;
  let arrayStartChar = '';
  let arrayEndChar = '';
  let arrayStartIdx = -1;
  let arrayEndIdx = -1;

  for (let i = itemsIdx + 6; i < answersBlock.length; i++) {
    const char = answersBlock[i];
    if (char === '[') {
      if (arrayBracketCount === 0) {
        arrayStartChar = char;
        arrayEndChar = ']';
        arrayStartIdx = i;
      }
      if (char === arrayStartChar) {
        arrayBracketCount++;
      }
    } else if (char === arrayEndChar) {
      arrayBracketCount--;
      if (arrayBracketCount === 0) {
        arrayEndIdx = i + 1;
        break;
      }
    }
  }

  if (arrayStartIdx === -1 || arrayEndIdx === -1) return unitContent;

  let itemsBlock = answersBlock.substring(arrayStartIdx, arrayEndIdx);
  const originalItemsLength = itemsBlock.length;

  // レンジスキャン方式: questionNumber: X の位置関係から各回答ブロックのテキスト範囲を切り出す
  const qNumRegex = /questionNumber:\s*(\d+|"[^"]+"|'[^']+')/g;
  const matches = [];
  let qMatch;
  while ((qMatch = qNumRegex.exec(itemsBlock)) !== null) {
    matches.push({
      num: qMatch[1],
      index: qMatch.index
    });
  }

  if (matches.length > 0) {
    // 各回答ブロックの区間を特定する
    const ranges = [];
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index;
      const end = (i + 1 < matches.length) ? matches[i + 1].index : itemsBlock.length;
      ranges.push({
        num: matches[i].num,
        start: start,
        end: end
      });
    }

    // 逆順で各回答ブロック内の括弧付き番号をリセットする
    for (let i = ranges.length - 1; i >= 0; i--) {
      const range = ranges[i];
      const originalContent = itemsBlock.substring(range.start, range.end);
      const fixedContent = resetNumberingInBlock(originalContent);
      const before = itemsBlock.substring(0, range.start);
      const after = itemsBlock.substring(range.end);
      itemsBlock = before + fixedContent + after;
    }
  }

  // itemsBlockを書き戻す
  const answersBefore = answersBlock.substring(0, arrayStartIdx);
  const answersAfter = answersBlock.substring(arrayEndIdx);
  answersBlock = answersBefore + itemsBlock + answersAfter;

  // answersBlockを書き戻す
  const unitBefore = unitContent.substring(0, startIdx);
  const unitAfter = unitContent.substring(endIdx);
  return unitBefore + answersBlock + unitAfter;
}

// メイン実行
const baseDir = '/Users/openclaw/Antigravity/MathDrillMaker';
parseAndFixFile(path.join(baseDir, 'src/data/units3.tsx'));
parseAndFixFile(path.join(baseDir, 'src/data/units4.tsx'));
parseAndFixFile(path.join(baseDir, 'src/data/units5.tsx'));
