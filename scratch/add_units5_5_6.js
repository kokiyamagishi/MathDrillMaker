const fs = require('fs');

const path = 'src/data/units5.tsx';
let content = fs.readFileSync(path, 'utf8');

const u5_u6_code = `  {
    unitNumber: 5,
    unitTitle: "ການຄູນ ແລະ ການຫານເລກສ່ວນ",
    unitGoal: "ຮຽນຮູ້ວິທີການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ແລະ ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ພ້ອມທັງການຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 46-57",
    keyPoints: {
      hint: {
        text: "ເວລາຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ, ໃຫ້ເອົາຈຳນວນຖ້ວນຄູນໃສ່ຈຳນວນພູດ (ຕົວເທິງ). ເວລາຫານ, ໃຫ້ເອົາຈຳນວນຖ້ວນຄູນໃສ່ພູດ (ຕົວລຸ່ມ) ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ (Fraction × Whole)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", fontSize: "18px" }}>
            <p style={{ margin: "0 0 10px 0" }}>{"ສູດ: a/b × c = (a × c) / b"}</p>
            <div style={{ fontWeight: "bold", color: "#0D47A1", fontSize: "22px" }}>
              {"ຕົວຢ່າງ: 2/7 × 3 = (2 × 3) / 7 = 6/7"}
            </div>
          </div>

          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}>
            {"2. ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ (Fraction ÷ Whole)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", fontSize: "18px" }}>
            <p style={{ margin: "0 0 10px 0" }}>{"ສູດ: a/b ÷ c = a / (b × c)"}</p>
            <div style={{ fontWeight: "bold", color: "#2E7D32", fontSize: "22px" }}>
              {"ຕົວຢ່າງ: 4/5 ÷ 3 = 4 / (5 × 3) = 4/15"}
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
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 2/7 × 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 5/8 × 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span style={{ fontSize: "16px", color: "#888" }}>{"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 4/5 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 6/7 ÷ 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span style={{ fontSize: "16px", color: "#888" }}>{"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "🥛 ໃຊ້ວິທີການຄູນເລກສ່ວນ! ເອົາປະລິມານນ້ຳຕໍ່ 1 ກະປ໋ອງ ຄູນໃຫ້ຈຳນວນກະປ໋ອງທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🥤 ນ້ຳໝາກໄມ້ 1 ກະປ໋ອງ ມີປະລິມານ 2/3 L. ຖ້າມີນ້ຳໝາກໄມ້ປະເພດດຽວກັນ 4 ກະປ໋ອງ ຈະມີປະລິມານນ້ຳທັງໝົດຈັກ L? (ຂຽນເປັນເລກສ່ວນປະສົມ ຫຼື ເລກສ່ວນເກີນ)"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"L"}</span>
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
              {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 3/10 × 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 2/9 × 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 8/9 ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 5/6 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          answers: [<span key="1">{"(1) 6/7, (2) 5/4 (ຍ້ອນ 10/8 ຫານໃຫ້ 2 ທັງພູດແລະພູດ = 5/4), (3) 4/15, (4) 3/7 (ຍ້ອນ 6/14 = 3/7)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"8/3 L ຫຼື 2 2/3 L (ຍ້ອນ 2/3 × 4 = 8/3)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 3/2 (ຍ້ອນ 15/10 = 3/2), (2) 8/9, (3) 2/9 (ຍ້ອນ 8/36 = 2/9), (4) 5/18"}</span>],
        },
      ],
      advice:
        "ຢ່າລືມກວດເບິ່ງສະເໝີວ່າ ເລກສ່ວນທີ່ໄດ້ສາມາດຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳໄດ້ບໍ່! ການຄັດຈ້ອນຈະຊ່ວຍໃຫ້ຄຳຕອບຂອງເຮົາຖືກຕ້ອງສົມບູນເດີ້.",
    },
  },

  {
    unitNumber: 6,
    unitTitle: "ຮູບຮ່າງທີ່ມີລັກສະນະເຄິ່ງຄືກັນ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍ ແລະ ຄຸນລັກສະນະຂອງຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ (線対称) ແລະ ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (点対称)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 58-69",
    keyPoints: {
      hint: {
        text: "ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ສາມາດພັບເຄິ່ງຕາມເສັ້ນແກນໄດ້ພໍດີ! ສ່ວນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ແມ່ນພັບປິ່ນ 180 ອົງສາ ແລ້ວຊ້ອນກັນໄດ້ພໍດີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ (Line Symmetry)"}
          </h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 250px", fontSize: "16px", lineHeight: "1.6" }}>
              {"ຮູບພາບທີ່ສາມາດພັບເຄິ່ງຕາມເສັ້ນຊື່ໜຶ່ງ (ແກນເຄິ່ງຄື / Axis of Symmetry) ແລ້ວທັງສອງສ່ວນຊ້ອນກັນໄດ້ພໍດີ."}
            </div>
            <svg width="120" height="90">
              {/* Symmetric Butterfly or shape */}
              <path d="M 60,10 L 90,40 L 60,80 L 30,40 Z" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
              {/* Symmetry Axis Line */}
              <line x1="60" y1="5" x2="60" y2="85" stroke="red" strokeWidth="1.5" strokeDasharray="4,4" />
              <text x="65" y="80" fontSize="10" fill="red">{"ແກນ"}</text>
            </svg>
          </div>

          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}>
            {"2. ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (Point Symmetry)"}
          </h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 250px", fontSize: "16px", lineHeight: "1.6" }}>
              {"ຮູບພາບທີ່ເມື່ອປິ່ນອ້ອມເມັດໃຈກາງ (ເມັດເຄິ່ງຄື / Center of Symmetry) ໄປ 180° ແລ້ວມັນຈະທັບກັບຮູບເດີມພໍດີ."}
            </div>
            <svg width="120" height="90">
              {/* Parallelogram (Point Symmetric) */}
              <path d="M 30,25 L 100,25 L 90,65 L 20,65 Z" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
              <circle cx="60" cy="45" r="4" fill="red" />
              <text x="65" y="50" fontSize="10" fill="red">{"ເມັດ"}</text>
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
              {"ຈົ່ງຈຳແນກປະເພດຮູບເຄິ່ງຄືກັນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຮູບວົງມົນ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ຫຼື ບໍ່?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຮູບສີ່ແຈຂ້າງຂະໜານ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ຫຼື ບໍ່?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບຈະຕຸລັດ (Square) ມີແກນເຄິ່ງຄືທັງໝົດຈັກແກນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ແກນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຕົວອັກສອນພາສາອັງກິດ 'S' ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ຫຼື ບໍ່?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ຈື່ໄວ້ວ່າ ຖ້າເປັນຮູບຈະຕຸລັດ ຫຼື ວົງມົນ ຈະມີຄວາມສົມມາດຫຼາຍຮູບແບບເລີຍເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບເຄິ່ງຄືກັນ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"⭐ ຮູບດາວ 5 ແຈສະເໝີ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ທີ່ມີແກນເຄິ່ງຄືທັງໝົດຈັກແກນ?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ແກນ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເພື່ອທົດສອບ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຮູບສາມແຈສະເໝີ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (ປິ່ນ 180° ແລ້ວທັບກັນພໍດີ) ຫຼື ບໍ່?"}
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
          answers: [<span key="1">{"(1) ແມ່ນ (ມີແກນຫຼາຍບໍ່ສິ້ນສຸດ), (2) ບໍ່ແມ່ນ (ແຕ່ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ), (3) 4 ແກນ, (4) ແມ່ນ (ປິ່ນ 180° ແລ້ວທັບກັນພໍດີ)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"5 ແກນ (ຍ້ອນແຕ່ລະແຈສາມາດຜ່ານໃຈກາງຫາຂ້າງກົງກັນຂ້າມໄດ້)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"ບໍ່ແມ່ນ (ຍ້ອນເມື່ອປິ່ນ 180° ແລ້ວ ຍອດສາມແຈຈະຊີ້ລົງລຸ່ມ ເຮັດໃຫ້ບໍ່ທັບກັບຮູບເດີມ)"}</span>],
        },
      ],
      advice:
        "ຮູບເຄິ່ງຄືກັນທັງສອງປະເພດແມ່ນມີຄວາມສວຍງາມ ແລະ ພົບເຫັນໄດ້ຫຼາຍໃນທຳມະຊາດ! ການຈຳແນກແກນ ແລະ ເມັດເຄິ່ງຄື ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈຄວາມສົມດຸນຂອງສິ່ງຕ່າງໆໄດ້ດີຂຶ້ນ.",
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

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u5_u6_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 5 & 6 added successfully.");
