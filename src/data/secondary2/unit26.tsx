import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit26Data: UnitData = {
  unitNumber: 26,
  unitTitle: "ພາກທີ IV - ບົດທີ 26: ສົມຜົນທີ່ມີຄ່າສຳບູນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມຂອງຄ່າສຳບູນເປັນໄລຍະຫ່າງເທິງເສັ້ນຈຳນວນ ແລະ ການແກ້ສົມຜົນ |ax + b| = c ຢ່າງເປັນລະບົບ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 111-115",
  subSections: [
    {
      title: "1. ຄ່າສຳບູນພື້ນຖານ ແລະ ໄລຍະຫ່າງ (Basic Absolute Value)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຫຼັກການພື້ນຖານຂອງຄ່າສຳບູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າສຳບູນຂອງຈຳນວນໃດໜຶ່ງ "} <span className="math">{"|𝑥|"}</span> {" ແມ່ນໄລຍະຫ່າງຈາກຈຸດ 0 ຫາຈຸດນັ້ນເທິງເສັ້ນຈຳນວນ. ໄລຍະຫ່າງຕ້ອງເປັນຄ່າບວກສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ຖ້າ "} <span className="math">{"|𝑥| = c"}</span> {" (ໂດຍທີ່ "} <span className="math">{"c ≥ 0"}</span>{") ➔ ຈະໄດ້ "} <span className="math">{"𝑥 = c"}</span> {" ຫຼື "} <span className="math">{"𝑥 = -c"}</span><br />
              {"• ຕົວຢ່າງ: "} <span className="math">{"|𝑥| = 5 ➔ 𝑥 = 5"}</span> {" ຫຼື "} <span className="math">{"𝑥 = -5"}</span>
            </div>

            {/* Absolute Value Number Line SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງ |𝑥| = 5 (ໄລຍະຫ່າງຈາກ 0 ແມ່ນ 5)"}</span>
                <svg viewBox="0 0 300 60" style={{ width: "100%", maxWidth: "260px", height: "auto" }}>
                  {/* Number line */}
                  <line x1="10" y1="30" x2="290" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Ticks and Labels */}
                  <line x1="150" y1="25" x2="150" y2="35" stroke="#37474F" strokeWidth="1.5" />
                  <text x="150" y="47" fill="#37474F" fontSize="9" textAnchor="middle">{"0"}</text>
                  
                  <line x1="50" y1="25" x2="50" y2="35" stroke="#37474F" strokeWidth="1.5" />
                  <text x="50" y="47" fill="#37474F" fontSize="9" textAnchor="middle">{"-5"}</text>
                  
                  <line x1="250" y1="25" x2="250" y2="35" stroke="#37474F" strokeWidth="1.5" />
                  <text x="250" y="47" fill="#37474F" fontSize="9" textAnchor="middle">{"5"}</text>

                  {/* Distance indicators (curves) */}
                  <path d="M 50,25 Q 100,10 150,25" fill="none" stroke="#2196F3" strokeWidth="1.5" strokeDasharray="3,3" />
                  <text x="100" y="14" fill="#2196F3" fontSize="8" textAnchor="middle">{"ໄລຍະຫ່າງ = 5"}</text>

                  <path d="M 150,25 Q 200,10 250,25" fill="none" stroke="#2196F3" strokeWidth="1.5" strokeDasharray="3,3" />
                  <text x="200" y="14" fill="#2196F3" fontSize="8" textAnchor="middle">{"ໄລຍະຫ່າງ = 5"}</text>
                  
                  {/* Points */}
                  <circle cx="50" cy="30" r="4" fill="#D32F2F" />
                  <circle cx="150" cy="30" r="3" fill="#37474F" />
                  <circle cx="250" cy="30" r="4" fill="#D32F2F" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ສະເໝີວ່າຄ່າສຳບູນເປັນໄລຍະຫ່າງ ດັ່ງນັ້ນມັນຈະບໍ່ສາມາດເທົ່າກັບຈຳນວນລົບໄດ້ (ຕົວຢ່າງ: |𝑥| = -3 ແມ່ນບໍ່ມີໃຈຜົນ)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຄ່າສຳບູນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span className="math">{"|𝑥| = 7 ➔ ໃຈຜົນແມ່ນ 𝑥 = 7 ຫຼື 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span className="math">{"|𝑥| = 12 ➔ ໃຈຜົນແມ່ນ 𝑥 = 12 ຫຼື 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span className="math">{"|𝑥 - 3| = 5 ➔ ໃຈຜົນແມ່ນ 𝑥 = 8 ຫຼື 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span className="math">{"|𝑥 + 2| = 6 ➔ ໃຈຜົນແມ່ນ 𝑥 = 4 ຫຼື 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span className="math">{"|2𝑥| = 10 ➔ ໃຈຜົນແມ່ນ 𝑥 = 5 ຫຼື 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ສົມຜົນຄ່າສຳບູນ |ax + b| = c (Solving |ax + b| = c)",
      keyPoint: {
        title: "ຂັ້ນຕອນການແກ້ລະອຽດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ສົມຜົນ "} <span className="math">{"|ax + b| = c"}</span> {" ແມ່ນແຍກອອກເປັນສອງກໍລະນີ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ແກ້ສົມຜົນ "} <span className="math">{"|2𝑥 - 4| = 6"}</span><br />
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #FBC02D", marginTop: "6px", display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• ກໍລະນີ 1: 2𝑥 - 4 = 6 ➔ 2𝑥 = 10 ➔ 𝑥 = 5"}</span>
                <span>{"• ກໍລະນີ 2: 2𝑥 - 4 = -6 ➔ 2𝑥 = -2 ➔ 𝑥 = -1"}</span>
                <span style={{ fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"➔ ດັ່ງນັ້ນ, ໃຈຜົນແມ່ນ 𝑥 = 5 ຫຼື 𝑥 = -1"}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງແຍກອອກເປັນສອງສົມຜົນນ້ອຍຢ່າງລະມັດລະວັງ ແລ້ວຄ່ອຍໆຍ້າຍພົດແກ້ເທື່ອລະສົມຜົນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນຄ່າສຳບູນລຸ່ມນີ້ ແລ້ວຊອກຫາໃຈຜົນທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span className="math">{"ແກ້ສົມຜົນ |𝑥 - 4| = 3 ➔ ໃຈຜົນຄ່າຫຼາຍສຸດແມ່ນ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span className="math">{"ແກ້ສົມຜົນ |𝑥 + 5| = 2 ➔ ໃຈຜົນຄ່ານ້ອຍສຸດແມ່ນ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span className="math">{"ແກ້ສົມຜົນ |2𝑥 - 4| = 6 ➔ ໃຈຜົນຄ່າຫຼາຍສຸດແມ່ນ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span className="math">{"ແກ້ສົມຜົນ |3𝑥 - 2| = 7 ➔ ໃຈຜົນຄ່າຫຼາຍສຸດແມ່ນ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span className="math">{"ແກ້ສົມຜົນ |4𝑥 - 2| = 10 ➔ ໃຈຜົນຄ່ານ້ອຍສຸດແມ່ນ 𝑥 ="}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຍ້າຍຕົວເລກທີ່ຢູ່ນອກຄ່າສຳບູນໄປຟາກຂວາກ່ອນ ແລ້ວຈຶ່ງແກ້ສົມຜົນຄ່າສຳບູນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມຜົນຄ່າສຳບູນທີ່ມີຕົວເລກຢູ່ນອກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນ "} <span className="math">{"2|𝑥 - 3| + 4 = 10"}</span> {" ແລ້ວຊອກຫາໃຈຜົນຄ່າຫຼາຍສຸດ."}
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
              {"ສົມຜົນຄ່າສຳບູນທີ່ມີເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນ "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                {"|"} <Fraction num="𝑥" den="2" /> {" - 1| = 3"}
              </span>
              {" ແລ້ວຊອກຫາໃຈຜົນຄ່າຫຼາຍສຸດ."}
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
            {"ແກ້ສົມຜົນຄ່າສຳບູນເລກທົດສະນິຍົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ "} <span className="math">{"|𝑥 - 1.5| = 2.5"}</span> {" ແລ້ວຊອກຫາໃຈຜົນຄ່າຫຼາຍສຸດ."}
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາໄລຍະຫ່າງເທິງເສັ້ນຈຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈຸດ A ຢູ່ເທິງເສັ້ນຈຳນວນຫ່າງຈາກຈຸດ 2 ເປັນໄລຍະທາງ 5 ຫົວໜ່ວຍ. ຈົ່ງຊອກຫາພິກັດຂອງຈຸດ A ທີ່ມີຄ່າຫຼາຍສຸດ. (ສົມຜົນ: |𝑥 - 2| = 5)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ພິກັດຂອງ A ແມ່ນ"}</span>
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
          <span key="1">{"(1) -7 (ເພາະວ່າ 7 ຫຼື -7 ມີຄ່າສຳບູນເທົ່າກັບ 7)"}</span>,
          <span key="2">{"(2) -12 (ເພາະວ່າ 12 ຫຼື -12 ມີຄ່າສຳບູນເທົ່າກັບ 12)"}</span>,
          <span key="3">{"(3) -2 (ເພາະວ່າ 𝑥 - 3 = -5 ➔ 𝑥 = -2)"}</span>,
          <span key="4">{"(4) -8 (ເພາະວ່າ 𝑥 + 2 = -6 ➔ 𝑥 = -8)"}</span>,
          <span key="5">{"(5) -5 (ເພາະວ່າ 2𝑥 = -10 ➔ 𝑥 = -5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 7 (ເພາະວ່າ 𝑥 - 4 = 3 ➔ 𝑥 = 7; 𝑥 - 4 = -3 ➔ 𝑥 = 1)"}</span>,
          <span key="7">{"(2) -7 (ເພາະວ່າ 𝑥 + 5 = -2 ➔ 𝑥 = -7; 𝑥 + 5 = 2 ➔ 𝑥 = -3)"}</span>,
          <span key="8">{"(3) 5 (ເພາະວ່າ 2𝑥 - 4 = 6 ➔ 2𝑥 = 10 ➔ 𝑥 = 5)"}</span>,
          <span key="9">{"(4) 3 (ເພາະວ່າ 3𝑥 - 2 = 7 ➔ 3𝑥 = 9 ➔ 𝑥 = 3)"}</span>,
          <span key="10">{"(5) -2 (ເພາະວ່າ 4𝑥 - 2 = -10 ➔ 4𝑥 = -8 ➔ 𝑥 = -2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"6 (ເພາະວ່າ 2|𝑥 - 3| = 6 ➔ |𝑥 - 3| = 3 ➔ 𝑥 - 3 = 3 ➔ 𝑥 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"8 (ເພາະວ່າ 𝑥/2 - 1 = 3 ➔ 𝑥/2 = 4 ➔ 𝑥 = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"4 (ເພາະວ່າ 𝑥 - 1.5 = 2.5 ➔ 𝑥 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"7 (ເພາະວ່າ 𝑥 - 2 = 5 ➔ 𝑥 = 7)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນແກ້ສົມຜົນທີ່ມີຄ່າສຳບູນຢ່າງມີລະບຽບ ຈະຊ່ວຍໃຫ້ເຮົາພັດທະນາຄວາມຄິດສ້າງສັນ ແລະ ວິເຄາະບັນຫາໄດ້ຢ່າງຖືກຕ້ອງເດີ້!"
  }
};
