import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit3Data: UnitData = {
  unitNumber: 3,
  unitTitle: "ພາກທີ I - ບົດທີ 3: ການແຍກສ່ວນຄູນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ຝຶກຝົນການແຍກສ່ວນຄູນ ໂດຍວິທີການແຍກຕົວຮ່ວມ ແລະ ນຳໃຊ້ສະເໝີຜົນຄວນຈື່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 13-18",
  subSections: [
    {
      title: "1. ການແຍກສ່ວນຄູນໂດຍການແຍກຕົວຮ່ວມ",
      keyPoint: {
        title: "ຫຼັກການແຍກຕົວຮ່ວມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແຍກສ່ວນຄູນແມ່ນການປ່ຽນພະຫຸພົດທີ່ຢູ່ໃນຮູບແບບຜົນບວກ ໃຫ້ເປັນຮູບແບບຜົນຄູນ ໂດຍການຊອກຫາພົດຮ່ວມ (ຕົວຮ່ວມ):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ສູດແຍກຕົວຮ່ວມພື້ນຖານ: "} <span className="math">{"ab + ac = a(b + c)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: 3"}<i>x</i>{" + 6 = 3("}<i>x</i>{") + 3(2) = 3("}<i>x</i>{" + 2)."}</div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງກຳລັງ: 5"}<i>x</i>{"² - 10"}<i>x</i>{" = 5"}<i>x</i>{"("}<i>x</i>{" - 2)."}</div>
            </div>

            {/* Factoring Area SVG Visualization */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ການແບ່ງເນື້ອທີ່: 3"}<i>x</i>{" + 6 = 3("}<i>x</i>{" + 2)"}</span>
                <svg viewBox="0 0 320 160" style={{ width: "100%", maxWidth: "280px", height: "auto" }}>
                  {/* Rectangle 3 x x */}
                  <rect x="20" y="20" width="140" height="120" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2" />
                  <text x="90" y="90" fill="#FFFFFF" fontSize="20" textAnchor="middle">{"3"}<i>x</i></text>
                  
                  {/* Rectangle 3 x 2 */}
                  <rect x="160" y="20" width="120" height="120" fill="#2196F3" stroke="#1565C0" strokeWidth="2" />
                  <text x="220" y="90" fill="#FFFFFF" fontSize="20" textAnchor="middle">{"6"}</text>

                  {/* Labels */}
                  <text x="8" y="90" fill="#37474F" fontSize="16" textAnchor="middle">{"3"}</text>
                  <text x="90" y="12" fill="#37474F" fontSize="16" textAnchor="middle"><i>x</i></text>
                  <text x="220" y="12" fill="#37474F" fontSize="16" textAnchor="middle">{"2"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງຊອກຫາຕົວເລກ ຫຼື ຕົວລັບທີ່ໃຫຍ່ທີ່ສຸດທີ່ທຸກໆພົດມີຮ່ວມກັນ ເພື່ອແຍກອອກມາເປັນຕົວຮ່ວມເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງແຍກສ່ວນຄູນ ແລະ ຊອກຫາຄ່າຂອງຕົວລັບ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກການແຍກສ່ວນຄູນ "} <span className="math">{"3"}<i>x</i>{" + 12"}<i>y</i>{" = 3("}<i>x</i>{" + Ay)"}</span> {". ຄ່າຂອງ A ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກການແຍກສ່ວນຄູນ "} <span className="math">{"6a² - 18a = 6a(a - B)"}</span> {". ຄ່າຂອງ B ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກການແຍກສ່ວນຄູນ "} <span className="math"><i>x</i>{"²"}<i>y</i>{" + "}<i>x</i><i>y</i>{"² = "}<i>x</i><i>y</i>{"("}<i>x</i>{" + C)"}</span> {". ຄ່າຂອງ C ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວລັບ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 2: ຈົ່ງແຍກສ່ວນຄູນທີ່ມີວົງເລັບເປັນຕົວຮ່ວມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>x</i>{"(a - b) + "}<i>y</i>{"(a - b) = (a - b)("}<i>x</i>{" + D)"}</span> {". ຄ່າຂອງ D ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວລັບ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"5(p + q) - "}<i>z</i>{"(p + q) = (p + q)(E - "}<i>z</i>{")"}</span> {". ຄ່າຂອງ E ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແຍກສ່ວນຄູນໂດຍນຳໃຊ້ສະເໝີຜົນຄວນຈື່",
      keyPoint: {
        title: "ການແຍກສ່ວນຄູນດ້ວຍກຳລັງສອງ ແລະ ຜົນຕ່າງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ພວກເຮົາສາມາດນຳໃຊ້ສູດກຳລັງສອງສົມບູນ ຫຼື ຜົນຕ່າງກຳລັງສອງໃນທາງກົງກັນຂ້າມ ເພື່ອແຍກສ່ວນຄູນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ກຳລັງສອງສົມບູນ: "} <span className="math">{"a² ± 2ab + b² = (a ± b)²"}</span></div>
              <div>{"• ຜົນຕ່າງກຳລັງສອງ: "} <span className="math">{"a² - b² = (a - b)(a + b)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ 1: "}<i>x</i>{"² + 6"}<i>x</i>{" + 9 = "}<i>x</i>{"² + 2("}<i>x</i>{")(3) + 3² = ("}<i>x</i>{" + 3)²."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ 2: "}<i>x</i>{"² - 16 = "}<i>x</i>{"² - 4² = ("}<i>x</i>{" - 4)("}<i>x</i>{" + 4)."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສັງເກດພົດທຳອິດ ແລະ ພົດສຸດທ້າຍຂອງພະຫຸພົດ ວ່າແມ່ນຕົວເລກໃດກຳລັງສອງ ເພື່ອຊອກຫາຄ່າຂອງ a ແລະ b ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງແຍກສ່ວນຄູນໂດຍໃຊ້ກຳລັງສອງສົມບູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>x</i>{"² + 10"}<i>x</i>{" + 25 = ("}<i>x</i>{" + F)²"}</span> {". ຄ່າຂອງ F ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>y</i>{"² - 12"}<i>y</i>{" + 36 = ("}<i>y</i>{" - G)²"}</span> {". ຄ່າຂອງ G ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"4"}<i>z</i>{"² + 4"}<i>z</i>{" + 1 = (Hz + 1)²"}</span> {". ຄ່າຂອງ H ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 2: ຈົ່ງແຍກສ່ວນຄູນໂດຍໃຊ້ຜົນຕ່າງກຳລັງສອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>x</i>{"² - 49 = ("}<i>x</i>{" - I)("}<i>x</i>{" + I)"}</span> {". ຄ່າຂອງ I ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"16"}<i>y</i>{"² - 1 = (Jy - 1)(Jy + 1)"}</span> {". ຄ່າຂອງ J ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ວິທີການແຍກພົດກາງ ຫຼື ນຳໃຊ້ຜົນຕ່າງກຳລັງສອງໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແຍກສ່ວນຄູນຮູບຮ່າງ "}<i>x</i>{"² + sx + p: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແຍກສ່ວນຄູນຂອງ "} <span className="math"><i>x</i>{"² - 5"}<i>x</i>{" + 6"}</span> {" ໃຫ້ຢູ່ໃນຮູບແບບ "} <span className="math">{"("}<i>x</i>{" - a)("}<i>x</i>{" - b)"}</span> {" ໂດຍໃຫ້ຊອກຫາຄ່າຂອງ a + b. (ຊອກຫາຕົວເລກສອງຕົວທີ່ຄູນກັນໄດ້ 6 ແລະ ບວກກັນໄດ້ -5)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a + b ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແຍກສ່ວນຄູນຮູບຮ່າງຊັບຊ້ອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງແຍກສ່ວນຄູນຂອງ "} <span className="math">{"("}<i>x</i>{" + 2)² - 9"}</span> {" ໃຫ້ຢູ່ໃນຮູບແບບ "} <span className="math">{"("}<i>x</i>{" - a)("}<i>x</i>{" + b)"}</span> {" ໂດຍຊອກຫາຄ່າຂອງ b - a."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: b - a ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ]
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການຫາຂ້າງຂອງຮູບສີ່ແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ດິນຕອນໜຶ່ງເປັນຮູບສີ່ແຈສາກທີ່ມີເນື້ອທີ່ "} <span className="math">{"3"}<i>x</i>{"² + 12"}<i>x</i></span> {" ຕາແມັດ. ຖ້າເຮົາແຍກສ່ວນຄູນເພື່ອຫາຄວາມຍາວຂອງສອງຂ້າງ (ຂ້າງໜຶ່ງແມ່ນ 3"}<i>x</i>{") ➔ ອີກຂ້າງໜຶ່ງຈະຍາວເທົ່າໃດ? (ຕອບເປັນສຳນວນພຶດຊະຄະນິດ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ອີກຂ້າງໜຶ່ງຍາວ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ແມັດ (m)"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການຄິດໄລ່ໄວດ້ວຍການແຍກສ່ວນຄູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈົ່ງຄິດໄລ່ຄ່າສຸດທ້າຍຂອງສຳນວນ "} <span className="math">{"75² - 25²"}</span> {" ໂດຍນຳໃຊ້ການແຍກສ່ວນຄູນ (75 - 25)(75 + 25) ຢ່າງໄວວາ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ຄ່າແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    }
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="1">{"(1) 4 (ເພາະວ່າ 3"}<i>x</i>{" + 12"}<i>y</i>{" = 3("}<i>x</i>{" + 4"}<i>y</i>{") ➔ A = 4)"}</span>,
          <span key="2">{"(2) 3 (ເພາະວ່າ 6a² - 18a = 6a(a - 3) ➔ B = 3)"}</span>,
          <span key="3">{"(3) "}<i>y</i>{" (ເພາະວ່າ "}<i>x</i><i>y</i>{"("}<i>x</i>{" + "}<i>y</i>{") = "}<i>x</i>{"²"}<i>y</i>{" + "}<i>x</i><i>y</i>{"² ➔ C = "}<i>y</i>{")"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) "}<i>y</i>{" (ເພາະວ່າ (a-b) ຖືກແຍກອອກມາ ➔ ເຫຼືອ ("}<i>x</i>{" + "}<i>y</i>{") ➔ D = "}<i>y</i>{")"}</span>,
          <span key="5">{"(2) 5 (ເພາະວ່າ (p+q) ຖືກແຍກອອກມາ ➔ ເຫຼືອ (5 - "}<i>z</i>{") ➔ E = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"5 (ເພາະວ່າ "}<i>x</i>{"² - 5"}<i>x</i>{" + 6 = ("}<i>x</i>{" - 2)("}<i>x</i>{" - 3) ➔ a = 2, b = 3 (ຫຼື a=3, b=2) ➔ a + b = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"4 (ເພາະວ່າ ("}<i>x</i>{"+2)² - 3² = ("}<i>x</i>{"+2 - 3)("}<i>x</i>{"+2 + 3) = ("}<i>x</i>{" - 1)("}<i>x</i>{" + 5) ➔ a = 1, b = 5 ➔ b - a = 5 - 1 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8"><i>x</i>{" + 4 (ເພາະວ່າ 3"}<i>x</i>{"² + 12"}<i>x</i>{" = 3"}<i>x</i>{"("}<i>x</i>{" + 4))"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"5,000 (ເພາະວ່າ 75² - 25² = (75 - 25)(75 + 25) = 50 × 100 = 5,000)"}</span>
        ]
      }
    ],
    advice: "ການແຍກສ່ວນຄູນແມ່ນພື້ນຖານຫຼັກໃນການຄິດໄລ່ເລກສ່ວນພຶດຊະຄະນິດ ແລະ ການແກ້ສົມຜົນຂັ້ນສອງ ໝັ່ນຝຶກຝົນເປັນປະຈຳເດີ້!"
  }
};
