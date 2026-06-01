import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ພາກທີ I - ບົດທີ 11: ການແກ້ສົມຜົນຮາກຂັ້ນ 2",
  unitGoal:
    "ຮຽນຮູ້ວິທີແກ້ສົມຜົນຮາກຂັ້ນສອງ (Irrational Equations) ໂດຍການຂຶ້ນກຳລັງສອງທັງສອງພາກ, ການຊອກເງື່ອນໄຂກຳນົດ ແລະ ການຕັດໃຈຜົນນອກເງື່ອນໄຂ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 11 ໜ້າ 61-66",
  keyPoints: [
    {
      title: "1. ຂັ້ນຕອນການແກ້ສົມຜົນຮາກຂັ້ນ 2 (Steps for Solving Irrational Equations)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສົມຜົນຮາກຂັ້ນ 2 ແມ່ນສົມຜົນທີ່ມີຕົວປ່ຽນຢູ່ກ້ອງເຄື່ອງໝາຍຮາກຂັ້ນສອງ. ມີຂັ້ນຕອນການແກ້ດັ່ງນີ້:"}
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
              gap: "10px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"1. ຊອກຫາເງື່ອນໄຂກຳນົດ (Domain): "}</strong>
              <span>{"ກຳນົດໃຫ້ສຳນວນກ້ອງຮາກຕ້ອງໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ 0 (f(x) ≥ 0)."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"2. ຂຶ້ນກຳລັງສອງທັງສອງພາກ: "}</strong>
              <span>{"ເພື່ອປົດເຄື່ອງໝາຍຮາກອອກ (√f(x))² = (g(x))²  ⇒  f(x) = [g(x)]² (ເງື່ອນໄຂ g(x) ≥ 0)."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#D84315" }}>{"3. ⚠️ ກວດກາໃຈຜົນ (Verification): "}</strong>
              <span>{"ແທນຄ່າໃຈຜົນຄືນໃສ່ສົມຜົນເດີມ. ໃຈຜົນທີ່ເຮັດໃຫ້ພາກສ່ວນອື່ນຂັດແຍ່ງ ຈະຕ້ອງຕັດອອກ!"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ສົມຜົນ √x = -3. ເນື່ອງຈາກຄ່າຂອງຮາກຂັ້ນສອງ ຫ້າມເປັນຄ່າລົບເດັດຂາດ! ສົມຜົນນີ້ຈຶ່ງ ບໍ່ມີໃຈຜົນ ໂດຍບໍ່ຕ້ອງໄລ່ເລີຍ ເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ເສັ້ນສະແດງເງື່ອນໄຂໃຈຜົນ (Visual Condition Check)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕົວຢ່າງ: ສຳລັບສົມຜົນ √(x + 3) = x - 3. (ເງື່ອນໄຂ x ≥ -3 ແລະ x - 3 ≥ 0  ⇒  x ≥ 3)."}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອຂຶ້ນກຳລັງສອງ: x + 3 = (x - 3)²  ⇒  x² - 7x + 6 = 0  ⇒  x = 6 ຫຼື x = 1."}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <svg viewBox="0 0 280 80" style={{ width: "100%", maxWidth: "280px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* x = 6 check */}
              <rect x="20" y="20" width="100" height="40" rx="4" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
              <text x="70" y="38" fill="#1B5E20" fontSize="10" textAnchor="middle" fontWeight="bold">{"x = 6"}</text>
              <text x="70" y="52" fill="#1B5E20" fontSize="9" textAnchor="middle">{"✓ ເໝາະສົມ (6 ≥ 3)"}</text>

              {/* x = 1 cross */}
              <rect x="160" y="20" width="100" height="40" rx="4" fill="#FFEBEE" stroke="#F44336" strokeWidth="1.5" />
              <text x="210" y="38" fill="#C62828" fontSize="10" textAnchor="middle" fontWeight="bold">{"x = 1"}</text>
              <text x="210" y="52" fill="#C62828" fontSize="9" textAnchor="middle">{"✗ ບໍ່ເໝາະສົມ (1 < 3)"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ດັ່ງນັ້ນ ໃຈຜົນແທ້ຈິງຂອງສົມຜົນ √(x+3) = x-3 ມີພຽງແຕ່ x = 6 ເທົ່ານັ້ນ!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ສົມຜົນຮາກຂັ້ນ 2 ພື້ນຖານຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: √(2x - 3) = 3. ຄ່າ x ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກ້ສົມຜົນ: √(x + 5) = 4. ຄ່າ x ແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ສົມຜົນຮາກຂັ້ນ 2 ໂດຍກວດເງື່ອນໄຂຄ່າລົບ: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: √(x - 2) = -4 (ຖ້າບໍ່ມີໃຈຜົນ ໃຫ້ຕອບວ່າ: ບໍ່ມີໃຈຜົນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກ້ສົມຜົນ: √(3x + 1) = x - 1 (ຊອກຫາໃຈຜົນທີ່ເໝາະສົມ, ຕອບຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຂຶ້ນກຳລັງສອງທັງສອງພາກຢ່າງລະອຽດ. ບົດທ້າທາຍ 2: ຢ່າລືມກວດເງື່ອນໄຂຂອງຕົວປ່ຽນກ້ອງຮາກ ແລະ ພາກສ່ວນຂວາມືສະເໝີ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ສົມຜົນຮາກຂັ້ນ 2 ທີ່ປ່ຽນເປັນສົມຜົນຂັ້ນສອງ: "}{" "}
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
                <span>{"(1) ແກ້ສົມຜົນ: √(x² + 5) = x + 1 (ຊອກຫາໃຈຜົນ x, ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ແກ້ສົມຜົນ: √(x² - 3x) = 2 (ຕອບຄ່າ x ທັງໝົດ ແຍກດ້ວຍຈຸດ, ຕົວຢ່າງ: 4, -1):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
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
              {"ຈົ່ງແກ້ສົມຜົນຮາກຂັ້ນ 2 ທີ່ມີຮາກທັງສອງພາກ (Roots on both sides): "}{" "}
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
                <span>{"(1) ແກ້ສົມຜົນ: √(3x - 5) = √(x + 1) (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ແກ້ສົມຜົນ: √(x² - 1) = √(2x - 1) (ຊອກຫາໃຈຜົນ x ທີ່ເໝາະສົມ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມສົມຜົນຮາກຂັ້ນ 2: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: √(x - 1) = x - 3 (ຊອກຫາໃຈຜົນແທ້ຈິງ, ຕອບຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ແກ້ສົມຜົນ: x - √x - 6 = 0 (ຄຳແນະນຳ: ວາງ t = √x, t ≥ 0 ຈະໄດ້ສົມຜົນ t² - t - 6 = 0):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບໄລຍະສາຍຕາແນມເຫັນ (Sight Distance Word Problem): "}{" "}
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
              <span>{"(1) ໄລຍະສາຍຕາແນມເຫັນ d (km) ຈາກຫໍຄອຍສູງ h (m) ຖືກສະແດງດ້ວຍສູດ: d = 3.57 × √h. ຖ້າໄລຍະສາຍຕາແນມເຫັນ d = 17.85 km, ຫໍຄອຍນີ້ຈະສູງຈັກແມັດ (m)? (ຄຳແນະນຳ: √h = 17.85 / 3.57 = 5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: h ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຕ້ອງການໃຫ້ໄລຍະສາຍຕາແນມເຫັນ d ເພີ່ມຂຶ້ນເປັນສອງເທົ່າ (35.7 km), ຫໍຄອຍຕ້ອງສູງຈັກແມັດ (m)?:(ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: h ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
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
          <span key="u11-ans-1-1">{"(1) 6 (ເພາະວ່າ 2x - 3 = 9  ⇒  2x = 12  ⇒  x = 6)"}</span>,
          <span key="u11-ans-1-2">{"(2) 11 (ເພาະວ່າ x + 5 = 16  ⇒  x = 11)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u11-ans-2-1">{"(1) ບໍ່ມີໃຈຜົນ (ເພາະວ່າຮາກຂັ້ນສອງບໍ່ສາມາດເທົ່າກັບຄ່າລົບ -4)"}</span>,
          <span key="u11-ans-2-2">{"(2) 3 (ເພາະວ່າ 3x + 1 = (x - 1)²  ⇒  x² - 5x = 0  ⇒  x = 0 ຫຼື x = 5. ແຕ່ເງື່ອນໄຂ x - 1 ≥ 0  ⇒  x ≥ 1, ແລະ ຈາກການແທນຄືນ x = 3 ຈະໄດ້ √(9+1) = √10 ບໍ່ແມ່ນ. ຂໍອະໄພ: 3x+1 = (x-1)²  ⇒  3x+1 = x²-2x+1  ⇒  x²-5x = 0  ⇒  x = 5. ດັ່ງນັ້ນ x = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u11-ans-t1-1">{"(1) 2 (ເພາະວ່າ x² + 5 = x² + 2x + 1  ⇒  2x = 4  ⇒  x = 2)"}</span>,
          <span key="u11-ans-t1-2">{"(2) 4, -1 (ຫຼື 4, -1. ເພາະວ່າ x² - 3x = 4  ⇒  x² - 3x - 4 = 0  ⇒  x = 4 ຫຼື x = -1. ທັງສອງຄ່າລ້ວນແຕ່ຕອບສະໜອງ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u11-ans-t2-1">{"(1) 3 (ເພາະວ່າ 3x - 5 = x + 1  ⇒  2x = 6  ⇒  x = 3)"}</span>,
          <span key="u11-ans-t2-2">{"(2) 2 (ເພາະວ່າ x² - 1 = 2x - 1  ⇒  x² - 2x = 0  ⇒  x = 2 ຫຼື 0. ແຕ່ເງື່ອນໄຂ 2x - 1 ≥ 0  ⇒  x ≥ 0.5, ດັ່ງນັ້ນມີພຽງ x = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u11-ans-s1-1">{"(1) 5 (ເພາະວ່າ x - 1 = (x - 3)²  ⇒  x - 1 = x² - 6x + 9  ⇒  x² - 7x + 10 = 0  ⇒  x = 5 ຫຼື x = 2. ແຕ່ເງື່ອນໄຂ x - 3 ≥ 0  ⇒  x ≥ 3, ດັ່ງນັ້ນມີພຽງ x = 5)"}</span>,
          <span key="u11-ans-s1-2">{"(2) 9 (ເພາະວ່າ t² - t - 6 = 0  ⇒  (t - 3)(t + 2) = 0. ເນື່ອງຈາກ t ≥ 0, ຈະໄດ້ t = 3  ⇒  √x = 3  ⇒  x = 9)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u11-ans-s2-1">{"(1) 25 (ເພາະວ່າ √h = 5  ⇒  h = 25)"}</span>,
          <span key="u11-ans-s2-2">{"(2) 100 (ເພາະວ່າ √h = 10  ⇒  h = 100)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງລະວັງທີ່ສຸດກ່ຽວກັບເງື່ອນໄຂຂອງສົມຜົນຮາກຂັ້ນ 2! ຕ້ອງແທນຄ່າໃຈຜົນຄືນໃສ່ສົມຜົນເດີມສະເໝີ ເພາະການຂຶ້ນກຳລັງສອງອາດຈະພາໃຫ້ເກີດໃຈຜົນນອກທີ່ບໍ່ຖືກຕ້ອງເດີ້!",
  },
};
