import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit36Data: UnitData = {
  unitNumber: 36,
  unitTitle: "ພາກທີ V - ບົດທີ 36: ມຸມໃນ ແລະ ມຸມນອກຂອງຮູບສາມແຈ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈທິດສະດີ່ມຸມນອກຂອງຮູບສາມແຈ ພ້ອມທັງຝຶກຄິດໄລ່ຫາຂະໜາດມຸມພາຍໃນ ແລະ ພາຍນອກທີ່ກ່ຽວຂ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 161-163",
  subSections: [
    {
      title: "1. ທິດສະດີມຸມນອກຂອງຮູບສາມແຈ (Exterior Angle Theorem)",
      keyPoint: {
        title: "ຫຼັກການທິດສະດີມຸມນອກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມຸມນອກຂອງຮູບສາມແຈ ຈະເທົ່າກັບຜົນບວກຂອງສອງມຸມໃນທີ່ບໍ່ຕິດກັບມັນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ຖ້າຂີດຂະຫຍາຍຂ້າງ BC ອອກໄປຫາຈຸດ D ➔ ມຸມນອກທີ່ຈຸດ C ຈະເທົ່າກັບ "} <span className="math">{"A + B"}</span><br />
              {"• ຕົວຢ່າງ: ຖ້າມຸມໃນ A = 40° ແລະ B = 60° ➔ ມຸມນອກທີ່ຕິດກັບ C ຈະແມ່ນ 40° + 60° = 100°"}
            </div>

            {/* Triangle Exterior Angle SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງມຸມນອກຂອງຮູບສາມແຈ"}</span>
                <svg viewBox="0 0 240 100" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Triangle path with extended bottom edge */}
                  <polygon points="80,20 160,80 30,80" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  <line x1="160" y1="80" x2="220" y2="80" stroke="#37474F" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Vertices and labels */}
                  <text x="80" y="14" fill="#37474F" fontSize="9" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="25" y="92" fill="#37474F" fontSize="9" fontWeight="bold">{"B"}</text>
                  <text x="160" y="92" fill="#37474F" fontSize="9" fontWeight="bold">{"C"}</text>
                  <text x="220" y="92" fill="#37474F" fontSize="9" fontWeight="bold">{"D"}</text>

                  {/* Interior angles */}
                  <path d="M 75,30 A 10,10 0 0,0 85,30" fill="none" stroke="#1565C0" strokeWidth="1.5" />
                  <text x="80" y="42" fill="#1565C0" fontSize="8" textAnchor="middle">{"40°"}</text>

                  <path d="M 45,80 A 15,15 0 0,1 42,65" fill="none" stroke="#1565C0" strokeWidth="1.5" />
                  <text x="50" y="75" fill="#1565C0" fontSize="8">{"60°"}</text>

                  {/* Exterior angle */}
                  <path d="M 175,80 A 15,15 0 0,0 168,68" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
                  <text x="185" y="72" fill="#D32F2F" fontSize="8" fontWeight="bold">{"100°"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ມຸມນອກ ແລະ ມຸມໃນທີ່ຢູ່ຕິດກັນ ບວກກັນຈະອອກເປັນມຸມພຽງ 180° ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມໂດຍນຳໃຊ້ທິດສະດີມຸມນອກ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າສອງມຸມໃນຂອງຮູບສາມແຈແມ່ນ 40° ແລະ 60°. ມຸມນອກທີ່ບໍ່ຕິດກັບພວກມັນຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າສອງມຸມໃນຂອງຮູບສາມແຈແມ່ນ 55° ແລະ 65°. ມຸມນອກທີ່ບໍ່ຕິດກັບພວກມັນຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າມຸມນອກເທົ່າກັບ 130° ແລະ ມຸມໃນທີ່ບໍ່ຕິດກັນມຸມໜຶ່ງແມ່ນ 50°. ມຸມໃນອີກມຸມໜຶ່ງແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າມຸມນອກແມ່ນ 110° ແລະ ມຸມໃນທີ່ບໍ່ຕິດກັນມຸມໜຶ່ງແມ່ນ 75°. ມຸມໃນອີກມຸມໜຶ່ງແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ໃນຮູບສາມແຈສາກ, ມຸມນອກທີ່ຕິດກັບມຸມສາກ (90°) ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
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
      title: "2. ມຸມພາຍໃນ ແລະ ມຸມນອກທີ່ຕິດກັນ (Adjacent Interior & Exterior Angles)",
      keyPoint: {
        title: "ຫຼັກການມຸມພຽງ 180°",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມຸມພາຍໃນ ແລະ ມຸມພາຍນອກທີ່ຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ (ຕິດກັນ) ບວກກັນອອກ 180° ສະເໝີ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ມຸມພາຍໃນ + ມຸມພາຍນອກ = 180°"}<br />
              {"• ຕົວຢ່າງ: ຖ້າມຸມໃນແມ່ນ 80° ➔ ມຸມນອກທີ່ຕິດກັນແມ່ນ 180° - 80° = 100°"}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບສາມແຈສະເໝີ ມີທຸກໆມຸມໃນແມ່ນ 60° ດັ່ງນັ້ນ ມຸມນອກຂອງມັນຈະແມ່ນ 120° ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຂະໜາດຂອງມຸມພາຍໃນ ຫຼື ພາຍນອກທີ່ຕິດກັນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າມຸມໃນໜຶ່ງຂອງຮູບສາມແຈແມ່ນ 80°. ມຸມນອກທີ່ຕິດກັນຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າມຸມໃນໜຶ່ງຂອງຮູບສາມແຈແມ່ນ 115°. ມຸມນອກທີ່ຕິດກັນຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າມຸມນອກໜຶ່ງຂອງຮູບສາມແຈແມ່ນ 140°. ມຸມໃນທີ່ຕິດກັນຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າມຸມນອກໜຶ່ງຂອງຮູບສາມແຈແມ່ນ 75°. ມຸມໃນທີ່ຕິດກັນຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ໃນຮູບສາມແຈສະເໝີ, ມຸມນອກແຕ່ລະມຸມຈະມີຂະໜາດຈັກອົງສາ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຕັ້ງອະສົມຜົນ ຫຼື ສົມຜົນຈາກຄຸນລັກສະນະມຸມນອກ ເພື່ອຊອກຫາຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ 𝑥 ຈາກມຸມນອກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ມຸມໃນ "} <span className="math">{"A = 2𝑥"}</span>{", "} <span className="math">{"B = 3𝑥"}</span> {" ແລະ ມຸມນອກທີ່ຕິດກັບມຸມ C ແມ່ນ "} <span className="math">{"100°"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥. (2𝑥 + 3𝑥 = 100)"}
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
              {"ຊອກຫາ 𝑦 ໃນຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າມຸມຈອມຂອງຮູບສາມແຈທ່ຽງແມ່ນ "} <span className="math">{"3𝑦"}</span> {" ແລະ ມຸມນອກທີ່ຕິດກັບມຸມຈອມນັ້ນແມ່ນ "} <span className="math">{"120°"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑦. (3𝑦 + 120 = 180)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑦 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ຜົນບວກຂອງທຸກໆມຸມນອກຂອງຮູບສາມແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຜົນບວກຂອງທັງສາມມຸມນອກ (ໜຶ່ງມຸມຕໍ່ໜຶ່ງຈອມ) ຂອງຮູບສາມແຈໃດໜຶ່ງ ຈະມີຂະໜາດເທົ່າກັບຈັກອົງສາສະເໝີ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຜົນບວກມຸມນອກທັງໝົດແມ່ນ"}</span>
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
            {"ຊອກຫາມຸມໃນຈາກມຸມນອກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບສາມແຈ ABC, ຖ້າມຸມນອກທີ່ຈອມ A ແມ່ນ 130° ແລະ ມຸມນອກທີ່ຈອມ B ແມ່ນ 110°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມໃນ C. (ມຸມໃນ A = 50°, B = 70°)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມຸມໃນ C ແມ່ນ"}</span>
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
          <span key="1">{"(1) 100° (ເພາະວ່າມຸມນອກ = 40° + 60° = 100°)"}</span>,
          <span key="2">{"(2) 120° (ເພາະວ່າມຸມນອກ = 55° + 65° = 120°)"}</span>,
          <span key="3">{"(3) 80° (ເພາະວ່າມຸມໃນ = 130° - 50° = 80°)"}</span>,
          <span key="4">{"(4) 35° (ເພາະວ່າມຸມໃນ = 110° - 75° = 35°)"}</span>,
          <span key="5">{"(5) 90° (ເພາະວ່າມຸມໃນ ແລະ ມຸມນອກຕິດກັນບວກກັນອອກ 180° ➔ 180° - 90° = 90°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 100° (ເພາະວ່າມຸມພຽງ 180° - 80° = 100°)"}</span>,
          <span key="7">{"(2) 65° (ເພາະວ່າມຸມພຽງ 180° - 115° = 65°)"}</span>,
          <span key="8">{"(3) 40° (ເພາະວ່າມຸມພຽງ 180° - 140° = 40°)"}</span>,
          <span key="9">{"(4) 105° (ເພາະວ່າມຸມພຽງ 180° - 75° = 105°)"}</span>,
          <span key="10">{"(5) 120° (ເພາະວ່າມຸມໃນຂອງຮູບສາມແຈສະເໝີແມ່ນ 60° ➔ ມຸມນອກແມ່ນ 180° - 60° = 120°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"20 (ເພາະວ່າ 2𝑥 + 3𝑥 = 100 ➔ 5𝑥 = 100 ➔ 𝑥 = 20)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"20 (ເພາະວ່າມຸມພາຍໃນແມ່ນ 180 - 120 = 60° ➔ 3𝑦 = 60 ➔ 𝑦 = 20)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"360° (ເພາະວ່າຜົນບວກມຸມນອກຂອງທຸກໆຮູບຫຼາຍແຈແມ່ນ 360° ສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"60° (ມຸມໃນ A = 50°, B = 70° ➔ ມຸມໃນ C = 180° - (50° + 70°) = 60°)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການຄິດໄລ່ ແລະ ພິສູດຄຸນລັກສະນະມຸມໃນ ແລະ ມຸມນອກ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດຂອງຮູບສາມແຈໄດ້ຢ່າງເລິກເຊິ່ງເດີ້!"
  }
};
