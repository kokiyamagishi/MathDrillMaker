const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/data/units3.tsx');
let content = fs.readFileSync(file, 'utf8');

// Find the end of unit 10.
// Unit 10 ends with:
//       advice: "ການຈື່ (ການທົດ) ຕົວເລກ ເປັນຈຸດທີ່ນັກຮຽນມັກຫຼົງລືມ. ພະຍາຍາມຂຽນຕົວຈື່ນ້ອຍໆໄວ້ເທິງຫົວເລກຈະຊ່ວຍໄດ້ເດີ!"
//     }
//   }

const targetText = 'ການຈື່ (ການທົດ) ຕົວເລກ ເປັນຈຸດທີ່ນັກຮຽນມັກຫຼົງລືມ. ພະຍາຍາມຂຽນຕົວຈື່ນ້ອຍໆໄວ້ເທິງຫົວເລກຈະຊ່ວຍໄດ້ເດີ!';
const index = content.indexOf(targetText);

if (index !== -1) {
  // Find the closing of unit 10
  // First '}' after advice text is the closing of advice/answers object.
  // Second '}' after advice text is the closing of unit 10 object.
  const firstBrace = content.indexOf('}', index);
  const secondBrace = content.indexOf('}', firstBrace + 1);
  
  if (secondBrace !== -1) {
    // Truncate here
    content = content.substring(0, secondBrace + 1);
    content = content.trim();
    content += '\n];\n';
    
    fs.writeFileSync(file, content, 'utf8');
    console.log("Successfully truncated units3.tsx to Unit 10.");
  } else {
    console.error("Could not find second brace after advice.");
  }
} else {
  console.error("Could not find advice text of Unit 10.");
}
