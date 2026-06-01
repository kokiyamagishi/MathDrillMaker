import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit26Data: UnitData = {
  unitNumber: 26,
  unitTitle: "ພາກທີ III - ບົດທີ 26: ການຂະຫຍາຍອັດຕາສ່ວນໄຕມຸມມິຕິແຕ່ 0 ຫາ 180 ອົງສາ",
  unitGoal:
    "ຮຽນຮູ້ວິທີຂະຫຍາຍນິຍາມຂອງໄຕມຸມມິຕິໄປຫາຫວ່າງມຸມຫວາ (鈍角: 90° ຫາ 180°) ໂດຍການນຳໃຊ້ມຸມປະກອບ 180° - θ ແລະ ວົງມົນຫົວໜ່ວຍ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 26 ໜ້າ 151-156",
  keyPoints: [
    {
      title: "1. ສູດພົວພັນຂອງມຸມປະກອບ 180° (Supplementary Angle Formulas)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສຳລັບມຸມຫວາ θ (90° < θ ≤ 180°), ຄ່າໄຕມຸມມິຕິພົວພັນກັບມຸມແຫຼມ (180° - θ) ດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• sin (180° - θ) = sin θ"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                {"(ຄ່າຂອງ Sin ຈະເປັນບວກ (+) ສະເໝີ ທັງມຸມແຫຼມ ແລະ ມຸມຫວາ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• cos (180° - θ) = -cos θ"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"(ຄ່າຂອງ Cos ຈະປ່ຽນເປັນເຄື່ອງໝາຍລົບ (-) ເມື່ອເປັນມຸມຫວາ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• tan (180° - θ) = -tan θ"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"(ຄ່າຂອງ Tan ຈະປ່ຽນເປັນເຄື່ອງໝາຍລົບ (-) ເມື່ອເປັນມຸມຫວາ, θ ≠ 90°)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: sin 120° = sin (180° - 60°) = sin 60° = √3/2. ແຕ່ cos 120° = -cos 60° = -1/2 ເດີ້!",
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
            {"ຈົ່ງຊອກຫາຄ່າຂອງ Sin ຂອງມຸມຫວາ (ຄ່າບວກ): "}{" "}
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
              <span>{"(1) ຄ່າຂອງ sin 150° ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 1/2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>
                {"(2) ຄ່າຂອງ sin 135° ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: √2/2):"}
              </span>
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
            {"ຈົ່ງຊອກຫາຄ່າຂອງ Cos ຂອງມຸມຫວາ (⚠️ ສັງເກດເຄື່ອງໝາຍລົບ): "}{" "}
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
              <span>{"(1) ຄ່າຂອງ cos 120° ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນຕິດລົບ, ຕົວຢ່າງ: -1/2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄ່າຂອງ cos 150° ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນຕິດລົບ, ຕົວຢ່າງ: -√3/2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຄິດໄລ່ແຕ່ລະສ່ວນ ແລ້ວນຳມາບວກລົບກັນໃຫ້ລະອຽດ! ບົດທ້າທາຍ 2: ຄ່າຂອງ tan 90° ແມ່ນບໍ່ກຳນົດ, ສ່ວນ cos 90° = 0 ແລະ sin 90° = 1 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນທີ່ມີມຸມຫວາ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່ຄ່າຂອງ A = 2 · sin 150° + cos 120° (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 1/2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່ຄ່າຂອງ B = tan 135° - cos 180° (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: B ="}</span>
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
              {"ຈົ່ງບອກຄ່າໄຕມຸມມິຕິຢູ່ຈຸດພິເສດເທິງແກນປະສານ (Boundary Angles): "}{" "}
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
                <span>{"(1) ຄ່າຂອງ sin 90° ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄ່າຂອງ cos 180° ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນຕິດລົບ):"}</span>
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
            {"ຈົ່ງຊອກຫາມຸມ θ (0° ≤ θ ≤ 180°) ຈາກຄ່າໄຕມຸມມິຕິ: "}{" "}
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
              <span>{"(1) ຖ້າ cos θ = -1/2, ມຸມ θ ຈະແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກ, ຕົວຢ່າງ: 120):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: θ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ອົງສາ (°)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າ tan θ = -1, ມຸມ θ ຈະແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: θ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ອົງສາ (°)"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບແຮງງານໃນຟີຊິກສາດ (Work Done in Physics by a Force): "}{" "}
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
              <span>{"(1) ແຮງດຶງວັດຖຸ F = 100 N ເຮັດມຸມ θ = 120° ກັບທິດທາງການເຄື່ອນທີ່. ຈົ່ງຄິດໄລ່ຄ່າ cos 120° ເພື່ອຊອກຫາທິດທາງຂອງວຽກ (ຕອບເປັນເລກສ່ວນຕິດລົບ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: cos 120° ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ວຽກທີ່ເກີດຂຶ້ນ W = F · d · cos θ ຈະມີຄ່າເປັນບວກ (+) ຫຼື ເປັນລົບ (-)? (ຄຳແນະນຳ: ວຽກຕ້ານໃນຟີຊິກ):"}</span>
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
          <span key="u26-ans-1-1">{"(1) 1/2 (ເພາະວ່າ sin 150° = sin (180° - 150°) = sin 30° = 1/2)"}</span>,
          <span key="u26-ans-1-2">{"(2) √2/2 (ເພາະວ່າ sin 135° = sin (180° - 135°) = sin 45° = √2/2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u26-ans-2-1">{"(1) -1/2 (ເພາະວ່າ cos 120° = -cos (180° - 120°) = -cos 60° = -1/2)"}</span>,
          <span key="u26-ans-2-2">{"(2) -√3/2 (ເພາະວ່າ cos 150° = -cos 30° = -√3/2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u26-ans-t1-1">{"(1) 1/2 (ເພາະວ່າ A = 2 * (1/2) + (-1/2) = 1 - 1/2 = 1/2)"}</span>,
          <span key="u26-ans-t1-2">{"(2) 0 (ເພາະວ່າ B = tan 135° - cos 180° = -1 - (-1) = -1 + 1 = 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u26-ans-t2-1">{"(1) 1 (ເພາະວ່າ sin 90° = 1, ຈຸດສູງສຸດເທິງວົງມົນຫົວໜ່ວຍ)"}</span>,
          <span key="u26-ans-t2-2">{"(2) -1 (ເພາະວ່າ cos 180° = -1, ຈຸດເບື້ອງຊ້າຍສຸດເທິງວົງມົນຫົວໜ່ວຍ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u26-ans-s1-1">{"(1) 120 (ເພາະວ່າ cos 120° = -1/2 ພາຍໃນຫວ່າງ [0°, 180°])"}</span>,
          <span key="u26-ans-s1-2">{"(2) 135 (ເພາະວ່າ tan 135° = -1 ພາຍໃນຫວ່າງ [0°, 180°])"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u26-ans-s2-1">{"(1) -1/2 (ເພາະວ່າ cos 120° = -0.5)"}</span>,
          <span key="u26-ans-s2-2">{"(2) - (ເພາະວ່າ cos 120° < 0 ເຮັດໃຫ້ຜົນຄູນ W ຕິດລົບ ເຊິ່ງແມ່ນວຽກຕ້ານ)"}</span>,
        ],
      },
    ],
    advice: "ການຂະຫຍາຍໄຕມຸມມິຕິໄປຫາຫວ່າງມຸມຫວາ ເປັນກຸນແຈສຳຄັນໃນການແກ້ບັນຫາຟີຊິກສາດກ່ຽວກັບແຮງງານ, ເວັກເຕີ ແລະ ການເຄື່ອນທີ່ໃນສອງມິຕິເດີ້!",
  },
};
