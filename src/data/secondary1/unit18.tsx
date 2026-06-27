import React from "react";
import { UnitData } from "../units2";

export const unit18Data: UnitData = {
  unitNumber: 18,
  unitTitle: "ພາກທີ II - ບົດທີ 18: ມຸມ ແລະ ການວັດແທກມຸມ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳນຶກຂອງມຸມ (Angle), ການວັດແທກມຸມ, ການຈຳແນກປະເພດຂອງມຸມ (ມຸມແຫຼມ, ມຸມສາກ, ມຸມຫວາ, ມຸມພຽງ, ມຸມເຕັມ) ແລະ ມຸມຂ້າມຈອມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 136-140",
  subSections: [
    {
      title: "1. ຄວາມສຳນຶກຂອງມຸມ ແລະ ປະເພດຂອງມຸມ (Concept and Types of Angles)",
      keyPoint: {
        title: "ສ່ວນປະກອບ ແລະ ການຈຳແນກປະເພດມຸມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມຸມ ແມ່ນຮູບຮ່າງເລຂາຄະນິດທີ່ປະກອບດ້ວຍສອງເຄິ່ງເສັ້ນຊື່ [Ox) ແລະ [Oy) ທີ່ມີເມັດເຄົ້າ O ຮ່ວມກັນ."}
              <br />
              {"- O ເອີ້ນວ່າ "}<strong>{"ຈອມ (Vertex)"}</strong>{" ຂອງມຸມ."}
              <br />
              {"- [Ox) ແລະ [Oy) ເອີ້ນວ່າ "}<strong>{"ຂ້າງ (Sides)"}</strong>{" ຂອງມຸມ, ສັນຍະລັກດ້ວຍ ∠xOy ຫຼື ∠yOx."}
            </p>

            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ການຈຳແນກມຸມຕາມຂະໜາດ (ອົງສາ):"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li><strong>{"ມຸມສູນ (Null Angle): "}</strong>{" ມີຂະໜາດເທົ່າກັບ 0°"}</li>
                <li><strong>{"ມຸມແຫຼມ (Acute Angle): "}</strong>{" ໃຫຍ່ກວ່າ 0° ແຕ່ ນ້ອຍກວ່າ 90° (0° < style={{\" < \"} θ < style={{\" < \"} 90°)"}</li>
                <li><strong>{"ມຸມສາກ (Right Angle): "}</strong>{" ມີຂະໜາດເທົ່າກັບ 90°"}</li>
                <li><strong>{"ມຸມຫວາ (Obtuse Angle): "}</strong>{" ໃຫຍ່ກວ່າ 90° ແຕ່ ນ້ອຍກວ່າ 180° (90° < style={{\" < \"} θ < style={{\" < \"} 180°)"}</li>
                <li><strong>{"ມຸມພຽງ (Straight Angle): "}</strong>{" ມີຂະໜາດເທົ່າກັບ 180°"}</li>
                <li><strong>{"ມຸມເຕັມ (Full Angle): "}</strong>{" ມີຂະໜາດເທົ່າກັບ 360°"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ມຸມສາກ (90°) ແມ່ນພື້ນຖານການວັດແທກທີ່ສຳຄັນທີ່ສຸດໃນເລຂາຄະນິດ ແລະ ການກໍ່ສ້າງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກປະເພດຂອງມຸມທີ່ມີຂະໜາດຕໍ່ໄປນີ້ (ມຸມແຫຼມ, ມຸມສາກ, ມຸມຫວາ, ມຸມພຽງ): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ມຸມ 45° ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ມຸມ 135° ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
                {"ຖ້າຂ້າງທັງສອງຂອງມຸມ [Ox) ແລະ [Oy) ປະກອບກັນເປັນເສັ້ນຊື່ດຽວກັນ, ມຸມ ∠xOy ນີ້ຈະເປັນມຸມຊະນິດໃດ ແລະ ມີຂະໜາດຈັກອົງສາ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ຕອບ: ເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                <span>{"ມີຂະໜາດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ມຸມຂ້າມຈອມ (Vertically Opposite Angles)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຄຸນລັກສະນະຂອງມຸມຂ້າມຈອມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອສອງເສັ້ນຊື່ຕັດກັນຢູ່ເມັດ O, ພວກມັນຈະປະກອບເປັນສອງຄູ່ມຸມທີ່ຢູ່ກົງກັນຂ້າມກັນ ເອີ້ນວ່າ "}<strong>{"ມຸມຂ້າມຈອມ"}</strong>{"."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຄຸນລັກສະນະທີ່ສຳຄັນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6" }}>
                {"ສອງມຸມຂ້າມຈອມກັນ ຈະມີຂະໜາດເທົ່າກັນສະເໝີ!"}
                <br />
                {"ຕົວຢ່າງ: ຖ້າເສັ້ນຊື່ (xy) ຕັດ (zt) ຢູ່ O. ເຮົາໄດ້ ∠xOz ແລະ ∠yOt ແມ່ນມຸມຂ້າມຈອມກັນ, ດັ່ງນັ້ນ ∠xOz = ∠yOt."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກຂອງສອງມຸມທີ່ຢູ່ຕິດກັນເທິງເສັ້ນຊື່ດຽວກັນ (ມຸມພາກຮ່ວມ) ແມ່ນ 180° ສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ສອງເສັ້ນຊື່ຕັດກັນຢູ່ O ປະກອບເປັນ ∠AOC = 50°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ∠BOD ເຊິ່ງເປັນມຸມຂ້າມຈອມກັບ ∠AOC? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: ∠BOD ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ສອງເສັ້ນຊື່ (xy) ຕັດ (zt) ຢູ່ O. ຖ້າ ∠xOz = 60°, ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ∠xOt ທີ່ຢູ່ຕິດກັນເທິງເສັ້ນຊື່ (zt)? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: ∠xOt ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                <span>{"= "}</span>
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
              {"ໂຈດຄິດໄລ່ມຸມໃນຮູບສາມແຈ (Triangle Angle Sum): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ໃດໜຶ່ງ, ຜົນບວກຂອງສາມມຸມໃນ ∠A + ∠B + ∠C = 180°. ຖ້າຮູ້ ∠A = 45° ແລະ ∠B = 75°, ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ∠C?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ∠C ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"°"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຄິດໄລ່ມຸມໃນໜ້າປັດໂມງ (Clock Angle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໂມງໜ່ວຍໜຶ່ງມີໜ້າປັດເປັນວົງມົນເຕັມ 360° ເຊິ່ງແບ່ງອອກເປັນ 12 ຊົ່ວໂມງເທົ່າກັນ. ຖ້າເຂັມຊົ່ວໂມງ ແລະ ເເຂັມນາທີຊີ້ບອກເວລາ 3:00 ໂມງພໍດີ, ພວກມັນຈະປະກອບເປັນມຸມທີ່ມີຂະໜາດຈັກອົງສາ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ປະກອບເປັນມຸມ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"°."}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ໜ້າປັດໂມງ 1 ຊົ່ວໂມງ = 360° / 12 = 30°. ເວລາ 3:00 ໂມງ ແມ່ນມີໄລຍະຫ່າງ 3 ຊົ່ວໂມງພໍດີ ດັ່ງນັ້ນ 30° × 3 = 90°!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດຄິດໄລ່ມຸມຂ້າມຈອມ ແລະ ມຸມພາກຮ່ວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ສອງເສັ້ນຊື່ຕັດກັນຢູ່ O ປະກອບເປັນ ∠1 = 120°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ∠2, ∠3, ∠4 ທີ່ເຫຼືອ? (ໂດຍ ∠3 ແມ່ນມຸມຂ້າມຈອມກັບ ∠1, ສ່ວນ ∠2 ແລະ ∠4 ຕິດກັນເທິງເສັ້ນຊື່)"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມ ∠3 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"°"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມ ∠2 = ∠4 ="}</span>
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
            {"ໂຈດການພົວພັນສາມແຈສາກ (Right Triangle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບສາມແຈສາກ ABC ທີ່ສາກຢູ່ A (ມຸມ ∠A = 90°). ຖ້າມຸມ ∠B = 35°, ຂະໜາດຂອງມຸມ ∠C ຈະເທົ່າກັບຈັກອົງສາ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ∠C ="}</span>
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
          <span key="1-1">{"(1) ມຸມແຫຼມ (ເນື່ອງຈາກ 45° ຢູ່ລະຫວ່າງ 0° ຫາ 90°)"}</span>,
          <span key="1-2">{"(2) ມຸມຫວາ (ເນື່ອງຈາກ 135° ຢູ່ລະຫວ່າງ 90° ຫາ 180°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"ມຸມພຽງ"}</span>,
          <span key="2-2">{"180"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"50 (ຍ້ອນວ່າສອງມຸມຂ້າມຈອມກັນມີຂະໜາດເທົ່າກັນສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"180 - 60"}</span>,
          <span key="4-2">{"120"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"60 (ຄິດໄລ່: 180 - 45 - 75 = 60°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"90 (ຄິດໄລ່: 3 × 30° = 90° ເຊິ່ງເປັນມຸມສາກພໍດີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- ມຸມ ∠3 = 120° (ມຸມຂ້າມຈອມ)"}</span>,
          <span key="s1-2">{"- ມຸມ ∠2 = ∠4 = 60° (180 - 120 = 60°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"55 (ຄິດໄລ່: 180 - 90 - 35 = 55°)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການວັດແທກມຸມ ແລະ ຈຳແນກປະເພດຂອງມຸມ ແມ່ນບາດກ້າວສຳຄັນທີ່ສຸດໃນການຄິດໄລ່ຮູບເລຂາຄະນິດຫຼາຍແຈ. ສູ້ຕໍ່ໄປເດີ້!"
  }
};
