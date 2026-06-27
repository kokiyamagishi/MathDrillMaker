import React from "react";
import { UnitData } from "../units2";

export const unit43Data: UnitData = {
  unitNumber: 43,
  unitTitle: "ພາກທີ V - ບົດທີ 43: ເຫດການເອກະລາດ ແລະ ການຄູນຄວາມໜ້າຈະເປັນ (Independent Events)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເຫດການເອກະລາດ (Independent Events) ແລະ ສູດຄິດໄລ່ຄວາມໜ້າຈະເປັນຮ່ວມ P(A ∩ B) = P(A) × P(B)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 218-223",
  subSections: [
    {
      title: "1. ເຫດການເອກະລາດ (Independent Events)",
      keyPoint: {
        title: "ນິຍາມເຫດການເອກະລາດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງເຫດການ A ແລະ B ຖືກເອີ້ນວ່າ ເປັນເອກະລາດເຊິ່ງກັນແລະກັນ (Independent) ຖ້າວ່າການເກີດ ຫຼື ບໍ່ເກີດຂຶ້ນຂອງເຫດການໜຶ່ງ ບໍ່ມີຜົນກະທົບຕໍ່ຄວາມໜ້າຈະເປັນທີ່ຈະເກີດຂຶ້ນຂອງອີກເຫດການໜຶ່ງ."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຕົວຢ່າງທາງຮູບປະທຳ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ໂຍນຫຼຽນ 1 ອັນ ແລະ ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ (ຜົນຂອງຫຼຽນ ບໍ່ມີຜົນຕໍ່ໝາກກະລັອກ)."}</li>
                <li>{"ການຍິງເປົ້າຂອງສອງຄົນທີ່ແຕກຕ່າງກັນ ໂດຍແຕ່ລະຄົນຍິງເປັນອິດສະຫຼະ."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າສອງເຫດການຂຶ້ນຕໍ່ກັນ (Dependent), ເຮົາຈະບໍ່ສາມາດໃຊ້ສູດການຄູນແບບງ່າຍດາຍນີ້ໄດ້ໂດຍກົງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນຮ່ວມຂອງເຫດການເອກະລາດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໂຍນຫຼຽນ 1 ອັນ ແລະ ໝາກກະລັອກ 1 ໜ່ວຍ. ຄວາມໜ້າຈະເປັນທີ່ຫຼຽນອອກ ຫົວ ແລະ ໝາກກະລັອກໄດ້ 6 ແຕ້ມ ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ໂຍນໝາກກະລັອກ 2 ໜ່ວຍພ້ອມກັນ. ຄວາມໜ້າຈະເປັນທີ່ຈະໄດ້ 6 ແຕ້ມທັງສອງໜ່ວຍ ແມ່ນ"}</span>
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
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນຮ່ວມຂອງເຫດການເອກະລາດ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ ແລະ ຫຼຽນ 1 ຫຼຽນ. P(ໄດ້ເລກ 6 ແລະ ຫົວ) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສູດການຄູນຄວາມໜ້າຈະເປັນ (Multiplication Rule of Probability)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ສໍາລັບເຫດການເອກະລາດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າ A ແລະ B ເປັນສອງເຫດການເອກະລາດກັນ, ຄວາມໜ້າຈະເປັນຮ່ວມ P(A ∩ B) ແມ່ນຄິດໄລ່ດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <strong style={{ fontSize: "1.5rem", color: "#2E7D32" }}>{"P(A ∩ B) = P(A) × P(B)"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ມືປືນ A ຍິງຖືກເປົ້າ 0.8, B ຍິງຖືກເປົ້າ 0.7. ຖ້າທັງສອງຍິງເປັນອິດສະຫຼະ ⇒ P(ທັງສອງຍິງຖືກ) = 0.8 × 0.7 = 0.56!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນການຍິງຖືກເປົ້າຮ່ວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ນັກກິລາສອງຄົນຍິງທະນູໃສ່ເປົ້າໝາຍດຽວກັນຢ່າງເປັນເອກະລາດ. ຄວາມໜ້າຈະເປັນທີ່ຄົນທີໜຶ່ງຍິງຖືກແມ່ນ 0.6 ແລະ ຄົນທີສອງແມ່ນ 0.8. ຈົ່ງຊອກຫາຄວາມໜ້າຈະເປັນທີ່ທັງສອງຄົນຍິງຖືກເປົ້າໝາຍ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: P(A ∩ B) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
            {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນການຍິງຖືກເປົ້າຮ່ວມ (ຊຸດທີ 2): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: "12px 0", lineHeight: "1.6" }}>
            {"ທ້າວ A ຍິງປືນຖືກເປົ້າດ້ວຍຄວາມໜ້າຈະເປັນ 0.6 ແລະ ທ້າວ B ຍິງຖືກເປົ້າດ້ວຍຄວາມໜ້າຈະເປັນ 0.5. ຈົ່ງຊອກຫາຄວາມໜ້າຈະເປັນທີ່ທັງສອງຄົນຍິງຖືກເປົ້າພ້ອມກັນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມໜ້າຈະເປັນແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
              {"ໂຈດຄວາມໜ້າຈະເປັນຢ່າງໜ້ອຍໜຶ່ງຄົນຍິງຖືກ (At Least One Hit): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈາກເງື່ອນໄຂຂອງນັກກິລາຍິງທະນູສອງຄົນ (ຄົນທີໜຶ່ງຖືກ 0.6, ຄົນທີສອງຖືກ 0.8). ຈົ່ງຊອກຫາຄວາມໜ້າຈະເປັນທີ່ມີຢ່າງໜ້ອຍໜຶ່ງຄົນຍິງຖືກເປົ້າໝາຍ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: P(ຢ່າງໜ້ອຍໜຶ່ງ) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ໃຊ້ເຫດການກົງກັນຂ້າມ: P(ບໍ່ມີໃຜຖືກ) = P(ຄົນທີ 1 ພາດ) × P(ຄົນທີ 2 ພາດ) = (1 - 0.6) × (1 - 0.8) = 0.4 × 0.2 = 0.08. ດັ່ງນັ້ນ P(ຢ່າງໜ້ອຍໜຶ່ງ) = 1 - 0.08 = 0.92!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຄູນຄວາມໜ້າຈະເປັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ສອງເຫດການ A ແລະ B ເປັນເອກະລາດກັນ ໂດຍມີ P(A) = 0.4 ແລະ P(B) = 0.5. ຜົນຄູນ P(A ∩ B) ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1-1">{"1/12 (ຄິດໄລ່: P(ຫົວ) = 1/2, P(6) = 1/6 ⇒ P(A ∩ B) = 1/2 × 1/6 = 1/12)"}</span>,
          <span key="1-2">{"1/36 (ຄິດໄລ່: P(6 ໜ່ວຍທີ 1) = 1/6, P(6 ໜ່ວຍທີ 2) = 1/6 ⇒ P(A ∩ B) = 1/36)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u43-ans-2-1">{"1/12"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2">{"0.48 (ຄິດໄລ່: P(A ∩ B) = 0.6 × 0.8 = 0.48)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="u43-ans-4-1">{"0.3"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3">{"0.92 (ຄິດໄລ່: P(ຢ່າງໜ້ອຍໜຶ່ງ) = 1 - (1-0.6)×(1-0.8) = 1 - 0.08 = 0.92)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0.92 (ຄິດໄລ່: P = 0.92)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0.2 (ຄິດໄລ່: P(A ∩ B) = 0.4 × 0.5 = 0.20)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຄິດໄລ່ຄວາມໜ້າຈະເປັນຂອງເຫດການເອກະລາດ ເປັນພື້ນຖານສຳຄັນໃນການວິເຄາະຄວາມເປັນໄປໄດ້ໃນໂລກຕົວຈິງ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
