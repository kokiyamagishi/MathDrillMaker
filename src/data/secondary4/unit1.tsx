import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit1Data: UnitData = {
  unitNumber: 1,
  unitTitle: "ພາກທີ I - ບົດທີ 1: ເລກສ່ວນປົກກະຕິ ແລະ ເງື່ອນໄຂກຳນົດ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບນິຍາມຂອງເລກສ່ວນປົກກະຕິ, ຊອກຫາເງື່ອນໄຂກຳນົດຂອງຕົວປ່ຽນທີ່ເຮັດໃຫ້ພູດຕ່າງຈາກສູນ ແລະ ການຄັດຈ້ອນເລກສ່ວນປົກກະຕິໃຫ້ຢູ່ໃນຮູບຮ່າງງ່າຍດາຍທີ່ສຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 1 ໜ້າ 5-10",
  keyPoints: [
    {
      title: "1. ນິຍາມ ແລະ ເງື່ອນໄຂກຳນົດຂອງເລກສ່ວນປົກກະຕິ (Definition and Undefined Conditions)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເລກສ່ວນປົກກະຕິ ແມ່ນສຳນວນທີ່ມີຮູບຮ່າງ "} <Fraction num="A" den="B" /> {" ເຊິ່ງ A ແລະ B ແມ່ນພະຫຸພົດ ແລະ B ຕ້ອງຕ່າງຈາກ 0 (B ≠ 0)."}
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
              <strong style={{ color: "#D84315" }}>{"⚠️ ເງື່ອນໄຂກຳນົດ (Defined Condition): "}</strong>
              <span>{"ສຳນວນເລກສ່ວນຈະບໍ່ມີຄວາມໝາຍທາງຄະນິດສາດ (ບໍ່ກຳນົດ) ເມື່ອພູດ (Denominator) ເທົ່າກັບ 0."}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຕົວຢ່າງ: ສຳນວນ "} <Fraction num="x + 3" den="x - 2" /> {" ຈະບໍ່ກຳນົດເມື່ອ x - 2 = 0 ໝາຍຄວາມວ່າ x = 2."}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ດັ່ງນັ້ນ, ເງື່ອນໄຂທີ່ເຮັດໃຫ້ສຳນວນມີຄວາມໝາຍຄື x ຕ້ອງຕ່າງຈາກ 2 (x ≠ 2)."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ພູດຂອງເລກສ່ວນປົກກະຕິ ຫ້າມເທົ່າກັບ 0 ເດັດຂາດ! ຈົ່ງຊອກຫາຄ່າ x ທີ່ເຮັດໃຫ້ພູດເປັນ 0 ແລ້ວຕັດຄ່ານັ້ນອອກ ເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ການຄັດຈ້ອນເລກສ່ວນປົກກະຕິ (Simplification of Rational Expressions)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຄັດຈ້ອນແມ່ນການແຍກສ່ວນຄູນທັງຈຳນວນພູດ ແລະ ພູດ, ແລ້ວຫານສ່ວນຄູນຮ່ວມ (Common factor) ທີ່ຄືກັນອອກ:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ແຜນວາດຂັ້ນຕອນການຄັດຈ້ອນສຳນວນ"}</span>
            <svg viewBox="0 0 320 80" style={{ width: "100%", maxWidth: "320px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Box 1 */}
              <rect x="10" y="20" width="80" height="40" rx="4" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1.5" />
              <text x="50" y="44" fill="#0D47A1" fontSize="9" textAnchor="middle" fontWeight="bold">{"ແຍກສ່ວນຄູນ"}</text>
              
              {/* Arrow 1 */}
              <line x1="95" y1="40" x2="115" y2="40" stroke="#333" strokeWidth="1.5" />
              <polygon points="115,37 120,40 115,43" fill="#333" />

              {/* Box 2 */}
              <rect x="125" y="20" width="80" height="40" rx="4" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
              <text x="165" y="44" fill="#1B5E20" fontSize="9" textAnchor="middle" fontWeight="bold">{"ຄັດສ່ວນຮ່ວມ"}</text>

              {/* Arrow 2 */}
              <line x1="210" y1="40" x2="230" y2="40" stroke="#333" strokeWidth="1.5" />
              <polygon points="230,37 235,40 230,43" fill="#333" />

              {/* Box 3 */}
              <rect x="240" y="20" width="70" height="40" rx="4" fill="#FFF3E0" stroke="#FF9800" strokeWidth="1.5" />
              <text x="275" y="44" fill="#E65100" fontSize="9" textAnchor="middle" fontWeight="bold">{"ຮູບຮ່າງງ່າຍ"}</text>
            </svg>
          </div>
          <p style={{ fontSize: "1.375rem", margin: "10px 0 0 0" }}>
            {"ຕົວຢ່າງ: "} 
            <Fraction num="x² - 9" den="x² - 3x" /> 
            {" = "}
            <Fraction num="(x - 3)(x + 3)" den="x(x - 3)" />
            {" = "}
            <Fraction num="x + 3" den="x" />
            {" (ເມື່ອ x ≠ 3 ແລະ x ≠ 0)."}
          </p>
        </div>
      ),
      hint: {
        text: "ຕ້ອງຜັນປ່ຽນໃຫ້ເປັນສ່ວນຄູນກ່ອນຈຶ່ງຄັດຈ້ອນໄດ້! ຫ້າມຄັດຈ້ອນໂຕ x ທີ່ຢູ່ໃນຮູບການບວກລົບໂດຍກົງເດັດຂາດ!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ x ທີ່ເຮັດໃຫ້ເລກສ່ວນປົກກະຕິຕໍ່ໄປນີ້ບໍ່ກຳນົດ (ພູດເທົ່າກັບ 0): "}{" "}
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
              <span>{"(1) ສຳນວນ: "} <Fraction num="x - 1" den="x - 5" /> {" ຈະບໍ່ກຳນົດເມື່ອ x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສຳນວນ: "} <Fraction num="2x + 4" den="3x - 12" /> {" ຈະບໍ່ກຳນົດເມື່ອ x ="}</span>
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
            {"ຈົ່ງຄັດຈ້ອນເລກສ່ວນປົກກະຕິຕໍ່ໄປນີ້ໃຫ້ເປັນຮູບຮ່າງງ່າຍດາຍທີ່ສຸດ: "}{" "}
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
              <span>{"(1) ຄັດຈ້ອນ: "} <Fraction num="5x" den="15x²" /> {" = (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 1/(3x)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄັດຈ້ອນ: "} <Fraction num="x² - 4" den="x - 2" /> {" = (ຕອບໃນຮູບຮ່າງພະຫຸພົດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ຄຳແນະນຳ: ຂໍ້ 1 ໃຫ້ແຍກຕົວຮ່ວມຂອງພູດກ່ອນ ແລ້ວຊອກຫາເງື່ອນໄຂ (ພູດອາດມີສອງຄ່າ). ຂໍ້ 2 ໃຫ້ໃຊ້ສູດສະເໝີຜົນຄວນຈື່ A² - B² = (A-B)(A+B) ເຂົ້າໃນການແຍກສ່ວນຄູນທັງພູດ ແລະ ຈຳນວນພູດ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາເງື່ອນໄຂກຳນົດຂອງເລກສ່ວນທີ່ມີພູດເປັນຮູບຮ່າງກຳລັງສອງ: "}{" "}
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
                <span>{"(1) ຊອກຫາຄ່າ x ທັງໝົດ ທີ່ເຮັດໃຫ້ "} <Fraction num="x + 1" den="x² - 9" /> {" ບໍ່ມີຄວາມໝາຍ (ຕອບຕົວເລກແຍກດ້ວຍຈຸດ, ຕົວຢ່າງ: 3, -3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຊອກຫາຄ່າ x ທັງໝົດ ທີ່ເຮັດໃຫ້ "} <Fraction num="x - 2" den="x(x - 4)" /> {" ບໍ່ມີຄວາມໝາຍ (ຕອບຕົວເລກແຍກດ້ວຍຈຸດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
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
              {"ຈົ່ງຄັດຈ້ອນເລກສ່ວນປົກກະຕິທີ່ມີລະດັບຂັ້ນສອງ: "}{" "}
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
                <span>{"(1) ຄັດຈ້ອນ: "} <Fraction num="x² - 3x" den="x² - 9" /> {" (ຕອບແບບເລກສ່ວນ, ຕົວຢ່າງ: x/(x+3)): Warm-up"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄັດຈ້ອນ: "} <Fraction num="x² - 2x + 1" den="x² - 1" /> {" (ຕອບແບບເລກສ່ວນ, ຕົວຢ່າງ: (x-1)/(x+1)):"}</span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມກ່ຽວກັບເງື່ອນໄຂກຳນົດ ແລະ ການຄັດຈ້ອນ: "}{" "}
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
              <span>{"(1) ຈົ່ງກຳນົດເງື່ອນໄຂຂອງ x ເພື່ອໃຫ້ສຳນວນ "} <Fraction num="5" den="x² - 4x" /> {" ມີຄວາມໝາຍ (ຕອບໂດຍໃຊ້ເຄື່ອງໝາຍ ≠ ແລະ ຕອບແຍກດ້ວຍຈຸດ, ຕົວຢ່າງ: x ≠ 0, x ≠ 4):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຄັດຈ້ອນສຳນວນທີ່ຊ້ອນກັນ: "} <Fraction num="2x - 4" den="x² - 4" /> {" (ຕອບແບບເລກສ່ວນງ່າຍດາຍ):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບອັດຕາສ່ວນ (Real-world fraction ratios): "}{" "}
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
              <span>{"(1) ສວນພັກແຫ່ງໜຶ່ງເປັນຮູບສີ່ແຈສາກ ມີເນື້ອທີ່ A = x² - x (m²) ແລະ ມີລວງກວ້າງ W = x - 1 (m). ຈົ່ງຊອກຫາສຳນວນສະແດงລວງຍາວ L ຂອງຮູບສີ່ແຈນີ້ (ຄຳແນະນຳ: L = A/W, ຕອບໃນຮູບແບບພະຫຸພົດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: L ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"మీటర్ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າມີເງື່ອນໄຂວ່າທັງເນື້ອທີ່ ແລະ ລວງກວ້າງຕ້ອງເປັນບວກ (+), ຄ່າ x ຕ້ອງມີເງື່ອນໄຂແນວໃດ? (ຕອບແບບອະສົມຜົນງ່າຍໆ ເຊັ່ນ: x > 1):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u1-ans-1-1">{"(1) x = 5 (ເພາະວ່າ x - 5 = 0)"}</span>,
          <span key="u1-ans-1-2">{"(2) x = 4 (ເພາະວ່າ 3x - 12 = 0  ⇒  3x = 12  ⇒  x = 4)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u1-ans-2-1">{"(1) 1/(3x) (ເພາະວ່າ 5x / (15x²) = 5x / (3 * 5x * x) = 1/(3x))"}</span>,
          <span key="u1-ans-2-2">{"(2) x + 2 (ເພາະວ່າ (x - 2)(x + 2) / (x - 2) = x + 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u1-ans-t1-1">{"(1) 3, -3 (ຫຼື 3, -3. ເພາະວ່າ x² - 9 = 0  ⇒  x² = 9  ⇒  x = 3 ຫຼື -3)"}</span>,
          <span key="u1-ans-t1-2">{"(2) 0, 4 (ຫຼື 0, 4. ເພາະວ່າ x(x - 4) = 0  ⇒  x = 0 ຫຼື x = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u1-ans-t2-1">{"(1) x/(x+3) (ເພາະວ່າ x(x - 3) / [(x - 3)(x + 3)] = x / (x + 3))"}</span>,
          <span key="u1-ans-t2-2">{"(2) (x-1)/(x+1) (ເພາະວ່າ (x - 1)² / [(x - 1)(x + 1)] = (x - 1) / (x + 1))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u1-ans-s1-1">{"(1) x ≠ 0, x ≠ 4 (ຫຼື x != 0, x != 4. ເພາະວ່າພູດ x(x - 4) ຕ້ອງຕ່າງຈາກ 0)"}</span>,
          <span key="u1-ans-s1-2">{"(2) 2/(x+2) (ເພາະວ່າ 2(x - 2) / [(x - 2)(x + 2)] = 2 / (x + 2))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u1-ans-s2-1">{"(1) x (ເພາະວ່າ L = A/W = x(x - 1) / (x - 1) = x)"}</span>,
          <span key="u1-ans-s2-2">{"(2) x > 1 (ເພາະວ່າລວງກວ້າງ x - 1 > 0  ⇒  x > 1)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ໄວ້ສະເໝີວ່າ ເລກສ່ວນປົກກະຕິຈະບໍ່ກຳນົດເມື່ອພູດເທົ່າກັບ 0! ແລະ ເວລາຄັດຈ້ອນ ຕ້ອງແຍກໃຫ້ເປັນສ່ວນຄູນກ່ອນຈຶ່ງຫານກັນໄດ້ເດີ້!",
  },
};
