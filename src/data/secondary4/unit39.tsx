import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit39Data: UnitData = {
  unitNumber: 39,
  unitTitle: "ພາກທີ VI - ບົດທີ 39: ບໍລິມາດຂອງຮູບທາດຈວຍ ແລະ ຮູບຈວຍ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ບໍລິມາດ (Volume) ຂອງຮູບທາດຈວຍ (Pyramid) ແລະ ຮູບຈວຍ (Cone) ໂດຍນຳໃຊ້ສູດ V = 1/3 · S_base · h",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 39 ໜ້າ 229-234",
  keyPoints: [
    {
      title: "1. ສູດບໍລິມາດຂອງຮູບທາດຈວຍ ແລະ ຮູບຈວຍ (Volume Formulas)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ບໍລິມາດ V ຂອງຮູບທາດຈວຍ ຫຼື ຮູບຈວຍ ທີ່ມີເນື້ອທີ່ພື້ນ S_base ແລະ ລວງສູງ h ( height ) ແມ່ນ:"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດບໍລິມາດທົ່ວໄປ: "}</strong>
              <span>{"V = "}</span>
              <Fraction num="1" den="3" />
              <span>{"· S_base · h"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <strong style={{ color: "#E65100" }}>{"• ບໍລິມາດຂອງຮູບຈວຍ (Volume of Cone): "}</strong>
              <span>{"V = "}</span>
              <Fraction num="1" den="3" />
              <span>{"πr²h"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <strong style={{ color: "#E65100" }}>{"• ບໍລິມາດຂອງຮູບທາດຈວຍສີ່ແຈ (Volume of Square Pyramid): "}</strong>
              <span>{"V = "}</span>
              <Fraction num="1" den="3" />
              <span>{"a²h  (ເມື່ອຂ້າງພື້ນແມ່ນ a)"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ໄວ້ວ່າ ບໍລິມາດຂອງຮູບຈວຍ ຫຼື ທາດຈວຍ ຈະມີຄ່າເທົ່າກັບ 1/3 ຂອງບໍລິມາດຮູບທໍ່ກົມ ຫຼື ຮູບທໍ່ຫຼ່ຽມ ທີ່ມີພື້ນ ແລະ ລວງສູງເທົ່າກັນເດີ້!",
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
            {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຈວຍ (ຕອບໃນຮູບຮ່າງຕິດຄ່າ π): "}{" "}
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
              <span>{"(1) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 3 cm ແລະ ລວງສູງ h = 5 cm. ບໍລິມາດ V ແມ່ນຈັກ π cm³? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"π"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 6 cm ແລະ ລວງສູງ h = 10 cm. ບໍລິມາດ V ແມ່ນຈັກ π cm³? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"π"}</span>
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
            {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບທາດຈວຍສີ່ແຈສະເໝີ: "}{" "}
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
              <span>{"(1) ຮູບທາດຈວຍສີ່ແຈສະເໝີມີຂ້າງພື້ນ a = 4 cm ແລະ ລວງສູງ h = 6 cm. ບໍລິມາດ V ຈະແມ່ນຈັກ cm³? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm³"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຮູບທາດຈວຍສີ່ແຈສະເໝີມີຂ້າງພື້ນ a = 5 cm ແລະ ລວງສູງ h = 12 cm. ບໍລິມາດ V ຈະແມ່ນຈັກ cm³? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm³"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ທິດສະດີປີຕາກໍເພື່ອຊອກຫາລວງສູງ h ຈາກລວງເນັ່ງ L ແລະ ລັດສະໝີ r ກ່ອນ (h = √(L² - r²))! ບົດທ້າທາຍ 2: ໃຫ້ທຽບອັດຕາສ່ວນບໍລິມາດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາບໍລິມາດ ຫຼັງຈາກນຳໃຊ້ທິດສະດີປີຕາກໍຊອກຫາລວງສູງ h: "}{" "}
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
                <span>{"(1) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 6 cm ແລະ ລວງເນັ່ງ L = 10 cm. ລວງສູງ h ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: h ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ບໍລິມາດ V ຂອງຮູບຈວຍນີ້ແມ່ນຈັກ π cm³? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"π"}</span>
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
              {"ຈົ່ງຄິດໄລ່ອັດຕາສ່ວນການປ່ຽນແປງຂອງບໍລິມາດ (Volume Scaling Analysis): "}{" "}
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
                <span>{"(1) ຖ້າເຮົາເພີ່ມລວງສູງ h ຂອງຮູບຈວຍຂຶ້ນເປັນ 3 ເທົ່າ ໂດຍຮັກສາລັດສະໝີ r ຄືເກົ່າ, ບໍລິມາດຂອງຮູບຈວຍໃໝ່ ຈະເພີ່ມຂຶ້ນເປັນຈັກເທົ່າ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ເພີ່ມຂຶ້ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ເທົ່າ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າເຮົາເພີ່ມລັດສະໝີພື້ນ r ຂອງຮູບຈວຍຂຶ້ນເປັນ 2 ເທົ່າ ໂດຍຮັກສາລວງສູງ h ຄືເກົ່າ, ບໍລິມາດຂອງຮູບຈວຍໃໝ່ ຈະເພີ່ມຂຶ້ນເປັນຈັກເທົ່າ? (⚠️ ລະວັງການຂຶ້ນກຳລັງສອງຂອງ r):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ເພີ່ມຂຶ້ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ເທົ່າ"}</span>
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
            {"ຈົ່ງຊອກຫາລວງສູງ h ຫຼື ລັດສະໝີ r ຈາກບໍລິມາດທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ຮູບຈວຍໜຶ່ງມີບໍລິມາດແມ່ນ 12π cm³ ແລະ ມີລັດສະໝີພື້ນ r = 3 cm. ລວງສູງ h ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: h ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຮູບທາດຈວຍສີ່ແຈສະເໝີໜຶ່ງ ມີບໍລິມາດແມ່ນ 50 cm³ ແລະ ມີລວງສູງ h = 6 cm. ເນື້ອທີ່ພື້ນ S_base ຈະແມ່ນຈັກ cm²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: S_base ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm²"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຊອກຫາບໍລິມາດຖັງເກັບເມັດພັນພືດ (Grain Silo Volume Optimization): "}{" "}
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
              <span>{"(1) ຖັງເກັບມ້ຽນເຂົ້າຮູບທາດຈວຍສີ່ແຈສະເໝີ ມີຂ້າງພື້ນ 3 m ແລະ ລວງສູງ 4 m. ບໍລິມາດຖັງເກັບມ້ຽນນີ້ແມ່ນຈັກ m³? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: V ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m³"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເຂົ້າ 1 m³ ມີນ້ຳໜັກປະມານ 800 kg, ຖັງເກັບນີ້ສາມາດເກັບຮັກສາເຂົ້າໄດ້ສູງສຸດຈັກກິໂລກຣາມ (kg)? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"kg"}</span>
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
          <span key="u39-ans-1-1">{"(1) 15 (ເພາະວ່າ V = 1/3 * π * 3² * 5 = 1/3 * 45π = 15π cm³)"}</span>,
          <span key="u39-ans-1-2">{"(2) 120 (ເພາະວ່າ V = 1/3 * π * 6² * 10 = 1/3 * 360π = 120π cm³)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u39-ans-2-1">{"(1) 32 (ເພາະວ່າ V = 1/3 * S_base * h = 1/3 * 16 * 6 = 32 cm³)"}</span>,
          <span key="u39-ans-2-2">{"(2) 100 (ເພາະວ່າ V = 1/3 * 25 * 12 = 100 cm³)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u39-ans-t1-1">{"(1) 8 (ຍ້ອນວ່າ h = √(L² - r²) = √(10² - 6²) = √64 = 8 cm)"}</span>,
          <span key="u39-ans-t1-2">{"(2) 96 (ຍ້ອນວ່າ V = 1/3 * π * 6² * 8 = 1/3 * 288π = 96π cm³)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u39-ans-t2-1">{"(1) 3 (ເພາະວ່າບໍລິມາດ V ພົວພັນກົງກັບ h ດັ່ງນັ້ນ V ຈະເພີ່ມຂຶ້ນ 3 ເທົ່າ)"}</span>,
          <span key="u39-ans-t2-2">{"(2) 4 (ເພາະວ່າ V ພົວພັນກັບ r² ດັ່ງນັ້ນ 2² = 4 ເທົ່າ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u39-ans-s1-1">{"(1) 4 (ເພາະວ່າ h = 3V / (πr²) = 36π / 9π = 4 cm)"}</span>,
          <span key="u39-ans-s1-2">{"(2) 25 (ເພາະວ່າ S_base = 3V / h = 150 / 6 = 25 cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u39-ans-s2-1">{"(1) 12 (ເພາະວ່າ V = 1/3 * 3² * 4 = 1/3 * 36 = 12 m³)"}</span>,
          <span key="u39-ans-s2-2">{"(2) 9600 (ເພາະວ່າ 12 * 800 = 9600 kg)"}</span>,
        ],
      },
    ],
    advice: "ບໍລິມາດຂອງຮູບທາດຈວຍ ແລະ ຮູບຈວຍ ແມ່ນ 1/3 ຂອງເນື້ອທີ່ພື້ນຄູນໃຫ້ລວງສູງສະເໝີ! ການນຳໃຊ້ປີຕາກໍຊອກຫາລວງສູງເປັນທັກສະທີ່ພົບເລື້ອຍຫຼາຍເດີ້!",
  },
};
