const fs = require('fs');
const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const regex = /<span\s+style=\{\{([^}]+)\}\}>\s*({?["']\(\d+\)["']}?|{?item\.[a-zA-Z]+}?)/g;
let match;
const seen = new Set();
while ((match = regex.exec(content)) !== null) {
  seen.add(match[1].trim());
}

console.log('Unique span styles found on subquestion labels:');
seen.forEach(style => console.log(`- ${style}`));
