const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// We want to make the bar charts on Page 60 (Unit 15 basicProblems Q1) and Page 62 (Unit 15 summaryProblems Q1) wider (横長).
// Specifically, let's look at the parameters that control the width:
// Y-axis container width: "300px" -> "400px"
// Graph Area gap: "20px" -> "40px"
// Bar width: "40px" -> "60px"
// X-axis label widths: "40px" -> "60px", gap: "20px" -> "40px"

// Let's write a script to perform these adjustments in Page 60 Q1 and Page 62 Q1.

// --- Page 60 Q1 ---
const p60Start = content.indexOf('{"ເບິ່ງກຣາບເສົາແລ້ວຕອບຄຳຖາມ (ສີທີ່ນັກຮຽນມັກ):"}');
const p60End = content.indexOf('{"ຈົ່ງເບິ່ງຕາຕະລາງ (ສັດລ້ຽງທີ່ມັກ) ແລ້ວລະບາຍສີໃສ່ກຣາບເສົາ: "}');
let p60Chunk = content.substring(p60Start, p60End);

p60Chunk = p60Chunk.replace('width: "300px"', 'width: "400px"'); // Outer container
p60Chunk = p60Chunk.replace('gap: "20px",\n                      padding: "0 10px"', 'gap: "40px",\n                      padding: "0 15px"'); // Graph area gap & padding
p60Chunk = p60Chunk.replace(/width:\s*"40px"/g, 'width: "60px"'); // Bars & labels width
p60Chunk = p60Chunk.replace('gap: "20px",\n                    marginTop: "8px"', 'gap: "40px",\n                    marginTop: "8px"'); // X-axis label gap

content = content.substring(0, p60Start) + p60Chunk + content.substring(p60End);


// --- Page 62 Q1 ---
const p62Start = content.indexOf('{"ຈົ່ງເບິ່ງກຣາບເສົາແລ້ວຕື່ມຈຳນວນໃສ່ຕາຕະລາງໃຫ້ຖືກຕ້ອງ: "}');
const p62End = content.indexOf('unitNumber: 16');
let p62Chunk = content.substring(p62Start, p62End);

p62Chunk = p62Chunk.replace('gap: "20px",\n                      padding: "0 10px"', 'gap: "40px",\n                      padding: "0 15px"'); // Graph area gap & padding
p62Chunk = p62Chunk.replace(/width:\s*"40px"/g, 'width: "60px"'); // Bars & labels width
p62Chunk = p62Chunk.replace('gap: "20px",\n                    marginTop: "8px"', 'gap: "40px",\n                    marginTop: "8px"'); // X-axis label gap
p62Chunk = p62Chunk.replace('paddingLeft: "30px"', 'paddingLeft: "40px"'); // Align labels

content = content.substring(0, p62Start) + p62Chunk + content.substring(p62End);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully adjusted bar charts on Page 60 and 62 to be wider.');
