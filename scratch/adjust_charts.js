const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// Replace page 59 (Unit 15 keyPoints) Y-axis offset
content = content.replace(
  'bottom: `${n * 30 - 7}px`',
  'bottom: `${n * 30 - 15}px` // adjusted to align 0 perfectly with the grid corner'
);

// Replace Y-axis offsets in page 60, 61, 62
// Currently: bottom: `${n * 20 - 6}px`
// We will replace all occurrences of this with bottom: `${n * 20 - 10}px` to align Y-axis numbers down perfectly
content = content.replace(
  /bottom:\s*`\$\{n\s*\*\s*20\s*-\s*6\}px`/g,
  'bottom: `${n * 20 - 10}px` // adjusted to align perfectly with the grid corner'
);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully adjusted Y-axis numbers bottom offsets.');
