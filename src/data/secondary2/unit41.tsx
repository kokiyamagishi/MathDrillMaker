import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit41Data: UnitData = {
  unitNumber: 41,
  unitTitle: "ພາກທີ VI - ບົດທີ 41: ອັດຕາສ່ວນພົວພັນປີ້ນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈສົມຜົນອັດຕາສ່ວນພົວພັນປີ້ນ y = k/x, ການຊອກຫາສຳປະສິດພົວພັນປີ້ນ k = xy ແລະ ການແກ້ໂຈດບັນຫາພົວພັນປີ້ນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 186-190",
  subSections: [
    {
      title: "1. ການຊອກຫາສຳປະສິດພົວພັນປີ້ນ (Finding the Constant of Inverse Proportion k)",
      keyPoint: {
        title: "ຫຼັກການພົວພັນປີ້ນ ແລະ ຜົນຄູນຄົງທີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງປະລິມານ x ແລະ y ພົວພັນປີ້ນກັນ ເມື່ອຜົນຄູນ xy ມີຄ່າຄົງທີ່ k:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>{"• ສູດພົວພັນປີ້ນ: "} <span className="math" style={{ marginLeft: "4px" }}>{"y = "} <Fraction num="k" den="x" /></span></div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຜົນຄູນຄົງທີ່: k = x × y"}</div>
              <div>{"• ຕົວຢ່າງ: ຖ້າ x = 4 ➔ y = 5 ➔ ຈະໄດ້ k = 4 × 5 = 20."}</div>
            </div>

            {/* Inverse Proportion Hyperbola SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນສະແດງອັດຕາສ່ວນພົວພັນປີ້ນ y = 12/x (ຄົງທີ່ xy = 12)"}</span>
                <svg viewBox="0 0 160 160" style={{ width: "100%", maxWidth: "140px", height: "auto" }}>
                  {/* Grid and Axes */}
                  <line x1="10" y1="150" x2="150" y2="150" stroke="#37474F" strokeWidth="1.5" />
                  <line x1="10" y1="10" x2="10" y2="150" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Hyperbola curve: y = 120/x (scaled coordinate) */}
                  <path d="M 20,130 Q 30,30 130,20" fill="none" stroke="#2E7D32" strokeWidth="2.5" />
                  
                  {/* Point A(2, 6) ➔ x = 50, y = 30 (scaled) */}
                  <circle cx="50" cy="30" r="3.5" fill="#D32F2F" />
                  <text x="53" y="38" fill="#D32F2F" fontSize="8" fontWeight="bold">{"A(2, 6)"}</text>
                  <rect x="10" y="30" width="40" height="120" fill="#4CAF50" opacity="0.15" />
                  
                  {/* Point B(4, 3) ➔ x = 90, y = 70 */}
                  <circle cx="90" cy="70" r="3.5" fill="#1565C0" />
                  <text x="93" y="78" fill="#1565C0" fontSize="8" fontWeight="bold">{"B(4, 3)"}</text>
                  <rect x="10" y="70" width="80" height="80" fill="#2196F3" opacity="0.15" />

                  {/* Labels */}
                  <text x="150" y="145" fill="#37474F" fontSize="8">{"x"}</text>
                  <text x="15" y="18" fill="#37474F" fontSize="8">{"y"}</text>
                  <text x="5" y="158" fill="#37474F" fontSize="8">{"O"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນຄູນ xy = k ແມ່ນຄົງທີ່. ດັ່ງນັ້ນ, ຖ້າຄ່າໜຶ່ງເພີ່ມຂຶ້ນ ອີກຄ່າໜຶ່ງຈະຫຼຸດລົງໃນອັດຕາສ່ວນດຽວກັນສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາສຳປະສິດພົວພັນປີ້ນ k ຈາກເງື່ອນໄຂທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າ x = 4 ➔ y = 5. ສຳປະສິດພົວພັນປີ້ນ k (k = x × y) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ x = 3 ➔ y = 8. ສຳປະສິດພົວພັນປີ້ນ k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າ x = 10 ➔ y = 2.5. ສຳປະສິດພົວພັນປີ້ນ k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າ x = -2 ➔ y = -6. ສຳປະສິດພົວພັນປີ້ນ k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າ x = 12 ➔ y = 0.5. ສຳປະສິດພົວພັນປີ້ນ k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ y ຈາກ x ແລະ k (Calculating y from x and k)",
      keyPoint: {
        title: "ການແກ້ສົມຜົນພົວພັນປີ້ນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ສົມຜົນພົວພັນປີ້ນ xy = k. ເຮົາຊອກຫາ y ໄດ້ໂດຍການເອົາ k ຫານໃຫ້ x:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ຕົວຢ່າງ: ຖ້າ xy = 20, ເມື່ອ x = 2 ➔ y = 20 / 2 = 10."}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນຄູນຂອງ x ແລະ y ຕ້ອງເທົ່າກັບ k ສະເໝີ, ດັ່ງນັ້ນ x × y = k ເປັນການກວດຄຳຕອບທີ່ດີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຂອງ y ຈາກສົມຜົນພົວພັນປີ້ນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກສົມຜົນ xy = 20. ຖ້າ x = 2, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກສົມຜົນ xy = 24. ຖ້າ x = 8, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກສົມຜົນ xy = 36. ຖ້າ x = 4, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຈາກສົມຜົນ xy = 50. ຖ້າ x = 10, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຈາກສົມຜົນ xy = 15. ຖ້າ x = 5, y ຈະເທົ່າກັບຈັກ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຄິດໄລ່ຄ່າຄົງທີ່ k ກ່ອນ ແລ້ວຈຶ່ງແກ້ສົມຜົນຊອກຫາຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາຕົວປະສານຈາກຕາຕະລາງພົວພັນປີ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າ x ແລະ y ພົວພັນປີ້ນກັນ. ຖ້າ x = 3 ➔ y = 8. ຖ້າ x = 6 ➔ y = a. ຈົ່ງຊອກຫາຄ່າຂອງ a. (3 × 8 = 6 × a)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a ="}</span>
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
              {"ຊອກຫາ x ຈາກ y ໃນສົມຜົນພົວພັນປີ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈາກສົມຜົນພົວພັນປີ້ນ xy = 48. ຖ້າ y = 12, ຄ່າຂອງ x ຈະແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
            {"ໂຈດບັນຫາການແບ່ງປັນເຂົ້າໜົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈຳນວນເດັກນ້ອຍ (x) ແລະ ເຂົ້າໜົມທີ່ແຕ່ລະຄົນໄດ້ຮັບ (y) ພົວພັນປີ້ນກັນ. ຖ້າມີເດັກນ້ອຍ 4 ຄົນ, ແຕ່ລະຄົນຈະໄດ້ຮັບເຂົ້າໜົມ 6 ຕອນ. ຖ້າມີເດັກນ້ອຍ 8 ຄົນ, ແຕ່ລະຄົນຈະໄດ້ຮັບເຂົ້າໜົມຈັກຕອນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ຮັບຄົນລະ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຕອນ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຄວາມໄວ ແລະ ເວລາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເວລາເດີນທາງ (y) ພົວພັນປີ້ນກັບຄວາມໄວຂອງລົດ (x). ຖ້າຂີ່ລົດດ້ວຍຄວາມໄວ 60 km/h ຈະໃຊ້ເວລາ 2 ຊົ່ວໂມງ. ຖ້າຂີ່ດ້ວຍຄວາມໄວ 80 km/h ຈະໃຊ້ເວລາຈັກຊົ່ວໂມງ? (ຕອບເປັນທົດສະນິຍົມ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໃຊ້ເວລາ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຊົ່ວໂມງ"}</span>
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
          <span key="1">{"(1) 20 (ເພາະວ່າ k = x × y = 4 × 5 = 20)"}</span>,
          <span key="2">{"(2) 24 (ເພາະວ່າ k = 3 × 8 = 24)"}</span>,
          <span key="3">{"(3) 25 (ເພາະວ່າ k = 10 × 2.5 = 25)"}</span>,
          <span key="4">{"(4) 12 (ເພາະວ່າ k = -2 × -6 = 12)"}</span>,
          <span key="5">{"(5) 6 (ເພາະວ່າ k = 12 × 0.5 = 6)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 10 (ເພາະວ່າ y = 20 / 2 = 10)"}</span>,
          <span key="7">{"(2) 3 (ເພາະວ່າ y = 24 / 8 = 3)"}</span>,
          <span key="8">{"(3) 9 (ເພາະວ່າ y = 36 / 4 = 9)"}</span>,
          <span key="9">{"(4) 5 (ເພາະວ່າ y = 50 / 10 = 5)"}</span>,
          <span key="10">{"(5) 3 (ເພາະວ່າ y = 15 / 5 = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"4 (ເພາະວ່າ xy = 3 × 8 = 24 ➔ a = 24 / 6 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"4 (ເພາະວ່າ xy = 48 ➔ x × 12 = 48 ➔ x = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"3 (ຜົນຄູນເຂົ້າໜົມທັງໝົດ = 4 × 6 = 24 ➔ ຖ້າມີ 8 ຄົນ, ແຕ່ລະຄົນໄດ້ = 24 / 8 = 3 ຕອນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"1.5 (ໄລຍະທາງຄົງທີ່ = 60 × 2 = 120 km ➔ ເວລາທີ່ຄວາມໄວ 80 = 120 / 80 = 1.5 ຊົ່ວໂມງ)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການແກ້ສົມຜົນພົວພັນປີ້ນ ແລະ ການວິເຄາະໂຈດບັນຫາຕົວຈິງ ຈະຊ່ວຍໃຫ້ເຮົາມີຄວາມຊຳນານຫຼາຍຂຶ້ນໃນດ້ານຄະນິດສາດ ແລະ ຟີຊິກສາດເດີ້!"
  }
};
