import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit5Data: UnitData = {
  unitNumber: 5,
  unitTitle: "ພາກທີ I - ບົດທີ 5: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນ",
  unitGoal: "ຮຽນຮູ້ວິທີການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນໂດຍການບວກ ຫຼື ລົບຕົວເສດ ແລະ ຮັກສາພູດໄວ້ຄືເກົ່າ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 15-17",
  subSections: [
    {
      title: "1. ການບວກເລກສ່ວນທີ່ມີພູດຄືກັນ (Adding Fractions with Same Denominators)",
      keyPoint: {
        title: "ຫຼັກການບວກເລກສ່ວນທີ່ມີພູດຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການບວກເລກສ່ວນທີ່ມີພູດຄືກັນ ແມ່ນໃຫ້ເອົາຕົວເສດ (ທາງເທິງ) ມາບວກກັນ ແລະ ຮັກສາຕົວສ່ວນ (ທາງລຸ່ມ) ໄວ້ຄືເກົ່າ:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", margin: "4px 0" }}>
              <span className="math" style={{ fontSize: "1.5rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="a" den="c" /> {" + "} <Fraction num="b" den="c" /> {" = "} <Fraction num={<span>{"a + b"}</span>} den="c" />
              </span>
            </div>

            {/* Visual Addition bar graph */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#F57F17" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"3/7 + 2/7 = 5/7"}</span>
                <svg viewBox="0 0 140 20" style={{ width: "100%", maxWidth: "140px", height: "auto" }}>
                  <rect x="0" y="2" width="140" height="16" fill="none" stroke="#37474F" strokeWidth="2" />
                  <line x1="20" y1="2" x2="20" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="2" x2="40" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="60" y1="2" x2="60" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="2" x2="80" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="100" y1="2" x2="100" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="120" y1="2" x2="120" y2="18" stroke="#37474F" strokeWidth="1" />
                  {/* 3 blue blocks */}
                  <rect x="0" y="2" width="60" height="16" fill="#2196F3" />
                  {/* 2 green blocks */}
                  <rect x="60" y="2" width="40" height="16" fill="#4CAF50" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫ້າມເອົາພູດ (ທາງລຸ່ມ) ມາບວກກັນເດັດຂາດເດີ້! ໃຫ້ຮັກສາມັນໄວ້ຄືເກົ່າ.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບວກເລກສ່ວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="7" /> {" + "} <Fraction num="2" den="7" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="9" /> {" + "} <Fraction num="3" den="9" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="5" /> {" + "} <Fraction num="3" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="7" den="12" /> {" + "} <Fraction num="4" den="12" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="9" den="20" /> {" + "} <Fraction num="8" den="20" /> {" ="}
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
      title: "2. ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນ (Subtracting Fractions with Same Denominators)",
      keyPoint: {
        title: "ຫຼັກການລົບເລກສ່ວນທີ່ມີພູດຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນ ແມ່ນໃຫ້ເອົາຕົວເສດ (ທາງເທິງ) ມາລົບກັນ ແລະ ຮັກສາຕົວສ່ວນ (ທາງລຸ່ມ) ໄວ້ຄືເກົ່າ:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", margin: "4px 0" }}>
              <span className="math" style={{ fontSize: "1.5rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="a" den="c" /> {" - "} <Fraction num="b" den="c" /> {" = "} <Fraction num={<span>{"a - b"}</span>} den="c" />
              </span>
            </div>

            {/* Visual Subtraction representation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"8/9 - 5/9 = 3/9 (ຫຼື 1/3)"}</span>
                <svg viewBox="0 0 180 20" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  <rect x="0" y="2" width="180" height="16" fill="none" stroke="#37474F" strokeWidth="2" />
                  {/* 9 parts grid */}
                  <line x1="20" y1="2" x2="20" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="2" x2="40" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="60" y1="2" x2="60" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="2" x2="80" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="100" y1="2" x2="100" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="120" y1="2" x2="120" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="140" y1="2" x2="140" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="160" y1="2" x2="160" y2="18" stroke="#37474F" strokeWidth="1" />
                  {/* Shading remaining 3, x-out the removed 5 */}
                  <rect x="0" y="2" width="60" height="16" fill="#F44336" />
                  <rect x="60" y="2" width="100" height="16" fill="#ECEFF1" />
                  <text x="110" y="14" fill="#B0BEC5" fontSize="10" fontWeight="bold" textAnchor="middle">{"ສ່ວນທີ່ຖືກລົບ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫຼັງຈາກລົບແລ້ວ, ຖ້າຫາກສາມາດຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳໄດ້, ໃຫ້ຄັດຈ້ອນສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງລົບເລກສ່ວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="8" den="9" /> {" - "} <Fraction num="5" den="9" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="7" den="8" /> {" - "} <Fraction num="3" den="8" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="4" den="5" /> {" - "} <Fraction num="1" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="11" den="12" /> {" - "} <Fraction num="5" den="12" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="17" den="20" /> {" - "} <Fraction num="7" den="20" /> {" ="}
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະຫາສິ່ງທີ່ຕ້ອງການຊອກຫາ ແລະ ປະຕິບັດການບວກລົບເລກສ່ວນໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແບ່ງປັນນ້ຳຫວານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ທ້າວ ສິດ ມີນ້ຳຫວານຢູ່ "} <Fraction num="5" den="8" /> {" ຂອງຂວດ, ລາວດື່ມໄປ "} <Fraction num="2" den="8" /> {" ຂອງຂວດ. ຫຼັງຈາກນັ້ນ ນາງ ນາ ໄດ້ເອົານ້ຳຫວານມາເທໃສ່ຕື່ມອີກ "} <Fraction num="4" den="8" /> {" ຂອງຂວດ. ຖາມວ່າມີນ້ຳຫວານຢູ່ໃນຂວດທັງໝົດເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 80 100" style={{ width: "100%", maxWidth: "80px", height: "auto" }}>
                <rect x="25" y="5" width="30" height="15" fill="none" stroke="#333" strokeWidth="2" />
                <rect x="10" y="20" width="60" height="75" fill="none" stroke="#333" strokeWidth="2" rx="4" />
                {/* Visual Sweet water representation (7/8) */}
                <rect x="10" y="30" width="60" height="65" fill="#FF8A80" rx="2" />
                <text x="40" y="65" fill="#C62828" fontSize="14" fontWeight="bold" textAnchor="middle">{"7/8"}</text>
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ປະລິມານນ້ຳຫວານທັງໝົດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຂອງຂວດ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ສາມເລກສ່ວນຕໍ່ເນື່ອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="13" den="15" /> {" - "} <Fraction num="7" den="15" /> {" + "} <Fraction num="2" den="15" />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນຄິດໄລ່ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
            {"ໂຈດບັນຫາການປູກຝັກໃນສວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ນາງ ນາ ແບ່ງເນື້ອທີ່ດິນໃນສວນອອກເປັນ 12 ສ່ວນເທົ່າກັນ. ລາວປູກຜັກຫອມ "} <Fraction num="5" den="12" /> {" ຂອງສວນ, ປູກຜັກກາດ "} <Fraction num="4" den="12" /> {" ຂອງສວນ. ເນື້ອທີ່ດິນສ່ວນທີ່ເຫຼືອແມ່ນປູກໝາກເຂືອ. ຖາມວ່າເນື້ອທີ່ປູກໝາກເຂືອຄິດເປັນອັດຕາສ່ວນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ປູກໝາກເຂືອແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            <span>{"ຂອງເນື້ອທີ່ທັງໝົດ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຫາຄ່າ x ຈາກສົມຜົນເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກສົມຜົນເລກສ່ວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
              {"x + "} <Fraction num="3" den="10" /> {" = "} <Fraction num="9" den="10" />
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x ="}</span>
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
          <span key="1-1">{"(1) "} <Fraction num="5" den="7" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="8" den="9" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="4" den="5" /></span>,
          <span key="1-4">{"(4) "} <Fraction num="11" den="12" /></span>,
          <span key="1-5">{"(5) "} <Fraction num="17" den="20" /></span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) "} <Fraction num="1" den="3" /> {" (ຫຼື 3/9)"}</span>,
          <span key="2-2">{"(2) "} <Fraction num="1" den="2" /> {" (ຫຼື 4/8)"}</span>,
          <span key="2-3">{"(3) "} <Fraction num="3" den="5" /></span>,
          <span key="2-4">{"(4) "} <Fraction num="1" den="2" /> {" (ຫຼື 6/12)"}</span>,
          <span key="2-5">{"(5) "} <Fraction num="1" den="2" /> {" (ຫຼື 10/20)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) "} <Fraction num="7" den="8" /> {" ຂອງຂວດ (ຄິດໄລ່: 5/8 - 2/8 + 4/8 = 7/8)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) "} <Fraction num="8" den="15" /> {" (ຄິດໄລ່: 13/15 - 7/15 + 2/15 = 8/15)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) "} <Fraction num="1" den="4" /> {" (ຫຼື 3/12) (ຄິດໄລ່ເນື້ອທີ່ປູກໝາກເຂືອ: 1 - 5/12 - 4/12 = 3/12 = 1/4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) "} <Fraction num="3" den="5" /> {" (ຫຼື 6/10) (ຄິດໄລ່: x = 9/10 - 3/10 = 6/10 = 3/5)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດຫຼາຍ! ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຄືກັນແມ່ນງ່າຍຫຼາຍ ພຽງແຕ່ຄິດໄລ່ຕົວເລກທາງເທິງ ແລະ ຮັກສາຕົວເລກທາງລຸ່ມໄວ້ຄືເກົ່າ. ໝັ່ນຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
