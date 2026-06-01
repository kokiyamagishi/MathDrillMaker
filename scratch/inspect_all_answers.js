const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const units = content.split(/unitNumber:\s*/);

for (let idx = 1; idx < units.length; idx++) {
  const uText = units[idx];
  const unitNum = uText.match(/^(\d+)/)[1];
  
  console.log(`\n=================== Unit ${unitNum} ===================`);
  
  // Extract answers section only
  const answersStart = uText.indexOf('answers:');
  if (answersStart !== -1) {
    const answersBlock = uText.slice(answersStart);
    // Find the end of answers object by bracket counting
    let braceCount = 0;
    let endIdx = -1;
    for (let i = 0; i < answersBlock.length; i++) {
      if (answersBlock[i] === '{') braceCount++;
      else if (answersBlock[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }
    if (endIdx !== -1) {
      console.log(answersBlock.slice(0, endIdx));
    } else {
      console.log(answersBlock.slice(0, 1000));
    }
  } else {
    console.log("No answers section found");
  }
}
