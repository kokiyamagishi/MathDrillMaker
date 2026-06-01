const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find "ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່:" block and replace its gridTemplateColumns
const regex = /(<p>\{"ທົດສອບປະຈຳບົດ:\s*ຈົ່ງຄິດໄລ່:\s*"\}[\s\S]*?gridTemplateColumns:\s*")repeat\(3,\s*1fr\)(")/;

if (regex.test(content)) {
  content = content.replace(regex, '$11fr$2');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated Unit 1 summaryProblems layout to 1 column using Regex!");
} else {
  console.error("Could not find the target layout block using Regex in units3.tsx!");
}
