const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Spacing / side-by-side alignment on page 18
content = content.replace(
  'style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}',
  'style={{ display: "flex", gap: "16px" }}'
);
content = content.replace(
  'flex: "1 1 300px",\n                border: "2px solid #4CAF50"',
  'flex: "1",\n                border: "2px solid #4CAF50"'
);
content = content.replace(
  'flex: "1 1 300px",\n                border: "2px solid #2196F3"',
  'flex: "1",\n                border: "2px solid #2196F3"'
);

// 2. Scale up Unit 3 line graphs (Logical lines 2046 - 2706)
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;
  if (lineNum >= 2040 && lineNum <= 2715) {
    if (lines[i].includes('width="400"') && lines[i].includes('height="250"')) {
      lines[i] = lines[i].replace('width="400"', 'width="480"').replace('height="250"', 'height="300"');
      console.log(`Resized line graph SVG on line ${lineNum}`);
    } else if (lines[i].includes('width="400"') && lines[i].includes('height="200"')) {
      lines[i] = lines[i].replace('width="400"', 'width="480"').replace('height="200"', 'height="240"');
      console.log(`Resized line graph SVG on line ${lineNum}`);
    }
  }
}

// 3. Align scores so each page sums to exactly 10 points using full formal Lao format.
// We map line numbers to their correct target strings.
const labelReplacements = {
  // Unit 1 (Page totals sum to 10 points)
  200: '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',
  656: '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',
  709: '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',
  927: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  985: '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',
  1079: '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',

  // Unit 2 (Page totals sum to 10 points)
  1380: '{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}',
  1488: '<span className="point-label">{"(3 ຄະແນນ)"}</span>',
  1644: '{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}',
  1744: '<span className="point-label">{"(4 ຄະແນນ)"}</span>',
  1797: '{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}',
  1908: '<span className="point-label">{"(4 ຄະແນນ)"}</span>',

  // Unit 3 (Page totals sum to 10 points)
  2159: '{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}',
  2291: '<span className="point-label">{"(4 ຄະແນນ)"}</span>',
  2324: '<span className="point-label">{"(6 ຄະແນນ)"}</span>',
  2443: '<span className="point-label">{"(4 ຄະແນນ)"}</span>',
  2479: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  2645: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 4 (Page totals sum to 10 points)
  2896: '{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}',
  2962: '<span className="point-label">{"(4 ຄະແນນ)"}</span>',
  3004: '<span className="point-label">{"(6 ຄະແນນ)"}</span>',
  3059: '<span className="point-label">{"(4 ຄະແນນ)"}</span>',
  3107: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  3313: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 5
  3564: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  3639: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  3718: '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>',
  3815: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  3892: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',

  // Unit 6
  4250: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  4329: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  4530: '<span className="point-label">{"(10 ຄະແນນ)"}</span>',
  4638: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  4822: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 7
  5142: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  5280: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  5333: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  5516: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  5570: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  5619: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',

  // Unit 8
  5896: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  5961: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6015: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  6060: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  6119: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6167: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 9
  6377: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6468: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6536: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  6562: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  6590: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  6620: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 10
  6882: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6903: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6931: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  6982: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  7028: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  7060: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 11
  7270: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7291: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7318: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7363: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7389: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7410: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 12
  7587: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7715: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  7765: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  7805: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  7849: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  7906: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 13
  8076: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>',
  8178: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  8227: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  8276: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  8322: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 14
  8526: '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',
  8577: '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}',
  8632: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  8681: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  8730: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  8777: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 15
  8908: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>',
  9019: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9065: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9114: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9160: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 16
  9321: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>',
  9485: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9526: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9570: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9616: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 17
  9843: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  9917: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  9970: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  9999: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  10023: '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>',
  10046: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',

  // Unit 18
  10210: '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>',
  10325: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  10371: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  10420: '<span className="point-label">{"(5 ຄະແນນ)"}</span>',
  10572: '<span className="point-label">{"(5 ຄະແນນ)"}</span>'
};

let changeCount = 0;

for (const lineNumStr in labelReplacements) {
  const lineNum = parseInt(lineNumStr);
  const targetStr = labelReplacements[lineNumStr];
  
  // Search within 25 lines range to be extremely safe against line additions/removals
  for (let offset = -25; offset <= 25; offset++) {
    const idx = lineNum - 1 + offset;
    if (idx >= 0 && idx < lines.length) {
      const line = lines[idx];
      // Check if it's a point label line and replace it
      if (line.includes('point-label') || line.includes('ຄະແນນ')) {
        lines[idx] = line.replace(/<span className="point-label">.*<\/span>/, targetStr)
                         .replace(/\{"\(ຂໍ້ລະ [^\"]+"\}/, targetStr);
        changeCount++;
        break;
      }
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Alignment completed. Applied changes to page 18 layout, resized Unit 3 SVGs, and balanced page score totals.`);
