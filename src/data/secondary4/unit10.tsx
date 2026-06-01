import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit10Data: UnitData = {
  unitNumber: 10,
  unitTitle: "ພາກທີ I - ບົດທີ 10: ການຄິດໄລ່ສຳນວນທີ່ມີເລກຮາກ",
  unitGoal:
    "ຮຽນຮູ້ວິທີການຄິດໄລ່ບວກ, ລົບ, ຄູນ ແລະ ຫານສຳນວນທີ່ມີເຄື່ອງໝາຍຮາກ, ການເອົາຕົວເລກອອກນອກຮາກ ແລະ ການກຳຈັດຮາກຢູ່ພູດ (Rationalization)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 10 ໜ້າ 55-60",
  subSections: [
    {
      title: "1. ການເອົາຕົວເລກອອກນອກຮາກ ແລະ ການບວກລົບ (Pulling Factors Out & Addition/Subtraction)",
      keyPoint: {
      title: "1. ການເອົາຕົວເລກອອກນອກຮາກ ແລະ ການບວກລົບ (Pulling Factors Out & Addition/Subtraction)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອບວກ ຫຼື ລົບສຳນວນທີ່ມີເລກຮາກ, ເຮົາຕ້ອງຜັນປ່ຽນໃຫ້ກ້ອງຮາກມີຕົວເລກດຽວກັນ (ຮາກຄືກັນ):"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດພື້ນຖານ: "}</strong>
              <span>{"ຮາກຂັ້ນ 2 ຂອງ (a²b) = a × ຮາກຂັ້ນ 2 ຂອງ b (ເມື່ອ a ≥ 0)"}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຕົວຢ່າງ: ຮາກຂັ້ນ 2 ຂອງ 18 = ຮາກຂັ້ນ 2 ຂອງ (9 × 2) = 3√2."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ການບວກລົບຮາກທີ່ຄືກັນ: "}</strong>
              <span>{"a√x + b√x = (a + b)√x"}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຕົວຢ່າງ: 3√2 + 5√2 = (3 + 5)√2 = 8√2."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ແນະນຳ: ໃຫ້ແຍກຕົວເລກກ້ອງຮາກໃຫ້ເປັນຜົນຄູນຂອງເລກກຳລັງສອງສົມບູນ (4, 9, 16, 25...) ກ່ອນ ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ເອົາຕົວເລກອອກນອກຮາກ ແລະ ບວກລົບສຳນວນ: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: ຮາກຂັ້ນ 2 ຂອງ 8 + ຮາກຂັ້ນ 2 ຂອງ 18 = (ຕອບໃນຮູບແບບ a√b, ຕົວอย่าง: 5√2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄິດໄລ່: ຮາກຂັ້ນ 2 ຂອງ 75 - ຮາກຂັ້ນ 2 ຂອງ 27 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການກຳຈັດຮາກຢູ່ພູດ (Rationalizing the Denominator)",
      keyPoint: {
      title: "2. ການກຳຈັດຮາກຢູ່ພູດ (Rationalizing the Denominator)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການກຳຈັດຮາກຢູ່ພູດແມ່ນການຄູນສຳນວນຮ່ວມເອກະລັກ (Conjugate) ໃສ່ທັງຈຳນວນພູດ ແລະ ພູດ ເພື່ອໃຫ້ຮາກຫາຍໄປ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#2E7D32" }}>{"• ກໍລະນີພູດມີຮາກດ່ຽວ: "}</strong>
              <Fraction num="1" den="√a" />
              {" = "}
              <Fraction num="√a" den="a" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderTop: "1px solid #C8E6C9", paddingTop: "8px" }}>
              <strong style={{ color: "#2E7D32" }}>{"• ກໍລະນີພູດເປັນການບວກລົບ: "}</strong>
              <Fraction num="1" den="√a - √b" />
              {" = "}
              <Fraction num="√a + √b" den="a - b" />
            </div>
          </div>
          {/* Visual SVG showing conjugate multiplication */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ຂັ້ນຕອນການກຳຈັດຮາກຢູ່ພູດ"}</span>
            <svg viewBox="0 0 320 80" style={{ width: "100%", maxWidth: "320px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Left Side */}
              <text x="35" y="32" fill="#333" fontSize="10" textAnchor="middle">{"1"}</text>
              <line x1="20" y1="40" x2="50" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="35" y="55" fill="#E65100" fontSize="10" textAnchor="middle">{"√3 - 1"}</text>

              {/* Multiply sign */}
              <text x="65" y="44" fill="#333" fontSize="10" textAnchor="middle">{"×"}</text>

              {/* Conjugate Fraction */}
              <text x="100" y="32" fill="#2E7D32" fontSize="10" textAnchor="middle">{"√3 + 1"}</text>
              <line x1="85" y1="40" x2="115" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="100" y="55" fill="#2E7D32" fontSize="10" textAnchor="middle">{"√3 + 1"}</text>

              {/* Equal sign */}
              <text x="135" y="44" fill="#333" fontSize="10" textAnchor="middle">{"="}</text>

              {/* Right Side */}
              <text x="210" y="32" fill="#2E7D32" fontSize="10" textAnchor="middle">{"√3 + 1"}</text>
              <line x1="150" y1="40" x2="270" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="210" y="55" fill="#D84315" fontSize="10" textAnchor="middle">{"3 - 1 = 2"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ສຳນວນຮ່ວມຂອງ (√3 - 1) ແມ່ນ (√3 + 1) ເດີ້! ໃຫ້ປ່ຽນເຄື່ອງໝາຍກົງກັນຂ້າມສະເໝີເພື່ອໃຊ້ສູດ A² - B²!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງກຳຈັດຮາກຢູ່ພູດຂອງເລກສ່ວນຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ກຳຈັດຮາກ: "} <Fraction num="6" den="√3" /> {" = (ຕອບໃນຮູບແບບ a√b, ຕົວຢ່າງ: 2√3):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ກຳຈັດຮາກ: "} <Fraction num="1" den="√2 - 1" /> {" = (ຕອບໃນຮູບແບບການບວກລົບ, ຕົວຢ່າງ: √2 + 1):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຄູນແຈກຢາຍຕາມສູດ (√a + √b)(√a - √b) = a - b. ບົດທ້າທາຍ 2: ໃຫ້ເຮັດໃຫ້ພູດເປັນຈຳນວນຈິງກ່ອນແລ້ວຈຶ່ງບວກລົບກັນ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ການຄູນສຳນວນຮາກທີ່ມີຄວາມຊັບຊ້ອນ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່ຜົນຄູນ: (√5 + √3)(√5 - √3) = (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່ຜົນຄູນ: (√2 + 1)² = (ຕອບໃນຮູບແບບ a + b√2, ຕົວຢ່າງ: 3 + 2√2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ການບວກລົບເລກສ່ວນທີ່ມີເຄື່ອງໝາຍຮາກຢູ່ພູດ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: "} <Fraction num="1" den="√3 - √2" /> {" - "} <Fraction num="1" den="√3 + √2" /> {" = (ຕອບໃນຮູບແບບງ່າຍດາຍ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: "} <Fraction num="2" den="√5 + √3" /> {" + "} <Fraction num="2" den="√5 - √3" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມການຄິດໄລ່ສຳນວນຮາກ: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: ຮາກຂັ້ນ 2 ຂອງ 50 - 2 × ຮາກຂັ້ນ 2 ຂອງ 18 + ຮາກຂັ້ນ 2 ຂອງ 2 = (ຕອບເປັນຕົວເລກຖ້ວນ ຫຼື ຮູບຮ່າງງ່າຍດາຍ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="√12 + √27" den="√3" /> {" = (ຄຳແນະນຳ: ແຍກ √3 ອອກເປັນຕົວຮ່ວມຢູ່ຈຳນວນພູດກ່ອນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບທິດສະດີສະເໝີພາບສາມແຈສາກ (Pythagoras & Radicals): "}{" "}
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
              <span>{"(1) ຮູບສາມແຈສາກໜຶ່ງມີຂ້າງຕິດມຸມສາກຍາວ a = √8 cm ແລະ b = √18 cm. ຈົ່ງຊອກຫາຂ້າງກົງມຸມສາກ c = ຮາກຂັ້ນ 2 ຂອງ (a² + b²) (cm):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: c ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ເນື້ອທີ່ S ຂອງຮູບສາມແຈສາກນີ້ແມ່ນຈັກຊັງຕີແມັດມົນທົນ (cm²)? (S = (a × b) / 2):"}</span>
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
          <span key="u10-ans-1-1">{"(1) 5√2 (ເພາະວ່າ 2√2 + 3√2 = 5√2)"}</span>,
          <span key="u10-ans-1-2">{"(2) 2√3 (ເພາະວ່າ 5√3 - 3√3 = 2√3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u10-ans-2-1">{"(1) 2√3 (ເພາະວ່າ 6√3 / 3 = 2√3)"}</span>,
          <span key="u10-ans-2-2">{"(2) √2 + 1 (ເພາະວ່າ 1 × (√2 + 1) / (2 - 1) = √2 + 1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u10-ans-t1-1">{"(1) 2 (ເພາະວ່າ (√5)² - (√3)² = 5 - 3 = 2)"}</span>,
          <span key="u10-ans-t1-2">{"(2) 3 + 2√2 (ເພາະວ່າ (√2)² + 2√2 + 1² = 2 + 2√2 + 1 = 3 + 2√2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u10-ans-t2-1">{"(1) 2√2 (ເພາະວ່າ (√3 + √2) - (√3 - √2) = 2√2)"}</span>,
          <span key="u10-ans-t2-2">{"(2) 2√5 (ເພາະວ່າ ພູດຮ່ວມແມ່ນ 5 - 3 = 2. ຈະໄດ້ [2(√5 - √3) + 2(√5 + √3)] / 2 = 4√5 / 2 = 2√5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u10-ans-s1-1">{"(1) 0 (ເພາະວ່າ 5√2 - 2(3√2) + √2 = 5√2 - 6√2 + √2 = 0)"}</span>,
          <span key="u10-ans-s1-2">{"(2) 5 (ເພາະວ່າ (2√3 + 3√3) / √3 = 5√3 / √3 = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u10-ans-s2-1">{"(1) √26 (ຫຼື √26. ເພາະວ່າ c = √((√8)² + (√18)²) = √(8 + 18) = √26)"}</span>,
          <span key="u10-ans-s2-2">{"(2) 6 (ເພາະວ່າ S = (2√2 × 3√2) / 2 = 12 / 2 = 6)"}</span>,
        ],
      },
    ],
    advice: "ການຄິດໄລ່ເລກຮາກຈະງ່າຍຂຶ້ນຫຼາຍ ຖ້າເຮົາຜັນປ່ຽນໃຫ້ກ້ອງຮາກເປັນຕົວເລກດຽວກັນ! ແລະ ການກຳຈັດຮາກຢູ່ພູດໂດຍໃຊ້ສຳນວນຮ່ວມເອກະລັກແມ່ນເຄື່ອງມືທີ່ສຳຄັນທີ່ສຸດເດີ້!",
  },
};
