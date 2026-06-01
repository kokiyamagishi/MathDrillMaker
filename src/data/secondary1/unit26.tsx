import React from "react";
import { UnitData } from "../units2";

export const unit26Data: UnitData = {
  unitNumber: 26,
  unitTitle: "ພາກທີ I - ບົດທີ 26: ການຕັດກັນຂອງກຸ່ມ, ການໂຮມກັນຂອງກຸ່ມ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບການປະຕິບັດການຂອງກຸ່ມ: ການຕັດກັນ (Intersection) ດ້ວຍເຄື່ອງໝາຍ ∩ ແລະ ການໂຮມກັນ (Union) ດ້ວຍເຄື່ອງໝາຍ ∪",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 26 ໜ້າ 169-174",
  subSections: [
    {
      title: "1. ການຕັດກັນຂອງສອງກຸ່ມ (Intersection of Sets)",
      keyPoint: {
      title: "1. ການຕັດກັນຂອງສອງກຸ່ມ (Intersection of Sets)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຕັດກັນຂອງກຸ່ມ A ແລະ ກຸ່ມ B (ຂຽນ A ∩ B) ແມ່ນກຸ່ມທີ່ປະກອບດ້ວຍບັນດາອົງປະກອບທີ່ຮ່ວມກັນ (ຢູ່ໃນທັງ A ແລະ B):"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{"• ສັນຍະລັກ ∩ ອ່ານວ່າ 'ຕັດກັນ' (Intersection)."}</div>
            <div>{"• A ∩ B = {x | x ∈ A ແລະ x ∈ B}"}</div>
            <div style={{ color: "#0D47A1", fontWeight: "bold" }}>
              {"• ຕົວຢ່າງ: ຖ້າ A = {1, 2, 3} ແລະ B = {2, 3, 4} → A ∩ B = {2, 3}"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຈື່: ການຕັດກັນແມ່ນການເລືອກເອົາແຕ່ອົງປະກອບ 'ໜ້າຄືກັນ' ທີ່ຊ້ຳກັນໃນສອງກຸ່ມເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຊອກຫາການຕັດກັນ ແລະ ການໂຮມກັນຂອງກຸ່ມ (ກຳນົດໃຫ້ A = {1, 3, 5} ແລະ B = {3, 5, 7}): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ຈົ່ງຂຽນກຸ່ມ A ∩ B ແບບແຈກຢາຍອົງປະກອບ (ເຊັ່ນ {3, 5}):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A ∩ B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) จົ່ງຂຽນກຸ່ມ A ∪ B ແບບແຈກຢາຍອົງປະກອບ (ລຽງແຕ່ໜ້ອຍຫາຫຼາຍ ເຊັ່ນ {1, 3, 5, 7}):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A ∪ B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "220px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການໂຮມກັນຂອງສອງກຸ່ມ (Union of Sets)",
      keyPoint: {
      title: "2. ການໂຮມກັນຂອງສອງກຸ່ມ (Union of Sets)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການໂຮມກັນຂອງກຸ່ມ A ແລະ ກຸ່ມ B (ຂຽນ A ∪ B) ແມ່ນກຸ່ມທີ່ປະກອບດ້ວຍທຸກໆອົງປະກອບຂອງ A ແລະ B ເຂົ້າກັນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{"• ສັນຍະລັກ ∪ ອ່ານວ່າ 'ໂຮມກັນ' (Union)."}</div>
            <div>{"• A ∪ B = {x | x ∈ A ຫຼື x ∈ B}"}</div>
            <div style={{ color: "#2E7D32", fontWeight: "bold" }}>
              {"• ຕົວຢ່າງ: ຖ້າ A = {1, 2} ແລະ B = {2, 3, 4} → A ∪ B = {1, 2, 3, 4}"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ໃນການໂຮມກັນ ຖ້າມີອົງປະກອບທີ່ຊ້ຳກັນ (ເຊັ່ນ ເລກ 2) ເຮົາຈະຂຽນມັນພຽງແຕ່ເທື່ອດຽວເທົ່ານັ້ນໃນກຸ່ມໃໝ່!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຊອກຫາຜົນການຕັດກັນກັບກຸ່ມເປົ່າ ແລະ ຕົວມັນເອງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ໃຫ້ກຸ່ມ M = {2, 4, 6}. ຖາມວ່າ M ∩ Ø ຈະເທົ່າກັບກຸ່ມໃດ? (ຕອບ 'Ø' ຫຼື 'M'):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກກຸ່ມ M, ຖາມວ່າ M ∪ Ø ຈະເທົ່າກັບກຸ່ມໃດ? (ຕອບ 'Ø' ຫຼື 'M' ຫຼື ລະບຸກຸ່ມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຖ້າສອງກຸ່ມບໍ່ມີອົງປະກອບໃດໆຮ່ວມກັນເລີຍ, ຜົນຂອງການຕັດກັນຈະແມ່ນ ກຸ່ມເປົ່າ (Ø). ບົດທ້າທາຍ 2: ປ່ຽນກຸ່ມບອກເງື່ອນໄຂໃຫ້ເປັນແຈກຢາຍອົງປະກອບກ່ອນ ແລ້ວຈຶ່ງໂຮມກັນ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບສູງກ່ຽວກັບກຸ່ມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໃຫ້ P = {1, 2} ແລະ Q = {3, 4}. ຜົນຂອງ P ∩ Q ແມ່ນເທົ່າໃດ? (ຕອບ 'Ø' ຫຼື ລະບຸກຸ່ມ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: P ∩ Q ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ A = {x ∈ N | x ແມ່ນຕົວຫານຂອງ 4} ແລະ B = {x ∈ N | x ແມ່ນຕົວຫານຂອງ 6}. ກຸ່ມ A ∩ B ຈະແມ່ນກຸ່ມໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A ∩ B ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງແກ້ໂຈດບັນຫາປະສົມ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ຖ້າ A ⊂ B. ຖາມວ່າ A ∩ B ຈະເທົ່າກັບກຸ່ມໃດ? (ຕອບ 'A' ຫຼື 'B'):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າ A ⊂ B. ຖາມວ່າ A ∪ B ຈະເທົ່າກັບກຸ່ມໃດ? (ຕອບ 'A' ຫຼື 'B'):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u26-ans-1-1">{"(1) {3, 5} (ເພາະເລກ 3 ແລະ 5 ແມ່ນອົງປະກອບທີ່ມີຢູ່ໃນທັງສອງກຸ່ມ)"}</span>,
          <span key="u26-ans-1-2">{"(2) {1, 3, 5, 7} (ເພາະເປັນການເອົາທຸກອົງປະກອບມາໂຮມກັນ ໂດຍເລກ 3 ແລະ 5 ທີ່ຊ້ຳກັນຂຽນພຽງເທື່ອດຽວ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u26-ans-2-1">{"(1) Ø (ເພາະກຸ່ມເປົ່າບໍ່ມີອົງປະກອບໃດໆເລີຍ ຜົນການຕັດກັນຈຶ່ງບໍ່ມີຕົວຮ່ວມ)"}</span>,
          <span key="u26-ans-2-2">{"(2) M (ເພາະການໂຮມກຸ່ມໃດໜຶ່ງກັບກຸ່ມເປົ່າ ຈະໄດ້ກຸ່ມເດີມສະເໝີ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u26-ans-t1-1">{"(1) Ø (ເພາະບໍ່ມີອົງປະກອບໃດໆຮ່ວມກັນເລີຍ)"}</span>,
          <span key="u26-ans-t1-2">{"(2) {1, 2} (ເພາະ A = {1, 2, 4} ແລະ B = {1, 2, 3, 6} ດັ່ງນັ້ນອົງປະກອບຮ່ວມແມ່ນ 1 ແລະ 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u26-ans-s1-1">{"(1) A (ເພາະ A ຢູ່ທາງໃນ B ທັງໝົດ ດັ່ງນັ້ນອົງປະກອບຮ່ວມຂອງພວກມັນແມ່ນ A ທັງໝົດ)"}</span>,
          <span key="u26-ans-s1-2">{"(2) B (ເພາະ A ⊂ B ດັ່ງນັ້ນເມື່ອເອົາ A ມາໂຮມກັບ B ຈະໄດ້ B ໃຫຍ່ຄືເກົ່າ)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ຈຳງ່າຍໆ: ຕັດກັນ (∩) ເອົາແຕ່ໂຕຊ້ຳ, ໂຮມກັນ (∪) ເອົາທັງໝົດມາລວມກັນ ແຕ່ໂຕຊ້ຳຂຽນພຽງເທື່ອດຽວເດີ້!",
  },
};
