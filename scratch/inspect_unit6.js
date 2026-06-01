const fs = require('fs');
const content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// We want to calculate the actual pages correctly based on kpArray.length + 3 for each unit.
// But wait! Unit 6 keyPoints: is it an array or single?
// Let's print out the exact keyPoints section for Unit 6.

const start = content.indexOf('unitNumber: 6');
const end = content.indexOf('unitNumber: 7');
const unit6Content = content.substring(start, end);

// Let's count how many { ... } exist inside keyPoints of Unit 6.
// Let's write a parser that parses this chunk.
// keyPoints in unitsData3 is an array for unit 6.
console.log('Unit 6 content excerpt:');
console.log(unit6Content.substring(0, 1000));
