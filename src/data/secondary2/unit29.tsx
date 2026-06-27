import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit29Data: UnitData = {
  unitNumber: 29,
  unitTitle: "ພາກທີ V - ບົດທີ 29: ຮູບສີ່ແຈສາກ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນิຍາມ, ຄຸນລັກສະນະຂອງຂ້າງ, ມຸມ ແລະ ເສັ້ນເນັ່ງຈອມ ຂອງຮູບສີ່ແຈສາກ (Rectangle) ພ້ອມທັງສາມາດຄິດໄລ່ເນື້ອທີ່ ແລະ ລວງຮອບໄດ້",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 126-130",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະຂອງຂ້າງ ແລະ ມຸມສາກ (Properties of Sides and Right Angles)",
      keyPoint: {
        title: "ຄຸນລັກສະນະພື້ນຖານຂອງຮູບສີ່ແຈສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສີ່ແຈສາກ ABCD ແມ່ນຮູບສີ່ແຈຂະໜານທີ່ມີຄຸນລັກສະນະພິເສດດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ທຸກໆມຸມໃນຮູບສີ່ແຈສາກແມ່ນມຸມສາກ: "} <span className="math">{"A = B = C = D = 90°"}</span><br />
              {"• ສອງຂ້າງກົງກັນຂ້າມມີຄວາມຍາວເທົ່າກັນ: "} <span className="math">{"AB = CD"}</span> {" ແລະ "} <span className="math">{"AD = BC"}</span><br />
              {"• ເນື້ອທີ່ "} <span className="math">{"S = AB × AD"}</span>{"; ລວງຮອບ "} <span className="math">{"P = 2 × (AB + AD)"}</span>
            </div>

            {/* Rectangle with Right Angle Marks SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສີ່ແຈສາກ ABCD"}</span>
                <svg viewBox="0 0 220 100" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Rectangle path */}
                  <rect x="30" y="20" width="160" height="60" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Right angle markers */}
                  <rect x="30" y="20" width="8" height="8" fill="none" stroke="#D32F2F" strokeWidth="1" />
                  <rect x="182" y="20" width="8" height="8" fill="none" stroke="#D32F2F" strokeWidth="1" />
                  <rect x="30" y="72" width="8" height="8" fill="none" stroke="#D32F2F" strokeWidth="1" />
                  <rect x="182" y="72" width="8" height="8" fill="none" stroke="#D32F2F" strokeWidth="1" />

                  {/* Labels */}
                  <text x="25" y="15" fill="#37474F" fontSize="10" fontWeight="bold">{"A"}</text>
                  <text x="195" y="15" fill="#37474F" fontSize="10" fontWeight="bold">{"B"}</text>
                  <text x="195" y="93" fill="#37474F" fontSize="10" fontWeight="bold">{"C"}</text>
                  <text x="25" y="93" fill="#37474F" fontSize="10" fontWeight="bold">{"D"}</text>

                  {/* Dimensions sample */}
                  <text x="110" y="15" fill="#1565C0" fontSize="8" textAnchor="middle">{"ຍາວ = 10 cm"}</text>
                  <text x="15" y="54" fill="#1565C0" fontSize="8" textAnchor="end">{"ກວ້າງ = 6 cm"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກຂອງ 4 ມຸມໃນຮູບສີ່ແຈສາກຈະເທົ່າກັບ 360° ສະເໝີ ເພາະວ່າ 90° × 4 = 360° ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວ, ເນື້ອທີ່ ຫຼື ລວງຮອບຂອງຮູບສີ່ແຈສາກລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜົນບວກຂອງ 4 ມຸມໃນຮູບສີ່ແຈສາກແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າຂ້າງຍາວ AB = 10 cm. ຂ້າງກົງກັນຂ້າມ CD ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າຂ້າງກວ້າງ AD = 6 cm. ຂ້າງກົງກັນຂ້າມ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າຂ້າງ AB = 8 cm ແລະ AD = 5 cm. ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ ABCD ຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າຂ້າງ AB = 8 cm ແລະ AD = 5 cm. ລວງຮອບຂອງຮູບສີ່ແຈສາກ ABCD ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເສັ້ນເນັ່ງຈອມຂອງຮູບສີ່ແຈສາກ (Diagonals of Rectangle)",
      keyPoint: {
        title: "ຄຸນລັກສະນະເສັ້ນເນັ່ງຈອມໃນຮູບສີ່ແຈສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສີ່ແຈສາກມີເສັ້ນເນັ່ງຈອມສອງເສັ້ນທີ່ມີຄວາມຍາວເທົ່າກັນສະເໝີ ແລະ ຕັດກັນຢູ່ເມັດເຄິ່ງກາງ O:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ສອງເສັ້ນເນັ່ງຈອມເທົ່າກັນ: "} <span className="math">{"AC = BD"}</span><br />
              {"• ສ່ວນເຄິ່ງເສັ້ນເນັ່ງຈອມເທົ່າກັນທັງໝົດ: "} <span className="math">{"AO = OC = BO = OD = "} <Fraction num="AC" den="2" /></span>
            </div>

            {/* Rectangle Diagonals SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7", fontSize: "1.15rem", color: "#4A148C" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "100%" }}>
                <span>{"ສອງເສັ້ນເນັ່ງຈອມ AC = BD ແລະ ຕັດກັນຢູ່ O"}</span>
                <svg viewBox="0 0 220 100" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  <rect x="30" y="20" width="160" height="60" fill="none" stroke="#7B1FA2" strokeWidth="1.5" />
                  
                  {/* Diagonals */}
                  <line x1="30" y1="20" x2="190" y2="80" stroke="#E65100" strokeWidth="1.5" />
                  <line x1="30" y1="80" x2="190" y2="20" stroke="#0288D1" strokeWidth="1.5" />
                  
                  {/* Midpoint O */}
                  <circle cx="110" cy="50" r="3" fill="#37474F" />
                  <text x="110" y="44" fill="#37474F" fontSize="9" fontWeight="bold" textAnchor="middle">{"O"}</text>

                  {/* Vertices */}
                  <text x="22" y="18" fill="#37474F" fontSize="8">{"A"}</text>
                  <text x="195" y="18" fill="#37474F" fontSize="8">{"B"}</text>
                  <text x="195" y="90" fill="#37474F" fontSize="8">{"C"}</text>
                  <text x="22" y="90" fill="#37474F" fontSize="8">{"D"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເນື່ອງຈາກເສັ້ນເນັ່ງຈອມທັງສອງຍາວເທົ່າກັນສະເໝີ ດັ່ງນັ້ນ AO ຈະເທົ່າກັບ BO ສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວຂອງເສັ້ນເນັ່ງຈອມ ຫຼື ສ່ວນແບ່ງເຄິ່ງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ AC ຍາວ 10 cm. ເສັ້ນເນັ່ງຈອມ BD ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ AC ຍາວ 12 cm. ສ່ວນແບ່ງເຄິ່ງ AO ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ BD ຍາວ 12 cm. ສ່ວນແບ່ງເຄິ່ງ BO ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າສ່ວນແບ່ງເຄິ່ງ AO = 4.5 cm. ເສັ້ນເນັ່ງຈອມ BD ທັງໝົດຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າ AO = 5 cm. ຜົນບວກຂອງສອງສ່ວນເຄິ່ງເສັ້ນເນັ່ງຈອມ AO + BO ຈະເທົ່າກັບຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ສູດຄິດໄລ່ ແລະ ຄຸນລັກສະນະຂອງຮູບສີ່ແຈສາກ ເພື່ອແກ້ໄຂສົມຜົນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາລວງຍາວຈາກເນື້ອທີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ ABCD ແມ່ນ 48 cm² ໂດຍມີລວງກວ້າງ AD = 6 cm. ຈົ່ງຊອກຫາລວງຍາວ x ຂອງຂ້າງ AB. (ເນື້ອທີ່ = ຍາວ × ກວ້າງ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ y ຈາກເສັ້ນເນັ່ງຈອມທີ່ເທົ່າກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເສັ້ນເນັ່ງຈອມ AC = "} <span className="math">{"3y - 2 cm"}</span> {" ແລະ BD = "} <span className="math">{"13 cm"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ y."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: y ="}</span>
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
            {"ຊອກຫາລວງຮອບຈາກເນື້ອທີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສີ່ແຈສາກໜຶ່ງມີເນື້ອທີ່ 50 cm² ແລະ ມີລວງກວ້າງແມ່ນ 5 cm. ຈົ່ງຊອກຫາລວງຮອບຂອງຮູບສີ່ແຈສາກນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
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
            {"ນຳໃຊ້ທິດສະດີປີຕາກໍໃນຮູບສີ່ແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຮູບສີ່ແຈສາກ ABCD ມີ AB = 4 cm, AD = 3 cm. ເສັ້ນເນັ່ງຈອມ AC ຈະຍາວຈັກ cm? (AC² = AB² + AD²)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: AC ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
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
          <span key="1">{"(1) 360° (ເພາະວ່າມຸມສາກ 90° × 4 = 360°)"}</span>,
          <span key="2">{"(2) 10 cm (ເພາະວ່າຂ້າງກົງກັນຂ້າມ AB = CD = 10 cm)"}</span>,
          <span key="3">{"(3) 6 cm (ເພາະວ່າ AD = BC = 6 cm)"}</span>,
          <span key="4">{"(4) 40 cm² (S = AB × AD = 8 × 5 = 40 cm²)"}</span>,
          <span key="5">{"(5) 26 cm (P = 2 × (8 + 5) = 26 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 10 cm (ເພາະວ່າສອງເສັ້ນເນັ່ງຈອມມີຄວາມຍາວເທົ່າກັນ AC = BD = 10 cm)"}</span>,
          <span key="7">{"(2) 6 cm (ເພາະວ່າ AO = AC / 2 = 12 / 2 = 6 cm)"}</span>,
          <span key="8">{"(3) 6 cm (ເພາະວ່າ BO = BD / 2 = 12 / 2 = 6 cm)"}</span>,
          <span key="9">{"(4) 9 cm (ເພາະວ່າ BD = AC = 2 × AO = 2 × 4.5 = 9 cm)"}</span>,
          <span key="10">{"(5) 10 cm (ເພາະວ່າ AO = BO = 5 cm ➔ AO + BO = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"8 (ເພາະວ່າ 6 × x = 48 ➔ x = 8 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"5 (ເພາະວ່າ 3y - 2 = 13 ➔ 3y = 15 ➔ y = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"30 cm (ລວງຍາວ = 50 / 5 = 10 cm; ລວງຮອບ = 2 × (10 + 5) = 30 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"5 cm (ເພາະວ່າ AC² = 4² + 3² = 16 + 9 = 25 ➔ AC = 5 cm)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການຄິດໄລ່ເນື້ອທີ່, ລວງຮອບ ແລະ ເສັ້ນເນັ່ງຈອມ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດຂອງຮູບສີ່ແຈສາກໄດ້ຢ່າງເລິກເຊິ່ງເດີ້!"
  }
};
