import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit33Data: UnitData = {
  unitNumber: 33,
  unitTitle: "ພາກທີ V - ບົດທີ 33: ເສັ້ນທີ່ສຳຄັນໃນຮູບສາມແຈ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄຸນລັກສະນະຂອງເສັ້ນຈອມກາງ (Median), ເສັ້ນແບ່ງເຄິ່ງມຸມ (Angle Bisector), ເສັ້ນແບ່ງເຄິ່ງຕັ້ງສາກ (Perpendicular Bisector) ແລະ ເສັ້ນສູງ (Altitude)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 143-150",
  subSections: [
    {
      title: "1. ເສັ້ນຈອມກາງ ແລະ ຈຸດໃຈກາງຄວາມຖ່ວງ (Median and Centroid)",
      keyPoint: {
        title: "ຄຸນລັກສະນະອັດຕາສ່ວນ 2:1 ຂອງຈຸດ G",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຈອມກາງ ແມ່ນເສັ້ນຊື່ທີ່ຂີດຈາກຈອມຫາເມັດເຄິ່ງກາງຂອງຂ້າງກົງກັນຂ້າມ. 3 ເສັ້ນຈອມກາງຕັດກັນຢູ່ຈຸດ G:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ຈຸດ G ຈະແບ່ງເສັ້ນຈອມກາງ AM ອອກເປັນອັດຕາສ່ວນ "} <span className="math">{"2:1"}</span> {" ຈາກຈອມ:"}<br />
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginTop: "6px" }}>
                {"• "} <span style={{ fontWeight: "bold" }}>{"AG = "}</span> <Fraction num="2" den="3" /> {"AM, "}
                <span style={{ fontWeight: "bold", marginLeft: "12px" }}>{"GM = "}</span> <Fraction num="1" den="3" /> {"AM, ➔ "}
                <span style={{ fontWeight: "bold", color: "#D32F2F", marginLeft: "12px" }}>{"AG = 2 × GM"}</span>
              </span>
            </div>

            {/* Triangle Median SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນຈອມກາງ AM ແລະ ຈຸດ G (ອັດຕາສ່ວນ 2:1)"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Triangle path */}
                  <polygon points="100,20 180,100 20,100" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Median line AM */}
                  <line x1="100" y1="20" x2="100" y2="100" stroke="#E65100" strokeWidth="1.5" />
                  
                  {/* Centroid G */}
                  <circle cx="100" cy="73" r="3" fill="#37474F" />
                  <text x="108" y="75" fill="#37474F" fontSize="9" fontWeight="bold">{"G"}</text>

                  {/* Vertices & Midpoint */}
                  <text x="100" y="14" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  <text x="185" y="105" fill="#37474F" fontSize="10" fontWeight="bold">{"B"}</text>
                  <text x="15" y="105" fill="#37474F" fontSize="10" fontWeight="bold" textAnchor="end">{"C"}</text>
                  <text x="100" y="112" fill="#E65100" fontSize="9" textAnchor="middle">{"M"}</text>

                  {/* Equal marks on BC */}
                  <line x1="55" y1="97" x2="65" y2="103" stroke="#2E7D32" strokeWidth="1.5" />
                  <line x1="135" y1="97" x2="145" y2="103" stroke="#2E7D32" strokeWidth="1.5" />

                  {/* Ratio guide markers */}
                  <text x="94" y="50" fill="#1565C0" fontSize="8" textAnchor="end">{"2"}</text>
                  <text x="94" y="90" fill="#D32F2F" fontSize="8" textAnchor="end">{"1"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຸດ G ຢູ່ໃກ້ກັບເມັດເຄິ່ງກາງຂ້າງ M ຫຼາຍກວ່າຈອມ A, ດັ່ງນັ້ນ AG ຈະຍາວເປັນ 2 ເທົ່າຂອງ GM ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງສ່ວນຕ່າງໆຈາກເສັ້ນຈອມກາງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈຸດ G ແບ່ງເສັ້ນຈອມກາງ AM ອອກເປັນອັດຕາສ່ວນ AG : GM ເທົ່າກັບເທົ່າໃດຈາກຈອມ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນຈອມກາງ AM ຍາວ 12 cm. ທ່ອນຍາວຈາກຈອມຫາຈຸດໃຈກາງຄວາມຖ່ວງ AG ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າສ່ວນເຄິ່ງກາງ GM ຍາວ 3 cm. ທ່ອນ AG ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າສ່ວນ AG = 10 cm. ທ່ອນເສັ້ນຈອມກາງ AM ທັງໝົດຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າສ່ວນ GM = 4 cm. ເສັ້ນຈອມກາງ AM ທັງໝົດຈະຍາວຈັກ cm?"}</span>
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
      title: "2. ເສັ້ນແບ່ງເຄິ່ງມຸມ ແລະ ເສັ້ນສູງ (Angle Bisectors & Altitudes)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຄຸນລັກສະນະຂອງເສັ້ນສຳຄັນອື່ນໆ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄຳອະທິບາຍ ແລະ ນິຍາມຂອງເສັ້ນຕ່າງໆໃນຮູບສາມແຈ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• "}<strong>{"ເສັ້ນແບ່ງເຄິ່ງມຸມ: "}</strong>{"ແມ່ນເສັ້ນຊື່ທີ່ຂີດຈາກຈອມ ແລະ ແບ່ງມຸມນັ້ນອອກເປັນສອງສ່ວນເທົ່າກັນສະເໝີ."}<br />
              {"• "}<strong>{"ເສັ້ນສູງ: "}</strong>{"ແມ່ນເສັ້ນຊື່ທີ່ຂີດຈາກຈອມມາຕັ້ງສາກ (90°) ກັບຂ້າງກົງກັນຂ້າມ."}<br />
              {"• "}<strong>{"ເສັ້ນແບ່ງເຄິ່ງຕັ້ງສາກ: "}</strong>{"ແມ່ນເສັ້ນຊື່ທີ່ຕັ້ງສາກ ແລະ ຕັດເຄິ່ງກາງຂ້າງຂອງຮູບສາມແຈ."}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໄລຍະຫ່າງຈາກຈຸດຕັດກັນຂອງ 3 ເສັ້ນແບ່ງເຄິ່ງຕັ້ງສາກ ຫາ 3 ຈອມ ຂອງຮູບສາມແຈຈະຍາວເທົ່າກັນສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄຸນລັກສະນະມຸມ ຫຼື ຄວາມຍາວລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC, ຖ້າ AD ແບ່ງເຄິ່ງມຸມ A ເຊິ່ງມຸມ A = 80°. ມຸມ BAD ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ AD ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ A. ຖ້າມຸມ BAD = 35°, ມຸມ A ທັງໝົດຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າ AH ແມ່ນເສັ້ນສູງໃນຮູບສາມແຈ ABC, ມຸມ AHB (ຕັ້ງສາກ) ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC ທີ່ມີ AH ແມ່ນເສັ້ນສູງ. ຖ້າມຸມ BAH = 40°, ມຸມ B ຈະເທົ່າກັບຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າຈຸດໃຈກາງວົງມົນແນບນອກ O ຫ່າງຈາກຈອມ A ຍາວ 5 cm. ໄລຍະຫ່າງຫາຈອມ B ຈະຍາວຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ອັດຕາສ່ວນ ແລະ ຄຸນລັກສະນະເສັ້ນຕັ້ງສາກເພື່ອຄິດໄລ່ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາ x ຈາກເສັ້ນຈອມກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າທ່ອນເສັ້ນຈອມກາງ AM ຍາວ "} <span className="math">{"3x cm"}</span>{", ໂດຍມີຈຸດ G ເຊິ່ງເຮັດໃຫ້ AG = 10 cm. ຈົ່ງຊອກຫາຄ່າຂອງ x. (AG = 2/3 AM)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
              {"ຊອກຫາ y ໃນຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈທ່ຽງ ABC (AB = AC), ເສັ້ນສູງ AH ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມຈອມ A. ຖ້າມຸມ BAH = 25°. ຈົ່ງຊອກຫາມຸມ B (ມຸມພື້ນ)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມຸມ B ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"°"}</span>
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
            {"ຊອກຫາສ່ວນຕ່າງຂອງເສັ້ນຈອມກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າເສັ້ນຈອມກາງ AM ຍາວ 18 cm, ຈົ່ງຊອກຫາສ່ວນຕ່າງລະຫວ່າງ AG ແລະ GM (AG - GM)."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: AG - GM ="}</span>
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
            {"ຄຸນລັກສະນະເສັ້ນແບ່ງເຄິ່ງຕັ້ງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໄລຍະຫ່າງຈາກຈຸດໃດໜຶ່ງເທິງເສັ້ນແບ່ງເຄິ່ງຕັ້ງສາກ ຫາສອງປາຍທ່ອນຊື່ຍາວເທົ່າກັນ. ຖ້າໄລຍະຫ່າງຫາປາຍໜຶ່ງແມ່ນ 8 cm, ໄລຍະຫ່າງຫາປາຍທີສອງຈະແມ່ນຈັກ cm?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຍາວ"}</span>
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
          <span key="1">{"(1) 2:1 (ອັດຕາສ່ວນຈາກຈອມຫາຈຸດໃຈກາງຄວາມຖ່ວງ ແລະ ຫາເມັດເຄິ່ງກາງແມ່ນ 2:1)"}</span>,
          <span key="2">{"(2) 8 cm (AG = 12 × 2/3 = 8 cm)"}</span>,
          <span key="3">{"(3) 6 cm (AG = 2 × GM = 2 × 3 = 6 cm)"}</span>,
          <span key="4">{"(4) 15 cm (AM = AG × 3/2 = 10 × 1.5 = 15 cm)"}</span>,
          <span key="5">{"(5) 12 cm (AM = 3 × GM = 3 × 4 = 12 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 40° (ເພາະວ່າມຸມ BAD = 80° / 2 = 40°)"}</span>,
          <span key="7">{"(2) 70° (ເພາະວ່າມຸມ A = 2 × BAD = 2 × 35° = 70°)"}</span>,
          <span key="8">{"(3) 90° (ເພາະວ່າເສັ້ນສູງ AH ຕັ້ງສາກກັບ BC, ມຸມ AHB = 90°)"}</span>,
          <span key="9">{"(4) 50° (ເພາະວ່າ B = 180° - (90° + 40°) = 50°)"}</span>,
          <span key="10">{"(5) 5 cm (ເພາະວ່າໄລຍະຫ່າງຫາທຸກໆຈອມແມ່ນເທົ່າກັນ OA = OB = 5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"5 (ເພາະວ່າ AG = 2/3 AM ➔ 10 = (2/3) × 3x ➔ 10 = 2x ➔ x = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"65 (ເພາະວ່າມຸມ AHB = 90° ➔ B = 180° - (90° + 25°) = 65°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"6 cm (ເພາະວ່າ AG = 18 × 2/3 = 12, GM = 18 × 1/3 = 6 ➔ 12 - 6 = 6 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"8 cm (ເພາະວ່າໄລຍະຫ່າງຫາສອງປາຍແມ່ນເທົ່າກັນສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການວິເຄາະເສັ້ນທີ່ສຳຄັນ ແລະ ອັດຕາສ່ວນຂອງຈຸດໃຈກາງຄວາມຖ່ວງ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດໄດ້ດີຂຶ້ນທຸກໆມື້ເດີ້!"
  }
};
