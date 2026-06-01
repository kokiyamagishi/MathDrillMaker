const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// The offset difference is 238 bytes. Our search condition was Math.abs(offset - redStart) < 150.
// Let's widen the threshold to 300!
// That's why it didn't match!

// Let's revert adjustments script and run a cleaner search replace with larger tolerance:
const limit = 400;

// --- Page 60 ---
const redStart = content.indexOf('{/* Red: 6 */}');
content = content.replace(
  '{[...Array(1)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - redStart) < limit) {
      return '{[...Array(6)].map((_, i) => (';
    }
    return match;
  }
);

const blueStart = content.indexOf('{/* Blue: 8 */}');
content = content.replace(
  '{[...Array(2)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - blueStart) < limit) {
      return '{[...Array(8)].map((_, i) => (';
    }
    return match;
  }
);

const greenStart = content.indexOf('{/* Green: 4 */}');
content = content.replace(
  '{[...Array(3)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - greenStart) < limit) {
      return '{[...Array(4)].map((_, i) => (';
    }
    return match;
  }
);


// --- Page 62 ---
const fbStart = content.indexOf('{/* Football: 7 */}');
content = content.replace(
  '{[...Array(1)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - fbStart) < limit) {
      return '{[...Array(7)].map((_, i) => (';
    }
    return match;
  }
);

const vbStart = content.indexOf('{/* Volleyball: 5 */}');
content = content.replace(
  '{[...Array(2)].map((_, i) => (',
  (match, offset) => {
    if (Math.abs(offset - vbStart) < limit) {
      return '{[...Array(5)].map((_, i) => (';
    }
    return match;
  }
);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Successfully corrected all bar chart heights with wider limits.');
