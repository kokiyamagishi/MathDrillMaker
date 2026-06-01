const fs = require('fs');
const path = require('path');

const dirs = [
  '/Users/openclaw/Antigravity/MathDrillMaker/src/data/secondary1',
  '/Users/openclaw/Antigravity/MathDrillMaker/src/data/secondary4'
];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const hasKeyPointsArray = content.includes('keyPoints: [');
    const hasBasicProblemsArray = content.includes('basicProblems: [');
    console.log(`${path.basename(dir)}/${file}: keyPoints: ${hasKeyPointsArray}, basicProblems: ${hasBasicProblemsArray}`);
  });
});
