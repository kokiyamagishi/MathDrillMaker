const fs = require('fs');
const file = 'src/data/units3.tsx';
let content = fs.readFileSync(file, 'utf8');

const unit11Index = content.indexOf('unitNumber: 11');
if (unit11Index !== -1) {
  // Find the start of the object for unit 11. It should be before unitNumber: 11
  const startOfUnit11 = content.lastIndexOf('{', unit11Index);
  if (startOfUnit11 !== -1) {
    // Truncate the file at the start of unit 11, and properly close the array.
    content = content.substring(0, startOfUnit11);
    
    // Clean up trailing commas and whitespace
    content = content.trim();
    if (content.endsWith(',')) {
      content = content.substring(0, content.length - 1);
    }
    
    content += '\n];\n';
    fs.writeFileSync(file, content, 'utf8');
    console.log("Successfully reverted units3.tsx to end at Unit 10.");
  }
} else {
  console.log("Unit 11 not found.");
}
