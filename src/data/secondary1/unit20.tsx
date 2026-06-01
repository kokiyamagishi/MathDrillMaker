import React from "react";
import { UnitData } from "../units2";

export const unit20Data: UnitData = {
  unitNumber: 20,
  unitTitle: "ພາກທີ II - ບົດທີ 20: ແກນເຄິ່ງຄືຂອງຮູບ, ເສັ້ນກາງສາກ, ເສັ້ນແບ່ງເຄິ່ງມຸມ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄວາມໝາຍຂອງແກນເຄິ່ງຄື, ເສັ້ນກາງສາກຂອງທ່ອນຊື່, ເສັ້ນແບ່ງເຄິ່ງມຸມ ແລະ ຄຸນລັກສະນະທາງເລຂາຄະນິດທີ່ສຳຄັນຂອງພວກມັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 20 ໜ້າ 135-141",
  subSections: [
    {
      title: "1. ເສັ້ນກາງສາກຂອງທ່ອນຊື່ (Perpendicular Bisector)",
      keyPoint: {
      title: "1. ເສັ້ນກາງສາກຂອງທ່ອນຊື່ (Perpendicular Bisector)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເສັ້ນກາງສາກຂອງທ່ອນຊື່ AB ແມ່ນເສັ້ນຊື່ທີ່ຕັ້ງສາກກັບ AB ຢູ່ຈຸດເຄິ່ງກາງຂອງ AB:"}
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
            <div>{"• ມັນແບ່ງທ່ອນຊື່ AB ອອກເປັນສອງສ່ວນເທົ່າກັນ (AI = IB)."}</div>
            <div>{"• ມັນຕັ້ງສາກກັບ AB ຢູ່ຈຸດ I (ມຸມ 90°)."}</div>
            <div style={{ color: "#0D47A1", fontWeight: "bold" }}>
              {"• ຄຸນລັກສະນະສຳຄັນ: ທຸກໆເມັດ M ທີ່ຢູ່ເທິງເສັ້ນກາງສາກ ຈະຢູ່ຫ່າງຈາກສອງສົ້ນ A ແລະ B ເທົ່າກັນ (MA = MB)."}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ເສັ້ນກາງສາກຍັງເປັນແກນເຄິ່ງຄືຂອງທ່ອນຊື່ AB ອີກດ້ວຍເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຊອກຫາຄວາມຍາວ ແລະ ມຸມໂດຍອີງໃສ່ຄຸນລັກສະນະ: "}{" "}
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
              <span>{"(1) ເສັ້ນຊື່ (d) ແມ່ນເສັ້ນກາງສາກຂອງທ່ອນຊື່ AB ຍາວ 10 cm. ຖ້າ (d) ຕັດ AB ຢູ່ຈຸດ I, ທ່ອນຊື່ AI ຈະຍາວຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ເສັ້ນເຄິ່ງຊື່ Oz ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ xOy ທີ່ມີຂະໜາດ 80°. ມຸມ xOz ຈະມີຂະໜາດຈັກອົງສາ?:"}</span>
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
      title: "2. ເສັ້ນແບ່ງເຄິ່ງມຸມ (Angle Bisector)",
      keyPoint: {
      title: "2. ເສັ້ນແບ່ງເຄິ່ງມຸມ (Angle Bisector)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເສັ້ນແບ່ງເຄິ່ງມຸມ ແມ່ນເສັ້ນເຄິ່ງຊື່ທີ່ແບ່ງມຸມໜຶ່ງອອກເປັນສອງມຸມນ້ອຍທີ່ມີຂະໜາດເທົ່າກັນ:"}
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
            <div>{"• ຖ້າເສັ້ນເຄິ່ງຊື່ Oz ແບ່ງເຄິ່ງມຸມ xOy, ຈະໄດ້ ມຸມ xOz = ມຸມ zOy."}</div>
            <div style={{ color: "#2E7D32", paddingLeft: "16px" }}>
              {"• ຕົວຢ່າງ: ຖ້າມຸມ xOy = 60° → ມຸມ xOz = ມຸມ zOy = 30°"}
            </div>
            <div style={{ color: "#2E7D32", fontWeight: "bold" }}>
              {"• ທຸກໆເມັດ M ຢູ່ເທິງເສັ້ນແບ່ງເຄິ່ງມຸມ ຈະຢູ່ຫ່າງຈາກສອງຂ້າງຂອງມຸມເທົ່າກັນ."}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເສັ້ນແບ່ງເຄິ່ງມຸມແມ່ນແກນເຄິ່ງຄືຂອງມຸມນັ້ນໆສະເໝີ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງພິຈາລະນາໄລຍະຫ່າງ ແລະ ແກນເຄິ່ງຄື: "}{" "}
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
              <span>{"(1) ເມັດ M ຢູ່ເທິງເສັ້ນກາງສາກຂອງ AB. ຖ້າ MA = 7 cm, ຄວາມຍາວຂອງ MB ຈະເທົ່າກັບຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຮູບວົງມົນໜຶ່ງມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ? (ຕອບເປັນຄຳສັບ ເຊັ່ນ 'ບໍ່ມີສິ້ນສຸດ' ຫຼື ລະບຸຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ຖ້າຮູ້ມຸມແບ່ງເຄິ່ງໜຶ່ງ, ມຸມໃຫຍ່ຈະເທົ່າກັບ 2 ເທົ່າຂອງມຸມນັ້ນ. ບົດທ້າທາຍ 2: ສາມແຈທ່ຽງມີເສັ້ນກາງສາກຂອງພື້ນເປັນແກນເຄິ່ງຄື.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບສູງທາງເລຂາຄະນິດ: "}{" "}
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
                <span>{"(1) ເສັ້ນເຄິ່ງຊື່ Om ແບ່ງເຄິ່ງມຸມ aOb. ຖ້າຮູ້ມຸມ aOm = 35°, ມຸມໃຫຍ່ aOb ຈະມີຂະໜາດຈັກອົງສາ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຮູບສາມແຈສະເໝີໜຶ່ງມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ເສັ້ນ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດທົດສອບປະສົມ: "}{" "}
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
              <span>{"(1) ຖ້າທ່ອນຊື່ AB ຍາວ 12 cm. ເສັ້ນກາງສາກ (d) ຕັດ AB ຢູ່ I. ເມັດ M ຢູ່ເທິງ (d) ຫ່າງຈາກ I ເປັນ 4 cm. ຖ້າ MA = 5 cm, ຖາມວ່າ MB ຍາວຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຮູບສີ່ແຈສາກໜຶ່ງມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ເສັ້ນ"}</span>
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
          <span key="u20-ans-1-1">{"(1) 5 (ເພາະເສັ້ນກາງສາກຕັດເຄິ່ງກາງທ່ອນຊື່ AI = AB ÷ 2 = 10 ÷ 2 = 5 cm)"}</span>,
          <span key="u20-ans-1-2">{"(2) 40 (ເພາະເສັ້ນແບ່ງເຄິ່ງມຸມແບ່ງມຸມອອກເປັນສອງສ່ວນເທົ່າກັນ 80° ÷ 2 = 40°)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u20-ans-2-1">{"(1) 7 (ເພາະທຸກເມັດເທິງເສັ້ນກາງສາກ ຈະຢູ່ຫ່າງຈາກສອງສົ້ນ A ແລະ B ເທົ່າກັນ MB = MA = 7 cm)"}</span>,
          <span key="u20-ans-2-2">{"(2) ບໍ່ມີສິ້ນສຸດ (ເພາະທຸກໆເສັ້ນຜ່ານກາງຂອງວົງມົນລ້ວນແຕ່ແມ່ນແກນເຄິ່ງຄື)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u20-ans-t1-1">{"(1) 70 (ເພາະ Om ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ ດັ່ງນັ້ນ ມຸມໃຫຍ່ aOb = 35° × 2 = 70°)"}</span>,
          <span key="u20-ans-t1-2">{"(2) 3 (ເພາະຮູບສາມແຈສະເໝີມີ 3 ແກນເຄິ່ງຄື ທີ່ແລ່ນຜ່ານຈຸດຈອມແລະຈຸດເຄິ່ງກາງຂອງຂ້າງກົງກັນຂ້າມ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u20-ans-s1-1">{"(1) 5 (ເພາະ M ຢູ່ເທິງເສັ້ນກາງສາກ ດັ່ງນັ້ນ MB = MA = 5 cm ໂດຍບໍ່ຂຶ້ນກັບໄລຍະຫ່າງ MI)"}</span>,
          <span key="u20-ans-s1-2">{"(2) 2 (ຮູບສີ່ແຈສາກມີ 2 ແກນເຄິ່ງຄື ທີ່ແລ່ນຜ່ານຈຸດເຄິ່ງກາງຂອງສອງຂ້າງເຊິ່ງໜ້າກັນ)"}</span>,
        ],
      },
    ],
    advice: "ເສັ້ນກາງສາກ ແລະ ເສັ້ນແບ່ງເຄິ່ງມຸມ ມີຄຸນປະໂຫຍດຫຼາຍໃນການແຕ້ມຮູບເລຂາຄະນິດ ແລະ ການແກ້ໂຈດ ເພາະມັນສ້າງຄວາມເທົ່າກັນ ແລະ ຄວາມສົມດຸນໃຫ້ກັບຮູບສະເໝີເດີ້!",
  },
};
