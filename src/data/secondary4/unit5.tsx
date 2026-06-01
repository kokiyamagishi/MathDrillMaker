import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit5Data: UnitData = {
  unitNumber: 5,
  unitTitle: "ພາກທີ I - ບົດທີ 5: ການແກ້ສົມຜົນປົກກະຕິ",
  unitGoal:
    "ຮຽນຮູ້ວິທີແກ້ສົມຜົນປົກກະຕິ (Rational Equations) ໂດຍການຄູນພູດຮ່ວມເພື່ອປ່ຽນເປັນສົມຜົນພະຫຸພົດ ແລະ ການກວດກາໃຈຜົນນອກເງື່ອນໄຂ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 5 ໜ້າ 26-30",
  keyPoints: [
    {
      title: "1. ຫຼັກການແກ້ສົມຜົນປົກກະຕິ (Steps for Solving Rational Equations)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການແກ້ສົມຜົນປົກກະຕິມີ 3 ຂັ້ນຕອນທີ່ສຳຄັນດັ່ງນີ້:"}
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
              gap: "10px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"1. ຊອກຫາເງື່ອນໄຂກຳນົດ: "}</strong>
              <span>{"ກຳນົດໃຫ້ພູດຕ່າງຈາກ 0 (ຕົວຢ່າງ: x ≠ a)."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"2. ຄູນພູດຮ່ວມທັງສອງພາກ: "}</strong>
              <span>{"ຄູນພູດຮ່ວມ (LCD) ໃສ່ທຸກພົດເພື່ອປົດພູດອອກ ໃຫ້ເປັນສົມຜົນທົ່ວໄປ."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#D84315" }}>{"3. ⚠️ ກວດກາໃຈຜົນ (Check Extraneous Solutions): "}</strong>
              <span>{"ໃຈຜົນທີ່ໄດ້ຮັບຕ້ອງບໍ່ຂັດກັບເງື່ອນໄຂກຳນົດໃນຂັ້ນຕອນທີ 1. ຖ້າຂັດ ໃຈຜົນນັ້ນຈະຖືກຕັດອອກ!"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງລະວັງໃຈຜົນທີ່ເຮັດໃຫ້ພູດເປັນ 0! ໃຈຜົນນັ້ນເອີ້ນວ່າ ໃຈຜົນນອກ ແລະ ບໍ່ແມ່ນຄຳຕອບຂອງສົມຜົນ ເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ແຜນວາດການກວດກາໃຈຜົນ (Extraneous Solution Visualization)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕົວຢ່າງ: ສຳລັບສົມຜົນ "} 
            <Fraction num="x²" den="x - 2" /> 
            {" = "} 
            <Fraction num="4" den="x - 2" />
            {" (ເງື່ອນໄຂ x ≠ 2)."}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອຄູນ (x - 2) ທັງສອງພາກ ຈະໄດ້ x² = 4  ⇒  x = 2 ຫຼື x = -2."}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <svg viewBox="0 0 280 80" style={{ width: "100%", maxWidth: "280px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* x = -2 green check */}
              <rect x="20" y="20" width="100" height="40" rx="4" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
              <text x="70" y="38" fill="#1B5E20" fontSize="10" textAnchor="middle" fontWeight="bold">{"x = -2"}</text>
              <text x="70" y="52" fill="#1B5E20" fontSize="9" textAnchor="middle">{"✓ ເໝາະສົມ"}</text>

              {/* x = 2 red cross */}
              <rect x="160" y="20" width="100" height="40" rx="4" fill="#FFEBEE" stroke="#F44336" strokeWidth="1.5" />
              <text x="210" y="38" fill="#C62828" fontSize="10" textAnchor="middle" fontWeight="bold">{"x = 2"}</text>
              <text x="210" y="52" fill="#C62828" fontSize="9" textAnchor="middle">{"✗ ບໍ່ເໝາະສົມ (ພູດເປັນ 0)"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ດັ່ງນັ້ນ ໃຈຜົນທັງໝົດ (ທັງໝົດໃຈຜົນ) ຂອງສົມຜົນນີ້ມີພຽງແຕ່ x = -2 ເທົ່ານັ້ນ!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ສົມຜົນປົກກະຕິພື້ນຖານຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: "} <Fraction num="x + 3" den="x - 1" /> {" = 3. ຄ່າ x ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ ຫຼື ເລກສ່ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກ້ສົມຜົນ: "} <Fraction num="2" den="x" /> {" + "} <Fraction num="3" den="2x" /> {" = 7. ຄ່າ x ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ):"}</span>
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
            {"ຈົ່ງແກ້ສົມຜົນປົກກະຕິໂດຍຄຳນຶງເຖິງເງື່ອນໄຂກຳນົດ: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: "} <Fraction num="x" den="x - 3" /> {" = "} <Fraction num="3" den="x - 3" /> {" (ຖ້າບໍ່ມີໃຈຜົນໃຫ້ຕອບວ່າ: ບໍ່ມີໃຈຜົນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ແກ້ສົມຜົນ: "} <Fraction num="x²" den="x - 1" /> {" = "} <Fraction num="1" den="x - 1" /> {" (ຕອບໃຈຜົນທີ່ຖືກຕ້ອງ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຄູນພູດຮ່ວມ LCD ໃຫ້ດີ. ບົດທ້າທາຍ 2: ຫຼັງຈາກໄດ້ໃຈຜົນແລ້ວ ຢ່າລືມສົມທຽບກັບເງື່ອນໄຂກຳນົດສະເໝີ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ສົມຜົນປົກກະຕິຂັ້ນສອງທີ່ມີພູດຮ່ວມລະດັບສອງ: "}{" "}
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
                <span>{"(1) ແກ້ສົມຜົນ: "} <Fraction num="x + 2" den="x" /> {" + "} <Fraction num="x - 2" den="x + 2" /> {" = 2 (ຄ່າ x ແມ່ນເທົ່າໃດ?):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ແກ້ສົມຜົນ: "} <Fraction num="1" den="x - 2" /> {" + "} <Fraction num="1" den="x + 2" /> {" = "} <Fraction num="3" den="x² - 4" /> {" (ຊອກຫາໃຈຜົນ x):"}</span>
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
              {"ຈົ່ງແກ້ສົມຜົນປົກກະຕິທີ່ມີໃຈຜົນຊ້ອນ ຫຼື ບໍ່ມີໃຈຜົນ: "}{" "}
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
                <span>{"(1) ແກ້ສົມຜົນ: "} <Fraction num="x² - 3x" den="x - 3" /> {" = 0. ຈົ່ງຊອກຫາໃຈຜົນ x ທີ່ຖືກຕ້ອງ (ຕອບຕົວເລກ ຫຼື ຕອບ ບໍ່ມີໃຈຜົນ ຖ້າບໍ່ມີ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ແກ້ສົມຜົນ: "} <Fraction num="x² - 4" den="x + 2" /> {" = -4. ຊອກຫາໃຈຜົນ x: (ຄຳແນະນຳ: ໃຫ້ກວດເງື່ອນໄຂ x ≠ -2 ໃຫ້ດີ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: x ="}</span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມການແກ້ສົມຜົນປົກກະຕິ: "}{" "}
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
              <span>{"(1) ແກ້ສົມຜົນ: "} <Fraction num="x - 1" den="x - 2" /> {" + "} <Fraction num="1" den="x" /> {" = 1. ຄ່າ x ແມ່ນເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ແກ້ສົມຜົນ: "} <Fraction num="x² - 9" den="x - 3" /> {" = 6. ສຳນວນນີ້ມີໃຈຜົນແທ້ຈັກຕົວ? (ຖ້າບໍ່ມີໃຫ້ຕອບວ່າ: ບໍ່ມີໃຈຜົນ):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາປະຍຸກຕົວຈິງກ່ຽວກັບການເຮັດວຽກຮ່ວມກັນ: "}{" "}
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
              <span>{"(1) ນາງມະລີ ເຮັດວຽກຜູ້ດຽວແລ້ວໃນ 4 ຊົ່ວໂມງ. ທ້າວບຸນມີ ເຮັດວຽກດຽວກັນແລ້ວໃນ x ຊົ່ວໂມງ. ຖ້າທັງສອງຄົນເຮັດຮ່ວມກັນ ຈະແລ້ວໃນ 2.4 ຊົ່ວໂມງ. ໃຫ້ຂຽນສົມຜົນຄິດໄລ່: "} <Fraction num="1" den="4" /> {" + "} <Fraction num="1" den="x" /> {" = "} <Fraction num="1" den="2.4" /> {" (ຫຼື 5/12). ຈົ່ງຊອກຫາເວລາ x ທີ່ທ້າວບຸນມີເຮັດຜູ້ດຽວ (ຊົ່ວໂມງ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເຮັດວຽກຮ່ວມກັນແລ້ວໃນ 2 ຊົ່ວໂມງ, ເວລາ x ຂອງທ້າວບຸນມີຈະປ່ຽນເປັນຈັກຊົ່ວໂມງ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
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
          <span key="u5-ans-1-1">{"(1) 3 (ເພາະວ່າ x + 3 = 3(x - 1)  ⇒  x + 3 = 3x - 3  ⇒  2x = 6  ⇒  x = 3)"}</span>,
          <span key="u5-ans-1-2">{"(2) 1/2 (ເພາະວ່າ ພູດຮ່ວມແມ່ນ 2x, ຈະໄດ້ 4 + 3 = 14x  ⇒  7 = 14x  ⇒  x = 1/2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u5-ans-2-1">{"(1) ບໍ່ມີໃຈຜົນ (ເພາະວ່າ x = 3 ຂັດກັບເງື່ອນໄຂພູດ x - 3 ≠ 0)"}</span>,
          <span key="u5-ans-2-2">{"(2) -1 (ເພາະວ່າ x² = 1  ⇒  x = 1 ຫຼື -1. ແຕ່ x = 1 ເຮັດໃຫ້ພູດເປັນ 0, ດັ່ງນັ້ນມີພຽງ x = -1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u5-ans-t1-1">{"(1) 4 (ເພາະວ່າ (x + 2)² + x(x - 2) = 2x(x + 2)  ⇒  x² + 4x + 4 + x² - 2x = 2x² + 4x  ⇒  2x = 4  ⇒  x = 4)"}</span>,
          <span key="u5-ans-t1-2">{"(2) 3/2 (ເພາະວ່າ (x + 2) + (x - 2) = 3  ⇒  2x = 3  ⇒  x = 3/2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u5-ans-t2-1">{"(1) 0 (ເພາະວ່າ x(x - 3) = 0  ⇒  x = 0 ຫຼື x = 3. ແຕ່ x = 3 ເຮັດໃຫ້ພູດເປັນ 0, ດັ່ງນັ້ນໄດ້ x = 0)"}</span>,
          <span key="u5-ans-t2-2">{"(2) ບໍ່ມີໃຈຜົນ (ເພາະວ່າ (x - 2)(x + 2) / (x + 2) = x - 2 = -4  ⇒  x = -2. ແຕ່ x = -2 ເຮັດໃຫ້ພູດເປັນ 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u5-ans-s1-1">{"(1) 2/3 (ເພາະວ່າ x(x - 1) + x - 2 = x(x - 2)  ⇒  x² - x + x - 2 = x² - 2x  ⇒  2x = 2  ⇒  x = 2/3)"}</span>,
          <span key="u5-ans-s1-2">{"(2) ບໍ່ມີໃຈຜົນ (ເພາະວ່າ (x - 3)(x + 3)/(x - 3) = x + 3 = 6  ⇒  x = 3. ແຕ່ x = 3 ເຮັດໃຫ້ພູດເປັນ 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u5-ans-s2-1">{"(1) 6 (ເພາະວ່າ 1/4 + 1/x = 5/12  ⇒  1/x = 5/12 - 3/12 = 2/12 = 1/6  ⇒  x = 6)"}</span>,
          <span key="u5-ans-s2-2">{"(2) 4 (ເພາະວ່າ 1/4 + 1/x = 1/2  ⇒  1/x = 1/4  ⇒  x = 4)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກການທີ່ດີທີ່ສຸດໃນການແກ້ສົມຜົນປົກກະຕິ ຄືການກວດກາເງື່ອນໄຂກຳນົດຂອງຕົວປ່ຽນໃນພູດສະເໝີ! ຢ່າລືມຕັດໃຈຜົນນອກອອກເດີ້!",
  },
};
