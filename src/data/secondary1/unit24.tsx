import React from "react";
import { UnitData } from "../units2";

export const unit24Data: UnitData = {
  unitNumber: 24,
  unitTitle: "ພາກທີ I - ບົດທີ 24: ເຄື່ອງໝາຍ ∈ ແລະ ∉ ແລະ ກຸ່ມເທົ່າກັນ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີການນຳໃຊ້ເຄື່ອງໝາຍ ∈ (ແມ່ນອົງປະກອບ) ແລະ ∉ (ບໍ່ແມ່ນອົງປະກອບ) ຢ່າງຖືກຕ້ອງ, ແລະ ສາມາດກວດສອບການເທົ່າກັນຂອງສອງກຸ່ມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 24 ໜ້າ 158-162",
  subSections: [
    {
      title: "1. ເຄື່ອງໝາຍອົງປະກອບ (∈ ແລະ ∉)",
      keyPoint: {
      title: "1. ເຄື່ອງໝາຍອົງປະກອບ (∈ ແລະ ∉)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເຮົາໃຊ້ເຄື່ອງໝາຍ ∈ ແລະ ∉ ເພື່ອສະແດງຄວາມສຳພັນລະຫວ່າງວັດຖຸ (ຫຼື ຕົວເລກ) ກັບກຸ່ມ:"}
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
              gap: "10px",
            }}
          >
            <div>
              <strong>{"• ∈ (ແມ່ນອົງປະກອບ): "}</strong>{"ໃຊ້ເມື່ອວັດຖຸນັ້ນຢູ່ໃນກຸ່ມ."}
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: ຖ້າ A = {1, 2, 3} → 2 ∈ A"}</span>
            </div>
            <div style={{ borderTop: "1px solid #BBDEFB", paddingTop: "8px" }}>
              <strong>{"• ∉ (ບໍ່ແມ່ນອົງປະກອບ): "}</strong>{"ໃຊ້ເມື່ອວັດຖຸນັ້ນບໍ່ຢູ່ໃນກຸ່ມ."}
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: ຖ້າ A = {1, 2, 3} → 5 ∉ A"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງຈື່ຈຳວ່າ: ∈ ແລະ ∉ ໃຊ້ເພື່ອເຊື່ອມຕໍ່ລະຫວ່າງ 'ອົງປະກອບ' ກັບ 'ກຸ່ມ' ເທົ່ານັ້ນເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ ∈ ຫຼື ∉ ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ ໂດຍກຳນົດໃຫ້ A = {2, 4, 6, 8}: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) 4"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"A"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 5"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"A"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 8"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"A"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ກຸ່ມເທົ່າກັນ (Equal Sets)",
      keyPoint: {
      title: "2. ກຸ່ມເທົ່າກັນ (Equal Sets)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສອງກຸ່ມ A ແລະ B ຈະເທົ່າກັນ (ຂຽນ A = B) ກໍຕໍ່ເມື່ອພວກມັນມີອົງປະກອບທຸກໆຕົວຄືກັນຢ່າງສົມບູນ:"}
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
            <div>{"• ບໍ່ສົນໃຈລຳດັບການຂຽນອົງປະກອບ."}</div>
            <div style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: {1, 2, 3} = {3, 2, 1}"}</div>
            <div>{"• ບໍ່ສົນໃຈການຂຽນອົງປະກອບຊ້ຳກັນ."}</div>
            <div style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: {1, 2} = {1, 2, 2}"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າມີພຽງແຕ່ອົງປະກອບດຽວທີ່ຕ່າງກັນ, ສອງກຸ່ມນັ້ນຈະບໍ່ເທົ່າກັນ (A ≠ B) ທັນທີ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງກວດສອບວ່າສອງກຸ່ມທີ່ກຳນົດໃຫ້ເທົ່າກັນ ຫຼື ບໍ່ (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'): "}{" "}
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
              <span>{"(1) ກຸ່ມ X = {a, b, c} ແລະ ກຸ່ມ Y = {c, b, a}:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ກຸ່ມ M = {1, 2, 3} ແລະ ກຸ່ມ N = {1, 2, 3, 4}:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ປ່ຽນການຂຽນກຸ່ມແບບບອກເງື່ອນໄຂໃຫ້ເປັນແບບແຈກຢາຍອົງປະກອບກ່ອນ ແລ້ວຈຶ່ງປຽບທຽບກັນ. ບົດທ້າທາຍ 2: ພິຈາລະນາໃຫ້ລະອຽດວ່າ 0 ຢູ່ໃນກຸ່ມ ຫຼື ບໍ່.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດກວດສອບກຸ່ມເທົ່າກັນລະດັບສູງ: "}{" "}
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
                <span>{"(1) ກຸ່ມ P = {x ∈ N | x ແມ່ນຕົວຫານຂອງ 6} ແລະ ກຸ່ມ Q = {1, 2, 3, 6}. ສອງກຸ່ມນີ້ເທົ່າກັນ ຫຼື ບໍ່? (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າກຸ່ມ R = {x ∈ N | x < 5} ແລະ ກຸ່ມ S = {1, 2, 3, 4}. ສອງກຸ່ມນີ້ເທົ່າກັນ ຫຼື ບໍ່? (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
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
            {"ຈົ່ງທົດສອບຄວາມເຂົ້າໃຈລວມ: "}{" "}
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
              <span>{"(1) ຖ້າ R = {1, 2, 3} ຖາມວ່າ 0 ∈ R ຫຼື 0 ∉ R? (ຕອບ '0 ∈ R' ຫຼື '0 ∉ R'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າ A = {x, y} ແລະ B = {y, x, x}. ສອງກຸ່ມນີ້ເທົ່າກັນ ຫຼື ບໍ່? (ຕອບ 'ເທົ່າກັນ' ຫຼື 'ບໍ່ເທົ່າກັນ'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
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
          <span key="u24-ans-1-1">{"(1) ∈ (ເພາະເລກ 4 ຢູ່ໃນກຸ່ມ A)"}</span>,
          <span key="u24-ans-1-2">{"(2) ∉ (ເພາະເລກ 5 ບໍ່ຢູ່ໃນກຸ່ມ A)"}</span>,
          <span key="u24-ans-1-3">{"(3) ∈ (ເພາະເລກ 8 ຢູ່ໃນກຸ່ມ A)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u24-ans-2-1">{"(1) ເທົ່າກັນ (ເພາະມີອົງປະກອບ a, b, c ຄືກັນທຸກຕົວ ພຽງແຕ່ສະຫຼັບລຳດັບການຂຽນ)"}</span>,
          <span key="u24-ans-2-2">{"(2) ບໍ່ເທົ່າກັນ (ເພາະກຸ່ມ N ມີເລກ 4 ແຕ່ກຸ່ມ M ບໍ່ມີເລກ 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u24-ans-t1-1">{"(1) ເທົ່າກັນ (ເພາະຕົວຫານຂອງ 6 ແມ່ນ 1, 2, 3, 6 ດັ່ງນັ້ນ P = {1, 2, 3, 6} ມັນຈຶ່ງເທົ່າກັບ Q)"}</span>,
          <span key="u24-ans-t1-2">{"(2) ເທົ່າກັນ (ເພາະຈຳນວນທຳມະຊາດທີ່ນ້ອຍກວ່າ 5 ແມ່ນ 1, 2, 3, 4 ດັ່ງນັ້ນ R = {1, 2, 3, 4} ເທົ່າກັບ S)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u24-ans-s1-1">{"(1) 0 ∉ R (ເພາະເລກ 0 ບໍ່ແມ່ນອົງປະກອບຂອງກຸ່ມ R)"}</span>,
          <span key="u24-ans-s1-2">{"(2) ເທົ່າກັນ (ເພາະການຂຽນອົງປະກອບ x ຊ້ຳກັນໃນກຸ່ມ B ບໍ່ໄດ້ເຮັດໃຫ້ກຸ່ມປ່ຽນແປງ ອົງປະກອບຍັງຄົງແມ່ນ x ແລະ y ຄືກັນ)"}</span>,
        ],
      },
    ],
    advice: "ການກວດສອບວ່າສອງກຸ່ມເທົ່າກັນ ຫຼື ບໍ່ ໃຫ້ເບິ່ງວ່າອົງປະກອບທຸກຕົວຄືກັນ ຫຼື ບໍ່. ຢ່າລືມວ່າ ລຳດັບການຂຽນ ແລະ ການຂຽນອົງປະກອບຊ້ຳກັນ ບໍ່ມີຜົນຕໍ່ການເທົ່າກັນຂອງກຸ່ມເດີ້!",
  },
};
