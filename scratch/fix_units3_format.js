const fs = require('fs');
const path = require('path');

const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
let content = fs.readFileSync(filePath, 'utf8');

console.log('--- STARTING REPLACEMENTS ---');

// 1. Add className="math-illustration" to all gridTemplateColumns: "repeat(3, 1fr)"
const gridRegex = /(<div\s+)(style=\{\{\s*display:\s*['"`]grid['"`],\s*gridTemplateColumns:\s*['"`]repeat\(3,\s*1fr\)['"`],)/g;
let gridCount = 0;
content = content.replace(gridRegex, (match, p1, p2) => {
  gridCount++;
  return `${p1}className="math-illustration" ${p2}`;
});
console.log(`Replaced ${gridCount} repeat(3, 1fr) grid headers with className="math-illustration"`);

// 2. Fix subquestion labels in these grids
// style={{
//   fontSize: "18px",
//   fontWeight: "bold",
//   alignSelf: "flex-start",
// }}
// to:
// style={{
//   fontSize: "22px",
//   alignSelf: "flex-start",
// }}
const subquestionGridSpanRegex = /style=\{\{\s*fontSize:\s*['"`]18px['"`],\s*fontWeight:\s*['"`]bold['"`],\s*alignSelf:\s*['"`]flex-start['"`],?\s*\}\}/g;
let gridSpanCount = 0;
content = content.replace(subquestionGridSpanRegex, (match) => {
  gridSpanCount++;
  return `style={{ fontSize: "22px", alignSelf: "flex-start" }}`;
});
console.log(`Replaced ${gridSpanCount} grid subquestion spans style`);

// 3. Fix general subquestion labels:
// <span style={{ fontSize: "18px", fontWeight: "bold" }}>
// <span style={{ fontWeight: "bold", fontSize: "18px" }}>
// <span style={{ fontWeight: "bold" }}> (when followed by subquestion number)

// Let's do replacements with regex that captures the contents
// Case A: fontSize: "18px", fontWeight: "bold" or fontWeight: "bold", fontSize: "18px"
const caseARegex = /<span\s+style=\{\{\s*(fontSize:\s*['"`]18px['"`],\s*fontWeight:\s*['"`]bold['"`]|fontWeight:\s*['"`]bold['"`],\s*fontSize:\s*['"`]18px['"`])\s*\}\}>\s*(\{?["']\(\d+\)["']\}?|\{?item\.n\}?)\s*<\/span>/g;
let caseACount = 0;
content = content.replace(caseARegex, (match, p1, p2) => {
  caseACount++;
  return `<span style={{ fontSize: "22px" }}>${p2}</span>`;
});
console.log(`Replaced ${caseACount} Case A spans (fontSize: 18px, fontWeight: bold)`);

// Case B: style={{ fontWeight: "bold" }} on subquestions
const caseBRegex = /<span\s+style=\{\{\s*fontWeight:\s*['"`]bold['"`]\s*\}\}>\s*(\{?["']\(\d+\)["']\}?|\{?item\.n\}?)\s*<\/span>/g;
let caseBCount = 0;
content = content.replace(caseBRegex, (match, p1) => {
  caseBCount++;
  return `<span style={{ fontSize: "22px" }}>${p1}</span>`;
});
console.log(`Replaced ${caseBCount} Case B spans (fontWeight: bold only)`);

// Save back
fs.writeFileSync(filePath, content, 'utf8');
console.log('--- REPLACEMENTS COMPLETED AND SAVED ---');
