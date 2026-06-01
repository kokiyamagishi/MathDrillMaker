const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

// Function to replace content inside a specific Unit segment
function updateUnitSegment(unitNumber, updateFunc) {
  const startRegex = new RegExp(`\\{[\\s]*\\n[\\s]*unitNumber:\\s*${unitNumber},`);
  const nextRegex = new RegExp(`\\{[\\s]*\\n[\\s]*unitNumber:\\s*${unitNumber + 1},`);
  
  const startMatch = content.match(startRegex);
  const nextMatch = content.match(nextRegex);
  
  if (!startMatch || !nextMatch) {
    console.error(`Could not locate Unit ${unitNumber} or Unit ${unitNumber + 1}!`);
    process.exit(1);
  }
  
  const unitStart = startMatch.index;
  const unitEnd = nextMatch.index;
  
  let segment = content.substring(unitStart, unitEnd);
  segment = updateFunc(segment);
  
  content = content.substring(0, unitStart) + segment + content.substring(unitEnd);
}

// ================= UNIT 9 (36, 37ページ) =================
console.log("Updating Unit 9...");
updateUnitSegment(9, (segment) => {
  // Update challengeProblems (36ページ)
  const challengeProblemsOldRegex = /challengeProblems:\s*\{[\s\S]+?\}\s*,\s*\n\s*summaryProblems:/;
  const challengeProblemsNew = `challengeProblems: {
      hintText:
        "ຮູບສີ່ແຈຂ້າງຂະໜານມີຂ້າງກົງກັນຂ້າມຍາວເທົ່າກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງຍາວເທົ່າກັນທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບສີ່ແຈຂ້າງຂະໜານລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 30,20 L 120,20 L 100,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="75" y="15" fontSize="14" textAnchor="middle">{"6 cm"}</text>
                    <text x="120" y="50" fontSize="14">{"4 cm"}</text>
                    <text x="50" y="85" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ຂ້າງ ? ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                    <span>{"cm"}</span>
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
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບສີ່ແຈລີລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 75,10 L 115,50 L 75,90 L 35,50 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="105" y="30" fontSize="14">{"5 cm"}</text>
                    <text x="45" y="80" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ຂ້າງ ? ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems:`;

  segment = segment.replace(challengeProblemsOldRegex, challengeProblemsNew);

  // Update summaryProblems (37ページ)
  const summaryProblemsOldRegex = /summaryProblems:\s*\[[\s\S]+?\]\s*,\s*\n\s*answers:/;
  const summaryProblemsNew = `summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈຂ້າງຂະໜານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💡 ຮູບສີ່ແຈຂ້າງຂະໜານມີຄຸນລັກສະນະຄື: ມຸມກົງກັນຂ້າມມີຂະໜາດເທົ່າກັນ."}
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <svg width="180" height="100">
                  <path d="M 30,20 L 130,20 L 110,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 25,70 A 15,15 0 0,0 20,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="28" y="60" fill="#2196F3" fontSize="14">{"70°"}</text>
                  <path d="M 115,20 A 15,15 0 0,0 120,32" fill="none" stroke="red" strokeWidth="2" />
                  <text x="105" y="35" fill="red" fontSize="16" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບຄາງໝູລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💡 ໃນຮູບຄາງໝູ, ຜົນບວກຂອງສອງມຸມທີ່ຢູ່ຂ້າງດຽວກັນລະຫວ່າງສອງເສັ້ນຂະໜານແມ່ນເທົ່າກັບ 180°."}
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <svg width="180" height="100">
                  <path d="M 40,20 L 140,20 L 160,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 23,70 A 15,15 0 0,0 18,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="25" y="60" fill="#2196F3" fontSize="14">{"110°"}</text>
                  <path d="M 45,20 A 15,15 0 0,0 52,32" fill="none" stroke="red" strokeWidth="2" />
                  <text x="42" y="38" fill="red" fontSize="16" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers:`;

  segment = segment.replace(summaryProblemsOldRegex, summaryProblemsNew);

  // Sync answers (Unit 9)
  const answersOldRegex = /answers:\s*\{[\s\S]+?\}\s*\}\s*$/;
  const answersNew = `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານ, (2) ຮູບສີ່ແຈລີ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) ຮູບຄາງໝູ, (4) ຮູບສີ່ແຈລີ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 6 cm, (2) 5 cm"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"70° (ມຸມກົງກັນຂ້າມເທົ່າກັນ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="5">{"70° (ຍ້ອນ 180° - 110° = 70°)"}</span>],
        },
      ],
      advice:
        "ຮູບສີ່ແຈແຕ່ລະປະເພດມີຄຸນລັກສະນະສະເພາະຂອງມັນ! ການຈົດຈຳຄວາມຍາວຂ້າງ ແລະ ຂະໜາດມຸມຈະຊ່ວຍໃຫ້ແກ້ເລກໄດ້ງ່າຍຂຶ້ນ.",
    },
  }`;

  segment = segment.replace(answersOldRegex, answersNew);
  return segment;
});

