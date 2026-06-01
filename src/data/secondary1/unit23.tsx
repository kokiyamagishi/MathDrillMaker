import React from "react";
import { UnitData } from "../units2";

export const unit23Data: UnitData = {
  unitNumber: 23,
  unitTitle: "ພາກທີ I - ບົດທີ 23: ກຸ່ມ, ແລະ ອົງປະກອບຂອງກຸ່ມ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມຮັບຮູ້ເບື້ອງຕົ້ນຂອງກຸ່ມ, ວິທີການກຳນົດກຸ່ມໂດຍການຂຽນແບບແຈກຢາຍອົງປະກອບ ແລະ ການລະບຸຄຸນລັກສະນະ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 23 ໜ້າ 153-157",
  subSections: [
    {
      title: "1. ຄວາມຮັບຮູ້ກ່ຽວກັບກຸ່ມ (Concept of Sets)",
      keyPoint: {
      title: "1. ຄວາມຮັບຮູ້ກ່ຽວກັບກຸ່ມ (Concept of Sets)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ກຸ່ມແມ່ນການເກັບໂຮມບັນດາວັດຖຸ, ສິ່ງຂອງ ຫຼື ຕົວເລກທີ່ມີຄຸນລັກສະນະຈະແຈ້ງ ແລະ ສາມາດກຳນົດໄດ້ວ່າສິ່ງໃດຢູ່ໃນກຸ່ມນັ້ນ:"}
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
            <div>{"• ວັດຖຸ ຫຼື ຕົວເລກໃນກຸ່ມ ເອີ້ນວ່າ 'ອົງປະກອບ' (elements) ຂອງກຸ່ມ."}</div>
            <div>{"• ປົກກະຕິເພິ່ນຕັ້ງຊື່ກຸ່ມດ້ວຍຕົວອັກສອນໃຫຍ່ ເຊັ່ນ: A, B, C, N, ..."}</div>
            <div style={{ color: "#0D47A1", fontWeight: "bold" }}>
              {"• ຕົວຢ່າງ: ກຸ່ມ A ຂອງບັນດາຕົວເລກຄູ່ແຕ່ 1 ຫາ 9 ແມ່ນ A = {2, 4, 6, 8}."}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ອົງປະກອບແຕ່ລະຕົວໃນກຸ່ມຈະຂຽນແຍກກັນດ້ວຍເຄື່ອງໝາຍຈຸດ (,) ແລະ ຢູ່ພາຍໃນວົງປີກກາ { } ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຂຽນກຸ່ມຕໍ່ໄປນີ້ແບບແຈກຢາຍອົງປະກອບ (ຂຽນອົງປະກອບລຽງແຕ່ໜ້ອຍຫາຫຼາຍ ໃສ່ໃນວົງປີກກາ ເຊັ່ນ {2, 4, 6}): "}{" "}
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
              <span>{"(1) ກຸ່ມ A ຂອງບັນດາຕົວເລກຄີກແຕ່ 1 ຫາ 7 (ລວມທັງ 1 ແລະ 7):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ກຸ່ມ B ຂອງບັນດາຕົວເລກທຳມະຊາດທີ່ເປັນຕົວຫານຂອງ 12 (ຕົວຫານຮ່ວມຂອງ 12 ແຕ່ໜ້ອຍຫາຫຼາຍ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: B ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "240px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ວິທີກຳນົດກຸ່ມ (Methods of Defining Sets)",
      keyPoint: {
      title: "2. ວິທີກຳນົດກຸ່ມ (Methods of Defining Sets)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ມີ 2 ວິທີຫຼັກໃນການຂຽນກຳນົດກຸ່ມ:"}
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
              gap: "10px",
            }}
          >
            <div>
              <strong>{"• ວິທີ 1: ຂຽນແບບແຈກຢາຍອົງປະກອບ: "}</strong>{"ຂຽນທຸກອົງປະກອບອອກມາ."}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: B = {1, 3, 5, 7, 9}"}</span>
            </div>
            <div style={{ borderTop: "1px solid #C8E6C9", paddingTop: "8px" }}>
              <strong>{"• ວິທີ 2: ຂຽນແບບບອກຄຸນລັກສະນະຮ່ວມ: "}</strong>{"ບອກເງື່ອນໄຂຂອງອົງປະກອບ."}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: B = {x ∈ N | x ແມ່ນຈຳນວນຄີກ ແລະ x < 10}"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເຄື່ອງໝາຍ | ໃນວົງປີກກາອ່ານວ່າ 'ໂດຍທີ່' ຫຼື 'ເຊິ່ງວ່າ' ເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຊອກຫາຈຳນວນອົງປະກອບຂອງກຸ່ມ: "}{" "}
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
              <span>{"(1) ກຸ່ມ C = {5, 10, 15, 20, 25, 30}. ກຸ່ມ C ມີຈຳນວນອົງປະກອບທັງໝົດຈັກຕົວ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຕົວ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ກຸ່ມ D ຂອງບັນດາວັນໃນໜຶ່ງອາທິດ ມີຈຳນວນອົງປະກອບທັງໝົດຈັກຕົວ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຕົວ"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ຕົວອັກສອນທີ່ຊ້ຳກັນໃນຄຳສັບ ຈະຖືກຂຽນພຽງແຕ່ເທື່ອດຽວໃນກຸ່ມ. ບົດທ້າທາຍ 2: ກຸ່ມເປົ່າແມ່ນກຸ່ມທີ່ບໍ່ມີອົງປະກອບໃດໆເລີຍ, ສັນຍະລັກດ້ວຍ Ø ຫຼື {}.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບກຸ່ມລະດັບສູງ: "}{" "}
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
                <span>{"(1) ກຸ່ມ E ຂອງບັນດາຕົວອັກສອນທີ່ປະກອບຢູ່ໃນຄຳສັບ 'MATHS' ແມ່ນກຸ່ມໃດ? (ຂຽນແບບແຈກຢາຍອົງປະກອບ ເຊັ່ນ {A, B, C}):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: E ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ກຸ່ມ F = {x ∈ N | x < 0} (ກຸ່ມຈຳນວນທຳມະຊາດທີ່ນ້ອຍກວ່າ 0) ມີຈຳນວນອົງປະກອບຈັກຕົວ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຕົວ"}</span>
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
            {"ຈົ່ງທົດສອບຄວາມເຂົ້າໃຈລວມກ່ຽວກັບກຸ່ມ: "}{" "}
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
              <span>{"(1) ກຸ່ມຂອງຈຳນວນທຳມະຊາດ N = {1, 2, 3, ...} ປະກອບມີຈຳນວນອົງປະກອບທີ່ຈຳກັດ ຫຼື ບໍ່ຈຳກັດ? (ຕອບ 'ຈຳກັດ' ຫຼື 'ບໍ່ຈຳກັດ'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າກຸ່ມ G = {x ∈ N | x ແມ່ນຕົວຫານຂອງ 5}. ກຸ່ມ G ຂຽນແບບແຈກຢາຍອົງປະກອບແມ່ນແນວໃດ?:"}</span>
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
          <span key="u23-ans-1-1">{"(1) {1, 3, 5, 7} (ເພາະແມ່ນຕົວເລກຄີກແຕ່ 1 ຫາ 7)"}</span>,
          <span key="u23-ans-1-2">{"(2) {1, 2, 3, 4, 6, 12} (ເພາະທຸກຕົວເລກເຫຼົ່ານີ້ຫານ 12 ຂາດ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u23-ans-2-1">{"(1) 6 (ເພາະມີ 6 ຕົວເລກຢູ່ໃນວົງປີກກາ)"}</span>,
          <span key="u23-ans-2-2">{"(2) 7 (ເພາະໜຶ່ງອາທິດມີ 7 ວັນ: ວັນຈັນ ຫາ ວັນອາທິດ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u23-ans-t1-1">{"(1) {M, A, T, H, S} (ເພາະເປັນກຸ່ມຂອງຕົວອັກສອນແຕ່ລະຕົວໃນຄຳສັບ)"}</span>,
          <span key="u23-ans-t1-2">{"(2) 0 (ເພາະຈຳນວນທຳມະຊາດເລີ່ມຕົ້ນແຕ່ 1 ຂຶ້ນໄປ ດັ່ງນັ້ນບໍ່ມີຈຳນວນໃດນ້ອຍກວ່າ 0 ມັນຈຶ່ງເປັນກຸ່ມເປົ່າ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u23-ans-s1-1">{"(1) ບໍ່ຈຳກັດ (ເພາະເຮົາສາມາດນັບຕົວເລກຕໍ່ໄປໄດ້ເລື່ອຍໆບໍ່ມີວັນສິ້ນສຸດ)"}</span>,
          <span key="u23-ans-s1-2">{"(2) {1, 5} (ເພາະຕົວຫານຂອງ 5 ທີ່ມີແຕ່ຈຳນວນທຳມະຊາດແມ່ນມີແຕ່ 1 ແລະ 5)"}</span>,
        ],
      },
    ],
    advice: "ໃນການຂຽນກຸ່ມແບບແຈກຢາຍອົງປະກອບ ຢ່າລືມໃຊ້ວົງປີກກາ { } ແລະ ຂຽນເຄື່ອງໝາຍຈຸດ (,) ຂັ້ນລະຫວ່າງອົງປະກອບແຕ່ລະຕົວເດີ້! ຖ້າມີອົງປະກອບຊ້ຳກັນແມ່ນຂຽນພຽງແຕ່ເທື່ອດຽວເທົ່ານັ້ນ!",
  },
};
