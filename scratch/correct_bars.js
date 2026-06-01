const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// --- Page 60 (Unit 15 basicProblems Q1) ---
// Red: 6 (currently [...Array(1)])
// We locate the Red section starting with '{/* Red: 6 */}'
const redStart = content.indexOf('{/* Red: 6 */}');
content = content.replace(
  '{[...Array(1)].map((_, i) => (',
  (match, offset) => {
    // Check if this is close to redStart
    if (Math.abs(offset - redStart) < 150) {
      return '{[...Array(6)].map((_, i) => (';
    }
    return match;
  }
);

// Blue: 8 (currently [...Array(2)])
const blueStart = content.indexOf('{/* Blue: 8 */}');
content = content.replace(
  '{[...Array(2)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - blueStart) < 150) {
      return '{[...Array(8)].map((_, i) => (';
    }
    return match;
  }
);

// Green: 4 (currently [...Array(3)])
const greenStart = content.indexOf('{/* Green: 4 */}');
content = content.replace(
  '{[...Array(3)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - greenStart) < 150) {
      return '{[...Array(4)].map((_, i) => (';
    }
    return match;
  }
);


// --- Page 62 (Unit 15 summaryProblems Q1) ---
// Football: 7 (currently [...Array(1)])
const fbStart = content.indexOf('{/* Football: 7 */}');
content = content.replace(
  '{[...Array(1)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - fbStart) < 150) {
      return '{[...Array(7)].map((_, i) => (';
    }
    return match;
  }
);

// Volleyball: 5 (currently [...Array(2)])
const vbStart = content.indexOf('{/* Volleyball: 5 */}');
content = content.replace(
  '{[...Array(2)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - vbStart) < 150) {
      return '{[...Array(5)].map((_, i) => (';
    }
    return match;
  }
);

// Running has [...Array(3)], which matches Running: 3 perfectly, so no change needed.

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully corrected all bar chart heights.');
