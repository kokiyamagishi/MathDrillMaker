import React from "react";
import { UnitData } from "../units2";

export const unit5Data: UnitData = {
  unitNumber: 5,
  unitTitle: "ພາກທີ I - ບົດທີ 5: ການຄູນ ແລະ ການຫານຈຳນວນທຳມະຊາດ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການຄູນ ແລະ ການຫານຈຳນວນທຳມະຊາດ, ຄຸນລັກສະນະຂອງການຄູນ (ສະຫຼັບບ່ອນ, ໂຮມໝູ່, ແຈກສ່ວນ), ແລະ ການຫານແບບເອີຄຼິດ (ຕົວຕັ້ງຫານ = ຕົວຫານ × ຜົນຫານ + ຕົວເສດ)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 33-37",
  subSections: [
    {
      title: "1. ການຄູນຈຳນວນທຳມະຊາດ ແລະ ຄຸນລັກສະນະ",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ຄຸນລັກສະນະຂອງການຄູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຄູນແມ່ນການບວກຈຳນວນດຽວກັນຊ້ຳໆກັນຫຼາຍເທື່ອ. ຜົນໄດ້ຮັບເອີ້ນວ່າ ຜົນຄູນ."}
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄຸນລັກສະນະພື້ນຖານຂອງການຄູນ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.8" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>{"ຄຸນລັກສະນະສະຫຼັບບ່ອນ (Commutative): "}</strong>
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{"a × b = b × a"}</span>
                <div style={{ paddingLeft: "16px", color: "#555", fontSize: "1.2rem" }}>{"ຕົວຢ່າງ: 15 × 5 = 5 × 15 = 75."}</div>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>{"ຄຸນລັກສະນະໂຮມໝູ່ (Associative): "}</strong>
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{"(a × b) × c = a × (b × c)"}</span>
                <div style={{ paddingLeft: "16px", color: "#555", fontSize: "1.2rem" }}>{"ຕົວຢ່າງ: (4 × 25) × 7 = 100 × 7 = 700."}</div>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>{"ຄຸນລັກສະນະແຈກສ່ວນຕໍ່ການບວກ (Distributive): "}</strong>
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{"a × (b + c) = (a × b) + (a × c)"}</span>
              </li>
            </ul>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"a × (b + c) = (a × b) + (a × c)"}
              </span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອຄູນຈຳນວນໃດໜຶ່ງກັບ 10, 100, 1000, ... ໃຫ້ຕື່ມເລກ 0 ໃສ່ເບື້ອງຂວາຂອງຈຳນວນນັ້ນຕາມຈຳນວນເລກ 0 ຂອງຕົວຄູນ ເຊັ່ນ: 35 × 100 = 3500!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນຕໍ່ໄປນີ້ໂດຍນຳໃຊ້ຄຸນລັກສະນະທີ່ເໝາະສົມ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"4 × 137 × 25 = (4 × 25) × 137 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"15 × (100 + 4) = (15 × 100) + (15 × 4) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງຄິດໄລ່ຜົນຄູນຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"138 × 24 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"350 × 200 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຫານແບບເອີຄຼິດ (Euclidean Division)",
      keyPoint: {
        title: "ຫຼັກການຫານແບບເອີຄຼິດ ແລະ ຕົວເສດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຫານແບບເອີຄຼິດຂອງຈຳນວນທຳມະຊາດ a ໃຫ້ b (b ≠ 0) ແມ່ນການຊອກຫາຜົນຫານ q ແລະ ຕົວເສດ r ທີ່ຕອບສະໜອງເງື່ອນໄຂ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "12px", border: "1px dashed #2E7D32", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                {"a = (b × q) + r ໂດຍທີ່ 0 ≤ r < b"}
              </span>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕົວຢ່າງ: 23 ຫານໃຫ້ 7 ໄດ້ຜົນຫານ q = 3, ຕົວເສດ r = 2. ຂຽນໄດ້ເປັນ: "}
              <strong>{"23 = (7 × 3) + 2"}</strong>{" (ຕົວເສດ 2 < ຕົວຫານ 7)."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າ r = 0, ເຮົາເວົ້າວ່າ a ຫານຂາດໃຫ້ b. ຖ້າ r > 0, ເຮົາເວົ້າວ່າ a ຫານບໍ່ຂາດໃຫ້ b ແລະ ຕົວເສດ r ຕ້ອງນ້ອຍກວ່າຕົວຫານ b ສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຜົນຫານ ແລະ ຕົວເສດຈາກການຫານລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"47 ຫານໃຫ້ 6 ໄດ້: ຜົນຫານ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                  <span>{", ຕົວເສດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"108 ຫານໃຫ້ 9 ໄດ້: ຜົນຫານ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                  <span>{", ຕົວເສດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງຕື່ມຕົວເລກໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງຕາມການຫານແບບເອີຄຼິດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ลວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"85 = (9 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                  <span className="math">{") +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"147 = (12 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                  <span className="math">{") +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "60px", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ວິທີຄິດໄລ່ແບບສົມທົບ ແລະ ແກ້ໄຂໂຈດບັນຫາຊີວິດປະຈຳວັນທີ່ກ່ຽວຂ້ອງກັບການຊື້-ຂາຍ ແລະ ການແບ່ງປັນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາລາຄາປຶ້ມແບບຮຽນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປຶ້ມແບບຮຽນຄະນິດສາດ ມ.1 ໜຶ່ງເຫຼັ້ມລາຄາ 15,000 ກີບ. ຖ້າຄູຕ້ອງການຊື້ປຶ້ມແບບຮຽນດັ່ງກ່າວຈຳນວນ 12 ເຫຼັ້ມ ເພື່ອແຈກຢາຍໃຫ້ກັບນັກຮຽນ, ຄູຈະຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕ້ອງຈ່າຍເງິນທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການຈັດແບ່ງໝາກບີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ສາລີ ແລະ ໝູ່ເພື່ອນລວມທັງໝົດ 9 ຄົນ ຕ້ອງການແບ່ງປັນໝາກບີ 108 ໜ່ວຍ ເຊິ່ງແຕ່ລະຄົນຕ້ອງໄດ້ຮັບເທົ່າກັນ. ຖາມວ່າມີໝາກບີເຫຼືອເສດຈັກໜ່ວຍ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໝາກບີເຫຼືອເສດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"ໜ່ວຍ"}</span>
            </div>
          </div>
        )
      }
    ]
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຊອກຫາຈຳນວນເດີມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເມື່ອຄູນຈຳນວນທຳມະຊາດໃດໜຶ່ງກັບ 10, ຜົນໄດ້ຮັບທີ່ເພີ່ມຂຶ້ນຈາກຈຳນວນເດີມແມ່ນ 135. ຈົ່ງຊອກຫາຈຳນວນເດີມນັ້ນ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນເດີມແມ່ນ"}</span>
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
            {"ການພິສູດການຫານແບບເອີຄຼິດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຕ້ອງການຊອກຫາຄ່າຂອງ 𝑥 ເຊິ່ງແມ່ນຕົວຕັ້ງຫານ ຈາກເງື່ອນໄຂການຫານໃຫ້ 12 ໄດ້ຜົນຫານແມ່ນ 15 ແລະ ຕົວເສດແມ່ນ 7:"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 13700 (ຄິດໄລ່: 100 × 137 = 13700)"}</span>,
          <span key="1-2">{"(2) 1560 (ຄິດໄລ່: 1500 + 60 = 1560)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 3312"}</span>,
          <span key="2-2">{"(2) 70000"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) ຜົນຫານ = 7, ຕົວເສດ = 5 (ເພາະວ່າ 47 = 6 × 7 + 5)"}</span>,
          <span key="3-2">{"(2) ຜົນຫານ = 12, ຕົວເສດ = 0 (ຫານຂາດ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"(1) 85 = (9 × 9) + 4"}</span>,
          <span key="4-2">{"(2) 147 = (12 × 12) + 3"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"180,000 ກີບ (ຄິດໄລ່: 15,000 × 12 = 180,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"0 ໜ່ວຍ (ຄິດໄລ່: 108 ຫານຂາດໃຫ້ 9 ໄດ້ 12 ໜ່ວຍພໍດີ, ດັ່ງນັ້ນຕົວເສດແມ່ນ 0)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"15 (ຄິດໄລ່: 10𝑥 - 𝑥 = 135 ⇔ 9𝑥 = 135 ⇔ 𝑥 = 15)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"187 (ຄິດໄລ່: 𝑥 = 12 × 15 + 7 = 180 + 7 = 187)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຮຽນຮູ້ເລື່ອງການຄູນ ແລະ ຫານແບບເອີຄຼິດ ເປັນພື້ນຖານທີ່ໝັ້ນຄົງຫຼາຍໃນຄະນິດສາດ ແລະ ການນຳໃຊ້ໃນຊີວິດປະຈຳວັນ. ໝັ່ນຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
