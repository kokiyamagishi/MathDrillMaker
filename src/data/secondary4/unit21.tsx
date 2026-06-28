import React from "react";
import { UnitData } from "../units2";

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພາກທີ II - ບົດທີ 21: ທີ່ຕັ້ງສຳພັດລະຫວ່າງເສັ້ນຊື່ ແລະ ເສັ້ນໂຄ້ງຂັ້ນສອງ (Relative Positions of Lines & Parabolas)",
  unitGoal: "ຮຽນຮູ້ການຊອກຫາຈຸດຕັດ ແລະ ການວິເຄາະທີ່ຕັ້ງສຳພັດລະຫວ່າງເສັ້ນຊື່ກັບປາຣາໂບນ, ຫຼື ລະຫວ່າງສອງປາຣາໂບນ ໂດຍນຳໃຊ້ຄ່າ Δ (Delta)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 97-99",
  subSections: [
    {
      title: "1. ທີ່ຕັ້ງສຳພັດລະຫວ່າງເສັ້ນຊື່ ແລະ ປາຣາໂບນ (Line and Parabola Intersection)",
      keyPoint: {
        title: "ຫຼັກການຕັດກັນໂດຍໃຊ້ Δ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອຊອກຫາທີ່ຕັ້ງສຳພັດລະຫວ່າງເສັ້ນຊື່ y = mx + n ແລະ ປາຣາໂບນ y = ax² + bx + c, ເຮົາແກ້ສົມຜົນຈຸດຕັດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#4A148C" , whiteSpace: "nowrap"}}>{"ສົມຜົນຈຸດຕັດ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ax² + (b - m)x + (c - n) = 0."}
                <br />
                {"ຄິດໄລ່ Δ ຂອງສົມຜົນຂັ້ນສອງນີ້:"}
                <br />
                {"- ຖ້າ Δ > 0: ເສັ້ນຊື່ຕັດປາຣາໂບນຢູ່ 2 ເມັດແຍກກັນ."}
                <br />
                {"- ຖ້າ Δ = 0: ເສັ້ນຊື່ສຳຜັດ (tangent) ປາຣາໂບນຢູ່ 1 ເມັດ."}
                <br />
                {"- ຖ້າ Δ < 0: ເສັ້ນຊື່ ແລະ ປາຣາໂບນບໍ່ຕັດກັນ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ປາຣາໂບນ y = x² ແລະ ເສັ້ນຊື່ y = 2x - 1. ສົມຜົນ: x² - 2x + 1 = 0 ມີ Δ = 0 ⇒ ເສັ້ນຊື່ສຳຜັດກັບປາຣາໂບນຢູ່ເມັດ (1, 1)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງກຳນົດຈຳນວນຈຸດຕັດລະຫວ່າງປາຣາໂບນ ແລະ ເສັ້ນຊື່: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) y = x² - x + 1 ແລະ y = x. ສົມຜົນ: x² - 2x + 1 = 0 ມີ Δ = 0 ⇒ ມີຈຸດຕັດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ເມັດ (ສຳຜັດກັນ)"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) y = x² - 4x + 5 ແລະ y = x + 1. ສົມຜົນ: x² - 5x + 4 = 0 ມີ Δ = 9 > 0 ⇒ ມີຈຸດຕັດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ເມັດ"}</span>
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
                {"ຈົ່ງວິເຄາະທີ່ຕັ້ງສຳພັດຂອງປາຣາໂບນ y = -x² + 2x - 4k ກັບແກນ Ox (y = 0): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ປາຣາໂບນຈະສຳຜັດກັບແກນ Ox (Δ' = 1 - 4k = 0) ເມື່ອ k ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ປາຣາໂບນຈະບໍ່ຕັດກັບແກນ Ox (Δ' < 0) ເມື່ອ k >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ທີ່ຕັ້ງສຳພັດລະຫວ່າງສອງປາຣາໂບນ (Intersection of Two Parabolas)",
      keyPoint: {
        title: "ຫຼັກການຕັດກັນລະຫວ່າງສອງເສັ້ນໂຄ້ງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອຊອກຫາທີ່ຕັ້ງສຳພັດລະຫວ່າງສອງປາຣາໂບນ y_1 = a_1x² + b_1x + c_1 ແລະ y_2 = a_2x² + b_2x + c_2:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" , whiteSpace: "nowrap"}}>{"ສົມຜົນຈຸດຕັດ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"a_1x² + b_1x + c_1 = a_2x² + b_2x + c_2."}
                <br />
                {"ຖ້າ a_1 ≠ a_2, ສົມຜົນນີ້ຈະເປັນສົມຜົນຂັ້ນສອງ ແລະ ເຮົາກວດສອບ Δ ຂອງມັນ:"}
                <br />
                {"- ຖ້າ Δ > 0: ສອງປາຣາໂບນຕັດກັນຢູ່ 2 ເມັດ."}
                <br />
                {"- ຖ້າ Δ = 0: ສອງປາຣາໂບນສຳຜັດ (ຕິດ) ກັນຢູ່ 1 ເມັດ."}
                <br />
                {"- ຖ້າ Δ < 0: ສອງປາຣາໂບນບໍ່ຕັດກັນ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ປາຣາໂບນ y = x² ແລະ y = -x² + ax - 2. ສົມຜົນ: 2x² - ax + 2 = 0. ມີ Δ = a² - 16. ພວກມັນສຳຜັດກັນເມື່ອ a² - 16 = 0 ⇒ a = ±4!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເງື່ອນໄຂພາຣາມີເຕີໃຫ້ສອງປາຣາໂບນສຳຜັດກັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ສອງປາຣາໂບນ y = x² ແລະ y = -x² + ax - 8. ພວກມັນສຳຜັດກັນ (Δ = a² - 64 = 0):"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າບວກຂອງ a ທີ່ສອດຄ່ອງແມ່ນ a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າລົບຂອງ a ທີ່ສອດຄ່ອງແມ່ນ a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
                {"ຈົ່ງຊອກຫາຕົວປະສານຈຸດຕັດລະຫວ່າງສອງປາຣາໂບນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ສອງປາຣາໂບນ y = x² + 2x ແລະ y = -x² + 4. ຈົ່ງຊອກຫາຄ່າຂອງ x ທັງໝົດທີ່ພວກມັນຕັດກັນ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
              {"ໂຈດຊອກຫາສົມຜົນເສັ້ນຊື່ສຳຜັດ (Tangent Line Equation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຊື່ y = 2x + n ສຳຜັດກັບປາຣາໂບນ y = x² + 4x + 2. ຈົ່ງຊອກຫາຄ່າຂອງ n?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: n ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດເງື່ອນໄຂບໍ່ຕັດກັນຂອງສອງປາຣາໂບນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສອງປາຣາໂບນ y = x² - 2x + 3 ແລະ y = -x² + 2x - k. ຊອກຫາເງື່ອນໄຂຂອງ k ເພື່ອໃຫ້ສອງປາຣາໂບນນີ້ບໍ່ຕັດກັນ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: k >"}</span>
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
            {"ທີ່ຕັ້ງສຳພັດເມື່ອ Δ < 0: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າສົມຜົນຈຸດຕັດລະຫວ່າງປາຣາໂບນ ແລະ ເສັ້ນຊື່ມີ Δ = -12. ທີ່ຕັ້ງສຳພັດຂອງພວກມັນແມ່ນຫຍັງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຈຸດຕັດລະຫວ່າງ y = x² ແລະ y = -x² + 8: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຈຳນວນເມັດຕັດລະຫວ່າງສອງປາຣາໂບນນີ້?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{" ເມັດ"}</span>
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
          <span key="1-1">{"1 (ຄິດໄລ່: x² - 2x + 1 = 0 ມີ Δ = 0 ⇒ 1 ຈຸດຕັດ)"}</span>,
          <span key="1-2">{"2 (ຄິດໄລ່: x² - 5x + 4 = 0 ມີ Δ = 9 > 0 ⇒ 2 ຈຸດຕັດ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"1/4 (ຄິດໄລ່: Δ' = 1 - 4k = 0 ⇒ k = 1/4)"}</span>,
          <span key="2-2">{"1/4 (ຄິດໄລ່: Δ' = 1 - 4k < 0 ⇒ k > 1/4)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"8 (ຄິດໄລ່: a = 8 ເພາະ 8² - 64 = 0)"}</span>,
          <span key="3-2">{"-8 (ຄິດໄລ່: a = -8 ເພາະ (-8)² - 64 = 0)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"1, -2 (ຄິດໄລ່: x² + 2x = -x² + 4 ⇒ 2x² + 2x - 4 = 0 ⇒ x = 1 ຫຼື x = -2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"1 (ຄິດໄລ່: x² + 2x + (2-n) = 0 ມີ Δ' = 1 - 2 + n = 0 ⇒ n = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"-1 (ຄິດໄລ່: 2x² - 4x + 3 + k = 0 ບໍ່ຕັດກັນ ⇒ Δ' = 4 - 6 - 2k < 0 ⇒ k > -1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ບໍ່ຕັດກັນ (ຄິດໄລ່: ຍ້ອນ Δ < 0 ດັ່ງນັ້ນລະບົບສົມຜົນບໍ່ມີໃຈຜົນ, ສອງເສັ້ນບໍ່ຕັດກັນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"2 (ຄິດໄລ່: x² = -x² + 8 ⇒ 2x² = 8 ⇒ x² = 4 ⇒ x = ±2 ⇒ ຕັດກັນ 2 ເມັດ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການວິເຄາະທີ່ຕັ້ງສຳພັດລະຫວ່າງເສັ້ນຊື່ ແລະ ເສັ້ນໂຄ້ງ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ໄຂບັນຫາເລຂາຄະນິດວິເຄາະໄດ້ຢ່າງດີ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
