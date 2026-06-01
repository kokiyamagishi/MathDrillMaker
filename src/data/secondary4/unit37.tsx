import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit37Data: UnitData = {
  unitNumber: 37,
  unitTitle: "ພາກທີ V - ບົດທີ 37: ການໝູນປິ່ນຮູບເລຂາຄະນິດເທິງໜ້າພຽງ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກການໝູນປິ່ນ (Rotation) ຂອງຮູບເລຂາຄະນິດ ໂດຍເນັ້ນໃສ່ການໝູນປິ່ນອ້ອມເມັດເຄິ່ງກາງ O(0, 0) ດ້ວຍມຸມ 90°, 180° ແລະ 270°",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 37 ໜ້າ 217-222",
  keyPoints: [
    {
      title: "1. ສູດພິກັດຂອງການໝູນປິ່ນອ້ອມເມັດ O(0, 0) (Rotation Coordinate Rules)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອໝູນປິ່ນເມັດ P(x, y) ອ້ອມເມັດ O(0, 0) ໃນທິດທາງກົງກັນຂ້າມກັບເຂັມໂມງ (Positive direction):"}
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
              <strong style={{ color: "#E65100" }}>{"• ການໝູນປິ່ນ ມຸມ 90° (Counter-clockwise):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"P'(-y,  x)  (ປ່ຽນບ່ອນກັນ ແລະ ປ່ຽນເຄື່ອງໝາຍ y ໃໝ່)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ການໝູນປິ່ນ ມຸມ 180°:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"P'(-x,  -y)  (ຄືກັນກັບການເຄິ່ງຄືທຽບເມັດ O)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ການໝູນປິ່ນ ມຸມ 270° (ຫຼື 90° ຕາມເຂັມໂມງ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                {"P'(y,  -x)  (ປ່ຽນບ່ອນກັນ ແລະ ປ່ຽນເຄື່ອງໝາຍ x ໃໝ່)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ໄວ້ວ່າ ຖ້າໝູນປິ່ນ 90° ຕາມເຂັມໂມງ ມັນຈະເທົ່າກັບການໝູນປິ່ນ 270° ກົງກັນຂ້າມເຂັມໂມງ ເຊິ່ງຈະໄດ້ພິກັດ (y, -x) ເດີ້!",
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
            {"ຈົ່ງຊອກຫາພິກັດໃໝ່ P' ຫຼັງຈາກການໝູນປິ່ນ ມຸມ 90°: "}{" "}
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
              <span>{"(1) ໝູນປິ່ນເມັດ P(3, 4) ມຸມ 90° ກົງກັນຂ້າມເຂັມໂມງ. ພິກັດໃໝ່ P'(x', y') ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (-4, 3)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໝູນປິ່ນເມັດ P(-2, 5) ມຸມ 90° ກົງກັນຂ້າມເຂັມໂມງ. ພິກັດໃໝ່ P'(x', y') ແມ່ນເທົ່າໃດ? (⚠️ ລະວັງເຄື່ອງໝາຍລົບ):"}</span>
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
            {"ຈົ່ງຊອກຫາພິກັດໃໝ່ P' ຫຼັງຈາກການໝູນປິ່ນ ມຸມ 180° ແລະ 270°: "}{" "}
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
              <span>{"(1) ໝູນປິ່ນເມັດ P(2, -5) ມຸມ 180° ອ້ອມ O(0, 0). ພິກັດໃໝ່ P'(x', y') ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໝູນປິ່ນເມັດ P(1, 3) ມຸມ 270° ກົງກັນຂ້າມເຂັມໂມງ. ພິກັດໃໝ່ P'(x', y') ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໝູນປິ່ນແຕ່ລະເມັດຈອມແຍກກັນ ແລ້ວຊອກຫາພິກັດໃໝ່! ບົດທ້າທາຍ 2: ຍ້າຍປາຣາໂບນຫຼັງການໝູນປິ່ນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາພິກັດຂອງຮູບສາມແຈໃໝ່ ຫຼັງຈາກການໝູນປິ່ນ 90°: "}{" "}
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
                <span>{"(1) ຮູບສາມແຈ ABC ມີຈອມ A(0, 0), B(3, 1), C(4, 3) ໝູນປິ່ນ 90° ກົງກັນຂ້າມເຂັມໂມງ. ພິກັດຈອມໃໝ່ B' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: B' ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ພິກັດຈອມໃໝ່ C' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
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
              {"ຈົ່ງຊອກຫາສົມຜົນຂອງເສັ້ນຊື່ໃໝ່ ຫຼັງຈາກການໝູນປິ່ນ: "}{" "}
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
                <span>{"(1) ເສັ້ນຊື່ y = 2x ຜ່ານເມັດ A(1, 2) ຫຼັງຈາກໝູນປິ່ນ 90° ກົງກັນຂ້າມເຂັມໂມງ ຈະໄດ້ເສັ້ນຊື່ໃໝ່ຜ່ານເມັດ A' ທີ່ມີພິກັດແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A' ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຄວາມຊັນ (Slope) ຂອງເສັ້ນຊື່ໃໝ່ ທີ່ຕັ້ງສາກກັບເສັ້ນຊື່ເກົ່າ ຈະມີຄ່າແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນຕິດລົບ, ຕົວຢ່າງ: -1/2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m' ="}</span>
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
            {"ຈົ່ງຄົ້ນຫາຄວາມສຳພັນລະຫວ່າງມຸມໝູນປິ່ນ ແລະ ພິກັດ: "}{" "}
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
              <span>{"(1) ໃຫ້ເມັດ P(5, 2) ຖືກໝູນປິ່ນໄປຫາ P'(-2, 5). ມຸມໝູນປິ່ນກົງກັນຂ້າມເຂັມໂມງນີ້ແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກຖ້ວນ, ຕົວຢ່າງ: 90):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ອົງສາ (°)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ເມັດ P(3, 4) ຖືກໝູນປິ່ນ 90° ຕາມເຂັມໂມງ (Clockwise). ພິກັດເມັດໃໝ່ P' ຈະແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ມັນຄືການໝູນ 270° ກົງກັນຂ້າມເຂັມໂມງ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: P' ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການໝູນປິ່ນຂອງຫຸ່ນຍົນອຸດສາຫະກຳ (Robotic Arm Rotation on xy-plane): "}{" "}
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
              <span>{"(1) ແຂນຫຸ່ນຍົນຈັບວັດຖຸຢູ່ຕຳແໜ່ງ A(6, 2). ມັນຖືກໝູນປິ່ນອ້ອມຈຸດໝູນ O(0, 0) ໄປເປັນມຸມ 90° ກົງກັນຂ້າມເຂັມໂມງ. ຕຳແໜ່ງໃໝ່ B ຂອງວັດຖຸແມ່ນພິກັດໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຕຳແໜ່ງ B ນັ້ນ, ຖ້າຫຸ່ນຍົນໝູນປິ່ນຕໍ່ໄປອີກ ມຸມ 180°, ຕຳແໜ່ງສຸດທ້າຍ C ຈະແມ່ນພິກັດໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: C ="}</span>
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
          <span key="u37-ans-1-1">{"(1) (-4, 3) (ເພາະວ່າ x' = -y = -4, y' = x = 3)"}</span>,
          <span key="u37-ans-1-2">{"(2) (-5, -2) (⚠️ ເພາະວ່າ x' = -y = -5, y' = x = -2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u37-ans-2-1">{"(1) (-2, 5) (ເພາະວ່າ x' = -x = -2, y' = -y = 5 ຍ້ອນ y=-5)"}</span>,
          <span key="u37-ans-2-2">{"(2) (3, -1) (ເພາະວ່າ x' = y = 3, y' = -x = -1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u37-ans-t1-1">{"(1) (-1, 3) (ຍ້ອນວ່າ B' = (-y, x) = (-1, 3))"}</span>,
          <span key="u37-ans-t1-2">{"(2) (-3, 4) (ຍ້ອນວ່າ C' = (-y, x) = (-3, 4))"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u37-ans-t2-1">{"(1) (-2, 1) (ຍ້ອນວ່າ A' = (-y, x) = (-2, 1))"}</span>,
          <span key="u37-ans-t2-2">{"(2) -1/2 (ເພາະວ່າຄວາມຊັນຂອງເສັ້ນຊື່ຕັ້ງສາກ m' = -1/m = -1/2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u37-ans-s1-1">{"(1) 90 (ເພາະວ່າ (5, 2) ໝູນ 90° ຈະໄດ້ (-2, 5))"}</span>,
          <span key="u37-ans-s1-2">{"(2) (4, -3) (ເພາະວ່າໝູນ 90° ຕາມເຂັມໂມງ ພິກັດຈະແມ່ນ (y, -x) = (4, -3))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u37-ans-s2-1">{"(1) (-2, 6) (ເພາະວ່າ B = (-y, x) = (-2, 6))"}</span>,
          <span key="u37-ans-s2-2">{"(2) (2, -6) (ເພາະວ່າໝູນ 180° ຈາກ B(-2, 6) ຈະໄດ້ C(2, -6))"}</span>,
        ],
      },
    ],
    advice: "ການໝູນປິ່ນຮູບເລຂາຄະນິດ ເປັນການຫັນປ່ຽນທາງຄະນິດສາດທີ່ໜ້າສົນໃຈຫຼາຍ! ມັນຖືກນຳໃຊ້ຢ່າງກວ້າງຂວາງໃນການອອກແບບເກມ ແລະ ການຄວບຄຸມຫຸ່ນຍົນເດີ້!",
  },
};
