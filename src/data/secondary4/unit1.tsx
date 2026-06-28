import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit1Data: UnitData = {
  unitNumber: 1,
  unitTitle: "ພາກທີ I - ບົດທີ 1: ສຳນວນປົກກະຕິ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງສຳນວນປົກກະຕິ, ເງື່ອນໄຂທີ່ເຮັດໃຫ້ສຳນວນປົກກະຕິບໍ່ກຳນົດ ແລະ ການຄັດຈ້ອນສຳນວນປົກກະຕິ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 1-3",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ເງື່ອນໄຂຂອງສຳນວນປົກກະຕິ",
      keyPoint: {
        title: "ຄວາມໝາຍ ແລະ ເງື່ອນໄຂບໍ່ກຳນົດ (Undefined Conditions)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສຳນວນປົກກະຕິແມ່ນສຳນວນທີ່ຂຽນໃນຮູບແບບເລກສ່ວນ "}
              <Fraction num="A" den="B" />
              {" ເຊິ່ງ A ແລະ B ແມ່ນພະຫຸພົດ ໂດຍທີ່ຕົວຫານ B ຕ້ອງຕ່າງຈາກ 0 (B ≠ 0)."}
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າຂອງຕົວປ່ຽນທີ່ເຮັດໃຫ້ສຳນວນປົກກະຕິ "}<strong>{"ບໍ່ກຳນົດ"}</strong>{" ແມ່ນຄ່າທີ່ເຮັດໃຫ້ຕົວຫານ (ພູດ) ເທົ່າກັບ 0 (B = 0)."}
            </p>
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1565C0", display: "block", marginBottom: "4px" }, whiteSpace: "nowrap"}>
                {"ຕົວຢ່າງ:"}
              </span>
              <p style={{ fontSize: "1.3rem", margin: 0, lineHeight: "1.6" }}>
                {"ສຳນວນ "} <Fraction num="𝑥 + 3" den="𝑥 - 1" /> {" ຈະບໍ່ກຳນົດເມື່ອຕົວຫານ x - 1 = 0 ⇔ x = 1."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເພື່ອຊອກຫາເງື່ອນໄຂທີ່ເຮັດໃຫ້ສຳນວນບໍ່ກຳນົດ, ໃຫ້ຕັ້ງສົມຜົນ ຕົວຫານ = 0 ແລ້ວແກ້ສົມຜົນຊອກຫາຄ່າຂອງຕົວປ່ຽນ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ x ທີ່ເຮັດໃຫ້ສຳນວນປົກກະຕິຕໍ່ໄປນີ້ບໍ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="8" den="𝑥 - 2" /> {" ບໍ່ກຳນົດເມື່ອ x ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="5" den="3 - 𝑥" /> {" ບໍ່ກຳນົດເມື່ອ x ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ y ທີ່ເຮັດໃຫ້ສຳນວນປົກກະຕິຕໍ່ໄປນີ້ບໍ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="𝑦 + 6" den="3𝑦 + 9" /> {" ບໍ່ກຳນົດເມື່ອ y ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="7" den="𝑦² - 16" /> {" ບໍ່ກຳນົດເມື່ອ y ="}
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
      title: "2. ການຄັດຈ້ອນສຳນວນປົກກະຕິ (Simplifying Rational Expressions)",
      keyPoint: {
        title: "ຫຼັກການຄັດຈ້ອນສຳນວນປົກກະຕິ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອຄັດຈ້ອນສຳນວນປົກກະຕິ, ເຮົາຈະແຍກພະຫຸພົດຢູ່ຕົວເສດ (ຈຳນວນພູດ) ແລະ ຕົວຫານ (ພູດ) ອອກເປັນສ່ວນຄູນ ແລ້ວຄັດສ່ວນຄູນທີ່ຄືກັນອອກ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="A × K" den="B × K" /> {" = "} <Fraction num="A" den="B" /> {" (ໂດຍທີ່ B, K ≠ 0)"}
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ: ຄັດຈ້ອນສຳນວນ "}
              <Fraction num="2𝑥 + 6" den="𝑥² - 9" /> {" = "} <Fraction num="2(𝑥 + 3)" den="(𝑥 - 3)(𝑥 + 3)" /> {" = "} <Fraction num="2" den="𝑥 - 3" /> {" (ເງື່ອນໄຂ x ≠ ±3)."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ໝັ່ນທວນຄືນສະເໝີຄູ່ຄວນຈື່ ເຊັ່ນ: a² - b² = (a - b)(a + b) ເພື່ອຊ່ວຍໃນການແຍກສ່ວນຄູນໄດ້ຢ່າງວ່ອງໄວ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄັດຈ້ອນສຳນວນປົກກະຕິຕໍ່ໄປນີ້ໃຫ້ເປັນຮູບແບບງ່າຍດາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="6𝑥³" den="3𝑥⁵" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="5a + 5b" den="ab + b²" /> {" ="}
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
                {"ຈົ່ງຄັດຈ້ອນສຳນວນປົກກະຕິຂັ້ນສູງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="𝑥² - 4" den="𝑥² - 2𝑥" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }, whiteSpace: "nowrap"}>
                    <Fraction num="𝑥² - 9" den="𝑥² + 6𝑥 + 9" /> {" ="}
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
    hintText: "💡 ບົດທ້າທາຍ: ແຍກສ່ວນຄູນຢູ່ພູດ ແລະ ຈຳນວນພູດໃຫ້ລະອຽດ ເພື່ອເຮັດໃຫ້ການຄັດຈ້ອນສຳນວນປົກກະຕິຊັ້ນສູງນີ້ຖືກຕ້ອງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄັດຈ້ອນໂດຍການແຍກຕົວຄູນຮ່ວມ 3 ພົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄັດຈ້ອນສຳນວນປົກກະຕິ: "}
              <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Fraction num="𝑥² + 5𝑥 + 6" den="𝑥² - 4" />
              </strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນຄັດຈ້ອນແມ່ນ"}</span>
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
              {"ການຫາເງື່ອນໄຂບໍ່ກຳນົດຂອງສຳນວນກຳລັງສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ x ທັງໝົດທີ່ເຮັດໃຫ້ສຳນວນປົກກະຕິ: "}
              <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Fraction num="𝑥 - 1" den="𝑥² - 5𝑥 + 6" />
              </strong>
              {" ບໍ່ກຳນົດ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
            {"ການຄັດຈ້ອນສຳນວນປົກກະຕິຊັ້ນສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນສຳນວນປົກກະຕິ: "}
            <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <Fraction num="3𝑥² + 6𝑥" den="𝑥² - 𝑥 - 6" />
            </strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜົນຄັດຈ້ອນແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາປະຍຸກພຶດຊະຄະນິດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າສຳນວນ "}
            <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <Fraction num="𝑥 + a" den="𝑥 - 3" />
            </strong>
            {" ຄັດຈ້ອນກັບ "}
            <strong style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <Fraction num="𝑥² - 9" den="𝑥² - 6𝑥 + 9" />
            </strong>
            {" ໄດ້ຢ່າງສົມບູນ. ຈົ່ງຊອກຫາຄ່າຂອງຄົງຈຳນວນ a?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: a ="}</span>
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
          <span key="1-1">{"(1) x = 2 (ຕົວຫານ x - 2 = 0)"}</span>,
          <span key="1-2">{"(2) x = 3 (ຕົວຫານ 3 - x = 0)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) y = -3 (ຕົວຫານ 3y + 9 = 0)"}</span>,
          <span key="2-2">{"(2) y = 4 ແລະ y = -4 (ຫຼື y = ±4 ເພາະວ່າ y² - 16 = 0)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) "}<Fraction num="2" den="𝑥²" /></span>,
          <span key="3-2">{"(2) "}<Fraction num="5" den="b" /> {" (ຄິດໄລ່: 5(a+b)/[b(a+b)] = 5/b)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"(1) "}<Fraction num="𝑥 + 2" den="𝑥" /> {" (ຄິດໄລ່: (x-2)(x+2)/[x(x-2)] = (x+2)/x)"}</span>,
          <span key="4-2">{"(2) "}<Fraction num="𝑥 - 3" den="𝑥 + 3" /> {" (ຄິດໄລ່: (x-3)(x+3)/(x+3)² = (x-3)/(x+3))"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{" "}<Fraction num="𝑥 + 3" den="𝑥 - 2" /> {" (ຄິດໄລ່: (x+2)(x+3)/[(x-2)(x+2)] = (x+3)/(x-2))"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"x = 2 ແລະ x = 3 (ເພາະວ່າ x² - 5x + 6 = (x - 2)(x - 3) = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{" "}<Fraction num="3𝑥" den="𝑥 - 3" /> {" (ຄິດໄລ່: 3x(x+2)/[(x-3)(x+2)] = 3x/(x-3))"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"a = 3 (ຄິດໄລ່: (x²-9)/(x²-6x+9) = (x-3)(x+3)/(x-3)² = (x+3)/(x-3) ດັ່ງນັ້ນ a = 3)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການເຮັດວຽກກັບສຳນວນປົກກະຕິ, ການຊອກຫາເງື່ອນໄຂບໍ່ກຳນົດ ແລະ ການຄັດຈ້ອນພຶດຊະຄະນິດ ເປັນຫົວໃຈຫຼັກຂອງຄະນິດສາດ ມ.4. ໝັ່ນຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
