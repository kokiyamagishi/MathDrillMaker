import React from "react";
import { UnitData } from "../units2";

export const unit22Data: UnitData = {
  unitNumber: 22,
  unitTitle: "ພາກທີ II - ບົດທີ 22: ສູດວີແອດ (Vieta's Formulas)",
  unitGoal: "ຮຽນຮູ້ສູດວີແອດກ່ຽວກັບຜົນບວກ ແລະ ຜົນຄູນຂອງຮາກສົມຜົນຂັ້ນສອງ, ການຄິດໄລ່ສຳນວນສົມມາດຂອງຮາກ, ແລະ ການສ້າງສົມຜົນຂັ້ນສອງຈາກຮາກທີ່ກຳນົດ",
  textbookRef: "ปຶ້ມແບບຮຽນ ມ.4 ໜ້າ 100-102",
  subSections: [
    {
      title: "1. ຫຼັກການສູດວີແອດ ແລະ ການຄິດໄລ່ສຳນວນຮາກ (Vieta's Principles & Root Expressions)",
      keyPoint: {
        title: "ຫຼັກການສູດວີແອດ (Vieta's Formulas)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາລັບສົມຜົນຂັ້ນສອງ ax² + bx + c = 0 ທີ່ມີສອງຮາກ α ແລະ β, ສູດວີແອດກຳນົດວ່າ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"ສູດພື້ນຖານ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຜົນບວກຂອງຮາກ (Sum, S):"}</strong>{" S = α + β = -b/a"}</li>
                <li><strong>{"ຜົນຄູນຂອງຮາກ (Product, P):"}</strong>{" P = α × β = c/a"}</li>
              </ul>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"ສຳນວນສົມມາດທີ່ພົບເລື້ອຍ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"α² + β² = (α + β)² - 2αβ = S² - 2P"}</li>
                <li>{"1/α + 1/β = (α + β)/(αβ) = S/P"}</li>
                <li>{"(α - β)² = (α + β)² - 4αβ = S² - 4P"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໃຫ້ສົມຜົນ 2x² - 3x - 4 = 0. ມີ S = 3/2, P = -2. ດັ່ງນັ້ນ α² + β² = (3/2)² - 2(-2) = 9/4 + 4 = 25/4!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃຫ້ສົມຜົນ 2x² - 3x - 4 = 0 ທີ່ມີຮາກແມ່ນ α ແລະ β. ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຜົນບວກ S = α + β ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ແລະ ຜົນຄູນ P = αβ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າຂອງ 1/α + 1/β ="}</span>
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
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງສ້າງສົມຜົນຂັ້ນສອງຈາກຮາກທີ່ໃຫ້ມາ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) ສ້າງສົມຜົນທີ່ມີຮາກແມ່ນ x_1 = 2 ແລະ x_2 = 3 (S=5, P=6) ⇒ x² -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"x +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"= 0"}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) ສ້າງສົມຜົນທີ່ມີຮາກແມ່ນ x_1 = -4 ແລະ x_2 = 5 (S=1, P=-20) ⇒ x² -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"x -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"= 0"}</span>
                </div>
              </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການນຳໃຊ້ສູດວີແອດໃນການແກ້ບັນຫາຂອບເຂດ (Vieta's Applications in Boundaries & Parameters)",
      keyPoint: {
        title: "ການພົວພັນລະຫວ່າງອະສົມຜົນ ແລະ ຮາກສົມຜົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ຖ້າຫວ່າງໃຈຜົນຂອງອະສົມຜົນ x² + ax + b < 0 ແມ່ນ ]x_1, x_2[:"}
              <br />
              {"  ຫມາຍຄວາມວ່າ x_1 ແລະ x_2 ແມ່ນສອງຮາກຂອງສົມຜົນ x² + ax + b = 0. ດັ່ງນັ້ນ:"}
              <br />
              {"  S = x_1 + x_2 = -a  ແລະ  P = x_1 × x_2 = b."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }, whiteSpace: "nowrap"}>{"ຕົວຢ່າງການນຳໃຊ້:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ໃຫ້ຫວ່າງໃຈຜົນຂອງ x² + ax + b < 0 ແມ່ນ ]1/3, 1/2[. ຊອກຫາ a ແລະ b:"}
                <br />
                {"- S = 1/3 + 1/2 = 5/6 ⇒ a = -5/6"}
                <br />
                {"- P = 1/3 × 1/2 = 1/6 ⇒ b = 1/6."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສູດວີແອດເປັນເຄື່ອງມືທີ່ມີປະສິດທິພາບສູງໃນການຊອກຫາສຳປະສິດຂອງສົມຜົນ ໂດຍບໍ່ຈຳເປັນຕ້ອງແກ້ສົມຜົນໂດຍກົງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາສຳປະສິດຈາກຫວ່າງໃຈຜົນທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຖ້າຫວ່າງໃຈຜົນຂອງອະສົມຜົນ x² + ax + b < 0 ແມ່ນ ]2, 5[:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ສຳປະສິດ a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ສຳປະສິດ b ="}</span>
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
                {"ຈົ່ງຊອກຫາພາຣາມີເຕີ m ຈາກຄວາມສຳພັນຂອງຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ສົມຜົນ x² - 8x + m = 0 ມີຮາກໜຶ່ງໃຫຍ່ກວ່າອີກຮາກໜຶ່ງ 2 ຫົວໜ່ວຍ (β - α = 2). ຈົ່ງຊອກຫາຄ່າຂອງ m?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: m ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
              {"ໂຈດຊອກຫາສຳນວນກຳລັງສາມຂອງຮາກ (Sum of Cubes): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສົມຜົນ x² - 3x + 1 = 0 ມີຮາກແມ່ນ α ແລະ β. ຈົ່ງຄິດໄລ່ຄ່າຂອງ α³ + β³?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: α³ + β³ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຊອກຫາສົມຜົນໃໝ່ (New Quadratic Equation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ α, β ແມ່ນຮາກຂອງ x² - 4x + 2 = 0. ຈົ່ງສ້າງສົມຜົນຂັ້ນສອງໃໝ່ທີ່ມີຮາກແມ່ນ 2α ແລະ 2β. ສົມຜົນນັ້ນມີຮູບຮ່າງ x² - Sx + P = 0. ຈົ່ງຊອກຫາ P?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: P ="}</span>
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
            {"ຄ່າຂອງຜົນຄູນຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສົມຜົນ -3x² + 9x - 12 = 0 ມີຜົນຄູນຂອງຮາກ P = αβ ເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: P ="}</span>
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
            {"ຄ່າຂອງຜົນບວກກຳລັງສອງຂອງຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ສົມຜົນ x² - 5x + 3 = 0. ຈົ່ງຄິດໄລ່ α² + β²?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: α² + β² ="}</span>
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
          <span key="1-1">{"3/2 (ຄິດໄລ່: S = -b/a = -(-3)/2 = 3/2)"}</span>,
          <span key="1-2">{"-2 (ຄິດໄລ່: P = c/a = -4/2 = -2)"}</span>,
          <span key="1-3">{"-3/4 (ຄິດໄລ່: 1/α + 1/β = S/P = (3/2)/(-2) = -3/4)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"5 (ຄິດໄລ່: S = 5)"}</span>,
          <span key="2-2">{"6 (ຄິດໄລ່: P = 6)"}</span>,
          <span key="2-3">{"1 (ຄິດໄລ່: S = 1)"}</span>,
          <span key="2-4">{"20 (ຄິດໄລ່: P = -20 ⇒ x² - x - 20 = 0)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"-7 (ຄິດໄລ່: S = 2 + 5 = 7 ⇒ a = -7)"}</span>,
          <span key="3-2">{"10 (ຄິດໄລ່: P = 2 × 5 = 10 ⇒ b = 10)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"15 (ຄິດໄລ່: S = α+β = 8, β-α = 2 ⇒ β=5, α=3 ⇒ m = αβ = 15)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"18 (ຄິດໄລ່: α³+β³ = S(S²-3P) = 3(9-3) = 18)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"8 (ຄິດໄລ່: P' = 4αβ = 4(2) = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"4 (ຄິດໄລ່: P = c/a = -12/(-3) = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"19 (ຄິດໄລ່: S = 5, P = 3 ⇒ α²+β² = S²-2P = 25 - 6 = 19)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການນຳໃຊ້ສູດວີແອດ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ສົມຜົນ ແລະ ວິເຄາະຮາກສົມຜົນຂັ້ນສອງໄດ້ຢ່າງວ່ອງໄວ ແລະ ຖືກຕ້ອງ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
