import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit2Data: UnitData = {
  unitNumber: 2,
  unitTitle: "ພາກທີ I - ບົດທີ 2: ສະເໝີຜົນຄວນຈື່",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສະເໝີຜົນຄວນຈື່ພື້ນຖານ (a+b)², (a-b)² ແລະ a²-b² ເຂົ້າໃນການຄິດໄລ່, ການຂະຫຍາຍ ແລະ ການຫຍໍ້ສຳນວນພຶດຊະຄະນິດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 7-12",
  subSections: [
    {
      title: "1. ກຳລັງສອງຂອງຜົນບວກ ແລະ ຜົນລົບ (Square of a Sum and a Difference)",
      keyPoint: {
        title: "ສູດກຳລັງສອງຂອງຜົນບວກ ແລະ ຜົນລົບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສະເໝີຜົນຄວນຈື່ກຳລັງສອງ ຊ່ວຍໃຫ້ພວກເຮົາຂະຫຍາຍສຳນວນພຶດຊະຄະນິດໄດ້ໄວຂຶ້ນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ກຳລັງສອງຂອງຜົນບວກ: "} <span className="math">{"(a + b)² = a² + 2ab + b²"}</span></div>
              <div>{"• ກຳລັງສອງຂອງຜົນລົບ: "} <span className="math">{"(a - b)² = a² - 2ab + b²"}</span></div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: (x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9."}</div>
            </div>

            {/* Geometric Proof Area SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ການພິສູດທາງເລຂາຄະນິດຂອງ (a + b)² = a² + 2ab + b²"}</span>
                <svg viewBox="0 0 140 140" style={{ width: "100%", maxWidth: "120px", height: "auto" }}>
                  {/* Square a x a */}
                  <rect x="10" y="10" width="80" height="80" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1" />
                  <text x="50" y="55" fill="#FFFFFF" fontSize="10" textAnchor="middle">{"a²"}</text>
                  
                  {/* Rectangle a x b */}
                  <rect x="90" y="10" width="40" height="80" fill="#2196F3" stroke="#1565C0" strokeWidth="1" />
                  <text x="110" y="55" fill="#FFFFFF" fontSize="10" textAnchor="middle">{"ab"}</text>

                  {/* Rectangle b x a */}
                  <rect x="10" y="90" width="80" height="40" fill="#2196F3" stroke="#1565C0" strokeWidth="1" />
                  <text x="50" y="115" fill="#FFFFFF" fontSize="10" textAnchor="middle">{"ab"}</text>

                  {/* Square b x b */}
                  <rect x="90" y="90" width="40" height="40" fill="#FF9800" stroke="#E65100" strokeWidth="1" />
                  <text x="110" y="115" fill="#FFFFFF" fontSize="10" textAnchor="middle">{"b²"}</text>

                  {/* Dimension labels */}
                  <text x="50" y="6" fill="#37474F" fontSize="8" textAnchor="middle">{"a"}</text>
                  <text x="110" y="6" fill="#37474F" fontSize="8" textAnchor="middle">{"b"}</text>
                  <text x="4" y="50" fill="#37474F" fontSize="8" textAnchor="middle">{"a"}</text>
                  <text x="4" y="110" fill="#37474F" fontSize="8" textAnchor="middle">{"b"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມຄູນ 2 ໃສ່ພົດເຄິ່ງກາງ (2ab) ເດີ້! ຫຼາຍຄົນມັກຫຼົງລືມຂຽນພົດນີ້ສະເໝີ.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຂະຫຍາຍສຳນວນ ແລະ ຊອກຫາຄ່າຂອງຕົວລັບ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"(x + 4)² = x² + Ax + 16"}</span> {". ຄ່າຂອງ A ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"(y - 5)² = y² - By + 25"}</span> {". ຄ່າຂອງ B ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"(3a + 1)² = Ca² + 6a + 1"}</span> {". ຄ່າຂອງ C ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຄ່າຕົວເລກໂດຍນຳໃຊ້ສະເໝີຜົນຄວນຈື່: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"101²"}</span> {" ໂດຍໃຊ້ (100 + 1)² ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"99²"}</span> {" ໂດຍໃຊ້ (100 - 1)² ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຜົນຕ່າງກຳລັງສອງ (Difference of Squares)",
      keyPoint: {
        title: "ສູດຜົນຕ່າງກຳລັງສອງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຜົນຕ່າງກຳລັງສອງ ຊ່ວຍໃຫ້ພວກເຮົາແຍກສ່ວນຄູນ ຫຼື ຄູນສອງວົງເລັບໄດ້ໄວທີ່ສຸດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ຜົນຕ່າງກຳລັງສອງ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"a² - b² = (a - b)(a + b)"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: (x - 4)(x + 4) = x² - 4² = x² - 16."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງຄິດໄລ່ໄວ: 51 × 49 = (50 + 1)(50 - 1) = 50² - 1² = 2500 - 1 = 2499."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສູດນີ້ບໍ່ມີພົດເຄິ່ງກາງ (2ab) ຍ້ອນວ່າພົດເຄິ່ງກາງໄດ້ຖືກຫັກລ້າງກັນໝົດແລ້ວເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຂະຫຍາຍສຳນວນ ແລະ ແຍກສ່ວນຄູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"(x - 6)(x + 6) = x² - D"}</span> {". ຄ່າຂອງ D ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"(2y - 3)(2y + 3) = Ey² - 9"}</span> {". ຄ່າຂອງ E ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ແຍກສ່ວນຄູນ "} <span className="math">{"64 - z² = (F - z)(F + z)"}</span> {". ຄ່າຂອງ F ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຄ່າຕົວເລກຢ່າງໄວວາ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"31 × 29"}</span> {" ໂດຍໃຊ້ (30 + 1)(30 - 1) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"102 × 98"}</span> {" ໂດຍໃຊ້ (100 + 2)(100 - 2) ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ການປ່ຽນແປງຮູບຮ່າງຂອງສະເໝີຜົນຄວນຈື່ເພື່ອແກ້ໄຂໂຈດລະດັບສູງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຫຍໍ້ສຳນວນພຶດຊະຄະນິດ (Simplifying Algebraic Expression): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ ແລະ ຫຍໍ້ສຳນວນຕໍ່ໄປນີ້ໃຫ້ງ່າຍທີ່ສຸດ: "} 
              <span className="math">{"(x + 3)² - (x - 3)²"}</span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໄດ້ຜົນຮັບແມ່ນ"}</span>
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
              {"ການຊອກຫາຄ່າຂອງກຳລັງສອງ (Finding Sum of Squares Value): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃຫ້ "} <span className="math">{"a + b = 8"}</span> {" ແລະ "} <span className="math">{"ab = 15"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "} <span className="math">{"a² + b²"}</span> {" (ຄຳແນະນຳ: ໃຊ້ສູດ a² + b² = (a+b)² - 2ab)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a² + b² ="}</span>
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
            {"ໂຈດບັນຫາເລຂາຄະນິດທາງເດີນ (Geometric Path Area): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສວນດອກໄມ້ຮູບຈະຕຸລັດຂ້າງຍາວ x ແມັດ. ຖ້າຂະຫຍາຍຄວາມຍາວຂອງທຸກໆຂ້າງອອກໄປ 2 ແມັດ, ເນື້ອທີ່ຂອງສວນຈະເພີ່ມຂຶ້ນເທົ່າໃດ? (ຄິດໄລ່ຈາກ (x+2)² - x² ໂດຍຕອບເປັນສຳນວນ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ເພີ່ມຂຶ້ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ຕາແມັດ (m²)"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການຄິດໄລ່ເລກກຳລັງສອງໄວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈົ່ງຄິດໄລ່ຄ່າສຸດທ້າຍຂອງສຳນວນ "} <span className="math">{"999² - 1"}</span> {" ໂດຍນຳໃຊ້ຜົນຕ່າງກຳລັງສອງ (999 - 1)(999 + 1)."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ຄ່າແມ່ນ"}</span>
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
          <span key="1">{"(1) 8 (ເພາະວ່າ (x+4)² = x² + 8x + 16 ➔ A = 8)"}</span>,
          <span key="2">{"(2) 10 (ເພາະວ່າ (y-5)² = y² - 10y + 25 ➔ B = 10)"}</span>,
          <span key="3">{"(3) 9 (ເພາະວ່າ (3a+1)² = 9a² + 6a + 1 ➔ C = 9)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 10,201 (ເພາະວ່າ 100² + 2(100)(1) + 1² = 10,000 + 200 + 1 = 10,201)"}</span>,
          <span key="5">{"(2) 9,801 (ເພາະວ່າ 100² - 2(100)(1) + 1² = 10,000 - 200 + 1 = 9,801)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"12x (ເພາະວ່າ (x² + 6x + 9) - (x² - 6x + 9) = 12x)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"34 (ເພາະວ່າ a² + b² = (a+b)² - 2ab = 8² - 2(15) = 64 - 30 = 34)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"4x + 4 (ເພາະວ່າ (x+2)² - x² = x² + 4x + 4 - x² = 4x + 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"998,000 (ເພາະວ່າ 999² - 1² = (999 - 1)(999 + 1) = 998 × 1,000 = 998,000)"}</span>
        ]
      }
    ],
    advice: "ສະເໝີຜົນຄວນຈື່ ແມ່ນເຄື່ອງມືທີ່ຊ່ວຍຫຼຸດເວລາໃນການຄິດໄລ່ພຶດຊະຄະນິດໄດ້ດີຫຼາຍ ໝັ່ນຝຶກຝົນແລ້ວເຈົ້າຈະເກັ່ງຂຶ້ນສະເໝີເດີ້!"
  }
};
