import React from "react";
import { UnitData } from "../units2";

export const unit6Data: UnitData = {
  unitNumber: 6,
  unitTitle: "ພາກທີ I - ບົດທີ 6: ອັດຕາສ່ວນ ແລະ ອັດຕາສ່ວນພົວພັນ (Ratios and Proportions)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນ (Ratio), ການແກ້ໂຈດບັນຫາອັດຕາການເຮັດວຽກຮ່ວມກັນ (Combined Work Rates), ແລະ ການແບ່ງປັນສ່ວນພົວພັນ (Proportional Sharing)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 25-28",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນ (Concept of Ratio)",
      keyPoint: {
        title: "ອັດຕາສ່ວນແມ່ນຫຍັງ?",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ອັດຕາສ່ວນແມ່ນການປຽບທຽບສອງປະລິມານ ຫຼື ສອງຂະໜາດທີ່ມີຫົວໜ່ວຍດຽວກັນ, ຂຽນໃນຮູບແບບ ເລກເສດສ່ວນ A/B ຫຼື A : B."}
              <br />
              {"- ມາດຕາສ່ວນແຜນຜັງ (Scale): ອັດຕາສ່ວນລະຫວ່າງຂະໜາດໃນແຜນຜັງ ແລະ ຂະໜາດຈິງ. ເຊັ່ນ ມາດຕາສ່ວນ 1 : 50,000 ໝາຍຄວາມວ່າ 1 cm ໃນແຜນຜັງ ເທົ່າກັບ 50,000 cm (0.5 km) ຕົວຈິງ."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ພໍ່ມີອາຍຸ 45 ປີ ແລະ ລູກມີອາຍຸ 11 ປີ."}
                <br />
                {"- ອັດຕາສ່ວນອາຍຸພໍ່ຕໍ່ອາຍຸລູກແມ່ນ: "}<strong>{"45 : 11  (ຫຼື 45/11)"}</strong>
                <br />
                {"- ອັດຕາສ່ວນອາຍຸລູກຕໍ່ອາຍຸພໍ່ແມ່ນ: "}<strong>{"11 : 45  (ຫຼື 11/45)"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ອັດຕາສ່ວນສາມາດຄັດຈ້ອນໃຫ້ເປັນອັດຕາສ່ວນຂັ້ນຕ່ຳໄດ້ຄືກັບເລກເສດສ່ວນທົ່ວໄປ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນອັດຕາສ່ວນຕໍ່ໄປນີ້ໃນຮູບແບບອັດຕາສ່ວນຂັ້ນຕ່ຳ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ອັດຕາສ່ວນ 120 cm ຕໍ່ 3 m (ປ່ຽນເປັນ cm ຄືກັນກ່ອນ) ⇒ 120 :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"= 2 :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ອັດຕາສ່ວນ 500 Kip ຕໍ່ 30 Kip ⇒"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{": 3"}</span>
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
                {"ໂຈດແຜນຜັງ ແລະ ໄລຍະທາງຕົວຈິງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແຜນຜັງມີມາດຕາສ່ວນ 1 : 150,000 (1 cm ແທນ 1.5 km ຈິງ). ຖ້າໄລຍະທາງໃນແຜນຜັງແມ່ນ 2.3 cm, ໄລຍະທາງຕົວຈິງແມ່ນຈັກ km?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: 2.3 × 1.5 ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"km"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໂຈດບັນຫາອັດຕາການເຮັດວຽກຮ່ວມກັນ ແລະ ການແບ່ງປັນສ່ວນພົວພັນ (Combined Rates & Proportional Sharing)",
      keyPoint: {
        title: "ສູດການຄິດໄລ່ອັດຕາຮ່ວມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ຖ້າຄົນທີ 1 ເຮັດວຽກແລ້ວໃນ a ຊົ່ວໂມງ, ຄົນທີ 2 ໃນ b ຊົ່ວໂມງ, ແລະ ຄົນທີ 3 ໃນ c ຊົ່ວໂມງ. ເວລາຮ່ວມກັນ t ແມ່ນ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#2E7D32", display: "block", textAlign: "center", margin: "8px 0" , whiteSpace: "nowrap"}}>{"1/t = 1/a + 1/b + 1/c"}</span>
              {"- ການແບ່ງປັນສ່ວນພົວພັນ: ເພື່ອແບ່ງປັນຈຳນວນ S ອອກເປັນພາກສ່ວນໃນອັດຕາສ່ວນ x : y : z. ແຕ່ລະສ່ວນຈະເທົ່າກັບ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#D84315", display: "block", textAlign: "center", margin: "8px 0" , whiteSpace: "nowrap"}}>{"S_x = S × x / (x + y + z)"}</span>
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ແບ່ງເງິນ 45,000 Kip ໃນອັດຕາສ່ວນ 7 : 5 : 3. ສ່ວນທີ 3 ຈະໄດ້: 45,000 × 3 / (7 + 5 + 3) = 45,000 × 3 / 15 = 9,000 Kip!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໂຈດອັດຕາການເຮັດວຽກຮ່ວມກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ທ້າວ ຄຳ ດຳນາແລ້ວຄົນດຽວໃນ 6 ຊົ່ວໂມງ, ນາງ ລີ ດຳນາແລ້ວຄົນດຽວໃນ 3 ຊົ່ວໂມງ, ແລະ ທ້າວ ສີ ດຳນາແລ້ວຄົນດຽວໃນ 4 ຊົ່ວໂມງ. ຖ້າທັງສາມຄົນຊ່ວຍກັນ ຈະໃຊ້ເວລາຈັກຊົ່ວໂມງ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: 1/t = 1/6 + 1/3 + 1/4 = 9/12 ⇒ t = 12/9 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຊົ່ວໂມງ (ເທົ່າກັບ 1 ຊົ່ວໂມງ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"ນາທີ)"}</span>
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
                {"ໂຈດການແບ່ງປັນສ່ວນພົວພັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແບ່ງເງິນ 45,000 ກີບ ອອກເປັນ 3 ສ່ວນໃນອັດຕາສ່ວນພົວພັນ 7 : 5 : 3. ຈົ່ງຊອກຫາສ່ວນແບ່ງຂອງສ່ວນທີ 1 (ສ່ວນທີ່ຫຼາຍສຸດ)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: 45,000 × (7 / 15) ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ກີບ"}</span>
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
              {"ໂຈດການແບ່ງປັນຈຳນວນໃຫຍ່ (Large Number Distribution): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແບ່ງຈຳນວນ 2,409 ອອກເປັນ 3 ສ່ວນໃນອັດຕາສ່ວນພົວພັນ 6 : 3 : 2. ຈົ່ງຊອກຫາຈຳນວນຂອງແຕ່ລະສ່ວນ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ສ່ວນທີ 1 (6 ສ່ວນ) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ສ່ວນທີ 2 (3 ສ່ວນ) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ສ່ວນທີ 3 (2 ສ່ວນ) ="}</span>
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
              {"ໂຈດການເປີດກັອກນ້ຳໃສ່ອ່າງ (Water Tap Filling): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກັອກນ້ຳທີ 1 ແລະ ທີ 2 ໄຂໃສ່ອ່າງພ້ອມກັນຈະເຮັດໃຫ້ນ້ຳເຕັມອ່າງໃນ 30 ນາທີ ແລະ 20 ນາທີ ຕາມລຳດັບ. ຖ້າເປີດກັອກທີ 3 ປ່ອຍນ້ຳອອກຈະເຮັດໃຫ້ນ້ຳໝົດອ່າງໃນ 40 ນາທີ. ຖ້າໄຂທັງ 3 ກັອກພ້ອມກັນ ຈະໃຊ້ເວລາຈັກນາທີຈຶ່ງເຕັມອ່າງ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ເວລາຮ່ວມ t = 240 /"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"ນາທີ"}</span>
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
            {"ໂຈດຄັດຈ້ອນອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ອັດຕາສ່ວນ 30 cm ຕໍ່ 1 m ໃນຮູບແບບຂັ້ນຕ່ຳແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 3 :"}</span>
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
            {"ໂຈດການແບ່ງປັນສ່ວນພົວພັນງ່າຍດາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ແບ່ງເງິນ 45,000 Kip ໃຫ້ 3 ສ່ວນໃນອັດຕາສ່ວນ 7 : 5 : 3. ສ່ວນແບ່ງທີ່ນ້ອຍທີ່ສຸດແມ່ນຈັກ Kip?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ຮັບ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"Kip."}</span>
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
          <span key="1-1">{"(1) 300 (cm), 5 (ຄິດໄລ່: 120 / 300 = 12 / 30 = 2 / 5)"}</span>,
          <span key="1-2">{"(2) 50 (ຄິດໄລ່: 500 : 30 = 50 : 3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"3.45 (ຄິດໄລ່: 2.3 × 1.5 = 3.45 km)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"1.33 (ຫຼື 4/3)"}</span>,
          <span key="3-2">{"20"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"21,000 (ຄິດໄລ່: 45,000 × 7 / 15 = 21,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ສ່ວນທີ 1 = 1,314"}</span>,
          <span key="c1-2">{"- ສ່ວນທີ 2 = 657"}</span>,
          <span key="c1-3">{"- ສ່ວນທີ 3 = 438 (ຄິດໄລ່: 2,409 / 11 = 219. ຄູນກັບ 6, 3, 2 ຕາມລຳດັບ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"14"}</span>,
          <span key="c2-2">{"17.14 (ຄິດໄລ່: 1/t = 1/30 + 1/20 - 1/40 = 7/120 ⇒ t = 120/7 = 17.14 ນາທີ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"10 (ຄິດໄລ່: 30 cm : 100 cm = 3 : 10)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"9,000 (ຄິດໄລ່: 45,000 × 3 / 15 = 9,000 Kip)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ເຈົ້າໄດ້ຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນ, ໂຈດການເຮັດວຽກຮ່ວມກັນ ແລະ ການແບ່ງປັນຕາມອັດຕາສ່ວນພົວພັນຢ່າງຄົບຖ້ວນແລ້ວ. ນີ້ແມ່ນຫົວຂໍ້ທີ່ມີປະໂຫຍດຫຼາຍໃນຊີວິດຈິງ!"
  }
};
