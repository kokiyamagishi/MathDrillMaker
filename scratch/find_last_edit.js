const fs = require('fs');
const readline = require('readline');
const path = require('path');

const subagentTranscriptPath = '/Users/openclaw/.gemini/antigravity/brain/b5127bee-ee7a-44c9-b78d-f65f4cee61d8/.system_generated/logs/transcript.jsonl';

async function extractSubagentRuns() {
  if (!fs.existsSync(subagentTranscriptPath)) {
    console.error("Subagent transcript not found!");
    return;
  }
  
  const fileStream = fs.createReadStream(subagentTranscriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const step = JSON.parse(line);
    if (step.tool_calls) {
      for (const call of step.tool_calls) {
        if (call.name === 'run_command') {
          console.log(`Subagent Step ${step.step_index} (${step.created_at}) - CommandLine: ${call.args.CommandLine}`);
        }
      }
    }
  }
}

extractSubagentRuns();
