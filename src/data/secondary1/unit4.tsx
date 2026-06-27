import React from "react";
import { UnitData } from "../units2";

export const unit4Data: UnitData = {
  unitNumber: 4,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ການບວກ ແລະ ການລົບຈຳນວນຖ້ວນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການບວກ ແລະ ການລົບຈຳນວນຖ້ວນ (ທີ່ມີເຄື່ອງໝາຍຄືກັນ ແລະ ຕ່າງກັນ), ການຄິດໄລ່ສຳນວນທີ່ມີວົງເລັບ ແລະ ການຊອກຫາຕົວລັບ x",
  textbookRef: "ปຶ້ມແບບຮຽນ ມ.1 ໜ້າ 25-31",
  subSections: [
    {
      title: "1. ການບວກຈຳນວນຖ້ວນ",
      keyPoint: {
        title: "ຫຼັກການບວກຈຳນວນຖ້ວນທີ່ມີເຄື່ອງໝາຍຄືກັນ ແລະ ຕ່າງກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"1. "}<strong>{"ການບວກຈຳນວນຖ້ວນທີ່ມີເຄື່ອງໝາຍຄືກັນ: "}</strong>{" ເອົາໄລຍະຫ່າງຈາກ 0 ມາບວກກັນ ແລ້ວຮັກສາເຄື່ອງໝາຍເດີມໄວ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"(+5) + (+3) = +8 (ຫຼື 5 + 3 = 8)"}</li>
              <li>{"(-5) + (-3) = -8"}</li>
            </ul>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"2. "}<strong>{"ການບວກຈຳນວນຖ້ວນທີ່ມີເຄື່ອງໝາຍຕ່າງກັນ: "}</strong>{" ເອົາໄລຍະຫ່າງຫາ 0 ຕົວທີ່ຫຼາຍກວ່າມາລົບໃຫ້ຕົວທີ່ນ້ອຍກວ່າ ແລ້ວເອົາເຄື່ອງໝາຍຕາມຕົວທີ່ມີໄລຍະຫ່າງຫາ 0 ຫຼາຍກວ່ານັ້ນ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"(-8) + (+6) = -2 (ເພາະວ່າ 8 > 6, ເຄື່ອງໝາຍເປັນຂອງ -8)"}</li>
              <li>{"(-3) + (+7) = +4 (ເພາະວ່າ 7 > 3, ເຄື່ອງໝາຍເປັນຂອງ +7)"}</li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກຂອງສອງຈຳນວນກົງກັນຂ້າມກັນ ຈະເທົ່າກັບ 0 ສະເໝີ! ເຊັ່ນ: (-5) + (+5) = 0.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນບວກຈຳນວນຖ້ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"(-15) + (-12) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"(-18) + (+15) ="}</span>
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
                {"ຈົ່ງຄິດໄລ່ຜົນບວກຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"(+12) + (-5) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"(-19) + (-18) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການລົບຈຳນວນຖ້ວນ ແລະ ສຳນວນທີ່ມີວົງເລັບ",
      keyPoint: {
        title: "ຫຼັກການລົບຈຳນວນຖ້ວນ ແລະ ການປ່ຽນເປັນການບວກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອຄິດໄລ່ຜົນລົບຂອງສອງຈຳນວນຖ້ວນ, ເຮົາຈະເອົາຕົວຕັ້ງລົບບວກກັບຈຳນວນກົງກັນຂ້າມຂອງຕົວລົບ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"a - b = a + (-b)"}
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"3 - (-5) = 3 + 5 = 8"}</li>
              <li>{"-3 - (-9) = -3 + 9 = 6"}</li>
              <li>{"-12 - (+5) = -12 + (-5) = -17"}</li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ: ລົບຄູນລົບເປັນບວກ -(-x) = +x ແລະ ລົບຄູນບວກເປັນລົບ -(+x) = -x!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນລົບຈຳນວນຖ້ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"(-16) - (+11) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"(-6) - (-15) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກສົມຜົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"x + (-7) = 15 ⇔ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"x - (-9) = -4 ⇔ x ="}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດເຄື່ອງໝາຍ ແລະ ວົງເລັບໃຫ້ດີໆ ກ່ອນຈະທຳການຄິດໄລ່ສຳນວນທີ່ມີຫຼາຍຂັ້ນຕອນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຄິດໄລ່ສຳນວນທີ່ມີວົງເລັບ ແລະ ວົງຂໍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນ: "}
              <strong style={{ color: "#E65100" }}>{"A = -18 - [(-15) + (+12) - (-7)] + (+15)"}</strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: A ="}</span>
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
              {"ໂຈດແກ້ສົມຜົນຊອກຫາຕົວລັບ x: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກສົມຜົນ: "}
              <strong style={{ color: "#E65100" }}>{"(19 - 3) + x = (25 - 18)"}</strong>
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
            {"ການຄິດໄລ່ຜົນບວກຫຼາຍພົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຄິດໄລ່ຜົນບວກ: "}
            <strong>{"B = (-18) + (-15) + (+12) + (-7) + (+15)"}</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: B ="}</span>
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
            {"ໂຈດແກ້ໄຂຕົວລັບ x ຂັ້ນສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກເງື່ອນໄຂ: "}<strong>{"(-15) - x = 8"}</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) -27"}</span>,
          <span key="1-2">{"(2) -3"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) +7 (ຫຼື 7)"}</span>,
          <span key="2-2">{"(2) -37"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) -27"}</span>,
          <span key="3-2">{"(2) +9 (ຫຼື 9)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"(1) 22 (ຄິດໄລ່: x = 15 - (-7) = 15 + 7 = 22)"}</span>,
          <span key="4-2">{"(2) -13 (ຄິດໄລ່: x = -4 + (-9) = -13)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"-7 (ຄິດໄລ່: A = -18 - [-15 + 12 + 7] + 15 = -18 - [4] + 15 = -22 + 15 = -7)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"-9 (ຄິດໄລ່: 16 + x = 7 ⇔ x = 7 - 16 = -9)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"-13 (ຄິດໄລ່ໂດຍໂຮມໝູ່: (-15 + 15) + (-18 - 7) + 12 = 0 - 25 + 12 = -13)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"-23 (ຄິດໄລ່: -15 - x = 8 ⇔ x = -15 - 8 = -23)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຮຽນຮູ້ວິທີບວກ ແລະ ລົບຈຳນວນຖ້ວນ ພ້ອມທັງການແກ້ສົມຜົນທີ່ມີ x ເປັນພື້ນຖານຫຼັກໃນການຮຽນພຶດຊະຄະນິດໃນອະນາຄົດ. ໝັ່ນຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
