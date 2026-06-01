const fs = require('fs');

const path = 'src/data/units5.tsx';
let content = fs.readFileSync(path, 'utf8');

const u7_u8_code = `  {
    unitNumber: 7,
    unitTitle: "ຄ່າສະເລ່ຍ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງຄ່າສະເລ່ຍ, ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (ຜົນບວກທັງໝົດ ÷ ຈຳນວນ) ແລະ ການນຳໃຊ້ໃນຊີວິດປະຈຳວັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 70-75",
    keyPoints: {
      hint: {
        text: "ຄ່າສະເລ່ຍແມ່ນການແບ່ງປັນໃຫ້ເທົ່າໆກັນ! ຈື່ສູດ: ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (Average Formula)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", fontSize: "18px" }}>
            <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>{"ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນ"}</p>
            <div style={{ color: "#0D47A1", fontSize: "16px" }}>
              {"ຕົວຢ່າງ: ຄະແນນສອບເສັງ 3 ຄັ້ງແມ່ນ 80, 90, 70. ຄ່າສະເລ່ຍແມ່ນ:"}
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "6px" }}>
                {"(80 + 90 + 70) ÷ 3 = 240 ÷ 3 = 80 (ຄະແນນ)"}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຄະແນນສອບເສັງ 4 ວິຊາ: 80, 90, 75, 85. ຄ່າສະເລ່ຍແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຄະແນນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຈຳນວນປຶ້ມທີ່ນັກຮຽນ 5 ຄົນອ່ານ: 3ຫົວ, 5ຫົວ, 2ຫົວ, 6ຫົວ, 4ຫົວ. ຄ່າສະເລ່ຍແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຫົວ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "👣 ໃຊ້ຄ່າສະເລ່ຍຊອກຫາໄລຍະທາງ! ເອົາຄວາມຍາວບາດກ້າວສະເລ່ຍ ຄູນໃຫ້ຈຳນວນບາດກ້າວເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງຈາກບາດກ້າວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🚶 ທ້າວ ສົມພອນ ຍ່າງ 10 ບາດກ້າວ ໄດ້ໄລຍະທາງສະເລ່ຍແມ່ນ 6.4 m. ຖ້າລາວຍ່າງ 500 ບາດກ້າວ ຈະໄດ້ໄລຍະທາງທັງໝົດປະມານຈັກແມັດ?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"m"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🐔 ແມ່ຄ້າເກັບໄຂ່ໄກ່ໄດ້ 5 ວັນ ດັ່ງນີ້: ວັນຈັນ 24 ຟອງ, ວັນອັງຄານ 30 ຟອງ, ວັນພຸດ 25 ຟອງ, ວັນພະຫັດ 28 ຟອງ ແລະ ວັນສຸກ 23 ຟອງ. ໃນ 5 ວັນນີ້, ແມ່ຄ້າເກັບໄຂ່ໄດ້ສະເລ່ຍວັນລະຈັກຟອງ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ຟອງ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 82.5 ຄະແນນ (ຍ້ອນ (80+90+75+85) ÷ 4 = 330 ÷ 4 = 82.5), (2) 4 ຫົວ (ຍ້ອນ (3+5+2+6+4) ÷ 5 = 20 ÷ 5 = 4)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"320 m (ຍ້ອນ ບາດກ້າວລະ 6.4 ÷ 10 = 0.64 m, ແລະ 0.64 × 500 = 320)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"26 ຟອງ (ຍ້ອນ (24+30+25+28+23) ÷ 5 = 130 ÷ 5 = 26)"}</span>],
        },
      ],
      advice:
        "ຄ່າສະເລ່ຍຊ່ວຍໃຫ້ເຮົາຄາດຄະເນ ແລະ ເຫັນພາບລວມຂອງຂໍ້ມູນໄດ້ດີຫຼາຍ! ຢ່າລືມບວກຂໍ້ມູນທັງໝົດກ່ອນ ແລ້ວຈຶ່ງຫານໃຫ້ຈຳນວນຂໍ້ມູນເດີ້.",
    },
  },

  {
    unitNumber: 8,
    unitTitle: "ຄວາມໄວ",
    unitGoal: "ຮຽນຮູ້ສາມສູດພື້ນຖານຂອງຄວາມໄວ, ວິທີການຊອກຫາຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ ພ້ອມທັງການປຽບທຽບຄວາມໄວ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 76-85",
    keyPoints: {
      hint: {
        text: "ຈື່ສູດ 3 ຫຼັກໃຫ້ດີເດີ້! 1. ຄວາມໄວ = ໄລຍະທາງ ÷ ເວລາ. 2. ໄລຍະທາງ = ຄວາມໄວ × ເວລາ. 3. ເວລາ = ໄລຍະທາງ ÷ ຄວາມໄວ.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄວາມໄວພື້ນຖານ (Speed Formulas)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#FFE082", border: "2px solid #FFB300", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
            <div><strong>{"• ຄວາມໄວ (Speed) = ໄລຍະທາງ ÷ ເວລາ"}</strong></div>
            <div><strong>{"• ໄລຍະທາງ (Distance) = ຄວາມໄວ × ເວລາ"}</strong></div>
            <div><strong>{"• ເວລາ (Time) = ໄລຍະທາງ ÷ ຄວາມໄວ"}</strong></div>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຕາມສູດຄວາມໄວຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ລົດຄັນໜຶ່ງແລ່ນໄດ້ 120 km ໃນເວລາ 2 ຊົ່ວໂມງ. ຄວາມໄວຂອງລົດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km/h"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຄົນຜູ້ໜຶ່ງຍ່າງດ້ວຍຄວາມໄວ 80 m/min ໃນເວລາ 15 ນາທີ. ໄລຍະທາງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ລົດໄຟແລ່ນດ້ວຍຄວາມໄວ 60 km/h ໃນໄລຍະທາງ 180 km. ຈະຕ້ອງໃຊ້ເວລາ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "⚖️ ເພື່ອປຽບທຽບຄວາມໄວ, ເຮົາຕ້ອງປ່ຽນຫົວໜ່ວຍເວລາ ຫຼື ໄລຍະທາງໃຫ້ຄືກັນກ່ອນເດີ້! ຕົວຢ່າງ ປ່ຽນເປັນຄວາມໄວຕໍ່ວິນາທີ.",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການປຽບທຽບຄວາມໄວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🐆 ເສືອແລ່ນໄດ້ 300 m ໃນເວລາ 15 ວິນາທີ. ມ້າແລ່ນໄດ້ 240 m ໃນເວລາ 10 ວິນາທີ. ສັດຊະນິດໃດແລ່ນໄວກວ່າກັນ?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"✈️ ເຮືອບິນລຳໜຶ່ງບິນດ້ວຍຄວາມໄວ 800 km/h. ຖ້າເຮືອບິນບິນເປັນເວລາ 2.5 ຊົ່ວໂມງ, ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ km?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"km"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 60 km/h (120 ÷ 2), (2) 1,200 m (80 × 15), (3) 3 ຊົ່ວໂມງ (180 ÷ 60)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"ມ້າແລ່ນໄວກວ່າ (ຍ້ອນຄວາມໄວເສືອແມ່ນ 300÷15 = 20 m/s, ຄວາມວີມ້າແມ່ນ 240÷10 = 24 m/s, 24 > 20)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"2,000 km (ຍ້ອນ 800 × 2.5 = 2,000)"}</span>],
        },
      ],
      advice:
        "ຄວາມໄວແມ່ນສິ່ງທີ່ສຳຄັນຫຼາຍໃນຟີຊິກ ແລະ ຊີວິດປະຈຳວັນ! ຈື່ໄວ້ສະເໝີວ່າສູດທັງສາມແມ່ນກ່ຽວຂ້ອງກັນ ຖ້າຮູ້ສອງຕົວ ຈະສາມາດຊອກຫາຕົວທີສາມໄດ້ສະເໝີ.",
    },
  },
`;

const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// Check if there is already a comma right before the array ends
const preSnippet = content.substring(0, replacementPoint).trimEnd();
const hasComma = preSnippet.endsWith(',');

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u7_u8_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 7 & 8 added successfully.");
