const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const replacements = {
  // Unit 1
  200: ['{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],
  656: ['{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],
  709: ['{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],
  927: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  985: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],
  1079: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],

  // Unit 2
  1380: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}'],
  1488: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(3 ຄະແນນ)"}</span>'],
  // Add label for Basic 3 (around line 1550) - we will inject it or it had 3 points. Let's see: Basic 3 had (1.5 คະແນນ) on vertical. Wait, let's keep it.
  1644: ['{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}'],
  1744: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(4 ຄະແນນ)"}</span>'],
  1797: ['{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}'],
  1908: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(4 ຄະແນນ)"}</span>'],

  // Unit 3
  2159: ['{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}'],
  2291: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(4 ຄະແນນ)"}</span>'],
  2324: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(6 ຄະແນນ)"}</span>'],
  2443: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(4 ຄະແນນ)"}</span>'],
  2479: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  2645: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 4
  2896: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}'],
  2962: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(4 ຄະແນນ)"}</span>'],
  3004: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(6 ຄະແນນ)"}</span>'],
  3059: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(4 ຄະແນນ)"}</span>'],
  3107: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  3313: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 5
  3564: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  3639: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  3718: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>'], // 1 problem on challenge page, so 10 points
  3815: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  3892: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],

  // Unit 6
  4250: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  4329: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  4638: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  4822: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 7
  5142: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  5280: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  5333: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  5516: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  5570: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  5619: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],

  // Unit 8
  5896: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  5961: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6015: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  6060: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  6119: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6167: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 9
  6377: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6468: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6536: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  6562: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  6590: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  6620: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 10
  6882: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6903: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6931: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  6982: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  7028: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  7060: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 11
  7270: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7291: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7318: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7363: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7389: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7410: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 12
  7587: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7715: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  7765: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  7805: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  7849: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  7906: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 13
  8178: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  8227: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  8276: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  8322: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 14
  8526: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],
  8577: ['{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}', '{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}'],
  8632: ['<span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  8681: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  8730: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  8777: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 15
  9019: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9065: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9114: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9160: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 16
  9485: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9526: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9570: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9616: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 17
  9843: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  9917: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  9970: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  9999: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  10023: ['<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>', '<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>'],
  10046: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],

  // Unit 18
  10325: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  10371: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  10420: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>'],
  10572: ['<span className="point-label">{"(10 ຄະແນນ)"}</span>', '<span className="point-label">{"(5 ຄະແນນ)"}</span>']
};

let changeCount = 0;

for (const lineNumStr in replacements) {
  const lineNum = parseInt(lineNumStr);
  const [oldStr, newStr] = replacements[lineNumStr];
  
  // Search nearby to be extremely robust to minor offsets
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
}

// Now handle Unit 3 line graph resizing (scaling up from 400 to 480)
for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;
  // We want to target line graphs in Unit 3 (lines 2046 to 2706)
  if (lineNum >= 2046 && lineNum <= 2706) {
    if (lines[i].includes('width="400"') && lines[i].includes('height="250"')) {
      lines[i] = lines[i].replace('width="400"', 'width="480"').replace('height="250"', 'height="300"');
      console.log(`Resized line graph SVG on line ${lineNum}`);
    } else if (lines[i].includes('width="400"') && lines[i].includes('height="200"')) {
      lines[i] = lines[i].replace('width="400"', 'width="480"').replace('height="200"', 'height="240"');
      console.log(`Resized line graph SVG on line ${lineNum}`);
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully completed page-score alignment across all units. Changed ${changeCount} labels.`);
