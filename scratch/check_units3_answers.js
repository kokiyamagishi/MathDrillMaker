const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find all units
const units = content.split(/unitNumber:\s*/);
console.log(`Found ${units.length - 1} units`);

for (let idx = 1; idx < units.length; idx++) {
  const uText = units[idx];
  const unitNum = uText.match(/^(\d+)/)[1];
  console.log(`\n=================== Unit ${unitNum} ===================`);
  
  // Find basicProblems list of numbers
  const basicSection = uText.split('challengeProblems:')[0];
  const basicNumbers = [];
  const basicNumRegex = /number:\s*(\d+)/g;
  let match;
  while ((match = basicNumRegex.exec(basicSection)) !== null) {
    basicNumbers.push(parseInt(match[1]));
  }
  
  // Find answers items
  const answersSectionMatch = uText.match(/answers:\s*\{([\s\S]*?)\n\s*\}/);
  if (answersSectionMatch) {
    const answersItemsText = answersSectionMatch[1];
    console.log(`Basic Numbers:`, basicNumbers);
    console.log(`Answers items text:\n${answersItemsText.trim()}`);
  } else {
    console.log(`No answers block found`);
  }
}
