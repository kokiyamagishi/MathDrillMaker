const fs = require('fs');
const path = require('path');

// We can search for the units list in units4.tsx by reading it textually and simulating the page allocation logic of DrillBook.tsx
const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Parse number of keyPoints for each unit
const unitKeyPointsLengths = [];
const matches = content.matchAll(/unitNumber:\s*(\d+),[\s\S]*?keyPoints:\s*([\s\S]*?),(?:\s*basicProblems|[\s\S]*?basicProblems)/g);

const units = [];
const lines = content.split('\n');

let currentUnitNum = 0;
let kpCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const unitMatch = line.match(/unitNumber:\s*(\d+),/);
  if (unitMatch) {
    if (currentUnitNum > 0) {
      units.push({ number: currentUnitNum, kpCount });
    }
    currentUnitNum = parseInt(unitMatch[1]);
    kpCount = 1; // Default
  }
  // Check if keyPoints is an array
  if (line.includes('keyPoints: [')) {
    // Count how many objects are inside keyPoints array by searching for '{'
    let count = 0;
    let bracketLevel = 0;
    let inArray = true;
    for (let j = i; j < lines.length; j++) {
      const l = lines[j];
      if (l.includes(']')) {
        break;
      }
      if (l.includes('{') && l.includes('content:')) {
        count++;
      }
    }
    kpCount = count || 1;
  }
}
if (currentUnitNum > 0) {
  units.push({ number: currentUnitNum, kpCount });
}

let currentPage = 2;
console.log('Grade 4 Drill Book Page Mapping:');
for (const u of units) {
  const start = currentPage;
  const numPages = u.kpCount + 3;
  const end = currentPage + numPages - 1;
  currentPage += numPages;
  
  console.log(`Unit ${u.number}: Pages ${start} - ${end} (KP: ${u.kpCount}, Basic: ${start + u.kpCount}, Challenge: ${start + u.kpCount + 1}, Summary: ${start + u.kpCount + 2})`);
}
