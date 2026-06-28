import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit42Data: UnitData = {
  unitNumber: 42,
  unitTitle: "ພາກທີ VI - ບົດທີ 42: ເລກສ່ວນຮ້ອຍ",
  unitGoal: "ຮຽນຮູ້ການຄິດໄລ່ເລກສ່ວນຮ້ອຍ (Percentage), ການຊອກຫາຄ່າຈາກສ່ວນຮ້ອຍ, ການຊອກຫາອັດຕາສ່ວນຮ້ອຍ ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 191-195",
  subSections: [
    {
      title: "1. ການຊອກຫາຄ່າຈາກສ່ວນຮ້ອຍ (Finding the Value from a Percentage)",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ສູດຄິດໄລ່ສ່ວນຮ້ອຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຊອກຫາຄ່າຂອງ p% ຈາກຈຳນວນທັງໝົດ A ສາມາດຄິດໄລ່ໄດ້ໂດຍໃຊ້ສູດ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄິດໄລ່: ຄ່າທີ່ໄດ້ = "} 
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="p" den="100" /> {" × A"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: 15% ຂອງ 200,000 ກີບ ແມ່ນຈັກກີບ?"}</div>
              <div>{"➔ ວິທີຄິດ: "} <span className="math"><Fraction num="15" den="100" /> {" × 200,000 = 0.15 × 200,000 = 30,000 ກີບ."}</span></div>
            </div>

            {/* Circular Pie Chart SVG representing 25% and 75% */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສ່ວນຮ້ອຍ: ການແບ່ງ 25% (ສ່ວນຫຼຸດ) ແລະ 75% (ສ່ວນທີ່ຕ້ອງຈ່າຍ)"}</span>
                <svg viewBox="0 0 160 160" style={{ width: "100%", maxWidth: "140px", height: "auto" }}>
                  {/* Outer circle line */}
                  <circle cx="80" cy="80" r="60" fill="#ECEFF1" stroke="#B0BEC5" strokeWidth="2" />
                  
                  {/* Pie slice for 25% (90 degrees, from 12 o'clock to 3 o'clock) */}
                  <path d="M 80,80 L 80,20 A 60,60 0 0,1 140,80 Z" fill="#FF7043" />
                  
                  {/* Remaining 75% */}
                  <path d="M 80,80 L 140,80 A 60,60 0 1,1 80,20 Z" fill="#4CAF50" opacity="0.8" />
                  
                  {/* Value markers */}
                  <text x="110" y="45" fill="#FFFFFF" fontSize="10" fontWeight="bold">{"25%"}</text>
                  <text x="50" y="100" fill="#FFFFFF" fontSize="10" fontWeight="bold">{"75%"}</text>
                  
                  {/* Labels outside */}
                  <text x="80" y="15" fill="#D84315" fontSize="8" textAnchor="middle" fontWeight="bold">{"ຫຼຸດ 25%"}</text>
                  <text x="80" y="152" fill="#2E7D32" fontSize="8" textAnchor="middle" fontWeight="bold">{"ຈ່າຍ 75%"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເປີເຊັນ (%) ໝາຍເຖິງສ່ວນຮ້ອຍ ທີ່ມີສ່ວນສ່ວນເປັນ 100 ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄ່າສ່ວນຮ້ອຍຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"15% ຂອງເງິນ 200,000 ກີບ ແມ່ນເທົ່າໃດ ກີບ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"40% ຂອງນັກຮຽນ 120 ຄົນ ແມ່ນຈັກ ຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"8% ຂອງເນື້ອທີ່ 500 ຕາແມັດ ແມ່ນຈັກ ຕາແມັດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"120% ຂອງນ້ຳໜັກ 80 ກິໂລກຣາມ ແມ່ນຈັກ ກິໂລກຣາມ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"0.5% ຂອງໄລຍະທາງ 10,000 ແມັດ ແມ່ນຈັກ ແມັດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຊອກຫາອັດຕາສ່ວນຮ້ອຍ (Finding the Percentage Rate)",
      keyPoint: {
        title: "ການປ່ຽນອັດຕາສ່ວນເປັນເປີເຊັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອຊອກຫາວ່າ ຈຳນວນ A ຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງຈຳນວນທັງໝົດ B ເຮົາໃຊ້ສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄິດໄລ່: ອັດຕາສ່ວນຮ້ອຍ = "} 
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="A" den="B" /> {" × 100%"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#C62828" }}>{"• ຕົວຢ່າງ: ສອບເສັງໄດ້ 18 ຄະແນນ ຈາກຄະແນນເຕັມ 20, ໄດ້ຈັກສ່ວນຮ້ອຍ?"}</div>
              <div>{"➔ ວິທີຄິດ: "} <span className="math"><Fraction num="18" den="20" /> {" × 100% = 0.9 × 100% = 90%."}</span></div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫານຕົວເລກທີ່ສົນໃຈດ້ວຍຕົວເລກທັງໝົດ ແລ້ວຄູນໃຫ້ 100 ເພື່ອປ່ຽນເປັນສ່ວນຮ້ອຍເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາອັດຕາສ່ວນຮ້ອຍ (%) ຂອງຈຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ - ບໍ່ຕ້ອງໃສ່ເຄື່ອງໝາຍ %)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"18 ຄະແນນ ຈາກຄະແນນເຕັມ 20 ຄິດເປັນຈັກ ສ່ວນຮ້ອຍ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ເງິນ 15,000 ກີບ ຈາກເງິນທັງໝົດ 75,000 ກີບ ຄິດເປັນຈັກ ສ່ວນຮ້ອຍ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ນັກຮຽນຍິງ 15 ຄົນ ໃນຫ້ອງທີ່ມີນັກຮຽນທັງໝົດ 30 ຄົນ ຄິດເປັນຈັກ ສ່ວນຮ້ອຍ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ໝາກໄມ້ເນົ່າ 3 ໜ່ວຍ ຈາກໝາກໄມ້ທັງໝົດ 50 ໜ່ວຍ ຄິດເປັນຈັກ ສ່ວນຮ້ອຍ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ເງິນ 120,000 ກີບ ຈາກເງິນທັງໝົດ 80,000 ກີບ ຄິດເປັນຈັກ ສ່ວນຮ້ອຍ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ສໍາລັບການຫຼຸດລາຄາ ໃຫ້ຄິດໄລ່ຈຳນວນເງິນທີ່ຫຼຸດກ່ອນ ແລ້ວຈຶ່ງລົບອອກຈາກລາຄາເດີມເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ລາຄາຫຼັງຫຼຸດລາຄາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສື້ອໂຕໜຶ່ງລາຄາປົກກະຕິ 80,000 ກີບ. ທາງຮ້ານຕິດປ້າຍຫຼຸດລາຄາ 20%. ຖາມວ່າລາຄາຂາຍຕົວຈິງຫຼັງຫຼຸດແລ້ວແມ່ນຈັກ ກີບ?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ລາຄາຂາຍແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ກີບ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ລາຄາລວມພາສີມູນຄ່າເພີ່ມ (VAT): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຄອມພິວເຕີເຄື່ອງໜຶ່ງລາຄາ 4,000,000 ກີບ, ຕ້ອງເສຍພາສີມູນຄ່າເພີ່ມ (VAT) 10%. ຖາມວ່າລາຄາສຸດທ້າຍທີ່ຕ້ອງຈ່າຍທັງໝົດແມ່ນຈັກ ກີບ?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ລາຄາສຸດທ້າຍແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ກີບ"}</span>
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
            {"ໂຈດບັນຫາການເພີ່ມຂຶ້ນຂອງປະຊາກອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໝູ່ບ້ານແຫ່ງໜຶ່ງມີປະຊາກອນໃນປີກາຍນີ້ 1,200 ຄົນ. ມາຮອດປີນີ້ ປະຊາກອນເພີ່ມຂຶ້ນ 5%. ຖາມວ່າປີນີ້ໝູ່ບ້ານນີ້ມີປະຊາກອນທັງໝົດຈັກ ຄົນ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ປີນີ້ມີປະຊາກອນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຄົນ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາອັດຕາສ່ວນນັກຮຽນສອບເສັງຜ່ານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃນຫ້ອງຮຽນໜຶ່ງມີນັກຮຽນທັງໝົດ 40 ຄົນ, ມີນັກຮຽນສອບເສັງຜ່ານວິຊາຄະນິດສາດ 36 ຄົນ. ຖາມວ່ານັກຮຽນທີ່ສອບເສັງຜ່ານຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງນັກຮຽນທັງໝົດ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຄິດເປັນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ສ່ວນຮ້ອຍ (%)"}</span>
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
          <span key="1">{"(1) 30,000 (ເພາະວ່າ 0.15 × 200,000 = 30,000)"}</span>,
          <span key="2">{"(2) 48 (ເພາະວ່າ 0.40 × 120 = 48)"}</span>,
          <span key="3">{"(3) 40 (ເພາະວ່າ 0.08 × 500 = 40)"}</span>,
          <span key="4">{"(4) 96 (ເພາະວ່າ 1.20 × 80 = 96)"}</span>,
          <span key="5">{"(5) 50 (ເພາະວ່າ 0.005 × 10,000 = 50)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 90 (ເພາະວ່າ 18/20 × 100 = 90)"}</span>,
          <span key="7">{"(2) 20 (ເພາະວ່າ 15,000/75,000 × 100 = 20)"}</span>,
          <span key="8">{"(3) 50 (ເພາະວ່າ 15/30 × 100 = 50)"}</span>,
          <span key="9">{"(4) 6 (ເພາະວ່າ 3/50 × 100 = 6)"}</span>,
          <span key="10">{"(5) 150 (ເພາະວ່າ 120,000/80,000 × 100 = 150)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"64,000 (ສ່ວນຫຼຸດແມ່ນ 80,000 × 20% = 16,000 ກີບ ➔ ລາຄາຂາຍແມ່ນ 80,000 - 16,000 = 64,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"4,400,000 (ພາສີ VAT ແມ່ນ 4,000,000 × 10% = 400,000 ກີບ ➔ ລາຄາລວມແມ່ນ 4,000,000 + 400,000 = 4,400,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"1,260 (ຈຳນວນທີ່ເພີ່ມແມ່ນ 1,200 × 5% = 60 ຄົນ ➔ ປີນີ້ມີ 1,200 + 60 = 1,260 ຄົນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"90 (ເພາະວ່າ 36/40 × 100% = 90%)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການຄິດໄລ່ເລກສ່ວນຮ້ອຍໃນຊີວິດປະຈຳວັນ ເຊັ່ນ ການຫຼຸດລາຄາສິນຄ້າ ແລະ ດອກເບ້ຍ ທະນາຄານ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈບົດຮຽນໄດ້ຢ່າງເລິກເຊິ່ງສະເໝີເດີ້!"
  }
};
