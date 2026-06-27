import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit6Data: UnitData = {
  unitNumber: 6,
  unitTitle: "ພាកທີ I - ບົດທີ 6: ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ",
  unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນໂດຍການຂຶ້ນພູດຮ່ວມກ່ອນແລ້ວຈຶ່ງຄິດໄລ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 18-22",
  subSections: [
    {
      title: "1. ການບວກເລກສ່ວນທີ່ມີພູດຕ່າງກັນ (Adding Fractions with Different Denominators)",
      keyPoint: {
        title: "ຫຼັກການບວກເລກສ່ວນທີ່ມີພູດຕ່າງກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການບວກເລກສ່ວນທີ່ມີພູດຕ່າງກັນ ແມ່ນຕ້ອງຂຶ້ນພູດຮ່ວມ (LCM) ຂອງພວກມັນກ່ອນເພື່ອໃຫ້ພູດເທົ່າກັນ, ແລ້ວຈຶ່ງເອົາຕົວເສດມາບວກກັນ:"}
            </p>
            
            {/* Visual Formula and Step block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄິດໄລ່ "} <Fraction num="1" den="3" /> {" + "} <Fraction num="1" den="4" />
              <div style={{ paddingLeft: "12px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span>{"• ພູດຮ່ວມຂອງ 3 ແລະ 4 ແມ່ນ LCM(3, 4) = 12"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຂຶ້ນພູດຮ່ວມ: "}
                  <Fraction num="1 × 4" den="3 × 4" /> {" + "} <Fraction num="1 × 3" den="4 × 3" /> {" = "} <Fraction num="4" den="12" /> {" + "} <Fraction num="3" den="12" />
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"➔ ຜົນບວກແມ່ນ: "} <Fraction num="7" den="12" />
                </span>
              </div>
            </div>

            {/* Visual Addition circle layout */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#F57F17" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການປ່ຽນພູດໃຫ້ເທົ່າກັນ (ສ່ວນ 12)"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Visualizing 4/12 + 3/12 */}
                  <rect x="0" y="10" width="120" height="20" fill="none" stroke="#37474F" strokeWidth="2" />
                  <line x1="40" y1="10" x2="40" y2="30" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="10" x2="80" y2="30" stroke="#37474F" strokeWidth="1" />
                  <rect x="0" y="10" width="40" height="20" fill="#2196F3" opacity="0.6" />
                  <text x="20" y="24" fill="#0D47A1" fontSize="10" fontWeight="bold" textAnchor="middle">{"1/3 (4/12)"}</text>
                  
                  <text x="135" y="26" fill="#37474F" fontSize="16" fontWeight="bold" textAnchor="middle">{"+"}</text>
                  
                  <rect x="150" y="10" width="40" height="20" fill="#4CAF50" opacity="0.6" />
                  <text x="170" y="24" fill="#1B5E20" fontSize="10" fontWeight="bold" textAnchor="middle">{"1/4 (3/12)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງຊອກຫາ LCM ຂອງພູດກ່ອນສະເໝີ ເພື່ອໃຊ້ເປັນພູດຮ່ວມເດີ້!",
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
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="3" /> {" + "} <Fraction num="1" den="4" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="5" /> {" + "} <Fraction num="1" den="3" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="2" /> {" + "} <Fraction num="1" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="8" /> {" + "} <Fraction num="1" den="6" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="12" /> {" + "} <Fraction num="1" den="4" /> {" ="}
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
      title: "2. ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ (Subtracting Fractions with Different Denominators)",
      keyPoint: {
        title: "ຫຼັກການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ ແມ່ນຕ້ອງຂຶ້ນພູດຮ່ວມ (LCM) ຂອງພວກມັນກ່ອນເພື່ອໃຫ້ພູດເທົ່າກັນ, ແລ້ວຈຶ່ງເອົາຕົວເສດມາລົບກັນ:"}
            </p>
            
            {/* Visual example block */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄິດໄລ່ "} <Fraction num="5" den="6" /> {" - "} <Fraction num="2" den="3" />
              <div style={{ paddingLeft: "12px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span>{"• ພູດຮ່ວມຂອງ 6 ແລະ 3 ແມ່ນ LCM(6, 3) = 6"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຂຶ້ນພູດຮ່ວມ: "}
                  <Fraction num="5" den="6" /> {" - "} <Fraction num="2 × 2" den="3 × 2" /> {" = "} <Fraction num="5" den="6" /> {" - "} <Fraction num="4" den="6" />
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"➔ ຜົນລົບແມ່ນ: "} <Fraction num="1" den="6" />
                </span>
              </div>
            </div>

            {/* Visual Grid representation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດສະແດງການຫັກອອກ"}</span>
                <svg viewBox="0 0 150 20" style={{ width: "100%", maxWidth: "150px", height: "auto" }}>
                  <rect x="0" y="2" width="120" height="16" fill="none" stroke="#37474F" strokeWidth="2" />
                  {/* 6 parts grid */}
                  <line x1="20" y1="2" x2="20" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="2" x2="40" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="60" y1="2" x2="60" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="2" x2="80" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="100" y1="2" x2="100" y2="18" stroke="#37474F" strokeWidth="1" />
                  {/* 5/6 originally blue */}
                  <rect x="0" y="2" width="100" height="16" fill="#2196F3" opacity="0.8" />
                  {/* 4/6 originally green, crossed */}
                  <rect x="20" y="2" width="80" height="16" fill="#F44336" opacity="0.3" />
                  <line x1="20" y1="2" x2="100" y2="18" stroke="#D32F2F" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການລົບທີ່ມີພູດຕ່າງກັນ ຕ້ອງປ່ຽນພູດໃຫ້ເທົ່າກັນສະເໝີກ່ອນເລີ່ມລົບເດີ້!",
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="6" /> {" - "} <Fraction num="2" den="3" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="4" /> {" - "} <Fraction num="1" den="2" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="4" den="5" /> {" - "} <Fraction num="1" den="3" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="9" den="10" /> {" - "} <Fraction num="1" den="2" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="7" den="8" /> {" - "} <Fraction num="1" den="4" /> {" ="}
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະໂຈດບັນຫາ ແລະ ປະຕິບັດການຂຶ້ນພູດຮ່ວມກ່ອນບວກລົບເລກສ່ວນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາກ່ຽວກັບການແລ່ນອອກກໍາລັງກາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ທ້າວ ແດງ ແລ່ນໄດ້ "} <Fraction num="3" den="4" /> {" ກິໂລແມັດ. ນາງ ດຳ ແລ່ນໄດ້ "} <Fraction num="2" den="3" /> {" ກິໂລແມັດ. ຖາມວ່າທັງສອງຄົນແລ່ນລວມກັນໄດ້ທັງໝົດຈັກກິໂລແມັດ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 300 80" style={{ width: "100%", maxWidth: "250px", height: "auto" }}>
                {/* 2 lines showing distances */}
                <rect x="10" y="10" width="180" height="15" fill="#BBDEFB" stroke="#0D47A1" strokeWidth="2" rx="3" />
                <text x="100" y="22" fill="#0D47A1" fontSize="10" fontWeight="bold">{"ທ້າວ ແດງ (3/4 km)"}</text>
                
                <rect x="10" y="35" width="160" height="15" fill="#C8E6C9" stroke="#1B5E20" strokeWidth="2" rx="3" />
                <text x="90" y="47" fill="#1B5E20" fontSize="10" fontWeight="bold">{"ນາງ ດຳ (2/3 km)"}</text>
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໄລຍະທາງລວມທັງໝົດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
              <span>{"km"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ເລກສ່ວນປະສົມສາມຕົວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="1" den="2" /> {" + "} <Fraction num="1" den="3" /> {" - "} <Fraction num="1" den="4" />
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
            {"ໂຈດບັນຫາປະລິມານການຊົມໃຊ້ນ້ຳຫວານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ມີນ້ຳຫວານຢູ່ໃນຖັງ "} <Fraction num="5" den="6" /> {" ລິດຕ໌. ນາງ ນາ ໄດ້ໃຊ້ໄປ "} <Fraction num="1" den="2" /> {" ລິດຕ໌. ຖາມວ່າຍັງເຫຼືອນ້ຳຫວານຢູ່ໃນຖັງຈັກລິດຕ໌? (ໃຫ້ຄັດຈ້ອນຜົນລົບເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຍັງເຫຼືອນ້ຳຫວານ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            <span>{"L"}</span>
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
              {"x - "} <Fraction num="1" den="3" /> {" = "} <Fraction num="2" den="5" />
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
          <span key="1-1">{"(1) "} <Fraction num="7" den="12" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="11" den="15" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="7" den="10" /></span>,
          <span key="1-4">{"(4) "} <Fraction num="13" den="24" /></span>,
          <span key="1-5">{"(5) "} <Fraction num="2" den="3" /> {" (ຫຼື 8/12)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) "} <Fraction num="1" den="6" /></span>,
          <span key="2-2">{"(2) "} <Fraction num="1" den="4" /> {" (ຫຼື 2/8)"}</span>,
          <span key="2-3">{"(3) "} <Fraction num="7" den="15" /></span>,
          <span key="2-4">{"(4) "} <Fraction num="2" den="5" /> {" (ຫຼື 4/10)"}</span>,
          <span key="2-5">{"(5) "} <Fraction num="5" den="8" /></span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) "} <Fraction num="1" den="5" /> <Fraction num="7" den="12" /> {" km (ຄິດໄລ່: 3/4 + 2/3 = 9/12 + 8/12 = 17/12 = 1 5/12 km)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) "} <Fraction num="7" den="12" /> {" (ຄິດໄລ່: 6/12 + 4/12 - 3/12 = 7/12)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) "} <Fraction num="1" den="3" /> {" L (ຄິດໄລ່: 5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3 L)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) "} <Fraction num="1" den="1" /> <Fraction num="1" den="15" /> {" (ຫຼື 11/15) (ຄິດໄລ່: x = 2/5 + 1/3 = 6/15 + 5/15 = 11/15)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ ພຽງແຕ່ຂຶ້ນພູດຮ່ວມໃຫ້ພູດເທົ່າກັນກ່ອນ ແລ້ວຈຶ່ງຄິດໄລ່ຕາມປົກກະຕິ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
