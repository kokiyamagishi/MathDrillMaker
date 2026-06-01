const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

const u9_u10_code = `  {
    unitNumber: 9,
    unitTitle: "ການຕັ້ງສາກ, ຂະໜານ ແລະ ຮູບສີ່ແຈ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເສັ້ນຕັ້ງສາກ, ເສັ້ນຂະໜານ ແລະ ຄຸນລັກສະນະຂອງຮູບສີ່ແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 84-98",
    keyPoints: {
      hint: {
        text: "ຮູບຄາງໝູມີ 1 ຄູ່ຂ້າງຂະໜານກັນ. ຮູບສີ່ແຈຂ້າງຂະໜານມີ 2 ຄູ່ຂ້າງຂະໜານກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງເທົ່າກັນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບສີ່ແຈປະເພດຕ່າງໆ (Types of Quadrilaterals)"}
          </h3>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "space-around" }}>
            {/* Trapezoid */}
            <div style={{ border: "2px solid #4CAF50", borderRadius: "8px", padding: "16px", backgroundColor: "#E8F5E9", width: "200px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px" }}>{"ຮູບຄາງໝູ (Trapezoid)"}</strong>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="120" height="80">
                  <path d="M 30,20 L 90,20 L 110,60 L 10,60 Z" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
                </svg>
              </div>
              <span style={{ fontSize: "14px" }}>{"ມີ 1 ຄູ່ຂ້າງຂະໜານກັນ"}</span>
            </div>

            {/* Parallelogram */}
            <div style={{ border: "2px solid #2196F3", borderRadius: "8px", padding: "16px", backgroundColor: "#E3F2FD", width: "200px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px" }}>{"ຮູບສີ່ແຈຂ້າງຂະໜານ"}</strong>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="120" height="80">
                  <path d="M 30,20 L 110,20 L 90,60 L 10,60 Z" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
                </svg>
              </div>
              <span style={{ fontSize: "14px" }}>{"ມີ 2 ຄູ່ຂ້າງຂະໜານກັນ"}</span>
            </div>

            {/* Rhombus */}
            <div style={{ border: "2px solid #9C27B0", borderRadius: "8px", padding: "16px", backgroundColor: "#F3E5F5", width: "200px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px" }}>{"ຮູບສີ່ແຈລີ (Rhombus)"}</strong>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="120" height="80">
                  <path d="M 60,10 L 100,40 L 60,70 L 20,40 Z" fill="rgba(156, 39, 176, 0.2)" stroke="#9C27B0" strokeWidth="2" />
                </svg>
              </div>
              <span style={{ fontSize: "14px" }}>{"ມີ 4 ຂ້າງຍາວເທົ່າກັນ"}</span>
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
              {"ຈົ່ງບອກຊື່ຂອງຮູບສີ່ແຈຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ (ຮູບຄາງໝູ, ຮູບສີ່ແຈຂ້າງຂະໜານ, ຮູບສີ່ແຈລີ): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "16px" }}>
              {/* Problem 1.1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(1)"}</span>
                <svg width="120" height="80">
                  <path d="M 30,20 L 100,20 L 80,60 L 10,60 Z" fill="none" stroke="#333" strokeWidth="2" />
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(2)"}</span>
                <svg width="120" height="80">
                  <path d="M 60,10 L 95,40 L 60,70 L 25,40 Z" fill="none" stroke="#333" strokeWidth="2" />
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບສີ່ແຈ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບສີ່ແຈທີ່ມີຂ້າງຂະໜານກັນພຽງແຕ່ 1 ຄູ່ ເອີ້ນວ່າ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຮູບສີ່ແຈທີ່ມີ 2 ຄູ່ຂ້າງຂະໜານກັນ ແລະ ມີ 4 ຂ້າງຍາວເທົ່າກັນ ເອີ້ນວ່າ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ຮູບສີ່ແຈຂ້າງຂະໜານມີຂ້າງກົງກັນຂ້າມຍາວເທົ່າກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງຍາວເທົ່າກັນທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                {/* Parallelogram dimension */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 30,20 L 120,20 L 100,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="75" y="15" fontSize="14" textAnchor="middle">{"6 cm"}</text>
                    <text x="120" y="50" fontSize="14">{"4 cm"}</text>
                    <text x="50" y="85" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <span>{"(1) ຂ້າງ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                  <span>{"cm"}</span>
                </div>

                {/* Rhombus dimension */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 75,10 L 115,50 L 75,90 L 35,50 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="105" y="30" fontSize="14">{"5 cm"}</text>
                    <text x="45" y="80" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <span>{"(2) ຂ້າງ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                  <span>{"cm"}</span>
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
                  {/* Known angle 70 at bottom-left (10,70) */}
                  <path d="M 25,70 A 15,15 0 0,0 20,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="28" y="60" fill="#2196F3" fontSize="14">{"70°"}</text>
                  
                  {/* Unknown angle ? at top-right (130,20) */}
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
    ],
    answers: {
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
          answers: [<span key="3">{"(1) 6 cm (ຂ້າງກົງກັນຂ້າມ), (2) 5 cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"70° (ມຸມກົງກັນຂ້າມເທົ່າກັນ)"}</span>],
        },
      ],
      advice:
        "ຮູບສີ່ແຈແຕ່ລະປະເພດມີຄຸນລັກສະນະສະເພາະຂອງມັນ! ການຈົດຈຳຄວາມຍາວຂ້າງ ແລະ ຂະໜາດມຸມຈະຊ່ວຍໃຫ້ແກ້ເລກໄດ້ງ່າຍຂຶ້ນ.",
    },
  },

  {
    unitNumber: 10,
    unitTitle: "ຄວາມສຳພັນຂອງຈຳນວນຖ້ວນ, ທົດສະນິຍົມ ແລະ ເລກສ່ວນ",
    unitGoal: "ເຂົ້າໃຈຄວາມສຳພັນ ແລະ ການປ່ຽນຮູບແບບລະຫວ່າງຈຳນວນຖ້ວນ, ເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 99-104",
    keyPoints: {
      hint: {
        text: "ເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມສາມາດສະແດງປະລິມານດຽວກັນໄດ້ ເຊັ່ນ: 1/10 ແມ່ນເທົ່າກັບ 0.1 ແລະ 1/2 ແມ່ນເທົ່າກັບ 0.5 ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຄວາມສຳພັນລະຫວ່າງເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມ"}
          </h3>

          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", border: "1px solid #ccc" }}>
            <p style={{ fontWeight: "bold", fontSize: "18px", margin: "0 0 16px 0", textAlign: "center" }}>
              {"ປຽບທຽບໃສ່ເສັ້ນຈຳນວນດຽວກັນ:"}
            </p>
            
            {/* Number Line showing Fractions & Decimals */}
            <div style={{ position: "relative", height: "80px", width: "100%", maxWidth: "500px", margin: "0 auto", borderBottom: "4px solid #333" }}>
              {/* Left End */}
              <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
              <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
              <div style={{ position: "absolute", top: "-25px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>

              {/* Ticks & Labels */}
              {[...Array(10)].map((_, i) => {
                if (i === 0) return null;
                const pos = i * 10;
                return (
                  <div key={i} style={{ position: "absolute", bottom: "-4px", left: pos + "%" }}>
                    <div style={{ width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                    {i === 5 && (
                      <>
                        <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontSize: "14px", fontWeight: "bold" }}>{"0.5"}</div>
                        <div style={{ position: "absolute", top: "-25px", left: "-10px", fontSize: "14px", fontWeight: "bold" }}>{"1/2"}</div>
                      </>
                    )}
                  </div>
                );
              })}

              {/* Right End */}
              <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
              <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
              <div style={{ position: "absolute", top: "-25px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "35px", fontSize: "18px" }}>
              <div style={{ padding: "8px 16px", backgroundColor: "#FFF", borderRadius: "6px", border: "1px solid #ccc" }}>
                <strong>{"0.1 = 1/10"}</strong>
              </div>
              <div style={{ padding: "8px 16px", backgroundColor: "#FFF", borderRadius: "6px", border: "1px solid #ccc" }}>
                <strong>{"0.5 = 5/10 = 1/2"}</strong>
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
              {"ຈົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນິຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄะແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 5/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 2/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 1/2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນເລກທົດສະນິຍົມກ່ອນແລ້ວຈຶ່ງປຽບທຽບເດີ້! (1/2 = 0.5)",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "22px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(1) 0.6"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"1/2"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(2) 3/10"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"0.3"}</span>
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
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🥛 ນາງ ນະລິນ ມີນ້ຳນົມ 1/2 L ແລະ ນາງ ມະລິ ມີນ້ຳນົມ 0.4 L. ໃຜມີນ້ຳນົມຫຼາຍກວ່າກັນ?"}
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "40px", marginTop: "30px" }}>
              
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                {/* 0 */}
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                
                {/* Ticks */}
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}

                {/* 1 */}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>

                {/* Arrow at 3/10 (0.3) */}
                <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                </div>
                {/* Arrow at 7/10 (0.7) */}
                <div style={{ position: "absolute", bottom: "10px", left: "70%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(1) ແມ່ນເລກສ່ວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) ແມ່ນເລກທົດສະນິຍົມ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
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
          answers: [<span key="1">{"(1) 0.1, (2) 0.5, (3) 0.2, (4) 0.5"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) > (ຍ້ອນ 0.6 > 0.5), (2) = (ຍ້ອນ 0.3 = 0.3)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3">{"ນາງ ນະລິນ ຫຼາຍກວ່າ (ຍ້ອນ 1/2 = 0.5 L, 0.5 > 0.4)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"(1) 3/10, (2) 0.7"}</span>],
        },
      ],
      advice:
        "ການໃຊ້ເສັ້ນຈຳນວນຈະຊ່ວຍໃຫ້ເຮົາເຫັນພາບຄວາມຍາວ ແລະ ປຽບທຽບເລກສ່ວນ ກັບເລກທົດສະນິຍົມໄດ້ຢ່າງຊັດເຈນ!",
    },
  },
`;

// Find where the unit array ends
const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// We insert u9_u10_code right before the last '];' but with a comma after the unit 8 object.
const newContent = content.substring(0, replacementPoint) + ',\n' + u9_u10_code + '];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 9 & 10 added successfully.");
