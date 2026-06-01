const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

const u17_u18_code = `  {
    unitNumber: 17,
    unitTitle: "ເນື້ອທີ່",
    unitGoal: "ຮຽນຮູ້ສູດການຊອກຫາເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍເນື້ອທີ່ (cm², m², a, ha, km²)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 153-165",
    keyPoints: {
      hint: {
        text: "ເນື້ອທີ່ແມ່ນຂະໜາດຂອງໜ້າພຽງ! ຈື່ສູດເນື້ອທີ່ຮູບສີ່ແຈສາກ = ກວ້າງ × ຍາວ ແລະ ຮູບຈະຕຸລັດ = ຂ້າງ × ຂ້າງ ໃຫ້ດີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດເນື້ອທີ່ພື້ນຖານ (Area Formulas)"}
          </h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
            {/* Rectangle */}
            <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#1565C0" }}>{"ຮູບສີ່ແຈສາກ (Rectangle)"}</strong>
              <div style={{ margin: "12px 0", display: "flex", justifyContent: "center" }}>
                <svg width="120" height="70">
                  <rect x="10" y="10" width="100" height="50" fill="rgba(33, 150, 243, 0.2)" stroke="#2196F3" strokeWidth="2" />
                  <text x="60" y="40" fontSize="12" fill="#333" textAnchor="middle">{"ເນື້ອທີ່ = ກວ້າງ × ຍາວ"}</text>
                </svg>
              </div>
            </div>

            {/* Square */}
            <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#2E7D32" }}>{"ຮູບຈະຕຸລັດ (Square)"}</strong>
              <div style={{ margin: "12px 0", display: "flex", justifyContent: "center" }}>
                <svg width="80" height="80">
                  <rect x="10" y="10" width="60" height="60" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="2" />
                  <text x="40" y="45" fontSize="12" fill="#333" textAnchor="middle">{"ຂ້າງ × ຂ້າງ"}</text>
                </svg>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}>
            {"2. ຫົວໜ່ວຍເນື້ອທີ່ຂະໜາດໃຫຍ່ (Large Area Units)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#FFF3E0", border: "2px solid #FF9800", borderRadius: "8px" }}>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "18px", lineHeight: "1.8" }}>
              <li><strong>{"1 a (ອາ)"}</strong>{" = 100 m² (ຮູບຈະຕຸລັດຂ້າງ 10m)"}</li>
              <li><strong>{"1 ha (ເຮັກຕາ)"}</strong>{" = 10000 m² (ຮູບຈະຕຸລັດຂ້າງ 100m)"}</li>
              <li><strong>{"1 km² (ກິໂລຕາແມັດ)"}</strong>{" = 1000000 m² (ຮູບຈະຕຸລັດຂ້າງ 1km)"}</li>
            </ul>
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
              {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແနນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span>{"(1) ຮູບສີ່ແຈສາກທີ່ມີລວງກວ້າງ 6 cm ແລະ ລວງຍາວ 9 cm. ເນື້ອທີ່ແມ່ນ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span>{"(2) ຮູບຈະຕຸລັດທີ່ມີຄວາມຍາວຂ້າງ 8 cm. ເນື້ອທີ່ແມ່ນ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແနນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 3 a ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 5 ha ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ສຳລັບຮູບປະສົມ, ເຮົາສາມາດແບ່ງອອກເປັນຮູບສີ່ແຈສາກຍ່ອຍໆ 2 ຮູບ ແລ້ວເອົາເນື້ອທີ່ມາບວກກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບຫຼາຍແຈລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແနນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
                <svg width="160" height="140">
                  {/* L-shaped polygon */}
                  <path d="M 20,20 L 100,20 L 100,60 L 60,60 L 60,120 L 20,120 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="50" y="15" fontSize="12">{"8 cm"}</text>
                  <text x="5" y="75" fontSize="12">{"10 cm"}</text>
                  <text x="85" y="95" fontSize="12" fill="#888">{"(ແບ່ງຮູບ)"}</text>
                  <path d="M 60,20 L 60,60" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="110" y="45" fontSize="12">{"4 cm"}</text>
                  <text x="40" y="135" fontSize="12">{"4 cm"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ເນື້ອທີ່ທັງໝົດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແနນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🌾 ດິນນາຕອນໜຶ່ງເປັນຮູບສີ່ແຈສາກ ມີລວງກວ້າງ 20m ແລະ ລວງຍາວ 50m. ເນື້ອທີ່ຂອງດິນນາຕອນນີ້ເທົ່າກັບຈັກ a?"}
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 54 cm² (6 × 9), (2) 64 cm² (8 × 8)"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 300 m² (3 × 100), (4) 50000 m² (5 × 10000)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"56 cm² (ແບ່ງເປັນຮູບສີ່ແຈສາກຂະໜາດ 4×4 = 16 cm² ແລະ ຮູບຂະໜາດ 4×10 = 40 cm², 16 + 40 = 56)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"10 a (ຍ້ອນເນື້ອທີ່ແມ່ນ 20 × 50 = 1000 m², ແລະ 1000 m² = 10 a)"}</span>],
        },
      ],
      advice:
        "ການຄິດໄລ່ເນື້ອທີ່ຕ້ອງລະວັງຫົວໜ່ວຍໃຫ້ດີເດີ້! 1 a = 100 m² ສະເໝີ, ຖ້າຢາກປ່ຽນຈາກ m² ໄປເປັນ a ແມ່ນໃຫ້ຫານດ້ວຍ 100.",
    },
  },

  {
    unitNumber: 18,
    unitTitle: "ຮູບກ້ອງສາກ ແລະ ຮູບກ່ອງສາກ",
    unitGoal: "ເຂົ້າໃຈຄວາມແຕກຕ່າງລະຫວ່າງຮູບກ້ອງສາກ ແລະ ຮູບກ່ອງສາກ, ຮຽນຮູ້ອົງປະກອບ, ເສັ້ນສະແດງຄວາມສຳພັນ (ຕັ້ງສາກ ແລະ ຂະໜານ) ແລະ ແຜນວາດຄີ່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 166-175",
    keyPoints: {
      hint: {
        text: "ຮູບກ່ອງສາກ (Cuboid) ປະກອບດ້ວຍໜ້າຮູບສີ່ແຈສາກ. ສ່ວນຮູບກ້ອງສາກ (Cube) ແມ່ນປະກອບດ້ວຍໜ້າຮູບຈະຕຸລັດທີ່ເທົ່າກັນທັງ 6 ໜ້າເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອົງປະກອບຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px", textAlign: "center" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ອົງປະກອບ"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຈຳນວນ"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໜ້າ (Faces)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"6 ໜ້າ"}</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ຂ້າງ / ເສັ້ນຂອບ (Edges)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12 ຂ້າງ"}</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ຈອມ / 頂点 (Vertices)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"8 ຈອມ"}</td>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຊົງສາມມິຕິຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍးລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຮູບຊົງສາມມິຕິທີ່ມີ 6 ໜ້າເປັນຮູບຈະຕຸລັດທັງໝົດ ເອີ້ນວ່າຮູບ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີເສັ້ນຂອບທັງໝົດຈັກເສັ້ນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ເສັ້ນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີຈອມທັງໝົດຈັກຈອມ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຈອມ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຖ້າເຮົາເບິ່ງແຜນວາດຄີ່ຂອງຮູບກ້ອງສາກ, ມັນຈະມີໜ້າຮູບຈະຕຸລັດຈັກໜ້າ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ໜ້າ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ລວງຍາວຂອບທັງໝົດຂອງຮູບກ່ອງສາກ = (ກວ້າງ + ຍາວ + ສູງ) × 4 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📦 ຕ້ອງການເຮັດໂຄງຮູບກ່ອງສາກດ້ວຍເສັ້ນລວດ ໂດຍມີລວງກວ້າງ 4cm, ລວງຍາວ 6cm ແລະ ລວງສູງ 5cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຕອບຄຳຖາມຈາກຮູບກ່ອງສາກຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="180" height="140">
                {/* 3D Wireframe of Cuboid */}
                {/* Back face */}
                <rect x="50" y="20" width="100" height="70" fill="none" stroke="#ccc" strokeWidth="1" strokeDasharray="3,3" />
                {/* Connector lines */}
                <line x1="20" y1="50" x2="50" y2="20" stroke="#ccc" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="120" y1="120" x2="150" y2="90" stroke="#333" strokeWidth="1.5" />
                <line x1="20" y1="120" x2="50" y2="90" stroke="#ccc" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="120" y1="50" x2="150" y2="20" stroke="#333" strokeWidth="1.5" />
                {/* Front face */}
                <rect x="20" y="50" width="100" height="70" fill="none" stroke="#333" strokeWidth="2" />
                {/* Solid outlines */}
                <line x1="120" y1="50" x2="120" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="20" y1="120" x2="120" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="150" y1="20" x2="150" y2="90" stroke="#333" strokeWidth="2" />
                <line x1="50" y1="90" x2="150" y2="90" stroke="#333" strokeWidth="2" />
                {/* Vertices labels */}
                <text x="15" y="45" fontSize="12" fontWeight="bold">{"A"}</text>
                <text x="125" y="45" fontSize="12" fontWeight="bold">{"B"}</text>
                <text x="125" y="135" fontSize="12" fontWeight="bold">{"C"}</text>
                <text x="15" y="135" fontSize="12" fontWeight="bold">{"D"}</text>
                <text x="45" y="15" fontSize="12" fontWeight="bold">{"E"}</text>
                <text x="155" y="15" fontSize="12" fontWeight="bold">{"F"}</text>
                <text x="155" y="105" fontSize="12" fontWeight="bold">{"G"}</text>
                <text x="45" y="105" fontSize="12" fontWeight="bold">{"H"}</text>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span>{"(1) ໜ້າທີ່ຂະໜານກັບ ໜ້າ ABCD ແມ່ນໜ້າ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span>{"(2) ໜ້າທີ່ຕັ້ງສາກກັບ ໜ້າ ABCD ມີທັງໝົດຈັກໜ້າ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{"ໜ້າ"}</span>
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
          answers: [<span key="1">{"(1) ຮູບກ້ອງສາກ, (2) 12 ເສັ້ນ, (3) 8 ຈອມ, (4) 6 ໜ້າ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"60 cm (ຍ້ອນມີຂອບແນວກວ້າງ 4, ແນວຍາວ 4, ແນວສູງ 4, (4+6+5)×4 = 60)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) ໜ້າ EFGH, (2) 4 ໜ້າ (ໜ້າ ABFE, BCGF, CDHG, DAEH)"}</span>],
        },
      ],
      advice:
        "ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີລັກສະນະພິເສດດ້ານຄວາມສຳພັນລະຫວ່າງໜ້າ! ໜ້າກົງກັນຂ້າມຈະຂະໜານກັນ ແລະ ໜ້າຕິດກັນຈະຕັ້ງສາກກັນສະເໝີເດີ້!",
    },
  },
`;

const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// Check if there is already a comma right before the array ends (excluding whitespace)
const preSnippet = content.substring(0, replacementPoint).trimEnd();
const hasComma = preSnippet.endsWith(',');

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u17_u18_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 17 & 18 added successfully.");
