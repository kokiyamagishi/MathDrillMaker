const fs = require('fs');
const path = require('path');

const filePath = path.join('/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Unit 6 Basic Problems reduction
content = content.replace(/\{"\(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ\)"\}/, '{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}');

const basicProbRegex = /<span style=\{\{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" \}\}>\{"\(1\)"\}<\/span>[\s\S]*?<span style=\{\{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" \}\}>\{"\(10\)"\}<\/span>\n\s*<VerticalMath[^\n]*\n\s*<\/div>/;

const newBasicProbs = `<span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={214} bottom={135} operator="+" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={352} bottom={426} operator="+" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={500} bottom={200} operator="+" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={485} bottom={231} operator="-" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={759} bottom={426} operator="-" />
              </div>`;

content = content.replace(basicProbRegex, newBasicProbs);

// Unit 6 basic problem answers update
content = content.replace(/"\(1\) 349, \(2\) 778, \(3\) 700, \(4\) 579, \(5\) 899, \(6\) 254, \(7\) 333, \(8\) 600, \(9\) 333, \(10\) 444"/, '"(1) 349, (2) 778, (3) 700, (4) 254, (5) 333"');

// 2. Unit 7 Ruler label addition
const rulerRegex = /(<Ruler measuredLength=\{10\} maxLength=\{15\} objectType="pencil" showAnswer=\{true\} \/>\n\s*<\/div>)/;
const rulerReplacement = `$1\n            <div style={{ textAlign: "center", marginTop: "12px", fontSize: "18px", fontWeight: "bold" }}>{"10 cm = 100 mm"}</div>`;
content = content.replace(rulerRegex, rulerReplacement);

// 3. Unit 8 and 10 VerticalMath 3 columns
// Unit 8 is around lines 1176-1260
// Unit 10 is around lines 1453-1540
// We can just add columns={3} to all <VerticalMath ... operator="×" ... /> inside units 8 and 10.
// Luckily, ONLY units 8 and 10 use operator="×" !
// So we can just replace all `operator="×" />` with `operator="×" columns={3} />`
// and `operator="×" showAnswer={true} />` with `operator="×" showAnswer={true} columns={3} />`
content = content.replace(/operator="×" \/>/g, 'operator="×" columns={3} />');
content = content.replace(/operator="×" showAnswer=\{true\} \/>/g, 'operator="×" showAnswer={true} columns={3} />');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated units3.tsx');
