const fs = require('fs');
const path = require('path');

const editsPath = path.join(__dirname, 'all_edits.json');
if (!fs.existsSync(editsPath)) {
  console.error("all_edits.json not found!");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(editsPath, 'utf8'));
console.log("Keys in all_edits.json:", Object.keys(data));
if (data.units) {
  console.log("Units in data:", Object.keys(data.units));
} else {
  // Let's print the first 500 characters of the JSON keys or contents
  console.log("JSON snippet:", JSON.stringify(data).substring(0, 1000));
}
