import React from "react";
import { UnitData } from "../units2";

export const unit41Data: UnitData = {
  unitNumber: 41,
  unitTitle: "ພາກທີ V - ບົດທີ 41: ການກະຈາຍຂອງຂໍ້ມູນ (Dispersion of Data)",
  unitGoal: "ຮຽນຮູ້ວິທີຊອກຫາພິໄສ (Range), ຄ່າຜັນປ່ຽນ (Variance - s²), ແລະ ຄ່າຜັນປ່ຽນມາດຕະຖານ (Standard Deviation - s) ເພື່ອວັດແທກການກະຈາຍຂອງຂໍ້ມູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 206-211",
  subSections: [
    {
      title: "1. ພິໄສ, ຄ່າຜັນປ່ຽນ ແລະ ຄ່າຜັນປ່ຽນມາດຕະຖານ (Range, Variance & Standard Deviation)",
      keyPoint: {
        title: "ຄ່າວັດແທກການກະຈາຍຂອງຂໍ້ມູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອເຂົ້າໃຈຄວາມແຕກຕ່າງ ຫຼື ການກະຈາຍຂອງຂໍ້ມູນ, ເຮົາໃຊ້ຄ່າວັດແທກຕໍ່ໄປນີ້:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"1. ພິໄສ (Range):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"Range = x_max - x_min"}
                <br />
                {"(ຜົນລົບລະຫວ່າງຄ່າສູງສຸດ ແລະ ຄ່ານ້ອຍສຸດຂອງຂໍ້ມູນ)"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"2. ຄ່າຜັນປ່ຽນ (Variance - s²):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"s² = Σ (x_i - x̄)² / N"}
                <br />
                {"(ຄ່າສະເລ່ຍຂອງຜົນບວກກຳລັງສອງຂອງຄວາມແຕກຕ່າງລະຫວ່າງຂໍ້ມູນແຕ່ລະຕົວ ກັບຄ່າສະເລ່ຍ)"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"3. ຄ່າຜັນປ່ຽນມາດຕະຖານ (Standard Deviation - s):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"s = √s²"}
                <br />
                {"(ແມ່ນຮາກຂັ້ນສອງຂອງຄ່າຜັນປ່ຽນ, ມັນມີຫົວໜ່ວຍດຽວກັນກັບຂໍ້ມູນເບື້ອງຕົ້ນ)"}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຂໍ້ມູນ 2, 4, 6 ⇒ x̄ = 4. ຜົນບວກກຳລັງສອງຄວາມແຕກຕ່າງ = (2-4)² + (4-4)² + (6-4)² = 4 + 0 + 4 = 8. ຄ່າຜັນປ່ຽນ s² = 8/3!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາພິໄສຂອງຂໍ້ມູນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ຊຸດຂໍ້ມູນ: 3, 8, 15, 2, 20, 11 ⇒ ພິໄສ (Range) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໃຫ້ຊຸດຂໍ້ມູນ: 120, 105, 140, 95, 110 ⇒ ພິໄສ (Range) ="}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າຜັນປ່ຽນ (Variance): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ຊຸດຂໍ້ມູນ: 1, 2, 3, 4, 5. ເຮົາມີຄ່າສະເລ່ຍ x̄ = 3. ຈົ່ງຄິດໄລ່ຄ່າຜັນປ່ຽນ s² (ຫານດ້ວຍ N)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: s² ="}</span>
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
              {"ໂຈດການປ່ຽນແປງຂໍ້ມູນ (Effect of Adding a Constant to Data): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າຂໍ້ມູນແຕ່ລະຕົວໃນຊຸດຂໍ້ມູນໜຶ່ງ ຖືກບວກຕື່ມດ້ວຍ 5. ຄ່າຜັນປ່ຽນມາດຕະຖານ s ຂອງຂໍ້ມູນຊຸດໃໝ່ ຈະມີການປ່ຽນແປງແນວໃດ ເມື່ອທຽບໃສ່ຊຸດເກົ່າ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: "}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" (ເລືອກ: ເພີ່ມຂຶ້ນ 5 / ຫຼຸດລົງ 5 / ຄືເກົ່າ)"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ເມື່ອບວກແຕ່ລະຂໍ້ມູນດ້ວຍຈຳນວນຈິງ C ໃດໆ, ຄ່າສະເລ່ຍຈະເພີ່ມຂຶ້ນ C ແຕ່ລະດັບການກະຈາຍ (ຄ່າຜັນປ່ຽນມາດຕະຖານ) ຈະບໍ່ມີການປ່ຽນແປງ ⇒ ຄືເກົ່າ!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການກະຈາຍເປັນສູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຂໍ້ມູນທຸກຕົວໃນຊຸດຂໍ້ມູນມີຄ່າເທົ່າກັນທັງໝົດ (ຕົວຢ່າງ: 5, 5, 5, 5). ຄ່າຜັນປ່ຽນມາດຕະຖານ s ຈະມີຄ່າເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: s ="}</span>
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
          <span key="1-1">{"18 (ຄິດໄລ່: ພິໄສ = 20 - 2 = 18)"}</span>,
          <span key="1-2">{"45 (ຄິດໄລ່: ພິໄສ = 140 - 95 = 45)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"2 (ຄິດໄລ່: ຜົນບວກກຳລັງສອງ = (1-3)² + (2-3)² + (3-3)² + (4-3)² + (5-3)² = 4 + 1 + 0 + 1 + 4 = 10. ຄ່າຜັນປ່ຽນ s² = 10/5 = 2)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"ຄືເກົ່າ (ຄິດໄລ່: ການບວກຄ່າຄົງທີ່ບໍ່ປ່ຽນແປງການກະຈາຍ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"ຄືເກົ່າ (ຄິດໄລ່: s ໃໝ່ = s ເກົ່າ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: ເພາະບໍ່ມີການກະຈາຍຂອງຂໍ້ມູນເລີຍ, ທຸກຕົວເທົ່າກັບຄ່າສະເລ່ຍ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ຄ່າຜັນປ່ຽນມາດຕະຖານແມ່ນເຄື່ອງມືຫຼັກໃນການວັດແທກຄວາມບໍ່ແນ່ນອນ ແລະ ຄວາມສ່ຽງໃນສະຖິຕິ ແລະ ການເງິນ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
