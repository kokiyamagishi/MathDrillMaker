const fs = require('fs');
const edits = JSON.parse(fs.readFileSync('/Users/openclaw/Antigravity/MathDrillMaker/scratch/units1_edits.json', 'utf8'));
const step625 = edits.find(e => e.step === 625);
console.log(JSON.stringify(step625, null, 2));
