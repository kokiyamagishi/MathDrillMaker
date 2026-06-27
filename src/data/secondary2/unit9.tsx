import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit9Data: UnitData = {
  unitNumber: 9,
  unitTitle: "ພາກທີ I - ບົດທີ 9: ຈຳນວນປົກກະຕິ",
  unitGoal: "ເຂົ້າໃຈຄວາມໝາຍຂອງຈຳນວນປົກກະຕິ ແລະ ສາມາດປ່ຽນລະຫວ່າງເລກສ່ວນ ແລະ ເﻟກທົດສະນິຍົມໄດ້ຢ່າງຄ່ອງແຄ້ວ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 31-34",
  subSections: [
    {
      title: "1. ການປ່ຽນເລກທົດສະນິຍົມເປັນເລກສ່ວນ (Converting Decimals to Fractions)",
      keyPoint: {
        title: "ຫຼັກການປ່ຽນເລກທົດສະນິຍົມເປັນເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈຳນວນປົກກະຕິ ແມ່ນຈຳນວນທີ່ສາມາດຂຽນໃນຮູບຮ່າງເລກສ່ວນ "} <Fraction num="a" den="b" /> {" ໄດ້ (ເຊິ່ງ a ແລະ b ແມ່ນຈຳນວນຖ້ວນ, b ≠ 0). ການປ່ຽນເລກທົດສະນິຍົມສິ້ນສຸດເປັນເລກສ່ວນ ແມ່ນໃຫ້ເອົາຕົວເລກຫຼັງຈຸດມາຫານໃຫ້ 10, 100, 1000... ຕາມຈຳນວນຫຼັກທົດສະນິຍົມ:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ທົດສະນິຍົມ 1 ຫຼັກ: 0.x = "} <Fraction num="x" den="10" />
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ທົດສະນິຍົມ 2 ຫຼັກ: 0.xy = "} <Fraction num="xy" den="100" />
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center", color: "#0D47A1" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"0.75 = "} <Fraction num="75" den="100" /> {" = "} <Fraction num="3" den="4" /> {" (ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </span>
              </div>
            </div>

            {/* Decimal Grid Visual representation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການແບ່ງ 0.75 (3 ສ່ວນ 4 ຂອງ 100%)"}</span>
                <svg viewBox="0 0 100 100" style={{ width: "100%", maxWidth: "100px", height: "auto" }}>
                  <rect x="0" y="0" width="100" height="100" fill="none" stroke="#37474F" strokeWidth="2" />
                  {/* Grid 10x10 representation */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#37474F" strokeWidth="1" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#37474F" strokeWidth="1" />
                  {/* Fills 75% */}
                  <rect x="0" y="0" width="50" height="50" fill="#2196F3" opacity="0.6" />
                  <rect x="50" y="0" width="50" height="50" fill="#2196F3" opacity="0.6" />
                  <rect x="0" y="50" width="50" height="50" fill="#2196F3" opacity="0.6" />
                  
                  <text x="50" y="55" fill="#0D47A1" fontSize="16" fontWeight="bold" textAnchor="middle">{"75%"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫຼັງຈາກປ່ຽນເປັນເລກສ່ວນແລ້ວ ຢ່າລືມຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳສຸດສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນເລກທົດສະນິຍົມລຸ່ມນີ້ໃນຮູບຮ່າງເລກສ່ວນຂັ້ນຕ່ຳ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"0.5 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"0.25 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"0.8 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"1.2 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"0.35 ="}
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
      title: "2. ການປ່ຽນເລກສ່ວນເປັນເລກທົດສະນິຍົມ (Converting Fractions to Decimals)",
      keyPoint: {
        title: "ຫຼັກການປ່ຽນເລກສ່ວນເປັນເລກທົດສະນіຍົມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການປ່ຽນເລກສ່ວນເປັນເລກທົດສະນິຍົມ ແມ່ນໃຫ້ເອົາຕົວເສດ (Numerator) ຫານໃຫ້ຕົວພູດ (Denominator) ຕາມວິທີຫານຫານເລກທຳມະດາ:"}
            </p>
            
            {/* Visual Formula box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  <Fraction num="3" den="5" /> {" ➔ ຄິດໄລ່ 3 ÷ 5 = 0.6"}
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  <Fraction num="7" den="4" /> {" ➔ ຄິດໄລ່ 7 ÷ 4 = 1.75"}
                </span>
              </div>
            </div>

            {/* Visual division concept */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການປ່ຽນແບ່ງ 1 ຫົວໜ່ວຍ"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  <rect x="10" y="10" width="180" height="20" fill="none" stroke="#37474F" strokeWidth="1.5" />
                  <line x1="100" y1="10" x2="100" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  <text x="55" y="24" fill="#37474F" fontSize="10" textAnchor="middle">{"0.5 (1/2)"}</text>
                  <text x="145" y="24" fill="#37474F" fontSize="10" textAnchor="middle">{"0.5 (1/2)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າການຫານບໍ່ສິ້ນສຸດ ເຊັ່ນ 1/3 = 0.333... ເຮົາຈະເອີ້ນວ່າ ເລກທົດສະນິຍົມຮອບວຽນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"จົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນິຍົມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="2" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="4" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="4" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="9" den="8" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="25" /> {" ="}
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດຮອບວຽນຂອງເລກທົດສະນິຍົມຮອບວຽນ ແລະ ວິເຄາະໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການປ່ຽນເລກທົດສະນິຍົມຮອບວຽນເປັນເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຂຽນເລກທົດສະນິຍົມຮອບວຽນ "} {"0.333..."} {" (ຫຼືຂຽນເປັນ 0.3̇) ໃຫ້ເປັນຮູບຮ່າງເລກສ່ວນຂັ້ນຕ່ຳ"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເລກສ່ວນແມ່ນ"}</span>
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
              {"ການຈັດລຽງລຳດັບຈຳນວນປົກກະຕິ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງລຽງລໍາດັບຈຳນວນຕໍ່ໄປນີ້ແຕ່ ໜ້ອຍຫາຫຼາຍ: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                {"0.6, "} <Fraction num="1" den="2" /> {", 0.55"}
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ລຽງລຳດັບແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "42px" }}></span>
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
            {"ໂຈດບັນຫາການປຽບທຽບລວດຫຼັກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ເສັ້ນລວດ A ຍາວ "} <Fraction num="7" den="4" /> {" ແມັດ ແລະ ເສັ້ນລວດ B ຍາວ "} {"1.8"} {" ແມັດ. ຖາມວ່າເສັ້ນລວດໃດຍາວກວ່າກັນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເສັ້ນລວດທີ່ຍາວກວ່າແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຄັດເລືອກຈຳນວນປົກກະຕິ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ໃນບັນດາຈຳນວນຕໍ່ໄປນີ້: "} <span className="math">{"-3, 0.25, √2, 4/5"}</span> {", ຈຳນວນໃດແດ່ທີ່ບໍ່ແມ່ນຈຳນວນປົກກະຕິ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນທີ່ບໍ່ແມ່ນຈຳນວນປົກກະຕິແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) "} <Fraction num="1" den="2" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="1" den="4" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="4" den="5" /></span>,
          <span key="1-4">{"(4) "} <Fraction num="6" den="5" /></span>,
          <span key="1-5">{"(5) "} <Fraction num="7" den="20" /></span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 0.5"}</span>,
          <span key="2-2">{"(2) 0.75"}</span>,
          <span key="2-3">{"(3) 0.8"}</span>,
          <span key="2-4">{"(4) 1.125"}</span>,
          <span key="2-5">{"(5) 0.12"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) "} <Fraction num="1" den="3" /></span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) "} <Fraction num="1" den="2" /> {", 0.55, 0.6 (ຄິດໄລ່: 1/2 = 0.5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) ເສັ້ນລວດ B (ຄິດໄລ່: A = 7/4 = 1.75 m < B = 1.8 m)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) √2 (ເພາະວ່າ √2 ເປັນຈຳນວນອະປົກກະຕິ, ບໍ່ສາມາດຂຽນເປັນເລກສ່ວນໄດ້)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ຈຳນວນປົກກະຕິແມ່ນສ່ວນປະກອບຫຼັກຂອງຄະນິດສາດ. ການປ່ຽນຮູບແບບໃຫ້ຄ່ອງແຄ້ວຈະຊ່ວຍໃນການແກ້ເລກຊັ້ນສູງຕໍ່ໄປ!"
  }
};
