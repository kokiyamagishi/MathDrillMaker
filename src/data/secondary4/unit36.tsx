import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit36Data: UnitData = {
  unitNumber: 36,
  unitTitle: "ພາກທີ V - ບົດທີ 36: ການເຄິ່ງຄືຮູບເລຂາຄະນິດເທິງໜ້າພຽງ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກການເຄິ່ງຄື (Reflection/Symmetry) ຂອງຮູບເລຂາຄະນິດທຽບໃສ່ແກນ x, ແກນ y ແລະ ທຽບໃສ່ເມັດເຄິ່ງກາງ O(0, 0)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 36 ໜ້າ 211-216",
  keyPoints: [
    {
      title: "1. ສູດພິກັດຂອງການເຄິ່ງຄື (Symmetry Coordinate Rules)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອມີເມັດ P(x, y), ພິກັດຂອງເມັດເຄິ່ງຄື P' ພາຍໃຕ້ເງື່ອນໄຂຕ່າງໆກຳນົດດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ການເຄິ່ງຄືທຽບໃສ່ແກນ x (Reflection across x-axis):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"P'(x,  -y)  (ພິກັດ x ຄືເກົ່າ, ພິກັດ y ປ່ຽນເຄື່ອງໝາຍ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ການເຄິ່ງຄືທຽບໃສ່ແກນ y (Reflection across y-axis):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"P'(-x,  y)  (ພິກັດ y ຄືເກົ່າ, ພິກັດ x ປ່ຽນເຄື່ອງໝາຍ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• การເຄິ່ງຄືທຽບໃສ່ເມັດເຄິ່ງກາງ O(0, 0) (Reflection through Origin):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                {"P'(-x,  -y)  (ປ່ຽນເຄື່ອງໝາຍທັງສອງພິກັດ)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ໃຫ້ P(3, 2). ທຽບແກນ x ຈະໄດ້ (3, -2). ທຽບແກນ y ຈະໄດ້ (-3, 2). ທຽບເມັດ O ຈະໄດ້ (-3, -2) ເດີ້!",
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
            {"ຈົ່ງຊອກຫາພິກັດຂອງເມັດເຄິ່ງຄື ພາຍໃຕ້ແກນທີ່ກຳນົດ: "}{" "}
            <span className="point-label">{"(ຂໍ้ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ໃຫ້ເມັດ P(4, 5). ພິກັດເມັດເຄິ່ງຄື P' ທຽບໃສ່ແກນ x ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (4, -5)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ເມັດ P(-2, 7). ພິກັດເມັດເຄິ່ງຄື P' ທຽບໃສ່ແກນ y ແມ່ນເທົ່າໃດ? (⚠️ ສັງເກດເຄື່ອງໝາຍໃຫ້ດີ):"}</span>
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
            {"ຈົ່ງຊອກຫາພິກັດຂອງເມັດເຄິ່ງຄື ທຽບໃສ່ເມັດເຄິ່ງກາງ O(0, 0): "}{" "}
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
              <span>{"(1) ໃຫ້ເມັດ P(3, -6). ພິກັດເມັດເຄິ່ງຄື P' ທຽບໃສ່ເມັດ O(0, 0) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ເມັດ P(-5, -2). ພິກັດເມັດເຄິ່ງຄື P' ທຽບໃສ່ເມັດ O(0, 0) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ເຄິ່ງຄືແຕ່ລະຈຸດຈອມແຍກກັນ ແລ້ວຊອກຫາພິກັດໃໝ່! ບົດທ້າທາຍ 2: ຍ້າຍປາຣາໂບນທຽບແກນ x ຈະປ່ຽນ y ເປັນ -y ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາພິກັດຂອງຮູບສາມແຈໃໝ່ ຫຼັງຈາກການເຄິ່ງຄື: "}{" "}
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
                <span>{"(1) ຮູບສາມແຈ ABC ມີຈອມ A(1, 2), B(3, 5), C(4, 0). ຫຼັງຈາກການເຄິ່ງຄືທຽບໃສ່ແກນ x, ພິກັດຈອມໃໝ່ B' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: B' ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເຄິ່ງຄືທຽບໃສ່ແກນ y ພົບວ່າຈອມ C' ຈະມີພິກັດແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: C' ="}</span>
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
              {"ຈົ່ງຊອກຫາສົມຜົນປາຣາໂບນໃໝ່ ຫຼັງຈາກການເຄິ່ງຄື: "}{" "}
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
                <span>{"(1) ເສັ້ນສະແດງ y = (x - 2)² + 3 ເຄິ່ງຄືທຽບໃສ່ແກນ x ຈະມີສົມຜົນແມ່ນ -y = (x - 2)² + 3 ⇒ y = -(x - 2)² - 3. ພິກັດຈຸດຈອມໃໝ່ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (2, -3)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ເສັ້ນສະແດງ y = (x - 2)² + 3 ເຄິ່ງຄືທຽບໃສ່ແກນ y ຈະມີພິກັດຈຸດຈອມໃໝ່ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ປ່ຽນ x ເປັນ -x):"}</span>
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
            {"ຈົ່ງຊອກຫາພິກັດຂອງເມັດເຄິ່ງຄື ທຽບໃສ່ເສັ້ນຊື່ພິເສດ (Symmetry across x = a or y = b): "}{" "}
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
              <span>{"(1) ໃຫ້ເມັດ P(1, 4). ພິກັດເມັດເຄິ່ງຄື P' ທຽບໃສ່ເສັ້ນຊື່ແນວຕັ້ງ x = 3 ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ໄລຍະທາງແນວນອນຈາກ x=1 ຫາ x=3 ແມ່ນ 2 ຫົວໜ່ວຍ, ດັ່ງນັ້ນ x' = 3 + 2 = 5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: P' ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ເມັດ Q(3, 2). ພິກັດເມັດເຄິ່ງຄື Q' ທຽບໃສ່ເສັ້ນຊື່ແນວນອນ y = 4 ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: Q' ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການອອກແບບລວດລາຍຜ້າໄໝລາວ (Silk Pattern Reflection Design): "}{" "}
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
              <span>{"(1) ໃນການແຕ້ມລວດລາຍ, ຊ່າງແຕ້ມເມັດ A(5, 3) ໃສ່ເຄິ່ງເບື້ອງຂວາ. ລາວຕ້ອງການເຄິ່ງຄືເມັດນີ້ທຽບໃສ່ແກນ y ເພື່ອສ້າງລາຍເຄິ່ງຊ້າຍທີ່ຄືກັນ. ພິກັດເມັດໃໝ່ A' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A' ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າລາວຕ້ອງການເຄິ່ງຄືເມັດ A(5, 3) ນັ້ນລົງລຸ່ມທຽບໃສ່ແກນ x, ພິກັດເມັດໃໝ່ A'' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A'' ="}</span>
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
          <span key="u36-ans-1-1">{"(1) (4, -5) (ເພາະວ່າການເຄິ່ງຄືທຽບແກນ x ຈະປ່ຽນເຄື່ອງໝາຍ y ເປັນຄ່າກົງກັນຂ້າມ)"}</span>,
          <span key="u36-ans-1-2">{"(2) (2, 7) (⚠️ ເພາະວ່າການເຄິ່ງຄືທຽບແກນ y ຈະປ່ຽນເຄື່ອງໝາຍ x ເປັນຄ່າກົງກັນຂ້າມ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u36-ans-2-1">{"(1) (-3, 6) (ເພາະວ່າປ່ຽນເຄື່ອງໝາຍທັງສອງພິກັດ)"}</span>,
          <span key="u36-ans-2-2">{"(2) (5, 2) (ເພາະວ່າປ່ຽນເຄື່ອງໝາຍທັງສອງພິກັດ ຈາກລົບເປັນບວກ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u36-ans-t1-1">{"(1) (3, -5) (ຍ້ອນວ່າທຽບແກນ x ຈະປ່ຽນພິກັດ y ຂອງ B(3, 5) ເປັນ -5)"}</span>,
          <span key="u36-ans-t1-2">{"(2) (-4, 0) (ຍ້ອນວ່າທຽບແກນ y ຈະປ່ຽນພິກັດ x ຂອງ C(4, 0) ເປັນ -4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u36-ans-t2-1">{"(1) (2, -3) (ເພາະວ່າຈຸດຈອມເກົ່າແມ່ນ (2, 3) ດັ່ງນັ້ນທຽບແກນ x ພິກັດຈຸດຈອມໃໝ່ແມ່ນ (2, -3))"}</span>,
          <span key="u36-ans-t2-2">{"(2) (-2, 3) (ເພາະວ່າຈຸດຈອມເກົ່າແມ່ນ (2, 3) ດັ່ງນັ້ນທຽບແກນ y ພິກັດຈຸດຈອມໃໝ່ແມ່ນ (-2, 3))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u36-ans-s1-1">{"(1) (5, 4) (ເພາະວ່າ x' = 2*3 - 1 = 5, y' = 4)"}</span>,
          <span key="u36-ans-s1-2">{"(2) (3, 6) (ເພາະວ່າ x' = 3, y' = 2*4 - 2 = 6)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u36-ans-s2-1">{"(1) (-5, 3) (ເພາະວ່າທຽບແກນ y ຈະໄດ້ A'(-5, 3))"}</span>,
          <span key="u36-ans-s2-2">{"(2) (5, -3) (ເພາະວ່າທຽບແກນ x ຈະໄດ້ A''(5, -3))"}</span>,
        ],
      },
    ],
    advice: "ການເຄິ່ງຄືຮູບເລຂາຄະນິດ ຊ່ວຍສ້າງຄວາມສົມດຸນທາງສິລະປະ ແລະ ການອອກແບບສະຖາປັດຕະຍະກຳ! ຈື່ຫຼັກການເຄື່ອງໝາຍແກນ x, y ໃຫ້ດີເດີ້!",
  },
};
