import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit29Data: UnitData = {
  unitNumber: 29,
  unitTitle: "ພາກທີ III - ບົດທີ 29: ເນື້ອທີ່ຂອງຮູບສາມແຈໂດຍນຳໃຊ້ໄຕມຸມມິຕິ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສາມແຈ S = 1/2 · ab · sin C ເມື່ອຮູ້ສອງຂ້າງ ແລະ ມຸມລະຫວ່າງສອງຂ້າງນັ້ນ ພ້ອມທັງການນຳໃຊ້ກັບມຸມຫວາ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 29 ໜ້າ 169-174",
  subSections: [
    {
      title: "1. ສູດເນື້ອທີ່ຮູບສາມແຈໂດຍໃຊ້ໄຕມຸມມິຕິ (Area of Triangle by Trigonometry)",
      keyPoint: {
      title: "1. ສູດເນື້ອທີ່ຮູບສາມແຈໂດຍໃຊ້ໄຕມຸມມິຕິ (Area of Triangle by Trigonometry)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເນື້ອທີ່ S ຂອງຮູບສາມແຈ ABC ໃດໜຶ່ງ ສາມາດຄິດໄລ່ໄດ້ຈາກສອງຂ້າງ ແລະ ມຸມລະຫວ່າງພວກມັນ:"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດຄິດໄລ່ເນື້ອທີ່ S: "}</strong>
              <span>{"S = "}</span>
              <Fraction num="1" den="2" />
              <span>{"ab · sin C = "}</span>
              <Fraction num="1" den="2" />
              <span>{"bc · sin A = "}</span>
              <Fraction num="1" den="2" />
              <span>{"ac · sin B"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <span style={{ color: "#555" }}>
                {"- ສູດນີ້ມີປະໂຫຍດຫຼາຍເພາະເຮົາບໍ່ຈຳເປັນຕ້ອງຊອກຫາລວງສູງ (Height) ຂອງຮູບສາມແຈໂດຍກົງ!"}
                <br />
                {"- ⚠️ ໝາຍເຫດ: ຖ້າມຸມລະຫວ່າງສອງຂ້າງເປັນມຸມຫວາ (ເຊັ່ນ 150°), ເຮົາກໍຍັງໃຊ້ສູດດຽວກັນນີ້ໄດ້ ໂດຍນຳໃຊ້ sin 150° = sin 30° = 1/2."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຮູບສາມແຈ ABC ມີ a = 6 cm, b = 10 cm, ແລະ ມຸມ C = 30°. ເນື້ອທີ່ S = 1/2 * 6 * 10 * sin 30° = 30 * 0.5 = 15 cm² เດີ!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຮູບສາມແຈ ໂດຍນຳໃຊ້ສູດໄຕມຸມມິຕິ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ a = 8 cm, b = 5 cm ແລະ ມຸມ C = 30°. ເນື້ອທີ່ S ຈະແມ່ນຈັກ cm²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນຮູບສາມແຈ ABC ມີ b = 6 cm, c = 8 cm ແລະ ມຸມ A = 45°. ເນື້ອທີ່ S ຈະແມ່ນຈັກ cm²? (ຕອບໃນຮູບຮ່າງ a√2, ຕົວຢ່າງ: 12√2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ບົດຮຽນພື້ນຖານ",
      keyPoint: { content: <span /> },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາເນື້ອທີ່ຮູບສາມແຈທີ່ມີມຸມລະຫວ່າງຂ້າງເປັນມຸມຫວາ (Obtuse Angle): "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ a = 12 cm, c = 5 cm ແລະ ມຸມ B = 150°. ເນື້ອທີ່ S ຈະແມ່ນຈັກ cm²? (ຄຳແນະນຳ: sin 150° = sin 30° = 0.5):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນຮູບສາມແຈ ABC ມີ a = 4 cm, b = 6 cm ແລະ ມຸມ C = 120°. ເນື້ອທີ່ S ຈະແມ່ນຈັກ cm²? (ຕອບໃນຮູບຮ່າງ a√3, ຕົວຢ່າງ: 6√3):"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ຫຼັກເກັນຊິນ ຫຼື ປີຕາກໍເພື່ອຊອກຫາຂ້າງທີ່ຕ້ອງໃຊ້ກ່ອນ! ບົດທ້າທາຍ 2: ເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານແມ່ນ 2 ເທົ່າຂອງເນື້ອທີ່ຮູບສາມແຈເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ຮູບສາມແຈ ຫຼັງຈາກຊອກຫາລວງຍາວຂ້າງທີ່ເຫຼືອ: "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈ ABC ມີມຸມ A = 30°, B = 90° ແລະ ຂ້າງ AB = 6√3 cm. (ຂ້າງ AC = 12 cm, BC = 6 cm). ເນື້ອທີ່ S ຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm²? (ຕອບໃນຮູບຮ່າງ a√3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: S ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃນຮູບສາມແຈ ABC ມີມຸມ B = 45°, C = 90° ແລະ ຂ້າງ AC = 6 cm (ຂ້າງ BC = 6 cm, AB = 6√2 cm). ເນື້ອທີ່ S ຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: S ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດກ່ຽວກັບເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານ (Area of Parallelogram): "}{" "}
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
                <span>{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານ ABCD ມີຂ້າງ AB = 8 cm, AD = 5 cm ແລະ ມຸມ A = 30°. ເນື້ອທີ່ S ຂອງຮູບສີ່ແຈຂ້າງຂະໜານນີ້ແມ່ນຈັກ cm²? (ຄຳແນະນຳ: S = ab · sin A):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: S ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຮູບສີ່ແຈຂ້າງຂະໜານ ABCD ມີຂ້າງ AB = 6 cm, AD = 10 cm ແລະ ມຸມ A = 120°. ເນື້ອທີ່ S ຂອງຮູບສີ່ແຈຂ້າງຂະໜານນີ້ແມ່ນຈັກ cm²? (ຕອບໃນຮູບຮ່າງ a√3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: S ="}</span>
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
            {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ ຈາກເນື້ອທີ່ທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈ ABC ມີ b = 10 cm, ມຸມ A = 30° ແລະ ມີເນື້ອທີ່ S = 15 cm². ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ c (cm) (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: c ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃນຮູບສາມແຈ ABC ມີ a = 8 cm, c = 6 cm ແລະ ມີເນື້ອທີ່ S = 12 cm². ຈົ່ງຊອກຫາຄ່າຂອງ sin B (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 1/2):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: sin B ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການແບ່ງປັນດິນນາຮູບສາມແຈ (Trigonometric Land Partitioning): "}{" "}
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
              <span>{"(1) ທ້າວສົມດີມີດິນນາຮູບສາມແຈ ABC ທີ່ມີສອງຂ້າງຕິດແປະແມ່ນ a = 40 m, b = 30 m ແລະ ມຸມລະຫວ່າງສອງຂ້າງແມ່ນ C = 150°. ຈົ່ງຊອກຫາເນື້ອທີ່ທັງໝົດຂອງດິນນາຕອນນີ້ (m²):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ເນື້ອທີ່ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າລາວຕ້ອງການແບ່ງດິນນາຕອນນີ້ໃຫ້ລູກສອງຄົນເທົ່າໆກັນ, ເນື້ອທີ່ດິນນາທີ່ລູກແຕ່ລະຄົນຈະໄດ້ຮັບແມ່ນຈັກ m²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ແຕ່ລະຄົນໄດ້"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m²"}</span>
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
          <span key="u29-ans-1-1">{"(1) 10 (ເພາະວ່າ S = 1/2 * 8 * 5 * sin 30° = 20 * 0.5 = 10 cm²)"}</span>,
          <span key="u29-ans-1-2">{"(2) 12√2 (ເພາະວ່າ S = 1/2 * 6 * 8 * sin 45° = 24 * (√2/2) = 12√2 cm²)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u29-ans-2-1">{"(1) 15 (ເພາະວ່າ S = 1/2 * 12 * 5 * sin 150° = 30 * 0.5 = 15 cm²)"}</span>,
          <span key="u29-ans-2-2">{"(2) 6√3 (ເພາະວ່າ S = 1/2 * 4 * 6 * sin 120° = 12 * (√3/2) = 6√3 cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u29-ans-t1-1">{"(1) 18√3 (ເພາະວ່າ S = 1/2 * 12 * 6√3 * sin 30° = 36√3 * 0.5 = 18√3 cm²)"}</span>,
          <span key="u29-ans-t1-2">{"(2) 18 (ເພາະວ່າ S = 1/2 * 6 * 6 = 18 cm² (ສາມແຈສາກມີ cos B = cos 45°))"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u29-ans-t2-1">{"(1) 20 (ເພາະວ່າ S = 8 * 5 * sin 30° = 40 * 0.5 = 20 cm²)"}</span>,
          <span key="u29-ans-t2-2">{"(2) 30√3 (ເພາະວ່າ S = 6 * 10 * sin 120° = 60 * (√3/2) = 30√3 cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u29-ans-s1-1">{"(1) 6 (ເພາະວ່າ c = 2S / (b * sin A) = 30 / (10 * 0.5) = 6 cm)"}</span>,
          <span key="u29-ans-s1-2">{"(2) 1/2 (ເພາະວ່າ sin B = 2S / (a * c) = 24 / (8 * 6) = 24/48 = 1/2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u29-ans-s2-1">{"(1) 300 (ເພາະວ່າ S = 1/2 * 40 * 30 * sin 150° = 600 * 0.5 = 300 m²)"}</span>,
          <span key="u29-ans-s2-2">{"(2) 150 (ເພາະວ່າ 300 / 2 = 150 m²)"}</span>,
        ],
      },
    ],
    advice: "ການນຳໃຊ້ໄຕມຸມມິຕິເພື່ອຊອກຫາເນື້ອທີ່ຮູບສາມແຈ ເປັນຄວາມຮູ້ພຶ້ນຖານທີ່ດີເລີດທີ່ສຸດ ເພາະມັນສາມາດນຳໃຊ້ໄດ້ກັບທຸກໆມຸມ (ແຫຼມ, ສາກ, ຫວາ) ໄດ້ຢ່າງສະດວກສະບາຍເດີ້!",
  },
};
