import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ພາກທີ I - ບົດທີ 6: ການແກ້ສົມຜົນຂັ້ນສອງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດເດລຕາ Δ = b² - 4ac ແລະ ສູດໃຈຜົນຂອງສົມຜົນຂັ້ນສອງໃນການຊອກຫາໃຈຜົນຂອງສົມຜົນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 31-36",
  subSections: [
    {
      title: "1. ຕົວຈຳນວນເດລຕາ ແລະ ຈຳນວນໃຈຜົນ",
      keyPoint: {
        title: "ການກວດສອບໃຈຜົນດ້ວຍເດລຕາ (Δ)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສຳລັບສົມຜົນຂັ້ນສອງສົມບູນ ax² + bx + c = 0 (a ≠ 0), ເຮົາໃຊ້ຄ່າເດລຕາ (Δ) ເພື່ອກວດສອບຈຳນວນໃຈຜົນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold" }}>{"• ສູດຄິດໄລ່ເດລຕາ: "} <span className="math">{"Δ = b² - 4ac"}</span></div>
              <div>{"• ຖ້າ "} <span className="math">{"Δ > 0"}</span> {" ➔ ສົມຜົນມີ 2 ໃຈຜົນແຕກຕ່າງກັນ"}</div>
              <div>{"• ຖ້າ "} <span className="math">{"Δ = 0"}</span> {" ➔ ສົມຜົນມີ 1 ໃຈຜົນຊ້ອນ"}</div>
              <div>{"• ຖ້າ "} <span className="math">{"Δ < 0"}</span> {" ➔ ສົມຜົນບໍ່ມີໃຈຜົນໃນເຂດຈຳນວນຈິງ"}</div>
            </div>

            {/* Discriminant Flowchart SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ການວິເຄາະຈຳນວນໃຈຜົນຕາມຄ່າ Δ"}</span>
                <svg viewBox="0 0 400 160" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Delta Box */}
                  <rect x="150" y="10" width="100" height="40" rx="4" fill="#1565C0" />
                  <text x="200" y="36" fill="#FFFFFF" fontSize="18" textAnchor="middle" fontWeight="bold">{"Δ = b²-4ac"}</text>

                  {/* Branches */}
                  <line x1="200" y1="50" x2="80" y2="100" stroke="#37474F" strokeWidth="2" />
                  <line x1="200" y1="50" x2="200" y2="100" stroke="#37474F" strokeWidth="2" />
                  <line x1="200" y1="50" x2="320" y2="100" stroke="#37474F" strokeWidth="2" />

                  {/* Nodes */}
                  <circle cx="80" cy="100" r="20" fill="#4CAF50" />
                  <text x="80" y="106" fill="#FFFFFF" fontSize="16" textAnchor="middle" fontWeight="bold">{"> 0"}</text>
                  <text x="80" y="144" fill="#37474F" fontSize="16" textAnchor="middle">{"2 ໃຈຜົນ"}</text>

                  <circle cx="200" cy="100" r="20" fill="#FF9800" />
                  <text x="200" y="106" fill="#FFFFFF" fontSize="16" textAnchor="middle" fontWeight="bold">{"= 0"}</text>
                  <text x="200" y="144" fill="#37474F" fontSize="16" textAnchor="middle">{"1 ໃຈຜົນຊ້ອນ"}</text>

                  <circle cx="320" cy="100" r="20" fill="#F44336" />
                  <text x="320" y="106" fill="#FFFFFF" fontSize="16" textAnchor="middle" fontWeight="bold">{"< 0"}</text>
                  <text x="320" y="144" fill="#37474F" fontSize="16" textAnchor="middle">{"ບໍ່ມີໃຈຜົນ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວເລກສຳປະສິດ a, b, c ຕ້ອງກຳນົດເຄື່ອງໝາຍບວກ ຫຼື ລົບ ໃຫ້ຖືກຕ້ອງກ່ອນເອົາໄປແທນໃສ່ສູດເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຄ່າເດລຕາ (Δ) ຂອງສົມຜົນຂັ້ນສອງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"x² - 5x + 6 = 0"}</span> {" ມີຄ່າ Δ ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"x² - 4x + 4 = 0"}</span> {" ມີຄ່າ Δ ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"x² - 2x + 5 = 0"}</span> {" ມີຄ່າ Δ ເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງກຳນົດຈຳນວນໃຈຜົນຈິງຂອງສົມຜົນ (ຕອບເປັນຕົວເລກ '2', '1' ຫຼື '0'): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"x² - 6x + 9 = 0"}</span> {" ມີຈຳນວນໃຈຜົນຈັກໃຈຜົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"x² - 3x + 5 = 0"}</span> {" ມີຈຳນວນໃຈຜົນຈັກໃຈຜົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການນຳໃຊ້ສູດໃຈຜົນຂອງສົມຜົນຂັ້ນສອງ",
      keyPoint: {
        title: "ສູດທົ່ວໄປໃນການຫາໃຈຜົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອ Δ ≥ 0, ໃຈຜົນຂອງສົມຜົນ ax² + bx + c = 0 ສາມາດຫາໄດ້ຈາກສູດທົ່ວໄປ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດໃຈຜົນ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"x = "} <Fraction num="-b ± √Δ" den="2a" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: x² - 4x - 5 = 0 ➔ Δ = (-4)² - 4(1)(-5) = 16 + 20 = 36 ➔ √Δ = 6."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315", paddingLeft: "16px" }}>
                {"➔ x = "} <span className="math"><Fraction num="-(-4) ± 6" den="2(1)" /> {" = "} <Fraction num="4 ± 6" den="2" /></span> {" ➔ ໃຈຜົນແມ່ນ 5 ຫຼື -1."}
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າ Δ ເປັນເລກຖອດຮາກບໍ່ຂາດ ເຮົາສາມາດຕອບໃຈຜົນຕິດຮາກຂັ້ນສອງໄວ້ໄດ້ເລີຍເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາໃຈຜົນຂອງສົມຜົນຂັ້ນສອງ x² - 4x - 5 = 0: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃຈຜົນທີ່ເປັນຄ່າບວກ ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃຈຜົນທີ່ເປັນຄ່າລົບ ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ໃຈຜົນຊ້ອນຂອງສົມຜົນ "} <span className="math">{"x² - 6x + 9 = 0"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາໃຈຜົນຂອງສົມຜົນທີ່ມີສຳປະສິດ a > 1 ຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃຈຜົນທີ່ເປັນຄ່າບວກຂອງສົມຜົນ "} <span className="math">{"2x² - 3x - 2 = 0"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃຈຜົນທີ່ເປັນຄ່າລົບຂອງສົມຜົນດຽວກັນ ຢູ່ໃນຮູບແບບເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ສູດວີແອດ (Vieta's relations) ຫຼື ຄຸນລັກສະນະເດລຕາ ເພື່ອແກ້ໄຂໂຈດລະດັບສູງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການນຳໃຊ້ສູດວີແອດຊອກຫາຜົນບວກຂອງໃຈຜົນ (Sum of Roots using Vieta's Theorem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຜົນບວກຂອງສອງໃຈຜົນ "} <span className="math">{"(x_1 + x_2)"}</span> {" ຂອງສົມຜົນຂັ້ນສອງ "} <span className="math">{"3x² - 12x + 5 = 0"}</span> {". (ຄຳແນະນຳ: ນຳໃຊ້ສູດວີແອດ x_1 + x_2 = -b/a)"}
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຫາຄ່າພາຣາມິເຕີເພື່ອໃຫ້ສົມຜົນມີ 1 ໃຈຜົນຊ້ອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ m ທີ່ເຮັດໃຫ້ສົມຜົນຂັ້ນສອງ "} <span className="math">{"x² - 6x + m = 0"}</span> {" ມີພຽງແຕ່ 1 ໃຈຜົນຊ້ອນ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: m ="}</span>
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
            {"ໃຈຜົນຕິດຮາກຂັ້ນສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ "} <span className="math">{"x² - 2x - 1 = 0"}</span> {" ໂດຍນຳໃຊ້ສູດທົ່ວໄປ ຈະໄດ້ໃຈຜົນບວກຢູ່ໃນຮູບແບບ "} <span className="math">{"a + √b"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ a + b."}
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຂະໜາດສວນຄົວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ສວນຄົວຮູບສີ່ແຈສາກໜຶ່ງມີເນື້ອທີ່ "} <span className="math">{"24 m²"}</span> {" ແລະ ມີລວງຮອບແມ່ນ "} <span className="math">{"20 m"}</span> {". ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງທີ່ຍາວກວ່າ (ລວງຍາວ) ຂອງສວນຄົວນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລວງຍາວແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"m"}</span>
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
          <span key="1">{"(1) 1 (ເພາະວ່າ Δ = (-5)² - 4(1)(6) = 25 - 24 = 1)"}</span>,
          <span key="2">{"(2) 0 (ເພາະວ່າ Δ = (-4)² - 4(1)(4) = 16 - 16 = 0)"}</span>,
          <span key="3">{"(3) -16 (ເພາະວ່າ Δ = (-2)² - 4(1)(5) = 4 - 20 = -16)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 1 (ຍ້ອນວ່າ Δ = (-6)² - 4(1)(9) = 36 - 36 = 0 ➔ ມີ 1 ໃຈຜົນຊ້ອນ)"}</span>,
          <span key="5">{"(2) 0 (ຍ້ອນວ່າ Δ = (-3)² - 4(1)(5) = 9 - 20 = -11 ➔ ບໍ່ມີໃຈຜົນຈິງ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"4 (ຈາກສູດວີແອດ: ຜົນບວກໃຈຜົນ = -b/a = -(-12)/3 = 12/3 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"9 (ສົມຜົນມີ 1 ໃຈຜົນຊ້ອນ ເມື່ອ Δ = 0 ➔ (-6)² - 4(1)(m) = 0 ➔ 36 - 4m = 0 ➔ m = 9)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"3 (ແກ້ສົມຜົນ ➔ x = (2 ± √8) / 2 = 1 ± √2 ➔ ໃຈຜົນບວກແມ່ນ 1 + √2 ➔ a = 1, b = 2 ➔ a + b = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"6 m (ລວງຮອບ = 2(x+y) = 20 ➔ x+y = 10. ເນື້ອທີ່ = xy = 24 ➔ ສ້າງສົມຜົນ: x(10-x) = 24 ➔ x²-10x+24 = 0 ➔ (x-4)(x-6)=0 ➔ ຂ້າງຍາວແມ່ນ 6 m)"}</span>
        ]
      }
    ],
    advice: "ສູດທົ່ວໄປຂອງສົມຜົນຂັ້ນສອງ ແລະ ການຄຳນວນເດລຕາເປັນເຄື່ອງມືພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນພຶດຊະຄະນິດ ໝັ່ນຝຶກຝົນ ແລະ ວິເຄາະຄຳຕອບຢ່າງລະອຽດເດີ້!"
  }
};
