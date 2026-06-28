import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span className="math" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ພາກທີ III - ບົດທີ 16: ເລກກຳລັງ (ຕໍ່)",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ກົດການຫານເລກກຳລັງ ແລະ ກຳລັງຊ້ອນ ພ້ອມທັງສາມາດຄິດໄລ່ຄ່າຂອງສຳນວນໄດ້ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 61-65",
  subSections: [
    {
      title: "1. ການຫານເລກກຳລັງທີ່ມີພື້ນຄືກັນ (Quotient Rule of Exponents)",
      keyPoint: {
        title: "ຫຼັກການຫານເລກກຳລັງທີ່ມີພື້ນຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຫານເລກກຳລັງທີ່ມີພື້ນຄືກັນ (ທີ່ຕ່າງຈາກ 0), ໃຫ້ຮັກສາພື້ນເດີມໄວ້ ແລ້ວເອົາຕົວຊີ້ບອກກຳລັງຂອງຕົວຕັ້ງຫານ ລົບໃຫ້ຕົວຊີ້ບອກກຳລັງຂອງຕົວຫານ:"}
            </p>
            
            {/* Quotient Formula block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "8px 0" }}>
                <span className="math" style={{ fontSize: "1.5rem" }}>
                  <Fraction num="aᵐ" den="aⁿ" /> {" = aᵐ⁻ⁿ (ເຊິ່ງ a ≠ 0)"}
                </span>
              </div>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  <Fraction num="3⁵" den="3³" /> {" = 3⁵⁻³ = 3² = 9"}
                </span>
              </div>
            </div>

            {/* Cancelation SVG representation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການຄັດຈ້ອນ (Cancelation Model): 3⁵ ÷ 3³"}</span>
                <svg viewBox="0 0 240 50" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Fraction */}
                  <text x="70" y="18" fill="#37474F" fontSize="12" textAnchor="middle">{"3 × 3 × 3 × 3 × 3"}</text>
                  <line x1="15" y1="24" x2="125" y2="24" stroke="#37474F" strokeWidth="1.5" />
                  <text x="70" y="38" fill="#757575" fontSize="12" textAnchor="middle">{"3 × 3 × 3"}</text>
                  
                  {/* Cancel lines */}
                  <line x1="20" y1="18" x2="35" y2="6" stroke="#F44336" strokeWidth="1.5" />
                  <line x1="20" y1="38" x2="35" y2="26" stroke="#F44336" strokeWidth="1.5" />
                  
                  <line x1="40" y1="18" x2="55" y2="6" stroke="#F44336" strokeWidth="1.5" />
                  <line x1="40" y1="38" x2="55" y2="26" stroke="#F44336" strokeWidth="1.5" />
                  
                  <line x1="60" y1="18" x2="75" y2="6" stroke="#F44336" strokeWidth="1.5" />
                  <line x1="60" y1="38" x2="75" y2="26" stroke="#F44336" strokeWidth="1.5" />

                  {/* Equal and Result */}
                  <text x="145" y="28" fill="#37474F" fontSize="14" fontWeight="bold">{"= 3 × 3 = 3²"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອຕົວຊີ້ບອກກຳລັງເທົ່າກັນ ຜົນຫານຈະເທົ່າກັບ 1 ສະເໝີ ເຊັ່ນ a³ ÷ a³ = a⁰ = 1!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນຜົນຫານລຸ່ມນີ້ໃນຮູບຮ່າງເລກກຳລັງດຽວ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}>
                    <Fraction num="3⁵" den="3³" /> {" = 3^? "}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}>
                    <Fraction num="5⁷" den="5³" /> {" = 5^? "}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}>
                    <Fraction num="2¹⁰" den="2⁴" /> {" = 2^? "}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}>
                    <Fraction num="𝑥⁹" den="𝑥²" /> {" = 𝑥^? "}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}>
                    <Fraction num="10⁶" den="10⁵" /> {" = 10^? "}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເລກກຳລັງຊ້ອນ ແລະ ກຳລັງຂອງຜົນຄູນ (Power of a Power & Power of a Product Rules)",
      keyPoint: {
        title: "ຫຼັກການກຳລັງຊ້ອນ ແລະ ກຳລັງຂອງຜົນຄູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອມີກຳລັງຊ້ອນກັນ, ໃຫ້ເອົາຕົວຊີ້ບອກກຳລັງມາຄູນກັນ. ແລະ ກຳລັງຂອງຜົນຄູນ ແມ່ນໃຫ້ແຈກກຳລັງໃຫ້ແຕ່ລະຕົວຄູນ:"}
            </p>
            
            {/* Formulas Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span className="math">{"• ກຳລັງຊ້ອນ: (aᵐ)ⁿ = aᵐ ˣ ⁿ"}</span>
                <span className="math">{"• ກຳລັງຂອງຜົນຄູນ: (ab)ⁿ = aⁿbⁿ"}</span>
                <span style={{ color: "#2E7D32" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"(2²)³ = 2² ˣ ³ = 2⁶ = 64,  (𝑥𝑦)² = 𝑥²𝑦²"}
                </span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງລະວັງຄວາມແຕກຕ່າງລະຫວ່າງ (2²)³ = 2⁶ ແລະ 2² × 2³ = 2⁵ ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນສຳນວນລຸ່ມນີ້ໃນຮູບຮ່າງເລກກຳລັງດຽວ ຫຼື ງ່າຍດາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math">{"(3²)⁴ = 3^? "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math">{"(5³)³ = 5^? "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math">{"(a⁵)² = a^? "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math">{"(2𝑥)³ = ? · 𝑥³ "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math">{"(3a)² × a⁴ = 9a^? "}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ປະສານກົດເກນການຄູນ, ການຫານ ແລະ ກຳລັງຊ້ອນເຂົ້າກັນຢ່າງເປັນລະບົບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄັດຈ້ອນສຳນວນກຳລັງລະດັບສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຂຽນສຳນວນຕໍ່ໄປນີ້ໃນຮູບຮ່າງເລກກຳລັງດຽວ: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="(3³)² × 3⁴" den="3⁵" /> {" = 3^?"}
              </span>
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຕົວຊີ້ກຳລັງ ? ແມ່ນ"}</span>
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
              {"ສົມຜົນເລກກຳລັງຊອກຫາ 𝑥: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ marginLeft: "6px" }}>
                {"(2ˣ)³ = 64"}
              </span>
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
            {"ການຄິດໄລ່ກຳລັງຂອງເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
              {"("} <Fraction num="2" den="3" /> {")² × 9 ="}
            </span>
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຜົນຄິດໄລ່ແມ່ນ"}</span>
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
            {"ຄຳຖາມທົດສອບຄວາມເຂົ້າໃຈຫຼັກການກຳລັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສຳນວນ "} <span className="math">{"(a³)² ÷ a⁴"}</span> {" ເທົ່າກັບເທົ່າໃດ? (ຂຽນໃນຮູບເລກກຳລັງດຽວ)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຜົນຄັດຈ້ອນແມ່ນ"}</span>
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
          <span key="1-1">{"(1) 2 (ຄິດໄລ່: 5 - 3 = 2)"}</span>,
          <span key="1-2">{"(2) 4 (ຄິດໄລ່: 7 - 3 = 4)"}</span>,
          <span key="1-3">{"(3) 6 (ຄິດໄລ່: 10 - 4 = 6)"}</span>,
          <span key="1-4">{"(4) 7 (ຄິດໄລ່: 9 - 2 = 7)"}</span>,
          <span key="1-5">{"(5) 1 (ຄິດໄລ່: 6 - 5 = 1)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 8 (ຄິດໄລ່: 2 × 4 = 8)"}</span>,
          <span key="2-2">{"(2) 9 (ຄິດໄລ່: 3 × 3 = 9)"}</span>,
          <span key="2-3">{"(3) 10 (ຄິດໄລ່: 5 × 2 = 10)"}</span>,
          <span key="2-4">{"(4) 8 (ເພາະວ່າ 2³ = 8)"}</span>,
          <span key="2-5">{"(5) 6 (ຄິດໄລ່: 3² × a² × a⁴ = 9a⁶)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 5 (ຄິດໄລ່: 3⁶ × 3⁴ ÷ 3⁵ = 3¹⁰ ÷ 3⁵ = 3⁵)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 2 (ຄິດໄລ່: 2³ˣ = 2⁶ ➔ 3𝑥 = 6 ➔ 𝑥 = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 4 (ຄິດໄລ່: 4/9 × 9 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) a² (ຄິດໄລ່: a⁶ ÷ a⁴ = a²)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ເຈົ້າເຂົ້າໃຈກົດການຫານ ແລະ ກຳລັງຊ້ອນເປັນຢ່າງດີແລ້ວ. ຄວາມເຂົ້າໃຈນີ້ຈະຊ່ວຍໃນການແກ້ສົມຜົນ ແລະ ສຳນວນພຶດຊະຄະນິດໃນອະນາຄົດ!"
  }
};
