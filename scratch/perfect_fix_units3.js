const fs = require('fs');
const path = require('path');

const filePath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units3.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// A map of the new answers block for each unit to completely overwrite the old answers block.
// This is 100% precise, robust, and maintains exact formatting.
const answersReplacements = {
  1: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) 6, (2) 20, (3) 18, (4) 28, (5) 48"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {"(1) 20 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) 60 ກ້ານ, (2) 30 ພັນກີບ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 120 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">{"(1) 50, (2) 80"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">{"(1) 300 ຫົວ"}</span>,
          ],
        },
      ],
      advice:
        "ການທ່ອງບັ້ງສູດໃຫ້ໄດ້ ແມ່ນສຳຄັນຫຼາຍສຳລັບການຄູນ. ນ້ອງໆຄວນຝຶກທ່ອງບັ້ງສູດທຸກໆມື້ເດີ!",
    }`,

  4: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) ເສັ້ນຜ່າກາງ, (2) ລັດສະໝີ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {
                "(1) ເປັນເຄິ່ງໜຶ່ງຂອງເສັ້ນຜ່າກາງ (ເສັ້ນຜ່າກາງ ÷ 2), (2) ໜ່ວຍມົນ (ຮູບຊົງກົມ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3-1">{"(1) 8 cm (4 x 2)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3-2">{"(1) 5 cm (10 ÷ 2)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4-1">{"(1) 30 cm (15 x 2)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="4-2">{"(1) ວົງມົນ (ຮູບວົງມົນ)"}</span>,
          ],
        },
      ],
      advice:
        "ຈົ່ງຈື່ຈຳຄວາມແຕກຕ່າງລະຫວ່າງ 'ລັດສະໝີ' ແລະ 'ເສັ້ນຜ່າກາງ' ໃຫ້ດີເດີ້! ມັນມີປະໂຫຍດຫຼາຍໃນບົດຮຽນຕໍ່ໄປ.",
    }`,

  5: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) 3 ເສດ 1, (2) 3 ເສດ 3, (3) 3 ເສດ 4"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {"(1) 4 ເສດ 2"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) ໄດ້ຄົນລະ 6 ຫົວ, ເຫຼືອ 1 ຫົວ, (2) ໄດ້ 3 ກ່ອງ, ເຫຼືອ 6 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) ຕ້ອງໃຊ້ 6 ໜ່ວຍ, (2) ຊື້ໄດ້ 7 ຫົວ, ເງິນທອນ 3,000 ກີບ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">
              {"(1) 6 ເສດ 1, (2) 6 ເສດ 2"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">
              {"(1) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"}
            </span>,
          ],
        },
      ],
      advice:
        "ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ. ຖ້າຕົວເສດໃຫຍ່ກວ່າຕົວຫານ ສະແດງວ່າຜົນຫານຍັງໃຫຍ່ໄດ້ອີກເດີ້!",
    }`,

  6: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) 400, (2) 850"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {"(1) 2152"}
            </span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="3">
              {"(1) 820, (2) 326"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="4-1">{"(1) >, (2) <"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4-2">{"(1) 731 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 3",
          answers: [<span key="4-3">{"(1) 375 ພັນກີບ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5-1">{"(1) 6053, (2) <"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="5-2">{"(1) 932, (2) 631, (3) 1131"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 3",
          answers: [<span key="5-3">{"(1) 337, (2) 246, (3) 236"}</span>],
        },
      ],
      advice:
        "ການອ່ານເສັ້ນສະແດງຈຳນວນ ຕ້ອງສັງເກດເບິ່ງວ່າ 1 ຕາກະໂຣນ້ອຍໆມີຄ່າເທົ່າໃດກ່ອນເດີ!",
    }`,

  7: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 100, (2) 20, (3) 1, (4) 5, (5) 300"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) 120 cm (100 + 20)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 1 m (50 + 50 = 100 cm = 1 m)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3-1">{"(1) 40, (2) 2"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3-2">{"(1) 150, (2) 3"}</span>],
        },
      ],
      advice:
        "ຫົວໜ່ວຍຄວາມຍາວມັກຈະໃຊ້ໃນຊີວິດປະຈຳວັນ. ລອງເອົາໄມ້ບັນທັດມາວັດແທກສິ່ງຂອງຕ່າງໆເບິ່ງເດີ!",
    }`,

  8: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 28, (2) 84, (3) 96, (4) 55, (5) 88"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) 69 ຄົນ (23 x 3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 84 ພັນກີບ (21 x 4)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3-1">{"(1) 39, (2) 68"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3-2">{"(1) 84, (2) 88"}</span>],
        },
      ],
      advice:
        "ຖ້າຄູນແລ້ວບໍ່ມີຕົວທົດ (ຕົວຈື່) ກໍຂຽນລົງມາໄດ້ເລີย. ງ່າຍດາຍຫຼາຍເນາະ!",
    }`,

  9: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1-1">{"(1) 1000, (2) 2000"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">{"(1) 1, (2) 5, (3) 1500"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2-1">{"(1) 2500 g"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2-2">{"(1) 700 g"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">{"(1) 3000 g, (2) 4 kg"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">{"(1) 1200 g, (2) kg"}</span>,
          ],
        },
      ],
      advice:
        "ເວັບຊັ່ງນ້ຳໜັກເຄື່ອງຢູ່ຕະຫຼາດ ແມ່ຄ້າຈະມັກໃຊ້ 'ກິໂລ' (kg) ແລະ 'ຂີດ'. (1 ຂີດ = 100 g)",
    }`,

  10: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 45, (2) 96, (3) 80"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">{"(1) 76, (2) 90"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) 96 ໜ່ວຍ (24 x 4)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 75 ພັນກີບ (15 x 5)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3-1">{"(1) 68, (2) 84"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3-2">{"(1) 90, (2) 95"}</span>],
        },
      ],
      advice:
        "ການຈື່ (ການທົດ) ຕົວເລກ ເປັນຈຸດທີ່ນັກຮຽນມັກຫຼົງລືມ. ພະຍາຍາມຂຽນຕົວຈື່ນ້ອຍໆໄວ້ເທິງຫົວເລກຈະຊ່ວຍໄດ້ເດີ!",
    }`,

  11: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) ຮູບສາມແຈສະເໝີ, (4) ຮູບສາມແຈທ່ຽງ"
              }
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {
                "(1) 6cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 15cm (5 x 3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">
              {"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">
              {"(1) 18cm (7 + 7 + 4)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ!",
    }`,

  12: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 24, (2) 23, (3) 21, (4) 11, (5) 12, (6) 12, (7) 17, (8) 13"
              }
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {
                "(1) 21 ໜ່ວຍ (84 ÷ 4)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {
                "(1) 12 ເສດ 1, (2) 14 ເສດ 2, (3) 15 ເສດ 4, (4) 14 ເສດ 2"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {
                "(1) ໄດ້ຄົນລະ 25 ຫົວ, ເຫຼືອ 1 ຫົວ (76 ÷ 3 = 25 ເສດ 1)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">
              {
                "(1) 29, (2) 23 ເສດ 3, (3) 13 ເສດ 3, (4) 11"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">
              {
                "(1) 3 x 15 + 2 = 47"
              }
            </span>,
          ],
        },
      ],
      advice: "",
    }`,

  13: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 5 ເທື່ອ, (2) 4 ເທື່ອ, (3) 8 ເທື່ອ, (4) 5 ເທື່ອ"
              }
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {
                "(1) 8 ແມັດ (24 ÷ 3)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) 20 ແມັດ (4 x 5), (2) 5 ແມັດ (15 ÷ 3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 60cm (30 x 2)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">{"(1) 3 ເທື່ອ (18 ÷ 6)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">{"(1) 3 ເທື່ອ (12 ÷ 4)"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!",
    }`,

  14: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) 0.8, (2) 1.5, (3) 2.3, (4) 0.3, (5) 3.0"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {"(1) 0.7, (2) 0.8"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {"(1) 0.7, (2) 1.7, (3) 0.6, (4) 1.3"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {"(1) 0.5 ລິດ (0.8 - 0.3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">
              {"(1) <, (2) >, (3) =, (4) <"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">
              {"(1) ສົ້ມໜັກກວ່າ, ໜັກກວ່າ 0.3 kg (1.2 - 0.9)"}
            </span>,
          ],
        },
      ],
      advice: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ!",
    }`,

  15: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) ສີຟ້າ, 8 ຄົນ, (2) 17 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {"(1) ໄກ່, (2) 1 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ສີແດງ: 8, ສີຟ້າ: 7, ສີຂຽວ: 5, ລວມ: 20, (1) ສີຂຽວ, 5 ຄົນ, (2) 3 ຄົນ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"ບານເຕະ: 7, ບານສົ່ງ: 5, ແລ່ນ: 3, (1) ບານເຕະ, (2) 4 ຄົນ"}
            </span>,
          ],
        },
      ],
      advice: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ!",
    }`,

  16: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 3/5, (2) 5/6"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1-2">{"(1) 3/5 ລິດ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2-1">{"(1) 3/5, (2) 4/8"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2-2">{"(1) 3/6 ແມັດ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3-1">{"(1) 3/5 ແມັດ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3-2">{"(1) 3/5, (2) 4/7"}</span>],
        },
      ],
      advice:
        "CN ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງ (ຈຳນວນພູດ) ມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມ (ພູດ) ຮັກສາໄວ້ຄືເກົ່າເດີ!",
    }`,

  17: `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 50,000 ກີບ, (2) 60,000 ກີບ, (3) 100,000 ກີບ, (4) 100,000 ກີບ"
              }
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1-2">
              {
                "(1) 50,000 ກີບ (20,000 x 2 + 10,000)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2-1">
              {
                "(1) 15,000 ກີບ, (2) 25,000 ກີບ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2-2">
              {
                "(1) 30,000 ກີບ [50,000 - (12,000 + 8,000)]"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3-1">
              {
                "(1) 180,000 ກີບ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3-2">
              {
                "(1) ບໍ່ພໍ, ຍັງຂาดອີກ 10,000 ກີບ (ມີທັງໝົດ 170,000 ກີບ, ຂາດອີກ 180,000 - 170,000 = 10,000)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!",
    }`
};

