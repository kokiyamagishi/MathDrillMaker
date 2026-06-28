import React from "react";
import { Angle } from "../../components/Angle";
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
              {"- [Ox) ແລະ [Oy) ເອີ້ນວ່າ "}<strong>{"ຂ້າງ (Sides)"}</strong>{" ຂອງມຸມ, ສັນຍະລັກດ້ວຍ "} <Angle>xOy</Angle> {" ຫຼື "} <Angle>yOx</Angle> {"."}
            </p>

            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ການຈຳແນກມຸມຕາມຂະໜາດ (ອົງສາ):"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li><strong>{"ມຸມສູນ (Null Angle): "}</strong>{" ມີຂະໜາດເທົ່າກັບ 0°"}</li>
                <li><strong>{"ມຸມແຫຼມ (Acute Angle): "}</strong>{" ໃຫຍ່ກວ່າ 0° ແຕ່ ນ້ອຍກວ່າ 90° (0° < θ < 90°)"}</li>
                <li><strong>{"ມຸມສາກ (Right Angle): "}</strong>{" ມີຂະໜາດເທົ່າກັບ 90°"}</li>
                <li><strong>{"ມຸມຫວາ (Obtuse Angle): "}</strong>{" ໃຫຍ່ກວ່າ 90° ແຕ່ ນ້ອຍກວ່າ 180° (90° < θ < 180°)"}</li>
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
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ມຸມ 45° ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ມຸມ 135° ແມ່ນ"}</span>
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
                {"ຖ້າຂ້າງທັງສອງຂອງມຸມ [Ox) ແລະ [Oy) ປະກອບກັນເປັນເສັ້ນຊື່ດຽວກັນ, ມຸມ "} <Angle>xOy</Angle> {" ນີ້ຈະເປັນມຸມຊະນິດໃດ ແລະ ມີຂະໜາດຈັກອົງສາ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຕອບ: ເປັນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ມີຂະໜາດ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>
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
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ຄຸນລັກສະນະທີ່ສຳຄັນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6" }}>
                {"ສອງມຸມຂ້າມຈອມກັນ ຈະມີຂະໜາດເທົ່າກັນສະເໝີ!"}
                <br />
                {"ຕົວຢ່າງ: ຖ້າເສັ້ນຊື່ (𝑥𝑦) ຕັດ (zt) ຢູ່ O. ເຮົາໄດ້ "} <Angle>xOz</Angle> {" ແລະ "} <Angle>yOt</Angle> {" ແມ່ນມຸມຂ້າມຈອມກັນ, ດັ່ງນັ້ນ "} <Angle>xOz</Angle> {" = "} <Angle>yOt</Angle> {"."}
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
                {"ໃຫ້ສອງເສັ້ນຊື່ຕັດກັນຢູ່ O ປະກອບເປັນ "} <Angle>AOC</Angle> {" = 50°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ "} <Angle>BOD</Angle> {" ເຊິ່ງເປັນມຸມຂ້າມຈອມກັບ "} <Angle>AOC</Angle> {"? "}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: "} <Angle>BOD</Angle> {" ="}</span>
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
                {"ໃຫ້ສອງເສັ້ນຊື່ (𝑥𝑦) ຕັດ (zt) ຢູ່ O. ຖ້າ "} <Angle>xOz</Angle> {" = 60°, ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ "} <Angle>xOt</Angle> {" ທີ່ຢູ່ຕິດກັນເທິງເສັ້ນຊື່ (zt)? "}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: "} <Angle>xOt</Angle> {" ="}</span>
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
              {"ໂຈດຄິດໄລ່ມຸມໃນຮູບສາມແຈ (Triangle Angle Sum): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ໃດໜຶ່ງ, ຜົນບວກຂອງສາມມຸມໃນ "} <Angle>A</Angle> {" + "} <Angle>B</Angle> {" + "} <Angle>C</Angle> {" = 180°. ຖ້າຮູ້ "} <Angle>A</Angle> {" = 45° ແລະ "} <Angle>B</Angle> {" = 75°, ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ "} <Angle>C</Angle> {"?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: "} <Angle>C</Angle> {" ="}</span>
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
    hintText: ""
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
            {"ໃຫ້ສອງເສັ້ນຊື່ຕັດກັນຢູ່ O ປະກອບເປັນ "} <Angle>1</Angle> {" = 120°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ "} <Angle>2</Angle> {", "} <Angle>3</Angle> {", "} <Angle>4</Angle> {" ທີ່ເຫຼືອ? (ໂດຍ "} <Angle>3</Angle> {" ແມ່ນມຸມຂ້າມຈອມກັບ "} <Angle>1</Angle> {", ສ່ວນ "} <Angle>2</Angle> {" ແລະ "} <Angle>4</Angle> {" ຕິດກັນເທິງເສັ້ນຊື່)"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມ "} <Angle>3</Angle> {" ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"°"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມຸມ "} <Angle>2</Angle> {" = "} <Angle>4</Angle> {" ="}</span>
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
            {"ໃນຮູບສາມແຈສາກ ABC ທີ່ສາກຢູ່ A (ມຸມ "} <Angle>A</Angle> {" = 90°). ຖ້າມຸມ "} <Angle>B</Angle> {" = 35°, ຂະໜາດຂອງມຸມ "} <Angle>C</Angle> {" ຈະເທົ່າກັບຈັກອົງສາ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: "} <Angle>C</Angle> {" ="}</span>
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
          <span key="s1-1">{"- ມຸມ "} <Angle>3</Angle> {" = 120° (ມຸມຂ້າມຈອມ)"}</span>,
          <span key="s1-2">{"- ມຸມ "} <Angle>2</Angle> {" = "} <Angle>4</Angle> {" = 60° (180 - 120 = 60°)"}</span>
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
