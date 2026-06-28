import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit19Data: UnitData = {
  unitNumber: 19,
  unitTitle: "ພາກທີ V - ບົດທີ 19: ສົມຜົນເສັ້ນຊື່ (ຕໍ່)",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈສົມຜົນເສັ້ນຊື່ຜ່ານສອງເມັດ, ຄວາມສຳພັນລະຫວ່າງເສັ້ນຊື່ທີ່ຕັ້ງສາກກັນ (m₁ × m₂ = -1) ແລະ ການປະຍຸກໃຊ້",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 91-96",
  subSections: [
    {
      title: "1. ສົມຜົນເສັ້ນຊື່ຜ່ານສອງເມັດ (Equation of a Line Passing Through Two Points)",
      keyPoint: {
        title: "ການຫາຄວາມຊັນ ແລະ ສ້າງສົມຜົນຈາກສອງເມັດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຊື່ທີ່ຜ່ານສອງເມັດ A(x₁, y₁) ແລະ B(x₂, y₂) ຈະມີຄວາມຊັນ m ທີ່ຊອກໄດ້ຈາກສູດ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄວາມຊັນ m: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"m = "} <Fraction num="y₂ - y₁" den="x₂ - x₁" />
                </span>
              </div>
              <div>{"• ສູດສົມຜົນເສັ້ນຊື່: "} <span className="math">{"y - y₁ = m(x - x₁)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>
                {"• ຕົວຢ່າງ: ຜ່ານ A(1, 2) ແລະ B(3, 8) ➔ m = (8-2) / (3-1) = 6 / 2 = 3 ➔ y - 2 = 3(x - 1) ➔ y = 3x - 1."}
              </div>
            </div>

            {/* Line Passing Two Points SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນຊື່ຜ່ານສອງເມັດ A ແລະ B"}</span>
                <svg viewBox="0 0 200 100" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Axes */}
                  <line x1="10" y1="80" x2="190" y2="80" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="10" x2="40" y2="90" stroke="#37474F" strokeWidth="1" />

                  {/* Line passing A(80, 60) and B(140, 30) */}
                  <line x1="40" y1="80" x2="180" y2="10" stroke="#E65100" strokeWidth="2" />

                  {/* Points */}
                  <circle cx="80" cy="60" r="3" fill="#D32F2F" />
                  <text x="85" y="65" fill="#37474F" fontSize="8" fontWeight="bold">{"A(x₁, y₁)"}</text>

                  <circle cx="140" cy="30" r="3" fill="#D32F2F" />
                  <text x="145" y="35" fill="#37474F" fontSize="8" fontWeight="bold">{"B(x₂, y₂)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງລະວັງການຄິດໄລ່ເຄື່ອງໝາຍລົບ (-) ເວລາເອົາຕົວປະສານງານໄປແທນໃສ່ສູດຄວາມຊັນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຄວາມຊັນ m ຂອງເສັ້ນຊື່ທີ່ຜ່ານສອງເມັດລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"A(1, 2)"}</span> {" ແລະ "} <span className="math">{"B(3, 8)"}</span> {". ຄວາມຊັນ m ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"C(-1, 5)"}</span> {" ແລະ "} <span className="math">{"D(2, -1)"}</span> {". ຄວາມຊັນ m ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"E(2, 4)"}</span> {" ແລະ "} <span className="math">{"F(6, 6)"}</span> {". ຄວາມຊັນ m (ໃນຮູບແບບເລກສ່ວນງ່າຍດາຍ) ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ໃນຮູບ y = ax + b ຈາກສອງເມັດ ແລ້ວຫາຄ່າ a + b: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"A(1, 5)"}</span> {" ແລະ "} <span className="math">{"B(3, 9)"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"C(0, 2)"}</span> {" ແລະ "} <span className="math">{"D(4, 10)"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເສັ້ນຊື່ທີ່ຕັ້ງສາກກັນ (Perpendicular Lines)",
      keyPoint: {
        title: "ຄຸນລັກສະນະຄວາມຊັນຂອງເສັ້ນຊື່ຕັ້ງສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງເສັ້ນຊື່ທີ່ມີຄວາມຊັນ m₁ ແລະ m₂ ຈະຕັ້ງສາກກັນ ຖ້າຫາກຜົນຄູນຄວາມຊັນເທົ່າກັບ -1:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ສູດພື້ນຖານ: "} <span className="math" style={{ fontWeight: "bold" }}>{"m₁ × m₂ = -1"}</span></div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ການຫາຄວາມຊັນຕັ້ງສາກ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"m₂ = "} <Fraction num="-1" den="m₁" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຖ້າເສັ້ນຊື່ໜຶ່ງມີຄວາມຊັນແມ່ນ 2 ➔ ເສັ້ນຊື່ຕັ້ງສາກຈະມີຄວາມຊັນແມ່ນ -1/2."}</div>
            </div>

            {/* Perpendicular Lines SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ສອງເສັ້ນຊື່ຕັ້ງສາກກັນຢູ່ຈຸດຕັດ"}</span>
                <svg viewBox="0 0 200 100" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Line 1: y = x */}
                  <line x1="40" y1="80" x2="160" y2="20" stroke="#1565C0" strokeWidth="2" />
                  <text x="145" y="15" fill="#1565C0" fontSize="8" fontWeight="bold">{"L₁ (m₁=1)"}</text>

                  {/* Line 2: y = -x + 100 */}
                  <line x1="40" y1="20" x2="160" y2="80" stroke="#F44336" strokeWidth="2" />
                  <text x="145" y="85" fill="#F44336" fontSize="8" fontWeight="bold">{"L₂ (m₂=-1)"}</text>
                  
                  {/* Right angle symbol at (100, 50) */}
                  <path d="M 95,45 L 100,40 L 105,45" fill="none" stroke="#37474F" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຊັນຂອງເສັ້ນຊື່ຕັ້ງສາກ ຈະແມ່ນສ່ວນກັບຂອງຄວາມຊັນເດີມ ແລະ ປ່ຽນເຄື່ອງໝາຍເປັນກົງກັນຂ້າມເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຄວາມຊັນ m ຂອງເສັ້ນຊື່ທີ່ຕັ້ງສາກກັບຄວາມຊັນທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ໜຶ່ງມີຄວາມຊັນແມ່ນ 2. ເສັ້ນຊື່ຕັ້ງສາກກັບມັນຈະມີຄວາມຊັນແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ໜຶ່ງມີຄວາມຊັນແມ່ນ "} <span className="math"><Fraction num="-3" den="4" /></span> {". ເສັ້ນຊື່ຕັ້ງສາກຈະມີຄວາມຊັນແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈົ່ງຊອກຫາຄວາມຊັນຂອງເສັ້ນຊື່ທີ່ຕັ້ງສາກກັບເສັ້ນຊື່ "} <span className="math">{"y = 3x - 1"}</span> {"? (ຕອບເປັນເລກສ່ວນ)"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ຕັ້ງສາກ y = ax + b ຜ່ານ P(0, 4): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ຕັ້ງສາກກັບ "} <span className="math">{"y = 2x + 1"}</span> {", ຄ່າຂອງສຳປະສິດຄວາມຊັນ a ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງຈຸດຕັດແກນ y (b) ຂອງເສັ້ນຊື່ຕັ້ງສາກນີ້ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມຜົນເສັ້ນຊື່ຕັ້ງສາກຜ່ານຈຸດທີ່ກຳນົດ (Finding Perpendicular Line Equation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ທີ່ຜ່ານເມັດ "} <span className="math">{"A(2, 5)"}</span> {" ແລະ ຕັ້ງສາກກັບເສັ້ນຊື່ "} <span className="math">{"y = -"} <Fraction num="1" den="3" /> {"x + 2"}</span> {". ຂຽນໃນຮູບ y = ax + b, ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a + b ="}</span>
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
              {"ການຊອກຫາຕົວປະສານງານຈາກເງື່ອນໄຂຕັ້ງສາກ (Finding Coordinate from Perpendicularity): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ເສັ້ນຊື່ໜຶ່ງຜ່ານສອງເມັດ "} <span className="math">{"(1, 3)"}</span> {" ແລະ "} <span className="math">{"(4, y)"}</span> {". ຖ້າເສັ້ນຊື່ນີ້ຕັ້ງສາກກັບເສັ້ນຊື່ທີ່ມີຄວາມຊັນ m = -1. ຈົ່ງຊອກຫາຄ່າຂອງ y."}
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
            {"ຜົນບວກຕົວປະສານງານເມັດເຄິ່ງກາງ (Midpoint Coordinates Sum): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ່ອນຊື່ AB ມີສອງສົ້ນແມ່ນ "} <span className="math">{"A(1, 2)"}</span> {" ແລະ "} <span className="math">{"B(5, 10)"}</span> {". ຈົ່ງຊອກຫາຈຸດເຄິ່ງກາງ M ຂອງທ່ອນຊື່ນີ້ ແລ້ວຄິດໄລ່ຜົນບວກຂອງຕົວປະສານງານ (x_M + y_M)."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜົນບວກແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄວາມຊັນຂອງເສັ້ນຕັ້ງສາກເຄິ່ງກາງ (Slope of Perpendicular Bisector): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈົ່ງຊອກຫາຄວາມຊັນ m ຂອງເສັ້ນຕັ້ງສາກເຄິ່ງກາງ (Perpendicular Bisector) ຂອງທ່ອນຊື່ AB ທີ່ມີຈຸດປະສານງານ A(0, 2) ແລະ B(4, 6)."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: m ="}</span>
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
          <span key="1">{"(1) 3 (ເພາະວ່າ m = (8 - 2) / (3 - 1) = 6 / 2 = 3)"}</span>,
          <span key="2">{"(2) -2 (ເພາະວ່າ m = (-1 - 5) / (2 - (-1)) = -6 / 3 = -2)"}</span>,
          <span key="3">{"(3) -1/2 (ເພາະວ່າ m = (6 - 4) / (6 - 2) = 2 / 4 = 1/2)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 5 (ເພາະວ່າ m = 2 ➔ y - 5 = 2(x - 1) ➔ y = 2x + 3 ➔ a = 2, b = 3 ➔ a + b = 5)"}</span>,
          <span key="5">{"(2) 4 (ເພາະວ່າ m = 2 ➔ y - 2 = 2(x - 0) ➔ y = 2x + 2 ➔ a = 2, b = 2 ➔ a + b = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"-1/2 (ຄວາມຊັນຕັ້ງສາກ m₂ = -1/m₁ = -1/2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"4/3 (ຄວາມຊັນຕັ້ງສາກ m₂ = -1 / (-3/4) = 4/3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"-1/3 (ຄວາມຊັນຂອງເສັ້ນຊື່ແມ່ນ 3 ➔ ຄວາມຊັນຕັ້ງສາກແມ່ນ -1/3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"-1/2 (ຄວາມຊັນຂອງເສັ້ນຊື່ແມ່ນ 2 ➔ ຄວາມຊັນຕັ້ງສາກ a = -1/2)"}</span>
        ]
      }
    ],
    advice: "ຄວາມສຳພັນລະຫວ່າງເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກເປັນຫົວໃຈຂອງການອອກແບບຮູບຊົງເລຂາຄະນິດ ໝັ່ນຝຶກຝົນແກ້ເລກ ແລະ ສ້າງສົມຜົນເປັນປະຈຳເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 2,
      answers: [
        <span key="10">{"4 (ຈຸດຕັດແກນ y ແມ່ນ (0, 4) ➔ b = 4)"}</span>
      ]
    },
    {
      questionNumber: "ທ້າທາຍ 1",
      answers: [
        <span key="11">{"2 (ຄວາມຊັນຂອງເສັ້ນຊື່ເດີມແມ່ນ -1/3 ➔ ຄວາມຊັນຕັ້ງສາກ m = 3 ➔ y - 5 = 3(x - 2) ➔ y = 3x - 1 ➔ a = 3, b = -1 ➔ a + b = 2)"}</span>
      ]
    },
    {
      questionNumber: "ທ້າທາຍ 2",
      answers: [
        <span key="12">{"6 (ຄວາມຊັນຕັ້ງສາກແມ່ນ 1 ➔ (y - 3) / (4 - 1) = 1 ➔ y - 3 = 3 ➔ y = 6)"}</span>
      ]
    },
    {
      questionNumber: "ທົດສອບປະຈຳບົດ 1",
      answers: [
        <span key="13">{"9 (ຈຸດເຄິ່ງກາງ M = ((1+5)/2, (2+10)/2) = (3, 6) ➔ x_M + y_M = 3 + 6 = 9)"}</span>
      ]
    },
    {
      questionNumber: "ທົດສອບປະຈຳບົດ 2",
      answers: [
        <span key="14">{"-1 (ຄວາມຊັນ AB = (6-2)/(4-0) = 1 ➔ ຄວາມຊັນຕັ້ງສາກ m = -1)"}</span>
      ]
    }
  ]
};
