import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit43Data: UnitData = {
  unitNumber: 43,
  unitTitle: "ພາກທີ VI - ບົດທີ 43: ມາດຕາສ່ວນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບມາດຕາສ່ວນໃນແຜນທີ່ (Map Scale), ການຊອກຫາໄລຍະຫ່າງຕົວຈິງ, ການຊອກຫາໄລຍະຫ່າງໃນແຜນທີ່ ແລະ ການພົວພັນຫົວໜ່ວຍວັດແທກ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 196-202",
  subSections: [
    {
      title: "1. ການຊອກຫາໄລຍະຫ່າງຕົວຈິງ (Calculating Actual Distance)",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ສູດຄິດໄລ່ໄລຍະຫ່າງຕົວຈິງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ໄລຍະຫ່າງໃນແຜນທີ່ d ແລະ ມາດຕາສ່ວນ "}
              <span className="math"><Fraction num="1" den="M" /></span>
              {" ເຮົາສາມາດຊອກຫາໄລຍະຫ່າງຕົວຈິງ D ໄດ້ໂດຍໃຊ້ສູດ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄິດໄລ່: ໄລຍະຫ່າງຕົວຈິງ D = d × M"}
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 200,000. ຖ້າແທກໄດ້ d = 5 cm ➔ ໄລຍະຫ່າງຕົວຈິງແມ່ນຈັກກິໂລແມັດ (km)?"}</div>
              <div>{"➔ ວິທີຄິດ: D = 5 × 200,000 = 1,000,000 cm = 10,000 m = 10 km."}</div>
            </div>

            {/* Map Scale Bar SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດມາດຕາສ່ວນແຜນທີ່: 1 cm ໃນແຜນທີ່ ຄິດເປັນ 2 km ຕົວຈິງ (1 : 200,000)"}</span>
                <svg viewBox="0 0 200 80" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Road from Point A to Point B */}
                  <path d="M 30,30 Q 100,10 170,30" fill="none" stroke="#78909C" strokeWidth="4" strokeDasharray="5,5" />
                  
                  {/* Point A */}
                  <circle cx="30" cy="30" r="4.5" fill="#D32F2F" />
                  <text x="25" y="20" fill="#D32F2F" fontSize="8" fontWeight="bold">{"ເມືອງ A"}</text>
                  
                  {/* Point B */}
                  <circle cx="170" cy="30" r="4.5" fill="#1565C0" />
                  <text x="160" y="20" fill="#1565C0" fontSize="8" fontWeight="bold">{"ເມືອງ B"}</text>

                  {/* Map distance label */}
                  <text x="100" y="38" fill="#37474F" fontSize="8" textAnchor="middle">{"d = 7 cm (ໃນແຜນທີ່)"}</text>

                  {/* Scale Bar */}
                  <rect x="50" y="55" width="100" height="6" fill="#ECEFF1" stroke="#37474F" strokeWidth="1" />
                  <rect x="50" y="55" width="50" height="6" fill="#37474F" />
                  <text x="50" y="72" fill="#37474F" fontSize="7" textAnchor="middle">{"0"}</text>
                  <text x="100" y="72" fill="#37474F" fontSize="7" textAnchor="middle">{"10 km"}</text>
                  <text x="150" y="72" fill="#37474F" fontSize="7" textAnchor="middle">{"20 km"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມປ່ຽນຫົວໜ່ວຍສະເໝີເດີ້! 1 km = 1,000 m = 100,000 cm.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາໄລຍະຫ່າງຕົວຈິງຕາມເງື່ອນໄຂລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ແຜນທີ່ມາດຕາສ່ວນ 1 : 1,000, ຖ້າແທກ d = 5 cm ➔ ໄລຍະຫ່າງຕົວຈິງແມ່ນຈັກ ແມັດ (m)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ແຜນທີ່ມາດຕາສ່ວນ 1 : 50,000, ຖ້າແທກ d = 4 cm ➔ ໄລຍະຫ່າງຕົວຈິງແມ່ນຈັກ ກິໂລແມັດ (km)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ແຜນທີ່ມາດຕາສ່ວນ 1 : 200,000, ຖ້າແທກ d = 8 cm ➔ ໄລຍະຫ່າງຕົວຈິງແມ່ນຈັກ ກິໂລແມັດ (km)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ແຜນທີ່ມາດຕາສ່ວນ 1 : 2,500,000, ຖ້າແທກ d = 6 cm ➔ ໄລຍະຫ່າງຕົວຈິງແມ່ນຈັກ ກິໂລແມັດ (km)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span>{"ແຜນຜັງເຮືອນມາດຕາສ່ວນ 1 : 100, ຖ້າແທກ d = 12 cm ➔ ໄລຍະຫ່າງຕົວຈິງແມ່ນຈັກ ແມັດ (m)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. การຊອກຫາໄລຍະຫ່າງໃນແຜນທີ່ (Calculating Map Distance)",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ສູດຄິດໄລ່ໄລຍະຫ່າງໃນແຜນທີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ໄລຍະຫ່າງຕົວຈິງ D ແລະ ມາດຕາສ່ວນ "}
              <span className="math"><Fraction num="1" den="M" /></span>
              {" ເຮົາສາມາດຊອກຫາໄລຍະຫ່າງໃນແຜນທີ່ d ໄດ້ໂດຍໃຊ້ສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄິດໄລ່: ໄລຍະຫ່າງໃນແຜນທີ່ d = "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="D" den="M" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ໄລຍະຫ່າງຕົວຈິງ D = 15 km, ແຕ້ມໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 300,000 ຈະຍາວຈັກ cm?"}</div>
              <div>{"➔ ວິທີຄິດ: ປ່ຽນ D = 15 km = 1,500,000 cm ➔ d = 1,500,000 / 300,000 = 5 cm."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງແນ່ໃຈວ່າໄດ້ປ່ຽນຫົວໜ່ວຍໄລຍະຫ່າງຕົວຈິງເປັນ cm ກ່ອນເອົາໄປຫານໃຫ້ M ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາໄລຍະຫ່າງໃນແຜນທີ່ (cm) ຕາມເງື່ອນໄຂລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ໄລຍະຫ່າງຕົວຈິງ 30 m, ແຕ້ມໃນແຜນຜັງມາດຕາສ່ວນ 1 : 500 ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ໄລຍະຫ່າງຕົວຈິງ 8 km, ແຕ້ມໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 100,000 ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ໄລຍະຫ່າງຕົວຈິງ 40 km, ແຕ້ມໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 500,000 ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ໄລຍະຫ່າງຕົວຈິງ 150 km, ແຕ້ມໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 1,000,000 ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span>{"ຄວາມຍາວຫ້ອງຕົວຈິງ 9 m, ແຕ້ມໃນແຜນຜັງມາດຕາສ່ວນ 1 : 150 ຈະຍາວຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຊອກຫາອັດຕາສ່ວນໂດຍການຫານໄລຍະຫ່າງໃນແຜນທີ່ດ້ວຍໄລຍະຫ່າງຕົວຈິງ (ຕ້ອງປ່ຽນຫົວໜ່ວຍໃຫ້ຄືກັນກ່ອນເດີ້!)",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາມາດຕາສ່ວນ M (Finding the Scale Ratio M): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໄລຍະຫ່າງຕົວຈິງລະຫວ່າງສອງເມືອງແມ່ນ 45 km, ແຕ່ໃນແຜນທີ່ແທກໄດ້ 9 cm. ຖາມວ່າມາດຕາສ່ວນຂອງແຜນທີ່ນີ້ແມ່ນ 1 : ຈັກ?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 1 :"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ເນື້ອທີ່ຕົວຈິງຈາກແຜນຜັງ (Actual Area from a Blueprint): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນແຜນຜັງມາດຕາສ່ວນ 1 : 200, ເດີນບ້ານຫຼັງໜຶ່ງເປັນຮູບສາມແຈສາກທີ່ມີຂະໜາດໃນແຜນຜັງແມ່ນ d_1 = 3 cm, d_2 = 4 cm. ຖາມວ່າເນື້ອທີ່ຕົວຈິງຂອງເດີນບ້ານນີ້ແມ່ນຈັກຕາແມັດ (m²)?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ຕົວຈິງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ຕາແມັດ (m²)"}</span>
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
            {"ໂຈດບັນຫາໄລຍະທາງໃນແຜນທີ່ການທ່ອງທ່ຽວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ແຜນທີ່ທ່ອງທ່ຽວແຂວງຫຼວງພຣະບາງມີມາດຕາສ່ວນ 1 : 150,000. ຖ້າໄລຍະທາງຕົວຈິງຈາກຕົວເມືອງໄປຫານ້ຳຕົກຕາດກວາງຊີແມ່ນ 30 km. ຖາມວ່າໃນແຜນທີ່ນີ້ ໄລຍະທາງດັ່ງກ່າວຈະມີຄວາມຍາວຈັກ cm?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ:"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດບັນຫາຄວາມຍາວຂົວຕົວຈິງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຂົວມິດຕະພາບລາວ-ໄທແຫ່ງໜຶ່ງ ຖືກແຕ້ມໃນແຜນຜັງມາດຕາສ່ວນ 1 : 25,000 ໂດຍມີຄວາມຍາວໃນແຜນຜັງແມ່ນ 4.8 cm. ຖາມວ່າຄວາມຍາວຕົວຈິງຂອງຂົວແຫ່ງນີ້ແມ່ນຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຄວາມຍາວຕົວຈິງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ແມັດ (m)"}</span>
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
          <span key="1">{"(1) 50 (ເພາະວ່າ 5 × 1,000 = 5,000 cm = 50 m)"}</span>,
          <span key="2">{"(2) 2 (ເພາະວ່າ 4 × 50,000 = 200,000 cm = 2 km)"}</span>,
          <span key="3">{"(3) 16 (ເພາະວ່າ 8 × 200,000 = 1,600,000 cm = 16 km)"}</span>,
          <span key="4">{"(4) 150 (ເພາະວ່າ 6 × 2,500,000 = 15,000,000 cm = 150 km)"}</span>,
          <span key="5">{"(5) 12 (ເພາະວ່າ 12 × 100 = 1,200 cm = 12 m)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 6 (ເພາະວ່າ 3,000 cm / 500 = 6 cm)"}</span>,
          <span key="7">{"(2) 8 (ເພາະວ່າ 800,000 cm / 100,000 = 8 cm)"}</span>,
          <span key="8">{"(3) 8 (ເພາະວ່າ 4,000,000 cm / 500,000 = 8 cm)"}</span>,
          <span key="9">{"(4) 15 (ເພາະວ່າ 15,000,000 cm / 1,000,000 = 15 cm)"}</span>,
          <span key="10">{"(5) 6 (ເພາະວ່າ 900 cm / 150 = 6 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"500,000 (ເພາະວ່າ 45 km = 4,500,000 cm ➔ ມາດຕາສ່ວນ = 9 / 4,500,000 = 1 / 500,000)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"24 (ຂະໜາດຕົວຈິງ: 3 × 200 = 600 cm = 6 m, ແລະ 4 × 200 = 800 cm = 8 m ➔ ເນື້ອທີ່ຕົວຈິງ = (6 × 8) / 2 = 24 m²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"20 (ເພາະວ່າ d = 3,000,000 cm / 150,000 = 20 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"1,200 (ເພາະວ່າ D = 4.8 × 25,000 = 120,000 cm = 1,200 m)"}</span>
        ]
      }
    ],
    advice: "ການຮຽນຮູ້ເລື່ອງມາດຕາສ່ວນມີຜົນປະໂຫຍດຫຼາຍໃນການອ່ານແຜນທີ່, ການອອກແບບສະຖາປັດຕະຍະກຳ ແລະ ວິສະວະກຳສາດເດີ້!"
  }
};
