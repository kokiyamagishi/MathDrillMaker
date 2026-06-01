const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// 1. Shrink Y-axis numbers font size on page 60 & 62
// Current: fontSize: "12px" under relative container inside bar chart
// Wait, we can find: position: "relative", height: "160px", width: "20px", fontWeight: "bold", fontSize: "12px"
// Let's replace the fontSize: "12px" to fontSize: "8px" or "9px" for page 60, 61, 62 so they fit perfectly.
content = content.replace(
  /fontSize:\s*"12px",\s*}\s*>\s*\{\[0,\s*1,\s*2,\s*3,\s*4,\s*5,\s*6,\s*7,\s*8\]\.map/g,
  'fontSize: "9px",\n                    }\n                  }\n                >\n                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map'
);
// Also for Y-axis container widths, let's change width: "20px" to width: "12px" to save space if needed,
// but actually, just changing Y-axis span positions or container size helps. Let's make right: "4px" or align right.
// Let's check how span style is written: right: 0. We can change it to right: 2px or right: 4px to align it closer to the line, and since font-size is smaller it won't overflow the container.

// 2. Fix page 60 Q2 bar chart dotted grid heights and overflow:
// Currently: [...Array(3)] for Dog, Cat, Bird bars, inside Y-axis height 160px.
// But the Y-axis has values 0 to 8 (which means 8 grid levels).
// Since each grid level is 20px high, the total grid height is 8 * 20px = 160px.
// However, the dotted grid in page 60 Q2 had only 3 levels (Array(3)), which means only 3 * 20px = 60px of grid was rendered!
// That's why it was completely broken!
// Let's change the dotted grid bars to all render 8 levels (Array(8)), so the grid lines span all the way to Y=8 (160px)!
// Yes! The user said: "点線のマス目については、全部で8マスまで作成していただくようお願いいたします。" (Create up to 8 grid levels for the dotted grids).
// We should change [...Array(3)] inside the dotted grids of Page 60 Q2 and Page 61 Q1 to [...Array(8)]!

// Let's do this replace:
// Page 60 Q2 dotted bars:
// Locate red/dog/cat/bird blank grid blocks and replace Array(3) with Array(8)
const p60q2Start = content.indexOf('{"ຈົ່ງເບິ່ງຕາຕະລາງ (ສັດລ້ຽງທີ່ມັກ) ແລ້ວລະບາຍສີໃສ່ກຣາບເສົາ: "}');
const p60q2End = content.indexOf('{"ນຳເອົາຂໍ້ມູນລຸ່ມນີ້ມາຂຽນໃສ່ຕາຕະລາງ ແລະ ລະບາຍສີໃສ່ກຣາບເສົາ: "}');
let p60q2Chunk = content.substring(p60q2Start, p60q2End);
p60q2Chunk = p60q2Chunk.replace(/\[\.\.\.Array\(3\)\]\.map/g, '[...Array(8)].map');
content = content.substring(0, p60q2Start) + p60q2Chunk + content.substring(p60q2End);

// Page 61 Q1 dotted bars:
const p61q1Start = content.indexOf('{"ນຳເອົາຂໍ້ມູນລຸ່ມນີ້ມາຂຽນໃສ່ຕາຕະລາງ ແລະ ລະບາຍສີໃສ່ກຣາບເສົາ: "}');
const p61q1End = content.indexOf('{"ຈົ່ງເບິ່ງກຣາບເສົາແລ້ວຕື່ມຈຳນວນໃສ່ຕາຕະລາງໃຫ້ຖືກຕ້ອງ: "}');
let p61q1Chunk = content.substring(p61q1Start, p61q1End);
p61q1Chunk = p61q1Chunk.replace(/\[\.\.\.Array\(1\)\]\.map/g, '[...Array(8)].map');
content = content.substring(0, p61q1Start) + p61q1Chunk + content.substring(p61q1End);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully completed adjustments for Y-axis fonts and dotted grids.');
