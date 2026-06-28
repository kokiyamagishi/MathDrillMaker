import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ພາກທີ III - ບົດທີ 17: ສຳນວນ",
  unitGoal: "ເຂົ້າໃຈຄວາມໝາຍຂອງສຳນວນພຶດຊະຄະນິດ ແລະ ສາມາດຄິດໄລ່ຄ່າຂອງສຳນວນໄດ້ເມື່ອແທນຄ່າຕົວລັບ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 66-70",
  subSections: [
    {
      title: "1. ສຳນວນພຶດຊະຄະນິດ ແລະ ການແທນຄ່າຕົວລັບດຽວ (Algebraic Expressions with One Variable)",
      keyPoint: {
        title: "ຫຼັກການແທນຄ່າຕົວລັບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສຳນວນພຶດຊະຄະນິດ ປະກອບດ້ວຍຕົວເລກ, ຕົວອັກສອນ (ຕົວລັບ) ແລະ ເຄື່ອງໝາຍການຄຳນວນ. ການຄິດໄລ່ຄ່າຂອງສຳນວນ ແມ່ນໃຫ້ເອົາຈຳນວນທີ່ກຳນົດໃຫ້ ໄປແທນໃສ່ບ່ອນທີ່ມີຕົວລັບ:"}
            </p>
            
            {/* Substitution Formula Block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄິດໄລ່ຄ່າຂອງສຳນວນ "} <span className="math">{"2𝑥 + 5"}</span> {" ເມື່ອ "} <span className="math">{"𝑥 = 3"}</span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span className="math">{"• ແທນ 𝑥 = 3 ໃສ່ສຳນວນ: 2 × 3 + 5"}</span>
                <span className="math">{"➔ ຜົນໄດ້ຮັບແມ່ນ: 6 + 5 = 11"}</span>
              </div>
            </div>

            {/* Substitution Flow SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດຂະບວນການແທນຄ່າ (Substitution Machine)"}</span>
                <svg viewBox="0 0 240 50" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Input */}
                  <rect x="5" y="10" width="50" height="30" rx="3" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1" />
                  <text x="30" y="28" fill="#E65100" fontSize="10" fontWeight="bold" textAnchor="middle">{"𝑥 = 3"}</text>
                  
                  {/* Arrow 1 */}
                  <path d="M 60 25 L 85 25" stroke="#37474F" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  
                  {/* Machine */}
                  <rect x="90" y="10" width="70" height="30" rx="3" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="1" />
                  <text x="125" y="28" fill="#F57F17" fontSize="10" fontWeight="bold" textAnchor="middle">{"2𝑥 + 5"}</text>

                  {/* Arrow 2 */}
                  <path d="M 165 25 L 190 25" stroke="#37474F" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  
                  {/* Output */}
                  <rect x="195" y="10" width="40" height="30" rx="3" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
                  <text x="215" y="28" fill="#2E7D32" fontSize="10" fontWeight="bold" textAnchor="middle">{"11"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາແທນຄ່າຕົວລັບທີ່ເປັນຈຳນວນລົບ ຕ້ອງໃສ່ວົງເລັບ ( ) ສະເໝີເດີ້ ເຊັ່ນ 2(-3) = -6!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນລຸ່ມນີ້ ເມື່ອແທນຄ່າ 𝑥 ທີ່ກຳນົດໃຫ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງສຳນວນ 2𝑥 + 5 ເມື່ອ 𝑥 = 3 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງສຳນວນ 3𝑥 - 4 ເມື່ອ 𝑥 = 5 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຄ່າຂອງສຳນວນ 8 - 4𝑥 ເມື່ອ 𝑥 = 2 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຄ່າຂອງສຳນວນ 𝑥² + 2 ເມື່ອ 𝑥 = -3 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຄ່າຂອງສຳນວນ 10 - 𝑥³ ເມື່ອ 𝑥 = 2 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສຳນວນພຶດຊະຄະນິດທີ່ມີຫຼາຍຕົວລັບ (Algebraic Expressions with Multiple Variables)",
      keyPoint: {
        title: "ຫຼັກການແທນຄ່າຫຼາຍຕົວລັບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນກໍລະນີສຳນວນມີຫຼາຍຕົວລັບ ເຊັ່ນ "} <span className="math">{"𝑥, 𝑦"}</span> {", ເຮົາຕ້ອງເອົາແຕ່ລະຄ່າທີ່ກຳນົດໃຫ້ໄປແທນໃສ່ຕົວລັບໃຫ້ຖືກຕ້ອງຕາມຕຳແໜ່ງ:"}
            </p>
            
            {/* Multi-variable Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math">{"ຄິດໄລ່ຄ່າຂອງສຳນວນ 3𝑥 - 𝑦 ເມື່ອ 𝑥 = 2 ແລະ 𝑦 = 4"}</span>
                <span className="math">{"➔ ແທນຄ່າ: 3 × 2 - 4"}</span>
                <span className="math">{"➔ ຜົນຄິດໄລ່: 6 - 4 = 2"}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງລະວັງເຄື່ອງໝາຍບວກລົບໃນການຄິດໄລ່ຫຼາຍຕົວລັບເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນລຸ່ມນີ້ ເມື່ອແທນຄ່າຕົວລັບທີ່ກຳນົດໃຫ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງ 3𝑥 - 𝑦 ເມື່ອ 𝑥 = 2 ແລະ 𝑦 = 4 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງ 2𝑥 + 3𝑦 ເມື່ອ 𝑥 = 3 ແລະ 𝑦 = 1 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຄ່າຂອງ 𝑥𝑦 - 5 ເມື່ອ 𝑥 = 4 ແລະ 𝑦 = 2 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຄ່າຂອງ a² - b² ເມື່ອ a = 5 ແລະ b = 3 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຄ່າຂອງ 2a + ab ເມື່ອ a = -2 ແລະ b = 4 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດສຳນວນທີ່ມີເລກສ່ວນ ແລະ ຕົວຊີ້ກຳລັງຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ຄ່າສຳນວນເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້ ເມື່ອ 𝑥 = 6 ແລະ 𝑦 = 3: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="𝑥 + 𝑦" den="3" /> {" + 𝑥𝑦"}
              </span>
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຜົນຄິດໄລ່ແມ່ນ"}</span>
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
              {"ໂຈດບັນຫາສ້າງສຳນວນເລກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມີຮູບສີ່ແຈສາກໜຶ່ງທີ່ມີລວງຍາວ 𝑥 = 8 cm ແລະ ລວງກວ້າງ 𝑦 = 5 cm. ສຳນວນເນື້ອທີ່ແມ່ນ S = 𝑥𝑦. ຈົ່ງຄິດໄລ່ເນື້ອທີ່ S ຂອງຮູບນີ້"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: S ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"cm²"}</span>
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
            {"ໂຈດບັນຫາລວງຮອບຮູບສີ່ແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລວງຮອບຂອງຮູບສີ່ແຈສາກແມ່ນກຳນົດດ້ວຍສຳນວນ P = 2(a + b). ຖ້າ a = 12 cm ແລະ b = 8 cm, ຈົ່ງຄິດໄລ່ P"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: P ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"cm"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄຳຖາມທົດສອບຄ່າຂອງສຳນວນກຳລັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າ a = -3, ຄ່າຂອງສຳນວນ a² - 3a ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
          <span key="1-1">{"(1) 11 (ຄິດໄລ່: 2(3) + 5 = 6 + 5 = 11)"}</span>,
          <span key="1-2">{"(2) 11 (ຄິດໄລ່: 3(5) - 4 = 15 - 4 = 11)"}</span>,
          <span key="1-3">{"(3) 0 (ຄິດໄລ່: 8 - 4(2) = 8 - 8 = 0)"}</span>,
          <span key="1-4">{"(4) 11 (ຄິດໄລ່: (-3)² + 2 = 9 + 2 = 11)"}</span>,
          <span key="1-5">{"(5) 2 (ຄິດໄລ່: 10 - 2³ = 10 - 8 = 2)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 2 (ຄິດໄລ່: 3(2) - 4 = 6 - 4 = 2)"}</span>,
          <span key="2-2">{"(2) 9 (ຄິດໄລ່: 2(3) + 3(1) = 6 + 3 = 9)"}</span>,
          <span key="2-3">{"(3) 3 (ຄິດໄລ່: 4(2) - 5 = 8 - 5 = 3)"}</span>,
          <span key="2-4">{"(4) 16 (ຄິດໄລ່: 5² - 3² = 25 - 9 = 16)"}</span>,
          <span key="2-5">{"(5) -12 (ຄິດໄລ່: 2(-2) + (-2)(4) = -4 - 8 = -12)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 21 (ຄິດໄລ່: (6+3)/3 + (6)(3) = 9/3 + 18 = 3 + 18 = 21)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 40 cm² (ຄິດໄລ່: 8 × 5 = 40)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 40 cm (ຄິດໄລ່: 2(12 + 8) = 2(20) = 40)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 18 (ຄິດໄລ່: (-3)² - 3(-3) = 9 + 9 = 18)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຄິດໄລ່ຄ່າຂອງສຳນວນເປັນທັກສະພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນພຶດຊະຄະນິດ. ຝຶກຝົນຕໍ່ໄປເພື່ອຄວາມຊຳນານເດີ້!"
  }
};
