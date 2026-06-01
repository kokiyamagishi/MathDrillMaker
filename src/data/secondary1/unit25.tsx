import React from "react";
import { UnitData } from "../units2";

export const unit25Data: UnitData = {
  unitNumber: 25,
  unitTitle: "ພាកທີ I - ບົດທີ 25: ອະນຸກຸ່ມ, ແລະ ແຜນວາດຂອງກຸ່ມ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອະນຸກຸ່ມ (Subset), ສັນຍະລັກ ⊂, ວິທີການຊອກຫາອະນຸກຸ່ມທັງໝົດ ແລະ ການນຳໃຊ້ແຜນວາດກຸ່ມ (Venn Diagram)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 25 ໜ້າ 163-168",
  keyPoints: [
    {
      title: "1. ອະນຸກຸ່ມ (Subset)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ກຸ່ມ A ຈະເປັນອະນຸກຸ່ມຂອງກຸ່ມ B (ຂຽນແທນດ້ວຍ A ⊂ B) ກໍຕໍ່ເມື່ອ ທຸກໆອົງປະກອບຂອງ A ລ້ວນແຕ່ແມ່ນອົງປະກອບຂອງ B:"}
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
            <div>{"• ສັນຍະລັກ ⊂ ອ່ານວ່າ 'ເປັນອະນຸກຸ່ມຂອງ' ຫຼື 'ບັນຈຸໃນ'."}</div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: ຖ້າ A = {1, 2} ແລະ B = {1, 2, 3, 4} → A ⊂ B"}</div>
            <div>{"• ຖ້າມີບາງອົງປະກອບຂອງ A ບໍ່ຢູ່ໃນ B → A ⊄ B (ບໍ່ແມ່ນອະນຸກຸ່ມ)."}</div>
            <div>{"• ກຸ່ມເປົ່າ (Ø) ເປັນອະນຸກຸ່ມຂອງທຸກໆກຸ່ມ: Ø ⊂ A ເດີ້!"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈຳນວນອະນຸກຸ່ມທັງໝົດຂອງກຸ່ມທີ່ມີ n ອົງປະກອບ ຈະເທົ່າກັບ 2ⁿ ອະນຸກຸ່ມ!",
        isBlue: true,
      },
    },
    {
      title: "2. ແຜນວາດຂອງກຸ່ມ (Venn Diagram)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພິ່ນມັກໃຊ້ຮູບເລຂາຄະນິດປິດ ເຊັ່ນ ຮູບວົງມົນ ຫຼື ຮູບໄຂ່ ເພື່ອສະແດງຄວາມສຳພັນລະຫວ່າງກຸ່ມຕ່າງໆ:"}
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
              gap: "6px",
            }}
          >
            <div>{"• ຖ້າ A ⊂ B → ວົງມົນຂອງກຸ່ມ A ຈະຢູ່ທາງໃນວົງມົນຂອງກຸ່ມ B ທັງໝົດ."}</div>
            <div>{"• ອົງປະກອບແຕ່ລະຕົວຈະຖືກຂຽນຢູ່ວາງໄວ້ພາຍໃນຂອບເຂດຂອງວົງມົນນັ້ນໆ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ແຜນວາດນີ້ເອີ້ນວ່າ ແຜນວາດແວນ (Venn Diagram) ເຊິ່ງຊ່ວຍໃຫ້ເຫັນພາບຄວາມສຳພັນຂອງກຸ່ມໄດ້ຈະແຈ້ງທີ່ສຸດ!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ ⊂ ຫຼື ⊄ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
            <span className="point-label">{"(ຂໍ้ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) {1, 2}"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"{1, 2, 3, 4}"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) {2, 5}"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"{1, 2, 3, 4}"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) Ø"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"{5, 6, 7}"}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຊອກຫາອະນຸກຸ່ມທັງໝົດຂອງກຸ່ມທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ກຸ່ມ A = {3}. ຈົ່ງຂຽນອະນຸກຸ່ມທັງໝົດຂອງກຸ່ມ A (ແຍກກັນດ້ວຍເຄື່ອງໝາຍຈຸດ ເຊັ່ນ Ø, {3}):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ກຸ່ມ B = {1, 2}. ກຸ່ມ B ຈະມີຈຳນວນອະນຸກຸ່ມທັງໝົດຈັກກຸ່ມ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ກຸ່ມ"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຖ້າມີ 3 ອົງປະກອບ, ຈຳນວນອະນຸກຸ່ມທັງໝົດແມ່ນ 2³ = 8 ກຸ່ມ. ບົດທ້າທາຍ 2: ພິຈາລະນາວ່າຈຳນວນຖ້ວນ ແລະ ຈຳນວນທຳມະຊາດ ມີຄວາມສຳພັນແບບອະນຸກຸ່ມແນວໃດ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບສູງກ່ຽວກັບອະນຸກຸ່ມ: "}{" "}
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
                <span>{"(1) ກຸ່ມ C = {a, b, c}. ຈະມີອະນຸກຸ່ມທັງໝົດຈັກກຸ່ມ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ກຸ່ມ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ N ແມ່ນກຸ່ມຈຳນວນທຳມະຊາດ ແລະ Z ແມ່ນກຸ່ມຈຳນວນຖ້ວນ. ຖາມວ່າ N ⊂ Z ຫຼື Z ⊂ N? (ຕອບ 'N ⊂ Z' ຫຼື 'Z ⊂ N'):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບແຜນວາດຂອງກຸ່ມ: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຖ້າ A = {2, 4} ແລະ B = {2, 4, 6}. ໃນແຜນວາດແວນ, ວົງມົນຂອງກຸ່ມ A ຈະຢູ່ພາຍໃນ ຫຼື ພາຍນອກວົງມົນຂອງກຸ່ມ B? (ຕອບ 'ພາຍໃນ' ຫຼື 'ພາຍນອກ'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າກຸ່ມ M ບໍ່ມີອົງປະກອບຮ່ວມໃດໆເລີຍກັບກຸ່ມ N. ໃນແຜນວາດແວນ, ສອງວົງມົນນີ້ຈະຕັດກັນ ຫຼື ແຍກກັນ? (ຕອບ 'ຕັດກັນ' ຫຼື 'ແຍກກັນ'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u25-ans-1-1">{"(1) ⊂ (ເພາະທຸກອົງປະກອບ 1 ແລະ 2 ຢູ່ໃນກຸ່ມຫຼັງ)"}</span>,
          <span key="u25-ans-1-2">{"(2) ⊄ (ເພາະເລກ 5 ບໍ່ໄດ້ຢູ່ໃນກຸ່ມຫຼັງ)"}</span>,
          <span key="u25-ans-1-3">{"(3) ⊂ (ເພາະກຸ່ມເປົ່າ Ø ເປັນອະນຸກຸ່ມຂອງທຸກໆກຸ່ມສະເໝີ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u25-ans-2-1">{"(1) Ø, {3} (ເພາະມີພຽງແຕ່ກຸ່ມເປົ່າ ແລະ ຕົວມັນເອງ)"}</span>,
          <span key="u25-ans-2-2">{"(2) 4 (ເພາະມີ 2 ອົງປະກອບ ຈຳນວນອະນຸກຸ່ມແມ່ນ 2² = 4 ກຸ່ມ ເຊິ່ງໄດ້ແກ່: Ø, {1}, {2}, {1, 2})"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u25-ans-t1-1">{"(1) 8 (ເພາະມີ 3 ອົງປະກອບ ຈຳນວນອະນຸກຸ່ມແມ່ນ 2³ = 8 ກຸ່ມ)"}</span>,
          <span key="u25-ans-t1-2">{"(2) N ⊂ Z (ເພາະທຸກໆຈຳນວນທຳມະຊາດລ້ວນແຕ່ແມ່ນຈຳນວນຖ້ວນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u25-ans-s1-1">{"(1) ພາຍໃນ (ເພາະ A ⊂ B ດັ່ງນັ້ນຂອບເຂດຂອງ A ຕ້ອງຖືກບັນຈຸຢູ່ໃນ B ທັງໝົດ)"}</span>,
          <span key="u25-ans-s1-2">{"(2) ແຍກກັນ (ເພາະບໍ່ມີອົງປະກອບຮ່ວມກັນເລີຍ ວົງມົນທັງສອງຈຶ່ງບໍ່ແຕະຕ້ອງກັນ)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ຈຳວ່າອະນຸກຸ່ມແມ່ນ 'ກຸ່ມນ້ອຍທີ່ຢູ່ພາຍໃນກຸ່ມໃຫຍ່'. ກຸ່ມເປົ່າ (Ø) ແລະ ຕົວມັນເອງ ຈະເປັນອະນຸກຸ່ມຂອງກຸ່ມນັ້ນໆສະເໝີ! ແລະ ສູດຄິດໄລ່ຈຳນວນອະນຸກຸ່ມແມ່ນ 2ⁿ ເດີ້!",
  },
};
