import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit44Data: UnitData = {
  unitNumber: 44,
  unitTitle: "ພາກທີ VII - ບົດທີ 44: ຄ່າວັດແທກການແຈກຢາຍຂອງຂໍ້ມູນ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີຄິດໄລ່ຄ່າວັດແທກການແຈກຢາຍ ໂດຍສະເພາະແມ່ນ ພິໄສ (Range) ແລະ ຄວໍໄທ (Quartile) ເພື່ອວິເຄາະການກະຈາຍຕົວຂອງຂໍ້ມູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 44 ໜ້າ 257-263",
  subSections: [
    {
      title: "1. ພິໄສ ຂອງຂໍ້ມູນ (Range of Data)",
      keyPoint: {
      title: "1. ພິໄສ ຂອງຂໍ້ມູນ (Range of Data)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ພິໄສ (Range - ໝາຍດ້ວຍ "}
            <strong style={{ color: "#E65100" }}>{"R"}</strong>
            {") ແມ່ນໄລຍະຫ່າງລະຫວ່າງຄ່າໃຫຍ່ສຸດ ແລະ ຄ່ານ້ອຍສຸດ ຂອງຂໍ້ມູນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <strong>{"R = x_max - x_min"}</strong>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ພິໄສແມ່ນບອກເຖິງ ຂອບເຂດການກະຈາຍຂອງຂໍ້ມູນທັງໝົດ ໂດຍການເອົາຄ່າໃຫຍ່ສຸດລົບຄ່ານ້ອຍສຸດເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ພິໄສ (Range) ຂອງຊຸດຂໍ້ມູນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຊຸດຂໍ້ມູນ: 4, 8, 2, 10, 15, 6 ມີພິໄສເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊຸດຂໍ້ມູນ: 23, 15, 30, 45, 12, 18 ມີພິໄສເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ຄວໍໄທ (Quartiles: Q₁, Q₂, Q₃)",
      keyPoint: {
      title: "2. ຄວໍໄທ (Quartiles: Q₁, Q₂, Q₃)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄວໍໄທ ແມ່ນການແບ່ງຂໍ້ມູນທີ່ຈັດລຽງແລ້ວອອກເປັນ 4 ສ່ວນເທົ່າໆກັນ ໂດຍມີ 3 ຈຸດແບ່ງຄື:"}
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
              {"• "}<strong>{"Q₂ (ຄວໍໄທທີ 2):"}</strong>{" ແມ່ນຄ່າ ມັດທະຍະຖານ (Median) ຂອງຂໍ້ມູນທັງໝົດ."}
            </div>
            <div>
              {"• "}<strong>{"Q₁ (ຄວໍໄທທີ 1):"}</strong>{" ແມ່ນຄ່າມັດທະຍະຖານ ຂອງຂໍ້ມູນເຄິ່ງຊ້າຍ (ເຄິ່ງທີ່ມີຄ່ານ້ອຍກວ່າ Q₂)."}
            </div>
            <div>
              {"• "}<strong>{"Q₃ (ຄວໍໄທທີ 3):"}</strong>{" ແມ່ນຄ່າມັດທະຍະຖານ ຂອງຂໍ້ມູນເຄິ່ງຂວາ (ເຄິ່ງທີ່ມີຄ່າໃຫຍ່ກວ່າ Q₂)."}
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              {"• "}<strong>{"ພິໄສລະຫວ່າງຄວໍໄທ (Interquartile Range - IQR):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#E65100" }}>{"IQR = Q₃ - Q₁"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຊອກຫາ: 1. ຈັດລຽງຂໍ້ມູນ -> 2. ຫາ Q₂ (ເຄິ່ງກາງ) -> 3. ຫາ Q₁ (ເຄິ່ງກາງຊ້າຍ) ແລະ Q₃ (ເຄິ່ງກາງຂວາ) ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າຂອງຄວໍໄທ (Quartiles) ຂອງຊຸດຂໍ້ມູນທີ່ກຳນົດໃຫ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"ຊຸດຂໍ້ມູນທີ່ຈັດລຽງແລ້ວ: 2, 4, 6, 8, 10, 12, 14"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", paddingLeft: "16px" }}>
              <span>{"(1) ຄວໍໄທທີ 1 (Q₁) ມີຄ່າເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", paddingLeft: "16px" }}>
              <span>{"(2) ຄວໍໄທທີ 3 (Q₃) ມີຄ່າເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ພິໄສລະຫວ່າງຄວໍໄທ IQR = Q₃ - Q₁! ບົດທ້າທາຍ 2: ຈັດລຽງຂໍ້ມູນກ່ອນ ແລ້ວຊອກຫາ Q₁ ແລະ Q₃ ເມື່ອຂໍ້ມູນມີ 8 ຕົວ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາພິໄສລະຫວ່າງຄວໍໄທ (IQR): "}{" "}
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
                <span>{"ຊຸດຂໍ້ມູນທີ່ຈັດລຽງແລ້ວ: 1, 3, 5, 7, 9, 11, 13"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"(1) ພິໄສລະຫວ່າງຄວໍໄທ (IQR) ຂອງຂໍ້ມູນຊຸດນີ້ເທົ່າໃດ?:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"ຊຸດຂໍ້ມູນທີ່ຈັດລຽງແລ້ວ: 10, 20, 30, 40, 50, 60, 70"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"(2) ພິໄສລະຫວ່າງຄວໍໄທ (IQR) ຂອງຂໍ້ມູນຊຸດນີ້ເທົ່າໃດ?:"}</span>
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
              {"ຈົ່ງວິເຄາະຄວໍໄທ ຂອງຊຸດຂໍ້ມູນເລກຄູ່: "}{" "}
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
                <span>{"ຊຸດຂໍ້ມູນ: 3, 5, 8, 10, 12, 15, 18, 20 (ຈັດລຽງແລ້ວ)"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"(1) ຄວໍໄທທີ 1 (Q₁) ຂອງຊຸດຂໍ້ມູນນີ້ເທົ່າໃດ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"(2) ຄວໍໄທທີ 3 (Q₃) ຂອງຊຸດຂໍ້ມູນນີ້ເທົ່າໃດ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາພິໄສໃນຊີວິດປະຈຳວັນ: "}{" "}
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
              <span>{"(1) ອຸນຫະພູມສູງສຸດໃນ 7 ວັນແມ່ນ: 28°C, 35°C, 30°C, 32°C, 25°C, 33°C, 31°C. ພິໄສ (Range) ຂອງອຸນຫະພູມແມ່ນຈັກ °C?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"°C"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ລາຄາສິນຄ້າຊະນິດດຽວກັນໃນ 5 ຮ້ານແມ່ນ: 12,000, 15,000, 10,000, 18,000, 13,000 ກີບ. ພິໄສ (Range) ຂອງລາຄາແມ່ນຈັກກີບ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການທົດສອບຄວາມແຕກໂຕນຂອງຄະແນນ: "}{" "}
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
              <span>{"ຄະແນນສອບເສັງຂອງນັກຮຽນ 7 ຄົນ: 3, 5, 6, 7, 8, 9, 10 (ຈັດລຽງແລ້ວ)"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"(1) ພິໄສ (Range) ຂອງຄະແນນເທົ່າໃດ?:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"(2) ພິໄສລະຫວ່າງຄວໍໄທ (IQR) ຂອງຄະແນນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u44-ans-1-1">{"(1) 13 (ເພາະຄ່າໃຫຍ່ສຸດ 15 ລົບຄ່ານ້ອຍສຸດ 2 ຈະໄດ້ 15 - 2 = 13)"}</span>,
          <span key="u44-ans-1-2">{"(2) 33 (ເພາະຄ່າໃຫຍ່ສຸດ 45 ລົບຄ່ານ້ອຍສຸດ 12 ຈະໄດ້ 45 - 12 = 33)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u44-ans-2-1">{"(1) 4 (ຂໍ້ມູນເຄິ່ງຊ້າຍແມ່ນ {2, 4, 6}, ຄ່າມັດທະຍະຖານເຄິ່ງຊ້າຍແມ່ນ Q₁ = 4)"}</span>,
          <span key="u44-ans-2-2">{"(2) 12 (物理ເຄິ່ງຂວາແມ່ນ {10, 12, 14}, ຄ່າມັດທະຍະຖານເຄິ່ງຂວາແມ່ນ Q₃ = 12)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u44-ans-t1-1">{"(1) 8 (ເພາະ Q₁ = 3 ແລະ Q₃ = 11, ສະນັ້ນ IQR = 11 - 3 = 8)"}</span>,
          <span key="u44-ans-t1-2">{"(2) 40 (ເພາະ Q₁ = 20 ແລະ Q₃ = 60, ສະນັ້ນ IQR = 60 - 20 = 40)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u44-ans-t2-1">{"(1) 6.5 (ເຄິ່ງຊ້າຍແມ່ນ {3, 5, 8, 10}, ມັດທະຍະຖານແມ່ນ (5 + 8) ÷ 2 = 6.5)"}</span>,
          <span key="u44-ans-t2-2">{"(2) 16.5 (ເຄິ່ງຂວາແມ່ນ {12, 15, 18, 20}, ມັດທະຍະຖານແມ່ນ (15 + 18) ÷ 2 = 16.5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u44-ans-s1-1">{"(1) 10 (ຄ່າໃຫຍ່ສຸດ 35°C ລົບຄ່ານ້ອຍສຸດ 25°C ຈະໄດ້ 35 - 25 = 10°C)"}</span>,
          <span key="u44-ans-s1-2">{"(2) 8000 (ຄ່າໃຫຍ່ສຸດ 18,000 ລົບຄ່ານ້ອຍສຸດ 10,000 ຈະໄດ້ 18,000 - 10,000 = 8,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u44-ans-s2-1">{"(1) 7 (ຄ່າໃຫຍ່ສຸດ 10 ລົບຄ່ານ້ອຍສຸດ 3 ຈະໄດ້ 10 - 3 = 7)"}</span>,
          <span key="u44-ans-s2-2">{"(2) 4 (ຂໍ້ມູນເຄິ່ງຊ້າຍແມ່ນ {3, 5, 6} ໄດ້ Q₁ = 5. ເຄິ່ງຂວາແມ່ນ {8, 9, 10} ໄດ້ Q₃ = 9. ສະນັ້ນ IQR = Q₃ - Q₁ = 9 - 5 = 4)"}</span>,
        ],
      },
    ],
    advice: "ພິໄສ ບອກເຖິງຂອບເຂດການກະຈາຍທັງໝົດ ແຕ່ອາດຈະຜິດດ່ຽງໄດ້ງ່າຍຖ້າມີຂໍ້ມູນຜິດປົກກະຕິ (Outlier). ສ່ວນພິໄສລະຫວ່າງຄວໍໄທ (IQR) ແມ່ນມີຄວາມໝັ້ນຄົງກວ່າ ເພາະມັນວັດແທກສະເພາະຂໍ້ມູນ 50% ທີ່ຢູ່ເຄິ່ງກາງເດີ້!",
  },
};
