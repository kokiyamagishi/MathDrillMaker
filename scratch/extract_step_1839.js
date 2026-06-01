const fs = require('fs');

function extract() {
  const logFile = '/Users/kokiyamagishi/.gemini/antigravity-ide/brain/684d285b-2aa8-4225-a91d-3cef6474aaaa/.system_generated/logs/transcript.jsonl';
  const data = fs.readFileSync(logFile, 'utf8');
  const lines = data.split('\n');
  
  // Step is 1-indexed. Let's look around Step 1839.
  // We can search for the line that has step_index = 1839 or matches Step 1839 in JSON.
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) continue;
    try {
      const obj = JSON.parse(lines[i]);
      if (obj.step_index === 1839 || lines[i].includes('"step_index":1839') || i === 1838) {
        console.log(`--- Line ${i} (Step ${obj.step_index}) ---`);
        fs.writeFileSync('scratch/step_1839_raw.json', JSON.stringify(obj, null, 2), 'utf8');
        console.log("Wrote Step 1839 JSON to scratch/step_1839_raw.json");
      }
    } catch (e) {
      // Not a valid JSON line
    }
  }
}

extract();
