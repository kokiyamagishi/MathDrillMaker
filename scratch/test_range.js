const fs = require('fs');

function processSectionText(sectionText) {
  // number: 1, number: 2 などの出現位置をすべて探す
  const numRegex = /number:\s*(\d+)/g;
  const matches = [];
  let match;
  while ((match = numRegex.exec(sectionText)) !== null) {
    matches.push({
      num: parseInt(match[1]),
      index: match.index
    });
  }

  if (matches.length === 0) return sectionText;

  // 各大問の区間を特定する
  const ranges = [];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = (i + 1 < matches.length) ? matches[i + 1].index : sectionText.length;
    ranges.push({
      num: matches[i].num,
      start: start,
      end: end
    });
  }

  // 逆順（後ろから）で各範囲を処理する
  let result = sectionText;
  for (let i = ranges.length - 1; i >= 0; i--) {
    const range = ranges[i];
    const originalContent = result.substring(range.start, range.end);
    
    // この大問の区間内でのみ問題番号をリセット
    const fixedContent = resetNumberingInBlock(originalContent);

    const before = result.substring(0, range.start);
    const after = result.substring(range.end);
    result = before + fixedContent + after;
  }

  return result;
}

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

  const originalNums = [];
  matches.forEach(m => {
    if (!originalNums.includes(m.num)) {
      originalNums.push(m.num);
    }
  });

  const numMap = {};
  originalNums.forEach((oldNum, idx) => {
    numMap[oldNum] = idx + 1;
  });

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

// テスト用データ
const testSection = `
    basicProblems: [
      {
        number: 1,
        content: (
          <div>
            <p>{"(1) 3 x 2 = "}</p>
            <p>{"(2) 4 x 5 = "}</p>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div>
            <p>{"(6) ມີໝາກກ້ຽງ 4 ຖົງ..."}</p>
            <p>{"ຕອບ: (6) 20"}</p>
          </div>
        )
      }
    ]
`;

console.log("Original Section:");
console.log(testSection);
console.log("\nFixed Section:");
console.log(processSectionText(testSection));
