const fs = require('fs');

const data = fs.readFileSync('src/data/units3.tsx', 'utf8');
const lines = data.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('unitNumber:')) console.log('\n' + line.trim());
  if (line.includes('basicProblems:') || line.includes('challengeProblems:') || line.includes('summaryProblems:')) {
    console.log('  ' + line.trim());
  }
  if (line.includes('<p>{"') && !line.includes('keyPoints') && !line.includes('advice')) {
    console.log('    ' + line.trim().substring(0, 100));
  }
}
