import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit10Data: UnitData = {
  unitNumber: 10,
  unitTitle: "ພາກທີ VII - ບົດທີ 24: ມຸມແນບວົງມົນ ແລະ ມຸມໃຈກາງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຄຸນລັກສະນະຂອງມຸມແນບວົງມົນ (Inscribed Angle) ແລະ ມຸມໃຈກາງ (Central Angle) ຂອງວົງມົນໃນການຊອກຫາຂະໜາດຂອງມຸມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 115-120",
  subSections: [
    {
      title: "1. ຄວາມສຳພັນລະຫວ່າງມຸມແນບວົງມົນ ແລະ ມຸມໃຈກາງ (Relationship Between Inscribed and Central Angles)",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານຂອງມຸມໃນວົງມົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມຸມໃຈກາງແມ່ນມຸມທີ່ມີຈອມຢູ່ໃຈກາງຂອງວົງມົນ, ສ່ວນມຸມແນບວົງມົນແມ່ນມຸມທີ່ມີຈອມຢູ່ເທິງເສັ້ນຮອບວົງມົນ. ເມື່ອທັງສອງມຸມຮັບອາກ (Arc) ດຽວກັນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold", fontSize: "1.375rem" }}>{"• ຫຼັກການ: ມຸມໃຈກາງ = 2 × ມຸມແນບວົງມົນ"}</div>
              <div>{"• ສູດຄິດໄລ່: "} <span className="math">{"θ_central = 2 × θ_inscribed"}</span></div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ຖ້າມຸມແນບວົງມົນແມ່ນ 30°, ມຸມໃຈກາງທີ່ຮັບອາກດຽວກັນຈະແມ່ນ 2 × 30° = 60°."}</div>
            </div>

            {/* Circle Angles SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງມຸມໃຈກາງ (2θ) ແລະ ມຸມແນບວົງມົນ (θ)"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Circle */}
                  <circle cx="100" cy="60" r="45" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Center O */}
                  <circle cx="100" cy="60" r="2.5" fill="#37474F" />
                  <text x="96" y="54" fill="#37474F" fontSize="8" fontWeight="bold">{"O (ໃຈກາງ)"}</text>
                  
                  {/* Arc points A and C */}
                  {/* A = (100 - 45*cos(30), 60 + 45*sin(30)) = (61, 82) */}
                  {/* C = (100 + 45*cos(30), 60 + 45*sin(30)) = (139, 82) */}
                  {/* B = (100, 15) */}
                  <polygon points="100,60 61,82 139,82" fill="none" stroke="#1565C0" strokeWidth="1" />
                  <polygon points="100,15 61,82 139,82" fill="none" stroke="#E65100" strokeWidth="1.5" />

                  {/* Vertices text */}
                  <text x="96" y="10" fill="#37474F" fontSize="8">{"B"}</text>
                  <text x="50" y="87" fill="#37474F" fontSize="8">{"A"}</text>
                  <text x="143" y="87" fill="#37474F" fontSize="8">{"C"}</text>
                  
                  {/* Angle indicators */}
                  <text x="98" y="27" fill="#E65100" fontSize="8" fontWeight="bold">{"θ"}</text>
                  <text x="96" y="73" fill="#1565C0" fontSize="8" fontWeight="bold">{"2θ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ມຸມແນບວົງມົນທຸກໆມຸມທີ່ຮັບອາກດຽວກັນ ຈະມີຂະໜາດເທົ່າກັນສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຂະໜາດຂອງມຸມໃນວົງມົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າມຸມແນບວົງມົນມີຂະໜາດ "} <span className="math">{"40°"}</span> {", ມຸມໃຈກາງທີ່ຮັບອາກດຽວກັນຈະມີຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າມຸມໃຈກາງມີຂະໜາດ "} <span className="math">{"110°"}</span> {", ມຸມແນບວົງມົນທີ່ຮັບອາກດຽວກັນຈະມີຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າມຸມແນບວົງມົນມີຂະໜາດ "} <span className="math">{"25°"}</span> {", ມຸມໃຈກາງທີ່ຮັບອາກດຽວກັນຈະມີຈັກອົງສາ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງມຸມໃນວົງມົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສອງມຸມແນບວົງມົນທີ່ຮັບອາກດຽວກັນ ຈະມີຂະໜາດເປັນແນວໃດຕໍ່ກັນ? (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ')"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ມຸມແນບວົງມົນທີ່ຮັບອາກເຄິ່ງວົງມົນ (ອາກ 180°) ຈະມີຂະໜາດຈັກອົງສາສະເໝີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ມຸມແນບເຄິ່ງວົງມົນ ແລະ ຮູບສີ່ແຈແນບວົງມົນ (Inscribed Angles in Semicircles and Cyclic Quadrilaterals)",
      keyPoint: {
        title: "ຄຸນລັກສະນະຂັ້ນສູງຂອງມຸມໃນວົງມົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮຽນຮູ້ກ່ຽວກັບສອງຄຸນລັກສະນະເລຂາຄະນິດທີ່ສຳຄັນໃນວົງມົນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• "} <span style={{ fontWeight: "bold" }}>{"ມຸມແນບເຄິ່ງວົງມົນ:"}</span> {" ມຸມແນບວົງມົນທີ່ຮັບເສັ້ນຜ່ານກາງ AB ຈະມີຂະໜາດ 90° ສະເໝີ (ເປັນມຸມສາກ)."}</div>
              <div>{"• "} <span style={{ fontWeight: "bold" }}>{"ຮູບສີ່ແຈແນບວົງມົນ:"}</span> {" ຜົນບວກຂອງສອງມຸມກົງກັນຂ້າມໃນຮູບສີ່ແຈແນບວົງມົນ ຈະເທົ່າກັບ 180° ສະເໝີ. (A + C = 180° ແລະ B + D = 180°)"}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອເຫັນສາມແຈແນບວົງມົນທີ່ມີຂ້າງໜຶ່ງເປັນເສັ້ນຜ່ານກາງ ໃຫ້ໝາຍໄວ້ກ່ອນເລີຍວ່າມັນແມ່ນສາມແຈສາກເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃຫ້ AB ແມ່ນເສັ້ນຜ່ານກາງວົງມົນ ແລະ C ແມ່ນເມັດເທິງວົງມົນ. ຈົ່ງຊອກຫາຂະໜາດມຸມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າມຸມ "} <span className="math">{"∠ABC = 30°"}</span> {", ມຸມ "} <span className="math">{"∠CAB"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າມຸມ "} <span className="math">{"∠ABC = 45°"}</span> {", ມຸມ "} <span className="math">{"∠CAB"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າມຸມ "} <span className="math">{"∠ABC = 20°"}</span> {", ມຸມ "} <span className="math">{"∠CAB"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
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
                {"ຄຳຖາມທີ 2: ສຳລັບຮູບສີ່ແຈ ABCD ແນບວົງມົນ, ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມກົງກັນຂ້າມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າມຸມ "} <span className="math">{"∠A = 80°"}</span> {", ມຸມກົງກັນຂ້າມ "} <span className="math">{"∠C"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າມຸມ "} <span className="math">{"∠B = 105°"}</span> {", ມຸມກົງກັນຂ້າມ "} <span className="math">{"∠D"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຄຸນລັກສະນະມຸມໃຈກາງເທົ່າກັບສອງເທົ່າມຸມແນບວົງມົນ ເພື່ອຕັ້ງສົມຖົນແກ້ຫາ x ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາມຸມແນບວົງມົນຈາກມຸມໃຈກາງໃຫຍ່ (Angle Subtended by Major Arc): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ໃນວົງມົນທີ່ມີ O ເປັນໃຈກາງ, ມຸມໃຈກາງ "} <span className="math">{"∠AOC = 130°"}</span> {". ຖ້າເມັດ B ນອນຢູ່ເທິງເສັ້ນຮອບວົງໃນພາກສ່ວນອາກໃຫຍ່ AC, ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມແນບວົງມົນ "} <span className="math">{"∠ABC"}</span> {"."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ∠ABC ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ອົງສາ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ສົມຜົນຊອກຫາຕົວປ່ຽນ x ຈາກມຸມວົງມົນ (Solving for Variable x): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນວົງມົນໜຶ່ງ, ມຸມໃຈກາງມີຂະໜາດແມ່ນ "} <span className="math">{"4x + 10"}</span> {" ອົງສາ ແລະ ມຸມແນບວົງມົນທີ່ຮັບອາກດຽວກັນມີຂະໜາດແມ່ນ "} <span className="math">{"x + 25"}</span> {" ອົງສາ. ຈົ່ງຊອກຫາຄ່າຂອງ x."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
            {"ໂຈດປະສົມປີຕາກໍ ແລະ ວົງມົນ (Pythagoras Combined with Circle Geometry): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ແຜ່ນເຫຼັກຮູບສາມແຈ ABC ແນບຢູ່ໃນວົງມົນທີ່ມີ AB ເປັນເສັ້ນຜ່ານກາງຍາວ "} <span className="math">{"10 cm"}</span> {". ຖ້າຂ້າງ "} <span className="math">{"AC = 6 cm"}</span> {", ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ BC ທີ່ເຫຼືອ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: BC ຍາວ"}</span>
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
            {"ມຸມໃນຮູບສາມແຈຈອມວົງມົນ (Angle Calculation inside Isosceles Circle sector): "}<span className="point-label">{"(5 ຄະແນນന)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃນວົງມົນທີ່ມີ O ເປັນໃຈກາງ, ມີຄອດ (Chord) AB. ເມັດ C ນອນຢູ່ເທິງເສັ້ນຮອບວົງ. ຖ້າຮູ້ວ່າ "} <span className="math">{"∠OAB = 25°"}</span> {", ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມໃຈກາງ "} <span className="math">{"∠AOB"}</span> {"."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ∠AOB ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ອົງສາ"}</span>
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
          <span key="1">{"(1) 80° (ເພາະວ່າມຸມໃຈກາງ = 2 × ມຸມແນບວົງມົນ = 2 × 40° = 80°)"}</span>,
          <span key="2">{"(2) 55° (ເພາະວ່າມຸມແນບວົງມົນ = ມຸມໃຈກາງ / 2 = 110° / 2 = 55°)"}</span>,
          <span key="3">{"(3) 50° (ເພາະວ່າມຸມໃຈກາງ = 2 × ມຸມແນບວົງມົນ = 2 × 25° = 50°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) ເທົ່າກັນ (ມຸມແນບວົງມົນທຸກມຸມທີ່ຮັບອາກດຽວກັນ ຈະມີຂະໜາດເທົ່າກັນສະເໝີ)"}</span>,
          <span key="5">{"(2) 90° (ເພາະວ່າມຸມແນບເຄິ່ງວົງມົນແມ່ນມຸມສາກສະເໝີ ເຊິ່ງມີຂະໜາດ 90°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"65° (ມຸມແນບວົງມົນ ∠ABC = ∠AOC / 2 = 130° / 2 = 65°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"20 (ເພາະວ່າ 4x + 10 = 2(x + 25) ➔ 4x + 10 = 2x + 50 ➔ 2x = 40 ➔ x = 20)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"8 cm (AB ແມ່ນເສັ້ນຜ່ານກາງ ➔ ∠ACB = 90° ➔ BC² = AB² - AC² = 10² - 6² = 64 ➔ BC = √64 = 8 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"130° (ຍ້ອນວ່າ OA = OB = R ➔ ສາມແຈ OAB ເປັນສາມແຈທ່ຽງ ➔ ∠OBA = ∠OAB = 25° ➔ ∠AOB = 180° - (25° + 25°) = 130°)"}</span>
        ]
      }
    ],
    advice: "ຄຸນລັກສະນະຂອງມຸມໃນວົງມົນຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດຂັ້ນສູງ ແລະ ຖືກນຳໃຊ້ໃນການອອກແບບສະຖາປັດຕະຍະກຳ, ເຄື່ອງຈັກ ແລະ ວົງການດາລາສາດ ໝັ່ນຄິດໄລ່ ແລະ ສັງເກດເດີ້!"
  }
};
