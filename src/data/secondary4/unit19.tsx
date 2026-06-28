import React from "react";
import { UnitData } from "../units2";

export const unit19Data: UnitData = {
  unitNumber: 19,
  unitTitle: "ພາກທີ II - ບົດທີ 19: ເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ (Sign of Quadratic Trinomial)",
  unitGoal: "ຮຽນຮູ້ການກວດສອບເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ f(x) = ax² + bx + c ໂດຍອີງໃສ່ສຳປະສິດ a ແລະ ຄ່າຂອງສາມກ່ຽວ Δ (Delta)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 89-91",
  subSections: [
    {
      title: "1. ເຄື່ອງໝາຍຂອງ f(x) ເມື່ອ Δ ≤ 0 (Sign when Discriminant is Non-Positive)",
      keyPoint: {
        title: "ຫຼັກການເຄື່ອງໝາຍເມື່ອ Δ ≤ 0",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຄື່ອງໝາຍຂອງ f(x) = ax² + bx + c ເມື່ອ Δ = b² - 4ac ບໍ່ເປັນບວກ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ກໍລະນີ Δ < 0 (ບໍ່ມີຮາກຕົວຈິງ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"f(x) ຈະມີເຄື່ອງໝາຍດຽວກັນກັບສຳປະສິດ a ສະເໝີ ສໍາລັບທຸກໆ x ∈ ℝ:"}
                <br />
                {"- ຖ້າ a > 0 ⇒ f(x) > 0 (ກຣາຟຢູ່ເໜືອແກນ Ox ທັງໝົດ)."}
                <br />
                {"- ຖ້າ a < 0 ⇒ f(x) < 0 (ກຣາຟຢູ່ກ້ອງແກນ Ox ທັງໝົດ)."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" , whiteSpace: "nowrap"}}>{"ກໍລະນີ Δ = 0 (ມີຮາກຄູ່ x_0 = -b/2a):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"f(x) ມີເຄື່ອງໝາຍດຽວກັນກັບ a ສໍາລັບທຸກ x ≠ x_0, ແລະ f(x_0) = 0:"}
                <br />
                {"- ຖ້າ a > 0 ⇒ f(x) ≥ 0 ສໍາລັບທຸກ x ∈ ℝ (ກຣາຟສຳຜັດແກນ Ox ຢູ່ເມັດ x_0)."}
                <br />
                {"- ຖ້າ a < 0 ⇒ f(x) ≤ 0 ສໍາລັບທຸກ x ∈ ℝ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: f(x) = 2x² - 4x + 3 ມີ a=2 > 0 ແລະ Δ = 16 - 24 = -8 < 0 ⇒ f(x) > 0 ສໍາລັບທຸກໆຈຳນວນຈິງ x!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ Δ ແລະ ບອກເຄື່ອງໝາຍຂອງໄຕພົດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) f(x) = 3x² - 2x + 4 ມີ Δ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{". ດັ່ງນັ້ນ, ເຄື່ອງໝາຍຂອງ f(x) ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" 0 ສໍາລັບທຸກໆ x."}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) f(x) = -x² + 4x - 4 ມີ Δ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{". ດັ່ງນັ້ນ, ເຄື່ອງໝາຍຂອງ f(x) ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" 0 ສໍາລັບທຸກໆ x."}</span>
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
                {"ຈົ່ງຊອກຫາເງື່ອນໄຂຂອງ a ແລະ Δ ເພື່ອໃຫ້ຕຳລາເປັນບວກສະເໝີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) ໃຫ້ f(x) = ax² + bx + c > 0 ສໍາລັບທຸກໆ x ∈ ℝ ⇒ ຕ້ອງມີ a"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{" 0 ແລະ Δ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" 0."}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) ໃຫ້ f(x) = ax² + bx + c < 0 ສໍາລັບທຸກໆ x ∈ ℝ ⇒ ຕ້ອງມີ a"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{" 0 ແລະ Δ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" 0."}</span>
                </div>
              </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເຄື່ອງໝາຍຂອງ f(x) ເມື່ອ Δ > 0 (Sign when Discriminant is Positive)",
      keyPoint: {
        title: "ຫຼັກການ 'ທາງໃນເຄື່ອງໝາຍຕ່າງ a, ທາງນອກເຄື່ອງໝາຍຄື a'",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອ Δ > 0, ສົມຜົນ f(x) = 0 ມີ 2 ຮາກແຍກກັນແມ່ນ α ແລະ β (ສົມມຸດ α < β):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ຕາຕະລາງເຄື່ອງໝາຍ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຫວ່າງລະຫວ່າງສອງຮາກ ]α, β[: f(x) ມີເຄື່ອງໝາຍ ຕ່າງ ກັບ a."
                }
                <br />
                {"- ຫວ່າງນອກສອງຮາກ ]-∞, α[ ແລະ ]β, +∞[: f(x) ມີເຄື່ອງໝາຍ ຄື ກັບ a."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ເຄື່ອງໝາຍໃນຫວ່າງຮາກແມ່ນ 'ກົງກັນຂ້າມກັບ a' (opposite sign of a) ແລະ ຫວ່າງນອກແມ່ນ 'ຄືກັນກັບ a' (same sign as a)!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຫວ່າງເຄື່ອງໝາຍຂອງໄຕພົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ f(x) = x² - 5x + 6 (ຮາກແມ່ນ x = 2 ແລະ x = 3, a = 1 > 0):"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) ຫວ່າງທີ່ f(x) < 0 ແມ່ນຫວ່າງ ]"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"["}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຫວ່າງທີ່ f(x) > 0 ແມ່ນຫວ່າງ ]-∞, 2[ ∪ ]"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", +∞["}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າຂອງ x ທີ່ເຮັດໃຫ້ f(x) ມີເຄື່ອງໝາຍລົບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ f(x) = -x² + x + 12 (ຮາກແມ່ນ x = -3 ແລະ x = 4, a = -1 < 0). ຫວ່າງທີ່ f(x) > 0 ແມ່ນຫວ່າງໃດ?"}
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
              {"ໂຈດຊອກຫາເງື່ອນໄຂພາຣາມີເຕີ (Parameter Constraints): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາເງື່ອນໄຂຂອງ c ເພື່ອໃຫ້ f(x) = x² - 6x + c > 0 ສໍາລັບທຸກໆ x ∈ ℝ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ເງື່ອນໄຂແມ່ນ c >"}</span>
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
              {"ໂຈດວິເຄາະເຄື່ອງໝາຍຈາກກຣາຟ (Graphical Sign Analysis): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປາຣາໂບນ y = f(x) ຕັດແກນ Ox ຢູ່ສອງເມັດ A(1, 0) ແລະ B(5, 0). ຖ້າ f(0) = -5. ຈົ່ງບອກວ່າ f(3) ມີເຄື່ອງໝາຍບວກ (+) ຫຼື ລົບ (-)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເຄື່ອງໝາຍຂອງ f(3) ແມ່ນ"}</span>
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
            {"ເຄື່ອງໝາຍຂອງໄຕພົດທີ່ມີ Δ < 0: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໄຕພົດ f(x) = -2x² + 3x - 5 ມີເຄື່ອງໝາຍແນວໃດສໍາລັບທຸກ x ∈ ℝ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເຄື່ອງໝາຍ"}</span>
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
            {"ເຄື່ອງໝາຍໃນຫວ່າງຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ f(x) = 2x² - 8. ຮາກແມ່ນ x = -2 ແລະ x = 2. ໃນຫວ່າງ ]-2, 2[, f(x) ມີເຄື່ອງໝາຍແນວໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເຄື່ອງໝາຍ"}</span>
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
          <span key="1-1">{"-44 (ຄິດໄລ່: Δ = (-2)² - 4(3)(4) = 4 - 48 = -44)"}</span>,
          <span key="1-2">{"{ \"> \"} (ຄິດໄລ່: a = 3 > 0, Δ < 0 ⇒ f(x) > 0 ບວກສະເໝີ)"}</span>,
          <span key="1-3">{"0 (ຄິດໄລ່: Δ = 4² - 4(-1)(-4) = 16 - 16 = 0)"}</span>,
          <span key="1-4">{"{ \"≤ \"} (ຄິດໄລ່: a = -1 < 0, Δ = 0 ⇒ f(x) ≤ 0 ลົບ ຫຼື ເທົ່າກັບ 0)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"{ \"> \"} (ຄິດໄລ່: ຕ້ອງມີ a > 0)"}</span>,
          <span key="2-2">{"{ \"< \"} (ຄິດໄລ່: ຕ້ອງມີ Δ < 0 ເພື່ອບໍ່ຕັດແກນ Ox)"}</span>,
          <span key="2-3">{"{ \"< \"} (ຄິດໄລ່: ຕ້ອງມີ a < 0)"}</span>,
          <span key="2-4">{"{ \"< \"} (ຄິດໄລ່: ຕ້ອງມີ Δ < 0)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"2 (ຄິດໄລ່: f(x) < 0 ຢູ່ຫວ່າງໃນລະຫວ່າງຮາກ ]2, 3[, ເພາະ a=1 > 0)"}</span>,
          <span key="3-2">{"3 (ຄິດໄລ່: ຫວ່າງນອກຮາກ f(x) > 0)"}</span>,
          <span key="3-3">{"3 (ຄິດໄລ່: f(x) > 0 ຢູ່ຫວ່າງນອກຮາກ ]-∞, 2[ ∪ ]3, +∞[)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"-3 (ຄິດໄລ່: ຍ້ອນ a = -1 < 0, ຫວ່າງໃນ ]-3, 4[ ຈະຕ່າງເຄື່ອງໝາຍກັບ a ⇒ f(x) > 0)"}</span>,
          <span key="4-2">{"4 (ຄິດໄລ່: ຫວ່າງໃຈຜົນແມ່ນ ]-3, 4[)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"9 (ຄິດໄລ່: Δ = 36 - 4c < 0 ⇒ 4c > 36 ⇒ c > 9)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"ບວກ (ຄິດໄລ່: a < 0 ຍ້ອນ f(0) < 0, ດັ່ງນັ້ນໃນຫວ່າງ ]1, 5[ ເຄື່ອງໝາຍຂອງ f(x) ຈະກົງກັນຂ້າມກັບ a ⇒ f(3) > 0 ເຊິ່ງແມ່ນເຄື່ອງໝາຍບວກ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ລົບ (ຄິດໄລ່: Δ = 9 - 40 = -31 < 0 ແລະ a = -2 < 0 ⇒ f(x) ຈະລົບສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"ລົບ (ຄິດໄລ່: a = 2 > 0, ຫວ່າງໃນ ]-2, 2[ ຈະມີເຄື່ອງໝາຍກົງກັນຂ້າມກັບ a ⇒ f(x) < 0)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການກວດສອບເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ ແມ່ນພື້ນຖານທີ່ສໍາຄັນທີ່ສຸດໃນການແກ້ອະສົມຜົນຂັ້ນສອງ ແລະ ບັນຫາຂັ້ນສູງອື່ນໆ. ເຈົ້າເຮັດໄດ້ດີຫຼາຍ!"
  }
};
