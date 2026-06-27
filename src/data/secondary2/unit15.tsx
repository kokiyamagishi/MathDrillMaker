import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ພາກທີ III - ບົດທີ 15: ເລກກຳລັງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ປະຕິບັດຫຼັກການພື້ນຖານຂອງເລກກຳລັງ ເຊັ່ນ ການຄູນເລກກຳລັງທີ່ມີພື້ນຄືກັນ ແລະ ເລກກຳລັງສູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 55-60",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ການຄູນເລກກຳລັງທີ່ມີພື້ນຄືກັນ (Definition and Product Rule of Exponents)",
      keyPoint: {
        title: "ຫຼັກການຄູນເລກກຳລັງທີ່ມີພື້ນຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເລກກຳລັງ "} <span className="math">{"aⁿ"}</span> {" ໝາຍເຖິງການເອົາພື້ນ "} <span className="math">{"a"}</span> {" ມາຄູນກັນ "} <span className="math">{"n"}</span> {" ເທື່ອ. ເມື່ອຄູນເລກກຳລັງທີ່ມີພື້ນຄືກັນ, ໃຫ້ຮັກສາພື້ນເດີມໄວ້ ແລ້ວເອົາຕົວຊີ້ບອກກຳລັງ (Exponents) ມາບວກກັນ:"}
            </p>
            
            {/* Formula Block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "8px 0" }}>
                <span className="math" style={{ fontSize: "1.5rem" }}>
                  {"aᵐ × aⁿ = aᵐ⁺ⁿ"}
                </span>
              </div>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"2³ × 2² = 2³⁺² = 2⁵ = 32"}
                </span>
              </div>
            </div>

            {/* Exponent visual SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດຂະຫຍາຍເລກກຳລັງ: 2³ × 2²"}</span>
                <svg viewBox="0 0 240 40" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Left group */}
                  <rect x="5" y="5" width="85" height="24" rx="3" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1" />
                  <text x="47" y="20" fill="#E65100" fontSize="10" fontWeight="bold" textAnchor="middle">{"(2 × 2 × 2)"}</text>
                  
                  {/* Multiply symbol */}
                  <text x="105" y="22" fill="#37474F" fontSize="16" fontWeight="bold" textAnchor="middle">{"×"}</text>
                  
                  {/* Right group */}
                  <rect x="120" y="5" width="60" height="24" rx="3" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="1" />
                  <text x="150" y="20" fill="#F57F17" fontSize="10" fontWeight="bold" textAnchor="middle">{"(2 × 2)"}</text>

                  {/* Fused result arrow */}
                  <path d="M 190 17 L 210 17" stroke="#37474F" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="225" y="21" fill="#E65100" fontSize="12" fontWeight="bold">{"2⁵"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫ້າມເອົາພື້ນມາຄູນກັນເດັດຂາດ! ເຊັ່ນ 2³ × 2² ບໍ່ເທົ່າກັບ 4⁵ ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນຜົນຄູນລຸ່ມນີ້ໃນຮູບຮ່າງເລກກຳລັງດຽວ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"3⁴ × 3² = 3^?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"5³ × 5⁴ = 5^?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"2⁵ × 2⁶ = 2^?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"x³ × x⁷ = x^?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"10² × 10⁵ × 10 = 10^?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເລກກຳລັງສູນ ແລະ ກຳລັງລົບ (Zero and Negative Exponents)",
      keyPoint: {
        title: "ຫຼັກການເລກກຳລັງສູນ ແລະ ກຳລັງລົບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄຸນລັກສະນະສຳຄັນຂອງຕົວຊີ້ບອກກຳລັງພິເສດ:"}
            </p>
            
            {/* Formulas Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ເລກກຳລັງສູນ: a⁰ = 1 (ເຊິ່ງ a ≠ 0)"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ເລກກຳລັງລົບ: a⁻ⁿ = "} <Fraction num="1" den="aⁿ" />
                </span>
                <span style={{ color: "#2E7D32" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"5⁰ = 1,  2⁻³ = "} <Fraction num="1" den="2³" /> {" = "} <Fraction num="1" den="8" />
                </span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຳນວນໃດໆກໍຕາມ (ທີ່ຕ່າງຈາກ 0) ເມື່ອຂຶ້ນກຳລັງ 0 ຈະເທົ່າກັບ 1 ສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"5⁰ + 2³ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"10⁰ + 7⁰ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"3⁻² ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"(1/4)⁻¹ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"4² × 4⁻² ="}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດພື້ນ ແລະ ຕົວຊີ້ກຳລັງທີ່ມີທັງເຄື່ອງໝາຍບວກ ແລະ ລົບໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ກຳລັງປະສົມສາມຕົວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຂຽນຜົນຄິດໄລ່ຕໍ່ໄປນີ້ໃນຮູບຮ່າງເລກກຳລັງດຽວ: "}
              <span className="math" style={{ marginLeft: "6px" }}>
                {"2⁻⁵ × 2⁸ × 2 = 2^?"}
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕົວຊີ້ກຳລັງ ? ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມຜົນເລກກຳລັງຊອກຫາ x: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກສົມຜົນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ marginLeft: "6px" }}>
                {"3ˣ = 81"}
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
            {"ການປຽບທຽບຄ່າເລກກຳລັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງປຽບທຽບຄ່າລະຫວ່າງ "} <span className="math">{"3³"}</span> {" ແລະ "} <span className="math">{"2⁵"}</span> {". (ຕອບ ຈຳນວນໃດຫຼາຍກວ່າ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນທີ່ຫຼາຍກວ່າແມ່ນ"}</span>
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
            {"ການຄິດໄລ່ກຳລັງສູນ ແລະ ກຳລັງລົບປະສົມກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ marginLeft: "6px" }}>
              {"6⁻² × 6² + 9⁰ ="}
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜົນຄິດໄລ່ແມ່ນ"}</span>
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
          <span key="1-1">{"(1) 6 (ຄິດໄລ່: 4 + 2 = 6)"}</span>,
          <span key="1-2">{"(2) 7 (ຄິດໄລ່: 3 + 4 = 7)"}</span>,
          <span key="1-3">{"(3) 11 (ຄິດໄລ່: 5 + 6 = 11)"}</span>,
          <span key="1-4">{"(4) 10 (ຄິດໄລ່: 3 + 7 = 10)"}</span>,
          <span key="1-5">{"(5) 8 (ຄິດໄລ່: 2 + 5 + 1 = 8)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 9 (ຄິດໄລ່: 1 + 8 = 9)"}</span>,
          <span key="2-2">{"(2) 2 (ຄິດໄລ່: 1 + 1 = 2)"}</span>,
          <span key="2-3">{"(3) "} <Fraction num="1" den="9" /></span>,
          <span key="2-4">{"(4) 4"}</span>,
          <span key="2-5">{"(5) 1 (ຄິດໄລ່: 4⁰ = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 4 (ຄິດໄລ່: -5 + 8 + 1 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 4 (ເພາະວ່າ 3⁴ = 81)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 2⁵ (ຄິດໄລ່: 3³ = 27 < 2⁵ = 32)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 2 (ຄິດໄລ່: 6⁰ + 9⁰ = 1 + 1 = 2)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດຫຼາຍ! ການຄິດໄລ່ເລກກຳລັງແມ່ນພື້ນຖານຫຼັກໃນພີຊະຄະນິດຊັ້ນສູງ. ເຂົ້າໃຈຫຼັກການຄູນ ແລະ ເລກກຳລັງສູນເປັນຢ່າງດີແລ້ວ ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
