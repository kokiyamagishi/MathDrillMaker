import React from "react";
import { UnitData } from "../units2";

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ພາກທີ I - ບົດທີ 12: ເລກກຳລັງທີ່ມີຕົວຊີ້ບອກເປັນຈຳນວນປົກກະຕິ (Rational Exponents)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບນິຍາມຂອງເລກກຳລັງທີ່ມີຕົວຊີ້ບອກເປັນຈຳນວນປົກກະຕິ (Rational Exponents), ສູດຄິດໄລ່ກ່ຽວກັບເລກກຳລັງ, ແລະ ການຄັດຈ້ອນສຳນວນທີ່ມີເລກກຳລັງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 62-67",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ການພົວພັນລະຫວ່າງເລກຮາກ ແລະ ເລກກຳລັງ (Exponents and Radicals)",
      keyPoint: {
        title: "ນິຍາມເລກກຳລັງຕົວຊີ້ບອກປົກກະຕິ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເຮົາມີຈຳນວນຈິງ a > 0 ແລະ ຈຳນວນຖ້ວນ p, q (ເຊິ່ງ q > 0), ເລກກຳລັງທີ່ມີຕົວຊີ້ບອກປົກກະຕິແມ່ນຖືກກຳນົດດ້ວຍ:"}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0", display: "block", textAlign: "center", margin: "12px 0" , whiteSpace: "nowrap"}}>
                {"a^(p/q) = ⁿ√(a^p) = (ⁿ√a)^p"}
              </span>
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງການປ່ຽນຮູບແບບ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຕົວຢ່າງ 1: "}<strong>{"8^(1/3) = ³√8 = ³√(2³) = 2"}</strong>
                <br />
                {"- ຕົວຢ່າງ 2: "}<strong>{"9^(3/2) = (√9)³ = 3³ = 27"}</strong>
                <br />
                {"- ຕົວຢ່າງ 3: "}<strong>{"(-8)^(1/3) = ³√(-8) = -2"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າພື້ນຖານ a ຫາກເປັນຄ່າລົບ, ຕົວຊີ້ບອກກຳລັງ p/q ຈະກຳນົດໄດ້ກໍຕໍ່ເມື່ອ q ເປັນຈຳນວນຄີກເທົ່ານັ້ນ! ຖ້າ q ເປັນຈຳນວນຄູ່ ຈະບໍ່ກຳນົດໃນກຸ່ມຈຳນວນຈິງ.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄ່າຂອງເລກກຳລັງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) 81^(3/4) = (⁴√81)³ = 3^"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) (8/27)^(-1/3) = (27/8)^(1/3) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"/ 2"}</span>
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
                {"ຈົ່ງຄິດໄລ່ ແລະ ຄັດຈ້ອນສຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄິດໄລ່: x^(1/3) × x^(1/2) × x^(1/6)"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: x^(1/3 + 1/2 + 1/6) = x^("}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{") = x"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄຸນລັກສະນະ ແລະ ສູດຄິດໄລ່ເລກກຳລັງ (Laws of Exponents)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ເລກກຳລັງທີ່ສຳຄັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາລັບພື້ນຖານ a, b > 0 ແລະ ຕົວຊີ້ບອກ p, q, ເຮົາມີສູດຄິດໄລ່ດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.6", paddingLeft: "24px" }}>
              <li><strong>{"1. a^p × a^q = a^(p + q)"}</strong></li>
              <li><strong>{"2. a^p / a^q = a^(p - q)"}</strong></li>
              <li><strong>{"3. (a^p)^q = a^(p × q)"}</strong></li>
              <li><strong>{"4. (a × b)^p = a^p × b^p"}</strong></li>
              <li><strong>{"5. (a / b)^p = a^p / b^p  ;  (a / b)^(-p) = (b / a)^p"}</strong></li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: 8^(2/3) / 27^(2/3) = (8/27)^(2/3) = ((2/3)³)^(2/3) = (2/3)² = 4/9!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄັດຈ້ອນສຳນວນພຶດຊະຄະນິດຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄັດຈ້ອນ: (a^(-2) · b³) · (a⁵ · b^(-1))"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: a^"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                <span>{"· b^"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນເລກກຳລັງຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແກ້ສົມຜົນ: (x - 1)^(1/3) = 2"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຂຶ້ນກຳລັງສາມທັງສອງພາກ: x - 1 = 2³ = 8 ⇒ x ="}</span>
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
              {"ໂຈດຄັດຈ້ອນເລກກຳລັງຫຼາຍພົດ (Advanced Simplification): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄັດຈ້ອນສຳນວນ: (a^(2/3) · b^(-1/2))³ / (a · b^(-2))."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຕົວຊີ້ບອກກຳລັງຂອງ a ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຕົວຊີ້ບອກກຳລັງຂອງ b ="}</span>
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຄິດໄລ່ເລກກຳລັງລວມ (Combined Calculation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່: 8^(1/3) + 40^(1/2) / 10^(1/2) - (1600)^(1/4)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: 2 + √(40/10) - (40²)^(1/4) = 2 + 2 -"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"="}</span>
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
            {"ຄິດໄລ່ກຳລັງທົດສະນິຍົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄິດໄລ່ຫາຄ່າຂອງ: (0.25)^(-1/2)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: (1/4)^(-1/2) = 4^(1/2) ="}</span>
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
            {"ຄັດຈ້ອນສຳນວນຕົວປ່ຽນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຄັດຈ້ອນ: (x³ · y^(-2)) / (x · y³)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x^"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            <span>{"/ y^"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 3, 27 (ຄິດໄລ່: 81^(3/4) = 3³ = 27)"}</span>,
          <span key="1-2">{"(2) 3 (ຄິດໄລ່: (27/8)^(1/3) = 3/2)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"6/6 (ຫຼື 1), 1 (ຄິດໄລ່: x^(1/3 + 1/2 + 1/6) = x^(2/6 + 3/6 + 1/6) = x¹ = x)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"3 (ຄິດໄລ່: a^(-2+5) = a³)"}</span>,
          <span key="3-2">{"2 (ຄິດໄລ່: b^(3-1) = b²)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"9 (ຄິດໄລ່: x - 1 = 8 ⇒ x = 9)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"1 (ຄິດໄລ່: 2 - 1 = 1)"}</span>,
          <span key="c1-2">{"0.5 (ຫຼື 1/2) (ຄິດໄລ່: -3/2 - (-2) = -1.5 + 2 = 0.5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"2√10 (ຫຼື 2√10, ໝາຍເຫດ: ຖ້າແມ່ນ 25^(1/2) ຈະໄດ້ 5)"}</span>,
          <span key="c2-2">{"-1 (ຄິດໄລ່: 2 + 2 - 5 = -1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"2 (ຄິດໄລ່: (0.25)^(-1/2) = (1/4)^(-1/2) = 4^(1/2) = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"2, 5 (ຄິດໄລ່: x^(3-1) = x², y^(-2-3) = y^(-5) = 1/y⁵)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ເລກກຳລັງທີ່ມີຕົວຊີ້ບອກເປັນຈຳນວນປົກກະຕິ ເປັນພື້ນຖານສຳຄັນສຳລັບການຮຽນຕຳລາເລກກຳລັງ ແລະ ໂລກາລິດໃນຂັ້ນສູງຕໍ່ໄປ. ເກັ່ງຫຼາຍ!"
  }
};
