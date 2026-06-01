import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit35Data: UnitData = {
  unitNumber: 35,
  unitTitle: "ພາກທີ V - ບົດທີ 35: ການຍ້າຍຂະໜານຮູບເລຂາຄະນິດເທິງໜ້າພຽງ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຫຼັກການຍ້າຍຂະໜານ (Translation) ຂອງຮູບເລຂາຄະນິດເທິງໜ້າພຽງພິກັດ Oxy ແລະ ສູດຄິດໄລ່ພິກັດໃໝ່ x' = x + a, y' = y + b",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 35 ໜ້າ 205-210",
  keyPoints: [
    {
      title: "1. ນິຍາມ ແລະ ສູດພິກັດຂອງການຍ້າຍຂະໜານ (Translation Coordinate Formula)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຍ້າຍຂະໜານ ຕາມເວັກເຕີ v = (a, b) ແມ່ນການຍ້າຍທຸກໆເມັດ P(x, y) ໄປຫາເມັດໃໝ່ P'(x', y') ໂດຍມີສູດພົວພັນດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດພະຍາກອນພິກັດໃໝ່ (Image Coordinates):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"x' = x + a"}
                <br />
                {"y' = y + b"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຕົວຢ່າງການເຄື່ອນຍ້າຍຕົວຈິງ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"- ຍ້າຍເມັດ P(3, 4) ຕາມເວັກເຕີ v = (2, -1):"}
                <br />
                <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                  {"x' = 3 + 2 = 5,  y' = 4 + (-1) = 3  ⇒  P'(5, 3)."}
                </span>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ໄວ້ວ່າ ພຽງແຕ່ເອົາພິກັດ x ບວກໃຫ້ a ແລະ ພິກັດ y ບວກໃຫ້ b ເຮົາກໍຈະໄດ້ພິກັດໃໝ່ຢ່າງງ່າຍດາຍເດີ້!",
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
            {"ຈົ່ງຊອກຫາພິກັດໃໝ່ P' ຂອງເມັດ P ຫຼັງຈາກການຍ້າຍຂະໜານ: "}{" "}
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
              <span>{"(1) ຍ້າຍເມັດ P(1, 2) ຕາມເວັກເຕີ v = (3, 4). ພິກັດໃໝ່ P'(x', y') ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (4, 6)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຍ້າຍເມັດ P(-2, 5) ຕາມເວັກເຕີ v = (4, -3). ພິກັດໃໝ່ P'(x', y') ແມ່ນເທົ່າໃດ? (⚠️ ສັງເກດເຄື່ອງໝາຍລົບ):"}</span>
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
            {"ຈົ່ງຊອກຫາເວັກເຕີຍ້າຍຂະໜານ v = (a, b) ຈາກພິກັດເກົ່າ ແລະ ໃໝ່: "}{" "}
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
              <span>{"(1) ຍ້າຍເມັດ A(1, 1) ໄປຫາ A'(4, 5). ເວັກເຕີຍ້າຍຂະໜານ v = (a, b) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (3, 4)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຍ້າຍເມັດ B(3, -2) ໄປຫາ B'(1, 2). ເວັກເຕີຍ້າຍຂະໜານ v = (a, b) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຍ້າຍແຕ່ລະເມັດຈອມ A, B, C ຂອງຮູບສາມແຈແຍກກັນ ແລ້ວຊອກຫາພິກັດໃໝ່! ບົດທ້າທາຍ 2: ຍ້າຍຈຸດຈອມຂອງປາຣາໂບນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາພິກັດໃໝ່ຂອງຮູບສາມແຈ ABC ຫຼັງຈາກການຍ້າຍຂະໜານ: "}{" "}
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
                <span>{"(1) ຮູບສາມແຈ ABC ມີຈອມ A(0, 0), B(2, 4), C(5, 1) ຍ້າຍຕາມເວັກເຕີ v = (1, 2). ພິກັດຈອມໃໝ່ A' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A' ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ພິກັດຈອມໃໝ່ B' ຈະແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: B' ="}</span>
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
              {"ຈົ່ງຊອກຫາສົມຜົນປາຣາໂບນໃໝ່ ຫຼັງຈາກການຍ້າຍຂະໜານ: "}{" "}
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
                <span>{"(1) ຍ້າຍເສັ້ນສະແດງ y = x² ຕາມເວັກເຕີ v = (3, 0) (ຍ້າຍຂວາ 3). ສູດຕຳລາໃໝ່ຈະແມ່ນຫຍັງ? (ຕອບແບບ (x-p)^2, ຕົວຢ່າງ: (x-3)^2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຍ້າຍເສັ້ນສະແດງ y = x² ຕາມເວັກເຕີ v = (0, -4) (ຍ້າຍລົງ 4). ສູດຕຳລາໃໝ່ຈະແມ່ນຫຍັງ? (ຕອບແບບ x^2-q, ຕົວຢ່າງ: x^2-4):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຊອກຫາພິກັດຕົ້ນກຳເນີດ P ກ່ອນການຍ້າຍຂະໜານ: "}{" "}
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
              <span>{"(1) ຫຼັງຈາກຍ້າຍຂະໜານຕາມ v = (2, 3), ເຮົາໄດ້ເມັດໃໝ່ P'(5, 7). ພິກັດເກົ່າ P(x, y) ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: x = x' - a, y = y' - b):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: P ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຫຼັງຈາກຍ້າຍຂະໜານຕາມ v = (-4, 1), ເຮົາໄດ້ເມັດໃໝ່ Q'(2, 2). ພິກັດເກົ່າ Q(x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: Q ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງก່ຽວກັບການເຄື່ອນຍ້າຍຕົວໝາກໝາກເສິກ (Chess Piece Movement on coordinates): "}{" "}
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
              <span>{"(1) ໝາກມ້າຢູ່ຕຳແໜ່ງ A(2, 1) ເທິງກະດານໝາກເສິກ. ມັນຖືກຍ້າຍຕາມເວັກເຕີ v = (1, 2). ຕຳແໜ່ງໃໝ່ B ຂອງໝາກມ້າຈະແມ່ນພິກັດໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຕຳແໜ່ງ B ໃໝ່ນັ້ນ, ຖ້າຍ້າຍຕໍ່ຕາມເວັກເຕີ w = (-2, 3), ຕຳແໜ່ງສຸດທ້າຍ C ຈະແມ່ນພິກັດໃດ? (ຕອບແບບພິກັດ):"}</span>
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
          <span key="u35-ans-1-1">{"(1) (4, 6) (ເພາະວ່າ x' = 1 + 3 = 4, y' = 2 + 4 = 6)"}</span>,
          <span key="u35-ans-1-2">{"(2) (2, 2) (⚠️ ເພາະວ່າ x' = -2 + 4 = 2, y' = 5 + (-3) = 2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u35-ans-2-1">{"(1) (3, 4) (ເພາະວ່າ a = 4 - 1 = 3, b = 5 - 1 = 4)"}</span>,
          <span key="u35-ans-2-2">{"(2) (-2, 4) (ເພາະວ່າ a = 1 - 3 = -2, b = 2 - (-2) = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u35-ans-t1-1">{"(1) (1, 2) (ຍ້ອນວ່າ A' = (0+1, 0+2) = (1, 2))"}</span>,
          <span key="u35-ans-t1-2">{"(2) (3, 6) (ຍ້ອນວ່າ B' = (2+1, 4+2) = (3, 6))"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u35-ans-t2-1">{"(1) (x-3)^2 (ເພາະຍ້າຍຂວາ 3 ຫົວໜ່ວຍ ຈະໄດ້ y = (x - 3)²)"}</span>,
          <span key="u35-ans-t2-2">{"(2) x^2-4 (ເພາະຍ້າຍລົງລຸ່ມ 4 ຫົວໜ່ວຍ ຈະໄດ້ y = x² - 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u35-ans-s1-1">{"(1) (3, 4) (ເພາະວ່າ x = 5 - 2 = 3, y = 7 - 3 = 4)"}</span>,
          <span key="u35-ans-s1-2">{"(2) (6, 1) (ເພາະວ່າ x = 2 - (-4) = 6, y = 2 - 1 = 1)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u35-ans-s2-1">{"(1) (3, 3) (ເພາະວ່າ B = (2 + 1, 1 + 2) = (3, 3))"}</span>,
          <span key="u35-ans-s2-2">{"(2) (1, 6) (ເພາະວ່າ C = (3 - 2, 3 + 3) = (1, 6))"}</span>,
        ],
      },
    ],
    advice: "ການຍ້າຍຂະໜານເປັນການປ່ຽນແປງທາງເລຂາຄະນິດທີ່ຮັກສາຂະໜາດ ແລະ ຮູບຮ່າງຂອງ图形ໄວ້ຄືເກົ່າ! ມັນເປັນພື້ນຖານທີ່ດີໃນການເຂົ້າໃຈລະບົບພິກັດ Oxy ເດີ້!",
  },
};
