const fs = require('fs');
const path = require('path');

const s3Dir = path.join(__dirname, '../src/data/secondary3');
const files = fs.readdirSync(s3Dir).filter(f => f.endsWith('.tsx'));

console.log(`Deep cleaning Secondary 3 (Grade 9) syntax structures...`);

files.forEach(file => {
  const filePath = path.join(s3Dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.length < 8000) return;
  
  let changed = false;
  
  if (content.includes('problems:')) {
    const oldKpLength = content.length;
    content = content.replace(/\}\s*,\s*\}\s*,\s*problems:/g, '},\n      problems:');
    content = content.replace(/\}\s*,\s*\}\s*\]\s*\}\s*,/g, '}\n      ]\n    },');
    content = content.replace(/\}\s*\}\s*\]\s*\}\s*,/g, '}\n      ]\n    },');
    
    if (content.length !== oldKpLength) {
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Repaired deep syntax in: ${file}`);
  }
});

console.log('Secondary 3 Deep Cleaning Complete!');
