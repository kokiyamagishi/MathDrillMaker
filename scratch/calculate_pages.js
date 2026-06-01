const fs = require("fs");
const path = require("path");

function calculatePages() {
  let currentPage = 2;
  const targetPages = [27, 47, 51, 55];
  
  for (let u = 1; u <= 17; u++) {
    const filePath = path.join(__dirname, `../src/data/units5/unit${u}.tsx`);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }
    const content = fs.readFileSync(filePath, "utf8");
    
    // Determine keyPoints structure
    // If it has keyPoints: [{ or keyPoints: [\n { then it's an array.
    // Let's count occurrences of KeyPoints pages.
    // Standard rule: if it contains `keyPoints: [` it might be an array, otherwise single.
    let kpCount = 1;
    if (content.includes("keyPoints: [") || content.includes("keyPoints: \n  [")) {
      // Find the array content and count items
      const kpMatch = content.match(/keyPoints:\s*\[([\s\S]*?)\]\s*,/);
      if (kpMatch) {
        // count the number of elements in keyPoints array
        // We can count occurrences of `content: (` inside it.
        const matches = kpMatch[1].match(/content:\s*\(/g);
        if (matches) {
          kpCount = matches.length;
        }
      }
    }
    
    const kpPages = [];
    for (let i = 0; i < kpCount; i++) {
      kpPages.push(currentPage++);
    }
    
    const basicPage = currentPage++;
    const challengePage = currentPage++;
    const summaryPage = currentPage++;
    
    console.log(`Unit ${u}:`);
    console.log(`  KeyPoints: ${kpPages.join(", ")}`);
    console.log(`  BasicProblems: ${basicPage}`);
    console.log(`  ChallengeProblems: ${challengePage}`);
    console.log(`  UnitSummary: ${summaryPage}`);
    
    for (const target of targetPages) {
      if (kpPages.includes(target)) {
        console.log(`>>> TARGET PAGE ${target} IS UNIT ${u} KEYPOINTS`);
      } else if (target === basicPage) {
        console.log(`>>> TARGET PAGE ${target} IS UNIT ${u} BASIC PROBLEMS`);
      } else if (target === challengePage) {
        console.log(`>>> TARGET PAGE ${target} IS UNIT ${u} CHALLENGE PROBLEMS`);
      } else if (target === summaryPage) {
        console.log(`>>> TARGET PAGE ${target} IS UNIT ${u} SUMMARY PROBLEMS`);
      }
    }
  }
}

calculatePages();
