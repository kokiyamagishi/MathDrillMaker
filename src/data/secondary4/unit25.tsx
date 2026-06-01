import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit25Data: UnitData = {
  unitNumber: 25,
  unitTitle: "ພາກທີ III - ບົດທີ 25: ນິຍາມຂອງອັດຕາສ່ວນໄຕມຸມມິຕິໃນຮູບສາມແຈສາກ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ຈື່ຈຳນິຍາມຂອງອັດຕາສ່ວນໄຕມຸມມິຕິ sin, cos, tan ໃນຮູບສາມແຈສາກ ພ້ອມທັງຄິດໄລ່ຄ່າຂອງມຸມພິເສດ 30°, 45°, 60°",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 25 ໜ້າ 145-150",
  subSections: [
    {
      title: "1. ນິຍາມຂອງ Sin, Cos, Tan (Definitions of Trigonometric Ratios)",
      keyPoint: {
      title: "1. ນິຍາມຂອງ Sin, Cos, Tan (Definitions of Trigonometric Ratios)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນຮູບສາມແຈສາກ ABC ທີ່ມີມຸມ A ເປັນມຸມສາກ ແລະ ພິຈາລະນາມຸມ B (θ), ອັດຕາສ່ວນໄຕມຸມມິຕິກຳນົດດັ່ງນີ້:"}
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• sin B = "}</strong>
              <Fraction num="ຂ້າງກົງໜ້າມຸມ B (Opposite)" den="ຂ້າງກົງໜ້າມຸມສາກ (Hypotenuse)" />
              <span>{" = "}</span>
              <Fraction num="AC" den="BC" />
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• cos B = "}</strong>
              <Fraction num="ຂ້າງຕິດແປະມຸມ B (Adjacent)" den="ຂ້າງກົງໜ້າມຸມສາກ (Hypotenuse)" />
              <span>{" = "}</span>
              <Fraction num="AB" den="BC" />
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• tan B = "}</strong>
              <Fraction num="ຂ້າງກົງໜ້າມຸມ B (Opposite)" den="ຂ້າງຕິດແປະມຸມ B (Adjacent)" />
              <span>{" = "}</span>
              <Fraction num="AC" den="AB" />
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຈື່ຈຳງ່າຍໆ: Sin = ກົງໜ້າ/ກົງສາກ, Cos = ແປະ/ກົງສາກ, Tan = ກົງໜ້າ/ແປະ ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ໃຫ້ຮູບສາມແຈສາກ ABC ທີ່ມີ AC = 3 cm, AB = 4 cm ແລະ ຂ້າງກົງໜ້າມຸມສາກ BC = 5 cm. ຈົ່ງຊອກຫາຄ່າຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຈົ່ງຊອກຫາຄ່າຂອງ sin B (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 3/5):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) จົ່ງຊອກຫາຄ່າຂອງ tan B (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 3/4):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ຕາຕະລາງຄ່າໄຕມຸມມິຕິຂອງມຸມພິເສດ (Special Angles Table)",
      keyPoint: {
      title: "2. ຕາຕະລາງຄ່າໄຕມຸມມິຕິຂອງມຸມພິເສດ (Special Angles Table)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.25rem", textAlign: "center", marginTop: "8px" }}>
            <thead>
              <tr style={{ backgroundColor: "#FFE082" }}>
                <th style={{ border: "1px solid #FFB300", padding: "8px" }}>{"ມຸມ B"}</th>
                <th style={{ border: "1px solid #FFB300", padding: "8px" }}>{"30°"}</th>
                <th style={{ border: "1px solid #FFB300", padding: "8px" }}>{"45°"}</th>
                <th style={{ border: "1px solid #FFB300", padding: "8px" }}>{"60°"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #FFB300", padding: "8px", fontWeight: "bold" }}>{"sin B"}</td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="1" den="2" /></td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="√2" den="2" /></td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="√3" den="2" /></td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #FFB300", padding: "8px", fontWeight: "bold" }}>{"cos B"}</td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="√3" den="2" /></td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="√2" den="2" /></td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="1" den="2" /></td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #FFB300", padding: "8px", fontWeight: "bold" }}>{"tan B"}</td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}><Fraction num="√3" den="3" /></td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}>{"1"}</td>
                <td style={{ border: "1px solid #FFB300", padding: "8px" }}>{"√3"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      hint: {
        text: "ຄ່າເຫຼົ່ານີ້ຈະພົບເລື້ອຍທີ່ສຸດໃນຟີຊິກສາດ ແລະ ວິສະວະກຳສາດ, ຈົ່ງຈື່ໃຫ້ຂຶ້ນໃຈເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າໄຕມຸມມິຕິຂອງມຸມພິເສດ: "}{" "}
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
              <span>{"(1) ຄ່າຂອງ cos 60° ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 1/2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄ່າຂອງ tan 45° ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ທິດສະດີປີຕາກໍ (Pythagoras) ຊອກຫາຂ້າງທີ່ເຫຼືອກ່ອນ! ບົດທ້າທາຍ 2: ຜັນປ່ຽນສູດ sin²θ + cos²θ = 1 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າໄຕມຸມມິຕິ ຫຼັງຈາກນຳໃຊ້ທິດສະດີປີຕາກໍ: "}{" "}
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
                <span>{"(1) ໃຫ້ຮູບສາມແຈ ABC ສາກຢູ່ A ທີ່ມີ AC = 5 cm, BC = 13 cm. ຂ້າງ AB ແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຄ່າຂອງ cos B ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 12/13):"}</span>
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
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນໄຕມຸມມິຕິ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່ຄ່າຂອງສຳນວນ A = sin² 30° + cos² 30° (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່ຄ່າຂອງສຳນວນ B = 2 · sin 30° + √3 · tan 60° (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: B ="}</span>
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
            {"ຈົ່ງຊອກຫາລວງຍາວຂ້າງ ໂດຍການນຳໃຊ້ໄຕມຸມມິຕິ: "}{" "}
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
              <span>{"(1) ໃຫ້ຮູບສາມແຈສາກ ABC ມີມຸມ B = 30° ແລະ ຂ້າງກົງໜ້າມຸມສາກ BC = 10 cm. ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ AC (cm) (ຄຳແນະນຳ: AC = BC · sin 30°):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: AC ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ AB (cm) ໂດຍຕອບໃນຮູບຮ່າງ a√3 (ຕົວຢ່າງ: 5√3):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: AB ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການວັດແທກຄວາມສູງຂອງຕົ້ນໄມ້ (Tree Height Measurement): "}{" "}
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
              <span>{"(1) ທ້າວສົມດີຢືນຫ່າງຈາກຕົ້ນໄມ້ 10 ແມັດ ແລະ ແນມເບິ່ງປາຍຕົ້ນໄມ້ດ້ວຍມຸມເງີຍ 45°. ຄວາມສູງຂອງຕົ້ນໄມ້ສ່ວນທີ່ຢູ່ເໜືອລະດັບສາຍຕາແມ່ນຈັກແມັດ? (ຄຳແນະນຳ: ໃຊ້ tan 45° = H / 10):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າລະດັບສາຍຕາຂອງລາວສູງຈາກພື້ນດິນ 1.5 ແມັດ, ຄວາມສູງທັງໝົດຂອງຕົ້ນໄມ້ແມ່ນຈັກແມັດ? (ຕອບເປັນເລກທົດສະນິຍົມ, ຕົວຢ່າງ: 11.5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
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
          <span key="u25-ans-1-1">{"(1) 3/5 (ເພາະວ່າ sin B = AC/BC = 3/5)"}</span>,
          <span key="u25-ans-1-2">{"(2) 3/4 (ເພາະວ່າ tan B = AC/AB = 3/4)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u25-ans-2-1">{"(1) 1/2 (ເພາະວ່າ cos 60° = 1/2)"}</span>,
          <span key="u25-ans-2-2">{"(2) 1 (ເພາະວ່າ tan 45° = 1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u25-ans-t1-1">{"(1) 12 (ເພາະວ່າ AB² = BC² - AC² = 169 - 25 = 144 ⇒ AB = 12 cm)"}</span>,
          <span key="u25-ans-t1-2">{"(2) 12/13 (ເພາະວ່າ cos B = AB/BC = 12/13)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u25-ans-t2-1">{"(1) 1 (ເພາະວ່າ sin²θ + cos²θ = 1 ຖືກຕ້ອງກັບທຸກໆມຸມ)"}</span>,
          <span key="u25-ans-t2-2">{"(2) 4 (ເພາະວ່າ B = 2 * (1/2) + √3 * √3 = 1 + 3 = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u25-ans-s1-1">{"(1) 5 (ເພາະວ່າ AC = 10 * sin 30° = 10 * 0.5 = 5 cm)"}</span>,
          <span key="u25-ans-s1-2">{"(2) 5√3 (ເພາະວ່າ AB = 10 * cos 30° = 10 * (√3/2) = 5√3 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u25-ans-s2-1">{"(1) 10 (ເພາະວ່າ H = 10 * tan 45° = 10 * 1 = 10 m)"}</span>,
          <span key="u25-ans-s2-2">{"(2) 11.5 (ເພາະວ່າຄວາມສູງທັງໝົດແມ່ນ 10 + 1.5 = 11.5 ແມັດ)"}</span>,
        ],
      },
    ],
    advice: "ອັດຕາສ່ວນໄຕມຸມມິຕິໃນຮູບສາມແຈສາກ ເປັນພື້ນຖານອັນຍິ່ງໃຫຍ່ໃນການວັດແທກໄລຍະທາງ ແລະ ຄວາມສູງທາງອ້ອມ ໂດຍບໍ່ຕ້ອງປີນຂຶ້ນໄປແທັກຕົວຈິງເດີ້!",
  },
};
