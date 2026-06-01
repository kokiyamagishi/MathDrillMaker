const fs = require('fs');

function findFullEdits() {
  const logFile = '/Users/kokiyamagishi/.gemini/antigravity-ide/brain/684d285b-2aa8-4225-a91d-3cef6474aaaa/.system_generated/logs/transcript.jsonl';
  const data = fs.readFileSync(logFile, 'utf8');
  const lines = data.split('\n');
  
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) continue;
    try {
      const obj = JSON.parse(lines[i]);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          // If the tool is write_to_file or replace_file_content or multi_replace_file_content
          if (tc.name === 'write_to_file' || tc.name === 'replace_file_content' || tc.name === 'multi_replace_file_content') {
            const args = tc.args || {};
            const code = args.CodeContent || args.ReplacementContent || '';
            const target = args.TargetFile || '';
            
            // Check if it edits units3.tsx and contains unitNumber: 4 or similar
            if (target.includes('units3.tsx') || JSON.stringify(args).includes('units3.tsx')) {
              const argStr = JSON.stringify(args);
              if (argStr.includes('unitNumber: 4') || argStr.includes('ວົງມົນ')) {
                count++;
                fs.writeFileSync(`scratch/full_edit_${count}_args.json`, JSON.stringify(args, null, 2), 'utf8');
                console.log(`Saved scratch/full_edit_${count}_args.json (tool: ${tc.name}, step: ${obj.step_index}, line: ${i})`);
              }
            }
          }
        }
      }
    } catch (e) {}
  }
}

findFullEdits();
