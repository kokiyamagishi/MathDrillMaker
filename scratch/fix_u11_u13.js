const fs = require('fs');
const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/add_units_11_13.js';
let content = fs.readFileSync(filePath, 'utf8');

// '\n\\`;\n\nconst file = \'src/data/units3.tsx\';' を '\n`;\n\nconst file = \'src/data/units3.tsx\';' に置換
const target = '\n\\`;\n\nconst file = \'src/data/units3.tsx\';';
const replacement = '\n`;\n\nconst file = \'src/data/units3.tsx\';';

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully fixed add_units_11_13.js');
} else {
  console.error('Target string not found in add_units_11_13.js');
}
