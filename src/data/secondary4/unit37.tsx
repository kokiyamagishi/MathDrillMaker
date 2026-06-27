import React from "react";
import { UnitData } from "../units2";

export const unit37Data: UnitData = {
  unitNumber: 37,
  unitTitle: "ພាកທີ IV - ບົດທີ 37: ວົງມົນ (Circles)",
  unitGoal: "ຮຽນຮູ້ສົມຜົນມາດຕະຖານຂອງວົງມົນ (x - a)² + (y - b)² = R² ທີ່ມີຈຸດໃຈກາງ I(a, b) ແລະ ລັດສະໝີ R, ພ້ອມທັງສົມຜົນທົ່ວໄປ x² + y² - 2ax - 2by + c = 0",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 184-188",
  subSections: [
    {
      title: "1. ສົມຜົນມາດຕະຖານ ແລະ ສົມຜົນທົ່ວໄປ (Standard & General Equations of a Circle)",
      keyPoint: {
        title: "ຮູບຮ່າງສົມຜົນວົງມົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນລະບົບເສັ້ນເຄົ້າ Oxy, ວົງມົນ C ທີ່ມີຈຸດໃຈກາງ I(a, b) ແລະ ລັດສະໝີ R ມີສອງຮູບຮ່າງສົມຜົນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"1. ສົມຜົນມາດຕະຖານ (Standard Form):"}</span>
              <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", marginTop: "8px", fontWeight: "bold", color: "#0D47A1" }}>
                {"(x - a)² + (y - b)² = R²"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"2. ສົມຜົນທົ່ວໄປ (General Form):"}</span>
              <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", marginTop: "8px", fontWeight: "bold", color: "#2E7D32" }}>
                {"x² + y² - 2ax - 2by + c = 0"}
              </p>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ເຊິ່ງ c = a² + b² - R² ພາຍໃຕ້ເງື່ອນໄຂ a² + b² - c > 0."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ວົງມົນ (x - 3)² + (y + 2)² = 16 ມີຈຸດໃຈກາງ I(3, -2) ແລະ ລັດສະໝີ R = √16 = 4!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຈຸດໃຈກາງ ແລະ ລັດສະໝີຂອງວົງມົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ວົງມົນ C: (x - 5)² + (y - 1)² = 9 ⇒ ຈຸດໃຈກາງ I("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{") ແລະ ລັດສະໝີ R ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ວົງມົນ C: (x + 2)² + (y - 3)² = 25 ⇒ ຈຸດໃຈກາງ I("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{") ແລະ ລັດສະໝີ R ="}</span>
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
                {"ຈົ່ງແປງສົມຜົນທົ່ວໄປໃຫ້ເປັນສົມຜົນມາດຕະຖານ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ວົງມົນ C: x² + y² - 4x + 6y - 3 = 0. ຈົ່ງຊອກຫາຮູບຮ່າງມາດຕະຖານ (x - a)² + (y - b)² = R²:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"ສົມຜົນມາດຕະຖານແມ່ນ (x -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² + (y +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² ="}</span>
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
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາສົມຜົນເສັ້ນສໍາຜັດວົງມົນ (Tangent to a Circle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊອກຫາສົມຜົນເສັ້ນສໍາຜັດ Δ ຂອງວົງມົນ x² + y² = 25 ຢູ່ເມັດ M(3, 4) ພາຍໃຕ້ຮູບຮ່າງ 3x + 4y = C?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: C ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ເສັ້ນສໍາຜັດວົງມົນ x² + y² = R² ຢູ່ເມັດ M(x₀, y₀) ມີສົມຜົນແມ່ນ x₀·x + y₀·y = R². ດັ່ງນັ້ນ ສົມຜົນແມ່ນ 3x + 4y = 25 ⇒ C = 25!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຊອກຫາຈຸດໃຈກາງວົງມົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ວົງມົນ C: x² + y² + 8x - 10y = 0 ມີຈຸດໃຈກາງ I(a, b) ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: I("}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            <span>{", "}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            <span>{")"}</span>
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
          <span key="1-1">{"5 (ຄິດໄລ່: x-5 = 0 ⇒ a = 5)"}</span>,
          <span key="1-2">{"1 (ຄິດໄລ່: y-1 = 0 ⇒ b = 1)"}</span>,
          <span key="1-3">{"3 (ຄິດໄລ່: R² = 9 ⇒ R = 3)"}</span>,
          <span key="1-4">{"-2 (ຄິດໄລ່: x+2 = 0 ⇒ a = -2)"}</span>,
          <span key="1-5">{"3 (ຄິດໄລ່: y-3 = 0 ⇒ b = 3)"}</span>,
          <span key="1-6">{"5 (ຄິດໄລ່: R² = 25 ⇒ R = 5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"2 (ຄິດໄລ່: x² - 4x = (x - 2)² - 4)"}</span>,
          <span key="2-2">{"3 (ຄິດໄລ່: y² + 6y = (y + 3)² - 9)"}</span>,
          <span key="2-3">{"16 (ຄິດໄລ່: (x - 2)² - 4 + (y + 3)² - 9 - 3 = 0 ⇒ (x-2)² + (y+3)² = 16)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"25 (ຄິດໄລ່: C = 3(3) + 4(4) = 9 + 16 = 25)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"25 (ຄິດໄລ່: C = 25)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"-4 (ຄິດໄລ່: a = -8/2 = -4)"}</span>,
          <span key="s2">{"5 (ຄິດໄລ່: b = 10/2 = 5)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ສົມຜົນວົງມົນເປັນສ່ວນປະກອບສຳຄັນຂອງເລຂາຄະນິດແບບວິເຄາະ. ການເຂົ້າໃຈທັງຮູບຮ່າງມາດຕະຖານ ແລະ ທົ່ວໄປ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ໂຈດໄດ້ຫຼາກຫຼາຍ!"
  }
};
