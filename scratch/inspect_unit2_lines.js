const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

for (let i = 890; i <= 960; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
