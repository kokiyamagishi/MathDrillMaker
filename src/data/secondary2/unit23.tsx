import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit23Data: UnitData = {
  unitNumber: 23,
  unitTitle: "ພາກທີ IV - ບົດທີ 23: ອະສະເໝີຜົນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເຄື່ອງໝາຍອະສະເໝີຜົນ ແລະ ນຳໃຊ້ຄຸນລັກສະນະການບວກ, ລົບ, ຄູນ, ຫານ ໃນອະສະເໝີຜົນໄດ້ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 96-100",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະການບວກ ແລະ ການລົບໃນອະສະເໝີຜົນ (Addition & Subtraction in Inequalities)",
      keyPoint: {
        title: "ຫຼັກການຮັກສາທິດທາງເຄື່ອງໝາຍດ້ວຍການບວກ ແລະ ລົບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອບວກ ຫຼື ລົບ ຈຳນວນດຽວກັນໃສ່ທັງສອງຟາກຂອງອະສະເໝີຜົນ, ເຄື່ອງໝາຍອະສະເໝີຜົນຈະຮັກສາທິດທາງເດີມສະເໝີ:"}
            </p>
            
            {/* Inequality formulas block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ຖ້າ a < b, ຈະໄດ້: a + c < b + c"}</span>
                <span className="math">{"• ຖ້າ a < b, ຈະໄດ້: a - c < b - c"}</span>
                <span style={{ color: "#0D47A1" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າ x - 2 < 5, ເອົາ 2 ບວກໃສ່ທັງສອງຟາກ: x - 2 + 2 < 5 + 2 ➔ x < 7."}
                </span>
              </div>
            </div>

            {/* Number Line SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດຂອບເຂດ x < 7 ເທິງເສັ້ນສະແດງຈຳນວນ"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Number line */}
                  <line x1="10" y1="20" x2="190" y2="20" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Ticks */}
                  <line x1="100" y1="15" x2="100" y2="25" stroke="#37474F" strokeWidth="1.5" />
                  <text x="100" y="36" fill="#37474F" fontSize="9" textAnchor="middle">{"7"}</text>
                  
                  {/* Shading left side */}
                  <rect x="10" y="18" width="90" height="4" fill="#F44336" opacity="0.5" />
                  
                  {/* Open circle at 7 */}
                  <circle cx="100" cy="20" r="4" fill="#FFFFFF" stroke="#F44336" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເຄື່ອງໝາຍ < (ໜ້ອຍກວ່າ), > (ຫຼາຍກວ່າ), ≤ (ໜ້ອຍກວ່າ ຫຼື ເທົ່າກັບ), ≥ (ຫຼາຍກວ່າ ຫຼື ເທົ່າກັບ) ເປັນເຄື່ອງໝາຍຫຼັກເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຫາຂອບເຂດ x ໂດຍນຳໃຊ້ຄຸນລັກສະນະບວກລົບໃນອະສະເໝີຜົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າ x - 2 < 5, ຈະໄດ້ x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ x + 4 > 10, ຈະໄດ້ x >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າ x - 7 ≥ -3, ຈະໄດ້ x ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າ 6 + x ≤ 2, ຈະໄດ້ x ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າ x - 1.2 < -2.8, ຈະໄດ້ x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄູນ ແລະ ການຫານໃນອະສະເໝີຜົນ ແລະ ກົດການປ່ຽນປິ່ນເຄື່ອງໝາຍ (Multiplication, Division & Sign Flipping)",
      keyPoint: {
        title: "⚠️ ຫຼັກການຄູນ ແລະ ຫານດ້ວຍຈຳນວນລົບ (ປ່ຽນປິ່ນເຄື່ອງໝາຍ)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຄູນ ຫຼື ຫານທັງສອງຟາກດ້ວຍຈຳນວນບວກ, ເຄື່ອງໝາຍຈະຄືເກົ່າ. ແຕ່ຖ້າຄູນ ຫຼື ຫານດ້ວຍຈຳນວນລົບ, "} <strong style={{ color: "#C62828" }}>{"ເຄື່ອງໝາຍອະສະເໝີຜົນຈະປິ່ນທິດທາງກົງກັນຂ້າມສະເໝີ!"}</strong>
            </p>
            
            {/* Formulas Box */}
            <div style={{ padding: "12px", backgroundColor: "#FFEBEE", borderRadius: "10px", border: "1px solid #FFCDD2", fontSize: "1.25rem", color: "#C62828" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ຖ້າ a < b ແລະ c > 0 (ຈຳນວນບວກ) ➔ ac < bc"}</span>
                <span className="math" style={{ color: "#C62828", fontWeight: "bold" }}>{"• ຖ້າ a < b ແລະ c < 0 (ຈຳນວນລົບ) ➔ ac > bc  (ເຄື່ອງໝາຍປ່ຽນປິ່ນ!)"}</span>
                <span style={{ color: "#C62828" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າ -2x < 6, ຫານໃຫ້ -2 ➔ x > -3 (ປ່ຽນຈາກ < ມາເປັນ >)."}
                </span>
              </div>
            </div>

            {/* Warning Visual SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#C62828" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດເຄື່ອງໝາຍປ່ຽນປິ່ນ (Sign Flipping)"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Left Side */}
                  <text x="30" y="24" fill="#37474F" fontSize="12" fontWeight="bold">{"-2x < 6"}</text>
                  
                  {/* Flip Arrow */}
                  <path d="M 65 20 Q 100 5 135 20" stroke="#C62828" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
                  <text x="100" y="34" fill="#C62828" fontSize="8" fontWeight="bold" textAnchor="middle">{"ຫານໃຫ້ -2 (ປ່ຽນປິ່ນ)"}</text>
                  
                  {/* Right Side */}
                  <text x="160" y="24" fill="#C62828" fontSize="12" fontWeight="bold">{"x > -3"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ສະເໝີ: ຄູນ ຫຼື ຫານດ້ວຍເລກລົບ ຕ້ອງປ່ຽນປິ່ນເຄື່ອງໝາຍທຸກຄັ້ງເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຫາຂອບເຂດ x ໂດຍຄຳນຶງເຖິງເຄື່ອງໝາຍອະສະເໝີຜົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"ຖ້າ -2x < 6 ➔ x >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"ຖ້າ 3x < 15 ➔ x <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"ຖ້າ -5x ≥ 20 ➔ x ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="x" den="-3" /> {" < 4 ➔ x >"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"-x ≤ -7 ➔ x ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະອະສົມຜົນສອງຂັ້ນຕອນ ໂດຍປະຕິບັດການຍ້າຍພົດ ແລະ ຫານເລກລົບຢ່າງລະມັດລະວັງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ສົມຜົນສອງຂັ້ນຕອນທີ່ມີຕົວລົບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຂອບເຂດ x ຈາກອະສົມຜົນ "} <span className="math">{"-3x + 5 < 17"}</span> {" ໂດຍການຍ້າຍ 5 ໄປລົບກ່ອນ ແລ້ວຈຶ່ງຫານດ້ວຍ -3"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x >"}</span>
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
              {"ການປຽບທຽບສອງສຳນວນອະສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຂອບເຂດຂອງ x ທີ່ເຮັດໃຫ້ສຳນວນ 4x - 3 ມີຄ່າຫຼາຍກວ່າ ສຳນວນ 2x + 5. (ສົມຜົນ: 4x - 3 > 2x + 5)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x >"}</span>
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
            {"ໂຈດບັນຫາຂອບເຂດຄະແນນເສັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າເສັງ 3 ວິຊາ ຕ້ອງໄດ້ຄະແນນສະເລ່ຍຫຼາຍກວ່າ ຫຼື ເທົ່າກັບ 7 ຄະແນນ. ສອງວິຊາທຳອິດໄດ້ 8 ແລະ 6 ຄະແນນ. ຖ້າສົມຜົນແມ່ນ (8 + 6 + x)/3 ≥ 7. ວິຊາທີສາມ x ຕ້ອງໄດ້ຢ່າງໜ້ອຍຈັກຄະແນນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x ≥"}</span>
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
            {"ຄັດຈ້ອນອະສົມຜົນຕົວຄູນເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຂອບເຂດຂອງ x ຈາກອະສົມຜົນຕໍ່ໄປນີ້: -3/4 x < 9"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x >"}</span>
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
          <span key="1-1">{"(1) 7 (ຄິດໄລ່: 5 + 2 = 7)"}</span>,
          <span key="1-2">{"(2) 6 (ຄິດໄລ່: 10 - 4 = 6)"}</span>,
          <span key="1-3">{"(3) 4 (ຄິດໄລ່: -3 + 7 = 4)"}</span>,
          <span key="1-4">{"(4) -4 (ຄິດໄລ່: 2 - 6 = -4)"}</span>,
          <span key="1-5">{"(5) -1.6 (ຄິດໄລ່: -2.8 + 1.2 = -1.6)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) -3 (ຄິດໄລ່: 6 / -2 = -3, ເຄື່ອງໝາຍປ່ຽນເປັນ >)"}</span>,
          <span key="2-2">{"(2) 5 (ຄິດໄລ່: 15 / 3 = 5, ເຄື່ອງໝາຍຄືເກົ່າ <)"}</span>,
          <span key="2-3">{"(3) -4 (ຄິດໄລ່: 20 / -5 = -4, ເຄື່ອງໝາຍປ່ຽນເປັນ ≤)"}</span>,
          <span key="2-4">{"(4) -12 (ຄິດໄລ່: 4 × -3 = -12, ເຄື່ອງໝາຍປ່ຽນເປັນ >)"}</span>,
          <span key="2-5">{"(5) 7 (ຄິດໄລ່: ຫານໃຫ້ -1 ➔ ເຄື່ອງໝາຍປ່ຽນເປັນ ≥ 7)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) -4 (ຄິດໄລ່: -3x < 12 ➔ x > -4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 4 (ຄິດໄລ່: 2x > 8 ➔ x > 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 7 ຄະແນນ (ຄິດໄລ່: 14 + x ≥ 21 ➔ x ≥ 7)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) -12 (ຄິດໄລ່: x > 9 × -4/3 = -12)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ຫຼັກການປ່ຽນປິ່ນເຄື່ອງໝາຍອະສະເໝີຜົນ ເມື່ອຄູນ ຫຼື ຫານດ້ວຍຈຳນວນລົບ ເປັນຈຸດທີ່ນັກຮຽນມັກພາດທີ່ສຸດ ແຕ່ເຈົ້າກຳໄດ້ເປັນຢ່າງດີແລ້ວ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
