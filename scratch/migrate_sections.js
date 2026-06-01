const fs = require('fs');
const path = require('path');

function findMatchingBracket(str, startIndex, openChar, closeChar) {
  let depth = 0;
  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === openChar) {
      depth++;
    } else if (str[i] === closeChar) {
      depth--;
      if (depth === 0) {
        return i;
      }
    }
  }
  return -1;
}

function extractArrayBodyByMarkers(str, arrayName, nextFieldName) {
  const startPattern = arrayName + ': [';
  const startIndex = str.indexOf(startPattern);
  if (startIndex === -1) return null;
  const startBracketIndex = startIndex + startPattern.length - 1; // index of '['
  
  const endIndex = str.indexOf(nextFieldName, startBracketIndex);
  if (endIndex === -1) return null;
  
  const lastCloseBracket = str.lastIndexOf(']', endIndex);
  if (lastCloseBracket === -1 || lastCloseBracket < startBracketIndex) return null;
  
  return {
    start: startIndex,
    end: lastCloseBracket + 1,
    body: str.slice(startBracketIndex + 1, lastCloseBracket)
  };
}

function extractObjects(arrayBody) {
  const objects = [];
  let i = 0;
  while (i < arrayBody.length) {
    const nextBrace = arrayBody.indexOf('{', i);
    if (nextBrace === -1) break;
    const endBrace = findMatchingBracket(arrayBody, nextBrace, '{', '}');
    if (endBrace === -1) break;
    objects.push(arrayBody.slice(nextBrace, endBrace + 1));
    i = endBrace + 1;
  }
  return objects;
}

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already migrated
  if (content.includes('subSections: [')) {
    console.log(`Already migrated: ${path.basename(filePath)}`);
    return true;
  }
  
  const kpInfo = extractArrayBodyByMarkers(content, 'keyPoints', 'basicProblems:');
  const bpInfo = extractArrayBodyByMarkers(content, 'basicProblems', 'challengeProblems:');
  
  if (!kpInfo || !bpInfo) {
    console.warn(`Skipping ${path.basename(filePath)}: keyPoints or basicProblems not found with markers`);
    return false;
  }
  
  const keyPoints = extractObjects(kpInfo.body);
  const basicProblems = extractObjects(bpInfo.body);
  
  const subSections = [];
  const maxLen = Math.max(keyPoints.length, basicProblems.length);
  
  for (let i = 0; i < maxLen; i++) {
    const kp = keyPoints[i] || null;
    const bp = basicProblems[i] || null;
    
    let title = null;
    if (kp) {
      const titleMatch = kp.match(/title:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/);
      if (titleMatch) {
        title = titleMatch[1];
      }
    }
    
    if (!title) {
      title = `"${i + 1}. ບົດຮຽນພື້ນຖານ"`;
    }
    
    // If keypoint is missing, provide a valid fallback with content to satisfy TypeScript type constraints
    const keyPointBlock = kp || `{ content: <span /> }`;
    
    const subStr = `{\n      title: ${title},\n      keyPoint: ${keyPointBlock},\n      problems: [\n        ${bp ? bp : ''}\n      ]\n    }`;
    subSections.push(subStr);
  }
  
  const subSectionsArrayStr = `subSections: [\n    ${subSections.join(',\n    ')}\n  ]`;
  
  const firstStart = Math.min(kpInfo.start, bpInfo.start);
  const lastEnd = Math.max(kpInfo.end, bpInfo.end);
  
  const beforeRange = content.slice(0, firstStart);
  const afterRange = content.slice(lastEnd);
  
  let newContent = beforeRange + subSectionsArrayStr + afterRange;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Successfully migrated: ${path.basename(filePath)}`);
  return true;
}

const dirs = [
  '/Users/openclaw/Antigravity/MathDrillMaker/src/data/secondary1',
  '/Users/openclaw/Antigravity/MathDrillMaker/src/data/secondary4'
];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  files.forEach(file => {
    migrateFile(path.join(dir, file));
  });
});

console.log("Migration complete with fallback keypoints!");
