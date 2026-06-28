import React from "react";
import { UnitData } from "../units2";

export const unit10Data: UnitData = {
  unitNumber: 10,
  unitTitle: "ພາກທີ I - ບົດທີ 10: ການຄິດໄລ່ໜວດຄຳນວນທີ່ມີເລກຮາກ (Calculations with Radicals)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການບວກ, ລົບ, ຄູນ, ຫານສຳນວນທີ່ມີເລກຮາກ, ການຄິດໄລ່ໂດຍໃຊ້ຈຳນວນຄູ່ຮ່ວມ (Conjugates), ແລະ ວິທີການຄັດຮາກອອກຈາກພູດ (Rationalizing Denominators)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 51-56",
  subSections: [
    {
      title: "1. ການບວກ ແລະ ການລົບເລກຮາກ (Addition & Subtraction of Radicals)",
      keyPoint: {
        title: "ຫຼັກການບວກ-ລົບ ແລະ ຄັດຈ້ອນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ເຮົາສາມາດບວກ ຫຼື ລົບສຳນວນເລກຮາກທີ່ມີ 'ຮາກດຽວກັນ' ໄດ້ໂດຍກົງ ຄ້າຍຄືກັບການບວກລົບພົດຄ້າຍຄືກັນໃນພະຫຸພົດ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#1565C0", paddingLeft: "16px" , whiteSpace: "nowrap"}}>{"a√x + b√x = (a + b)√x"}</span>
              <br />
              {"- ຖ້າຮາກຕ່າງກັນ, ເຮົາຕ້ອງແຍກສ່ວນປະກອບເພື່ອຄັດຈ້ອນໃຫ້ເປັນຮາກຂັ້ນຕ່ຳກ່ອນ ແລ້ວຈຶ່ງນຳມາບວກລົບກັນ."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງການຄັດຈ້ອນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຄິດໄລ່: √12 - √108 + √27"}
                <br />
                {"- ປ່ຽນແຕ່ລະພົດ: √12 = 2√3   ;   √108 = 6√3   ;   √27 = 3√3"}
                <br />
                {"- ບວກລົບເຂົ້າກັນ: 2√3 - 6√3 + 3√3 = (2 - 6 + 3)√3 = -√3."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝາຍເຫດ: √(a + b) ບໍ່ເທົ່າກັບ √a + √b ເດັດຂາດ! ຕົວຢ່າງ: √(9 + 16) = √25 = 5. ແຕ່ √9 + √16 = 3 + 4 = 7!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ ແລະ ຄັດຈ້ອນສຳນວນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) √18 - 2√8 + √2 = 3√2 -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"√2 + √2 = 0"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) √45 - √125 + √20 = 3√5 -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"√5 + 2√5 = 0"}</span>
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
                {"ຈົ່ງຄັດຈ້ອນສຳນວນທີ່ມີຕົວປ່ຽນ (ຮູ້ວ່າ x, y ≥ 0): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄັດຈ້ອນ: √(27x³y) - √(12x³y)"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: ("}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                <span>{"- 2) × x√(3xy) = x√(3xy)"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຈຳນວນຄູ່ຮ່ວມ ແລະ ການຄັດຮາກອອກຈາກພູດ (Conjugates & Rationalizing)",
      keyPoint: {
        title: "ຈຳນວນຄູ່ຮ່ວມ (Conjugate) ແມ່ນຫຍັງ?",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ຈຳນວນຄູ່ຮ່ວມຂອງສຳນວນ (a - √b) ແມ່ນ (a + √b). ເມື່ອເຮົານຳເອົາສອງສຳນວນນີ້ມາຄູນກັນ ຈະເຮັດໃຫ້ເຄື່ອງໝາຍຮາກຂັ້ນສອງໝົດໄປ ຕາມເອກະລັກຜົນຕ່າງກຳລັງສອງ:"}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#D84315", display: "block", textAlign: "center", margin: "8px 0" , whiteSpace: "nowrap"}}>
                {"(a - √b)(a + √b) = a² - b"}
              </span>
              {"- ວິທີການຄັດຮາກອອກຈາກພູດ: ແມ່ນການຄູນທັງຕົວເສດ ແລະ ຕົວພູດດ້ວຍຈຳນວນຄູ່ຮ່ວມຂອງຕົວພູດ ເພື່ອບໍ່ໃຫ້ມີຮາກຢູ່ພູດ."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງການຄັດຮາກ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຄັດຮາກຂອງ: 3 / (√5 - 2)"}
                <br />
                {"- ຄູນຄູ່ຮ່ວມ (√5 + 2) ໃສ່ທັງເສດ ແລະ ພູດ:"}
                <br />
                <strong>{"3(√5 + 2) / ((√5 - 2)(√5 + 2)) = 3(√5 + 2) / (5 - 4) = 3(√5 + 2)."}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງຄູ່ຮ່ວມຂອງຮາກຂັ້ນສາມ: ຈຳນວນຄູ່ຮ່ວມຂອງ (³√a - ³√b) ແມ່ນ (³√a² + ³√ab + ³√b²). ເມື່ອຄູນກັນຈະໄດ້: a - b!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄັດຮາກອອກຈາກພູດຂອງສຳນວນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) 1 / (√3 - √2) = √3 +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) 6 / √3 = 2 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນຈຳນວນຄູ່ຮ່ວມຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄິດໄລ່: (3√2 - 2√5)(3√2 + 2√5)"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: (3√2)² - (2√5)² = 18 -"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"= "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
              {"ໂຈດການຫານສຳນວນທີ່ມີເລກຮາກ (Division of Radicals): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ ແລະ ຄັດຈ້ອນ: [ (√5 + 2) / (√3 - 2) ] ÷ [ (√3 + 2) / (√5 - 2) ]. (ແນະນຳ: ປ່ຽນຫານເປັນຄູນ ປີ້ນເສດສ່ວນ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ເທົ່າກັບ (5 - 4) / (3 - 4) = 1 /"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"= "}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຄັດຮາກຂັ້ນສາມອອກຈາກພູດ (Rationalizing Cubic Root): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄັດຮາກອອກຈາກພູດຂອງສຳນວນ: 1 / (³√3 - ³√2). (ຊອກຫາຕົວພູດຫຼັງຈາກຄັດຮາກແລ້ວ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕົວພູດໃໝ່ແມ່ນ = 3 - 2 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
            {"ການຄັດຈ້ອນຂັ້ນພື້ນຖານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນສຳນວນ: (√3 + √5)²"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 8 + 2 × √"}</span>
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
            {"ການບວກລົບຮາກຂັ້ນສາມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນສຳນວນ: ³√81 - ³√9"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: (³√"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"- 1) × ³√9"}</span>
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
          <span key="1-1">{"(1) 4 (ຄິດໄລ່: √18 - 2√8 + √2 = 3√2 - 4√2 + √2 = 0)"}</span>,
          <span key="1-2">{"(2) 5 (ຄິດໄລ່: √45 - √125 + √20 = 3√5 - 5√5 + 2√5 = 0)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"3 (ຄິດໄລ່: 3x√(3xy) - 2x√(3xy) = x√(3xy))"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) √2 (ຄິດໄລ່: 1(√3+√2) / (3-2) = √3+√2)"}</span>,
          <span key="3-2">{"(2) √3 (ຄິດໄລ່: 6√3 / 3 = 2√3)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"20"}</span>,
          <span key="4-2">{"-2 (ຄິດໄລ່: 18 - 20 = -2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"-1"}</span>,
          <span key="c1-2">{"-1 (ຄິດໄລ່: [ (√5+2)(√5-2) ] / [ (√3-2)(√3+2) ] = 1 / -1 = -1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"1 (ຄິດໄລ່: (³√3)³ - (³√2)³ = 3 - 2 = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"15 (ຄິດໄລ່: (√3+√5)² = 3 + 2√15 + 5 = 8 + 2√15)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"3 (ຄິດໄລ່: ³√81 = ³√(27 × 3) = 3 × ³√3. ດັ່ງນັ້ນ ³√81 - ³√9 = 3 × ³√3 - ³√9? ຂໍໂທດ, ³√81 - ³√9 = ³√(9 × 9) - ³√9? ³√81 = ³√(27 × 3) = 3 × ³√3, ³√81 - ³√9 = (³√9)² - ³√9 = (³√9 - 1) × ³√9? ຂໍໂທດ, ³√81 = ³√(9 × 9) = ³√9² = (³√9)². ດັ່ງນັ້ນ ³√81 - ³√9 = (³√9 - 1) × ³√9. ຕົວເລກໃນວ່າງແມ່ນ 9)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ເຈົ້າໄດ້ຮຽນຮູ້ກ່ຽວກັບການບວກ, ລົບ, ຄູນ, ຫານເລກຮາກ ແລະ ວິທີຄັດຮາກອອກຈາກພູດຢ່າງລະອຽດແລ້ວ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
