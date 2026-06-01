const fs = require('fs');
const path = require('path');

const files = [
  'src/data/units1.tsx',
  'src/data/units2.tsx',
  'src/data/units3.tsx',
  'src/data/units4.tsx',
  'src/data/units5.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Fix font sizes in keyPoints.
  // We'll split the content by `keyPoints:` and `basicProblems:`, and do replacement inside.
  const parts = content.split('keyPoints: {');
  let newContent = parts[0];
  
  for (let i = 1; i < parts.length; i++) {
    const nextSplit = parts[i].split('basicProblems:');
    let keyPointsContent = nextSplit[0];
    
    // Replace fontSize: "14px", "16px", "18px", "20px" with "22px" inside keyPoints
    keyPointsContent = keyPointsContent.replace(/fontSize:\s*["'](?:1[0-9]|20)px["']/g, 'fontSize: "22px"');
    
    newContent += 'keyPoints: {' + keyPointsContent + 'basicProblems:' + nextSplit.slice(1).join('basicProblems:');
  }
  content = newContent;

  // 2. Fix specific layout issues in units2.tsx
  if (file.includes('units2.tsx')) {
    // Page 3 (Unit 1 challengeProblems) gap and margin reduction
    content = content.replace(
      /<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>\s*<div style={{ width: "80%" }}>\s*<AnimalTable/g,
      '<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>\n                <div style={{ width: "80%" }}>\n                  <AnimalTable'
    );
    // Page 5 (Unit 2 keyPoints) tight layout
    content = content.replace(
      /gap: "32px", margin: "24px 0", fontSize: "22px"/g,
      'gap: "16px", margin: "12px 0", fontSize: "22px"' // updated fontSize to 22px since step 1 changed it
    );
    // Page 19 (Unit 5 challengeProblems Q2) right cutoff fix
    // <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", paddingLeft: "16px" }}>
    content = content.replace(
      /<div style={{ display: "grid", gridTemplateColumns: "repeat\(2, 1fr\)", gap: "16px", paddingLeft: "16px" }}>/g,
      '<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", paddingLeft: "0px" }}>'
    );
    content = content.replace(
      /<div style={{ display: "grid", gridTemplateColumns: "repeat\(2, 1fr\)", gap: "16px", marginTop: "8px", fontSize: "16px" }}>/g,
      '<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", marginTop: "8px", fontSize: "16px" }}>'
    );
  }

  // 3. Global layout safety fixes for all files
  // Reduce overly large gaps and margins that cause vertical cutoffs
  content = content.replace(/gap:\s*["']24px["']/g, 'gap: "16px"');
  content = content.replace(/gap:\s*["']32px["']/g, 'gap: "20px"');
  content = content.replace(/margin:\s*["']24px 0["']/g, 'margin: "12px 0"');
  // Reduce excessive paddingLeft in grids that cause horizontal cutoffs
  content = content.replace(/gridTemplateColumns:\s*["']repeat\(2, 1fr\)["'],\s*gap:\s*["']16px["'],\s*paddingLeft:\s*["']16px["']/g, 'gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", paddingLeft: "4px"');

  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
