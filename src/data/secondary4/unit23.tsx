import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit23Data: UnitData = {
  unitNumber: 23,
  unitTitle: "ພາກທີ II - ບົດທີ 23: ເຄື່ອງໝາຍຂອງໃຈຜົນ ແລະ ລະບົບອະສົມຜົນຂັ້ນສອງ",
  unitGoal:
    "ຮຽນຮູ້ວິທີພິຈາລະນາເຄື່ອງໝາຍບວກ/ລົບ ຂອງສອງໃຈຜົນ ໂດຍອີງໃສ່ຄ່າ Δ, ຜົນບວກ S ແລະ ຜົນຄູນ P ພ້ອມທັງວິທີແກ້ລະບົບອະສົມຜົນຂັ້ນສອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 23 ໜ້າ 133-138",
  subSections: [
    {
      title: "1. ເງື່ອນໄຂເຄື່ອງໝາຍຂອງສອງໃຈຜົນ (Conditions for Sign of Roots)",
      keyPoint: {
      title: "1. ເງື່ອນໄຂເຄື່ອງໝາຍຂອງສອງໃຈຜົນ (Conditions for Sign of Roots)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອພິຈາລະນາເຄື່ອງໝາຍຂອງສອງໃຈຜົນ x₁ ແລະ x₂ ໂດຍບໍ່ຕ້ອງແກ້ສົມຜົນ, ເຮົາໃຊ້ເງື່ອນໄຂຕໍ່ໄປນີ້:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ສອງໃຈຜົນມີເຄື່ອງໝາຍກົງກັນຂ້າມ (Opposite Signs):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"P = x₁ · x₂ < 0  (ບໍ່ຈຳເປັນຕ້ອງກວດ Δ ຍ້ອນວ່າ Δ ຈະໃຫຍ່ກວ່າສູນສະເໝີ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ສອງໃຈຜົນເປັນຄ່າບວກທັງສອງ (Both Positive):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ເງື່ອນໄຂປະສົມ: "}
                <strong style={{ color: "#D84315" }}>{"Δ ≥ 0,  S = x₁ + x₂ > 0,  P = x₁ · x₂ > 0"}</strong>
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ສອງໃຈຜົນເປັນຄ່າລົບທັງສອງ (Both Negative):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"%ເງື່ອນໄຂປະສົມ: "}
                <strong style={{ color: "#D84315" }}>{"Δ ≥ 0,  S = x₁ + x₂ < 0,  P = x₁ · x₂ > 0"}</strong>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ໄວ້ວ່າ ຖ້າຜົນຄູນ P = c/a < 0 ໝາຍຄວາມວ່າຮາກທັງສອງມີເຄື່ອງໝາຍຕ່າງກັນທັນທີເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງພິຈາລະນາເຄື່ອງໝາຍຂອງສອງໃຈຜົນ ໂດຍນຳໃຊ້ຫຼັກການວີແອດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ໃຫ້ສົມຜົນ x² - 5x + 6 = 0 (ມີ Δ = 1, S = 5, P = 6). ສອງໃຈຜົນນີ້ມີເຄື່ອງໝາຍແນວໃດ? (ຕອບ: ບວກທັງສອງ, ລົບທັງສອງ, ຫຼື ຕ່າງເຄື່ອງໝາຍ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ສົມຜົນ x² - 3x - 10 = 0 (ມີ P = -10). ສອງໃຈຜົນນີ້ມີເຄື່ອງໝາຍແນວໃດ? (ຕອບ ບວກທັງສອງ, ລົບທັງສອງ, ຫຼື ຕ່າງເຄື່ອງໝາຍ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ບົດຮຽນພື້ນຖານ",
      keyPoint: { content: <span /> },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ລະບົບອະສົມຜົນຂັ້ນສອງພື້ນຖານ (ຊອກຫວ່າງຮ່ວມກັນ): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ແກ້ລະບົບອະສົມຜົນ x > 2 ແລະ x² - 9 < 0 (ຫວ່າງໃຈຜົນແມ່ນ -3 < x < 3). ຫວ່າງໃຈຜົນຮ່ວມແມ່ນເທົ່າໃດ? (ຕອບແບບ a < x < b):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກ້ລະບົບອະສົມຜົນ x < 4 ແລະ x² - 4 > 0 (ຫວ່າງໃຈຜົນແມ່ນ x < -2 ຫຼື x > 2). ຫວ່າງໃຈຜົນຮ່ວມທີ່ມີແຕ່ຄ່າບວກແມ່ນເທົ່າໃດ? (ຕອບແບບ a < x < b):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຕັ້ງເງື່ອນໄຂລະບົບອະສົມຜົນສຳລັບຕົວປ່ຽນ m ເດີ້! ບົດທ້າທາຍ 2: ແກ້ອະສົມຜົນແຕ່ລະອັນ ແລ້ວນຳມາແຕ້ມເສັ້ນສະແດງຫວ່າງຮ່ວມກັນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາເງື່ອນໄຂ m ທີ່ສອດຄ່ອງກັບເຄື່ອງໝາຍຂອງໃຈຜົນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ຊອກ m ເພື່ອໃຫ້ສົມຜົນ x² - 4x + m = 0 ມີສອງໃຈຜົນເປັນຄ່າບວກທັງສອງ. ຄ່າ m ຕ້ອງສອດຄ່ອງກັບ 0 < m ≤ K. ຄ່າ K ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: Δ = 16 - 4m ≥ 0 ແລະ P = m > 0):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: K ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຊອກ m ເພື່ອໃຫ້ສົມຜົນ x² - 2x + m - 3 = 0 ມີສອງໃຈຜົນຕ່າງເຄື່ອງໝາຍກັນ. ຄ່າ m ຕ້ອງນ້ອຍກວ່າຕົວເລກໃດ? (ຄຳແນະນຳ: P = m - 3 < 0):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m <"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ລະບົບອະສົມຜົນຂັ້ນສອງທີ່ຊັບຊ້ອນ (System of Quadratic Inequalities): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໃຫ້ລະບົບອະສົມຜົນ x² - 4 < 0 (ຫວ່າງແມ່ນ -2 < x < 2) ແລະ x² - 1 > 0 (ຫວ່າງແມ່ນ x < -1 ຫຼື x > 1). ຫວ່າງໃຈຜົນຮ່ວມໃນສ່ວນຄ່າບວກແມ່ນເທົ່າໃດ? (ຕອບແບບ a < x < b):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ລະບົບອະສົມຜົນ x² - 5x + 6 < 0 (ຫວ່າງແມ່ນ 2 < x < 3) ແລະ x > 2.5. ຫວ່າງໃຈຜົນຮ່ວມແມ່ນເທົ່າໃດ? (ຕອບແບບ a.b < x < c, ຕົວຢ່າງ: 2.5 < x < 3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາເງື່ອນໄຂຂອງ m ເພື່ອໃຫ້ຮາກມີເຄື່ອງໝາຍລົບທັງສອງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ສົມຜົນ x² + 6x + m = 0 ມີສອງໃຈຜົນ. ເງື່ອນໄຂຜົນຄູນ P = m ຕ້ອງໃຫຍ່ກວ່າສູນ (m > 0) ແລະ Δ ≥ 0. ໃຫ້ຫາຄ່າ K ທີ່ເຮັດໃຫ້ m ≤ K: (ຄຳແນະນຳ: Δ = 36 - 4m ≥ 0):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: K ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຜົນບວກ S = -6 < 0 ເຮັດໃຫ້ຮາກທັງສອງເປັນຄ່າລົບ. ຫວ່າງຂອງ m ທີ່ຖືກຕ້ອງທັງໝົດແມ່ນ 0 < m ≤ 9. ຖ້າ m = 9, ສົມຜົນມີຮາກຄູ່ເທົ່າໃດ? (ຕອບເປັນຕົວເລກລົບ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບເຂດກໍານົດຄວາມຮ້ອນປອດໄພ (Safe Temperature Interval): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ເຄື່ອງຈັກໜຶ່ງເຮັດວຽກຢ່າງປອດໄພ ຖ້າອຸນຫະພູມ t ຕອບສະໜອງລະບົບອະສົມຜົນ t² - 40t + 300 < 0 (ຫວ່າງແມ່ນ 10 < t < 30) ແລະ t > 15. ຫວ່າງອຸນຫະພູມປອດໄພຮ່ວມແມ່ນເທົ່າໃດ? (ຕອບແບບ a < t < b):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"°C"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າອຸນຫະພູມສະພາບແວດລ້ອມປັດຈຸບັນແມ່ນ 12 °C, ເຄື່ອງຈັກນີ້ຈະສາມາດເຮັດວຽກໄດ້ຢ່າງປອດໄພ ຫຼື ບໍ່? (ຕອບ ໄດ້ ຫຼື ບໍ່ໄດ້):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u23-ans-1-1">{"(1) ບວກທັງສອງ (ຍ້ອນ S = 5 > 0, P = 6 > 0 ດັ່ງນັ້ນທັງສອງໃຈຜົນແມ່ນຄ່າບວກ (2 ແລະ 3))"}</span>,
          <span key="u23-ans-1-2">{"(2) ຕ່າງເຄື່ອງໝາຍ (ຍ້ອນ P = -10 < 0 ດັ່ງນັ້ນສອງຮາກມີເຄື່ອງໝາຍຕ່າງກັນ (-2 ແລະ 5))"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u23-ans-2-1">{"(1) 2 < x < 3 (ຍ້ອນຫວ່າງຮ່ວມກັນລະຫວ່າງ x > 2 ແລະ -3 < x < 3)"}</span>,
          <span key="u23-ans-2-2">{"(2) 2 < x < 4 (ຍ້ອນຫວ່າງ x < -2 ບໍ່ມີຄ່າບວກ, ເຫຼືອຫວ່າງ x > 2 ເຊິ່ງຕັດກັບ x < 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u23-ans-t1-1">{"(1) 4 (ຍ້ອນວ່າ Δ = 16 - 4m ≥ 0 ⇒ m ≤ 4, ດັ່ງນັ້ນ K = 4)"}</span>,
          <span key="u23-ans-t1-2">{"(2) 3 (ຍ້ອນວ່າ P = m - 3 < 0 ⇒ m < 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u23-ans-t2-1">{"(1) 1 < x < 2 (ຍ້ອນຫວ່າງຮ່ວມແມ່ນ -2 < x < -1 ຫຼື 1 < x < 2. ສ່ວນຄ່າບວກແມ່ນ 1 < x < 2)"}</span>,
          <span key="u23-ans-t2-2">{"(2) 2.5 < x < 3 (ຍ້ອນຫວ່າງຮ່ວມລະຫວ່າງ 2 < x < 3 ແລະ x > 2.5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u23-ans-s1-1">{"(1) 9 (ຍ້ອນວ່າ Δ = 36 - 4m ≥ 0 ⇒ 4m ≤ 36 ⇒ m ≤ 9)"}</span>,
          <span key="u23-ans-s1-2">{"(2) -3 (ຍ້ອນວ່າສົມ求 h = x² + 6x + 9 = 0 ⇒ (x + 3)² = 0 ⇒ x = -3)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u23-ans-s2-1">{"(1) 15 < t < 30 (ຍ້ອນຫວ່າງຮ່ວມລະຫວ່າງ 10 < t < 30 ແລະ t > 15)"}</span>,
          <span key="u23-ans-s2-2">{"(2) ບໍ່ໄດ້ (ເພາະວ່າ 12 °C ຢູ່ນອກຫວ່າງຄວາມປອດໄພ 15 < t < 30)"}</span>,
        ],
      },
    ],
    advice: "ການວິເຄາະລະບົບອະສົມຜົນ ແລະ ເຄື່ອງໝາຍຂອງໃຈຜົນ ຊ່ວຍໃຫ້ເຮົາສາມາດສ້າງຂອບເຂດຄວາມປອດໄພ ແລະ ປະສິດທິພາບຂອງຫຼາຍໆຂະບວນການໄດ້ຢ່າງເປັນວິທະຍາສາດເດີ້!",
  },
};
