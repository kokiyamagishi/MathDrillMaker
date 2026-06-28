import React from "react";
import { UnitData } from "../units2";

export const unit20Data: UnitData = {
  unitNumber: 20,
  unitTitle: "ພາກທີ II - ບົດທີ 20: ອະສົມຜົນຂັ້ນສອງ ແລະ ຈຳນວນໃຈຜົນ (Quadratic Inequalities & Number of Roots)",
  unitGoal: "ຮຽນຮູ້ການແກ້ອະສົມຜົນຂັ້ນສອງ ax² + bx + c ≥ 0 (ຫຼື ≤ 0), ການພິສູດຈຳນວນໃຈຜົນຂອງສົມຜົນຂັ້ນສອງໂດຍໃຊ້ Δ, ແລະ ການຊອກຫາໃຈຜົນຖ້ວນຂອງສົມຜົນ 2 ຕົວປ່ຽນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 92-96",
  subSections: [
    {
      title: "1. ການແກ້ອະສົມຜົນຂັ້ນສອງ (Solving Quadratic Inequalities)",
      keyPoint: {
        title: "ຂັ້ນຕອນການແກ້ອະສົມຜົນຂັ້ນສອງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ອະສົມຜົນ ax² + bx + c > 0 (ຫຼື < 0, ≥ 0, ≤ 0) ແມ່ນການຫາຫວ່າງຂອງ x ທີ່ສອດຄ່ອງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" }, whiteSpace: "nowrap"}>{"ຂັ້ນຕອນປະຕິບັດ:"}</span>
              <ol style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ແກ້ສົມຜົນ ax² + bx + c = 0 ເພື່ອຊອກຫາຮາກ α ແລະ β (ສົມມຸດ α < β)."}</li>
                <li>{"ສ້າງຕາຕະລາງເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ (ທາງໃນຫວ່າງຮາກຕ່າງເຄື່ອງໝາຍກັບ a, ທາງນອກຄືກັບ a)."}</li>
                <li>{"ເລືອກຫວ່າງທີ່ສອດຄ່ອງກັບເຄື່ອງໝາຍຂອງອະສົມຜົນ."}</li>
              </ol>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: x² - 3x ≤ 0. ຮາກແມ່ນ 0 ແລະ 3. ຍ້ອນ a = 1 > 0 (ຫວ່າງໃນເປັນລົບ) ⇒ ໃຈຜົນແມ່ນ x ∈ [0, 3]!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ອະສົມຜົນຂັ້ນສອງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) x² - 4x ≤ 0 ⇒ ຮາກແມ່ນ x = 0 ແລະ x = 4. ກຸ່ມໃຈຜົນແມ່ນ ["}</span>
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
                  <span>{"(2) -x² + 7x - 10 > 0 (ຫຼື x² - 7x + 10 < 0) ⇒ ກຸ່ມໃຈຜົນແມ່ນ ]"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"["}</span>
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
                {"ຈົ່ງຊອກຫາຈຳນວນໃຈຜົນຂອງສົມຜົນໂດຍໃຊ້ Δ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ສົມຜົນ 2x² - 3x + 5 = 0 ມີ Δ = -31 < 0. ຈຳນວນໃຈຜົນຕົວຈິງແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ໃຈຜົນ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ສົມຜົນ 3x² - 6x + 3 = 0 ມີ Δ = 0. ຈຳນວນໃຈຜົນຕົວຈິງແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ໃຈຜົນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເງື່ອນໄຂພາຣາມີເຕີ ແລະ ໃຈຜົນຖ້ວນ (Parameter Fitting & Integer Solutions)",
      keyPoint: {
        title: "ການແກ້ບັນຫາຂັ້ນສູງດ້ວຍ Δ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ການຊອກຫາເງື່ອນໄຂເພື່ອໃຫ້ຕຳລາເປັນບວກສະເໝີ y > 0 ສໍາລັບທຸກ x ∈ ℝ:"}
              <br />
              {"  ຕ້ອງມີ a > 0 ແລະ Δ < 0 (ກຣາຟບໍ່ຕັດ Ox ແລະ ຫງາຍຂຶ້ນ)."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"ໃຈຜົນຖ້ວນຂອງສົມຜົນສອງຕົວປ່ຽນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ສໍາລັບສົມຜົນຂັ້ນສອງທີ່ໃຫ້ມີຕົວປ່ຽນ x ຕົວຈິງ, ເຮົາຈັດເປັນສົມຜົນຂັ້ນສອງຂອງ x:"}
                <br />
                {"x² - 2(y+1)x + (2y² - 8y + 10) = 0."}
                <br />
                {"ເພື່ອໃຫ້ມີ x ຕົວຈິງ, ຕ້ອງມີ Δ' ≥ 0 ⇒ -(y - 3)² ≥ 0 ⇒ y = 3 (ຍ້ອນກຳລັງສອງບໍ່ມີທາງລົບ)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອໄດ້ y = 3, ແທນຄືນໃສ່ສົມຜົນເພື່ອຊອກຫາ x: x² - 8x + 16 = 0 ⇒ (x-4)² = 0 ⇒ x = 4. ຈະໄດ້ໃຈຜົນຖ້ວນພຽງໜຶ່ງດຽວແມ່ນ (4, 3)!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເງື່ອນໄຂພາຣາມີເຕີ k: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຊອກຫາຄ່າ k ເພື່ອໃຫ້ສົມຜົນ x² - 2kx + 9 = 0 ມີໃຈຜົນຕົວຈິງ:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"ເງື່ອນໄຂ Δ' = k² - 9 ≥ 0. ດັ່ງນັ້ນ k ຕ້ອງສອດຄ່ອງ k ≤"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{" ຫຼື k ≥"}</span>
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
                {"ຈົ່ງຊອກຫາໃຈຜົນຖ້ວນ (x, y) ຂອງສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ສໍາລັບສົມຜົນ: x² - 2(y-1)x + 2y² - 4y + 5 = 0. ຊອກຫາຄ່າຂອງ y ທີ່ເປັນໄປໄດ້?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: y ="}</span>
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
              {"ໂຈດຊອກຫາເງື່ອນໄຂເພື່ອໃຫ້ຕຳລາເປັນບວກສະເໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊອກຫາຄ່າ k ເພື່ອໃຫ້ໄຕພົດ f(x) = x² + 2(k+1)x + (k+3) > 0 ສໍາລັບທຸກໆ x ∈ ℝ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຕອບ: ຫວ່າງຂອງ k ແມ່ນ ]"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"["}</span>
                </div>
              </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການແກ້ອະສົມຜົນລະຫວ່າງສອງປາຣາໂບນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຫວ່າງໃຈຜົນຂອງອະສົມຜົນ x² - 4x + 3 < 2x - 2?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຕອບ: ຫວ່າງແມ່ນ ]"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"["}</span>
                </div>
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
            {"ຈຳນວນໃຈຜົນຕົວຈິງຂອງສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສົມຜົນ 4x² - 12x + 9 = 0 ມີຈັກໃຈຜົນຕົວຈິງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{" ໃຈຜົນ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ອະສົມຜົນທີ່ມີ Δ < 0: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ອະສົມຜົນ x² - 2x + 5 < 0 ມີກຸ່ມໃຈຜົນແນວໃດ (ເພາະ Δ = -16)?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ກຸ່ມໃຈຜົນແມ່ນ"}</span>
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
          <span key="1-1">{"0 (ຄິດໄລ່: x(x - 4) ≤ 0 ⇒ x ∈ [0, 4])"}</span>,
          <span key="1-2">{"4 (ຄິດໄລ່: x ∈ [0, 4])"}</span>,
          <span key="1-3">{"2 (ຄິດໄລ່: x² - 7x + 10 < 0 ⇒ (x-2)(x-5) < 0 ⇒ x ∈ ]2, 5[)"}</span>,
          <span key="1-4">{"5 (ຄິດໄລ່: x ∈ ]2, 5[)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"0 (ຄິດໄລ່: Δ = 9 - 40 = -31 < 0 ⇒ ບໍ່ມີໃຈຜົນຕົວຈິງ)"}</span>,
          <span key="2-2">{"1 (ຄິດໄລ່: Δ = 36 - 36 = 0 ⇒ ມີ 1 ໃຈຜົນຄູ່)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"-3 (ຄິດໄລ່: Δ' = k² - 9 ≥ 0 ⇒ k ≤ -3 ຫຼື k ≥ 3)"}</span>,
          <span key="3-2">{"3 (ຄິດໄລ່: k ≤ -3 ຫຼື k ≥ 3)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"2 (ຄິດໄລ່: ຈັດຮູບຮ່າງໄດ້ Δ'/4 = -(y - 2)² ≥ 0 ⇒ y = 2. ແທນຄືນໄດ້ x = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"-2, 1 (ຄິດໄລ່: Δ' = (k+1)² - (k+3) < 0 ⇒ k² + k - 2 < 0 ⇒ -2 < k < 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"1, 5 (ຄິດໄລ່: x² - 6x + 5 < 0 ⇒ (x-1)(x-5) < 0 ⇒ 1 < x < 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1 (ຄິດໄລ່: Δ = 144 - 144 = 0 ⇒ ມີ 1 ໃຈຜົນຄູ່)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"ບໍ່ມີໃຈຜົນ (ຄິດໄລ່: ຍ້ອນ Δ = -16 < 0 ແລະ a = 1 > 0, ໄຕພົດເປັນບວກສະເໝີ, ບໍ່ມີທາງຫຼຸດ 0)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າໄດ້ສໍາເລັດການແກ້ອະສົມຜົນຂັ້ນສອງ ແລະ ການວິເຄາະຈຳນວນໃຈຜົນຢ່າງສົມບູນແບບແລ້ວ. ນີ້ແມ່ນບົດຮຽນທີ່ຍອດຢ້ຽມຫຼາຍ!"
  }
};
