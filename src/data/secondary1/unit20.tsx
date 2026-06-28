import React from "react";
import { UnitData } from "../units2";

export const unit20Data: UnitData = {
  unitNumber: 20,
  unitTitle: "ພາກທີ II - ບົດທີ 20: ເສັ້ນກາງສາກ ແລະ ເສັ້ນແບ່ງເຄິ່ງມຸມ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບນິຍາມ, ຄຸນລັກສະນະ ແລະ ວິທີສ້າງເສັ້ນກາງສາກ (Perpendicular Bisector) ຂອງທ່ອນຊື່ ແລະ ເສັ້ນແບ່ງເຄິ່ງມຸມ (Angle Bisector) ດ້ວຍວົງວຽນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 156-162",
  subSections: [
    {
      title: "1. ເສັ້ນກາງສາກຂອງທ່ອນຊື່ (Perpendicular Bisector)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຄຸນລັກສະນະຂອງເສັ້ນກາງສາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- "}<strong>{"ເສັ້ນກາງສາກ"}</strong>{" ຂອງທ່ອນຊື່ [AB] ແມ່ນເສັ້ນຊື່ d ທີ່ຕັ້ງສາກກັບ [AB] ຢູ່ຈຸດເຄິ່ງກາງ H ຂອງທ່ອນຊື່ນັ້ນ."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #80CBC4", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" }}>{"ຄຸນລັກສະນະທີ່ສຳຄັນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ທຸກໆເມັດ M ທີ່ນອນຢູ່ເທິງເສັ້ນກາງສາກ d ຂອງ [AB] ຈະມີໄລຍະຫ່າງຫາສົ້ນ A ແລະ B ເທົ່າກັນສະເໝີ: MA = MB."}</li>
                <li>{"ປີ້ນຄືນ: ຖ້າເມັດ M ມີໄລຍະຫ່າງຫາ A ແລະ B ເທົ່າກັນ (MA = MB), ແລ້ວ M ຕ້ອງນອນຢູ່ເທິງເສັ້ນກາງສາກ d ຂອງ [AB]."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີສ້າງເສັ້ນກາງສາກດ້ວຍວົງວຽນແມ່ນ: ແຕ້ມສອງສ່ວນໂຄ້ງມົນລັດສະໝີເທົ່າກັນ (ໃຫຍ່ກວ່າເຄິ່ງໜຶ່ງຂອງ AB) ທີ່ມີຈຸດສູນກາງຢູ່ A ແລະ B ໃຫ້ຕັດກັນຢູ່ສອງເມັດ I ແລະ J. ຂີດເສັ້ນຊື່ (IJ) ເປັນເສັ້ນກາງສາກ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຄຳສັບ ຫຼື ເຄື່ອງໝາຍທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເສັ້ນກາງສາກຂອງທ່ອນຊື່ [AB] ແມ່ນເສັ້ນຊື່ທີ່ຜ່ານຈຸດເຄິ່ງກາງ ແລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກັບ [AB]."}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ M ນອນຢູ່ເທິງເສັ້ນກາງສາກຂອງ [AB], ແລ້ວໄລຍະຫ່າງ MA ຈະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ໄລຍະຫ່າງ MB."}</span>
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
                {"ໃຫ້ທ່ອນຊື່ AB = 10 cm, ມີ d ແມ່ນເສັ້ນກາງສາກຂອງ [AB] ຕັດ [AB] ຢູ່ H. ຖ້າເມັດ M ຢູ່ເທິງ d ໂດຍມີ MA = 13 cm, ຄວາມຍາວ MB ແລະ ຄວາມຍາວ AH ຈະເທົ່າກັບຈັກ cm ຕາມລຳດັບ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຕອບ: MB ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"cm , AH ="}</span>
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
      title: "2. ເສັ້ນແບ່ງເຄິ່ງມຸມ (Angle Bisector)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ວິທີສ້າງເສັ້ນແບ່ງເຄິ່ງມຸມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- "}<strong>{"ເສັ້ນແບ່ງເຄິ່ງມຸມ"}</strong>{" ຂອງມຸມ ∠xOy ແມ່ນເຄິ່ງເສັ້ນຊື່ [Oz) ທີ່ຢູ່ລະຫວ່າງສອງຂ້າງ [Ox) ແລະ [Oy) ເຊິ່ງແບ່ງມຸມ ∠xOy ອອກເປັນສອງມຸມທີ່ມີຂະໜາດເທົ່າກັນ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#E65100", paddingLeft: "16px" }}>{"∠xOz = ∠zOy = (1/2) × ∠xOy"}</span>
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ວິທີສ້າງດ້ວຍວົງວຽນ:"}</span>
              <ol style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ແຕ້ມສ່ວນໂຄ້ງມົນຈຸດສູນກາງ O ຕັດ [Ox) ຢູ່ I ແລະ ຕັດ [Oy) ຢູ່ J."}</li>
                <li>{"ແຕ້ມສອງສ່ວນໂຄ້ງມົນຈຸດສູນກາງ I ແລະ J ດ້ວຍລັດສະໝີອັນດຽວກັນ ໃຫ້ຕັດກັນຢູ່ເມັດ M ພາຍໃນມຸມ."}</li>
                <li>{"ຂີດເຄິ່ງເສັ້ນຊື່ [OM), ເຮົາຈະໄດ້ [OM) ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ ∠xOy."}</li>
              </ol>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເສັ້ນແບ່ງເຄິ່ງມຸມ ກໍຄື ແກນເຄິ່ງຄື (Axis of Symmetry) ຂອງມຸມ ∠xOy ນັ້ນເອງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ມຸມ ∠xOy = 70°. ຖ້າ [Oz) ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ ∠xOy, ຂະໜາດຂອງມຸມ ∠xOz ຈະມີຄ່າເທົ່າໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: ∠xOz ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"°"}</span>
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
                {"ໃຫ້ມຸມ ∠AOB ມີ [OC) ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ ໂດຍ ∠AOC = 55°. ຂະໜາດຂອງມຸມ ∠AOB ຈະເທົ່າກັບຈັກອົງສາ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: ∠AOB ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"°"}</span>
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
              {"ໂຈດການຕັດກັນຂອງສາມເສັ້ນກາງສາກ (Circumcenter): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ສາມເສັ້ນກາງສາກຂອງສາມຂ້າງ AB, BC, AC ຈະຕັດກັນຢູ່ຈຸດດຽວ ເອີ້ນວ່າຈຸດ I. ຖ້າໄລຍະຫ່າງ IA = 6 cm, ຖາມວ່າໄລຍະຫ່າງ IB ແລະ IC ຈະເທົ່າກັບຈັກ cm?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: IB = IC ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm."}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການພົວພັນລະຫວ່າງເສັ້ນແບ່ງເຄິ່ງມຸມສອງມຸມພາກຮ່ວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສອງມຸມ ∠xOy ແລະ ∠yOz ຕິດກັນ ແລະ ປະກອບກັນເປັນມຸມພຽງ ∠xOz = 180°. ຖ້າສ້າງເສັ້ນແບ່ງເຄິ່ງມຸມ [Oa) ຂອງ ∠xOy ແລະ ເສັ້ນແບ່ງເຄິ່ງມຸມ [Ob) ຂອງ ∠yOz. ມຸມລະຫວ່າງ [Oa) ແລະ [Ob) (ມຸມ ∠aOb) ຈະເທົ່າກັບຈັກອົງສາ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ∠aOb ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"°."}</span>
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
            {"ໂຈດຄິດໄລ່ມຸມໃນສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຮູບສາມແຈ ABC ທ່ຽງຢູ່ A (AB = AC) ມີ ∠A = 110°. ຖ້າ [AI) ແມ່ນເສັ້ນແບ່ງເຄິ່ງມຸມ ∠A ຕັດ BC ຢູ່ I, ຂະໜາດຂອງມຸມ ∠BAI ແລະ ມຸມ ∠AIC ຈະເທົ່າກັບຈັກອົງສາ? (ແນະນຳ: ຍ້ອນສາມແຈທ່ຽງ, ເສັ້ນແບ່ງເຄິ່ງມຸມຈອມຍັງເປັນເສັ້ນກາງສາກຂອງຂ້າງພື້ນ)"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມ ∠BAI ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"°"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມ ∠AIC ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"°"}</span>
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
            {"ໂຈດກ່ຽວກັບໄລຍະທາງຂອງເສັ້ນກາງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ທ່ອນຊື່ AB ຍາວ 8 cm, C ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB. d ແມ່ນເສັ້ນກາງສາກຂອງ AB, e ແມ່ນເສັ້ນກາງສາກຂອງ AC ຕັດ AC ຢູ່ D. ໄລຍະຫ່າງ BD ຈະມີຈັກ cm?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: BD ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) ຕັ້ງສາກ"}</span>,
          <span key="1-2">{"(2) ເທົ່າກັບ"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"MB = 13 cm (ຍ້ອນ M ຢູ່ເສັ້ນກາງສາກ, MA = MB) , AH = 5 cm (10 / 2 = 5)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"70 / 2"}</span>,
          <span key="3-2">{"35"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"55 × 2"}</span>,
          <span key="4-2">{"110"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"6 (ເນື່ອງຈາກຈຸດຕັດກັນຂອງສາມເສັ້ນກາງສາກ ຈະມີໄລຍະຫ່າງຫາທັງສາມຈອມເທົ່າກັນ IA = IB = IC)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"90 (ເສັ້ນແບ່ງເຄິ່ງຂອງສອງມຸມພາກຮ່ວມຕິດກັນ ຈະຕັ້ງສາກກັນສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- ມຸມ ∠BAI = 55° (110 / 2 = 55°)"}</span>,
          <span key="s1-2">{"- ມຸມ ∠AIC = 90° (ຍ້ອນວ່າໃນສາມແຈທ່ຽງ, ເສັ້ນແບ່ງເຄິ່ງມຸມຈອມຍັງເປັນເສັ້ນກາງສາກ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"6 (ຄິດໄລ່: AC = 4 cm, D ແມ່ນຈຸດເຄິ່ງກາງ AC ດັ່ງນັ້ນ AD = DC = 2 cm. ໄລຍະ BD = BC + CD = 4 + 2 = 6 cm)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ເສັ້ນກາງສາກ ແລະ ເສັ້ນແບ່ງເຄິ່ງມຸມ ແມ່ນເສັ້ນສົມດຸນທີ່ພົບເຫັນຫຼາຍທີ່ສຸດໃນເລຂາຄະນິດ, ຊ່ວຍໃຫ້ການອອກແບບ ແລະ ຄິດໄລ່ມີຄວາມຊັດເຈນ. ສູ້ຕໍ່ໄປ!"
  }
};
