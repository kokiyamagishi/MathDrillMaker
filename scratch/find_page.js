const { unitsData1 } = require('../src/data/units1.tsx');

let currentPage = 2;
unitsData1.forEach((unit) => {
  const kpArray = Array.isArray(unit.keyPoints) ? unit.keyPoints : [unit.keyPoints];
  const kpCount = kpArray.length;
  
  const kpStart = currentPage;
  const kpEnd = currentPage + kpCount - 1;
  
  const basicPage = kpEnd + 1;
  const challengePage = kpEnd + 2;
  const summaryPage = kpEnd + 3;
  
  console.log(`Unit ${unit.unitNumber}: ${unit.unitTitle}`);
  console.log(`  KeyPoints: Page ${kpStart} ~ ${kpEnd}`);
  console.log(`  BasicProblems: Page ${basicPage}`);
  console.log(`  ChallengeProblems: Page ${challengePage}`);
  console.log(`  SummaryProblems: Page ${summaryPage}`);
  
  currentPage = summaryPage + 1;
});
