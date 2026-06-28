import React from "react";
import { UnitData } from "../units2";

export const unit36Data: UnitData = {
  unitNumber: 36,
  unitTitle: "ພາກທີ IV - ບົດທີ 36: ເສັ້ນຊື່ໃນແຜ່ນພຽງ (Straight Lines in the Plane)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບສົມຜົນທົ່ວໄປຂອງເສັ້ນຊື່ ax + by + c = 0, ເວັກເຕີຊີ້ນຳ u = [-b, a], ເວັກເຕີຕັ້ງສາກ n = [a, b], ແລະ ສູດຄິດໄລ່ໄລຍະຫ່າງຈາກເມັດໜຶ່ງຫາເສັ້ນຊື່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 178-183",
  subSections: [
    {
      title: "1. ເວັກເຕີຊີ້ນຳ ແລະ ເວັກເຕີຕັ້ງສາກ (Direction & Normal Vectors of a Line)",
      keyPoint: {
        title: "ນິຍາມຂອງເວັກເຕີຊີ້ນຳ ແລະ ເວັກເຕີຕັ້ງສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາລັບເສັ້ນຊື່ d ທີ່ມີສົມຜົນທົ່ວໄປ ax + by + c = 0 (ເຊິ່ງ a² + b² ≠ 0):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"1. ເວັກເຕີຕັ້ງສາກ (Normal Vector) n:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"n = [a, b] (ແມ່ນເວັກເຕີທີ່ມີທິດທາງຕັ້ງສາກກັບເສັ້ນຊື່ d)"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" , whiteSpace: "nowrap"}}>{"2. ເວັກເຕີຊີ້ນຳ (Direction Vector) u:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"u = [-b, a] (ແມ່ນເວັກເຕີທີ່ມີທິດທາງຂະໜານ ຫຼື ນອນເທິງເສັ້ນຊື່ d)"}
              </p>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາປະສິດມຸມ (Slope) m ຂອງເສັ້ນຊື່ ແມ່ນ m = -a/b (ເມື່ອ b ≠ 0)."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ເສັ້ນຊື່ 3x - 4y + 5 = 0 ມີເວັກເຕີຕັ້ງສາກ n = [3, -4], ເວັກເຕີຊີ້ນຳ u = [4, 3] ແລະ ສໍາປະສິດມຸມ m = 3/4!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເວັກເຕີຕັ້ງສາກ ແລະ ເວັກເຕີຊີ້ນຳ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) ໃຫ້ເສັ້ນຊື່ d: 2x - 3y + 7 = 0 ⇒ ເວັກເຕີຕັ້ງສາກ n = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) ໃຫ້ເສັ້ນຊື່ d: 5x + 4y - 3 = 0 ⇒ ເວັກເຕີຊີ້ນຳ u = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
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
                {"ຈົ່ງຊອກຫາເວັກເຕີຕັ້ງສາກ ແລະ ເວັກເຕີຊີ້ນຳ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) ໃຫ້ເສັ້ນຊື່ L: 2x - 3y + 6 = 0 ⇒ ເວັກເຕີຕັ້ງສາກ n = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
              </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໄລຍະຫ່າງຈາກເມັດໜຶ່ງຫາເສັ້ນຊື່ (Distance from a Point to a Line)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ໄລຍະຫ່າງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນລະບົບເສັ້ນເຄົ້າ Oxy, ໄລຍະຫ່າງຈາກເມັດ M(x₀, y₀) ຫາເສັ້ນຊື່ Δ: ax + by + c = 0 ແມ່ນຄິດໄລ່ດ້ວຍສູດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <strong style={{ fontSize: "1.5rem", color: "#E65100" }}>{"d(M, Δ) = |a·x₀ + b·y₀ + c| / √(a² + b²)"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໄລຍະຫ່າງຈາກ M(1, 2) ຫາເສັ້ນຊື່ 3x - 4y + 15 = 0 ແມ່ນ d = |3(1) - 4(2) + 15| / √(3² + (-4)²) = |3 - 8 + 15| / 5 = 10 / 5 = 2!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ໄລຍະຫ່າງຈາກເມັດຫາເສັ້ນຊື່: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໄລຍະຫ່າງຈາກ M(3, 4) ຫາເສັ້ນຊື່ d: 3x + 4y - 5 = 0 ແມ່ນ d ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໄລຍະຫ່າງຈາກ N(2, -1) ຫາເສັ້ນຊື່ d: 6x - 8y + 5 = 0 ແມ່ນ d ="}</span>
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
                {"ຈົ່ງຄິດໄລ່ໄລຍະຫ່າງຈາກເມັດຫາເສັ້ນຊື່ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໄລຍະຫ່າງຈາກເມັດ P(1, 1) ຫາ L: 3x + 4y - 12 = 0 ແມ່ນ"}</span>
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
              {"ໂຈດຊອກຫາສົມຜົນເສັ້ນຊື່ (Line Equation construction): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ d ທີ່ຜ່ານເມັດ A(2, 3) ແລະ ມີເວັກເຕີຕັ້ງສາກ n = [2, -1] ພາຍໃຕ້ຮູບຮ່າງ 2x - y = C?"}
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
            {"ໄລຍະຫ່າງຈາກເມັດເຄົ້າຫາເສັ້ນຊື່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໄລຍະຫ່າງຈາກຈຸດເລີ່ມຕົ້ນ O(0, 0) ຫາເສັ້ນຊື່ 5x + 12y - 26 = 0 ແມ່ນເທົ່າໃດ?"}
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
          <span key="1-1">{"2 (ຄິດໄລ່: ຈາກ 2x - 3y + 7 = 0 ⇒ n = [2, -3])"}</span>,
          <span key="1-2">{"-3 (ຄິດໄລ່: n = [2, -3])"}</span>,
          <span key="1-3">{"-4 (ຄິດໄລ່: ຈາກ 5x + 4y - 3 = 0 ⇒ u = [-b, a] = [-4, 5])"}</span>,
          <span key="1-4">{"5 (ຄິດໄລ່: u = [-4, 5])"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u36-ans-2-1">{"2 (ຄິດໄລ່: ຈາກສົມຜົນ 2x - 3y + 6 = 0 ⇒ n = [2, -3])"}</span>,
          <span key="u36-ans-2-2">{"-3"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2-1">{"4 (ຄິດໄລ່: d = |3(3) + 4(4) - 5| / √(3²+4²) = |9 + 16 - 5| / 5 = 20/5 = 4)"}</span>,
          <span key="2-2">{"2.5 (ຄິດໄລ່: d = |6(2) - 8(-1) + 5| / √(6²+8²) = |12 + 8 + 5| / 10 = 25/10 = 2.5)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="u36-ans-4-1">{"1 (ຄິດໄລ່: d = |3(1)+4(1)-12|/√(3²+4²) = |-5|/5 = 1)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3">{"1 (ຄິດໄລ່: 2x - y = 2(2) - 3 = 1 ⇒ C = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"1 (ຄິດໄລ່: C = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"2 (ຄິດໄລ່: d = |5(0) + 12(0) - 26| / √(5²+12²) = 26 / 13 = 2)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຊອກຫາສົມຜົນເສັ້ນຊື່ ແລະ ໄລຍະຫ່າງ ເປັນຄວາມຮູ້ພື້ນຖານທີ່ສຳຄັນໃນການແກ້ໄຂບັນຫາເລຂາຄະນິດແບບວິເຄາະ. ກ້າວຕໍ່ໄປເດີ້!"
  }
};
