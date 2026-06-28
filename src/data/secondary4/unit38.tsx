import React from "react";
import { UnitData } from "../units2";

export const unit38Data: UnitData = {
  unitNumber: 38,
  unitTitle: "ພាកທີ IV - ບົດທີ 38: ແຜ່ນພຽງໃນອາວະກາດ (Planes in Space)",
  unitGoal: "ຮຽນຮູ້ສົມຜົນທົ່ວໄປຂອງແຜ່ນພຽງ Ax + By + Cz + D = 0, ເວັກເຕີຕັ້ງສາກ n = [A, B, C], ການຊອກສົມຜົນແຜ່ນພຽງ ແລະ ເງື່ອນໄຂຕັ້ງສາກຂອງສອງແຜ່ນພຽງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 189-194",
  subSections: [
    {
      title: "1. ສົມຜົນແຜ່ນພຽງ ແລະ ເວັກເຕີຕັ້ງສາກ (General Equation & Normal Vector of a Plane)",
      keyPoint: {
        title: "ສົມຜົນແຜ່ນພຽງ ແລະ ສ່ວນປະກອບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນອາວະກາດ Oxyz, ສົມຜົນທົ່ວໄປຂອງແຜ່ນພຽງ (P) ມີຮູບຮ່າງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8EAF6", borderRadius: "8px", border: "1px solid #C5CAE9" }}>
              <strong style={{ fontSize: "1.5rem", color: "#1A237E" }}>{"Ax + By + Cz + D = 0"}</strong>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ເຊິ່ງ A, B, C ບໍ່ເທົ່າສູນພ້ອມກັນ (A² + B² + C² ≠ 0)."}
              </p>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເວັກເຕີຕັ້ງສາກ (Normal Vector) ຂອງແຜ່ນພຽງ (P) ແມ່ນເວັກເຕີ n ທີ່ຕັ້ງສາກກັບທຸກໆເວັກເຕີໃນແຜ່ນພຽງ (P):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <strong style={{ fontSize: "1.375rem", color: "#004D40" }}>{"n = [A, B, C]"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ແຜ່ນພຽງ 2x - y + 3z - 5 = 0 ມີເວັກເຕີຕັ້ງສາກ n = [2, -1, 3]!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເວັກເຕີຕັ້ງສາກຂອງແຜ່ນພຽງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ແຜ່ນພຽງ (P): 3x + 2y - z + 4 = 0 ⇒ ເວັກເຕີຕັ້ງສາກ n = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ແຜ່ນພຽງ (Q): -x + 5z - 2 = 0 ⇒ ເວັກເຕີຕັ້ງສາກ n = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
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
                {"ຈົ່ງຊອກຫາເວັກເຕີຕັ້ງສາກຂອງແຜ່ນພຽງ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ແຜ່ນພຽງ P: 3x - 4y + 5z - 10 = 0 ⇒ n = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສ້າງສົມຜົນແຜ່ນພຽງ ແລະ ເງື່ອນໄຂຕັ້ງສາກ (Equation Construction & Perpendicular Planes)",
      keyPoint: {
        title: "ການສ້າງສົມຜົນ ແລະ ເງື່ອນໄຂຕັ້ງສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ສົມຜົນແຜ່ນພຽງທີ່ຜ່ານເມັດ M₀(x₀, y₀, z₀) ແລະ ມີເວັກເຕີຕັ້ງສາກ n = [A, B, C] ຈະມີຮູບຮ່າງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <strong style={{ fontSize: "1.375rem", color: "#E65100" }}>{"A(x - x₀) + B(y - y₀) + C(z - z₀) = 0"}</strong>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ສອງແຜ່ນພຽງ (P₁) ແລະ (P₂) ທີ່ມີເວັກເຕີຕັ້ງສາກ n₁ = [A₁, B₁, C₁] ແລະ n₂ = [A₂, B₂, C₂] ຕັ້ງສາກກັນ ກໍຕໍ່ເມື່ອ ຜົນຄູນສະກາແລຂອງເວັກເຕີຕັ້ງສາກເທົ່າກັບ 0:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2" }}>
              <strong style={{ fontSize: "1.375rem", color: "#C62828" }}>{"P₁ ⊥ P₂  ⇔  n₁·n₂ = A₁A₂ + B₁B₂ + C₁C₂ = 0"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໃຫ້ແຜ່ນພຽງຜ່ານ A(1, 2, 3) ແລະ ມີ n = [1, -1, 2] ⇒ 1(x-1) - 1(y-2) + 2(z-3) = 0 ⇒ x - y + 2z - 5 = 0!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຄົງທີ່ D ຂອງສົມຜົນແຜ່ນພຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແຜ່ນພຽງຜ່ານເມັດ A(1, 2, 3) ໂດຍມີເວັກເຕີຕັ້ງສາກ n = [1, -1, 2] ມີສົມຜົນຂຽນໃນຮູບຮ່າງ x - y + 2z + D = 0. ຈົ່ງຊອກຫາ D?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: D ="}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າຄົງທີ່ k ເພື່ອໃຫ້ສອງແຜ່ນພຽງຕັ້ງສາກກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ (P): kx + 2y - z + 4 = 0 ແລະ (Q): 2x - y + 3z - 5 = 0. ຊອກຫາຄ່າ k ເພື່ອໃຫ້ P ⊥ Q?"}
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
              {"ໂຈດແຜ່ນພຽງຜ່ານສາມເມັດ (Plane Passing Through Three Points): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາສົມຜົນແຜ່ນພຽງທີ່ຜ່ານສາມເມັດ A(1, 0, 0), B(0, 1, 0) ແລະ C(0, 0, 1) ພາຍໃຕ້ຮູບຮ່າງ x + y + z = C?"}
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
    hintText: ""
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ເມັດເທິງແຜ່ນພຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ເມັດ A(1, 1, 1) ນອນເທິງແຜ່ນພຽງ x + 2y - z + D = 0. ຊອກຫາຄ່າ D?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: D ="}</span>
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
          <span key="1-1">{"3 (ຄິດໄລ່: ຈາກ 3x + 2y - z + 4 = 0 ⇒ n = [3, 2, -1])"}</span>,
          <span key="1-2">{"2 (ຄິດໄລ່: n = [3, 2, -1])"}</span>,
          <span key="1-3">{"-1 (ຄິດໄລ່: n = [3, 2, -1])"}</span>,
          <span key="1-4">{"-1 (ຄິດໄລ່: ຈາກ -x + 0y + 5z - 2 = 0 ⇒ n = [-1, 0, 5])"}</span>,
          <span key="1-5">{"0 (ຄິດໄລ່: n = [-1, 0, 5])"}</span>,
          <span key="1-6">{"5 (ຄິດໄລ່: n = [-1, 0, 5])"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u38-ans-2-1">{"3"}</span>,
          <span key="u38-ans-2-2">{"-4"}</span>,
          <span key="u38-ans-2-3">{"5"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2">{"-5 (ຄິດໄລ່: 1(1) - 1(2) + 2(3) + D = 0 ⇒ 1 - 2 + 6 + D = 0 ⇒ D = -5)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3">{"2.5 (ຄິດໄລ່: n₁·n₂ = k(2) + 2(-1) - 1(3) = 2k - 5 = 0 ⇒ k = 5/2 = 2.5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"1 (ຄິດໄລ່: x + y + z = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"-2 (ຄິດໄລ່: 1 + 2(1) - 1 + D = 0 ⇒ 2 + D = 0 ⇒ D = -2)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ສົມຜົນແຜ່ນພຽງເປັນເຄື່ອງມືທີ່ມີພະລັງຫຼາຍໃນການວິເຄາະອາວະກາດສາມມິຕິ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
