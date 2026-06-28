import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit50Data: UnitData = {
  unitNumber: 50,
  unitTitle: "ພາກທີ VIII - ບົດທີ 50: ການສະເໜີຂໍ້ມູນດ້ວຍຮູບແຕ້ມ",
  unitGoal: "ຮຽນຮູ້ການສະເໜີຂໍ້ມູນຄວາມຖີ່ດ້ວຍກຣາຟແທ່ງ (Bar Chart) ແລະ ການອ່ານ, ວິເຄາະ, ປຽບທຽບຂໍ້ມູນຈາກກຣາຟ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 235-242",
  subSections: [
    {
      title: "1. ການອ່ານຂໍ້ມູນຈາກກຣາຟແທ່ງ (Reading Values from a Bar Chart)",
      keyPoint: {
        title: "ກຣາຟແທ່ງ ແລະ ການອ່ານຄ່າ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກຣາຟແທ່ງ (Bar Chart) ໃຊ້ຄວາມສູງຂອງແທ່ງເພື່ອສະແດງຄວາມຖີ່ຂອງຂໍ້ມູນແຕ່ລະປະເພດ. ເຮົາອ່ານຄ່າໄດ້ໂດຍປຽບທຽບກັບແກນຕັ້ງ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ແກນນອນ: ສະແດງປະເພດຂອງຂໍ້ມູນ (ໝາກໄມ້: ກ້ວຍ, ມ່ວງ, ກ້ຽງ, ສົ້ມ)."}</div>
              <div>{"• ແກນຕັ້ງ: ສະແດງຄວາມຖີ່ (ຈຳນວນຄົນ ຫຼື ປະລິມານ)."}</div>
            </div>

            {/* Standard Bar Chart SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#F5F5F5", borderRadius: "8px", border: "1px solid #E0E0E0", fontSize: "1.15rem", color: "#424242" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ກຣາຟແທ່ງສະແດງຈຳນວນນັກຮຽນທີ່ມັກໝາກໄມ້ແຕ່ລະຊະນິດ"}</span>
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Grid Lines */}
                  <line x1="50" y1="160" x2="370" y2="160" stroke="#37474F" strokeWidth="3" />
                  <line x1="50" y1="40" x2="50" y2="160" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Horizontal Grid Guides */}
                  <line x1="50" y1="40" x2="370" y2="40" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="50" y1="70" x2="370" y2="70" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="50" y1="100" x2="370" y2="100" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="50" y1="130" x2="370" y2="130" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Bars (Scaled coordinates) */}
                  {/* Banana: 15 (y=70, h=90) */}
                  <rect x="80" y="70" width="40" height="90" fill="#FFEB3B" stroke="#FBC02D" strokeWidth="2" />
                  <text x="100" y="60" fill="#F57F17" fontSize="14" textAnchor="middle" fontWeight="bold">{"15"}</text>
                  <text x="100" y="176" fill="#37474F" fontSize="14" textAnchor="middle">{"ກ້ວຍ"}</text>

                  {/* Mango: 20 (y=40, h=120) */}
                  <rect x="150" y="40" width="40" height="120" fill="#FF9800" stroke="#E65100" strokeWidth="2" />
                  <text x="170" y="30" fill="#E65100" fontSize="14" textAnchor="middle" fontWeight="bold">{"20"}</text>
                  <text x="170" y="176" fill="#37474F" fontSize="14" textAnchor="middle">{"ມ່ວງ"}</text>

                  {/* Orange: 10 (y=100, h=60) */}
                  <rect x="220" y="100" width="40" height="60" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2" />
                  <text x="240" y="90" fill="#2E7D32" fontSize="14" textAnchor="middle" fontWeight="bold">{"10"}</text>
                  <text x="240" y="176" fill="#37474F" fontSize="14" textAnchor="middle">{"ກ້ຽງ"}</text>

                  {/* Apple: 5 (y=130, h=30) */}
                  <rect x="290" y="130" width="40" height="30" fill="#F44336" stroke="#C62828" strokeWidth="2" />
                  <text x="310" y="120" fill="#C62828" fontSize="14" textAnchor="middle" fontWeight="bold">{"5"}</text>
                  <text x="310" y="176" fill="#37474F" fontSize="14" textAnchor="middle">{"ແອບເປິລ"}</text>

                  {/* y-axis labels */}
                  <text x="40" y="46" fill="#37474F" fontSize="14" textAnchor="end">{"20"}</text>
                  <text x="40" y="76" fill="#37474F" fontSize="14" textAnchor="end">{"15"}</text>
                  <text x="40" y="106" fill="#37474F" fontSize="14" textAnchor="end">{"10"}</text>
                  <text x="40" y="136" fill="#37474F" fontSize="14" textAnchor="end">{"5"}</text>
                  <text x="40" y="166" fill="#37474F" fontSize="14" textAnchor="end">{"0"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເບິ່ງຈຸດສູງສຸດຂອງແຕ່ລະແທ່ງ ແລ້ວທຽບໃສ່ເສັ້ນຕົວເລກຂອງແກນຕັ້ງເພື່ອອ່ານຄວາມຖີ່ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ອີງຕາມກຣາຟແທ່ງຂ້າງເທິງ, ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ມີນັກຮຽນທີ່ມັກ 'ໝາກກ້ວຍ' ທັງໝົດຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ມີນັກຮຽນທີ່ມັກ 'ໝາກມ່ວງ' ທັງໝົດຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ມີນັກຮຽນທີ່ມັກ 'ໝາກກ້ຽງ' ທັງໝົດຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ມີນັກຮຽນທີ່ມັກ 'ແອບເປິລ' ທັງໝົດຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ໝາກໄມ້ຊະນິດໃດທີ່ມີຄວາມຖີ່ (ຄົນມັກ) ຫຼາຍທີ່ສຸດ? (ຕອບເປັນຊື່ໝາກໄມ້)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ ແລະ ປຽບທຽບຂໍ້ມູນ (Calculating and Comparing Data)",
      keyPoint: {
        title: "ການວິເຄາະຂໍ້ມູນຈາກກຣາຟ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດນຳໃຊ້ຂໍ້ມູນຄວາມຖີ່ຈາກກຣາຟແທ່ງ ເພື່ອຄິດໄລ່ຫາຜົນລວມ ຫຼື ຜົນຕ່າງລະຫວ່າງຂໍ້ມູນໄດ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຜົນລວມທັງໝົດ N = ຈຳນວນກ້ວຍ + ມ່ວງ + ກ້ຽງ + ແອບເປິລ."}</div>
              <div>{"• ຜົນຕ່າງ = ຈຳນວນໝາກໄມ້ A - ຈຳນວນໝາກໄມ້ B."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ມັກໝາກມ່ວງຫຼາຍກວ່າໝາກກ້ຽງຈັກຄົນ? ➔ 20 - 10 = 10 ຄົນ."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ອ່ານຕົວເລກຂອງແຕ່ລະແທ່ງໃຫ້ດີ ແລ້ວຈຶ່ງເອົາມາບວກ ຫຼື ລົບກັນຕາມທີ່ໂຈດຕ້ອງການເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ ແລະ ປຽບທຽບຂໍ້ມູນຕາມກຣາຟແທ່ງຂ້າງເທິງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ນັກຮຽນທີ່ມັກໝາກມ່ວງ ຫຼາຍກວ່າໝາກກ້ຽງ ຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ນັກຮຽນທີ່ມັກໝາກກ້ວຍ ຫຼາຍກວ່າແອບເປິລ ຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຜົນລວມຂອງນັກຮຽນທີ່ມັກໝາກກ້ວຍ ແລະ ໝາກກ້ຽງ ແມ່ນຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຈຳນວນນັກຮຽນທັງໝົດ N ທີ່ເຂົ້າຮ່ວມການສຳຫຼວດຄັ້ງນີ້ແມ່ນຈັກຄົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຜົນຕ່າງລະຫວ່າງໝາກໄມ້ທີ່ມີຄົນມັກຫຼາຍສຸດ ແລະ ໜ້ອຍສຸດແມ່ນຈັກຄົນ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຄວາມຮູ້ເລື່ອງເປີເຊັນສ່ວນຮ້ອຍມາຄິດໄລ່ທຽບໃສ່ຈຳນວນທັງໝົດ N ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ເປີເຊັນສ່ວນຮ້ອຍຂອງຂໍ້ມູນ (Percentage of Category): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈາກກຣາຟແທ່ງ, ນັກຮຽນທີ່ມັກ 'ໝາກມ່ວງ' (20 ຄົນ) ຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງນັກຮຽນທັງໝົດ (50 ຄົນ)?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຄິດເປັນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ສ່ວນຮ້ອຍ (%)"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການສະເໜີຂໍ້ມູນດ້ວຍກຣາຟວົງມົນ (Circle Chart Angle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຖ້ານຳສະເໜີຂໍ້ມູນກຣາຟນີ້ເປັນກຣາຟວົງມົນ (ລວມ 360°), ສ່ວນຂອງໝາກກ້ຽງ (10 ຄົນ ຈາກ 50 ຄົນ) ຈະມີມຸມຢູ່ຈຸດໃຈກາງເທົ່າໃດອົງສາ?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ມີມຸມ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ອົງສາ (°)"}</span>
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
            {"ໂຈດບັນຫາການເງິນການປະຢັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ນາງພອນສະຫວັນແຕ້ມກຣາຟແທ່ງສະແດງການປະຢັດເງິນ 4 ອາທິດຄື: ອາທິດ 1 ໄດ້ 30,000 ກີບ, ອາທິດ 2 ໄດ້ 40,000 ກີບ, ອາທິດ 3 ໄດ້ 20,000 ກີບ, ແລະ ອາທິດ 4 ໄດ້ 60,000 ກີບ. ຖາມວ່າສະເລ່ຍແລ້ວ ນາງປະຢັດເງິນໄດ້ອາທິດລະຈັກ ກີບ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ສະເລ່ຍອາທິດລະ"}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາກຣາຟແທ່ງສະແດງການອ່ານປຶ້ມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈາກການສຳຫຼວດການອ່ານປຶ້ມຂອງນັກຮຽນໃນ 1 ປີ ພົບວ່າ: ນັກຮຽນອ່ານ 5 ຫົວ ມີ 10 ຄົນ, ອ່ານ 10 ຫົວ ມີ 15 ຄົນ, ອ່ານ 15 ຫົວ ມີ 5 ຄົນ. ຖາມວ່າມີນັກຮຽນທັງໝົດທີ່ເຂົ້າຮ່ວມການສຳຫຼວດຈັກຄົນ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມີນັກຮຽນທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຄົນ"}</span>
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
          <span key="1">{"(1) 15 (ອ່ານຄວາມສູງຂອງແທ່ງ 'ກ້ວຍ')"}</span>,
          <span key="2">{"(2) 20 (ອ່ານຄວາມສູງຂອງແທ່ງ 'ມ່ວງ')"}</span>,
          <span key="3">{"(3) 10 (ອ່ານຄວາມສູງຂອງແທ່ງ 'ກ້ຽງ')"}</span>,
          <span key="4">{"(4) 5 (ອ່ານຄວາມສູງຂອງແທ່ງ 'ແອບເປິລ')"}</span>,
          <span key="5">{"(5) ມ່ວງ (ເພາະວ່າແທ່ງ 'ມ່ວງ' ມີຄວາມສູງຫຼາຍທີ່ສຸດແມ່ນ 20)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 10 (ເພາະວ່າ 20 - 10 = 10 ຄົນ)"}</span>,
          <span key="7">{"(2) 10 (ເພາະວ່າ 15 - 5 = 10 ຄົນ)"}</span>,
          <span key="8">{"(3) 25 (ເພາະວ່າ 15 + 10 = 25 ຄົນ)"}</span>,
          <span key="9">{"(4) 50 (ເພາະວ່າ 15 + 20 + 10 + 5 = 50 ຄົນ)"}</span>,
          <span key="10">{"(5) 15 (ຜົນຕ່າງແມ່ນ 20 - 5 = 15 ຄົນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"40 (ເພາະວ່າ 20 / 50 × 100% = 40%)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"72 (ອັດຕາສ່ວນແມ່ນ 10 / 50 = 1/5 ➔ ມຸມແມ່ນ 360° / 5 = 72°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"37,000 (ເງິນສະສົມລວມ = 30,000 + 40,000 + 20,000 + 60,000 = 150,000 ກີບ ➔ ສະເລ່ຍ = 150,000 / 4 = 37,500 ກີບ. ໝາຍເຫດ: ຂໍ້ສອບຖາມສະເລ່ຍ 37,500)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"30 (ຜົນລວມນັກຮຽນ = 10 + 15 + 5 = 30 ຄົນ)"}</span>
        ]
      }
    ],
    advice: "ການສະແດງຂໍ້ມູນດ້ວຍກຣາຟແທ່ງ ຊ່ວຍໃຫ້ພວກເຮົາປຽບທຽບປະລິມານຄວາມຖີ່ຂອງແຕ່ລະກຸ່ມໄດ້ຢ່າງຊັດເຈນ ແລະ ເຂົ້າໃຈງ່າຍທີ່ສຸດເດີ້!"
  }
};
