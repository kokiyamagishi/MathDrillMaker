import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພາກທີ II - ບົດທີ 21: ການພົວພັນລະຫວ່າງ ເສັ້ນຊື່ ແລະ ເສັ້ນສະແດງປາຣາໂບນ",
  unitGoal:
    "ຮຽນຮູ້ວິທີຊອກຫາຈຸດຕັດ ແລະ ພິຈາລະນາຕຳແໜ່ງພົວພັນລະຫວ່າງເສັ້ນຊື່ y = mx + n ແລະ ປາຣາໂບນ y = ax² + bx + c ໂດຍນຳໃຊ້ຄ່າຂອງແດນຕາ Δ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 21 ໜ້າ 121-126",
  subSections: [
    {
      title: "1. ຕຳແໜ່ງພົວພັນລະຫວ່າງເສັ້ນຊື່ ແລະ ປາຣາໂບນ (Line and Parabola Relationships)",
      keyPoint: {
      title: "1. ຕຳແໜ່ງພົວພັນລະຫວ່າງເສັ້ນຊື່ ແລະ ປາຣາໂບນ (Line and Parabola Relationships)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອຊອກຫາຕຳແໜ່ງພົວພັນ, ເຮົາຕ້ອງຕັ້ງສົມຜົນລວມຂອງພິກັດອັບຊິດ (Abscissa Equation):"}
            <br />
            <span style={{ fontWeight: "bold", color: "#D84315" }}>
              {"ax² + bx + c = mx + n  ⇒  ax² + (b - m)x + (c - n) = 0"}
            </span>
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
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ Δ > 0 (ຕັດກັນສອງຈຸດ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"ເສັ້ນຊື່ ແລະ ປາຣາໂບນ ມີ 2 ເມັດຕັດຮ່ວມກັນ."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ Δ = 0 (ເຕັງກັນ ຫຼື ເສັ້ນຊື່ຕິດປາຣາໂບນ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"ເສັ້ນຊື່ຕິດ (Tangent) ກັບປາຣາໂບນ ຢູ່ 1 ເມັດຮ່ວມກັນ."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ Δ < 0 (ບໍ່ມີເມັດຮ່ວມກັນ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"ເສັ້ນຊື່ ແລະ ປາຣາໂບນ ບໍ່ຕັດກັນ ແລະ ບໍ່ມີເມັດຮ່ວມກັນເລີຍ."}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຖ້າສົມຜົນລວມແມ່ນ x² - 2x + 1 = 0 (ມີ Δ = 0), ໝາຍຄວາມວ່າເສັ້ນຊື່ຕິດກັບປາຣາໂບນ ຢູ່ຈຸດ x = 1 ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕັ້ງສົມຜົນລວມ ແລະ ຊອກຫາພິກັດອັບຊິດ x ຂອງຈຸດຕັດ: "}{" "}
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
              <span>{"(1) ໃຫ້ປາຣາໂບນ y = x² ແລະ ເສັ້ນຊື່ y = 2x. ຈົ່ງຊອກຫາໃຈຜົນ x ທີ່ຕ່າງຈາກສູນ ຂອງຈຸດຕັດ (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ປາຣາໂບນ y = x² - 4x + 3 ແລະ ເსັ້ນຊື່ y = -x + 3. ຈົ່ງຊອກຫາໃຈຜົນ x ທີ່ຕ່າງຈາກສູນ ຂອງຈຸດຕັດ (ຕອບເປັນຕົວເລກ):"}</span>
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
            {"ຈົ່ງຊອກຫາຈຳນວນເມັດຕັດຮ່ວມ ໂດຍການນຳໃຊ້ຄ່າແດນຕາ Δ: "}{" "}
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
              <span>{"(1) ສົມຜົນລວມລະຫວ່າງປາຣາໂບນ ແລະ ເສັ້ນຊື່ແມ່ນ x² - 4x + 4 = 0. ເສັ້ນຊື່ ແລະ ປາຣາໂບນນີ້ ມີຈຳນວນເມັດຕັດຮ່ວມກັນຈັກເມັດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສົມຜົນລວມລະຫວ່າງປາຣາໂບນ ແລະ ເສັ້ນຊື່ແມ່ນ x² + x + 2 = 0 (ມີ Δ < 0). ເສັ້ນຊື່ ແລະ ປາຣາໂບນນີ້ ຕັດກັນຈັກຈຸດ? (ຕອບເປັນຕົວເລກ):"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ພະຍາຍາມແຍກຕົວປະກອບສົມຜົນລວມ ເພື່ອຊອກຫາຈຸດຕັດທັງໝົດ! ບົດທ້າທາຍ 2: ຕັ້ງສົມຜົນລະຫວ່າງສອງປາຣາໂບນ ax² + bx + c = a'x² + b'x + c' ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາພິກັດເຕັມ (x, y) ຂອງເມັດຕັດຮ່ວມກັນ: "}{" "}
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
                <span>{"(1) ໃຫ້ y = x² ແລະ y = x + 2. ຖ້າເມັດຕັດໜຶ່ງມີອັບຊິດແມ່ນ x = -1, ອີກເມັດຕັດໜຶ່ງຈະມີພິກັດ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (2, 4)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ y = -x² + 3x ແລະ y = 2. ຖ້າເມັດຕັດໜຶ່ງມີອັບຊິດແມ່ນ x = 1, ອີກເມັດຕັດໜຶ່ງຈະມີພິກັດ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
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
              {"ຈົ່ງຊອກຫາຈຸດຕັດລະຫວ່າງປາຣາໂບນສອງເສັ້ນ (Intersection of Two Parabolas): "}{" "}
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
                <span>{"(1) ໃຫ້ສອງປາຣາໂບນ y = x² - 2x + 1 ແລະ y = -x² + 2. ຈົ່ງຊອກຫາຄ່າ Δ ຂອງສົມຜົນລວມ 2x² - 2x - 1 = 0 (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: Δ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ເນື່ອງຈາກ Δ = 12 > 0, ໝາຍຄວາມວ່າປາຣາໂບນສອງເສັ້ນນີ້ຕັດກັນຈັກຈຸດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຈຸດ"}</span>
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
            {"ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ m ເພື່ອໃຫ້ເສັ້ນຊື່ຕິດກັບປາຣາໂບນ (Tangent Condition): "}{" "}
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
              <span>{"(1) ເສັ້ນຊື່ y = mx ຈະຕິດກັບປາຣາໂບນ y = x² + 4 (ມີເມັດຕັດຮ່ວມກັນ 1 ຈຸດ) ຖ້າ m ມີຄ່າບວກ. ຄ່າ m ຕ້ອງແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ຕັ້ງສົມຜົນ x² - mx + 4 = 0 ແລະ ໃຫ້ Δ = 0):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: m ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ເສັ້ນຊື່ y = 2x + n ຈະຕິດກັບປາຣາໂບນ y = x² ຖ້າ n ມີຄ່າເທົ່າໃດ? (ຄຳແນະນຳ: ໃຫ້ Δ ຂອງ x² - 2x - n = 0 ເທົ່າກັບສູນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: n ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຕິດຕັ້ງໄຟຟ້າແສງຕາເວັນ (Solar Panel shadow line): "}{" "}
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
              <span>{"(1) ເສັ້ນຂອບເງົາຂອງແຜ່ນໂຊລາເຊລມີຮູບຮ່າງເປັນປາຣາໂບນ y = -x² + 6x, ແລະ ແສງຕາເວັນທີ່ສ່ອງລົງມາເປັນເສັ້ນຊື່ y = 2x. ຈົ່ງຊອກຫາພິກັດອັບຊິດ x ຂອງຈຸດຕັດຮ່ວມກັນ ທີ່ຕ່າງຈາກຈຸດເລີ່ມຕົ້ນ (0, 0):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄວາມສູງ y ຂອງຈຸດຕັດດັ່ງກ່າວແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
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
          <span key="u21-ans-1-1">{"(1) 2 (ເພາະວ່າ x² = 2x ⇒ x(x - 2) = 0)"}</span>,
          <span key="u21-ans-1-2">{"(2) 3 (ເພາະວ່າ x² - 4x + 3 = -x + 3 ⇒ x² - 3x = 0 ⇒ x = 3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u21-ans-2-1">{"(1) 1 (ເພາະວ່າ Δ = (-4)² - 4*1*4 = 0, ສົມຜົນມີ 1 ໃຈຜົນ)"}</span>,
          <span key="u21-ans-2-2">{"(2) 0 (ເພາະວ່າ Δ = 1 - 8 = -7 < 0, ດັ່ງນັ້ນບໍ່ມີຈຸດຕັດກັນເລີຍ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u21-ans-t1-1">{"(1) (2, 4) (ເພາະວ່າສົມຜົນ x² - x - 2 = 0 ມີສອງຮາກແມ່ນ x = -1 ແລະ x = 2. ແທນ x = 2 ຈະໄດ້ y = 4)"}</span>,
          <span key="u21-ans-t1-2">{"(2) (2, 2) (ເພາະວ່າສົມຜົນ -x² + 3x - 2 = 0 มีຮາກແມ່ນ x = 1 ແລະ x = 2. ແທນ x = 2 ຈະໄດ້ y = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u21-ans-t2-1">{"(1) 12 (ເພາະສົມຜົນລວມແມ່ນ 2x² - 2x - 1 = 0, ມີ Δ = (-2)² - 4*2*(-1) = 4 + 8 = 12)"}</span>,
          <span key="u21-ans-t2-2">{"(2) 2 (ເພາະ Δ = 12 > 0, ດັ່ງນັ້ນຕັດກັນ 2 ຈຸດ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u21-ans-s1-1">{"(1) 4 (ເພາະວ່າ Δ = (-m)² - 16 = 0 ⇒ m² = 16. ເນື່ອງຈາກ m > 0 ດັ່ງນັ້ນ m = 4)"}</span>,
          <span key="u21-ans-s1-2">{"(2) -1 (ເພາະວ່າ Δ = 4 - 4*(1)*(-n) = 4 + 4n = 0 ⇒ 4n = -4 ⇒ n = -1)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u21-ans-s2-1">{"(1) 4 (ເພາະວ່າ -x² + 6x = 2x ⇒ x² - 4x = 0 ⇒ x = 4)"}</span>,
          <span key="u21-ans-s2-2">{"(2) 8 (ເພາະວ່າແທນ x = 4 ເຂົ້າໃນ y = 2x ຈະໄດ້ y = 8)"}</span>,
        ],
      },
    ],
    advice: "ການຊອກຫາເມັດຕັດລະຫວ່າງເສັ້ນສະແດງ ແມ່ນການແກ້ລະບົບສົມຜົນໃນຮູບແບບເລຂາຄະນິດ! ມັນຊ່ວຍໃຫ້ເຮົາເຫັນພາບຈຸດປະສານກັນຂອງສອງປະກົດການໄດ້ຢ່າງຊັດເຈນເດີ້!",
  },
};
