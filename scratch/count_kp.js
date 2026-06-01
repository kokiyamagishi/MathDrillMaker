const fs = require('fs');
const content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// We need to count exactly how many keypoint objects are in the array of keyPoints in unit 6.
// Let's find 'unitNumber: 6' and find where 'keyPoints: [' starts.
const startIndex = content.indexOf('unitNumber: 6');
const kpStart = content.indexOf('keyPoints: [', startIndex);

// We want to count how many objects { ... } are at the top level of this array.
// Let's count by brace depth or split by some markers.
// A simpler way: let's scan characters starting from kpStart+12 and count how many times we see
// { at depth 1 (relative to the array bracket depth).

let bracketDepth = 0;
let braceDepth = 0;
let objectCount = 0;
let foundBracketsEnd = false;

for (let i = kpStart + 11; i < content.length; i++) {
  const char = content[i];
  if (char === '[') {
    bracketDepth++;
  } else if (char === ']') {
    bracketDepth--;
    if (bracketDepth < 0) {
      foundBracketsEnd = true;
      break;
    }
  } else if (char === '{') {
    if (bracketDepth === 0 && braceDepth === 0) {
      objectCount++;
    }
    braceDepth++;
  } else if (char === '}') {
    braceDepth--;
  }
}

console.log('Exact keypoint objects count in Unit 6:', objectCount);
