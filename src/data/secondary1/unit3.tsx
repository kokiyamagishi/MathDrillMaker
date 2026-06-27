import React from "react";
import { UnitData } from "../units2";

export const unit3Data: UnitData = {
  unitNumber: 3,
  unitTitle: "ພາກທີ I - ບົດທີ 3: ການບວກ ແລະ ການລົບຈຳນວນທຳມະຊາດ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະຂອງການບວກ ແລະ ການລົບຈຳນວນທຳມະຊາດ (ຄຸນລັກສະນະສະຫຼັບບ່ອນ, ຄຸນລັກສະນະໂຮມໝູ່) ແລະ ການແກ້ໂຈດບັນຫາຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 14-20",
  subSections: [
    {
      title: "1. ການບວກຈຳນວນທຳມະຊາດ ແລະ ຄຸນລັກສະນະ",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ຄຸນລັກສະນະຂອງການບວກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການບວກແມ່ນການລວມເອົາສອງ ຫຼື ຫຼາຍຈຳນວນເຂົ້າກັນ ເຊິ່ງຜົນໄດ້ຮັບເອີ້ນວ່າ ຜົນບວກ."}
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄຸນລັກສະນະພື້ນຖານຂອງການບວກ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.8" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>{"ຄຸນລັກສະນະສະຫຼັບບ່ອນ (Commutative): "}</strong>
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{"a + b = b + a"}</span>
                <div style={{ paddingLeft: "16px", color: "#555", fontSize: "1.2rem" }}>{"ຕົວຢ່າງ: 12 + 25 = 25 + 12 = 37."}</div>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>{"ຄຸນລັກສະນະໂຮມໝູ່ (Associative): "}</strong>
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{"(a + b) + c = a + (b + c)"}</span>
                <div style={{ paddingLeft: "16px", color: "#555", fontSize: "1.2rem" }}>{"ຕົວຢ່າງ: (5 + 7) + 3 = 5 + (7 + 3) = 15."}</div>
              </li>
            </ul>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"(a + b) + c = a + (b + c)"}
              </span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ນຳໃຊ້ຄຸນລັກສະນະໂຮມໝູ່ເພື່ອໂຮມຈຳນວນທີ່ບວກກັນແລ້ວລົງທ້າຍດ້ວຍ 0 ເຂົ້າກັນກ່ອນ ຈະຊ່ວຍໃຫ້ຄິດໄລ່ງ່າຍຂຶ້ນຫຼາຍ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ໂດຍນຳໃຊ້ຄຸນລັກສະນະຂອງການບວກໃຫ້ໄວທີ່ສຸດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"75 + 57 + 25 = (75 + 25) + 57 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"140 + 89 + 60 = ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                  <span className="math">{"+"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                  <span className="math">{") + 89 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ເໝາະສົມໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"352 + 2591 = 2591 +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"(48 + 72) + 28 = 48 + ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{")"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການລົບຈຳນວນທຳມະຊາດ ແລະ ການພົວພັນກັບການບວກ",
      keyPoint: {
        title: "ການລົບ ແລະ ການພົວພັນລະຫວ່າງການບວກ-ການລົບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການລົບແມ່ນການຄິດໄລ່ຫາຄວາມແຕກຕ່າງລະຫວ່າງສອງຈຳນວນ. ຖ້າ a ແລະ b ແມ່ນສອງຈຳນວນທຳມະຊາດ ເຊິ່ງ a ≥ b, ຜົນລົບ a - b = c ໝາຍເຖິງຈຳນວນ c ທີ່ເມື່ອເອົາມາບວກກັບ b ແລ້ວເທົ່າກັບ a:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "12px", border: "1px dashed #2E7D32", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"a - b = c  ⇔  b + c = a"}
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ: 8 632 - 4 725 = 3 907 ເພາະວ່າ 4 725 + 3 907 = 8 632."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ: ໃນກຸ່ມຈຳນວນທຳມະຊາດ ℕ, ການລົບ a - b ຈະປະຕິບັດໄດ້ກໍຕໍ່ເມື່ອຕົວຕັ້ງລົບຫຼາຍກວ່າ ຫຼື ເທົ່າກັບຕົວລົບ (a ≥ b) ເທົ່ານັ້ນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກການພົວພັນການບວກ ແລະ ການລົບ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"x + 120 = 350 ⇔ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"760 - x = 240 ⇔ x ="}</span>
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
                {"ຈົ່ງຄິດໄລ່ຜົນລົບຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"4 725 - 3 907 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"2 961 - 2 609 ="}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຄວາມຮູ້ເລື່ອງການບວກ ແລະ ການລົບມາແກ້ໄຂໂຈດບັນຫາຕົວຈິງທີ່ມີຄວາມຊັບຊ້ອນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫານ້ຳໜັກລວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ທອງ ມີນ້ຳໜັກຕົວ 47 kg. ລາວໄດ້ແບກກະເປົາເຄື່ອງໜຶ່ງທີ່ມີນ້ຳໜັກ 8 kg ແລ້ວຂຶ້ນຢືນຊັ່ງນ້ຳໜັກ. ຖາມວ່ານ້ຳໜັກລວມທີ່ສະແດງເທິງໜ້າຈໍຊັ່ງນ້ຳໜັກຈະເທົ່າກັບຈັກກິໂລກຣາມ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ນ້ຳໜັກລວມແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"kg"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການປຽບທຽບໝາກບີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ຄຳມີ ມີໝາກບີ 38 ໜ່ວຍ. ທ້າວ ຄຳເພຍ ມີໝາກບີ 35 ໜ່ວຍ. ນາງ ມອນລີ ມີໝາກບີໜ້ອຍກວ່າ ທ້າວ ຄຳເພຍ 7 ໜ່ວຍ. ຈົ່ງຊອກຫາຈຳນວນໝາກບີທັງໝົດຂອງທັງສາມຄົນລວມກັນ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໝາກບີທັງໝົດມີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ໜ່ວຍ"}</span>
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
            {"ການຄິດໄລ່ແບບສົມທົບຫຼັກການ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຜົນບວກຂອງ: "}<strong>{"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"}</strong>{" ໂດຍຈັບຄູ່ໃຫ້ໄດ້ 10 ຢ່າງວ່ອງໄວ:"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຜົນບວກແມ່ນ:"}</span>
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
            {"ໂຈດບັນຫາການລົບປຽບທຽບໄລຍະທາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໄລຍະທາງແຕ່ເຮືອນ ທ້າວ ສົມສັກ ຫາ ໂຮງຮຽນແມ່ນ 1 250 m. ໄລຍະທາງແຕ່ເຮືອນ ທ້າວ ຄຳດີ ຫາ ໂຮງຮຽນແມ່ນ 890 m. ຖາມວ່າ ເຮືອນຂອງທ້າວ ສົມສັກ ຢູ່ຫ່າງຈາກໂຮງຮຽນຫຼາຍກວ່າເຮືອນຂອງທ້າວ ຄຳດີ ຈັກແມັດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຫຼາຍກວ່າ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            <span>{"ແມັດ"}</span>
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
          <span key="1-1">{"(1) 157"}</span>,
          <span key="1-2">{"(2) (140 + 60) + 89 = 200 + 89 = 289"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 352"}</span>,
          <span key="2-2">{"(2) 72 + 28 (ຫຼື 72 + 28 = 100)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 230"}</span>,
          <span key="3-2">{"(2) 520"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"(1) 818"}</span>,
          <span key="4-2">{"(2) 352"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"55 kg (ຄິດໄລ່: 47 + 8 = 55 kg)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"101 ໜ່ວຍ (ນາງ ມອນລີ ມີ 35 - 7 = 28 ໜ່ວຍ. ທັງໝົດລວມກັນ: 38 + 35 + 28 = 101 ໜ່ວຍ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"45 (ຄິດໄລ່ໂດຍຈັບຄູ່: (1+9) + (2+8) + (3+7) + (4+6) + 5 = 10 × 4 + 5 = 45)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"360 ແມັດ (ຄິດໄລ່: 1 250 - 890 = 360 m)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການນຳໃຊ້ຄຸນລັກສະນະສະຫຼັບບ່ອນ ແລະ ໂຮມໝູ່ຂອງການບວກ ຈະຊ່ວຍໃຫ້ການຄິດໄລ່ເລກຂອງເຈົ້າໄວຂຶ້ນ ແລະ ຖືກຕ້ອງຫຼາຍຂຶ້ນສະເໝີ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
