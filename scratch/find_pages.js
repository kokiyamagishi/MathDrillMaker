const fs = require('fs');
const content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// We need to trace pages of units3.tsx
// Cover Page is Page 1
// Each unit page count: kpArray.length + 3
// kpArray is the array of keyPoints
// Let's parse unit structures using simple regex or javascript scanning
// We'll output: Unit Number, Start Page, End Page, and its titles

let currentUnitPage = 2;
const units = [];

// A simple regex to find unitNumber, unitTitle, keyPoints, etc.
// But wait, we can also count how many keyPoints objects or keyPoints arrays there are.
// Let's find "unitNumber: X" and "keyPoints:" blocks.

const lines = content.split('\n');
let currentUnit = null;
let kpCount = 0;
let inKeyPoints = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const unitMatch = line.match(/unitNumber:\s*(\d+)/);
  if (unitMatch) {
    if (currentUnit) {
      currentUnit.kpCount = kpCount;
      currentUnit.endPage = currentUnitPage + kpCount + 3 - 1;
      units.push(currentUnit);
      currentUnitPage += kpCount + 3;
    }
    currentUnit = {
      unitNumber: parseInt(unitMatch[1], 10),
      startPage: currentUnitPage,
      title: ''
    };
    kpCount = 0;
  }
  const titleMatch = line.match(/unitTitle:\s*\"([^\"]+)\"/);
  if (titleMatch && currentUnit && !currentUnit.title) {
    currentUnit.title = titleMatch[1];
  }
  
  // Count keyPoints
  // keyPoints: { or keyPoints: [
  if (line.includes('keyPoints:')) {
    if (line.includes('[')) {
      inKeyPoints = true;
      kpCount = 0;
    } else {
      kpCount = 1; // single keyPoint
    }
  }
  if (inKeyPoints) {
    if (line.includes('{')) {
      kpCount++;
    }
    if (line.includes(']')) {
      inKeyPoints = false;
    }
  }
}

if (currentUnit) {
  currentUnit.kpCount = kpCount;
  currentUnit.endPage = currentUnitPage + kpCount + 3 - 1;
  units.push(currentUnit);
}

units.forEach(u => {
  console.log(`Unit ${u.unitNumber}: Page ${u.startPage} to Page ${u.endPage} (${u.title}) (KP count: ${u.kpCount})`);
  // BasicProblems is u.startPage + u.kpCount
  // ChallengeProblems is u.startPage + u.kpCount + 1
  // UnitSummary is u.startPage + u.kpCount + 2
  console.log(`  - KeyPoints: Page ${u.startPage}${u.kpCount > 1 ? ' - ' + (u.startPage + u.kpCount - 1) : ''}`);
  console.log(`  - BasicProblems: Page ${u.startPage + u.kpCount}`);
  console.log(`  - ChallengeProblems: Page ${u.startPage + u.kpCount + 1}`);
  console.log(`  - UnitSummary: Page ${u.startPage + u.kpCount + 2}`);
});
