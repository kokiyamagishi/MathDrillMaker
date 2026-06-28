import React from "react";
import { UnitData } from "../units2";

export const unit26Data: UnitData = {
  unitNumber: 26,
  unitTitle: "ພາກທີ IV - ບົດທີ 26: ການຕັດ ແລະ ການໂຮມກຸ່ມ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການປະຕິບັດການເທິງກຸ່ມ: ການຕັດກຸ່ມ (Intersection, ∩), ການໂຮມກຸ່ມ (Union, ∪), ຄຸນລັກສະນະ ແລະ ການແກ້ໂຈດບັນຫານັບສະມາຊິກໃນຊີວິດຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 198-202",
  subSections: [
    {
      title: "1. ການຕັດກຸ່ມ (Intersection of Sets)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຄຸນລັກສະນະການຕັດກຸ່ມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- "}<strong>{"ການຕັດກຸ່ມ"}</strong>{" ຂອງສອງກຸ່ມ A ແລະ B, ສັນຍະລັກດ້ວຍ "}<strong>{"A ∩ B"}</strong>{" (ອ່ານວ່າ A ຕັດ B), ແມ່ນກຸ່ມທີ່ປະກອບດ້ວຍບັນດາອົງປະກອບທີ່ນອນຢູ່ໃນທັງກຸ່ມ A ແລະ ກຸ່ມ B ຮ່ວມກັນ."}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#00796B", paddingLeft: "16px" }}>{"A ∩ B = { x | x ∈ A  ແລະ  x ∈ B }"}</span>
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #80CBC4" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" }}>{"ຄຸນລັກສະນະການຕັດ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6", marginTop: "8px" }}>
                <li>{"ການສັບປ່ຽນບ່ອນໄດ້: A ∩ B = B ∩ A"}</li>
                <li>{"ການໂຮມໝູ່ໄດ້: (A ∩ B) ∩ C = A ∩ (B ∩ C)"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: <span style={{ whiteSpace: "nowrap" }}>{"💡 ຕົວຢ່າງ: ຖ້າ A = {1, 2, 3} ແລະ B = {3, 4, 5} ⇒ A ∩ B = {3}."}</span>,
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ A = {1, 3, 5, 7} ແລະ B = {2, 3, 5, 7, 11}. ຈົ່ງຊອກຫາອົງປະກອບຂອງກຸ່ມ A ∩ B? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: A ∩ B = {"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"}"}</span>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ສອງກຸ່ມ X = {a, b} ແລະ Y = {c, d}. ຖາມວ່າ X ∩ Y ຈະເປັນກຸ່ມໃດ ແລະ ຂຽນດ້ວຍສັນຍະລັກໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: ເປັນກຸ່ມ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ສັນຍະລັກດ້ວຍ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການໂຮມກຸ່ມ (Union of Sets)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຄຸນລັກສະນະການໂຮມກຸ່ມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- "}<strong>{"การໂຮມກຸ່ມ"}</strong>{" ຂອງສອງກຸ່ມ A ແລະ B, ສັນຍະລັກດ້ວຍ "}<strong>{"A ∪ B"}</strong>{" (ອ່ານວ່າ A ໂຮມ B), ແມ່ນກຸ່ມທີ່ປະກອບດ້ວຍບັນດາອົງປະກອບທີ່ນອນຢູ່ໃນກຸ່ມ A ຫຼື ຢູ່ໃນກຸ່ມ B ຫຼື ຢູ່ໃນທັງສອງກຸ່ມ (ຮວບຮວມສະມາຊິກທັງໝົດ ແຕ່ບໍ່ຂຽນຕົວຊ້ຳ)."}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#E65100", paddingLeft: "16px" }}>{"A ∪ B = { x | x ∈ A  ຫຼື  x ∈ B }"}</span>
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຄຸນລັກສະນະການໂຮມ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6", marginTop: "8px" }}>
                <li>{"ການສັບປ່ຽນບ່ອນໄດ້: A ∪ B = B ∪ A"}</li>
                <li>{"ການໂຮມໝູ່ໄດ້: (A ∪ B) ∪ C = A ∪ (B ∪ C)"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: <span style={{ display: "inline-flex", flexDirection: "column", gap: "6px" }}>
            <span>{"💡 ຕົວຢ່າງ: ຖ້າ A = {1, 2, 3} ແລະ B = {3, 4, 5}"}</span>
            <span style={{ paddingLeft: "24px", whiteSpace: "nowrap" }}>{"⇒ A ∪ B = {1, 2, 3, 4, 5}."}</span>
          </span>,
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ M = {1, 4, 6, 8} ແລະ N = {5, 6, 7, 8, 9}. ຈົ່ງຊອກຫາອົງປະກອບຂອງກຸ່ມ M ∪ N? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: M ∪ N = {"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "240px", height: "42px" }}></span>
                <span>{"}"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ F ແມ່ນກຸ່ມຂອງພະຍັນຊະນະແຖວກາງພາສາລາວ ແລະ D ແມ່ນກຸ່ມຂອງພະຍັນຊະນະແຖວຕ່ຳ. ຖ້າສອງກຸ່ມນີ້ບໍ່ມີອົງປະກອບຮ່ວມກັນເລີຍ, ຖາມວ່າ F ∩ D ຈະເທົ່າກັບກຸ່ມໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: F ∩ D ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
              {"ໂຈດບັນຫາການນັບສະມາຊິກກິລາ (Venn Diagram Word Problem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ນັກຮຽນຫ້ອງ ມ.1 ມີ 23 ຄົນ ທີ່ຫລິ້ນກິລາຢ່າງໜ້ອຍໜຶ່ງປະເພດ. ຮູ້ວ່າ 18 ຄົນຫລິ້ນເຕະບານ, 15 ຄົນຫລິ້ນສົ່ງບານ. ຖາມວ່າມີນັກຮຽນຈັກຄົນທີ່ຫລິ້ນທັງສອງປະເພດກິລາ? (ແນະນຳ: ໃຊ້ສູດ n(A ∪ B) = n(A) + n(B) - n(A ∩ B))"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມີນັກຮຽນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຄົນ."}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການນັບສະມາຊິກຮຽນພາສາ (Venn Counting): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນກຸ່ມນັກຮຽນ 30 ຄົນ, ມີ 20 ຄົນຮຽນພາສາອັງກິດ, 12 ຄົນຮຽນພາສາຝຣັ່ງ, ແລະ 5 ຄົນຮຽນທັງສອງພາສາ. ຖາມວ່າມີນັກຮຽນຈັກຄົນທີ່ບໍ່ຮຽນພາສາໃດເລີຍໃນສອງພາສານີ້?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມີນັກຮຽນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຄົນ."}</span>
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
            {"ໂຈດການຕັດ ແລະ ໂຮມຂອງກຸ່ມຈຳນວນຖ້ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ A = {1, 2, 3, 4} ແລະ B = {3, 4, 5, 6}. ຈົ່ງຫາຈຳນວນອົງປະກອບຂອງກຸ່ມ A ∩ B ແລະ ກຸ່ມ A ∪ B ຕາມລຳດັບ?"
            }</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຈຳນວນອົງປະກອບຂອງ A ∩ B ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"ອົງປະກອບ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຈຳນວນອົງປະກອບຂອງ A ∪ B ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"ອົງປະກອບ"}</span>
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
            {"ໂຈດກວດສອບຄຸນລັກສະນະກຸ່ມເປົ່າ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ກຸ່ມ A ໃດໜຶ່ງ ແລະ ∅ ແມ່ນກຸ່ມເປົ່າ. ຈົ່ງຫາຄຳຕອບຂອງ A ∩ ∅ ແລະ A ∪ ∅?"}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- A ∩ ∅ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- A ∪ ∅ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
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
          <span key="1">{"3, 5, 7 (ຫຼື {3, 5, 7})"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"ກຸ່ມເປົ່າ"}</span>,
          <span key="2-2">{"∅ (ຫຼື { })"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"1, 4, 5, 6, 7, 8, 9 (ຫຼື {1, 4, 5, 6, 7, 8, 9})"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"∅ (ເນື່ອງຈາກທັງສອງກຸ່ມບໍ່ມີອົງປະກອບຮ່ວມກັນເລີຍ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"10 (ຄິດໄລ່: 18 + 15 - 23 = 10 ຄົນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"3 (ຄິດໄລ່: 20 + 12 - 5 = 27 ຄົນຮຽນ; 30 - 27 = 3 ຄົນບໍ່ຮຽນ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- A ∩ B = {3, 4} ມີ 2 ອົງປະກອບ"}</span>,
          <span key="s1-2">{"- A ∪ B = {1, 2, 3, 4, 5, 6} ມີ 6 ອົງປະກອບ"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2-1">{"- A ∩ ∅ = ∅ (ຫຼື ກຸ່ມເປົ່າ)"}</span>,
          <span key="s2-2">{"- A ∪ ∅ = A"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ການຄິດໄລ່ການຕັດ ແລະ ການໂຮມກຸ່ມ ເປັນການເປີດປະຕູສູ່ການວິເຄາະທາງຄະນິດສາດ ແລະ ວິທະຍາສາດຄອມພິວເຕີ (Set Theory). ສູ້ຕໍ່ໄປເດີ້!"
  }
};
