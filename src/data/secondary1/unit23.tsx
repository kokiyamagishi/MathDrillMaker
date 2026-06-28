import React from "react";
import { UnitData } from "../units2";

export const unit23Data: UnitData = {
  unitNumber: 23,
  unitTitle: "ພາກທີ IV - ບົດທີ 23: ກຸ່ມ ແລະ ອົງປະກອບຂອງກຸ່ມ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງກຸ່ມ (Set), ອົງປະກອບຂອງກຸ່ມ (Elements, ∈, ∉), ການຂຽນກຸ່ມແບບແຈກຢາຍອົງປະກອບ ແລະ ແບບບອກເງື່ອນໄຂ, ແລະ ກຸ່ມເປົ່າ (Empty Set)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 183-187",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງກຸ່ມ ແລະ ສັນຍະລັກອົງປະກອບ (Concept of Sets and Elements)",
      keyPoint: {
        title: "ກຸ່ມ, ອົງປະກອບ ແລະ ເຄື່ອງໝາຍ ∈, ∉",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- "}<strong>{"ກຸ່ມ (Set)"}</strong>{" ແມ່ນການຮວບຮວມບັນດາສິ່ງຂອງ, ວັດຖຸ, ຕົວເລກ ຫຼື ຕົວອັກສອນ ທີ່ມີລັກສະນະສະເພາະຮ່ວມກັນ."}
              <br />
              {"- ສິ່ງຂອງທີ່ຢູ່ໃນກຸ່ມ ເອີ້ນວ່າ "}<strong>{"ອົງປະກອບ (Element)"}</strong>{"."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" , whiteSpace: "nowrap"}}>{"ສັນຍະລັກການເປັນອົງປະກອບ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li style={{ marginBottom: "8px" }}>
                  <strong>{"a ∈ A: "}</strong>{"ອ່ານວ່າ 'a ແມ່ນອົງປະກອບຂອງກຸ່ມ A'"}
                  <div style={{ color: "#555", fontSize: "1.15rem", paddingLeft: "16px" }}>{"(a ນອນຢູ່ໃນກຸ່ມ A)."}</div>
                </li>
                <li>
                  <strong>{"b ∉ A: "}</strong>{"ອ່ານວ່າ 'b ບໍ່ແມ່ນອົງປະກອບຂອງກຸ່ມ A'"}
                  <div style={{ color: "#555", fontSize: "1.15rem", paddingLeft: "16px" }}>{"(b ບໍ່ນອນຢູ່ໃນກຸ່ມ A)."}</div>
                </li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຖ້າ S ແມ່ນກຸ່ມຂອງ 7 ວັນໃນໜຶ່ງອາທິດ, ວັນພຸດ ∈ S  ແຕ່  ວັນປີໃໝ່ ∉ S!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ S ແມ່ນກຸ່ມຂອງ 7 ວັນໃນໜຶ່ງອາທິດ. ຈົ່ງຕື່ມເຄື່ອງໝາຍ ∈ ຫຼື ∉ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "2.0" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  {"ວັນເສົາ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  {" S"}
                </p>
                
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "2.0" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  {"ວັນປີໃໝ່ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  {" S"}
                </p>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ A ແມ່ນກຸ່ມຂອງຕົວເລກທີ່ໃຊ້ຂຽນຈຳນວນ 42,124. ຈົ່ງຂຽນກຸ່ມ A ແບບແຈກຢາຍອົງປະກອບໃຫ້ຖືກຕ້ອງ? (ກົດລະບຽບ: ແຕ່ລະອົງປະກອບຂຽນພຽງເທື່ອດຽວ) "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ຕອບ: A = {"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "42px", flexShrink: 0 }}></span>
                <span>{"}"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ວິທີການຂຽນກຸ່ມ ແລະ ກຸ່ມພິເສດ (Methods of Representing Sets & Special Sets)",
      keyPoint: {
        title: "ການຂຽນກຸ່ມ 2 ແບບ ແລະ ກຸ່ມເປົ່າ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີ 2 ວິທີການຂຽນກຸ່ມຫຼັກ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"1. ແບບແຈກຢາຍອົງປະກອບ (Roster Method): "}</strong>{" ຂຽນອົງປະກອບທັງໝົດໃນວົງປີກກາ ເຊັ່ນ: A = {2, 4, 6, 8}."}</li>
              <li><strong>{"2. ແບບບອກເງື່ອນໄຂ ຫຼື ຄຸນລັກສະນະ (Set-builder Method): "}</strong>{" ບອກຄຸນລັກສະນະຂອງອົງປະກອບ ເຊັ່ນ: 'A ແມ່ນກຸ່ມຂອງເລກຄູ່ທຳມະຊາດທີ່ນ້ອຍກວ່າ 10'."}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#FFE0B2", borderRadius: "8px", border: "1px solid #FFB74D", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ກຸ່ມພິເສດ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li><strong>{"ກຸ່ມເປົ່າ (Empty Set): "}</strong>{" ແມ່ນກຸ່ມທີ່ບໍ່ມີອົງປະກອບໃດໆເລີຍ, ສັນຍະລັກດ້ວຍ ∅ ຫຼື { }."}</li>
                <li><strong>{"ກຸ່ມບໍ່ສິ້ນສຸດ (Infinite Set): "}</strong>{" ແມ່ນກຸ່ມທີ່ມີອົງປະກອບຫຼາຍບໍ່ສິ້ນສຸດ ເຊັ່ນ: ກຸ່ມຂອງຈຳນວນທຳມະຊາດ ℕ = {0, 1, 2, 3, ...}."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ກົດລະບຽບການຂຽນກຸ່ມ: ລະຫວ່າງສອງອົງປະກອບຕ້ອງຂັ້ນດ້ວຍໝາຍຈຸດ (,), ລຳດັບຂອງການຂຽນບໍ່ສຳຄັນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນກຸ່ມ E ຂອງ 'ເດືອນທີ່ມີ 31 ວັນ' ແບບແຈກຢາຍອົງປະກອບ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "2.0" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  {"ເດືອນທຳອິດທີ່ມີ 31 ວັນໃນປີແມ່ນ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                </p>
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "2.0" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  {"ຈຳນວນອົງປະກອບທັງໝົດຂອງກຸ່ມ E ແມ່ນ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  {" ເດືອນ."}
                </p>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ກຸ່ມຂອງ 'ເດືອນທີ່ມີ 32 ວັນ' ຈະເປັນກຸ່ມຊະນິດໃດ? ແລະ ສັນຍະລັກດ້ວຍເຄື່ອງໝາຍໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ຕອບ: ເປັນກຸ່ມ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px", flexShrink: 0 }}></span>
                <span>{"ສັນຍະລັກດ້ວຍ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "42px", flexShrink: 0 }}></span>
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
              {"ໂຈດການຊອກຫາອົງປະກອບຮ່ວມ (Intersection of Sets): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ A = {3, 5, 7, 9, 11, 13} ແມ່ນກຸ່ມເລກຄີກ. ໃຫ້ B = {2, 3, 5, 7, 11, 13} ແມ່ນກຸ່ມຈຳນວນມູນ (Prime numbers). ຈົ່ງຊອກຫາອົງປະກອບທີ່ນອນຢູ່ໃນທັງສອງກຸ່ມ A ແລະ B?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "nowrap", whiteSpace: "nowrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ອົງປະກອບຮ່ວມແມ່ນ {"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "42px", flexShrink: 0 }}></span>
              <span>{"}"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການວິເຄາະກຸ່ມບໍ່ສິ້ນສຸດ (Infinite Sets): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ ℕ ແມ່ນກຸ່ມຈຳນວນທຳມະຊາດ ℕ = {0, 1, 2, 3, ...}. ຖາມວ່າ ຈຳນວນ 8.5 ແລະ ຈຳນວນ 100 ແມ່ນອົງປະກອບຂອງກຸ່ມ ℕ ບໍ່? (ຕອບ: 8.5 ∈ ℕ ຫຼື 8.5 ∉ ℕ ຕາມລຳດັບ)"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"- 8.5"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "42px", flexShrink: 0 }}></span>
                <span>{"ℕ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"- 100"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "42px", flexShrink: 0 }}></span>
                <span>{"ℕ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ອົງປະກອບຮ່ວມແມ່ນຕົວເລກທີ່ປະກົດຢູ່ໃນທັງ A ແລະ B: {3, 5, 7, 11, 13}. ສ່ວນຈຳນວນທຳມະຊາດແມ່ນເລກຖ້ວນບວກ ແລະ ສູນ, ດັ່ງນັ້ນ 8.5 ∉ ℕ ແລະ 100 ∈ ℕ!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການນັບອົງປະກອບໃນກຸ່ມຕົວອັກສອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ D ແມ່ນກຸ່ມຂອງຕົວອັກສອນທີ່ໃຊ້ຂຽນຄຳສັບ 'antigravity'. ຈົ່ງຂຽນກຸ່ມ D ແບບແຈກຢາຍອົງປະກອບ? (ໝາຍເຫດ: ບໍ່ຂຽນຕົວອັກສອນຊ້ຳກັນ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: D = {"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "240px", height: "42px" }}></span>
            <span>{"}"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການຊອກຫາຈຳນວນທຳມະຊາດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ A ແມ່ນກຸ່ມຂອງຈຳນວນທຳມະຊາດຄູ່ທີ່ໃຫຍ່ກວ່າ 3 ແລະ ນ້ອຍກວ່າ 13. ຈົ່ງຂຽນກຸ່ມ A ແບບແຈກຢາຍອົງປະກອບ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: A = {"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"}"}</span>
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
          <span key="1-2">{"(2) ∉"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"1, 2, 4 (ຫຼື {1, 2, 4})"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) ມັງກອນ (ຫຼື ເດືອນ 1)"}</span>,
          <span key="3-2">{"(2) 7"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"ກຸ່ມເປົ່າ"}</span>,
          <span key="4-2">{"∅ (ຫຼື { })"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"3, 5, 7, 11, 13 (ຫຼື {3, 5, 7, 11, 13})"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"- 8.5 ∉ ℕ"}</span>,
          <span key="c2-2">{"- 100 ∈ ℕ"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"a, n, t, i, g, r, v, 𝑦 (ຕົວອັກສອນຊ້ຳກັນຄື a, t, i ຈະຖືກຂຽນພຽງເທື່ອດຽວ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"4, 6, 8, 10, 12 (ເລກຄູ່ທຳມະຊາດລະຫວ່າງ 3 ຫາ 13)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ຄວາມເຂົ້າໃຈກ່ຽວກັບກຸ່ມ ແລະ ອົງປະກອບ ເປັນພື້ນຖານຄະນິດສາດທີ່ສຳຄັນທີ່ສຸດ ເພາະມັນເປັນພາສາຫຼັກໃນຄະນິດສາດທຸກຂະແໜງການ. ສູ້ຕໍ່ໄປເດີ້!"
  }
};
