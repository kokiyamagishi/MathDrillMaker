import React from "react";
import { UnitData } from "../units2";

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ພາກທີ II - ບົດທີ 14: ການເຄິ່ງຄືທຽບໃສ່ແກນ ແລະ ທຽບໃສ່ເມັດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ສາມາດປຽບທຽບ, ຈຳແນກຮູບເລຂາຄະນິດທີ່ມີແກນເຄິ່ງຄື ແລະ ໃຈກາງເຄິ່ງຄືໄດ້ຢ່າງຊັດເຈນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 51-54",
  subSections: [
    {
      title: "1. ຄວາມແຕກຕ່າງລະຫວ່າງການເຄິ່ງຄືທຽບໃສ່ແກນ ແລະ ເມັດ (Comparison of Axis and Point Symmetry)",
      keyPoint: {
        title: "ຫຼັກການປຽບທຽບລະບົບເຄິ່ງຄືສອງແບບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການເຄິ່ງຄືໃນເລຂາຄະນິດ ມີ 2 ຮູບແບບຫຼັກ ທີ່ນັກຮຽນຕ້ອງຈຳແນກໃຫ້ໄດ້:"}
            </p>
            
            {/* Comparison table style block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", color: "#37474F" }}>
                <div>
                  <strong style={{ color: "#0D47A1" }}>{"1. ເຄິ່ງຄືທຽບໃສ່ແກນ (Line Symmetry)"}</strong>
                  <p style={{ margin: "4px 0 0 0", fontSize: "1.15rem" }}>{"ແມ່ນການພັບຮູບຕາມແກນ (ການພັບ) ແລ້ວສອງຊีกເຕັງກັນພໍດີ. ເຊັ່ນ: ຮູບສາມແຈທ່ຽງ, ຜີເສື້ອ."}</p>
                </div>
                <div>
                  <strong style={{ color: "#0D47A1" }}>{"2. ເຄິ່ງຄືທຽບໃສ່ເມັດ (Point Symmetry)"}</strong>
                  <p style={{ margin: "4px 0 0 0", fontSize: "1.15rem" }}>{"ແມ່ນການໝູນຮູບ 180 ອົງສາ ອ້ອມໃຈກາງ (ການໝູນ) ແລ້ວເຕັງກັບຮູບເດີມ. ເຊັ່ນ: ຮູບສີ່ແຈຂະໜານ, ໃບພັດລົມ."}</p>
                </div>
              </div>
            </div>

            {/* Visual comparative SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດປຽບທຽບ (ແກນເຄິ່ງຄື vs ໃຈກາງເຄິ່ງຄື)"}</span>
                <svg viewBox="0 0 240 70" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Left: Isosceles Triangle with vertical axis */}
                  <polygon points="30,10 60,50 10,50" fill="none" stroke="#2196F3" strokeWidth="1.5" />
                  <line x1="33" y1="5" x2="33" y2="55" stroke="#F44336" strokeWidth="1.5" strokeDasharray="3,3" />
                  <text x="33" y="66" fill="#D32F2F" fontSize="8" fontWeight="bold" textAnchor="middle">{"ແກນເຄິ່ງຄື (Axis)"}</text>
                  
                  {/* Divider line */}
                  <line x1="120" y1="5" x2="120" y2="65" stroke="#B0BEC5" strokeWidth="1.5" />
                  
                  {/* Right: Parallelogram with center point */}
                  <polygon points="160,15 220,15 200,45 140,45" fill="none" stroke="#4CAF50" strokeWidth="1.5" />
                  <circle cx="180" cy="30" r="3.5" fill="#E65100" />
                  <text x="180" y="60" fill="#E65100" fontSize="8" fontWeight="bold" textAnchor="middle">{"ໃຈກາງເຄິ່ງຄື (Center)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບເລຂາຄະນິດບາງຮູບ ເຊັ່ນ ຮູບວົງມົນ ຫຼື ຮູບສີ່ແຈສາກ ແມ່ນມີທັງສອງຢ່າງເລີຍເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກຈຳນວນແກນເຄິ່ງຄື ຂອງຮູບເລຂາຄະນິດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຮູບສາມແຈສະເໝີ ມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ເສັ້ນ"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຮູບສີ່ແຈສາກ ມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ເສັ້ນ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ฮູບວົງມົນ ມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ? (ຕອບ 1, 2, 4 ຫຼື ຫຼາຍບໍ່ມີສິ້ນສຸດ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ຮູບສີ່ແຈຂະໜານ ມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ເສັ້ນ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ຮູບຈະຕຸລັດ ມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ເສັ້ນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຈຳແນກ ແລະ ກວດສອບຄວາມເຄິ່ງຄື (Identifying Symmetry Types)",
      keyPoint: {
        title: "ການກວດສອບຄວາມເຄິ່ງຄືທັງສອງແບບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດກວດສອບຄຸນລັກສະນະຄວາມເຄິ່ງຄືຂອງແຕ່ລະຮູບ ເພື່ອຈຳແນກປະເພດຂອງມັນໄດ້ດັ່ງນີ້:"}
            </p>
            
            {/* Guide box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• ຮູບສີ່ແຈຂະໜານ ➔ ມີແຕ່ໃຈກາງເຄິ່ງຄື (ບໍ່ມີແກນເຄິ່ງຄື)."}</span>
                <span>{"• ຮູບສາມແຈສະເໝີ ➔ ມີແຕ່ແກນເຄິ່ງຄື (ບໍ່ມີໃຈກາງເຄິ່ງຄື)."}</span>
                <span>{"• ຮູບຈະຕຸລັດ ➔ ມີທັງແກນເຄິ່ງຄື ແລະ ໃຈກາງເຄິ່ງຄື."}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝັ່ນຝຶກຝົນສັງເກດຮູບຮ່າງອ້ອມຕົວ ຈະຊ່ວຍໃຫ້ເຂົ້າໃຈໄດ້ໄວຂຶ້ນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກຄຸນລັກສະນະຄວາມເຄິ່ງຄື ຂອງຮູບເລຂາຄະນິດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຕອບ ມີ ຫຼື ບໍ່ມີ) (ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຮູບສີ່ແຈຂະໜານ ມີແກນເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຮູບສີ່ແຈຂະໜານ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ຮູບສາມແຈສະເໝີ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ຮູບດອກຈັນ ມີແກນເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ຮູບດອກຈັນ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະລະບົບຄວາມເຄິ່ງຄືຂອງຕົວເລກຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຄວາມເຄິ່ງຄືຂອງຕົວເລກອາຣັບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນບັນດາຕົວເລກຕໍ່ໄປນີ້: "} <strong>{"0, 1, 3, 8"}</strong> {", ຕົວເລກໃດແດ່ທີ່ມີທັງແກນເຄິ່ງຄືແນວນອນ ແລະ ໃຈກາງເຄິ່ງຄື? (ຕອບເປັນລາຍການ)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ແມ່ນເລກ"}</span>
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
              {"ການເຄິ່ງຄືຂອງຮູບຄາງໝູທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຄາງໝູທ່ຽງ (Isosceles Trapezoid) ມີແກນເຄິ່ງຄື ຫຼື ໃຈກາງເຄິ່ງຄື? (ຕອບ ແກນເຄິ່ງຄື, ໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່ມີທັງສອງ)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ມີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ຈຳນວນແກນເຄິ່ງຄືຂອງຮູບດອກຈັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບດອກຈັນ (Rhombus) ມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ເສັ້ນ"}</span>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການເຄິ່ງຄືຂອງຮູບຫຼາຍແຈສະເໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບຫຼາຍແຈສະເໝີທີ່ມີ 8 ຂ້າງ (ຮູບແປດແຈສະເໝີ) ຈະມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ມີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ເສັ້ນ"}</span>
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
          <span key="1-1">{"(1) 3 ເສັ້ນ"}</span>,
          <span key="1-2">{"(2) 2 ເສັ້ນ"}</span>,
          <span key="1-3">{"(3) ຫຼາຍບໍ່ມີສິ້ນສຸດ"}</span>,
          <span key="1-4">{"(4) 0 ເສັ້ນ"}</span>,
          <span key="1-5">{"(5) 4 ເສັ້ນ"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) ບໍ່ມີ"}</span>,
          <span key="2-2">{"(2) ມີ"}</span>,
          <span key="2-3">{"(3) ບໍ່ມີ"}</span>,
          <span key="2-4">{"(4) ມີ"}</span>,
          <span key="2-5">{"(5) ມີ"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 0, 8"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) ແກ້ກເຄິ່ງຄື (ມີ 1 ແກ້ວເຄິ່ງຄືແນວຕັ້ງ, ບໍ່ມີໃຈກາງເຄິ່ງຄື)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 2 ເສັ້ນ (ເສັ້ນເນັ່ງຈອມທັງສອງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 8 ເສັ້ນ (ຮູບ n ແຈສະເໝີ ຈະມີ n ແກ້ວເຄິ່ງຄືສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຈຳແນກລະຫວ່າງຄວາມເຄິ່ງຄືທຽບໃສ່ແກນ ແລະ ໃຈກາງເຄິ່ງຄື ເປັນທັກສະການວິເຄາະເລຂາຄະນິດທີ່ດີເລີດ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
