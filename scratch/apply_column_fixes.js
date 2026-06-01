const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of 2-column grids (1fr 1fr) with 1-column grids (1fr)
// This applies both inside jsx strings and standard jsx styles
const initialLength = content.length;

content = content.replace(/gridTemplateColumns:\s*["']1fr 1fr["']/g, 'gridTemplateColumns: "1fr"');
content = content.replace(/gridTemplateColumns:\s*\\?["']1fr 1fr\\?["']/g, 'gridTemplateColumns: "1fr"');

// Just in case there are escaped versions like gridTemplateColumns: \"1fr 1fr\"
content = content.replace(/gridTemplateColumns:\s*\\"(1fr\s+)+1fr\\"/g, 'gridTemplateColumns: \\"1fr\\"');

const finalLength = content.length;
console.log(`Replacement completed. Character change: ${initialLength} -> ${finalLength}`);

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully converted all 2-column layouts to 1-column layouts in units4.tsx!");
