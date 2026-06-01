const fs = require('fs');
const content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// Let's find all unit page boundaries accurately using the actual keyPoints array counts.
// Cover page: page 1
// Unit 1 starts at page 2
// For each unit:
// if keyPoints is array, count = keyPoints.length. If it's an object, count = 1.
// Since we don't want to parse everything in JS, let's write a script that does a very clean parsing of keyPoints for each unit in units3.tsx.

// We will find all 'unitNumber: X' and identify keyPoints start and end.
const units = [];
const matches = [...content.matchAll(/unitNumber:\s*(\d+)/g)];

for (let idx = 0; idx < matches.length; idx++) {
  const match = matches[idx];
  const unitNum = parseInt(match[1], 10);
  const startPos = match.index;
  const nextPos = idx + 1 < matches.length ? matches[idx + 1].index : content.length;
  const unitChunk = content.substring(startPos, nextPos);
  
  // Find keyPoints
  const kpIndex = unitChunk.indexOf('keyPoints:');
  let kpCount = 1;
  if (kpIndex !== -1) {
    const remaining = unitChunk.substring(kpIndex + 9).trim();
    if (remaining.startsWith('[')) {
      // It is an array of keyPoints! Let's count how many objects are in this array
      let bracketDepth = 0;
      let braceDepth = 0;
      let count = 0;
      for (let i = 0; i < remaining.length; i++) {
        const char = remaining[i];
        if (char === '[') {
          bracketDepth++;
        } else if (char === ']') {
          bracketDepth--;
          if (bracketDepth === 0) break;
        } else if (char === '{') {
          if (bracketDepth === 1 && braceDepth === 0) {
            count++;
          }
          braceDepth++;
        } else if (char === '}') {
          braceDepth--;
        }
      }
      kpCount = count;
    }
  }
  units.push({ unitNumber: unitNum, kpCount });
}

let currentPage = 2;
units.forEach(u => {
  const start = currentPage;
  const end = currentPage + u.kpCount + 3 - 1;
  u.startPage = start;
  u.endPage = end;
  u.basicProblems = start + u.kpCount;
  u.challengeProblems = start + u.kpCount + 1;
  u.summaryProblems = start + u.kpCount + 2;
  currentPage += u.kpCount + 3;
});

units.forEach(u => {
  console.log(`Unit ${u.unitNumber}: Page ${u.startPage} to Page ${u.endPage}`);
  console.log(`  - KeyPoints: Page ${u.startPage} - ${u.startPage + u.kpCount - 1}`);
  console.log(`  - BasicProblems: Page ${u.basicProblems}`);
  console.log(`  - ChallengeProblems: Page ${u.challengeProblems}`);
  console.log(`  - UnitSummary: Page ${u.summaryProblems}`);
});
