const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const replacements = {
  200: ['{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  656: ['{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}', '{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  709: ['{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  927: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  985: ['{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  1079: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  1380: ['{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  1488: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  1644: ['{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  1744: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  1797: ['{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  1908: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  2159: ['{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  2291: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  2324: ['<span className="point-label">{"(6 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  2443: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  2479: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  2645: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  2896: ['{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  2962: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  3004: ['<span className="point-label">{"(6 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  3059: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  3107: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  3313: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  3564: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  3639: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  3718: ['<span className="point-label">{"(ຂໍ້ລະ 4 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  3815: ['<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  3892: ['<span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  4250: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  4329: ['<span className="point-label">{"(ຂໍ້ລະ 4 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  4530: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  4638: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  4822: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  5142: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5280: ['<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5333: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5516: ['<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5570: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5619: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5896: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  5961: ['<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6015: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6060: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6119: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6167: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6377: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6468: ['<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6536: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6562: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6590: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6620: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  6882: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6903: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6931: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  6982: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7028: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7060: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7270: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7291: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7318: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7363: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7389: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7410: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7587: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7715: ['<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  7765: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7805: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7849: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  7906: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8076: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  8178: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  8227: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8276: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8322: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8526: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  8577: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}'],
  8632: ['<span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  8681: ['<span className="point-label">{"(4 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8730: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8777: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  8908: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  9019: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9065: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9114: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9160: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9321: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  9485: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9526: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9570: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9616: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9843: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  9917: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  9970: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  9999: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  10023: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  10046: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  10210: ['<span className="point-label">{"(ຂໍးລະ 2.5 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'],
  10325: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  10371: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  10420: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>'],
  10572: ['<span className="point-label">{"(5 ຄະແນນ)"}</span>', '<span className="point-label">{"(10 ຄະແນນ)"}</span>']
};

let matchCount = 0;
let changeCount = 0;

for (const lineNumStr in replacements) {
  const lineNum = parseInt(lineNumStr);
  const [oldStr, newStr] = replacements[lineNumStr];
  const actualLine = lines[lineNum - 1];
  
  if (actualLine.includes(oldStr)) {
    lines[lineNum - 1] = actualLine.replace(oldStr, newStr);
    changeCount++;
  } else {
    // If exact line number is shifted, search nearby (e.g. within 20 lines)
    let found = false;
    for (let offset = -20; offset <= 20; offset++) {
      const idx = lineNum - 1 + offset;
      if (idx >= 0 && idx < lines.length && lines[idx].includes(oldStr)) {
        lines[idx] = lines[idx].replace(oldStr, newStr);
        changeCount++;
        found = true;
        break;
      }
    }
    if (!found) {
      console.warn(`Warning: Could not find target replacement for line ${lineNum}: "${oldStr}"`);
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully rewrote ${changeCount} labels in units4.tsx.`);
