const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const parts = content.split(/unitNumber:\s*/g);

for (let i = 1; i <= 8; i++) {
  const part = parts.find(p => p.trim().startsWith(String(i)));
  if (!part) continue;

  console.log(`\n=================== UNIT ${i} ===================`);
  
  // Let's find every occurrence of point-label or point span or match questions
  const regex = /(?:basicProblems|summaryProblems):\s*\[([\s\S]*?)\]\s*,\s*(?:answers|summaryProblems|basicProblems)/g;
  let match;
  
  // Find point labels
  const labelRegex = /"(?:ຂໍ້ລະ\s*)?([\d.,]+)\s*(?:ຄະແນນ|ຄະແນນ, ລວມ \d+ ຄະແນນ)"/g;
  const labelsInUnit = [];
  let lMatch;
  while ((lMatch = labelRegex.exec(part)) !== null) {
    labelsInUnit.push(lMatch[0]);
  }
  console.log("Found raw score labels:", labelsInUnit);
}
