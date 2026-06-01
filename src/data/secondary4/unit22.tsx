import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit22Data: UnitData = {
  unitNumber: 22,
  unitTitle: "ພາກທີ II - ບົດທີ 22: ຫຼັກເກັນວີແອດ (Vieta's Formula)",
  unitGoal:
    "ເຂົ້າໃຈ ແລະ ນຳໃຊ້ຫຼັກເກັນວີແອດ (Vieta's Theorem) ເພື່ອຊອກຫາຜົນບວກ ແລະ ຜົນຄູນຂອງສອງໃຈຜົນ ໂດຍບໍ່ຈຳເປັນຕ້ອງແກ້ສົມຜົນຂັ້ນສອງໂດຍກົງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 22 ໜ້າ 127-132",
  keyPoints: [
    {
      title: "1. ນິຍາມຂອງຫຼັກເກັນວີແອດ (Definition of Vieta's Theorem)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຖ້າສົມຜົນ ax² + bx + c = 0 (a ≠ 0) ມີສອງໃຈຜົນແມ່ນ x₁ ແລະ x₂, ເຮົາຈະມີການພົວພັນດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ຜົນບວກຂອງສອງໃຈຜົນ (Sum of Roots):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"S = x₁ + x₂ = "} <Fraction num="-b" den="a" />
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຜົນຄູນຂອງສອງໃຈຜົນ (Product of Roots):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"P = x₁ · x₂ = "} <Fraction num="c" den="a" />
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ການສ້າງສົມຜົນໃໝ່ຈາກ S ແລະ P:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"ຖ້າຮູ້ຜົນບວກ S ແລະ ຜົນຄູນ P, ສອງໃຈຜົນນັ້ນແມ່ນຮາກຂອງສົມຜົນ: "}
                <br />
                <span style={{ fontWeight: "bold", color: "#2E7D32", paddingLeft: "20px" }}>{"X² - SX + P = 0"}</span>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ສົມຜົນ x² - 5x + 6 = 0  ⇒  ຜົນບວກ S = 5, ຜົນຄູນ P = 6. ໃຈຜົນແມ່ນ 2 ແລະ 3 ເດີ້!",
        isBlue: true,
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຜົນບວກ S ແລະ ຜົນຄູນ P ຂອງສອງໃຈຜົນ ໂດຍໃຊ້ຫຼັກເກັນວີແອດ: "}{" "}
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
              <span>{"(1) ສົມຜົນ x² - 7x + 12 = 0. ຜົນບວກ S = x₁ + x₂ ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສົມຜົນ 2x² - 8x + 6 = 0. ຜົນຄູນ P = x₁ · x₂ ແມ່ນເທົ່າໃດ? (⚠️ ສັງເກດຄ່າ a ໃຫ້ດີ):"}</span>
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
            {"ຈົ່ງສ້າງສົມຜົນຂັ້ນສອງ ຈາກຜົນບວກ ແລະ ຜົນຄູນທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ສ້າງສົມຜົນຂັ້ນສອງ x² - Sx + P = 0 ທີ່ມີຜົນບວກ S = 6 ແລະ ຜົນຄູນ P = 8. (ຕອບສົມຜົນ, ຕົວຢ່າງ: x²-6x+8=0):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສ້າງສົມຜົນຂັ້ນສອງ ທີ່ມີສອງໃຈຜົນແມ່ນ x₁ = -2 ແລະ x₂ = 5. (ຄຳແນະນຳ: ຊອກ S ແລະ P ກ່ອນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຜັນປ່ຽນສູດ x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = S² - 2P ຈະຊ່ວຍໃຫ້ຫາຄຳຕອບໄດ້ໄວ! ບົດທ້າທາຍ 2: ຄິດໄລ່ເລກສ່ວນໂດຍການ通分ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນສົມມາດຂອງຮາກ (Symmetric Functions of Roots): "}{" "}
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
                <span>{"(1) ໃຫ້ສົມຜົນ x² - 5x + 3 = 0. ຈົ່ງຄິດໄລ່ຄ່າຂອງ x₁² + x₂² (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>
                  {"(2) ໃຫ້ສົມຜົນ x² - 4x + 2 = 0. ຈົ່ງຄິດໄລ່ຄ່າຂອງ "} <Fraction num="1" den="x₁" /> {" + "} <Fraction num="1" den="x₂" /> {" (ຄຳແນະນຳ: ຜັນປ່ຽນເປັນ "} <Fraction num="x₁ + x₂" den="x₁ · x₂" /> {"):"}
                </span>
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
              {"ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ K ໂດຍນຳໃຊ້ເງື່ອນໄຂໃຈຜົນ: "}{" "}
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
                <span>{"(1) ໃຫ້ສົມຜົນ x² - Kx + 8 = 0. ຖ້າຮູ້ວ່າໃຈຜົນໜຶ່ງແມ່ນ 2 ເທົ່າຂອງອີກໃຈຜົນໜຶ່ງ (x₁ = 2x₂) ແລະ K > 0. ຄ່າ K ຈະແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: P = 8 ⇒ 2x₂² = 8 ⇒ x₂ = 2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: K ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ສົມຜົນ x² - 6x + m = 0. ຖ້າຜົນຕ່າງຂອງສອງໃຈຜົນແມ່ນ x₁ - x₂ = 2. ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ໃຊ້ລະບົບສົມຜົນ x₁ + x₂ = 6 ແລະ x₁ - x₂ = 2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
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
            {"ຈົ່ງແກ້ເລກເພື່ອຊອກຫາຄ່າສຳນວນຂັ້ນສູງຂອງຮາກ: "}{" "}
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
              <span>{"(1) ໃຫ້ສົມຜົນ x² - 3x - 2 = 0. ຈົ່ງຄິດໄລ່ຄ່າຂອງ (x₁ - x₂)² (ຄຳແນະນຳ: (x₁ - x₂)² = S² - 4P):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ສົມຜົນ x² - 4x + 1 = 0. ຈົ່ງຄິດໄລ່ຄ່າຂອງ x₁³ + x₂³ (ຄຳແນະນຳ: x₁³ + x₂³ = S(S² - 3P)):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການອອກແບບຂະໜາດຂອງກ່ອງ (Box Dimension Design): "}{" "}
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
              <span>{"(1) ແຜ່ນເຈ້ຍຮູບສີ່ແຈສາກໜຶ່ງ ມີລວງຮອບແມ່ນ 28 cm (ຜົນບວກສອງຂ້າງ S = 14 cm) ແລະ ມີເນື້ອທີ່ P = 48 cm². ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງທີ່ໃຫຍ່ກວ່າ (cm):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຂ້າງຍາວ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຂ້າງທີ່ສັ້ນກວ່າ (ຄວາມກວ້າງ) ຈະມີຄວາມຍາວຈັກ cm? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຂ້າງສັ້ນ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
          <span key="u22-ans-1-1">{"(1) 7 (ເພາະວ່າ S = -b/a = -(-7)/1 = 7)"}</span>,
          <span key="u22-ans-1-2">{"(2) 3 (⚠️ ເພາະວ່າ P = c/a = 6/2 = 3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u22-ans-2-1">{"(1) x²-6x+8=0 (ເພາະສົມຜົນແມ່ນ x² - Sx + P = 0)"}</span>,
          <span key="u22-ans-2-2">{"(2) x²-3x-10=0 (ເພາະວ່າ S = -2 + 5 = 3, P = -2 * 5 = -10)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u22-ans-t1-1">{"(1) 19 (ຍ້ອນວ່າ S = 5, P = 3. x₁² + x₂² = 5² - 2*3 = 25 - 6 = 19)"}</span>,
          <span key="u22-ans-t1-2">{"(2) 2 (ຍ້ອນວ່າ S = 4, P = 2. (x₁ + x₂)/(x₁ · x₂) = 4/2 = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u22-ans-t2-1">{"(1) 6 (ຍ້ອນວ່າ x₁ = 2x₂. P = 2x₂² = 8 ⇒ x₂ = 2, x₁ = 4. S = x₁ + x₂ = 6 ⇒ K = 6)"}</span>,
          <span key="u22-ans-t2-2">{"(2) 8 (ຍ້ອນວ່າ x₁ + x₂ = 6, x₁ - x₂ = 2 ⇒ x₁ = 4, x₂ = 2. m = P = x₁ · x₂ = 8)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u22-ans-s1-1">{"(1) 17 (ຍ້ອນວ່າ S = 3, P = -2. (x₁ - x₂)² = S² - 4P = 9 - 4*(-2) = 17)"}</span>,
          <span key="u22-ans-s1-2">{"(2) 52 (ຍ້ອນວ່າ S = 4, P = 1. x₁³ + x₂³ = 4 * (16 - 3) = 4 * 13 = 52)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u22-ans-s2-1">{"(1) 8 (ເພາະສົມຜົນແມ່ນ x² - 14x + 48 = 0 ເຊິ່ງມີສອງຮາກແມ່ນ 6 ແລະ 8)"}</span>,
          <span key="u22-ans-s2-2">{"(2) 6 (ເພາະວ່າຄວາມກວ້າງແມ່ນ 6 cm)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກເກັນວີແອດ ເປັນເຄື່ອງມືທີ່ຊົງພະລັງທີ່ສຸດໃນການຄິດໄລ່ກ່ຽວກັບຮາກຂອງສົມຜົນ! ມັນຊ່ວຍຫຼີກເວັ້ນການຄິດໄລ່ເລກຮາກທີ່ຊັບຊ້ອນໄດ້ຢ່າງຫຼວງຫຼາຍເດີ້!",
  },
};
