const fs = require('fs');

const allEdits = JSON.parse(fs.readFileSync('scratch/all_edits.json', 'utf8'));

// Filter out edits that are actually our search script writes
const realEdits = allEdits.filter(e => !e.args.Description.includes("ログ") && !e.args.Description.includes("task list"));

console.log("Total real edits:", realEdits.length);

// Let's print the last 3 real edits
const lastThree = realEdits.slice(-3);
lastThree.forEach((edit, idx) => {
  console.log(`\n========================================`);
  console.log(`Real Edit #${idx + 1} (Step ${edit.step}, Type: ${edit.type})`);
  console.log(`Time: ${edit.time}`);
  console.log(`Description: ${edit.args.Description}`);
  console.log(`Instruction: ${edit.args.Instruction}`);
  if (edit.type === 'replace_file_content') {
    console.log(`StartLine: ${edit.args.StartLine}, EndLine: ${edit.args.EndLine}`);
    console.log(`TargetContent:`);
    console.log(edit.args.TargetContent);
    console.log(`----------------------------------------`);
    console.log(`ReplacementContent:`);
    console.log(edit.args.ReplacementContent);
  } else {
    console.log(`TargetFile: ${edit.args.TargetFile}`);
  }
});
