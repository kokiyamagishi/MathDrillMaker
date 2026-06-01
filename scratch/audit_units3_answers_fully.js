const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const units = content.split(/unitNumber:\s*/);

function countSubquestions(jsxText) {
  // Find all matches of (1), (2) etc.
  const regex = /\((\d+)\)/g;
  const matches = [];
  let match;
  while ((match = regex.exec(jsxText)) !== null) {
    matches.push(parseInt(match[1]));
  }
  // Count unique numbers to avoid double-counting answers or labels in JSX
  const unique = Array.from(new Set(matches)).sort((a, b) => a - b);
  return unique;
}

for (let idx = 1; idx < units.length; idx++) {
  const uText = units[idx];
  const unitNum = uText.match(/^(\d+)/)[1];
  console.log(`\n=================== Unit ${unitNum} ===================`);
  
  // Extract basicProblems array/block
  const basicStart = uText.indexOf('basicProblems:');
  const challengeStart = uText.indexOf('challengeProblems:');
  const summaryStart = uText.indexOf('summaryProblems:');
  const answersStart = uText.indexOf('answers:');
  
  const basicSection = uText.slice(basicStart, challengeStart !== -1 ? challengeStart : uText.length);
  const challengeSection = challengeStart !== -1 ? uText.slice(challengeStart, summaryStart !== -1 ? summaryStart : uText.length) : '';
  const summarySection = summaryStart !== -1 ? uText.slice(summaryStart, answersStart !== -1 ? answersStart : uText.length) : '';
  const answersSection = answersStart !== -1 ? uText.slice(answersStart) : '';
  
  // Parse basic problems
  console.log('--- basicProblems ---');
  const basicProbBlocks = basicSection.split(/number:\s*/).slice(1);
  basicProbBlocks.forEach((block, bIdx) => {
    const num = block.match(/^(\d+|"[^"]+")/)[1];
    const subquestions = countSubquestions(block);
    console.log(`  Problem ${num}: subquestions found:`, subquestions);
  });
  
  // Parse challenge problems
  if (challengeSection) {
    console.log('--- challengeProblems ---');
    const challengeProbBlocks = challengeSection.split(/number:\s*/).slice(1);
    challengeProbBlocks.forEach((block, cIdx) => {
      const num = block.match(/^(\d+|"[^"]+")/)[1];
      const subquestions = countSubquestions(block);
      console.log(`  Problem ${num}: subquestions found:`, subquestions);
    });
  }
  
  // Parse summary problems
  if (summarySection) {
    console.log('--- summaryProblems ---');
    const summaryProbBlocks = summarySection.split(/number:\s*/).slice(1);
    summaryProbBlocks.forEach((block, sIdx) => {
      const num = block.match(/^(\d+|"[^"]+")/)[1];
      const subquestions = countSubquestions(block);
      console.log(`  Problem ${num}: subquestions found:`, subquestions);
    });
  }
  
  // Parse answers
  if (answersSection) {
    console.log('--- answers.items ---');
    // Find all questionNumber: ... answers: [ ... ]
    const itemRegex = /questionNumber:\s*([^,]+),\s*answers:\s*\[([\s\S]*?)\]/g;
    let match;
    while ((match = itemRegex.exec(answersSection)) !== null) {
      const qNum = match[1].trim();
      const ansLines = match[2].trim();
      console.log(`  questionNumber: ${qNum}`);
      console.log(`  answers content: ${ansLines}`);
    }
  }
}
