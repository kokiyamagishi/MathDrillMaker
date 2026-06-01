const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// We want to shrink Y-axis heights of Page 60 Q1, Page 60 Q2, Page 61 Q1, Page 62 Q1
// Let's change:
// height: "160px" -> height: "120px"
// bottom: `${n * 20 - 10}px` -> bottom: `${n * 15 - 7}px`
// gap: "20px" -> gap: "12px"
// and the bars height: "20px" -> height: "15px"

// Let's run a script that identifies Y-axis container blocks and graph area blocks and performs these replacements.
// Since all these charts use:
// height: "160px" for both Y-axis container and Graph Area container.
// Let's replace:
// height: "160px" with height: "120px"
// bottom: `${n * 20 - 10}px` with bottom: `${n * 15 - 7}px`
// height: "20px" with height: "15px" (for the bar divs inside the charts)

let occurrences = 0;
// We target Unit 15 boundaries (character indices 240000 to 296000)
let chunk = content.substring(240000, 296000);

chunk = chunk.replace(/height:\s*"160px"/g, 'height: "120px"');
chunk = chunk.replace(/bottom:\s*`\$\{n\s*\*\s*20\s*-\s*10\}px`/g, 'bottom: `${n * 15 - 7}px`');
chunk = chunk.replace(/height:\s*"20px"/g, 'height: "15px"');

content = content.substring(0, 240000) + chunk + content.substring(296000);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully shrunk Y-axis heights and bars to 120px/15px.');