// ================= UNIT 10 (39, 41ページ) =================
console.log("Updating Unit 10...");
updateUnitSegment(10, (segment) => {
  // Update basicProblems (39ページ)
  const basicProblemsOldRegex = /basicProblems:\s*\[[\s\S]+?\]\s*,\s*\n\s*challengeProblems:/;
  const basicProblemsNew = `basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນιຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1/2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              {"ຈົ່ງປ່ຽນເລກທົດສະນιຍົມລຸ່ມນີ້ໃຫ້ເປັນເລກສ່ວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 0.3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 0.7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems:`;

  segment = segment.replace(basicProblemsOldRegex, basicProblemsNew);

  // Update summaryProblems (41ページ)
  const summaryProblemsOldRegex = /summaryProblems:\s*\[[\s\S]+?\]\s*,\s*\n\s*answers:/;
  const summaryProblemsNew = `summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມເລກສ່ວນທີ່ຖືກຕ້ອງໃស່ບ່ອນຫວ່າງ (1) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ແມ່ນເລກສ່ວນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຕື່ມເລກທົດສະນιຍົມທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ (2) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "70%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ແມ່ນເລກທົດສະນιຍົມ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers:`;

  segment = segment.replace(summaryProblemsOldRegex, summaryProblemsNew);

  // Sync answers (Unit 10)
  const answersOldRegex = /answers:\s*\{[\s\S]+?\}\s*\}\s*$/;
  const answersNew = `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 0.1, (2) 0.5"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 3/10, (4) 7/10"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 0.4, (2) 1.6"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"(3) >, (4) <"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"3/10"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"0.7"}</span>],
        },
      ],
      advice:
        "ເລກສ່ວນ 1/10 ແລະ ເເລກທົດສະນິຍົມ 0.1 ແມ່ນມີຄ່າເທົ່າກັນ! ຝຶກປຽບທຽບໃສ່ເສັ້ນຈຳນວນເລື້ອຍໆເດີ!",
    },
  }`;

  segment = segment.replace(answersOldRegex, answersNew);
  return segment;
});

// ================= UNIT 11 (43, 44, 45ページ) =================
console.log("Updating Unit 11...");
updateUnitSegment(11, (segment) => {
  // Update basicProblems (43ページ)
  const basicProblemsOldRegex = /basicProblems:\s*\[[\s\S]+?\]\s*,\s*\n\s*challengeProblems:/;
  const basicProblemsNew = `basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 0.46 + 0.23 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1.57 - 0.34 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) ມີເຊືອກຍາວ 0.85 m ຕັດອອກ 0.15 m ຈະເຫຼືອ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) ນ້ຳສົ້ມ 2.45 L ຕື່ມອີກ 1.2 L ຈະມີທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"L"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems:`;

  segment = segment.replace(basicProblemsOldRegex, basicProblemsNew);

  // Update challengeProblems (44ページ)
  const challengeProblemsOldRegex = /challengeProblems:\s*\{[\s\S]+?\}\s*,\s*\n\s*summaryProblems:/;
  const challengeProblemsNew = `challengeProblems: {
      hintText: "1 ຂີດໝາຍນ້ອຍໆ ຢູ່ເທິງເສັ້ນຈຳນວນແມ່ນເທົ່າກັບ 0.01 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນລຸ່ມນີ້ ແລ້ວຂຽນໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "10px" }}>
                <div style={{ position: "relative", height: "50px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                  <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"1.2"}</div>
                  
                  <div style={{ position: "absolute", bottom: "-4px", left: "50%", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 15px)", fontWeight: "bold" }}>{"1.3"}</div>

                  <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1.4"}</div>

                  {/* Ticks */}
                  {[...Array(20)].map((_, i) => {
                    if (i === 10) return null;
                    return (
                      <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 5) + "%", width: "1px", height: i % 5 === 0 ? "10px" : "6px", backgroundColor: "#666" }}></div>
                    );
                  })}

                  <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", color: "#E91E63", fontWeight: "bold" }}>{"↓ (1)"}</div>
                  <div style={{ position: "absolute", bottom: "10px", left: "75%", transform: "translateX(-50%)", color: "#E91E63", fontWeight: "bold" }}>{"↓ (2)"}</div>
                </div>

                <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(1) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(2) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ่างໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "22px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(3) 2.45"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"2.4"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(4) 0.08"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"0.1"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems:`;

  segment = segment.replace(challengeProblemsOldRegex, challengeProblemsNew);

  // Update summaryProblems (45ページ)
  const summaryProblemsOldRegex = /summaryProblems:\s*\[[\s\S]+?\]\s*,\s*\n\s*answers:/;
  const summaryProblemsNew = `summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 0.24 + 0.57 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 3.82 - 1.45 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📘 ນາງ ສີດາ ມີນ້ຳ 1.35 L ແລະ ທ້າວ ສົມພອນ ມີນ້ຳ 0.8 L. ຖ້າເອົານ້ຳຂອງທັງສອງຄົນມາເທໃສ່ກັນ ຈະມີນ້ຳທັງໝົດຈັກ L?"}
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
    answers:`;

  segment = segment.replace(summaryProblemsOldRegex, summaryProblemsNew);

  // Sync answers (Unit 11)
  const answersOldRegex = /answers:\s*\{[\s\S]+?\}\s*\}\s*$/;
  const answersNew = `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 0.69, (2) 1.23"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 0.7 m, (4) 3.65 L"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 1.26, (2) 1.35"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"(3) >, (4) <"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"(1) 0.81, (2) 2.37"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"2.15 L (ຍ້ອນ 1.35 + 0.8 = 2.15)"}</span>],
        },
      ],
      advice:
        "ການບວກລົບເລກທົດສະນິຍົມ 2 ຕຳແໜ່ງ ແມ່ນຕັ້ງບັ້ງເລກໃຫ້ຈຸດທົດສະນິຍົມຊື່ກັນ ແລ້ວຄິດໄລ່ຄືເລກທຳມະດາເດີ້!",
    },
  }`;

  segment = segment.replace(answersOldRegex, answersNew);
  return segment;
});

