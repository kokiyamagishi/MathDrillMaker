import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit25Data: UnitData = {
  unitNumber: 25,
  unitTitle: "ພາກທີ VIII - ບົດທີ 25: ຮູບທໍ່ຫຼ່ຽມ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ເນື້ອທີ່ຂ້າງ, ເນື້ອທີ່ທັງໝົດ ແລະ ບໍລິມາດຂອງຮູບທໍ່ຫຼ່ຽມ ທີ່ມີພື້ນເປັນຮູບຕ່າງໆ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 133-138",
  subSections: [
    {
      title: "1. ເນື້ອທີ່ຂ້າງ ແລະ ເນື້ອທີ່ທັງໝົດ",
      keyPoint: {
        title: "ສູດເນື້ອທີ່ຂອງຮູບທໍ່ຫຼ່ຽມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບທໍ່ຫຼ່ຽມ ແມ່ນຮູບຊົງສາມມິຕິທີ່ມີພື້ນສອງດ້ານຂະໜານກັນ ແລະ ເປັນຮູບຫຼາຍຫຼ່ຽມທີ່ເທົ່າກັນສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ເນື້ອທີ່ຂ້າງ: "} <span className="math">{"S_lateral = P_base × h"}</span> {" (ລວງຮອບພື້ນ × ຄວາມສູງ)"}</div>
              <div>{"• ເນື້ອທີ່ທັງໝົດ: "} <span className="math">{"S_total = 2 × S_base + S_lateral"}</span> {" (2 ເທົ່າເນື້ອທີ່ພື້ນ + ເນື້ອທີ່ຂ້າງ)"}</div>
            </div>

            {/* Triangular Prism SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສະແດງຮູບທໍ່ຫຼ່ຽມສາມແຈ"}</span>
                <svg viewBox="0 0 400 240" style={{ width: "100%", maxWidth: "320px", height: "auto" }}>
                  {/* Bottom Triangle */}
                  <polygon points="50,95 130,95 90,80" fill="none" stroke="#2E7D32" strokeWidth="3" strokeDasharray="3,3" />
                  
                  {/* Top Triangle */}
                  <polygon points="50,35 130,35 90,20" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Vertical Edges */}
                  <line x1="100" y1="70" x2="100" y2="190" stroke="#2E7D32" strokeWidth="4" />
                  <line x1="260" y1="70" x2="260" y2="190" stroke="#2E7D32" strokeWidth="4" />
                  <line x1="180" y1="40" x2="180" y2="160" stroke="#2E7D32" strokeWidth="3" strokeDasharray="3,3" />

                  {/* Dimension labels */}
                  <text x="70" y="130" fill="#1565C0" fontSize="18" fontWeight="bold">{"h (ສູງ)"}</text>
                  <text x="180" y="214" fill="#E65100" fontSize="18" fontWeight="bold">{"ພື້ນ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມຄູນ 2 ໃສ່ເນື້ອທີ່ພື້ນ ເວລາຄິດໄລ່ເນື້ອທີ່ທັງໝົດ ເພາະຮູບທໍ່ຫຼ່ຽມມີພື້ນຢູ່ 2 ດ້ານສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂ້າງ ຂອງຮູບທໍ່ຫຼ່ຽມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບທໍ່ຫຼ່ຽມສາມແຈມີຄວາມສູງ 10 cm, ພື້ນແມ່ນຮູບສາມແຈສະເໝີມີຂ້າງຍາວ 4 cm. ລວງຮອບພື້ນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກຂໍ້ (1), ເນື້ອທີ່ຂ້າງຂອງຮູບທໍ່ຫຼ່ຽມນີ້ແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບກ່ອງສາກໜຶ່ງມີຂະໜາດພື້ນແມ່ນ 3 cm × 4 cm (ລວງຮອບພື້ນ 14 cm) ແລະ ສູງ 5 cm. ເນື້ອທີ່ຂ້າງແມ່ນຈັກ cm²?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາເນື້ອທີ່ທັງໝົດ ຂອງຮູບທໍ່ຫຼ່ຽມລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"12 cm²"}</span> {" ແລະ ເນື້ອທີ່ຂ້າງແມ່ນ "} <span className="math">{"40 cm²"}</span> {". ເນື້ອທີ່ທັງໝົດແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບກ້ອນສາກ ໜຶ່ງມີຄວາມຍາວຂ້າງແມ່ນ "} <span className="math">{"3 cm"}</span> {". ເນື້ອທີ່ທັງໝົດຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ບໍລິມາດຂອງຮູບທໍ່ຫຼ່ຽມ",
      keyPoint: {
        title: "ສູດບໍລິມາດທົ່ວໄປຂອງຮູບທໍ່ຫຼ່ຽມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ບໍລິມາດ (V) ຂອງຮູບທໍ່ຫຼ່ຽມແມ່ນຜົນຄູນລະຫວ່າງເນື້ອທີ່ພື້ນ (S_base) ແລະ ຄວາມສູງ (h):"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold", fontSize: "1.375rem" }}>{"• ສູດບໍລິມາດ: "} <span className="math">{"V = S_base × h"}</span></div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ພື້ນເປັນສາມແຈສາກມີເນື້ອທີ່ 6 cm² ແລະ ສູງ 10 cm ➔ V = 6 × 10 = 60 cm³."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບທໍ່ຫຼ່ຽມທີ່ມີເນື້ອທີ່ພື້ນເທົ່າກັນ ແລະ ຄວາມສູງເທົ່າກັນ ຈະມີບໍລິມາດເທົ່າກັນສະເໝີ ບໍ່ວ່າພື້ນຈະເປັນຮູບຊົງໃດໆເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາບໍລິມາດ V ຂອງຮູບທໍ່ຫຼ່ຽມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບທໍ່ຫຼ່ຽມມີເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"15 cm²"}</span> {" ແລະ ສູງ "} <span className="math">{"8 cm"}</span> {". ບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບທໍ່ຫຼ່ຽມສາມແຈສາກມີພື້ນເນື້ອທີ່ "} <span className="math">{"6 cm²"}</span> {" ແລະ ສູງ "} <span className="math">{"10 cm"}</span> {". ບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບກ່ອງສາກມີເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"20 cm²"}</span> {" ແລະ ສູງ "} <span className="math">{"6 cm"}</span> {". ບໍລິມາດແມ່ນຈັກ cm³?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຂະໜາດບໍລິມາດ ຫຼື ຄວາມສູງຂອງຮູບຊົງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບກ້ອນສາກ ໜຶ່ງມີຄວາມຍາວຂ້າງແມ່ນ "} <span className="math">{"5 cm"}</span> {". ບໍລິມາດຂອງມັນແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບທໍ່ຫຼ່ຽມໜຶ່ງມີບໍລິມາດແມ່ນ "} <span className="math">{"180 cm³"}</span> {" ແລະ ເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"20 cm²"}</span> {". ຄວາມສູງ h ແມ່ນຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ຄວາມສູງຊອກຫາເນື້ອທີ່ຂ້າງ ແລະ ເນື້ອທີ່ທັງໝົດຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບໍລິມາດນ້ຳໃນອ່າງກ່ອງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ອ່າງເກັບນ້ຳຮູບກ່ອງສາກມີຄວາມຍາວພື້ນ 8 m, ຄວາມກວ້າງພື້ນ 5 m ແລະ ຖືກຕື່ມນ້ຳໃສ່ສູງ 2 m. ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງນ້ຳໃນອ່າງນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ບໍລິມາດນ້ຳແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"m³"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ເນື້ອທີ່ທັງໝົດຂອງຮູບທໍ່ຫຼ່ຽມສາມແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຮູບທໍ່ຫຼ່ຽມສາມແຈສາກໜຶ່ງມີພື້ນເປັນຮູບສາມແຈສາກຍາວ 5 cm, 12 cm, 13 cm (ເນື້ອທີ່ພື້ນແມ່ນ 30 cm²). ຖ້າບໍລິມາດແມ່ນ 300 cm³, ຈົ່ງຊອກຫາເນື້ອທີ່ທັງໝົດຂອງຮູບທໍ່ຫຼ່ຽມນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ທັງໝົດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm²"}</span>
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
            {"ໂຈດເນື້ອທີ່ທັງໝົດຂອງຮູບກ້ອນສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບກ້ອນສາກໜຶ່ງມີບໍລິມາດແມ່ນ "} <span className="math">{"64 cm³"}</span> {". ຈົ່ງຊອກຫາເນື້ອທີ່ທັງໝົດ ຂອງຮູບກ້ອນສາກນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ທັງໝົດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm²"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ບໍລິມາດຂອງເສົາປູນຮູບຫຼ່ຽມຫົກຫຼ່ຽມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ເສົາປູນຮູບທໍ່ຫຼ່ຽມຫົກຫຼ່ຽມສະເໝີໜຶ່ງ ມີເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"24 cm²"}</span> {" ແລະ ມີຄວາມສູງແມ່ນ "} <span className="math">{"3 m"}</span> {" (300 cm). ຈົ່ງຊອກຫາບໍລິມາດຂອງເສົາປູນນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ບໍລິມາດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm³"}</span>
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
          <span key="1">{"(1) 12 cm (ພື້ນເປັນສາມແຈສະເໝີ ➔ ລວງຮອບ = 4 × 3 = 12 cm)"}</span>,
          <span key="2">{"(2) 120 cm² (ເນື້ອທີ່ຂ້າງ = ລວງຮອບພື້ນ × ສູງ = 12 × 10 = 120 cm²)"}</span>,
          <span key="3">{"(3) 70 cm² (ເນື້ອທີ່ຂ้าง = ລວງຮອບພື້ນ × ສູງ = 14 × 5 = 70 cm²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 64 cm² (ເນື້ອທີ່ທັງໝົດ = 2 × ເນື້ອທີ່ພື້ນ + ເນື້ອທີ່ຂ້າງ = 2 × 12 + 40 = 64 cm²)"}</span>,
          <span key="5">{"(2) 54 cm² (ຮູບກ້ອນສາກມີ 6 ໜ້າ ➔ ເນື້ອທີ່ທັງໝົດ = 6 × a² = 6 × 3² = 54 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"80 m³ (ບໍລິມາດນ້ຳ V = ກວ້າງ × ຍາວ × ສູງນ້ຳ = 5 × 8 × 2 = 80 m³)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"360 cm² (ສູງ h = 300 / 30 = 10 cm. ລວງຮອບພື້ນ = 5+12+13 = 30 cm ➔ ເນື້ອທີ່ຂ້າງ = 30 × 10 = 300 cm² ➔ ເນື້ອທີ່ທັງໝົດ = 2×30 + 300 = 360 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"96 cm² (ບໍລິມາດ V = a³ = 64 ➔ ຂ້າງ a = 4 cm ➔ ເນື້ອທີ່ທັງໝົດ = 6 × a² = 6 × 4² = 96 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"7200 cm³ (ບໍລິມາດ V = ເນື້ອທີ່ພື້ນ × ສູງ = 24 × 300 = 7200 cm³)"}</span>
        ]
      }
    ],
    advice: "ຮູບທໍ່ຫຼ່ຽມເປັນຮູບຊົງສາມມິຕິພື້ນຖານທີ່ພົບເຫັນເລື້ອຍໆໃນການອອກແບບອາຄານ, ກ່ອງບັນຈຸພັນ ແລະ ການຜະລິດ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"120 cm³ (ບໍລິມາດ = ເນື້ອທີ່ພື້ນ × ສູງ = 15 × 8 = 120 cm³)"}</span>,
        <span key="11">{"60 cm³ (ບໍລິມາດ = ເນື້ອທີ່ພື້ນ × ສູງ = 6 × 10 = 60 cm³)"}</span>,
        <span key="12">{"120 cm³ (ບໍລິມາດ = ເນື້ອທີ່ພື້ນ × ສູງ = 20 × 6 = 120 cm³)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"125 cm³ (ບໍລິມາດກ້ອນສາກ V = a³ = 5³ = 125 cm³)"}</span>,
        <span key="14">{"9 cm (ຄວາມສູງ h = V / ເນື້ອທີ່ພື້ນ = 180 / 20 = 9 cm)"}</span>
      ]
    }
  ]
};
