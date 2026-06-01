const fs = require('fs');

const path = 'src/data/units5.tsx';
let content = fs.readFileSync(path, 'utf8');

const u3_u4_code = `  {
    unitNumber: 3,
    unitTitle: "ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອນສາກ",
    unitGoal: "ຮຽນຮູ້ສູດການຊອກຫາບໍລິມາດຂອງຮູບກ່ອງສາກ, ຮູບກ້ອນສາກ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍບໍລິມາດ (cm³, m³)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 30-37",
    keyPoints: {
      hint: {
        text: "ບໍລິມາດແມ່ນຂະໜາດຂອງເນື້ອທີ່ວ່າງໃນສາມມິຕິ! ຈື່ສູດ: ບໍລິມາດຮູບກ່ອງສາກ = ກວ້າງ × ຍາວ × ສູງ ແລະ ຮູບກ້ອນສາກ = ຂ້າງ × ຂ້າງ × ຂ້າງ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດບໍລິມາດ (Volume Formulas)"}
          </h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
            {/* Cuboid Volume */}
            <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#1565C0" }}>{"ຮູບກ່ອງສາກ (Cuboid)"}</strong>
              <div style={{ margin: "12px 0", display: "flex", justifyContent: "center" }}>
                <svg width="140" height="90">
                  <path d="M 10,50 L 80,50 L 80,80 L 10,80 Z" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
                  <path d="M 80,50 L 110,30 L 110,60 L 80,80 Z" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
                  <path d="M 10,50 L 40,30 L 110,30 L 80,50 Z" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
                  <text x="45" y="75" fontSize="12">{"ກວ້າງ"}</text>
                  <text x="98" y="75" fontSize="11">{"ຍາວ"}</text>
                  <text x="115" y="45" fontSize="11">{"ສູງ"}</text>
                </svg>
              </div>
              <strong style={{ fontSize: "18px" }}>{"ກວ້າງ × ຍາວ × ສູງ"}</strong>
            </div>

            {/* Cube Volume */}
            <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#2E7D32" }}>{"ຮູບກ້ອນສາກ (Cube)"}</strong>
              <div style={{ margin: "12px 0", display: "flex", justifyContent: "center" }}>
                <svg width="100" height="90">
                  <rect x="10" y="30" width="50" height="50" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M 60,30 L 90,10 L 90,60 L 60,80" fill="none" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M 10,30 L 40,10 L 90,10" fill="none" stroke="#4CAF50" strokeWidth="2" />
                  <line x1="60" y1="80" x2="90" y2="60" stroke="#4CAF50" strokeWidth="2" />
                  <text x="35" y="75" fontSize="12">{"ຂ້າງ"}</text>
                </svg>
              </div>
              <strong style={{ fontSize: "18px" }}>{"ຂ້າງ × ຂ້າງ × ຂ້າງ"}</strong>
            </div>
          </div>

          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}>
            {"2. ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍ (Unit Relations)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#FFF3E0", border: "2px solid #FF9800", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
            <div>{"• 1 cm³ = 1 mL (ມີລີລິດ) = 0.001 L"}</div>
            <div>{"• 1 m³ = 1,000,000 cm³ = 1,000 L (ລິດ) = 1 kL (ກິໂລລິດ)"}</div>
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
              {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຊົງລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span>{"(1) ຮູບກ່ອງສາກທີ່ມີລວງກວ້າງ 4 cm, ລວງຍາວ 5 cm ແລະ ລວງສູງ 6 cm. ບໍລິມາດແມ່ນ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"cm³"}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span>{"(2) ຮູບກ້ອນສາກທີ່ມີຄວາມຍາວຂ້າງ 5 cm. ບໍລິມາດແມ່ນ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"cm³"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍບໍລິມາດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 2 m³ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"cm³"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 5,000 cm³ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"L (ລິດ)"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ບໍລິມາດນ້ຳທາງໃນແມ່ນເອົາ ຂະໜາດທາງໃນ (ລວງກວ້າງ, ລວງຍາວ, ລວງເລິກ) ມາຄູນກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດນ້ຳ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🥛 ມີກ່ອງໃສ່ນ້ຳຮູບກ່ອງສາກຂະໜາດທາງໃນມີ ລວງກວ້າງ 10 cm, ລວງຍາວ 12 cm ແລະ ລວງເລິກ 8 cm. ຖ້າເທນ້ຳໃສ່ເຕັມກ່ອງ ຈະມີນ້ຳຈັກ mL?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"mL"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການປຽບທຽບຄວາມຈຸນ້ຳ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🐳 ມີອ່າງລ້ຽງປາຮູບກ່ອງສາກ ທີ່ມີລວງກວ້າງ 2 m, ລວງຍາວ 3 m ແລະ ລວງສູງ 1.5 m. ອ່າງລ້ຽງປານີ້ສາມາດບັນຈຸນ້ຳໄດ້ຫຼາຍທີ່ສຸດຈັກ L (ລິດ)?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", flexWrap: "wrap" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"L"}</span>
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
          answers: [<span key="1">{"(1) 120 cm³ (4 × 5 × 6), (2) 125 cm³ (5 × 5 × 5)"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 2,000,000 cm³ (2 × 1,000,000), (4) 5 L (ຍ້ອນ 5000 cm³ = 5000 mL = 5 L)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"960 mL (ຍ້ອນ 10 × 12 × 8 = 960 cm³ = 960 mL)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"9,000 L (ຍ້ອນ 2 × 3 × 1.5 = 9 m³ = 9,000,000 cm³ = 9,000 L)"}</span>],
        },
      ],
      advice:
        "ບໍລິມາດແລະຄວາມຈຸນ້ຳແມ່ນມີຄວາມສຳພັນກັນຢ່າງສະໜິດແໜ້ນ! ຈື່ໄວ້ວ່າ 1 cm³ = 1 mL ແລະ 1 m³ = 1,000,000 cm³ = 1,000 L ຈະຊ່ວຍໃຫ້ປ່ຽນຫົວໜ່ວຍໄດ້ງ່າຍສະເໝີ.",
    },
  },

  {
    unitNumber: 4,
    unitTitle: "ການທຽບເທົ່າກັນຂອງຮູບເລຂາຄະນິດ",
    unitGoal: "ເຂົ້າໃຈຄວາມໝາຍຂອງການທຽບເທົ່າກັນ (合同) ຂອງຮູບເລຂາຄະນິດ, ແລະ ຊອກຫາຂ້າງ ຫຼື ມຸມທີ່ກົງກັນຂ້າມກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 38-45",
    keyPoints: {
      hint: {
        text: "ສອງຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ ຈະມີຮູບຮ່າງ ແລະ ຂະໜາດເທົ່າກັນພໍດີ! ເມື່ອທັບກັນ ມັນຈະຊ້ອນກັນໄດ້ຢ່າງສົມບູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ (Congruent Figures)"}
          </h3>
          <p style={{ fontSize: "16px", margin: 0 }}>
            {"ຄຸນລັກສະນະສຳຄັນຂອງສອງຮູບທີ່ທຽບເທົ່າກັນ:"}
          </p>
          <div style={{ padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
            <div>{"• ຄວາມຍາວຂອງຂ້າງທີ່ສົມທຽບ (对应边) ແມ່ນເທົ່າກັນ."}</div>
            <div>{"• ຂະໜາດຂອງມຸມທີ່ສົມທຽບ (对应角) ແມ່ນເທົ່າກັນ."}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", margin: "10px 0" }}>
            {/* SVG of two congruent triangles */}
            <svg width="150" height="100">
              <path d="M 20,80 L 120,80 L 70,20 Z" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
              <text x="15" y="95" fontSize="12" fontWeight="bold">{"A"}</text>
              <text x="125" y="95" fontSize="12" fontWeight="bold">{"B"}</text>
              <text x="65" y="15" fontSize="12" fontWeight="bold">{"C"}</text>
            </svg>
            <svg width="150" height="100">
              {/* Congruent but rotated or shifted */}
              <path d="M 30,80 L 130,80 L 80,20 Z" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
              <text x="25" y="95" fontSize="12" fontWeight="bold">{"D"}</text>
              <text x="135" y="95" fontSize="12" fontWeight="bold">{"E"}</text>
              <text x="75" y="15" fontSize="12" fontWeight="bold">{"F"}</text>
            </svg>
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
              {"ຈາກຮູບສາມແຈສອງຮູບ ABC ແລະ DEF ທີ່ທຽບເທົ່າກັນດ້ານເທິງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AB ແມ່ນຂ້າງ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AC ແມ່ນຂ้าง"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ມຸມທີ່ສົມທຽບກັບມຸມ A ແມ່ນມຸມ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຖ້າຄວາມຍາວຂ้าง AB = 6 cm, ຂ້າງ DE ຈະຍາວຈັກ cm?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ຜົນບວກມຸມໃນຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ! ໃຊ້ຄວາມຮູ້ນີ້ຊອກຫາມຸມທີ່ເຫຼືອເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ກຳນົດ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
                <svg width="150" height="100">
                  <path d="M 20,80 L 130,80 L 90,20 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="30" y="75" fontSize="12">{"45°"}</text>
                  <text x="90" y="75" fontSize="12">{"65°"}</text>
                  <text x="80" y="35" fontSize="12" fontWeight="bold">{"C"}</text>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                  <div>{"(1) ມຸມ C ໃນຮູບສາມແຈນີ້ເທົ່າກັບ"}</div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"°"}</span>
                  </div>
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
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຖ້າເຮົາແບ່ງຮູບສີ່ແຈສາກອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ, ເຮົາຈະໄດ້ຮູບສາມແຈສອງຮູບທີ່ທຽບເທົ່າກັນພໍດີ ຫຼື ບໍ່?"}
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) DE, (2) DF, (3) ມຸມ D, (4) 6 cm"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"70° (ຍ້ອນ 180 - (45 + 65) = 180 - 110 = 70)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"ທຽບເທົ່າກັນ (ຍ້ອນມີຂ້າງ ແລະ ມຸມເທົ່າກັນພໍດີ ເມື່ອປິ່ນທັບກັນ)"}</span>],
        },
      ],
      advice:
        "ການກຳນົດຂ້າງ ແລະ ມຸມສົມທຽບໃນຮູບທຽບເທົ່າກັນ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດຄິດໄລ່ມຸມ ຫຼື ຄວາມຍາວຂ້າງທີ່ບໍ່ທັນຮູ້ໄດ້ຢ່າງງ່າຍດາຍ!",
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

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u3_u4_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 3 & 4 added successfully.");
