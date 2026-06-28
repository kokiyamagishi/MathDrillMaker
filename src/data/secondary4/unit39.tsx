import React from "react";
import { UnitData } from "../units2";

export const unit39Data: UnitData = {
  unitNumber: 39,
  unitTitle: "ພាកທີ IV - ບົດທີ 39: ໜ້າກົມ (Spheres)",
  unitGoal: "ຮຽນຮູ້ສົມຜົນມາດຕະຖານຂອງໜ້າກົມ (x - a)² + (y - b)² + (z - c)² = R² ທີ່ມີຈຸດໃຈກາງ I(a, b, c) ແລະ ລັດສະໝີ R, ພ້ອມທັງສົມຜົນທົ່ວໄປ ແລະ ການກວດສອບຄວາມຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 195-199",
  subSections: [
    {
      title: "1. ສົມຜົນມາດຕະຖານ ແລະ ສົມຜົນທົ່ວໄປ (Standard & General Equations of a Sphere)",
      keyPoint: {
        title: "ຮູບຮ່າງສົມຜົນໜ້າກົມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນລະບົບເສັ້ນເຄົ້າ Oxyz, ໜ້າກົມ S ທີ່ມີຈຸດໃຈກາງ I(a, b, c) ແລະ ລັດສະໝີ R ມີສອງຮູບຮ່າງສົມຜົນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }, whiteSpace: "nowrap"}>{"1. ສົມຜົນມາດຕະຖານ (Standard Form):"}</span>
              <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", marginTop: "8px", fontWeight: "bold", color: "#0D47A1" }}>
                {"(x - a)² + (y - b)² + (z - c)² = R²"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"2. ສົມຜົນທົ່ວໄປ (General Form):"}</span>
              <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", marginTop: "8px", fontWeight: "bold", color: "#2E7D32" }}>
                {"x² + y² + z² - 2ax - 2by - 2cz + d = 0"}
              </p>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ເຊິ່ງ d = a² + b² + c² - R² ພາຍໃຕ້ເງື່ອນໄຂ a² + b² + c² - d > 0."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໜ້າກົມ (x - 1)² + (y + 3)² + (z - 2)² = 36 ມີຈຸດໃຈກາງ I(1, -3, 2) ແລະ ລັດສະໝີ R = √36 = 6!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຈຸດໃຈກາງ ແລະ ລັດສະໝີຂອງໜ້າກົມ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໜ້າກົມ S: (x - 2)² + (y - 5)² + (z - 3)² = 16 ⇒ ຈຸດໃຈກາງ I("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{") ແລະ ລັດສະໝີ R ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໜ້າກົມ S: (x + 1)² + (y - 3)² + z² = 49 ⇒ ຈຸດໃຈກາງ I("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
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
                {"ໃຫ້ໜ້າກົມ S: x² + y² + z² - 4x + 6y - 2z - 2 = 0. ຈົ່ງຊອກຫາຮູບຮ່າງມາດຕະຖານ (x - a)² + (y - b)² + (z - c)² = R²:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"ສົມຜົນມາດຕະຖານແມ່ນ (x -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² + (y +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² + (z -"}</span>
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
              {"ໂຈດຊອກຫາສົມຜົນໜ້າກົມຜ່ານຈຸດ (Sphere Passing Through Point): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊອກຫາສົມຜົນໜ້າກົມທີ່ມີຈຸດໃຈກາງ I(1, 2, 2) ແລະ ຜ່ານຈຸດເຄົ້າ O(0, 0, 0) ພາຍໃຕ້ຮູບຮ່າງ (x - 1)² + (y - 2)² + (z - 2)² = R²?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: R² ="}</span>
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
            {"ຊອກຫາຈຸດໃຈກາງໜ້າກົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໜ້າກົມ S: x² + y² + z² - 6x + 8z = 0 ມີຈຸດໃຈກາງ I(a, b, c) ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: I("}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            <span>{", "}</span>
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
          <span key="1-1">{"2 (ຄິດໄລ່: x-2 = 0 ⇒ a = 2)"}</span>,
          <span key="1-2">{"5 (ຄິດໄລ່: y-5 = 0 ⇒ b = 5)"}</span>,
          <span key="1-3">{"3 (ຄິດໄລ່: z-3 = 0 ⇒ c = 3)"}</span>,
          <span key="1-4">{"4 (ຄິດໄລ່: R² = 16 ⇒ R = 4)"}</span>,
          <span key="1-5">{"-1 (ຄິດໄລ່: x+1 = 0 ⇒ a = -1)"}</span>,
          <span key="1-6">{"3 (ຄິດໄລ່: y-3 = 0 ⇒ b = 3)"}</span>,
          <span key="1-7">{"0 (ຄິດໄລ່: z = 0 ⇒ c = 0)"}</span>,
          <span key="1-8">{"7 (ຄິດໄລ່: R² = 49 ⇒ R = 7)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"2 (ຄິດໄລ່: x² - 4x = (x - 2)² - 4)"}</span>,
          <span key="2-2">{"3 (ຄິດໄລ່: y² + 6y = (y + 3)² - 9)"}</span>,
          <span key="2-3">{"1 (ຄິດໄລ່: z² - 2z = (z - 1)² - 1)"}</span>,
          <span key="2-4">{"16 (ຄິດໄລ່: (x - 2)² - 4 + (y + 3)² - 9 + (z - 1)² - 1 - 2 = 0 ⇒ (x-2)² + (y+3)² + (z-1)² = 16)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"9 (ຄິດໄລ່: R² = IO² = 1² + 2² + 2² = 9)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"9 (ຄິດໄລ່: R² = 9)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"3 (ຄິດໄລ່: a = -(-6)/2 = 3)"}</span>,
          <span key="s2">{"0 (ຄິດໄລ່: b = 0)"}</span>,
          <span key="s3">{"-4 (ຄິດໄລ່: c = -8/2 = -4)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ສົມຜົນໜ້າກົມເປັນການຂະຫຍາຍແນວຄິດສົມຜົນວົງມົນຈາກ 2 ມິຕິ ໄປຫາ 3 ມິຕິ. ເຈົ້າເຮັດໄດ້ດີຫຼາຍ!"
  }
};
