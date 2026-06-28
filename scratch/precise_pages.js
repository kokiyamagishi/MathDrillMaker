const fs = require('fs');
const path = require('path');

const grades = ['secondary1', 'secondary2', 'secondary3', 'secondary4'];
const basePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data';

grades.forEach(grade => {
  const dir = path.join(basePath, grade);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir)
    .filter(f => f.startsWith('unit') && f.endsWith('.tsx'))
    .sort((a, b) => {
      const numA = parseInt(a.replace('unit', '').replace('.tsx', ''), 10);
      const numB = parseInt(b.replace('unit', '').replace('.tsx', ''), 10);
      return numA - numB;
    });

  let currentUnitPage = 2;
  console.log(`\n=== GRADE: ${grade} ===`);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const unitNum = parseInt(file.replace('unit', '').replace('.tsx', ''), 10);

    // subSections 配列の長さを正確にカウント
    let subSectionsCount = 0;
    const subsIdx = content.indexOf('subSections: [');
    if (subsIdx !== -1) {
      let bracketCount = 0;
      let subsBody = '';
      for (let i = subsIdx + 'subSections: '.length; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        else if (content[i] === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            subsBody = content.substring(subsIdx + 'subSections: '.length, i + 1);
            break;
          }
        }
      }

      let braceCount = 0;
      for (let i = 0; i < subsBody.length; i++) {
        if (subsBody[i] === '{') {
          if (braceCount === 0) {
            subSectionsCount++;
          }
          braceCount++;
        } else if (subsBody[i] === '}') {
          braceCount--;
        }
      }
    }

    // keyPoints も正確にカウント
    let kpCount = 0;
    const kpIdx = content.indexOf('keyPoints: [');
    if (kpIdx !== -1) {
      let bracketCount = 0;
      let kpBody = '';
      for (let i = kpIdx + 'keyPoints: '.length; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        else if (content[i] === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            kpBody = content.substring(kpIdx + 'keyPoints: '.length, i + 1);
            break;
          }
        }
      }

      let braceCount = 0;
      for (let i = 0; i < kpBody.length; i++) {
        if (kpBody[i] === '{') {
          if (braceCount === 0) {
            kpCount++;
          }
          braceCount++;
        } else if (kpBody[i] === '}') {
          braceCount--;
        }
      }
    } else if (content.includes('keyPoints:')) {
      kpCount = 1;
    }

    let numPages = 0;
    if (subSectionsCount > 0) {
      numPages = subSectionsCount * 2 + 2;
    } else {
      numPages = kpCount + 3;
    }

    const start = currentUnitPage;
    const end = currentUnitPage + numPages - 1;

    if (start <= 73 && 73 <= end) {
      console.log(`  Unit ${unitNum} covers page 73: Page ${start} - ${end}`);
      if (subSectionsCount > 0) {
        for (let i = 0; i < subSectionsCount; i++) {
          if (start + i*2 === 73) console.log(`    -> Page 73 is SubSection ${i+1} KeyPoints`);
          if (start + i*2 + 1 === 73) console.log(`    -> Page 73 is SubSection ${i+1} BasicProblems`);
        }
        if (start + subSectionsCount*2 === 73) console.log(`    -> Page 73 is ChallengeProblems`);
        if (start + subSectionsCount*2 + 1 === 73) console.log(`    -> Page 73 is UnitSummary`);
      } else {
        for (let i = 0; i < kpCount; i++) {
          if (start + i === 73) console.log(`    -> Page 73 is KeyPoints ${i+1}`);
        }
        if (start + kpCount === 73) console.log(`    -> Page 73 is BasicProblems`);
        if (start + kpCount + 1 === 73) console.log(`    -> Page 73 is ChallengeProblems`);
        if (start + kpCount + 2 === 73) console.log(`    -> Page 73 is UnitSummary`);
      }
    }

    currentUnitPage += numPages;
  });
});
