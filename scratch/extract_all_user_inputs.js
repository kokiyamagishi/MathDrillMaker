const fs = require('fs');
const path = require('path');

const logPath = '/Users/openclaw/.gemini/antigravity/brain/409ad8bb-c010-4a2f-babe-080d7540a088/.system_generated/logs/transcript.jsonl';
if (!fs.existsSync(logPath)) {
  console.error("Log file not found!");
  process.exit(1);
}

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

let index = 1;
const results = [];

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      let content = obj.content || '';
      // Clean up tags
      content = content.replace(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/g, '$1');
      content = content.replace(/<ADDITIONAL_METADATA>([\s\S]*?)<\/ADDITIONAL_METADATA>/g, '');
      results.push(`--- MESSAGE ${index++} (${obj.created_at}) ---\n${content.trim()}`);
    }
  } catch (e) {
    // Ignore invalid JSON lines
  }
}

fs.writeFileSync('scratch/user_inputs_history.txt', results.join('\n\n'), 'utf8');
console.log(`Successfully extracted ${results.length} user messages to scratch/user_inputs_history.txt`);
