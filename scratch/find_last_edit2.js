const fs = require('fs');
const readline = require('readline');
const path = require('path');

const transcriptPath = '/Users/openclaw/.gemini/antigravity/brain/409ad8bb-c010-4a2f-babe-080d7540a088/.system_generated/logs/transcript.jsonl';

async function extractStep() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const step = JSON.parse(line);
    if (step.step_index === 769 || step.step_index === 644 || step.step_index === 642 || step.step_index === 643 || step.step_index === 641 || step.step_index === 640) {
      console.log(`--- STEP ${step.step_index} (${step.type}, ${step.status}) ---`);
      if (step.tool_calls) {
        console.log("Tool Calls:", JSON.stringify(step.tool_calls, null, 2));
      }
      if (step.content) {
        console.log("Content:", step.content);
      }
      // Look for the actual file contents displayed or modified
      const stringified = JSON.stringify(step);
      if (stringified.includes('French') && stringified.includes('65')) {
        console.log("Found matches! Saving matching string to scratch/extracted_content.txt...");
        fs.writeFileSync(path.join(__dirname, 'extracted_content.txt'), stringified, 'utf8');
      }
    }
  }
}

extractStep();
