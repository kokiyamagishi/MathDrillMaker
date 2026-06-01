const fs = require('fs');
const path = require('path');

const s2Dir = path.join(__dirname, '../src/data/secondary2');
const files = fs.readdirSync(s2Dir).filter(f => f.endsWith('.tsx'));

console.log(`Deep cleaning Secondary 2 (Grade 8) syntax structures...`);

files.forEach(file => {
  const filePath = path.join(s2Dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.length < 8000) return;
  
  let changed = false;
  
  // 1. Remove extra keyPoint trailing closing brace
  if (content.includes('problems:')) {
    // Replace "},\n      },\n      problems:" with "},\n      problems:"
    const oldKpLength = content.length;
    content = content.replace(/\}\s*,\s*\}\s*,\s*problems:/g, '},\n      problems:');
    
    // 2. Remove extra problems trailing closing brace
    // Replace "},\n  }\n      ]\n    }," with "}\n      ]\n    },"
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

console.log('Secondary 2 Deep Cleaning Complete!');
