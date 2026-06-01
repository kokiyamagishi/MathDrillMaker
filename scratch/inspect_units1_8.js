const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Parse the file. We can split by unitNumber:
const parts = content.split(/unitNumber:\s*/g);

for (let i = 1; i <= 8; i++) {
  const part = parts.find(p => p.trim().startsWith(String(i)));
  if (!part) continue;

  console.log(`\n======================================================`);
  console.log(`UNIT ${i} DETAILS:`);
  console.log(`======================================================`);

  // Print all point-labels
  console.log('--- Point Labels found in code:');
  const labelMatches = part.match(/"[^"]*ຄະແນນ[^"]*"/g) || [];
  labelMatches.forEach(m => console.log('  ', m));

  // Count subquestions in basicProblems and summaryProblems
  // Let's count occurrences of (1), (2), (3) etc.
  const basicSection = part.substring(0, part.indexOf('answers:'));
  const subQRegex = /\((\d+)\)/g;
  let subQCount = 0;
  let m;
  while ((m = subQRegex.exec(basicSection)) !== null) {
    subQCount++;
  }
  console.log(`--- Total subquestions: ${subQCount}`);

  // Let's print the keyPoints section of Unit 1 and Unit 2 fully
  if (i === 1 || i === 2) {
    console.log('--- KeyPoints Content:');
    const keyPointsStart = part.indexOf('keyPoints:');
    if (keyPointsStart !== -1) {
      let bracketCount = 0;
      let index = keyPointsStart;
      let kpText = '';
      while (index < part.length) {
        const char = part[index];
        kpText += char;
        if (char === '[') bracketCount++;
        else if (char === '{') bracketCount++;
        else if (char === ']') bracketCount--;
        else if (char === '}') bracketCount--;
        if (bracketCount === 0 && index > keyPointsStart + 15) {
          break;
        }
        index++;
      }
      console.log(kpText);
    }
  } else {
    // For 3-8, print keyPoints definition structure
    console.log('--- KeyPoints (summarized):');
    const kpIndex = part.indexOf('keyPoints:');
    if (kpIndex !== -1) {
      console.log(part.substring(kpIndex, kpIndex + 300) + '...');
    }
  }
}
