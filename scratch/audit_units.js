const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units4.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

const results = [];
let currentUnit = null;
let currentBlock = null;
let currentBlockName = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  
  const unitMatch = line.match(/unitNumber:\s*(\d+),/);
  if (unitMatch) {
    if (currentUnit) {
      results.push(currentUnit);
    }
    currentUnit = {
      unitNumber: parseInt(unitMatch[1]),
      cards: []
    };
  }
  
  if (currentUnit) {
    // Detect start of basicProblems, challengeProblems, summaryProblems
    if (line.includes('basicProblems: [')) {
      currentBlockName = 'basicProblems';
      currentBlock = { name: 'basicProblems', items: [] };
    } else if (line.includes('challengeProblems: {')) {
      currentBlockName = 'challengeProblems';
      currentBlock = { name: 'challengeProblems', items: [] };
    } else if (line.includes('summaryProblems: [')) {
      currentBlockName = 'summaryProblems';
      currentBlock = { name: 'summaryProblems', items: [] };
    }
    
    // Look for point labels
    const labelMatch = line.match(/point-label[^\>]*\>\{"([^"]+)"\}/) || line.match(/point-label[^\>]*\>([^\<]+)\<\/span\>/) || line.match(/\{"(\(ຂໍ້ລະ [^"]+)"\}/) || line.match(/\{"(\(\d+ ຄະແນນ)"\}/);
    if (labelMatch) {
      // Find the nearest surrounding card/content block to count sub-questions
      let subQuestionsCount = 0;
      // We will look forward and backward in a small window (50 lines) to find (1), (2), (3), (4)
      const windowStart = Math.max(0, i - 15);
      const windowEnd = Math.min(lines.length, i + 50);
      const windowText = lines.slice(windowStart, windowEnd).join('\n');
      
      const qMatches = windowText.match(/\((\d+)\)/g);
      if (qMatches) {
        // Get unique question numbers
        const qNums = new Set(qMatches.map(m => m.replace(/[\(\)]/g, '')));
        subQuestionsCount = qNums.size;
      }
      
      currentUnit.cards.push({
        line: lineNum,
        blockName: currentBlockName,
        labelText: labelMatch[1] || labelMatch[0],
        subQuestions: subQuestionsCount,
        raw: line.trim()
      });
    }
  }
}

if (currentUnit) {
  results.push(currentUnit);
}

fs.writeFileSync(path.join(__dirname, '../scratch/audit_questions.json'), JSON.stringify(results, null, 2));
console.log('Successfully wrote scratch/audit_questions.json');
