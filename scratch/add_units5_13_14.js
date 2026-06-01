const fs = require('fs');

const path = 'src/data/units5.tsx';
let content = fs.readFileSync(path, 'utf8');

const u13_u14_code = `  {
    unitNumber: 13,
    unitTitle: "ອັດຕາສ່ວນພົວພັນ ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນພົວພັນ (比例) ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ (反比例), ການຕື່ມຂໍ້ມູນໃສ່ຕາຕະລາງ ແລະ ການຊອກຫາສູດການພົວພັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 146-159",
    keyPoints: {
      hint: {
        text: "ອັດຕາສ່ວນພົວພັນ: ເມື່ອ x ເພີ່ມ 2, 3 ເທື່ອ, y ກໍເພີ່ມ 2, 3 ເທື່ອ. ອັດຕາສ່ວນພົວພັນປີ້ນ: ເມື່ອ x ເພີ່ມ 2, 3 ເທື່ອ, y ຈະຫຼຸດລົງ 2, 3 ເທື່ອ (1/2, 1/3) ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ (Proportion & Inverse)"}
          </h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
            {/* Proportion */}
            <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px" }}>
              <strong style={{ fontSize: "18px", color: "#2E7D32" }}>{"ອັດຕາສ່ວນພົວພັນ (Proportion)"}</strong>
              <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ເມື່ອ x ເພີ່ມຂຶ້ນ, y ກໍເພີ່ມຂຶ້ນສະໝໍ່າສະເໝີ."}</p>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>{"ສູດ: y = a × x"}</div>
            </div>

            {/* Inverse Proportion */}
            <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#FFF3E0", border: "2px solid #FF9800", borderRadius: "8px" }}>
              <strong style={{ fontSize: "18px", color: "#E65100" }}>{"ອັດຕາສ່ວນພົວພັນປີ້ນ (Inverse)"}</strong>
              <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ເມື່ອ x ເພີ່ມຂຶ້ນ, y ຈະຫຼຸດລົງສະໝໍ່າສະເໝີ."}</p>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>{"ສູດ: y = a ÷ x (ຫຼື x × y = a)"}</div>
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
              {"ຈົ່ງສັງເກດຕາຕະລາງ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ overflowX: "auto", padding: "8px" }}>
              {/* Inverse Proportion Table: Area of Rectangle is 24 cm2 */}
              <table style={{ minWidth: "300px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວງກວ້າງ x (cm)"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"2"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"3"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"4"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"6"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ລວງຍາວ y (cm)"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(A)"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(B)"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(C)"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ຈຳນວນ (A) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) ຈຳນວນ (B) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) ຈຳນວນ (C) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຄວາມສຳພັນລະຫວ່າງ x ແລະ y ໃນຕາຕະລາງນີ້ ແມ່ນອັດຕາສ່ວນພົວພັນປີ້ນ ຫຼື ບໍ່?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "⚙️ ໂຈດບັນຫາຟັນເຟືອງ (齿轮) ແມ່ນເປັນອັດຕາສ່ວນພົວພັນປີ້ນ! ຜົນຄູນຂອງຈຳນວນແຂ້ວ ແລະ ຈຳນວນຮອບປິ່ນຂອງທັງສອງຟັນເຟືອງ ຈະເທົ່າກັນສະເໝີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຟັນເຟືອງ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"⚙️ ຟັນເຟືອງ A ມີແຂ້ວ 24 ແຂ້ວ ປິ່ນໄດ້ 6 ຮອບຕໍ່ນາທີ. ມັນຂົບກັບຟັນເຟືອງ B ທີ່ມີແຂ້ວ 16 ແຂ້ວ. ຟັນເຟືອງ B ຈະປິ່ນໄດ້ຈັກຮອບຕໍ່ນາທີ?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຮອບ/ນາທີ"}</span>
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
                {"📐 ຖ້າຊື້ດິນສໍ 3 ກ້ານ ລາຄາ 15 ກີບ. ຖ້າຊື້ 9 ກ້ານ ຕ້ອງຈ່າຍເງິນ 45 ກີບ. ຄວາມສຳພັນລະຫວ່າງຈຳນວນດິນສໍ ແລະ ລາຄາ ແມ່ນອັດຕາສ່ວນພົວພັນ ຫຼື ອັດຕາສ່ວນພົວພັນປີ້ນ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
          answers: [<span key="1">{"(1) 8 (ຍ້ອນ 24÷3), (2) 6 (ຍ້ອນ 24÷4), (3) 4 (ຍ້ອນ 24÷6), (4) ແມ່ນ (ຍ້ອນຜົນຄູນ x × y = 24 ຄົງທີ່ສະເໝີ)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"9 ຮອບ (ຍ້ອນ 24 × 6 = 144, ດັ່ງນັ້ນ 144 ÷ 16 = 9 ຮອບ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"ອັດຕາສ່ວນພົວພັນ (ຍ້ອນເມື່ອຈຳນວນດິນສໍເພີ່ມຂຶ້ນ 3 ເທື່ອ, ລາຄາກໍເພີ່ມຂຶ້ນ 3 ເທື່ອ 15 × 3 = 45)"}</span>],
        },
      ],
      advice:
        "ອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ ແມ່ນພື້ນຖານທີ່ສຳຄັນຫຼາຍໃນການວິເຄາະສອງປະລິມານ! ຈື່ຈຳວິທີການກວດສອບຜົນຄູນ (ພົວພັນປີ້ນ) ແລະ ຜົນຫານ (ພົວພັນ) ເດີ້.",
    },
  },

  {
    unitNumber: 14,
    unitTitle: "ສ່ວນຮ້ອຍ ແລະ ກຣາບ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງສ່ວນຮ້ອຍ (%), ສູດການຊອກຫາອັດຕາສ່ວນ (割合), ການຄິດໄລ່ລາຄາຫຼຸດ ແລະ ການອ່ານກຣາບເສັ້ນສະແດງ (ກຣາບບົງ ແລະ ກຣາບວົງມົນ)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 160-171",
    keyPoints: {
      hint: {
        text: "ສ່ວນຮ້ອຍ (%) ແມ່ນການປຽບທຽບປະລິມານໂດຍກຳນົດໃຫ້ປະລິມານພື້ນຖານເປັນ 100! ຈື່ສູດ: ອັດຕາສ່ວນ = ປະລິມານທີ່ສົມທຽບ ÷ ປະລິມານພື້ນຖານ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄິດໄລ່ອັດຕາສ່ວນ ແລະ ສ່ວນຮ້ອຍ (Percentage Formulas)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
            <div><strong>{"• ອັດຕາສ່ວນ = ປະລິມານທີ່ສົມທຽບ ÷ ປະລິມານພື້ນຖານ"}</strong></div>
            <div><strong>{"• ສ່ວນຮ້ອຍ (%) = ອັດຕາສ່ວນ × 100"}</strong></div>
            <div style={{ fontSize: "15px", color: "#555", marginTop: "8px" }}>
              {"ຕົວຢ່າງ: ໃນຫ້ອງຮຽນມີ 40 ຄົນ, ເສັງຜ່ານ 30 ຄົນ. ສ່ວນຮ້ອຍແມ່ນ: 30 ÷ 40 × 100 = 0.75 × 100 = 75%."}
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
              {"ຈົ່ງຄິດໄລ່ຕາມສູດສ່ວນຮ້ອຍລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ມີນັກຮຽນທັງໝົດ 50 ຄົນ, ມັກເຕະບານ 20 ຄົນ. ນັກຮຽນທີ່ມັກເຕະບານກວມຈັກ %?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"%"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ເສື້ອໂຕໜຶ່ງລາຄາ 1,200 ກີບ. ຖ້າຫຼຸດລາຄາ 20%, ຈະໄດ້ຫຼຸດລາຄາຈັກກີບ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຈາກຂໍ້ (2), ລາຄາເສື້ອຫຼັງຈາກຫຼຸດແລ້ວແມ່ນຈັກກີບ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📈 ໃນກຣາບວົງມົນ ຫຼື ກຣາບບົງ, ຜົນບວກຂອງທຸກໆສ່ວນຈະຕ້ອງເທົ່າກັບ 100% ສະເໝີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຈາກກຣາບ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
                <svg width="150" height="150">
                  {/* Circle chart representation */}
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 75,75 L 75,15" stroke="#333" strokeWidth="1.5" />
                  <path d="M 75,75 L 135,75" stroke="#333" strokeWidth="1.5" />
                  <path d="M 75,75 L 15,75" stroke="#333" strokeWidth="1.5" />
                  <text x="95" y="45" fontSize="12" fontWeight="bold">{"A: 25%"}</text>
                  <text x="95" y="110" fontSize="12" fontWeight="bold">{"B: 25%"}</text>
                  <text x="35" y="80" fontSize="12" fontWeight="bold">{"C: ?"}</text>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                  <div>{"(1) ສ່ວນຮ້ອຍຂອງກຸ່ມ C ໃນກຣາບວົງມົນນີ້ ແມ່ນຈັກ %?"}</div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"%"}</span>
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
              {"ຈົ່ງແກ້ໂջດບັນຫາສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🍬 ມີເຂົ້າໜົມທັງໝົດ 80 ກ້ອນ, ແບ່ງໃຫ້ນັກຮຽນໄປ 40%. ຈະເຫຼືອເຂົ້າໜົມທັງໝົດຈັກກ້ອນ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກ້ອນ"}</span>
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
          answers: [<span key="1">{"(1) 40% (20 ÷ 50 × 100), (2) 240 ກີບ (1,200 × 0.2 = 240), (3) 960 ກີບ (1,200 - 240)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"50% (ຍ້ອນວົງມົນທັງໝົດແມ່ນ 100%, 100 - (25 + 25) = 50)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"48 ກ້ອນ (ຍ້ອນແບ່ງໄປ 80 × 0.4 = 32 ກ້ອນ, ເຫຼືອແມ່ນ 80 - 32 = 48 ກ້ອນ)"}</span>],
        },
      ],
      advice:
        "ສ່ວນຮ້ອຍແລະກຣາບຊ່ວຍໃຫ້ເຮົາຈັດການຂໍ້ມູນທີ່ມີຄວາມຊັບຊ້ອນໃຫ້ເບິ່ງງ່າຍ ແລະ ສາມາດວິເຄາະໄດ້ດີຫຼາຍ! ຈື່ຈຳວິທີການປ່ຽນສ່ວນຮ້ອຍໃຫ້ເປັນເລກທົດສະນິຍົມ (ຕົວຢ່າງ 40% = 0.4) ຈະຊ່ວຍໃຫ້ຄິດໄລ່ໄດ້ໄວຂຶ້ນ.",
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

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u13_u14_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 13 & 14 added successfully.");