// ================= UNIT 17 (68, 69ページ) =================
console.log("Updating Unit 17...");
updateUnitSegment(17, (segment) => {
  // Update challengeProblems (68ページ)
  const challengeProblemsOldRegex = /challengeProblems:\s*\{[\s\S]+?\}\s*,\s*\n\s*summaryProblems:/;
  const challengeProblemsNew = `challengeProblems: {
      hintText: "ຊອກຫາເນື້ອທີ່ທັງໝົດໂດຍການແບ່ງຮູບ ຫຼື ເອົາຮູບໃຫຍ່ລົບຮູບນ້ອຍອອກເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບປະສົມລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="200" height="120">
                    {/* A cutout shape: 10cm x 6cm rect with a 4cm x 3cm cutout in bottom right */}
                    <path d="M 20,20 L 160,20 L 160,60 L 100,60 L 100,100 L 20,100 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="90" y="15" fontSize="12">{"10 cm"}</text>
                    <text x="5" y="65" fontSize="12">{"6 cm"}</text>
                    {/* Top part is 6cm wide */}
                    <text x="125" y="55" fontSize="12">{"3 cm"}</text>
                    <text x="60" y="115" fontSize="12">{"6 cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ເນື້ອທີ່ ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
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
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງດິນປູກຝັງລຸ່ມນີ້ເປັນ ອາ (a): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📘 ສວນຜັກຮູບສີ່ແຈສາກແຫ່ງໜຶ່ງ ມີຂະໜາດຄວາມກວ້າງ 20 m ແລະ ຄວາມຍາວ 30 m. ເນື້ອທີ່ຂອງສວນຜັກນີ້ຈະເທົ່າກັບຈັກ a?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"a"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems:`;

  segment = segment.replace(challengeProblemsOldRegex, challengeProblemsNew);

  // Update summaryProblems (69ページ)
  const summaryProblemsOldRegex = /summaryProblems:\s*\[[\s\S]+?\]\s*,\s*\n\s*answers:/;
  const summaryProblemsNew = `summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 400 m² ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"a"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 2 ha ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m²"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📘 ທົ່ງນາຮູບສີ່ແຈສາກແຫ່ງໜຶ່ງ ມີຄວາມຍາວ 200 m ແລະ ຄວາມກວ້າງ 150 m. ເນື້ອທີ່ທົ່ງນານີ້ມີຈັກ ເຮັກຕາ (ha)?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ha"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers:`;

  segment = segment.replace(summaryProblemsOldRegex, summaryProblemsNew);

  // Sync answers (Unit 17)
  const answersOldRegex = /answers:\s*\{[\s\S]+?\}\s*\}\s*$/;
  const answersNew = `answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 40 cm², (2) 15 m²"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 64 cm², (4) 28 cm²"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"48 cm² (60 - 12 = 48)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"6 a (ຍ້ອນ 20 × 30 = 600 m² = 6 a)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"(1) 4 a, (2) 20000 m²"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"3 ha (ຍ້ອນ 200 × 150 = 30000 m² = 3 ha)"}</span>],
        },
      ],
      advice:
        "1 a = 100 m² ແລະ 1 ha = 10000 m²! ການຊອກຫາເນື້ອທີ່ຮູບປະສົມແມ່ນໃຫ້ແບ່ງຮູບໃຫຍ່ອອກເປັນຮູບຍ່ອຍໆເດີ້!",
    },
  }`;

  segment = segment.replace(answersOldRegex, answersNew);
  return segment;
});

fs.writeFileSync(path, content, 'utf8');
console.log("SUCCESS: Reorganized and 10-point normalized all required target pages!");
