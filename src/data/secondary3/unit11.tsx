import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ພາກທີ VIII - ບົດທີ 25: ຕຳລາໄຕມຸມມິຕິເບື້ອງຕົ້ນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈອັດຕາສ່ວນໄຕມຸມມິຕິ sin, cos, tan ໃນຮູບສາມແຈສາກ ແລະ ຄ່າຂອງໄຕມຸມມິຕິສຳລັບມຸມພິເສດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 121-126",
  subSections: [
    {
      title: "1. ອັດຕາສ່ວນໄຕມຸມມິຕິພື້ນຖານ (Basic Trigonometric Ratios)",
      keyPoint: {
        title: "ນິຍາມຂອງ sin, cos, tan ໃນຮູບສາມແຈສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈສາກໃດໜຶ່ງ, ອັດຕາສ່ວນໄຕມຸມມິຕິຂອງມຸມແຫຼມ A ຖືກກຳນົດດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ໄຊ (sine): "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"sin(A) = "} <Fraction num="ຂ້າງກົງມຸມ" den="ຂ້າງກົງຊາກ" />
                </span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ໂກໄຊ (cosine): "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"cos(A) = "} <Fraction num="້າງຕິດມຸມ" den="້າງກົງຊາກ" />
                </span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ຕັງຊັງ (tangent): "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"tan(A) = "} <Fraction num="້າງກົງມຸມ" den="້າງຕິດມຸມ" />
                </span>
              </div>
            </div>

            {/* Trig Triangle SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສາມແຈສາກ ແລະ ຂ້າງຕ່າງໆທຽບໃສ່ມຸມ A"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Right Triangle */}
                  <polygon points="40,20 40,100 160,100" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Right Angle Square */}
                  <rect x="40" y="90" width="10" height="10" fill="none" stroke="#2E7D32" strokeWidth="1.5" />
                  
                  {/* Labels */}
                  <text x="50" y="94" fill="#E65100" fontSize="10" fontWeight="bold">{"A"}</text>
                  <text x="30" y="16" fill="#37474F" fontSize="10">{"B"}</text>
                  <text x="165" y="105" fill="#37474F" fontSize="10">{"C (ມຸມສາກ)"}</text>

                  <text x="12" y="65" fill="#37474F" fontSize="9" fontWeight="bold">{"ກົງມຸມ (3)"}</text>
                  <text x="90" y="112" fill="#37474F" fontSize="9" fontWeight="bold">{"ຕິດມຸມ (4)"}</text>
                  <text x="110" y="55" fill="#1565C0" fontSize="9" fontWeight="bold">{"ກົງຊາກ (5)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີຈື່ຈຳງ່າຍໆ: sin = ກົງ/ຊາກ, cos = ຕິດ/ຊາກ, tan = ກົງ/ຕິດ ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃນຮູບສາມແຈສາກທີ່ມີຂ້າງກົງມຸມແມ່ນ 3, ຂ້າງຕິດມຸມແມ່ນ 4, ຂ້າງກົງຊາກແມ່ນ 5. ຈົ່ງຂຽນອັດຕາສ່ວນໃນຮູບແບບເລກສ່ວນ: "}<span className="point-label">{"(ຂໍးລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"sin(A)"}</span> {" ຢູ່ໃນຮູບແບບເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"cos(A)"}</span> {" ຢູ່ໃນຮູບແບບເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"tan(A)"}</span> {" ຢູ່ໃນຮູບແບບເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ໃນຮູບສາມແຈສາກທີ່ມີຂ້າງກົງມຸມແມ່ນ 6, ຂ້າງຕິດມຸມແມ່ນ 8, ຂ້າງກົງຊາກແມ່ນ 10. ຈົ່ງຊອກຫາອັດຕາສ່ວນທີ່ຄັດຈາມແລ້ວ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"sin(A)"}</span> {" ຢູ່ໃນຮູບແບບເລກສ່ວນທີ່ງ່າຍດາຍທີ່ສຸດແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"tan(A)"}</span> {" ຢູ່ໃນຮູບແບບເລກສ່ວນທີ່ງ່າຍດາຍທີ່ສຸດແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄ່າຂອງໄຕມຸມມິຕິສຳລັບມຸມພິເສດ (Trigonometric Values for Special Angles)",
      keyPoint: {
        title: "ຕາຕະລາງຄ່າໄຕມຸມມິຕິພິເສດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າໄຕມຸມມິຕິທີ່ມັກໃຊ້ເລື້ອຍໆໃນການແກ້ເລກລະດັບ ມ.3:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <div>{"• "} <span className="math" style={{ fontWeight: "bold" }}>{"sin(30°) = "} <Fraction num="1" den="2" /></span></div>
                <div>{"• "} <span className="math" style={{ fontWeight: "bold" }}>{"cos(60°) = "} <Fraction num="1" den="2" /></span></div>
                <div>{"• "} <span className="math" style={{ fontWeight: "bold" }}>{"tan(45°) = 1"}</span></div>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ສູດພິເສດ: "} <span className="math">{"sin²(θ) + cos²(θ) = 1"}</span> {" ສະເໝີສຳລັບທຸກໆມຸມ."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ມຸມ 30° ແລະ 60° ມີຄວາມກ່ຽວຂ້ອງກັນຢ່າງໃກ້ຊິດ ເຊິ່ງ sin(30°) = cos(60°) ແລະ cos(30°) = sin(60°) ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຄ່າສຸດທ້າຍຂອງສຳນວນໄຕມຸມມິຕິຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"sin(30°)"}</span> {" ໃນຮູບແບບເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"cos(60°)"}</span> {" ໃນຮູບແບບເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"sin(30°) + cos(60°)"}</span> {" ຈະເທົ່າກັບເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"tan(45°)"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"sin²(30°) + cos²(30°)"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຄຸນລັກສະນະຂອງ sin ແລະ cos ເພື່ອຊອກຫາຂ້າງທີ່ເຫຼືອ ຫຼື ນຳໃຊ້ເຂົ້າໃນໂຈດຕົວຈິງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການພົວພັນລະຫວ່າງອັດຕາສ່ວນໄຕມຸມມິຕິ (Finding Trig Relations): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ໃນຮູບສາມແຈສາກໜຶ່ງ, ຖ້າຮູ້ວ່າ "} <span className="math">{"sin(A) = "} <Fraction num="4" den="5" /></span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "} <span className="math">{"tan(A)"}</span> {" ໃນຮູບແບບເລກສ່ວນ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: tan(A) ="}</span>
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
              {"ໂຈດບັນຫາຄວາມສູງຂອງຕົ້ນໄມ້ (Angle of Elevation Application): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈາກຈຸດໜຶ່ງເທິງພື້ນດິນທີ່ຫ່າງຈາກກົກຕົ້ນໄມ້ "} <span className="math">{"10 m"}</span> {", ມຸມເງີຍໄປຫາປາຍຕົ້ນໄມ້ແມ່ນ "} <span className="math">{"45°"}</span> {". ຈົ່ງຊອກຫາຄວາມສູງຂອງຕົ້ນໄມ້ນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄວາມສູງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"m"}</span>
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
            {"ໂຈດບັນຫາວ່າວລອຍຟ້າ (Kite String Height Calculation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ວ່າວຕິດເຊືອກຍາວ "} <span className="math">{"20 m"}</span> {" ປິວຂຶ້ນຟ້າ. ເສັ້ນເຊືອກເຮັດມຸມ "} <span className="math">{"30°"}</span> {" ກັບໜ້າດິນ. ຈົ່ງຊອກຫາຄວາມສູງຂອງວ່າວຈາກໜ້າດິນ."}
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຊອກຫາຂ້າງກົງຊາກຈາກຄ່າ cos (Finding Hypotenuse from Cosine Value): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃນຮູບສາມແຈ ABC ສາກຢູ່ C, ຖ້າຫາກ "} <span className="math">{"cos(B) = "} <Fraction num="12" den="13" /></span> {" ແລະ ຂ້າງຕິດມຸມ B ຍາວ "} <span className="math">{"24 cm"}</span> {". ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງກົງຊາກ AB."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: AB ຍາວ"}</span>
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
          <span key="1">{"(1) 3/5 (ເພາະວ່າ sin(A) = ກົງມຸມ / ກົງຊາກ = 3/5)"}</span>,
          <span key="2">{"(2) 4/5 (ເພາະວ່າ cos(A) = ຕິດມຸມ / ກົງຊາກ = 4/5)"}</span>,
          <span key="3">{"(3) 3/4 (ເພາະວ່າ tan(A) = ກົງມຸມ / ຕິດມຸມ = 3/4)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 3/5 (ເພາະວ່າ sin(A) = 6/10 = 3/5 ຫຼັງຈາກຄັດຈາມຫານ 2)"}</span>,
          <span key="5">{"(2) 3/4 (ເພາະວ່າ tan(A) = 6/8 = 3/4 ຫຼັງຈາກຄັດຈາມຫານ 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"4/3 (ຈາກ sin(A) = 4/5 ➔ ຂ້າງກົງ = 4, ກົງຊາກ = 5 ➔ ປີຕາກໍຊອກຂ້າງຕິດ = 3 ➔ ດັ່ງນັ້ນ tan(A) = ກົງ / ຕິດ = 4/3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"10 m (ເພາະວ່າ tan(45°) = ສູງ / 10 ➔ 1 = ສູງ / 10 ➔ ຄວາມສູງ = 10 m)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"10 m (ເພາະວ່າ sin(30°) = ສູງ / 20 ➔ 1/2 = ສູງ / 20 ➔ ຄວາມສູງ = 10 m)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"26 cm (ເພາະວ່າ cos(B) = 24 / AB ➔ 12/13 = 24 / AB ➔ AB = 24 × 13 / 12 = 26 cm)"}</span>
        ]
      }
    ],
    advice: "ໄຕມຸມມິຕິແມ່ນເຄື່ອງມືທີ່ມີພະລັງທີ່ສຸດໃນຄະນິດສາດ ມັນຖືກນຳໃຊ້ໃນການແກ້ໄຂໂຈດຄວາມສູງ, ໄລຍະຫ່າງຂອງດວງດາວ, ເຄື່ອນໄຫວຄື້ນຟີຊິກສາດ ແລະ ວິສະວະກຳສາດ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
