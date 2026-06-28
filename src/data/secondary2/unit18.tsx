import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit18Data: UnitData = {
  unitNumber: 18,
  unitTitle: "ພາກທີ III - ບົດທີ 18: ການຄຳນວນກ່ຽວກັບສຳນວນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ປະຕິບັດການບວກ, ລົບ, ຄູນແບບແຈກຢາຍສຳນວນພຶດຊະຄະນິດ ພ້ອມທັງທ້ອນໂຮມພົດທີ່ຄ້າຍຄືກັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 71-75",
  subSections: [
    {
      title: "1. ການທ້ອນໂຮມພົດທີ່ຄ້າຍຄືກັນ (Combining Like Terms in Expressions)",
      keyPoint: {
        title: "ຫຼັກການທ້ອນໂຮມພົດທີ່ຄ້າຍຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ພົດທີ່ຄ້າຍຄືກັນ ແມ່ນພົດທີ່ມີສ່ວນຕົວອັກສອນ (ຕົວລັບ) ແລະ ຕົວຊີ້ກຳລັງຄືກັນ. ເຮົາສາມາດທ້ອນໂຮມພວກມັນໄດ້ໂດຍເອົາສຳປະສິດ (ຕົວເລກທາງໜ້າ) ມາບວກ ຫຼື ລົບກັນ:"}
            </p>
            
            {/* Grouping Formula block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ທ້ອນໂຮມສຳນວນ "} <span className="math">{"4𝑥 + 7 - 2𝑥 + 3"}</span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span className="math">{"• ໂຮມພົດທີ່ມີ 𝑥: 4𝑥 - 2𝑥 = 2𝑥"}</span>
                <span className="math">{"• ໂຮມພົດຈຳນວນຖ້ວນ: 7 + 3 = 10"}</span>
                <span className="math" style={{ color: "#0D47A1" }}>{"➔ ຜົນທ້ອນໂຮມແມ່ນ: 2𝑥 + 10"}</span>
              </div>
            </div>

            {/* Terms Grouping SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການຈັດກຸ່ມພົດທີ່ຄ້າຍຄືກັນ"}</span>
                <svg viewBox="0 0 240 50" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Terms */}
                  <text x="30" y="20" fill="#2196F3" fontSize="12" fontWeight="bold" textAnchor="middle">{"4𝑥"}</text>
                  <text x="70" y="20" fill="#4CAF50" fontSize="12" fontWeight="bold" textAnchor="middle">{"+ 7"}</text>
                  <text x="110" y="20" fill="#2196F3" fontSize="12" fontWeight="bold" textAnchor="middle">{"- 2𝑥"}</text>
                  <text x="150" y="20" fill="#4CAF50" fontSize="12" fontWeight="bold" textAnchor="middle">{"+ 3"}</text>
                  
                  {/* Connectors for X */}
                  <path d="M 30 25 L 30 35 L 70 35 L 70 25" stroke="#2196F3" strokeWidth="1" fill="none" />
                  <text x="50" y="46" fill="#0D47A1" fontSize="9" textAnchor="middle">{"2𝑥"}</text>
                  
                  {/* Connectors for Integers */}
                  <path d="M 70 25 L 70 30 L 150 30 L 150 25" stroke="#4CAF50" strokeWidth="1" fill="none" />
                  <text x="110" y="42" fill="#1B5E20" fontSize="9" textAnchor="middle">{"10"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ພົດທີ່ມີຕົວລັບຕ່າງກັນ ຫຼື ກຳລັງຕ່າງກັນ ບໍ່ສາມາດບວກລົບກັນໄດ້ເດີ້ ເຊັ່ນ 𝑥² + 𝑥 ບໍ່ສາມາດໂຮມກັນໄດ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງທ້ອນໂຮມສຳນວນພຶດຊະຄະນິດລຸ່ມນີ້ໃຫ້ງ່າຍດາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math">{"4𝑥 + 7 - 2𝑥 + 3 = ?𝑥 + 10"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math">{"8a - 5b + 3a + 2b = ?a - 3b"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math">{"5𝑦 + 12 - 9𝑦 - 4 = ?𝑦 + 8"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math">{"3𝑥² + 4𝑥 - 𝑥² + 2𝑥 = 2𝑥² + ?𝑥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math">{"7 - 3m + 5 - 2m = 12 - ?m"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄູນສຳນວນແບບແຈກຢາຍ (Distributive Law Expansion of Expressions)",
      keyPoint: {
        title: "ຫຼັກການແຈກຢາຍສຳນວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຄູນຈຳນວນໜຶ່ງໃສ່ໃນວົງເລັບ, ໃຫ້ເອົາຈຳນວນນັ້ນຄູນແຈກຢາຍໃສ່ແຕ່ລະພົດໃນວົງເລັບຕາມສູດ:"}
            </p>
            
            {/* Distributive box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ສູດແຈກຢາຍ: a(b + c) = ab + ac"}</span>
                <span className="math">{"• ສູດແຈກຢາຍລົບ: a(b - c) = ab - ac"}</span>
                <span style={{ color: "#2E7D32" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"3(2𝑥 + 4) = 3 × 2𝑥 + 3 × 4 = 6𝑥 + 12"}
                </span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງລະວັງເຄື່ອງໝາຍເວລາຄູນເລກລົບແຈກຢາຍ ເຊັ່ນ -2(3𝑥 - 5) = -6𝑥 + 10!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແຈກຢາຍ ແລະ ຄັດຈ້ອນສຳນວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math">{"3(2𝑥 + 4) = ?𝑥 + 12"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math">{"5(3a - 2) = ?a - 10"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math">{"-2(4m - 3) = -8m + ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math">{"2(𝑥 + 3) + 4(2𝑥 - 1) = ?𝑥 + 2"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math">{"6(𝑦 - 2) - 3(2𝑦 - 4) = ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ປະຕິບັດການຄູນແຈກຢາຍ ແລະ ທ້ອນໂຮມພົດເລກສ່ວນຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄູນແຈກຢາຍເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄັດຈ້ອນສຳນວນຕໍ່ໄປນີ້ໃຫ້ງ່າຍດາຍ: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="1" den="2" /> {"(4𝑥 + 6) + "} <Fraction num="1" den="3" /> {"(9𝑥 - 12) = ?𝑥 - 1"}
              </span>
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ສຳປະສິດ ? ຂອງ 𝑥 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາຊອກຫາເນື້ອທີ່ຂອບທາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມີສວນດອກໄມ້ຮູບສີ່ແຈສາກຍາວ 2𝑥 ແມັດ ແລະ ກວ້າງ 𝑥 ແມັດ. ເນື້ອທີ່ຂອງສວນແມ່ນກຳນົດດ້ວຍສຳນວນ S = 2𝑥². ຖ້າເນື້ອທີ່ສວນຖືກຂະຫຍາຍເພີ່ມຂຶ້ນ 50 ຕາແມັດ, ສຳນວນເນື້ອທີ່ໃໝ່ແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ໃໝ່ແມ່ນ"}</span>
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
            {"ການລົບສຳນວນໃນວົງເລັບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນສຳນວນຕໍ່ໄປນີ້ໃຫ້ງ່າຍດາຍ: "}
            <span className="math" style={{ marginLeft: "6px" }}>
              {"(5𝑥 + 8) - (2𝑥 - 3) = ?𝑥 + 11"}
            </span>
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ສຳປະສິດ ? ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄັດຈ້ອນກຳລັງສອງຂອງສຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນສຳນວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ marginLeft: "6px" }}>
              {"2(𝑥² + 3) + 3(2 - 𝑥²) = 12 - ?𝑥²"}
            </span>
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ສຳປະສິດ ? ຂອງ 𝑥² ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
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
          <span key="1-1">{"(1) 2 (ຄິດໄລ່: 4𝑥 - 2𝑥 = 2𝑥)"}</span>,
          <span key="1-2">{"(2) 11 (ຄິດໄລ່: 8a + 3a = 11a)"}</span>,
          <span key="1-3">{"(3) -4 (ຄິດໄລ່: 5𝑦 - 9𝑦 = -4𝑦)"}</span>,
          <span key="1-4">{"(4) 6 (ຄິດໄລ່: 4𝑥 + 2𝑥 = 6𝑥)"}</span>,
          <span key="1-5">{"(5) 5 (ຄິດໄລ່: -3m - 2m = -5m)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 6 (ຄິດໄລ່: 3 × 2𝑥 = 6𝑥)"}</span>,
          <span key="2-2">{"(2) 15 (ຄິດໄລ່: 5 × 3a = 15a)"}</span>,
          <span key="2-3">{"(3) 6 (ຄິດໄລ່: -2 × -3 = 6)"}</span>,
          <span key="2-4">{"(4) 10 (ຄິດໄລ່: 2𝑥 + 8𝑥 = 10𝑥)"}</span>,
          <span key="2-5">{"(5) 0 (ຄິດໄລ່: 6𝑦 - 12 - 6𝑦 + 12 = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 5 (ຄິດໄລ່: 2𝑥 + 3 + 3𝑥 - 4 = 5𝑥 - 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 2𝑥² + 50"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 3 (ຄິດໄລ່: 5𝑥 + 8 - 2𝑥 + 3 = 3𝑥 + 11)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 1 (ຄິດໄລ່: 2𝑥² + 6 + 6 - 3𝑥² = 12 - 1𝑥² ➔ ? = 1)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ເຈົ້າໄດ້ຮຽນຮູ້ທັກສະການຈັດການສຳນວນພຶດຊະຄະນິດຢ່າງລະອຽດ. ການບວກລົບ ແລະ ການຄູນແຈກຢາຍເປັນພື້ນຖານທີ່ດີໃນການແກ້ສົມຜົນ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
