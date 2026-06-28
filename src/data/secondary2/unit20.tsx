import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit20Data: UnitData = {
  unitNumber: 20,
  unitTitle: "ພາກທີ IV - ບົດທີ 20: ສະເໝີຜົນ",
  unitGoal: "ເຂົ້າໃຈ ແລະ ນຳໃຊ້ຄຸນລັກສະນະຂອງຄວາມສະເໝີຜົນ (Equalities) ໃນການບວກ, ລົບ, ຄູນ ແລະ ຫານ ເພື່ອແກ້ສົມຜົນພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 81-85",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະການບວກ ແລະ ການລົບໃນສະເໝີຜົນ (Addition & Subtraction in Equalities)",
      keyPoint: {
        title: "ຫຼັກການຮັກສາຄວາມສະເໝີພາບດ້ວຍການບວກ ແລະ ລົບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສະເໝີຜົນ ປຽບເໝືອນກັບຊິງຊັ່ງທີ່ສົມດຸນກັນ. ຖ້າເຮົາບວກ ຫຼື ລົບ ຈຳນວນດຽວກັນໃສ່ທັງສອງຟາກ, ຄວາມສະເໝີພາບຈະຍັງຄືເກົ່າສະເໝີ:"}
            </p>
            
            {/* Equality formulas block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ຖ້າ a = b, ຈະໄດ້: a + c = b + c"}</span>
                <span className="math">{"• ຖ້າ a = b, ຈະໄດ້: a - c = b - c"}</span>
                <span style={{ color: "#0D47A1" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າ 𝑥 - 3 = 7, ເອົາ 3 ບວກໃສ່ທັງສອງຟາກ: 𝑥 - 3 + 3 = 7 + 3 ➔ 𝑥 = 10."}
                </span>
              </div>
            </div>

            {/* Weighing scale SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດສົມດຸນ (Weighing Scale Model)"}</span>
                <svg viewBox="0 0 200 60" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Stand */}
                  <line x1="100" y1="10" x2="100" y2="50" stroke="#37474F" strokeWidth="2" />
                  <line x1="70" y1="50" x2="130" y2="50" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Balance Beam */}
                  <line x1="40" y1="20" x2="160" y2="20" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Left Pan */}
                  <line x1="40" y1="20" x2="20" y2="40" stroke="#757575" strokeWidth="1" />
                  <line x1="40" y1="20" x2="60" y2="40" stroke="#757575" strokeWidth="1" />
                  <rect x="15" y="40" width="50" height="4" fill="#0288D1" />
                  <text x="40" y="36" fill="#0D47A1" fontSize="9" fontWeight="bold" textAnchor="middle">{"𝑥 - 3"}</text>
                  
                  {/* Right Pan */}
                  <line x1="160" y1="20" x2="140" y2="40" stroke="#757575" strokeWidth="1" />
                  <line x1="160" y1="20" x2="180" y2="40" stroke="#757575" strokeWidth="1" />
                  <rect x="135" y="40" width="50" height="4" fill="#E65100" />
                  <text x="160" y="36" fill="#D84315" fontSize="9" fontWeight="bold" textAnchor="middle">{"7"}</text>

                  {/* Indicator */}
                  <polygon points="100,10 97,20 103,20" fill="#F44336" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເພື່ອຊອກຫາ 𝑥, ໃຫ້ກຳຈັດຕົວເລກທີ່ຢູ່ຟາກດຽວກັນກັບ 𝑥 ໂດຍໃຊ້ການປະຕິບັດການກົງກັນຂ້າມເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຫາຄ່າຂອງ 𝑥 ໂດຍນຳໃຊ້ຄຸນລັກສະນະບວກລົບໃນສະເໝີຜົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າ 𝑥 - 3 = 7, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າ 𝑥 + 5 = 12, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າ 𝑥 - 8 = -2, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າ 10 + 𝑥 = 4, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າ 𝑥 - 1.5 = 3.5, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄຸນລັກສະນະການຄູນ ແລະ ການຫານໃນສະເໝີຜົນ (Multiplication & Division in Equalities)",
      keyPoint: {
        title: "ຫຼັກການຮັກສາຄວາມສະເໝີພາບດ້ວຍການຄູນ ແລະ ຫານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເຮົາຄູນ ຫຼື ຫານ (ດ້ວຍຈຳນວນທີ່ຕ່າງຈາກ 0) ທັງສອງຟາກຂອງສະເໝີຜົນດ້ວຍຈຳນວນດຽວກັນ, ຄວາມສະເໝີພາບຈະຍັງຄືເກົ່າສະເໝີ:"}
            </p>
            
            {/* Formulas Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ຖ້າ a = b, ຈະໄດ້: ac = bc"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຖ້າ a = b, ຈະໄດ້: "} <Fraction num="a" den="c" /> {" = "} <Fraction num="b" den="c" /> {" (ເຊິ່ງ c ≠ 0)"}
                </span>
                <span style={{ color: "#2E7D32" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າ "} <Fraction num="𝑥" den="2" /> {" = 6, ເອົາ 2 ຄູນໃສ່ທັງສອງຟາກ ➔ 𝑥 = 12."}
                </span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຫານກໍຄືການຄູນກັບເລກສ່ວນປີ້ນ, ໃຊ້ກຳຈັດຕົວເລກທາງໜ້າ 𝑥 ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຫາຄ່າຂອງ 𝑥 ໂດຍນຳໃຊ້ຄຸນລັກສະນະຄູນຫານໃນສະເໝີຜົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="𝑥" den="2" /> {" = 6, ຈະໄດ້ 𝑥 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math">{"3𝑥 = 15, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="𝑥" den="5" /> {" = -3, ຈະໄດ້ 𝑥 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math">{"-4𝑥 = 24, ຈະໄດ້ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="3" /> {"𝑥 = 8, ຈະໄດ້ 𝑥 ="}
                  </span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດສົມຜົນສອງຂັ້ນຕອນ ໂດຍປະຕິບັດການກົງກັນຂ້າມຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ສົມຜົນສອງຂັ້ນຕອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າ 𝑥 ຈາກສົມຜົນ "} <span className="math">{"2𝑥 + 4 = 16"}</span> {" ໂດຍການລົບ 4 ກ່ອນ ແລ້ວຈຶ່ງຫານດ້ວຍ 2 ທັງສອງຟາກ"}
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
              {"ຄິດໄລ່ສົມຜົນເລກສ່ວນສອງຟາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="𝑥 - 1" den="3" /> {" = "} <Fraction num="2" den="3" />
              </span>
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            {"ໂຈດສົມຜົນການແບ່ງປັນເຄື່ອງຫຼິ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າແບ່ງເຂົ້າໜົມ 𝑥 ກ້ອນ ອອກເປັນ 4 ສ່ວນເທົ່າກັນ ຈະໄດ້ສ່ວນລະ 5 ກ້ອນ. ຂຽນເປັນສົມຜົນແມ່ນ 𝑥/4 = 5. ຈົ່ງຊອກຫາຈຳນວນເຂົ້າໜົມ 𝑥 ທັງໝົດ"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ກ້ອນ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຊອກຫາຄ່າ 𝑥 ຈາກການລົບຄູນປະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນ: 5𝑥 - 7 = 8"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
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
          <span key="1-1">{"(1) 10 (ຄິດໄລ່: 7 + 3 = 10)"}</span>,
          <span key="1-2">{"(2) 7 (ຄິດໄລ່: 12 - 5 = 7)"}</span>,
          <span key="1-3">{"(3) 6 (ຄິດໄລ່: -2 + 8 = 6)"}</span>,
          <span key="1-4">{"(4) -6 (ຄິດໄລ່: 4 - 10 = -6)"}</span>,
          <span key="1-5">{"(5) 5 (ຄິດໄລ່: 3.5 + 1.5 = 5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 12 (ຄິດໄລ່: 6 × 2 = 12)"}</span>,
          <span key="2-2">{"(2) 5 (ຄິດໄລ່: 15 ÷ 3 = 5)"}</span>,
          <span key="2-3">{"(3) -15 (ຄິດໄລ່: -3 × 5 = -15)"}</span>,
          <span key="2-4">{"(4) -6 (ຄິດໄລ່: 24 ÷ -4 = -6)"}</span>,
          <span key="2-5">{"(5) 12 (ຄິດໄລ່: 8 × 3/2 = 12)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 6 (ຄິດໄລ່: 2𝑥 = 12 ➔ 𝑥 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 3 (ຄິດໄລ່: 𝑥 - 1 = 2 ➔ 𝑥 = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 20 ກ້ອນ (ຄິດໄລ່: 𝑥 = 5 × 4 = 20)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 3 (ຄິດໄລ່: 5𝑥 = 15 ➔ 𝑥 = 3)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ຄຸນລັກສະນະຂອງສະເໝີຜົນ ເປັນຫົວໃຈຫຼັກໃນການແກ້ສົມຜົນທຸກຊະນິດໃນຄະນິດສາດ. ເຂົ້າໃຈຫຼັກການນີ້ແລ້ວ ຈະເຮັດໃຫ້ເຮົາຮຽນຕໍ່ໄປໄດ້ຢ່າງໝັ້ນໃຈ!"
  }
};
