import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ພາກທີ VIII - ບົດທີ 26: ຮູບທໍ່ກົມ ແລະ ຮູບຈວຍ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ເນື້ອທີ່ຂ້າງ, ເນື້ອທີ່ທັງໝົດ ແລະ ບໍລິມາດຂອງຮູບທໍ່ກົມ ແລະ ຮູບຈວຍ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 127-132",
  subSections: [
    {
      title: "1. ເນື້ອທີ່ ແລະ ບໍລິມາດຂອງຮູບທໍ່ກົມ",
      keyPoint: {
        title: "ສູດຄິດໄລ່ຮູບທໍ່ກົມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບທໍ່ກົມທີ່ມີລັດສະໝີພື້ນ r ແລະ ຄວາມສູງ h ມີສູດຄິດໄລ່ດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ເນື້ອທີ່ພື້ນ: "} <span className="math">{"S_base = πr²"}</span></div>
              <div>{"• ເນື້ອທີ່ຂ້າງ: "} <span className="math">{"S_lateral = 2πrh"}</span></div>
              <div>{"• ບໍລິມາດ: "} <span className="math">{"V = πr²h"}</span></div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ໃຫ້ r = 3 cm, h = 5 cm ➔ V = π × 3² × 5 = 45π cm³."}</div>
            </div>

            {/* Cylinder SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສະແດງຮູບທໍ່ກົມ"}</span>
                <svg viewBox="0 0 400 240" style={{ width: "100%", maxWidth: "320px", height: "auto" }}>
                  {/* Bottom Ellipse */}
                  <ellipse cx="200" cy="190" rx="40" ry="15" fill="none" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Top Ellipse */}
                  <ellipse cx="200" cy="50" rx="40" ry="15" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Sides */}
                  <line x1="120" y1="50" x2="120" y2="190" stroke="#2E7D32" strokeWidth="4" />
                  <line x1="280" y1="50" x2="280" y2="190" stroke="#2E7D32" strokeWidth="4" />

                  {/* Height line */}
                  <line x1="200" y1="50" x2="200" y2="190" stroke="#1565C0" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="210" y="130" fill="#1565C0" fontSize="18" fontWeight="bold">{"h (ສູງ)"}</text>

                  {/* Radius line */}
                  <line x1="200" y1="50" x2="280" y2="50" stroke="#E65100" strokeWidth="3" />
                  <text x="230" y="40" fill="#E65100" fontSize="18" fontWeight="bold">{"r"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາຄິດໄລ່ໃຫ້ຂຽນສັນຍະລັກ π ໄວ້ນຳຄຳຕອບສະເໝີ ຍົກເວັ້ນໂຈດກຳນົດໃຫ້ π = 3.14 ຫຼື 22/7 ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຮູບທໍ່ກົມໜຶ່ງມີລັດສະໝີພື້ນ r = 3 cm ແລະ ຄວາມສູງ h = 5 cm. ຈົ່ງຄິດໄລ່ຫາຄ່າຕໍ່ໄປນີ້ (ຕອບຕິດຄ່າ π): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ເນື້ອທີ່ພື້ນ "} <span className="math">{"S_base"}</span> {" ແມ່ນຈັກ "} <span className="math">{"π cm²"}</span> {"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ເນື້ອທີ່ຂ້າງ "} <span className="math">{"S_lateral"}</span> {" ແມ່ນຈັກ "} <span className="math">{"π cm²"}</span> {"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ບໍລິມາດ "} <span className="math">{"V"}</span> {" ແມ່ນຈັກ "} <span className="math">{"π cm³"}</span> {"?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຂະໜາດທີ່ເຫຼືອຂອງຮູບທໍ່ກົມຈາກເງື່ອນໄຂລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຖ້າເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"16π cm²"}</span> {", ລັດສະໝີພື້ນ r ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າລັດສະໝີພື້ນແມ່ນ "} <span className="math">{"r = 2 cm"}</span> {" ແລະ ບໍລິມາດແມ່ນ "} <span className="math">{"20π cm³"}</span> {", ຄວາມສູງ h ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເນື້ອທີ່ ແລະ ບໍລິມາດຂອງຮູບຈວຍ",
      keyPoint: {
        title: "ສູດຄິດໄລ່ຮູບຈວຍ ແລະ ການຊອກຂ້າງໃຫ້ຊັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຈວຍມີລັດສະໝີພື້ນ r, ຄວາມສູງ h ແລະ ເສັ້ນເນັ່ງຂ້າງ (ຂ້າງຊັນ) l ທີ່ພົວພັນກັນຕາມປີຕາກໍ l = √(r² + h²):"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ເນື້ອທີ່ຂ້າງ: "} <span className="math">{"S_lateral = πrl"}</span></div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ບໍລິມາດ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"V = "} <Fraction num="1" den="3" /> {"πr²h"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ໃຫ້ r = 3, h = 4 ➔ l = √(3² + 4²) = 5 ➔ S_lateral = π × 3 × 5 = 15π."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ບໍລິມາດຂອງຮູບຈວຍຈະເທົ່າກັບ 1/3 ຂອງບໍລິມາດຮູບທໍ່ກົມທີ່ມີພື້ນ ແລະ ຄວາມສູງເທົ່າກັນສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 3 cm ແລະ ຄວາມສູງ h = 4 cm. ຈົ່ງຄິດໄລ່ຫາຄ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ເສັ້ນເນັ່ງຂ້າງ l ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ເນື້ອທີ່ຂ້າງ "} <span className="math">{"S_lateral"}</span> {" ແມ່ນຈັກ "} <span className="math">{"π cm²"}</span> {"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ບໍລິມາດ "} <span className="math">{"V"}</span> {" ແມ່ນຈັກ "} <span className="math">{"π cm³"}</span> {"?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມສຳພັນ ແລະ ຂະໜາດຂອງຮູບຈວຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຖ້າຮູບທໍ່ກົມ ແລະ ຮູບຈວຍມີພື້ນ ແລະ ຄວາມສູງເທົ່າກັນ, ບໍລິມາດຂອງຮູບຈວຍເປັນອັດຕາສ່ວນສ່ວນເທົ່າໃດຂອງຮູບທໍ່ກົມ? (ຕອບເປັນເລກສ່ວນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ "} <span className="math">{"r = 5 cm"}</span> {" ແລະ ເສັ້ນເນັ່ງຂ້າງ "} <span className="math">{"l = 13 cm"}</span> {". ຄວາມສູງ h ຂອງມັນແມ່ນຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ລະວັງການຄິດໄລ່ເນື້ອທີ່ທັງໝົດ ເຊິ່ງຕ້ອງລວມທັງເນື້ອທີ່ພື້ນ ແລະ ເນື້ອທີ່ຂ້າງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາເນື້ອທີ່ທັງໝົດຂອງຮູບທໍ່ກົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບທໍ່ກົມໜຶ່ງມີລັດສະໝີພື້ນ "} <span className="math">{"r = 4 cm"}</span> {" ແລະ ຄວາມສູງ "} <span className="math">{"h = 10 cm"}</span> {". ຈົ່ງຄິດໄລ່ເນື້ອທີ່ທັງໝົດ ຂອງຮູບທໍ່ກົມນີ້ (ເນື້ອທີ່ພື້ນ 2 ດ້ານ + ເນື້ອທີ່ຂ້າງ)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ທັງໝົດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"π cm²"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄວາມສູງຂອງຮູບຈວຍຈາກບໍລິມາດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ "} <span className="math">{"r = 6 cm"}</span> {" ແລະ ບໍລິມາດແມ່ນ "} <span className="math">{"96π cm³"}</span> {". ຈົ່ງຊອກຫາຄວາມສູງ h ຂອງຮູບຈວຍນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: h ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ໂຈດບັນຫາຈອກນ້ຳຊົງກະບອກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈອກນ້ຳຮູບທໍ່ກົມມີລັດສະໝີພື້ນ 3 cm ແລະ ຄວາມສູງ 10 cm. ຖ້າເຮົາຕື່ມນ້ຳໃສ່ພຽງເຄິ່ງໜຶ່ງຂອງຄວາມສູງຈອກ, ຈະມີບໍລິມາດນ້ຳຈັກ cm³? (ຕອບຕິດຄ່າ π)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ບໍລິມາດນ້ຳແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"π cm³"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຈວຍຕອງນ້ຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈວຍຕອງນ້ຳອັນໜຶ່ງມີລັດສະໝີພື້ນແມ່ນ 6 cm ແລະ ມີຄວາມສູງແມ່ນ 10 cm. ບໍລິມາດຂອງຈວຍຕອງນ້ຳນີ້ແມ່ນຈັກ cm³? (ຕອບຕິດຄ່າ π)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ບໍລິມາດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"π cm³"}</span>
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
          <span key="1">{"(1) 9 (ເພາະວ່າ S_base = π × r² = π × 3² = 9π cm²)"}</span>,
          <span key="2">{"(2) 30 (ເພາະວ່າ S_lateral = 2π × r × h = 2π × 3 × 5 = 30π cm²)"}</span>,
          <span key="3">{"(3) 45 (ເພາະວ່າ V = π × r² × h = π × 3² × 5 = 45π cm³)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 4 (ເພາະວ່າ πr² = 16π ➔ r² = 16 ➔ r = 4 cm)"}</span>,
          <span key="5">{"(2) 5 (ເພາະວ່າ V = πr²h ➔ 20π = π × 2² × h ➔ 20 = 4h ➔ h = 5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"112 (ເພາະວ່າ S_total = 2 × S_base + S_lateral = 2 × π × 4² + 2π × 4 × 10 = 32π + 80π = 112π cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"8 (ເພາະວ່າ V = (1/3)πr²h ➔ 96π = (1/3)π × 6² × h ➔ 96 = 12h ➔ h = 8 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"45 (ເພາະວ່າ ຄວາມສູງນ້ຳແມ່ນເຄິ່ງໜຶ່ງ h = 5 cm ➔ V_water = π × r² × 5 = π × 3² × 5 = 45π cm³)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"120 (ເພາະວ່າ V = (1/3)πr²h = (1/3)π × 6² × 10 = 120π cm³)"}</span>
        ]
      }
    ],
    advice: "ການຄິດໄລ່ຮູບຊົງສາມມິຕິ ເປັນພື້ນຖານສຳຄັນໃນວຽກງານວິສະວະກຳ, ການຜະລິດຂວດບັນຈຸພັນ ແລະ ການກໍ່ສ້າງ ໝັ່ນຈື່ສູດ ແລະ ຝຶກຝົນເປັນປະຈຳເດີ້!"
  }
};
