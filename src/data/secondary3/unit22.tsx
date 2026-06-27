import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit22Data: UnitData = {
  unitNumber: 22,
  unitTitle: "ພາກທີ VI - ບົດທີ 22: ຄ່າສະເລ່ຍ ແລະ ຂອບເຂດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ວິທີຄິດໄລ່ຄ່າສະເລ່ຍ (Mean) ແລະ ຂອບເຂດ (Range) ຂອງຂໍ້ມູນດ່ຽວ ແລະ ຂໍ້ມູນແບ່ງຊັ້ນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 109-114",
  subSections: [
    {
      title: "1. ຄ່າສະເລ່ຍ ແລະ ຂອບເຂດຂອງຂໍ້ມູນດ່ຽວ (Mean and Range of Ungrouped Data)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ສູດຄິດໄລ່ຂໍ້ມູນດ່ຽວ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າສະເລ່ຍ (Mean) ສະແດງເຖິງຄ່າຈຸດໃຈກາງຂອງຂໍ້ມູນ, ສ່ວນຂອບເຂດ (Range) ສະແດງເຖິງການກະຈາຍຂອງຂໍ້ມູນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ຄ່າສະເລ່ຍ (x̄): "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"x̄ = "} <Fraction num="ຜົນບວກຂອງຂໍ້ມູນທັງໝົດ" den="ຈຳນວນຂໍ້ມູນ N" />
                </span>
              </div>
              <div>{"• ຂອບເຂດ (Range): "} <span className="math" style={{ fontWeight: "bold" }}>{"Range = Max - Min"}</span> {" (ຄ່າຫຼາຍສຸດ - ຄ່ານ້ອຍສຸດ)"}</div>
            </div>

            {/* Mean balance scale SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງຄວາມໝາຍຂອງຄ່າສະເລ່ຍ (ຈຸດສົມດຸນ)"}</span>
                <svg viewBox="0 0 200 80" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  {/* Balance Scale lever */}
                  <line x1="20" y1="50" x2="180" y2="50" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Pivot */}
                  <polygon points="100,50 90,75 110,75" fill="#2E7D32" />
                  <text x="100" y="87" fill="#2E7D32" fontSize="8" textAnchor="middle" fontWeight="bold">{"ຄ່າສະເລ່ຍ (x̄ = 6)"}</text>

                  {/* Weights */}
                  {/* Left weight (2 and 4) */}
                  <rect x="35" y="38" width="12" height="12" fill="#E65100" />
                  <text x="41" y="47" fill="#FFFFFF" fontSize="7" textAnchor="middle">{"2"}</text>

                  <rect x="65" y="38" width="12" height="12" fill="#E65100" />
                  <text x="71" y="47" fill="#FFFFFF" fontSize="7" textAnchor="middle">{"4"}</text>

                  {/* Right weight (8 and 10) */}
                  <rect x="125" y="38" width="12" height="12" fill="#E65100" />
                  <text x="131" y="47" fill="#FFFFFF" fontSize="7" textAnchor="middle">{"8"}</text>

                  <rect x="153" y="38" width="12" height="12" fill="#E65100" />
                  <text x="159" y="47" fill="#FFFFFF" fontSize="7" textAnchor="middle">{"10"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂອບເຂດ Range ຍິ່ງຫຼາຍ ໝາຍຄວາມວ່າຂໍ້ມູນຍິ່ງມີການກະຈາຍກວ້າງ (ບໍ່ສະໝໍ່າສະເໝີ) ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃຫ້ກຸ່ມຂໍ້ມູນ: 2, 4, 6, 8, 10. ຈົ່ງຄິດໄລ່ຫາຄ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜົນບວກຂອງຂໍ້ມູນທັງໝົດແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄ່າສະເລ່ຍ (x̄) ຂອງກຸ່ມຂໍ້ມູນນີ້ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຂອບເຂດ (Range) ຂອງກຸ່ມຂໍ້ມູນນີ້ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ໃຫ້ກຸ່ມຂໍ້ມູນທີສອງ: 3, 7, 5, 9, 6. ຈົ່ງຄິດໄລ່ຫາຄ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄ່າສະເລ່ຍ (x̄) ຂອງກຸ່ມຂໍ້ມູນນີ້ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຂອບເຂດ (Range) ຂອງກຸ່ມຂໍ້ມູນນີ້ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄ່າສະເລ່ຍຂອງຂໍ້ມູນແບ່ງຊັ້ນ (Mean of Grouped Data)",
      keyPoint: {
        title: "ເມັດເຄິ່ງກາງຊັ້ນ ແລະ ການຄິດໄລ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສຳລັບຂໍ້ມູນແບ່ງຊັ້ນ (Grouped Data), ເຮົາຕ້ອງຊອກຫາເມັດເຄິ່ງກາງຊັ້ນ (xᵢ) ຂອງແຕ່ລະຊັ້ນກ່ອນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6.5px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ເມັດເຄິ່ງກາງຊັ້ນ xᵢ = "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="ຂອບເຂດລຸ່ມ + ຂອບເຂດເທິງ" den="2" />
                </span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄ່າສະເລ່ຍຂໍ້ມູນແບ່ງຊັ້ນ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"x̄ = "} <Fraction num="Σ(f_i × x_i)" den="N" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຊັ້ນ 10 - 20 ມີຄວາມຖີ່ 2 ➔ ເມັດເຄິ່ງກາງ xᵢ = (10+20)/2 = 15 ➔ fᵢ × xᵢ = 2 × 15 = 30."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມັດເຄິ່ງກາງຊັ້ນ ຈະເຮັດໜ້າທີ່ເປັນຕົວແທນຂອງທຸກໆຄ່າຂໍ້ມູນໃນຊັ້ນນັ້ນໆໃນການສະເລ່ຍເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ເມັດເຄິ່ງກາງ ຫຼື ຄ່າສະເລ່ຍຂອງຂໍ້ມູນແບ່ງຊັ້ນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເມັດເຄິ່ງກາງຊັ້ນ ຂອງອັນຕະພາກຊັ້ນ "} <span className="math">{"10 - 20"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຊັ້ນ "} <span className="math">{"20 - 30"}</span> {" ມີຄວາມຖີ່ 4, ຜົນຄູນລະຫວ່າງຄວາມຖີ່ ແລະ ເມັດເຄິ່ງກາງ (fᵢ × xᵢ) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ມີສອງຊັ້ນ: "} <span className="math">{"10-20"}</span> {" (ຄວາມຖີ່ 2) ແລະ "} <span className="math">{"20-30"}</span> {" (ຄວາມຖີ່ 2). ຄ່າສະເລ່ຍ x̄ ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາເມັດເຄິ່ງກາງ ແລະ ຄ່າສະເລ່ຍຂອງກຸ່ມຂໍ້ມູນແບ່ງຊັ້ນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເມັດເຄິ່ງກາງຊັ້ນ ຂອງຊັ້ນ "} <span className="math">{"30 - 50"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າຜົນຄູນລວມ Σ(fᵢ × xᵢ) ແມ່ນ 300 ແລະ N = 15. ຄ່າສະເລ່ຍ x̄ ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສ້າງສົມຜົນຜົນບວກຄະແນນທັງໝົດ ເພື່ອຊອກຫາຄະແນນທີ່ຕ້ອງການເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຫາຄ່າຂໍ້ມູນທີ່ຕ້ອງເພີ່ມເພື່ອໄດ້ຄ່າສະເລ່ຍຕາມເປົ້າໝາຍ (Finding Needed Value for Target Mean): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ສົມສີ ເສັງ 4 ຄັ້ງຜ່ານມາໄດ້ຄະແນນ 7, 8, 9, 6. ເພື່ອໃຫ້ຄ່າສະເລ່ຍຂອງການເສັງ 5 ຄັ້ງເທົ່າກັບ 8 ພໍດີ, ໃນການເສັງຄັ້ງທີ 5 ລາວຈະຕ້ອງເສັງໃຫ້ໄດ້ຈັກຄະແນນ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕ້ອງໄດ້"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຄະແນນ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄ່າສະເລ່ຍໃໝ່ຫຼັງຈາກເພີ່ມຂໍ້ມູນ (New Mean after Adding a Data Point): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ກຸ່ມຂໍ້ມູນໜຶ່ງມີ 10 ຄ່າ, ມີຄ່າສະເລ່ຍແມ່ນ 15. ຖ້າເຮົາເພີ່ມຂໍ້ມູນໃໝ່ທີ່ມີຄ່າແມ່ນ 37 ເຂົ້າໄປໃນກຸ່ມຂໍ້ມູນນີ້, ຄ່າສະເລ່ຍໃໝ່ຂອງກຸ່ມຂໍ້ມູນ (ທີ່ມີ 11 ຄ່າ) ຈະແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄ່າສະເລ່ຍໃໝ່ແມ່ນ"}</span>
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
            {"ໂຈດຂອບເຂດອຸນຫະພູມປະຈຳອາທິດ (Weekly Temperature Range Challenge): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ອຸນຫະພູມທີ່ວັດແທກໄດ້ໃນ 7 ວັນຂອງອາທິດໜຶ່ງແມ່ນ 25, 27, 26, 29, 31, 28, 26 ອົງສາເຊ. ຈົ່ງຊອກຫາຂອບເຂດ (Range) ຂອງອຸນຫະພູມໃນອາທິດນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຂອບເຂດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ອົງສາເຊ (°C)"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄ່າສະເລ່ຍຂອງອຸນຫະພູມໃນອາທິດ (Weekly Mean Temperature Challenge): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃຫ້ອຸນຫະພູມທີ່ວັດແທກໄດ້ໃນ 7 ວັນແມ່ນ: 24, 26, 25, 28, 30, 27, 22 ອົງສາເຊ. ຈົ່ງຄິດໄລ່ຫາຄ່າສະເລ່ຍ (x̄) ຂອງອຸນຫະພູມໃນອາທິດນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄ່າສະເລ່ຍແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ອົງສາເຊ (°C)"}</span>
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
          <span key="1">{"(1) 30 (ເພາະວ່າ 2 + 4 + 6 + 8 + 10 = 30)"}</span>,
          <span key="2">{"(2) 6 (ເພາະວ່າ ຄ່າສະເລ່ຍ x̄ = 30 / 5 = 6)"}</span>,
          <span key="3">{"(3) 8 (ເພາະວ່າ ຂອບເຂດ Range = Max - Min = 10 - 2 = 8)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 6 (ເພາະວ່າ ຜົນບວກ = 30, N = 5 ➔ x̄ = 30 / 5 = 6)"}</span>,
          <span key="5">{"(2) 6 (ເພາະວ່າ Range = Max - Min = 9 - 3 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"10 (ຜົນບວກ 5 ຄັ້ງຕ້ອງເທົ່າກັບ 5×8 = 40. ຜົນບວກ 4 ຄັ້ງທຳອິດແມ່ນ 30 ➔ ຄັ້ງທີຫ້າຕ້ອງໄດ້ 40 - 30 = 10 ຄະແນນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"17 (ຜົນບວກເດີມແມ່ນ 10 × 15 = 150. ເພີ່ມ 37 ➔ ຜົນບວກໃໝ່ = 187, ຈຳນວນ N = 11 ➔ ຄ່າສະເລ່ຍໃໝ່ = 187 / 11 = 17)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"6 (ເພາະວ່າ ອຸນຫະພູມສູງສຸດແມ່ນ 31, ຕ່ຳສຸດແມ່ນ 25 ➔ ຂອບເຂດ = 31 - 25 = 6 ອົງສາເຊ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"26 (ເພາະວ່າ ຜົນບວກອຸນຫະພູມທັງ 7 ວັນແມ່ນ 182 ➔ ຄ່າສະເລ່ຍ x̄ = 182 / 7 = 26 ອົງສາເຊ)"}</span>
        ]
      }
    ],
    advice: "ຄ່າສະເລ່ຍ ແລະ ຂອບເຂດແມ່ນເຄື່ອງມືສະຖິຕິທີ່ໃຊ້ເປັນປະຈຳໃນການພະຍາກອນອາກາດ, ການວິເຄາະຄະແນນສອບເສັງ ແລະ ເສດຖະສາດ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"15 (ເພາະວ່າ ເມັດເຄິ່ງກາງຊັ້ນ = (10 + 20) / 2 = 15)"}</span>,
        <span key="11">{"100 (ເພາະວ່າ ເມັດເຄິ່ງກາງຊັ້ນແມ່ນ 25 ➔ fᵢ × xᵢ = 4 × 25 = 100)"}</span>,
        <span key="12">{"20 (ເພາະວ່າ ຜົນຄູນລວມ = 2×15 + 2×25 = 30+50 = 80, N = 4 ➔ x̄ = 80 / 4 = 20)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"40 (ເພາະວ່າ ເມັດເຄິ່ງກາງຊັ້ນ = (30 + 50) / 2 = 40)"}</span>,
        <span key="14">{"20 (ເພາະວ່າ x̄ = Σ(fᵢ × xᵢ) / N = 300 / 15 = 20)"}</span>
      ]
    }
  ]
};
