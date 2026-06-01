const fs = require('fs');
const path = require('path');

const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== MATH DRILL AUDIT REPORT FOR units3.tsx ===');

// Check 1: gridTemplateColumns with repeat(3, 1fr) or similar 3+ grids that lack math-illustration
console.log('\n--- 1. Checking 3+ Grid Layouts (Protection of Illustrations) ---');
const lines = content.split('\n');
let threePlusGrids = 0;
let threePlusGridsMissingIllustration = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('gridTemplateColumns') && (line.includes('repeat(3') || line.includes('repeat(4') || line.includes('repeat(5') || line.includes('1fr 1fr 1fr'))) {
    threePlusGrids++;
    // Look around for className="math-illustration" in the preceding/succeeding few lines
    let hasIllustration = false;
    for (let offset = -3; offset <= 3; offset++) {
      const checkIdx = i + offset;
      if (checkIdx >= 0 && checkIdx < lines.length) {
        if (lines[checkIdx].includes('math-illustration')) {
          hasIllustration = true;
          break;
        }
      }
    }
    if (!hasIllustration) {
      threePlusGridsMissingIllustration++;
      console.log(`Line ${i + 1}: Grid layout "${line.trim()}" lacks className="math-illustration"`);
    } else {
      console.log(`Line ${i + 1}: Grid layout "${line.trim()}" has className="math-illustration" (OK)`);
    }
  }
}
console.log(`Summary: Found ${threePlusGrids} grids with 3+ columns, ${threePlusGridsMissingIllustration} missing className="math-illustration"`);

// Check 2: Subquestions layouts (2 columns)
console.log('\n--- 2. Checking 2-column layouts for Subquestions ---');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('gridTemplateColumns') && line.includes('repeat(2')) {
    console.log(`Line ${i + 1}: 2-column grid: "${line.trim()}"`);
  }
}

// Check 3: Subquestion span styles (Phetsarath 22px and no bold)
console.log('\n--- 3. Checking Subquestion Span Styles (fontWeight: "bold", fontSize) ---');
let boldSpans = 0;
const spanRegex = /<span\s+style=\{\{\s*fontSize:\s*['"`](18px|20px)['"`],\s*fontWeight:\s*['"`]bold['"`]\s*\}\}>\s*\{?['"`]\(\d+\)['"`]\}?/g;
let match;
while ((match = spanRegex.exec(content)) !== null) {
  boldSpans++;
  const lineNum = content.slice(0, match.index).split('\n').length;
  if (boldSpans <= 15) {
    console.log(`Line ${lineNum}: Subquestion span uses 18px/20px and bold: "${match[0].trim()}"`);
  }
}
console.log(`Total bold subquestion spans: ${boldSpans}`);

// Check 4: Check if any fontFamily: "var(--font-number)" exists
console.log('\n--- 4. Checking fontFamily: "var(--font-number)" ---');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('fontFamily:') && line.includes('font-number')) {
    console.log(`Line ${i + 1}: "${line.trim()}"`);
  }
}

// Check 5: Check Score totals for each unit
console.log('\n--- 5. Checking Score Totals and 大問 (Multi-Question) structure ---');
// Let's do a basic parse of UnitData
const unitsText = content.split('unitNumber:');
console.log(`Found ${unitsText.length - 1} units in the file.`);

for (let idx = 1; idx < unitsText.length; idx++) {
  const uText = unitsText[idx];
  const unitNumMatch = uText.match(/^\s*(\d+)/);
  const unitNum = unitNumMatch ? unitNumMatch[1] : idx;
  
  // Count point-labels
  const pointsRegex = /\((\d+(?:\.\d+)?)\s*ຄະແນນ|(\d+(?:\.\d+)?)\s*ຄະແນນ\)/g;
  let pointsMatch;
  let basicPoints = 0;
  let challengePoints = 0;
  let summaryPoints = 0;
  
  // We can split uText into basicProblems, challengeProblems, summaryProblems sections
  const basicStart = uText.indexOf('basicProblems:');
  const challengeStart = uText.indexOf('challengeProblems:');
  const summaryStart = uText.indexOf('summaryProblems:');
  const answersStart = uText.indexOf('answers:');
  
  const basicSection = uText.slice(basicStart, challengeStart);
  const challengeSection = uText.slice(challengeStart, summaryStart);
  const summarySection = uText.slice(summaryStart, answersStart);
  
  // Basic problems scores
  let scoreSumBasic = 0;
  const basicScoreRegex = /"(?:ຂໍ້ລະ\s*)?(\d+(?:\.\d+)?)\s*ຄະແນນ/g;
  let bMatch;
  while ((bMatch = basicScoreRegex.exec(basicSection)) !== null) {
    scoreSumBasic += parseFloat(bMatch[1]);
  }
  
  // Challenge problems scores
  let scoreSumChallenge = 0;
  const challengeScoreRegex = /"(?:ຂໍ້ລະ\s*)?(\d+(?:\.\d+)?)\s*ຄະແນນ/g;
  let cMatch;
  while ((cMatch = challengeScoreRegex.exec(challengeSection)) !== null) {
    scoreSumChallenge += parseFloat(cMatch[1]);
  }
  
  // Summary problems scores
  let scoreSumSummary = 0;
  const summaryScoreRegex = /"(?:ຂໍ້ລະ\s*)?(\d+(?:\.\d+)?)\s*ຄະແນນ/g;
  let sMatch;
  while ((sMatch = summaryScoreRegex.exec(summarySection)) !== null) {
    scoreSumSummary += parseFloat(sMatch[1]);
  }
  
  // Let's count number of basicProblems, challengeProblems.problems, summaryProblems
  // Let's count occurrences of "number: 1", "number: 2" etc. in each section
  const countNumberProps = (sectionText) => {
    const numRegex = /number:\s*\d+/g;
    const matches = sectionText.match(numRegex);
    return matches ? matches.length : 0;
  };
  
  const basicDamonCount = countNumberProps(basicSection);
  const challengeDamonCount = countNumberProps(challengeSection);
  const summaryDamonCount = countNumberProps(summarySection);
  
  console.log(`Unit ${unitNum}:`);
  console.log(`  - Basic Problems: ${basicDamonCount} 大問, sum score regex match = ${scoreSumBasic}`);
  console.log(`  - Challenge Problems: ${challengeDamonCount} 大問, sum score regex match = ${scoreSumChallenge}`);
  console.log(`  - Summary Problems: ${summaryDamonCount} 大問, sum score regex match = ${scoreSumSummary}`);
  
  if (basicDamonCount === 1) console.log(`  ⚠️ WARNING: Basic Problems only has 1 大問!`);
  if (challengeDamonCount === 1) console.log(`  ⚠️ WARNING: Challenge Problems only has 1 大問!`);
  if (summaryDamonCount === 1) console.log(`  ⚠️ WARNING: Summary Problems only has 1 大問!`);
}
