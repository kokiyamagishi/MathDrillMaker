const fs = require('fs');
const path = require('path');

// Read add_units_11_13.js and add_units_14_17.js
const file11_13 = path.join(__dirname, '../add_units_11_13.js');
const file14_17 = path.join(__dirname, '../add_units_14_17.js');

function extractUnitsString(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Find `const units = \`` up to the closing `\`;`
  const startKey = 'const units = `';
  const startIdx = content.indexOf(startKey);
  if (startIdx === -1) {
    throw new Error(`Could not find units start in ${filePath}`);
  }
  
  // Find closing backtick
  const endIdx = content.indexOf('`;', startIdx + startKey.length);
  if (endIdx === -1) {
    throw new Error(`Could not find units end in ${filePath}`);
  }
  
  return content.substring(startIdx + startKey.length, endIdx);
}

const units11_13_raw = extractUnitsString(file11_13);
const units14_17_raw = extractUnitsString(file14_17);

// Combine them into a single string of units
// Prepend and append braces/brackets to make it parse-friendly
let combinedUnits = units11_13_raw + ',\n' + units14_17_raw;

// We will parse the combined units block by block.
// Each block starts with a unitNumber definition.
// Let's find each unit block by finding the boundary index.
const boundaries = [];
const boundaryRegex = /\{\r?\n\s+unitNumber:\s+(11|12|13|14|15|16|17),/g;
let match;
while ((match = boundaryRegex.exec(combinedUnits)) !== null) {
  boundaries.push({
    index: match.index,
    unitNumber: parseInt(match[1])
  });
}

const unitsTextList = [];
for (let i = 0; i < boundaries.length; i++) {
  const start = boundaries[i].index;
  const end = (i < boundaries.length - 1) ? boundaries[i + 1].index : combinedUnits.length;
  let blockText = combinedUnits.substring(start, end).trim();
  if (blockText.endsWith(',')) {
    blockText = blockText.substring(0, blockText.length - 1).trim();
  }
  unitsTextList.push({
    unitNumber: boundaries[i].unitNumber,
    text: blockText
  });
}

console.log(`Extracted ${unitsTextList.length} unit blocks.`);

// Now let's transform each block to match UnitData structure perfectly.
const processedBlocks = unitsTextList.map(({ unitNumber, text }) => {
  console.log(`Formatting Unit ${unitNumber}...`);
  
  let newText = text;

  // 1. Convert challengeProblems array to object
  // input: challengeProblems: [ ... ]
  // output: challengeProblems: { problems: [ ... ], hintIndex: 0, hintText: "..." }
  const challengeStartKey = 'challengeProblems: [';
  const challengeStartIndex = newText.indexOf(challengeStartKey);
  if (challengeStartIndex !== -1) {
    // Find the end of this array (matching bracket `]`)
    let bracketCount = 1;
    let i = challengeStartIndex + challengeStartKey.length;
    while (bracketCount > 0 && i < newText.length) {
      if (newText[i] === '[') bracketCount++;
      else if (newText[i] === ']') bracketCount--;
      i++;
    }
    const challengeEndIndex = i;
    
    // Extracted problems content (without the outer brackets)
    const arrayContent = newText.substring(challengeStartIndex + challengeStartKey.length, challengeEndIndex - 1);
    
    const newChallengeBlock = `challengeProblems: {
      problems: [
        ${arrayContent.trim()}
      ],
      hintIndex: 0,
      hintText: "ກວດເບິ່ງບົດຮຽນຄືນເພື່ອຄວາມໝັ້ນໃຈເດີ!"
    }`;
    
    newText = newText.substring(0, challengeStartIndex) + newChallengeBlock + newText.substring(challengeEndIndex);
  } else {
    console.warn(`Warning: challengeProblems not found in Unit ${unitNumber}`);
  }

  // 2. Convert answers object
  // input:
  // answers: {
  //   keyPoints: [],
  //   basic: [ ... ],
  //   challenge: [ ... ],
  //   summary: [ ... ],
  //   advice: "..."
  // }
  //
  // output:
  // answers: {
  //   items: [
  //     { questionNumber: 1, answers: [ ... ] },
  //     { questionNumber: "ທ້າທາຍ 1", answers: [ ... ] },
  //     { questionNumber: "ທົດສອບປະຈຳບົດ 1", answers: [ ... ] }
  //   ],
  //   advice: "..."
  // }
  const answersStartKey = 'answers: {';
  const answersStartIndex = newText.indexOf(answersStartKey);
  if (answersStartIndex !== -1) {
    let braceCount = 1;
    let i = answersStartIndex + answersStartKey.length;
    while (braceCount > 0 && i < newText.length) {
      if (newText[i] === '{') braceCount++;
      else if (newText[i] === '}') braceCount--;
      i++;
    }
    const answersEndIndex = i;
    const answersContent = newText.substring(answersStartIndex + answersStartKey.length, answersEndIndex - 1);
    
    function extractSection(sectionName) {
      const key = `${sectionName}: [`;
      const start = answersContent.indexOf(key);
      if (start === -1) return null;
      let count = 1;
      let idx = start + key.length;
      while (count > 0 && idx < answersContent.length) {
        if (answersContent[idx] === '[') count++;
        else if (answersContent[idx] === ']') count--;
        idx++;
      }
      return answersContent.substring(start + key.length, idx - 1).trim();
    }
    
    const basicContent = extractSection('basic');
    const challengeContent = extractSection('challenge');
    const summaryContent = extractSection('summary');
    
    const adviceMatch = answersContent.match(/advice:\s*("[\s\S]*?"|<[\s\S]*?>)/);
    const adviceText = adviceMatch ? adviceMatch[1] : '"ພະຍາຍາມຕໍ່ໄປເດີ!"';
    
    const items = [];
    if (basicContent) {
      // Clean questionNumber if it's "ຂໍ້ 1" or keep it, let's keep the objects as they are
      // E.g. basicContent has `{ questionNumber: "ຂໍ້ 1", answers: [...] }`
      // We can directly place them in items list
      items.push(basicContent);
    }
    if (challengeContent) {
      items.push(challengeContent);
    }
    if (summaryContent) {
      items.push(summaryContent);
    }
    
    const newAnswersBlock = `answers: {
      items: [
        ${items.join(',\n        ')}
      ],
      advice: ${adviceText}
    }`;
    
    newText = newText.substring(0, answersStartIndex) + newAnswersBlock + newText.substring(answersEndIndex);
  } else {
    console.warn(`Warning: answers not found in Unit ${unitNumber}`);
  }

  return newText;
});

// Join all transformed blocks back
const finalUnitsText = ',\n  ' + processedBlocks.join(',\n\n  ');

// Read the clean units3.tsx file
const units3File = path.join(__dirname, '../src/data/units3.tsx');
let units3Content = fs.readFileSync(units3File, 'utf8');

// Ensure Shape is in the imports of units3.tsx
if (!units3Content.includes('Shape') && units3Content.includes('import {')) {
  // Let's modify the illustrations import line to include Shape
  units3Content = units3Content.replace(
    /import\s+\{\s*([\s\S]*?)\s*\}\s*from\s*"@\/components\/illustrations";/,
    (match, p1) => {
      const imports = p1.split(',').map(s => s.trim());
      if (!imports.includes('Shape')) {
        imports.push('Shape');
      }
      return `import { ${imports.join(', ')} } from "@/components/illustrations";`;
    }
  );
}

// Write the fixed units to the end of units3.tsx array
const lastIndex = units3Content.lastIndexOf('];');
if (lastIndex !== -1) {
  units3Content = units3Content.substring(0, lastIndex) + finalUnitsText + '\n];';
  fs.writeFileSync(units3File, units3Content, 'utf8');
  console.log("Successfully appended all corrected Units 11-17 to units3.tsx!");
} else {
  console.error("Could not find end of unitsData3 array.");
}
