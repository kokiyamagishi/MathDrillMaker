import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit19Data: UnitData = {
  unitNumber: 19,
  unitTitle: "ພາກທີ III - ບົດທີ 19: ການແຍກສ່ວນຄູນໃນສຳນວນ",
  unitGoal: "ເຂົ້າໃຈຄວາມໝາຍ ແລະ ສາມາດແຍກສ່ວນຄູນ (Factorization) ໂດຍການດຶງຕົວຮ່ວມອອກມາໄດ້ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 76-80",
  subSections: [
    {
      title: "1. ການແຍກສ່ວນຄູນດ້ວຍຕົວຮ່ວມຕົວເລກ (Factorization by Numerical Common Factors)",
      keyPoint: {
        title: "ຫຼັກການແຍກສ່ວນຄູນໂດຍການດຶງຕົວເລກຮ່ວມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແຍກສ່ວນຄູນ ແມ່ນການປ່ຽນຮູບຮ່າງຜົນບວກ ຫຼື ຜົນລົບຂອງສຳນວນ ໃຫ້ເປັນຮູບຮ່າງຜົນຄູນ. ເມື່ອມີຕົວເລກຮ່ວມ, ເຮົາຈະດຶງມັນອອກມາຢູ່ນອກວົງເລັບ:"}
            </p>
            
            {/* Numerical Factor block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ແຍກສ່ວນຄູນຂອງ "} <span className="math">{"5𝑥 + 15"}</span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span className="math">{"• ສັງເກດ: 15 ແມ່ນ 5 × 3, ດັ່ງນັ້ນ 5𝑥 + 15 = 5 × 𝑥 + 5 × 3"}</span>
                <span className="math">{"• ດຶງຕົວຮ່ວມ 5 ອອກມາ: 5(𝑥 + 3)"}</span>
                <span className="math" style={{ color: "#0D47A1" }}>{"➔ ຜົນແຍກສ່ວນຄູນແມ່ນ: 5(𝑥 + 3)"}</span>
              </div>
            </div>

            {/* Numerical Extraction SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການດຶງຕົວຮ່ວມ: 5𝑥 + 5 · 3"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Common 5 circles */}
                  <circle cx="40" cy="18" r="10" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1" />
                  <text x="40" y="21" fill="#E65100" fontSize="10" fontWeight="bold" textAnchor="middle">{"5"}</text>
                  
                  <text x="65" y="22" fill="#37474F" fontSize="10" textAnchor="middle">{"𝑥"}</text>
                  <text x="85" y="22" fill="#37474F" fontSize="12" textAnchor="middle">{"+"}</text>
                  
                  <circle cx="110" cy="18" r="10" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1" />
                  <text x="110" y="21" fill="#E65100" fontSize="10" fontWeight="bold" textAnchor="middle">{"5"}</text>
                  
                  <text x="135" y="22" fill="#37474F" fontSize="10" textAnchor="middle">{"· 3"}</text>

                  {/* Extraction Arrow */}
                  <path d="M 70 30 Q 80 40 90 30" stroke="#FF9800" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
                  <text x="80" y="32" fill="#E65100" fontSize="8" textAnchor="middle">{"ดຶງ 5 Out"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອດຶງຕົວຮ່ວມອອກມາແລ້ວ ສາມາດກວດຄືນໂດຍຄູນແຈກຢາຍເຂົ້າໄປໃນວົງເລັບຄືເກົ່າເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແຍກສ່ວນຄູນຂອງສຳນວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"5𝑥 + 15 = 5(𝑥 + ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"8a - 12 = 4(?a - 3)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"3𝑦 + 9 = 3(𝑦 + ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"10m - 25 = 5(2m - ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"6a + 18b = 6(a + ?b)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແຍກສ່ວນຄູນດ້ວຍຕົວຮ່ວມຕົວລັບ (Factorization by Variable Common Factors)",
      keyPoint: {
        title: "ຫຼັກການແຍກສ່ວນຄູນທີ່ມີຕົວລັບເປັນຕົວຮ່ວມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນກໍລະນີທີ່ມີຕົວອັກສອນ (ຕົວລັບ) ປະກົດຢູ່ໃນທຸກໆພົດ, ເຮົາຈະດຶງຕົວລັບທີ່ມີກຳລັງຕໍ່າສຸດອອກມາເປັນຕົວຮ່ວມ:"}
            </p>
            
            {/* Variable Common Factor Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math">{"ແຍກສ່ວນຄູນຂອງ 3x² - 6𝑥"}</span>
                <span className="math">{"• ທັງສອງພົດມີ 3𝑥 ເປັນຕົວຮ່ວມ: 3𝑥 × 𝑥 - 3𝑥 × 2"}</span>
                <span className="math">{"➔ ດຶງ 3𝑥 ອອກມາ: 3𝑥(𝑥 - 2)"}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອດຶງ 𝑥² ຈາກ 𝑥³ ຈະຍັງເຫຼືອ 𝑥 ຢູ່ໃນວົງເລັບສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແຍກສ່ວນຄູນຂອງສຳນວນທີ່ມີຕົວລັບຮ່ວມລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"3x² - 6𝑥 = 3𝑥(𝑥 - ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"a² + 2a = a(a + ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"𝑥³ - 5x² = 𝑥²(𝑥 - ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"a²b + ab² = ab(a + ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math">{"4x²𝑦 - 8xy = 4xy(𝑥 - ?)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະສຳນວນທີ່ມີຕົວຮ່ວມເປັນກຸ່ມວົງເລັບຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແຍກສ່ວນຄູນທີ່ມີວົງເລັບເປັນຕົວຮ່ວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແຍກສ່ວນຄູນຂອງສຳນວນ d = 𝑥(a + b) + 𝑦(a + b) ໃຫ້ເປັນຮູບຮ່າງ (a + b)(𝑥 + ?)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕົວລັບ ? ແມ່ນ"}</span>
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
              {"ໂຈດປະຍຸກເລຂາຄະນິດແຍກສ່ວນຄູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມີແຜ່ນໂລຫະຮູບຈະຕຸລັດຍາວ 𝑥 cm, ຖືກຕັດຮູວົງມົນທີ່ມີລັດສະໝີ r. ສຳນວນເນື້ອທີ່ຍັງເຫຼືອແມ່ນ S = 𝑥² - πr². ຖ້າ r = 𝑥/2, ຈົ່ງແຍກສ່ວນຄູນສຳນວນ S ໃຫ້ເປັນຮູບ 𝑥²(1 - π/?)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈຳນວນຖ້ວນ ? ຂອງພູດແມ່ນ"}</span>
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
            {"ການແຍກສ່ວນຄູນຮາກຂັ້ນສອງຂອງສຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແຍກສ່ວນຄູນຂອງສຳນວນ 5x³ - 20𝑥 = 5𝑥(𝑥² - ?)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນຖ້ວນ ? ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄັດຈ້ອນສຳນວນໂດຍການຫານເລກກຳລັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນເລກສ່ວນພຶດຊະຄະນິດລຸ່ມນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
              <Fraction num="𝑥² + 3𝑥" den="𝑥" /> {" = 𝑥 + ?"}
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນຖ້ວນ ? ແມ່ນ"}</span>
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
          <span key="1-1">{"(1) 3 (ຄິດໄລ່: 5(𝑥 + 3) = 5𝑥 + 15)"}</span>,
          <span key="1-2">{"(2) 2 (ຄິດໄລ່: 4(2a - 3) = 8a - 12)"}</span>,
          <span key="1-3">{"(3) 3 (ຄິດໄລ່: 3(𝑦 + 3) = 3𝑦 + 9)"}</span>,
          <span key="1-4">{"(4) 5 (ຄິດໄລ່: 5(2m - 5) = 10m - 25)"}</span>,
          <span key="1-5">{"(5) 3 (ຄິດໄລ່: 6(a + 3b) = 6a + 18b)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 2 (ຄິດໄລ່: 3𝑥(𝑥 - 2) = 3x² - 6𝑥)"}</span>,
          <span key="2-2">{"(2) 2 (ຄິດໄລ່: a(a + 2) = a² + 2a)"}</span>,
          <span key="2-3">{"(3) 5 (ຄິດໄລ່: 𝑥²(𝑥 - 5) = 𝑥³ - 5x²)"}</span>,
          <span key="2-4">{"(4) b (ຄິດໄລ່: ab(a + b) = a²b + ab²)"}</span>,
          <span key="2-5">{"(5) 2 (ຄິດໄລ່: 4xy(𝑥 - 2) = 4x²𝑦 - 8xy)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 𝑦"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 4 (ຄິດໄລ່: S = 𝑥² - π(𝑥/2)² = 𝑥² - π𝑥²/4 = 𝑥²(1 - π/4))"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 4 (ຄິດໄລ່: 5𝑥(𝑥² - 4) = 5x³ - 20𝑥)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 3 (ຄິດໄລ່: 𝑥(𝑥 + 3)/𝑥 = 𝑥 + 3)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ການແຍກສ່ວນຄູນເປັນຫຼັກການຄິດໄລ່ທີ່ດີ ແລະ ມີປະໂຫຍດຫຼາຍໃນການຄັດຈ້ອນເລກສ່ວນພຶດຊະຄະນິດ ພ້ອມທັງແກ້ສົມຜົນຂັ້ນສອງໃນຊັ້ນຮຽນຕໍ່ໄປ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
