import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit5Data: UnitData = {
  unitNumber: 5,
  unitTitle: "ພາກທີ I - ບົດທີ 5: ສົມຜົນຂັ້ນສອງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີການແກ້ສົມຜົນຂັ້ນສອງ ໂດຍວິທີການແຍກສ່ວນຄູນ ແລະ ການຖອນຮາກຂັ້ນສອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 25-30",
  subSections: [
    {
      title: "1. ການແກ້ສົມຜົນຂັ້ນສອງບໍ່ສົມບູນ",
      keyPoint: {
        title: "ສົມຜົນຮູບຮ່າງ ax² + c = 0 ແລະ ax² + bx = 0",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສົມຜົນຂັ້ນສອງບໍ່ສົມບູນ ສາມາດແກ້ໄດ້ໂດຍການຖອນຮາກ ຫຼື ການແຍກຕົວຮ່ວມ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຮູບຮ່າງ 1: 𝑥² = k (k > 0) ➔ ໃຈຜົນແມ່ນ 𝑥 = ±√k"}</div>
              <div>{"• ຮູບຮ່າງ 2: 𝑥(ax + b) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = 0 ຫຼື 𝑥 = "} <span className="math"><Fraction num="-b" den="a" /></span></div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ 1: 𝑥² - 16 = 0 ➔ 𝑥² = 16 ➔ 𝑥 = ±4."}</div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ 2: 𝑥² - 5𝑥 = 0 ➔ 𝑥(𝑥 - 5) = 0 ➔ 𝑥 = 0 ຫຼື 𝑥 = 5."}</div>
            </div>

            {/* Incomplete Quadratic Steps SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຂັ້ນຕອນການແກ້ສົມຜົນ: 𝑥² - 25 = 0"}</span>
                <svg viewBox="0 0 360 160" style={{ width: "100%", maxWidth: "320px", height: "auto" }}>
                  {/* Flow chart boxes */}
                  <rect x="20" y="50" width="80" height="60" rx="5" fill="#4CAF50" />
                  <text x="60" y="88" fill="#FFFFFF" fontSize="18" textAnchor="middle" fontWeight="bold">{"𝑥² - 25 = 0"}</text>

                  <line x1="100" y1="80" x2="130" y2="80" stroke="#37474F" strokeWidth="3" markerEnd="url(#arrow)" />
                  
                  <rect x="140" y="50" width="80" height="60" rx="5" fill="#2196F3" />
                  <text x="180" y="88" fill="#FFFFFF" fontSize="18" textAnchor="middle" fontWeight="bold">{"𝑥² = 25"}</text>

                  <line x1="220" y1="80" x2="250" y2="80" stroke="#37474F" strokeWidth="3" />

                  <rect x="260" y="50" width="80" height="60" rx="5" fill="#FF9800" />
                  <text x="300" y="88" fill="#FFFFFF" fontSize="18" textAnchor="middle" fontWeight="bold">{"𝑥 = ±5"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມວ່າ ເລກກຳລັງສອງ ຖ້າຖອນຮາກອອກມາ ຈະມີທັງຄ່າບວກ (+) ແລະ ຄ່າລົບ (-) ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາໃຈຜົນຂອງສົມຜົນຂັ້ນສອງບໍ່ສົມບູນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"𝑥² - 16 = 0"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງໃຈຜົນທີ່ເປັນຈຳນວນບວກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"2𝑥² - 50 = 0"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງໃຈຜົນທີ່ເປັນຈຳນວນບວກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"3𝑥² = 27"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງໃຈຜົນທີ່ເປັນຈຳນວນລົບ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາໃຈຜົນທີ່ບໍ່ແມ່ນສູນ (𝑥 ≠ 0) ຂອງສົມຜົນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"𝑥² - 5𝑥 = 0"}</span> {". ໃຈຜົນ 𝑥 ທີ່ບໍ່ແມ່ນສູນ ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"3𝑥² + 6𝑥 = 0"}</span> {". ໃຈຜົນ 𝑥 ທີ່ບໍ່ແມ່ນສູນ ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ສົມຜົນຂັ້ນສອງສົມບູນໂດຍການແຍກສ່ວນຄູນ",
      keyPoint: {
        title: "ສົມຜົນຮູບຮ່າງ (x - p)(x - q) = 0",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສົມຜົນຂັ້ນສອງສົມບູນ ax² + bx + c = 0 ສາມາດແກ້ໄດ້ໂດຍການແຍກສ່ວນຄູນເປັນສອງວົງເລັບ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ສູດພື້ນຖານ: (𝑥 - p)(𝑥 - q) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = p ຫຼື 𝑥 = q"}</div>
              <div>{"• ກຳລັງສອງສົມບູນ: (𝑥 - p)² = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = p (ໃຈຜົນຊ້ອນ)"}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ 1: 𝑥² - 6𝑥 + 8 = 0 ➔ (𝑥 - 2)(𝑥 - 4) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = 2, 𝑥 = 4."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ 2: 𝑥² + 4𝑥 + 3 = 0 ➔ (𝑥 + 1)(𝑥 + 3) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = -1, 𝑥 = -3."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອໄດ້ວົງເລັບແລ້ວ ຢ່າລືມປ່ຽນເຄື່ອງໝາຍຂອງຕົວເລກກ່ອນຕອບເປັນໃຈຜົນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຜົນບວກ ຫຼື ຜົນຄູນຂອງໃຈຜົນສົມຜົນຂັ້ນສອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"(𝑥 - 3)(𝑥 - 5) = 0"}</span> {". ຜົນບວກຂອງສອງໃຈຜົນ (p + q) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"𝑥² - 6𝑥 + 8 = 0"}</span> {". ຜົນຄູນຂອງສອງໃຈຜົນ (p × q) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"𝑥² + 4𝑥 + 3 = 0"}</span> {". ຜົນບວກຂອງສອງໃຈຜົນ (p + q) ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາໃຈຜົນຊ້ອນຂອງສົມຜົນກຳລັງສອງສົມບູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"𝑥² - 10𝑥 + 25 = 0"}</span> {". ໃຈຜົນຊ້ອນ 𝑥 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ສົມຜົນ "} <span className="math">{"𝑥² + 8𝑥 + 16 = 0"}</span> {". ໃຈຜົນຊ້ອນ 𝑥 ແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ແຍກສ່ວນຄູນອອກເປັນສອງວົງເລັບກ່ອນ ແລ້ວຈຶ່ງຖອນຫາໃຈຜົນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ສົມຜົນຂັ້ນສອງສົມບູນໂດຍການແຍກສ່ວນຄູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນ "} <span className="math">{"𝑥² - 𝑥 - 12 = 0"}</span> {" ແລະ ຊອກຫາຄ່າຂອງໃຈຜົນທີ່ເປັນຈຳນວນບວກ. (ແຍກສ່ວນຄູນເປັນ (𝑥-4)(𝑥+3) = 0)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໃຈຜົນບວກ 𝑥 ="}</span>
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
              {"ການແກ້ສົມຜົນຮູບແບບກຳລັງສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງແກ້ສົມຜົນ "} <span className="math">{"(2𝑥 - 1)² = 9"}</span> {" ແລະ ຊອກຫາຄ່າຂອງໃຈຜົນທີ່ເປັນຈຳນວນບວກ. (ຖອນຮາກ 2𝑥 - 1 = ±3)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໃຈຜົນບວກ 𝑥 ="}</span>
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
            {"ໂຈດບັນຫາຂະໜາດເນື້ອທີ່ດິນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເນື້ອທີ່ຂອງດິນຕອນໜຶ່ງເປັນຮູບສີ່ແຈສາກແມ່ນ 40 m². ຖ້າຂ້າງຍາວ ຍາວກວ່າຂ້າງກວ້າງ 3 ແມັດ. ໃຫ້ 𝑥 ແມ່ນຂ້າງກວ້າງ (ສົມຜົນ: 𝑥(𝑥+3) = 40 ➔ 𝑥² + 3𝑥 - 40 = 0). ຈົ່ງຊອກຫາຂ້າງກວ້າງ 𝑥. (ຕອບເປັນຕົວເລກບວກ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຂ້າງກວ້າງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ແມັດ (m)"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຜົນບວກໃຈຜົນຂອງສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ສຳລັບສົມຜົນຂັ້ນສອງ "} <span className="math">{"𝑥² - 7𝑥 + 12 = 0"}</span> {". ຈົ່ງຊອກຫາຜົນບວກຂອງສອງໃຈຜົນ (p + q) ຂອງສົມຜົນນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜົນບວກຂອງສອງໃຈຜົນແມ່ນ"}</span>
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
          <span key="1">{"(1) 4 (ເພາະວ່າ 𝑥² = 16 ➔ 𝑥 = ±4 ➔ ໃຈຜົນບວກແມ່ນ 4)"}</span>,
          <span key="2">{"(2) 5 (ເພາະວ່າ 2𝑥² = 50 ➔ 𝑥² = 25 ➔ 𝑥 = ±5 ➔ ໃຈຜົນບວກແມ່ນ 5)"}</span>,
          <span key="3">{"(3) -3 (ເພາະວ່າ 3𝑥² = 27 ➔ 𝑥² = 9 ➔ 𝑥 = ±3 ➔ ໃຈຜົນລົບແມ່ນ -3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 5 (ເພາະວ່າ 𝑥(𝑥 - 5) = 0 ➔ ໃຈຜົນທີ່ບໍ່ແມ່ນສູນແມ່ນ 5)"}</span>,
          <span key="5">{"(2) -2 (ເພາະວ່າ 3𝑥(𝑥 + 2) = 0 ➔ ໃຈຜົນທີ່ບໍ່ແມ່ນສູນແມ່ນ -2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"4 (ເພາະວ່າ 𝑥² - 𝑥 - 12 = (𝑥 - 4)(𝑥 + 3) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = 4, 𝑥 = -3 ➔ ໃຈຜົນບວກແມ່ນ 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"2 (ເພາະວ່າ 2𝑥 - 1 = ±3 ➔ ຖ້າ 2𝑥 - 1 = 3 ➔ 2𝑥 = 4 ➔ 𝑥 = 2. ຖ້າ 2𝑥 - 1 = -3 ➔ 2𝑥 = -2 ➔ 𝑥 = -1 ➔ ໃຈຜົນບວກແມ່ນ 2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"5 (ເພາະວ່າ 𝑥² + 3𝑥 - 40 = (𝑥 + 8)(𝑥 - 5) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = -8, 𝑥 = 5 ➔ ຂ້າງກວ້າງແມ່ນ 5 ແມັດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"7 (ເພາະວ່າ 𝑥² - 7𝑥 + 12 = (𝑥 - 3)(𝑥 - 4) = 0 ➔ ໃຈຜົນແມ່ນ 𝑥 = 3, 𝑥 = 4 ➔ ຜົນບວກແມ່ນ 3 + 4 = 7)"}</span>
        ]
      }
    ],
    advice: "ການແກ້ສົມຜົນຂັ້ນສອງແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນຄະນິດສາດຂັ້ນສູງ ໝັ່ນກວດສອບຄຳຕອບຄືນສະເໝີເດີ້!"
  }
};
