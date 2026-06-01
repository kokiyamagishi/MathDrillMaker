const fs = require('fs');
const path = require('path');

const pyPath = path.join(__dirname, 'apply_all_fixes.py');
if (fs.existsSync(pyPath)) {
  const content = fs.readFileSync(pyPath, 'utf8');
  console.log("apply_all_fixes.py size:", content.length);
  // Search for some key strings in primary 5 units
  console.log("Contains unit1Data?", content.includes("unit1Data"));
  console.log("Contains unit2Data?", content.includes("unit2Data"));
  console.log("Contains unit3Data?", content.includes("unit3Data"));
  console.log("Contains unit17Data?", content.includes("unit17Data"));
  console.log("Snippet:", content.substring(0, 1000));
} else {
  console.log("apply_all_fixes.py not found!");
}
