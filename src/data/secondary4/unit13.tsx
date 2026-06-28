import React from "react";
import { UnitData } from "../units2";

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ພາກທີ II - ບົດທີ 13: ຕຳລາຂັ້ນສອງໃນຮູບຮ່າງ y = x² (Quadratic Functions in form y = x²)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບລັກສະນະສະເພາະຂອງຕຳລາຂັ້ນສອງ y = x², ເສັ້ນສະແດງປາຣາໂບນຫງາຍ, ເຂດກຳນົດ ແລະ ເຂດຄ່າຂອງຕຳລາ, ແລະ ວິທີແກ້ສົມຜົນ-ອະສົມຜົນຂັ້ນສອງດ້ວຍເສັ້ນສະແດງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 68-71",
  subSections: [
    {
      title: "1. ເສັ້ນສະແດງ ແລະ ຄຸນລັກສະນະຂອງຕຳລາ y = x² (Properties of Parabola y = x²)",
      keyPoint: {
        title: "ຄຸນລັກສະນະພື້ນຖານຂອງປາຣາໂບນ y = x²",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕຳລາຂັ້ນສອງ y = x² ມີເສັ້ນສະແດງເປັນເສັ້ນໂຄ້ງປາຣາໂບນ (Parabola) ທີ່ມີຄຸນລັກສະນະດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.6", paddingLeft: "24px" }}>
              <li><strong>{"ທິດທາງປາຣາໂບນ: "}</strong>{" ເປັນປາຣາໂບນຫງາຍ (opens upwards) ທີ່ມີສອງແຂນຊີ້ຂຶ້ນເທິງ."}</li>
              <li><strong>{"ເມັດຈອມ (Vertex): "}</strong>{" ຢູ່ເມັດເຄົ້າ O(0, 0) ເຊິ່ງເປັນເມັດຕ່ຳສຸດ (Minimum Point)."}</li>
              <li><strong>{"ແກນເຄິ່ງຄື (Axis of Symmetry): "}</strong>{" ແມ່ນແກນ Oy (ສົມຜົນ x = 0)."}</li>
              <li><strong>{"ທິດສະເໜີຕຳລາ (Monotonicity): "}</strong>{" ຕຳລາຫຼຸດ (decreasing) ໃນຫວ່າງ ]-∞, 0] ແລະ ເພີ່ມ (increasing) ໃນຫວ່າງ [0, +∞[."}</li>
              <li><strong>{"ເຂດຄ່າ (Range): "}</strong>{" ຕົວປ່ຽນ y ≥ 0 ສະເໝີ, ໝາຍຄວາມວ່າ ເຂດຄ່າແມ່ນ [0, +∞[."}</li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຕາຕະລາງຄ່າຂອງ y = x²: ຖ້າ x = -2 ⇒ y = 4  ;  x = -1 ⇒ y = 1  ;  x = 0 ⇒ y = 0  ;  x = 1 ⇒ y = 1  ;  x = 2 ⇒ y = 4!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເຂດຄ່າຂອງ y ຂອງຕຳລາ y = x² ຕາມຫວ່າງຂອງ x ທີ່ກຳນົດໃຫ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຖ້າ x ຢູ່ຫວ່າງ [-1, 4] (x ຜ່ານເມັດຈອມ 0) ⇒ ເຂດຄ່າ y ຢູ່ຫວ່າງ [0,"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) ຖ້າ x ຢູ່ຫວ່າງ [-3, -1] (x ບໍ່ຜ່ານເມັດຈອມ) ⇒ ເຂດຄ່າ y ຢູ່ຫວ່າງ ["}</span>
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
                {"ຈົ່ງຫາເຂດຄ່າຂອງ y ຕາມເງື່ອນໄຂອະສົມຜົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຖ້າ x ≥ 2 ⇒ ເຂດຄ່າ y ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຖ້າ x ≤ -1 ⇒ ເຂດຄ່າ y ≥"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ສົມຜົນ ແລະ ອະສົມຜົນຂັ້ນສອງດ້ວຍເສັ້ນສະແດງ (Graphical Solving)",
      keyPoint: {
        title: "ການພິຈາລະນາຈຸດຕັດ ແລະ ຫວ່າງເສັ້ນສະແດງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດແກ້ສົມຜົນ ແລະ ອະສົມຜົນຂັ້ນສອງ x² = k, x² ≤ k, x² > k ໂດຍການປຽບທຽບປາຣາໂບນ y = x² ກັບເສັ້ນຊື່ y = k:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"ກໍລະນີສຳຄັນ (ສໍາລັບ k > 0):"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ສົມຜົນ "}<strong>{"x² = k"}</strong>{" ມີ 2 ໃຈຜົນແມ່ນ: x = -√k ຫຼື x = √k."}</li>
                <li>{"ສົມຜົນ "}<strong>{"x² = -k"}</strong>{" ບໍ່ມີໃຈຜົນຕົວຈິງ (ເພາະປາຣາໂບນບໍ່ຕັດເສັ້ນຊື່ທີ່ຢູ່ກ້ອງແກນ Ox)."}</li>
                <li>{"ອະສົມຜົນ "}<strong>{"x² ≤ k"}</strong>{" ມີກຸ່ມໃຈຜົນແມ່ນ: -√k ≤ x ≤ √k (ຫວ່າງປິດ)."}</li>
                <li>{"ອະສົມຜົນ "}<strong>{"x² > k"}</strong>{" ມີກຸ່ມໃຈຜົນແມ່ນ: x < -√k ຫຼື x > √k (ຫວ່າງເປີດສອງຂ້າງ)."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ສົມຜົນ x² = 4 ⇒ x = ±2. ອະສົມຜົນ x² ≤ 100 ⇒ -10 ≤ x ≤ 10!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນ ແລະ ອະສົມຜົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ສົມຜົນ x² = 9/4 ⇒ ໃຈຜົນ x = ±"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ອະສົມຜົນ x² ≤ 100 ⇒ ກຸ່ມໃຈຜົນແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"≤ x ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງແກ້ສົມຜົນ ແລະ ອະສົມຜົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ສົມຜົນ x² = -25 ⇒ ສົມຜົນນີ້"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ອະສົມຜົນ x² > 4 ⇒ ກຸ່ມໃຈຜົນແມ່ນ x < -2 ຫຼື x >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
              {"ໂຈດການຊອກຫາຫວ່າງຂອງ y ທີ່ຊັບຊ້ອນ (Complex Interval Range): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າຕົວປ່ຽນ x ຢູ່ຫວ່າງ [-10, 1] ຂອງຕຳລາ y = x². ຈົ່ງຊອກຫາຫວ່າງຂອງ y ທີ່ສອດຄ່ອງ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ເຂດຄ່າ y ຢູ່ຫວ່າງ [0,"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"]"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດແກ້ອະສົມຜົນອັດຕາສ່ວນສອງຫວ່າງ (Double Bound Inequality): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ອະສົມຜົນ: 1/4 ≤ x² < 9/4. ຈົ່ງຊອກຫາຫວ່າງໃຈຜົນຂອງ x ເມື່ອ x > 0?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ຫວ່າງ x > 0 ແມ່ນ [1/2,"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"["}</span>
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
            {"ຄຸນລັກສະນະເມັດຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງບອກຈຸດພິເສດຂອງເມັດຈອມຂອງປາຣາໂບນ y = x² ວ່າມັນແມ່ນເມັດສູງສຸດ ຫຼື ຕ່ຳສຸດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ແມ່ນເມັດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການແກ້ອະສົມຜົນພື້ນຖານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ອະສົມຜົນ: x² ≤ 0"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໃຈຜົນມີພຽງຄ່າດຽວແມ່ນ x ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 16 (ຄິດໄລ່: ຄ່າຕ່ຳສຸດແມ່ນ 0 ຍ້ອນຜ່ານ 0, ຄ່າສູງສຸດແມ່ນ 4² = 16)"}</span>,
          <span key="1-2">{"(2) 1, 9 (ຄິດໄລ່: ເພາະ x ຢູ່ຫວ່າງລົບທັງໝົດ, ຕຳລາ cI, ດັ່ງນັ້ນ y ຢູ່ຫວ່າງ [(-1)², (-3)²] = [1, 9])"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 4 (ຄິດໄລ່: x ≥ 2 ⇒ x² ≥ 4)"}</span>,
          <span key="2-2">{"(2) 1 (ຄິດໄລ່: x ≤ -1 ⇒ x² ≥ 1)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"3/2 (ຫຼື 1.5) (ຄິດໄລ່: x = ±√(9/4) = ±3/2)"}</span>,
          <span key="3-2">{"-10, 10 (ຄິດໄລ່: x² ≤ 100 ⇒ -10 ≤ x ≤ 10)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"ບໍ່ມີໃຈຜົນຕົວຈິງ (ຄິດໄລ່: ເພາະ x² ບໍ່ສາມາດເປັນຄ່າລົບໄດ້)"}</span>,
          <span key="4-2">{"2 (ຄິດໄລ່: x² > 4 ⇒ x < -2 ຫຼື x > 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"100 (ຄິດໄລ່: ຕ່ຳສຸດແມ່ນ 0, ສູງສຸດແມ່ນ (-10)² = 100 ⇒ y ∈ [0, 100])"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"3/2 (ຫຼື 1.5) (ຄິດໄລ່: √(1/4) ≤ x < √(9/4) ⇒ 1/2 ≤ x < 3/2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ຕ່ຳສຸດ (minimum point) (ຄິດໄລ່: ປາຣາໂບນຫງາຍ ມີເມັດ O(0,0) ເປັນເມັດຕ່ຳສຸດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"0 (ຄິດໄລ່: ເພາະ x² ≥ 0 ສະເໝີ, ດັ່ງນັ້ນ x² ≤ 0 ຈະມີພຽງແຕ່ x = 0 ເທົ່ານັ້ນ)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ເຈົ້າໄດ້ຮຽນຮູ້ກ່ຽວກັບຕຳລາຂັ້ນສອງພື້ນຖານ y = x² ແລະ ວິທີແກ້ສົມຜົນ-ອະສົມຜົນດ້ວຍເສັ້ນສະແດງຢ່າງຊັດເຈນແລ້ວ. ນີ້ແມ່ນກະແຈຫຼັກໃນການສຶກສາປາຣາໂບນທົ່ວໄປ!"
  }
};
