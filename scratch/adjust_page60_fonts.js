const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// 1. Font changes for Page 60 Q1 (around character offsets 241000 to 249000):
// X-axis labels font size: currently 14px.
// Questions font size: currently 18px.
// Let's change these fonts to be compact (around 16px).
// Specifically, in the Q1 area:
// Let's replace 'fontSize: "14px"' for X-axis labels to 'fontSize: "12px"'
// Let's replace 'fontSize: "18px"' for questions to 'fontSize: "16px"'.

let chunk = content.substring(241000, 249000);
chunk = chunk.replace(/fontSize:\s*"14px"/g, 'fontSize: "12px"');
chunk = chunk.replace(/fontSize:\s*"18px"/g, 'fontSize: "16px"');

content = content.substring(0, 241000) + chunk + content.substring(249000);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully set Page 60 Q1 graph labels and question fonts to compact sizes.');
