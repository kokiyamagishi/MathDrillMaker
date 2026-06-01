const fs = require('fs');

function extract() {
  const logFile = '/Users/kokiyamagishi/.gemini/antigravity-ide/brain/684d285b-2aa8-4225-a91d-3cef6474aaaa/.system_generated/logs/transcript.jsonl';
  const data = fs.readFileSync(logFile, 'utf8');
  const lines = data.split('\n');
  
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) continue;
    try {
      const obj = JSON.parse(lines[i]);
      const contentStr = JSON.stringify(obj);
      if (contentStr.includes('unitNumber: 4') && contentStr.includes('ວົງມົນ')) {
        count++;
        // Write the whole JSON step to a file
        fs.writeFileSync(`scratch/u4_match_${count}.json`, JSON.stringify(obj, null, 2), 'utf8');
        console.log(`Matched! Saved scratch/u4_match_${count}.json (step_index: ${obj.step_index}, line index: ${i})`);
      }
    } catch (e) {}
  }
}

extract();
