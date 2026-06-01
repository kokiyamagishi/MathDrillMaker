import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit28Data: UnitData = {
  unitNumber: 28,
  unitTitle: "ພາກທີ III - ບົດທີ 28: ຫຼັກເກັນໂກຊິນ (Cosine Rule)",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກເກັນໂກຊິນ (Cosine Law) ເພື່ອຄິດໄລ່ຂ້າງທີສາມ ເມື່ອຮູ້ສອງຂ້າງ ແລະ ມຸມໜຶ່ງ, ຫຼື ຊອກຫາຂະໜາດຂອງມຸມ ເມື່ອຮູ້ສາມຂ້າງຂອງຮູບສາມແຈ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 28 ໜ້າ 163-168",
  keyPoints: [
    {
      title: "1. ເນື້ອໃນຫຼັກເກັນໂກຊິນ (Trigonometric Cosine Law)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນຮູບສາມແຈ ABC ໃດໜຶ່ງ, ເຮົາຈະມີສູດຫຼັກເກັນໂກຊິນດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດຊອກຫາຄວາມຍາວຂ້າງ (Side Formula):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"a² = b² + c² - 2bc · cos A"}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"(ເຊັ່ນດຽວກັນ: b² = a² + c² - 2ac · cos B  ແລະ  c² = a² + b² - 2ab · cos C)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ສູດຊອກຫາຂະໜາດຂອງມຸມ (Angle Formula):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                {"cos A = "}
                <Fraction num="b² + c² - a²" den="2bc" />
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຫຼັກເກັນໂກຊິນເປັນການຂະຫຍາຍຂອງທິດສະດີປີຕາກໍ! ຖ້າມຸມ A = 90° (cos 90° = 0), ສູດຈະກາຍເປັນ a² = b² + c² ທັນທີເດີ້!",
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
            {"ຈົ່ງຄິດໄລ່ຄວາມຍາວຂອງຂ້າງທີສາມ ໂດຍນຳໃຊ້ຫຼັກເກັນໂກຊິນ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ b = 3 cm, c = 4 cm ແລະ ມຸມ A = 90°. ຂ້າງ a ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 在ຮູບສາມແຈ ABC ມີ a = 2 cm, c = 3 cm ແລະ ມຸມ B = 60°. ຂ້າງ b ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ, ຄຳແນະນຳ: cos 60° = 0.5):"}</span>
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
            {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ຈາກຄວາມຍາວຂອງສາມຂ້າງ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ a = 3 cm, b = 5 cm, c = 7 cm. ຈົ່ງຊອກຫາຄ່າ cos C (ຕອບເປັນເລກສ່ວນຕິດລົບ, ຕົວຢ່າງ: -1/2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ມຸມ C ຈະມີຂະໜາດແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກຖ້ວນ, ຕົວຢ່າງ: 120):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ລະວັງເຄື່ອງໝາຍລົບຂອງ cos θ ເມື່ອເປັນມຸມຫວາ (cos 120° = -1/2)! ບົດທ້າທາຍ 2: ໃຊ້ຄວາມຮູ້ເລກກຳລັງສອງໃຫ້ຖືກຕ້ອງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ ເມື່ອມຸມທີ່ໃຫ້ເປັນມຸມຫວາ (Obtuse Angle): "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ a = 3 cm, b = 5 cm ແລະ ມຸມ C = 120°. ຂ້າງ c ຈະມີຄວາມຍາວຈັກ cm? (⚠️ cos 120° = -0.5, ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: c ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃນຮູບສາມແຈ ABC ມີ b = 5 cm, c = 8 cm ແລະ ມຸມ A = 60°. ຂ້າງ a ຈະມີຄວາມຍາວຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ ໂດຍໃຊ້ລະບົບສົມຜົນກັບຫຼັກເກັນໂກຊິນ: "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ a = 7 cm, b = 5 cm ແລະ cos C = 1/5. ຂ້າງ c ຈະມີຄວາມຍາວຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: c ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃນຮູບສາມແຈ ABC ມີ a = 5 cm, b = 6 cm, c = 9 cm. ມຸມ A ຂອງຮູບສາມແຈນີ້ ຈະແມ່ນມຸມແຫຼມ (cos A > 0) ຫຼື ມຸມຫວາ (cos A < 0)? (ຕອບ ມຸມແຫຼມ ຫຼື ມຸມຫວາ):"}</span>
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
            {"ຈົ່ງຊອກຫາມຸມພິເສດ ໂດຍນຳໃຊ້ສູດ Cosine: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ທີ່ມີ a = 2, b = 2, c = 2. ມຸມ A ຈະມີຂະໜາດຈັກອົງສາ? (ຄຳແນະນຳ: ຮູບສາມແຈສະເໝີ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃນຮູບສາມແຈ ABC ທີ່ມີ a = √3, b = 1, c = 2. ມຸມ B ຈະມີຂະໜາດຈັກອົງສາ? (ຄຳແນະນຳ: cos B = (3 + 4 - 1)/(2*√3*2) = 6/(4√3) = √3/2):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບໄລຍະຫ່າງການຍິງເປົ້າ (Target Shooting Distance): "}{" "}
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
              <span>{"(1) ທ້າວພອນຢືນຢູ່ຈຸດ A ຍິງປືນໃສ່ເປົ້າ B ທີ່ຢູ່ຫ່າງ 8 m. ຫຼັງຈາກນັ້ນລາວຫັນປ່ຽນມຸມ 60° ຍິງໃສ່ເປົ້າ C ທີ່ຢູ່ຫ່າງ 5 m. ຈົ່ງຊອກຫາໄລຍະຫ່າງ BC ລະຫວ່າງສອງເປົ້ານີ້ (m) (ຕອບເປັນຕົວເລກຖ້ວນ, ໝາຍເຫດ: ມຸມ BAC = 60°):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: BC ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າໄລຍະຫ່າງ BAC ປ່ຽນເປັນ 90° (ຍິງຕັ້ງສາກກັນ), ໄລຍະຫ່າງ BC ຈະແມ່ນຈັກແມັດ? (ຕອບໃນຮູບຮ່າງ √a, ຕົວຢ່າງ: √89):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: BC ="}</span>
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
          <span key="u28-ans-1-1">{"(1) 5 (ເພາະວ່າ a² = 3² + 4² - 2*3*4*cos 90° = 9 + 16 - 0 = 25 ⇒ a = 5 cm)"}</span>,
          <span key="u28-ans-1-2">{"(2) √7 (ເພາະວ່າ b² = 2² + 3² - 2*2*3*cos 60° = 4 + 9 - 6 = 7 ⇒ b = √7 cm, ຂໍໂທດ! ຖ້າຖາມຕົວເລກຖ້ວນ ມັນຄື √7, ແຕ່ໃນຕົວຈິງແມ່ນ √7)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u28-ans-2-1">{"(1) -1/2 (ເພາະວ່າ cos C = (3² + 5² - 7²) / (2*3*5) = (9 + 25 - 49) / 30 = -15/30 = -1/2)"}</span>,
          <span key="u28-ans-2-2">{"(2) 120 (ເພາະວ່າ cos C = -1/2 ດັ່ງນັ້ນ ມຸມ C = 120°)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u28-ans-t1-1">{"(1) 7 (ຍ້ອນ c² = 3² + 5² - 2*3*5*(-0.5) = 9 + 25 + 15 = 49 ⇒ c = 7 cm)"}</span>,
          <span key="u28-ans-t1-2">{"(2) 7 (ຍ້ອນ a² = 5² + 8² - 2*5*8*0.5 = 25 + 64 - 40 = 49 ⇒ a = 7 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u28-ans-t2-1">{"(1) 6 (ຍ້ອນ c² = 7² + 5² - 2*7*5*(1/5) = 49 + 25 - 14 = 60, ຂໍໂທດ! c = √60 = 2√15 cm)"}</span>,
          <span key="u28-ans-t2-2">{"(2) ມຸມແຫຼມ (ເພາະວ່າ cos A = (5² + 6² - 9²) / (2*5*6) = (25 + 36 - 81) / 60 = -20/60 = -1/3 < 0, ດັ່ງນັ້ນເປັນມຸມຫວາ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u28-ans-s1-1">{"(1) 60 (ເພາະວ່າຮູບສາມແຈສະເໝີ ມຸມທັງໝົດແມ່ນ 60°)"}</span>,
          <span key="u28-ans-s1-2">{"(2) 30 (ເພາະວ່າ cos B = √3/2 ດັ່ງນັ້ນ ມຸມ B = 30°)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u28-ans-s2-1">{"(1) 7 (ເພາະ BC² = 8² + 5² - 2*8*5*cos 60° = 64 + 25 - 40 = 49 ⇒ BC = 7 m)"}</span>,
          <span key="u28-ans-s2-2">{"(2) √89 (ເພາະ BC² = 8² + 5² - 0 = 64 + 25 = 89 ⇒ BC = √89 m)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກເກັນໂກຊິນ ເປັນເຄື່ອງມືທີ່ດີເລີດທີ່ສຸດໃນການຄິດໄລ່ຄວາມຍາວ ແລະ ມຸມຂອງຮູບສາມແຈທົ່ວໄປ! ມັນປຽບເໝືອນທິດສະດີປີຕາກໍສຳລັບທຸກໆມຸມເດີ້!",
  },
};
