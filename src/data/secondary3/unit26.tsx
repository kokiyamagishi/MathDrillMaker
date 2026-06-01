import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit26Data: UnitData = {
  unitNumber: 26,
  unitTitle: "ພາກທີ VIII - ບົດທີ 26: ຮູບປີລາມິດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ເນື້ອທີ່ຂ้าง, ເນື້ອທີ່ທັງໝົດ ແລະ ບໍລິມາດຂອງຮູບປີລາມິດ (Pyramid) ທີ່ມີພື້ນເປັນຮູບຕ່າງໆ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 139-144",
  subSections: [
    {
      title: "1. ເນື້ອທີ່ຂ້າງ ແລະ ເນື້ອທີ່ທັງໝົດ (Lateral and Total Surface Area of Pyramids)",
      keyPoint: {
        title: "ສູດເນື້ອທີ່ຂອງຮູບປີລາມິດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບປີລາມິດແມ່ນຮູບຊົງສາມມິຕິທີ່ມີພື້ນເປັນຮູບຫຼາຍຫຼ່ຽມ ແລະ ມີຈອມຮ່ວມກັນຢູ່ຈຸດດຽວພາຍນອກໜ້າພຽງພື້ນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ເນື້ອທີ່ຂ้าง: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"S_lateral = "} <Fraction num="1" den="2" /> {"× P_base × a"}
                </span>
                {" (a ແມ່ນລວງສູງຂ້າງ / ຂ້າງຊັນ)"}
              </div>
              <div>{"• ເນື້ອທີ່ທັງໝົດ: "} <span className="math">{"S_total = S_base + S_lateral"}</span> {" (ເນື້ອທີ່ພື້ນ 1 ດ້ານ + ເນື້ອທີ່ຂ้าง)"}</div>
            </div>

            {/* Pyramid SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສະແດງຮູບປີລາມິດສີ່ຫຼ່ຽມ"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Base Quadrilateral */}
                  <polygon points="50,90 150,90 120,70 30,70" fill="none" stroke="#2E7D32" strokeWidth="1.5" strokeDasharray="3,3" />
                  
                  {/* Apex S (100, 20) */}
                  {/* Vertical edges from apex */}
                  <line x1="100" y1="20" x2="50" y2="90" stroke="#2E7D32" strokeWidth="2" />
                  <line x1="100" y1="20" x2="150" y2="90" stroke="#2E7D32" strokeWidth="2" />
                  <line x1="100" y1="20" x2="30" y2="70" stroke="#2E7D32" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="100" y1="20" x2="120" y2="70" stroke="#2E7D32" strokeWidth="2" />

                  {/* Slant Height a (Apex to base midpoint (100, 90)) */}
                  <line x1="100" y1="20" x2="100" y2="90" stroke="#E65100" strokeWidth="1.5" />
                  <text x="104" y="60" fill="#E65100" fontSize="9" fontWeight="bold">{"a (ຊັນ)"}</text>
                  
                  {/* Perpendicular Height h (Apex to base center (90, 80)) */}
                  <line x1="100" y1="20" x2="90" y2="80" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="3,3" />
                  <text x="75" y="50" fill="#1565C0" fontSize="9" fontWeight="bold">{"h (ສູງ)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຍາວຂ້າງຊັນ a ຈະຍາວກວ່າຄວາມສູງ h ຂອງປີລາມິດສະເໝີ ເພາະມັນເປັນຂ້າງກົງຊາກໃນຮູບສາມແຈສາກພາຍໃນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຮູບປີລາມິດຈະຕຸລັດສະໝໍ່າສະເໝີໜຶ່ງ ມີຂ້າງພື້ນຍາວ 6 cm ແລະ ມີລວງສູງຂ້າງ (ຊັນ) a = 5 cm. ຈົ່ງຄິດໄລ່: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເນື້ອທີ່ຂ້າງ "} <span className="math">{"S_lateral"}</span> {" ຂອງຮູບປີລາມິດນີ້ແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ເນື້ອທີ່ພື້ນ "} <span className="math">{"S_base"}</span> {" ຂອງຮູບປີລາມິດນີ້ແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ເນື້ອທີ່ທັງໝົດ "} <span className="math">{"S_total"}</span> {" ຂອງຮູບປີລາມິດນີ້ແມ່ນຈັກ cm²?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາເນື້ອທີ່ທັງໝົດ ແລະ ເນື້ອທີ່ຂ້າງຂອງຮູບປີລາມິດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"25 cm²"}</span> {" ແລະ ເນື້ອທີ່ຂ້າງແມ່ນ "} <span className="math">{"45 cm²"}</span> {". ເນື້ອທີ່ທັງໝົດແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບປີລາມິດສາມແຈສະເໝີ ມີລວງຮອບພື້ນ 18 cm ແລະ ສູງຂ້າງ a = 6 cm. ເນື້ອທີ່ຂ້າງແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ບໍລິມາດຂອງຮູບປີລາມິດ (Volume of Pyramids)",
      keyPoint: {
        title: "ສູດບໍລິມາດທົ່ວໄປຂອງຮູບປີລາມິດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ບໍລິມາດ (V) ຂອງຮູບປີລາມິດເທົ່າກັບ 1/3 ຂອງຜົນຄູນລະຫວ່າງເນື້ອທີ່ພື້ນ ແລະ ຄວາມສູງ (h):"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດບໍລິມາດ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"V = "} <Fraction num="1" den="3" /> {"× S_base × h"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ພື້ນເປັນຮູບຈະຕຸລັດມີເນື້ອທີ່ 36 cm² ແລະ ສູງ 8 cm ➔ V = (1/3) × 36 × 8 = 96 cm³."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ ບໍລິມາດປີລາມິດແມ່ນ 1/3 ຂອງບໍລິມາດຮູບທໍ່ຫຼ່ຽມທີ່ມີພື້ນ ແລະ ຄວາມສູງເທົ່າກັນສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາບໍລິມາດ V ຂອງຮູບປີລາມິດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບປີລາມິດມີເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"30 cm²"}</span> {" ແລະ ສູງ "} <span className="math">{"9 cm"}</span> {". ບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບປີລາມິດຈະຕຸລັດມີຂ້າງພື້ນ 6 cm (ເນື້ອທີ່ພື້ນ 36 cm²) ແລະ ສູງ 8 cm. ບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າຮູບທໍ່ຫຼ່ຽມ ແລະ ຮູບປີລາມິດມີພື້ນ ແລະ ຄວາມສູງເທົ່າກັນ, ບໍລິມາດປີລາມິດເປັນອັດຕາສ່ວນສ່ວນເທົ່າໃດຂອງຮູບທໍ່ຫຼ່ຽມ? (ຕອບເປັນເລກສ່ວນ)"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຂະໜາດທີ່ເຫຼືອຂອງຮູບປີລາມິດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບປີລາມິດຈະຕຸລັດມີຂ້າງພື້ນ 10 cm, ຄວາມສູງ h = 12 cm. ຄວາມຍາວຂ້າງຊັນ a ແມ່ນຈັກ cm? (ນຳໃຊ້ປີຕາກໍ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າບໍລິມາດແມ່ນ "} <span className="math">{"100 cm³"}</span> {" ແລະ ຄວາມສູງແມ່ນ "} <span className="math">{"6 cm"}</span> {". ເນື້ອທີ່ພື້ນ ແມ່ນຈັກ cm²?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ຄວາມຊັນຂ້າງເພື່ອຊອກຫາເນື້ອທີ່ຂ້າງກ່ອນ ແລ້ວຈຶ່ງຫາຄ່າທັງໝົດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ເນື້ອທີ່ທັງໝົດຂອງຮູບປີລາມິດຈະຕຸລັດ (Total Surface Area of Square Pyramid): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຮູບປີລາມິດຈະຕຸລັດສະໝໍ່າສະເໝີໜຶ່ງ ມີຂ້າງພື້ນຍາວ 10 cm ແລະ ມີຄວາມສູງ 12 cm (ເນື້ອທີ່ພື້ນແມ່ນ 100 cm², ຂ້າງຊັນ a = 13 cm). ຈົ່ງຊອກຫາເນື້ອທີ່ທັງໝົດຂອງຮູບປີລາມິດນີ້."}
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄວາມສູງຂອງປີລາມິດຈາກບໍລິມາດຕິດຄ່າຮາກ (Finding Pyramid Height with Radical values): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຮູບປີລາມິດສາມແຈໜຶ່ງມີເນື້ອທີ່ພື້ນແມ່ນ "} <span className="math">{"15√3 cm²"}</span> {" ແລະ ມີບໍລິມາດແມ່ນ "} <span className="math">{"45√3 cm³"}</span> {". ຈົ່ງຊອກຫາຄວາມສູງ h ຂອງປີລາມິດນີ້."}
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
            {"ໂຈດບໍລິມາດຂອງປີລາມິດພື້ນຮູບສີ່ແຈສາກ (Rectangular Pyramid Volume): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຮູບປີລາມິດໜຶ່ງມີພື້ນເປັນຮູບສີ່ແຈສາກຂະໜາດ 5 cm × 6 cm (ເນື້ອທີ່ພື້ນ 30 cm²) ແລະ ມີຄວາມສູງ h = 10 cm. ຈົ່ງຄິດໄລ່ບໍລິມາດ V ຂອງປີລາມິດນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ບໍລິມາດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm³"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ເນື້ອທີ່ຂ້າງຂອງປີລາມິດຈາກສ່ວນທີ່ເຫຼືອ (Finding Lateral Area from Total): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຖ້າເນື້ອທີ່ທັງໝົດຂອງຮູບປີລາມິດຈະຕຸລັດສະໝໍ່າສະເໝີໜຶ່ງແມ່ນ 360 cm² ແລະ ມີເນື້ອທີ່ພື້ນແມ່ນ 100 cm². ເນື້ອທີ່ຂ้าง ຂອງມັນແມ່ນຈັກ cm²?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ຂ້າງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm²"}</span>
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
          <span key="1">{"(1) 60 cm² (ລວງຮອບພື້ນ = 4 × 6 = 24 cm ➔ ເນື້ອທີ່ຂ້າງ = (1/2) × 24 × 5 = 60 cm²)"}</span>,
          <span key="2">{"(2) 36 cm² (ເນື້ອທີ່ພື້ນຮູບຈະຕຸລັດ = 6² = 36 cm²)"}</span>,
          <span key="3">{"(3) 96 cm² (ເນື້ອທີ່ທັງໝົດ = ເນື້ອທີ່ພື້ນ + ເນື້ອທີ່ຂ້າງ = 36 + 60 = 96 cm²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 70 cm² (ເນື້ອທີ່ທັງໝົດ = ເນື້ອທີ່ພື້ນ + ເນື້ອທີ່ຂ้าง = 25 + 45 = 70 cm²)"}</span>,
          <span key="5">{"(2) 54 cm² (ເນື້ອທີ່ຂ้าง = (1/2) × ລວງຮອບພື້ນ × ສູງຂ້າງ = (1/2) × 18 × 6 = 54 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"360 cm² (ລວງຮອບພື້ນ = 40 cm, ເນື້ອທີ່ຂ້າງ = (1/2) × 40 × 13 = 260 cm² ➔ ເນື້ອທີ່ທັງໝົດ = 100 + 260 = 360 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"9 cm (ຈາກສູດ V = (1/3) × S_base × h ➔ 45√3 = (1/3) × 15√3 × h ➔ 45√3 = 5√3 × h ➔ h = 9 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"100 cm³ (ບໍລິມາດ V = (1/3) × ເນື້ອທີ່ພື້ນ × ສູງ = (1/3) × 30 × 10 = 100 cm³)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"260 cm² (ເນື້ອທີ່ຂ้าง = ເນື້ອທີ່ທັງໝົດ - ເນື້ອທີ່ພື້ນ = 360 - 100 = 260 cm²)"}</span>
        ]
      }
    ],
    advice: "ຮູບປີລາມິດມີຄວາມສຳພັນທີ່ໜ້າຕື່ນເຕັ້ນກັບຮູບທໍ່ຫຼ່ຽມ ແລະ ຖືກນຳໃຊ້ເຂົ້າໃນການຄິດໄລ່ສະຖາປັດຕະຍະກຳເກົ່າແກ່ ໝັ່ນຝຶກຝົນເປັນປະຈຳເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"90 cm³ (ບໍລິມາດ V = (1/3) × 30 × 9 = 90 cm³)"}</span>,
        <span key="11">{"96 cm³ (ບໍລິມາດ V = (1/3) × 36 × 8 = 96 cm³)"}</span>,
        <span key="12">{"1/3 (ເພາະວ່າ ບໍລິມາດປີລາມິດແມ່ນ 1/3 ຂອງບໍລິມາດຮູບທໍ່ຫຼ່ຽມທີ່ມີພື້ນ ແລະ ສູງເທົ່າກັນ)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"13 cm (ໄລຍະຫ່າງເຄິ່ງກາງພື້ນຫາຂ້າງແມ່ນ 5 cm ➔ a = √(5² + 12²) = √169 = 13 cm)"}</span>,
        <span key="14">{"50 cm² (ເນື້ອທີ່ພື້ນ = 3 × V / h = 3 × 100 / 6 = 50 cm²)"}</span>
      ]
    }
  ]
};
