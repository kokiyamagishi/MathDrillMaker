import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span className="math" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit8Data: UnitData = {
  unitNumber: 8,
  unitTitle: "ພາກທີ I - ບົດທີ 8: ການຫານເລກສ່ວນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ປະຕິບັດການຫານເລກສ່ວນໂດຍການຄູນກັບເລກສ່ວນປີ້ນຂອງຕົວຫານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 27-30",
  subSections: [
    {
      title: "1. ການຫານເລກສ່ວນດ້ວຍເລກສ່ວນ (Dividing Fractions by Fractions)",
      keyPoint: {
        title: "ຫຼັກການຫານເລກສ່ວນດ້ວຍເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຫານເລກສ່ວນໃດໜຶ່ງ ໃຫ້ແກ່ເລກສ່ວນອື່ນ (ທີ່ຕ່າງຈາກ 0) ແມ່ນເທົ່າກັບການຄູນເລກສ່ວນຕັ້ງຫານ ກັບເລກສ່ວນປີ້ນ (Reciprocal) ຂອງຕົວຫານ:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "8px 0" }}>
                <span className="math" style={{ fontSize: "1.5rem" }}>
                  <Fraction num="a" den="b" /> {" ÷ "} <Fraction num="c" den="d" /> {" = "} <Fraction num="a" den="b" /> {" × "} <Fraction num="d" den="c" /> {" = "} <Fraction num="a × d" den="b × c" />
                </span>
              </div>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"ຄິດໄລ່: "} <Fraction num="2" den="3" /> {" ÷ "} <Fraction num="5" den="7" /> {" = "} <Fraction num="2" den="3" /> {" × "} <Fraction num="7" den="5" /> {" = "} <Fraction num="2 × 7" den="3 × 5" /> {" = "} <Fraction num="14" den="15" />
                </span>
              </div>
            </div>

            {/* Reciprocal Visual Diagram */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດສະແດງການປີ້ນເລກສ່ວນ (Reciprocal)"}</span>
                <svg viewBox="0 0 300 60" style={{ width: "100%", maxWidth: "280px", height: "auto" }}>
                  {/* Left Fraction */}
                  <rect x="20" y="5" width="40" height="50" rx="5" fill="#FFE0B2" stroke="#FB8C00" strokeWidth="1.5" />
                  <text x="40" y="24" fill="#E65100" fontSize="16" fontWeight="bold" textAnchor="middle">{"5"}</text>
                  <line x1="25" y1="30" x2="55" y2="30" stroke="#FB8C00" strokeWidth="1.5" />
                  <text x="40" y="48" fill="#E65100" fontSize="16" fontWeight="bold" textAnchor="middle">{"7"}</text>
                  
                  {/* Arrow with Reciprocal text */}
                  <path d="M 90 30 L 210 30" stroke="#E65100" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="150" y="22" fill="#E65100" fontSize="10" fontWeight="bold" textAnchor="middle">{"ປີ້ນເລກສ່ວນ"}</text>
                  
                  {/* Right Fraction (Flipped) */}
                  <rect x="240" y="5" width="40" height="50" rx="5" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="1.5" />
                  <text x="260" y="24" fill="#F57F17" fontSize="16" fontWeight="bold" textAnchor="middle">{"7"}</text>
                  <line x1="245" y1="30" x2="275" y2="30" stroke="#FBC02D" strokeWidth="1.5" />
                  <text x="260" y="48" fill="#F57F17" fontSize="16" fontWeight="bold" textAnchor="middle">{"5"}</text>
 
                  {/* Marker definitions */}
                  <defs>
                     <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                       <path d="M 0 1 L 10 5 L 0 9𝑧" fill="#E65100" />
                     </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຫານໃຫ້ປ່ຽນເປັນຄູນສະເໝີ ແລ້ວປີ້ນຕົວເສດ ແລະ ຕົວພູດຂອງເລກສ່ວນທີ່ເປັນຕົວຫານເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຫານເລກສ່ວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="4" /> {" ÷ "} <Fraction num="2" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="3" /> {" ÷ "} <Fraction num="4" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="7" /> {" ÷ "} <Fraction num="3" den="8" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="6" /> {" ÷ "} <Fraction num="3" den="4" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="4" den="9" /> {" ÷ "} <Fraction num="8" den="3" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຫານຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນ (Dividing Integers and Fractions)",
      keyPoint: {
        title: "ຫຼັກການຫານຈຳນວນຖ້ວນດ້ວຍເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຫານຈຳນວນຖ້ວນໃຫ້ເລກສ່ວນ (ຫຼື ຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ), ໃຫ້ຄິດວ່າຈຳນວນຖ້ວນ "} <span className="math">{"n"}</span> {" ກໍແມ່ນເລກສ່ວນທີ່ມີພູດເປັນ 1:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "8px 0" }}>
                <span className="math" style={{ fontSize: "1.5rem" }}>
                  {"n ÷ "} <Fraction num="c" den="d" /> {" = "} <Fraction num="n" den="1" /> {" × "} <Fraction num="d" den="c" /> {" = "} <Fraction num="n × d" den="c" />
                </span>
              </div>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"ຄິດໄລ່: "} {"6 ÷ "} <Fraction num="3" den="4" /> {" = "} {"6 × "} <Fraction num="4" den="3" /> {" = "} <Fraction num="24" den="3" /> {" = 8"}
                </span>
              </div>
            </div>

            {/* Visual Area Division model */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {"ແຜນວາດການແບ່ງ 2 ກ້ອນ ອອກເປັນເທື່ອລະ "} <Fraction num="1" den="3" />
                </span>
                <svg viewBox="0 0 320 80" style={{ width: "100%", maxWidth: "300px", height: "auto" }}>
                  {/* Block 1 */}
                  <rect x="10" y="10" width="120" height="35" fill="none" stroke="#37474F" strokeWidth="1.5" rx="3" />
                  <line x1="50" y1="10" x2="50" y2="45" stroke="#37474F" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="90" y1="10" x2="90" y2="45" stroke="#37474F" strokeWidth="1" strokeDasharray="2,2" />
                  {/* 1/3 inside Block 1 */}
                  <text x="30" y="24" fill="#37474F" fontSize="9" textAnchor="middle">{"1"}</text>
                  <line x1="25" y1="27" x2="35" y2="27" stroke="#37474F" strokeWidth="1" />
                  <text x="30" y="37" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  <text x="70" y="24" fill="#37474F" fontSize="9" textAnchor="middle">{"1"}</text>
                  <line x1="65" y1="27" x2="75" y2="27" stroke="#37474F" strokeWidth="1" />
                  <text x="70" y="37" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  <text x="110" y="24" fill="#37474F" fontSize="9" textAnchor="middle">{"1"}</text>
                  <line x1="105" y1="27" x2="115" y2="27" stroke="#37474F" strokeWidth="1" />
                  <text x="110" y="37" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  <text x="70" y="60" fill="#37474F" fontSize="10" textAnchor="middle">{"ກ້ອນທີ 1 (ໄດ້ 3 ສ່ວນ)"}</text>
                  
                  {/* Plus Sign */}
                  <text x="160" y="32" fill="#37474F" fontSize="16" fontWeight="bold" textAnchor="middle">{"+"}</text>
                  
                  {/* Block 2 */}
                  <rect x="190" y="10" width="120" height="35" fill="none" stroke="#37474F" strokeWidth="1.5" rx="3" />
                  <line x1="230" y1="10" x2="230" y2="45" stroke="#37474F" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="270" y1="10" x2="270" y2="45" stroke="#37474F" strokeWidth="1" strokeDasharray="2,2" />
                  {/* 1/3 inside Block 2 */}
                  <text x="210" y="24" fill="#37474F" fontSize="9" textAnchor="middle">{"1"}</text>
                  <line x1="205" y1="27" x2="215" y2="27" stroke="#37474F" strokeWidth="1" />
                  <text x="210" y="37" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  <text x="250" y="24" fill="#37474F" fontSize="9" textAnchor="middle">{"1"}</text>
                  <line x1="245" y1="27" x2="255" y2="27" stroke="#37474F" strokeWidth="1" />
                  <text x="250" y="37" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  <text x="290" y="24" fill="#37474F" fontSize="9" textAnchor="middle">{"1"}</text>
                  <line x1="285" y1="27" x2="295" y2="27" stroke="#37474F" strokeWidth="1" />
                  <text x="290" y="37" fill="#37474F" fontSize="9" textAnchor="middle">{"3"}</text>
                  
                  <text x="250" y="60" fill="#37474F" fontSize="10" textAnchor="middle">{"ກ້ອນທີ 2 (ໄດ້ 3 ສ່ວນ)"}</text>
                </svg>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#E8F5E9", border: "1px solid #A5D6A7", color: "#2E7D32", padding: "4px 12px", borderRadius: "6px", fontWeight: "bold", fontSize: "1.1rem" }}>
                  {"➔ ລວມທັງໝົດ 6 ຕ່ອນ"}
                </div>
                <span className="math" style={{ fontSize: "1.2rem", display: "inline-flex", alignItems: "center", gap: "4px", color: "#37474F", marginTop: "4px" }}>
                  {"ຄິດໄລ່: 2 ÷ "} <Fraction num="1" den="3" /> {" = 2 × 3 = 6"}
                </span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຳນວນຖ້ວນ n ມີພູດສະເໝີເປັນ 1, ເມື່ອປ່ຽນຫານເປັນຄູນໃຫ້ປີ້ນຕົວຫານໄດ້ເລີຍ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຫານຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"6 ÷ "} <Fraction num="3" den="4" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"8 ÷ "} <Fraction num="4" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="5" /> {" ÷ 6 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="8" /> {" ÷ 10 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"12 ÷ "} <Fraction num="6" den="7" /> {" ="}
                  </span>
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະຫາສິ່ງທີ່ໂຈດຕ້ອງການ ແລະ ປະຕິບັດການຫານເລກສ່ວນໃຫ້ຖືກຕ້ອງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແບ່ງປັນນ້ຳດື່ມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ແມ່ມີນ້ຳດື່ມທັງໝົດ "} {"6"} {" ລິດຕ໌, ຕ້ອງການແບ່ງໃສ່ແກ້ວຂະໜາດແກ້ວລະ "} <Fraction num="3" den="4" /> {" ລິດຕ໌. ຖາມວ່າແມ່ຈະສາມາດແບ່ງນ້ຳດື່ມໄດ້ທັງໝົດຈັກແກ້ວ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 280 80" style={{ width: "100%", maxWidth: "280px", height: "auto" }}>
                {/* 6L big tank */}
                <rect x="10" y="10" width="60" height="60" rx="5" fill="#E1F5FE" stroke="#0288D1" strokeWidth="2" />
                <text x="40" y="45" fill="#0288D1" fontSize="16" fontWeight="bold" textAnchor="middle">{"6 L"}</text>
                
                {/* Division arrow */}
                <path d="M 85 40 L 130 40" stroke="#E65100" strokeWidth="2" markerEnd="url(#arrow)" />
                
                {/* Small bottles */}
                <rect x="150" y="12" width="30" height="56" rx="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1.5" />
                <text x="165" y="27" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"3"}</text>
                <line x1="159" y1="31" x2="171" y2="31" stroke="#0288D1" strokeWidth="1.2" />
                <text x="165" y="41" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"4"}</text>
                <text x="165" y="52" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"L"}</text>
                
                <rect x="190" y="12" width="30" height="56" rx="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1.5" />
                <text x="205" y="27" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"3"}</text>
                <line x1="199" y1="31" x2="211" y2="31" stroke="#0288D1" strokeWidth="1.2" />
                <text x="205" y="41" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"4"}</text>
                <text x="205" y="52" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"L"}</text>
                
                <rect x="230" y="12" width="30" height="56" rx="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1.5" />
                <text x="245" y="40" fill="#0288D1" fontSize="14" fontWeight="bold" textAnchor="middle">{"..."}</text>
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈະແບ່ງໄດ້ທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ແກ້ວ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຫານເລກສ່ວນສາມຕົວຕໍ່ເນື່ອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ສຳນວນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="3" den="5" /> {" ÷ "} <Fraction num="6" den="7" /> {" ÷ "} <Fraction num="14" den="15" />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນຫານແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
            {"ໂຈດບັນຫາການຕັດແພ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ມີແພຍາວ "} <Fraction num="5" den="2" /> {" ແມັດ, ຕ້ອງການຕັດອອກເປັນຕ່ອນ ຕ່ອນລະ "} <Fraction num="5" den="8" /> {" ແມັດ. ຖາມວ່າຈະຕັດໄດ້ທັງໝົດຈັກຕ່ອນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈະຕັດໄດ້ທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຕ່ອນ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຫາຄ່າ 𝑥 ຈາກສົມຜົນການຄູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
              <Fraction num="2" den="3" /> {" × 𝑥 = "} <Fraction num="8" den="9" />
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) "} <Fraction num="15" den="8" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="5" den="12" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="16" den="21" /></span>,
          <span key="1-4">{"(4) "} <Fraction num="10" den="9" /></span>,
          <span key="1-5">{"(5) "} <Fraction num="1" den="6" /></span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 8"}</span>,
          <span key="2-2">{"(2) 10"}</span>,
          <span key="2-3">{"(3) "} <Fraction num="1" den="10" /></span>,
          <span key="2-4">{"(4) "} <Fraction num="1" den="16" /></span>,
          <span key="2-5">{"(5) 14"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) 8 ແກ້ວ (ຄິດໄລ່: 6 ÷ "}</span>
            <Fraction num="3" den="4" />
            <span>{" = 6 × "}</span>
            <Fraction num="4" den="3" />
            <span>{" = "}</span>
            <Fraction num="24" den="3" />
            <span>{" = 8)"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num="3" den="4" />
            <span>{" (ຄິດໄລ່: "}</span>
            <Fraction num="3" den="5" />
            <span>{" × "}</span>
            <Fraction num="7" den="6" />
            <span>{" × "}</span>
            <Fraction num="15" den="14" />
            <span>{" = "}</span>
            <Fraction num="315" den="420" />
            <span>{" = "}</span>
            <Fraction num="3" den="4" />
            <span>{")"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) 4 ຕ່ອນ (ຄິດໄລ່: "}</span>
            <Fraction num="5" den="2" />
            <span>{" ÷ "}</span>
            <Fraction num="5" den="8" />
            <span>{" = "}</span>
            <Fraction num="5" den="2" />
            <span>{" × "}</span>
            <Fraction num="8" den="5" />
            <span>{" = 4)"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num="4" den="3" />
            <span>{" (ຄິດໄລ່: 𝑥 = "}</span>
            <Fraction num="8" den="9" />
            <span>{" ÷ "}</span>
            <Fraction num="2" den="3" />
            <span>{" = "}</span>
            <Fraction num="8" den="9" />
            <span>{" × "}</span>
            <Fraction num="3" den="2" />
            <span>{" = "}</span>
            <Fraction num="24" den="18" />
            <span>{" = "}</span>
            <Fraction num="4" den="3" />
            <span>{")"}</span>
          </span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຫານເລກສ່ວນກໍຄືການຄູນກັບເລກສ່ວນປີ້ນຂອງຕົວຫານ. ພະຍາຍາມຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳສະເໝີເດີ້!"
  }
};
