const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// Replace all occurrences of bottom: `${n * 20 - 10}px` // adjusted to align perfectly... without comma
// to put comma before comment!

content = content.replace(
  /bottom:\s*`\$\{n\s*\*\s*20\s*-\s*10\}px` \/\/ adjusted to align perfectly with the grid corner/g,
  'bottom: `${n * 20 - 10}px` // adjusted to align perfectly with the grid corner'
);

// Actually, in the file view, they are literally written as:
// bottom: `${n * 20 - 10}px` // adjusted to align perfectly with the grid corner,
// Wait, the comma was placed AFTER the comment! This is why it errored!
// Let's replace the whole blocks to be completely safe and syntactically clean!

content = content.replace(
  /bottom:\s*`\$\{n\s*\*\s*20\s*-\s*10\}px`\s*\/\/ adjusted to align perfectly with the grid corner,/g,
  'bottom: `${n * 20 - 10}px`, // adjusted to align perfectly with the grid corner'
);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Fixed Y-axis offset comments syntax.');
