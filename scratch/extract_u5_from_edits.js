const fs = require('fs');

const allEdits = JSON.parse(fs.readFileSync('scratch/all_edits.json', 'utf8'));
console.log("Total edits:", allEdits.length);

allEdits.forEach((edit, idx) => {
  const editStr = JSON.stringify(edit);
  if (editStr.includes('ການຫານມີເສດ') || editStr.includes('unitNumber: 5') || editStr.includes('Unit 5')) {
    console.log(`Edit #${idx} (Step ${edit.step}, Type: ${edit.type})`);
    console.log(`  Description: ${edit.args.Description || edit.args.Instruction}`);
    
    // Let's write the code block to a file
    let code = edit.args.CodeContent || edit.args.ReplacementContent || '';
    if (!code && edit.args.ReplacementChunks) {
      let chunks = edit.args.ReplacementChunks;
      if (typeof chunks === 'string') {
        try { chunks = JSON.parse(chunks); } catch (e) {}
      }
      if (Array.isArray(chunks)) {
        code = chunks.map(c => c.ReplacementContent || c.replacementContent || '').join('\n---\n');
      } else {
        code = JSON.stringify(chunks);
      }
    }
    
    if (code) {
      console.log("Snippet length:", code.length);
      fs.writeFileSync(`scratch/u5_edit_${idx}.tsx`, code, 'utf8');
      console.log(`  Saved code to scratch/u5_edit_${idx}.tsx`);
    }
  }
});
