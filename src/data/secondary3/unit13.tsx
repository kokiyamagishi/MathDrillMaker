import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ຮາກຂັ້ນສອງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມຂອງຮາກຂັ້ນສອງ, ຄຸນລັກສະນະພື້ນຖານ, ການຖອດຮາກ, ແລະ ການເຮັດໃຫ້ຕົວຫານຫຼຸດພົ້ນຈາກຮາກ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 19-24",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ການຖອດຮາກຂັ້ນສອງພື້ນຖານ",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ຄຸນລັກສະນະຂອງຮາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮາກຂັ້ນສອງຂອງຈຳນວນຈິງບວກ a ແມ່ນຈຳນວນຈິງ 𝑥 ທີ່ເຮັດໃຫ້ 𝑥² = a. ເຮົາຂຽນ 𝑥 = √a ຈະໄດ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຫຼັກການພື້ນຖານ: "} <span className="math">{"√(a²) = a"}</span> {" (ເມື່ອ a ≥ 0)"}</div>
              <div>{"• ການແຍກຮາກ: "} <span className="math">{"√(a × b) = √a × √b"}</span></div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: √12 = √(4 × 3) = √4 × √3 = 2√3."}</div>
            </div>

            {/* Squares and Roots SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຄວາມກ່ຽວຂ້ອງລະຫວ່າງເນື້ອທີ່ຮູບຈະຕຸລັດ ແລະ ຂ້າງ (√Area)"}</span>
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "320px", height: "auto" }}>
                  {/* Square of Area 9 */}
                  <rect x="60" y="40" width="100" height="100" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="4" />
                  <text x="110" y="96" fill="#2E7D32" fontSize="18" fontWeight="bold">{"ເນື້ອທີ່ = 9"}</text>
                  <text x="110" y="164" fill="#37474F" fontSize="18">{"ຂ້າງ = √9 = 3"}</text>

                  {/* Square of Area 25 */}
                  <rect x="240" y="40" width="100" height="100" fill="#FFE0B2" stroke="#E65100" strokeWidth="4" />
                  <text x="290" y="96" fill="#E65100" fontSize="18" fontWeight="bold">{"ເນື້ອທີ່ = 25"}</text>
                  <text x="290" y="164" fill="#37474F" fontSize="18">{"ຂ້າງ = √25 = 5"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວເລກທີ່ຢູ່ໃຕ້ຮາກຂັ້ນສອງ ຈະຕ້ອງເປັນຈຳນວນຈິງທີ່ບໍ່ເປັນຄ່າລົບ (≥ 0) ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຖອດຮາກຂັ້ນສອງຂອງຈຳນວນລຸ່ມນີ້ໃຫ້ເປັນຈຳນວນຖ້ວນ ຫຼື ທົດສະນິຍົມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"√49"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"√144"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"√0.09"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຄັດຈາມຮາກໃຫ້ຢູ່ໃນຮູບແບບ a√b (ໂດຍທີ່ b ແມ່ນຈຳນວນໜ້ອຍທີ່ສຸດ) ແລ້ວຊອກຫາຄ່າຂອງ a + b: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄັດຈາມ "} <span className="math">{"√18"}</span> {" ໃຫ້ເປັນ "} <span className="math">{"a√b"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄັດຈາມ "} <span className="math">{"√50"}</span> {" ໃຫ້ເປັນ "} <span className="math">{"a√b"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄູນ, ການຫານ ແລະ ການເຮັດໃຫ້ສ່ວນບໍ່ມີຮາກ",
      keyPoint: {
        title: "ການຄິດໄລ່ປະສົມ ແລະ ກຳຈັດຮາກຈາກຕົວຫານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການນຳໃຊ້ຄຸນລັກສະນະຄູນຫານຮາກ ແລະ ປ່ຽນຕົວຫານບໍ່ໃຫ້ຕິດຮາກ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>{"• ການຄູນຮາກ: "} <span className="math">{"√a × √b = √(a × b)"}</span></div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ການປ່ຽນສ່ວນ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="𝑥" den="√𝑦" /> {" = "} <Fraction num="𝑥√𝑦" den="𝑦" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: 6 / √3 = 6√3 / 3 = 2√3."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການບວກລົບຮາກ ຈະເຮັດໄດ້ກໍຕໍ່ເມື່ອຕົວເລກທີ່ຢູ່ໃນຮາກເປັນຕົວດຽວກັນເທົ່ານັ້ນ (ຄືກັບການບວກລົບຕົວລັບ x) ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຄ່າສຸດທ້າຍຂອງສຳນວນຮາກຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"√2 × √8"}</span> {" ຈະໄດ້ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math"><Fraction num="√75" den="√3" /></span> {" ຈະໄດ້ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ເຮັດໃຫ້ສຳນວນ "} <span className="math">{"√27 + √12"}</span> {" ງ່າຍດາຍໃນຮູບແບບ "} <span className="math">{"a√3"}</span> {". ຄ່າຂອງ a ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງກຳຈັດຮາກອອກຈາກຕົວຫານ ໃຫ້ຢູ່ໃນຮູບແບບ a√b ແລ້ວຊອກຫາຄ່າຂອງ a: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ປ່ຽນ "} <span className="math"><Fraction num="6" den="√3" /></span> {" ໃຫ້ເປັນ "} <span className="math">{"a√3"}</span> {". ຄ່າຂອງ a ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ປ່ຽນ "} <span className="math"><Fraction num="5" den="√5" /></span> {" ໃຫ້ເປັນ "} <span className="math">{"a√5"}</span> {". ຄ່າຂອງ a ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຖອດຮາກແຕ່ລະພາກສ່ວນອອກມາກ່ອນ ແລ້ວຈຶ່ງເຮັດການບວກລົບ ແລະ ແກ້ສົມຜົນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ ແລະ ເຮັດໃຫ້ງ່າຍດາຍ ສຳນວນຮາກປະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງເຮັດໃຫ້ສຳນວນຕໍ່ໄປນີ້ງ່າຍດາຍທີ່ສຸດ ຢູ່ໃນຮູບແບບ "} <span className="math">{"a√5"}</span> {": "}
              <span className="math" style={{ fontWeight: "bold" }}>{"√45 - 2√5 + √20"}</span>
              {". ຄ່າຂອງສຳປະສິດ a ແມ່ນເທົ່າໃດ?"}
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
              {"ການແກ້ສົມຜົນຕິດຮາກຂັ້ນສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຕິດຮາກຕໍ່ໄປນີ້: "}
              <span className="math" style={{ fontWeight: "bold" }}>{"√(2𝑥 - 3) = 5"}</span>
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
            {"ໂຈດເນື້ອທີ່ດິນຮູບຈະຕຸລັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ດິນຕອນໜຶ່ງເປັນຮູບຈະຕຸລັດ ມີເນື້ອທີ່ທັງໝົດແມ່ນ "} <span className="math">{"80 m²"}</span> {". ຄວາມຍາວຂ້າງຂອງດິນຕອນນີ້ຂຽນໃນຮູບແບບງ່າຍດາຍແມ່ນ "} <span className="math">{"a√b m"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ a + b."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: a + b ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຄັດຈາມເລກສ່ວນຕິດຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈົ່ງກຳຈັດຮາກຈາກຕົວຫານຂອງສຳນວນ "} <span className="math"><Fraction num="√2" den="√3" /></span> {" ໃຫ້ຢູ່ໃນຮູບແບບ "} <span className="math"><Fraction num="√a" den="b" /></span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: a + b ="}</span>
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
          <span key="1">{"(1) 7 (ເພາະວ່າ 7² = 49 ➔ √49 = 7)"}</span>,
          <span key="2">{"(2) 12 (ເພາະວ່າ 12² = 144 ➔ √144 = 12)"}</span>,
          <span key="3">{"(3) 0.3 (ເພາະວ່າ 0.3² = 0.09 ➔ √0.09 = 0.3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 5 (ເພາະວ່າ √18 = √(9×2) = 3√2 ➔ a = 3, b = 2 ➔ a + b = 5)"}</span>,
          <span key="5">{"(2) 7 (ເພາະວ່າ √50 = √(25×2) = 5√2 ➔ a = 5, b = 2 ➔ a + b = 7)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"3 (ເພາະວ່າ √45 = 3√5 ແລະ √20 = 2√5 ➔ 3√5 - 2√5 + 2√5 = 3√5 ➔ a = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"14 (ຂຶ້ນກຳລັງສອງທັງສອງດ້ານ ➔ 2𝑥 - 3 = 25 ➔ 2𝑥 = 28 ➔ 𝑥 = 14)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"9 (ເນື້ອທີ່ = 80 ➔ ຂ້າງ = √80 = √(16×5) = 4√5 ➔ a = 4, b = 5 ➔ a + b = 9)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"9 (ຄູນ √3 ໃສ່ທັງທາງເທິງ ແລະ ທາງລຸ່ມ ➔ √2×√3 / √3×√3 = √6 / 3 ➔ a = 6, b = 3 ➔ a + b = 9)"}</span>
        ]
      }
    ],
    advice: "ຮາກຂັ້ນສອງເປັນບົດຮຽນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນພຶດຊະຄະນິດ ມັນຖືກນຳໃຊ້ໃນການແກ້ສົມຜົນຂັ້ນສອງ, ຫຼັກເກີນປີຕາກໍ ແລະ ຟີຊິກສາດຢ່າງຫຼວງຫຼາຍ ໝັ່ນຝຶກຝົນເປັນປະຈຳເດີ້!"
  }
};
