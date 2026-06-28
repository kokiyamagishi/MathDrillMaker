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
      title: "1. ສົມຜົນເສັ້ນຊື່ຜ່ານສອງເມັດ",
      keyPoint: {
        title: "ການຫາຄວາມຊັນ ແລະ ສ້າງສົມຜົນຈາກສອງເມັດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຊື່ທີ່ຜ່ານສອງເມັດ A(𝑥₁, 𝑦₁) ແລະ B(𝑥₂, 𝑦₂) ຈະມີຄວາມຊັນ m ທີ່ຊອກໄດ້ຈາກສູດ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄວາມຊັນ m: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"m = "} <Fraction num="𝑦₂ - 𝑦₁" den="𝑥₂ - 𝑥₁" />
                </span>
              </div>
              <div>{"• ສູດສົມຜົນເສັ້ນຊື່: "} <span className="math">{"𝑦 - 𝑦₁ = m(𝑥 - 𝑥₁)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>
                {"• ຕົວຢ່າງ: ຜ່ານ A(1, 2) ແລະ B(3, 8) ➔ m = (8-2) / (3-1) = 6 / 2 = 3 ➔ 𝑦 - 2 = 3(𝑥 - 1) ➔ 𝑦 = 3𝑥 - 1."}
              </div>
            </div>

            {/* Line Passing Two Points SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນຊື່ຜ່ານສອງເມັດ A ແລະ B"}</span>
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Axes */}
                  <line x1="20" y1="160" x2="380" y2="160" stroke="#37474F" strokeWidth="2" />
                  <line x1="80" y1="20" x2="80" y2="180" stroke="#37474F" strokeWidth="2" />

                  {/* Line passing A(80, 60) and B(140, 30) */}
                  <line x1="80" y1="160" x2="360" y2="20" stroke="#E65100" strokeWidth="4" />

                  {/* Points */}
                  <circle cx="160" cy="120" r="6" fill="#D32F2F" />
                  <text x="170" y="130" fill="#37474F" fontSize="16" fontWeight="bold">{"A(𝑥₁, 𝑦₁)"}</text>

                  <circle cx="280" cy="60" r="6" fill="#D32F2F" />
                  <text x="290" y="70" fill="#37474F" fontSize="16" fontWeight="bold">{"B(𝑥₂, 𝑦₂)"}</text>
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
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"A(1, 2)"}</span> {" ແລະ "} <span className="math">{"B(3, 8)"}</span> {". ຄວາມຊັນ m ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"C(-1, 5)"}</span> {" ແລະ "} <span className="math">{"D(2, -1)"}</span> {". ຄວາມຊັນ m ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ໃນຮູບ 𝑦 = ax + b ຈາກສອງເມັດ ແລ້ວຫາຄ່າ a + b: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"A(1, 5)"}</span> {" ແລະ "} <span className="math">{"B(3, 9)"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
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
      title: "2. ເສັ້ນຊື່ທີ່ຕັ້ງສາກກັນ",
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
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Line 1: y = x */}
                  <line x1="80" y1="160" x2="320" y2="40" stroke="#1565C0" strokeWidth="4" />
                  <text x="290" y="30" fill="#1565C0" fontSize="16" fontWeight="bold">{"L₁ (m₁=1)"}</text>

                  {/* Line 2: y = -x + 100 */}
                  <line x1="80" y1="40" x2="320" y2="160" stroke="#F44336" strokeWidth="4" />
                  <text x="290" y="170" fill="#F44336" fontSize="16" fontWeight="bold">{"L₂ (m₂=-1)"}</text>
                  
                  {/* Right angle symbol at (100, 50) */}
                  <path d="M 190,90 L 200,80 L 210,90" fill="none" stroke="#37474F" strokeWidth="2" />
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
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ໜຶ່ງມີຄວາມຊັນແມ່ນ 2. ເສັ້ນຊື່ຕັ້ງສາກກັບມັນຈະມີຄວາມຊັນແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ໜຶ່ງມີຄວາມຊັນແມ່ນ "} <span className="math"><Fraction num="-3" den="4" /></span> {". ເສັ້ນຊື່ຕັ້ງສາກຈະມີຄວາມຊັນແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈົ່ງຊອກຫາຄວາມຊັນຂອງເສັ້ນຊື່ທີ່ຕັ້ງສາກກັບເສັ້ນຊື່ "} <span className="math">{"𝑦 = 3𝑥 - 1"}</span> {"? (ຕອບເປັນເລກສ່ວນ)"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ຕັ້ງສາກ 𝑦 = ax + b ຜ່ານ P(0, 4): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ຕັ້ງສາກກັບ "} <span className="math">{"𝑦 = 2𝑥 + 1"}</span> {", ຄ່າຂອງສຳປະສິດຄວາມຊັນ a ແມ່ນເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າຂອງຈຸດຕັດແກນ 𝑦 (b) ຂອງເສັ້ນຊື່ຕັ້ງສາກນີ້ແມ່ນເທົ່າໃດ?"}</span>
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
              {"ສົມຜົນເສັ້ນຊື່ຕັ້ງສາກຜ່ານຈຸດທີ່ກຳນົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ທີ່ຜ່ານເມັດ "} <span className="math">{"A(2, 5)"}</span> {" ແລະ ຕັ້ງສາກກັບເສັ້ນຊື່ "} <span className="math">{"𝑦 = -"} <Fraction num="1" den="3" /> {"𝑥 + 2"}</span> {". ຂຽນໃນຮູບ 𝑦 = ax + b, ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}
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
              {"ການຊອກຫາຕົວປະສານງານຈາກເງື່ອນໄຂຕັ້ງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ເສັ້ນຊື່ໜຶ່ງຜ່ານສອງເມັດ "} <span className="math">{"(1, 3)"}</span> {" ແລະ "} <span className="math">{"(4, 𝑦)"}</span> {". ຖ້າເສັ້ນຊື່ນີ້ຕັ້ງສາກກັບເສັ້ນຊື່ທີ່ມີຄວາມຊັນ m = -1. ຈົ່ງຊອກຫາຄ່າຂອງ 𝑦."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: 𝑦 ="}</span>
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
            {"ຜົນບວກຕົວປະສານງານເມັດເຄິ່ງກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ່ອນຊື່ AB ມີສອງສົ້ນແມ່ນ "} <span className="math">{"A(1, 2)"}</span> {" ແລະ "} <span className="math">{"B(5, 10)"}</span> {". ຈົ່ງຊອກຫາຈຸດເຄິ່ງກາງ M ຂອງທ່ອນຊື່ນີ້ ແລ້ວຄິດໄລ່ຜົນບວກຂອງຕົວປະສານງານ (𝑥_M + 𝑦_M)."}
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
            {"ຄວາມຊັນຂອງເສັ້ນຕັ້ງສາກເຄິ່ງກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈົ່ງຊອກຫາຄວາມຊັນ m ຂອງເສັ້ນຕັ້ງສາກເຄິ່ງກາງ ຂອງທ່ອນຊື່ AB ທີ່ມີຈຸດປະສານງານ A(0, 2) ແລະ B(4, 6)."}
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
          <span key="4">{"(1) 5 (ເພາະວ່າ m = 2 ➔ 𝑦 - 5 = 2(𝑥 - 1) ➔ 𝑦 = 2𝑥 + 3 ➔ a = 2, b = 3 ➔ a + b = 5)"}</span>,
          <span key="5">{"(2) 4 (ເພາະວ່າ m = 2 ➔ 𝑦 - 2 = 2(𝑥 - 0) ➔ 𝑦 = 2𝑥 + 2 ➔ a = 2, b = 2 ➔ a + b = 4)"}</span>
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
        <span key="10">{"4 (ຈຸດຕັດແກນ 𝑦 ແມ່ນ (0, 4) ➔ b = 4)"}</span>
      ]
    },
    {
      questionNumber: "ທ້າທາຍ 1",
      answers: [
        <span key="11">{"2 (ຄວາມຊັນຂອງເສັ້ນຊື່ເດີມແມ່ນ -1/3 ➔ ຄວາມຊັນຕັ້ງສາກ m = 3 ➔ 𝑦 - 5 = 3(𝑥 - 2) ➔ 𝑦 = 3𝑥 - 1 ➔ a = 3, b = -1 ➔ a + b = 2)"}</span>
      ]
    },
    {
      questionNumber: "ທ້າທາຍ 2",
      answers: [
        <span key="12">{"6 (ຄວາມຊັນຕັ້ງສາກແມ່ນ 1 ➔ (𝑦 - 3) / (4 - 1) = 1 ➔ 𝑦 - 3 = 3 ➔ 𝑦 = 6)"}</span>
      ]
    },
    {
      questionNumber: "ທົດສອບປະຈຳບົດ 1",
      answers: [
        <span key="13">{"9 (ຈຸດເຄິ່ງກາງ M = ((1+5)/2, (2+10)/2) = (3, 6) ➔ 𝑥_M + 𝑦_M = 3 + 6 = 9)"}</span>
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
