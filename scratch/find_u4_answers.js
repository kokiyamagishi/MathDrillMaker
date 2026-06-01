const fs = require('fs');
const readline = require('readline');

async function findU4Answers() {
  const logFile = '/Users/kokiyamagishi/.gemini/antigravity-ide/brain/684d285b-2aa8-4225-a91d-3cef6474aaaa/.system_generated/logs/transcript.jsonl';
  if (!fs.existsSync(logFile)) {
    console.error("Log file does not exist");
    return;
  }

  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let step = 0;
  for await (const line of rl) {
    step++;
    try {
      const obj = JSON.parse(line);
      const content = obj.content || '';
      // Look for the creation of unit 4 or its answers in tool calls or messages
      if (content.includes('unitNumber: 4') && content.includes('answers:')) {
        console.log(`Found Unit 4 answers candidate in Step ${step} (Mentions):`);
        console.log(content.substring(content.indexOf('answers:'), content.indexOf('answers:') + 600));
      }
      
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          const args = tc.args || {};
          for (const key in args) {
            const val = String(args[key]);
            if (val.includes('unitNumber: 4') && val.includes('answers:')) {
              console.log(`Found Unit 4 answers candidate in Tool Call ${tc.name} at Step ${step}:`);
              const startIdx = val.indexOf('answers:');
              console.log(val.substring(startIdx, startIdx + 800));
            }
          }
        }
      }
    } catch (e) {}
  }
}

findU4Answers().catch(console.error);
