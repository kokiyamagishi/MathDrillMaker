import React from "react";
import { UnitData } from "../units2";

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ພາກທີ II - ບົດທີ 12: ການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ",
  unitGoal: "ເຂົ້າໃຈ ແລະ ສາມາດກຳນົດເມັດເຄິ່ງຄື, ໃຈກາງເຄິ່ງຄື ຂອງເມັດ ແລະ ຮູບເລຂາຄະນິດຕ່າງໆໄດ້ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 43-46",
  subSections: [
    {
      title: "1. ຫຼັກການພື້ນຖານຂອງການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ (Basic Principles of Point Symmetry)",
      keyPoint: {
        title: "ຄວາມໝາຍຂອງເມັດເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມັດ A' ເອີ້ນວ່າ ເມັດເຄິ່ງຄື ຂອງເມັດ A ທຽບໃສ່ເມັດ O (ໃຈກາງເຄິ່ງຄື) ໝາຍຄວາມວ່າ ເມັດ O ແມ່ນເມັດເຄິ່ງກາງ (Midpoint) ຂອງທ່ອນຊື່ AA':"}
            </p>
            
            {/* Visual Point Symmetry Formula/Concept block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• ຖ້າ A' ເປັນເມັດເຄິ່ງຄືຂອງ A ທຽບໃສ່ O, ຈະໄດ້: "} <strong>{"OA = OA'"}</strong></span>
                <span>{"• ໄລຍະຫ່າງແຕ່ A ຫາ O ຈະເທົ່າກັບໄລຍະຫ່າງແຕ່ O ຫາ A'"}</span>
                <span style={{ color: "#0D47A1" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າຫາກ OA = 5 cm, ໄລຍະຫ່າງ AA' ຈະເທົ່າກັບ 5 + 5 = 10 cm."}
                </span>
              </div>
            </div>

            {/* Symmetry Diagram */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດເມັດເຄິ່ງຄື AA' ທຽບໃສ່ O"}</span>
                <svg viewBox="0 0 240 60" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Line AA' */}
                  <line x1="20" y1="30" x2="220" y2="30" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Point A */}
                  <circle cx="20" cy="30" r="4" fill="#F44336" />
                  <text x="20" y="20" fill="#D32F2F" fontSize="12" fontWeight="bold" textAnchor="middle">{"A"}</text>
                  
                  {/* Point O */}
                  <circle cx="120" cy="30" r="4" fill="#4CAF50" />
                  <text x="120" y="20" fill="#2E7D32" fontSize="12" fontWeight="bold" textAnchor="middle">{"O (ໃຈກາງ)"}</text>
                  
                  {/* Point A' */}
                  <circle cx="220" cy="30" r="4" fill="#2196F3" />
                  <text x="220" y="20" fill="#0D47A1" fontSize="12" fontWeight="bold" textAnchor="middle">{"A'"}</text>

                  {/* Equal markers */}
                  <text x="70" y="44" fill="#37474F" fontSize="9" textAnchor="middle">{"5 cm"}</text>
                  <text x="170" y="44" fill="#37474F" fontSize="9" textAnchor="middle">{"5 cm"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ສະເໝີ: ໃຈກາງເຄິ່ງຄື O ຈະຢູ່ເຄິ່ງກາງລະຫວ່າງສອງເມັດສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບໄລຍະຫ່າງຂອງການເຄິ່ງຄື: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເມັດ A ຢູ່ຫ່າງຈາກ O ແມ່ນ 5 cm, ເມັດເຄິ່ງຄື A' ຈະຢູ່ຫ່າງຈາກ O ຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເມັດ A ຢູ່ຫ່າງຈາກ O ແມ່ນ 7 cm, ໄລຍະຫ່າງລະຫວ່າງ AA' ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າໄລຍະຫ່າງ AA' ເທົ່າກັບ 16 cm, ໄລຍະຫ່າງແຕ່ A ຫາ ໃຈກາງ O ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າ OA = 12 cm ແລະ A' ແມ່ນເມັດເຄິ່ງຄື, ຖາມວ່າ OA' ຈະມີລວງຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າໄລຍະຫ່າງແຕ່ເມັດເຄິ່ງຄື A' ຫາ O ແມ່ນ 4.5 cm, ໄລຍະຫ່າງ AA' ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໃຈກາງເຄິ່ງຄືຂອງຮູບເລຂາຄະນິດ (Symmetry Center of Geometric Figures)",
      keyPoint: {
        title: "ຮູບທີ່ມີໃຈກາງເຄິ່ງຄື",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບເລຂາຄະນິດໃດໜຶ່ງທີ່ມີໃຈກາງເຄິ່ງຄື O ໝາຍຄວາມວ່າ ເມື່ອເຮົາໝູນຮູບນັ້ນໄປ 180 ອົງສາ ອ້ອມ O, ຮູບນັ້ນຈະເຕັງກັບຮູບເດີມພໍດີ:"}
            </p>
            
            {/* Shapes list */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• ຮູບຈະຕຸລັດ, ຮູບສີ່ແຈສາກ, ຮູບສີ່ແຈຂະໜານ, ຮູບດອກຈັນ ➔ "}<strong>{"ມີໃຈກາງເຄິ່ງຄື"}</strong> {"(ຈຸດຕັດກັນຂອງສອງເສັ້ນເນັ່ງຈອມ)."}</span>
                <span>{"• ຮູບວົງມົນ ➔ "}<strong>{"ມີໃຈກາງເຄິ່ງຄື"}</strong> {"(ຈຸດໃຈກາງຂອງວົງມົນ)."}</span>
                <span style={{ color: "#C62828" }}>{"• ຮູບສາມແຈສະເໝີ, ຮູບສາມແຈທ່ຽງ ➔ "}<strong>{"ບໍ່ມີໃຈກາງເຄິ່ງຄື"}</strong> {"(ມີແຕ່ແກນເຄິ່ງຄື)."}</span>
              </div>
            </div>

            {/* Geometric Rotation representation */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດການໝູນ 180° ຂອງຮູບສີ່ແຈຂະໜານ"}</span>
                <svg viewBox="0 0 200 60" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Parallelogram */}
                  <polygon points="30,10 130,10 110,50 10,50" fill="none" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Diagonals */}
                  <line x1="30" y1="10" x2="110" y2="50" stroke="#757575" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="130" y1="10" x2="10" y2="50" stroke="#757575" strokeWidth="1" strokeDasharray="3,3" />
                  
                  {/* Midpoint O */}
                  <circle cx="70" cy="30" r="3" fill="#2E7D32" />
                  <text x="70" y="24" fill="#2E7D32" fontSize="9" fontWeight="bold" textAnchor="middle">{"O"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບຫຼາຍແຈສະເໝີທີ່ມີຈຳນວນຈອມເປັນເລກຄູ່ ຈະມີໃຈກາງເຄິ່ງຄືສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບໃຈກາງເຄິ່ງຄືຂອງຮູບ: "}<span className="point-label">{"(ຕອບ ມີ ຫຼື ບໍ່ມີ) (ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບສາມແຈສະເໝີ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບວົງມົນ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຮູບຫ້າແຈສະເໝີ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຮູບຫົກແຈສະເໝີ ມີໃຈກາງເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດຄຸນລັກສະນະການເຄິ່ງຄືຂອງຕົວອັກສອນຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການເຄິ່ງຄືຂອງຕົວອັກສອນພາສາອັງກິດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນບັນດາຕົວອັກສອນຕໍ່ໄປນີ້: "} <strong>{"A, H, S, X, Y"}</strong> {", ຕົວອັກສອນໃດແດ່ທີ່ມີໃຈກາງເຄິ່ງຄື? (ໝູນ 180° ແລ້ວຄືເກົ່າ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕົວອັກສອນທີ່ມີໃຈກາງເຄິ່ງຄືແມ່ນ"}</span>
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
              {"ໄລຍະຫ່າງລະຫວ່າງເມັດເຄິ່ງຄື: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມັດ M ແລະ N ເຄິ່ງຄືກັນທຽບໃສ່ O, ຖ້າຫາກໄລຍະ MN = 15 cm, ຖາມວ່າໄລຍະ OM ຈະເທົ່າກັບຈັກ cm?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: OM ="}</span>
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
            {"ຄຸນລັກສະນະຂອງເສັ້ນເຄິ່ງຄື: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າທ່ອນຊື່ AB ມີລວງຍາວ 8 cm ແລະ ທ່ອນຊື່ A'B' ແມ່ນທ່ອນຊື່ເຄິ່ງຄືຂອງ AB ທຽບໃສ່ O. ຖາມວ່າ A'B' ຈະຍາວຈັກ cm?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: A'B' ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການເຄິ່ງຄືຂອງເມັດໃນລະບົບພິກັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເມັດ P ມີພິກັດແມ່ນ (2, 3), ເມັດເຄິ່ງຄື P' ຂອງ P ທຽບໃສ່ເມັດເຄິ່ງຄື (0, 0) ຈະມີພິກັດແມ່ນເທົ່າໃດ? (ຂຽນໃນຮູບແບບ (𝑥, 𝑦))"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: P' ="}</span>
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
          <span key="1-1">{"(1) 5"}</span>,
          <span key="1-2">{"(2) 14 (ຄິດໄລ່: 7 × 2 = 14)"}</span>,
          <span key="1-3">{"(3) 8 (ຄິດໄລ່: 16 ÷ 2 = 8)"}</span>,
          <span key="1-4">{"(4) 12"}</span>,
          <span key="1-5">{"(5) 9 (ຄິດໄລ່: 4.5 × 2 = 9)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) ມີ"}</span>,
          <span key="2-2">{"(2) ບໍ່ມີ"}</span>,
          <span key="2-3">{"(3) ມີ"}</span>,
          <span key="2-4">{"(4) ບໍ່ມີ"}</span>,
          <span key="2-5">{"(5) ມີ"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) H, S, X"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 7.5 (ຄິດໄລ່: 15 ÷ 2 = 7.5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 8 (ເພາະວ່າການເຄິ່ງຄືຮັກສາລວງຍາວຂອງທ່ອນຊື່)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) (-2, -3)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງມີຄຸນລັກສະນະພິເສດໃນການຮັກສາໄລຍະຫ່າງ ແລະ ຮູບຮ່າງ. ຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
