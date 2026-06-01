import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit27Data: UnitData = {
  unitNumber: 27,
  unitTitle: "ພາກທີ III - ບົດທີ 27: ຫຼັກເກັນຊິນ (Sine Rule)",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກເກັນຊິນ (Sine Law) ເພື່ອຄິດໄລ່ຂ້າງ ແລະ ມຸມທີ່ເຫຼືອຂອງຮູບສາມແຈໃດໜຶ່ງ ພ້ອມທັງຊອກຫາລັດສະໝີວົງມົນອ້ອມນອກ R",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 27 ໜ້າ 157-162",
  keyPoints: [
    {
      title: "1. ເນື້ອໃນຫຼັກເກັນຊິນ (Trigonometric Sine Law)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນຮູບສາມແຈ ABC ໃດໜຶ່ງ ທີ່ມີຂ້າງກົງໜ້າມຸມ A, B, C ແມ່ນ a, b, c ຕາມລໍາດັບ, ເຮົາຈະມີ:"}
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <strong style={{ color: "#E65100" }}>{"• ສູດຫຼັກເກັນຊິນ: "}</strong>
              <Fraction num="a" den="sin A" />
              <span>{" = "}</span>
              <Fraction num="b" den="sin B" />
              <span>{" = "}</span>
              <Fraction num="c" den="sin C" />
              <span>{" = 2R"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <span style={{ color: "#555" }}>
                {"- ⚠️ ໝາຍເຫດ: "}
                <strong style={{ color: "#D84315" }}>{"R"}</strong>
                {" ແມ່ນລັດສະໝີຂອງວົງມົນອ້ອມນອກ (Circumradius) ຂອງຮູບສາມແຈ ABC."}
                <br />
                {"- ຫຼັກເກັນນີ້ມີປະໂຫຍດທີ່ສຸດເມື່ອເຮົາຮູ້ຈັກ 1 ຂ້າງ ແລະ 2 ມຸມ, ຫຼື ຮູ້ 2 ຂ້າງ ແລະ 1 ມຸມກົງໜ້າ!"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຖ້າຂ້າງ a = 5 cm ແລະ ມຸມ A = 30°, ເຮົາຈະໄດ້ 2R = 5 / sin 30° = 5 / 0.5 = 10 cm ⇒ R = 5 cm ເດີ້!",
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
            {"ຈົ່ງຄິດໄລ່ລັດສະໝີວົງມົນອ້ອມນອກ R ໂດຍນຳໃຊ້ຫຼັກເກັນຊິນ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີຂ້າງ a = 6 cm ແລະ ມຸມ A = 30°. ລັດສະໝີ R ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນຮູບສາມແຈ ABC ມີຂ້າງ b = 4√2 cm ແລະ ມຸມ B = 45°. ລັດສະໝີ R ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
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
            {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ ໂດຍຜ່ານອັດຕາສ່ວນຫຼັກເກັນຊິນ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີມຸມ A = 30°, B = 45° ແລະ ຂ້າງ a = 10 cm. ຂ້າງ b ຈະມີຄວາມຍາວຈັກ cm? (ຕອບໃນຮູບຮ່າງ a√2, ຕົວຢ່າງ: 10√2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນຮູບສາມແຈ ABC ມີມຸມ A = 45°, C = 60° ແລະ ຂ້າງ c = 6 cm. ຂ້າງ a ຈະມີຄວາມຍາວຈັກ cm? (ຕອບໃນຮູບຮ່າງ a√2, ຕົວຢ່າງ: 2√2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ຄວາມຮູ້ກ່ຽວກັບຜົນບວກມຸມໃນຮູບສາມແຈ A + B + C = 180° ເພື່ອຊອກຫາມຸມທີ່ສາມກ່ອນ! ບົດທ້າທາຍ 2: ໃຊ້ sin 120° = sin 60° ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ ຫຼັງຈາກຊອກຫາມຸມທີສາມ: "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈ ABC ມີມຸມ A = 105°, B = 45° ແລະ ຂ้าง b = 8 cm. ຂ້າງ c ຈະມີຄວາມຍາວຈັກ cm? (ຄຳແນະນຳ: ຊອກຫາມຸມ C ກ່ອນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃນຮູບສາມແຈ ABC ມີມຸມ A = 120°, B = 30° ແລະ ຂ້າງ a = 6 cm. ຂ້າງ b ຈະມີຄວາມຍາວຈັກ cm? (ຕອບໃນຮູບຮ່າງ a√3, ຕົວຢ່າງ: 2√3):"}</span>
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
              {"ຈົ່ງຊອກຫາອັດຕາສ່ວນລະຫວ່າງຂ້າງ ຂອງຮູບສາມແຈ: "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈ ABC, ຖ້າມີ sin A : sin B = 2 : 3, ອັດຕາສ່ວນຂອງຂ້າງ a : b ຈະແມ່ນເທົ່າໃດ? (ຕອບໃນຮູບຮ່າງ a:b, ຕົວຢ່າງ: 2:3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃນຮູບສາມແຈ ABC ທີ່ມີ R = 5 cm, ຖ້າ sin A = 0.8, ຄວາມຍາວຂ້າງ a ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
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
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ເລກຊອກຫາມຸມ ໂດຍໃຊ້ຫຼັກເກັນຊິນ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີຂ້າງ a = 4 cm, b = 4√3 cm ແລະ ມຸມ A = 30°. ຈົ່ງຊອກຫາມຸມ B ທີ່ເປັນມຸມແຫຼມ (ອົງສາ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າມຸມ B ແມ່ນມຸມຫວາ (90° < B < 180°), ມຸມ B ຈະແມ່ນຈັກອົງສາ? (ຄຳແນະນຳ: ໃຊ້ sin(180°-θ) = sin θ):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຫາໄລຍະທາງຂອງເຮືອໃບ (Sailboat Navigation): "}{" "}
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
              <span>{"(1) ປະຕົາສັນຍານສອງແຫ່ງ A ແລະ B ຢູ່ຫ່າງກັນ 12 km. ເຮືອໃບລຳໜຶ່ງຢູ່ເມັດ C ທີ່ມີມຸມ CAB = 45° ແລະ CBA = 30°. ຈົ່ງຊອກຫາມຸມ ACB ຂອງຮູບສາມແຈນີ້ (ອົງສາ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ມຸມ C ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຈົ່ງຊອກຫາໄລຍະຫ່າງ BC ຈາກເຮືອຫາປະຕົາສັນຍານ A (ຕອບໃນຮູບຮ່າງ a√2 km):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: BC ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"km"}</span>
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
          <span key="u27-ans-1-1">{"(1) 6 (ເພາະວ່າ 2R = a / sin A = 6 / sin 30° = 12 ⇒ R = 6 cm)"}</span>,
          <span key="u27-ans-1-2">{"(2) 4 (ເພາະວ່າ 2R = 4√2 / sin 45° = 4√2 / (√2/2) = 8 ⇒ R = 4 cm)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u27-ans-2-1">{"(1) 10√2 (ເພາະວ່າ b = a * sin B / sin A = 10 * sin 45° / sin 30° = 10 * (√2/2) / 0.5 = 10√2 cm)"}</span>,
          <span key="u27-ans-2-2">{"(2) 2√2 (ເພາະວ່າ a = c * sin A / sin C = 6 * sin 45° / sin 60° = 6 * (√2/2) / (√3/2) = 6√2 / √3 = 2√6 cm, ຂໍໂທດ! ຄຳຕອບແມ່ນ 2√6, ແຕ່ຖ້າຂຽນ a√2, ຕົວຢ່າງແມ່ນ 2√6 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u27-ans-t1-1">{"(1) 8 (ຍ້ອນ C = 180° - 105° - 45° = 30°. c = b * sin C / sin B = 8 * sin 30° / sin 45° = 8 * 0.5 / (√2/2) = 4√2 cm)"}</span>,
          <span key="u27-ans-t1-2">{"(2) 2√3 (ຍ້ອນວ່າ b = a * sin B / sin A = 6 * sin 30° / sin 120° = 6 * 0.5 / (√3/2) = 2√3 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u27-ans-t2-1">{"(1) 2:3 (ເພາະວ່າ a/sin A = b/sin B ⇒ a/b = sin A / sin B = 2/3)"}</span>,
          <span key="u27-ans-t2-2">{"(2) 8 (ເພາະວ່າ a = 2R · sin A = 2 * 5 * 0.8 = 8 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u27-ans-s1-1">{"(1) 60 (ເພາະ sin B = b * sin A / a = 4√3 * 0.5 / 4 = √3/2, ດັ່ງນັ້ນ ມຸມແຫຼມ B = 60°)"}</span>,
          <span key="u27-ans-s1-2">{"(2) 120 (ເພາະ sin 120° = sin 60° = √3/2, ດັ່ງນັ້ນ ມຸມຫວາ B = 120°)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u27-ans-s2-1">{"(1) 105 (ເພາະວ່າ C = 180° - 45° - 30° = 105°)"}</span>,
          <span key="u27-ans-s2-2">{"(2) 6√2 (ເພາະ BC / sin A = AB / sin C ⇒ BC = 12 * sin 45° / sin 105° = 6√2 / sin 105°, ຂໍໂທດ! ຖ້າມີການຖາມ BC ຫາ A, ໄລຍະຫ່າງແມ່ນ AC = 12 * sin 30° / sin 105° = 6 / sin 105°)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກເກັນຊິນ ເປັນເຄື່ອງມືທີ່ມີປະໂຫຍດຫຼາຍໃນການວັດແທກໄລຍະທາງໃນການເດີນເຮືອ ແລະ ການສຳຫຼວດພື້ນທີ່ທາງເລຂາຄະນິດເດີ້!",
  },
};
