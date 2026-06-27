import React from "react";
import { UnitData } from "../units2";

export const unit33Data: UnitData = {
  unitNumber: 33,
  unitTitle: "ພາກທີ IV - ບົດທີ 33: ເວກເຕີໃນລະບົບເສັ້ນເຄົ້າຕັ້ງສາກ (Vectors in the Orthogonal Coordinate System)",
  unitGoal: "ຮຽນຮູ້ຕົວປະສານຂອງເວກເຕີ AB = [x2 - x1, y2 - y1], ການຄິດໄລ່ຂະໜາດເວກເຕີ |u| = √(a² + b²), ແລະ ການພົວພັນດ້ວຍເວກເຕີພື້ນຖານ i ແລະ j",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 162-166",
  subSections: [
    {
      title: "1. ຕົວປະສານ ແລະ ຂະໜາດຂອງເວກເຕີ (Vector Coordinates & Magnitude)",
      keyPoint: {
        title: "ຕົວປະສານ ແລະ ສູດຂະໜາດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນລະບົບເສັ້ນເຄົ້າຕັ້ງສາກ Oxy, ສໍາລັບສອງເມັດ A(x₁, y₁) ແລະ B(x₂, y₂):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"1. ຕົວປະສານຂອງເວກເຕີ AB:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"AB = [x₂ - x₁, y₂ - y₁] ຫຼຶ ຂຽນເປັນຖັນ [x₂ - x₁ \\ y₂ - y₁]."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"2. ຂະໜາດຂອງເວກເຕີ u = [a, b]:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"|u| = √(a² + b²)"}
                <br />
                {"ເຊິ່ງແມ່ນໄລຍະຫ່າງຈາກເມັດເລີ່ມຕົ້ນຫາເມັດປາຍ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໃຫ້ A(2, 3) ແລະ B(5, 7) ⇒ AB = [5 - 2, 7 - 3] = [3, 4] ⇒ ຂະໜາດ |AB| = √(3² + 4²) = 5!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຕົວປະສານ ແລະ ຂະໜາດຂອງເວກເຕີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໃຫ້ A(1, 2) ແລະ B(4, 6) ⇒ AB = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"] ແລະ ມີຂະໜາດ |AB| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ໃຫ້ C(2, -1) ແລະ D(-1, 3) ⇒ CD = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"] ແລະ ມີຂະໜາດ |CD| ="}</span>
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
                {"ຈົ່ງຊອກຫາຕົວປະສານ ແລະ ຂະໜາດຂອງເວກເຕີ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໃຫ້ A(2, 3) Und B(5, 7) ⇒ AB = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"] ແລະ ມີຂະໜາດ |AB| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການບວກ, ການລົບ ແລະ ການຄູນດ້ວຍສະກາແລ (Vector Operations & Standard Basis)",
      keyPoint: {
        title: "ການພົວພັນການຄຳນວນ ແລະ ເວກເຕີພື້ນຖານ i, j",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາລັບສອງເວກເຕີ u = [a, b] ແລະ v = [c, d] ແລະ ສະກາແລ k ໃດໆ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", paddingLeft: "24px" }}>
                <li><strong>{"ການບວກ (u + v):"}</strong>{" u + v = [a + c, b + d]"}</li>
                <li><strong>{"CN / ການລົບ (u - v):"}</strong>{" u - v = [a - c, b - d]"}</li>
                <li><strong>{"ການຄູນ (k·u):"}</strong>{" k·u = [ka, kb]"}</li>
                <li><strong>{"ເວກເຕີພື້ນຖານ (i, j):"}</strong>{" i = [1, 0] ແລະ j = [0, 1]. ດັ່ງນັ້ນ u = a·i + b·j."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໃຫ້ u = [3, 2] ແລະ v = [1, -4] ⇒ 2u - 3v = [6 - 3, 4 - (-12)] = [3, 16]!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ເວກເຕີຜົນບວກ, ຜົນລົບ ແລະ ຜົນຄູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໃຫ້ u = [3, 2] ແລະ v = [-1, 4] ⇒ u + 2v = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ໃຫ້ u = [4, -3] ແລະ v = [2, 1] ⇒ 3u - v = ["}</span>
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
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແປງເວກເຕີໃນຮູບຮ່າງ i ແລະ j: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໃຫ້ u = 3i - 4j ⇒ ຕົວປະສານຂອງ u = ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ໃຫ້ v = [2, 0] ⇒ ຂຽນໃນຮູບຮ່າງ i ແລະ j ຈະໄດ້ v ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" (ຂຽນຊື່ເວກເຕີ)"}</span>
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
              {"ໂຈດຊອກຫາເມັດທີສີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານ (Centroid Coordinate Problem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສາມເມັດ A(1, 2), B(4, 5), C(6, 2). ຊອກຫາເມັດ D(x, y) ເພື່ອໃຫ້ ABCD ເປັນຮູບສີ່ແຈຂ້າງຂະໜານ (ເງື່ອນໄຂ AB = DC)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
              <span>{"ຕອບ: ເມັດ D ແມ່ນ D("}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
              <span>{", "}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
              <span>{")"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "AB = [4 - 1, 5 - 2] = [3, 3]. DC = [6 - x, 2 - y]. ໃຫ້ AB = DC ⇒ 6 - x = 3 ⇒ x = 3. ແລະ 2 - y = 3 ⇒ y = -1. ດັ່ງນັ້ນ ເມັດ D(3, -1)!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຂະໜາດຂອງເວກເຕີພື້ນຖານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຂະໜາດຂອງເວກເຕີພື້ນຖານ i (ເຊິ່ງແມ່ນ |i|) ມີຄ່າເທົ່າໃດ?"}
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
          <span key="1-1">{"3 (ຄິດໄລ່: AB = [4-1, 6-2] = [3, 4])"}</span>,
          <span key="1-2">{"4 (ຄິດໄລ່: AB = [3, 4])"}</span>,
          <span key="1-3">{"5 (ຄິດໄລ່: |AB| = √(3² + 4²) = 5)"}</span>,
          <span key="1-4">{"-3 (ຄິດໄລ່: CD = [-1-2, 3-(-1)] = [-3, 4])"}</span>,
          <span key="1-5">{"4 (ຄິດໄລ່: CD = [-3, 4])"}</span>,
          <span key="1-6">{"5 (ຄິດໄລ່: |CD| = √((-3)² + 4²) = 5)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="2-1">{"1 (ຄິດໄລ່: u + 2v = [3 - 2, 2 + 8] = [1, 10])"}</span>,
          <span key="2-2">{"10 (ຄິດໄລ່: u + 2v = [1, 10])"}</span>,
          <span key="2-3">{"8 (ຄິດໄລ່: 3u - v = [12 - 2, -9 - 1] = [10, -10])"}</span>,
          <span key="2-4">{"-10 (ຄິດໄລ່: 3u - v = [10, -10])"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3-1">{"3 (ຄິດໄລ່: 3i - 4j = [3, -4])"}</span>,
          <span key="3-2">{"-4 (ຄິດໄລ່: 3i - 4j = [3, -4])"}</span>,
          <span key="3-3">{"2i (ຄິດໄລ່: [2, 0] = 2i + 0j = 2i)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"3 (ຄິດໄລ່: x = 6 - 3 = 3)"}</span>,
          <span key="4-2">{"-1 (ຄິດໄລ່: y = 2 - 3 = -1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"3, -1 (ຄິດໄລ່: D(3, -1))"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1 (ຄິດໄລ່: ເພາະ i = [1, 0] ⇒ |i| = √(1² + 0²) = 1, ມັນແມ່ນເວກເຕີຫົວໜ່ວຍ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u33-ans-2-1">{"3 (ຄິດໄລ່: AB = [5-2, 7-3] = [3, 4])"}</span>,
          <span key="u33-ans-2-2">{"4 (ຄິດໄລ່: AB = [3, 4])"}</span>,
          <span key="u33-ans-2-3">{"5 (ຄິດໄລ່: |AB| = √(3² + 4²) = 5)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການນຳໃຊ້ຕົວປະສານຂອງເວກເຕີ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ໄຂບັນຫາເລຂາຄະນິດໄດ້ຢ່າງງ່າຍດາຍ ແລະ ຊັດເຈນ ໂດຍໃຊ້ການຄິດໄລ່ພຶດຊະຄະນິດ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
