import React from "react";
import { UnitData } from "../units2";

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ພາກທີ II - ບົດທີ 14: ຕຳລາຂັ້ນສອງໃນຮູບຮ່າງ y = ax² (Quadratic Functions in form y = ax²)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບອິດທິພົນຂອງສຳປະສິດ a ຕໍ່ກັບຮູບຮ່າງຂອງປາຣາໂບນ y = ax², ຄວາມແຕກຕ່າງລະຫວ່າງປາຣາໂບນຫງາຍ (a > 0) ແລະ ປາຣາໂບນຂວ້ຳ (a < 0), ແລະ ການແກ້ໂຈດສົມຜົນ-ອະສົມຜົນດ້ວຍກຣາຟ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 72-76",
  subSections: [
    {
      title: "1. ບົດບາດຂອງສຳປະສິດ a ແລະ ທິດທາງຂອງປາຣາໂບນ (Coefficient a & Parabola Direction)",
      keyPoint: {
        title: "ຫຼັກການກ່ຽວກັບສຳປະສິດ a",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສຳປະສິດ a ຈະເປັນຕົວກຳນົດທັງທິດທາງ ແລະ ຄວາມກວ້າງ-ແຄບຂອງປາຣາໂບນ y = ax²:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ທິດທາງການຫງາຍ-ຂວ້ຳ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຖ້າ a > 0: "}</strong>{" ປາຣາໂບນຫງາຍ (opens upwards), ມີເມັດ O(0,0) ເປັນເມັດຕ່ຳສຸດ. ເຂດຄ່າ y ∈ [0, +∞[."}</li>
                <li><strong>{"ຖ້າ a < 0: "}</strong>{" ປາຣາໂບນຂວ້ຳ (opens downwards), ມີເມັດ O(0,0) ເປັນເມັດສູງສຸດ. ເຂດຄ່າ y ∈ ]-∞, 0]."}</li>
              </ul>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ຄວາມກວ້າງ-ແຄບ: ຄ່າສຳບູນ |a| ຍິ່ງຫຼາຍ ປາຣາໂບນຈະຍິ່ງແຄບ (ຮີບ) ເຂົ້າຫາແກນ Oy. ຄ່າ |a| ຍິ່ງນ້ອຍ (ໃກ້ 0) ປາຣາໂບນຈະຍິ່ງກວ້າງອອກ."}
              <br />
              {"  ເຊັ່ນ: y = 2x² ຈະແຄບກວ່າ y = x² ແລະ y = (1/2)x² ຈະກວ້າງກວ່າ y = x²."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ແກນເຄິ່ງຄືຂອງປາຣາໂບນ y = ax² ແມ່ນແກນ Oy (x = 0) ແລະ ເມັດຈອມແມ່ນ O(0,0) ສະເໝີ ບໍ່ວ່າ a ຈະເປັນບວກ ຫຼື ລົບ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເຂດຄ່າຂອງ y ຂອງຕຳລາ y = -2x² (ປາຣາໂບນຂວ້ຳ) ຕາມຫວ່າງຂອງ x: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຖ້າ x ຢູ່ຫວ່າງ [-3, -1] ⇒ ເຂດຄ່າ y ຢູ່ຫວ່າງ [-18,"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຖ້າ x ຢູ່ຫວ່າງ [-5, 1] (x ຜ່ານເມັດຈອມ 0) ⇒ ເຂດຄ່າ y ຢູ່ຫວ່າງ ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{", 0]"}</span>
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
                {"ຈົ່ງປຽບທຽບຄວາມແຄບ-ກວ້າງຂອງປາຣາໂບນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ລະຫວ່າງ y = 2x² ແລະ y = 4x²: ປາຣາໂບນໃດຮີບ (ແຄບ) ກວ່າ? ⇒ ຕຳລາ y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ລະຫວ່າງ y = -x² ແລະ y = -3x²: ປາຣາໂບນໃດກວ້າງກວ່າ? ⇒ ຕຳລາ y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ສົມຜົນ y = ax² ດ້ວຍກຣາຟ (Graphical Solutions of y = ax²)",
      keyPoint: {
        title: "ການແກ້ສົມຜົນ ax² = k",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ສົມຜົນ ax² = k ແມ່ນການຊອກຫາຈຸດຕັດລະຫວ່າງປາຣາໂບນ y = ax² ແລະ ເສັ້ນຊື່ y = k:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ວິທີການຄິດໄລ່:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ສົມຜົນ: ax² = k  ⇒  x² = k/a."}
                <br />
                {"- ຖ້າ k/a > 0: ຈະມີ 2 ໃຈຜົນແມ່ນ: x = ±√(k/a)."}
                <br />
                {"- ຖ້າ k/a = 0: ຈະມີ 1 ໃຈຜົນແມ່ນ: x = 0."}
                <br />
                {"- ຖ້າ k/a < 0: ສົມຜົນບໍ່ມີໃຈຜົນຕົວຈິງ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ແກ້ສົມຜົນ -2x² = -8 ⇒ x² = 4 ⇒ x = ±2. ແຕ່ສົມຜົນ -2x² = 8 ⇒ x² = -4 ⇒ ບໍ່ມີໃຈຜົນຕົວຈິງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ສົມຜົນ -2x² = -18 ⇒ x² = 9 ⇒ ໃຈຜົນ x = ±"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ສົມຜົນ (1/2)x² = 8 ⇒ x² = 16 ⇒ ໃຈຜົນ x = ±"}</span>
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
                {"ຈົ່ງຫາຫວ່າງຂອງຕົວປ່ຽນ x: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຖ້າຕຳລາ y = -2x² ມີເຂດຄ່າ y ຢູ່ຫວ່າງ [-8, -2]. ຈົ່ງຊອກຫາຫວ່າງຂອງ x ທີ່ສອດຄ່ອງ (ສໍາລັບ x > 0)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຕອບ: ຫວ່າງ x ແມ່ນ ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"]"}</span>
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
              {"ໂຈດແກ້ອະສົມຜົນປາຣາໂບນຂວ້ຳ (Quadratic Inequality of Negative Parabola): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ອະສົມຜົນ: -3x² ≥ -12. ຈົ່ງຫາຫວ່າງໃຈຜົນຂອງ x?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ກຸ່ມໃຈຜົນແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
              <span>{"≤ x ≤"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາຄົງຄ່າ a ຈາກກຣາຟ (Finding Coefficient a from Point): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປາຣາໂບນ y = ax² ຜ່ານເມັດ A(2, -12). ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ a ຂອງຕຳລານີ້?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a ="}</span>
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
            {"ທິດສະເໜີຂອງປາຣາໂບນຂວ້ຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຕຳລາ y = -x² (a < 0) ຈະເພີ່ມ (increasing) ໃນຫວ່າງໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຫວ່າງ ]-∞,"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"]"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ແກ້ສົມຜົນອັດຕາສ່ວນກຳລັງສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ: -3x² = 27"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ສົມຜົນນີ້"}</span>
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
          <span key="1-1">{"(1) -2 (ຄິດໄລ່: ຕ່ຳສຸດແມ່ນ y = -2(-1)² = -2. ສູງສຸດແມ່ນ y = -2(-3)² = -18? ຂໍໂທດ, ຍ້ອນຂວ້ຳ, y ຢູ່ຫວ່າງ [-18, -2])"}</span>,
          <span key="1-2">{"(2) -50 (ຄິດໄລ່: ຍ້ອນຜ່ານ 0, ສູງສຸດແມ່ນ 0, ຕ່ຳສຸດແມ່ນ y = -2(-5)² = -50 ⇒ y ∈ [-50, 0])"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 4x² (ຄິດໄລ່: |4| > |2| ⇒ y = 4x² ແຄບກວ່າ)"}</span>,
          <span key="2-2">{"(2) -x² (ຄິດໄລ່: |-1| < |-3| ⇒ y = -x² ກວ້າງກວ່າ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"3 (ຄິດໄລ່: x² = 9 ⇒ x = ±3)"}</span>,
          <span key="3-2">{"4 (ຄິດໄລ່: x² = 16 ⇒ x = ±4)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"1, 2 (ຄິດໄລ່: -2x² = -8 ⇒ x = 2 ; -2x² = -2 ⇒ x = 1. ດັ່ງນັ້ນ x ∈ [1, 2])"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"-2, 2 (ຄິດໄລ່: x² ≤ 4 ⇒ -2 ≤ x ≤ 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"-3 (ຄິດໄລ່: -12 = a(2)² = 4a ⇒ a = -3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: ຕຳລາ y = -x² ຈະເພີ່ມໃນຫວ່າງ ]-∞, 0] ແລະ ຫຼຸດໃນຫວ່າງ [0, +∞[)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"ບໍ່ມີໃຈຜົນຕົວຈິງ (ຄິດໄລ່: -3x² = 27 ⇒ x² = -9 ເຊິ່ງເປັນໄປບໍ່ໄດ້)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການເຂົ້າໃຈບົດບາດຂອງສຳປະສິດ a ໃນຕຳລາ y = ax² ຈະຊ່ວຍໃຫ້ເຈົ້າສາມາດຈິນຕະນາການຮູບຮ່າງຂອງປາຣາໂບນໄດ້ຢ່າງງ່າຍດາຍ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
