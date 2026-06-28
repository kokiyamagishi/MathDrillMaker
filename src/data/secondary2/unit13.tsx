import React from "react";
import { UnitData } from "../units2";

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ພາກທີ II - ບົດທີ 13: ການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ (ຕໍ່)",
  unitGoal: "ເຂົ້າໃຈຢ່າງເລິກເຊິ່ງກ່ຽວກັບຄຸນລັກສະນະການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ ເຊັ່ນ ການຮັກສາໄລຍະຫ່າງ, ເນື້ອທີ່, ມຸມ ແລະ ລັກສະນະຂະໜານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 47-50",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະການຮັກສາໄລຍະຫ່າງ ແລະ ລັກສະນະຂະໜານ (Conservation of Distances and Parallelism)",
      keyPoint: {
        title: "ຄຸນລັກສະນະທາງເລຂາຄະນິດຂອງການເຄິ່ງຄື",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ ມີຄຸນລັກສະນະພິເສດຫຼາຍປະການ:"}
            </p>
            
            {/* Properties block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• ຮູບເຄິ່ງຄືຂອງທ່ອນຊື່ AB ແມ່ນທ່ອນຊື່ A'B' ທີ່ຍາວເທົ່າກັນສະເໝີ: "} <strong>{"AB = A'B'"}</strong></span>
                <span>{"• ຮູບເຄິ່ງຄືຂອງເສັ້ນຊື່ L ແມ່ນເສັ້ນຊື່ L' ທີ່ຂະໜານກັບ L ສະເໝີ: "} <strong>{"L ∥ L'"}</strong></span>
                <span style={{ color: "#0D47A1" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າ AB = 8 cm, ທ່ອນຊື່ເຄິ່ງຄື A'B' ຈະຍາວ 8 cm ສະເໝີ."}
                </span>
              </div>
            </div>

            {/* Symmetrical Triangles Diagram */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດຮູບສາມແຈເຄິ່ງຄື ABC ແລະ A'B'C' ທຽບໃສ່ O"}</span>
                <svg viewBox="0 0 240 80" style={{ width: "100%", maxWidth: "220px", height: "auto" }}>
                  {/* Triangle ABC */}
                  <polygon points="20,15 60,15 40,45" fill="none" stroke="#2196F3" strokeWidth="1.5" />
                  <text x="15" y="15" fill="#0D47A1" fontSize="10" fontWeight="bold">{"A"}</text>
                  <text x="65" y="15" fill="#0D47A1" fontSize="10" fontWeight="bold">{"B"}</text>
                  <text x="40" y="55" fill="#0D47A1" fontSize="10" fontWeight="bold">{"C"}</text>
                  
                  {/* Center O */}
                  <circle cx="120" cy="40" r="3" fill="#4CAF50" />
                  <text x="120" y="32" fill="#2E7D32" fontSize="9" fontWeight="bold" textAnchor="middle">{"O"}</text>
                  
                  {/* Symmetry guide lines */}
                  <line x1="40" y1="45" x2="200" y2="35" stroke="#757575" strokeWidth="0.8" strokeDasharray="2,2" />
                  
                  {/* Triangle A'B'C' (Symmetric) */}
                  <polygon points="220,65 180,65 200,35" fill="none" stroke="#F44336" strokeWidth="1.5" />
                  <text x="225" y="70" fill="#D32F2F" fontSize="10" fontWeight="bold">{"A'"}</text>
                  <text x="175" y="70" fill="#D32F2F" fontSize="10" fontWeight="bold">{"B'"}</text>
                  <text x="200" y="28" fill="#D32F2F" fontSize="10" fontWeight="bold">{"C'"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ທ່ອນຊື່ເຄິ່ງຄືກັນ ຈະມີທິດທາງກົງກັນຂ້າມກັນ ແຕ່ມີລວງຍາວເທົ່າກັນ ແລະ ຂະໜານກັນສະເໝີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະໄລຍະຫ່າງ ແລະ ເສັ້ນຊື່ເຄິ່ງຄື: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                    {"ຖ້າທ່ອນຊື່ AB ຍາວ 6 cm, ท່ອນຊື່ເຄິ່ງຄື A'B' ຂອງມັນຈະຍາວຈັກ cm?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                    {"ເສັ້ນຊື່ L' ທີ່ເຄິ່ງຄືກັບ L ທຽບໃສ່ເມັດ O ຈະມີລັກສະນະແນວໃດກັບ L?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                    {"ຖ້າທ່ອນຊື່ AB ແລະ A'B' ເຄິ່ງຄືກັນທຽບໃສ່ O, ຖາມວ່າ AB ແລະ A'B' ຂະໜານກັນ ຫຼື ບໍ່?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                    {"ຖ້າທ່ອນຊື່ເຄິ່ງຄື A'B' ຍາວ 12.5 cm, ຖາມວ່າທ່ອນຊື່ຕົ້ນແບບ AB ຈະຍາວຈັກ cm?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                    {"ຖ້າມີເສັ້ນຊື່ L ຜ່ານເມັດ O (ໃຈກາງເຄິ່ງຄື), ເສັ້ນຊື່ເຄິ່ງຄື L' ຂອງ L ຈະເຕັງກັບ L ຫຼື ບໍ່?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຮັກສາເນື້ອທີ່ ແລະ ມຸມ ຂອງຮູບເຄິ່ງຄື (Conservation of Area and Angles)",
      keyPoint: {
        title: "ຄວາມເຕັງກັນ (Congruence) ຂອງຮູບເຄິ່ງຄື",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ ຈະເຕັງກັນ (Congruent) ກັບຮູບເດີມສະເໝີ. ໝາຍຄວາມວ່າ ມັນຈະຮັກສາຂະໜາດຂອງມຸມ ແລະ ເນື້ອທີ່ໃຫ້ເທົ່າເດີມ:"}
            </p>
            
            {/* Key details */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• ເນື້ອທີ່ຮູບເກົ່າ = ເນື້ອທີ່ຮູບເຄິ່ງຄືສະເໝີ."}</span>
                <span>{"• ມຸມຕົ້ນແບບ = ມຸມເຄິ່ງຄືສະເໝີ (ຮັກສາຂະໜາດມຸມ)."}</span>
                <span style={{ color: "#2E7D32" }}>
                  <strong>{"ຕົວຢ່າງ: "}</strong> {"ຖ້າຮູບສາມແຈ ABC ມີເນື້ອທີ່ 15 cm², ຮູບສາມແຈເຄິ່ງຄື A'B'C' ຈະມີເນື້ອທີ່ 15 cm² ສະເໝີ."}
                </span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງ ບໍ່ເຮັດໃຫ້ຮູບຮ່າງ ແລະ ຂະໜາດຂອງຮູບປ່ຽນແປງເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບເນື້ອທີ່ ແລະ ມຸມຂອງຮູບເຄິ່ງຄື: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າຮູບສາມແຈເກົ່າມີເນື້ອທີ່ 15 cm², ຮູບເຄິ່ງຄືຂອງມັນຈະມີເນື້ອທີ່ຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າມຸມ A ໃນຮູບຕົ້ນແບບເທົ່າກັບ 60°, ມຸມ A' ທີ່ເຄິ່ງຄືກັນຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ອົງສາ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າລັດສະໝີວົງມົນ A ແມ່ນ 3 cm, ວົງມົນເຄິ່ງຄື A' ຈະມີເນື້ອທີ່ເທົ່າກັນກັບ A ຫຼື ບໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າຮູບສີ່ແຈສາກຕົ້ນແບບມີເນື້ອທີ່ 24 cm², ຮູບເຄິ່ງຄືຂອງມັນຈະມີເນື້ອທີ່ຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າມຸມ B' ຂອງຮູບສາມແຈເຄິ່ງຄືແມ່ນ 90°, ມຸມ B ຂອງຮູບຕົ້ນແບບຈະແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ອົງສາ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະການປ່ຽນແປງຮູບຮ່າງ ແລະ ຕອບຄຳຖາມເລຂາຄະນິດລະດັບສູງຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຄຸນລັກສະນະຄວາມຂະໜານລະຫວ່າງສອງເສັ້ນຊື່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເສັ້ນຊື່ d1 ແລະ d2 ຂະໜານກັນ, ຮູບເຄິ່ງຄື d1' ແລະ d2' ຂອງພວກມັນ ທຽບໃສ່ເມັດ O ຈະຂະໜານກັນ ຫຼື ບໍ່? (ຕອບ ຂະໜານ ຫຼື ບໍ່ຂະໜານ)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ:"}</span>
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
              {"ເນື້ອທີ່ລວມຂອງຮູບເຄິ່ງຄື: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສາມແຈ ABC ມີເນື້ອທີ່ 8 cm², ຖ້າຮູບສາມແຈເຄິ່ງຄື A'B'C' ຖືກແຕ້ມຂຶ້ນ. ຖາມວ່າເນື້ອທີ່ລວມທັງໝົດຂອງສອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm²?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ລວມແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ການເຄິ່ງຄືຂອງມຸມສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າມຸມ ABC ແມ່ນມຸມສາກ (90°), ມຸມເຄິ່ງຄື A'B'C' ຂອງມັນ ຈະແມ່ນມຸມປະເພດໃດ? (ຕອບ ມຸມແຫຼມ, ມຸມສາກ ຫຼື ມຸມຫວາກ)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ແມ່ນ"}</span>
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
            {"ການຮັກສາຄວາມຍາວຮອບຮູບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ວົງມົນ A ມີລວງຮອບ 20 cm, ວົງມົນເຄິ່ງຄື A' ຈະມີລວງຮອບຈັກ cm?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"cm"}</span>
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
          <span key="1-1">{"(1) 6"}</span>,
          <span key="1-2">{"(2) ຂະໜານ"}</span>,
          <span key="1-3">{"(3) ມີ (ຂະໜານກັນສະເໝີ)"}</span>,
          <span key="1-4">{"(4) 12.5"}</span>,
          <span key="1-5">{"(5) ມີ (ເພາະເມັດ O ຢູ່ເທິງເສັ້ນຊື່)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 15"}</span>,
          <span key="2-2">{"(2) 60"}</span>,
          <span key="2-3">{"(3) ມີ (ເພາະເນື້ອທີ່ຮັກສາຄືເກົ່າ)"}</span>,
          <span key="2-4">{"(4) 24"}</span>,
          <span key="2-5">{"(5) 90"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) ຂະໜານ"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 16 cm² (ຄິດໄລ່: 8 + 8 = 16)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) ມຸມສາກ (ເພາະມຸມຮັກສາຂະໜາດ 90°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 20 (ເພາະລວງຮອບຮັກສາຄືເກົ່າ)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ຄຸນລັກສະນະການເຄິ່ງຄືທຽບໃສ່ເມັດໜຶ່ງຊ່ວຍໃຫ້ເຮົາສາມາດແກ້ໄຂໂຈດເລຂາຄະນິດທີ່ມີຄວາມຊັບຊ້ອນໄດ້ງ່າຍຂຶ້ນສະເໝີເດີ້!"
  }
};
