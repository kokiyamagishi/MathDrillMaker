import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit31Data: UnitData = {
  unitNumber: 31,
  unitTitle: "ພາກທີ V - ບົດທີ 31: ຮູບຄາງໝູ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມ, ຄຸນລັກສະນະຂອງຂ້າງ, ມຸມ ແລະ ສູດຄິດໄລ່ເນື້ອທີ່ ຂອງຮູບຄາງໝູ (Trapezoid) ພ້ອມທັງຮູບຄາງໝູສະເໝີ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 136-138",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະພື້ນຖານ ແລະ ມຸມ (Properties and Angles of Trapezoid)",
      keyPoint: {
        title: "ຄຸນລັກສະນະຂອງຮູບຄາງໝູ ແລະ ມຸມພາຍໃນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຄາງໝູ ABCD ແມ່ນຮູບສີ່ແຈທີ່ມີສອງຂ້າງພື້ນຂະໜານກັນ (AB // CD):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ສອງມຸມພາຍໃນທີ່ຕິດກັບຂ້າງດ່ຽວ (ບໍ່ແມ່ນຂ້າງພື້ນ) ບວກກັນເທົ່າກັບ 180°: "} <span className="math">{"A + D = 180°"}</span> {" ແລະ "} <span className="math">{"B + C = 180°"}</span><br />
              {"• ຮູບຄາງໝູສະເໝີ ມີສອງຂ້າງຂ້າງບໍ່ຂະໜານເທົ່າກັນ (AD = BC) ແລະ ສອງມຸມພື້ນເທົ່າກັນ (A = B, D = C)."}
            </div>

            {/* Trapezoid Angles SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບຄາງໝູສະເໝີ ABCD"}</span>
                <svg viewBox="0 0 220 100" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Trapezoid path */}
                  <polygon points="60,20 160,20 190,80 30,80" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Angle indicators */}
                  <path d="M 40,80 A 10,10 0 0,0 35,70" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
                  <text x="45" y="75" fill="#D32F2F" fontSize="8">{"60°"}</text>

                  <path d="M 180,80 A 10,10 0 0,1 185,70" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
                  <text x="165" y="75" fill="#D32F2F" fontSize="8">{"60°"}</text>

                  {/* Labels */}
                  <text x="60" y="15" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="160" y="15" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"B"}</text>
                  <text x="195" y="93" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"C"}</text>
                  <text x="25" y="93" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"D"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງຈື່ໄວ້ວ່າ ມຸມພາຍໃນສອງມຸມທີ່ຢູ່ຕິດຂ້າງ AD ຫຼື BC ບວກກັນອອກ 180° ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຂະໜາດຂອງມຸມໃນຮູບຄາງໝູລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ้ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບຄາງໝູມີສອງຂ້າງພື້ນຂະໜານກັນ. ມຸມຕິດຂ້າງດຽວກັນ (A ແລະ D) ບວກກັນເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃນຮູບຄາງໝູ ABCD (AB // CD), ຖ້າມຸມ A = 110°. ມຸມ D ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ໃນຮູບຄາງໝູ ABCD, ຖ້າມຸມ B = 80°. ມຸມ C ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ໃນຮູບຄາງໝູສະເໝີ, ສອງມຸມພື້ນເທົ່າກັນ (D = C). ຖ້າມຸມ D = 60°, ມຸມ C ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ໃນຮູບຄາງໝູສະເໝີ ABCD (AB // CD), ຖ້າມຸມ A = 120°. ມຸມ B ທີ່ຢູ່ຕິດກັນຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ເນື້ອທີ່ຮູບຄາງໝູ (Area of a Trapezoid)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ເນື້ອທີ່ຮູບຄາງໝູ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເນື້ອທີ່ຂອງຮູບຄາງໝູ ຄິດໄລ່ໄດ້ຈາກຜົນບວກຂອງພື້ນທັງສອງ ຄູນໃຫ້ລວງສູງ ແລ້ວຫານໃຫ້ 2:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                {"ເນື້ອທີ່ S = "}
                <Fraction num="(ພື້ນນ້ອຍ + ພື້ນໃຫຍ່) × ລວງສູງ" den="2" />
              </span><br />
              <span style={{ fontSize: "1.15rem", marginTop: "6px", display: "inline-block" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>{"ພື້ນນ້ອຍ = 6 cm, ພື້ນໃຫຍ່ = 10 cm, ລວງສູງ = 5 cm ➔ S = ((6 + 10) × 5) / 2 = 40 cm²"}
              </span>
            </div>

            {/* Trapezoid Dimension Guide SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7", fontSize: "1.15rem", color: "#4A148C" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "100%" }}>
                <span>{"ແຜນວາດຂະໜາດຮູບຄາງໝູ"}</span>
                <svg viewBox="0 0 220 100" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  <polygon points="60,20 160,20 190,80 30,80" fill="none" stroke="#7B1FA2" strokeWidth="1.5" />
                  
                  {/* Height line */}
                  <line x1="60" y1="20" x2="60" y2="80" stroke="#E65100" strokeWidth="1.5" strokeDasharray="3,3" />
                  <rect x="60" y="74" width="6" height="6" fill="none" stroke="#E65100" strokeWidth="1" />

                  {/* Labels */}
                  <text x="110" y="15" fill="#7B1FA2" fontSize="8" textAnchor="middle">{"ພື້ນນ້ອຍ = 6 cm"}</text>
                  <text x="110" y="93" fill="#7B1FA2" fontSize="8" textAnchor="middle">{"ພື້ນໃຫຍ່ = 10 cm"}</text>
                  <text x="65" y="54" fill="#E65100" fontSize="8">{"h = 5 cm"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມບວກພື້ນນ້ອຍ ແລະ ພື້ນໃຫຍ່ເຂົ້າກັນກ່ອນ ແລ້ວຈຶ່ງຄູນໃຫ້ລວງສູງ ແລະ ຫານໃຫ້ 2 ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບຄາງໝູໃນແຕ່ລະຂໍ້ລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າພື້ນນ້ອຍ = 6 cm, ພື້ນໃຫຍ່ = 10 cm, ລວງສູງ = 5 cm. ເນື້ອທີ່ຂອງຮູບຄາງໝູຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າພື້ນນ້ອຍ = 8 cm, ພື້ນໃຫຍ່ = 12 cm, ລວງສູງ = 6 cm. ເນື້ອທີ່ຂອງຮູບຄາງໝູຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າພື້ນນ້ອຍ = 5 cm, ພື້ນໃຫຍ່ = 9 cm, ລວງສູງ = 4 cm. ເນື້ອທີ່ຂອງຮູບຄາງໝູຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າພື້ນນ້ອຍ = 7 cm, ພື້ນໃຫຍ່ = 13 cm, ລວງສູງ = 8 cm. ເນື້ອທີ່ຂອງຮູບຄາງໝູຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າພື້ນນ້ອຍ = 4.5 cm, ພື້ນໃຫຍ່ = 7.5 cm, ລວງສູງ = 4 cm. ເນື້ອທີ່ຂອງຮູບຄາງໝູຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ສູດເນື້ອທີ່ຮູບຄາງໝູ ເພື່ອຍ້າຍພົດແກ້ຫາລວງສູງ ຫຼື ຄວາມຍາວພື້ນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາລວງສູງຈາກເນື້ອທີ່ຮູບຄາງໝູ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເນື້ອທີ່ຂອງຮູບຄາງໝູແມ່ນ 45 cm², ມີພື້ນນ້ອຍ = 7 cm ແລະ ພື້ນໃຫຍ່ = 11 cm. ຈົ່ງຊອກຫາລວງສູງ h ຂອງຮູບຄາງໝູນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: h ="}</span>
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
              {"ຊອກຫາຄວາມຍາວພື້ນໃຫຍ່ຈາກເນື້ອທີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເນື້ອທີ່ຮູບຄາງໝູແມ່ນ 36 cm², ມີລວງສູງ h = 4 cm, ພື້ນນ້ອຍ = 6 cm. ຈົ່ງຊອກຫາຄວາມຍາວພື້ນໃຫຍ່ 𝑥 ຂອງຮູບຄາງໝູນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            {"ເສັ້ນເນັ່ງຈອມຂອງຮູບຄາງໝູສະເໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບຄາງໝູສະເໝີ ABCD, ຖ້າເສັ້ນເນັ່ງຈອມ AC = 9 cm. ເສັ້ນເນັ່ງຈອມ BD ຈະຍາວຈັກ cm? (ຄຸນລັກສະນະ: ສອງເສັ້ນເນັ່ງຈອມຂອງຮູບຄາງໝູສະເໝີແມ່ນເທົ່າກັນ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: BD ="}</span>
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
            {"ຄິດໄລ່ລວງຮອບຂອງຮູບຄາງໝູສະເໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບຄາງໝູສະເໝີໜຶ່ງມີພື້ນນ້ອຍ = 6 cm, ພື້ນໃຫຍ່ = 12 cm, ແລະ ມີສອງຂ້າງທີ່ບໍ່ຂະໜານຍາວ AD = BC = 5 cm. ຈົ່ງຊອກຫາລວງຮອບທັງໝົດຂອງມັນ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
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
          <span key="1">{"(1) 180° (ເພາະວ່າມຸມພາຍໃນທີ່ຕິດຂ້າງດຽວກັນບວກກັນອອກ 180°)"}</span>,
          <span key="2">{"(2) 70° (ເພາະວ່າ 110° + D = 180° ➔ D = 70°)"}</span>,
          <span key="3">{"(3) 100° (ເພາະວ່າ 80° + C = 180° ➔ C = 100°)"}</span>,
          <span key="4">{"(4) 60° (ເພາະວ່າໃນຮູບຄາງໝູສະເໝີ ສອງມຸມພື້ນ D ແລະ C ແມ່ນເທົ່າກັນ)"}</span>,
          <span key="5">{"(5) 120° (ເພາະວ່າໃນຮູບຄາງໝູສະເໝີ ສອງມຸມພື້ນ A ແລະ B ແມ່ນເທົ່າກັນ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 40 cm² (S = ((6 + 10) × 5) / 2 = 16 × 5 / 2 = 40 cm²)"}</span>,
          <span key="7">{"(2) 60 cm² (S = ((8 + 12) × 6) / 2 = 20 × 6 / 2 = 60 cm²)"}</span>,
          <span key="8">{"(3) 28 cm² (S = ((5 + 9) × 4) / 2 = 14 × 4 / 2 = 28 cm²)"}</span>,
          <span key="9">{"(4) 80 cm² (S = ((7 + 13) × 8) / 2 = 20 × 8 / 2 = 80 cm²)"}</span>,
          <span key="10">{"(5) 24 cm² (S = ((4.5 + 7.5) × 4) / 2 = 12 × 4 / 2 = 24 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"5 (ເພາະວ່າ ((7 + 11) × h) / 2 = 45 ➔ 9h = 45 ➔ h = 5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"12 (ເພາະວ່າ ((6 + 𝑥) × 4) / 2 = 36 ➔ 2(6 + 𝑥) = 36 ➔ 6 + 𝑥 = 18 ➔ 𝑥 = 12 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"9 cm (ເພາະວ່າເສັ້ນເນັ່ງຈອມຂອງຮູບຄາງໝູສະເໝີມີຄວາມຍາວເທົ່າກັນ AC = BD = 9 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"28 cm (ເພາະວ່າລວງຮອບ = ພື້ນນ້ອຍ + ພື້ນໃຫຍ່ + AD + BC = 6 + 12 + 5 + 5 = 28 cm)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການຄິດໄລ່ເນື້ອທີ່ ແລະ ຄຸນລັກສະນະມຸມຂອງຮູບຄາງໝູ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດໄດ້ຢ່າງແຕກສານເດີ້!"
  }
};
