const fs = require('fs');

const code = `import React from "react";
import { Unit } from "./units1";

export const unitsData4: Unit[] = [
  {
    unitNumber: 1,
    unitTitle: "ຈຳນວນຫຼາຍກວ່າ 10000",
    unitGoal: "ອ່ານ ແລະ ຂຽນຈຳນວນຫຼາຍກວ່າ 10000",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 6-15",
    keyPoints: {
      hint: {
        text: "ການອ່ານຈຳນວນໃຫຍ່ໆ, ໃຫ້ແບ່ງອ່ານເທື່ອລະ 3 ຕົວເລກຈາກເບື້ອງຂວາມາເບື້ອງຊ້າຍເດີ!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"1. ຈຳນວນຫຼາຍກວ່າ 10000"}</h3>
          <p style={{ fontSize: "20px" }}>{"ຕາຕະລາງຄ່າປະຈຳຫຼັກ (Place Value Chart) ຊ່ວຍໃຫ້ເຮົາອ່ານຈຳນວນໃຫຍ່ໆໄດ້ງ່າຍຂຶ້ນ."}</p>
          
          {/* Place Value Chart */}
          <div style={{ display: "flex", flexDirection: "column", border: "2px solid #333", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            {/* Headers */}
            <div style={{ display: "flex", backgroundColor: "#4CAF50", color: "white", fontWeight: "bold", textAlign: "center", fontSize: "18px" }}>
              <div style={{ flex: 1, padding: "12px", borderRight: "2px solid #333" }}>{"ຫຼັກລ້ານ"}</div>
              <div style={{ flex: 1, padding: "12px", borderRight: "2px solid #333" }}>{"ຫຼັກແສນ"}</div>
              <div style={{ flex: 1, padding: "12px", borderRight: "2px solid #333" }}>{"ຫຼັກໝື່ນ"}</div>
              <div style={{ flex: 1, padding: "12px", borderRight: "2px solid #333" }}>{"ຫຼັກພັນ"}</div>
              <div style={{ flex: 1, padding: "12px", borderRight: "2px solid #333" }}>{"ຫຼັກຮ້ອຍ"}</div>
              <div style={{ flex: 1, padding: "12px", borderRight: "2px solid #333" }}>{"ຫຼັກສິບ"}</div>
              <div style={{ flex: 1, padding: "12px" }}>{"ຫຼັກໜ່ວຍ"}</div>
            </div>
            {/* Example Row */}
            <div style={{ display: "flex", backgroundColor: "#FFF", textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
              <div style={{ flex: 1, padding: "16px", borderRight: "2px solid #ccc" }}>{"4"}</div>
              <div style={{ flex: 1, padding: "16px", borderRight: "2px solid #ccc", backgroundColor: "#F5F5F5" }}>{"0"}</div>
              <div style={{ flex: 1, padding: "16px", borderRight: "2px solid #ccc" }}>{"7"}</div>
              <div style={{ flex: 1, padding: "16px", borderRight: "2px solid #ccc", backgroundColor: "#F5F5F5" }}>{"8"}</div>
              <div style={{ flex: 1, padding: "16px", borderRight: "2px solid #ccc" }}>{"3"}</div>
              <div style={{ flex: 1, padding: "16px", borderRight: "2px solid #ccc", backgroundColor: "#F5F5F5" }}>{"0"}</div>
              <div style={{ flex: 1, padding: "16px" }}>{"9"}</div>
            </div>
          </div>
          
          <div style={{ backgroundColor: "#E3F2FD", padding: "16px", borderRadius: "8px", borderLeft: "6px solid #2196F3" }}>
            <p style={{ fontSize: "22px", margin: 0, fontWeight: "bold" }}>{"ອ່ານວ່າ: ສີ່ລ້ານ ເຈັດໝື່ນແປດພັນ ສາມຮ້ອຍເກົ້າ (4,078,309)"}</p>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງເບິ່ງຕາຕະລາງຄ່າປະຈຳຫຼັກລຸ່ມນີ້ ແລ້ວຕື່ມຕົວເລກ ແລະ ຄຳອ່ານໃສ່ບ່ອນຫວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Problem 1.1 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"(1)"}</span>
                <div style={{ display: "flex", border: "1px solid #333", borderRadius: "4px", overflow: "hidden", width: "100%", maxWidth: "500px" }}>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ລ້ານ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ແສນ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ໝື່ນ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ພັນ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ຮ້ອຍ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ສິບ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#E0F7FA", padding: "8px", textAlign: "center", fontSize: "14px", fontWeight: "bold" }}>{"ໜ່ວຍ"}</div>
                </div>
                <div style={{ display: "flex", border: "1px solid #333", borderTop: "none", borderRadius: "0 0 4px 4px", overflow: "hidden", width: "100%", maxWidth: "500px", fontSize: "20px", fontWeight: "bold", backgroundColor: "#FFF" }}>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"2"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"0"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"5"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"0"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"0"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"3"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center" }}>{"0"}</div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", fontSize: "20px" }}>
                  <span>{"ຂຽນເປັນຕົວເລກ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              
              {/* Problem 1.2 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"(2)"}</span>
                <div style={{ display: "flex", border: "1px solid #333", borderRadius: "4px", overflow: "hidden", width: "100%", maxWidth: "500px" }}>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ລ້ານ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ແສນ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ໝື່ນ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ພັນ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ຮ້ອຍ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", borderRight: "1px solid #333", fontSize: "14px", fontWeight: "bold" }}>{"ສິບ"}</div>
                  <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "8px", textAlign: "center", fontSize: "14px", fontWeight: "bold" }}>{"ໜ່ວຍ"}</div>
                </div>
                <div style={{ display: "flex", border: "1px solid #333", borderTop: "none", borderRadius: "0 0 4px 4px", overflow: "hidden", width: "100%", maxWidth: "500px", fontSize: "20px", fontWeight: "bold", backgroundColor: "#FFF" }}>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{" "}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"8"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"0"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"0"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"4"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center", borderRight: "1px dashed #ccc" }}>{"0"}</div>
                  <div style={{ flex: 1, padding: "12px 8px", textAlign: "center" }}>{"0"}</div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", fontSize: "20px" }}>
                  <span>{"ອ່ານວ່າ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "250px", height: "40px" }}></span>
                </div>
              </div>

            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ຈຳນວນຕໍ່ໄປນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 10 ເທື່ອຂອງ 45,000 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) ຈຳນວນທີ່ 23,000 ຖືກຫານໃຫ້ 10 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນ (Number Line) ລຸ່ມນີ້ ແລ້ວຕື່ມໃສ່ບ່ອນຫວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "40px", marginTop: "20px" }}>
                
                {/* Number Line 1 */}
                <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "600px", borderBottom: "4px solid #333" }}>
                  <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "-20px", width: "40px", textAlign: "center", fontWeight: "bold" }}>{"0"}</div>
                  
                  <div style={{ position: "absolute", bottom: "-4px", left: "50%", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 30px)", width: "60px", textAlign: "center", fontWeight: "bold" }}>{"50,000"}</div>
                  
                  <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", right: "-30px", width: "60px", textAlign: "center", fontWeight: "bold" }}>{"100,000"}</div>

                  {/* Ticks */}
                  {[1,2,3,4, 6,7,8,9].map(i => (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: \`\${i * 10}%\`, width: "2px", height: "10px", backgroundColor: "#666" }}></div>
                  ))}

                  {/* Arrows */}
                  <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                  </div>
                  <div style={{ position: "absolute", bottom: "10px", left: "80%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(1) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(2) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  </div>
                </div>

              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ backgroundColor: "#FFF9C4", padding: "16px", borderRadius: "8px", border: "2px dashed #FF9800", fontSize: "18px" }}>
                  {"(3) ປະເທດລາວມີປະຊາກອນປະມານ 7,300,000 ຄົນ. ຖ້າປະຊາກອນເພີ່ມຂຶ້ນອີກ 100,000 ຄົນ, ປະຊາກອນທັງໝົດຈະເປັນຈັກຄົນ?"}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "20px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ສັງເກດເບິ່ງດີໆວ່າ 1 ຂີດນ້ອຍໆຂອງເສັ້ນຈຳນວນໝາຍເຖິງເທົ່າໃດ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປຽບທຽບຈຳນວນ ໂດຍຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ບ່ອນຫວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
              <div style={{ display: "flex", gap: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(1) 45,000"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"40,500"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) 100,000"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"99,999"}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(3) 123,456"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"123,456"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(4) 5,000,000"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"5,000,001"}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(5) 10 ເທື່ອຂອງ 4,000"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"40,000"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", gap: "60px", paddingLeft: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", fontSize: "24px", fontFamily: "monospace", letterSpacing: "4px" }}>
                <div>{"(6)"}</div>
                <div>{"  45000"}</div>
                <div style={{ borderBottom: "2px solid #000", paddingBottom: "4px", width: "120px", textAlign: "right" }}>{"+ 23000"}</div>
                <div style={{ height: "40px" }}></div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", fontSize: "24px", fontFamily: "monospace", letterSpacing: "4px" }}>
                <div>{"(7)"}</div>
                <div>{"  87000"}</div>
                <div style={{ borderBottom: "2px solid #000", paddingBottom: "4px", width: "120px", textAlign: "right" }}>{"- 15000"}</div>
                <div style={{ height: "40px" }}></div>
              </div>
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
            <span key="1">{"(1) 2,050,030, (2) ແປດແສນສີ່ຮ້ອຍ (800,400)"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(3) 450,000, (4) 2,300"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 30,000, (2) 80,000"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="4">{"(3) 7,400,000 ຄົນ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">{"(1) >, (2) >, (3) =, (4) <, (5) ="}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="6">{"(6) 68000, (7) 72000"}</span>
          ]
        }
      ],
      advice: "ຖ້າຕົວເລກຫຼາຍ, ໃຫ້ຂຽນຈຸດ (,) ຂັ້ນທຸກໆ 3 ຕົວເລກ ເພື່ອຈະໄດ້ອ່ານງ່າຍຂຶ້ນ!"
    }
  },
  
  {
    unitNumber: 2,
    unitTitle: "ຈຳນວນໂດຍປະມານ",
    unitGoal: "ເຂົ້າໃຈການຊອກຫາຈຳນວນໂດຍປະມານດ້ວຍການປັດຂຶ້ນ ຫຼື ປັດລົງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 16-23",
    keyPoints: {
      hint: {
        text: "ຖ້າຕົວເລກຖັດໄປແມ່ນ 0, 1, 2, 3, 4 ໃຫ້ປັດລົງ. ແຕ່ຖ້າເປັນ 5, 6, 7, 8, 9 ໃຫ້ປັດຂຶ້ນເດີ!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"2. ຈຳນວນໂດຍປະມານ (Rounding)"}</h3>
          
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ flex: 1, backgroundColor: "#FFF3E0", padding: "16px", borderRadius: "8px", border: "2px solid #FF9800" }}>
              <h4 style={{ margin: "0 0 10px 0", color: "#E65100" }}>{"ປັດລົງ (Round Down)"}</h4>
              <p style={{ margin: 0 }}>{"ເມື່ອຕົວເລກທີ່ຕ້ອງພິຈາລະນາແມ່ນ 0, 1, 2, 3, 4 ເຮົາຈະປ່ຽນເປັນ 0 ໝົດ."}</p>
            </div>
            <div style={{ flex: 1, backgroundColor: "#E8F5E9", padding: "16px", borderRadius: "8px", border: "2px solid #4CAF50" }}>
              <h4 style={{ margin: "0 0 10px 0", color: "#2E7D32" }}>{"ປັດຂຶ້ນ (Round Up)"}</h4>
              <p style={{ margin: 0 }}>{"ເມື່ອຕົວເລກທີ່ຕ້ອງພິຈາລະນາແມ່ນ 5, 6, 7, 8, 9 ເຮົາຈະບວກ 1 ໃສ່ຫຼັກທາງໜ້າ ແລ້ວປ່ຽນທາງຫຼັງເປັນ 0."}</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", border: "1px solid #ccc" }}>
            <p style={{ fontWeight: "bold", fontSize: "18px", margin: "0 0 16px 0", textAlign: "center" }}>{"ຕົວຢ່າງ: ຊອກຫາຈຳນວນໂດຍປະມານຂອງ 6,840 ຢູ່ໃນຫຼັກພັນ"}</p>
            
            {/* Rounding Number Line */}
            <div style={{ position: "relative", height: "80px", width: "100%", maxWidth: "600px", margin: "0 auto", borderBottom: "4px solid #333" }}>
              <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
              <div style={{ position: "absolute", bottom: "-24px", left: "-20px", width: "40px", textAlign: "center", fontWeight: "bold", color: "#1976D2" }}>{"6,000"}</div>
              
              <div style={{ position: "absolute", bottom: "-4px", left: "50%", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
              <div style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 30px)", width: "60px", textAlign: "center", fontWeight: "bold" }}>{"6,500"}</div>
              
              <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
              <div style={{ position: "absolute", bottom: "-24px", right: "-30px", width: "60px", textAlign: "center", fontWeight: "bold", color: "#E91E63" }}>{"7,000"}</div>

              {/* Arrow pointing to 6840 */}
              <div style={{ position: "absolute", bottom: "10px", left: "84%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "#FFF", padding: "2px 6px", border: "1px solid #000", borderRadius: "4px", marginBottom: "4px" }}>{"6,840"}</div>
                <div style={{ fontSize: "20px", fontWeight: "bold", color: "#000" }}>{"↓"}</div>
              </div>
            </div>
            
            <p style={{ textAlign: "center", marginTop: "40px", fontSize: "16px" }}>
              {"6,840 ແມ່ນຢູ່ໃກ້ກັບ 7,000 ຫຼາຍກວ່າ 6,000 (ເພາະຫຼັກຮ້ອຍແມ່ນ 8 > 5) ສະນັ້ນ ປັດຂຶ້ນເປັນ 7,000."}
            </p>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຊອກຫາຈຳນວນໂດຍປະມານ ໂດຍການປັດຂຶ້ນ ຫຼື ປັດລົງຕາມທີ່ກຳນົດ: "} <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            
            <table style={{ width: "100%", maxWidth: "600px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px", marginLeft: "16px" }}>
              <thead>
                <tr style={{ backgroundColor: "#E0E0E0", borderBottom: "2px solid #333" }}>
                  <th style={{ padding: "12px", border: "1px solid #ccc" }}>{"ຈຳນວນ"}</th>
                  <th style={{ padding: "12px", border: "1px solid #ccc" }}>{"ປະມານຫຼັກສິບ"}</th>
                  <th style={{ padding: "12px", border: "1px solid #ccc" }}>{"ປະມານຫຼັກຮ້ອຍ"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid #ccc", fontWeight: "bold" }}>{"(1) 4,236"}</td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px" }}></span></td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px" }}></span></td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", border: "1px solid #ccc", fontWeight: "bold" }}>{"(2) 8,975"}</td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px" }}></span></td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px" }}></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຊອກຫາຈຳນວນໂດຍປະມານຂອງ 4,425 ໃຫ້ເປັນຫຼັກພັນ: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px" }}>
              {/* Number Line */}
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333", marginTop: "20px" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-20px", width: "40px", textAlign: "center", fontWeight: "bold" }}>{"4,000"}</div>
                
                <div style={{ position: "absolute", bottom: "-4px", left: "50%", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 30px)", width: "60px", textAlign: "center" }}>{"4,500"}</div>
                
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "20px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-30px", width: "60px", textAlign: "center", fontWeight: "bold" }}>{"5,000"}</div>

                <div style={{ position: "absolute", bottom: "10px", left: "42.5%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "#FFF", padding: "2px 6px", border: "1px solid #000", borderRadius: "4px", marginBottom: "4px" }}>{"4,425"}</div>
                  <div style={{ fontSize: "20px", fontWeight: "bold", color: "#E91E63" }}>{"↓"}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "40px", fontSize: "20px" }}>
                <span>{"(3) ຄຳຕອບແມ່ນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຂອບເຂດຂອງຈຳນວນ: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "18px" }}>
                <p>{"ຖ້າປັດຈຳນວນໜຶ່ງເປັນຫຼັກພັນແລ້ວໄດ້ 3,000."}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(1) ຈຳນວນທີ່ນ້ອຍທີ່ສຸດ ທີ່ປັດເປັນ 3,000 ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) ຈຳນວນທີ່ໃຫຍ່ທີ່ສຸດ ທີ່ປັດເປັນ 3,000 ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
                <div style={{ height: "10px", width: "100%", maxWidth: "400px", background: "linear-gradient(to right, transparent 20%, rgba(76, 175, 80, 0.3) 20%, rgba(76, 175, 80, 0.3) 80%, transparent 80%)", borderLeft: "2px solid #333", borderRight: "2px solid #333", position: "relative" }}>
                  <div style={{ position: "absolute", top: "-20px", left: "20%", transform: "translateX(-50%)", fontSize: "12px" }}>{"ນ້ອຍສຸດ"}</div>
                  <div style={{ position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>{"3000"}</div>
                  <div style={{ position: "absolute", top: "-20px", left: "80%", transform: "translateX(-50%)", fontSize: "12px" }}>{"ໃຫຍ່ສຸດ"}</div>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "18px" }}>
                <div style={{ backgroundColor: "#F3E5F5", padding: "16px", borderRadius: "8px", border: "2px dashed #9C27B0" }}>
                  {"(3) ໄປຊື້ເຄື່ອງຢູ່ຕະຫຼາດ, ຊີ້ນໝູລາຄາ 48,500 ກີບ ແລະ ຜັກລາຄາ 12,000 ກີບ. ຖ້າປະມານລາຄາເປັນຫຼັກໝື່ນ, ເຮົາຄວນກຽມເງິນໄປປະມານຈັກກີບ ຈຶ່ງຈະພໍ?"}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບປະມານ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ຂອບເຂດການປັດຂຶ້ນ ຫຼື ປັດລົງ ເລີ່ມແຕ່ 5 ປັດຂຶ້ນ, 4 ປັດລົງ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ ໂດຍປ່ຽນເປັນຈຳນວນປະມານຫຼັກພັນກ່ອນ ແລ້ວຈຶ່ງບວກກັນ: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) 4,800 + 3,100  → ປະມານເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"+"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 9,500 - 2,400  → ປະມານເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"-"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ອ່ານກຣາບໂດຍປະມານ: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", gap: "20px", alignItems: "center" }}>
              <div style={{ width: "60px", height: "120px", borderLeft: "2px solid #000", borderBottom: "2px solid #000", position: "relative", display: "flex", alignItems: "flex-end", paddingLeft: "10px" }}>
                {/* Y-axis Labels */}
                <span style={{ position: "absolute", bottom: "100px", left: "-40px", fontSize: "12px" }}>{"10,000"}</span>
                <div style={{ position: "absolute", bottom: "100px", left: "0", width: "5px", height: "2px", backgroundColor: "#000" }}></div>
                <span style={{ position: "absolute", bottom: "50px", left: "-35px", fontSize: "12px" }}>{"5,000"}</span>
                <div style={{ position: "absolute", bottom: "50px", left: "0", width: "5px", height: "2px", backgroundColor: "#000" }}></div>
                
                {/* Bar near 7000 */}
                <div style={{ width: "30px", height: "70px", backgroundColor: "#2196F3", border: "1px solid #1565C0" }}></div>
              </div>
              <div style={{ fontSize: "18px" }}>
                <p>{"(3) ຈາກກຣາບເສົາ, ຄວາມສູງຂອງເສົາແມ່ນປະມານເທົ່າໃດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
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
            <span key="1">{"(1) ຫຼັກສິບ: 4,240, ຫຼັກຮ້ອຍ: 4,200", "(2) ຫຼັກສິບ: 8,980, ຫຼັກຮ້ອຍ: 9,000"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(3) 4,000"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 2,500, (2) 3,499"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="4">{"(3) ປະມານ 60,000 ກີບ (48500 ປັດເປັນ 50000, 12000 ປັດເປັນ 10000)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">{"(1) 5,000 + 3,000 = 8,000", "(2) 10,000 - 2,000 = 8,000"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="6">{"(3) ປະມານ 7,000"}</span>
          ]
        }
      ],
      advice: "ກ່ອນຈະປັດຂຶ້ນ ຫຼື ປັດລົງ, ໃຫ້ເບິ່ງວ່າເຂົາຖາມຫາຫຼັກໃດ ແລ້ວພິຈາລະນາຕົວເລກທີ່ຢູ່ເບື້ອງຂວາມືຂອງຫຼັກນັ້ນ!"
    }
  }
];
`;

fs.writeFileSync('src/data/units4.tsx', code);
