const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

const u11_u12_code = `  {
    unitNumber: 11,
    unitTitle: "ວິທີຈັດການຂໍ້ມູນ",
    unitGoal: "ຮຽນຮູ້ການຈັດການຂໍ້ມູນ ແລະ ການອ່ານຕາຕະລາງສອງທາງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 105-109",
    keyPoints: {
      hint: {
        text: "ຕາຕະລາງສອງທາງ (Two-way table) ຊ່ວຍໃຫ້ເຮົາຈັດລະບຽບຂໍ້ມູນທີ່ມີສອງລັກສະນະໄດ້ງ່າຍຂຶ້ນ ແລະ ເຫັນຄວາມສຳພັນລະຫວ່າງຂໍ້ມູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຕາຕະລາງສອງທາງ (Two-Way Tables)"}
          </h3>
          <p style={{ fontSize: "20px" }}>
            {"ຕາຕະລາງທີ່ຈັດລະບຽບຂໍ້ມູນຕາມສອງປະເພດ (ເຊັ່ນ: ປະເພດກິລາ ແລະ ຂັ້ນຮຽນ) ເອີ້ນວ່າ ຕາຕະລາງສອງທາງ."}
          </p>
          
          <div style={{ backgroundColor: "#FFF8E1", padding: "16px", borderRadius: "8px", border: "2px solid #FF9800" }}>
            <p style={{ fontWeight: "bold", margin: "0 0 12px 0", fontSize: "18px" }}>
              {"ຕົວຢ່າງ: ກິລາທີ່ນັກຮຽນມັກ (ຄົນ)"}
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: "18px", backgroundColor: "#FFF" }}>
              <thead>
                <tr style={{ backgroundColor: "#FFE082" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ກິລາ / ຂັ້ນຮຽນ"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ປ.4"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ປ.5"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ເຕະບານ"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"15"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"27"}</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ບານບ້ວງ"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"8"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"10"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"18"}</td>
                </tr>
                <tr style={{ backgroundColor: "#ECEFF1", fontWeight: "bold" }}>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"20"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"25"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"45"}</td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງເບິ່ງຕາຕະລາງ \"ກິລາທີ່ນັກຮຽນມັກ\" ດ້ານເທິງ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ນັກຮຽນຊັ້ນ ປ.4 ທີ່ມັກ ເຕະບານ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ນັກຮຽນຊັ້ນ ປ.5 ທີ່ມັກ ບານບ້ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຈຳນວນນັກຮຽນທັງໝົດທີ່ມັກ ເຕະບານ (ທັງ ປ.4 ແລະ ປ.5) ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ຊອກຫາຄ່າໃນຊ່ອງຫວ່າງໂດຍການບວກ ຫຼື ລົບຕົວເລກໃນແຖວ ຫຼື ຖັນດຽວກັນເດີ!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ໃນຕາຕະລາງຫວ່າງລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ)"}</span>
              </p>
              <div style={{ padding: "16px" }}>
                <table style={{ width: "100%", maxWidth: "500px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#E0F2F1" }}>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ໝາກໄມ້ / ເພດ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຊາຍ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຍິງ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໝາກມ່ວງ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"15"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"25"}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໝາກກ້ວຍ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"20"}</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ECEFF1", fontWeight: "bold" }}>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"23"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"22"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}><span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px" }}></span></td>
                    </tr>
                  </tbody>
                </table>
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
              {"ຈົ່ງຕອບຄຳຖາມຈາກຕາຕະລາງ \"ໝາກໄມ້ທີ່ມັກ\" ດ້ານເທິງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຈຳນວນຜູ້ຍິງທີ່ມັກ ໝາກມ່ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຈຳນວນນັກຮຽນທັງໝົດ (ຊາຍ ແລະ ຍິງ) ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
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
          answers: [<span key="1">{"(1) 12 ຄົນ, (2) 10 ຄົນ, (3) 27 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"ໝາກມ່ວງຍິງ: 10 ຄົນ (25-15), ໝາກກ້ວຍຊາຍ: 8 ຄົນ (20-12), ລວມທັງໝົດ: 45 ຄົນ (23+22)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 10 ຄົນ, (2) 45 ຄົນ"}</span>],
        },
      ],
      advice:
        "ການອ່ານແຖວ (Row) ແລະ ຖັນ (Column) ໃຫ້ຕັດກັນ ຈະຊ່ວຍໃຫ້ຊອກຫາຂໍ້ມູນທີ່ຕ້ອງການໄດ້ຢ່າງວ່ອງໄວ ແລະ ຖືກຕ້ອງ!",
    },
  },

  {
    unitNumber: 12,
    unitTitle: "ຄຸນລັກສະນະມຸມໃນຂອງຮູບເລຂາຄະນິດ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະ ແລະ ຜົນບວກຂອງມຸມໃນຂອງຮູບສາມແຈ ແລະ ຮູບສີ່ແຈ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 110-115",
    keyPoints: {
      hint: {
        text: "ຜົນບວກຂອງມຸມໃນຂອງຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ ແລະ ຮູບສີ່ແຈແມ່ນ 360 ອົງສາສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຜົນບວກຂອງມຸມໃນຮູບເລຂາຄະນິດ"}
          </h3>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {/* Triangle interior angles */}
            <div style={{ flex: "1 1 250px", border: "2px solid #2196F3", borderRadius: "8px", padding: "16px", backgroundColor: "#E3F2FD", textAlign: "center" }}>
              <strong style={{ fontSize: "18px" }}>{"ຮູບສາມແຈ (Triangle)"}</strong>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="120" height="90">
                  <path d="M 60,10 L 110,80 L 10,80 Z" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
                  <text x="60" y="35" fontSize="12" fill="#333">{"a"}</text>
                  <text x="30" y="72" fontSize="12" fill="#333">{"b"}</text>
                  <text x="90" y="72" fontSize="12" fill="#333">{"c"}</text>
                </svg>
              </div>
              <strong style={{ fontSize: "20px", color: "#1565C0" }}>{"a + b + c = 180°"}</strong>
            </div>

            {/* Quadrilateral interior angles */}
            <div style={{ flex: "1 1 250px", border: "2px solid #4CAF50", borderRadius: "8px", padding: "16px", backgroundColor: "#E8F5E9", textAlign: "center" }}>
              <strong style={{ fontSize: "18px" }}>{"ຮູບສີ່ແຈ (Quadrilateral)"}</strong>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="120" height="90">
                  <path d="M 30,15 L 100,15 L 110,75 L 10,75 Z" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
                  {/* Diagonal line split into 2 triangles */}
                  <path d="M 30,15 L 110,75" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="35" y="32" fontSize="12">{"a"}</text>
                  <text x="85" y="32" fontSize="12">{"b"}</text>
                  <text x="95" y="65" fontSize="12">{"c"}</text>
                  <text x="25" y="65" fontSize="12">{"d"}</text>
                </svg>
              </div>
              <strong style={{ fontSize: "20px", color: "#2E7D32" }}>{"a + b + c + d = 360°"}</strong>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 คະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "16px" }}>
              {/* Problem 1.1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(1)"}</span>
                <svg width="120" height="80">
                  <path d="M 60,10 L 110,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="30" y="65" fontSize="12">{"60°"}</text>
                  <text x="80" y="65" fontSize="12">{"70°"}</text>
                  <text x="60" y="30" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(2)"}</span>
                <svg width="120" height="80">
                  {/* Right-angled triangle */}
                  <path d="M 20,10 L 100,70 L 20,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  {/* Right angle indicator */}
                  <path d="M 20,60 L 30,60 L 30,70" fill="none" stroke="#333" strokeWidth="1" />
                  <text x="80" y="65" fontSize="12">{"35°"}</text>
                  <text x="30" y="30" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບສີ່ແຈທີ່ມີ 3 ມຸມເທົ່າກັບ 90°, 85°, 105°. ມຸມທີ 4 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ມຸມພາຍໃນຂອງຮູບສາມແຈສະເໝີແມ່ນເທົ່າກັບ 60 ອົງສາໃນທຸກໆມຸມເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>{"(1) ຖ້າຕັດຮູບສີ່ແຈອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ ຈະໄດ້ຮູບສາມແຈຈັກຮູບ?"}</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="150" height="100">
                <path d="M 20,20 L 130,20 L 110,80 L 40,80 Z" fill="none" stroke="#333" strokeWidth="2" />
                <text x="45" y="35" fontSize="12">{"110°"}</text>
                <text x="100" y="35" fontSize="12">{"120°"}</text>
                <text x="45" y="75" fontSize="12">{"65°"}</text>
                <text x="90" y="75" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
              </svg>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ມຸມ ? ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
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
          answers: [<span key="1">{"(1) 50° (180 - (60+70)), (2) 55° (180 - (90+35))"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 80° (360 - (90+85+105))"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"ໄດ້ຮູບສາມແຈ 2 ຮູບ (ເຊິ່ງເປັນສາເຫດທີ່ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 180 × 2 = 360°)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"65° (360 - (110+120+65))"}</span>],
        },
      ],
      advice:
        "ຜົນບວກມຸມໃນແມ່ນຄວາມຮູ້ພື້ນຖານທີ່ສຳຄັນຫຼາຍ! ຖ້າຈື່ຜົນບວກ 180° ແລະ 360° ຈະສາມາດຊອກຫາຂະໜາດມຸມທີ່ເຫຼືອໄດ້ສະເໝີ.",
    },
  },
`;

// Find where the unit array ends
const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// We insert u11_u12_code right before the last '];' but with a comma after the unit 10 object.
const newContent = content.substring(0, replacementPoint) + ',\n' + u11_u12_code + '];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 11 & 12 added successfully.");
