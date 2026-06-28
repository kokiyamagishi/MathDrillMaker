import React from "react";
import { UnitData } from "../units2";

export const unit9Data: UnitData = {
  unitNumber: 9,
  unitTitle: "ພາກທີ I - ບົດທີ 9: ເລກຮາກຂັ້ນ n (n-th Roots)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງເລກຮາກຂັ້ນ n (n-th Roots), ຄຸນລັກສະນະຕ່າງໆຂອງຮາກຂັ້ນ n, ການຄັດຈ້ອນສຳນວນທີ່ມີຮາກ, ແລະ ວິທີການຖອດຮາກຂັ້ນສອງດ້ວຍການຕັ້ງບັ້ງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 45-50",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ຄຸນລັກສະນະຂອງຮາກຂັ້ນ n (Definition & Properties of n-th Roots)",
      keyPoint: {
        title: "ນິຍາມຂອງຮາກຂັ້ນ n",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ຮາກຂັ້ນ n ຂອງຈຳນວນຈິງ x (ຂຽນແທນດ້ວຍ ⁿ√x) ແມ່ນຈຳນວນຈິງ y ທີ່ເຮັດໃຫ້ y^n = x:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#1565C0", paddingLeft: "16px" }, whiteSpace: "nowrap"}>{"y = ⁿ√x   ⇔   y^n = x"}</span>
              <br />
              {"- ຖ້າ n ເປັນຈຳນວນຄູ່ (n = 2, 4, 6...): ຮາກຂັ້ນ n ຈະກຳນົດໄດ້ກໍຕໍ່ເມື່ອ x ≥ 0 ແລະ ຜົນໄດ້ຮັບຈະມີຄ່າບວກສະເໝີ. ເຊັ່ນ: √16 = 4."}
              <br />
              {"- ຖ້າ n ເປັນຈຳນວນຄີກ (n = 3, 5, 7...): ຮາກຂັ້ນ n ຈະກຳນົດໄດ້ກັບທຸກໆຈຳນວນຈິງ x. ເຊັ່ນ: ³√(-8) = -2."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"ຄຸນລັກສະນະທີ່ສຳຄັນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ⁿ√(x × y) = ⁿ√x × ⁿ√y   (ເມື່ອ x, y ≥ 0 ຖ້າ n ເປັນຄູ່)"}</li>
                <li>{"ⁿ√(x / y) = ⁿ√x / ⁿ√y   (ເມື່ອ y > 0)"}</li>
                <li>{"ᵐ√(ⁿ√x) = ᵐⁿ√x"}</li>
                <li>{"ⁿ√(x^n) = |x| (ຖ້າ n ເປັນຄູ່)  ;  ⁿ√(x^n) = x (ຖ້າ n ເປັນຄີກ)"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ⁿ√(x^n) ຖ້າ n ເປັນຄູ່ ຕ້ອງໃສ່ຄ່າສຳບູນສະເໝີ ເຊັ່ນ: √((-3)²) = |-3| = 3. ແຕ່ ³√((-3)³) = -3 ເພາະ 3 ເປັນຈຳນວນຄີກ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ ແລະ ຄັດຈ້ອນສຳນວນເລກຮາກຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ³√(-216) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ⁴√(16 × 81) = 2 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"="}</span>
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
                {"ຈົ່ງຄັດຈ້ອນສຳນວນໃຫ້ຢູ່ໃນຮູບແບບຮາກຂັ້ນຕ່ຳ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) √75 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"√3"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ³√(-54) = -3 × ³√"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ວິທີການຖອດຮາກຂັ້ນສອງດ້ວຍການຕັ້ງບັ້ງ (Square Root Algorithm)",
      keyPoint: {
        title: "ຫຼັກການຕັ້ງບັ້ງຖອດຮາກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຖອດຮາກຂັ້ນສອງຂອງຈຳນວນໃຫຍ່ ໂດຍບໍ່ນຳໃຊ້ເຄື່ອງຄິດເລກ ສາມາດເຮັດໄດ້ໂດຍການຈັດກຸ່ມຕົວເລກເທື່ອລະ 2 ຕົວ ຈາກຂວາຫາຊ້າຍ, ແລ້ວຊອກຫາຕົວເລກກຳລັງສອງທີ່ໃກ້ຄຽງທີ່ສຸດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"ຕົວຢ່າງການຖອດຮາກ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຖອດຮາກ √625:"}
                <br />
                {"  1. ແບ່ງເປັນ 6 ແລະ 25. ຊອກຫາຕົວເລກທີ່ຂຶ້ນກຳລັງສອງບໍ່ໃຫ້ເກີນ 6 ແມ່ນ 2 (ເພາະ 2² = 4). ຕົວເສດແມ່ນ 2. ດຶງ 25 ລົງມາເປັນ 225."}
                <br />
                {"  2. ເອົາ 2 ຄູນ 2 ເປັນ 4. ຊອກຫາຕົວເລກ x ທີ່ເຮັດໃຫ້ 4x × x ໃກ້ຄຽງ 225 ທີ່ສຸດ. ພົບວ່າ 45 × 5 = 225 ພໍດີ."}
                <br />
                {"  3. ດັ່ງນັ້ນ √625 = 25."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີນີ້ເປັນວິທີພື້ນຖານທີ່ຊ່ວຍໃຫ້ເຮົາສາມາດຖອດຮາກຂອງຈຳນວນໃຫຍ່ໆ ເຊັ່ນ 138,384 ໄດ້ຢ່າງງ່າຍດາຍ ເຊິ່ງ √138384 = 372!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຖອດຮາກຂັ້ນສອງຂອງຈຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) √841 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) √1225 ="}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າປະມານທົດສະນິຍົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າປະມານຂອງ √5 ໃຫ້ເປັນເລກທົດສະນິຍົມ 3 ຕຳແໜ່ງ (ໂດຍໃຊ້ວິທີຕັ້ງບັ້ງຖອດຮາກ)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: √5 ≈"}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
              {"ໂຈດຄັດຈ້ອນສຳນວນຕົວປ່ຽນ (Variable Simplification): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄັດຈ້ອນສຳນວນ: ³√(27x³y⁹). (ຮູ້ວ່າ x ແລະ y ແມ່ນຈຳນວນຈິງ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ³√(27x³y⁹) = 3 × x × y^"}</span>
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
              {"ໂຈດການຖອດຮາກເລກທົດສະນິຍົມ (Decimal Square Root): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຖອດຮາກຂັ້ນສອງຂອງ 25.6 grad/degree? ຂໍໂທດ, ຖອດຮາກຂອງ 6.25 (√6.25) ໂດຍໃຊ້ວິທີຕັ້ງບັ້ງ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: √6.25 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ຄັດຈ້ອນຮາກຂັ້ນສອງຂອງຕົວປ່ຽນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນ: √(16x²). (ຮູ້ວ່າ x < 0)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: √(16x²) ="}</span>
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
            {"ການຖອດຮາກຈຳນວນ 6 ຫຼັກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຖອດຮາກຂັ້ນສອງຂອງ: √138384"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເທົ່າກັບ"}</span>
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
          <span key="1-1">{"(1) -6 (ຄິດໄລ່: (-6)³ = -216)"}</span>,
          <span key="1-2">{"(2) 3, 6 (ຄິດໄລ່: ⁴√(16 × 81) = 2 × 3 = 6)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 5 (ຄິດໄລ່: √75 = √(25 × 3) = 5√3)"}</span>,
          <span key="2-2">{"(2) 2 (ຄິດໄລ່: ³√(-54) = ³√(-27 × 2) = -3 × ³√2)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 29 (ຄິດໄລ່: 29² = 841)"}</span>,
          <span key="3-2">{"(2) 35 (ຄິດໄລ່: 35² = 1225)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"2.236 (ຄິດໄລ່: √5 ≈ 2.236)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"3 (ຄິດໄລ່: ³√(27x³y⁹) = 3xy³)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"2.5 (ຄິດໄລ່: √6.25 = 2.5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"-4x (ຄິດໄລ່: ເພາະວ່າ x < 0, √(16x²) = 4|x| = 4(-x) = -4x)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"372 (ຄິດໄລ່: 372² = 138384)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າໄດ້ເຂົ້າໃຈ ແລະ ຖອດຮາກຂັ້ນ n, ການຄັດຈ້ອນ ແລະ ວິທີຖອດຮາກຂັ້ນສອງດ້ວຍການຕັ້ງບັ້ງຢ່າງເລິກເຊິ່ງແລ້ວ. ພະຍາຍາມຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
