import React from "react";
import { UnitData } from "../units2";

export const unit25Data: UnitData = {
  unitNumber: 25,
  unitTitle: "ພາກທີ IV - ບົດທີ 25: ອະນຸກຸ່ມ ແລະ ແຜນວາດຂອງກຸ່ມ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບນິຍາມຂອງອະນຸກຸ່ມ (Subset, ⊂, ⊄), ຄຸນລັກສະນະພື້ນຖານຂອງອະນຸກຸ່ມ ແລະ ການສະແດງຄວາມສຳພັນລະຫວ່າງກຸ່ມດ້ວຍແຜນວາດເວນ (Venn Diagrams)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 193-197",
  subSections: [
    {
      title: "1. ອະນຸກຸ່ມ ແລະ ສັນຍະລັກ (Subsets and Notation)",
      keyPoint: {
        title: "ນິຍາມຂອງອະນຸກຸ່ມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ກຸ່ມ B ເອີ້ນວ່າ "}<strong>{"ອະນຸກຸ່ມ (Subset)"}</strong>{" ຂອງກຸ່ມ A ຖ້າວ່າທຸກໆອົງປະກອບຂອງກຸ່ມ B ລ້ວນແຕ່ແມ່ນອົງປະກອບຂອງກຸ່ມ A."}
              <br />
              {"- ສັນຍະລັກດ້ວຍ "}<strong>{"B ⊂ A"}</strong>{" (ອ່ານວ່າ B ແມ່ນອະນຸກຸ່ມຂອງ A ຫຼື B ນອນໃນ A)."}
              <br />
              {"- ຖ້າ B ບໍ່ແມ່ນອະນຸກຸ່ມຂອງ A, ສັນຍະລັກດ້ວຍ "}<strong>{"B ⊄ A"}</strong>{"."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #80CBC4" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" }}>{"ຄຸນລັກສະນະທີ່ສຳຄັນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6", marginTop: "8px" }}>
                <li>{"ທຸກໆກຸ່ມ A ຈະເປັນອະນຸກຸ່ມຂອງຕົວມັນເອງສະເໝີ: A ⊂ A."}</li>
                <li>{"ກຸ່ມເປົ່າ ∅ ເປັນອະນຸກຸ່ມຂອງທຸກໆກຸ່ມສະເໝີ: ∅ ⊂ A."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ຄວາມແຕກຕ່າງລະຫວ່າງ ∈ (ອົງປະກອບ) ແລະ ⊂ (ອະນຸກຸ່ມ): ∈ ໃຊ້ລະຫວ່າງ ເມັດ ກັບ ກຸ່ມ, ສ່ວນ ⊂ ໃຊ້ລະຫວ່າງ ກຸ່ມ ກັບ ກຸ່ມ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ ℕ = {0, 1, 2, 3, ...} ແມ່ນກຸ່ມຈຳນວນທຳມະຊາດ ແລະ A = {1, 2, 3}. ຈົ່ງຕື່ມເຄື່ອງໝາຍ ∈, ∉, ⊂ ຫຼື ⊄ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈຳນວນ 5"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ℕ"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ກຸ່ມ A"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ℕ"}</span>
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
                {"ໃຫ້ E = {a, b}. ຈົ່ງຂຽນອະນຸກຸ່ມທັງໝົດຂອງກຸ່ມ E? (ກຳນົດໃຫ້ຂຽນແຕ່ລະອະນຸກຸ່ມແຍກກັນດ້ວຍໝາຍຈຸດ) "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: ອະນຸກຸ່ມທັງໝົດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "240px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ແຜນວາດເວນ (Venn Diagrams)",
      keyPoint: {
        title: "ການສະແດງຄວາມສຳພັນລະຫວ່າງກຸ່ມດ້ວຍຮູບພາບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ແຜນວາດເວນ ຈະໃຊ້ຮູບປິດ (ສ່ວນຫຼາຍແມ່ນຮູບວົງມົນ ຫຼື ຮູບສີ່ແຈ) ເພື່ອສະແດງກຸ່ມ ແລະ ອົງປະກອບ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ແຜນວາດເວນສະແດງ B ⊂ A"}</span>
              <svg width="240" height="140" style={{ border: "1px solid #FFB74D", backgroundColor: "#FFF" }}>
                {/* Outer set A */}
                <circle cx="120" cy="70" r="60" fill="none" stroke="#29B6F6" strokeWidth="2.5" />
                <text x="160" y="30" fontSize="14" fontWeight="bold" fill="#0288D1">{"A"}</text>
                
                {/* Inner set B */}
                <circle cx="100" cy="80" r="30" fill="none" stroke="#EC407A" strokeWidth="2.5" />
                <text x="100" y="70" fontSize="14" fontWeight="bold" fill="#C2185B">{"B"}</text>
                
                {/* Elements */}
                <text x="95" y="92" fontSize="12" fill="#000">{"1"}</text>
                <text x="145" y="65" fontSize="12" fill="#000">{"2"}</text>
                <text x="135" y="110" fontSize="12" fill="#000">{"3"}</text>
              </svg>
              <span style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#E65100" }}>{"ຈາກຮູບ: B = {1}, A = {1, 2, 3} ດັ່ງນັ້ນ B ⊂ A"}</span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໃນແຜນວາດເວນ, ຖ້າ B ⊂ A ວົງມົນ B ຕ້ອງນອນຢູ່ທາງໃນວົງມົນ A ຢ່າງສົມບູນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ຮູບແຕ້ມແຜນວາດເວນຂ້າງເທິງ ໂດຍ B = {1} ແລະ A = {1, 2, 3}. ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ອົງປະກອບ 1 ຈະເປັນອົງປະກອບຂອງກຸ່ມ A ບໍ່? ຕອບ 'ເປັນ' ຫຼື 'ບໍ່ເປັນ':"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ອົງປະກອບ 2 ຈະເປັນອົງປະກອບຂອງກຸ່ມ B ບໍ່? ຕອບ 'ເປັນ' ຫຼື 'ບໍ່ເປັນ':"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
                {"ໃຫ້ກຸ່ມຂອງພະຍັນຊະນະສູງໃນພາສາລາວ V = {ຂ, ສ, ຖ, ຜ, ຝ, ຫ} ແລະ ກຸ່ມຂອງພະຍັນຊະນະທັງໝົດ A = {ກ, ຂ, ຄ, ...}. ຄວາມສຳພັນລະຫວ່າງ V ແລະ A ຈະຂຽນເປັນສັນຍະລັກແນວໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: V"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"A"}</span>
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
              {"ໂຈດການຊອກຫາຈຳນວນອະນຸກຸ່ມທັງໝົດ (Number of Subsets): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າກຸ່ມ S ມີ n ອົງປະກອບ, ຈຳນວນອະນຸກຸ່ມທັງໝົດຂອງ S ຈະເທົ່າກັບ 2ⁿ. ຖ້າກຸ່ມ S = {1, 2, 3} ມີ 3 ອົງປະກອບ, ຖາມວ່າກຸ່ມ S ຈະມີອະນຸກຸ່ມທັງໝົດຈັກກຸ່ມ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມີອະນຸກຸ່ມທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ກຸ່ມ."}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການພົວພັນລະຫວ່າງ 3 ກຸ່ມ (Transitive Property): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສາມກຸ່ມ R, V, E. ຖ້າຮູ້ວ່າ R ⊂ V ແລະ V ⊂ E. ຖາມວ່າ ຄວາມສຳພັນລະຫວ່າງ R ແລະ E ຈະຂຽນເປັນສັນຍະລັກແນວໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: R"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"E"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: ""
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດກວດສອບຄວາມຖືກຕ້ອງຂອງສັນຍະລັກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ E = {3, 4}. ຈົ່ງບອກຄວາມຖືກຕ້ອງຂອງປະໂຫຍກຕໍ່ໄປນີ້ ໂດຍຕອບ 'ຖືກ' ຫຼື 'ຜິດ':"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ປະໂຫຍກ '{3} ⊂ E' ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ປະໂຫຍກ '3 ⊂ E' ແມ່ນ"}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດກ່ຽວກັບກຸ່ມພື້ນເມືອງ ແລະ ພາກພື້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ L ແມ່ນກຸ່ມພົນລະເມືອງຂອງປະເທດລາວ, V ແມ່ນກຸ່ມພົນລະເມືອງຂອງນະຄອນຫຼວງວຽງຈັນ. ຖ້າ 'ສົມຈິດ' ແມ່ນພົນລະເມືອງນະຄອນຫຼວງວຽງຈັນ (ສົມຈິດ ∈ V). ຖາມວ່າ 'ສົມຈິດ' ຈະເປັນພົນລະເມືອງປະເທດລາວ (ສົມຈິດ ∈ L) ບໍ່? ຕອບ 'ເປັນ' ຫຼື 'ບໍ່ເປັນ'?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 'ສົມຈິດ'"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ພົນລະເມືອງລາວ."}</span>
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
          <span key="1-1">{"(1) ∈"}</span>,
          <span key="1-2">{"(2) ⊂"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"∅, {a}, {b}, {a, b} (ຫຼື ∅, {a}, {b}, E)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) ເປັນ (ຍ້ອນ 1 ຢູ່ໃນ A)"}</span>,
          <span key="3-2">{"(2) ບໍ່ເປັນ (ຍ້ອນ 2 ຢູ່ນອກ B)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"⊂ (ຍ້ອນ V ⊂ A, ພະຍັນຊະນະສູງແມ່ນສ່ວນໜຶ່ງຂອງພະຍັນຊະນະທັງໝົດ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"8 (ຄິດໄລ່: 2³ = 8 ກຸ່ມ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"⊂ (ຄຸນລັກສະນະຖ່າຍທອດ: R ⊂ V ແລະ V ⊂ E  ⇒  R ⊂ E)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- '{3} ⊂ E' ແມ່ນ ຖືກ (ຍ້ອນ {3} ແມ່ນກຸ່ມ)"}</span>,
          <span key="s1-2">{"- '3 ⊂ E' ແມ່ນ ຜິດ (ຍ້ອນ 3 ແມ່ນອົງປະກອບ, ຄວນຂຽນ 3 ∈ E)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"ເປັນ (ຍ້ອນ V ⊂ L, ທຸກຄົນທີ່ຢູ່ໃນ V ຕ້ອງຢູ່ໃນ L ສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ຄວາມເຂົ້າໃຈກ່ຽວກັບອະນຸກຸ່ມ ແລະ ແຜນວາດເວນ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດເບິ່ງເຫັນຄວາມສຳພັນລະຫວ່າງກຸ່ມຂໍ້ມູນຕ່າງໆໄດ້ຢ່າງຈະແຈ້ງ ແລະ ມີເຫດຜົນ!"
  }
};
