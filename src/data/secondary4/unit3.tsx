import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit3Data: UnitData = {
  unitNumber: 3,
  unitTitle: "ພາກທີ I - ບົດທີ 3: ການຫານພະຫຸພົດ ແລະ ຫຼັກເກັນເສດເຫຼືອ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບວິທີຫານພະຫຸພົດດ້ວຍວິທີຫານແບບຕັ້ງບັ້ງ ແລະ ການນຳໃຊ້ຫຼັກເກັນເສດເຫຼືອ (Remainder Theorem) ເພື່ອຊອກຫາຕົວເສດໄດ້ຢ່າງວ່ອງໄວ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 3 ໜ້າ 16-20",
  subSections: [
    {
      title: "1. ວິທີຫານພະຫຸພົດແບບຕັ້ງບັ້ງ (Polynomial Long Division)",
      keyPoint: {
      title: "1. ວິທີຫານພະຫຸພົດແບບຕັ້ງບັ້ງ (Polynomial Long Division)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຫານພະຫຸພົດແບບຕັ້ງບັ້ງ ມີຫຼັກການຄ້າຍຄືກັບການຫານເລກທົ່ວໄປ ເຊິ່ງເຮົາຕ້ອງໄລ່ແຕ່ລະດັບຂັ້ນສູງສຸດລົງໄປ:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ຕົວຢ່າງການຕັ້ງບັ້ງຫານ: (x² + 5x + 6) ÷ (x + 2)"}</span>
            <svg viewBox="0 0 260 110" style={{ width: "100%", maxWidth: "260px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Division line grid */}
              <line x1="80" y1="35" x2="220" y2="35" stroke="#333" strokeWidth="1.5" />
              <line x1="80" y1="15" x2="80" y2="95" stroke="#333" strokeWidth="1.5" />

              {/* Divisor */}
              <text x="70" y="28" fill="#E65100" fontSize="11" textAnchor="end" fontWeight="bold">{"x + 2"}</text>

              {/* Dividend */}
              <text x="90" y="28" fill="#333" fontSize="11" fontWeight="bold">{"x² + 5x + 6"}</text>

              {/* Quotient (above the horizontal line) */}
              <text x="90" y="52" fill="#2E7D32" fontSize="11" fontWeight="bold">{"x + 3"}</text>
              <line x1="80" y1="58" x2="220" y2="58" stroke="#ccc" strokeWidth="1" strokeDasharray="2,2" />

              {/* Step 1 subtraction */}
              <text x="90" y="72" fill="#666" fontSize="10">{"- (x² + 2x)"}</text>
              <line x1="90" y1="78" x2="160" y2="78" stroke="#666" strokeWidth="1" />

              {/* Step 2 remainder */}
              <text x="120" y="92" fill="#333" fontSize="10">{"3x + 6"}</text>
              <text x="120" y="104" fill="#D84315" fontSize="10" fontWeight="bold">{"- (3x + 6) = 0"}</text>
            </svg>
          </div>
          <p style={{ fontSize: "1.375rem", margin: "10px 0 0 0" }}>
            {"ຜົນຫານແມ່ນ "} <strong style={{ color: "#2E7D32" }}>{"x + 3"}</strong> {" ແລະ ຕົວເສດແມ່ນ "} <strong style={{ color: "#D84315" }}>{"0"}</strong>{"."}
          </p>
        </div>
      ),
      hint: {
        text: "💡 ຄຳແນະນຳ: ໃຫ້ຈັດລຽງພະຫຸພົດແຕ່ກຳລັງສູງສຸດ ຫາ ຕ່ຳສຸດສະເໝີກ່ອນຕັ້ງບັ້ງຫານ ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຜົນຫານ ໂດຍການຕັ້ງບັ້ງຫານພະຫຸພົດຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄะແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຊອກຫາຜົນຫານຂອງ: (x² + 4x + 3) ÷ (x + 1) = (ຕອບເປັນພະຫຸພົດງ່າຍດາຍ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊອກຫາຜົນຫານຂອງ: (x² - 5x + 6) ÷ (x - 2) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ຫຼັກເກັນເສດເຫຼືອ (Remainder Theorem)",
      keyPoint: {
      title: "2. ຫຼັກເກັນເສດເຫຼືອ (Remainder Theorem)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອຫານພະຫຸພົດ P(x) ໃຫ້ (x - c), ຕົວເສດ (Remainder) ຈະເທົ່າກັບ P(c) ໂດຍບໍ່ຈຳເປັນຕ້ອງຕັ້ງບັ້ງຫານ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ຫຼັກການ: "}</strong>
              <span>{"ຕົວເສດ R = P(c) ເມື່ອຕົວຫານແມ່ນ (x - c)"}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຕົວຢ່າງ: ຕົວເສດຂອງການຫານ P(x) = x² - 3x + 5 ໃຫ້ (x - 2) ຈະເທົ່າກັບ P(2):"}
              </span>
              <br />
              <span style={{ paddingLeft: "40px", color: "#E65100", fontWeight: "bold" }}>
                {"P(2) = 2² - 3(2) + 5 = 4 - 6 + 5 = 3. ຕົວເສດແມ່ນ 3!"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "⚠️ ຂໍ້ຄວນລະວັງ: ຖ້າຕົວຫານແມ່ນ (x + 2), ເຮົາຕ້ອງແທນຄ່າ c = -2 ເດີ້! ຕ້ອງປີ້ນເຄື່ອງໝາຍຂອງ c ສະເໝີ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຕົວເສດໂດຍນຳໃຊ້ຫຼັກເກັນເສດເຫຼືອ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຊອກຫາຕົວເສດຂອງການຫານ P(x) = x² + 2x - 5 ໃຫ້ (x - 2) ໂດຍແທນ P(2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊອກຫາຕົວເສດຂອງການຫານ P(x) = x³ - x² + 4 ໃຫ້ (x - 1) ໂດຍແທນ P(1):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຖ້າມີຕົວເສດຈາກການຫານແບບຕັ້ງບັ້ງ, ໃຫ້ຕອບສະເພາະຜົນຫານ (ຕົວເສດຈະຖືກແຍກຕ່າງຫາກ). ບົດທ້າທາຍ 2: ຖ້າພະຫຸພົດ P(x) ຫານຂາດໃຫ້ (x - c), ຕົວເສດ P(c) ຈະຕ້ອງເທົ່າກັບ 0 ພໍດີ! ນຳໃຊ້ຈຸດນີ້ເພື່ອຊອກຫາຄ່າ k ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ການຫານພະຫຸພົດທີ່ມີຕົວເສດ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ຊອກຫາຜົນຫານ Q(x) ແລະ ຕົວເສດ R ຂອງ: (x² + 3x + 5) ÷ (x + 1) (ຕອບສະເພາະຜົນຫານ Q(x) ກ່ອນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຜົນຫານ Q(x) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຕົວເສດ R ຂອງການຫານນີ້ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕົວເສດ R ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຫາຕົວຄົງທີ່ເພື່ອໃຫ້ພະຫຸພົດຫານຂາດ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ຊອກຫາຄ່າ k ເພື່ອໃຫ້ P(x) = x² - kx + 6 ຫານຂາດໃຫ້ (x - 2) (ຫານຂາດໝາຍເຖິງຕົວເສດ P(2) = 0):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: k ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຊອກຫາຄ່າ k ເພື່ອໃຫ້ P(x) = x² + 5x + k ຫານຂາດໃຫ້ (x + 3) (⚠️ ຕົວເສດແມ່ນ P(-3) = 0):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: k ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫານພະຫຸພົດຂັ້ນສາມແບບຄົບຖ້ວນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ຊອກຫາຜົນຫານຂອງ: (x³ + 2x² - x - 2) ÷ (x - 1) = (ຄຳແນະນຳ: ຫານແບບຕັ້ງບັ້ງຂັ້ນສາມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຜົນຫານໃນຂໍ້ (1), ຖ້າແຍກສ່ວນຄູນຕໍ່ໄປອີກ ຈະໄດ້ສ່ວນຄູນທັງໝົດຂອງພະຫຸພົດແມ່ນ (x - 1)(x + 1)(x + c), ຄ່າ c ແມ່ນຫຍັງ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: c ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາປະຍຸກກ່ຽວກັບເນື້ອທີ່ ແລະ ບໍລິມາດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ກ່ອງຂອງຂວັນໜຶ່ງມີບໍລິມາດ V = x³ + 3x² + 2x (cm³). ຖ້າມີລວງສູງ h = x (cm), ສຳນວນເນື້ອທີ່ພື້ນຖານ S ຂອງກ່ອງຈະແມ່ນຫຍັງ? (S = V/h, ຕອບໃນຮູບພະຫຸພົດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: S ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າລວງສູງ x = 5 cm, ເນື້ອທີ່ພື້ນຖານ S ຂອງກ່ອງຈະມີຄ່າເທົ່າໃດ? (cm²):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: S ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u3-ans-1-1">{"(1) x + 3 (ເພາະວ່າ x² + 4x + 3 = (x + 1)(x + 3))"}</span>,
          <span key="u3-ans-1-2">{"(2) x - 3 (ເພາະວ່າ x² - 5x + 6 = (x - 2)(x - 3))"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u3-ans-2-1">{"(1) 3 (ເພາະວ່າ P(2) = 2² + 2(2) - 5 = 4 + 4 - 5 = 3)"}</span>,
          <span key="u3-ans-2-2">{"(2) 4 (ເພາະວ່າ P(1) = 1³ - 1² + 4 = 1 - 1 + 4 = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u3-ans-t1-1">{"(1) x + 2 (ເພາະວ່າ x² + 3x + 5 = (x + 1)(x + 2) + 3)"}</span>,
          <span key="u3-ans-t1-2">{"(2) 3 (ແມ່ນຕົວເສດເຫຼືອຈາກການຫານ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u3-ans-t2-1">{"(1) 5 (ເພາະວ່າ P(2) = 2² - 2k + 6 = 10 - 2k = 0  ⇒  2k = 10  ⇒  k = 5)"}</span>,
          <span key="u3-ans-t2-2">{"(2) 6 (ເພາະວ່າ P(-3) = (-3)² + 5(-3) + k = 9 - 15 + k = k - 6 = 0  ⇒  k = 6)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u3-ans-s1-1">{"(1) x² + 3x + 2 (ເພາະວ່າ (x³ + 2x² - x - 2) = (x - 1)(x² + 3x + 2))"}</span>,
          <span key="u3-ans-s1-2">{"(2) 2 (ເພາະວ່າ x² + 3x + 2 = (x + 1)(x + 2), ດັ່ງນັ້ນ c = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u3-ans-s2-1">{"(1) x² + 3x + 2 (ເພາະວ່າ S = V/h = x(x² + 3x + 2) / x = x² + 3x + 2)"}</span>,
          <span key="u3-ans-s2-2">{"(2) 42 (ເພາະວ່າ S(5) = 5² + 3(5) + 2 = 25 + 15 + 2 = 42)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກເກັນເສດເຫຼືອແມ່ນເຄື່ອງມືທີ່ຊ່ວຍຊອກຫາຕົວເສດໄດ້ຢ່າງວ່ອງໄວ! ພຽງແຕ່ແທນຄ່າ c ເຂົ້າໃນພະຫຸພົດ P(x) ກໍຈະໄດ້ຕົວເສດເຫຼືອທັນທີໂດຍບໍ່ຕ້ອງຫານແບບຕັ້ງບັ້ງເດີ້!",
  },
};
