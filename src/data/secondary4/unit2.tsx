import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit2Data: UnitData = {
  unitNumber: 2,
  unitTitle: "ພາກທີ I - ບົດທີ 2: ການຄູນ ແລະ ການຫານສຳນວນປົກກະຕິ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຫຼັກການຄູນ ແລະ ການຫານສຳນວນປົກກະຕິ, ການຄັດຈ້ອນຜົນຄູນ ແລະ ຜົນຫານໃຫ້ເປັນຮູບແບບງ່າຍດາຍທີ່ສຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 5-8",
  subSections: [
    {
      title: "1. ການຄູນສຳນວນປົກກະຕິ",
      keyPoint: {
        title: "ຫຼັກການຄູນ ແລະ ການຄັດຈ້ອນສ່ວນຄູນຮ່ວມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຄູນສອງສຳນວນປົກກະຕິ, ເຮົາຈະເອົາຈຳນວນພູດຄູນກັບຈຳນວນພູດ ແລະ ເອົາພູດຄູນກັບພູດ ໂດຍກຳນົດເງື່ອນໄຂໃຫ້ຕົວຫານຕ່າງຈາກ 0:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="A" den="B" /> {" × "} <Fraction num="C" den="D" /> {" = "} <Fraction num="A × C" den="B × D" /> {" (ໂດຍທີ່ B, D ≠ 0)"}
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>
                <Fraction num="3𝑥" den="5" /> {" × "} <Fraction num="10" den="9𝑥²" /> {" = "} <Fraction num="30𝑥" den="45𝑥²" /> {" = "} <Fraction num="2" den="3𝑥" /> {" (ເງື່ອນໄຂ x ≠ 0)."}
              </li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ກ່ອນທີ່ຈະທຳການຄູນຕົວເລກຂະໜາດໃຫຍ່, ໃຫ້ພະຍາຍາມແຍກສ່ວນຄູນ ແລະ ຄັດຈ້ອນຕົວເລກ ຫຼື ຕົວປ່ຽນທີ່ຄືກັນອອກກ່ອນ ຈະເຮັດໃຫ້ຄິດໄລ່ງ່າຍຂຶ້ນ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນສຳນວນປົກກະຕິລຸ່ມນີ້ ແລະ ຄັດຈ້ອນໃຫ້ເປັນຮູບແບບງ່າຍດາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="5𝑥²" den="7" /> {" × "} <Fraction num="14" den="15𝑥" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="8𝑥²" den="𝑦³" /> {" × "} <Fraction num="𝑦" den="4𝑥" /> {" ="}
                  </span>
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
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນພ້ອມທັງແຍກສ່ວນຄູນເພື່ອຄັດຈ້ອນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="𝑥² - 9" den="𝑥" /> {" × "} <Fraction num="18" den="𝑥 + 3" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="𝑥² - 16" den="𝑥² - 3𝑥" /> {" × "} <Fraction num="𝑥" den="𝑥 - 4" /> {" ="}
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
      title: "2. การหารสำນວນປົກກະຕິ",
      keyPoint: {
        title: "ຫຼັກການຫານໂດຍການຄູນກັບສ່ວນກັບ (Reciprocal Multiplication)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຫານສຳນວນປົກກະຕິແມ່ນການຄູນສຳນວນຕົວຕັ້ງຫານກັບສ່ວນກັບຂອງສຳນວນຕົວຫານ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "12px", border: "1px dashed #2E7D32", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="A" den="B" /> {" ÷ "} <Fraction num="C" den="D" /> {" = "} <Fraction num="A" den="B" /> {" × "} <Fraction num="D" den="C" /> {" = "} <Fraction num="A × D" den="B × C" />
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>
                <Fraction num="8𝑥" den="𝑥²" /> {" ÷ "} <Fraction num="12" den="2𝑥" /> {" = "} <Fraction num="8𝑥" den="𝑥²" /> {" × "} <Fraction num="2𝑥" den="12" /> {" = "} <Fraction num="16𝑥²" den="12𝑥²" /> {" = "} <Fraction num="4" den="3" /> {" (ເງື່ອນໄຂ x ≠ 0)."}
              </li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມວ່າ: ເມື່ອປ່ຽນເຄື່ອງໝາຍຫານເປັນຄູນ, ຕົວຫານທາງຫຼັງຕ້ອງປີ້ນຈາກເທິງລົງລຸ່ມສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນຫານສຳນວນປົກກະຕິລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="5𝑥" den="3" /> {" ÷ "} <Fraction num="10" den="9𝑥²" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="8𝑥" den="𝑦²" /> {" ÷ "} <Fraction num="12𝑥" den="4𝑦" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນຫານໂດຍການປ່ຽນເປັນການຄູນ ແລະ ແຍກສ່ວນຄູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{""}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="𝑦" den="𝑦 - 1" /> {" ÷ "} <Fraction num="𝑦²" den="𝑦² - 1" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="t² - 16" den="t² - 9" /> {" ÷ "} <Fraction num="t - 4" den="t + 3" /> {" ="}
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດ ແລະ ປະຕິບັດຕາມລຳດັບການຄິດໄລ່ຄູນ-ຫານ ພ້ອມທັງແຍກຕົວຄູນຮ່ວມໃຫ້ລະອຽດທີ່ສຸດ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄູນ ແລະ ຫານແບບປະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ ແລະ ຄັດຈ້ອນສຳນວນ: "}
              <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Fraction num="𝑥² - 4" den="𝑥² - 5𝑥 + 6" /> {" × "} <Fraction num="𝑥 - 3" den="𝑥 + 2" />
              </strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນໄດ້ຮັບແມ່ນ"}</span>
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
              {"ການຫານສຳນວນກຳລັງສອງ 3 ພົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ຜົນຫານຂອງ: "}
              <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Fraction num="𝑦² - 𝑦 - 6" den="𝑦² - 4𝑦" /> {" ÷ "} <Fraction num="𝑦² - 4" den="𝑦² - 4" />
              </strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນຫານແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
            {"ການຄິດໄລ່ຜົນຄູນຂັ້ນສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນຂອງ: "}
            <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <Fraction num="𝑥² - 12𝑥 + 36" den="𝑥² - 4" /> {" × "} <Fraction num="𝑥 + 2" den="𝑥 - 6" />
            </strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜົນຄູນແມ່ນ"}</span>
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
            {"ການພົວພັນການຄູນ ແລະ ຫານສຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄິດໄລ່ຜົນຫານຂັ້ນສູງ: "}
            <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <Fraction num="a² - b²" den="2a" /> {" ÷ "} <Fraction num="a² + 2ab + b²" den="4a²" />
            </strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜົນຫານແມ່ນ"}</span>
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
          <span key="1-1">{"(1) "}<Fraction num="2𝑥" den="3" /> {" (ຄິດໄລ່: (5x²×14)/(7×15x) = 70x²/105x = 2x/3)"}</span>,
          <span key="1-2">{"(2) "}<Fraction num="2𝑥" den="𝑦²" /> {" (ຄິດໄລ່: (8x²×y)/(y³×4x) = 2x/y²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) "}<Fraction num="18(𝑥 - 3)" den="𝑥" /> {" (ຄິດໄລ່: (x-3)(x+3)/x × 18/(x+3) = 18(x-3)/x)"}</span>,
          <span key="2-2">{"(2) "}<Fraction num="𝑥 + 4" den="𝑥 - 3" /> {" (ຄິດໄລ່: (x-4)(x+4)/[x(x-3)] × x/(x-4) = (x+4)/(x-3))"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) "}<Fraction num="3𝑥³" den="2" /> {" (ຄິດໄລ່: 5x/3 × 9x²/10 = 45x³/30 = 3x³/2)"}</span>,
          <span key="3-2">{"(2) "}<Fraction num="8" den="3𝑦" /> {" (ຄິດໄລ່: 8x/y² × 4y/12x = 32xy/12x y² = 8/3y)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"(1) "}<Fraction num="𝑦 + 1" den="𝑦" /> {" (ຄິດໄລ່: y/(y-1) × (y-1)(y+1)/y² = (y+1)/y)"}</span>,
          <span key="4-2">{"(2) "}<Fraction num="t + 4" den="t - 3" /> {" (ຄິດໄລ່: (t-4)(t+4)/[(t-3)(t+3)] × (t+3)/(t-4) = (t+4)/(t-3))"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"1 (ຄິດໄລ່: (x-2)(x+2)/[(x-2)(x-3)] × (x-3)/(x+2) = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{" "}<Fraction num="𝑦 - 3" den="𝑦" /> {" (ຄິດໄລ່: (y-3)(y+2)/[y(y-4)] × (y-2)(y+2)/[(y-2)(y+2)] = (y-3)/y. ໝາຍເຫດ: ຕົວຫານຂວາຄັດກັນເຫຼືອ 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{" "}<Fraction num="𝑥 - 6" den="𝑥 - 2" /> {" (ຄິດໄລ່: (x-6)²/[(x-2)(x+2)] × (x+2)/(x-6) = (x-6)/(x-2))"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{" "}<Fraction num="2a(a - b)" den="a + b" /> {" (ຄິດໄລ່: (a-b)(a+b)/2a × 4a²/(a+b)² = 2a(a-b)/(a+b))"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຄູນ ແລະ ຫານສຳນວນປົກກະຕິ ເປັນພື້ນຖານສຳຄັນທີ່ສຸດໃນການຄຳນວນລະດັບສູງ. ການໝັ່ນແຍກສ່ວນຄູນຈະຊ່ວຍຫຼຸດຄວາມຜິດພາດໄດ້ດີຫຼາຍ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
