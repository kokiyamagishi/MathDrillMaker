const fs = require('fs');
const path = require('path');

const sec1Titles = {
  1: "ພາກທີ I - ບົດທີ 1: ຈຳນວນທຳມະຊາດ",
  2: "ພາກທີ I - ບົດທີ 2: ຈຳນວນຖ້ວນ",
  3: "ພາກທີ I - ບົດທີ 3: ການບວກ ແລະ ການລົບຈຳນວນທຳມະຊາດ",
  4: "ພາກທີ I - ບົດທີ 4: ການບວກ ແລະ ການລົບຈຳນວນຖ້ວນ",
  5: "ພາກທີ I - ບົດທີ 5: ການຄູນ ແລະ ການຫານຈຳນວນທຳມະຊາດ",
  6: "ພາກທີ I - ບົດທີ 6: ການຄູນ ແລະ ການຫານຈຳນວນຖ້ວນ",
  7: "ພາກທີ I - ບົດທີ 7: ທະວີຄູນຮ່ວມໜ້ອຍສຸດ ແລະ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ",
  8: "ພາກທີ I - ບົດທີ 8: ຈຳນວນພື້ນຖານຕ່າງໆ",
  9: "ພາກທີ I - ບົດທີ 9: ຈຳນວນສົມບູນ",
  10: "ພາກທີ I - ບົດທີ 10: ເລກຄຳນວນ",
  11: "ພາກທີ II - ບົດທີ 11: ຄວາມຮັບຮູ້ກ່ຽວກັບເມັດ ແລະ ເສັ້ນຊື່",
  12: "ພາກທີ II - ບົດທີ 12: ເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ",
  13: "ພາກທີ II - ບົດທີ 13: ການແຕ້ມເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ",
  14: "ພາກທີ II - ບົດທີ 14: ການບວກ, ການລົບ ແລະ ... (Spelling: ການບວກ, ການລົບ ແລະ ການຄູນລວງຍາວ)",
  15: "ພາກທີ II - ບົດທີ 15: ການວັດແທກລວງຍາວ"
};

// Override specifically for unit 14 to avoid truncation
sec1Titles[14] = "ພາກທີ II - ບົດທີ 14: ການບວກ, ການລົບ ແລະ ການຄູນລວງຍາວ";

const folder = "src/data/secondary1";
for (let num = 1; num <= 15; num++) {
  const filePath = path.join(folder, `unit${num}.tsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace unitTitle: "..." with unitTitle: "newTitle"
    content = content.replace(/unitTitle:\s*"[^"]+"/, `unitTitle: "${sec1Titles[num]}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Unit ${num} Title!`);
  }
}
