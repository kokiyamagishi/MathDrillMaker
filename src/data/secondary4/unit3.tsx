import React from "react";
import { UnitData } from "../units2";

export const unit3Data: UnitData = {
  unitNumber: 3,
  unitTitle: "ພາກທີ I - ບົດທີ 3: ການຫານພະຫຸພົດ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການຫານພະຫຸພົດດ້ວຍວິທີຫານແບບຕັ້ງບັ້ງ ແລະ ວິທີຫານແບບຊີເນຕິກ (Synthetic Division), ການຊອກຫາຜົນຫານ ແລະ ຕົວເສດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 10-12",
  subSections: [
    {
      title: "1. ການຫານພະຫຸພົດແບບຕັ້ງບັ້ງ",
      keyPoint: {
        title: "ຫຼັກການຫານພະຫຸພົດແບບຕັ້ງບັ້ງ (Long Division of Polynomials)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຫານພະຫຸພົດ A ໃຫ້ B ແມ່ນການຊອກຫາຜົນຫານ Q ແລະ ຕົວເສດ R ທີ່ຕອບສະໜອງເງື່ອນໄຂ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"A = B × Q + R  (ໂດຍທີ່ລະດັບຂັ້ນຂອງ R < ລະດັບຂັ້ນຂອງ B)"}
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ: ຫານ "} <strong>{"2x² + 5x - 12"}</strong> {" ໃຫ້ "} <strong>{"x + 4"}</strong> {" ດ້ວຍວິທີຕັ້ງບັ້ງ ຈະໄດ້ຜົນຫານແມ່ນ "} <strong>{"2x - 3"}</strong> {" ແລະ ຕົວເສດແມ່ນ "} <strong>{"0"}</strong> {" (ຫານຂາດ)."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຈັດລຽງພົດຂອງພະຫຸພົດແຕ່ກຳລັງສູງສຸດຫາຕ່ຳສຸດກ່ອນຕັ້ງບັ້ງຫານສະເໝີ. ຖ້າກຳລັງໃດໜຶ່ງຂາດຫາຍໄປ, ໃຫ້ຕື່ມ 0 ໃສ່ກຳລັງນັ້ນ ເຊັ່ນ: x³ + 8 = x³ + 0x² + 0x + 8!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຜົນຫານ ແລະ ຕົວເສດຈາກການຫານພະຫຸພົດລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"(2x² + 5x - 12) ÷ (x + 4) ໄດ້: ຜົນຫານ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{", ຕົວເສດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"(3x² + 7x - 6) ÷ (3x - 2) ໄດ້: ຜົນຫານ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{", ຕົວເສດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງຊອກຫາຕົວເສດ R ໂດຍບໍ່ຕ້ອງຕັ້ງບັ້ງຫານ (ນຳໃຊ້ທິດສະດີບົດຕົວເສດ): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຫານ x² - 3x + 5 ໃຫ້ x - 2 ໄດ້ R ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຫານ 2x² - x - 7 ໃຫ້ x + 1 ໄດ້ R ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຫານພະຫຸພົດແບບຊີເນຕິກ (Synthetic Division)",
      keyPoint: {
        title: "ຫຼັກການຫານແບບຊີເນຕິກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຫານແບບຊີເນຕິກແມ່ນວິທີຫານລັດສຳລັບພະຫຸພົດທີ່ຫານໃຫ້ພູດໃນຮູບແບບ x - c ໂດຍການນຳໃຊ້ພຽງແຕ່ສຳປະສິດຂອງພົດຕ່າງໆ:"}
            </p>
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32", display: "block", marginBottom: "4px" }}>
                {"ຂັ້ນຕອນການຫານແບບຊີເນຕິກ:"}
              </span>
              <p style={{ fontSize: "1.3rem", margin: 0, lineHeight: "1.6" }}>
                {"1. ຂຽນສຳປະສິດຂອງຕົວຕັ້ງຫານທັງໝົດລຽງກັນຕາມລຳດັບຂັ້ນ."} <br />
                {"2. ຂຽນຄ່າ c ຢູ່ທາງຊ້າຍສຸດ (ເຊິ່ງ c ເຮັດໃຫ້ຕົວຫານ x - c = 0)."} <br />
                {"3. ດຶງສຳປະສິດຕົວທຳອິດລົງມາ, ຄູນກັບ c ແລ້ວເອົາໄປບວກກັບສຳປະສິດຕົວຖັດໄປ ປະຕິບັດຊ້ຳໆຈົນສຸດ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີການຫານແບບຊີເນຕິກ ຈະຊ່ວຍໃຫ້ເຮົາຊອກຫາຜົນຫານ ແລະ ຕົວເສດໄດ້ໄວຫຼາຍກວ່າວິທີຕັ້ງບັ້ງຫານແບບທຳມະດາ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຜົນຫານ ແລະ ຕົວເສດໂດຍນຳໃຊ້ການຫານແບບຊີເນຕິກ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"(x³ - 2x² - 5x + 6) ÷ (x - 3) ໄດ້: ຜົນຫານ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{", ຕົວເສດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"(x³ + 8) ÷ (x + 2) ໄດ້: ຜົນຫານ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{", ຕົວເສດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງຊອກຫາຄ່າຂອງ k ທີ່ເຮັດໃຫ້ພະຫຸພົດຫານຂາດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ພະຫຸພົດ "}<strong>{"P(x) = x³ - 3x² + kx + 8"}</strong>{" ຫານຂາດໃຫ້ "}<strong>{"x - 2"}</strong>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", padding: "8px 0" }}>
                <span>{"ຕອບ: k ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ທົດສອບການຫານພະຫຸພົດຂັ້ນສູງທີ່ມີລະດັບກຳລັງສູງສຸດ ແລະ ການວິເຄາະຫາຕົວລັບ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຫານພະຫຸພົດກຳລັງສີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຕົວເສດ R ຈາກການຫານ: "}
              <strong style={{ color: "#E65100" }}>{"(x⁴ - 2x³ + 3x² - x + 5) ÷ (x - 1)"}</strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕົວເສດ R ="}</span>
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
              {"ໂຈດຊອກຫາສອງຕົວຄົງຄ່າ (a ແລະ b): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າພະຫຸພົດ "}<strong>{"x³ + ax² + bx - 6"}</strong>{" ຫານຂາດໃຫ້ທັງ "}<strong>{"x - 1"}</strong>{" ແລະ "}<strong>{"x - 2"}</strong>{" ພ້ອມກັນ. ຈົ່ງຊອກຫາຄ່າຂອງ a ແລະ b ຕາມລຳດັບ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"a ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"b ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
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
            {"ການຫານພະຫຸພົດທີ່ມີຕົວຫານເປັນກຳລັງສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຜົນຫານ Q(x) ແລະ ຕົວເສດ R(x) ຈາກການຫານ: "}
            <strong>{"(x³ - 3x² + 5x - 2) ÷ (x² - 1)"}</strong>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"Q(x) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"R(x) ="}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການພິສູດຕົວປະກອບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າ x + 3 ແມ່ນຕົວປະກອບຂອງພະຫຸພົດ "}<strong>{"2x³ + 5x² - 4x + c"}</strong>{". ຈົ່ງຊອກຫາຄ່າຂອງຄົງຈຳນວນ c?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: c ="}</span>
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
          <span key="1-1">{"(1) ຜົນຫານ = 2x - 3, ຕົວເສດ = 0 (ຫານຂາດ)"}</span>,
          <span key="1-2">{"(2) ຜົນຫານ = x + 3, ຕົວເສດ = 0 (ຫານຂາດ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) R = 3 (ຄິດໄລ່: P(2) = 2² - 3(2) + 5 = 4 - 6 + 5 = 3)"}</span>,
          <span key="2-2">{"(2) R = -4 (ຄິດໄລ່: P(-1) = 2(-1)² - (-1) - 7 = 2 + 1 - 7 = -4)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) ຜົນຫານ = x² + x - 2, ຕົວເສດ = 0"}</span>,
          <span key="3-2">{"(2) ຜົນຫານ = x² - 2x + 4, ຕົວເສດ = 0 (ຫານຂາດ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"k = -2 (ຄິດໄລ່: P(2) = 2³ - 3(2)² + 2k + 8 = 8 - 12 + 2k + 8 = 4 + 2k = 0 ⇔ k = -2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"R = 6 (ຄິດໄລ່: P(1) = 1 - 2 + 3 - 1 + 5 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"a = 2, b = 3 (ຄິດໄລ່: P(1) = a+b = 5, P(2) = 4a+2b = -2. ແກ້ລະບົບສົມຜົນໄດ້ a = 2, b = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- Q(x) = x - 3"}</span>,
          <span key="s1-2">{"- R(x) = 6x - 5 (ຄິດໄລ່: x³-3x²+5x-2 = (x²-1)(x-3) + 6x-5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"c = 3 (ຄິດໄລ່: P(-3) = 2(-3)³ + 5(-3)² - 4(-3) + c = -54 + 45 + 12 + c = 3 + c = 0 ⇔ c = -3)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຫານພະຫຸພົດ ແລະ ການຊອກຫາຕົວເສດ ຫຼື ຕົວປະກອບ ເປັນພາກສ່ວນພື້ນຖານທີ່ສຸດຂອງພຶດຊະຄະນິດຊັ້ນສູງ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
