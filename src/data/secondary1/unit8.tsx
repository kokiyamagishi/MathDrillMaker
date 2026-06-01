import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit8Data: UnitData = {
  unitNumber: 8,
  unitTitle: "ພາກທີ I - ບົດທີ 8: ຈຳນວນພື້ນຖານຕ່າງໆ",
  unitGoal:
  "ຮຽນຮູ້ກ່ຽວກັບລະບົບຈຳນວນໃນພື້ນຖານຕ່າງໆ ເຊັ່ນ ພື້ນຖານສິບ, ພື້ນຖານສອງ ແລະ ພື້ນຖານຫ້າ ພ້ອມທັງວິທີການປ່ຽນລະຫວ່າງພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 56-61",
  keyPoints: [
    {
      title: "1. ລະບົບຈຳນວນພື້ນຖານຕ່າງໆ (Number Bases)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນຊີວິດປະຈຳວັນ ເຮົາໃຊ້ລະບົບພື້ນຖານສິບ ເຊິ່ງມີ 10 ຕົວເລກຄື: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}."}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ແຕ່ໃນລະບົບຄອມພິວເຕີ ຈະໃຊ້ລະບົບພື້ນຖານສອງ ເຊິ່ງມີພຽງແຕ່ 2 ຕົວເລກຄື: {0, 1}."}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• ພື້ນຖານສິບ: 0, 1, 2, 3, 4, 5, 6, ..."}</div>
            <div>{"• ພື້ນຖານສອງ (ຂຽນຫ້ອຍ 2 ໃສ່ທາງຂວາ): "}<strong>{"0₂, 1₂, 10₂, 11₂, 100₂, ..."}</strong></div>
            <div style={{ color: "#D84315", fontWeight: "bold" }}>
              {"* ຕົວເລກ 10₂ ບໍ່ໃຫ້ອ່ານວ່າ 'ສິບ' ເດີ້! ໃຫ້ອ່ານແຍກຕົວເລກວ່າ 'ໜຶ່ງ-ສູນ ພື້ນຖານສອງ'."}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ລະບົບພື້ນຖານໃດ ກໍ່ຈະມີຕົວເລກສູງສຸດບໍ່ເກີນ (ພື້ນຖານ - 1) ເຊັ່ນ ພື້ນຖານ 2 ມີພຽງເລກ 0 ແລະ 1!",
        isBlue: true,
      },
    },
    {
      title: "2. ວິທີປ່ຽນຈາກພື້ນຖານສິບ ເປັນພື້ນຖານສອງ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການປ່ຽນຈຳນວນພື້ນຖານສິບ ໃຫ້ເປັນພື້ນຖານສອງ ແມ່ນໃຊ້ວິທີຫານໃຫ້ 2 ຕໍ່ໆກັນໄປ ຈົນກວ່າຜົນຫານຈະເທົ່າ 0 ແລ້ວເອົາຕົວເສດມາຂຽນລຽງແຕ່ລຸ່ມຂຶ້ນເທິງ:"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2E7D32" }}>{"ຕົວຢ່າງ: ປ່ຽນເລກ 13 (ພື້ນຖານສິບ) ເປັນພື້ນຖານສອງ"}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "8px", fontFamily: "monospace" }}>
              <div>{"• 13 ÷ 2 = 6 ເສດ 1 (ຕົວເລກຫຼັກທຳອິດ)"}</div>
              <div>{"(ເສດ: 1)"}</div>
              <div>{"• 6 ÷ 2 = 3 ເສດ 0"}</div>
              <div>{"(ເສດ: 0)"}</div>
              <div>{"• 3 ÷ 2 = 1 ເສດ 1"}</div>
              <div>{"(ເສດ: 1)"}</div>
              <div>{"• 1 ÷ 2 = 0 ເສດ 1 (ຕົວເລກຫຼັກສຸດທ້າຍ)"}</div>
              <div>{"(ເສດ: 1)"}</div>
            </div>
            <div style={{ borderTop: "1px solid #C8E6C9", paddingTop: "6px", fontWeight: "bold" }}>
              {"→ ເອົາຕົວເສດຂຽນແຕ່ລຸ່ມຂຶ້ນເທິງ: 1 1 0 1 → 13 = 1101₂"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການຫານໃຫ້ 2 ຈະມີຕົວເສດພຽງແຕ່ 0 (ຖ້າເປັນເລກຄູ່) ຫຼື 1 (ຖ້າເປັນເລກຄີກ) ເທົ່ານັ້ນເດີ້!",
      },
    },
    {
      title: "3. ວິທີປ່ຽນຈາກພື້ນຖານອື່ນ ເປັນພື້ນຖານສິບ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເຮົາຄິດໄລ່ໂດຍການກະຈາຍຕົວເລກ ຕາມຄ່າປະຈຳຫຼັກຂອງພື້ນຖານນັ້ນໆ (ເຊັ່ນ 2⁰, 2¹, 2², 2³ ...):"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງ 1: ປ່ຽນ 1101₂ ເປັນພື້ນຖານສິບ"}</div>
            <div style={{ paddingLeft: "8px" }}>
              {"1101₂ = (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰)"}
              <br />
              {"      = 8 + 4 + 0 + 1 = 13"}
            </div>
            <div style={{ fontWeight: "bold", color: "#E65100", borderTop: "1px solid #FFE0B2", paddingTop: "6px", marginTop: "4px" }}>
              {"ຕົວຢ່າງ 2: ປ່ຽນ 23₅ (ພື້ນຖານຫ້າ) ເປັນພື້ນຖານສິບ"}</div>
            <div style={{ paddingLeft: "8px" }}>
              {"23₅ = (2 × 5¹) + (3 × 5⁰) = 10 + 3 = 13"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຢ່າລືມວ່າ ຈຳນວນໃດກໍ່ຕາມກຳລັງ 0 ຈະມີຄ່າເທົ່າກັບ 1 ສະເໝີ (2⁰ = 1, 5⁰ = 1) ເດີ້!",
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
            {"ຈົ່ງປ່ຽນຈຳນວນພື້ນຖານສິບລຸ່ມນີ້ ໃຫ້ເປັນຈຳນວນໃນລະບົບພື້ນຖານສອງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) 5 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"₂"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 8 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"₂"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 12 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"₂"}</span>
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
            {"ຈົ່ງຄິດໄລ່ກ່ຽວກັບຈຳນວນໃນລະບົບພື້ນຖານຫ້າດັ່ງຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ປ່ຽນຈຳນວນພື້ນຖານຫ້າ 13₅ ໃຫ້ເປັນພື້ນຖານສິບ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ປ່ຽນຈຳນວນພື້ນຖານສິບ 14 ໃຫ້ເປັນພື້ນຖານຫ້າ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"₅"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຄິດໄລ່ແຕ່ລະຫຼັກຈາກຂວາຫາຊ້າຍ ໂດຍຫຼັກທຳອິດຄູນ 2⁰ (ຄື 1), ຫຼັກທີສອງຄູນ 2¹ (ຄື 2), ຫຼັກທີສາມຄູນ 2² (ຄື 4)... ບົດທ້າທາຍ 2: ປ່ຽນເປັນພື້ນຖານສິບກ່ອນແລ້ວຄິດໄລ່, ຫຼັງຈາກນັ້ນຈຶ່ງປ່ຽນຜົນໄດ້ຮັບກັບເປັນພື້ນຖານສອງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນຈຳນວນພື້ນຖານສອງຕໍ່ໄປນີ້ ໃຫ້ເປັນຈຳນວນໃນລະບົບພື້ນຖານສິບ: "}{" "}
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
                <span>{"(1) 1101₂ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 10110₂ ="}</span>
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
              {"ຈົ່ງຄິດໄລ່ຜົນບວກຂອງຈຳນວນພື້ນຖານສອງລຸ່ມນີ້ ແລ້ວຂຽນຄຳຕອບເປັນພື້ນຖານສອງ: "}{" "}
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
                <span>{"(1) 11₂ + 10₂ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"₂"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 101₂ + 11₂ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"₂"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) ປ່ຽນຈຳນວນພື້ນຖານສິບ 15 ເປັນພື້ນຖານສອງ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"₂"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ປ່ຽນຈຳນວນພື້ນຖານສອງ 10001₂ ເປັນພື້ນຖານສິບ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ປ່ຽນຈຳນວນພື້ນຖານຫ້າ 21₅ ເປັນພື້ນຖານສິບ ="}</span>
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
            {"ຈົ່ງຄິດໄລ່ການລົບ ແລະ ການຄູນໃນລະບົບພື້ນຖານສອງຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) 110₂ - 11₂ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"₂"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 101₂ × 11₂ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"₂"}</span>
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
          <span key="u8-ans-1-1">{"(1) 101₂ (ເພາະ 5 = 4 + 1 = 1×2² + 0×2¹ + 1×2⁰)"}</span>,
          <span key="u8-ans-1-2">{"(2) 1000₂ (ເພາະ 8 = 2³)"}</span>,
          <span key="u8-ans-1-3">{"(3) 1100₂ (ເພາະ 12 = 8 + 4 = 1×2³ + 1×2² + 0×2¹ + 0×2⁰)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u8-ans-2-1">{"(1) 8 (ເພາະ 13₅ = 1 × 5¹ + 3 × 5⁰ = 5 + 3 = 8)"}</span>,
          <span key="u8-ans-2-2">{"(2) 24₅ (ເພາະ 14 ÷ 5 = 2 ເສດ 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u8-ans-t1-1">{"(1) 13 (1×8 + 1×4 + 0×2 + 1×1 = 13)"}</span>,
          <span key="u8-ans-t1-2">{"(2) 22 (1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 22)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u8-ans-t2-1">{"(1) 101₂ (ເພາະ 11₂ = 3, 10₂ = 2; 3 + 2 = 5 = 101₂)"}</span>,
          <span key="u8-ans-t2-2">{"(2) 1000₂ (ເພາະ 101₂ = 5, 11₂ = 3; 5 + 3 = 8 = 1000₂)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u8-ans-s1-1">{"(1) 1111₂ (15 = 8 + 4 + 2 + 1)"}</span>,
          <span key="u8-ans-s1-2">{"(2) 17 (1×16 + 0×8 + 0×4 + 0×2 + 1×1 = 17)"}</span>,
          <span key="u8-ans-s1-3">{"(3) 11 (2 × 5 + 1 = 11)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u8-ans-s2-1">{"(1) 11₂ (110₂ = 6, 11₂ = 3; 6 - 3 = 3 = 11₂)"}</span>,
          <span key="u8-ans-s2-2">{"(2) 1111₂ (101₂ = 5, 11₂ = 3; 5 × 3 = 15 = 1111₂)"}</span>,
        ],
      },
    ],
    advice: "ລະບົບພື້ນຖານສອງ ຈະມີພຽງເລກ 0 ແລະ 1 ເທົ່ານັ້ນ. ວິທີທີ່ງ່າຍທີ່ສຸດໃນການຄິດໄລ່ຄື ປ່ຽນຈຳນວນນັ້ນເປັນພື້ນຖານສິບກ່ອນ ແລ້ວຄິດໄລ່ ຫຼັງຈາກນັ້ນຈຶ່ງປ່ຽນກັບຄືນເດີ້!",
  },
};
