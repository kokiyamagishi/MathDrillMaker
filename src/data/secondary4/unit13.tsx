import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ພາກທີ II - ບົດທີ 13: ຕຳລາຂັ້ນສອງໃນຮູບຮ່າງ y = x²",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບນິຍາມຂອງຕຳລາຂັ້ນສອງ (Quadratic Functions) ແລະ ລັກສະນະພື້ນຖານຂອງເສັ້ນສະແດງປາຣາໂບນໃນຮູບຮ່າງ y = x²",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 13 ໜ້າ 73-78",
  keyPoints: [
    {
      title: "1. ນິຍາມຂອງຕຳລາຂັ້ນສອງ (Definition of Quadratic Functions)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕຳລາຂັ້ນສອງ ແມ່ນຕຳລາທີ່ຢູ່ໃນຮູບຮ່າງ y = ax² + bx + c (ເຊິ່ງ a, b, c ແມ່ນຕົວຄົງທີ່ ແລະ a ≠ 0)."}
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
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ຮູບຮ່າງພື້ນຖານທີ່ສຸດ: "}</strong>
              <span>{"y = x²  (a = 1, b = 0, c = 0)"}</span>
              <br />
              <strong style={{ color: "#E65100" }}>{"• ຄຸນລັກສະນະຂອງ y = x²: "}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ເສັ້ນສະແດງເປັນເສັ້ນໂຄ້ງປາຣາໂບນ (Parabola) ທີ່ປິ່ນຂຶ້ນດ້ານເທິງ (U-shape)."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ມີ ຈຸດຈອມ (Vertex) ຢູ່ເມັດເຄົ້າ O(0, 0) ເຊິ່ງເປັນຈຸດຕ່ຳສຸດ."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ມີ ແກນເຄິ່ງຄື (Axis of Symmetry) ແມ່ນແກນ y (ເສັ້ນຊື່ x = 0)."}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ແນະນຳ: ຍ້ອນວ່າກຳລັງສອງຂອງທຸກໆຈຳນວນຈິງຈະໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ 0 ສະເໝີ, ຄ່າ y ຂອງ y = x² ຈຶ່ງບໍ່ມີທາງເປັນຄ່າລົບເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ແຜນວາດເສັ້ນສະແດງ y = x² (Graph of y = x²)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕາຕະລາງຄ່າຂອງ y = x² ຕາມ x ຕ່າງໆ:"}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"x = -2 ⇒ y = 4 | x = -1 ⇒ y = 1 | x = 0 ⇒ y = 0 | x = 1 ⇒ y = 1 | x = 2 ⇒ y = 4"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "200px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Grid */}
              <line x1="100" y1="10" x2="100" y2="110" stroke="#eee" strokeWidth="1" />
              <line x1="20" y1="90" x2="180" y2="90" stroke="#eee" strokeWidth="1" />

              {/* Axes */}
              <line x1="100" y1="10" x2="100" y2="110" stroke="#666" strokeWidth="1.2" />
              <line x1="20" y1="90" x2="180" y2="90" stroke="#666" strokeWidth="1.2" />

              {/* Parabola y = 0.08 * (x-100)^2 + 90 scaled */}
              <path d="M 50,26 Q 100,90 150,26" fill="none" stroke="#2196F3" strokeWidth="2.5" />

              {/* Origin O */}
              <circle cx="100" cy="90" r="3" fill="#E91E63" />
              <text x="94" y="102" fill="#333" fontSize="8">{"O(0,0)"}</text>
              <text x="180" y="85" fill="#333" fontSize="8">{"x"}</text>
              <text x="106" y="15" fill="#333" fontSize="8">{"y"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ສັງເກດວ່າເສັ້ນສະແດງມີຄວາມເຄິ່ງຄືກັນ (Symmetrical) ລະຫວ່າງເບື້ອງຊ້າຍ ແລະ ເບື້ອງຂວາຂອງແກນ y ເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ y ຂອງຕຳລາ y = x² ຕາມຄ່າ x ທີ່ກຳນົດ: "}{" "}
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
              <span>{"(1) ຖ້າ x = 3, ຄ່າຂອງ y = x² ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າ x = -5, ຄ່າຂອງ y = x² ແມ່ນເທົ່າໃດ? (⚠️ ຢ່າລືມເຄື່ອງໝາຍລົບຄູນລົບເປັນບວກ):"}</span>
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
            {"ຈົ່ງກຳນົດພິກັດຈຸດຈອມ ແລະ ແກນເຄິ່ງຄືຂອງຕຳລາ y = x²: "}{" "}
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
              <span>{"(1) ຈຸດຈອມຂອງເສັ້ນສະແດງ y = x² ມີພິກັດ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບໃນຮູບແບບ (a, b), ຕົວຢ່າງ: (0, 0)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກນເຄິ່ງຄືຂອງເສັ້ນສະແດງ y = x² ແມ່ນເສັ້ນຊື່ x ເທົ່າກັບເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ແທນຄ່າ x ເຂົ້າໃນຕຳລາເພື່ອທຽບຫາຄ່າ y. ບົດທ້າທາຍ 2: ຖ້າ x ເປັນເລກສ່ວນ (ເຊັ່ນ x = 1/2), ໃຫ້ຄິດໄລ່ກຳລັງສອງທັງຈຳນວນພູດ ແລະ ພູດ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ x ເມື່ອກຳນົດຄ່າ y: "}{" "}
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
                <span>{"(1) ຖ້າ y = 16 ຢູ່ເທິງຕຳລາ y = x² ແລະ x > 0 (ຄ່າບວກ), ຄ່າ x ຈະແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າ y = 9 ຢູ່ເທິງຕຳລາ y = x² ແລະ x < 0 (ຄ່າລົບ), ຄ່າ x ຈະແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
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
              {"ຈົ່ງຄິດໄລ່ຄ່າ y ຂອງຕຳລາ y = x² ທີ່ມີພື້ນເປັນເລກສ່ວນ: "}{" "}
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
                <span>{"(1) ຖ້າ x = "}<Fraction num="1" den="2" />{" , ຄ່າ y = x² ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າ x = - "}<Fraction num="2" den="3" />{" , ຄ່າ y = x² ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ):"}</span>
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
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງກວດກາວ່າເມັດພິກັດຕໍ່ໄປນີ້ຢູ່ເທິງເສັ້ນສະແດງ y = x² ຫຼື ບໍ່? (ຕອບ ຢູ່ ຫຼື ບໍ່ຢູ່): "}{" "}
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
              <span>{"(1) ເມັດ A(4, 16) ຢູ່ເທິງເສັ້ນສະແດງ y = x² ຫຼື ບໍ່? (ຕອບ ຢູ່ ຫຼື ບໍ່ຢູ່):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ເມັດ B(-3, -9) ຢູ່ເທິງເສັ້ນສະແດງ y = x² ຫຼື ບໍ່? (⚠️ ຢ່າລືມກວດເຄື່ອງໝາຍ y):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບເນື້ອທີ່ຂອງຮູບສີ່ແຈມົນທົນ (Area of a Square): "}{" "}
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
              <span>{"(1) ຮູບສີ່ແຈມົນທົນໜຶ່ງມີຄວາມຍາວຂ້າງແມ່ນ x (cm). ຕຳລາສະແດງເນື້ອທີ່ S (cm²) ຕາມຄວາມຍາວຂ้าง x ແມ່ນ S = x². ຖ້າຄວາມຍາວຂ້າງ x = 8 cm, ເນື້ອທີ່ S ຈະແມ່ນຈັກ cm²?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: S ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຕ້ອງການເນື້ອທີ່ S = 49 cm², ຄວາມຍາວຂ້າງ x ຂອງຮູບສີ່ແຈມົນທົນຈະຕ້ອງແມ່ນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
          <span key="u13-ans-1-1">{"(1) 9 (ເພາະວ່າ y = 3² = 9)"}</span>,
          <span key="u13-ans-1-2">{"(2) 25 (ເພາະວ່າ y = (-5)² = 25)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u13-ans-2-1">{"(1) (0, 0) (ແມ່ນພິກັດຈຸດຕ່ຳສຸດ/ຈຸດຈອມ)"}</span>,
          <span key="u13-ans-2-2">{"(2) 0 (ແກນເຄິ່ງຄືແມ່ນແກນ y ເຊິ່ງມີສົມຜົນ x = 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u13-ans-t1-1">{"(1) 4 (ເພາະວ່າ x² = 16  ⇒  x = 4, ເອົາສະເພາະຄ່າບວກ)"}</span>,
          <span key="u13-ans-t1-2">{"(2) -3 (ເພາະວ່າ x² = 9  ⇒  x = -3, ເອົາສະເພາະຄ່າລົບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u13-ans-t2-1">{"(1) 1/4 (ເພາະວ່າ (1/2)² = 1/4)"}</span>,
          <span key="u13-ans-t2-2">{"(2) 4/9 (ເພາະວ່າ (-2/3)² = 4/9)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u13-ans-s1-1">{"(1) ຢູ່ (ເພາະວ່າແທນ x = 4 ຈະໄດ້ y = 4² = 16 ພໍດີ)"}</span>,
          <span key="u13-ans-s1-2">{"(2) ບໍ່ຢູ່ (ເພາະວ່າ y = (-3)² = 9, ບໍ່ແມ່ນ -9. ຄ່າ y ຂອງ y = x² ຫ້າມເປັນລົບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u13-ans-s2-1">{"(1) 64 (ເພາະວ່າ S = 8² = 64 cm²)"}</span>,
          <span key="u13-ans-s2-2">{"(2) 7 (ເພາະວ່າ x² = 49  ⇒  x = 7 cm, ເອົາສະເພາະຄ່າບວກ)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ໄວ້ວ່າ ຕຳລາຂັ້ນສອງ y = x² ຈະມີຈຸດຈອມຢູ່ O(0, 0) ເປັນຈຸດຕ່ຳສຸດສະເໝີ! ແລະ ຄ່າ y ຈະໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ 0 ຕະຫຼອດໄປເດີ້!",
  },
};
