import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ພາກທີ I - ບົດທີ 11: ຈຳນວນຈິງ ແລະ ຈຳນວນອະປົກກະຕິ",
  unitGoal: "ເຂົ້າໃຈຄວາມໝາຍຂອງຈຳນວນອະປົກກະຕິ, ຈຳນວນຈິງ ແລະ ສາມາດຈຳແນກປະເພດຈຳນວນຕ່າງໆໄດ້ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 39-42",
  subSections: [
    {
      title: "1. ຈຳນວນອະປົກກະຕິ ແລະ ໂຄງສ້າງຈຳນວນຈິງ (Irrational and Real Number System)",
      keyPoint: {
        title: "ຄວາມໝາຍຂອງຈຳນວນອະປົກກະຕິ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈຳນວນອະປົກກະຕິ (Irrational Numbers) ແມ່ນຈຳນວນທົດສະນິຍົມບໍ່ສິ້ນສຸດ ແລະ ບໍ່ຮອບວຽນ ເຊິ່ງບໍ່ສາມາດຂຽນໃນຮູບຮ່າງເລກສ່ວນໄດ້ ເຊັ່ນ:"} <span className="math">{"√2, √3, π"}</span>{". ຜົນລວມຂອງຈຳນວນປົກກະຕິ ແລະ ຈຳນວນອະປົກກະຕິ ເອີ້ນວ່າ ຈຳນວນຈິງ (Real Numbers):"}
            </p>
            
            {/* Classification Diagram */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດໂຄງສ້າງລະບົບຈຳນວນຈິງ (Real Numbers)"}</span>
                <svg viewBox="0 0 240 80" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Real Numbers Box */}
                  <rect x="70" y="5" width="100" height="20" rx="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1.5" />
                  <text x="120" y="18" fill="#0288D1" fontSize="9" fontWeight="bold" textAnchor="middle">{"ຈຳນວນຈິງ (Real)"}</text>
                  
                  {/* Branch Lines */}
                  <line x1="120" y1="25" x2="60" y2="45" stroke="#37474F" strokeWidth="1.2" />
                  <line x1="120" y1="25" x2="180" y2="45" stroke="#37474F" strokeWidth="1.2" />
                  
                  {/* Rational Box */}
                  <rect x="15" y="45" width="90" height="25" rx="3" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
                  <text x="60" y="57" fill="#2E7D32" fontSize="8" fontWeight="bold" textAnchor="middle">{"ຈຳນວນປົກກະຕິ (Rational)"}</text>
                  <text x="60" y="66" fill="#558B2F" fontSize="7" textAnchor="middle">{"(1/2, 0.5, 3, -4)"}</text>
                  
                  {/* Irrational Box */}
                  <rect x="135" y="45" width="90" height="25" rx="3" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1.5" />
                  <text x="180" y="57" fill="#E65100" fontSize="8" fontWeight="bold" textAnchor="middle">{"ຈຳນວນອະປົກກະຕິ"}</text>
                  <text x="180" y="66" fill="#EF6C00" fontSize="7" textAnchor="middle">{"(√2, √3, π)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຳນວນຈິງທຸກຕົວ ສາມາດສະແດງເທິງເສັ້ນສະແດງຈຳນວນໄດ້ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຈຳແນກຈຳນວນຕໍ່ໄປນີ້ ວ່າແມ່ນຈຳນວນປົກກະຕິ ຫຼື ອະປົກກະຕິ: "}<span className="point-label">{"(ຕອບ ປົກກະຕິ ຫຼື ອະປົກກະຕິ) (ຂໍ້ລະ 2 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span className="math">{"√9"}</span>
                  <span>{"ແມ່ນຈຳນວນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span className="math">{"√2"}</span>
                  <span>{"ແມ່ນຈຳນວນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="math">{"3.14159..."}</span>
                  <span>{"ແມ່ນຈຳນວນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="math">{"-0.25"}</span>
                  <span>{"ແມ່ນຈຳນວນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span className="math">{"√25"}</span>
                  <span>{"ແມ່ນຈຳນວນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຮາກຂັ້ນສອງ ແລະ ຄ່າປະມານ (Square Roots and Approximation)",
      keyPoint: {
        title: "ການຄິດໄລ່ຮາກຂັ້ນສອງພື້ນຖານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮາກຂັ້ນສອງຂອງຈຳນວນບວກ "} <span className="math">{"a"}</span> {" ໝາຍເຖິງຈຳນວນທີ່ຂຶ້ນກຳລັງສອງແລ້ວເທົ່າກັບ "} <span className="math">{"a"}</span>{". ຖ້າຈຳນວນນັ້ນສາມາດຖອດຮາກໄດ້ພໍດີ ມັນຈະເປັນຈຳນວນປົກກະຕິ:"}
            </p>
            
            {/* Visual Formula box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ຕົວຢ່າງການຖອດຮາກພໍດີ: "}</strong>
                <span className="math">{"• √4 = 2 (ເພາະວ່າ 2² = 4)"}</span>
                <span className="math">{"• √16 = 4 (ເພາະວ່າ 4² = 16)"}</span>
                <span className="math">{"• √0.09 = 0.3 (ເພາະວ່າ 0.3² = 0.09)"}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮາກຂັ້ນສອງຂອງຈຳນວນລົບ ບໍ່ມີຢູ່ໃນກຸ່ມຈຳນວນຈິງເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຖອດຮາກຂັ້ນສອງຂອງຈຳນວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span className="math">{"√36 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span className="math">{"√49 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="math">{"√100 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="math">{"√0.04 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span className="math">{"√1.44 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດຄ່າຂອບເຂດ ແລະ ການປຽບທຽບລະຫວ່າງຈຳນວນຢ່າງຮອບຄອບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການປຽບທຽບຄ່າຂອງຮາກຂັ້ນສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງປຽບທຽບຄ່າລະຫວ່າງ "} <span className="math">{"5"}</span> {" ແລະ "} <span className="math">{"√24"}</span> {". (ຕອບ ຈຳນວນໃດຫຼາຍກວ່າ)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຈຳນວນທີ່ຫຼາຍກວ່າແມ່ນ"}</span>
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
              {"ການຊອກຫາຂອບເຂດຂອງຈຳນວນອະປົກກະຕິ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈຳນວນ "} <span className="math">{"√10"}</span> {" ຢູ່ລະຫວ່າງສອງຈຳນວນຖ້ວນໃດ? (ຕອບເປັນຮູບແບບ 𝑥 ແລະ 𝑦)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຢູ່ລະຫວ່າງ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດບັນຫາເນື້ອທີ່ຮູບຈະຕຸລັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ມີຮູບຈະຕຸລັດໜຶ່ງທີ່ມີເນື້ອທີ່ 64 ຕາແມັດ. ຖາມວ່າລວງຍາວຂ້າງຂອງຮູບຈະຕຸລັດນັ້ນແມ່ນຈັກແມັດ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ລວງຍາວຂ້າງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"m"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຈຳແນກຈຳນວນຈິງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈຳນວນໃດໃນບັນດາຕໍ່ໄປນີ້ ບໍ່ແມ່ນຈຳນວນຈິງ? "} <span className="math">{"-4, √9, √-4, 0.5"}</span>
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຈຳນວນທີ່ບໍ່ແມ່ນຈຳນວນຈິງແມ່ນ"}</span>
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
          <span key="1-1">{"(1) ປົກກະຕิ (ເພາະວ່າ √9 = 3)"}</span>,
          <span key="1-2">{"(2) ອະປົກກະຕິ (√2 = 1.414...)"}</span>,
          <span key="1-3">{"(3) ອະປົກກະຕິ (π = 3.1415...)"}</span>,
          <span key="1-4">{"(4) ປົກກະຕິ"}</span>,
          <span key="1-5">{"(5) ປົກກະຕິ (ເພາະວ່າ √25 = 5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 6"}</span>,
          <span key="2-2">{"(2) 7"}</span>,
          <span key="2-3">{"(3) 10"}</span>,
          <span key="2-4">{"(4) 0.2"}</span>,
          <span key="2-5">{"(5) 1.2"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 5 (ເພາະວ່າ 5 = √25 > √24)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 3 ແລະ 4 (ເພາະວ່າ √9 < √10 < √16)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 8 m (ຄິດໄລ່: √64 = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) √-4 (ເພາະວ່າຮາກຂັ້ນສອງຂອງຈຳນວນລົບບໍ່ມີໃນຈຳນວນຈິງ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ຄວາມແຕກຕ່າງລະຫວ່າງຈຳນວນປົກກະຕິ ແລະ ອະປົກກະຕິ ແມ່ນຫຼັກການພື້ນຖານຂອງພີຊະຄະນິດ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
