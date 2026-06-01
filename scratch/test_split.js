const fs = require('fs');
const path = require('path');

// 括弧付き数字を検出・置換する関数
// 大問ブロック内の (X) や "(X)" や {"(X)"} などの括弧付き数字を出現順に (1), (2)... と置換する
function resetNumberingInBlock(blockContent) {
  let counter = 1;
  // 括弧付き数字にマッチする正規表現
  // (1) から (99) までの数字にマッチ
  // ただし、 style={{ ... }} などの属性値や、無関係な箇所の数字を誤検出しないように注意する。
  // 通常、問題番号は `(1)` のように括弧で囲まれている。
  // TSX内では `"(1)"` や `{"(1)"}` や `(1)` として記述されている。
  // 特徴的なのは、 `(数字)` という形式。
  
  // 誤検出を防ぐため、出現する括弧付き数字を安全に置換する。
  // まず、ブロック内のすべての括弧付き数字の出現位置を特定する。
  // プレースホルダーに置き換えてから、(1), (2) に順番に置換していく。
  
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

  // 後ろから順に置換していく（インデックスのズレを防ぐため）
  let result = blockContent;
  
  // 番号を振り直す。
  // ただし、同じ番号が複数回出てくる場合（例：問題文と入力欄など）があるため、
  // 「大問の中で登場するユニークな数字」の順番に基づいて 1, 2, 3... とする。
  // 例: (6) が大問の中で最初に出てきたら 1 に、次に出てきたら同じく 1 に（もし同じ問題の別箇所なら）。
  // しかし、通常は各問題番号はユニークです（1つの大問に (6), (7) がある）。
  // ユニークな元の数字のマップを作成する。
  const originalNums = Array.from(new Set(matches.map(m => m.num))).sort((a, b) => a - b);
  const numMap = {};
  originalNums.forEach((oldNum, idx) => {
    numMap[oldNum] = idx + 1; // 1から始まる連番
  });

  // 置換処理
  // 後ろから置換
  const sortedMatches = [...matches].sort((a, b) => b.index - a.index);
  sortedMatches.forEach(m => {
    const newNum = numMap[m.num];
    const before = result.substring(0, m.index);
    const after = result.substring(m.index + m.full.length);
    result = before + `(${newNum})` + after;
  });

  return result;
}

// テスト用のダミー文字列で検証
const testJSX = `
      {
        number: 2,
        content: (
          <div>
            <p>{"(6) ມີໝາກກ້ຽງ 4 ຖົງ, ຖົງລະ 5 ໜ່ວຍ. ລວມທັງໝົດມີໝາກກ້ຽງຈັກໜ່ວຍ?"}</p>
            <p>{"ຕອບ: (6) 20 ໜ່ວຍ"}</p>
          </div>
        )
      }
`;

console.log("Original JSX:");
console.log(testJSX);
console.log("\nReset Numbering:");
console.log(resetNumberingInBlock(testJSX));
