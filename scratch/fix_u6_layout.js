const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update Unit 6 keyPoints layout for the 2 vertical maths on page 23
// Target around line 1125: display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px"
// Let's replace the flex container containing VerticalMath with a 2-column grid
const targetKeyPoints = `              <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px" }}>`;
const replacementKeyPoints = `              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginTop: "16px" }}>`;

// 2. Update Unit 6 basicProblems number: 3 (addition math drills on page 24)
// Target around line 1202: display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px"
// Let's replace gridTemplateColumns "1fr" with "repeat(3, 1fr)"
const targetBasicProb3 = `            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກບວກລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>`;

const replacementBasicProb3 = `            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກບວກລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", paddingLeft: "16px" }}>`;

let updated = false;

if (content.includes(targetKeyPoints)) {
  content = content.replace(targetKeyPoints, replacementKeyPoints);
  console.log("Successfully replaced Unit 6 KeyPoints flex layout with 2-column grid!");
  updated = true;
} else {
  console.error("Could not find the target layout block for Unit 6 KeyPoints!");
}

if (content.includes(targetBasicProb3)) {
  content = content.replace(targetBasicProb3, replacementBasicProb3);
  console.log("Successfully replaced Unit 6 Basic Problems #3 layout with 3-column grid!");
  updated = true;
} else {
  console.error("Could not find the target layout block for Unit 6 Basic Problems #3!");
}

if (updated) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Saved all updates to units3.tsx!");
}
