import React from "react";
import { UnitData } from "../units2";

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ພາກທີ II - ບົດທີ 12: ເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບນິຍາມ, ຄຸນລັກສະນະ ແລະ ສັນຍະລັກຂອງເສັ້ນຊື່ຂະໜານ (Parallel Lines, //) ແລະ ເສັ້ນຊື່ຕັ້ງສາກ (Perpendicular Lines, ⊥)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 88-92",
  subSections: [
    {
      title: "1. ເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ (Parallel & Perpendicular Lines)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ສັນຍະລັກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນເລຂາຄະນິດ, ສອງເສັ້ນຊື່ຢູ່ໃນແຜ່ນພຽງດຽວກັນມີສອງຕຳແໜ່ງທີ່ສຳຄັນ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ເສັ້ນຊື່ຂະໜານ: "}</strong>{" ແມ່ນສອງເສັ້ນຊື່ທີ່ບໍ່ມີເມັດຮ່ວມກັນເລີຍ (ບໍ່ຕັດກັນຈັກເທື່ອ). ສັນຍະລັກດ້ວຍ "}<strong>{"//"}</strong>{" ເຊັ່ນ: d₁ // d₂."}</li>
              <li><strong>{"ເສັ້ນຊື່ຕັ້ງສາກ: "}</strong>{" ແມ່ນສອງເສັ້ນຊື່ທີ່ຕັດກັນ ແລະ ປະກອບເປັນ 4 ມຸມສາກ (90°). ສັນຍະລັກດ້ວຍ "}<strong>{"⊥"}</strong>{" ເຊັ່ນ: d₁ ⊥ d₂."}</li>
            </ul>

            <div style={{ display: "flex", justifyContent: "space-around", padding: "16px", backgroundColor: "#ECEFF1", borderRadius: "8px", border: "1px solid #CFD8DC" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{"ເສັ້ນຊື່ຂະໜານ (d₁ // d₂)"}</span>
                <svg width="120" height="80">
                  <line x1="10" y1="25" x2="110" y2="25" stroke="#37474F" strokeWidth="3" />
                  <line x1="10" y1="55" x2="110" y2="55" stroke="#37474F" strokeWidth="3" />
                  <text x="110" y="20" fontSize="12" fontWeight="bold">{"d₁"}</text>
                  <text x="110" y="50" fontSize="12" fontWeight="bold">{"d₂"}</text>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{"ເສັ້ນຊື່ຕັ້ງສາກ (d₁ ⊥ d₂)"}</span>
                <svg width="120" height="80">
                  <line x1="60" y1="10" x2="60" y2="70" stroke="#37474F" strokeWidth="3" />
                  <line x1="20" y1="40" x2="100" y2="40" stroke="#37474F" strokeWidth="3" />
                  <rect x="60" y="30" width="10" height="10" fill="none" stroke="#D32F2F" strokeWidth="2" />
                  <text x="70" y="20" fontSize="12" fontWeight="bold">{"d₁"}</text>
                  <text x="110" y="35" fontSize="12" fontWeight="bold">{"d₂"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສັນຍະລັກໃຫ້ດີ: // ແມ່ນຂະໜານ, ⊥ ແມ່ນຕັ້ງສາກ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ // ຫຼື ⊥ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                    {"ຖ້າສອງເສັ້ນຊື່ d₁ ແລະ d₂ ບໍ່ມີເມັດຮ່ວມກັນເລີຍ, ເຮົາຂຽນ:"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: d₁ "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                    <span>{" d₂"}</span>
                  </div>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                    {"ຖ້າສອງເສັ້ນຊື່ d₁ ແລະ d₂ ຕັດກັນເປັນມຸມ 90°, ເຮົາຂຽນ:"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: d₁ "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                    <span>{" d₂"}</span>
                  </div>
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
                {"ສອງເສັ້ນຊື່ຕັ້ງສາກກັນຈະປະກອບເປັນມຸມສາກທັງໝົດຈັກມຸມ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: ປະກອບເປັນມຸມສາກທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ມຸມ."}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄຸນລັກສະນະຂອງເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ (Theorems & Properties)",
      keyPoint: {
        title: "ຫຼັກເກນທີ່ສຳຄັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີຄຸນລັກສະນະພື້ນຖານທີ່ນຳໃຊ້ໃນການພິສູດ ແລະ ແກ້ເລກດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຄຸນລັກສະນະ 1: "}</strong>{" ຖ້າສອງເສັ້ນຊື່ d₁ ແລະ d₂ ຕ່າງກັນ ຕັ້ງສາກກັບເສັ້ນຊື່ d₃ ດຽວກັນ, ແລ້ວ d₁ ຈະຂະໜານກັບ d₂."}</li>
              <li><strong>{"ຄຸນລັກສະນະ 2: "}</strong>{" ຖ້າສອງເສັ້ນຊື່ d₁ // d₂ ຂະໜານກັນ, ທຸກເສັ້ນຊື່ d₃ ທີ່ຕັ້ງສາກກັບ d₁ ກໍຕ້ອງຕັ້ງສາກກັບ d₂ ເຊັ່ນກັນ."}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ສະຫຼຸບເປັນສູດສັນຍະລັກ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ຖ້າ d₁ ⊥ d₃ ແລະ d₂ ⊥ d₃  ⇒  d₁ // d₂"}</li>
                <li>{"ຖ້າ d₁ // d₂ ແລະ d₃ ⊥ d₁  ⇒  d₃ ⊥ d₂"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄຸນລັກສະນະເຫຼົ່ານີ້ມີປະໂຫຍດຫຼາຍໃນການຄິດໄລ່ ແລະ ພິສູດເລຂາຄະນິດໃນຂັ້ນສູງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມສັນຍະລັກເລຂາຄະນິດທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າ d₁ ⊥ d₃ ແລະ d₂ ⊥ d₃ ແລ້ວສະຫຼຸບໄດ້ວ່າ: d₁"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"d₂"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ d₁ // d₂ ແລະ d₃ ⊥ d₁ ແລ້ວສະຫຼຸບໄດ້ວ່າ: d₃"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"d₂"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ສາມເສັ້ນຊື່ a, b, c. ຖ້າ a // b ແລະ b // c, ຖາມວ່າເສັ້ນຊື່ a ແລະ c ຈະມີການພົວພັນກັນແນວໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: a"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"c"}</span>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການພົວພັນລະຫວ່າງເສັ້ນຊື່ຂະໜານ ແລະ ຕັ້ງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສີ່ເສັ້ນຊື່ d₁, d₂, d₃, d₄ ໂດຍຮູ້ວ່າ d₁ // d₂, d₂ ⊥ d₃, ແລະ d₃ // d₄. ຖາມວ່າ d₁ ຈະມີການພົວພັນແນວໃດກັບ d₄?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: d₁"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"d₄"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແຕ້ມຮູບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈສາກ ABC ທີ່ສາກຢູ່ B, ເສັ້ນຊື່ AB ແລະ ເສັ້ນຊື່ BC ຈະມີການພົວພັນກັນແນວໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: AB"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"BC"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ໃຊ້ຫຼັກການປ່ຽນແທນ: ຖ້າ d₁ // d₂ ແລະ d₂ ⊥ d₃ ໝາຍຄວາມວ່າ d₁ ⊥ d₃. ຈາກນັ້ນ, ຖ້າ d₃ // d₄ ແລ້ວ d₁ ⊥ d₄ ເດີ້!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາໃນຮູບຈະຕຸລັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຮູບຈະຕຸລັດ ABCD. ການພົວພັນລະຫວ່າງສອງຂ້າງທີ່ຢູ່ກົງກັນຂ້າມ AB ແລະ CD ແມ່ນຫຍັງ? ແລະ ສອງຂ້າງຕິດກັນ AB ແລະ BC ແມ່ນຫຍັງ?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- AB ກັບ CD ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- AB ກັບ BC ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການພົວພັນຫຼາຍເສັ້ນຊື່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ເສັ້ນຊື່ a // b. ຖ້າມີເສັ້ນຊື່ c ຕັດເສັ້ນຊື່ a ດ້ວຍມຸມ 45°, ຖາມວ່າເສັ້ນຊື່ c ຈະຕັດເສັ້ນຊື່ b ດ້ວຍມຸມຈັກອົງສາ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຕັດເສັ້ນຊື່ b ດ້ວຍມຸມ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"°"}</span>
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
          <span key="1-1">{"(1) //"}</span>,
          <span key="1-2">{"(2) ⊥"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"4 (ສີ່ແຈສາກ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) //"}</span>,
          <span key="3-2">{"(2) ⊥"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"// (ເນື່ອງຈາກທັງສອງເສັ້ນຊື່ຂະໜານກັບເສັ້ນຊື່ b ດຽວກັນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"⊥ (ຕັ້ງສາກກັນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"⊥ (ເນື່ອງຈາກມຸມ B ແມ່ນມຸມສາກ 90°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- AB ກັບ CD ແມ່ນ // (ຂະໜານ)"}</span>,
          <span key="s1-2">{"- AB ກັບ BC ແມ່ນ ⊥ (ຕັ້ງສາກ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"45 (ເນື່ອງຈາກສອງເສັ້ນຊື່ຂະໜານກັນ ມຸມທີ່ເກີດຂຶ້ນກັບເສັ້ນຕັດຈະເທົ່າກັນ)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ ເປັນພື້ນຖານຂອງການແຕ້ມຮູບເລຂາຄະນິດ ແລະ ໂຄງສ້າງຕ່າງໆໃນຊີວິດຈິງ. ສູ້ໆ!"
  }
};
