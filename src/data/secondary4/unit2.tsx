import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit2Data: UnitData = {
  unitNumber: 2,
  unitTitle: "ພາກທີ I - ບົດທີ 2: ການຄູນ ແລະ ການຫານ ເລກສ່ວນປົກກະຕິ",
  unitGoal:
    "ເຂົ້າໃຈຫຼັກການ ແລະ ສາມາດຄິດໄລ່ການຄູນ ແລະ ການຫານເລກສ່ວນປົກກະຕິ ພ້ອມທັງຄັດຈ້ອນຜົນຮັບໃຫ້ຢູ່ໃນຮູບຮ່າງງ່າຍດາຍທີ່ສຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 2 ໜ້າ 11-15",
  keyPoints: [
    {
      title: "1. ການຄູນເລກສ່ວນປົກກະຕິ (Multiplication of Rational Expressions)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຄູນເລກສ່ວນປົກກະຕິແມ່ນເອົາ ຈຳນວນພູດຄູນຈຳນວນພູດ ແລະ ພູດຄູນພູດ:"}
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ສູດຄິດໄລ່: "}</strong>
              <Fraction num="A" den="B" />
              {" × "}
              <Fraction num="C" den="D" />
              {" = "}
              <Fraction num="A × C" den="B × D" />
              {" (ເມື່ອ B ≠ 0, D ≠ 0)"}
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <span style={{ color: "#555" }}>
                {"ຕົວຢ່າງ: "}
                <Fraction num="2x" den="y" />
                {" × "}
                <Fraction num="y²" den="4x²" />
                {" = "}
                <Fraction num="2x × y²" den="y × 4x²" />
                {" = "}
                <Fraction num="2x y²" den="4x² y" />
                {" = "}
                <Fraction num="y" den="2x" />
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ແນະນຳ: ໃຫ້ແຍກສ່ວນຄູນ ແລະ ຄັດຈ້ອນຕົວເລກ ຫຼື ຕົວປ່ຽນທີ່ຄືກັນອອກກ່ອນຈະຄູນກັນ ເດີ້! ມັນຈະເຮັດໃຫ້ຄິດໄລ່ງ່າຍຂຶ້ນຫຼາຍ!",
        isBlue: true,
      },
    },
    {
      title: "2. การหารเลขส่วนປົກກະຕິ (Division of Rational Expressions)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຫານເລກສ່ວນປົກກະຕິແມ່ນ ຄູນເລກສ່ວນຕົວຕັ້ງຫານ ໃຫ້ກັບ ສ່ວນປີ້ນ (Reciprocal) ຂອງເລກສ່ວນຕົວຫານ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#2E7D32" }}>{"• ສູດຄິດໄລ່: "}</strong>
              <Fraction num="A" den="B" />
              {" ÷ "}
              <Fraction num="C" den="D" />
              {" = "}
              <Fraction num="A" den="B" />
              {" × "}
              <Fraction num="D" den="C" />
              {" = "}
              <Fraction num="A × D" den="B × C" />
            </div>
          </div>
          {/* Visual SVG showing division turning into multiplication & cross swapping */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ແຜນວາດການປ່ຽນຫານເປັນຄູນ ແລະ ປີ້ນພູດ"}</span>
            <svg viewBox="0 0 320 80" style={{ width: "100%", maxWidth: "320px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Left Fraction */}
              <text x="30" y="32" fill="#333" fontSize="10" textAnchor="middle">{"A"}</text>
              <line x1="15" y1="40" x2="45" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="30" y="55" fill="#333" fontSize="10" textAnchor="middle">{"B"}</text>

              {/* Division sign */}
              <text x="65" y="44" fill="#E91E63" fontSize="14" textAnchor="middle" fontWeight="bold">{"÷"}</text>

              {/* Right Fraction */}
              <text x="100" y="32" fill="#E91E63" fontSize="10" textAnchor="middle">{"C"}</text>
              <line x1="85" y1="40" x2="115" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="100" y="55" fill="#2196F3" fontSize="10" textAnchor="middle">{"D"}</text>

              {/* Arrow */}
              <text x="145" y="44" fill="#333" fontSize="12" textAnchor="middle">{"⇒"}</text>

              {/* Multiplied Fraction */}
              <text x="190" y="32" fill="#333" fontSize="10" textAnchor="middle">{"A"}</text>
              <line x1="175" y1="40" x2="205" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="190" y="55" fill="#333" fontSize="10" textAnchor="middle">{"B"}</text>

              {/* Multiplication sign */}
              <text x="225" y="44" fill="#4CAF50" fontSize="12" textAnchor="middle" fontWeight="bold">{"×"}</text>

              {/* Swapped Right Fraction */}
              <text x="260" y="32" fill="#2196F3" fontSize="10" textAnchor="middle">{"D"}</text>
              <line x1="245" y1="40" x2="275" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="260" y="55" fill="#E91E63" fontSize="10" textAnchor="middle">{"C"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "⚠️ ຂໍ້ຄວນລະວັງ: ຫຼັງຈາກປ່ຽນເຄື່ອງໝາຍ ÷ ເປັນ × ແລ້ວ ຢ່າລືມປີ້ນຈຳນວນພູດ ແລະ ພູດ ຂອງໂຕຫານນຳເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນຂອງເລກສ່ວນປົກກະຕິຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: "} <Fraction num="3x²" den="y" /> {" × "} <Fraction num="y" den="6x" /> {" ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="x - 2" den="3" /> {" × "} <Fraction num="6" den="x² - 4" /> {" ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ຜົນຫານຂອງເລກສ່ວນປົກກະຕິຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: "} <Fraction num="5x" den="y²" /> {" ÷ "} <Fraction num="10x²" den="y" /> {" ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="x² - 1" den="x" /> {" ÷ (x - 1) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1 & 2: ໃຫ້ປ່ຽນການຫານເປັນການຄູນສະເໝີ. ແຍກສ່ວນຄູນໃຫ້ລະອຽດກ່ອນຈະຄັດຈ້ອນ ເພື່ອບໍ່ໃຫ້ຫຼົງຕົວເລກ ຫຼື ເຄື່ອງໝາຍ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ການຄູນ ແລະ ຫານແບບປະສົມທີ່ມີຄວາມຊັບຊ້ອນ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: "} <Fraction num="x² - 4" den="x² - 1" /> {" × "} <Fraction num="x + 1" den="x + 2" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: "} <Fraction num="x² - 2x" den="x² - 9" /> {" ÷ "} <Fraction num="x" den="x + 3" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
              {"ຈົ່ງຄິດໄລ່ກໍລະນີທີ່ມີການແຍກສ່ວນຄູນລະດັບສອງສົມບູນ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: "} <Fraction num="x² - 2x + 1" den="x² - 4" /> {" × "} <Fraction num="x - 2" den="x - 1" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: "} <Fraction num="x² + 4x + 4" den="x² - 1" /> {" ÷ "} <Fraction num="x + 2" den="x - 1" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນ ແລະ ຫານສາມສຳນວນຕໍ່ເນື່ອງກັນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແනນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຄິດໄລ່: "} <Fraction num="a" den="b" /> {" × "} <Fraction num="b²" den="c" /> {" × "} <Fraction num="c²" den="a²" /> {" = (ຕອບແບບເລກສ່ວນງ່າຍດາຍ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="2x" den="3y" /> {" ÷ "} <Fraction num="4x²" den="9y²" /> {" × "} <Fraction num="2x" den="3y" /> {" ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຄວາມໜາແໜ້ນຂອງປະຊາກອນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແനນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ເມືອງ A ມີປະຊາກອນ P = 2x² - 2 (ຄົນ) ແລະ ມີເນື້ອທີ່ S = x + 1 (km²). ຈົ່ງຊອກຫາຄວາມໜາແໜ້ນ D = P/S ຂອງປະຊາກອນໃນເມືອງນີ້ D = ? (ຄົນ/km²):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: D ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຄວາມໜາແໜ້ນຂອງປະຊາກອນແມ່ນ 18 ຄົນ/km², ຄ່າ x ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
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
          <span key="u2-ans-1-1">{"(1) x/2 (ເພາະວ່າ (3x² × y) / (6x × y) = 3x² / 6x = x/2)"}</span>,
          <span key="u2-ans-1-2">{"(2) 2/(x+2) (ເພາະວ່າ 6(x - 2) / [3(x - 2)(x + 2)] = 2 / (x + 2))"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u2-ans-2-1">{"(1) 1/(2xy) (ເພາະວ່າ (5x × y) / (10x² × y²) = 1 / (2xy))"}</span>,
          <span key="u2-ans-2-2">{"(2) (x+1)/x (ເພາະວ່າ [(x - 1)(x + 1)] / [x(x - 1)] = (x + 1)/x)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u2-ans-t1-1">{"(1) (x-2)/(x-1) (ເພາະວ່າ [(x - 2)(x + 2)(x + 1)] / [(x - 1)(x + 1)(x + 2)] = (x - 2) / (x - 1))"}</span>,
          <span key="u2-ans-t1-2">{"(2) (x-2)/(x-3) (ເພາະວ່າ [x(x - 2)(x + 3)] / [x(x - 3)(x + 3)] = (x - 2) / (x - 3))"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u2-ans-t2-1">{"(1) (x-1)/(x+2) (ເພາະວ່າ [(x - 1)²(x - 2)] / [(x - 2)(x + 2)(x - 1)] = (x - 1) / (x + 2))"}</span>,
          <span key="u2-ans-t2-2">{"(2) (x+2)/(x+1) (ເພາະວ່າ [(x + 2)²(x - 1)] / [(x - 1)(x + 1)(x + 2)] = (x + 2) / (x + 1))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u2-ans-s1-1">{"(1) (bc)/a (ຫຼື bc/a. ເພາະວ່າ (a × b² × c²) / (b × c × a²) = (a b² c²) / (a² b c) = (bc)/a)"}</span>,
          <span key="u2-ans-s1-2">{"(2) 1 (ເພາະວ່າ [2x / 3y] × [9y² / 4x²] × [2x / 3y] = [18xy² / 12x²y] × [2x / 3y] = [36x²y² / 36x²y²] = 1)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u2-ans-s2-1">{"(1) 2x - 2 (ເພາະວ່າ D = 2(x - 1)(x + 1) / (x + 1) = 2(x - 1) = 2x - 2)"}</span>,
          <span key="u2-ans-s2-2">{"(2) 10 (ເພາະວ່າ 2x - 2 = 18  ⇒  2x = 20  ⇒  x = 10)"}</span>,
        ],
      },
    ],
    advice: "ເວລາຫານເລກສ່ວນປົກກະຕິ, ໃຫ້ປ່ຽນຫານເປັນຄູນ ແລະ ປີ້ນພູດຂອງຕົວຫານກ່ອນຄິດໄລ່ສະເໝີເດີ້! ພ້ອມທັງແຍກສ່ວນຄູນເພື່ອໃຫ້ງ່າຍຕໍ່ການຄັດຈ້ອນ!",
  },
};
