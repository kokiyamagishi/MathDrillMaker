import React from "react";
import { UnitData } from "../units2";

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ພາກທີ II - ບົດທີ 14: ການບວກຄວາມຍາວທ່ອນຊື່ ແລະ ການຄູນກັບຈຳນວນໃດໜຶ່ງ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການຄິດໄລ່ບວກຄວາມຍາວຂອງທ່ອນຊື່ທີ່ລຽງກັນຕາມແຖວຊື່ (Segment Addition Postulate) ແລະ ການຄູນຄວາມຍາວທ່ອນຊື່ກັບຈຳນວນຖ້ວນ ຫຼື ເລກສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 101-104",
  subSections: [
    {
      title: "1. ການບວກ ແລະ ລົບຄວາມຍາວທ່ອນຊື່ (Addition and Subtraction of Segments)",
      keyPoint: {
        title: "ຫຼັກການບວກຄວາມຍາວທ່ອນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອສາມເມັດ A, B, C ລຽງກັນຕາມແຖວຊື່ຕາມລຳດັບນີ້ (ເມັດ B ຢູ່ລະຫວ່າງ A ແລະ C):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0" }}>{"AC = AB + BC"}</span>
              <span style={{ fontSize: "1.25rem", color: "#0D47A1" }}>{"ຈາກສູດນີ້ ເຮົາສາມາດຊອກຫາ: AB = AC - BC  ຫຼື  BC = AC - AB"}</span>
            </div>

            <div style={{ padding: "16px", backgroundColor: "#F9F9F9", borderRadius: "8px", border: "1px solid #E0E0E0" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#37474F" }}>{"ຕົວຢ່າງການຄິດໄລ່:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ໃຫ້ AB = 6.7 cm ແລະ BC = 4.6 cm ໂດຍ B ຢູ່ລະຫວ່າງ A ແລະ C. ຈະໄດ້ AC = 6.7 + 4.6 = 11.3 cm."}</li>
                <li>{"ໃຫ້ AC = 8 cm ແລະ AM = 5 cm ໂດຍ M ຢູ່ລະຫວ່າງ A ແລະ C. ຈະໄດ້ MC = 8 - 5 = 3 cm."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂໍ້ຄວນລະວັງ: ຕ້ອງໝັ້ນໃຈວ່າສາມເມັດນັ້ນລຽງແຖວຊື່ດຽວກັນ ຈຶ່ງຈະສາມາດເອົາຄວາມຍາວມາບວກກັນໄດ້ໂດຍກົງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ຈຸດ K ຢູ່ເທິງທ່ອນຊື່ [MN] ໂດຍ MN = 9.5 cm ແລະ MK = 5.6 cm. ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ KN? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: KN ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                <span>{"= "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ຈຸດ A, B, C, D ລຽງກັນຕາມລຳດັບຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ ໂດຍມີ AB = 3 cm, BC = 4 cm ແລະ CD = 5 cm. ຈົ່ງຊອກຫາຄວາມຍາວຂອງ AD? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: AD ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                <span>{"= "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄູນຄວາມຍາວທ່ອນຊື່ກັບຈຳນວນໃດໜຶ່ງ (Multiplication of Segment Lengths)",
      keyPoint: {
        title: "ການຄູນດ້ວຍຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດກຳນົດຄວາມຍາວທ່ອນຊື່ໃໝ່ໂດຍການຄູນຄວາມຍາວທ່ອນຊື່ເກົ່າກັບຈຳນວນ k ໃດໜຶ່ງ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຄູນກັບຈຳນວນຖ້ວນ: "}</strong>{" ຖ້າ AE = 3 × CD ໝາຍຄວາມວ່າ ເຮົາເອົາຄວາມຍາວ CD ມາຕໍ່ກັນ 3 ເທື່ອ."}</li>
              <li><strong>{"ຄູນກັບເລກສ່ວນ: "}</strong>{" ຖ້າ EF = 3/4 ຂອງ AB ໝາຍຄວາມວ່າ ແບ່ງ AB ອອກເປັນ 4 ສ່ວນເທົ່າກັນ ແລ້ວເອົາ 3 ສ່ວນ."}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ກໍລະນີພິເສດ (ເມັດເຄິ່ງກາງ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6" }}>
                {"ຖ້າ M ແມ່ນເມັດເຄິ່ງກາງຂອງ [AB], ເຮົາໄດ້: AM = MB = 1/2 AB (ຫຼື AM = 0.5 × AB), ແລະ AB = 2 × AM."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຄູນຄວາມຍາວແມ່ນໃຊ້ວິທີດຽວກັນກັບການຄູນຕົວເລກທຳມະດາເລີຍ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ທ່ອນຊື່ AB ຍາວ 6 cm. ຖ້າສ້າງທ່ອນຊື່ CD ໃຫ້ມີຄວາມຍາວເທົ່າກັບ 3 ເທື່ອຂອງ AB, ຄວາມຍາວຂອງ CD ຈະເທົ່າກັບຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: CD ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ທ່ອນຊື່ AB ຍາວ 12 cm. ຖ້າສ້າງທ່ອນຊື່ EF ໃຫ້ມີຄວາມຍາວເທົ່າກັບ 3/4 ຂອງ AB, ຄວາມຍາວຂອງ EF ຈະເທົ່າກັບຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: EF ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                <span>{"= "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
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
              {"ໂຈດການພົວພັນຄວາມຍາວທ່ອນຊື່ (ລະດັບສູງ): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຈຸດ A, B, C, D, E, F ລຽງກັນຕາມລຳດັບຢູ່ເທິງເສັ້ນຊື່ d ໂດຍຮູ້ວ່າ AB = CD = DE = 2.8 cm, AF = 10.2 cm ແລະ BC = EF. ຈົ່ງຊອກຫາຄວາມຍາວຂອງ BC?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: BC ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການປຽບທຽບຄວາມຍາວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ 1 ຟຸດ (foot) = 12 ນິ້ວ (inches). ຖ້າທ່ອນຊື່ AB ຍາວ 18 ນິ້ວ ແລະ ທ່ອນຊື່ CD ຍາວ 1.5 ຟຸດ. ຖາມວ່າ AB ຈະ ຍາວກວ່າ, ສັ້ນກວ່າ ຫຼື ເທົ່າກັບ CD?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: AB"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
              <span>{"CD"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ຊອກຫາຄວາມຍາວທັງໝົດທີ່ຮູ້ກ່ອນ: AB + CD + DE = 2.8 + 2.8 + 2.8 = 8.4 cm. ຈາກນັ້ນ BC + EF = AF - 8.4 = 10.2 - 8.4 = 1.8 cm. ເນື່ອງຈາກ BC = EF, ດັ່ງນັ້ນ BC = 1.8 / 2 = 0.9 cm!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດກ່ຽວກັບຈຸດເຄິ່ງກາງຫຼາຍຈຸດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ທ່ອນຊື່ AB ຍາວ 16 cm. ຖ້າ M ແມ່ນເມັດເຄິ່ງກາງຂອງ [AB], ແລະ N ແມ່ນເມັດເຄິ່ງກາງຂອງ [AM]. ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ AN ແລະ NB?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- AN ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- NB ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ໂຈດຄິດໄລ່ຄວາມຍາວອ້ອມຮອບຮູບ (Perimeter): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຮູບສາມແຈ ABC ທີ່ມີຂ້າງ AB = 5 cm, BC = 7 cm, ແລະ AC = 6 cm. ຖ້າເຮົາສ້າງຮູບສາມແຈໃໝ່ A′B′C′ ໃຫ້ແຕ່ລະຂ້າງມີຄວາມຍາວເປັນ 2.5 ເທື່ອຂອງຂ້າງເດີມ. ຈົ່ງຊອກຫາລວມຄວາມຍາວອ້ອມຮອບຂອງຮູບສາມແຈ A′B′C′?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລວມຄວາມຍາວອ້ອມຮອບແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            <span>{"cm."}</span>
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
          <span key="1-1">{"MN - MK = 9.5 - 5.6"}</span>,
          <span key="1-2">{"3.9"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"AB + BC + CD = 3 + 4 + 5"}</span>,
          <span key="2-2">{"12"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"18 (ເນື່ອງຈາກ 3 × 6 = 18)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"12 × 3/4"}</span>,
          <span key="4-2">{"9"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0.9 (ຄິດໄລ່: 10.2 - 3 × 2.8 = 1.8; BC = 1.8 / 2 = 0.9 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"ເທົ່າກັບ (ເນື່ອງຈາກ 1.5 ຟຸດ = 1.5 × 12 = 18 ນິ້ວ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- AN = 4 cm (AM = 16/2 = 8, AN = 8/2 = 4)"}</span>,
          <span key="s1-2">{"- NB = 12 cm (NB = NM + MB = 4 + 8 = 12)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"45 (ລວມຄວາມຍາວອ້ອມຮອບເກົ່າ = 5 + 7 + 6 = 18 cm, ໃໝ່ = 18 × 2.5 = 45 cm)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! การຄິດໄລ່ບວກຄວາມຍາວ ແລະ ຄູນຄວາມຍາວທ່ອນຊື່ ແມ່ນພື້ນຖານສຳຄັນຂອງເລຂາຄະນິດໃນການຫາລວມຂ້າງ ແລະ ໄລຍະຫ່າງ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
