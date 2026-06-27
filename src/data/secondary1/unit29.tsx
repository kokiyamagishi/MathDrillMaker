import React from "react";
import { UnitData } from "../units2";

export const unit29Data: UnitData = {
  unitNumber: 29,
  unitTitle: "ພາກທີ V - ບົດທີ 29: ການຊອກຫາພົດທີບໍ່ທັນຮູ້ຂອງອັດຕາສ່ວນ (Finding Unknown Terms of Proportion)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ໃນອັດຕາສ່ວນ (Fourth Proportional) ໂດຍໃຊ້ຫຼັກການຄູນສະຫຼັບ (Cross-Multiplication) ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 227-232",
  subSections: [
    {
      title: "1. ຫຼັກການຄູນສະຫຼັບ ແລະ ພົດທີສີ່ (Cross-Multiplication Principle)",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານ: ຜົນຄູນໄຂວ່ເທົ່າກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເຮົາມີສອງອັດຕາສ່ວນທີ່ເທົ່າກັນ: "}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0", display: "block", textAlign: "center", margin: "12px 0" }}>
                {"a/b = c/d   ⇒   a × d = b × c"}
              </span>
              {"ເຊິ່ງເຮົາສາມາດຊອກຫາພົດໃດໜຶ່ງທີ່ບໍ່ຮູ້ຄ່າ (ຕົວຢ່າງ: x) ໄດ້ຢ່າງງ່າຍດາຍ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#F9F9F9", borderRadius: "8px", borderLeft: "4px solid #4CAF50" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ສູດການຊອກຫາ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: "8px 0 0 0", paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ຖ້າຊອກຫາ x ໃນ "}<strong>{"a/b = c/x"}</strong>{" ⇒ x = (b × c) / a"}</li>
                <li>{"ຖ້າຊອກຫາ x ໃນ "}<strong>{"x/b = c/d"}</strong>{" ⇒ x = (b × c) / d"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ຜົນຄູນໄຂວ່ (Cross-Product) ຂອງສອງອັດຕາສ່ວນທີ່ເທົ່າກັນ ຈະມີຄ່າເທົ່າກັນສະເໝີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາພົດທີບໍ່ທັນຮູ້ (x, y, z) ຈາກອັດຕາສ່ວນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຖ້າ "}</span>
                  <span style={{ fontWeight: "bold" }}>{"35 / 25 = 21 / x"}</span>
                  <span>{" ⇒ 35 × x = 25 × 21 ⇒ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຖ້າ "}</span>
                  <span style={{ fontWeight: "bold" }}>{"24 / 32 = y / 64"}</span>
                  <span>{" ⇒ 32 × y = 24 × 64 ⇒ y ="}</span>
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
                {"ຊອກຫາຄ່າຂອງ z ຈາກອັດຕາສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"152 / z = 95 / 55 ⇒ z = ("}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{") / 95 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ໂຈດບັນຫາໂດຍການຕັ້ງອັດຕາສ່ວນ (Solving Real-world Problems)",
      keyPoint: {
        title: "ຂັ້ນຕອນການແກ້ໂຈດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນມີ 3 ຂັ້ນຕອນຫຼັກ:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຕັ້ງຕົວປ່ຽນ: "}</strong>{" ກໍານົດຕົວປ່ຽນ (ເຊັ່ນ x) ແທນປະລິມານທີ່ຕ້ອງການຊອກຫາ."}</li>
              <li><strong>{"ຂຽນສົມຜົນອັດຕາສ່ວນ: "}</strong>{" ຕັ້ງອັດຕາສ່ວນໃຫ້ຖືກຕ້ອງຕາມຄວາມສຳພັນ."}</li>
              <li><strong>{"ຄິດໄລ່: "}</strong>{" ໃຊ້ຫຼັກການຄູນສະຫຼັບເພື່ອຊອກຫາຄ່າຂອງຕົວປ່ຽນນັ້ນ."}</li>
            </ol>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ແປ້ງ 15 kg ເຮັດເຂົ້າຈີ່ໄດ້ 21 kg. ຖ້າມີແປ້ງ 22 kg ຈະເຮັດໄດ້ x kg. ຕັ້ງເປັນ 21/15 = x/22 ⇒ x = (21 × 22)/15 = 30.8 kg!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຊີ້ນໝູ 600 g ລາຄາ 15,000 ກີບ. ຖ້າຕ້ອງການຊື້ຊີ້ນໝູ 900 g ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ສົມຜົນ: x / 900 = 15,000 / 600 ⇒ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກີບ"}</span>
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
                {"ລົດຍົນຄັນໜຶ່ງໃຊ້ນ້ຳມັນ 13 ລິດ ເພື່ອແລ່ນໄດ້ໄລຍະທາງ 260 km. ຖ້າມີນ້ຳມັນ 85 ລິດ ຈະແລ່ນໄດ້ໄລຍະທາງຈັກ km? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ສົມຜົນ: x / 85 = 260 / 13 ⇒ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"km"}</span>
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
              {"ໂຈດແຕ້ມແຜນຜັງເຮືອນ (Scale Model Plot): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນແຜນຜັງ, ຂະໜາດຫຍໍ້ 12 cm ແທນຂະໜາດຈິງ 2,400 cm. ຖ້າຫາກຂະໜາດຫຍໍ້ຂອງຄວາມກວ້າງແມ່ນ 6 cm, ຂະໜາດຈິງຈະແມ່ນຈັກ cm? ແລະ ຖ້າຂະໜາດຈິງແມ່ນ 1,600 cm, ຂະໜາດຫຍໍ້ b ຈະແມ່ນຈັກ cm?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຂະໜາດຈິງຂອງຄວາມກວ້າງ (a) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຂະໜາດຫຍໍ້ (b) ="}</span>
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດອັດຕາສ່ວນປະສົມໂລຫະ (Alloy Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທອງແດງມີມວນສານພົວພັນກົງກັບບໍລິມາດ. ບໍລິມາດທອງແດງ 8 cm³ ມີມວນສານ 71.2 g. ຖ້າມີບໍລິມາດ 50 cm³, ຈະມີມວນສານຈັກ g? (ປັດເສດເປັນເລກທົດສະນິຍົມ 1 ຕຳແໜ່ງ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ມວນສານ x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"g"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ມາດຕາສ່ວນແມ່ນ 12 / 2400 = 1 / 200. ດັ່ງນັ້ນ ຂະໜາດຈິງ a = 6 × 200 = 1,200 cm. ຂະໜາດຫຍໍ້ b = 1,600 / 200 = 8 cm. ສ່ວນມວນສານທອງແດງ: x = (71.2 × 50) / 8 = 445 g!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຫາຄ່າ y ຈາກສົມຜົນອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຊອກຫາ y ຈາກ: 34 / 136 = y / 6"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: y ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດແລ່ນລົດໄຟ (Train Distance): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລົດໄຟແລ່ນໄດ້ໄລຍະທາງ 152 km ໃນເວລາ 2 ຊົ່ວໂມງ. ຖ້າແລ່ນດ້ວຍຄວາມໄວເທົ່າເດີມເປັນເວລາ 5 ຊົ່ວໂມງ ຈະໄດ້ໄລຍະທາງຈັກ km?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄລຍະທາງ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"km."}</span>
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
          <span key="1-1">{"(1) 15 (ຄິດໄລ່: 25 × 21 / 35)"}</span>,
          <span key="1-2">{"(2) 48 (ຄິດໄລ່: 24 × 64 / 32)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"152 × 55"}</span>,
          <span key="2-2">{"88 (ຄິດໄລ່: 152 × 55 / 95)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"15,000 × 900 / 600"}</span>,
          <span key="3-2">{"22,500"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"260 × 85 / 13"}</span>,
          <span key="4-2">{"1,700"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ຂະໜາດຈິງ a = 1,200 cm (ຄິດໄລ່: 6 × 2,400 / 12)"}</span>,
          <span key="c1-2">{"- ຂະໜາດຫຍໍ້ b = 8 cm (ຄິດໄລ່: 1,600 × 12 / 2,400)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"445 (ຄິດໄລ່: 71.2 × 50 / 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1.5 (ຄິດໄລ່: 34 × 6 / 136)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"380 (ຄິດໄລ່: 152 × 5 / 2)"}</span>
        ]
      }
    ],
    advice: "ສຸດຍອດຫຼາຍ! ການຊອກຫາພົດທີບໍ່ທັນຮູ້ຂອງອັດຕາສ່ວນແມ່ນທັກສະທີ່ສຳຄັນທີ່ສຸດໃນຄະນິດສາດ ແລະ ວິທະຍາສາດ. ເຈົ້າເຮັດໄດ້ດີຫຼາຍ!"
  }
};
