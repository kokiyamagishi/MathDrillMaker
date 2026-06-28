import React from "react";
import { UnitData } from "../units2";

export const unit19Data: UnitData = {
  unitNumber: 19,
  unitTitle: "ພາກທີ II - ບົດທີ 19: ຮູບເຄິ່ງຄືຂອງມຸມ ແລະ ເສັ້ນຊື່",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການສ້າງເມັດເຄິ່ງຄື ແລະ ເສັ້ນຊື່ເຄິ່ງຄືດ້ວຍວົງວຽນ, ການເຄິ່ງຄືຂອງມຸມ, ແລະ ຮູບເລຂາຄະນິດເຄິ່ງຄືຕ່າງໆ (ສາມແຈທ່ຽງ, ສີ່ແຈສາກ, ດອກຈັນ, ຈະຕຸລັດ)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 147-152",
  subSections: [
    {
      title: "1. ວິທີສ້າງເມັດເຄິ່ງຄື ແລະ ເເສັ້ນຊື່ເຄິ່ງຄືດ້ວຍວົງວຽນ (Constructing Symmetric Elements)",
      keyPoint: {
        title: "ການສ້າງເມັດເຄິ່ງຄືດ້ວຍວົງວຽນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອສ້າງເມັດ M′ ເຄິ່ງຄືກັບ M ທຽບໃສ່ເສັ້ນຊື່ d ໂດຍໃຊ້ວົງວຽນ:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"ໝາຍສອງເມັດ A ແລະ B ທີ່ຕ່າງກັນຢູ່ເທິງເສັ້ນຊື່ d."}</li>
              <li>{"ແຕ້ມສ່ວນໂຄ້ງມົນຈຸດສູນກາງ A ຜ່ານເມັດ M (ລັດສະໝີ AM)."}</li>
              <li>{"ແຕ້ມສ່ວນໂຄ້ງມົນຈຸດສູນກາງ B ຜ່ານເມັດ M (ລັດສະໝີ BM)."}</li>
              <li>{"ສອງສ່ວນໂຄ້ງມົນຕັດກັນຢູ່ເມັດ M′ ທີ່ຢູ່ຄົນລະເບື້ອງກັບ M. ເຮົາໄດ້ M′ ແມ່ນເມັດເຄິ່ງຄືຂອງ M ທຽບໃສ່ d."}</li>
            </ol>
            
            <div style={{ padding: "16px", backgroundColor: "#F1F8E9", borderRadius: "8px", border: "1px solid #DCEDC8" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#33691E" }}>{"ການເຄິ່ງຄືຂອງເສັ້ນຊື່ k ທຽບໃສ່ d:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6", marginTop: "8px" }}>
                <li>{"ຖ້າເສັ້ນຊື່ k ຕັດແກນ d ຢູ່ຈຸດ I: ເສັ້ນຊື່ເຄິ່ງຄື k′ ຈະຕັດ d ຢູ່ຈຸດ I ເຊັ່ນກັນ. ເຮົາພຽງແຕ່ຫາເມັດເຄິ່ງຄື A′ ຂອງຈຸດ A ໃດໜຶ່ງຢູ່ເທິງ k, ແລ້ວຂີດເສັ້ນຊື່ (IA′)."}</li>
                <li>{"ຖ້າເສັ້ນຊື່ k // d (ຂະໜານ): ເສັ້ນຊື່ເຄິ່ງຄື k′ ຈະຂະໜານກັບ d ແລະ k ເຊັ່ນກັນ."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີສ້າງດ້ວຍວົງວຽນນີ້ບໍ່ຈຳເປັນຕ້ອງໃຊ້ບັນທັດສາກເລີຍ, ມີຄວາມຊັດເຈນສູງຫຼາຍ!",
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
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ k ຂະໜານກັບ d, ເສັ້ນຊື່ເຄິ່ງຄື k′ ຂອງມັນທຽບໃສ່ d ຈະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກັບ d."}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ k ຕັດ d ຢູ່ເມັດ I, ເສັ້ນຊື່ເຄິ່ງຄື k′ ຈະຕັດ d ຢູ່ເມັດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ຖ້າສອງເສັ້ນຊື່ a ແລະ b ຕັ້ງສາກກັນ (a ⊥ b). ຖ້າ a′ ແລະ b′ ແມ່ນເສັ້ນຊື່ເຄິ່ງຄືຂອງພວກມັນທຽບໃສ່ແກນ d, ຖາມວ່າ a′ ແລະ b′ ຈະມີການພົວພັນກັນແນວໃດ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: a′"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"b′"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເສັ້ນແກນເຄິ່ງຄືຂອງຮູບເລຂາຄະນິດຕ່າງໆ (Symmetry in Geometric Figures)",
      keyPoint: {
        title: "ຈຳນວນແກນເຄິ່ງຄືຂອງຮູບພິເສດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບເລຂາຄະນິດພິເສດແຕ່ລະຊະນິດມີຈຳນວນແກນເຄິ່ງຄືທີ່ແຕກຕ່າງກັນ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຮູບສາມແຈທ່ຽງ (Isosceles Triangle): "}</strong>{" ມີ 1 ແກນເຄິ່ງຄື (ເສັ້ນຈອມກາງຂອງຂ້າງພື້ນ)."}</li>
              <li><strong>{"ຮູບສາມແຈສະເໝີ (Equilateral Triangle): "}</strong>{" ມີ 3 ແກນເຄິ່ງຄື (ເສັ້ນຈອມກາງຂອງສາມຂ້າງ)."}</li>
              <li><strong>{"ຮູບສີ່ແຈສາກ (Rectangle): "}</strong>{" ມີ 2 ແກນເຄິ່ງຄື (ເສັ້ນຈອມກາງຂອງສອງຂ້າງກົງກັນຂ້າມ)."}</li>
              <li><strong>{"ຮູບດອກຈັນ (Rhombus): "}</strong>{" ມີ 2 ແກນເຄິ່ງຄື (ເສັ້ນຊື່ທີ່ຜ່ານສອງເສັ້ນເນັ່ງຈອມ)."}</li>
              <li><strong>{"ຮູບຈະຕຸລັດ (Square): "}</strong>{" ມີ 4 ແກນເຄິ່ງຄື (2 ເສັ້ນຈອມກາງຂອງຂ້າງ ແລະ 2 ເສັ້ນເນັ່ງຈອມ)."}</li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຮູບຈະຕຸລັດແມ່ນຮູບທີ່ມີຄວາມສົມດຸນທີ່ສຸດ ເພາະມັນເປັນທັງຮູບສີ່ແຈສາກ ແລະ ຮູບດອກຈັນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກຈຳນວນແກນເຄິ່ງຄືຂອງຮູບຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສາມແຈສະເໝີ ມີທັງໝົດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ແກນເຄິ່ງຄື."}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບຈະຕຸລັດ ມີທັງໝົດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ແກນເຄິ່ງຄື."}</span>
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
                {"ໃຫ້ຮູບສາມແຈສະເໝີ ABC ທີ່ມີຂ້າງຍາວ 6 cm. ຖ້າ A′B′C′ ແມ່ນຮູບເຄິ່ງຄືຂອງ ABC. ມຸມແຕ່ລະມຸມຂອງສາມແຈ A′B′C′ ຈະມີຂະໜາດຈັກອົງສາ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: ແຕ່ລະມຸມມີຂະໜາດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"°"}</span>
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
              {"ໂຈດການພິສູດແຈໃນຮູບເຄິ່ງຄື: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຮູບສາມແຈ ABC ທີ່ມີ ∠B = 45° ແລະ AB = 3 cm. ຖ້າຮູບສາມແຈ A′B′C′ ເຄິ່ງຄືກັບ ABC ທຽບໃສ່ແກນ d ໃດໜຶ່ງ. ຄວາມຍາວ A′B′ ແລະ ຂະໜາດຂອງມຸມ ∠B′ ຈະມີຄ່າເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- A′B′ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ມຸມ ∠B′ ="}</span>
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການວິເຄາະແກນເຄິ່ງຄືໃນຮູບວົງມົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ແກນເຄິ່ງຄືຂອງຮູບວົງມົນແມ່ນເສັ້ນຊື່ໃດ? ແລະ ຮູບວົງມົນມີແກນເຄິ່ງຄືທັງໝົດຈັກເສັ້ນ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ແມ່ນເສັ້ນຊື່ທີ່ຜ່ານ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ມີທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
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
            {"ໂຈດກ່ຽວກັບຮູບດອກຈັນ (Rhombus Symmetry): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຮູບດອກຈັນ ABCD ທີ່ມີເສັ້ນເນັ່ງຈອມ AC ຕັດ BD ຢູ່ O. ຖ້າເຮົາເຄິ່ງຄືຮູບສາມແຈ AOB ທຽບໃស່ເສັ້ນຊື່ AC, ຮູບສາມແຈໃໝ່ທີ່ໄດ້ຈະເຕັງກັບຮູບສາມແຈໃດໃນຮູບດອກຈັນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເຕັງກັບຮູບສາມແຈ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດຄຸນລັກສະນະການເຄິ່ງຄືຂອງສອງເສັ້ນຕັ້ງສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ເສັ້ນຊື່ Δ₁ ⊥ Δ₂. ຖ້າ Δ₁′ ແລະ Δ₂′ ແມ່ນເສັ້ນຊື່ເຄິ່ງຄືຂອງພວກມັນທຽບໃສ່ d. ຖ້າມຸມລະຫວ່າງ Δ₁′ ແລະ Δ₂′ ແມ່ນ x, ຖາມວ່າ x ຈະມີຄ່າຈັກອົງສາ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"°."}</span>
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
          <span key="1-1">{"(1) ຂະໜານ (ຫຼື d // k′)"}</span>,
          <span key="1-2">{"(2) I (ຈຸດຕັດເດີມ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"⊥ (ຕັ້ງສາກກັນ, ຍ້ອນການເຄິ່ງຄືຮັກສາມຸມ 90° ລະຫວ່າງສອງເສັ້ນ)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 3"}</span>,
          <span key="3-2">{"(2) 4"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"60 (ເນື່ອງຈາກຮູບສາມແຈສະເໝີມີທຸກມຸມເທົ່າກັບ 60°, ການເຄິ່ງຄືຮັກສາຂະໜາດມຸມ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- A′B′ = 3 cm"}</span>,
          <span key="c1-2">{"- ມຸມ ∠B′ = 45°"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"- ໃຈກາງ (ຫຼື ເສັ້ນຜ່ານໃຈກາງ)"}</span>,
          <span key="c2-2">{"- ບໍ່ສິ້ນສຸດ (ຫຼື ຫຼາຍບໍ່ສິ້ນສຸດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"AOD (ເນື່ອງຈາກ B′ ≡ D ທຽບໃស່ AC ແລະ A, O ນອນຢູ່ເທິງ AC)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"90 (ເນື່ອງຈາກການເຄິ່ງຄືຮັກສາມຸມສາກ 90°)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ວິທີການສ້າງເມັດ ແລະ ເສັ້ນຊື່ເຄິ່ງຄືດ້ວຍວົງວຽນ ເປັນການຝຶກທັກສະເລຂາຄະນິດທີ່ດີເລີດ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
