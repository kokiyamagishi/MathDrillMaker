import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit30Data: UnitData = {
  unitNumber: 30,
  unitTitle: "ພາກທີ V - ບົດທີ 30: ຮູບດອກຈັນ ແລະ ຮູບຈະຕຸລັດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມ, ຄຸນລັກສະນະພິເສດ ແລະ ສູດຄິດໄລ່ຂອງຮູບດອກຈັນ (Rhombus) ແລະ ຮູບຈະຕຸລັດ (Square) ຢ່າງເລິກເຊິ່ງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 131-135",
  subSections: [
    {
      title: "1. ຮູບດອກຈັນ ແລະ ຄຸນລັກສະນະພິເສດ (Rhombus & Properties)",
      keyPoint: {
        title: "ຄຸນລັກສະນະ ແລະ ສູດຄິດໄລ່ຂອງຮູບດອກຈັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບດອກຈັນ ABCD ແມ່ນຮູບສີ່ແຈຂະໜານທີ່ມີຄຸນລັກສະນະພິເສດດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ທັງ 4 ຂ້າງມີຄວາມຍາວເທົ່າກັນ: "} <span className="math">{"AB = BC = CD = DA"}</span><br />
              {"• ເສັ້ນເນັ່ງຈອມທັງສອງຕັ້ງສາກກັນຢູ່ເມັດເຄິ່ງກາງ O: "} <span className="math">{"AC ⊥ BD"}</span><br />
              {"• ສູດຄິດໄລ່ເນື້ອທີ່: "} <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>{"S = "} <Fraction num="AC × BD" den="2" /></span>
            </div>

            {/* Rhombus with Orthogonal Diagonals SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບດອກຈັນ ABCD (ເສັ້ນເນັ່ງຈອມຕັ້ງສາກ)"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Rhombus path */}
                  <polygon points="100,10 180,60 100,110 20,60" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Diagonals */}
                  <line x1="100" y1="10" x2="100" y2="110" stroke="#E65100" strokeWidth="1.5" />
                  <line x1="20" y1="60" x2="180" y2="60" stroke="#0288D1" strokeWidth="1.5" />

                  {/* Right angle mark at center O */}
                  <rect x="100" y="60" width="8" height="8" fill="none" stroke="#D32F2F" strokeWidth="1" />
                  <circle cx="100" cy="60" r="2.5" fill="#37474F" />

                  {/* Labels */}
                  <text x="100" y="8" fill="#37474F" fontSize="9" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="187" y="63" fill="#37474F" fontSize="9" fontWeight="bold">{"B"}</text>
                  <text x="100" y="119" fill="#37474F" fontSize="9" fontWeight="bold" textAnchor="middle">{"C"}</text>
                  <text x="10" y="63" fill="#37474F" fontSize="9" fontWeight="bold" textAnchor="end">{"D"}</text>
                  <text x="107" y="55" fill="#37474F" fontSize="8">{"O"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເສັ້ນເນັ່ງຈອມຂອງຮູບດອກຈັນຕັ້ງສາກກັນສະເໝີ ດັ່ງນັ້ນມຸມທີ່ຈຸດຕັດກັນ O ຈະແມ່ນ 90° ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວ, ເນື້ອທີ່ ຫຼື ມຸມຂອງຮູບດອກຈັນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າຮູບດອກຈັນ ABCD ມີຂ້າງ AB = 6 cm. ຂ້າງ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ມຸມລະຫວ່າງເສັ້ນເນັ່ງຈອມ AC ແລະ BD ຂອງຮູບດອກຈັນແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ AC = 8 cm, BD = 6 cm. ເນື້ອທີ່ຂອງຮູບດອກຈັນຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າຄວາມຍາວຂ້າງ AB = 7 cm. ລວງຮອບຂອງຮູບດອກຈັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ AC = 10 cm, BD = 12 cm. ເນື້ອທີ່ຂອງຮູບດອກຈັນຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຮູບຈະຕຸລັດ ແລະ ຄຸນລັກສະນະພິເສດ (Square & Properties)",
      keyPoint: {
        title: "ຄຸນລັກສະນະ ແລະ ສູດຄິດໄລ່ຂອງຮູບຈະຕຸລັດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຈະຕຸລັດແມ່ນຮູບສີ່ແຈສາກທີ່ມີ 4 ຂ້າງເທົ່າກັນ (ຫຼື ຮູບດອກຈັນທີ່ມີ 4 ມຸມສາກ):"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ທຸກໆຂ້າງມີຄວາມຍາວເທົ່າກັນ ແລະ ທຸກໆມຸມແມ່ນ 90°."}<br />
              {"• ສອງເສັ້ນເນັ່ງຈອມຍາວເທົ່າກັນ ແລະ ຕັ້ງສາກກັນຢູ່ເມັດເຄິ່ງກາງ O."}<br />
              {"• ສູດຄິດໄລ່ເນື້ອທີ່: S = ຂ້າງ × ຂ້າງ; ສູດຄິດໄລ່ລວງຮອບ: P = 4 × ຂ້າງ"}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບຈະຕຸລັດເປັນຮູບເລຂາຄະນິດທີ່ສົມບູນແບບທີ່ສຸດ ເພາະມັນລວມເອົາຄຸນລັກສະນະຂອງທັງຮູບສີ່ແຈສາກ ແລະ ຮູບດອກຈັນໄວ້ນຳກັນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວ, ເນື້ອທີ່ ຫຼື ລວງຮອບຂອງຮູບຈະຕຸລັດລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າຂ້າງຮູບຈະຕຸລັດຍາວ 5 cm. ລວງຮອບຂອງມັນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າຂ້າງຮູບຈະຕຸລັດຍາວ 6 cm. ເນື້ອທີ່ຂອງມັນຈະແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ AC = 8 cm. ສ່ວນແບ່ງເຄິ່ງ AO ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າເນື້ອທີ່ຂອງຮູບຈະຕຸລັດແມ່ນ 64 cm². ຄວາມຍາວຂ້າງຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າຂ້າງຂອງຮູບຈະຕຸລັດຍາວ 1.2 cm. ລວງຮອບຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ສູດເນື້ອທີ່ ແລະ ລວງຮອບເພື່ອຕັ້ງສົມຜົນຊອກຫາຕົວລັບຢ່າງຖືກຕ້ອງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາເສັ້ນເນັ່ງຈອມຮູບດອກຈັນຈາກເນື້ອທີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເນື້ອທີ່ຂອງຮູບດອກຈັນ ABCD ແມ່ນ 30 cm² ໂດຍມີເສັ້ນເນັ່ງຈອມໜຶ່ງ AC = 10 cm. ຈົ່ງຊອກຫາຄວາມຍາວຂອງເສັ້ນເນັ່ງຈອມ BD (𝑥 cm)."}
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
              {"ຊອກຫາຂ້າງຂອງຮູບຈະຕຸລັດຈາກລວງຮອບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າລວງຮອບຂອງຮູບຈະຕຸລັດແມ່ນ 36 cm. ຈົ່ງຊອກຫາຄວາມຍາວຂ้าง 𝑥 ຂອງຮູບຈະຕຸລັດນັ້ນ. (ລວງຮອບ = 4𝑥)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            {"ຊອກຫາເນື້ອທີ່ຮູບຈະຕຸລັດຜ່ານສູດຮູບດອກຈັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຮູບຈະຕຸລັດໜຶ່ງມີເສັ້ນເນັ່ງຈອມ AC = 10 cm. ເນື້ອທີ່ຂອງມັນສາມາດຄິດໄລ່ຄືຮູບດອກຈັນໄດ້ (ເພາະເສັ້ນເນັ່ງຈອມຕັ້ງສາກ ແລະ ຍາວເທົ່າກັນ AC = BD). ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບຈະຕຸລັດນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"cm²"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຂະໜາດຂອງມຸມຕັດກັນຂອງເສັ້ນເນັ່ງຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບດອກຈັນ ABCD ທີ່ມີເສັ້ນເນັ່ງຈອມ AC ແລະ BD ຕັດກັນຢູ່ O. ມຸມ AOB ຈະມີຂະໜາດຈັກອົງສາ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມຸມ AOB ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"°"}</span>
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
          <span key="1">{"(1) 6 cm (ເພາະວ່າທັງ 4 ຂ້າງຂອງຮູບດອກຈັນມີຄວາມຍາວເທົ່າກັນ)"}</span>,
          <span key="2">{"(2) 90° (ເພາະວ່າເສັ້ນເນັ່ງຈອມຂອງຮູບດອກຈັນຕັ້ງສາກກັນສະເໝີ)"}</span>,
          <span key="3">{"(3) 24 cm² (ເນື້ອທີ່ = (8 × 6) / 2 = 24 cm²)"}</span>,
          <span key="4">{"(4) 28 cm (ລວງຮອບ = 4 × 7 = 28 cm)"}</span>,
          <span key="5">{"(5) 60 cm² (ເນື້ອທີ່ = (10 × 12) / 2 = 60 cm²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 20 cm (ລວງຮອບ = 4 × 5 = 20 cm)"}</span>,
          <span key="7">{"(2) 36 cm² (ເນື້ອທີ່ = 6 × 6 = 36 cm²)"}</span>,
          <span key="8">{"(3) 4 cm (AO = AC / 2 = 8 / 2 = 4 cm)"}</span>,
          <span key="9">{"(4) 8 cm (ເພາະວ່າ 8 × 8 = 64 cm²)"}</span>,
          <span key="10">{"(5) 4.8 cm (ລວງຮອບ = 4 × 1.2 = 4.8 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"6 (ເພາະວ່າ (10 × BD) / 2 = 30 ➔ 5 × BD = 30 ➔ BD = 6 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"9 (ເພາະວ່າ 4 × 𝑥 = 36 ➔ 𝑥 = 9 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"50 cm² (ເນື້ອທີ່ = (10 × 10) / 2 = 50 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"90° (ເພາະວ່າເສັ້ນເນັ່ງຈອມຂອງຮູບດອກຈັນຕັ້ງສາກກັນຢູ່ O ດັ່ງນັ້ນ ມຸມ AOB = 90°)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການວິເຄາະຄຸນລັກສະນະເສັ້ນເນັ່ງຈອມທີ່ຕັ້ງສາກກັນ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດຂອງຮູບດອກຈັນ ແລະ ຮູບຈະຕຸລັດໄດ້ດີຂຶ້ນເດີ້!"
  }
};