// Also we need to fix subquestion labels in Unit 4 and Unit 5 basic problems to start at (1) instead of continuing
// In Unit 4:
// - basicProblems number: 2: (3) -> (1), (4) -> (2)
// In Unit 5:
// - basicProblems number: 2: (4) -> (1)
// - challengeProblems number: 2: (3) -> (1), (4) -> (2)
// - summaryProblems number: 2: (3) -> (1)

// Let's split content into units
const units = content.split(/(?=unitNumber:\s*)/);
console.log(`Processing ${units.length - 1} units...`);

let rebuiltContent = units[0]; // Header import part

for (let idx = 1; idx < units.length; idx++) {
  let uText = units[idx];
  const unitNumMatch = uText.match(/^unitNumber:\s*(\d+)/);
  if (!unitNumMatch) {
    rebuiltContent += uText;
    continue;
  }
  const unitNum = parseInt(unitNumMatch[1]);
  console.log(`Checking Unit ${unitNum}...`);

  // 1. If we have a replacement for answers block
  if (answersReplacements[unitNum]) {
    // Find the answers block
    const answersStartIdx = uText.indexOf('answers:');
    if (answersStartIdx !== -1) {
      // Find the end of answers block
      let braceCount = 0;
      let answersEndIdx = -1;
      for (let i = answersStartIdx; i < uText.length; i++) {
        if (uText[i] === '{') braceCount++;
        else if (uText[i] === '}') {
          braceCount--;
          if (braceCount === 0) {
            answersEndIdx = i + 1;
            break;
          }
        }
      }
      if (answersEndIdx !== -1) {
        // Replace
        console.log(`Replacing answers block for Unit ${unitNum}`);
        uText = uText.substring(0, answersStartIdx) + answersReplacements[unitNum] + uText.substring(answersEndIdx);
      }
    }
  }

  // 2. Fix specific question label continuing numbers inside Unit 4 and Unit 5
  if (unitNum === 4) {
    // Replace (3) and (4) in basicProblems 2 with (1) and (2)
    uText = uText.replace('{"(3)"}', '{"(1)"}').replace('{"(4)"}', '{"(2)"}');
    // Challenge Problem 2 subquestion
    uText = uText.replace('{"(2)"}', '{"(1)"}');
    // Summary Problem 2 subquestion
    uText = uText.replace('{"(2)"}', '{"(1)"}');
    console.log("Applied Unit 4 subquestion number resets");
  } else if (unitNum === 5) {
    // basicProblems 2 subquestion
    uText = uText.replace('{"(4)"}', '{"(1)"}');
    // challengeProblems 2 subquestions
    uText = uText.replace('{"(3)"}', '{"(1)"}').replace('{"(4)"}', '{"(2)"}');
    // summaryProblems 2 subquestion
    uText = uText.replace('{"(3)"}', '{"(1)"}');
    console.log("Applied Unit 5 subquestion number resets");
  }

  rebuiltContent += uText;
}

fs.writeFileSync(filePath, rebuiltContent, 'utf8');
console.log("All Grade 3 drill answer keys and question labels fixed successfully!");
