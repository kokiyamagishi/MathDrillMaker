const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const units = content.split(/unitNumber:\s*/g);

for (let i = 1; i <= 8; i++) {
  const part = units.find(p => p.trim().startsWith(String(i)));
  if (!part) continue;

  console.log(`\n=================== UNIT ${i} ===================`);
  
  // Find sections of basicProblems, challengeProblems, summaryProblems
  const sections = [
    { name: 'basicProblems', regex: /basicProblems:\s*\[([\s\S]*?)\]\s*,\s*(?:challengeProblems|summaryProblems|answers|basicProblems)/ },
    { name: 'challengeProblems', regex: /challengeProblems:\s*\{([\s\S]*?)\}\s*,\s*(?:summaryProblems|answers|challengeProblems)/ },
    { name: 'summaryProblems', regex: /summaryProblems:\s*\[([\s\S]*?)\]\s*,\s*(?:answers|summaryProblems)/ }
  ];
  
  sections.forEach(sec => {
    const m = part.match(sec.regex);
    if (!m) return;
    const secText = m[1];
    
    // Find scoring label
    const labelMatch = secText.match(/<span className="point-label">"([^"]*ຄະແນນ[^"]*)"<\/span>|{"([^"]*ຄະແນນ[^"]*)"}/);
    if (!labelMatch) return;
    
    const rawLabel = labelMatch[1] || labelMatch[2];
    
    // Count subquestions e.g. (1), (2), (3) etc.
    const subQs = [...secText.matchAll(/\((\d+)\)/g)].map(x => parseInt(x[1]));
    const uniqueSubQs = [...new Set(subQs)];
    const subQCount = uniqueSubQs.length;
    
    console.log(`Section: ${sec.name}`);
    console.log(`  Raw label: ${rawLabel}`);
    console.log(`  Subquestions found: ${uniqueSubQs.join(', ')} (Count: ${subQCount})`);
  });
}
