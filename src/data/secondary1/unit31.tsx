import React from "react";
import { UnitData } from "../units2";

export const unit31Data: UnitData = {
  unitNumber: 31,
  unitTitle: "ພາກທີ V - ບົດທີ 31: ອັດຕາສ່ວນພົວພັນປີ້ນ (Inverse Proportion)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນປີ້ນ (Inverse Proportion), ຄວາມແຕກຕ່າງລະຫວ່າງພົວພັນກົງ ແລະ ພົວພັນປີ້ນ, ຫຼັກການຄົງທີ່ຂອງຜົນຄູນ x × y = C, ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 243-248",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນປີ້ນ (Concept of Inverse Proportion)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຜົນຄູນຄົງທີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ສອງປະລິມານ x ແລະ y ເອີ້ນວ່າ "}<strong>{"ອັດຕາສ່ວນພົວພັນປີ້ນ"}</strong>{" ຖ້າວ່າປະລິມານໜຶ່ງເພີ່ມຂຶ້ນ n ເທື່ອ, ອີກປະລິມານໜຶ່ງຈະຫຼຸດລົງ n ເທື່ອຕາມລຳດັບ."}
              <br />
              {"- ຜົນຄູນຂອງສອງປະລິມານນີ້ຈະມີຄ່າຄົງທີ່ສະເໝີ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#1565C0", paddingLeft: "16px" }}>{"x × y = C   (C ແມ່ນຕົວເລກຄົງທີ່)"}</span>
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ນັກຮຽນ 3 ຄົນ ຊ່ວຍກັນຂຸດໜານຜັກແລ້ວໃນເວລາ 4 ມື້ (ຜົນຄູນຄົງທີ່ C = 3 × 4 = 12 ມື້-ຄົນ)."}
                <br />
                {"- ຖ້າມີ 1 ຄົນ ຕ້ອງໃຊ້ເວລາ: 12 / 1 = 12 ມື້."}
                <br />
                {"- ຖ້າມີ 6 ຄົນ ຕ້ອງໃຊ້ເວລາ: 12 / 6 = 2 ມື້."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ໃນອັດຕາສ່ວນພົວພັນປີ້ນ, ຜົນຄູນຂອງແຕ່ລະຄູ່ປະລິມານ (x × y) ຈະເທົ່າກັນສະເໝີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຕົວເລກໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງຕາມຫຼັກອັດຕາສ່ວນພົວພັນປີ້ນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຖ້ານັກຮຽນ 3 ຄົນ ຂຸດດິນແລ້ວໃນ 4 ມື້ ⇒ ນັກຮຽນ 6 ຄົນ ຈະຂຸດແລ້ວໃນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ມື້"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຖ້ານັກຮຽນ 3 ຄົນ ຂຸດດິນແລ້ວໃນ 4 ມື້ ⇒ ນັກຮຽນ 1 ຄົນ ຈະຂຸດແລ້ວໃນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ມື້"}</span>
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
                {"ກຳມະກອນ 15 ຄົນ ປຸກເຮືອນຫຼັງໜຶ່ງແລ້ວໃນ 20 ມື້. ຖ້າຢາກໃຫ້ປຸກແລ້ວພາຍໃນ 10 ມື້ ຈະຕ້ອງໃຊ້ກຳມະກອນຈັກຄົນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: ຄົນ = (15 × 20) /"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ໂຈດບັນຫາພົວພັນປີ້ນໃນຊີວິດປະຈຳວັນ (Solving Inverse Proportion Problems)",
      keyPoint: {
        title: "ການແກ້ໂຈດບັນຫາໂດຍການຄິດໄລ່ຜົນຄູນຄົງທີ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ວິທີການແກ້ໂຈດອັດຕາສ່ວນພົວພັນປີ້ນ:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຊອກຫາຄ່າຜົນຄູນຄົງທີ່ (C): "}</strong>{" ຄູນປະລິມານຄູ່ທຳອິດທີ່ຮູ້ຄ່າທັງສອງ."}</li>
              <li><strong>{"ຫານໃຫ້ປະລິມານທີ່ຮູ້ຄ່າທີສາມ: "}</strong>{" ເອົາ C ຫານໃຫ້ປະລິມານໃໝ່ເພື່ອຊອກຫາຄຳຕອບ."}</li>
            </ol>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຖອກນ້ຳໃສ່ຕຸກຂະໜາດ 75 cL ໄດ້ 79 ຕຸກ. ຖ້າປ່ຽນມາໃສ່ຕຸກຂະໜາດ 25 cL ຈະໄດ້: (75 × 79) / 25 = 3 × 79 = 237 ຕຸກ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄົນງານ 10 ຄົນ ໃຊ້ເວລາ 6 ມື້ ເພື່ອສ້າງຫົນທາງໄດ້ 125 m. ຖ້າໃຊ້ຄົນງານ 12 ຄົນ ເພື່ອສ້າງຫົນທາງ 125 m ຄືເກົ່າ ຈະຕ້ອງໃຊ້ເວລາຈັກມື້? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: ເວລາ = (10 × 6) / 12 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                <span>{"ມື້"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຖອກນ້ຳມັນໃສ່ຖັງຂະໜາດ 60 ລິດ ໄດ້ 40 ຖັງ. ຖ້າຢາກຖອກໃສ່ຖັງຂະໜາດ 80 ລິດ ຈະໄດ້ຈັກຖັງ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: ຈຳນວນຖັງ = ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{") / 80 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                  <span>{"ຖັງ"}</span>
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
              {"ໂຈດຄວາມໄວ ແລະ ໄລຍະເວລາ (Speed vs Time): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ລົດຍົນຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວ 30 km/h ໃຊ້ເວລາເດີນທາງ 72 ນາທີ. ຖ້າຫາກລົດຍົນຄັນນີ້ແລ່ນດ້ວຍຄວາມໄວ 48 km/h ຈະຕ້ອງໃຊ້ເວລາເດີນທາງຈັກນາທີ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ເວລາເດີນທາງ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ນາທີ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດງົວແລະເຟືອງຫຍ້າ (Cows vs Food Days): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ງົວ 12 ຕົວ ກິນຫຍ້າ 3 ມັດ ໝົດພາຍໃນ 15 ມື້. ຖ້າຫາກມີງົວ 18 ຕົວ ຈະກິນຫຍ້າ 3 ມັດ ໝົດພາຍໃນຈັກມື້? (ສົມມຸດວ່າງົວທຸກຕົວມີອັດຕາການກິນເທົ່າກັນ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຈຳນວນມື້ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ມື້"}</span>
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
            {"ໂຈດການສ້າງເຮືອນ (Building Workers): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ກຳມະກອນ 6 ຄົນ ໃຊ້ເວລາ 8 ມື້ ເພື່ອເຮັດວຽກໜຶ່ງໃຫ້ສຳເລັດ. ຖ້າຢາກໃຫ້ວຽກນັ້ນສຳເລັດພາຍໃນ 4 ມື້ ຈະຕ້ອງໃຊ້ກຳມະກອນທັງໝົດຈັກຄົນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຕ້ອງໃຊ້"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຄົນ."}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການຖອກນ້ຳ (Water Filling Bottles): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖອກນ້ຳໃສ່ຕຸກຂະໜາດ 75 cL ໄດ້ 79 ຕຸກ. ຖ້າປ່ຽນມາໃສ່ຕຸກຂະໜາດ 25 cL ຈະໄດ້ທັງໝົດຈັກຕຸກ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຕຸກ."}</span>
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
          <span key="1-1">{"(1) 2 (ຄິດໄລ່: 3 × 4 / 6)"}</span>,
          <span key="1-2">{"(2) 12 (ຄິດໄລ່: 3 × 4 / 1)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"10"}</span>,
          <span key="2-2">{"30 (ຄິດໄລ່: 15 × 20 / 10)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"5 (ຄິດໄລ່: 10 × 6 / 12)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"60 × 40"}</span>,
          <span key="4-2">{"30 (ຄິດໄລ່: 60 × 40 / 80)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"45 (ຄິດໄລ່: 30 × 72 / 48)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"10 (ຄິດໄລ່: 12 × 15 / 18)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"12 (ຄິດໄລ່: 6 × 8 / 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"237 (ຄິດໄລ່: 75 × 79 / 25)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການພົວພັນປີ້ນເປັນທັກສະທີ່ສຳຄັນຫຼາຍໃນການວາງແຜນການເຮັດວຽກ, ຄຳນວນເວລາເດີນທາງ ແລະ ການຄຸ້ມຄອງຊັບພະຍາກອນ. ເຈົ້າຮຽນຈົບພາກອັດຕາສ່ວນແລ້ວ!"
  }
};
