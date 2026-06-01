import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ພາກທີ I - ບົດທີ 12: ເລກກຳລັງ ທີ່ມີກຳລັງເປັນຈຳນວນປົກກະຕິ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກການ ແລະ ຄຸນລັກສະນະຂອງເລກກຳລັງທີ່ມີກຳລັງເປັນຈຳນວນປົກກະຕິ (Rational Exponents) ພ້ອມທັງການແກ້ສົມຜົນເລກກຳລັງຂັ້ນພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 12 ໜ້າ 67-72",
  keyPoints: [
    {
      title: "1. ຫຼັກການພື້ນຖານຂອງເລກກຳລັງ (Laws of Exponents for Rational Indices)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເລກກຳລັງທີ່ມີກຳລັງເປັນຈຳນວນປົກກະຕິ (ເລກສ່ວນ) ຍັງຄົງຮັກສາຄຸນລັກສະນະພື້ນຖານທຸກປະການດັ່ງນີ້:"}
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
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ການຄູນພື້ນຄືກັນ: "}</strong>
              <span>{"a^p × a^q = a^(p + q)"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• การຫານພື້ນຄືກັນ: "}</strong>
              <span>{"a^p ÷ a^q = a^(p - q)"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກຳລັງຊ້ອນ: "}</strong>
              <span>{"(a^p)^q = a^(p × q)"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກຳລັງກະຈາຍ: "}</strong>
              <span>{"(ab)^p = a^p × b^p"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ແນະນຳ: ພະຍາຍາມປ່ຽນພື້ນຂອງເລກກຳລັງໃຫ້ເປັນຈຳນວນສະເພາະກ່ອນ (ຕົວຢ່າງ: 4 = 2², 9 = 3², 27 = 3³) ຈະຊ່ວຍໃຫ້ການຄິດໄລ່ງ່າຍຂຶ້ນຫຼາຍ!",
        isBlue: true,
      },
    },
    {
      title: "2. ການແກ້ສົມຜົນເລກກຳລັງຂັ້ນພື້ນຖານ (Basic Exponential Equations)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອແກ້ສົມຜົນເລກກຳລັງ, ເຮົາຕ້ອງຜັນປ່ຽນໃຫ້ພື້ນທັງສອງພາກເທົ່າກັນ ແລ້ວຈຶ່ງສົມທຽບກຳລັງ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#2E7D32" }}>{"• ຫຼັກການ: "}</strong>
              <span>{"ຖ້າ a^f(x) = a^g(x) (ເມື່ອ a > 0, a ≠ 1) ຈະໄດ້ f(x) = g(x)"}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຕົວຢ່າງ: 2^x = 16  ⇒  2^x = 2⁴  ⇒  x = 4."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າພື້ນຕ່າງກັນ ໃຫ້ຊອກຫາວິທີປ່ຽນໃຫ້ພື້ນຄືກັນກ່ອນສະເໝີເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຄ່າຂອງເລກກຳລັງທີ່ມີກຳລັງເປັນເລກສ່ວນ: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: 4^"} <Fraction num="3" den="2" /> {" = (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄິດໄລ່: 27^"} <Fraction num="2" den="3" /> {" ="}</span>
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
            {"ຈົ່ງແກ້ສົມຜົນເລກກຳລັງຂັ້ນພື້ນຖານຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: 3^x = 81. ຄ່າ x ແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກ້ສົມຜົນ: 5^(2x - 1) = 125. ຄ່າ x ແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຜັນປ່ຽນພື້ນໃຫ້ຄືກັນ. ບົດທ້າທາຍ 2: ຖ້າກຳລັງເປັນລົບ ໃຫ້ປ່ຽນເປັນເລກສ່ວນກ່ອນ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ສົມຜົນເລກກຳລັງທີ່ມີພື້ນຕ່າງກັນທັງສອງພາກ: "}{" "}
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
                <span>{"(1) ແກ້ສົມຜົນ: 4^x = 8^(x - 1) (ຄຳແນະນຳ: ປ່ຽນພື້ນເປັນ 2, ຈະໄດ້ 2^(2x) = 2^(3x-3)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ແກ້ສົມຜົນ: 9^(x + 1) = 27^x (ຊອກຫາຄ່າ x):"}</span>
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
              {"ຈົ່ງຄິດໄລ່ກຳລັງທີ່ມີຄ່າລົບ ແລະ ຄ່າເສດເຫຼືອ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: 8^( -1/3 ) = (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: 16^( -3/4 ) = (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ):"}</span>
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
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ບົດສັງລວມໂດຍນຳໃຊ້ຄຸນລັກສະນະເລກກຳລັງ: "}{" "}
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
              <span>{"(1) ຄິດໄລ່ຜົນຄູນ: 2^(1/2) × 2^(3/2) = (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຄິດໄລ່ຜົນຫານ: 3^(5/3) ÷ 3^(2/3) ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການເພີ່ມຂຶ້ນຂອງແບັກທີເຣຍ (Exponential Growth): "}{" "}
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
              <span>{"(1) ແບັກທີເຣຍຊະນິດໜຶ່ງມີການແຜ່ຂະຫຍາຍຕົວ N = 100 × 2^t (ໂຕ) ເມື່ອ t ແມ່ນເວລາເປັນຊົ່ວໂມງ. ຖ້າເວລາ t = 3 ຊົ່ວໂມງ, ຈະມີແບັກທີເຣຍທັງໝົດຈັກໂຕ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ໂຕ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າແບັກທີເຣຍແຜ່ຂະຫຍາຍຕົວເພີ່ມຂຶ້ນຈົນຮອດ N = 1,600 ໂຕ, ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
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
          <span key="u12-ans-1-1">{"(1) 8 (ເພາະວ່າ (2²)^(3/2) = 2³ = 8)"}</span>,
          <span key="u12-ans-1-2">{"(2) 9 (ເພາະວ່າ (3³)^(2/3) = 3² = 9)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u12-ans-2-1">{"(1) 4 (ເພາະວ່າ 3^x = 3⁴  ⇒  x = 4)"}</span>,
          <span key="u12-ans-2-2">{"(2) 2 (ເພາະວ່າ 5^(2x - 1) = 5³  ⇒  2x - 1 = 3  ⇒  2x = 4  ⇒  x = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u12-ans-t1-1">{"(1) 3 (ເພາະວ່າ 2^(2x) = 2^(3x - 3)  ⇒  2x = 3x - 3  ⇒  x = 3)"}</span>,
          <span key="u12-ans-t1-2">{"(2) 2 (ເພາະວ່າ 3^(2x + 2) = 3^(3x)  ⇒  2x + 2 = 3x  ⇒  x = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u12-ans-t2-1">{"(1) 1/2 (ເພາະວ່າ (2³)^(-1/3) = 2^(-1) = 1/2)"}</span>,
          <span key="u12-ans-t2-2">{"(2) 1/8 (ເພາະວ່າ (2⁴)^(-3/4) = 2^(-3) = 1/8)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u12-ans-s1-1">{"(1) 4 (ເພາະວ່າ 2^(1/2 + 3/2) = 2^(4/2) = 2² = 4)"}</span>,
          <span key="u12-ans-s1-2">{"(2) 3 (ເພາະວ່າ 3^(5/3 - 2/3) = 3^(3/3) = 3¹ = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u12-ans-s2-1">{"(1) 800 (ເພາະວ່າ N = 100 × 2³ = 100 × 8 = 800 ໂຕ)"}</span>,
          <span key="u12-ans-s2-2">{"(2) 4 (ເພາະວ່າ 1,600 = 100 × 2^t  ⇒  2^t = 16  ⇒  t = 4 ຊົ່ວໂມງ)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກການເລກກຳລັງທີ່ມີກຳລັງເປັນຈຳນວນປົກກະຕິ ແມ່ນຮັກສາຄຸນລັກສະນະເດີມທຸກປະການ! ພຽງແຕ່ຈັດການເລກສ່ວນໃນກຳລັງໃຫ້ຖືກຕ້ອງກໍພໍແລ້ວເດີ້!",
  },
};
