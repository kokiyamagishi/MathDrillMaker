import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພາກທີ IV - ບົດທີ 21: ສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
  unitGoal: "ຮຽນຮູ້ ແລະ ຝຶກທັກສະການແກ້ສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ ໂດຍການຍ້າຍພົດ ແລະ ການຄັດຈ້ອນຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 86-90",
  subSections: [
    {
      title: "1. ສົມຜົນຂັ້ນໜຶ່ງຮູບຮ່າງ ax + b = c (Linear Equations of Form ax + b = c)",
      keyPoint: {
        title: "ຫຼັກການແກ້ສົມຜົນດ້ວຍການຍ້າຍພົດ (Transposition)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ສົມຜົນ ແມ່ນການຊອກຫາຄ່າຂອງຕົວລັບ 𝑥. ເຮົາໃຊ້ຫຼັກການຍ້າຍພົດ (Transposition) ໂດຍປ່ຽນເຄື່ອງໝາຍ: ບວກ ປ່ຽນເປັນ ລົບ, ຄູນ ປ່ຽນເປັນ ຫານ:"}
            </p>
            
            {/* Equation Transposition block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ແກ້ສົມຜົນ "} <span className="math">{"2𝑥 + 4 = 10"}</span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span className="math">{"• ຍ້າຍ +4 ໄປຟາກຂວາ ➔ ປ່ຽນເປັນ -4:  2𝑥 = 10 - 4 ➔ 2𝑥 = 6"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຍ້າຍ ຄູນ 2 ໄປຟາກຂວາ ➔ ປ່ຽນເປັນ ຫານ:  𝑥 = "} <Fraction num="6" den="2" /> {" ➔ 𝑥 = 3"}
                </span>
              </div>
            </div>

            {/* Transposition Flow SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການຍ້າຍພົດປ່ຽນເຄື່ອງໝາຍ"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Left Eq */}
                  <text x="30" y="22" fill="#37474F" fontSize="12" fontWeight="bold">{"2𝑥 + 4 = 10"}</text>
                  
                  {/* Arrow for +4 */}
                  <path d="M 62 14 Q 90 -2 118 14" stroke="#F44336" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
                  <text x="90" y="6" fill="#D32F2F" fontSize="8" fontWeight="bold" textAnchor="middle">{"ຍ້າຍໄປເປັນ -4"}</text>
                  
                  {/* Right Eq */}
                  <text x="135" y="22" fill="#37474F" fontSize="12" fontWeight="bold">{"2𝑥 = 10 - 4"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມກວດຄືນໂດຍແທນຄ່າ 𝑥 ທີ່ໄດ້ກັບຄືນໃສ່ສົມຜົນເດີ ວ່າທັງສອງຟາກເທົ່າກັນແທ້ ຫຼື ບໍ່!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນພື້ນຖານລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"2𝑥 + 4 = 10 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"3𝑥 - 5 = 10 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"5𝑥 + 12 = 2 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"-4𝑥 + 7 = -5 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="𝑥" den="2" /> {" + 3 = 8 ➔ 𝑥 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສົມຜົນທີ່ມີຕົວລັບຢູ່ທັງສອງຟາກ (Linear Equations with Variables on Both Sides)",
      keyPoint: {
        title: "ຫຼັກການທ້ອນໂຮມຕົວລັບໄວ້ຟາກດຽວກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອມີຕົວລັບ 𝑥 ຢູ່ທັງສອງຟາກ, ໃຫ້ຍ້າຍພົດທີ່ມີ 𝑥 ມາໂຮມກັນຢູ່ຟາກຊ້າຍ ແລະ ຍ້າຍພົດຕົວເລກຄົງຄ່າໄປຢູ່ຟາກຂວາ:"}
            </p>
            
            {/* Double-sided Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math">{"ແກ້ສົມຜົນ 5𝑥 - 3 = 2𝑥 + 6"}</span>
                <span className="math">{"• ຍ້າຍ 2𝑥 ມາຊ້າຍ (-2𝑥), ຍ້າຍ -3 ໄປຂວາ (+3):  5𝑥 - 2𝑥 = 6 + 3"}</span>
                <span className="math">{"• ທ້ອນໂຮມ:  3𝑥 = 9 ➔ 𝑥 = 3"}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝັ່ນສັງເກດເຄື່ອງໝາຍເວລາແກ້ສົມຜົນສອງຟາກເດີ້ ຫ້າມລືມປ່ຽນເຄື່ອງໝາຍເດັດຂາດ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນທີ່ມີຕົວລັບສອງຟາກລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"5𝑥 - 3 = 2𝑥 + 6 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"4𝑥 + 2 = 𝑥 + 11 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"3𝑥 + 8 = 7𝑥 - 4 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"2(𝑥 - 3) = 𝑥 + 4 ➔ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="𝑥 + 2" den="3" /> {" = "} <Fraction num="𝑥 - 1" den="2" /> {" ➔ 𝑥 ="}
                  </span>
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະໂຈດບັນຫາສົມຜົນເລກ ແລະ ສ້າງສົມຜົນກ່ອນແກ້ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາອາຍຸຂອງພໍ່ ແລະ ລູກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປັດຈຸບັນພໍ່ມີອາຍຸ 40 ປີ ແລະ ລູກມີອາຍຸ 10 ປີ. ຖາມວ່າອີກຈັກປີ (𝑥 ປີ) ອາຍຸຂອງພໍ່ຈຶ່ງຈະເປັນ 3 ເທົ່າ ຂອງອາຍຸລູກ? (ສົມຜົນ: 40 + 𝑥 = 3(10 + 𝑥))"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ອີກ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ປີ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມຜົນເລກສ່ວນສາມຕົວຊອກຫາ 𝑥: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="𝑥" den="2" /> {" + "} <Fraction num="𝑥" den="3" /> {" = 5"}
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            {"ໂຈດບັນຫາລາຄາຊື້ປຶ້ມ ແລະ ບິກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຊື້ປຶ້ມ 3 ຫົວ ແລະ ບິກ 1 ກ້ານ ລາຄາ 2,000 ກີບ ລວມເປັນເງິນ 17,000 ກີບ. ຖ້າສົມຜົນແມ່ນ 3𝑥 + 2000 = 17000. ຈົ່ງຊອກຫາລາຄາປຶ້ມ 𝑥 ຕໍ່ຫົວ"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລາຄາປຶ້ມຫົວລະ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ກີບ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄັດຈ້ອນສົມຜົນທີ່ມີວົງເລັບຊ້ອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຕໍ່ໄປນີ້: 3(𝑥 + 2) - 2(𝑥 - 1) = 10"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
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
          <span key="1-1">{"(1) 3 (ຄິດໄລ່: 2𝑥 = 6 ➔ 𝑥 = 3)"}</span>,
          <span key="1-2">{"(2) 5 (ຄິດໄລ່: 3𝑥 = 15 ➔ 𝑥 = 5)"}</span>,
          <span key="1-3">{"(3) -2 (ຄິດໄລ່: 5𝑥 = -10 ➔ 𝑥 = -2)"}</span>,
          <span key="1-4">{"(4) 3 (ຄິດໄລ່: -4𝑥 = -12 ➔ 𝑥 = 3)"}</span>,
          <span key="1-5">{"(5) 10 (ຄິດໄລ່: 𝑥/2 = 5 ➔ 𝑥 = 10)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 3 (ຄິດໄລ່: 3𝑥 = 9 ➔ 𝑥 = 3)"}</span>,
          <span key="2-2">{"(2) 3 (ຄິດໄລ່: 3𝑥 = 9 ➔ 𝑥 = 3)"}</span>,
          <span key="2-3">{"(3) 3 (ຄິດໄລ່: -4𝑥 = -12 ➔ 𝑥 = 3)"}</span>,
          <span key="2-4">{"(4) 10 (ຄິດໄລ່: 2𝑥 - 6 = 𝑥 + 4 ➔ 𝑥 = 10)"}</span>,
          <span key="2-5">{"(5) 7 (ຄິດໄລ່: 2(𝑥 + 2) = 3(𝑥 - 1) ➔ 2𝑥 + 4 = 3𝑥 - 3 ➔ 𝑥 = 7)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 5 ປີ (ຄິດໄລ່: 40 + 𝑥 = 30 + 3𝑥 ➔ 2𝑥 = 10 ➔ 𝑥 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 6 (ຄິດໄລ່: 3𝑥 + 2𝑥 = 30 ➔ 5𝑥 = 30 ➔ 𝑥 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 5,000 ກີບ (ຄິດໄລ່: 3𝑥 = 15000 ➔ 𝑥 = 5000)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 2 (ຄິດໄລ່: 3𝑥 + 6 - 2𝑥 + 2 = 10 ➔ 𝑥 + 8 = 10 ➔ 𝑥 = 2)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການແກ້ສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ ເປັນຫົວໃຈ ແລະ ເຄື່ອງມືຫຼັກຂອງຄະນິດສາດທຸກຂະແໜງ. ຝຶກຝົນຕໍ່ໄປເພື່ອຄວາມຊຳນານເດີ້!"
  }
};
