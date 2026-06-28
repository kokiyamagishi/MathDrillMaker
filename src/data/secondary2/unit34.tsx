import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit34Data: UnitData = {
  unitNumber: 34,
  unitTitle: "ພາກທີ V - ບົດທີ 34: ລວງຮອບ ແລະ ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຮູບດອກຈັນ",
  unitGoal: "ຝຶກທັກສະການຄິດໄລ່ລວງຮອບ ແລະ ເນື້ອທີ່ ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຮູບດອກຈັນ ຢ່າງຊຳນານ ພ້ອມທັງແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 151-155",
  subSections: [
    {
      title: "1. ຄິດໄລ່ເນື້ອທີ່ ແລະ ລວງຮອບພື້ນຖານ (Basic Perimeter & Area)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ລວງຮອບ ແລະ ເນື້ອທີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕາຕະລາງສູດຄິດໄລ່ທີ່ຕ້ອງຈື່ໃຫ້ໄດ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຮູບສີ່ແຈສາກ: ເນື້ອທີ່ S = ຍາວ × ກວ້າງ | ລວງຮອບ P = 2 × (ຍາວ + ກວ້າງ)"}</div>
              <div>{"• ຮູບຈະຕຸລັດ: ເນື້ອທີ່ S = ຂ້າງ × ຂ້າງ | ລວງຮອບ P = 4 × ຂ້າງ"}</div>
              <div>{"• ຮູບດອກຈັນ: ເນື້ອທີ່ S = (ເສັ້ນເນັ່ງຈອມ 1 × ເສັ້ນເນັ່ງຈອມ 2) / 2 | ລວງຮອບ P = 4 × ຂ້າງ"}</div>
            </div>

            {/* Geometry Formula Chart SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງສູດເນື້ອທີ່ (Area Formulas)"}</span>
                <svg viewBox="0 0 360 85" style={{ width: "100%", maxWidth: "320px", height: "auto" }}>
                  {/* Rectangle */}
                  <rect x="20" y="10" width="80" height="40" fill="none" stroke="#2E7D32" strokeWidth="1.5" />
                  <text x="60" y="68" fill="#37474F" fontSize="9" textAnchor="middle" fontWeight="bold">{"ສີ່ແຈສາກ: a×b"}</text>
                  
                  {/* Square */}
                  <rect x="145" y="10" width="50" height="40" fill="none" stroke="#2E7D32" strokeWidth="1.5" />
                  <text x="170" y="68" fill="#37474F" fontSize="9" textAnchor="middle" fontWeight="bold">{"ຈະຕຸລັດ: a²"}</text>

                  {/* Rhombus */}
                  <polygon points="290,10 320,30 290,50 260,30" fill="none" stroke="#2E7D32" strokeWidth="1.5" />
                  <line x1="260" y1="30" x2="320" y2="30" stroke="#E65100" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="290" y1="10" x2="290" y2="50" stroke="#0288D1" strokeWidth="1" strokeDasharray="2,2" />
                  <text x="290" y="68" fill="#37474F" fontSize="9" textAnchor="middle" fontWeight="bold">{"ດອກຈັນ: (d₁×d₂)/2"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງອ່ານຫົວໜ່ວຍໃຫ້ລະອຽດສະເໝີ ເຊັ່ນ ຄວາມຍາວແມ່ນ cm, ເນື້ອທີ່ແມ່ນ cm² ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາເນື້ອທີ່ ຫຼື ລວງຮອບພື້ນຖານລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກມີຂ້າງກວ້າງ 4 cm ແລະ ຍາວ 6 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກມີຂ້າງກວ້າງ 4 cm ແລະ ຍາວ 6 cm. ລວງຮອບຂອງມັນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຮູບຈະຕຸລັດມີຄວາມຍາວຂ້າງ 5 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຮູບຈະຕຸລັດມີຄວາມຍາວຂ້າງ 5 cm. ລວງຮອບຂອງມັນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກມີລວງຮອບ 30 cm, ຖ້າມີຂ້າງກວ້າງ 5 cm. ຂ້າງຍາວຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເນື້ອທີ່ຮູບດອກຈັນ ແລະ ໂຈດປະຍຸກ (Rhombus & Applied Problems)",
      keyPoint: {
        title: "ການປະຍຸກໃຊ້ສູດໃນໂຈດບັນຫາເລຂາຄະນິດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຄິດໄລ່ຫາເນື້ອທີ່ ແລະ ຂ້າງຂອງຮູບດອກຈັນ ໂດຍການພົວພັນກັບເສັ້ນເນັ່ງຈອມ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຮູບດອກຈັນມີເສັ້ນເນັ່ງຈອມ 6 cm ແລະ 8 cm. ເນື້ອທີ່ແມ່ນ:"}<br />
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginTop: "6px" }}>
                {"S = "} <Fraction num="6 × 8" den="2" /> {" = 24 cm²"}
              </span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບດອກຈັນ ແລະ ຮູບຈະຕຸລັດມີ 4 ຂ້າງຍາວເທົ່າກັນສະເໝີ ດັ່ງນັ້ນລວງຮອບແມ່ນ 4 × ข້າງ ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ໂຈດບັນຫາ ແລະ ຄິດໄລ່ຫາຄ່າທີ່ຖືກຕ້ອງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຮູບດອກຈັນມີເສັ້ນເນັ່ງຈອມ 6 cm ແລະ 8 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຮູບດອກຈັນມີເສັ້ນເນັ່ງຈອມ 10 cm ແລະ 12 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າຮູບດອກຈັນມີຂ້າງຍາວ 5 cm. ລວງຮອບທັງໝົດຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າຮູບດອກຈັນມີເນື້ອທີ່ 15 cm² ໂດຍມີເສັ້ນເນັ່ງຈອມໜຶ່ງຍາວ 5 cm. ເສັ້ນເນັ່ງຈອມທີສອງຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າເນື້ອທີ່ຮູບຈະຕຸລັດແມ່ນ 100 cm². ລວງຮອບຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະຄວາມສຳພັນລະຫວ່າງສອງຮູບເລຂາຄະນິດ ເພື່ອຕັ້ງສົມຜົນແກ້ຫາຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມທຽບເນື້ອທີ່ຮູບຈະຕຸລັດ ແລະ ຮູບສີ່ແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຈະຕຸລັດໜຶ່ງມີຂ້າງຍາວ 6 cm. ຮູບສີ່ແຈສາກໜຶ່ງມີເນື້ອທີ່ເທົ່າກັບເນື້ອທີ່ຮູບຈະຕຸລັດນັ້ນ. ຖ້າຮູບສີ່ແຈສາກມີຂ້າງກວ້າງ 4 cm, ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ 𝑥. (6² = 4𝑥)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
              {"ສົມທຽບລວງຮອບຮູບຈະຕຸລັດ ແລະ ຮູບດອກຈັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າລວງຮອບຂອງຮູບຈະຕຸລັດທີ່ມີຂ້າງ 8 cm ແມ່ນເທົ່າກັບລວງຮອບຂອງຮູບດອກຈັນ. ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງ 𝑦 ຂອງຮູບດອກຈັນນັ້ນ."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑦 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດບັນຫາຊີວິດປະຈຳວັນ (ຄ່າປູພື້ນຫ້ອງ): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຫ້ອງຮຽນຮູບສີ່ແຈສາກມີຂະໜາດ 6 m × 8 m. ຖ້າຄ່າປູພື້ນລາຄາ 10,000 ກີບຕໍ່ຕາແມັດ (m²). ຖາມວ່າຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບເພື່ອປູພື້ນຫ້ອງນີ້?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຕ້ອງຈ່າຍເງິນທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ກີບ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ເນື້ອທີ່ດອກຈັນຜ່ານເຄິ່ງເສັ້ນເນັ່ງຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບດອກຈັນ ABCD ທີ່ມີເມັດຕັດກັນ O. ຖ້າສ່ວນແບ່ງເຄິ່ງເສັ້ນເນັ່ງຈອມ AO = 3 cm, BO = 4 cm (ເສັ້ນເນັ່ງຈອມເຕັມແມ່ນ AC = 6, BD = 8). ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບດອກຈັນນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"cm²"}</span>
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
          <span key="1">{"(1) 24 cm² (ເພາະວ່າ S = 4 × 6 = 24 cm²)"}</span>,
          <span key="2">{"(2) 20 cm (ເພາະວ່າ P = 2 × (4 + 6) = 20 cm)"}</span>,
          <span key="3">{"(3) 25 cm² (ເພາະວ່າ S = 5 × 5 = 25 cm²)"}</span>,
          <span key="4">{"(4) 20 cm (ເພາະວ່າ P = 4 × 5 = 20 cm)"}</span>,
          <span key="5">{"(5) 10 cm (ເພາະວ່າ P = 2 × (5 + 𝑦) = 30 ➔ 𝑦 = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 24 cm² (S = (6 × 8) / 2 = 24 cm²)"}</span>,
          <span key="7">{"(2) 60 cm² (S = (10 × 12) / 2 = 60 cm²)"}</span>,
          <span key="8">{"(3) 20 cm (P = 4 × 5 = 20 cm)"}</span>,
          <span key="9">{"(4) 6 cm (ເພາະວ່າ (5 × d2) / 2 = 15 ➔ 5 × d2 = 30 ➔ d2 = 6 cm)"}</span>,
          <span key="10">{"(5) 40 cm (ເພາະວ່າຂ້າງແມ່ນ 10 cm ➔ P = 4 × 10 = 40 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"9 (ເພາະວ່າ 6² = 36 cm² ➔ 4 × 𝑥 = 36 ➔ 𝑥 = 9 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"8 (ເພາະວ່າລວງຮອບຮູບຈະຕຸລັດ = 4 × 8 = 32 cm ➔ ຂ້າງຮູບດອກຈັນ = 32 / 4 = 8 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"480000 (ເນື້ອທີ່ = 6 × 8 = 48 m² ➔ ຄ່າໃຊ້ຈ່າຍ = 48 × 10,000 = 480,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"24 cm² (AC = 6 cm, BD = 8 cm ➔ S = (6 × 8) / 2 = 24 cm²)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການຄິດໄລ່ລວງຮອບ ແລະ ເນື້ອທີ່ ຂອງຮູບສີ່ແຈປະເພດຕ່າງໆຢ່າງສະໝໍ່າສະເໝີ ຈະຊ່ວຍໃຫ້ເຮົາມີທັກສະທີ່ດີ ແລະ ວ່ອງໄວໃນການແກ້ເລກເດີ້!"
  }
};
