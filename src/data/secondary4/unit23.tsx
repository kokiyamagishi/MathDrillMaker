import React from "react";
import { UnitData } from "../units2";

export const unit23Data: UnitData = {
  unitNumber: 23,
  unitTitle: "ພາກທີ II - ບົດທີ 23: ລະບົບອະສົມຜົນຂັ້ນສອງ ແລະ ເຄື່ອງໝາຍຂອງຮາກ (Systems of Quadratic Inequalities & Root Signs)",
  unitGoal: "ຮຽນຮູ້ການແກ້ລະບົບອະສົມຜົນຂັ້ນສອງ, ການກວດສອບເຄື່ອງໝາຍຂອງຮາກສົມຜົນ (ຮາກບວກ, ຮາກລົບ, ຮາກຕ່າງເຄື່ອງໝາຍ) ໂດຍໃຊ້ Δ, S, P ແລະ ການປຽບທຽບຮາກກັບຈຳນວນ k",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 103-108",
  subSections: [
    {
      title: "1. ການແກ້ລະບົບອະສົມຜົນຂັ້ນສອງ (Solving Systems of Quadratic Inequalities)",
      keyPoint: {
        title: "ຫຼັກການແກ້ລະບົບອະສົມຜົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ລະບົບອະສົມຜົນແມ່ນການຊອກຫາຫວ່າງໃຈຜົນຮ່ວມ (Intersection) ໂດຍແກ້ແຕ່ລະອະສົມຜົນແຍກກັນ ແລ້ວເອົາມາລວມກັນເທິງເສັ້ນຈຳນວນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຕົວຢ່າງລະບົບອະສົມຜົນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ລະບົບ: { x² - 4 ≥ 0 并且 -x² + 5x - 4 > 0 }"}
                <br />
                {"- ອະສົມຜົນ (1): x² - 4 ≥ 0 ⇒ x ∈ ]-∞, -2] ∪ [2, +∞["}
                <br />
                {"- ອະສົມຜົນ (2): x² - 5x + 4 < 0 ⇒ x ∈ ]1, 4["}
                <br />
                {"- ໃຈຜົນຮ່ວມແມ່ນ: x ∈ [2, 4["}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ການແຕ້ມເສັ້ນຈຳນວນ ແລະ ຂີດຂ້າຫວ່າງທີ່ບໍ່ແມ່ນໃຈຜົນອອກ ຈະຊ່ວຍໃຫ້ຫາຫວ່າງໃຈຜົນຮ່ວມໄດ້ຢ່າງຖືກຕ້ອງ ແລະ ງ່າຍດາຍ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ລະບົບອະສົມຜົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ລະບົບ: { x² - 9 ≥ 0 ແລະ x² - 5x < 0 }. ໃຈຜົນຮ່ວມແມ່ນ ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"["}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ລະບົບ: { x² - 1 > 0 ແລະ x² - 4 < 0 }. ໃຈຜົນຮ່ວມແມ່ນ ]-2, -1[ ∪ ]"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງກວດສອບເຄື່ອງໝາຍຂອງຮາກສົມຜົນຂັ້ນສອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ສົມຜົນ x² - 5x + 6 = 0 ມີ Δ = 1 > 0, S = 5 > 0, P = 6 > 0. ສອງຮາກເປັນຮາກ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ສົມຜົນ x² + 6x + 8 = 0 ມີ Δ = 4 > 0, S = -6 < 0, P = 8 > 0. ສອງຮາກເປັນຮາກ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການປຽບທຽບຮາກສົມຜົນກັບຈຳນວນຈິງ k (Comparing Roots with Real Number k)",
      keyPoint: {
        title: "ຫຼັກການປຽບທຽບຮາກກັບ k",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອປຽບທຽບຮາກ α, β ຂອງສົມຜົນ f(x) = ax² + bx + c = 0 ກັບຈຳນວນຈິງ k, ເຮົາໃຊ້ຫຼັກການ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ເງື່ອນໄຂປຽບທຽບ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ທັງສອງຮາກໃຫຍ່ກວ່າ k (α > k, β > k):"}</strong>{" ຕ້ອງມີ Δ ≥ 0, a·f(k) > 0, ແລະ x_jorn = -b/(2a) > k."}</li>
                <li><strong>{"ທັງສອງຮາກນ້ອຍກວ່າ k (α < k, β < k):"}</strong>{" ຕ້ອງມີ Δ ≥ 0, a·f(k) > 0, ແລະ x_jorn = -b/(2a) < k."}</li>
                <li><strong>{"ຈຳນວນ k ຢູ່ລະຫວ່າງສອງຮາກ (α < k < β):"}</strong>{" ຕ້ອງມີ a·f(k) < 0 (ເງື່ອນໄຂນີ້ພຽງພໍທີ່ຈະຮັບປະກັນ Δ > 0)."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໃຫ້ສົມຜົນ x² - 2x + (m-3) = 0. ເພື່ອໃຫ້ຮາກໜຶ່ງບວກ ແລະ ຮາກໜຶ່ງລົບ (ໝາຍເຖິງ 0 ຢູ່ຫວ່າງກາງຮາກ) ຕ້ອງມີ a·f(0) < 0 ⇒ 1 × (m-3) < 0 ⇒ m < 3!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເງື່ອນໄຂພາຣາມີເຕີ m: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ສົມຜົນ x² - 2(m-1)x + 2m - 5 = 0. ຊອກຫາເງື່ອນໄຂຂອງ m ເພື່ອໃຫ້ສົມຜົນ:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"ມີສອງຮາກຕ່າງເຄື່ອງໝາຍກັນ (ຮາກບວກໜຶ່ງ, ຮາກລົບໜຶ່ງ) ⇒ ຕ້ອງມີ P = 2m - 5 < 0 ⇒ m <"}</span>
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
                {"ຈົ່ງຊອກຫາເງື່ອນໄຂຂອງ a ເພື່ອໃຫ້ 1 ຢູ່ຫວ່າງກາງສອງຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ສົມຜົນ x² - 2ax + a + 5 = 0. ຊອກຫາເງື່ອນໄຂຂອງ a ເພື່ອໃຫ້ 1 ຢູ່ຫວ່າງກາງສອງຮາກ (α < 1 < β)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: a >"}</span>
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
              {"ໂຈດຊອກຫາເງື່ອນໄຂສອງຮາກບວກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສົມຜົນ x² - 2(m+1)x + m + 3 = 0. ຊອກຫາເງື່ອນໄຂຂອງ m ເພື່ອໃຫ້ສົມຜົນມີສອງຮາກບວກຕ່າງກັນ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
              <span>{"ຕອບ: m >"}</span>
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
              {"ໂຈດເງື່ອນໄຂພາຣາມີເຕີລະບົບອະສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊອກຫາຄ່າ k ເພື່ອໃຫ້ລະບົບອະສົມຜົນ { x² - 5x + 4 ≤ 0 ແລະ x - k > 0 } ມີໃຈຜົນຮ່ວມ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
              <span>{"ຕອບ: k <"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ສອງຮາກບວກຕ່າງກັນ: (1) Δ' = (m+1)² - (m+3) = m² + m - 2 > 0 ⇒ m < -2 ຫຼື m > 1. (2) S = 2(m+1) > 0 ⇒ m > -1. (3) P = m+3 > 0 ⇒ m > -3. ໃຈຜົນຮ່ວມແມ່ນ m > 1! ສຳລັບລະບົບອະສົມຜົນ: x²-5x+4 ≤ 0 ⇒ x ∈ [1, 4]. ຕ້ອງມີ x > k ແລະ ຫວ່າງນີ້ຕັດກັນ ⇒ ຕ້ອງມີ k < 4!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ເຄື່ອງໝາຍຂອງຮາກສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສົມຜົນ 2x² - 3x - 5 = 0 ມີສອງຮາກບວກ ຫຼື ລົບ ຫຼື ຕ່າງເຄື່ອງໝາຍ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີຮາກ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ເງື່ອນໄຂຮາກໃຫຍ່ກວ່າ k: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເພື່ອໃຫ້ສົມຜົນ x² - 2x + (m-1) = 0 ມີສອງຮາກໃຫຍ່ກວ່າ 0 (ຮາກບວກ), ຕ້ອງມີ m ໃຫຍ່ກວ່າຈຳນວນໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: m >"}</span>
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
          <span key="1-1">{"3 (ຄິດໄລ່: x² - 9 ≥ 0 ⇒ x ∈ ]-∞, -3] ∪ [3, +∞[. x(x-5) < 0 ⇒ x ∈ ]0, 5[. ໃຈຜົນຮ່ວມແມ່ນ [3, 5[)"}</span>,
          <span key="1-2">{"5 (ຄິດໄລ່: ໃຈຜົນຮ່ວມແມ່ນ [3, 5[)"}</span>,
          <span key="1-3">{"1 (ຄິດໄລ່: x²-1 > 0 ⇒ |x| > 1. x²-4 < 0 ⇒ |x| < 2. ໃຈຜົນຮ່ວມແມ່ນ ]-2, -1[ ∪ ]1, 2[)"}</span>,
          <span key="1-4">{"2 (ຄິດໄລ່: ໃຈຜົນຮ່ວມແມ່ນ ]-2, -1[ ∪ ]1, 2[)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"ບວກທັງສອງ (ຄິດໄລ່: S > 0, P > 0, Δ > 0 ⇒ ສອງຮາກບວກ)"}</span>,
          <span key="2-2">{"ລົບທັງສອງ (ຄິດໄລ່: S < 0, P > 0, Δ > 0 ⇒ ສອງຮາກລົບ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"5/2 (ຄິດໄລ່: P = 2m - 5 < 0 ⇒ m < 5/2)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"6 (ຄິດໄລ່: ຕ້ອງມີ f(1) < 0 ⇒ 1 - 2a + a + 5 < 0 ⇒ 6 - a < 0 ⇒ a > 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"1 (ຄິດໄລ່: Δ' > 0, S > 0, P > 0 ⇒ ໃຈຜົນຮ່ວມແມ່ນ m > 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"4 (ຄິດໄລ່: x ∈ [1, 4] ແລະ x > k ⇒ ຕ້ອງມີ k < 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ຕ່າງເຄື່ອງໝາຍ (ຄິດໄລ່: a = 2, c = -5 ⇒ P = -5/2 < 0 ⇒ ສອງຮາກຕ່າງເຄື່ອງໝາຍກັນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"1 (ຄິດໄລ່: Δ' = 1 - m + 1 ≥ 0 ⇒ m ≤ 2. S = 2 > 0, P = m-1 > 0 ⇒ m > 1. ດັ່ງນັ້ນ 1 < m ≤ 2 ⇒ m > 1)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການແກ້ລະບົບອະສົມຜົນຂັ້ນສອງ ແລະ ການວິເຄາະຮາກສົມຜົນ ແມ່ນຫົວຂໍ້ຫຼັກທີ່ສຳຄັນທີ່ສຸດໃນພຶດຊະຄະນິດ ມ.4. ເຈົ້າເຮັດໄດ້ດີຫຼາຍ!"
  }
};
