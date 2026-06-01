const fs = require('fs');
const files = ['units1.tsx', 'units2.tsx', 'units3.tsx', 'units4.tsx', 'units5.tsx'];
for (const file of files) {
  let content = fs.readFileSync(`src/data/${file}`, 'utf8');
  let originalContent = content;
  let idx = 0;
  while ((idx = content.indexOf('keyPoints:', idx)) !== -1) {
    let startIdxObj = content.indexOf('{', idx);
    let startIdxArr = content.indexOf('[', idx);
    let startIdx = -1;
    let openChar = '', closeChar = '';
    
    // find whichever comes first
    // But we must only look between `keyPoints:` and the next line!
    // Actually, `keyPoints: {` or `keyPoints: [`
    // Let's just find the first '{' or '[' after idx within say 20 chars
    let substr = content.substring(idx, idx + 50);
    let objIdx = substr.indexOf('{');
    let arrIdx = substr.indexOf('[');
    if (objIdx !== -1 && (arrIdx === -1 || objIdx < arrIdx)) {
        startIdx = idx + objIdx; openChar = '{'; closeChar = '}';
    } else if (arrIdx !== -1) {
        startIdx = idx + arrIdx; openChar = '['; closeChar = ']';
    }

    if (startIdx === -1) {
      idx += 10;
      continue;
    }

    let openCount = 0;
    let endIdx = -1;
    for (let i = startIdx; i < content.length; i++) {
      if (content[i] === openChar) openCount++;
      if (content[i] === closeChar) openCount--;
      if (openCount === 0) {
        endIdx = i;
        break;
      }
    }
    if (endIdx !== -1) {
      let keyPointsContent = content.substring(startIdx, endIdx + 1);
      keyPointsContent = keyPointsContent.replace(/fontSize:\s*["'](?:1[0-9]|20)px["']/g, 'fontSize: "22px"');
      content = content.substring(0, startIdx) + keyPointsContent + content.substring(endIdx + 1);
      idx = endIdx + 1;
    } else {
      idx += 10;
    }
  }

  content = content.replace(/gap:\s*["']24px["']/g, 'gap: "16px"');
  content = content.replace(/gap:\s*["']32px["']/g, 'gap: "20px"');
  content = content.replace(/margin:\s*["']24px 0["']/g, 'margin: "12px 0"');
  content = content.replace(/gridTemplateColumns:\s*["']repeat\(2, 1fr\)["'],\s*gap:\s*["']16px["'],\s*paddingLeft:\s*["']16px["']/g, 'gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", paddingLeft: "4px"');

  if (originalContent !== content) {
    fs.writeFileSync(`src/data/${file}`, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
