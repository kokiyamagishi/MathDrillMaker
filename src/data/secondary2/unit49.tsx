import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit49Data: UnitData = {
  unitNumber: 49,
  unitTitle: "ພາກທີ VIII - ບົດທີ 49: ການເກັບກຳຂໍ້ມູນ ແລະ ການສະເໜີຂໍ້ມູນດ້ວຍຕາຕະລາງ",
  unitGoal: "ຮຽນຮູ້ວິທີການເກັບກຳຂໍ້ມູນ (Data Collection), ການສ້າງຕາຕະລາງແຈກຢາຍຄວາມຖີ່ (Frequency Table) ແລະ ການຄິດໄລ່ຄວາມຖີ່ທຽບເທົ່າ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 228-234",
  subSections: [
    {
      title: "1. ການຊອກຫາຄວາມຖີ່ຈາກຂໍ້ມູນດິບ (Calculating Frequency from Raw Data)",
      keyPoint: {
        title: "ຄວາມຖີ່ ແລະ ການນັບຂໍ້ມູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມຖີ່ (Frequency) ແມ່ນຈຳນວນເທື່ອທີ່ຂໍ້ມູນແຕ່ລະຕົວປະກົດຂຶ້ນໃນກຸ່ມຂໍ້ມູນທັງໝົດ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຕົວຢ່າງ: ຂໍ້ມູນຄະແນນສອບເສັງຂອງນັກຮຽນ 7 ຄົນແມ່ນ: [5, 7, 5, 8, 5, 9, 7]"}</div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"➔ ຄວາມຖີ່ຂອງຄະແນນ 5 ປະກົດຂຶ້ນ 3 ເທື່ອ ➔ ຄວາມຖີ່ແມ່ນ 3."}</div>
              <div>{"➔ ຄວາມຖີ່ຂອງຄະແນນ 7 ປະກົດຂຶ້ນ 2 ເທື່ອ ➔ ຄວາມຖີ່ແມ່ນ 2."}</div>
            </div>

            {/* Statistics Bar Chart SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດເສົາສະແດງຄວາມຖີ່ຂອງຄະແນນ [5, 7, 8, 9]"}</span>
                <svg viewBox="0 0 180 100" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Grid Lines */}
                  <line x1="20" y1="80" x2="160" y2="80" stroke="#37474F" strokeWidth="1.5" />
                  <line x1="20" y1="20" x2="20" y2="80" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Bars (Scaled coordinates) */}
                  {/* Score 5: Freq = 3 ➔ Height = 45 */}
                  <rect x="35" y="35" width="20" height="45" fill="#4CAF50" />
                  <text x="45" y="30" fill="#4CAF50" fontSize="8" textAnchor="middle" fontWeight="bold">{"3"}</text>
                  <text x="45" y="90" fill="#37474F" fontSize="8" textAnchor="middle">{"ຄະແນນ 5"}</text>

                  {/* Score 7: Freq = 2 ➔ Height = 30 */}
                  <rect x="65" y="50" width="20" height="30" fill="#2196F3" />
                  <text x="75" y="45" fill="#2196F3" fontSize="8" textAnchor="middle" fontWeight="bold">{"2"}</text>
                  <text x="75" y="90" fill="#37474F" fontSize="8" textAnchor="middle">{"ຄະແນນ 7"}</text>

                  {/* Score 8: Freq = 1 ➔ Height = 15 */}
                  <rect x="95" y="65" width="20" height="15" fill="#FF9800" />
                  <text x="105" y="60" fill="#FF9800" fontSize="8" textAnchor="middle" fontWeight="bold">{"1"}</text>
                  <text x="105" y="90" fill="#37474F" fontSize="8" textAnchor="middle">{"ຄະແນນ 8"}</text>

                  {/* Score 9: Freq = 1 ➔ Height = 15 */}
                  <rect x="125" y="65" width="20" height="15" fill="#9C27B0" />
                  <text x="135" y="60" fill="#9C27B0" fontSize="8" textAnchor="middle" fontWeight="bold">{"1"}</text>
                  <text x="135" y="90" fill="#37474F" fontSize="8" textAnchor="middle">{"ຄະແນນ 9"}</text>

                  {/* y-axis labels */}
                  <text x="15" y="38" fill="#37474F" fontSize="7" textAnchor="end">{"3"}</text>
                  <text x="15" y="53" fill="#37474F" fontSize="7" textAnchor="end">{"2"}</text>
                  <text x="15" y="68" fill="#37474F" fontSize="7" textAnchor="end">{"1"}</text>
                  <text x="15" y="83" fill="#37474F" fontSize="7" textAnchor="end">{"0"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງນັບຈຳນວນຕົວເລກທີ່ຊ້ຳກັນຢ່າງລະມັດລະວັງ ບໍ່ໃຫ້ຫຼົງລືມຈັກຕົວເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຖີ່ຂອງຂໍ້ມູນທີ່ກຳນົດລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກຂໍ້ມູນ: [5, 7, 5, 8, 5, 9, 7]. ຄວາມຖີ່ຂອງຄະແນນ 5 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກຂໍ້ມູນ: [6, 8, 6, 9, 6, 8, 10, 6]. ຄວາມຖີ່ຂອງຄະແນນ 6 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກຂໍ້ມູນ: [4, 7, 8, 4, 7, 9, 4, 7, 7]. ຄວາມຖີ່ຂອງຄະແນນ 7 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຈາກຂໍ້ມູນ: [12, 15, 12, 13, 15, 12, 12]. ຄວາມຖີ່ຂອງຄະແນນ 12 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຈາກຂໍ້ມູນ: [9, 9, 9, 8, 9, 7, 9, 9, 6]. ຄວາມຖີ່ຂອງຄະແນນ 9 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຊອກຫາຄວາມຖີ່ທຽບເທົ່າ ແລະ ເປີເຊັນ (Calculating Relative Frequency & Percentage)",
      keyPoint: {
        title: "ຄວາມຖີ່ທຽບເທົ່າ ແລະ ສ່ວນຮ້ອຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• ຄວາມຖີ່ທຽບເທົ່າ (Relative Frequency) = ຄວາມຖີ່ຂອງຂໍ້ມູນນັ້ນ ຫານໃຫ້ ຈຳນວນຂໍ້ມູນທັງໝົດ N."}
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• ເປີເຊັນຄວາມຖີ່ (%) = ຄວາມຖີ່ທຽບເທົ່າ × 100%."}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄິດໄລ່ເປີເຊັນ: ສ່ວນຮ້ອຍ = "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="ຄວາມຖີ່" den="N" /> {" × 100%"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຂໍ້ມູນທັງໝົດ N = 20. ຖ້າຄວາມຖີ່ແມ່ນ 5 ➔ ຄິດເປັນຈັກສ່ວນຮ້ອຍ?"}</div>
              <div>{"➔ ວິທີຄິດ: "} <span className="math"><Fraction num="5" den="20" /> {" × 100% = 0.25 × 100% = 25%."}</span></div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກຂອງຄວາມຖີ່ທັງໝົດໃນຕາຕະລາງ ຕ້ອງເທົ່າກັບຈຳນວນຂໍ້ມູນທັງໝົດ N ສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ສ່ວນຮ້ອຍຄວາມຖີ່ ຫຼື ຄວາມຖີ່ທຽບເທົ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ - ບໍ່ຕ້ອງໃສ່ເຄື່ອງໝາຍ %)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າຂໍ້ມູນທັງໝົດ N = 20, ຄວາມຖີ່ຂອງກຸ່ມ A ແມ່ນ 5. ຖາມວ່ານຶກເປັນຈັກ ສ່ວນຮ້ອຍ (%)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າຂໍ້ມູນທັງໝົດ N = 50, ຄວາມຖີ່ຂອງກຸ່ມ B ແມ່ນ 15. ຖາມວ່ານຶກເປັນຈັກ ສ່ວນຮ້ອຍ (%)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າຂໍ້ມູນທັງໝົດ N = 10, ຄວາມຖີ່ຂອງກຸ່ມ C ແມ່ນ 4. ຄວາມຖີ່ທຽບເທົ່າແມ່ນເທົ່າໃດ? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າຂໍ້ມູນທັງໝົດ N = 25, ຄວາມຖີ່ຂອງກຸ່ມ D ແມ່ນ 8. ຖາມວ່ານຶກເປັນຈັກ ສ່ວນຮ້ອຍ (%)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າຂໍ້ມູນທັງໝົດ N = 200, ຄວາມຖີ່ຂອງກຸ່ມ E ແມ່ນ 30. ຖາມວ່ານຶກເປັນຈັກ ສ່ວນຮ້ອຍ (%)?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ຄວາມຈິງທີ່ວ່າ ຜົນບວກຂອງຄວາມຖີ່ທັງໝົດ ຕ້ອງເທົ່າກັບ N ເພື່ອຊອກຫາຄວາມຖີ່ທີ່ຂາດຫາຍໄປເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄວາມຖີ່ທີ່ຂາດຫາຍໄປ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຕາຕະລາງຄວາມຖີ່ຂອງສັດລ້ຽງ N = 30. ປະກອບມີ ໝາ: 12 ໂຕ, ແມວ: x ໂຕ, ແລະ ນົກ: 10 ໂຕ. ຈົ່ງຊອກຫາ x. (12 + x + 10 = 30)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ໂຕ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຈຳນວນ N ຈາກເປີເຊັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຖ້ານັກຮຽນທີ່ເລືອກຮຽນວິຊາຄະນິດສາດມີຄວາມຖີ່ແມ່ນ 15 ຄົນ, ຄິດເປັນ 30% ຂອງນັກຮຽນທັງໝົດ. ຈົ່ງຊອກຫາຈຳນວນນັກຮຽນທັງໝົດ N. (N × 30% = 15)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: N ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຄົນ"}</span>
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
            {"ໂຈດບັນຫາຕາຕະລາງໝາກໄມ້ໃນຮ້ານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ໃນຮ້ານຂາຍໝາກໄມ້ແຫ່ງໜຶ່ງ ມີໝາກກ້ວຍ 24 ໜ່ວຍ, ໝາກມ່ວງ 16 ໜ່ວຍ, ແລະ ໝາກກ້ຽງ 40 ໜ່ວຍ. ຖ້າເຮົາສ້າງຕາຕະລາງຄວາມຖີ່, ໝາກມ່ວງຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງໝາກໄມ້ທັງໝົດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄິດເປັນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ສ່ວນຮ້ອຍ (%)"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການສຳຫຼວດຍານພາຫະນະ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈາກການສຳຫຼວດລົດທີ່ແລ່ນຜ່ານໜ້າໂຮງຮຽນ 100 ຄັນ ພົບວ່າ: ລົດຈັກມີຄວາມຖີ່ 60 ຄັນ, ລົດເກັງ 25 ຄັນ, ແລະ ທີ່ເຫຼືອແມ່ນລົດບັນທຸກ. ຖາມວ່າລົດບັນທຸກຄິດເປັນຈັກສ່ວນຮ້ອຍ (%)?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄິດເປັນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1">{"(1) 3 (ເລກ 5 ປະກົດຂຶ້ນ 3 ເທື່ອ)"}</span>,
          <span key="2">{"(2) 4 (ເລກ 6 ປະກົດຂຶ້ນ 4 ເທື່ອ)"}</span>,
          <span key="3">{"(3) 4 (ເລກ 7 ປະກົດຂຶ້ນ 4 ເທື່ອ)"}</span>,
          <span key="4">{"(4) 4 (ເລກ 12 ປະກົດຂຶ້ນ 4 ເທື່ອ)"}</span>,
          <span key="5">{"(5) 6 (ເລກ 9 ປະກົດຂຶ້ນ 6 ເທື່ອ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 25 (ເພາະວ່າ 5 / 20 × 100% = 25%)"}</span>,
          <span key="7">{"(2) 30 (ເພາະວ່າ 15 / 50 × 100% = 30%)"}</span>,
          <span key="8">{"(3) 0.4 (ເພາະວ່າຄວາມຖີ່ທຽບເທົ່າແມ່ນ 4 / 10 = 0.4)"}</span>,
          <span key="9">{"(4) 32 (ເພາະວ່າ 8 / 25 × 100% = 32%)"}</span>,
          <span key="10">{"(5) 15 (ເພາະວ່າ 30 / 200 × 100% = 15%)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"8 (ເພາະວ່າ x = 30 - 12 - 10 = 8 ໂຕ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"50 (ເພາະວ່າ N = 15 / 0.30 = 50 ຄົນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"20 (ຈຳນວນໝາກໄມ້ທັງໝົດ N = 24 + 16 + 40 = 80 ➔ ໝາກມ່ວງຄິດເປັນ 16 / 80 × 100% = 20%)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"15 (ຄວາມຖີ່ລົດບັນທຸກແມ່ນ 100 - 60 - 25 = 15 คັນ ➔ ຄິດເປັນ 15%)"}</span>
        ]
      }
    ],
    advice: "ການເກັບກຳ ແລະ ການສະເໜີຂໍ້ມູນດ້ວຍຕາຕະລາງ ຊ່ວຍໃຫ້ເຮົາສາມາດເບິ່ງເຫັນພາບລວມ ແລະ ວິເຄາະສະຖິຕິຕ່າງໆໄດ້ຢ່າງມີປະສິດທິພາບເດີ້!"
  }
};
