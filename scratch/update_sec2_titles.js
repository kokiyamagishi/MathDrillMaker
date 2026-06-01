const fs = require('fs');
const path = require('path');

const sec2Titles = {
  1: "ພາກທີ I - ບົດທີ 1: ເລກສ່ວນ",
  2: "ພາກທີ I - ບົດທີ 2: ທະວີຄູນ ແລະ ອຸປະຄູນ ຂອງເລກສ່ວນ",
  3: "ພາກທີ I - ບົດທີ 3: ການຄັດຈ້ອນ ແລະ ... (Spelling: ການຄັດຈ້ອນ ແລະ ການຂຶ້ນພູດຮ່ວມເລກສ່ວນ)",
  4: "ພາກທີ I - ບົດທີ 4: ການປຽບທຽບເລກສ່ວນ",
  5: "ພາກທີ I - ບົດທີ 5: ການບວກ ແລະ ... (Spelling: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນ)",
  6: "ພາກທີ I - ບົດທີ 6: ການບວກ ແລະ ... (Spelling: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ)",
  7: "ພາກທີ I - ບົດທີ 7: ການຄູນເລກສ່ວນ",
  8: "ພາກທີ I - ບົດທີ 8: ການຫານເລກສ່ວນ",
  9: "ພາກທີ I - ບົດທີ 9: ຈຳນວນໃນຮູບຮ່າງເລກສ່ວນ",
  10: "ພາກທີ I - ບົດທີ 10: ການຄິດໄລ່ເລກສ່ວນປະສົມສີ່ປະການ",
  11: "ພາກທີ II - ບົດທີ 12: ການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ",
  12: "ພາກທີ I - ບົດທີ 11: ຈຳນວນຈິງ ແລະ ຈຳນວນອະປົກກະຕິ"
};

sec2Titles[3] = "ພາກທີ I - ບົດທີ 3: ການຄັດຈ້ອນ ແລະ ການຂຶ້ນພູດຮ່ວມເລກສ່ວນ";
sec2Titles[5] = "ພາກທີ I - ບົດທີ 5: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນ";
sec2Titles[6] = "ພາກທີ I - ບົດທີ 6: ການບວກ ແລະ ... (Spelling: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ)";
sec2Titles[6] = "ພາກທີ I - ບົດທີ 6: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ";

const folder = "src/data/secondary2";
for (let num = 1; num <= 12; num++) {
  const filePath = path.join(folder, `unit${num}.tsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/unitTitle:\s*"[^"]+"/, `unitTitle: "${sec2Titles[num]}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Secondary 2 Unit ${num} Title!`);
  }
}
