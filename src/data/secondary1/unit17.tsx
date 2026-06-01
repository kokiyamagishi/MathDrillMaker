import React from "react";
import { UnitData } from "../units2";

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ພາກທີ II - ບົດທີ 17: ການເຄິ່ງຄື",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈກ່ຽວກັບການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (ການເຄິ່ງຄືແກນ), ຄຸນລັກສະນະຂອງການເຄິ່ງຄື ແລະ ຮູບເຄິ່ງຄື",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 17 ໜ້າ 116-121",
  subSections: [
    {
      title: "1. ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (Reflection across a Line)",
      keyPoint: {
      title: "1. ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (Reflection across a Line)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (d) ແມ່ນການປ່ຽນບ່ອນຂອງເມັດ ຫຼື ຮູບ ໂດຍມີເສັ້ນຊື່ (d) ເປັນແກນເຄິ່ງຄື:"}
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
            <div>{"• ຖ້າເມັດ A' ແມ່ນຮູບເຄິ່ງຄືຂອງເມັດ A ທຽບໃສ່ເສັ້ນຊື່ (d):"}</div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px", fontWeight: "bold" }}>
              {"→ ເສັ້ນຊື່ (d) ຈະຕັ້ງສາກກັບທ່ອນຊື່ AA' ຢູ່ຈຸດເຄິ່ງກາງຂອງ AA'."}
            </div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px", fontWeight: "bold" }}>
              {"→ ໄລຍະຫ່າງຈາກ A ຫາ (d) ເທົ່າກັບໄລຍະຫ່າງຈາກ A' ຫາ (d)."}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ເວົ້າງ່າຍໆແມ່ນຄືກັບການພັບເຈ້ຍຕາມເສັ້ນຊື່ (d), ເມັດ A ແລະ A' ຈະເຕັງກັນພໍດີເລີຍເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງການເຄິ່ງຄືແກນ: "}{" "}
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
              <span>{"(1) ຖ້າທ່ອນຊື່ AB ຍາວ 6 cm, ຮູບເຄິ່ງຄື A'B' ຂອງມັນຈະຍາວຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າມຸມ ABC ມີຂະໜາດ 45°, ມຸມເຄິ່ງຄື A'B'C' ຈະມີຂະໜາດຈັກອົງສາ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ຄຸນລັກສະນະຂອງການເຄິ່ງຄືແກນ",
      keyPoint: {
      title: "2. ຄຸນລັກສະນະຂອງການເຄິ່ງຄືແກນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ ມີຄຸນລັກສະນະຮັກສາໄລຍະຫ່າງ ແລະ ຮູບຮ່າງ:"}
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
            <div>{"• ຮັກສາຄວາມຍາວຂອງທ່ອນຊື່: AB = A'B'"}</div>
            <div>{"• ຮັກສາຂະໜາດຂອງມຸມ: ມຸມຂອງຮູບຕົ້ນແບບ ເທົ່າກັບມຸມຂອງຮູບເຄິ່ງຄື."}</div>
            <div>{"• ຮັກສາເນື້ອທີ່: ຮູບເຄິ່ງຄືມີເນື້ອທີ່ເທົ່າກັບຮູບຕົ້ນແບບສະເໝີ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຮູບເຄິ່ງຄືຈະປ່ຽນທິດທາງ (ຊ້າຍ-ຂວາ) ແຕ່ຂະໜາດ ແລະ ຮູບຮ່າງຈະຍັງຄືເກົ່າທຸກປະການ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງພິຈາລະນາໄລຍະຫ່າງໃນການເຄິ່ງຄື: "}{" "}
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
              <span>{"(1) ຖ້າເມັດ M ຢູ່ຫ່າງຈາກແກນເຄິ່ງຄື (d) ເປັນໄລຍະ 4 cm, ເມັດເຄິ່ງຄື M' ຈະຢູ່ຫ່າງຈາກ (d) ຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ທ່ອນຊື່ MM' ທີ່ເຊື່ອມລະຫວ່າງເມັດຕົ້ນແບບ ແລະ ຮູບເຄິ່ງຄື ຈະມີຄວາມຍາວທັງໝົດຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ການເຄິ່ງຄືຮັກສາເນື້ອທີ່ຂອງຮູບສະເໝີ. ບົດທ້າທາຍ 2: ຄິດໄລ່ຄວາມຍາວອ້ອມຮອບຮູບເຄິ່ງຄື ໂດຍມັນຈະເທົ່າກັບຄວາມຍາວອ້ອມຮອບຮູບຕົ້ນແບບ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດກ່ຽວກັບເນື້ອທີ່ ແລະ ຄວາມຍາວອ້ອມຮອບ: "}{" "}
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
                <span>{"(1) ຮູບສາມແຈ ABC ມີເນື້ອທີ່ 15 cm². ຮູບເຄິ່ງຄື A'B'C' ຂອງມັນຈະມີເນື້ອທີ່ຈັກ cm²?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຮູບສີ່ແຈຂະໜານໜຶ່ງມີຄວາມຍາວອ້ອມຮອບ 24 cm. ຮູບເຄິ່ງຄືຂອງມັນຈະມີຄວາມຍາວອ້ອມຮອບຈັກ cm?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
            {"ຈົ່ງຕື່ມຄຳສັບ ຫຼື ຄຳຕອບທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}{" "}
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
              <span>{"(1) ເສັ້ນຊື່ທີ່ແບ່ງເຄິ່ງ ແລະ ຕັ້ງສາກກັບທ່ອນຊື່ AA' ເອີ້ນວ່າ ເສັ້ນກາງສາກ ຫຼື ແກນເຄິ່ງຄື. ແມ່ນ ຫຼື ບໍ່? (ຕອບ 'ແມ່ນ' ຫຼື 'ບໍ່ແມ່ນ'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າເມັດ P ຢູ່ເທິງແກນເຄິ່ງຄື (d) ພໍດີ, ຮູບເຄິ່ງຄື P' ຂອງມັນຈະຢູ່ຫ່າງຈາກເມັດ P ຈັກ cm?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
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
          <span key="u17-ans-1-1">{"(1) 6 (ເພາະການເຄິ່ງຄືຮັກສາຄວາມຍາວຂອງທ່ອນຊື່ AB = A'B')"}</span>,
          <span key="u17-ans-1-2">{"(2) 45 (ເພາະການເຄິ່ງຄືຮັກສາຂະໜາດຂອງມຸມ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u17-ans-2-1">{"(1) 4 (ເພາະໄລຍະຫ່າງຈາກເມັດຕົ້ນແບບຫາແກນ ເທົ່າກັບໄລຍະຫ່າງຈາກຮູບເຄິ່ງຄືຫາແກນ)"}</span>,
          <span key="u17-ans-2-2">{"(2) 8 (ເພາະ MM' = 4 + 4 = 8 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u17-ans-t1-1">{"(1) 15 (ເພາະການເຄິ່ງຄືຮັກສາເນື້ອທີ່ຂອງຮູບ)"}</span>,
          <span key="u17-ans-t1-2">{"(2) 24 (ເພາະການເຄິ່ງຄືຮັກສາຄວາມຍາວອ້ອມຮອບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u17-ans-s1-1">{"(1) ແມ່ນ (ເສັ້ນຊື່ທີ່ແບ່ງເຄິ່ງ ແລະ ຕັ້ງສາກກັບທ່ອນຊື່ AA' ແມ່ນເສັ້ນກາງສາກ ທີ່ເຮັດໜ້າທີ່ເປັນແກນເຄິ່ງຄື)"}</span>,
          <span key="u17-ans-s1-2">{"(2) 0 (ເພາະຖ້າເມັດຢູ່ເທິງແກນເຄິ່ງຄື, ຮູບເຄິ່ງຄືຂອງມັນຈະເຕັງກັບເມັດຕົ້ນແບບພໍດີ ໄລຍະຫ່າງຈຶ່ງເປັນ 0)"}</span>,
        ],
      },
    ],
    advice: "ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ແມ່ນຄ້າຍຄືກັບການສ່ອງແວ່ນແຍງ. ຮູບທີ່ໄດ້ຈະມີຂະໜາດເທົ່າເດີມ ແຕ່ປ່ຽນທິດທາງດ້ານຊ້າຍ ແລະ ຂວາ ເດີ້!",
  },
};
