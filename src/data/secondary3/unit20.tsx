import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit20Data: UnitData = {
  unitNumber: 20,
  unitTitle: "ພາກທີ V - ບົດທີ 20: ໄລຍະຫ່າງລະຫວ່າງເມັດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດໄລຍະຫ່າງລະຫວ່າງສອງເມັດ d = √((x₂ - x₁)² + (y₂ - y₁)²) ໃນໜ້າພຽງປະສານງານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 97-102",
  subSections: [
    {
      title: "1. ໄລຍະຫ່າງຈາກເມັດເຄົ້າ ຫາ ເມັດໜຶ່ງ",
      keyPoint: {
        title: "ສູດໄລຍະຫ່າງຈາກເມັດ O(0, 0)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໄລຍະຫ່າງ d ຈາກເມັດເຄົ້າ O(0, 0) ຫາເມັດໃດໜຶ່ງ P(𝑥, 𝑦) ແມ່ນຊອກໄດ້ຈາກສູດປີຕາກໍ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold", fontSize: "1.375rem" }}>{"• ສູດພື້ນຖານ: "} <span className="math">{"d = √(𝑥² + 𝑦²)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ໃຫ້ P(3, 4) ➔ d = √(3² + 4²) = √(9 + 16) = √25 = 5."}</div>
            </div>

            {/* Distance from Origin SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ໄລຍະຫ່າງ d ຈາກເມັດ O ຫາ P(3, 4)"}</span>
                <svg viewBox="0 0 400 220" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Grid background */}
                  <path d="M 0,40 L 400,40 M 0,80 L 400,80 M 0,120 L 400,120 M 0,160 L 400,160" stroke="#E0E0E0" strokeWidth="1" />
                  <path d="M 80,0 L 80,220 M 160,0 L 160,220 M 240,0 L 240,220 M 320,0 L 320,220" stroke="#E0E0E0" strokeWidth="1" />

                  {/* Axes */}
                  <line x1="20" y1="180" x2="380" y2="180" stroke="#37474F" strokeWidth="3" />
                  <line x1="80" y1="20" x2="80" y2="200" stroke="#37474F" strokeWidth="3" />
                  <text x="370" y="198" fill="#37474F" fontSize="16">𝑥</text>
                  <text x="90" y="30" fill="#37474F" fontSize="16">𝑦</text>

                  {/* Origin O */}
                  <circle cx="80" cy="180" r="7" fill="#37474F" />
                  <text x="56" y="202" fill="#37474F" fontSize="16" fontWeight="bold">{"O(0,0)"}</text>

                  {/* Point P(3, 4) -> scale: 1 unit = 20px. (3, 4) -> (40 + 60, 90 - 80) = (100, 10) */}
                  <circle cx="200" cy="60" r="7" fill="#D32F2F" />
                  <text x="210" y="54" fill="#D32F2F" fontSize="16" fontWeight="bold">{"P(3, 4)"}</text>

                  {/* Distance line */}
                  <line x1="80" y1="180" x2="200" y2="60" stroke="#E65100" strokeWidth="4" />
                  <text x="130" y="110" fill="#E65100" fontSize="16" fontWeight="bold">{"d = 5"}</text>

                  {/* Perpendicular helper lines */}
                  <line x1="200" y1="60" x2="200" y2="180" stroke="#2E7D32" strokeWidth="3" strokeDasharray="3,3" />
                  <line x1="80" y1="60" x2="200" y2="60" stroke="#2E7D32" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="210" y="130" fill="#2E7D32" fontSize="16">{"𝑦=4"}</text>
                  <text x="130" y="170" fill="#2E7D32" fontSize="16">{"𝑥=3"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໄລຍະຫ່າງລະຫວ່າງເມັດແມ່ນເປັນຄ່າບວກ (+) ສະເໝີ ເພາະມັນແມ່ນລວງຍາວເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາໄລຍະຫ່າງ d ຈາກເມັດເຄົ້າ O(0, 0) ຫາເມັດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ໄລຍະຫ່າງຫາເມັດ "} <span className="math">{"P(3, 4)"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ໄລຍະຫ່າງຫາເມັດ "} <span className="math">{"Q(-6, 8)"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ໄລຍະຫ່າງຫາເມັດ "} <span className="math">{"R(5, -12)"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄ່າປະສານງານທີ່ຫາຍໄປ ຈາກໄລຍະຫ່າງທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຖ້າໄລຍະຫ່າງຫາເມັດ "} <span className="math">{"P(𝑥, 3)"}</span> {" ແມ່ນ 5 ແລະ 𝑥 > 0. ຄ່າຂອງ 𝑥 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າໄລຍະຫ່າງຫາເມັດ "} <span className="math">{"Q(8, 𝑦)"}</span> {" ແມ່ນ 10 ແລະ 𝑦 < 0. ຄ່າຂອງ 𝑦 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໄລຍະຫ່າງລະຫວ່າງສອງເມັດທົ່ວໄປ",
      keyPoint: {
        title: "ສູດໄລຍະຫ່າງທົ່ວໄປໃນໜ້າພຽງປະສານງານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໄລຍະຫ່າງ d ລະຫວ່າງສອງເມັດ A(𝑥₁, 𝑦₁) ແລະ B(𝑥₂, 𝑦₂) ໃດໜຶ່ງແມ່ນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold", fontSize: "1.375rem" }}>{"• ສູດທົ່ວໄປ: "} <span className="math">{"d = √((𝑥₂ - 𝑥₁)² + (𝑦₂ - 𝑦₁)²)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ໃຫ້ A(1, 2) ແລະ B(4, 6) ➔ d = √((4-1)² + (6-2)²) = √(3² + 4²) = √25 = 5."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າສອງເມັດມີຕົວປະສານງານ x ຫຼື y ເທົ່າກັນ ເຮົາສາມາດລົບກັນໂດຍກົງໄດ້ເລີຍເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາໄລຍະຫ່າງ d ລະຫວ່າງສອງເມັດທີ່ກຳນົດໃຫ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ໄລຍະຫ່າງລະຫວ່າງ "} <span className="math">{"A(1, 2)"}</span> {" ແລະ "} <span className="math">{"B(4, 6)"}</span> {" ແມ່ນຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ໄລຍະຫ່າງລະຫວ່າງ "} <span className="math">{"C(-2, 3)"}</span> {" ແລະ "} <span className="math">{"D(4, 11)"}</span> {" ແມ່ນຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ໄລຍະຫ່າງລະຫວ່າງ "} <span className="math">{"E(1, 1)"}</span> {" ແລະ "} <span className="math">{"F(6, 13)"}</span> {" ແມ່ນຈັກ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງເມັດທີ່ມີຄ່າປະສານງານພິເສດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ໄລຍະຫ່າງລະຫວ່າງ "} <span className="math">{"A(2, 5)"}</span> {" ແລະ "} <span className="math">{"B(2, 9)"}</span> {" ແມ່ນຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ໄລຍະຫ່າງລະຫວ່າງ "} <span className="math">{"C(3, -1)"}</span> {" ແລະ "} <span className="math">{"D(-2, -1)"}</span> {" ແມ່ນຈັກ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຕັ້ງສົມຜົນໄລຍະຫ່າງ ແລ້ວຂຶ້ນກຳລັງສອງເພື່ອແກ້ຫາຄ່າຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຕົວປະສານງານ 𝑥 ຈາກສົມຜົນໄລຍະຫ່າງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ໄລຍະຫ່າງລະຫວ່າງສອງເມັດ "} <span className="math">{"P(1, 2)"}</span> {" ແລະ "} <span className="math">{"Q(a, 6)"}</span> {" ແມ່ນ 5. ຖ້າຫາກ a > 0, ຈົ່ງຊອກຫາຄ່າຂອງ a."}
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
              {"ລວງຮອບຂອງຮູບສາມແຈໃນລະບົບປະສານງານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາລວງຮອບ ຂອງຮູບສາມແຈທີ່ມີສາມຈອມແມ່ນ "} <span className="math">{"A(0, 0)"}</span> {", "} <span className="math">{"B(3, 0)"}</span> {" ແລະ "} <span className="math">{"C(0, 4)"}</span> {" ຢູ່ໃນລະບົບປະສານງານ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ການຊອກຫາຂ້າງກົງຊາກຂອງສາມແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈ ABC ມີສາມຈອມແມ່ນ A(1, 1), B(4, 1), C(1, 5). ຖ້າສາມແຈນີ້ແມ່ນສາມແຈສາກທີ່ມີມຸມ A ເປັນມຸມສາກ, ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງກົງຊາກ BC."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: BC ຍາວ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດເສັ້ນຜ່ານກາງຂອງວົງມົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ວົງມົນວົງໜຶ່ງມີເມັດໃຈກາງຢູ່ O(0, 0) ແລະ ຜ່ານເມັດ P(8, -6). ຈົ່ງຊອກຫາຄວາມຍາວຂອງເສັ້ນຜ່ານກາງ ຂອງວົງມົນນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເສັ້ນຜ່ານກາງຍາວ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
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
          <span key="1">{"(1) 5 (ເພາະວ່າ d = √(3² + 4²) = √25 = 5)"}</span>,
          <span key="2">{"(2) 10 (ເພາະວ່າ d = √((-6)² + 8²) = √100 = 10)"}</span>,
          <span key="3">{"(3) 13 (ເພາະວ່າ d = √(5² + (-12)²) = √169 = 13)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 4 (ເພາະວ່າ √(𝑥² + 3²) = 5 ➔ 𝑥² + 9 = 25 ➔ 𝑥² = 16 ➔ 𝑥 = 4)"}</span>,
          <span key="5">{"(2) -6 (ເພາະວ່າ √(8² + 𝑦²) = 10 ➔ 64 + 𝑦² = 100 ➔ 𝑦² = 36 ➔ 𝑦 = -6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"4 (ເພາະວ່າ √((a-1)² + (6-2)²) = 5 ➔ (a-1)² + 16 = 25 ➔ (a-1)² = 9 ➔ a-1 = 3 ➔ a = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"12 cm (ຂ້າງ AB = 3, AC = 4, BC = √(3²+4²) = 5 ➔ ລວງຮອບ = 3 + 4 + 5 = 12 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"5 cm (ຂ້າງ AB = 3, AC = 4 ➔ ຂ້າງກົງຊາກ BC = √(3²+4²) = 5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"20 cm (ລັດສະໝີ R = √(8² + (-6)²) = √100 = 10 cm ➔ ເສັ້ນຜ່ານກາງ = 2R = 20 cm)"}</span>
        ]
      }
    ],
    advice: "ສູດໄລຍະຫ່າງລະຫວ່າງເມັດເປັນເຄື່ອງມືພື້ນຖານສຳຄັນໃນເລຂາຄະນິດວິເຄາະ ມັນຖືກນຳໃຊ້ໃນການນຳທາງ GPS, ລະບົບແຜນທີ່ ແລະ ການພັດທະນາເກມຄອມພິວເຕີ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"5 (ເພາະວ່າ d = √((4-1)² + (6-2)²) = √(3²+4²) = √25 = 5)"}</span>,
        <span key="11">{"10 (ເພາະວ່າ d = √((4-(-2))² + (11-3)²) = √(6²+8²) = √100 = 10)"}</span>,
        <span key="12">{"13 (ເພາະວ່າ d = √((6-1)² + (13-1)²) = √(5²+12²) = √169 = 13)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"4 (ຕົວປະສານງານ 𝑦 ເທົ່າກັນ ➔ |9 - 5| = 4)"}</span>,
        <span key="14">{"5 (ຕົວປະສານງານ 𝑦 ເທົ່າກັນ ➔ |3 - (-2)| = 5)"}</span>
      ]
    }
  ]
};
