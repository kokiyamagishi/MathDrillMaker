import React from "react";
import { UnitData } from "../units2";

export const unit18Data: UnitData = {
  unitNumber: 18,
  unitTitle: "ພາກທີ II - ບົດທີ 18: ຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດຂອງຕຳລາຂັ້ນສອງ (Maximum and Minimum of Quadratic Functions)",
  unitGoal: "ຮຽນຮູ້ການຊອກຫາຄ່າສູງສຸດ (max) ແລະ ຄ່າຕ່ຳສຸດ (min) ຂອງຕຳລາຂັ້ນສອງ y = ax² + bx + c ທັງໃນກໍລະນີບໍ່ມີຂອບເຂດ ແລະ ກໍລະນີມີຂອບເຂດກຳນົດຫວ່າງຂອງ x",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 86-88",
  subSections: [
    {
      title: "1. ຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດໃນຫວ່າງເສລີ (Global Extrema without Bounds)",
      keyPoint: {
        title: "ຫຼັກການຊອກຫາຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດທົ່ວໄປ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດຂອງ y = ax² + bx + c ຈະເກີດຂຶ້ນຢູ່ເມັດຈອມ S(p, q) ສະເໝີ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"ຖ້າ a > 0 (ປາຣາໂບນຫງາຍ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ມີຄ່າຕ່ຳສຸດແມ່ນ: min y = q = -Δ/(4a) ເມື່ອ x = -b/(2a)."}
                <br />
                {"- ບໍ່ມີຄ່າສູງສຸດ (max y ບໍ່ກຳນົດ)."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#C62828" }, whiteSpace: "nowrap"}>{"ຖ້າ a < 0 (ປາຣາໂບນຂວ້ຳ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ມີຄ່າສູງສຸດແມ່ນ: max y = q = -Δ/(4a) ເມື່ອ x = -b/(2a)."}
                <br />
                {"- ບໍ່ມີຄ່າຕ່ຳສຸດ (min y ບໍ່ກຳນົດ)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ວິທີຜັນປ່ຽນ Canonical: y = a(x - p)² + q. ຄ່າສຸດຂີດແມ່ນ q ແລະ ມັນເກີດຂຶ້ນເມື່ອ x = p!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າສຸດຂີດຂອງຕຳລາຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) y = 2x² - 8x + 5 ⇒ ຜັນປ່ຽນເປັນ 2(x - 2)² - 3. ຄ່າຕ່ຳສຸດ min y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) y = -x² + 6x - 4 ⇒ ຜັນປ່ຽນເປັນ -(x - 3)² + 5. ຄ່າສູງສຸດ max y ="}</span>
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
                {"ຈົ່ງຫາຄ່າສຸດຂີດຂອງຕຳລາກຳລັງສອງທົ່ວໄປ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) y = x² - 2x + 3 ⇒ ມີຄ່າຕ່ຳສຸດ min y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) y = -2x² - 8x - 1 ⇒ ມີຄ່າສູງສຸດ max y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດໃນຫວ່າງກຳນົດ (Bounded Extrema on Interval [x₁, x₂])",
      keyPoint: {
        title: "ຫຼັກການຄິດໄລ່ໃນຫວ່າງກຳນົດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຕົວປ່ຽນ x ຖືກຈຳກັດໃນຫວ່າງ [x_1, x_2], ວິທີຊອກຫາ max ແລະ min ແມ່ນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }, whiteSpace: "nowrap"}>{"ຂັ້ນຕອນການຊອກຫາ:"}</span>
              <ol style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ຊອກຫາຕົວປະສານ x ຂອງເມັດຈອມ: p = -b/(2a)."}</li>
                <li>{"ກວດເບິ່ງວ່າ p ຢູ່ຫວ່າງ [x_1, x_2] ຫຼື ບໍ່?"}</li>
                <li>{"ຄິດໄລ່ຄ່າ y ຢູ່ 3 ເມັດຄື: f(x_1), f(x_2), ແລະ f(p) (ຖ້າ p ຢູ່ຫວ່າງນັ້ນ)."}</li>
                <li>{"ປຽບທຽບຄ່າທັງໝົດ: ຄ່າຫຼາຍສຸດແມ່ນ max, ຄ່ານ້ອຍສຸດແມ່ນ min."}</li>
              </ol>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: y = x² - 2x + 1 ໃສ່ຫວ່າງ [2, 4]. ເມັດຈອມແມ່ນ x = 1 (ບໍ່ນອນໃນຫວ່າງ [2, 4]). f(2) = 1, f(4) = 9 ⇒ min y = 1, max y = 9!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາ max ແລະ min ຂອງຕຳລາໃນຫວ່າງທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"(1) y = (x - 1)² ໃນຫວ່າງ [0, 3] (ເມັດຈອມ x=1 ຢູ່ຫວ່າງນີ້) ⇒ min y ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{", max y ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"(2) y = -x² + 4x ໃນຫວ່າງ [0, 1] (ເມັດຈອມ x=2 ຢູ່ນອກຫວ່າງ) ⇒ min y ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{", max y ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  </div>
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
                {"ຈົ່ງຄິດໄລ່ຄ່າສຸດຂີດຈາກການຍ້າຍຂະໜານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຕຳລາ y = -x² + 6x + c ມີຄ່າສູງສຸດແມ່ນ 4. ຈົ່ງຊອກຫາຄ່າຂອງ c?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: c ="}</span>
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
              {"ໂຈດການຊອກຫາຜົນບວກສອງຕົວປ່ຽນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກຳນົດໃຫ້ x + y = 6. ຈົ່ງຊອກຫາຄ່າຕ່ຳສຸດ (minimum) ຂອງຜົນບວກກຳລັງສອງ P = x² + y²?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: P_min ="}</span>
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
              {"ໂຈດການນຳໃຊ້ຕົວຈິງ (ຂອບເຂດເນື້ອທີ່ສູງສຸດ): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມີຮົ້ວອ້ອມຍາວ 40 ແມັດ ເພື່ອອ້ອມດິນຮູບສາມແຈສາກ (ຫຼື ຮູບສີ່ແຈສາກທີ່ມີ 3 ດ້ານ ເພາະອີກດ້ານຕິດຝາ). ໃນກໍລະນີອ້ອມຮູບສີ່ແຈສາກທີ່ມີ 4 ດ້ານ, ເນື້ອທີ່ສູງສຸດ S ທີ່ອ້ອມໄດ້ແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: S_max ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{" ແມັດມົນທົນ"}</span>
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
            {"ຄ່າສຸດຂີດຂອງຕຳລາຂວ້ຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຕຳລາ y = -3x² + 12x + 1 ມີຄ່າສູງສຸດ (max y) ເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: max y ="}</span>
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
            {"ຄ່າສຸດຂີດຂອງຕຳລາໃນຫວ່າງທີ່ບໍ່ຜ່ານເມັດຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຕຳລາ y = x² - 2x + 5 ໃນຫວ່າງ [2, 5] (ເມັດຈອມ x=1 ຢູ່ນອກຫວ່າງ) ມີຄ່າຕ່ຳສຸດ min y ເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: min y ="}</span>
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
          <span key="1-1">{"-3 (ຄິດໄລ່: ຕ່ຳສຸດແມ່ນ min y = -3)"}</span>,
          <span key="1-2">{"5 (ຄິດໄລ່: ສູງສຸດແມ່ນ max y = 5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"2 (ຄິດໄລ່: y = (x - 1)² + 2 ⇒ min y = 2)"}</span>,
          <span key="2-2">{"7 (ຄິດໄລ່: y = -2(x + 2)² + 7 ⇒ max y = 7)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"0 (ຄິດໄລ່: ຕ່ຳສຸດເກີດຂຶ້ນຢູ່ຈຸດຈອມ x=1, y = 0)"}</span>,
          <span key="3-2">{"4 (ຄິດໄລ່: ສູງສຸດເກີດຂຶ້ນຢູ່ສົ້ນ x=3, y = (3-1)² = 4)"}</span>,
          <span key="3-3">{"0 (ຄິດໄລ່: ຕ່ຳສຸດຢູ່ສົ້ນ x=0, y = 0)"}</span>,
          <span key="3-4">{"3 (ຄິດໄລ່: ສູງສຸດຢູ່ສົ້ນ x=1, y = -1 + 4 = 3)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"-5 (ຄິດໄລ່: y = -(x - 3)² + 9 + c ⇒ ສູງສຸດແມ່ນ 9 + c = 4 ⇒ c = -5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"18 (ຄິດໄລ່: P = x² + (6-x)² = 2x² - 12x + 36 = 2(x-3)² + 18 ⇒ P_min = 18)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"100 (ຄິດໄລ່: x + y = 20 ⇒ S = x(20-x) = -(x-10)² + 100 ⇒ S_max = 100)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"13 (ຄິດໄລ່: y = -3(x - 2)² + 12 + 1 = -3(x-2)² + 13 ⇒ max y = 13)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"5 (ຄິດໄລ່: ເພາະ x=1 ຢູ່ນອກຫວ່າງ, ຄິດໄລ່ f(2) = 4-4+5 = 5 ແລະ f(5) = 25-10+5 = 20 ⇒ min y = 5)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ເຈົ້າສາມາດຊອກຫາຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດຂອງຕຳລາຂັ້ນສອງໄດ້ຢ່າງຄ່ອງແຄ້ວ ທັງໃນກໍລະນີທົ່ວໄປ ແລະ ໃນຫວ່າງຈຳກັດ. ນີ້ແມ່ນຫົວຂໍ້ທີ່ນຳໃຊ້ຫຼາຍໃນຊີວິດຈິງ! ສູ້ໆຕໍ່ໄປ!"
  }
};
