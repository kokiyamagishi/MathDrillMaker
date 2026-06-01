const fs = require('fs');
const path = require('path');

const stagedPath = path.join(__dirname, 'units5_staged.tsx');
if (!fs.existsSync(stagedPath)) {
  console.error("Staged units5_staged.tsx not found!");
  process.exit(1);
}

const stagedContent = fs.readFileSync(stagedPath, 'utf8');

// Let's count how many times "basicProblems: [" occurs in staged content
const stagedBasicCount = (stagedContent.match(/basicProblems:\s*\[/g) || []).length;
console.log("Staged basicProblems occurrences:", stagedBasicCount);

// Let's check a specific unit, say Unit 5 basicProblems in staged content
// Find Unit 5 start and end
const u5Start = stagedContent.indexOf('unitNumber: 5,');
const u6Start = stagedContent.indexOf('unitNumber: 6,');
if (u5Start !== -1 && u6Start !== -1) {
  const u5Content = stagedContent.substring(u5Start, u6Start);
  console.log("Staged Unit 5 basicProblems content snippet:");
  const bpMatch = u5Content.match(/basicProblems:\s*\[([\s\S]*?)\]\s*,\s*\n?\s*challengeProblems/);
  if (bpMatch) {
    console.log(bpMatch[1].substring(0, 1000));
  } else {
    console.log("No basicProblems match found in staged Unit 5.");
  }
} else {
  console.log("Could not locate Unit 5 or 6 in staged content.");
}
