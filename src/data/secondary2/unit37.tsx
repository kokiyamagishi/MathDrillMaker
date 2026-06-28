import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit37Data: UnitData = {
  unitNumber: 37,
  unitTitle: "ພາກທີ V - ບົດທີ 37: ມຸມໃນຂອງຮູບສີ່ແຈສວດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຜົນບວກມຸມໃນຂອງຮູບສີ່ແຈສວດ (Convex Quadrilateral) ເຊິ່ງເທົ່າກັບ 360° ພ້ອມທັງສູດທົ່ວໄປ (n-2)×180° ສໍາລັບຮູບຫຼາຍແຈ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 164-167",
  subSections: [
    {
      title: "1. ຜົນບວກມຸມໃນຂອງຮູບສີ່ແຈສວດ (Angle Sum of Quadrilateral)",
      keyPoint: {
        title: "ຫຼັກການຜົນບວກມຸມໃນຮູບສີ່ແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຜົນບວກມຸມໃນທັງສີ່ຂອງຮູບສີ່ແຈສວດໃດໜຶ່ງ ຈະເທົ່າກັບ 360° ສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ສໍາລັບຮູບສີ່ແຈ ABCD ໃດໆ: "} <span className="math">{"A + B + C + D = 360°"}</span><br />
              {"• ຫຼັກການພິສູດ: ແບ່ງຮູບສີ່ແຈອອກເປັນ 2 ຮູບສາມແຈ ➔ ຜົນບວກ = 2 × 180° = 360°"}
            </div>

            {/* Quadrilateral split into two triangles SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສີ່ແຈສວດແບ່ງເປັນ 2 ຮູບສາມແຈ (180° × 2 = 360°)"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Quadrilateral path */}
                  <polygon points="50,20 160,30 180,100 30,90" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Split line (diagonal) */}
                  <line x1="50" y1="20" x2="180" y2="100" stroke="#D32F2F" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Labels for triangles */}
                  <text x="75" y="70" fill="#1565C0" fontSize="8" fontWeight="bold">{"ຮູບສາມແຈ 1 (180°)"}</text>
                  <text x="120" y="50" fill="#FF8F00" fontSize="8" fontWeight="bold">{"ຮູບສາມແຈ 2 (180°)"}</text>

                  {/* Vertices */}
                  <text x="50" y="15" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="165" y="27" fill="#37474F" fontSize="10" fontWeight="bold">{"B"}</text>
                  <text x="185" y="112" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"C"}</text>
                  <text x="20" y="95" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="end">{"D"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າຮູ້ຂະໜາດຂອງ 3 ມຸມໃນຮູບສີ່ແຈສວດ ເຮົາສາມາດຊອກຫາມຸມທີ 4 ໄດ້ໂດຍການເອົາ 360° ລົບໃຫ້ຜົນບວກຂອງ 3 ມຸມນັ້ນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມໃນຮູບສີ່ແຈສວດລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຜົນບວກມຸມໃນທັງສີ່ຂອງຮູບສີ່ແຈສວດໃດໜຶ່ງ ຈະເທົ່າກັບຈັກອົງສາສະເໝີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ໃນຮູບສີ່ແຈ ABCD, ຖ້າມີ 3 ມຸມໃນແມ່ນ A = 90°, B = 100° ແລະ C = 80°. ມຸມໃນ D ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າມີ 3 ມຸມແມ່ນ A = 110°, B = 70° ແລະ C = 120°. ມຸມໃນ D ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າມີ 3 ມຸມແມ່ນ A = 95°, B = 85° ແລະ C = 115°. ມຸມໃນ D ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ໃນຮູບສີ່ແຈ ABCD, ຖ້າມຸມ A = B = C = D. ມຸມແຕ່ລະມຸມຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຜົນບວກມຸມໃນຂອງຮູບຫຼາຍແຈສວດ (Angle Sum of Convex Polygons)",
      keyPoint: {
        title: "ສູດທົ່ວໄປສໍາລັບຮູບ n ແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຜົນບວກມຸມໃນຂອງຮູບຫຼາຍແຈສວດທີ່ມີ n ຂ້າງ (n ≥ 3) ຄິດໄລ່ໄດ້ຈາກສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <span className="math">{"ຜົນບວກມຸມໃນ = (n - 2) × 180°"}</span><br />
              <span style={{ fontSize: "1.15rem", marginTop: "6px", display: "inline-block" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>{"ຮູບຫ້າແຈສວດ (n = 5) ➔ ຜົນບວກ = (5 - 2) × 180° = 3 × 180° = 540°"}
              </span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສໍາລັບຮູບຫຼາຍແຈສະເໝີ ທີ່ທຸກໆມຸມເທົ່າກັນ ໃຫ້ເອົາຜົນບວກມຸມໃນທັງໝົດຫານໃຫ້ຈຳນວນຂ້າງ n ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຜົນບວກ ຫຼື ຂະໜາດມຸມໃນຂອງຮູບຫຼາຍແຈລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຜົນບວກມຸມໃນຂອງຮູບຫ້າແຈສວດ (5 ຂ້າງ) ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຜົນບວກມຸມໃນຂອງຮູບຫົກແຈສວດ (6 ຂ້າງ) ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຜົນບວກມຸມໃນຂອງຮູບແປดແຈສວດ (8 ຂ້າງ) ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ມຸມແຕ່ລະມຸມຂອງຮູບຫ້າແຈສະເໝີ (5 ມຸມເທົ່າກັນ) ມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ມຸມແຕ່ລະມຸມຂອງຮູບຫົກແຈສະເໝີ (6 ມຸມເທົ່າກັນ) ມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ 𝑥 ຈາກສົມຜົນມຸມໃນຮູບສີ່ແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສີ່ແຈ ABCD, ມີຂະໜາດມຸມແມ່ນ "} <span className="math">{"A = 𝑥"}</span>{", "} <span className="math">{"B = 2𝑥"}</span>{", "} <span className="math">{"C = 3𝑥"}</span> {" ແລະ "} <span className="math">{"D = 4𝑥"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥. (ຜົນບວກ = 360°)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາຈຳນວນຂ້າງ n ຂອງຮູບຫຼາຍແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າຜົນບວກມຸມໃນຂອງຮູບຫຼາຍແຈສວດໜຶ່ງແມ່ນ "} <span className="math">{"900°"}</span>{". ຈົ່ງຊອກຫາຈຳນວນຂ້າງ n. ((n - 2) × 180 = 900)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຈຳນວນຂ້າງ n ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ຂ້າງ"}</span>
            </div>
          </div>
        )
      }
    ]
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຜົນບວກມຸມນອກຂອງຮູບຫຼາຍແຈສວດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຜົນບວກຂອງທຸກໆມຸມນອກ (ໜຶ່ງມຸມຕໍ່ໜຶ່ງຈອມ) ຂອງຮູບຫຼາຍແຈສວດໃດໜຶ່ງ ຈະເທົ່າກັບຈັກອົງສາສະເໝີ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຜົນບວກແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"°"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ມຸມໃນຮູບຄາງໝູ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບຄາງໝູ ABCD (AB // CD) ທີ່ມີມຸມ A = 100° ແລະ B = 120°. ຈົ່ງຊອກຫາຜົນບວກຂອງມຸມ C + D."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມຸມ C + D ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"°"}</span>
          </div>
        </div>
      )
    }
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="1">{"(1) 360° (ເພາະວ່າຜົນບວກມຸມໃນຂອງຮູບສີ່ແຈສວດແມ່ນ 360° ສະເໝີ)"}</span>,
          <span key="2">{"(2) 90° (360° - (90° + 100° + 80°) = 360° - 270° = 90°)"}</span>,
          <span key="3">{"(3) 60° (360° - (110° + 70° + 120°) = 360° - 300° = 60°)"}</span>,
          <span key="4">{"(4) 65° (360° - (95° + 85° + 115°) = 360° - 295° = 65°)"}</span>,
          <span key="5">{"(5) 90° (ເພາະວ່າທຸກມຸມເທົ່າກັນ ➔ 360° / 4 = 90°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 540° (ເພາະວ່າ (5 - 2) × 180° = 3 × 180° = 540°)"}</span>,
          <span key="7">{"(2) 720° (ເພາະວ່າ (6 - 2) × 180° = 4 × 180° = 720°)"}</span>,
          <span key="8">{"(3) 1080° (ເພາະວ່າ (8 - 2) × 180° = 6 × 180° = 1080°)"}</span>,
          <span key="9">{"(4) 108° (ເພາະວ່າ 540° / 5 = 108°)"}</span>,
          <span key="10">{"(5) 120° (ເພາະວ່າ 720° / 6 = 120°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"36 (ເພາະວ່າ 𝑥 + 2𝑥 + 3𝑥 + 4𝑥 = 360 ➔ 10𝑥 = 360 ➔ 𝑥 = 36)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"7 (ເພາະວ່າ (n - 2) × 180 = 900 ➔ n - 2 = 5 ➔ n = 7 ข້າງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"360° (ເພາະວ່າຜົນບວກມຸມນອກຂອງຮູບຫຼາຍແຈສວດໃດໆແມ່ນ 360° ສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"140° (ເພາະວ່າຜົນບວກມຸມໃນທັງໝົດແມ່ນ 360° ➔ C + D = 360° - (100° + 120°) = 140°)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການວິເຄາະມຸມພາຍໃນ ແລະ ພາຍນອກ ຈະຊ່ວຍໃຫ້ເຮົາພັດທະນາຄວາມສາມາດດ້ານເລຂາຄະນິດໄດ້ຢ່າງດີເລີຍເດີ້!"
  }
};
