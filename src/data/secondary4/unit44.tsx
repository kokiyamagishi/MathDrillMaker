import React from "react";
import { UnitData } from "../units2";

export const unit44Data: UnitData = {
  unitNumber: 44,
  unitTitle: "ພາກທີ V - ບົດທີ 44: ເຫດການຂັດກັນ ແລະ ການບວກຄວາມໜ້າຈະເປັນ (Mutually Exclusive Events)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເຫດການຂັດກັນ (Mutually Exclusive Events) ແລະ ສູດຄິດໄລ່ການບວກຄວາມໜ້າຈະເປັນ P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 224-228",
  subSections: [
    {
      title: "1. ເຫດການຂັດກັນ (Mutually Exclusive Events)",
      keyPoint: {
        title: "ນિຍາມເຫດການຂັດກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງເຫດການ A ແລະ B ເອີ້ນວ່າ ເປັນເຫດການຂັດກັນ (Mutually Exclusive) ຖ້າວ່າທັງສອງເຫດການນັ້ນ ບໍ່ສາມາດເກີດຂຶ້ນພ້ອມກັນໄດ້ໃນການທົດລອງດຽວກັນ (A ∩ B = ∅)."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#C62828" }}>{"ຕົວຢ່າງທາງຮູບປະທຳ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ໂຍນໝາກກະລັອກ 1 หນ່ວຍ: ເຫດການໄດ້ແຕ້ມຄູ່ ແລະ ເຫດການໄດ້ແຕ້ມຄີກ (ຂັດກັນຢ່າງເດັດຂາດ)."}</li>
                <li>{"ຈົກສະຫຼາກໄດ້ລາງວັນທີ 1 ແລະ ໄດ້ລາງວັນທີ 2 ໃນການຈົກໃບດຽວກັນ (ຂັດກັນ)."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າ A ແລະ B ຂັດກັນ ⇒ P(A ∩ B) = 0. ດັ່ງນັ້ນ P(A ∪ B) = P(A) + P(B) ໄດ້ໂດຍກົງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນຂອງເຫດການຂັດກັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃນຖົງມີໝາກບານ ແດງ 3 ໜ່ວຍ, ຟ້າ 4 ໜ່ວຍ, ເຫຼືອງ 5 ໜ່ວຍ. ສຸ່ມຈັບ 1 ໜ່ວຍ. ຄວາມໜ້າຈະເປັນທີ່ໄດ້ສີແດງ ຫຼື ສີຟ້າ ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ. ເຫດການ A ໄດ້ແຕ້ມ 1, ເຫດການ B ໄດ້ແຕ້ມ 6. ຄວາມໜ້າຈະເປັນ P(A ∪ B) ແມ່ນ"}</span>
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
                {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນຂອງເຫດການຂັດກັນ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ. P(ໄດ້ແຕ້ມ 1 ຫຼື ໄດ້ແຕ້ມ 6) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສູດການບວກຄວາມໜ້າຈະເປັນທົ່ວໄປ (General Addition Rule)",
      keyPoint: {
        title: "ສູດການບວກທົ່ວໄປ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາລັບສອງເຫດການ A ແລະ B ໃດໆ (ບໍ່ວ່າຈະຂັດກັນຫຼືບໍ່), ຄວາມໜ້າຈະເປັນທີ່ຈະເກີດເຫດການ A ຫຼື B (A ∪ B) ແມ່ນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <strong style={{ fontSize: "1.5rem", color: "#2E7D32" }}>{"P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"}</strong>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ. A ໄດ້ແຕ້ມຄີກ {1, 3, 5}, B ໄດ້ແຕ້ມ ≥ 4 {4, 5, 6}. ສອງເຫດການນີ້ມີຮ່ວມກັນແມ່ນ {5} (ຄວາມໜ້າຈະເປັນ 1/6) ⇒ P(A ∪ B) = 3/6 + 3/6 - 1/6 = 5/6!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນການບວກແບບທົ່ວໄປ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ. ຄວາມໜ້າຈະເປັນທີ່ຈະໄດ້ແຕ້ມຄູ່ (Even) ຫຼື ໄດ້ແຕ້ມທີ່ຫານຂາດໃຫ້ 3 ແມ່ນເທົ່າໃດ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: P(A ∪ B) ="}</span>
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
            {"ຈົ່ງຄິດໄລ່ຄວາມໜ້າຈະເປັນການບວກແບບທົ່ວໄປ (ຊຸດທີ 2): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: "12px 0", lineHeight: "1.6" }}>
            {"ເລືອກຕົວເລກ 1 ຕົວຈາກ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. ຈົ່ງຊອກຫາຄວາມໜ້າຈະເປັນທີ່ຈະໄດ້ເລກຄູ່ ຫຼື ເລກທີ່ຫານຂາດໃຫ້ 3?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: P(A ∪ B) ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{" (ຂຽນເປັນເລກສ່ວນ ເຊັ່ນ 7/10)"}</span>
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
              {"ໂຈດກິລານັກຮຽນ (Sports Probability Problem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນໂຮງຮຽນແຫ່ງໜຶ່ງ, ມີນັກຮຽນ 40% ຫຼິ້ນກິລາບານເຕະ (F), 30% ຫຼິ້ນບານບ້ວງ (B) ແລະ 15% ຫຼິ້ນທັງສອງກິລາ. ສຸ່ມເລືອກນັກຮຽນ 1 ຄົນ. ຄວາມໜ້າຈະເປັນທີ່ນັກຮຽນຄົນນັ້ນ ຫຼິ້ນກິລາບານເຕະ ຫຼື ບານບ້ວງ ແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: P(F ∪ B) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ຜົນຮ່ວມຂອງເຫດການຂັດກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າ A ແລະ B ເປັນສອງເຫດການຂັດກັນຢ່າງເດັດຂາດ, ຄວາມໜ້າຈະເປັນຮ່ວມ P(A ∩ B) ຈະມີຄ່າເທົ່າໃດ?"}
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
          <span key="1-1">{"7/12 (ຄິດໄລ່: ເຫດການໄດ້ສີແດງ ຫຼື ສີຟ້າ ແມ່ນເຫດການຂັດກັນ ⇒ P = 3/12 + 4/12 = 7/12)"}</span>,
          <span key="1-2">{"2/6 (ຄິດໄລ່: ຫຼຽນອອກ 1 ຫຼຶ 6 ແມ່ນຂັດກັນ ⇒ P = 1/6 + 1/6 = 2/6 = 1/3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u44-ans-2-1">{"1/3"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2">{"2/3 (ຄິດໄລ່: A = ແຕ້ມຄູ່ {2, 4, 6} ⇒ P(A) = 3/6. B = ຫານຂາດໃຫ້ 3 {3, 6} ⇒ P(B) = 2/6. ຮ່ວມກັນແມ່ນ {6} ⇒ P(A ∩ B) = 1/6. P(A ∪ B) = 3/6 + 2/6 - 1/6 = 4/6 = 2/3)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="u44-ans-4-1">{"7/10"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3">{"0.55 (ຄິດໄລ່: P(F ∪ B) = 0.40 + 0.30 - 0.15 = 0.55)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0.55 (ຄິດໄລ່: P = 0.55)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: ເພາະເຫດການຂັດກັນ ບໍ່ສາມາດເກີດຂຶ້ນພ້ອມກັນໄດ້ສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າໄດ້ສຳເລັດການຮຽນຮູ້ທິດສະດີຄວາມໜ້າຈະເປັນພື້ນຖານ ແລະ ຫຼັກສູດຄະນິດສາດ ມ.4 ທັງໝົດຢ່າງສົມບູນແບບແລ້ວ! ຂໍສະແດງຄວາມຍິນດີດ້ວຍເດີ້! ເຈົ້າເກັ່ງຫຼາຍໆ!"
  }
};
