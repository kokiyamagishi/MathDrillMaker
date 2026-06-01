const fs = require('fs');
const path = require('path');

const sec3Titles = {
  1: "ພາກທີ I - ບົດທີ 1: ເລກກຳລັງ",
  2: "ພາກທີ I - ບົດທີ 2: ສະເໝີຜົນຄວນຈື່",
  3: "ພາກທີ I - ບົດທີ 3: ການແຍກສ່ວນຄູນ",
  4: "ພາກທີ I - ບົດທີ 4: ເສັ້ນສະແດງຂອງຕຳລາຂັ້ນສອງ",
  5: "ພາກທີ I - ບົດທີ 5: ສົມຜົນຂັ້ນສອງ",
  6: "ພາກທີ IV - ບົດທີ 14: ລະບົບສົມຜົນຂັ້ນໜຶ່ງທີ່ມີສອງຕົວລັບ",
  7: "ພາກທີ III - ບົດທີ 11: ການພົວພັນ ແລະ ຕຳລາ",
  8: "ພາກທີ VI - ບົດທີ 21: ຄວາມຖີ່ຂອງຂໍ້ມູນ",
  9: "ພາກທີ II - ບົດທີ 9: ຫຼັກເກີນປີຕາກໍ",
  10: "ພາກທີ VII - ບົດທີ 24: ມຸມແນບວົງມົນ ແລະ ມຸມໃຈກາງ",
  11: "ພາກທີ VIII - ບົດທີ 25: ຕຳລາໄຕມຸມມິຕິເບື້ອງຕົ້ນ",
  12: "ພາກທີ VIII - ບົດທີ 26: ຮູບທໍ່ກົມ ແລະ ຮູບຈວຍ"
};

const folder = "src/data/secondary3";
for (let num = 1; num <= 12; num++) {
  const filePath = path.join(folder, `unit${num}.tsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/unitTitle:\s*"[^"]+"/, `unitTitle: "${sec3Titles[num]}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Secondary 3 Unit ${num} Title!`);
  }
}
