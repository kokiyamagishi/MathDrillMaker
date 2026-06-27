import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit27Data: UnitData = {
  unitNumber: 27,
  unitTitle: "ພາກທີ IV - ບົດທີ 27: ອະສົມຜົນທີ່ມີຄ່າສຳບູນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ຝຶກທັກສະການແກ້ສົມຜົນອະສົມຜົນທີ່ມີເຄື່ອງໝາຍຄ່າສຳບູນ |x| < a ແລະ |x| > a ພ້ອມທັງສະແດງເຂດໃຈຜົນເທິງເສັ້ນຈຳນວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 116-119",
  subSections: [
    {
      title: "1. ອະສົມຜົນຄ່າສຳບູນແບບ |x| < a (Absolute Value Inequality |x| < a)",
      keyPoint: {
        title: "ຫຼັກການແຍກອະສົມຜົນ ແລະ ເຂດໃຈຜົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອເຄື່ອງໝາຍອະສົມຜົນຫັນປາກໄປຫາຈຳນວນຈິງບວກ (ເຊັ່ນ: < ຫຼື ≤), ເຂດໃຈຜົນຈະຢູ່ລະຫວ່າງສອງຈຸດສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ຖ້າ "} <span className="math">{"|x| < a"}</span> {" (ໂດຍທີ່ "} <span className="math">{"a > 0"}</span>{") ➔ ແຍກໄດ້ "} <span className="math">{"-a < x < a"}</span><br />
              {"• ຕົວຢ່າງ: "} <span className="math">{"|x - 2| < 4 ➔ -4 < x - 2 < 4 ➔ -2 < x < 6"}</span> {" (ບວກ 2 ໃສ່ທັງ 3 ຟາກ)"}
            </div>

            {/* Shaded interval SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງເຂດໃຈຜົນ -2 < x < 6 ເທິງເສັ້ນຈຳນວນ"}</span>
                <svg viewBox="0 0 300 50" style={{ width: "100%", maxWidth: "260px", height: "auto" }}>
                  <line x1="10" y1="25" x2="290" y2="25" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Ticks */}
                  <line x1="80" y1="20" x2="80" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  <text x="80" y="42" fill="#37474F" fontSize="9" textAnchor="middle">{"-2"}</text>
                  
                  <line x1="220" y1="20" x2="220" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  <text x="220" y="42" fill="#37474F" fontSize="9" textAnchor="middle">{"6"}</text>

                  {/* Interval Shading */}
                  <rect x="80" y="23" width="140" height="4" fill="#4CAF50" opacity="0.5" />

                  {/* Open circles */}
                  <circle cx="80" cy="25" r="4" fill="#FFFFFF" stroke="#4CAF50" strokeWidth="1.5" />
                  <circle cx="220" cy="25" r="4" fill="#FFFFFF" stroke="#4CAF50" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມວ່າ ເມື່ອແກ້ໄຂອະສົມຜົນ 3 ຟາກ ໃຫ້ເຮັດຄືກັນທັງ 3 ຟາກ (ເຊັ່ນ ບວກ, ລົບ, ຄູນ, ຫານ) ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຂອບເຂດຂອງ x ຈາກອະສົມຜົນຄ່າສຳບູນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"|x| < 5 ➔ -5 < x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"|x| ≤ 8 ➔"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span className="math">{"≤ x ≤ 8"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"|x - 2| < 4 ➔ -2 < x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span className="math">{"≤ x ≤ 2 (ຊອກຫາຂີດຈຳກັດລຸ່ມ ຈາກ |x + 3| ≤ 5)"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"|2x| < 6 ➔ -3 < x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ອະສົມຜົນຄ່າສຳບູນແບບ |x| > a (Absolute Value Inequality |x| > a)",
      keyPoint: {
        title: "ຫຼັກການແຍກອະສົມຜົນອອກສອງຟາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອເຄື່ອງໝາຍອະສົມຜົນຫັນປາກອອກຈາກຄ່າສຳບູນ (ເຊັ່ນ: > ຫຼື ≥), ເຂດໃຈຜົນຈະແຍກອອກເປັນສອງຟາກຢູ່ນອກສະເໝີ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ຖ້າ "} <span className="math">{"|x| > a"}</span> {" (ໂດຍທີ່ "} <span className="math">{"a > 0"}</span>{") ➔ ແຍກໄດ້ "} <span className="math">{"x > a"}</span> {" ຫຼື "} <span className="math">{"x < -a"}</span><br />
              {"• ຕົວຢ່າງ: "} <span className="math">{"|x - 1| > 3 ➔ x - 1 > 3 ➔ x > 4"}</span> {" ຫຼື "} <span className="math">{"x - 1 < -3 ➔ x < -2"}</span>
            </div>

            {/* Split interval SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2", fontSize: "1.15rem", color: "#C62828" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງເຂດໃຈຜົນ x > 4 ຫຼື x < -2 ເທິງເສັ້ນຈຳນວນ"}</span>
                <svg viewBox="0 0 300 50" style={{ width: "100%", maxWidth: "260px", height: "auto" }}>
                  <line x1="10" y1="25" x2="290" y2="25" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Ticks */}
                  <line x1="80" y1="20" x2="80" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  <text x="80" y="42" fill="#37474F" fontSize="9" textAnchor="middle">{"-2"}</text>
                  
                  <line x1="220" y1="20" x2="220" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  <text x="220" y="42" fill="#37474F" fontSize="9" textAnchor="middle">{"4"}</text>

                  {/* Red outer shadings */}
                  <rect x="10" y="23" width="70" height="4" fill="#EF5350" opacity="0.5" />
                  <rect x="220" y="23" width="70" height="4" fill="#EF5350" opacity="0.5" />

                  {/* Open circles */}
                  <circle cx="80" cy="25" r="4" fill="#FFFFFF" stroke="#EF5350" strokeWidth="1.5" />
                  <circle cx="220" cy="25" r="4" fill="#FFFFFF" stroke="#EF5350" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາຂຽນສະຫຼຸບເຂດໃຈຜົນອະສົມຜົນປະເພດນີ້ ຢ່າລືມໃຊ້ຄຳວ່າ 'ຫຼື' (or) ເຊື່ອມຕໍ່ສອງສົມຜົນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຂອບເຂດຂອງ x ຈາກອະສົມຜົນຄ່າສຳບູນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"|x| > 4 ➔ x > 4 ຫຼື x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"|x| ≥ 7 ➔ x ≥ 7 ຫຼື x ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"|x - 1| > 3 ➔ x > 4 ຫຼື x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"|x + 4| ≥ 2 ➔ x ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span className="math">{"ຫຼື x ≤ -6"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"|3x| > 9 ➔ x >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span className="math">{"ຫຼື x < -3"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະ ແລະ ແກ້ໄຂອະສົມຜົນທີ່ມີຕົວເລກຢູ່ນອກ ຫຼື ຕົວຫານຢ່າງລະມັດລະວັງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ອະສົມຜົນຄ່າສຳບູນທີ່ມີຕົວເລກຢູ່ນອກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນອະສົມຜົນ "} <span className="math">{"2|x - 1| < 8"}</span> {" ແລ້ວຊອກຫາໃຈຜົນຄ່າຫຼາຍສຸດທີ່ເປັນຈຳນວນຖ້ວນ (x < 5)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈຳນວນຖ້ວນຫຼາຍສຸດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ອະສົມຜົນຄ່າສຳບູນແບບມີສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນອະສົມຜົນ "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                {"|"} <Fraction num="x" den="3" /> {" - 2| ≤ 1"}
              </span>
              {" ແລ້ວຊອກຫາຄ່າຂອງ x ທີ່ໜ້ອຍສຸດ (ເຂດໃຈຜົນ: 3 ≤ x ≤ 9)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄ່ານ້ອຍສຸດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ອະສົມຜົນຄ່າສຳບູນເລກທົດສະນິຍົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ໄຂອະສົມຜົນ "} <span className="math">{"|x - 2.5| < 1.5"}</span> {" ແລ້ວຊອກຫາຄ່າຂອງ x ທີ່ເປັນຈຳນວນຖ້ວນຫຼາຍສຸດ (ເຂດໃຈຜົນ: 1 < x < 4)."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນຖ້ວນຫຼາຍສຸດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາໄລຍະຫ່າງເທິງເສັ້ນຈຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈຸດ P ຢູ່ເທິງເສັ້ນຈຳນວນຫ່າງຈາກຈຸດ -1 ເປັນໄລຍະທາງໜ້ອຍກວ່າ 4 ຫົວໜ່ວຍ. ຈົ່ງຊອກຫາຂອບເຂດສູງສຸດຂອງ A (ສົມຜົນ: |x - (-1)| < 4 ➔ x < _?)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x <"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1">{"(1) 5 (ເພາະວ່າ -5 < x < 5)"}</span>,
          <span key="2">{"(2) -8 (ເພາະວ່າ -8 ≤ x ≤ 8)"}</span>,
          <span key="3">{"(3) 6 (ເພາະວ່າ -4 < x - 2 < 4 ➔ -2 < x < 6)"}</span>,
          <span key="4">{"(4) -8 (ເພາະວ່າ -5 ≤ x + 3 ≤ 5 ➔ -8 ≤ x ≤ 2)"}</span>,
          <span key="5">{"(5) 3 (ເພາະວ່າ -6 < 2x < 6 ➔ -3 < x < 3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) -4 (ເພາະວ່າ x > 4 ຫຼື x < -4)"}</span>,
          <span key="7">{"(2) -7 (ເພາະວ່າ x ≥ 7 ຫຼື x ≤ -7)"}</span>,
          <span key="8">{"(3) -2 (ເພາະວ່າ x - 1 > 3 ➔ x > 4; x - 1 < -3 ➔ x < -2)"}</span>,
          <span key="9">{"(4) -2 (ເພາະວ່າ x + 4 ≥ 2 ➔ x ≥ -2)"}</span>,
          <span key="10">{"(5) 3 (ເພາະວ່າ 3x > 9 ➔ x > 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"4 (ເພາະວ່າ |x - 1| < 4 ➔ -3 < x < 5, ດັ່ງນັ້ນຈຳນວນຖ້ວນຫຼາຍສຸດແມ່ນ 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"3 (ເພາະວ່າ -1 ≤ x/3 - 2 ≤ 1 ➔ 1 ≤ x/3 ≤ 3 ➔ 3 ≤ x ≤ 9)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"3 (ເພາະວ່າ -1.5 < x - 2.5 < 1.5 ➔ 1 < x < 4, ດັ່ງນັ້ນຈຳນວນຖ້ວນຫຼາຍສຸດແມ່ນ 3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"3 (ເພາະວ່າ -4 < x + 1 < 4 ➔ -5 < x < 3)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນແກ້ໄຂອະສົມຜົນຄ່າສຳບູນຢ່າງເປັນລະບົບ ຈະຊ່ວຍໃຫ້ເຮົາພັດທະນາຄວາມສາມາດໃນການຄິດໄລ່ ແລະ ວິເຄາະເງື່ອນໄຂຢ່າງມີເຫດຜົນເດີ້!"
  }
};
