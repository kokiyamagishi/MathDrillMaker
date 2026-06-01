import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit10Data: UnitData = {
  unitNumber: 10,
  unitTitle: "ພາກທີ I - ບົດທີ 10: ການຄິດໄລ່ເລກສ່ວນປະສົມສີ່ປະການ",
  unitGoal: "ຮຽນຮູ້ ແລະ ປະຕິບັດການຄິດໄລ່ເລກສ່ວນທີ່ມີການບວກ, ລົບ, ຄູນ, ຫານ ປະສົມກັນ ໂດຍນຳໃຊ້ຫຼັກການບູລິມະສິດຄິດໄລ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 35-38",
  subSections: [
    {
      title: "1. ການຄິດໄລ່ເລກສ່ວນທີ່ມີວົງເລັບ (Fraction Operations with Parentheses)",
      keyPoint: {
        title: "ຫຼັກການບູລິມະສິດທີ່ມີວົງເລັບ ( )",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອມີວົງເລັບ ( ) ໃນສຳນວນ, ເຮົາຕ້ອງຄິດໄລ່ເລກໃນວົງເລັບກ່ອນສະເໝີ. ຫຼັງຈາກນັ້ນຈຶ່ງປະຕິບັດການຄູນ-ຫານ ແລະ ບວກ-ລົບ ຕາມລຳດັບ:"}
            </p>
            
            {/* Visual example block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄິດໄລ່ "} <span className="math">{"("}</span> <Fraction num="1" den="2" /> {" + "} <Fraction num="1" den="3" /> <span className="math">{") × 6"}</span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #2196F3", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ໄລ່ໃນວົງເລັບກ່ອນ: "} <Fraction num="1" den="2" /> {" + "} <Fraction num="1" den="3" /> {" = "} <Fraction num="3" den="6" /> {" + "} <Fraction num="2" den="6" /> {" = "} <Fraction num="5" den="6" />
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຈາກນັ້ນຄູນກັບ 6: "} <Fraction num="5" den="6" /> {" × 6 = "} <Fraction num="5 × 6" den="6" /> {" = 5"}
                </span>
              </div>
            </div>

            {/* Visual priority step-by-step diagram */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດລຳດັບການຄິດໄລ່ (Priority Steps)"}</span>
                <svg viewBox="0 0 200 60" style={{ width: "100%", maxWidth: "200px", height: "auto" }}>
                  {/* Step 1: Parentheses */}
                  <rect x="10" y="5" width="80" height="20" rx="3" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
                  <text x="50" y="18" fill="#2E7D32" fontSize="9" fontWeight="bold" textAnchor="middle">{"1. ໃນວົງເລັບ ( )"}</text>
                  
                  {/* Arrow 1 */}
                  <path d="M 95 15 L 115 25" stroke="#E65100" strokeWidth="1.5" fill="none" />
                  
                  {/* Step 2: Multiplication/Division */}
                  <rect x="10" y="32" width="80" height="20" rx="3" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1.5" />
                  <text x="50" y="45" fill="#E65100" fontSize="9" fontWeight="bold" textAnchor="middle">{"2. ຄູນ ແລະ ຫານ"}</text>
                  
                  {/* Arrow 2 */}
                  <path d="M 95 42 L 115 32" stroke="#E65100" strokeWidth="1.5" fill="none" />
                  
                  {/* Step 3: Addition/Subtraction */}
                  <rect x="120" y="18" width="70" height="24" rx="3" fill="#E1F5FE" stroke="#03A9F4" strokeWidth="1.5" />
                  <text x="155" y="33" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"3. ບວກ ແລະ ລົບ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງສັງເກດ ແລະ ໄລ່ຕົວເລກໃນວົງເລັບກ່ອນສະເໝີ ເພື່ອຄວາມຖືກຕ້ອງເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ສຳນວນເລກສ່ວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"("} <Fraction num="1" den="2" /> {" + "} <Fraction num="1" den="3" /> {") × 6 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"("} <Fraction num="3" den="4" /> {" - "} <Fraction num="1" den="2" /> {") ÷ "} <Fraction num="1" den="8" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"15 × ("} <Fraction num="2" den="3" /> {" - "} <Fraction num="1" den="5" /> {") ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"("} <Fraction num="5" den="6" /> {" + "} <Fraction num="1" den="2" /> {") ÷ "} <Fraction num="4" den="3" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"("} <Fraction num="7" den="8" /> {" - "} <Fraction num="3" den="4" /> {") × ("} <Fraction num="4" den="5" /> {" + 2) ="}
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
      title: "2. ການຄິດໄລ່ແບບບໍ່ມີວົງເລັບ (Fraction Operations without Parentheses)",
      keyPoint: {
        title: "ຫຼັກການບູລິມະສິດແບບບໍ່ມີວົງເລັບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນກໍລະນີທີ່ບໍ່ມີວົງເລັບ, ໃຫ້ປະຕິບັດຕາມລຳດັບ: ຕ້ອງຄິດໄລ່ ຄູນ ແລະ ຫານ ກ່ອນສະເໝີ (ຈາກຊ້າຍຫາຂວາ), ແລ້ວຈຶ່ງຄິດໄລ່ ບວກ ແລະ ລົບ ຕາມຫຼັງ:"}
            </p>
            
            {/* Visual Formula box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"ຄິດໄລ່: "} <Fraction num="3" den="4" /> {" × 8 - 2"}
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ໄລ່ຄູນກ່ອນ: "} <Fraction num="3" den="4" /> {" × 8 = 6"}
                </span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຈາກນັ້ນລົບ: 6 - 2 = 4"}
                </span>
              </div>
            </div>

            {/* Warning block */}
            <div style={{ padding: "10px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2", fontSize: "1.15rem", color: "#C62828" }}>
              <strong>{"⚠️ ຂໍ້ຄວນລະວັງ: "}</strong>{"ຫ້າມເອົາ 8 ມາລົບ 2 ກ່ອນເດັດຂາດ! ເພາະການຄູນມີບູລິມະສິດສູງກວ່າການລົບ."}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ທ່ອງຂຶ້ນໃຈ: ຄູນ-ຫານ ກ່ອນ, ບວກ-ລົບ ຕາມຫຼັງ ສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ສຳນວນປະສົມລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="4" /> {" × 8 - 2 ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="2" /> {" + "} <Fraction num="2" den="3" /> {" × "} <Fraction num="3" den="4" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="6" /> {" ÷ "} <Fraction num="5" den="3" /> {" + "} <Fraction num="1" den="2" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"4 - "} <Fraction num="2" den="5" /> {" ÷ "} <Fraction num="2" den="15" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="3" /> {" × "} <Fraction num="6" den="5" /> {" - "} <Fraction num="1" den="10" /> {" ="}
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
    hintText: "💡 ບົດທ້າທາຍ: ປະຕິບັດຕາມລຳດັບການຄິດໄລ່ຢ່າງເຂັ້ມງວດ ແລະ ຄ່ອຍໆໄລ່ໄປເທື່ອລະຂັ້ນຕອນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ສຳນວນຊ້ອນກັນຫຼາຍຊັ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                {"[("} <Fraction num="1" den="2" /> {" + "} <Fraction num="1" den="4" /> {") × 8] - "} <Fraction num="3" den="2" />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນຄິດໄລ່ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແບ່ງປັນເນື້ອທີ່ດິນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ລຸງມີດິນທັງໝົດ "} {"120"} {" ຕາແມັດ. ລາວໄດ້ແບ່ງໃຫ້ລູກຊາຍ "} <Fraction num="1" den="3" /> {" ຂອງເນື້ອທີ່ທັງໝົດ, ແລະ ແບ່ງໃຫ້ລູກສາວ "} <Fraction num="1" den="4" /> {" ຂອງເນື້ອທີ່ທັງໝົດ. ຖາມວ່າຍັງເຫຼືອເນື້ອທີ່ດິນຈັກຕາແມັດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ດິນທີ່ຍັງເຫຼືອແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
              <span>{"ຕາແມັດ"}</span>
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
            {"ໂຈດບັນຫາການຊື້ປຶ້ມຂຽນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ທ້າວ ແດງ ມີເງິນທັງໝົດ 50,000 ກີບ, ລາວໄດ້ໃຊ້ຊື້ປຶ້ມຂຽນໄປ "} <Fraction num="2" den="5" /> {" ຂອງເງິນທັງໝົດ ແລະ ຊື້ບິກຂຽນໄປ "} <Fraction num="1" den="10" /> {" ຂອງເງິນທັງໝົດ. ຖາມວ່າລາວຍັງເຫຼືອເງິນຈັກກີບ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຍັງເຫຼືອເງິນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "42px" }}></span>
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
            {"ຄິດໄລ່ຫາຄ່າ x ຈາກການປະສົມຄູນລົບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກສົມຜົນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
              {"3 × x - "} <Fraction num="1" den="2" /> {" = "} <Fraction num="5" den="2" />
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 5 (ຄິດໄລ່: (3/6 + 2/6) × 6 = 5/6 × 6 = 5)"}</span>,
          <span key="1-2">{"(2) 2 (ຄິດໄລ່: (3/4 - 2/4) ÷ 1/8 = 1/4 × 8 = 2)"}</span>,
          <span key="1-3">{"(3) 7 (ຄິດໄລ່: 15 × (10/15 - 3/15) = 15 × 7/15 = 7)"}</span>,
          <span key="1-4">{"(4) 1 (ຄິດໄລ່: (5/6 + 3/6) ÷ 4/3 = 8/6 × 3/4 = 4/3 × 3/4 = 1)"}</span>,
          <span key="1-5">{"(5) "} <Fraction num="7" den="20" /> {" (ຄິດໄລ່: 1/8 × 14/5 = 14/40 = 7/20)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 4 (ຄິດໄລ່: 6 - 2 = 4)"}</span>,
          <span key="2-2">{"(2) 1 (ຄິດໄລ່: 1/2 + 2/4 = 1/2 + 1/2 = 1)"}</span>,
          <span key="2-3">{"(3) 1 (ຄິດໄລ່: 5/6 × 3/5 + 1/2 = 3/6 + 1/2 = 1/2 + 1/2 = 1)"}</span>,
          <span key="2-4">{"(4) 1 (ຄິດໄລ່: 4 - 2/5 × 15/2 = 4 - 3 = 1)"}</span>,
          <span key="2-5">{"(5) "} <Fraction num="3" den="10" /> {" (ຄິດໄລ່: 6/15 - 1/10 = 2/5 - 1/10 = 4/10 - 1/10 = 3/10)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) "} <Fraction num="9" den="2" /> {" (ຄິດໄລ່: [(3/4) × 8] - 3/2 = 6 - 3/2 = 12/2 - 3/2 = 9/2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 60 ຕາແມັດ (ຄິດໄລ່: ລູກຊາຍໄດ້ 40m², ລູກສາວໄດ້ 30m², ລວມແບ່ງໄປ 70m², ຍັງເຫຼືອ 120 - 70 = 50m²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 25,000 ກີບ (ຄິດໄລ່: ຊື້ປຶ້ມ 20,000 ກີບ, ຊື້ບິກ 5,000 ກີບ, ລວມ 25,000 ກີບ, ຍັງເຫຼືອ 50,000 - 25,000 = 25,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 1 (ຄິດໄລ່: 3x = 5/2 + 1/2 = 6/2 = 3 ➔ x = 1)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຄິດໄລ່ປະສົມສີ່ປະການສຳລັບເລກສ່ວນແມ່ນຕ້ອງມີຄວາມອົດທົນ ແລະ ປະຕິບັດຕາມລຳດັບບູລິມະສິດສະເໝີ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
