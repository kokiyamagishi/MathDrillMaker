import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit4Data: UnitData = {
  unitNumber: 4,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ເສັ້ນສະແດງຂອງຕຳລາຂັ້ນສອງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄຸນລັກສະນະຂອງເສັ້ນສະແດງພາລາໂບລາ ຂອງຕຳລາຂັ້ນສອງ y = ax² ແລະ ການຊອກຫາຈຸດຍອດ, ເສັ້ນເຄິ່ງຄື",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 19-24",
  subSections: [
    {
      title: "1. ຮູບຮ່າງ ແລະ ຄ່າຂອງຕຳລາ y = ax² (Shape and Values of y = ax²)",
      keyPoint: {
        title: "ຄຸນລັກສະນະ ແລະ ທິດທາງຂອງພາລາໂບລາ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນສະແດງຂອງຕຳລາຂັ້ນສອງ y = ax² (a ≠ 0) ເປັນເສັ້ນໂຄ້ງທີ່ເອີ້ນວ່າ ພາລາໂບລາ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຖ້າ a > 0: ເສັ້ນສະແດງຈະ ງາຍ ແລະ ມີຈຸດຍອດເປັນ ຈຸດຕ່ຳສຸດ."}</div>
              <div>{"• ຖ້າ a < 0: ເສັ້ນສະແດງຈະ ຄວ້ຳ ແລະ ມີຈຸດຍອດເປັນ ຈຸດສູງສຸດ."}</div>
              <div>{"• ຖ້າ |a| ຍິ່ງໃຫຍ່ ເສັ້ນສະແດງຈະຍິ່ງ ແຄບ (Steeper/Narrower)."}</div>
            </div>

            {/* Parabola Upward/Downward SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນສະແດງພາລາໂບລາ y = x² (ງາຍ) ແລະ y = -x² (ຄວ້ຳ)"}</span>
                <svg viewBox="0 0 320 320" style={{ width: "100%", maxWidth: "280px", height: "auto" }}>
                  {/* Axes */}
                  <line x1="20" y1="160" x2="300" y2="160" stroke="#37474F" strokeWidth="3" />
                  <line x1="160" y1="20" x2="160" y2="300" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Upward Parabola y = x^2 */}
                  <path d="M 60,60 Q 160,260 260,60" fill="none" stroke="#2196F3" strokeWidth="5" />
                  <text x="250" y="50" fill="#2196F3" fontSize="16" fontWeight="bold">{"y = x²"}</text>

                  {/* Downward Parabola y = -x^2 */}
                  <path d="M 60,260 Q 160,60 260,260" fill="none" stroke="#F44336" strokeWidth="5" />
                  <text x="250" y="280" fill="#F44336" fontSize="16" fontWeight="bold">{"y = -x²"}</text>

                  {/* Origin */}
                  <circle cx="160" cy="160" r="6" fill="#37474F" />
                  <text x="170" y="176" fill="#37474F" fontSize="16">{"(0,0)"}</text>
                  <text x="290" y="150" fill="#37474F" fontSize="16">{"x"}</text>
                  <text x="170" y="36" fill="#37474F" fontSize="16">{"y"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝາກຫົວໜ່ວຍກົງກັນຂ້າມກັບເຄື່ອງໝາຍຂອງ a: ຖ້າ a ເປັນບວກ ➔ ງາຍ, ຖ້າ a ເປັນລົບ ➔ ຄວ້ຳເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຄ່າ y ຂອງຕຳລາຂັ້ນສອງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"y = 2x²"}</span> {", ຖ້າ x = 3 ➔ ຈະໄດ້ y ເທົ່າກັບເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"y = -3x²"}</span> {", ຖ້າ x = -2 ➔ ຈະໄດ້ y ເທົ່າກັບເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"y = "} <Fraction num="1" den="2" /> {"x²"}</span> {", ຖ້າ x = 4 ➔ ຈະໄດ້ y ເທົ່າກັບເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຮ່າງຂອງເສັ້ນສະແດງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເສັ້ນສະແດງຂອງຕຳລາ "} <span className="math">{"y = -4x²"}</span> {" ຈະມີຮູບຮ່າງ ງາຍ ຫຼື ຄວ້ຳ? (ຕອບ ງາຍ ຫຼື ຄວ້ຳ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ລະຫວ່າງ "} <span className="math">{"y = 5x²"}</span> {" ແລະ "} <span className="math">{"y = 2x²"}</span> {", ເສັ້ນສະແດງໃດມີຮູບຮ່າງ ແຄບ ກວ່າກັນ? (ຕອບເປັນຕຳລາ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຈຸດຍອດ ແລະ ເສັ້ນເຄິ່ງຄື",
      keyPoint: {
        title: "ຈຸດພິເສດຂອງພາລາໂບລາ y = ax²",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ພາລາໂບລາຮູບຮ່າງ y = ax² ມີຈຸດພິເສດສະເພາະທີ່ຕ້ອງຈື່ດັ່ງນີ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຈຸດຍອດ: ຢູ່ທີ່ຈຸດເຄິ່ງກາງພິກັດສະເໝີ ➔ O(0, 0)."}</div>
              <div>{"• ເສັ້ນເຄິ່ງຄື: ແມ່ນແກນຕັ້ງ Oy ➔ ມີສົມຜົນ x = 0."}</div>
              <div>{"• ການຊອກຫາສຳປະສິດ a: ຖ້າຮູ້ຈຸດໜຶ່ງ (x₁, y₁) ທີ່ຢູ່ເທິງເສັ້ນສະແດງ ເຮົາສາມາດຊອກຫາ a ໄດ້ໂດຍການແທນຄ່າໃສ່ສູດ: y₁ = ax₁²."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຸດຍອດຂອງ y = ax² ຈະຢູ່ທີ່ຈຸດພິກັດເລີ່ມຕົ້ນ (0, 0) ສະເໝີ ໂດຍບໍ່ມີການຍ້າຍຂະໜານເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຈຸດຍອດ ແລະ ເສັ້ນເຄິ່ງຄື: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈຸດຍອດຂອງເສັ້ນສະແດງ ພາລາໂບລາ "} <span className="math">{"y = -3x²"}</span> {" ແມ່ນຈຸດໃດ? (ຕອບເປັນຄູ່ພິກັດ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສົມຜົນເສັ້ນເຄິ່ງຄືຂອງພາລາໂບລາ "} <span className="math">{"y = 5x²"}</span> {" ແມ່ນສົມຜົນໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"y = 2x²"}</span> {", ຈຸດຍອດ (0,0) ຈະແມ່ນຈຸດຕ່ຳສຸດ ຫຼື ສູງສຸດ? (ຕອບ ຕ່ຳສຸດ ຫຼື ສູງສຸດ)"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາສຳປະສິດ a ຈາກຈຸດທີ່ເສັ້ນສະແດງຜ່ານ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນສະແດງ "} <span className="math">{"y = ax²"}</span> {" ຜ່ານຈຸດ (2, 8). ສຳປະສິດ a ຈະເທົ່າກັບເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນສະແດງ "} <span className="math">{"y = ax²"}</span> {" ຜ່ານຈຸດ (-3, -18). ສຳປະສິດ a ຈະເທົ່າກັບເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ແທນຄູ່ພິກັດ x, y ໃສ່ສົມຜົນຢ່າງຖືກຕ້ອງ ແລະ ວິເຄາະຫາຄ່າສູງສຸດ-ຕ່ຳສຸດຢ່າງລະມັດລະວັງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາສຳປະສິດ a ຈາກພິກັດເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າພາລາໂບລາ "} <span className="math">{"y = ax²"}</span> {" ຜ່ານຈຸດ (-4, 8). ຈົ່ງຊອກຫາຄ່າຂອງ a. (ແທນ x = -4, y = 8 ໃສ່ສົມຜົນ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a ="}</span>
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
              {"ການຊອກຫາຄ່າສູງສຸດຂອງຕຳລາໃນຂອບເຂດທີ່ກຳນົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃຫ້ຕຳລາ "} <span className="math">{"y = -2x²"}</span> {". ຖ້າຕົວປ່ຽນ x ປ່ຽນແປງໃນຂອບເຂດ "} <span className="math">{"-1 ≤ x ≤ 3"}</span> {", ຈົ່ງຊອກຫາຄ່າສູງສຸດ ຂອງ y ຕົວຈິງ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄ່າສູງສຸດຂອງ y ແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາການອອກແບບຂົວແຂວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສາຍກາບຂົວແຂວນແຫ່ງໜຶ່ງມີຮູບຮ່າງເປັນພາລາໂບລາ y = ax². ຖ້າຂົວຍາວ 100 ແມັດ, ແລະ ສາຍກາບແຂວນສູງຈາກພື້ນຂົວ 25 ແມັດ ຢູ່ຈຸດສຸດທ້າຍ (x = 50, y = 25). ຈົ່ງຊອກຫາສຳປະສິດ a. (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: a ="}</span>
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
            {"ໂຈດບັນຫາການປຽບທຽບຄ່າຂອງຕຳລາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ສຳລັບຕຳລາພາລາໂບລາ "} <span className="math">{"y = 2x²"}</span> {". ຈົ່ງປຽບທຽບຄ່າຂອງ y ລະຫວ່າງ x₁ = -3 ແລະ x₂ = 2. ຖາມວ່າຄ່າ x ໃດທີ່ໃຫ້ຄ່າ y ຫຼາຍກວ່າກັນ? (ຕອບ x=-3 ຫຼື x=2)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
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
          <span key="1">{"(1) 18 (ເພາະວ່າ y = 2 × 3² = 2 × 9 = 18)"}</span>,
          <span key="2">{"(2) -12 (ເພາະວ່າ y = -3 × (-2)² = -3 × 4 = -12)"}</span>,
          <span key="3">{"(3) 8 (ເພາະວ່າ y = 1/2 × 4² = 1/2 × 16 = 8)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) ຄວ້ຳ (ຍ້ອນວ່າສຳປະສິດ a = -4 < 0)"}</span>,
          <span key="5">{"(2) y = 5x² (ຍ້ອນວ່າ |5| > |2| ➔ ເສັ້ນສະແດງຈະແຄບກວ່າ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"1/2 (ເພາະວ່າ 8 = a × (-4)² ➔ 8 = 16a ➔ a = 8 / 16 = 1/2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"0 (ຍ້ອນວ່າ a = -2 < 0 ➔ ພາລາໂບລາຄວ້ຳ ➔ ມີຈຸດສູງສຸດຢູ່ຈຸດຍອດ (0,0) ເຊິ່ງ x=0 ຢູ່ໃນຊ່ວງ -1 ≤ x ≤ 3 ➔ ຄ່າສູງສຸດແມ່ນ y = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"1/100 (ເພາະວ່າ 25 = a × 50² ➔ 25 = 2500a ➔ a = 25 / 2500 = 1/100)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"x=-3 (ເພາະວ່າ ຖ້າ x = -3 ➔ y = 2 × (-3)² = 18. ຖ້າ x = 2 ➔ y = 2 × 2² = 8 ➔ 18 > 8 ➔ x=-3 ໃຫ້ຄ່າ y ຫຼາຍກວ່າ)"}</span>
        ]
      }
    ],
    advice: "ການເຂົ້າໃຈຮູບຮ່າງ ແລະ ຄຸນລັກສະນະຂອງພາລາໂບລາ ຊ່ວຍໃຫ້ພວກເຮົາສາມາດອອກແບບຂົວແຂວນ, ໂຄມໄຟສະທ້ອນແສງ ແລະ ຈານດາວທຽມໄດ້ຢ່າງມີປະສິດທິພາບເດີ້!"
  }
};
