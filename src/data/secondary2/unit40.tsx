import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit40Data: UnitData = {
  unitNumber: 40,
  unitTitle: "ພາກທີ VI - ບົດທີ 40: ການເປັນອັດຕາສ່ວນພົວພັນກົງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈສົມຜົນອັດຕາສ່ວນພົວພັນກົງ y = kx, ການຊອກຫາສຳປະສິດພົວພັນກົງ k = y/x ແລະ ການແກ້ໂຈດບັນຫາພົວພັນກົງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 181-185",
  subSections: [
    {
      title: "1. ການຊອກຫາສຳປະສິດພົວພັນກົງ (Finding the Constant of Proportion k)",
      keyPoint: {
        title: "ຫຼັກການພົວພັນກົງ ແລະ ສຳປະສິດ k",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງປະລິມານ x ແລະ y ພົວພັນກົງກັນ ເມື່ອອັດຕາສ່ວນລະຫວ່າງ y ແລະ x ມີຄ່າຄົງທີ່:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"• ສູດພົວພັນກົງ: "} <span className="math">{"y = k × x"}</span><br />
              <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສຳປະສິດພົວພັນກົງ: "} <span style={{ fontWeight: "bold", color: "#D32F2F" }}>{"k = "}</span> <Fraction num="y" den="x" />
              </span><br />
              {"• ຕົວຢ່າງ: ຖ້າ x = 3 ➔ y = 12 ➔ ຈະໄດ້ k = 12 / 3 = 4."}
            </div>

            {/* Direct Proportion Graph SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນສະແດງອັດຕາສ່ວນພົວພັນກົງ y = 3x (ຜ່ານຈຸດ 0)"}</span>
                <svg viewBox="0 0 160 160" style={{ width: "100%", maxWidth: "140px", height: "auto" }}>
                  {/* Grid */}
                  <line x1="10" y1="80" x2="150" y2="80" stroke="#B0BEC5" strokeWidth="1" />
                  <line x1="80" y1="10" x2="80" y2="150" stroke="#B0BEC5" strokeWidth="1" />
                  
                  {/* Proportion line y = 3x (passes 0,0 and 2,6 ➔ (120, 20)) */}
                  <line x1="40" y1="140" x2="120" y2="20" stroke="#2E7D32" strokeWidth="2.5" />
                  
                  {/* Point (2, 6) ➔ x=120, y=20 */}
                  <circle cx="120" cy="20" r="3.5" fill="#D32F2F" />
                  <text x="123" y="28" fill="#D32F2F" fontSize="8" fontWeight="bold">{"(2, 6)"}</text>
                  <line x1="120" y1="20" x2="120" y2="80" stroke="#D32F2F" strokeWidth="0.8" strokeDasharray="2,2" />
                  <line x1="120" y1="20" x2="80" y2="20" stroke="#D32F2F" strokeWidth="0.8" strokeDasharray="2,2" />

                  {/* Labels */}
                  <text x="150" y="75" fill="#37474F" fontSize="8">{"x"}</text>
                  <text x="85" y="18" fill="#37474F" fontSize="8">{"y"}</text>
                  <text x="73" y="90" fill="#37474F" fontSize="8">{"O"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເສັ້ນສະແດງຂອງອັດຕາສ່ວນພົວພັນກົງ ຈະຕ້ອງເປັນເສັ້ນຊື່ທີ່ຂີດຜ່ານຈຸດເຄົ້າ O(0,0) ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາສຳປະສິດພົວພັນກົງ k ຈາກເງື່ອນໄຂທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າ x = 3 ➔ y = 12. ສຳປະສິດພົວພັນກົງ k (k = y/x) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ x = 5 ➔ y = 35. ສຳປະສິດພົວພັນກົງ k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    {"ຖ້າ x = 8 ➔ y = 4. ສຳປະສິດພົວພັນກົງ k (ຕອບເປັນເລກສ່ວນຂັ້ນຕໍ່າ) ແມ່ນ:"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າ x = -2 ➔ y = 10. ສຳປະສິດພົວພັນກົງ k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    {"ຖ້າ x = 6 ➔ y = 9. ສຳປະສິດພົວພັນກົງ k (ຕອບເປັນເລກສ່ວນຂັ້ນຕໍ່າ) ແມ່ນ:"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ y ຈາກ x ແລະ k (Calculating y from x and k)",
      keyPoint: {
        title: "ການຕື່ມຄ່າຕາຕະລາງ ແລະ ສົມຜົນພົວພັນກົງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ສຳປະສິດ k ເຮົາສາມາດຊອກຫາຄ່າ y ໄດ້ໂດຍການຄູນ k ໃສ່ x (y = kx):"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ຕົວຢ່າງ: ຖ້າສົມຜົນແມ່ນ y = 4x, ເມື່ອ x = 5 ➔ y = 4 × 5 = 20."}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງຄິດໄລ່ຢ່າງລະມັດລະວັງເວລາສຳປະສິດ k ເປັນເລກສ່ວນ ຫຼື ເລກລົບເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຂອງ y ຈາກສົມຜົນພົວພັນກົງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກສູດ y = 4x. ຖ້າ x = 5, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກສູດ y = 7x. ຖ້າ x = 6, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    {"ຈາກສູດ y = "} <Fraction num="1" den="2" /> {"x. ຖ້າ x = 16, y ຈະເທົ່າກັບຈັກ?"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຈາກສູດ y = -3x. ຖ້າ x = 4, y ຈະເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    {"ຈາກສູດ y = "} <Fraction num="2" den="3" /> {"x. ຖ້າ x = 15, y ຈະເທົ່າກັບຈັກ?"}
                  </span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຊອກຫາສຳປະສິດພົວພັນກົງກ່ອນ ແລ້ວຈຶ່ງຄິດໄລ່ຫາຕົວລັບທີ່ຕ້ອງການເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາຕົວປະສານທີສອງຈາກຕາຕະລາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຖ້າ x ແລະ y ພົວພັນກົງກັນ. ຖ້າ x = 2 ➔ y = 6. ຖ້າ x = 7 ➔ y = a. ຈົ່ງຊອກຫາຄ່າຂອງ a."}
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
              {"ຊອກຫາ x ຈາກ y ໃນສົມຜົນພົວພັນກົງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈາກສົມຜົນພົວພັນກົງ y = 5x. ຖ້າ y = 35, ຄ່າຂອງ x ຈະແມ່ນເທົ່າໃດ?"}
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
            {"ໂຈດບັນຫາການຊື້ປຶ້ມ (ພົວພັນກົງ): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ລາຄາປຶ້ມພົວພັນກົງກັບຈຳນວນຫົວທີ່ຊື້. ຖ້າຊື້ປຶ້ມ 3 ຫົວ ລາຄາ 15,000 ກີບ. ຖ້າຕ້ອງການຊື້ປຶ້ມ 7 ຫົວ ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຕ້ອງຈ່າຍເງິນທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            <span>{"ກີບ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາໄລຍະທາງ ແລະ ເວລາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ໄລຍະທາງແລ່ນຂອງລົດຖີບພົວພັນກົງກັບເວລາ. ຖ້າລົດຖີບແລ່ນໄດ້ 120 ກິໂລແມັດ (km) ໃນເວລາ 2 ຊົ່ວໂມງ. ຖ້າແລ່ນໃນເວລາ 5 ຊົ່ວໂມງ ດ້ວຍຄວາມໄວເທົ່າເດີມ ຈະໄດ້ໄລຍະທາງຈັກ km?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ໄລຍະທາງ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"km"}</span>
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
          <span key="1">{"(1) 4 (ເພາະວ່າ k = y / x = 12 / 3 = 4)"}</span>,
          <span key="2">{"(2) 7 (ເພາະວ່າ k = 35 / 5 = 7)"}</span>,
          <span key="3">{"(3) 1/2 (ເພາະວ່າ k = 4 / 8 = 1/2)"}</span>,
          <span key="4">{"(4) -5 (ເພາະວ່າ k = 10 / -2 = -5)"}</span>,
          <span key="5">{"(5) 3/2 (ເພາະວ່າ k = 9 / 6 = 3/2)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 20 (y = 4 × 5 = 20)"}</span>,
          <span key="7">{"(2) 42 (y = 7 × 6 = 42)"}</span>,
          <span key="8">{"(3) 8 (y = 1/2 × 16 = 8)"}</span>,
          <span key="9">{"(4) -12 (y = -3 × 4 = -12)"}</span>,
          <span key="10">{"(5) 10 (y = 2/3 × 15 = 10)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"21 (ສຳປະສິດ k = 6 / 2 = 3 ➔ a = 3 × 7 = 21)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"7 (y = 5x ➔ 35 = 5x ➔ x = 35 / 5 = 7)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"35000 (ຄ່າ k = 15,000 / 3 = 5,000 ກີບ/ຫົວ ➔ ລາຄາ 7 ຫົວ = 7 × 5,000 = 35,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"300 (ຄວາມໄວ k = 120 / 2 = 60 km/h ➔ ໄລຍະທາງ 5 ຊົ່ວໂມງ = 5 × 60 = 300 km)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການວິເຄາະສົມຜົນພົວພັນກົງ ແລະ ສຳປະສິດພົວພັນກົງ ຈະຊ່ວຍໃຫ້ເຮົາແກ້ໄຂໂຈດບັນຫາເລຂາຄະນິດ ແລະ ຟີຊິກສາດໄດ້ດີຂຶ້ນເດີ້!"
  }
};
