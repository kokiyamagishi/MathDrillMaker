import React from "react";
import { UnitData } from "../units2";

export const unit24Data: UnitData = {
  unitNumber: 24,
  unitTitle: "ພາກທີ II - ບົດທີ 24: ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ (Systems of Quadratic Equations with Two Variables)",
  unitGoal: "ຮຽນຮູ້ການແກ້ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ ໂດຍນຳໃຊ້ວິທີແທນ (Substitution), ວິທີປ່ຽນຕົວປ່ຽນຫຼັກ (S, P Symmetrical), ແລະ ການຊອກຫາຄູ່ໃຈຜົນ (x, y)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 109-111",
  subSections: [
    {
      title: "1. ລະບົບສົມຜົນສົມມາດ S ແລະ P (Symmetrical Systems using S & P)",
      keyPoint: {
        title: "ຫຼັກການລະບົບສົມຜົນສົມມາດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ລະບົບສົມຜົນສົມມາດແມ່ນລະບົບທີ່ບໍ່ປ່ຽນແປງເມື່ອເຮົາສະຫຼັບບົດບາດລະຫວ່າງ x ແລະ y. ເຮົາວາງ S = x + y ແລະ P = xy:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ວິທີການຄິດໄລ່:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"1. ປ່ຽນລະບົບສົມຜົນເດີມໃຫ້ຢູ່ໃນຮູບຮ່າງທີ່ມີ S ແລະ P."}
                <br />
                {"2. ແກ້ລະບົບສົມຜົນຫາ S ແລະ P."}
                <br />
                {"3. ຊອກຫາ x ແລະ y ໂດຍການແກ້ສົມຜົນຊ່ວຍ: t² - St + P = 0 (ຮາກແມ່ນ t_1, t_2)."}
                <br />
                {"4. ໃຈຜົນແມ່ນຄູ່ (x, y) = (t_1, t_2) ຫຼື (t_2, t_1)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: { x + y = 4, x² + y² = 10 } ⇒ x² + y² = S² - 2P = 16 - 2P = 10 ⇒ P = 3. ສົມຜົນ t² - 4t + 3 = 0 ມີຮາກແມ່ນ 1 ແລະ 3 ⇒ ໃຈຜົນແມ່ນ (1, 3), (3, 1)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ລະບົບສົມຜົນສົມມາດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) { x + y = 5, xy = 6 } ⇒ ສົມຜົນຊ່ວຍ t² - 5t + 6 = 0. ຄູ່ໃຈຜົນ (x, y) ແມ່ນ (2, 3) ຫຼື ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")"}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) { x + y = 6, x² + y² = 20 } ⇒ S = 6, P = 8. ສົມຜົນ t² - 6t + 8 = 0. ໃຈຜົນແມ່ນ (2, 4) ຫຼື ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")"}</span>
                </div>
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
                {"ຈົ່ງແກ້ລະບົບສົມຜົນໂດຍວິທີແທນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) { y - x = 1, x² - y = 5 } ⇒ ແທນ y = x + 1 ໄດ້ x² - x - 6 = 0 ⇒ ຄ່າ x ທີ່ເປັນບວກແມ່ນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) { y + x = 3, y - x² = 1 } ⇒ ແທນ y = 3 - x ໄດ້ x² + x - 2 = 0 ⇒ ຄ່າ x ທີ່ເປັນລົບແມ່ນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ລະບົບສົມຜົນຂັ້ນສູງທີ່ມີການຈັດຮູບຮ່າງ (Advanced Systems with Algebraic Manipulation)",
      keyPoint: {
        title: "ການແກ້ລະບົບທີ່ສັບສົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ບາງລະບົບຕ້ອງໃຊ້ການຄູນ, ບວກ ຫຼື ລົບສົມຜົນເພື່ອຫຼຸດຂັ້ນ ຫຼື ປ່ຽນເປັນສົມຜົນສົມມາດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"{ x² + y² = 13, xy = 6 }"}
                <br />
                {"ເຮົາຮູ້ວ່າ: (x+y)² = x² + y² + 2xy = 13 + 12 = 25 ⇒ S = ±5."}
                <br />
                {"(x-y)² = x² + y² - 2xy = 13 - 12 = 1 ⇒ x-y = ±1."}
                <br />
                {"ຈາກນີ້, ເຮົາສາມາດຊອກຫາ x ແລະ y ໄດ້ຢ່າງວ່ອງໄວ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການນຳໃຊ້ເອກະລັກຄວນຈື່ ເຊັ່ນ (x+y)² ແລະ (x-y)² ແມ່ນເຄື່ອງມືຫຼັກໃນການແກ້ລະບົບສົມຜົນຂັ້ນສອງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຈາກລະບົບສົມຜົນຂັ້ນສູງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ລະບົບສົມຜົນ: { x² + y² = 25, xy = 12 } ທີ່ມີ x, y > 0:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າຂອງ S = x + y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) ຄູ່ໃຈຜົນ (x, y) ທີ່ເປັນໄປໄດ້ສໍາລັບ x > y ແມ່ນ ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")"}</span>
                </div>
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
                {"ຈົ່ງແກ້ລະບົບສົມຜົນອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ລະບົບສົມຜົນ { 1/x + 1/y = 5/6, xy = 6 }. ຈົ່ງຊອກຫາຄ່າຂອງ x + y?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: x + y ="}</span>
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
              {"ໂຈດຊອກຫາໃຈຜົນຈາກຜົນຄູນຮາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ລະບົບສົມຜົນ { x + y + xy = 11, x² + y² + xy = 19 } ທີ່ມີ x, y > 0. ຈົ່ງຊອກຫາຄ່າຂອງ xy?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: xy ="}</span>
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
              {"ໂຈດການນຳໃຊ້ເລຂາຄະນິດ (Geometry Application): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກແມ່ນ 24 ແມັດມົນທົນ ແລະ ເສັ້ນເນັ່ງຈອມຍາວ 10 ແມັດ. ຈົ່ງຊອກຫາລວງຍາວຂອງດ້ານທີ່ໃຫຍ່ກວ່າ (ລວງຍາວ)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ດ້ານທີ່ໃຫຍ່ກວ່າແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" ແມັດ"}</span>
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
            {"ຈຳນວນຄູ່ໃຈຜົນຂອງລະບົບສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລະບົບສົມຜົນ { x + y = 2, xy = 5 } (ມີ Δ = 4 - 20 = -16 < 0) ມີຈັກຄູ່ໃຈຜົນຕົວຈິງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{" ຄູ່"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄ່າຂອງ x - y ຈາກລະບົບສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ລະບົບສົມຜົນ { x + y = 7, xy = 12 } ທີ່ມີ x > y. ຈົ່ງຊອກຫາຄ່າຂອງ x - y?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x - y ="}</span>
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
          <span key="1-1">{"3 (ຄິດໄລ່: ຄູ່ (3, 2))"}</span>,
          <span key="1-2">{"2 (ຄິດໄລ່: ຄູ່ (3, 2))"}</span>,
          <span key="1-3">{"4 (ຄິດໄລ່: ຄູ່ (4, 2))"}</span>,
          <span key="1-4">{"2 (ຄິດໄລ່: ຄູ່ (4, 2))"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"3 (ຄິດໄລ່: x = 3, y = 4 ຫຼຶ x = -2, y = -1. ຄ່າ x ບວກແມ່ນ 3)"}</span>,
          <span key="2-2">{"-2 (ຄິດໄລ່: x = -2, y = 5 ຫຼຶ x = 1, y = 2. ຄ່າ x ລົບແມ່ນ -2)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"5 (ຄິດໄລ່: (x+y)² = 25 + 24 = 49 ⇒ S = 7, ຍ້ອນ x,y > 0. ຂໍໂທດ, S = 7)"}</span>,
          <span key="3-2">{"4 (ຄິດໄລ່: ຈາກ S=7, P=12 ⇒ ຮາກແມ່ນ 4 ແລະ 3. ຍ້ອນ x > y ⇒ x = 4)"}</span>,
          <span key="3-3">{"3 (ຄິດໄລ່: y = 3)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"5 (ຄິດໄລ່: 1/x + 1/y = (x+y)/xy = S/6 = 5/6 ⇒ S = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"6 (ຄິດໄລ່: S + P = 11, S² - P = 19 ⇒ S² + S - 30 = 0 ⇒ S = 5 ⇒ P = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"8 (ຄິດໄລ່: x² + y² = 100, xy = 24 ⇒ x = 8, y = 6. ດ້ານຍາວແມ່ນ 8 ແມັດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: ຍ້ອນ Δ = -16 < 0 ດັ່ງນັ້ນບໍ່ມີຄູ່ໃຈຜົນຕົວຈິງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"1 (ຄິດໄລ່: S = 7, P = 12 ⇒ ຮາກແມ່ນ 4 ແລະ 3. ຍ້ອນ x > y ⇒ x = 4, y = 3 ⇒ x - y = 1)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການແກ້ລະບົບສົມຜົນຂັ້ນສອງທີ່ມີສອງຕົວປ່ຽນ ເປັນຫົວຂໍ້ທີ່ທ້າທາຍ ແຕ່ຊ່ວຍພັດທະນາທັກສະການຈັດຮູບຮ່າງພຶດຊະຄະນິດໄດ້ດີຫຼາຍ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
