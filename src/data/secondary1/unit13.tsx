import React from "react";
import { UnitData } from "../units2";

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ພາກທີ II - ບົດທີ 13: ການແຕ້ມເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກດ້ວຍວົງວຽນ",
  unitGoal: "ຮຽນຮູ້ວິທີການສ້າງເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ ໂດຍການນຳໃຊ້ວົງວຽນ (Compass) ແລະ ບັນທັດ (Ruler) ຕາມຂັ້ນຕອນເລຂາຄະນິດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 94-98",
  subSections: [
    {
      title: "1. ການສ້າງເສັ້ນຊື່ຂະໜານດ້ວຍວົງວຽນ (Constructing Parallel Lines)",
      keyPoint: {
        title: "ຂັ້ນຕອນການສ້າງເສັ້ນຊື່ຂະໜານຜ່ານເມັດໜຶ່ງນອກເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອສ້າງເສັ້ນຊື່ d′ ຜ່ານເມັດ A ແລະ ຂະໜານກັບເສັ້ນຊື່ d ທີ່ໃຫ້ກ່ອນ ໂດຍໃຊ້ວົງວຽນ, ເຮົາປະຕິບັດດັ່ງນີ້:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"ວາງສອງເມັດ B ແລະ C ທີ່ຕ່າງກັນຢູ່ເທິງເສັ້ນຊື່ d."}</li>
              <li>{"ແຕ້ມສ່ວນໂຄ້ງມົນທີ່ມີຈຸດສູນກາງຢູ່ C ແລະ ມີລັດສະໝີເທົ່າກັບ AB."}</li>
              <li>{"ແຕ້ມສ່ວນໂຄ້ງມົນທີ່ມີຈຸດສູນກາງຢູ່ A ແລະ ມີລັດສະໝີເທົ່າກັບ BC."}</li>
              <li>{"ສອງສ່ວນໂຄ້ງມົນຕັດກັນຢູ່ເມັດ D. ຂີດເສັ້ນຊື່ຜ່ານ A ແລະ D. ເຮົາຈະໄດ້ເສັ້ນຊື່ (AD) ຂະໜານກັບ d."}</li>
            </ol>
            <p style={{ fontSize: "1.25rem", margin: 0, color: "#1E88E5", fontStyle: "italic" }}>
              {"*ເນື່ອງຈາກຂ້າງກົງກັນຂ້າມ AB = CD ແລະ BC = AD, ຮູບ ABCD ທີ່ໄດ້ແມ່ນຮູບສີ່ແຈຂ້າງຂະໜານ, ດັ່ງນັ້ນ (AD) // (BC) ຫຼື (AD) // d."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ການນຳໃຊ້ວົງວຽນຊ່ວຍໃຫ້ເຮົາສ້າງເສັ້ນຂະໜານໄດ້ຢ່າງຊັດເຈນໂດຍບໍ່ຕ້ອງແທກມຸມ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຄຳສັບ ຫຼື ສັນຍະລັກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                    {"ເມື່ອສ້າງຮູບສີ່ແຈ ABCD ດ້ວຍວິທີຂ້າງເທິງ, ຮູບ ABCD ທີ່ໄດ້ແມ່ນຮູບສີ່ແຈໃດ?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: ແມ່ນຮູບສີ່ແຈ "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  </div>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                    {"ດັ່ງນັ້ນ, ຂ້າງ AD ຈະມີລັກສະນະການພົວພັນແນວໃດກັບຂ້າງ BC?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: AD "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                    <span>{" BC"}</span>
                  </div>
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
                {"ໃນການສ້າງເສັ້ນຊື່ຂະໜານ d′ // d, ຖ້າເຮົາກຳນົດ AB = 5 cm ແລະ BC = 7 cm, ຄວາມຍາວຂອງ CD ແລະ AD ທີ່ໄດ້ຈາກວົງວຽນຈະເທົ່າກັບຈັກ cm ຕາມລຳດັບ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຕອບ: CD ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", AD ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການສ້າງເສັ້ນຊື່ຕັ້ງສາກດ້ວຍວົງວຽນ (Constructing Perpendicular Lines)",
      keyPoint: {
        title: "ຂັ້ນຕອນການສ້າງເສັ້ນຊື່ຕັ້ງສາກຜ່ານເມັດໜຶ່ງນອກເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອສ້າງເສັ້ນຊື່ຕັ້ງສາກກັບ d ຜ່ານເມັດ M ຢູ່ນອກເສັ້ນຊື່ d ໂດຍໃຊ້ວົງວຽນ:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"ແຕ້ມສ່ວນໂຄ້ງມົນທີ່ມີຈຸດສູນກາງ M ຕັດເສັ້ນຊື່ d ຢູ່ສອງເມັດ A ແລະ B."}</li>
              <li>{"ແຕ້ມສອງສ່ວນໂຄ້ງມົນທີ່ມີຈຸດສູນກາງຢູ່ A ແລະ B ດ້ວຍລັດສະໝີອັນດຽວກັນ (ໃຫຍ່ກວ່າເຄິ່ງໜຶ່ງຂອງ AB) ໃຫ້ຕັດກັນຢູ່ເມັດ C ທີ່ຢູ່ຄົນລະເບື້ອງກັບ M ທຽບໃສ່ເສັ້ນຊື່ d."}</li>
              <li>{"ຂີດເສັ້ນຊື່ (MC), ເຮົາຈະໄດ້ເສັ້ນຊື່ (MC) ຕັ້ງສາກກັບ d ຢູ່ເມັດເຄິ່ງກາງຂອງ [AB]."}</li>
            </ol>
            <p style={{ fontSize: "1.25rem", margin: 0, color: "#E65100", fontStyle: "italic" }}>
              {"*ເສັ້ນຊື່ (MC) ທີ່ໄດ້ນີ້ຍັງເອີ້ນວ່າ ເສັ້ນຈອມກາງ (Perpendicular Bisector) ຂອງທ່ອນຊື່ [AB]."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ເສັ້ນຈອມກາງຂອງທ່ອນຊື່ AB ແມ່ນເສັ້ນຊື່ທີ່ຕັ້ງສາກກັບ AB ຢູ່ຈຸດເຄິ່ງກາງຂອງ AB ພໍດີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງເລືອກຄຳສັບທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "8px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                    {"ເສັ້ນຊື່ (MC) ທີ່ສ້າງຂຶ້ນນັ້ນ ຈະມີລັກສະນະແນວໃດກັບເສັ້ນຊື່ d?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: มีລັກສະນະ "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                    <span>{" ກັບເສັ້ນຊື່ d."}</span>
                  </div>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                    {"ຈຸດຕັດ H ລະຫວ່າງ d ແລະ (MC) ຈະເປັນຈຸດໃດຂອງທ່ອນຊື່ [AB]?"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: ເປັນຈຸດ "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                    <span>{" ຂອງທ່ອນຊື່ [AB]."}</span>
                  </div>
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
                {"ຖ້າ AB = 8 cm ແລະ ເສັ້ນຊື່ (MC) ຕັດ [AB] ຢູ່ຈຸດ H. ຄວາມຍາວຂອງທ່ອນຊື່ AH ຈະເທົ່າກັບຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: AH ="}</span>
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
              {"ໂຈດການສ້າງຮູບສາມແຈສ່ຽງ (Isosceles Triangle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເຮົາສ້າງທ່ອນຊື່ [AB] ແລະ ເສັ້ນຈອມກາງ d′ ຂອງມັນ. ຈາກນັ້ນເຮົາເລືອກຈຸດ C ໃດໜຶ່ງຢູ່ເທິງ d′ (ທີ່ບໍ່ແມ່ນຈຸດເຄິ່ງກາງ H). ຖາມວ່າ ຮູບສາມແຈ ABC ທີ່ໄດ້ຈະເປັນຮູບສາມແຈຊະນິດໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເປັນຮູບສາມແຈ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດກ່ຽວກັບໄລຍະຫ່າງລະຫວ່າງສອງເສັ້ນຂະໜານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າ d₁ // d₂. ເຮົາແຕ້ມສອງທ່ອນຊື່ [AB] ແລະ [CD] ທີ່ຕັ້ງສາກກັບ d₁ ແລະ d₂ (ໂດຍ A, C ຢູ່ d₁ ແລະ B, D ຢູ່ d₂). ຖ້າ AB = 4 cm, ຖາມວ່າ CD ຈະຍາວຈັກ cm?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: CD ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ໂຈດບັນຫາການສ້າງຮູບສີ່ແຈສາກ (Rectangle Construction): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເພື່ອສ້າງຮູບສີ່ແຈສາກ ABCD ທີ່ຮູ້ຄວາມຍາວຂ້າງ AB = 6 cm ແລະ BC = 4 cm. ຖ້າເຮົາສ້າງຂ້າງ AB ແລະ ສ້າງເສັ້ນຊື່ ⊥ ກັບ AB ຢູ່ສົ້ນ B ເພື່ອກຳນົດຈຸດ C ໃຫ້ BC = 4 cm. ຈາກນັ້ນເຮົາໃຊ້ວົງວຽນແຕ້ມສ່ວນໂຄ້ງຈຸດສູນກາງ A ລັດສະໝີ 4 cm ແລະ ຈຸດສູນກາງ C ລັດສະໝີ 6 cm ຕັດກັນຢູ່ D. ຖາມວ່າ ຄວາມຍາວ AD ແລະ CD ຈະຍາວຈັກ cm ຕາມລຳດັບ?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຄວາມຍາວ AD ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຄວາມຍາວ CD ="}</span>
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
            {"ໂຈດການພິສູດແຈເລຂາຄະນິດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບສີ່ແຈຂ້າງຂະໜານ ABCD, ຖ້າມີມຸມ A ເທົ່າກັບ 90°, ຖາມວ່າ ມຸມ B, C, D ທີ່ເຫຼືອຈະເທົ່າກັບຈັກອົງສາ? ແລະ ຮູບ ABCD ຈະກາຍເປັນຮູບສີ່ແຈຊະນິດໃດ?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມທີ່ເຫຼືອທັງໝົດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"°"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຮູບ ABCD ແມ່ນຮູບສີ່ແຈ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) ຂ້າງຂະໜານ"}</span>,
          <span key="1-2">{"(2) // (ຫຼື ຂະໜານ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"CD = 5 cm , AD = 7 cm (ເນື່ອງຈາກຂ້າງກົງກັນຂ້າມຂອງຮູບສີ່ແຈຂ້າງຂະໜານມີຄວາມຍາວເທົ່າກັນ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) ຕັ້ງສາກ"}</span>,
          <span key="3-2">{"(2) ເຄິ່ງກາງ"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"4 (ເນື່ອງຈາກ H ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB, ດັ່ງນັ້ນ AH = 8 / 2 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"ທ່ຽງ (ຫຼື ສາມແຈທ່ຽງ ເພາະມີສອງຂ້າງ CA = CB)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"4 (ໄລຍະຫ່າງລະຫວ່າງສອງເສັ້ນຂະໜານມີຄ່າເທົ່າກັນສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- ຄວາມຍາວ AD = 4 cm"}</span>,
          <span key="s1-2">{"- ຄວາມຍາວ CD = 6 cm"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2-1">{"- ມຸມທີ່ເຫຼືອທັງໝົດແມ່ນ 90°"}</span>,
          <span key="s2-2">{"- ຮູບ ABCD ແມ່ນຮູບສີ່ແຈສາກ"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ການຮຽນຮູ້ວິທີສ້າງຮູບເລຂາຄະນິດດ້ວຍວົງວຽນ ຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈຄຸນລັກສະນະຂອງຂ້າງ ແລະ ມຸມໄດ້ຢ່າງເລິກເຊິ່ງ. ສູ້ຕໍ່ໄປ!"
  }
};
