import React from "react";
import { UnitData } from "../units2";

export const unit40Data: UnitData = {
  unitNumber: 40,
  unitTitle: "ພາກທີ V - ບົດທີ 40: ສະຖິຕິພື້ນຖານ (Basic Statistics)",
  unitGoal: "ຮຽນຮູ້ວິທີການຄິດໄລ່ຄ່າສະເລ່ຍ (Mean), ຄ່າກາງ (Median), ຄ່ານິຍົມ (Mode), ແລະ ຄວາມເຂົ້າໃຈກ່ຽວກັບການແຈກແຈງຄວາມຖີ່ຂອງຂໍ້ມູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 200-205",
  subSections: [
    {
      title: "1. ຄ່າສະເລ່ຍ, ຄ່າກາງ ແລະ ຄ່ານິຍົມ (Mean, Median & Mode of Data)",
      keyPoint: {
        title: "ຄ່າວັດແທກທ່າອ່ຽງເຂົ້າສູ່ສ່ວນກາງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນສະຖິຕິພັນລະນາ, ຄ່າວັດແທກທ່າອ່ຽງເຂົ້າສູ່ສ່ວນກາງທີ່ນິຍົມໃຊ້ມີ 3 ຄ່າ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" , whiteSpace: "nowrap"}}>{"1. ຄ່າສະເລ່ຍຄະນິດ (Arithmetic Mean - x̄):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"x̄ = (Σ x_i) / N"}
                <br />
                {"(ຜົນບວກຂອງຂໍ້ມູນທັງໝົດ ຫານໃຫ້ ຈຳນວນຂໍ້ມູນ)"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"2. ຄ່າກາງ (Median - Med):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແມ່ນຄ່າທີ່ຢູ່ເຄິ່ງກາງຂອງຂໍ້ມູນ ເມື່ອໄດ້ຈັດລຽງຂໍ້ມູນຈາກນ້ອຍຫາຫຼາຍ."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"3. ຄ່ານິຍົມ (Mode - Mod):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແມ່ນຂໍ້ມູນທີ່ມີຄວາມຖີ່ສູງສຸດ (ປະກົດຕົວຫຼາຍທີ່ສຸດໃນຂໍ້ມູນ)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຂໍ້ມູນ 3, 5, 5, 6, 7, 10 ⇒ x̄ = 36/6 = 6. ຄ່າກາງ Med = (5+6)/2 = 5.5. ຄ່ານິຍົມ Mod = 5!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາ x̄, Med, Mod ຂອງຂໍ້ມູນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ຊຸດຂໍ້ມູນ: 2, 4, 4, 5, 6, 9."}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າສະເລ່ຍ x̄ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{" ແລະ ຄ່ານິຍົມ Mod ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າກາງ Med ="}</span>
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
                {"ຈົ່ງຊອກຫາ x̄, Med, Mod ຂອງຂໍ້ມູນຕໍ່ໄປນີ້ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"ໃຫ້ຂໍ້ມູນ: 2, 4, 4, 5, 10. ຊອກຫາ x̄ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{" ແລະ Mod ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແຈກແຈງຄວາມຖີ່ ແລະ ຄ່າສະເລ່ຍຖ່ວງນ້ຳໜັກ (Frequency Distribution & Weighted Mean)",
      keyPoint: {
        title: "ຄ່າສະເລ່ຍຖ່ວງນ້ຳໜັກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຂໍ້ມູນມີຄວາມຖີ່ (f_i) ປະກົດຂຶ້ນ, ເຮົາຈະໃຊ້ສູດຄ່າສະເລ່ຍຖ່ວງນ້ຳໜັກ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <strong style={{ fontSize: "1.5rem", color: "#00796B" }}>{"x̄ = (Σ f_i × x_i) / (Σ f_i)"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຄະແນນ 2 (ຄວາມຖີ່ 3), ຄະແນນ 4 (ຄວາມຖີ່ 2), ຄະແນນ 5 (ຄວາມຖີ່ 5) ⇒ x̄ = (2×3 + 4×2 + 5×5) / 10 = 3.9!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າສະເລ່ຍຈາກຕາຕະລາງຄວາມຖີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄະແນນກວດກາຂອງນັກຮຽນກຸ່ມໜຶ່ງ: ຄະແນນ 5 (ມີ 2 ຄົນ), ຄະແນນ 7 (ມີ 5 ຄົນ), ຄະແນນ 10 (ມີ 3 ຄົນ). ຈົ່ງຊອກຫາຄ່າສະເລ່ຍ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: x̄ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
            {"ຈົ່ງຄິດໄລ່ຄ່າສະເລ່ຍຈາກຕາຕະລາງຄວາມຖີ່ (ຊຸດທີ 2): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: "12px 0", lineHeight: "1.6" }}>
            {"ໃນຫ້ອງຮຽນໜຶ່ງ, ຄະແນນສອບເສັງມີຄວາມຖີ່ດັ່ງນີ້: ຄະແນນ 6 ມີ 3 ຄົນ, ຄະແນນ 8 ມີ 5 ຄົນ, ຄະແນນ 10 ມີ 2 ຄົນ. ຈົ່ງຊອກຫາຄ່າສະເລ່ຍ (x̄)?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x̄ ="}</span>
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
              {"ໂຈດຊອກຫາຄ່າກາງຂອງຄວາມສູງ (Median of Heights): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມສູງ (cm) ຂອງນັກຮຽນ 5 ຄົນແມ່ນ: 150, 163, 155, 152, 160. ຈົ່ງຊອກຫາຄ່າກາງ (Median)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: Med ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" cm"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ຈັດລຽງຂໍ້ມູນຈາກນ້ອຍຫາຫຼາຍ: 150, 152, 155, 160, 163. ຄ່າທີ່ຢູ່ທາງກາງ (ລຳດັບທີ 3) ແມ່ນ 155!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຊອກຫາຄ່ານິຍົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຄ່ານິຍົມ (Mode) ຂອງຊຸດຂໍ້ມູນ 12, 15, 12, 18, 12, 15, 20 ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
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
          <span key="1-1">{"5 (ຄິດໄລ່: x̄ = (2 + 4 + 4 + 5 + 6 + 9) / 6 = 30 / 6 = 5)"}</span>,
          <span key="1-2">{"4 (ຄິດໄລ່: 4 ປະກົດຂຶ້ນ 2 ເທື່ອ, ຫຼາຍທີ່ສຸດ)"}</span>,
          <span key="1-3">{"4.5 (ຄິດໄລ່: ຂໍ້ມູນຈັດລຽງແລ້ວມີ 4 ແລະ 5 ເປັນຄ່າກາງ ⇒ Med = (4+5)/2 = 4.5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u40-ans-2-1">{"5"}</span>,
          <span key="u40-ans-2-2">{"4"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2">{"7.5 (ຄິດໄລ່: x̄ = (5×2 + 7×5 + 10×3) / 10 = (10 + 35 + 30) / 10 = 75 / 10 = 7.5)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="u40-ans-4-1">{"7.8"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3">{"155 (ຄິດໄລ່: 150, 152, [155], 160, 163)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"155 (ຄິດໄລ່: Med = 155)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"12 (ຄິດໄລ່: 12 ປະກົດຂຶ້ນ 3 ເທື່ອ)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ເຈົ້າເຂົ້າໃຈວິທີວິເຄາະສະຖິຕິຂັ້ນພື້ນຖານແລ້ວ. ຄ່າເຫຼົ່ານີ້ຖືກນຳໃຊ້ຢ່າງກວ້າງຂວາງໃນການວິເຄາະຂໍ້ມູນຊີວິດປະຈຳວັນ!"
  }
};
