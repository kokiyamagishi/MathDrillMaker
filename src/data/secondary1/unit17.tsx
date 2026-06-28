import React from "react";
import { Angle } from "../../components/Angle";
import { UnitData } from "../units2";

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ພາກທີ II - ບົດທີ 17: ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (Line Symmetry)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳນຶກຂອງການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ (Reflection), ແກນເຄິ່ງຄື (Axis of Symmetry), ແລະ ຄຸນລັກສະນະຂອງເມັດເຄິ່ງຄື",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 129-133",
  subSections: [
    {
      title: "1. ນິຍາມຂອງສອງເມັດເຄິ່ງຄືກັນ (Definition of Symmetric Points)",
      keyPoint: {
        title: "ເມັດເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ d",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງເມັດ A ແລະ A′ ເອີ້ນວ່າເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ d (ເຊິ່ງແມ່ນແກນເຄິ່ງຄື) ຖ້າວ່າ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"ເສັ້ນຊື່ d ຕັ້ງສາກກັບທ່ອນຊື່ [AA′] ຢູ່ຈຸດເຄິ່ງກາງ H ຂອງ [AA′]."}</li>
              <li>{"ເວົ້າອີກຢ່າງໜຶ່ງ, ເສັ້ນຊື່ d ແມ່ນ ເສັ້ນຈອມກາງ (Perpendicular Bisector) ຂອງທ່ອນຊື່ [AA′]."}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #80CBC4", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" }}>{"ແຜນວາດສອງເມັດເຄິ່ງຄືທຽບໃສ່ d"}</span>
              <svg width="240" height="100">
                <line x1="120" y1="10" x2="120" y2="90" stroke="#004D40" strokeWidth="3" />
                <text x="130" y="20" fontSize="14" fontWeight="bold" fill="#004D40">{"d (ແກນເຄິ່ງຄື)"}</text>
                
                <circle cx="40" cy="50" r="4" fill="#E53935" />
                <text x="35" y="40" fontSize="14" fontWeight="bold">{"A"}</text>
                
                <circle cx="200" cy="50" r="4" fill="#E53935" />
                <text x="195" y="40" fontSize="14" fontWeight="bold">{"A′"}</text>
                
                <line x1="40" y1="50" x2="200" y2="50" stroke="#757575" strokeDasharray="4" strokeWidth="1.5" />
                <rect x="110" y="40" width="10" height="10" fill="none" stroke="#004D40" strokeWidth="1.5" />
                
                <circle cx="120" cy="50" r="3" fill="#000" />
                <text x="125" y="65" fontSize="12" fontWeight="bold">{"H"}</text>
              </svg>
              <span style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#00796B" }}>{"AH = A′H  ແລະ  (AA′) ⊥ d ຢູ່ H"}</span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າເມັດ M ນອນຢູ່ເທິງແກນ d ພໍດີ, ເມັດເຄິ່ງຄືຂອງ M ກໍແມ່ນຕົວມັນເອງ (M′ ≡ M)!",
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
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ fontWeight: "bold", flexShrink: 0 }}>{"(1)"}</span>
                    <span>{"ຖ້າ A ແລະ A′ ເຄິ່ງຄືກັນທຽບໃສ່ d ຢູ່ຈຸດຕັດ H, ແລ້ວທ່ອນຊື່ AH ຈະມີລັກສະນະແນວໃດກັບທ່ອນຊື່ A′H?"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: AH ຈະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                    <span>{"ທ່ອນຊື່ A′H."}</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ fontWeight: "bold", flexShrink: 0 }}>{"(2)"}</span>
                    <span>{"ເສັ້ນຊື່ (AA′) ແລະ ແກນເຄິ່ງຄື d ຈະມີລັກສະນະການພົວພັນກັນແນວໃດ?"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px" }}>
                    <span>{"ຕອບ: (AA′)"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                    <span>{"d."}</span>
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
                {"ໃຫ້ໄລຍະຫ່າງຈາກເມັດ A ຫາແກນ d ແມ່ນ 4.5 cm. ຖ້າ A′ ແມ່ນເມັດເຄິ່ງຄືຂອງ A ທຽບໃສ່ d, ໄລຍະຫ່າງລະຫວ່າງ A ແລະ A′ ຈະມີຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap" }}>
                  <span style={{ flexShrink: 0 }}>{"AA′ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "30px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄຸນລັກສະນະຂອງການເຄິ່ງຄື (Properties of Line Reflection)",
      keyPoint: {
        title: "ການຮັກສາໄລຍະທາງ ແລະ ຮູບຮ່າງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ມີຄຸນລັກສະນະການຮັກສາທີ່ສຳຄັນດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຮັກສາໄລຍະຫ່າງ (Distance Preserved): "}</strong>{" ຄວາມຍາວຂອງທ່ອນຊື່ເຄິ່ງຄືຈະເທົ່າກັບຄວາມຍາວເດີມສະເໝີ. ຖ້າ [AB] ເຄິ່ງຄືກັບ [A′B′] ແລ້ວ A′B′ = AB."}</li>
              <li><strong>{"ຮັກສາມຸມ (Angle Preserved): "}</strong>{" ມຸມເຄິ່ງຄືຈະມີຂະໜາດເທົ່າກັບມຸມເດີມສະເໝີ."}</li>
              <li><strong>{"ຮັກສາເນື້ອທີ່ (Area Preserved): "}</strong>{" ຮູບເຄິ່ງຄືຈະມີເນື້ອທີ່ເທົ່າກັບຮູບເດີມສະເໝີ."}</li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຮູບສອງຮູບທີ່ເຄິ່ງຄືກັນ ຈະສາມາດພັບເຕັງກັນໄດ້ພໍດີ ຕາມແນວແກນເຄິ່ງຄື d!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ທ່ອນຊື່ AB = 8 cm. ຖ້າ [A′B′] ແມ່ນຮູບເຄິ່ງຄືຂອງ [AB] ທຽບໃສ່ແກນ d, ຄວາມຍາວຂອງ A′B′ ຈະເທົ່າກັບຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: A′B′ ="}</span>
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
                {"ໃຫ້ຮູບສາມແຈ ABC ມີເນື້ອທີ່ 24 cm². ຖ້າ A′B′C′ ແມ່ນຮູບເຄິ່ງຄືຂອງ ABC ທຽບໃສ່ແກນ d, ເນື້ອທີ່ຂອງຮູບສາມແຈ A′B′C′ ຈະເທົ່າກັບຈັກ cm²? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"cm²"}</span>
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
              {"ໂຈດການຊອກຫາເມັດເຄິ່ງຄື ແລະ ໄລຍະຫ່າງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສອງເມັດ A ແລະ B ຢູ່ເບື້ອງດຽວກັນຂອງເສັ້ນຊື່ d, ໂດຍມີ H ແລະ K ແມ່ນຈຸດສາຍສາກຂອງ A ແລະ B ລົງໃສ່ d ຕາມລຳດັບ (AH = 3 cm, BK = 5 cm). ຖ້າ A′ ແລະ B′ ແມ່ນເມັດເຄິ່ງຄືຂອງ A ແລະ B ທຽບໃສ່ d, ໄລຍະຫ່າງລະຫວ່າງ A′ ຫາ B′ ຈະຍາວເທົ່າໃດ ຖ້າຮູ້ວ່າ AB = 10 cm?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: A′B′ ="}</span>
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
              {"ໂຈດບັນຫາການເຄິ່ງຄືຂອງຮູບສາມແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຮູບສາມແຈ ABC ສາກຢູ່ B ໂດຍ AB = 6 cm ແລະ BC = 8 cm. ຖ້າສ້າງຮູບເຄິ່ງຄື A′B′C′ ຂອງ ABC ທຽບໃສ່ເສັ້ນຊື່ d ໃດໜຶ່ງ, ຄວາມຍາວຂອງຂ້າງ A′C′ ຈະເທົ່າກັບຈັກ cm? (ຊອກຫາໂດຍນຳໃຊ້ທິດສະດີປີຕາກໍ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: A′C′ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm."}</span>
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
            {"ໂຈດຄຸນລັກສະນະການເຄິ່ງຄືຂອງມຸມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ມຸມ "} <Angle>ABC</Angle> {"ມີຂະໜາດ 45°. ຖ້າ "} <Angle>A′B′C′</Angle> {"ແມ່ນຮູບເຄິ່ງຄືຂອງ "} <Angle>ABC</Angle> {"ທຽບໃສ່ແກນ d, ມຸມ "} <Angle>A′B′C′</Angle> {"ຈະມີຂະໜາດຈັກອົງສາ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: "} <Angle>A′B′C′</Angle> {" ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"°."}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດກ່ຽວກັບເມັດທີ່ນອນຢູ່ເທິງແກນ d: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ເມັດ M ຢູ່ເທິງແກນເຄິ່ງຄື d ພໍດີ. ຖ້າໄລຍະຫ່າງລະຫວ່າງ M ຫາເມັດເຄິ່ງຄື M′ ຂອງມັນແມ່ນ 𝑥, ຖາມວ່າ 𝑥 ຈະມີຄ່າເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
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
          <span key="1-1">{"(1) ເທົ່າກັບ (ຫຼື ຍາວເທົ່າກັບ)"}</span>,
          <span key="1-2">{"(2) ⊥ (ຫຼື ຕັ້ງສາກ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"4.5 × 2 (ຫຼື 4.5 + 4.5)"}</span>,
          <span key="2-2">{"9"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"8 (ຍ້ອນການເຄິ່ງຄືຮັກສາໄລຍະທາງ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"24 (ຍ້ອນການເຄິ່ງຄືຮັກສາເນື້ອທີ່)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"10 (ເນື່ອງຈາກ A′B′ = AB = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"10 (ຄິດໄລ່: AC = √ (6² + 8²) = 10 cm, ແລະ A′C′ = AC = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"45 (ຍ້ອນການເຄິ່ງຄືຮັກສາຂະໜາດຂອງມຸມ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"0 (ເນື່ອງຈາກເມັດທີ່ນອນຢູ່ເທິງແກນເຄິ່ງຄື ຈະມີເມັດເຄິ່ງຄືແມ່ນຕົວມັນເອງ M′ ≡ M)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ຄວາມເຂົ້າໃຈກ່ຽວກັບການເຄິ່ງຄືທຽບໃສ່ເສັ້ນຊື່ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດແຕ້ມຮູບທີ່ສົມດຸນ (Symmetrical) ແລະ ຮຽນຮູ້ເລຂາຄະນິດໃນບົດຕໍ່ໄປໄດ້ຢ່າງງ່າຍດາຍ!"
  }
};
