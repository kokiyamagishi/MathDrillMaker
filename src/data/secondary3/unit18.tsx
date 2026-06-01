import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit18Data: UnitData = {
  unitNumber: 18,
  unitTitle: "ພາກທີ V - ບົດທີ 18: ສົມຜົນເສັ້ນຊື່",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈສົມຜົນເສັ້ນຊື່ໃນລະບົບປະສານງານ, ການຊອກຫາສົມຜົນເສັ້ນຊື່ຜ່ານເມັດ ແລະ ມີຄວາມຊັນທີ່ກຳນົດໃຫ້",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 85-90",
  subSections: [
    {
      title: "1. ຮູບແບບສົມຜົນເສັ້ນຊື່ ແລະ ຄວາມຊັນ (Slope and General Form of a Line)",
      keyPoint: {
        title: "ຮູບແບບຕ່າງໆຂອງສົມຜົນເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສົມຜົນເສັ້ນຊື່ໃນໜ້າພຽງປະສານງານ ມີສອງຮູບແບບຫຼັກທີ່ນິຍົມໃຊ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຮູບແບບທົ່ວໄປ: "} <span className="math" style={{ fontWeight: "bold" }}>{"ax + by + c = 0"}</span></div>
              <div>{"• ຮູບແບບຄວາມຊັນ (Slope-Intercept Form): "} <span className="math" style={{ fontWeight: "bold" }}>{"y = mx + n"}</span></div>
              <div style={{ paddingLeft: "16px" }}>{"- m ແມ່ນຄວາມຊັນ (Slope) ຂອງເສັ້ນຊື່."}</div>
              <div style={{ paddingLeft: "16px" }}>{"- n ແມ່ນຈຸດຕັດແກນ y (y-intercept)."}</div>
            </div>

            {/* Coordinate Slopes SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ທິດທາງຂອງຄວາມຊັນ m (Slope 方向)"}</span>
                <svg viewBox="0 0 200 100" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Axes */}
                  <line x1="10" y1="50" x2="190" y2="50" stroke="#37474F" strokeWidth="1" />
                  <line x1="100" y1="10" x2="100" y2="90" stroke="#37474F" strokeWidth="1" />

                  {/* Positive Slope m > 0 */}
                  <line x1="30" y1="80" x2="90" y2="20" stroke="#4CAF50" strokeWidth="2" />
                  <text x="35" y="30" fill="#4CAF50" fontSize="8" fontWeight="bold">{"m > 0 (ຂຶ້ນ)"}</text>

                  {/* Negative Slope m < 0 */}
                  <line x1="110" y1="20" x2="170" y2="80" stroke="#F44336" strokeWidth="2" />
                  <text x="135" y="30" fill="#F44336" fontSize="8" fontWeight="bold">{"m < 0 (ລົງ)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຊັນ m ສະແດງເຖິງຄວາມຊັນຂອງເສັ້ນຊື່: ຖ້າ m ເປັນບວກ ເສັ້ນຊື່ຈະຊັນຂຶ້ນໄປທາງຂວາ, ຖ້າ m ເປັນລົບ ຈະລົງໄປທາງຂວາເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຄ່າຄວາມຊັນ m ຂອງເສັ້ນຊື່ຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສົມຜົນເສັ້ນຊື່ "} <span className="math">{"y = 3x - 4"}</span> {" ມີຄວາມຊັນ m ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສົມຜົນເສັ້ນຊື່ "} <span className="math">{"2x + y - 5 = 0"}</span> {" ມີຄວາມຊັນ m ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ສົມຜົນເສັ້ນຊື່ "} <span className="math">{"3x - 3y + 6 = 0"}</span> {" ມີຄວາມຊັນ m ເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຈຸດຕັດແກນ y (n) ຂອງເສັ້ນຊື່ຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສົມຜົນເສັ້ນຊື່ "} <span className="math">{"y = -4x + 7"}</span> {" ມີຈຸດຕັດແກນ y ຢູ່ຄ່າ n ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສົມຜົນເສັ້ນຊື່ "} <span className="math">{"x - 2y + 8 = 0"}</span> {" ມີຈຸດຕັດແກນ y ຢູ່ຄ່າ n ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສົມຜົນເສັ້ນຊື່ຜ່ານໜຶ່ງເມັດ ແລະ ມີຄວາມຊັນ (Line Equation Given a Point and a Slope)",
      keyPoint: {
        title: "ການສ້າງສົມຜົນເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຊື່ທີ່ຜ່ານເມັດ A(x₁, y₁) ແລະ ມີຄວາມຊັນ m ສາມາດຊອກໄດ້ຈາກສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ສູດພື້ນຖານ: "} <span className="math" style={{ fontWeight: "bold" }}>{"y - y₁ = m(x - x₁)"}</span></div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຜ່ານ A(2, 3) ແລະ m = 3 ➔ y - 3 = 3(x - 2) ➔ y = 3x - 6 + 3 ➔ y = 3x - 3."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າສອງເສັ້ນຊື່ຂະໜານກັນ ຈະມີຄວາມຊັນ (m) ເທົ່າກັນສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ໃນຮູບ y = ax + b ແລ້ວຕອບຄ່າຂອງ a + b: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"A(0, 5)"}</span> {" ແລະ ມີຄວາມຊັນ "} <span className="math">{"m = 2"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"B(2, 3)"}</span> {" ແລະ ມີຄວາມຊັນ "} <span className="math">{"m = 3"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຜ່ານເມັດ "} <span className="math">{"C(1, -2)"}</span> {" ແລະ ມີຄວາມຊັນ "} <span className="math">{"m = -4"}</span> {". ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມສຳພັນລະຫວ່າງເສັ້ນຊື່: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າສອງເສັ້ນຊື່ຂະໜານກັນ, ຄວາມຊັນຂອງພວກມັນຈະເປັນແນວໃດຕໍ່ກັນ? (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ')"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈົ່ງຊອກຫາຄວາມຊັນຂອງເສັ້ນຊື່ທີ່ຂະໜານກັບເສັ້ນຊື່ "} <span className="math">{"y = -5x + 3"}</span> {"?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຫຼັກການຄວາມຊັນເທົ່າກັນສຳລັບເສັ້ນຊື່ຂະໜານ ແລະ ຜັນປ່ຽນສົມຜົນໃຫ້ຖືກຕ້ອງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາສົມຜົນເສັ້ນຊື່ຂະໜານ (Finding Parallel Line Equation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຊອກຫາສົມຜົນເສັ້ນຊື່ທີ່ຜ່ານເມັດ "} <span className="math">{"P(3, 4)"}</span> {" ແລະ ຂະໜານກັບເສັ້ນຊື່ "} <span className="math">{"y = 2x - 1"}</span> {". ຂຽນໃນຮູບແບບ y = ax + b, ຄ່າຂອງ a + b ແມ່ນເທົ່າໃດ?"}
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
              {"ການຫາຄ່າຄົງຕົວ k ຈາກຄວາມຊັນ (Finding Constant k from Slope): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາຄ່າຂອງ k ທີ່ເຮັດໃຫ້ເສັ້ນຊື່ "} <span className="math">{"kx - 2y + 6 = 0"}</span> {" ມີຄວາມຊັນເທົ່າກັບ 3."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: k ="}</span>
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
            {"ການຊອກຫາຈຸດຕັດແກນນອນ x (Finding X-Intercept of a Line): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາຈຸດຕັດແກນ x (ຄ່າຂອງ x ເມື່ອ y = 0) ຂອງເສັ້ນຊື່ "} <span className="math">{"2x - 3y - 12 = 0"}</span> {"."}
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄວາມຊັນຂອງເສັ້ນຊື່ຜ່ານເມັດເຄົ້າ (Slope of Line Passing Through Origin): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ເສັ້ນຊື່ເສັ້ນໜຶ່ງຜ່ານເມັດເຄົ້າ "} <span className="math">{"O(0, 0)"}</span> {" ແລະ ເມັດ "} <span className="math">{"P(3, 6)"}</span> {". ຈົ່ງຊອກຫາຄ່າຄວາມຊັນ m ຂອງເສັ້ນຊື່ນີ້."}
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
          <span key="1">{"(1) 3 (ເພາະວ່າສົມຜົນຢູ່ໃນຮູບ y = mx + n ➔ m = 3)"}</span>,
          <span key="2">{"(2) -2 (ຍ້ອນວ່າຈັດສົມຜົນໃໝ່ ➔ y = -2x + 5 ➔ m = -2)"}</span>,
          <span key="3">{"(3) 1 (ຍ້ອນວ່າຈັດສົມຜົນໃໝ່ ➔ 3y = 3x + 6 ➔ y = x + 2 ➔ m = 1)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 7 (ເພາະວ່າສົມຜົນຢູ່ໃນຮູບ y = mx + n ➔ n = 7)"}</span>,
          <span key="5">{"(2) 4 (ຍ້ອນວ່າຈັດສົມຜົນໃໝ່ ➔ 2y = x + 8 ➔ y = (1/2)x + 4 ➔ n = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"7 (ຜ່ານ A(0, 5) ➔ y = mx + n ມີ n = 5, m = 2 ➔ y = 2x + 5 ➔ a = 2, b = 5 ➔ a + b = 7)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"0 (ຜ່ານ B(2, 3) ➔ y - 3 = 3(x - 2) ➔ y = 3x - 6 + 3 ➔ y = 3x - 3 ➔ a = 3, b = -3 ➔ a + b = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"-2 (ຜ່ານ C(1, -2) ➔ y - (-2) = -4(x - 1) ➔ y + 2 = -4x + 4 ➔ y = -4x + 2 ➔ a = -4, b = 2 ➔ a + b = -2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"ເທົ່າກັນ (ສອງເສັ້ນຊື່ຂະໜານກັນຈະມີລະດັບຄວາມຊັນເທົ່າກັນສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ສົມຜົນເສັ້ນຊື່ເປັນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນເລຂາຄະນິດວິເຄາະ ແລະ ພຶດຊະຄະນິດ ມັນຖືກນຳໃຊ້ຢ່າງກວ້າງຂວາງໃນການສ້າງແຜນວາດ, ການວິເຄາະຂໍ້ມູນ ແລະ ຟີຊິກສາດ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
