import React from "react";
import { UnitData } from "../units2";

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ພາກທີ I - ບົດທີ 11: ການແກ້ສົມຜົນຮາກຂັ້ນສອງ (Solving Radical Equations)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການແກ້ສົມຜົນຮາກຂັ້ນສອງ (Radical Equations), ການກໍານົດເງື່ອນໄຂ ຫຼື ເຂດກໍານົດຂອງສົມຜົນ, ແລະ ການກວດຄືນໃຈຜົນເພື່ອຕັດໃຈຜົນນອກຂອບເຂດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 58-61",
  subSections: [
    {
      title: "1. ຫຼັກການແກ້ສົມຜົນຮາກຂັ້ນສອງພື້ນຖານ (Basic Radical Equations)",
      keyPoint: {
        title: "ຫຼັກການແກ້ສົມຜົນ √A = B",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສົມຜົນຮາກຂັ້ນສອງພື້ນຖານຢູ່ໃນຮູບແບບ √A = B. ເພື່ອແກ້ສົມຜົນນີ້ ເຮົາຕ້ອງປະຕິບັດຕາມຫຼັກການ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ເງື່ອນໄຂ ແລະ ການຂຶ້ນກຳລັງສອງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ສົມຜົນ "}<strong>{"√A = B"}</strong>{" ສາມາດແກ້ໄດ້ກໍຕໍ່ເມື່ອ: "}
                <br />
                <span style={{ fontSize: "1.30rem", fontWeight: "bold", color: "#1565C0" }}>{"B ≥ 0   ແລະ   A = B²"}</span>
              </p>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ: ແກ້ສົມຜົນ √2x - 1 = x - 2."}
              <br />
              {"- ເງື່ອນໄຂ: x - 2 ≥ 0 ⇒ x ≥ 2."}
              <br />
              {"- ຂຶ້ນກຳລັງສອງທັງສອງພາກ: 2x - 1 = (x - 2)² ⇒ 2x - 1 = x² - 4x + 4 ⇒ x² - 6x + 5 = 0."}
              <br />
              {"- ແກ້ສົມຜົນໄດ້: x = 1 ຫຼື x = 5."}
              <br />
              {"- ກວດເບິ່ງເງື່ອນໄຂ x ≥ 2: ພົບວ່າ x = 1 (ຂັດກັບເງື່ອນໄຂ) ແລະ x = 5 (ສອດຄ່ອງ). ດັ່ງນັ້ນ ໃຈຜົນແມ່ນ S = {5}."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ໝາຍເຫດ: ຜົນໄດ້ຮັບຈາກເຄື່ອງໝາຍຮາກຂັ້ນສອງ (√) ຕ້ອງມີຄ່າບວກ ຫຼື ເທົ່າກັບສູນສະເໝີ. ດັ່ງນັ້ນ ພາກສ່ວນ B ຕ້ອງຕ່າງຈາກຄ່າລົບ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນຮາກຂັ້ນສອງພື້ນຖານຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) √(x - 1) = 3 ⇒ ໃຈຜົນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) √(2x + 5) = x + 1 (ເງື່ອນໄຂ x ≥ -1) ⇒ ໃຈຜົນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"(ໝາຍເຫດ: ໃຈຜົນ x = -2 ຖືກຕັດອອກ)"}</span>
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
                {"ຈົ່ງແກ້ສົມຜົນ ແລະ ກວດຄືນເງື່ອນໄຂ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແກ້ສົມຜົນ: √(x² - 3x + 4) = x - 1. (ເງື່ອນໄຂ x ≥ 1)"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຂຶ້ນກຳລັງສອງ: x² - 3x + 4 = x² - 2x + 1 ⇒ x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສົມຜົນທີ່ມີຫຼາຍເລກຮາກ (Radical Equations with Multiple Radicals)",
      keyPoint: {
        title: "ການຍ້າຍພົດ ແລະ ການຂຶ້ນກຳລັງສອງຫຼາຍເທື່ອ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ເມື່ອສົມຜົນມີຫຼາຍເລກຮາກ, ເຮົາຄວນຍ້າຍພົດໃຫ້ຮາກຢູ່ແຕ່ລະພາກຂອງສົມຜົນ ເພື່ອໃຫ້ງ່າຍໃນການຂຶ້ນກຳລັງສອງ."}
              <br />
              {"- ຫຼັງຈາກຂຶ້ນກຳລັງສອງເທື່ອທຳອິດແລ້ວ, ຖ້າຍັງມີຮາກເຫຼືອຢູ່, ໃຫ້ຈັດກຸ່ມໃຫ້ຮາກຢູ່ພາກດຽວ ແລ້ວຂຶ້ນກຳລັງສອງອີກເທື່ອໜຶ່ງ."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງສົມຜົນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແກ້ສົມຜົນ: √(x + 7) - √(2x - 8) = 1"}
                <br />
                {"- ຍ້າຍພົດ: √(x + 7) = 1 + √(2x - 8)"}
                <br />
                {"- ເງື່ອນໄຂ: x ≥ 4."}
                <br />
                {"- ແກ້ສົມຜົນ ແລະ ຂຶ້ນກຳລັງສອງສອງເທື່ອ ຈະໄດ້ໃຈຜົນ S = {9}."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງກວດເບິ່ງເງື່ອນໄຂທຸກໆຄັ້ງຫຼັງຈາກແກ້ສົມຜົນສອງຮາກ ເພາະມີໂອກາດສູງທີ່ຈະໄດ້ໃຈຜົນນອກຂອບເຂດ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນສອງຮາກຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແກ້ສົມຜົນ: √(x + 7) - √(2x - 8) = 1"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: ໃຈຜົນ x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໂຈດບັນຫາຟີຊິກສາດເລື່ອງ Pendulum (ເວລາແກວ່ງຂອງລູກຕຸ້ມ): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ສູດເວລາແກວ່ງຂອງລູກຕຸ້ມແມ່ນ: T = 2π√(L / g). ຖ້າເຮົາປ່ຽນສູດນີ້ເພື່ອຊອກຫາ L (ຄວາມຍາວລູກຕຸ້ມ), ຈະໄດ້ L ເທົ່າກັບເທົ່າໃດ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: L = (T² × g) / (4 ×"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{")"}</span>
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
              {"ໂຈດແກ້ສົມຜົນຮາກຂັ້ນສອງຍາກ (Advanced Radical Equation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນ: √(3x + 1) - √(x - 1) = 2. (ຊອກຫາໃຈຜົນ x)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໃຈຜົນ x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"(ໝາຍເຫດ: x = 1 ຖືກຕັດອອກຫຼືບໍ່? ໃຫ້ກວດເບິ່ງ)"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຟີຊິກສາດເລື່ອງ Rocket Escape Velocity (ຄວາມໄວຫຼຸດພົ້ນ): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສູດຄວາມໄວຫຼຸດພົ້ນແມ່ນ: v = √(2GM / R). ຈົ່ງປ່ຽນສູດນີ້ເພື່ອຊອກຫາລັດສະໝີຂອງໂລກ R ຕາມຕົວປ່ຽນອື່ນໆ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: R = (2 × G × M) /"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ສົມຜົນ √(3x + 1) = 2 + √(x - 1) ⇒ 3x + 1 = 4 + 4√(x - 1) + x - 1 ⇒ 2x - 2 = 4√(x - 1) ⇒ x - 1 = 2√(x - 1) ⇒ (x - 1)² = 4(x - 1) ⇒ (x - 1)(x - 1 - 4) = 0 ⇒ x = 1 ຫຼື x = 5. ທັງສອງຄ່າແມ່ນສອດຄ່ອງ! ສ່ວນສູດຄວາມໄວຫຼຸດພົ້ນ: v² = 2GM/R ⇒ R = 2GM/v²!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ສົມຜົນຮາກຂັ້ນສອງບໍ່ມີໃຈຜົນ (No Solution): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ: √(x - 5) = -3"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ສົມຜົນນີ້"}</span>
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
            {"ສົມຜົນຮາກຂັ້ນສອງພື້ນຖານງ່າຍດາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ: √(3x - 2) = 4"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໃຈຜົນ x ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 10 (ຄິດໄລ່: x - 1 = 3² = 9 ⇒ x = 10)"}</span>,
          <span key="1-2">{"(2) 2 (ຄິດໄລ່: 2x+5 = (x+1)² = x²+2x+1 ⇒ x² = 4 ⇒ x = 2, ເພາະ x = -2 ຂັດກັບເງື່ອນໄຂ x ≥ -1)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"3 (ຄິດໄລ່: x² - 3x + 4 = x² - 2x + 1 ⇒ -x = -3 ⇒ x = 3)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"9 (ຄິດໄລ່: ຈັດກຸ່ມ ແລະ ຂຶ້ນກຳລັງສອງສອງເທື່ອ ຈະໄດ້ x = 9)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"π² (ຄິດໄລ່: T² = 4π²(L / g) ⇒ L = T²g / 4π²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"1 ແລະ 5 (ຄິດໄລ່: (x - 1)(x - 5) = 0. ທັງສອງຄ່າແມ່ນສອດຄ່ອງກັບເງື່ອນໄຂ x ≥ 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"v² (ຄິດໄລ່: v² = 2GM / R ⇒ R = 2GM / v²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ບໍ່ມີໃຈຜົນ (ຄິດໄລ່: ເພາະຮາກຂັ້ນສອງບໍ່ສາມາດມີຄ່າເປັນລົບ -3 ໄດ້)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"6 (ຄິດໄລ່: 3x - 2 = 16 ⇒ 3x = 18 ⇒ x = 6)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ເຈົ້າໄດ້ຮຽນຮູ້ກ່ຽວກັບການແກ້ສົມຜົນຮາກຂັ້ນສອງ ແລະ ການກວດຄືນເງື່ອນໄຂຢ່າງລະອຽດແລ້ວ. ພະຍາຍາມຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
