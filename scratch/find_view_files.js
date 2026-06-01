const fs = require('fs');
const readline = require('readline');

async function findViewFiles() {
  const logFile = '/Users/kokiyamagishi/.gemini/antigravity-ide/brain/684d285b-2aa8-4225-a91d-3cef6474aaaa/.system_generated/logs/transcript.jsonl';
  if (!fs.existsSync(logFile)) {
    console.error("Log file does not exist at:", logFile);
    return;
  }

  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let stepCount = 0;
  let viewSteps = [];

  for await (const line of rl) {
    stepCount++;
    try {
      const obj = JSON.parse(line);
      // Look for SYSTEM messages which contain the output of view_file
      if (obj.source === 'SYSTEM' && obj.type === 'VIEW_FILE' && obj.status === 'DONE') {
        // Wait, what does the view_file system response look like?
        // Let's check if the path is in the response or if it has file content
        // Or if we can find any object with type "VIEW_FILE" or "DONE" that contains text from units3.tsx
        viewSteps.push({
          step: stepCount,
          time: obj.created_at,
          type: obj.type,
          length: obj.content ? obj.content.length : 0,
          preview: obj.content ? obj.content.substring(0, 200) : ''
        });
      }
      
      // Let's also check if the content itself mentions "units3.tsx" and is large
      if (obj.content && obj.content.includes('units3.tsx') && obj.content.length > 5000) {
        viewSteps.push({
          step: stepCount,
          time: obj.created_at,
          type: obj.type + "_MentionsUnits3",
          length: obj.content.length,
          preview: obj.content.substring(0, 200)
        });
      }
    } catch (e) {
      // ignore
    }
  }

  console.log(`Found ${viewSteps.length} view/mention steps in ${stepCount} steps.`);
  for (const vs of viewSteps) {
    console.log(`Step ${vs.step} (${vs.time}): Type: ${vs.type}, Length: ${vs.length}, Preview: ${vs.preview}`);
  }
}

findViewFiles().catch(console.error);
