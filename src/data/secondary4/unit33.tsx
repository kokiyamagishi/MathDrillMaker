import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit33Data: UnitData = {
  unitNumber: 33,
  unitTitle: "ພາກທີ IV - ບົດທີ 33: ຕົວປະສານຂອງເວັກເຕີເທິງໜ້າພຽງ",
  unitGoal:
    "ຮຽນຮູ້ວິທີສະແດງເວັກເຕີດ້ວຍຕົວປະສານ (Components) ເທິງໜ້າພຽງພິກັດ Oxy, ຄິດໄລ່ຕົວປະສານຂອງ AB ຈາກສອງເມັດ ແລະ ການຄິດໄລ່ຂະໜາດ |u| = √(x² + y²)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 33 ໜ້າ 193-198",
  keyPoints: [
    {
      title: "1. ຕົວປະສານຂອງເວັກເຕີ ແລະ ການຄິດໄລ່ພື້ນຖານ (Vector Coordinates & Operations)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອເວັກເຕີ u ວາງເທິງໜ້າພຽງພິກັດ Oxy, ມັນສາມາດຂຽນໃນຮູບຮ່າງ u = (x, y) ໂດຍມີສູດຄິດໄລ່ດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ຕົວປະສານຂອງເວັກເຕີ AB ຈາກສອງເມັດ A(x₁, y₁) ແລະ B(x₂, y₂):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"AB = (x₂ - x₁,  y₂ - y₁)"}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"(⚠️ ຂໍ້ຄວນລະວັງ: ຕ້ອງເອົາພິກັດຂອງຈຸດປາຍ B ລົບໃຫ້ພິກັດຂອງຈຸດເລີ່ມຕົ້ນ A ເດີ້!)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ພຶດຊະຄະນິດຂອງເວັກເຕີໃນຮູບແບບຕົວປະສານ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"ຖ້າ u = (x₁, y₁) ແລະ v = (x₂, y₂):"}
                <br />
                {"- ຜົນບວກ: "}
                <strong style={{ color: "#2E7D32" }}>{"u + v = (x₁ + x₂,  y₁ + y₂)"}</strong>
                <br />
                {"- ຜົນຄູນກັບ k: "}
                <strong style={{ color: "#2E7D32" }}>{"k · u = (k · x₁,  k · y₁)"}</strong>
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຂະໜາດຂອງເວັກເຕີ u = (x, y):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"|u| = √(x² + y²)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຖ້າ A(1, 2) ແລະ B(4, 6) ⇒ AB = (4-1, 6-2) = (3, 4). ຂະໜາດ |AB| = √(3² + 4²) = √25 = 5 ເດີ້!",
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
            {"ຈົ່ງຊອກຫາຕົວປະສານຂອງເວັກເຕີ AB ຈາກສອງເມັດທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ໃຫ້ເມັດ A(2, 3) ແລະ B(5, 7). ຕົວປະສານຂອງເວັກເຕີ AB ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (3, 4)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ເມັດ A(-1, 4) และ B(2, 1). ຕົວປະສານຂອງເວັກເຕີ AB ແມ່ນເທົ່າໃດ? (⚠️ ສັງເກດເຄື່ອງໝາຍລົບໃຫ້ດີ):"}</span>
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
            {"ຈົ່ງຄິດໄລ່ຂະໜາດ (ລວງຍາວ) ຂອງເວັກເຕີ: "}{" "}
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
              <span>{"(1) ໃຫ້ເວັກເຕີ u = (6, 8). ຂະໜາດ |u| ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ເວັກເຕີ v = (-5, 12). ຂະໜາດ |v| ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ບວກລົບຕົວປະສານຕາມແກນ x ແລະ y ແຍກກັນໃຫ້ລະອຽດ! ບົດທ້າທາຍ 2: ເງື່ອນໄຂການຂະໜານກັນແມ່ນ x₁/x₂ = y₁/y₂ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຜົນບວກ ແລະ ຜົນຄູນຂອງເວັກເຕີໃນຮູບແບບຕົວປະສານ: "}{" "}
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
                <span>{"(1) ໃຫ້ u = (1, 3) ແລະ v = (2, -1). ຕົວປະສານຂອງເວັກເຕີ 2u + 3v ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (8, 3)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ u = (4, 2) ແລະ v = (-1, 5). ຕົວປະສານຂອງເວັກເຕີ 3u - v ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
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
              {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ ເພື່ອໃຫ້ເວັກເຕີຂະໜານກັນໃນແບບພິກັດ: "}{" "}
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
                <span>{"(1) ໃຫ້ສອງເວັກເຕີ u = (2, 3) ແລະ v = (6, m). ຖ້າ u || v, ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ສອງເວັກເຕີ u = (1, -2) ແລະ v = (m, 8). ຖ້າ u || v, ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນຕິດລົບ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
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
            {"ຈົ່ງຊອກຫາພິກັດຂອງຈຸດປາຍ ໂດຍໃຊ້ຕົວປະສານເວັກເຕີ: "}{" "}
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
              <span>{"(1) ໃຫ້ຈຸດເລີ່ມຕົ້ນ A(1, 2) ແລະ ເວັກເຕີ AB = (3, 5). ພິກັດຂອງຈຸດປາຍ B(x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (4, 7)):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ຈຸດປາຍ B(5, 1) ແລະ ເວັກເຕີ AB = (2, -3). ພິກັດຂອງຈຸດເລີ່ມຕົ້ນ A(x, y) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຕິດຕາມເຮືອໃບບິນ (GPS Tracking in Navigation): "}{" "}
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
              <span>{"(1) ເຮືອໃບລຳໜຶ່ງເດີນທາງຈາກຈຸດ A(10, 20) ໄປຫາຈຸດ B(40, 60) ເທິງແຜນທີ່ GPS (km). ຈົ່ງຊອກຫາຕົວປະສານຂອງເວັກເຕີການເດີນທາງ AB (km) (ຕອບແບບພິກັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: AB ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ໄລຍະຫ່າງທັງໝົດທີ່ເຮືອໃບເດີນທາງໄປໄດ້ແມ່ນຈັກກິໂລແມັດ (km)? (ຄຳແນະນຳ: ແມ່ນຂະໜາດ |AB| ຂອງເວັກເຕີ, ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <span key="u33-ans-1-1">{"(1) (3, 4) (ເພາະວ່າ AB = (5 - 2, 7 - 3) = (3, 4))"}</span>,
          <span key="u33-ans-1-2">{"(2) (3, -3) (⚠️ ເພາະວ່າ AB = (2 - (-1), 1 - 4) = (3, -3))"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u33-ans-2-1">{"(1) 10 (ເພາະວ່າ |u| = √(6² + 8²) = √100 = 10)"}</span>,
          <span key="u33-ans-2-2">{"(2) 13 (ເພາະວ່າ |v| = √((-5)² + 12²) = √(25 + 144) = √169 = 13)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u33-ans-t1-1">{"(1) (8, 3) (ຍ້ອນ 2u + 3v = (2*1 + 3*2, 2*3 + 3*(-1)) = (2 + 6, 6 - 3) = (8, 3))"}</span>,
          <span key="u33-ans-t1-2">{"(2) (13, 1) (ຍ້ອນ 3u - v = (3*4 - (-1), 3*2 - 5) = (12 + 1, 6 - 5) = (13, 1))"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u33-ans-t2-1">{"(1) 9 (ຍ້ອນວ່າ v/u = 6/2 = 3. ດັ່ງນັ້ນ m = 3 * 3 = 9)"}</span>,
          <span key="u33-ans-t2-2">{"(2) -4 (ຍ້ອນວ່າ v/u = 8/(-2) = -4. ດັ່ງນັ້ນ m = 1 * (-4) = -4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u33-ans-s1-1">{"(1) (4, 7) (ເພາະວ່າ B = A + AB = (1 + 3, 2 + 5) = (4, 7))"}</span>,
          <span key="u33-ans-s1-2">{"(2) (3, 4) (ເພາະວ່າ A = B - AB = (5 - 2, 1 - (-3)) = (3, 4))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u33-ans-s2-1">{"(1) (30, 40) (ເພາະວ່າ AB = (40 - 10, 60 - 20) = (30, 40) km)"}</span>,
          <span key="u33-ans-s2-2">{"(2) 50 (ເພາະວ່າ |AB| = √(30² + 40²) = √2500 = 50 km)"}</span>,
        ],
      },
    ],
    advice: "ຕົວປະສານຂອງເວັກເຕີ ເປັນວິທີທີ່ງ່າຍດາຍທີ່ສຸດໃນການຄິດໄລ່ ແລະ ປະຕິບັດການກັບເວັກເຕີ ໂດຍການຫັນປ່ຽນເລຂາຄະນິດໃຫ້ເປັນພຶດຊະຄະນິດທີ່ຊັດເຈນເດີ້!",
  },
};
