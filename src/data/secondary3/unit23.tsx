import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit23Data: UnitData = {
  unitNumber: 23,
  unitTitle: "ພາກທີ VI - ບົດທີ 23: ຮູບສະແດງຂໍ້ມູນຄວາມຖີ່",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຮູບຖັນສະແດງຄວາມຖີ່ ແລະ ເສັ້ນຫັກກົງສະແດງຄວາມຖີ່ ໃນການອ່ານ ແລະ ວິເຄາະຂໍ້ມູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 115-120",
  subSections: [
    {
      title: "1. ຮູບຖັນສະແດງຄວາມຖີ່",
      keyPoint: {
        title: "ນິຍາມ ແລະ ການອ່ານຮູບຖັນຄວາມຖີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຖັນສະແດງຄວາມຖີ່ ແມ່ນຮູບເລຂາຄະນິດທີ່ໃຊ້ຮູບສີ່ແຈສາກຕິດກັນ ເພື່ອສະແດງຄວາມຖີ່ຂອງແຕ່ລະຊັ້ນຂໍ້ມູນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ລວງກວ້າງຂອງຖັນ: ສະແດງເຖິງຄວາມກວ້າງຂອງອັນຕະພາກຊັ້ນ."}</div>
              <div>{"• ລວງສູງຂອງຖັນ: ສະແດງເຖິງຄວາມຖີ່ (f) ຂອງແຕ່ລະຊັ້ນຂໍ້ມູນ."}</div>
            </div>

            {/* Histogram SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບຖັນສະແດງຄວາມຖີ່"}</span>
                <svg viewBox="0 0 400 180" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Grid */}
                  <line x1="40" y1="40" x2="360" y2="40" stroke="#E0E0E0" strokeWidth="1" />
                  <line x1="40" y1="80" x2="360" y2="80" stroke="#E0E0E0" strokeWidth="1" />
                  <line x1="40" y1="120" x2="360" y2="120" stroke="#E0E0E0" strokeWidth="1" />

                  {/* Axes */}
                  <line x1="40" y1="160" x2="360" y2="160" stroke="#37474F" strokeWidth="3" />
                  <line x1="40" y1="20" x2="40" y2="160" stroke="#37474F" strokeWidth="3" />

                  {/* Bars (Classes: 10-20 (30px), 20-30 (80px), 30-40 (50px), 40-50 (20px)) */}
                  {/* Scale: 10 units height = 20px */}
                  <rect x="60" y="100" width="60" height="60" fill="#2196F3" opacity="0.8" stroke="#0D47A1" />
                  <text x="90" y="90" fill="#0D47A1" fontSize="14" textAnchor="middle">{"3"}</text>

                  <rect x="120" y="40" width="60" height="120" fill="#4CAF50" opacity="0.8" stroke="#1B5E20" />
                  <text x="150" y="30" fill="#1B5E20" fontSize="14" textAnchor="middle">{"8"}</text>

                  <rect x="180" y="80" width="60" height="80" fill="#FF9800" opacity="0.8" stroke="#E65100" />
                  <text x="210" y="70" fill="#E65100" fontSize="14" textAnchor="middle">{"5"}</text>

                  <rect x="240" y="140" width="60" height="20" fill="#E91E63" opacity="0.8" stroke="#880E4F" />
                  <text x="270" y="130" fill="#880E4F" fontSize="14" textAnchor="middle">{"2"}</text>

                  {/* X-axis labels */}
                  <text x="60" y="176" fill="#37474F" fontSize="12" textAnchor="middle">{"10"}</text>
                  <text x="120" y="176" fill="#37474F" fontSize="12" textAnchor="middle">{"20"}</text>
                  <text x="180" y="176" fill="#37474F" fontSize="12" textAnchor="middle">{"30"}</text>
                  <text x="240" y="176" fill="#37474F" fontSize="12" textAnchor="middle">{"40"}</text>
                  <text x="300" y="176" fill="#37474F" fontSize="12" textAnchor="middle">{"50"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຖີ່ຂອງແຕ່ລະຊັ້ນຂໍ້ມູນສາມາດອ່ານໄດ້ໂດຍກົງຈາກຈຸດສູງສຸດຂອງແຕ່ລະຖັນໃນຮູບສະແດງເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ອີງຕາມຮູບຖັນສະແດງຄວາມຖີ່ ຂ້າງເທິງ, ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ອັນຕະພາກຊັ້ນໃດທີ່ມີຄວາມຖີ່ສູງທີ່ສຸດ? (ຂຽນຮູບແບບ '20-30')"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຄວາມຖີ່ຂອງອັນຕະພາກຊັ້ນ "} <span className="math">{"30 - 40"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ຈົ່ງຊອກຫາຈຳນວນຕົວຢ່າງທັງໝົດ N (ຜົນບວກຄວາມຖີ່ທຸກຫ້ອງ)?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄວາມຖີ່ ແລະ ເປີເຊັນຂອງຊັ້ນຂໍ້ມູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຄວາມຖີ່ຂອງອັນຕະພາກຊັ້ນ "} <span className="math">{"40 - 50"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າຊັ້ນຂໍ້ມູນໜຶ່ງມີຄວາມຖີ່ 5 ຈາກຕົວຢ່າງທັງໝົດ 25. ເປີເຊັນ (%) ຂອງຊັ້ນນີ້ແມ່ນຈັກເປີເຊັນ? (ຕອບສະເພາະຕົວເລກ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເສັ້ນຫັກກົງສະແດງຄວາມຖີ່",
      keyPoint: {
        title: "ການສ້າງເສັ້ນຫັກກົງຄວາມຖີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຫັກກົງສະແດງຄວາມຖີ່ ສ້າງຂຶ້ນໂດຍການເຊື່ອມຕໍ່ເມັດເຄິ່ງກາງຊັ້ນ ຢູ່ລະດັບຄວາມຖີ່ຂອງແຕ່ລະຊັ້ນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຕົວປະສານງານຂອງແຕ່ລະເມັດ: (ເມັດເຄິ່ງກາງຊັ້ນ 𝑥ᵢ, ຄວາມຖີ່ fᵢ)."}</div>
              <div>{"• ການເຊື່ອມຕໍ່: ເຊື່ອມຕໍ່ແຕ່ລະເມັດດ້ວຍເສັ້ນຊື່ ເພື່ອໃຫ້ເຫັນທ່າອ່ຽງການແຜ່ກະຈາຍ."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຊັ້ນ 10 - 20 (ຄວາມຖີ່ 4) ➔ ຈະໝາຍເມັດປະສານງານຢູ່ (15, 4)."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ ເສັ້ນຫັກກົງສະແດງຄວາມຖີ່ ຈະຕ້ອງເລີ່ມຕົ້ນ ແລະ ສິ້ນສຸດຢູ່ແກນນອນ (ຄວາມຖີ່ເປັນ 0) ສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃນເສັ້ນຫັກກົງສະແດງຄວາມຖີ່, ຈົ່ງຊອກຫາຕົວປະສານງານ ຫຼື ຂະໜາດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ເມັດທີ່ຕາງໜ້າໃຫ້ຊັ້ນ 10 - 20 ທີ່ມີຄວາມຖີ່ 4 ຈະມີຕົວປະສານງານແກນນອນ 𝑥 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຕົວປະສານງານແກນຕັ້ງ 𝑦 (ຄວາມຖີ່) ຂອງເມັດຂ້າງເທິງແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ເມັດເຄິ່ງກາງຊັ້ນ ຂອງຊັ້ນຖັດໄປ "} <span className="math">{"20 - 30"}</span> {" ຈະມີຄ່າ 𝑥 ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ໃຫ້ເມັດຈອມສູງສຸດຂອງເສັ້ນຫັກກົງຄວາມຖີ່ແມ່ນ (35, 12). ຈົ່ງຕອບຄຳຖາມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຄວາມຖີ່ຂອງຊັ້ນຂໍ້ມູນທີ່ສູງທີ່ສຸດນີ້ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ເມັດເຄິ່ງກາງຊັ້ນ ຂອງຊັ້ນທີ່ສູງທີ່ສຸດນີ້ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຊອກຫາເມັດເຄິ່ງກາງຊັ້ນໂດຍຄິດໄລ່ຕາມສູດ ແລະ ບວກຄວາມຖີ່ທັງໝົດເພື່ອຫາຈຳນວນນັກຮຽນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາເມັດເຄິ່ງກາງຊັ້ນທີຫ້າຂອງຮູບຖັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຖັນສະແດງຄວາມຖີ່ໜຶ່ງມີຄວາມກວ້າງແຕ່ລະຊັ້ນແມ່ນ 10. ຖ້າຊັ້ນທຳອິດແມ່ນ 0 - 10, ຈົ່ງຊອກຫາເມັດເຄິ່ງກາງຊັ້ນ ຂອງຊັ້ນທີຫ້າ (ຊັ້ນທີ 5)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເມັດເຄິ່ງກາງຊັ້ນແມ່ນ"}</span>
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
              {"ການຊອກຫາຈຳນວນກຸ່ມຕົວຢ່າງຈາກເສັ້ນຫັກກົງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນເສັ້ນຫັກກົງຄວາມຖີ່ຄະແນນສອບເສັງ, ຈຸດຕ່າງໆຖືກໝາຍຢູ່ປະສານງານ: (55, 3), (65, 8), (75, 15), (85, 10), (95, 4). ຈົ່ງຊອກຫາຈຳນວນນັກຮຽນທັງໝົດທີ່ເຂົ້າເສັງ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈຳນວນນັກຮຽນທັງໝົດແມ່ນ"}</span>
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
            {"ໂຈດເປີເຊັນຄວາມສູງຂອງນັກຮຽນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບຖັນສະແດງຄວາມຖີ່ຂອງລວງສູງນັກຮຽນ, ຊັ້ນລວງສູງ 150 - 160 cm ມີຄວາມຖີ່ແມ່ນ 12 ຄົນ. ຖ້ານັກຮຽນທັງໝົດມີ 40 ຄົນ. ຈົ່ງຊອກຫາເປີເຊັນ (%) ຂອງນັກຮຽນໃນຊັ້ນນີ້. (ຕອບສະເພาະຕົວເລກ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີຈຳນວນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"%"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຊອກຫາຂອບເຂດເທິງຂອງຊັ້ນຂໍ້ມູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈຸດຍອດສູງສຸດຂອງເສັ້ນຫັກກົງຄວາມຖີ່ຢູ່ທີ່ (165, 18). ຖ້າຫາກຄວາມກວ້າງແຕ່ລະຊັ້ນແມ່ນ 10 cm, ຈົ່ງຊອກຫາຂອບເຂດເທິງ ຂອງຊັ້ນທີ່ມີຄວາມຖີ່ສູງສຸດນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຂອບເຂດເທິງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
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
          <span key="1">{"(1) 20-30 (ເພາະວ່າຖັນນີ້ມີລວງສູງທີ່ສຸດ ຄວາມຖີ່ເທົ່າກັບ 8)"}</span>,
          <span key="2">{"(2) 5 (ເພາະວ່າຖັນຊັ້ນ 30-40 ມີລວງສູງຢູ່ຂີດທີ 5)"}</span>,
          <span key="3">{"(3) 18 (ເພາະວ່າ N = 3 + 8 + 5 + 2 = 18)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 2 (ເພາະວ່າຖັນຊັ້ນ 40-50 ມີລວງສູງຢູ່ຂີດທີ 2)"}</span>,
          <span key="5">{"(2) 20 (ເພາະວ່າ (5 / 25) × 100% = 20%)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"45 (ຊັ້ນທີ 1 ແມ່ນ 0-10, 2 ແມ່ນ 10-20, 3 ແມ່ນ 20-30, 4 ແມ່ນ 30-40, 5 ແມ່ນ 40-50 ➔ ເມັດເຄິ່ງກາງຊັ້ນ 5 ແມ່ນ (40+50)/2 = 45)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"40 ຄົນ (ຜົນບວກຄວາມຖີ່ N = 3 + 8 + 15 + 10 + 4 = 40 ຄົນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"30 (ເພາະວ່າ (12 / 40) × 100% = 30%)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"170 cm (ເມັດເຄິ່ງກາງແມ່ນ 165, ຄວາມກວ້າງແມ່ນ 10 ➔ ອັນຕະພາກຊັ້ນແມ່ນ 160 - 170 ➔ ຂອບເຂດເທິງແມ່ນ 170 cm)"}</span>
        ]
      }
    ],
    advice: "ຮູບຖັນສະແດງຄວາມຖີ່ ແລະ ເເສັ້ນຫັກກົງຄວາມຖີ່ຊ່ວຍໃຫ້ເຮົາສາມາດເບິ່ງເຫັນພາບລວມ ແລະ ທ່າອ່ຽງຂອງຂໍ້ມູນຈຳນວນຫຼາຍໄດ້ຢ່າງງ່າຍດາຍ ແລະ ງົດງາມ ໝັ່ນສັງເກດເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"15 (ເພາະວ່າ ເມັດເຄິ່ງກາງຊັ້ນ = (10 + 20) / 2 = 15)"}</span>,
        <span key="11">{"4 (ເພາະວ່າແກນຕັ້ງ 𝑦 ສະແດງເຖິງຄວາມຖີ່ ➔ 4)"}</span>,
        <span key="12">{"25 (ເພາະວ່າ ເມັດເຄິ່ງກາງຊັ້ນ = (20 + 30) / 2 = 25)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"12 (ເພາະວ່າຕົວປະສານງານແກນຕັ້ງ 𝑦 ສະແດງເຖິງຄວາມຖີ່ ➔ 12)"}</span>,
        <span key="14">{"35 (ເພາະວ່າຕົວປະສານງານແກນນອນ 𝑥 ສະແດງເຖິງເມັດເຄິ່ງກາງຊັ້ນ ➔ 35)"}</span>
      ]
    }
  ]
};
