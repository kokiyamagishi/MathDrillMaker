import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit41Data: UnitData = {
  unitNumber: 41,
  unitTitle: "ພາກທີ VII - ບົດທີ 41: ຄ່າສະເລ່ຍ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີຄິດໄລ່ຄ່າສະເລ່ຍເລກຄະນິດ (Arithmetic Mean) ຂອງຂໍ້ມູນທັງໝົດ ພ້ອມທັງການແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຄ່າສະເລ່ຍ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 41 ໜ້າ 241-246",
  keyPoints: [
    {
      title: "1. ສູດຄິດໄລ່ຄ່າສະເລ່ຍເລກຄະນິດ (Arithmetic Mean Formula)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄ່າສະເລ່ຍເລກຄະນິດ (ໝາຍດ້ວຍ "}
            <strong style={{ color: "#E65100" }}>{"x̄"}</strong>
            {") ແມ່ນຜົນບວກຂອງຄຸນຄ່າຂໍ້ມູນທັງໝົດ ຫານໃຫ້ຈຳນວນຂໍ້ມູນທັງໝົດ:"}
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
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontWeight: "bold" }}>{"x̄ = "}</span>
              <Fraction
                num={<span>{"x₁ + x₂ + ... + xₙ"}</span>}
                den={<span>{"n"}</span>}
              />
              <span>{" = "}</span>
              <Fraction
                num={<span>{"∑ x"}</span>}
                den={<span>{"n"}</span>}
              />
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px", width: "100%", textAlign: "left" }}>
              <span style={{ paddingLeft: "10px" }}>
                {"• "}<strong>{"x₁, x₂, ..., xₙ"}</strong>{" ແມ່ນຄຸນຄ່າຂອງຂໍ້ມູນແຕ່ລະຕົວ"}
                <br />
                {"• "}<strong>{"n"}</strong>{" ແມ່ນຈຳນວນຂໍ້ມູນທັງໝົດ (ຈຳນວນໜ່ວຍ)"}
                <br />
                {"• "}<strong>{"∑ x"}</strong>{" ແມ່ນຜົນບວກຂອງຂໍ້ມູນທັງໝົດ (ຜົນລວມທັງໝົດ)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຄິດໄລ່ງ່າຍໆ: ເອົາຂໍ້ມູນທັງໝົດມາບວກກັນ ແລ້ວຫານໃຫ້ຈຳນວນຂໍ້ມູນເດີ້! ຕົວຢ່າງ: ຄ່າສະເລ່ຍຂອງ 2, 4, 6 ແມ່ນ (2+4+6) ÷ 3 = 4",
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
            {"ຈົ່ງຄິດໄລ່ຄ່າສະເລ່ຍເລກຄະນິດ ຂອງຊຸດຂໍ້ມູນຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຊຸດຂໍ້ມູນ: 4, 8, 6, 10, 12 ມີຄ່າສະເລ່ຍເລກຄະນິດເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊຸດຂໍ້ມູນ: 15, 20, 25, 30 ມີຄ່າສະເລ່ຍເລກຄະນິດເທົ່າໃດ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ຄ່າສະເລ່ຍເລກຄະນິດຈາກສະຖານະການຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຄະແນນສອບເສັງ 4 ວິຊາ ຂອງທ້າວ ສົມພອນ ແມ່ນ 7, 8, 9, 10. ຄະແນນສະເລ່ຍຂອງລາວເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນ 5 ວັນ, ຮ້ານຄ້າແຫ່ງໜຶ່ງຂາຍປຶ້ມໄດ້: 12, 15, 18, 10, 20 ຫົວ. ຈຳນວນປຶ້ມສະເລ່ຍທີ່ຂາຍໄດ້ຕໍ່ວັນແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຊ້ສົມຜົນເພື່ອຊອກຫາຄ່າຂອງ x ໂດຍເອົາຜົນບວກທັງໝົດເທົ່າກັບ x̄ ຄູນໃຫ້ຈຳນວນຂໍ້ມູນ! ບົດທ້າທາຍ 2: ຜົນລວມໃໝ່ = (ຜົນລວມເກົ່າ) + (ຄ່າໃໝ່) ແລ້ວຫານໃຫ້ຈຳນວນຂໍ້ມູນໃໝ່ (n+1) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວລັບຈາກຄ່າສະເລ່ຍທີ່ກຳນົດໃຫ້: "}{" "}
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
                <span>{"(1) ຖ້າຄ່າສະເລ່ຍເລກຄະນິດຂອງຊຸດຂໍ້ມູນ 5, 7, 9, x, 13 ແມ່ນ 9. ຈົ່ງຊອກຫາຄ່າຂອງ x:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າຄ່າສະເລ່ຍເລກຄະນິດຂອງ 10, 20, y, 40 ແມ່ນ 25. ຈົ່ງຊອກຫາຄ່າຂອງ y:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"y ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບສູງກ່ຽວກັບການປ່ຽນແປງຄ່າສະເລ່ຍ: "}{" "}
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
                <span>{"(1) ນັກຮຽນ 5 ຄົນ ມີນ້ຳໜັກສະເລ່ຍແມ່ນ 42 kg. ຖ້າມີນັກຮຽນຄົນທີ 6 ທີ່ມີນ້ຳໜັກ 48 kg ເຂົ້າມາຕື່ມ, ນ້ຳໜັກສະເລ່ຍໃໝ່ຂອງທັງໝົດ 6 ຄົນ ຈະເທົ່າກັບຈັກ kg?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"kg"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄະແນນສະເລ່ຍຂອງການທົດສອບ 9 ຄັ້ງ ແມ່ນ 8 ຄະແນນ. ຖ້າຢາກໃຫ້ຄະແນນສະເລ່ຍເພີ່ມຂຶ້ນເປັນ 8.2 ຄະແນນ ຫຼັງຈາກການທົດສອບຄັ້ງທີ 10, ການທົດສອບຄັ້ງທີ 10 ນັ້ນຕ້ອງໄດ້ຈັກຄະແນນ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ຄະແນນ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາສະຖິຕິລະດັບຊີວິດປະຈຳວັນ: "}{" "}
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
              <span>{"(1) ອຸນຫະພູມສູງສຸດໃນແຕ່ລະວັນຂອງອາທິດໜຶ່ງ (7 ວັນ) ວັດແທກໄດ້: 30°C, 32°C, 31°C, 29°C, 33°C, 35°C, 34°C. ອຸນຫະພູມສະເລ່ຍຂອງອາທິດນັ້ນແມ່ນຈັກ °C? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"°C"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ລາຍໄດ້ສະເລ່ຍຂອງພະນັກງານ 4 ຄົນແມ່ນ 3,500,000 ກີບ. ຖ້າພະນັກງານຄົນທີ 5 ທີ່ມີລາຍໄດ້ 4,500,000 ກີບ ເຂົ້າມາເຮັດວຽກນຳ, ລາຍໄດ້ສະເລ່ຍໃໝ່ຂອງພະນັກງານທັງໝົດ 5 ຄົນ ຈະແມ່ນຈັກກີບ?:"}</span>
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
            {"ຈົ່ງແກ້ໂջດບັນຫາການທົດສອບຄຸນນະພາບສິນຄ້າ: "}{" "}
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
              <span>{"(1) ໂຮງງານແຫ່ງໜຶ່ງຜະລິດຫຼອດໄຟ. ຜ່ານການທົດສອບອາຍຸການໃຊ້ງານຂອງຫຼອດໄຟ 5 ຫຼອດ ພົບວ່າໃຊ້ໄດ້: 950, 1000, 1100, 900, 1050 ຊົ່ວໂມງ. ອາຍຸການໃຊ້ງານສະເລ່ຍຂອງຫຼອດໄຟແມ່ນຈັກຊົ່ວໂມງ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ນັກກິລາແລ່ນໄລຍະທາງ 100 ແມັດ 5 ຄັ້ງ ທົດສອບເວລາໄດ້: 12.1, 11.8, 12.5, 12.0, 11.6 ວິນາທີ. ເວລາສະເລ່ຍໃນການແລ່ນແມ່ນຈັກວິນາທີ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ 1 ຕຳແໜ່ງ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ວິນາທີ"}</span>
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
          <span key="u41-ans-1-1">{"(1) 8 (ເພາະຜົນບວກ 4 + 8 + 6 + 10 + 12 = 40, ຫານໃຫ້ 5 ໂຕ ເທົ່າກັບ 8)"}</span>,
          <span key="u41-ans-1-2">{"(2) 22.5 (ເພາະຜົນບວກ 15 + 20 + 25 + 30 = 90, ຫານໃຫ້ 4 ໂຕ ເທົ່າກັບ 22.5)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u41-ans-2-1">{"(1) 8.5 (ເພາະຄະແນນລວມ 7 + 8 + 9 + 10 = 34, ຫານໃຫ້ 4 ວິຊາ ເທົ່າກັບ 8.5)"}</span>,
          <span key="u41-ans-2-2">{"(2) 15 (ເພາະຈຳນວນລວມ 12 + 15 + 18 + 10 + 20 = 75, ຫານໃຫ້ 5 ວັນ ເທົ່າກັບ 15 ຫົວ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u41-ans-t1-1">{"(1) 11 (ເພາະຜົນລວມຕ້ອງແມ່ນ 9 × 5 = 45, ສະນັ້ນ 5 + 7 + 9 + x + 13 = 34 + x = 45 ຈະໄດ້ x = 11)"}</span>,
          <span key="u41-ans-t1-2">{"(2) 30 (ເພາະຜົນລວມຕ້ອງແມ່ນ 25 × 4 = 100, ສະນັ້ນ 10 + 20 + y + 40 = 70 + y = 100 ຈະໄດ້ y = 30)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u41-ans-t2-1">{"(1) 43 (ເພາະນ້ຳໜັກລວມເກົ່າແມ່ນ 42 × 5 = 210 kg, ບວກຜົນໃໝ່ 48 kg ເປັນ 258 kg, ຫານໃຫ້ 6 ຄົນ ເທົ່າກັບ 43 kg)"}</span>,
          <span key="u41-ans-t2-2">{"(2) 10 (ເພາະຄະແນນລວມເກົ່າແມ່ນ 8 × 9 = 72, ຄະແນນລວມໃໝ່ທີ່ຕ້ອງການແມ່ນ 8.2 × 10 = 82, ສະນັ້ນຄັ້ງທີ 10 ຕ້ອງໄດ້ 82 - 72 = 10 ຄະແນນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u41-ans-s1-1">{"(1) 32 (ເພາະຜົນລວມອຸນຫະພູມ 30 + 32 + 31 + 29 + 33 + 35 + 34 = 224, ຫານໃຫ້ 7 ວັນ ເທົ່າກັບ 32°C)"}</span>,
          <span key="u41-ans-s1-2">{"(2) 3,700,000 (ເພາະລາຍໄດ້ລວມເກົ່າ 3,500,000 × 4 = 14,000,000 ກີບ, ບວກໃໝ່ 4,500,000 ກີບ ເປັນ 18,500,000 ກີບ, ຫານໃຫ້ 5 ຄົນ ເທົ່າກັບ 3,700,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u41-ans-s2-1">{"(1) 1000 (ເພາະຜົນລວມຊົ່ວໂມງ 950 + 1000 + 1100 + 900 + 1050 = 5000, ຫານໃຫ້ 5 ຫຼອດ ເທົ່າກັບ 1000 ຊົ່ວໂມງ)"}</span>,
          <span key="u41-ans-s2-2">{"(2) 12.0 (ເພາະຜົນລວມເວລາ 12.1 + 11.8 + 12.5 + 12.0 + 11.6 = 60.0 ວິນາທີ, ຫານໃຫ້ 5 ຄັ້ງ ເທົ່າກັບ 12.0 ວິນາທີ)"}</span>,
        ],
      },
    ],
    advice: "ຄ່າສະເລ່ຍເລກຄະນິດ ແມ່ນການສະຫຼຸບຂໍ້ມູນທັງໝົດໃຫ້ເປັນຕົວເລກດຽວທີ່ເປັນຕົວແທນ. ແຕ່ຕ້ອງລະວັງໃນກໍລະນີທີ່ຂໍ້ມູນມີຄ່າຜິດປົກກະຕິ (Outlier) ທີ່ສູງ ຫຼື ຕ່ຳເກີນໄປ ເພາະມັນຈະເຮັດໃຫ້ຄ່າສະເລ່ຍຜິດດ່ຽງໄປຫຼາຍເດີ້!",
  },
};
