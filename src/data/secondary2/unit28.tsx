import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit28Data: UnitData = {
  unitNumber: 28,
  unitTitle: "ພາກທີ V - ບົດທີ 28: ຮູບສີ່ແຈຂະໜານ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມ, ຄຸນລັກສະນະຂອງຂ້າງ, ມຸມ ແລະ ເເສັ້ນເນັ່ງຈອມຂອງຮູບສີ່ແຈຂະໜານ ພ້ອມທັງສາມາດຄິດໄລ່ຫາຄ່າຕ່າງໆໄດ້",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 120-125",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະຂອງຂ້າງ ແລະ ມຸມ (Properties of Sides and Angles)",
      keyPoint: {
        title: "ຄຸນລັກສະນະພື້ນຖານຂອງຮູບສີ່ແຈຂະໜານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສີ່ແຈຂະໜານ ABCD ມີຄຸນລັກສະນະຫຼັກດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ສອງຂ້າງກົງກັນຂ້າມມີຄວາມຍາວເທົ່າກັນ: "} <span className="math">{"AB = CD"}</span> {" ແລະ "} <span className="math">{"AD = BC"}</span><br />
              {"• ສອງມຸມກົງກັນຂ້າມມີຂະໜາດເທົ່າກັນ: "} <span className="math">{"A = C"}</span> {" ແລະ "} <span className="math">{"B = D"}</span><br />
              {"• ສອງມຸມທີ່ຢູ່ຕິດກັນເທິງຂ້າງດຽວກັນບວກກັນເທົ່າກັບ "} <span className="math">{"180°"}</span> {" (ຕົວຢ່າງ: "} <span className="math">{"A + B = 180°"}</span>{")"}
            </div>

            {/* Parallelogram Side & Angle SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສີ່ແຈຂະໜານ ABCD"}</span>
                <svg viewBox="0 0 220 100" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Parallelogram path */}
                  <polygon points="50,20 200,20 170,80 20,80" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Labels */}
                  <text x="50" y="15" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="205" y="15" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"B"}</text>
                  <text x="175" y="93" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"C"}</text>
                  <text x="15" y="93" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"D"}</text>

                  {/* Parallel indicators (arrows) */}
                  <path d="M 120,20 L 125,17 M 120,20 L 125,23" fill="none" stroke="#2E7D32" strokeWidth="1.5" />
                  <path d="M 90,80 L 95,77 M 90,80 L 95,83" fill="none" stroke="#2E7D32" strokeWidth="1.5" />

                  {/* Side length samples */}
                  <text x="125" y="32" fill="#1565C0" fontSize="8" textAnchor="middle">{"8 cm"}</text>
                  <text x="95" y="75" fill="#1565C0" fontSize="8" textAnchor="middle">{"8 cm"}</text>

                  {/* Angle arc sample */}
                  <path d="M 30,80 A 10,10 0 0,0 35,70" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
                  <text x="35" y="75" fill="#D32F2F" fontSize="8">{"70°"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງຈື່ໄວ້ວ່າ ມຸມທີ່ຢູ່ກົງກັນຂ້າມແມ່ນເທົ່າກັນສະເໝີ ແຕ່ມຸມທີ່ຢູ່ຕິດກັນເທິງເສັ້ນດຽວກັນບວກກັນອອກ 180° ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວ ຫຼື ຂະໜາດຂອງມຸມທີ່ກຳນົດລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ໃນຮູບສີ່ແຈຂະໜານ ABCD, ຖ້າຂ້າງ AB = 8 cm. ຂ້າງ CD ທີ່ຢູ່ກົງກັນຂ້າມຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ໃນຮູບສີ່ແຈຂະໜານ ABCD, ຖ້າມຸມ A = 70°. ມຸມ C ທີ່ຢູ່ກົງກັນຂ້າມຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ມຸມຕິດກັນ A ແລະ B ບວກກັນເທົ່າກັບ 180°. ຖ້າມຸມ A = 65°, ມຸມ B ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ໃນຮູບສີ່ແຈຂະໜານ ABCD, ຖ້າມຸມ D = 120°. ມຸມ B ທີ່ຢູ່ກົງກັນຂ້າມຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span>{"ຖ້າຂ້າງ AD = 5.5 cm. ຂ້າງ BC ທີ່ຢູ່ກົງກັນຂ້າມຈະຍາວຈັກ cm?"}</span>
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
      title: "2. ເສັ້ນເນັ່ງຈອມ ແລະ ເມັດຕັດກັນ (Diagonals and Midpoints)",
      keyPoint: {
        title: "ຄຸນລັກສະນະຂອງເສັ້ນເນັ່ງຈອມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນເນັ່ງຈອມທັງສອງຂອງຮູບສີ່ແຈຂະໜານ ຕັດກັນຢູ່ເມັດເຄິ່ງກາງ O ຂອງແຕ່ລະເສັ້ນສະເໝີ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ເມັດ O ຈະແບ່ງເຄິ່ງເສັ້ນເນັ່ງຈອມ "} <span className="math">{"AC"}</span> {" ອອກເປັນ "} <span className="math">{"AO = OC = "} <Fraction num="AC" den="2" /></span><br />
              {"• ເມັດ O ຈະແບ່ງເຄິ່ງເສັ້ນເນັ່ງຈອມ "} <span className="math">{"BD"}</span> {" ອອກເປັນ "} <span className="math">{"BO = OD = "} <Fraction num="BD" den="2" /></span>
            </div>

            {/* Diagonal Midpoint SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7", fontSize: "1.15rem", color: "#4A148C" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "100%" }}>
                <span>{"ເສັ້ນເນັ່ງຈອມຕັດກັນຢູ່ເມັດເຄິ່ງກາງ O"}</span>
                <svg viewBox="0 0 220 100" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  <polygon points="50,20 200,20 170,80 20,80" fill="none" stroke="#7B1FA2" strokeWidth="1.5" />
                  
                  {/* Diagonals */}
                  <line x1="50" y1="20" x2="170" y2="80" stroke="#E65100" strokeWidth="1.5" />
                  <line x1="20" y1="80" x2="200" y2="20" stroke="#0288D1" strokeWidth="1.5" />
                  
                  {/* Midpoint O */}
                  <circle cx="110" cy="50" r="3" fill="#37474F" />
                  <text x="115" y="47" fill="#37474F" fontSize="9" fontWeight="bold">{"O"}</text>

                  {/* Vertices */}
                  <text x="50" y="15" fill="#37474F" fontSize="8">{"A"}</text>
                  <text x="205" y="15" fill="#37474F" fontSize="8">{"B"}</text>
                  <text x="175" y="90" fill="#37474F" fontSize="8">{"C"}</text>
                  <text x="15" y="90" fill="#37474F" fontSize="8">{"D"}</text>

                  {/* Equal marks sample */}
                  <text x="75" y="32" fill="#E65100" fontSize="7">{"6 cm"}</text>
                  <text x="145" y="72" fill="#E65100" fontSize="7">{"6 cm"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເສັ້ນເນັ່ງຈອມທັງສອງບໍ່ໄດ້ຍາວເທົ່າກັນເດີ້ ແຕ່ແຕ່ລະເສັ້ນຈະຖືກແບ່ງອອກເປັນສອງສ່ວນທີ່ເທົ່າກັນດ້ວຍເມັດ O!",
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
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ AC ຍາວ 12 cm. ສ່ວນແບ່ງ AO ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຖ້າເສັ້ນເນັ່ງຈອມ BD ຍາວ 16 cm. ສ່ວນແບ່ງ BO ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຖ້າສ່ວນແບ່ງເຄິ່ງ AO = 5 cm. ເສັ້ນເນັ່ງຈອມ AC ທັງໝົດຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ຖ້າສ່ວນແບ່ງເຄິ່ງ DO = 7.5 cm. ເສັ້ນເນັ່ງຈອມ BD ທັງໝົດຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span>{"ຖ້າ AO = 4 cm ແລະ BO = 6 cm. ຜົນບວກຂອງ AO + BO ຈະເທົ່າກັບຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຕັ້ງສົມຜົນໃຫ້ຂ້າງກົງກັນຂ້າມ ຫຼື ມຸມກົງກັນຂ້າມເທົ່າກັນ ເພື່ອແກ້ຫາຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ 𝑥 ຈາກຄວາມຍາວຂ້າງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສີ່ແຈຂະໜານ ABCD, ມີຂ້າງ "} <span className="math">{"AB = 3𝑥 - 5 cm"}</span> {" ແລະ "} <span className="math">{"CD = 10 cm"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ເພື່ອເຮັດໃຫ້ສອງຂ້າງນີ້ເທົ່າກັນ."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ 𝑦 ຈາກຂະໜາດຂອງມຸມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າມຸມ A = "} <span className="math">{"2𝑦 + 10°"}</span> {" ແລະ ມຸມກົງກັນຂ້າມ C = "} <span className="math">{"80°"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑦."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑦 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ຄິດໄລ່ລວງຮອບຂອງຮູບສີ່ແຈຂະໜານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຮູບສີ່ແຈຂະໜານ ABCD ມີຂ້າງ AB = 10 cm ແລະ AD = 6 cm. ຈົ່ງຊອກຫາລວງຮອບທັງໝົດຂອງຮູບສີ່ແຈຂະໜານນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຊອກຫາຜົນບວກຂອງສ່ວນເຄິ່ງເສັ້ນເນັ່ງຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າເສັ້ນເນັ່ງຈອມ AC + BD = 24 cm, ໂດຍມີ O ແມ່ນເມັດຕັດກັນເຄິ່ງກາງ. ຈົ່ງຊອກຫາຜົນບວກຂອງ AO + BO."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: AO + BO ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
          <span key="1">{"(1) 8 cm (ເພາະວ່າຂ້າງກົງກັນຂ້າມ AB = CD = 8 cm)"}</span>,
          <span key="2">{"(2) 70° (ເພາະວ່າມຸມກົງກັນຂ້າມ A = C = 70°)"}</span>,
          <span key="3">{"(3) 115° (ເພາະວ່າ A + B = 180° ➔ B = 180° - 65° = 115°)"}</span>,
          <span key="4">{"(4) 120° (ເພາະວ່າມຸມກົງກັນຂ້າມ B = D = 120°)"}</span>,
          <span key="5">{"(5) 5.5 cm (ເພາະວ່າຂ້າງ AD = BC = 5.5 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 6 cm (ເພາະວ່າ AO = AC / 2 = 12 / 2 = 6 cm)"}</span>,
          <span key="7">{"(2) 8 cm (ເພາະວ່າ BO = BD / 2 = 16 / 2 = 8 cm)"}</span>,
          <span key="8">{"(3) 10 cm (ເພາະວ່າ AC = 2 * AO = 2 * 5 = 10 cm)"}</span>,
          <span key="9">{"(4) 15 cm (ເພาະວ່າ BD = 2 * DO = 2 * 7.5 = 15 cm)"}</span>,
          <span key="10">{"(5) 10 cm (ເພາະວ່າ AO + BO = 4 + 6 = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"5 (ເພາະວ່າ 3𝑥 - 5 = 10 ➔ 3𝑥 = 15 ➔ 𝑥 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"35 (ເພາະວ່າ 2𝑦 + 10 = 80 ➔ 2𝑦 = 70 ➔ 𝑦 = 35)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"32 cm (ເພາະວ່າລວງຮອບ = 2 * (AB + AD) = 2 * (10 + 6) = 32 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"12 cm (ເພາະວ່າ AO + BO = AC / 2 + BD / 2 = (AC + BD) / 2 = 24 / 2 = 12 cm)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນທວນຄືນຄຸນລັກສະນະເລຂາຄະນິດຂອງຮູບສີ່ແຈຂະໜານ ຈະຊ່ວຍໃຫ້ເຮົາພິສູດ ແລະ ແກ້ເລກໄດ້ຢ່າງວ່ອງໄວ ແລະ ຖືກຕ້ອງເດີ້!"
  }
};
