import React from "react";
import { UnitData } from "../units2";

export const unit4Data: UnitData = {
  unitNumber: 4,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ການບວກ ແລະ ການລົບເສດສ່ວນ (Addition and Subtraction of Rational Expressions)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການບວກ ແລະ ລົບເສດສ່ວນທີ່ມີພູດຄືກັນ ແລະ ພູດຕ່າງກັນ, ການຊອກຫາທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ຂອງພະຫຸພົດ, ແລະ ການຄິດໄລ່ເສດສ່ວນຊ້ອນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 17-21",
  subSections: [
    {
      title: "1. ການບວກ ແລະ ການລົບເສດສ່ວນທີ່ມີພູດຄືກັນ (Same Denominator)",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານ: ບວກ ຫຼື ລົບຕົວເສດ, ຮັກສາພູດເດີມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອເສດສ່ວນມີພູດຄືກັນ, ເຮົາພຽງແຕ່ບວກ ຫຼື ລົບຕົວເສດ (Numerator) ເຂົ້າກັນ ແລະ ຮັກສາພູດ (Denominator) ໄວ້ຄືເກົ່າ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "8px 0", fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0" }}>
              <span>{"A/C + B/C = (A + B)/C"}</span>
              <span>{"   ;   "}</span>
              <span>{"A/C - B/C = (A - B)/C"}</span>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຕົວຢ່າງ 1: "}<strong>{"a / (a - b) - b / (a - b) = (a - b) / (a - b) = 1"}</strong>
                <br />
                {"- ຕົວຢ່າງ 2: "}<strong>{"x / (x² - 1) + 1 / (x² - 1) = (x + 1) / ((x - 1)(x + 1)) = 1 / (x - 1)"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫຼັງຈາກບວກ ຫຼື ລົບຕົວເສດແລ້ວ, ຢ່າລືມແຍກສ່ວນປະກອບຂອງຕົວເສດ ແລະ ຕົວພູດເພື່ອຄັດຈ້ອນໃຫ້ເປັນເສດສ່ວນຂັ້ນຕ່ຳສະເໝີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ ແລະ ຄັດຈ້ອນເສດສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) [ (2x - 3) / (x - 2) ] - [ (x - 1) / (x - 2) ] ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) [ x / (x² - 4) ] + [ 2 / (x² - 4) ] = 1 /"}</span>
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
                {"ຈົ່ງຊອກຫາທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ຂອງພະຫຸພົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) LCM ຂອງ (10x, 15x³, 18x²) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) LCM ຂອງ (x² - 4 ແລະ x² - 2x) = x × (x - 2) ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການບວກ ແລະ ການລົບເສດສ່ວນທີ່ມີພູດຕ່າງກັນ (Different Denominators)",
      keyPoint: {
        title: "ຂັ້ນຕອນການຂຶ້ນພູດຮ່ວມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອພູດຕ່າງກັນ, ເຮົາຕ້ອງຂຶ້ນພູດຮ່ວມໂດຍການຊອກຫາ LCM ຂອງພູດທັງໝົດກ່ອນ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#E65100", display: "block", textAlign: "center", margin: "12px 0" }}>
                {"A/B + C/D = (A·D + B·C) / (B·D)"}
              </span>
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຄິດໄລ່: 1 / (x - 1) + 1 / (x + 1)"}
                <br />
                {"- ພູດຮ່ວມແມ່ນ (x - 1)(x + 1) = x² - 1."}
                <br />
                {"- ຜົນໄດ້ຮັບແມ່ນ: [ (x + 1) + (x - 1) ] / (x² - 1) = 2x / (x² - 1)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີທີ່ດີທີ່ສຸດໃນການຂຶ້ນພູດຮ່ວມແມ່ນການແຍກສ່ວນປະກອບຂອງແຕ່ລະພູດ ເພື່ອຫຼີກເວັ້ນການຄູນພູດທີ່ຊ້ຳຊ້ອນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຶ້ນພູດຮ່ວມ ແລະ ຄິດໄລ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄິດໄລ່: [ 1 / (x - 1) ] - [ 1 / (x + 1) ]"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: ຕົວເສດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"/ (x² - 1)"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄັດຈ້ອນເສດສ່ວນຊ້ອນ (Complex Fraction): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄັດຈ້ອນ: [ (1 + 1/x) / (1 - 1/x) ]"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: (x + 1) /"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດເສດສ່ວນຊ້ອນຂອງກ້ອງຖ່າຍຮູບ (Camera Lens Formula): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສູດໄລຍະສຸມຂອງເລນກ້ອງຖ່າຍຮູບແມ່ນ: 1/f = 1/d + 1/a. ຖ້າເຮົາປ່ຽນສູດນີ້ເພື່ອຊອກຫາ f ໂດຍການຂຶ້ນພູດຮ່ວມ ແລະ ປີ້ນເສດສ່ວນ, ຈະໄດ້ f ເທົ່າກັບເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"f = (d × a) /"}</span>
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
              {"ໂຈດຄິດໄລ່ຫາຄ່າສະເລ່ຍຮາໂມນິກ (Harmonic Mean): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າສະເລ່ຍຮາໂມນິກ M ຂອງສອງຈຳນວນ a ແລະ b ແມ່ນກຳນົດດ້ວຍ: M = 2 / (1/a + 1/b). ຈົ່ງຄິດໄລ່ຫາຄ່າສະເລ່ຍຮາໂມນິກຂອງ a = 3 ແລະ b = 6?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"M ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: ""
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຄິດໄລ່ຫຼາຍເສດສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄິດໄລ່: [ a / (a - b) ] + [ b / (b - a) ]"}
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຄິດໄລ່ເສດສ່ວນຊ້ອນຕົວເລກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນເສດສ່ວນ: (3/10 + 2/5) / (4/15 - 1/2)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເທົ່າກັບ -"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"/ 14"}</span>
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
          <span key="1-1">{"(1) 1 (ຄິດໄລ່: (2x-3 - (x-1)) / (x-2) = (x-2) / (x-2) = 1)"}</span>,
          <span key="1-2">{"(2) x - 2 (ຄິດໄລ່: (x+2) / ((x-2)(x+2)) = 1 / (x-2))"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 90x³ (ຄິດໄລ່: LCM(10, 15, 18) = 90, LCM(x, x³, x²) = x³)"}</span>,
          <span key="2-2">{"(2) x + 2 (ຄິດໄລ່: LCM((x-2)(x+2), x(x-2)) = x(x-2)(x+2))"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"2 (ຄິດໄລ່: [ (x+1) - (x-1) ] / (x²-1) = 2 / (x²-1))"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"x - 1 (ຄິດໄລ່: ((x+1)/x) / ((x-1)/x) = (x+1)/(x-1))"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"a + d (ຫຼື d + a) (ຄິດໄລ່: f = ad / (a + d))"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"4 (ຄິດໄລ່: 2 / (1/3 + 1/6) = 2 / (3/6) = 2 / (1/2) = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1 (ຄິດໄລ່: a / (a-b) - b / (a-b) = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"3 (ຄິດໄລ່: (7/10) / (8/30 - 15/30) = (7/10) / (-7/30) = -3 = -42/14)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ເຈົ້າໄດ້ຜ່ານການບວກ, ລົບ ແລະ ການຈັດການກັບເສດສ່ວນພະຫຸພົດທີ່ສັບສົນໄດ້ແລ້ວ. ນີ້ແມ່ນຫົວໃຈຫຼັກໃນການຄຳນວນລະບົບສົມຜົນ ແລະ ຕຳລາຂັ້ນສູງຕໍ່ໄປ!"
  }
};
