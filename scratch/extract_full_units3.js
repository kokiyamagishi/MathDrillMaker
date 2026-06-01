const fs = require('fs');

const allEdits = JSON.parse(fs.readFileSync('scratch/all_edits.json', 'utf8'));
console.log("Total edits:", allEdits.length);

let maxLen = 0;
let bestEdit = null;
let bestIdx = -1;

allEdits.forEach((edit, idx) => {
  const args = edit.args || {};
  const isWrite = edit.type === 'write_to_file';
  const target = args.TargetFile || '';
  if (isWrite && target.includes('units3.tsx')) {
    const code = args.CodeContent || '';
    if (code.length > maxLen && code.includes('unitNumber: 5')) {
      maxLen = code.length;
      bestEdit = edit;
      bestIdx = idx;
    }
  }
});

if (bestEdit) {
  console.log(`Found best write_to_file at Edit #${bestIdx} (Step ${bestEdit.step})`);
  console.log(`  Length: ${maxLen}`);
  console.log(`  Description: ${bestEdit.args.Description}`);
  fs.writeFileSync('scratch/full_units3_recovered.tsx', bestEdit.args.CodeContent, 'utf8');
  console.log("  Saved recovered file to scratch/full_units3_recovered.tsx");
} else {
  console.log("No write_to_file found with unitNumber: 5");
  
  // Try searching in all edits (not just write_to_file)
  let maxLenAny = 0;
  let bestEditAny = null;
  let bestIdxAny = -1;
  allEdits.forEach((edit, idx) => {
    const args = edit.args || {};
    const code = args.CodeContent || args.ReplacementContent || '';
    if (code.length > maxLenAny && code.includes('unitNumber: 5')) {
      maxLenAny = code.length;
      bestEditAny = edit;
      bestIdxAny = idx;
    }
  });
  if (bestEditAny) {
    console.log(`Found best any edit at Edit #${bestIdxAny} (Step ${bestEditAny.step})`);
    console.log(`  Length: ${maxLenAny}`);
    console.log(`  Type: ${bestEditAny.type}`);
    console.log(`  Description: ${bestEditAny.args.Description}`);
    fs.writeFileSync('scratch/any_units3_recovered.tsx', bestEditAny.args.CodeContent || bestEditAny.args.ReplacementContent, 'utf8');
  }
}
