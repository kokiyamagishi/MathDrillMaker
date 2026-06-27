import React from "react";
import { UnitData } from "../units2";

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ພາກທີ II - ບົດທີ 11: ຄວາມສຳນຶກກ່ຽວກັບເມັດ ແລະ ເສັ້ນຊື່",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳນຶກພື້ນຖານຂອງເລຂາຄະນິດ: ເມັດ (Point), ເສັ້ນຊື່ (Line), ທ່ອນຊື່ (Segment), ເຄິ່ງເສັ້ນຊື່ (Ray) ແລະ ເຄື່ອງໝາຍການເປັນອົງປະກອບ (∈, ∉)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 81-85",
  subSections: [
    {
      title: "1. ເມັດ ແລະ ເສັ້ນຊື່ (Points and Lines)",
      keyPoint: {
        title: "ຄວາມສຳນຶກກ່ຽວກັບເມັດ ແລະ ເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນວິຊາເລຂາຄະນິດ, ເຮົາມີຄວາມສຳນຶກພື້ນຖານດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ເມັດ (Point): "}</strong>{" ບໍ່ມີຂະໜາດ, ໝາຍດ້ວຍຈຸດ ແລະ ສັນຍະລັກດ້ວຍຕົວອັກສອນໃຫຍ່ ເຊັ່ນ: A, B, C, D..."}</li>
              <li><strong>{"ເສັ້ນຊື່ (Line): "}</strong>{" ແມ່ນກຸ່ມຂອງບັນດາເມັດທີ່ລຽງກັນຕາມແຖວຊື່ຢ່າງບໍ່ສິ້ນສຸດ. ເຮົາສັນຍະລັກດ້ວຍຕົວອັກສອນນ້ອຍ ເຊັ່ນ: a, b, c, d... ຫຼື ຖ້າຜ່ານສອງເມັດ A ແລະ B ແມ່ນຂຽນ (AB)"}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#F9F9F9", borderRadius: "8px", border: "1px solid #E0E0E0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#37474F" }}>{"ຫຼັກເກົ່າທີ່ສຳຄັນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ຜ່ານ 1 ເມັດ, ເຮົາສາມາດສ້າງເສັ້ນຊື່ໄດ້ຢ່າງບໍ່ສິ້ນສຸດ (ມີຫຼາກຫຼາຍເສັ້ນຊື່)"}</li>
                <li>{"ຜ່ານ 2 ເມັດທີ່ຕ່າງກັນ, ເຮົາສາມາດສ້າງເສັ້ນຊື່ໄດ້ພຽງເສັ້ນດຽວເທົ່ານັ້ນ"}</li>
                <li>{"ສອງເສັ້ນຊື່ທີ່ຕ່າງກັນ ຕັດກັນໄດ້ພຽງເມັດດຽວເທົ່ານັ້ນ"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂໍ້ຄວນຈື່: ເມັດບໍ່ມີຂະໜາດ ແລະ ເສັ້ນຊື່ບໍ່ມີຂອບເຂດຄວາມຍາວ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຄຳສັບ ຫຼື ຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜ່ານສອງເມັດ A ແລະ B ທີ່ຕ່າງກັນ, ເຮົາສາມາດຂີດເສັ້ນຊື່ໄດ້ທັງໝົດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ເສັ້ນ."}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຜ່ານໜຶ່ງເມັດ O, ເຮົາສາມາດຂີດເສັ້ນຊື່ໄດ້"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ເສັ້ນ."}</span>
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
                {"ຖ້າສອງເສັ້ນຊື່ຕັດກັນ, ພວກມັນມີເມັດຮ່ວມກັນ (ເມັດຕັດກັນ) ໄດ້ຫຼາຍທີ່ສຸດຈັກເມັດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: ມີໄດ້ຫຼາຍທີ່ສຸດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ເມັດ."}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ທ່ອນຊື່ ແລະ ເຄິ່ງເສັ້ນຊື່ (Segments and Rays)",
      keyPoint: {
        title: "ຄວາມແຕກຕ່າງລະຫວ່າງທ່ອນຊື່ ແລະ ເຄິ່ງເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີການຈຳແນກສັນຍະລັກ ແລະ ຮູບຮ່າງເລຂາຄະນິດດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ທ່ອນຊື່ [AB]: "}</strong>{" ແມ່ນສ່ວນໜຶ່ງຂອງເສັ້ນຊື່ (AB) ທີ່ຈຳກັດດ້ວຍສອງເມັດ A ແລະ B (ເອີ້ນວ່າ ສົ້ນ). ເຮົາສາມາດວັດແທກຄວາມຍາວໄດ້, ສັນຍະລັກຄວາມຍາວແມ່ນ AB."}</li>
              <li><strong>{"ເຄິ່ງເສັ້ນຊື່ [Ax) ຫຼື [Ay): "}</strong>{" ແມ່ນສ່ວນໜຶ່ງຂອງເສັ້ນຊື່ ທີ່ມີເມັດເຄົ້າ A (ຈຸດເລີ່ມຕົ້ນ) ແຕ່ແກ່ຍາວອອກໄປທາງເບື້ອງ x ຫຼື y ຢ່າງບໍ່ມີຂອບເຂດ."}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕາຕະລາງສັງລວມສັນຍະລັກ:"}</span>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.20rem", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #E65100" }}>
                    <th style={{ padding: "8px" }}>{"ສັນຍະລັກ"}</th>
                    <th style={{ padding: "8px" }}>{"ວິທີອ່ານ"}</th>
                    <th style={{ padding: "8px" }}>{"ລັກສະນະຂອບເຂດ"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #FFE0B2" }}>
                    <td style={{ padding: "8px", fontFamily: "monospace", fontWeight: "bold" }}>{"(AB)"}</td>
                    <td style={{ padding: "8px" }}>{"ເສັ້ນຊື່ AB"}</td>
                    <td style={{ padding: "8px" }}>{"ບໍ່ຈຳກັດທັງສອງສົ້ນ"}</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #FFE0B2" }}>
                    <td style={{ padding: "8px", fontFamily: "monospace", fontWeight: "bold" }}>{"[AB]"}</td>
                    <td style={{ padding: "8px" }}>{"ທ່ອນຊື່ AB"}</td>
                    <td style={{ padding: "8px" }}>{"ຈຳກັດທັງສອງສົ້ນ (A ແລະ B)"}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px", fontFamily: "monospace", fontWeight: "bold" }}>{"[Ax)"}</td>
                    <td style={{ padding: "8px" }}>{"ເຄິ່ງເສັ້ນຊື່ Ax"}</td>
                    <td style={{ padding: "8px" }}>{"ຈຳກັດຢູ່ສົ້ນ A, ບໍ່ຈຳກັດຢູ່ສົ້ນ x"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        hint: {
          text: "💡 [AB] ຈະມີວົງຂໍສອງເບື້ອງໝາຍເຖິງຖືກປິດ (ຈຳກັດ), ສ່ວນ (AB) ແມ່ນວົງເລັບໝາຍເຖິງເປີດ (ບໍ່ຈຳກັດ)!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຈັບຄູ່ສັນຍະລັກກັບຄວາມໝາຍໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສັນຍະລັກຂອງ \"ທ່ອນຊື່ CD\" ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສັນຍະລັກຂອງ \"ເຄິ່ງເສັ້ນຊື່ Cx\" ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
                {"ໃຫ້ຈຸດ A, B, C ລຽງກັນຕາມລຳດັບຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ ໂດຍມີ AB = 4 cm ແລະ BC = 3 cm. ຄວາມຍາວຂອງທ່ອນຊື່ AC ຈະມີຄ່າເທົ່າໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: AC = "}</span>
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
              {"ໂຈດບັນຫາການນຳໃຊ້ສັນຍະລັກອົງປະກອບ (∈, ∉): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ເສັ້ນຊື່ d ທີ່ມີ 3 ເມັດ A, B, C ນອນຢູ່ເທິງເສັ້ນຊື່ ແລະ ມີເມັດ D ຢູ່ນອກເສັ້ນຊື່ d. ຈົ່ງຕື່ມເຄື່ອງໝາຍ "}<strong>{"∈"}</strong>{" ຫຼື "}<strong>{"∉"}</strong>{" ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ:"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"(1) A"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"d"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"(2) D"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"d"}</span>
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
              {"ໂຈດບັນຫາການນັບເສັ້ນຊື່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ 3 ເມັດ A, B, C ທີ່ບໍ່ລຽງແຖວຊື່ດຽວກັນ (ບໍ່ຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ). ຖາມວ່າເຮົາສາມາດຂີດເສັ້ນຊື່ຜ່ານສອງເມັດໃດໜຶ່ງໄດ້ທັງໝົດຈັກເສັ້ນຊື່?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ສາມາດຂີດໄດ້ທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"ເສັ້ນ."}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ເຄື່ອງໝາຍ ∈ ໝາຍເຖິງ 'ເປັນອົງປະກອບຂອງ' (ນອນຢູ່ເທິງ) ແລະ ∉ ໝາຍເຖິງ 'ບໍ່ເປັນອົງປະກອບຂອງ' (ບໍ່ນອນຢູ່ເທິງ)"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດກ່ຽວກັບເມັດເຄິ່ງກາງ (Midpoint): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ທ່ອນຊື່ [AB] ຍາວ 10 cm. ຖ້າ M ແມ່ນເມັດເຄິ່ງກາງຂອງທ່ອນຊື່ [AB], ຄວາມຍາວຂອງທ່ອນຊື່ [AM] ຈະເທົ່າກັບຈັກ cm?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: AM ="}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການນັບເສັ້ນຊື່ລະດັບສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ 4 ເມັດ A, B, C, D ທີ່ບໍ່ມີ 3 ເມັດໃດລຽງແຖວຊື່ດຽວກັນ. ຖາມວ່າເຮົາສາມາດຂີດເສັ້ນຊື່ຜ່ານສອງເມັດໃດໜຶ່ງໄດ້ທັງໝົດຈັກເສັ້ນຊື່?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ສາມາດຂີດໄດ້"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ເສັ້ນ."}</span>
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
          <span key="1-1">{"(1) 1 (ຫຼື 1 ເສັ້ນ)"}</span>,
          <span key="1-2">{"(2) ບໍ່ສິ້ນສຸດ (ຫຼື ຫຼາຍເສັ້ນ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"1 (ສອງເສັ້ນຊື່ຕັດກັນໄດ້ຫຼາຍທີ່ສຸດພຽງເມັດດຽວ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) [CD]"}</span>,
          <span key="3-2">{"(2) [Cx)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"7 (ເນື່ອງຈາກ AB + BC = 4 + 3 = 7)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"(1) ∈"}</span>,
          <span key="c1-2">{"(2) ∉"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"3 (ເສັ້ນຊື່ AB, BC, ແລະ AC)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"5 (ເນື່ອງຈາກ M ແມ່ນເມັດເຄິ່ງກາງ, AM = AB / 2 = 10 / 2 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"6 (ເສັ້ນຊື່ AB, AC, AD, BC, BD, CD)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ຄວາມເຂົ້າໃຈເລື້ອງເມັດ, ເສັ້ນຊື່, ທ່ອນຊື່ ແລະ ເຄິ່ງເສັ້ນຊື່ ເປັນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດຂອງວິຊາເລຂາຄະນິດ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
