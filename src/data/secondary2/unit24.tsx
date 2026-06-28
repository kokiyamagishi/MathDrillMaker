import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit24Data: UnitData = {
  unitNumber: 24,
  unitTitle: "ພາກທີ IV - ບົດທີ 24: ອະສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
  unitGoal: "ຮຽນຮູ້ ແລະ ຝຶກທັກສະການແກ້ສົມຜົນອະສົມຜົນຂັ້ນໜຶ່ງ ax + b < c ແລະ ການສະແດງເຂດໃຈຜົນເທິງເສັ້ນຈຳນວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 101-105",
  subSections: [
    {
      title: "1. ການແກ້ສົມຜົນອະສົມຜົນຂັ້ນໜຶ່ງພື້ນຖານ (Basic Linear Inequalities)",
      keyPoint: {
        title: "ຫຼັກການແກ້ ແລະ ການຍ້າຍພົດໃນອະສົມຜົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ສົມຜົນອະສົມຜົນຂັ້ນໜຶ່ງ ແມ່ນຄ້າຍຄືກັນກັບສົມຜົນ. ເຮົາໃຊ້ການຍ້າຍພົດ ແລະ ຫານເພື່ອຊອກຫາຂອບເຂດຂອງ 𝑥:"}
            </p>
            
            {/* Basic inequality block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ແກ້ສົມຜົນອະສົມຜົນ "} <span className="math">{"3𝑥 + 2 < 11"}</span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span className="math">{"• ຍ້າຍ +2 ໄປຂວາ ➔ ປ່ຽນເປັນ -2: 3𝑥 < 11 - 2 ➔ 3𝑥 < 9"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຫານທັງສອງຟາກໃຫ້ 3: 𝑥 < "} <Fraction num="9" den="3" /> {" ➔ 𝑥 < 3"}
                </span>
              </div>
            </div>

            {/* Shaded Number Line SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດສະແດງເຂດໃຈຜົນ 𝑥 < 3 ເທິງເສັ້ນຈຳນວນ"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  <line x1="10" y1="20" x2="190" y2="20" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Ticks */}
                  <line x1="100" y1="15" x2="100" y2="25" stroke="#37474F" strokeWidth="1.5" />
                  <text x="100" y="36" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  {/* Shading left side */}
                  <rect x="10" y="18" width="90" height="4" fill="#4CAF50" opacity="0.5" />
                  
                  {/* Open circle at 3 */}
                  <circle cx="100" cy="20" r="4" fill="#FFFFFF" stroke="#4CAF50" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໃຈຜົນຂອງອະສົມຜົນບໍ່ແມ່ນຈຳນວນດຽວ ແຕ່ແມ່ນກຸ່ມຈຳນວນ (ຂອບເຂດ) ທັງໝົດທີ່ຕອບສະໜອງເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນອະສົມຜົນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math">{"3𝑥 + 2 < 11 ➔ 𝑥 <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math">{"2𝑥 - 7 > 3 ➔ 𝑥 >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math">{"5𝑥 + 8 ≤ 23 ➔ 𝑥 ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math">{"4𝑥 - 9 ≥ 15 ➔ 𝑥 ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="𝑥" den="4" /> {" - 2 < 1 ➔ 𝑥 <"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ອະສົມຜົນທີ່ມີຕົວລົບ ແລະ ການປ່ຽນປິ່ນເຄື່ອງໝາຍ (Inequalities with Negative Variable Terms)",
      keyPoint: {
        title: "ຫຼັກການແກ້ສົມຜົນອະສົມຜົນທີ່ມີສຳປະສິດເປັນເລກລົບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອແກ້ສົມຜົນອະສົມຜົນທີ່ມີການຫານ ຫຼື ຄູນດ້ວຍຈຳນວນລົບ (ຫຼື ຍ້າຍສຳປະສິດລົບທາງໜ້າ 𝑥 ໄປຫານ), ຕ້ອງປິ່ນທິດທາງເຄື່ອງໝາຍສະເໝີ:"}
            </p>
            
            {/* Negative inequality box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math">{"ແກ້ສົມຜົນອະສົມຜົນ 10 - 2𝑥 < 4"}</span>
                <span className="math">{"• ຍ້າຍ 10 ໄປຂວາ: -2𝑥 < 4 - 10 ➔ -2𝑥 < -6"}</span>
                <span className="math">{"• ຫານດ້ວຍ -2 (ປ່ຽນປິ່ນເຄື່ອງໝາຍ): 𝑥 > 3"}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງລະມັດລະວັງເຄື່ອງໝາຍເວລາແກ້ສົມຜົນອະສົມຜົນທີ່ມີ 𝑥 ຢູ່ທາງຫຼັງເລກລົບເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນອະສົມຜົນລຸ່ມນີ້ດ້ວຍຄວາມລະມັດລະວັງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math">{"5 - 𝑥 > 2 ➔ 𝑥 <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math">{"10 - 2𝑥 < 4 ➔ 𝑥 >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math">{"8 - 3𝑥 ≥ 20 ➔ 𝑥 ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math">{"2 - 5𝑥 ≤ -13 ➔ 𝑥 ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"6 - "} <Fraction num="𝑥" den="2" /> {" < 4 ➔ 𝑥 >"}
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະອະສົມຜົນທີ່ມີວົງເລັບ ແລະ ເລກສ່ວນປະສົມຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ສົມຜົນອະສົມຜົນທີ່ມີວົງເລັບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຂອບເຂດ 𝑥 ຈາກອະສົມຜົນ "} <span className="math">{"3(𝑥 - 2) < 2𝑥 + 4"}</span> {" ໂດຍການຄູນແຈກຢາຍກ່ອນ ແລ້ວຍ້າຍພົດ"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 <"}</span>
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
              {"ອະສົມຜົນເລກສ່ວນຊອກຫາ 𝑥: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຂອບເຂດຂອງ 𝑥 ຈາກອະສົມຜົນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="𝑥 + 1" den="2" /> {" - "} <Fraction num="𝑥 - 1" den="3" /> {" < 1"}
              </span>
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 <"}</span>
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
            {"ໂຈດບັນຫາການຂຶ້ນລົດເມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ້າວ ແດງ ຕ້ອງການຂຶ້ນລົດເມທີ່ມີຄ່າໂດຍສານ 3,000 ກີບຕໍ່ຄັ້ງ. ຖ້າລາວມີເງິນທັງໝົດ 20,000 ກີບ ແລະ ຕ້ອງການຍັງເຫຼືອເງິນຢ່າງໜ້ອຍ 5,000 ກີບ. ຖາມວ່າລາວຈະຂຶ້ນລົດເມໄດ້ຫຼາຍສຸດຈັກຄັ້ງ (𝑥 ຄັ້ງ)? (ສົມຜົນ: 20000 - 3000𝑥 ≥ 5000)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຂຶ້ນໄດ້ຫຼາຍສຸດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຄັ້ງ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄັດຈ້ອນອະສົມຜົນລົບສອງຟາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຂອບເຂດຂອງ 𝑥 ຈາກອະສົມຜົນ: 2 - 3𝑥 > 8 - 𝑥"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: 𝑥 <"}</span>
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
          <span key="1-1">{"(1) 3 (ຄິດໄລ່: 3𝑥 < 9 ➔ 𝑥 < 3)"}</span>,
          <span key="1-2">{"(2) 5 (ຄິດໄລ່: 2𝑥 > 10 ➔ 𝑥 > 5)"}</span>,
          <span key="1-3">{"(3) 3 (ຄິດໄລ່: 5𝑥 ≤ 15 ➔ 𝑥 ≤ 3)"}</span>,
          <span key="1-4">{"(4) 6 (ຄິດໄລ່: 4𝑥 ≥ 24 ➔ 𝑥 ≥ 6)"}</span>,
          <span key="1-5">{"(5) 12 (ຄິດໄລ່: 𝑥/4 < 3 ➔ 𝑥 < 12)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 3 (ຄິດໄລ່: -𝑥 > -3 ➔ 𝑥 < 3)"}</span>,
          <span key="2-2">{"(2) 3 (ຄິດໄລ່: -2𝑥 < -6 ➔ 𝑥 > 3)"}</span>,
          <span key="2-3">{"(3) -4 (ຄິດໄລ່: -3𝑥 ≥ 12 ➔ 𝑥 ≤ -4)"}</span>,
          <span key="2-4">{"(4) 3 (ຄິດໄລ່: -5𝑥 ≤ -15 ➔ 𝑥 ≥ 3)"}</span>,
          <span key="2-5">{"(5) 4 (ຄິດໄລ່: -𝑥/2 < -2 ➔ 𝑥 > 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 10 (ຄິດໄລ່: 3𝑥 - 6 < 2𝑥 + 4 ➔ 𝑥 < 10)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 1 (ຄິດໄລ່: 3(𝑥+1) - 2(𝑥-1) < 6 ➔ 3𝑥 + 3 - 2𝑥 + 2 < 6 ➔ 𝑥 + 5 < 6 ➔ 𝑥 < 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 5 ຄັ້ງ (ຄິດໄລ່: -3000𝑥 ≥ -15000 ➔ 𝑥 ≤ 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) -3 (ຄິດໄລ່: -2𝑥 > 6 ➔ 𝑥 < -3)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດຫຼາຍ! ການແກ້ສົມຜົນອະສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ ເປັນຄວາມຮູ້ພຶດຊະຄະນິດພື້ນຖານທີ່ນຳໃຊ້ໃນການແກ້ໄຂບັນຫາຂອບເຂດຕ່າງໆໃນຄະນິດສາດ ແລະ ຊີວິດປະຈຳວັນໄດ້ດີທີ່ສຸດ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
