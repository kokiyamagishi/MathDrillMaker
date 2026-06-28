import React from "react";
import { UnitData } from "../units2";

export const unit35Data: UnitData = {
  unitNumber: 35,
  unitTitle: "ພາກທີ IV - ບົດທີ 35: ຜົນຄູນສະກາແລຂອງສອງເວກເຕີ (Scalar Product of Two Vectors)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຜົນຄູນສະກາແລ u·v = |u|·|v|·cos(θ) ແລະ ສູດໃນລະບົບເສັ້ນເຄົ້າ Oxy, ຄິດໄລ່ມູນລະຫວ່າງສອງເວກເຕີ, ແລະ ນຳໃຊ້ເງື່ອນໄຂຕັ້ງສາກ u·v = 0",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 172-177",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ຄຸນລັກສະນະພື້ນຖານ (Definition & Geometric Meaning of Dot Product)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ຜົນຄູນສະກາແລ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຜົນຄູນສະກາແລຂອງສອງເວກເຕີ u ແລະ v (ທີ່ບໍ່ແມ່ນເວກເຕີສູນ) ແມ່ນຈຳນວນຈິງ ທີ່ກຳນົດດ້ວຍສູດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E1F5FE", borderRadius: "8px", border: "1px solid #81D4FA" }}>
              <strong style={{ fontSize: "1.5rem", color: "#0288D1" }}>{"u·v = |u| × |v| × cos(θ)"}</strong>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ເຊິ່ງ θ ແມ່ນມູນລະຫວ່າງສອງເວກເຕີ u ແລະ v (0° ≤ θ ≤ 180°)."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFF8E1", borderRadius: "8px", border: "1px solid #FFE082" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#F57F17" }}>{"ຄຸນລັກສະນະທີ່ຄວນຈື່:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"u·v = v·u (ສະຫຼັບບ່ອນໄດ້)"}</li>
                <li>{"u·(v + w) = u·v + u·w (ແຈກຢາຍໄດ້)"}</li>
                <li>{"u·u = |u|² (ຜົນຄູນສະກາແລຂອງເວກເຕີກັບຕົວມັນເອງ)"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຖ້າ |u| = 3, |v| = 4 ແລະ ມູນ θ = 60° (ເຊິ່ງ cos(60°) = 0.5) ⇒ u·v = 3 × 4 × 0.5 = 6!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນສະກາແລທາງເລຂາຄະນິດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແനນ, ລວມ 5 ຄະແനນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ |u| = 5, |v| = 6 ແລະ θ = 0° (cos(0°) = 1) ⇒ u·v ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໃຫ້ |u| = 4, |v| = 10 ແລະ θ = 120° (cos(120°) = -0.5) ⇒ u·v ="}</span>
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
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນສະກາແລທາງເລຂາຄະນິດ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ |u| = 4, |v| = 5 ແລະ ມຸມລະຫວ່າງ u ແລະ v ແມ່ນ 60° ⇒ u · v ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສູດໃນລະບົບເສັ້ນເຄົ້າ Oxy ແລະ ເງື່ອນໄຂຕັ້ງສາກ (Coordinate Formula & Orthogonality)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ດ້ວຍຕົວປະສານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນລະບົບເສັ້ນເຄົ້າ Oxy, ໃຫ້ສອງເວກເຕີ u = [x₁, y₁] ແລະ v = [x₂, y₂]:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <strong style={{ fontSize: "1.5rem", color: "#2E7D32" }}>{"u·v = x₁·x₂ + y₁·y₂"}</strong>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເງື່ອນໄຂຕັ້ງສາກ (Orthogonality): ສອງເວກເຕີ u ແລະ v ຕັ້ງສາກກັນ (u ⊥ v) ກໍຕໍ່ເມື່ອ ຜົນຄູນສະກາແລຂອງພວກມັນເທົ່າກັບ 0:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2" }}>
              <strong style={{ fontSize: "1.375rem", color: "#C62828" }}>{"u ⊥ v  ⇔  u·v = 0  ⇔  x₁·x₂ + y₁·y₂ = 0"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໃຫ້ u = [2, 3] ແລະ v = [4, -1] ⇒ u·v = (2 × 4) + (3 × -1) = 8 - 3 = 5!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນສະກາແລດ້ວຍຕົວປະສານ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແനນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ u = [3, 2] ແລະ v = [4, -5] ⇒ u·v ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໃຫ້ u = [-2, 4] ແລະ v = [3, 1] ⇒ u·v ="}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າ k ເພື່ອໃຫ້ສອງເວກເຕີຕັ້ງສາກກັນ: "}<span className="point-label">{"(5 ຄະແനນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ u = [k, 2] ແລະ v = [3, -6]. ຊອກຫາຄ່າ k ເພື່ອໃຫ້ u ⊥ v?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
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
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາມູນລະຫວ່າງສອງເວກເຕີ (Angle Between Two Vectors): "}<span className="point-label">{"(5 ຄະແനນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສອງເວກເຕີ u = [1, √3] ແລະ v = [√3, 1]. ຈົ່ງຊອກຫາຂະໜາດມູນ θ ລະຫວ່າງສອງເວກເຕີນີ້ (ເປັນອົງສາ)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: θ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" ອົງສາ"}</span>
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
            {"ເງື່ອນໄຂຕັ້ງສາກຂອງສອງເວກເຕີ: "}<span className="point-label">{"(5 ຄະແനນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າສອງເວກເຕີ u ແລະ v ຕັ້ງສາກກັນ, ຜົນຄູນສະກາແລ u·v ຈະເທົ່າກັບເທົ່າໃດ?"}
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
          <span key="1-1">{"30 (ຄິດໄລ່: u·v = 5 × 6 × cos(0°) = 30)"}</span>,
          <span key="1-2">{"-20 (ຄິດໄລ່: u·v = 4 × 10 × (-0.5) = -20)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u35-ans-2-1">{"10 (ຄິດໄລ່: u · v = |u| × |v| × cos(60°) = 4 × 5 × 0.5 = 10)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2-1">{"-2 (ຄິດໄລ່: u·v = 3·4 + 2·(-5) = 12 - 10 = -2)"}</span>,
          <span key="2-2">{"-2 (ຄິດໄລ່: u·v = (-2)·3 + 4·1 = -6 + 4 = -2)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3">{"4 (ຄິດໄລ່: u·v = 3k - 12 = 0 ⇒ k = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"30 (ຄິດໄລ່: cos(θ) = √3/2 ⇒ θ = 30°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: ເພາະ cos(90°) = 0 ⇒ u·v = 0)"}</span>
        ]
      }
    ],
    advice: "ສຸດຍອດຫຼາຍ! ຜົນຄູນສະກາແລເປັນບົດຮຽນທີ່ນຳໃຊ້ຫຼາຍທີ່ສຸດໃນເລຂາຄະນິດວິເຄາະ ແລະ ຟີຊິກສາດ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
