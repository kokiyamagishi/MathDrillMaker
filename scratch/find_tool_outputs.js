const fs = require('fs');
const readline = require('readline');

async function findToolOutputs() {
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
  let matches = [];

  for await (const line of rl) {
    stepCount++;
    try {
      const obj = JSON.parse(line);
      // Let's print some SYSTEM/TOOL responses
      // In this environment, tool execution results are typically logged in lines with certain properties.
      // Let's see if we can find any tool result. Usually they might have type: "TOOL_RESPONSE" or similar.
      // Let's check if the line content has something like "File Path:" or "Original Content" or similar
      const contentStr = obj.content ? String(obj.content) : '';
      if (contentStr.includes('units3.tsx') && contentStr.length > 2000) {
        matches.push({
          step: stepCount,
          time: obj.created_at,
          type: obj.type,
          source: obj.source,
          length: contentStr.length,
          preview: contentStr.substring(0, 300)
        });
      }
    } catch (e) {
      // ignore
    }
  }

  console.log(`Found ${matches.length} matches in ${stepCount} steps.`);
  for (const m of matches) {
    console.log(`Step ${m.step} (${m.time}): Source: ${m.source}, Type: ${m.type}, Length: ${m.length}`);
    console.log(`    Preview: ${m.preview}`);
  }
}

findToolOutputs().catch(console.error);
