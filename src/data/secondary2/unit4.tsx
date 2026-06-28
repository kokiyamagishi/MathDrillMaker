import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit4Data: UnitData = {
  unitNumber: 4,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ການປຽບທຽບເລກສ່ວນ",
  unitGoal: "ຮຽນຮູ້ວິທີປຽບທຽບສອງເລກສ່ວນໂດຍການຂຶ້ນພູດຮ່ວມ ຫຼື ປ່ຽນເປັນຈຳນວນທົດສະນິຍົມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 11-14",
  subSections: [
    {
      title: "1. การປຽບທຽບເລກສ່ວນທີ່ມີພູດຄືກັນ (Comparing Fractions with Same Denominators)",
      keyPoint: {
        title: "ຫຼັກການປຽບທຽບເລກສ່ວນທີ່ມີພູດຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອສອງເລກສ່ວນມີພູດ (ທາງລຸ່ມ) ເທົ່າກັນ, ເລກສ່ວນທີ່ມີຕົວເສດ (ທາງເທິງ) ໃຫຍ່ກວ່າ ຈະມີຄ່າໃຫຍ່ກວ່າສະເໝີ:"}
            </p>
            
            {/* Visual block */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", margin: "4px 0" }}>
              <span className="math" style={{ fontSize: "1.5rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="3" den="5" /> <span style={{ color: "#E53935", fontWeight: "bold" , whiteSpace: "nowrap"}}>{">"}</span> <Fraction num="2" den="5" />
              </span>
            </div>

            {/* Visual comparison representation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#F57F17" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span className="math" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <Fraction num="3" den="5" />
                  <span>{" (ມີ 3 ສ່ວນສີຟ້າ)"}</span>
                </span>
                <svg viewBox="0 0 100 20" style={{ width: "100%", maxWidth: "100px", height: "auto" }}>
                  <rect x="0" y="2" width="100" height="16" fill="none" stroke="#37474F" strokeWidth="2" />
                  <line x1="20" y1="2" x2="20" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="2" x2="40" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="60" y1="2" x2="60" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="2" x2="80" y2="18" stroke="#37474F" strokeWidth="1" />
                  <rect x="0" y="2" width="60" height="16" fill="#2196F3" />
                </svg>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: "1.5rem" }}>{">"}</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span className="math" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <Fraction num="2" den="5" />
                  <span>{" (ມີ 2 ສ່ວນສີຟ້າ)"}</span>
                </span>
                <svg viewBox="0 0 100 20" style={{ width: "100%", maxWidth: "100px", height: "auto" }}>
                  <rect x="0" y="2" width="100" height="16" fill="none" stroke="#37474F" strokeWidth="2" />
                  <line x1="20" y1="2" x2="20" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="2" x2="40" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="60" y1="2" x2="60" y2="18" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="2" x2="80" y2="18" stroke="#37474F" strokeWidth="1" />
                  <rect x="0" y="2" width="40" height="16" fill="#2196F3" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ: ຖ້າສ່ວນທາງລຸ່ມເທົ່າກັນແລ້ວ, ໃຫ້ປຽບທຽບແຕ່ຕົວເລກທາງເທິງໄດ້ເລີຍ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ > ຫຼື < ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="5" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="5" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="4" den="7" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="6" den="7" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="7" den="10" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="9" den="10" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="8" den="11" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="11" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="11" den="15" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="13" den="15" />
                  </span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການປຽບທຽບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ (Comparing Fractions with Different Denominators)",
      keyPoint: {
        title: "ຫຼັກການປຽບທຽບເລກສ່ວນທີ່ມີພູດຕ່າງກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອສອງເລກສ່ວນມີພູດຕ່າງກັນ, ເຮົາຕ້ອງຂຶ້ນພູດຮ່ວມ (LCM) ຂອງພວກມັນກ່ອນເພື່ອໃຫ້ພູດເທົ່າກັນ ຫຼື ປ່ຽນເປັນຈຳນວນທົດສະນິຍົມ ເພື່ອປຽບທຽບ:"}
            </p>
            
            {/* Visual example block */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ປຽບທຽບ "} <Fraction num="2" den="5" /> {" ແລະ "} <Fraction num="1" den="2" />
              <div style={{ paddingLeft: "12px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span>{"• ຂຶ້ນພູດຮ່ວມເປັນ 10:"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  <Fraction num="2" den="5" /> {" = "} <Fraction num="4" den="10" /> {" (0.4) ຫຼຸດກວ່າ "} <Fraction num="1" den="2" /> {" = "} <Fraction num="5" den="10" /> {" (0.5)"}
                </span>
                <span>{"➔ ດັ່ງນັ້ນ, "} <span className="math"><Fraction num="2" den="5" /> {" < "} <Fraction num="1" den="2" /></span></span>
              </div>
            </div>

             {/* Visual Number Line Graphic */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", backgroundColor: "#ECEFF1", borderRadius: "8px", border: "1px solid #CFD8DC" }}>
              <svg viewBox="0 0 450 100" style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
                {/* Number Line */}
                <line x1="40" y1="50" x2="410" y2="50" stroke="#37474F" strokeWidth="3" />
                <line x1="40" y1="40" x2="40" y2="60" stroke="#37474F" strokeWidth="2" />
                <text x="40" y="72" fill="#37474F" fontSize="12" fontWeight="bold" textAnchor="middle">{"0"}</text>
                
                <line x1="410" y1="40" x2="410" y2="60" stroke="#37474F" strokeWidth="2" />
                <text x="410" y="72" fill="#37474F" fontSize="12" fontWeight="bold" textAnchor="middle">{"1"}</text>
                
                {/* Pin for 2/5 (0.4) - Label Above */}
                <line x1="188" y1="50" x2="188" y2="40" stroke="#E53935" strokeWidth="1.5" strokeDasharray="2,2" />
                <circle cx="188" cy="50" r="5" fill="#E53935" />
                <text x="188" y="14" fill="#E53935" fontSize="11" fontWeight="bold" textAnchor="middle">{"2"}</text>
                <line x1="181" y1="17" x2="195" y2="17" stroke="#E53935" strokeWidth="1.5" />
                <text x="188" y="26" fill="#E53935" fontSize="11" fontWeight="bold" textAnchor="middle">{"5"}</text>
                <text x="188" y="38" fill="#E53935" fontSize="10" fontWeight="bold" textAnchor="middle">{"(0.4)"}</text>

                {/* Pin for 1/2 (0.5) - Label Below */}
                <line x1="225" y1="50" x2="225" y2="60" stroke="#1E88E5" strokeWidth="1.5" strokeDasharray="2,2" />
                <circle cx="225" cy="50" r="5" fill="#1E88E5" />
                <text x="225" y="69" fill="#1E88E5" fontSize="10" fontWeight="bold" textAnchor="middle">{"(0.5)"}</text>
                <text x="225" y="80" fill="#1E88E5" fontSize="11" fontWeight="bold" textAnchor="middle">{"1"}</text>
                <line x1="218" y1="83" x2="232" y2="83" stroke="#1E88E5" strokeWidth="1.5" />
                <text x="225" y="92" fill="#1E88E5" fontSize="11" fontWeight="bold" textAnchor="middle">{"2"}</text>
              </svg>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການປ່ຽນເລກສ່ວນເປັນຈຳນວນທົດສະນິຍົມ (ເອົາຕົວເສດຫານຕົວສ່ວນ) ຈະຊ່ວຍໃຫ້ປຽບທຽບໄດ້ງ່າຍໃນບາງກໍລະນີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ > ຫຼື < ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="4" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="6" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="5" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="2" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="8" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="3" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="7" den="10" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="3" />
                  </span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="12" /> 
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px", verticalAlign: "middle" }}></span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="8" />
                  </span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ປຽບທຽບຄຸນຄ່າໂດຍການຄິດໄລ່ ແລະ ຈັດລຽງລໍາດັບເລກສ່ວນໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແບ່ງເຄັກວັນເກີດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນງານລ້ຽງວັນເກີດ, ທ້າວ ສິດ ກິນເຄັກໄປ "} <Fraction num="2" den="5" /> {" ຂອງເຄັກທັງໝົດ, ນາງ ນາ ກິນໄປ "} <Fraction num="3" den="8" /> {" ຂອງເຄັກທັງໝົດ, ແລະ ທ້າວ ພອນ ກິນໄປ "} <Fraction num="1" den="4" /> {" ຂອງເຄັກທັງໝົດ. ຖາມວ່າໃຜກິນເຄັກຫຼາຍທີ່ສຸດ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              {/* Visual Cake sectors representation */}
              <svg viewBox="0 0 120 120" style={{ width: "100%", maxWidth: "120px", height: "auto" }}>
                <circle cx="60" cy="60" r="50" fill="#FFE0B2" stroke="#E65100" strokeWidth="3" />
                {/* 2/5 (72 deg) partition for Sit */}
                <path d="M 60,60 L 60,10 A 50,50 0 0,1 107.5,44.5 Z" fill="#FFB74D" opacity="0.8" />
                {/* 3/8 (135 deg) partition for Na */}
                <path d="M 60,60 L 107.5,44.5 A 50,50 0 0,1 24.6,95.3 Z" fill="#81C784" opacity="0.8" />
                <circle cx="60" cy="60" r="4" fill="#E65100" />
                <text x="80" y="32" fill="#E65100" fontSize="10" fontWeight="bold">{"ທ້າວ ສິດ"}</text>
                <text x="75" y="80" fill="#2E7D32" fontSize="10" fontWeight="bold">{"ນາງ ນາ"}</text>
              </svg>
            </div>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຜູ້ທີ່ກິນເຄັກຫຼາຍທີ່ສຸດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"การຈັດລຽງລໍາດັບເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຈັດລຽງເລກສ່ວນຕໍ່ໄປນີ້ຈາກ "}<strong>{"ໜ້ອຍຫາຫຼາຍ"}</strong>{": "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", margin: "0 6px" }}>
                <Fraction num="2" den="3" /> {", "} <Fraction num="3" den="5" /> {", "} <Fraction num="1" den="2" />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈັດລຽງໄດ້ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{" < "}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{" < "}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ການສົມທຽບລາຄາສິນຄ້າ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ປຶ້ມສາມຫົວທີ່ມີລາຄາທີ່ແຕກຕ່າງກັນ. ປຶ້ມຫົວ A ຫຼຸດລາຄາໄປ "} <Fraction num="1" den="3" /> {" ຂອງລາຄາເກົ່າ, ປຶ້ມຫົວ B ຫຼຸດລາຄາໄປ "} <Fraction num="2" den="5" /> {" ຂອງລາຄາເກົ່າ, ແລະ ປຶ້ມຫົວ C ຫຼຸດລາຄາໄປ "} <Fraction num="3" den="8" /> {" ຂອງລາຄາເກົ່າ. ຖາມວ່າປຶ້ມຫົວໃດຫຼຸດລາຄາຫຼາຍທີ່ສຸດ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ປຶ້ມຫົວທີ່ຫຼຸດລາຄາຫຼາຍທີ່ສຸດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ສົມທຽບໄລຍະທາງແລ່ນມາລາທອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ท້າວ ແດງ ແລ່ນໄດ້ "} <Fraction num="5" den="6" /> {" ຂອງໄລຍະທາງທັງໝົດ, ນາງ ດຳ ແລ່ນໄດ້ "} <Fraction num="4" den="5" /> {" ຂອງໄລຍະທາງທັງໝົດ. ຖາມວ່າໃຜແລ່ນໄດ້ໄລຍະທາງໄກກວ່າ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຜູ້ທີ່ແລ່ນໄດ້ໄກກວ່າແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
          <span key="1-1">{"(1) >"}</span>,
          <span key="1-2">{"(2) <"}</span>,
          <span key="1-3">{"(3) <"}</span>,
          <span key="1-4">{"(4) >"}</span>,
          <span key="1-5">{"(5) <"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) < (3/4 = 9/12 < 5/6 = 10/12)"}</span>,
          <span key="2-2">{"(2) < (2/5 = 4/10 < 1/2 = 5/10)"}</span>,
          <span key="2-3">{"(3) > (3/8 = 9/24 > 1/3 = 8/24)"}</span>,
          <span key="2-4">{"(4) > (7/10 = 21/30 > 2/3 = 20/30)"}</span>,
          <span key="2-5">{"(5) > (5/12 = 10/24 > 3/8 = 9/24)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) ທ້າວ ສິດ (ສົມທຽບ: 2/5 = 0.40, 3/8 = 0.375, 1/4 = 0.25. ດັ່ງນັ້ນ 2/5 > 3/8 > 1/4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 1/2 < 3/5 < 2/3 (ສົມທຽບໂດຍປ່ຽນເປັນພູດຮ່ວມ 30: 15/30 < 18/30 < 20/30)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) ປຶ້ມຫົວ B (ຫຼຸດລາຄາ 2/5 = 0.40, ຫຼຸດຫຼາຍກວ່າ 3/8 = 0.375 ແລະ 1/3 = 0.33)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) ທ້າວ ແດງ (ສົມທຽບ: 5/6 = 25/30, 4/5 = 24/30. ດັ່ງນັ້ນ 25/30 > 24/30)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການປຽບທຽບເລກສ່ວນຊ່ວຍໃຫ້ພວກເຮົາຕັດສິນໃຈເລືອກສິ່ງທີ່ດີທີ່ສຸດໃນຊີວິດໄດ້. ໝັ່ນຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
