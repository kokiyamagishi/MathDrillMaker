const fs = require('fs');

// Simple parser to extract blocks
const content = fs.readFileSync('/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units1.tsx', 'utf-8');

// Find all units
const unitMatches = content.match(/unitNumber:\s*(\d+)/g);
console.log("Total units found:", unitMatches.length);

let pageCount = 0;
let pageMapping = [];

// Very hacky parser using string searches for blocks
const unitBlocks = content.split('unitNumber:');
unitBlocks.shift(); // remove everything before first unit

unitBlocks.forEach(block => {
  const numMatch = block.match(/^\s*(\d+)/);
  if (!numMatch) return;
  const unitNum = numMatch[1];
  
  if (block.includes('keyPoints:')) {
    pageCount++;
    pageMapping.push({page: pageCount, type: `Unit ${unitNum} Key Points`});
  }
  
  const bpMatches = block.match(/basicProblems:\s*\[([\s\S]*?)\]\s*,/);
  if (bpMatches) {
    const problems = bpMatches[1].match(/number:\s*\d+/g);
    if (problems) {
      problems.forEach((p, i) => {
        pageCount++;
        pageMapping.push({page: pageCount, type: `Unit ${unitNum} Basic Problem ${i+1}`});
      });
    }
  }
  
  const chMatches = block.match(/challengeProblems:\s*\{[\s\S]*?problems:\s*\[([\s\S]*?)\]/);
  if (chMatches) {
    const problems = chMatches[1].match(/number:\s*\d+/g);
    if (problems) {
      problems.forEach((p, i) => {
        pageCount++;
        pageMapping.push({page: pageCount, type: `Unit ${unitNum} Challenge Problem ${i+1}`});
      });
    }
  }
  
  const sumMatches = block.match(/summaryProblems:\s*\[([\s\S]*?)\]/);
  if (sumMatches) {
    const problems = sumMatches[1].match(/number:\s*\d+/g);
    if (problems) {
      problems.forEach((p, i) => {
        pageCount++;
        pageMapping.push({page: pageCount, type: `Unit ${unitNum} Summary Problem ${i+1}`});
      });
    }
  }
});

const pagesToFind = [4, 5, 8, 9, 12, 13, 16, 17, 45, 49, 50, 53, 59, 60, 61];
pagesToFind.forEach(p => {
  const match = pageMapping.find(m => m.page === p);
  if (match) console.log(`Page ${p} is:`, match.type);
  else console.log(`Page ${p} not found`);
});

