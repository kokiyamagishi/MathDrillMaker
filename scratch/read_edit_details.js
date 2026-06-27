const fs = require('fs');

const edits = JSON.parse(fs.readFileSync('/Users/openclaw/Antigravity/MathDrillMaker/scratch/units1_edits.json', 'utf8'));

for (const edit of edits) {
  const fileBasename = edit.file.split('/').pop().replace(/"/g, '');
  const desc = edit.args.Description || edit.args.description || 'No description';
  console.log(`Step ${edit.step} - File: ${fileBasename} - Tool: ${edit.tool} - Desc: ${desc}`);
}
