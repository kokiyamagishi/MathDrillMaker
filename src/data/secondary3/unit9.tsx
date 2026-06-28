import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit9Data: UnitData = {
  unitNumber: 9,
  unitTitle: "ພາກທີ II - ບົດທີ 9: ຫຼັກເກີນປີຕາກໍ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກເກີນປີຕາກໍ ໃນການຊອກຫາຄວາມຍາວຂ້າງຂອງຮູບສາມແຈສາກ ແລະ ການປະຍຸກໃຊ້ໃນຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 37-42",
  subSections: [
    {
      title: "1. ຫຼັກເກີນປີຕາກໍ ແລະ ການຊອກຫາຂ້າງກົງຊາກ",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານຂອງປີຕາກໍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈສາກໃດໜຶ່ງ, ກຳລັງສອງຂອງຄວາມຍາວຂ້າງກົງຊາກ (c) ເທົ່າກັບຜົນບວກກຳລັງສອງຂອງຄວາມຍາວສອງຂ້າງຕິດຊາກ (a ແລະ b):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold", fontSize: "1.375rem" }}>{"• ສູດພື້ນຖານ: "} <span className="math">{"c² = a² + b²"}</span></div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ການຊອກຫາຂ້າງກົງຊາກ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"c = √("} {"a² + b²"} {")"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ໃຫ້ a = 3, b = 4 ➔ c² = 3² + 4² = 9 + 16 = 25 ➔ c = √25 = 5."}</div>
            </div>

            {/* Pythagorean Theorem SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສາມແຈສາກ ແລະ ຂ້າງຕ່າງໆ"}</span>
                <svg viewBox="0 0 400 240" style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
                  {/* Right Triangle */}
                  <polygon points="50,20 50,100 150,100" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Right Angle Square */}
                  <rect x="100" y="180" width="20" height="20" fill="none" stroke="#2E7D32" strokeWidth="3" />
                  
                  {/* Labels */}
                  <text x="64" y="130" fill="#37474F" fontSize="20" fontWeight="bold">{"a (ຕິດຊາກ)"}</text>
                  <text x="190" y="224" fill="#37474F" fontSize="20" fontWeight="bold">{"b (ຕິດຊາກ)"}</text>
                  <text x="220" y="110" fill="#E65100" fontSize="20" fontWeight="bold">{"c (ກົງຊາກ)"}</text>

                  {/* Vertices */}
                  <text x="84" y="32" fill="#37474F" fontSize="20">{"A"}</text>
                  <text x="80" y="224" fill="#37474F" fontSize="20">{"B"}</text>
                  <text x="310" y="210" fill="#37474F" fontSize="20">{"C"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂ້າງກົງຊາກ c ແມ່ນຂ້າງທີ່ຍາວທີ່ສຸດໃນຮູບສາມແຈສາກ ແລະ ຢູ່ກົງກັນຂ້າມກັບມຸມສາກສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງກົງຊາກ c ຂອງຮູບສາມແຈສາກຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສາມແຈສາກທີ່ມີສອງຂ້າງຕິດຊາກ "} <span className="math">{"a = 3 cm, b = 4 cm"}</span> {". ຂ້າງກົງຊາກ c ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບສາມແຈສາກທີ່ມີສອງຂ້າງຕິດຊາກ "} <span className="math">{"a = 6 cm, b = 8 cm"}</span> {". ຂ້າງກົງຊາກ c ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບສາມແຈສາກທີ່ມີສອງຂ້າງຕິດຊາກ "} <span className="math">{"a = 5 cm, b = 12 cm"}</span> {". ຂ້າງກົງຊາກ c ແມ່ນຈັກ cm?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງກວດສອບວ່າ ຄວາມຍາວສາມຂ້າງຕໍ່ໄປນີ້ແມ່ນຮູບສາມແຈສາກຫຼືບໍ່? (ຕອບ 'ແມ່ນ' ຫຼື 'ບໍ່ແມ່ນ'): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄວາມຍາວສາມຂ້າງແມ່ນ "} <span className="math">{"8 cm, 15 cm, 17 cm"}</span> {" ປະກອບເປັນຮູບສາມແຈສາກໄດ້ຫຼືບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ความຍາວສາມຂ້າງແມ່ນ "} <span className="math">{"4 cm, 5 cm, 7 cm"}</span> {" ປະກອບເປັນຮູບສາມແຈສາກໄດ້ຫຼືບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຊອກຫາຂ້າງຕິດຊາກ ແລະ ເສັ້ນເນັ່ງຈອມ",
      keyPoint: {
        title: "ການຜັນປ່ຽນສູດປີຕາກໍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ຂ້າງກົງຊາກ c ແລະ ຂ້າງຕິດຊາກໜຶ່ງຂ້າງ, ເຮົາສາມາດຊອກຫາຂ້າງຕິດຊາກທີ່ເຫຼືອໄດ້ດັ່ງນີ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຊອກຫາຂ້າງ a: "} <span className="math">{"a² = c² - b² ➔ a = √(c² - b²)"}</span></div>
              <div>{"• ຊອກຫາຂ້າງ b: "} <span className="math">{"b² = c² - a² ➔ b = √(c² - a²)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ໃຫ້ c = 10, a = 6 ➔ b² = 10² - 6² = 100 - 36 = 64 ➔ b = √64 = 8."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາຄິດໄລ່ກຳລັງສອງ ແລະ ຮາກຂັ້ນສອງ ຕ້ອງລະວັງການລົບເລກໃຫ້ຖືກຕ້ອງກ່ອນຖອດຮາກເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງຕິດຊາກທີ່ເຫຼືອ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃຫ້ຂ້າງກົງຊາກ "} <span className="math">{"c = 10 cm"}</span> {" ແລະ ຂ້າງຕິດຊາກ "} <span className="math">{"a = 6 cm"}</span> {". ຂ້າງ b ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃຫ້ຂ້າງກົງຊາກ "} <span className="math">{"c = 13 cm"}</span> {" ແລະ ຂ້າງຕິດຊາກ "} <span className="math">{"b = 5 cm"}</span> {". ຂ້າງ a ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ໃຫ້ຂ້າງກົງຊາກ "} <span className="math">{"c = 25 cm"}</span> {" ແລະ ຂ້າງຕິດຊາກ "} <span className="math">{"a = 7 cm"}</span> {". ຂ້າງ b ແມ່ນຈັກ cm?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄວາມຍາວເສັ້ນເນັ່ງຈອມຂອງຮູບສີ່ແຈສາກ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກມີຄວາມກວ້າງ "} <span className="math">{"3 cm"}</span> {" ແລະ ຍາວ "} <span className="math">{"4 cm"}</span> {". ເສັ້ນເນັ່ງຈອມຈະມີຄວາມຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກມີຄວາມຍາວເສັ້ນເນັ່ງຈອມ "} <span className="math">{"10 cm"}</span> {" ແລະ ຄວາມກວ້າງ "} <span className="math">{"8 cm"}</span> {". ຄວາມຍາວຂອງມັນແມ່ນຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຫຼັກເກີນປີຕາກໍເຂົ້າໃນສາມມິຕິ ຫຼື ໂຈດບັນຫາຕົວຈິງ ໂດຍແຕ້ມຮູບສະແດງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາຂັ້ນໄດພາດຝາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຂັ້ນໄດອັນໜຶ່ງຍາວ "} <span className="math">{"5 m"}</span> {" ພາດໃສ່ຝາຕັ້ງຊື່. ຖ້າຕີນຂັ້ນໄດຫ່າງຈາກຝາ "} <span className="math">{"3 m"}</span> {". ປາຍຂັ້ນໄດຈະຢູ່ສູງຈາກພື້ນດິນຈັກແມັດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄວາມສູງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"m"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຄວາມຍາວເສັ້ນເນັ່ງຈອມກາງຫາວຂອງຮູບກ່ອງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຮູບກ່ອງສາກໜຶ່ງມີຂະໜາດ "} <span className="math">{"3 cm × 4 cm × 12 cm"}</span> {". ຈົ່ງຊອກຫາຄວາມຍາວຂອງເສັ້ນເນັ່ງຈອມກາງຫາວ ຂອງກ່ອງນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເສັ້ນເນັ່ງຈອມກາງຫາວແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ຄວາມສູງຂອງຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈທ່ຽງໜຶ່ງມີສອງຂ້າງເທົ່າກັນຍາວ "} <span className="math">{"5 cm"}</span> {" ແລະ ຂ້າງພື້ນຍາວ "} <span className="math">{"6 cm"}</span> {". ຈົ່ງຄິດໄລ່ຄວາມສູງ (h) ທີ່ຂີດຈາກຈອມຫາພື້ນ. (ຄຳແນະນຳ: ເສັ້ນສູງຈະແບ່ງພື້ນອອກເປັນສອງສ່ວນເທົ່າກັນ ພາກລະ 3 cm)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມສູງ h ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໄລຍະຫ່າງລະຫວ່າງສອງເມັດໃນລະບົບປະສານງານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈົ່ງຊອກຫາໄລຍະຫ່າງ d ຈາກເມັດເຄົ້າ "} <span className="math">{"O(0, 0)"}</span> {" ຫາເມັດ "} <span className="math">{"P(8, 6)"}</span> {" ຢູ່ເທິງໜ້າພຽງປະສານງານ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄລຍະຫ່າງ d ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1">{"(1) 5 cm (ເພາະວ່າ c² = 3² + 4² = 9 + 16 = 25 ➔ c = √25 = 5 cm)"}</span>,
          <span key="2">{"(2) 10 cm (ເພາະວ່າ c² = 6² + 8² = 36 + 64 = 100 ➔ c = √100 = 10 cm)"}</span>,
          <span key="3">{"(3) 13 cm (ເພາະວ່າ c² = 5² + 12² = 25 + 144 = 169 ➔ c = √169 = 13 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) ແມ່ນ (ຍ້ອນວ່າ 8² + 15² = 64 + 225 = 289, ແລະ 17² = 289 ➔ ເທົ່າກັນພໍດີ)"}</span>,
          <span key="5">{"(2) ບໍ່ແມ່ນ (ຍ້ອນວ່າ 4² + 5² = 16 + 25 = 41, ແຕ່ 7² = 49 ➔ ບໍ່ເທົ່າກັນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"4 m (ຈາກສົມຜົນປີຕາກໍ: h² = 5² - 3² = 25 - 9 = 16 ➔ h = √16 = 4 m)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"13 cm (ເສັ້ນເນັ່ງຈອມກາງຫາວ d² = 3² + 4² + 12² = 9 + 16 + 144 = 169 ➔ d = √169 = 13 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"4 cm (ແບ່ງພື້ນເປັນ 3 cm, ຄວາມສູງ h² = 5² - 3² = 25 - 9 = 16 ➔ h = √16 = 4 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"10 (ໄລຍະຫ່າງ d² = 8² + 6² = 64 + 36 = 100 ➔ d = √100 = 10)"}</span>
        ]
      }
    ],
    advice: "ຫຼັກເກີນປີຕາກໍແມ່ນໜຶ່ງໃນຫຼັກເກີນທີ່ເກົ່າແກ່ ແລະ ມີປະໂຫຍດຫຼາຍທີ່ສຸດໃນເລຂາຄະນິດ ມັນຖືກນຳໃຊ້ຢ່າງກວ້າງຂວາງໃນການກໍ່ສ້າງ, ການນຳທາງ ແລະ ດາລາສາດ ເຮັດໃຫ້ເຮົາແກ້ໄຂໂຈດຕ່າງໆໄດ້ຢ່າງງ່າຍດາຍເດີ້!"
  }
};
