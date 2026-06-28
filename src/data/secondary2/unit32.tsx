import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit32Data: UnitData = {
  unitNumber: 32,
  unitTitle: "ພາກທີ V - ບົດທີ 32: ຮູບສາມແຈ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຜົນບວກມຸມໃນຂອງຮູບສາມແຈ, ຄຸນລັກສະນະຂອງຮູບສາມແຈທ່ຽງ, ຮູບສາມແຈສະເໝີ ແລະ ສາມແຈສາກ ພ້ອມທັງຝຶກຄິດໄລ່ຫາຄ່າຕ່າງໆ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 139-142",
  subSections: [
    {
      title: "1. ຜົນບວກມຸມໃນຂອງຮູບສາມແຈ (Sum of Interior Angles of Triangle)",
      keyPoint: {
        title: "ຫຼັກການຜົນບວກມຸມໃນຂອງຮູບສາມແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຜົນບວກຂອງສາມມຸມພາຍໃນຂອງຮູບສາມແຈໃດໜຶ່ງ ຈະເທົ່າກັບ 180° ສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ສໍາລັບຮູບສາມແຈ ABC ໃດໆ: "} <span className="math">{"A + B + C = 180°"}</span><br />
              {"• ຕົວຢ່າງ: ຖ້າມຸມ A = 50° ແລະ B = 60° ➔ ມຸມ C = 180° - (50° + 60°) = 70°"}
            </div>

            {/* Triangle Angle Sum SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສາມແຈ ABC ແລະ ຜົນບວກມຸມໃນ 180°"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Triangle path */}
                  <polygon points="100,20 170,100 30,100" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Angle arcs */}
                  <path d="M 93,35 A 12,12 0 0,0 107,35" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
                  <text x="100" y="47" fill="#D32F2F" fontSize="8" textAnchor="middle">{"50°"}</text>

                  <path d="M 45,100 A 15,15 0 0,1 42,85" fill="none" stroke="#1565C0" strokeWidth="1.5" />
                  <text x="50" y="93" fill="#1565C0" fontSize="8">{"60°"}</text>

                  <path d="M 155,100 A 15,15 0 0,0 158,85" fill="none" stroke="#FF8F00" strokeWidth="1.5" />
                  <text x="135" y="93" fill="#FF8F00" fontSize="8">{"70°"}</text>

                  {/* Labels */}
                  <text x="100" y="14" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="178" y="105" fill="#37474F" fontSize="10" fontWeight="bold">{"B"}</text>
                  <text x="18" y="105" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="end">{"C"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກມຸມໃນຂອງຮູບສາມແຈແມ່ນຄົງທີ່ 180° ສະເໝີ ບໍ່ວ່າຮູບສາມແຈຈະມີຮູບຮ່າງແບບໃດກໍຕາມເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມໃນຮູບສາມແຈລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຜົນບວກຂອງ 3 ມຸມໃນຮູບສາມແຈໃດໜຶ່ງ ຈະເທົ່າກັບຈັກອົງສາສະເໝີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC, ຖ້າມຸມ A = 50° ແລະ B = 60°. ມຸມ C ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ໃນຮູບສາມແຈສາກ ABC ທີ່ມີມຸມ A = 90° ແລະ B = 35°. ມຸມ C ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC, ຖ້າມຸມ A = 45° ແລະ B = 45°. ມຸມ C ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC, ຖ້າມຸມ A = 100° ແລະ B = 30°. ມຸມ C ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຮູບສາມແຈທ່ຽງ ແລະ ຮູບສາມແຈສະເໝີ (Isosceles & Equilateral Triangles)",
      keyPoint: {
        title: "ຄຸນລັກສະນະຂອງຮູບສາມແຈພິເສດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສາມແຈທ່ຽງ ແລະ ຮູບສາມແຈສະເໝີ ມີຄຸນລັກສະນະມຸມສະເພາະດັ່ງນີ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ຮູບສາມແຈທ່ຽງ: ມີສອງຂ້າງທ່ຽງເທົ່າກັນ ແລະ ສອງມຸມພື້ນເທົ່າກັນ. ຖ້າມຸມຈອມແມ່ນ "} <span className="math">{"A"}</span>{", ມຸມພື້ນ "} <span className="math">{"B = C = "} <Fraction num="180° - A" den="2" /></span><br />
              {"• ຮູບສາມແຈສະເໝີ: ມີສາມຂ້າງເທົ່າກັນ ແລະ ສາມມຸມພາຍໃນເທົ່າກັນ ເຊິ່ງແຕ່ລະມຸມເທົ່າກັບ "} <span className="math">{"60°"}</span> {" ສະເໝີ."}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາຄິດໄລ່ມຸມພື້ນຂອງຮູບສາມແຈທ່ຽງ ໃຫ້ເອົາ 180° ລົບມຸມຈອມອອກກ່ອນ ແລ້ວຈຶ່ງຫານ 2 ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວ ຫຼື ຂະໜາດຂອງມຸມລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຮູບສາມແຈທ່ຽງມີມຸມຈອມເທົ່າກັບ 40°. ມຸມພື້ນແຕ່ລະມຸມຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າມຸມຈອມຂອງຮູບສາມແຈທ່ຽງແມ່ນ 80°. ມຸມພື້ນແຕ່ລະມຸມຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ຖ້າມຸມພື້ນໜຶ່ງຂອງຮູບສາມແຈທ່ຽງແມ່ນ 55°. ມຸມຈອມຂອງມັນຈະແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ມຸມແຕ່ລະມຸມຂອງຮູບສາມແຈສະເໝີ (3 ຂ້າງເທົ່າກັນ) ມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ຖ້າຄວາມຍາວຂ້າງຂອງຮູບສາມແຈສະເໝີແມ່ນ 7 cm. ລວງຮອບທັງໝົດຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຕັ້ງສົມຜົນໂດຍນຳໃຊ້ຜົນບວກມຸມໃນ 180° ເພື່ອແກ້ຫາຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ 𝑥 ຈາກອັດຕາສ່ວນຂອງມຸມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ມີຂະໜາດຂອງມຸມແມ່ນ "} <span className="math">{"A = 𝑥"}</span>{", "} <span className="math">{"B = 2𝑥"}</span> {" ແລະ "} <span className="math">{"C = 3𝑥"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥. (𝑥 + 2𝑥 + 3𝑥 = 180)"}
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
              {"ຊອກຫາ 𝑦 ໃນຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າມຸມພື້ນຂອງຮູບສາມແຈທ່ຽງແມ່ນ "} <span className="math">{"3𝑦 + 10°"}</span> {" ແລະ ມຸມຈອມແມ່ນ "} <span className="math">{"100°"}</span>{". ຈົ່ງຊອກຫາຄ່າຂອງ 𝑦. (ມຸມພື້ນ = 40°)"}
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
            {"ນຳໃຊ້ທິດສະດີມຸມນອກຂອງຮູບສາມແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ມຸມນອກຂອງຮູບສາມແຈ ເທົ່າກັບຜົນບວກຂອງສອງມຸມໃນທີ່ບໍ່ຕິດກັບມັນ. ຖ້າມຸມໃນສອງມຸມແມ່ນ 50° ແລະ 60°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມນອກທີ່ຕິດກັບມຸມໃນທີສາມ."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມຸມນອກແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"°"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ລວງຮອບຂອງຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຮູບສາມແຈທ່ຽງໜຶ່ງມີຂ້າງພື້ນຍາວ 8 cm, ແລະ ມີຂ້າງທ່ຽງຍາວ 6 cm. ຈົ່ງຊອກຫາລວງຮອບທັງໝົດຂອງຮູບສາມແຈທ່ຽງນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
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
          <span key="1">{"(1) 180° (ເພາະວ່າຜົນບວກມຸມໃນຂອງຮູບສາມແຈໃດໆແມ່ນ 180°)"}</span>,
          <span key="2">{"(2) 70° (180° - (50° + 60°) = 70°)"}</span>,
          <span key="3">{"(3) 55° (180° - (90° + 35°) = 55°)"}</span>,
          <span key="4">{"(4) 90° (180° - (45° + 45°) = 90°)"}</span>,
          <span key="5">{"(5) 50° (180° - (100° + 30°) = 50°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 70° (ເພາະວ່າ (180° - 40°) / 2 = 140° / 2 = 70°)"}</span>,
          <span key="7">{"(2) 50° (ເພາະວ່າ (180° - 80°) / 2 = 100° / 2 = 50°)"}</span>,
          <span key="8">{"(3) 70° (ເພາະວ່າມຸມຈອມ = 180° - 2 × 55° = 180° - 110° = 70°)"}</span>,
          <span key="9">{"(4) 60° (ເພາະວ່າ 180° / 3 = 60°)"}</span>,
          <span key="10">{"(5) 21 cm (ລວງຮອບ = 3 × 7 = 21 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"30 (ເພາະວ່າ 𝑥 + 2𝑥 + 3𝑥 = 180 ➔ 6𝑥 = 180 ➔ 𝑥 = 30)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"10 (ເພາະວ່າມຸມພື້ນແມ່ນ (180 - 100) / 2 = 40° ➔ 3𝑦 + 10 = 40 ➔ 3𝑦 = 30 ➔ 𝑦 = 10)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"110° (ເພາະວ່າມຸມນອກ = 50° + 60° = 110°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"20 cm (ລວງຮອບ = 8 + 6 + 6 = 20 cm)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການວິເຄາະ ແລະ ຄິດໄລ່ມຸມໃນຂອງຮູບສາມແຈ ຈະຊ່ວຍໃຫ້ເຮົາພັດທະນາທັກສະເລຂາຄະນິດໄດ້ດີຂຶ້ນທຸກໆມື້ເດີ້!"
  }
};
