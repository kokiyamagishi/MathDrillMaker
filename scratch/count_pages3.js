const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/units3.tsx'), 'utf-8');

const unitBlocks = content.split('unitNumber:');
unitBlocks.shift(); // remove everything before first unit

let pageCount = 0;
let pageMapping = [];

unitBlocks.forEach(block => {
  const numMatch = block.match(/^\s*(\d+)/);
  if (!numMatch) return;
  const unitNum = numMatch[1];
  
  if (block.includes('keyPoints:')) {
    pageCount++;
    pageMapping.push({page: pageCount, type: `Unit ${unitNum} Key Points`, block});
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

console.log("Total mapped pages:", pageCount);
const pagesToFind = [39, 48, 49, 50];
pagesToFind.forEach(p => {
  const match = pageMapping.find(m => m.page === p);
  if (match) {
    console.log(`Page ${p} is:`, match.type);
  } else {
    console.log(`Page ${p} not found`);
  }
});
