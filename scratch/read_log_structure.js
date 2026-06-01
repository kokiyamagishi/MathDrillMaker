const fs = require('fs');
const readline = require('readline');

async function readLog() {
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

  let count = 0;
  for await (const line of rl) {
    count++;
    if (count <= 5) {
      console.log(`--- Line ${count} ---`);
      console.log(line.substring(0, 1000));
    }
  }
  console.log("Total lines:", count);
}

readLog().catch(console.error);
