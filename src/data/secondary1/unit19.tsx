import React from "react";
import { UnitData } from "../units2";

export const unit19Data: UnitData = {
  unitNumber: 19,
  unitTitle: "ພາກທີ II - ບົດທີ 19: ຮູບເຄິ່ງຄືຂອງມຸມ ແລະ ຂອງເສັ້ນຊື່",
  unitGoal:
    "ເຂົ້າໃຈຢ່າງເລິກເຊິ່ງກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບເຄິ່ງຄືຂອງເສັ້ນຊື່, ເຄິ່ງເສັ້ນຊື່, ມຸມ ແລະ ຄວາມສຳພັນລະຫວ່າງພວກມັນພາຍໃຕ້ການເຄິ່ງຄືແກນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 19 ໜ້າ 129-134",
  subSections: [
    {
      title: "1. ຮູບເຄິ່ງຄືຂອງເສັ້ນຊື່ (Reflection of a Line)",
      keyPoint: {
      title: "1. ຮູບເຄິ່ງຄືຂອງເສັ້ນຊື່ (Reflection of a Line)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ພາຍໃຕ້ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (d):"}
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
            <div>{"• ຮູບເຄິ່ງຄືຂອງເສັ້ນຊື່ (L) ແມ່ນເສັ້ນຊື່ (L') ສະເໝີ."}</div>
            <div>{"• ຖ້າເສັ້ນຊື່ (L) ຂະໜານກັບແກນ (d) → ຮູບເຄິ່ງຄື (L') ຈະຂະໜານກັບ (L) ແລະ ຂະໜານກັບແກນ (d)."}</div>
            <div>{"• ຖ້າເສັ້ນຊື່ (L) ຕັດກັບແກນ (d) ຢູ່ຈຸດ O → ຮູບເຄິ່ງຄື (L') ກໍຈະຕັດແກນ (d) ຢູ່ຈຸດ O ເຊັ່ນກັນ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈຸດຕັດກັນລະຫວ່າງເສັ້ນຊື່ຕົ້ນແບບ ແລະ ແກນເຄິ່ງຄື ຈະເປັນຈຸດເຄິ່ງຄືໃນຕົວຂອງມັນເອງ ( invariant point ) ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບເຄິ່ງຄືຂອງເສັ້ນຊື່ ແລະ ມຸມ: "}{" "}
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
              <span>{"(1) ຖ້າເສັ້ນຊື່ (L) ຕັດແກນເຄິ່ງຄື (d) ຢູ່ຈຸດ P. ຖາມວ່າຮູບເຄິ່ງຄື (L') ຈະຕັດແກນ (d) ຢູ່ຈຸດໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຈຸດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າມຸມ ABC ມີຂະໜາດ 115°. ມຸມເຄິ່ງຄື A'B'C' ຈະມີຂະໜາດຈັກອົງສາ ແລະ ແມ່ນມຸມປະເພດໃດ? (ຕອບຂະໜາດ ແລະ ປະເພດມຸມ ເຊັ່ນ: 60, ມຸມແຫຼມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
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
      title: "2. ຮູບເຄິ່ງຄືຂອງມຸມ (Reflection of an Angle)",
      keyPoint: {
      title: "2. ຮູບເຄິ່ງຄືຂອງມຸມ (Reflection of an Angle)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຮູບເຄິ່ງຄືຂອງມຸມໜຶ່ງ ຈະມີຂະໜາດເທົ່າກັບມຸມຕົ້ນແບບສະເໝີ:"}
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
            <div>{"• ມຸມເຄິ່ງຄືຂອງ ມຸມແຫຼມ ແມ່ນ ມຸມແຫຼມ ທີ່ມີຂະໜາດເທົ່າກັນ."}</div>
            <div>{"• ມຸມເຄິ່ງຄືຂອງ ມຸມສາກ ແມ່ນ ມຸມສາກ."}</div>
            <div>{"• ມຸມເຄິ່ງຄືຂອງ ມຸມຫວາ ແມ່ນ ມຸມຫວາ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ເຖິງແມ່ນວ່າທິດທາງການປິ່ນຂອງມຸມຈະປ່ຽນໄປ (ເຊັ່ນ ຕາມເຂັມໂມງ ປ່ຽນເປັນ ທວນເຂັມໂມງ), ແຕ່ຄ່າຂະໜາດອົງສາແມ່ນເທົ່າເດີມ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງພິຈາລະນາຄວາມຂະໜານ ແລະ ການເຄິ່ງຄື: "}{" "}
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
              <span>{"(1) ຖ້າເສັ້ນຊື່ (L) ຂະໜານກັບແກນເຄິ່ງຄື (d) ໂດຍຢູ່ຫ່າງກັນ 3 cm. ຮູບເຄິ່ງຄື (L') ຈະຢູ່ຫ່າງຈາກແກນ (d) ຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ເສັ້ນຊື່ (L) ແລະ ຮູບເຄິ່ງຄື (L') ຈະຂະໜານກັນ ຫຼື ບໍ່? (ຕອບ 'ຂະໜານກັນ' ຫຼື 'ບໍ່ຂະໜານກັນ'):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ຖ້າເສັ້ນຊື່ສອງເສັ້ນຕັ້ງສາກກັນ, ຮູບເຄິ່ງຄືຂອງພວກມັນກໍຈະຕັ້ງສາກກັນເຊັ່ນດຽວກັນ. ບົດທ້າທາຍ 2: ຄິດໄລ່ຜົນບວກຂອງມຸມຕົ້ນແບບ ແລະ ມຸມເຄິ່ງຄື.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບສູງກ່ຽວກັບຮູບເຄິ່ງຄື: "}{" "}
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
                <span>{"(1) ຖ້າເສັ້ນຊື່ (a) ຕັ້ງສາກກັບເສັ້ນຊື່ (b). ຮູບເຄິ່ງຄື (a') ແລະ (b') ຈະປະກອບກັນເປັນມຸມຈັກອົງສາ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າມຸມ ABC ມີຂະໜາດ 75°. ຜົນບວກຂອງມຸມ ABC ແລະ ມຸມເຄິ່ງຄື A'B'C' ຂອງມັນຈະເທົ່າກັບຈັກອົງສາ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມທົດສອບຄວາມເຂົ້າໃຈລວມ: "}{" "}
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
              <span>{"(1) ຖ້າເສັ້ນຊື່ (L) ເຕັງກັບແກນເຄິ່ງຄື (d) ພໍດີ, ຮູບເຄິ່ງຄື (L') ຈະເປັນແນວໃດ? (ຕອບ 'ເຕັງກັບ L' ຫຼື 'ຂະໜານກັບ L'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເຄິ່ງເສັ້ນຊື່ Ox ມີຮູບເຄິ່ງຄືແມ່ນເຄິ່ງເສັ້ນຊື່ O'x'. ຖ້າ Ox ຍາວບໍ່ມີຂອບເຂດ, O'x' ຈະມີຄວາມຍາວມີຂອບເຂດ ຫຼື ບໍ່? (ຕອບ 'ມີ' ຫຼື 'ບໍ່ມີ'):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <span key="u19-ans-1-1">{"(1) P (ເພາະຈຸດຕັດກັນຢູ່ເທິງແກນເຄິ່ງຄື ຈະເຄິ່ງຄືໃນຕົວຂອງມັນເອງ ດັ່ງນັ້ນຮູບເຄິ່ງຄືກໍຕັດຢູ່ຈຸດ P)"}</span>,
          <span key="u19-ans-1-2">{"(2) 115, ມຸມຫວา (ເພາະການເຄິ່ງຄືຮັກສາຂະໜາດມຸມ 115° ເຊິ່ງເປັນມຸມຫວາ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u19-ans-2-1">{"(1) 3 (ເພາະໄລຍະຫ່າງຈາກແກນເຄິ່ງຄືແມ່ນເທົ່າກັນ)"}</span>,
          <span key="u19-ans-2-2">{"(2) ຂະໜານກັນ (ເພາະທັງສອງເສັ້ນຂະໜານກັບແກນ d ດັ່ງນັ້ນຈຶ່ງຂະໜານກັນເອງ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u19-ans-t1-1">{"(1) 90 (ເພາະການເຄິ່ງຄືຮັກສາຄຸນລັກສະນະຕັ້ງສາກ ມຸມຈຶ່ງເທົ່າກັບ 90°)"}</span>,
          <span key="u19-ans-t1-2">{"(2) 150 (ເພາະ 75° + 75° = 150°)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u19-ans-s1-1">{"(1) ເຕັງກັບ L (ເພາະທຸກໆເມັດຢູ່ເທິງ L ຢູ່ເທິງແກນເຄິ່ງຄື ດັ່ງນັ້ນຮູບເຄິ່ງຄືກໍເຕັງຢູ່ບ່ອນເກົ່າ)"}</span>,
          <span key="u19-ans-s1-2">{"(2) ບໍ່ມີ (ເພາະການເຄິ່ງຄືຮັກສາຄຸນລັກສະນະຄວາມຍາວທີ່ບໍ່ມີຂອບເຂດ)"}</span>,
        ],
      },
    ],
    advice: "ຢ່າລືມເດີ້! ທຸກໆຮູບເລຂາຄະນິດ (ເສັ້ນຊື່, ມຸມ, ຮູບສາມແຈ) ເມື່ອເຮັດການເຄິ່ງຄືແລ້ວ ຈະຮັກສາຄຸນລັກສະນະທາງເລຂາຄະນິດທຸກຢ່າງ (ຄວາມຍາວ, ຄວາມຂະໜານ, ຄວາມຕັ້ງສາກ ແລະ ຂະໜາດມຸມ) ໄວ້ຄືເກົ່າ!",
  },
};
