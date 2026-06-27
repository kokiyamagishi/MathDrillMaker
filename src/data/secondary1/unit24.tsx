import React from "react";
import { UnitData } from "../units2";

export const unit24Data: UnitData = {
  unitNumber: 24,
  unitTitle: "ພາກທີ IV - ບົດທີ 24: ເຄື່ອງໝາຍ ∈, ∉ ແລະ ກຸ່ມເທົ່າກັນ",
  unitGoal: "ຮຽນຮູ້ການພິສູດການເປັນອົງປະກອບດ້ວຍເຄື່ອງໝາຍ ∈, ∉ ຢ່າງລະອຽດ, ແລະ ນິຍາມຂອງກຸ່ມເທົ່າກັນ (Equal Sets, = / ≠)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 188-191",
  subSections: [
    {
      title: "1. ການກວດສອບອົງປະກອບດ້ວຍ ∈ ແລະ ∉ (Verifying Membership)",
      keyPoint: {
        title: "ຄວາມຈິງຂອງປະໂຫຍກສັນຍະລັກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົານຳໃຊ້ ∈ (ເປັນອົງປະກອບ) ແລະ ∉ (ບໍ່ເປັນອົງປະກອບ) ເພື່ອບອກຄວາມຈິງຂອງການເປັນສະມາຊິກໃນກຸ່ມ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#F1F8E9", borderRadius: "8px", border: "1px solid #DCEDC8" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#33691E" }}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ໃຫ້ P ແມ່ນກຸ່ມຂອງຈຳນວນທຳມະຊາດຄູ່ທີ່ຢູ່ລະຫວ່າງ 3 ຫາ 13 ⇒ P = {4, 6, 8, 10, 12}."}
                <br />
                {"- ປະໂຫຍກ "}<strong>{"4 ∈ P"}</strong>{" ແມ່ນ ຖືກຕ້ອງ (ຍ້ອນ 4 ແມ່ນເລກຄູ່ລະຫວ່າງ 3 ຫາ 13)."}
                <br />
                {"- ປະໂຫຍກ "}<strong>{"5 ∈ P"}</strong>{" ແມ່ນ ຜິດ (ຍ້ອນ 5 ບໍ່ແມ່ນເລກຄູ່, ຄວນຂຽນ 5 ∉ P)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງກວດສອບເງື່ອນໄຂຂອງກຸ່ມໃຫ້ລະອຽດກ່ອນຕັດສິນໃຈຕື່ມເຄື່ອງໝາຍເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ P = {4, 6, 8, 10, 12}. ຈົ່ງຕື່ມເຄື່ອງໝາຍ ∈ ຫຼື ∉ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"6"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"P"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"14"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"P"}</span>
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
                {"ໃຫ້ T = {a, b, c, d, e}. ຈົ່ງກວດສອບຄວາມຖືກຕ້ອງຂອງປະໂຫຍກຕໍ່ໄປນີ້ ໂດຍຕອບ 'ຖືກ' ຫຼື 'ຜິດ': "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ປະໂຫຍກ 'f ∉ T' ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ປະໂຫຍກ 'a ∉ T' ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ນິຍາມຂອງກຸ່ມເທົ່າກັນ (Concept of Equal Sets)",
      keyPoint: {
        title: "ເມື່ອກຸ່ມສອງກຸ່ມເທົ່າກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ສອງກຸ່ມ A ແລະ B ເອີ້ນວ່າ "}<strong>{"ກຸ່ມເທົ່າກັນ (A = B)"}</strong>{" ຖ້າວ່າທຸກໆອົງປະກອບຂອງກຸ່ມ A ກໍແມ່ນອົງປະກອບຂອງກຸ່ມ B ແລະ ປີ້ນຄືນ (ມີສະມາຊິກຄືກັນເປະທຸກຕົວ)."}
              <br />
              {"- ຖ້າບໍ່ເທົ່າກັນ, ສັນຍະລັກດ້ວຍ "}<strong>{"A ≠ B"}</strong>{"."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ກົດເກນທີ່ສຳຄັນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ລຳດັບການຂຽນອົງປະກອບບໍ່ສຳຄັນ: {1, 2, 3} = {3, 2, 1}."}</li>
                <li>{"ຕົວຢ່າງ: ໃຫ້ A = {a, b} ແລະ B = {b, a} ⇒ A = B."}</li>
                <li>{"ໃຫ້ A = {a, b} ແລະ C = {a, b, c} ⇒ A ≠ C ຍ້ອນວ່າ c ∈ C ແຕ່ c ∉ A."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຳນວນອົງປະກອບເທົ່າກັນ ບໍ່ໄດ້ໝາຍຄວາມວ່າກຸ່ມຈະເທົ່າກັນສະເໝີ! ຕົວຢ່າງ {a, b} ແລະ {1, 2} ມີ 2 ອົງປະກອບຄືກັນ ແຕ່ບໍ່ເທົ່າກັນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ = ຫຼື ≠ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ກຸ່ມ {m, n} "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກຸ່ມ {n, m}"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ກຸ່ມ {a, b, c} "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກຸ່ມ {a, b}"}</span>
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
                {"ໃຫ້ X = {6, 2, 4} ແລະ U ແມ່ນກຸ່ມຂອງຈຳນວນຄູ່ທຳມະຊາດລະຫວ່າງ 1 ຫາ 7. ຖາມວ່າກຸ່ມ X ແລະ U ເທົ່າກັນ ຫຼື ບໍ່? ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: ສອງກຸ່ມນີ້"}</span>
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
              {"ໂຈດການປັບອົງປະກອບໃຫ້ກຸ່ມເທົ່າກັນ (Making Sets Equal): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ A = {1, 3, 4, 7, 6, 5, 12, 13} ແລະ B = {2, 5, 13, 8, 6, 7, 14, 4}. ເຮົາຕ້ອງເອົາອົງປະກອບໃດແດ່ອອກຈາກກຸ່ມ A ແລະ B ເພື່ອໃຫ້ສອງກຸ່ມທີ່ເຫຼືອກາຍເປັນກຸ່ມເທົ່າກັນ A′ = B′?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ເອົາອອກຈາກ A ແມ່ນ {"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"}"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ເອົາອອກຈາກ B ແມ່ນ {"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"}"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດກ່ຽວກັບກຸ່ມຕົວເລກຂຽນຈຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ F ແມ່ນກຸ່ມຂອງຕົວເລກທີ່ໃຊ້ຂຽນຈຳນວນ 142,332 ແລະ E ແມ່ນກຸ່ມຂອງຕົວເລກທີ່ໃຊ້ຂຽນຈຳນວນ 12,342. ຖາມວ່າກຸ່ມ F ແລະ E ເທົ່າກັນ ຫຼື ບໍ່? ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ສອງກຸ່ມນີ້"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ອົງປະກອບຮ່ວມຂອງ A ແລະ B ແມ່ນ {4, 5, 6, 7, 13}. ດັ່ງນັ້ນ ຕ້ອງເອົາອົງປະກອບອື່ນໆອອກ: ຈາກ A ເອົາ {1, 3, 12} ອອກ ແລະ ຈາກ B ເອົາ {2, 8, 14} ອອກ!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການພົວພັນຕົວອັກສອນລາວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ A = {ດ, ຕ, ຖ, ທ, ນ, ບ, ປ} ແລະ B ແມ່ນກຸ່ມຂອງພະຍັນຊະນະແຖວກາງຂອງພາສາລາວ. ຖາມວ່າກຸ່ມ A ແລະ B ເທົ່າກັນ ຫຼື ບໍ່? ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ສອງກຸ່ມນີ້"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດກວດສອບຄວາມເທົ່າກັນລະດັບສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ X = {a, b, c, d} ແລະ Y = {b, c, a, d, a}. ຖາມວ່າກຸ່ມ X ແລະ Y ເທົ່າກັນ ຫຼື ບໍ່? (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ' ພ້ອມທັງລະນຶກວ່າສະມາຊິກຊ້ຳກັນນັບເປັນຕົວດຽວ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ສອງກຸ່ມນີ້"}</span>
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
          <span key="1-1">{"(1) ∈ (ຍ້ອນ 6 ∈ P)"}</span>,
          <span key="1-2">{"(2) ∉ (ຍ້ອນ 14 ∉ P)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) ຖືກ (f ບໍ່ໄດ້ຢູ່ໃນ T)"}</span>,
          <span key="2-2">{"(2) ຜິດ (a ຢູ່ໃນ T ດັ່ງນັ້ນ a ∉ T ຈຶ່ງຜິດ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) ="}</span>,
          <span key="3-2">{"(2) ≠"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"ເທົ່າກັນ (ເນື່ອງຈາກເລກຄູ່ລະຫວ່າງ 1 ຫາ 7 ແມ່ນ {2, 4, 6} ເຊິ່ງມີອົງປະກອບຄືກັນກັບ X)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ເອົາອອກຈາກ A ແມ່ນ 1, 3, 12 (ຫຼື {1, 3, 12})"}</span>,
          <span key="c1-2">{"- ເອົາອອກຈາກ B ແມ່ນ 2, 8, 14 (ຫຼື {2, 8, 14})"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"ເທົ່າກັນ (ເນື່ອງຈາກກຸ່ມຕົວເລກຂອງທັງສອງຈຳນວນແມ່ນ {1, 2, 3, 4} ຄືກັນເປະ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ເທົ່າກັນ (ເນື່ອງຈາກ B ປະກອບມີພະຍັນຊະນະແຖວກາງຄື {ດ, ຕ, ຖ, ທ, ນ, ບ, ປ} ເຊິ່ງມີອົງປະກອບຄືກັບ A)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"ເທົ່າກັນ (ເນື່ອງຈາກ Y ຂຽນແກ້ຊ້ຳຄື {a, b, c, d} ເຊິ່ງເທົ່າກັບ X)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການກວດສອບເຄື່ອງໝາຍ ∈, ∉ ແລະ ການເຂົ້າໃຈເລື່ອງກຸ່ມເທົ່າກັນ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດຈັດລະບຽບຂໍ້ມູນ ແລະ ສ້າງສົມຜົນເລຂາຄະນິດໄດ້ຢ່າງຖືກຕ້ອງ!"
  }
};
