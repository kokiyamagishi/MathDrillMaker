const fs = require('fs');

let content = fs.readFileSync('src/data/units2.tsx', 'utf8');

const oldInterface = `  keyPoints: {
    content: React.ReactNode;
    hint: {
      text: string;
      isBlue?: boolean;
    };
  };`;

const newInterface = `  keyPoints: {
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  } | {
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  }[];`;

content = content.replace(oldInterface, newInterface);
fs.writeFileSync('src/data/units2.tsx', content, 'utf8');
console.log('units2.tsx interface updated');
