import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit24Data: UnitData = {
  unitNumber: 24,
  unitTitle: "ພາກທີ II - ບົດທີ 24: ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ",
  unitGoal:
    "ຮຽນຮູ້ວິທີແກ້ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ (Systems of Quadratic Equations in Two Variables) ໂດຍການນຳໃຊ້ວິທີແທນຄ່າ, ວິທີບວກພຶດຊະຄະນິດ ແລະ ຫຼັກການຜົນບວກ-ຜົນຄູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 24 ໜ້າ 139-144",
  subSections: [
    {
      title: "1. ວິທີແກ້ໂດຍການແທນຄ່າ (Substitution Method)",
      keyPoint: {
      title: "1. ວິທີແກ້ໂດຍການແທນຄ່າ (Substitution Method)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອລະບົບສົມຜົນປະກອບດ້ວຍສົມຜົນຂັ້ນໜຶ່ງ ແລະ ສົມຜົນຂັ້ນສອງ, ເຮົາຈະຖອນຕົວປ່ຽນໜຶ່ງຈາກສົມຜົນຂັ້ນໜຶ່ງແລ້ວແທນເຂົ້າສົມຜົນຂັ້ນສອງ ດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ຕົວຢ່າງຂັ້ນຕອນການແກ້:"}</strong>
              <div style={{ paddingLeft: "20px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span>{"ລະບົບສົມຜົນ: { y - x = 2,  x² + y² = 10 }"}</span>
                <span style={{ color: "#D84315", fontWeight: "bold" }}>
                  {"1) ຖອນ y = x + 2 ຈາກສົມຜົນຂັ້ນໜຶ່ງ."}
                </span>
                <span style={{ color: "#D84315", fontWeight: "bold" }}>
                  {"2) ແທນ y ເຂົ້າສົມຜົນຂັ້ນສອງ: x² + (x + 2)² = 10  ⇒  2x² + 4x - 6 = 0  ⇒  x² + 2x - 3 = 0."}
                </span>
                <span>{"3) ແກ້ສົມຜົນໄດ້ x = 1 ຫຼື x = -3. ແລ້ວແທນຄືນເພື່ອຫາ y: (1, 3) ແລະ (-3, -1)."}</span>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ເຄັດລັບ: ການເລືອກຖອນຕົວປ່ຽນທີ່ມີສຳປະສິດເປັນ 1 ຈະຊ່ວຍໃຫ້ຄິດໄລ່ໄດ້ງ່າຍ ແລະ ບໍ່ມີເລກສ່ວນເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ລະບົບສົມຜົນຂັ້ນສອງ ໂດຍການນຳໃຊ້ວິທີແທນຄ່າ: "}{" "}
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
              <span>{"(1) ໃຫ້ລະບົບສົມຜົນ y = x² ແລະ y = x + 2. ຖ້າ x > 0, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (2, 4)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ລະບົບສົມຜົນ y - x = 1 ແລະ x² + y² = 5. ຖ້າ x > 0, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ລະບົບສົມຜົນຂັ້ນສອງ ໂດຍນຳໃຊ້ຫຼັກການຜົນບວກ-ຜົນຄູນ (Vieta style): "}{" "}
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
              <span>{"(1) ໃຫ້ລະບົບສົມຜົນ x + y = 5 ແລະ x · y = 6. ຖ້າ x > y, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (3, 2)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ລະບົບສົມຜົນ x + y = 7 ແລະ x · y = 10. ຖ້າ x < y, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ແຍກສົມຜົນ x² - y² = 0 ເປັນ y = x ແລະ y = -x ແລ້ວແຍກແກ້ເປັນ 2 ກໍລະນີ! ບົດທ້າທາຍ 2: ໃຫ້ປ່ຽນຕົວປ່ຽນຮ່ວມກັນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ ໃນກໍລະນີພິເສດ: "}{" "}
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
                <span>{"(1) ໃຫ້ລະບົບສົມຜົນ x² - y² = 0 ແລະ x² + y² = 8. ຖ້າ x > 0 ແລະ y > 0, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ລະບົບສົມຜົນ xy = 4 ແລະ x² + y² = 8. ຖ້າ x > 0 ແລະ y > 0, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຄຳແນະນຳ: (x - y)² = x² + y² - 2xy = 8 - 8 = 0):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການອອກແບບຂະໜາດສະໜາມກິລາ (Stadium Dimensions): "}{" "}
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
                <span>{"(1) ສະໜາມກິລາຮູບສີ່ແຈສາກໜຶ່ງ ມີລວງຮອບແມ່ນ 300 ແມັດ (ຜົນບວກສອງຂ້າງ x + y = 150 ແມັດ) ແລະ ມີເນື້ອທີ່ແມ່ນ 5000 m². ຈົ່ງຊອກຫາຄວາມຍາວຂອງສະໜາມກິລານີ້ (m) (ຄຳແນະນຳ: ຄວາມຍາວແມ່ນຂ້າງທີ່ຍາວກວ່າ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ຍາວ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ແມັດ (m)"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຄວາມກວ້າງ (ຂ້າງທີ່ສັ້ນກວ່າ) ຂອງສະໜາມກິລາແມ່ນຈັກແມັດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ກວ້າງ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"m"}</span>
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
            {"ຈົ່ງແກ້ລະບົບສົມຜົນຂັ້ນສອງ ໂດຍການນຳໃຊ້ວິທີບວກພຶດຊະຄະນິດ: "}{" "}
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
              <span>{"(1) ໃຫ້ລະບົບສົມຜົນ x² + y² = 13 ແລະ x² - y² = 5. ຖ້າ x > 0 ແລະ y > 0, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ບວກສອງສົມຜົນເຂົ້າກັນເພື່ອຫາ x²):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ລະບົບສົມຜົນ 2x² + y² = 9 ແລະ x² - y² = 3. ຖ້າ x > 0 ແລະ y > 0, ພິກັດໃຈຜົນ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບວົງຈອນໄຟຟ້າ (Electrical Circuit Current Optimization): "}{" "}
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
              <span>{"(1) ໃນວົງຈອນໄຟຟ້າໜຶ່ງ, ຜົນບວກຂອງກະແສໄຟຟ້າສອງເສັ້ນແມ່ນ I₁ + I₂ = 6 A, ແລະ ຜົນຄູນຂອງພວກມັນແມ່ນ I₁ · I₂ = 8 A². ຖ້າ I₁ > I₂, ຈົ່ງຊອກຫາຄ່າຂອງກະແສໄຟຟ້າ I₁ (A) (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: I₁ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"A"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄ່າຂອງກະແສໄຟຟ້າ I₂ ຈະແມ່ນຈັກແອມແປ (A)? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: I₂ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"A"}</span>
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
          <span key="u24-ans-1-1">{"(1) (2, 4) (ເພາະວ່າແທນ y = x² ໃສ່ y = x + 2 ⇒ x² - x - 2 = 0 有 root x = 2 (x > 0))"}</span>,
          <span key="u24-ans-1-2">{"(2) (1, 2) (ເພາະວ່າແທນ y = x + 1 ໃສ່ x² + y² = 5 ⇒ x² + (x + 1)² = 5 ⇒ 2x² + 2x - 4 = 0 ⇒ x² + x - 2 = 0 有 root x = 1 (x > 0))"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u24-ans-2-1">{"(1) (3, 2) (ເພາະວ່າ 3 + 2 = 5, 3 * 2 = 6)"}</span>,
          <span key="u24-ans-2-2">{"(2) (2, 5) (ເພາະວ່າ 2 + 5 = 7, 2 * 5 = 10. ເນື່ອງຈາກ x < y ດັ່ງນັ້ນ x=2, y=5)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u24-ans-t1-1">{"(1) (2, 2) (ຍ້ອນ x² = y² ⇒ x² + x² = 8 ⇒ 2x² = 8 ⇒ x² = 4 ⇒ x = 2 (x > 0), y = 2 (y > 0))"}</span>,
          <span key="u24-ans-t1-2">{"(2) (2, 2) (ຍ້ອນ (x - y)² = 8 - 8 = 0 ⇒ x = y ⇒ x² = 4 ⇒ x = 2, y = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u24-ans-t2-1">{"(1) 100 (ຍ້ອນສົມຜົນແມ່ນ t² - 150t + 5000 = 0 ທີ່ມີຮາກແມ່ນ t = 50 ແລະ t = 100. ດັ່ງນັ້ນຂ້າງຍາວແມ່ນ 100 ແມັດ)"}</span>,
          <span key="u24-ans-t2-2">{"(2) 50 (ຍ້ອນຄວາມກວ້າງແມ່ນ 50 ແມັດ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u24-ans-s1-1">{"(1) (3, 2) (ຍ້ອນວ່າບວກສອງສົມຜົນໄດ້ 2x² = 18 ⇒ x² = 9 ⇒ x = 3, y² = 13 - 9 = 4 ⇒ y = 2)"}</span>,
          <span key="u24-ans-s1-2">{"(2) (2, 1) (ຍ້ອນວ່າບວກສອງສົມຜົນໄດ້ 3x² = 12 ⇒ x² = 4 ⇒ x = 2, y² = 4 - 3 = 1 ⇒ y = 1)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u24-ans-s2-1">{"(1) 4 (ຍ້ອນວ່າສົມຜົນ t² - 6t + 8 = 0 ມີຮາກແມ່ນ 2 ແລະ 4. ເນື່ອງຈາກ I₁ > I₂ ດັ່ງນັ້ນ I₁ = 4)"}</span>,
          <span key="u24-ans-s2-2">{"(2) 2 (ຍ້ອນວ່າຮາກທີ່ສັ້ນກວ່າແມ່ນ 2)"}</span>,
        ],
      },
    ],
    advice: "ການແກ້ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ ເປັນເຄື່ອງມືທາງຄະນິດສາດທີ່ດີເລີດ ໃນການຊອກຫາຈຸດສົມດຸນ ແລະ ຂະໜາດທີ່ເໝາະສົມໃນການອອກແບບຕ່າງໆເດີ້!",
  },
};
