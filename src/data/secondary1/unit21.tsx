import React from "react";
import { UnitData } from "../units2";

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພາກທີ III - ບົດທີ 21: ມາດຕາສ່ວນ (Scale)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງມາດຕາສ່ວນ, ມາດຕາສ່ວນຫຍໍ້ (Reduction Scale), ມາດຕາສ່ວນຂະຫຍາຍ (Enlargement Scale) ແລະ ການປ່ຽນແປງຄິດໄລ່ໄລຍະທາງຕົວຈິງກັບໄລຍະທາງໃນແຜນຜັງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 168-172",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງມາດຕາສ່ວນ (Concept of Scale)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ມາດຕາສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມາດຕາສ່ວນ ແມ່ນອັດຕາສ່ວນລະຫວ່າງ ໄລຍະທາງໃນແຜນຜັງ (ຫຼື ແຜນວາດ) ກັບ ໄລຍະທາງຕົວຈິງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0" }}>{"ມາດຕາສ່ວນ = ໄລຍະທາງໃນຮູບແຕ້ມ / ໄລຍະທາງຕົວຈິງ"}</span>
              <span style={{ fontSize: "1.25rem", color: "#0D47A1" }}>{"*ໝາຍເຫດ: ທັງສອງໄລຍະທາງຕ້ອງຄິດໄລ່ໃນຫົວໜ່ວຍດຽວກັນສະເໝີ (ເຊັ່ນ: ປ່ຽນເປັນ cm ທັງໝົດ)"}</span>
            </div>

            <div style={{ padding: "16px", backgroundColor: "#F9F9F9", borderRadius: "8px", border: "1px solid #E0E0E0" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#37474F" }}>{"ປະເພດຂອງມາດຕາສ່ວນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li><strong>{"ມາດຕາສ່ວນຫຍໍ້: "}</strong>{" ເຊັ່ນ: 1/100, 1:5,000... (ຄ່າຂອງມັນນ້ອຍກວ່າ 1). ໃຊ້ເພື່ອຍໍ້ຂະໜາດຕົວຈິງໃຫ້ມີຂະໜາດນ້ອຍລົງໃນເຈ້ຍ."}</li>
                <li><strong>{"ມາດຕາສ່ວນຂະຫຍາຍ: "}</strong>{" ເຊັ່ນ: 5/1, 10:1... (ຄ່າຂອງມັນໃຫຍ່ກວ່າ 1). ໃຊ້ເພື່ອຂະຫຍາຍວັດຖຸຂະໜາດນ້ອຍ (ເຊັ່ນ: ຈຸລັງ, ແມງໄມ້) ໃຫ້ເຫັນຊັດເຈນ."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີຈື່: 1:5,000 ໝາຍຄວາມວ່າ 1 cm ໃນແຜນຜັງ ຈະເທົ່າກັບ 5,000 cm (ຫຼື 50 m) ໃນໄລຍະທາງຕົວຈິງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຕົວເລກ ຫຼື ມາດຕາສ່ວນທີ່ຖືກຕ້ອງໃສ່ຕາຕະລາງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold", flexShrink: 0 }}>{"(1)"}</span>
                  <span>{"ໄລຍະທາງຕົວຈິງ 200 m (20,000 cm), ໄລຍະທາງໃນແຜນຜັງ 2 cm. ມາດຕາສ່ວນແມ່ນ 1:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold", flexShrink: 0 }}>{"(2)"}</span>
                  <span>{"ໄລຍະທາງຕົວຈິງ 12 m (1,200 cm), ມາດຕາສ່ວນ 1:100. ໄລຍະທາງໃນແຜນຜັງແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"cm"}</span>
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
                {"ໃນແຜນຜັງຫ້ອງການໜຶ່ງມີມາດຕາສ່ວນຂະຫຍາຍແມ່ນ 5:1. ຖ້າໄລຍະທາງໃນຮູບແຕ້ມຂອງອົງປະກອບເຄື່ອງຈັກແມ່ນ 15 cm, ໄລຍະທາງຕົວຈິງຂອງມັນຈະມີຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະທາງຕົວຈິງ = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ໄລຍະທາງຕົວຈິງ ແລະ ໄລຍະທາງໃນແຜນຜັງ (Scale Calculations)",
      keyPoint: {
        title: "ວິທີການປ່ຽນແປງຄິດໄລ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີຫຼັກການຄິດໄລ່ພື້ນຖານດັ່ງນີ້:"}
            </p>
             <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
                <li style={{ marginBottom: "8px" }}>
                  <strong>{"ຊອກຫາໄລຍະທາງຕົວຈິງ:"}</strong>
                  <div style={{ paddingLeft: "16px", whiteSpace: "nowrap" }}>{"ໄລຍະທາງຕົວຈິງ = ໄລຍະທາງໃນແຜນຜັງ × ສ່ວນສ່ວນ (ຕົວຫານ) ຂອງມາດຕາສ່ວນ."}</div>
                </li>
                <li>
                  <strong>{"ຊອກຫາໄລຍະທາງໃນແຜນຜັງ:"}</strong>
                  <div style={{ paddingLeft: "16px", whiteSpace: "nowrap" }}>{"ໄລຍະທາງໃນແຜນຜັງ = ໄລຍະທາງຕົວຈິງ / ສ່ວນສ່ວນ (ຕົວຫານ) ຂອງມາດຕາສ່ວນ."}</div>
                </li>
              </ul>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມປ່ຽນຫົວໜ່ວຍຈາກ cm ເປັນ m (ຫານໃຫ້ 100) ຫຼື ເປັນ km (ຫານໃຫ້ 100,000) ຫຼັງຈາກໄດ້ຄຳຕອບຕົວຈິງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມັດ A ແລະ B ແມ່ນ 100 km. ຖ້າແຕ້ມໃສ່ແຜນທີ່ທີ່ມີມາດຕາສ່ວນ 1:2,000,000, ໄລຍະຫ່າງລະຫວ່າງ A ແລະ B ໃນແຜນທີ່ ຈະຍາວຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະໃນແຜນທີ່ = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"cm"}</span>
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
                {"ໃນແຜນຜັງທີ່ມີມາດຕາສ່ວນ 1:5,000. ຖ້າວັດແທກໄລຍະຫ່າງຂອງສອງສະຖານທີ່ໄດ້ 8 cm, ໄລຍະຫ່າງຕົວຈິງຂອງສອງສະຖານທີ່ນັ້ນຈະມີຈັກ m? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະຕົວຈິງ (m) = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"m"}</span>
                </div>
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
              {"ໂຈດການຊອກຫາຂະໜາດໃນເຈ້ຍແຕ້ມຮູບ (Scale Selection): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕ້ອງການແຕ້ມແຜນຜັງສະໜາມບິນທີ່ມີຄວາມຍາວຕົວຈິງ AB = 800 m ໃສ່ປຶ້ມຂຽນຂອງນັກຮຽນ. ຖ້ານັກຮຽນເລືອກມາດຕາສ່ວນ 1:4,000, ຖາມວ່າຄວາມຍາວ AB ໃນປຶ້ມຂຽນຈະຍາວຈັກ cm? ແລະ ມັນເໝາະສົມທີ່ຈະແຕ້ມໃສ່ເຈ້ຍປຶ້ມຂຽນທີ່ມີຄວາມຍາວປະມານ 20 cm ຫຼື ບໍ່? (ຕອບ: 'ເໝາະສົມ' ຫຼື 'ບໍ່ເໝາະສົມ')"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຄວາມຍາວໃນເຈ້ຍ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຄວາມເໝາະສົມແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
              {"ໂຈດການຊອກຫາໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມືອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໄລຍະຫ່າງລະຫວ່າງເມືອງ A ແລະ ເມືອງ B ໃນແຜນຜັງທີ່ມີມາດຕາສ່ວນ 1:5,000,000 ແມ່ນ 8.4 cm. ຈົ່ງຊອກຫາໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມືອງນີ້ມີຈັກ km?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໄລຍະທາງຕົວຈິງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"km."}</span>
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
            {"ໂຈດການແຕ້ມຮູບຫຍໍ້ກະດານດຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ກະດານດຳແຜ່ນໜຶ່ງມີຄວາມຍາວຕົວຈິງ 4 m ແລະ ຄວາມກວ້າງ 2 m. ຖ້າຢາກແຕ້ມໃສ່ປຶ້ມຂຽນໂດຍໃຫ້ຄວາມຍາວຂອງມັນເທົ່າກັບ 10 cm, ເຮົາຈະຕ້ອງໃຊ້ມາດຕາສ່ວນເທົ່າໃດ? ແລະ ຄວາມກວ້າງຂອງກະດານໃນຮູບແຕ້ມຈະມີຈັກ cm?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມາດຕາສ່ວນແມ່ນ 1:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຄວາມກວ້າງໃນຮູບແຕ້ມ ="}</span>
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
            {"ໂຈດຄິດໄລ່ມຸມ ແລະ ຂະໜາດໃນຮູບຂະຫຍາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈ ABC ທີ່ມີສາມຂ້າງແມ່ນ 3 cm, 4 cm, 5 cm. ເຮົາຂະຫຍາຍຮູບສາມແຈນີ້ດ້ວຍມາດຕາສ່ວນ 2:1 (ຂະຫຍາຍເປັນ 2 ເທື່ອ). ຖາມວ່າ ຮູບສາມແຈໃໝ່ທີ່ໄດ້ຈະເປັນຮູບສາມແຈຊະນິດໃດ? ແລະ ຂ້າງທີ່ຍາວທີ່ສຸດຂອງຮູບສາມແຈໃໝ່ຈະມີຈັກ cm?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ເປັນຮູບສາມແຈ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຂ້າງຍາວທີ່ສຸດ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
          <span key="1-1">{"10000 (ຄິດໄລ່: 2 / 20000 = 1/10000)"}</span>,
          <span key="1-2">{"12 (ຄິດໄລ່: 1200 / 100 = 12)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"15 / 5"}</span>,
          <span key="2-2">{"3"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"10000000 / 2000000"}</span>,
          <span key="3-2">{"5"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"8 × 5000 / 100"}</span>,
          <span key="4-2">{"400"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"20"}</span>,
          <span key="c1-2">{"ບໍ່ເໝາະສົມ (ເພາະຍາວເທົ່າກັບເຈ້ຍພໍດີ, ບໍ່ມີຂອບແຕ້ມ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"420 (ຄິດໄລ່: 8.4 × 5,000,000 = 42,000,000 cm = 420 km)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- ມາດຕາສ່ວນແມ່ນ 1:40 (10 / 400 = 1/40)"}</span>,
          <span key="s1-2">{"- ຄວາມກວ້າງໃນຮູບແຕ້ມ = 5 cm (200 / 40 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2-1">{"- ເປັນຮູບສາມແຈສາກ (ເນື່ອງຈາກ 3² + 4² = 5²)"}</span>,
          <span key="s2-2">{"- ຂ້າງຍາວທີ່ສຸດ = 10 cm (5 × 2 = 10)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ຄວາມເຂົ້າໃຈເລື່ອງມາດຕາສ່ວນ ຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈແຜນທີ່, ແຜນຜັງອາຄານ, ແລະ ການຫຍໍ້-ຂະຫຍາຍຮູບພາບໄດ້ຢ່າງຖືກຕ້ອງ. ພະຍາຍາມຕໍ່ໄປ!"
  }
};
