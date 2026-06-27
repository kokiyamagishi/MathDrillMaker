import React from "react";
import { UnitData } from "../units2";

export const unit29Data: UnitData = {
  unitNumber: 29,
  unitTitle: "ພາກທີ III - ບົດທີ 29: ເນື້ອທີ່ຂອງຮູບສາມແຈ (Area of a Triangle)",
  unitGoal: "ຮຽນຮູ້ການຊອກຫາເນື້ອທີ່ຮູບສາມແຈໂດຍນຳໃຊ້ອັດຕາສ່ວນໄຕມູມມິຕິ S = (1/2)ab sin C, ການນຳໃຊ້ສູດເຮຣົງ (Heron's Formula) ແລະ ໂຈດປະສົມປະສານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 135-139",
  subSections: [
    {
      title: "1. ເນື້ອທີ່ຮູບສາມແຈດ້ວຍໄຕມູມມິຕິ (Area using Trigonometric Formula)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ເນື້ອທີ່ສາມແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ໃດໆ ທີ່ມີຂ້າງ a, b, c, ເນື້ອທີ່ S ສາມາດຄິດໄລ່ໄດ້ຈາກສອງຂ້າງ ແລະ ມຸມລະຫວ່າງສອງຂ້າງນັ້ນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ສູດເນື້ອທີ່:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຜ່ານມຸມ A:"}</strong>{" S = (1/2) b c sin A"}</li>
                <li><strong>{"ຜ່ານມຸມ B:"}</strong>{" S = (1/2) a c sin B"}</li>
                <li><strong>{"ຜ່ານມຸມ C:"}</strong>{" S = (1/2) a b sin C"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ຖ້າມຸມລະຫວ່າງສອງຂ້າງແມ່ນ 90° (ຮູບສາມແຈສາກ), sin 90° = 1 ຈະໄດ້ສູດພື້ນຖານ S = (1/2)ab!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ b = 4, c = 5, ແລະ ມຸມ A = 30°. ຈົ່ງຊອກຫາເນື້ອທີ່ S: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap", padding: "12px 0" }}>
                <span>{"ຕອບ: ເນື້ອທີ່ S = (1/2) × 4 × 5 × sin 30° ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ a = 2√2, ມຸມ A = 10°, ມຸມ C = 20°. ເນື້ອທີ່ S = 3. ຈົ່ງຊອກຫາຂ້າງ c (AB): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ຄ່າຂອງມຸມ B ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ອົງສາ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ຂ້າງ c = 6 / (√2) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຫາເນື້ອທີ່ຈາກສາມດ້ານ ແລະ ໂຈດຮູບຫຼາຍແຈ (Heron's Formula & Polygonal Areas)",
      keyPoint: {
        title: "ສູດເຮຣົງ (Heron's Formula)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ສາມດ້ານ a, b, c ຂອງຮູບສາມແຈ, ເຮົາໃຊ້ສູດເຮຣົງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ສູດຄິດໄລ່:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"S = √[p(p - a)(p - b)(p - c)]"}
                <br />
                {"ເຊິ່ງໃນນີ້: p = (a + b + c) / 2  ແມ່ນເຄິ່ງຮອບຮູບ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ສາມດ້ານແມ່ນ 4, 5, 6. p = 15/2. ເນື້ອທີ່ S = √[(15/2)(7/2)(5/2)(3/2)] = 15√7 / 4!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ໂດຍໃຊ້ສູດເຮຣົງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC ທີ່ມີສາມຂ້າງແມ່ນ a = 5, b = 5, c = 6:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ເຄິ່ງຮອບຮູບ p ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ເນື້ອທີ່ S ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຮູບສີ່ແຈຄາງໝູ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ຮູບສີ່ແຈຄາງໝູ ABCD ມີ AD ຂະໜານກັບ BC, ຂ້າງ AB = 5, ຖານລຸ່ມ BC = 6, ຖານເທິງ AD = 2 ແລະ ມຸມ ABC = 60°. ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບຄາງໝູ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                <span>{" (ຂຽນໃນຮູບຮ່າງ √3)"}</span>
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
              {"ໂຈດເນື້ອທີ່ຮູບ 12 ແຈສະເໝີ (Area of Regular Dodecagon): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບ 12 ແຈສະເໝີ ທີ່ບັນຈຸໃນວົງມົນທີ່ມີລັດສະໝີ R = 1?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ S ="}</span>
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
              {"ໂຈດຊອກຫາລັດສະໝີວົງມົນແນບໃນ (Inradius of Triangle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ມີຂ້າງ a = 5, b = 5, c = 6, ດັ່ງນັ້ນມີເນື້ອທີ່ S = 12. ຈົ່ງຊອກຫາລັດສະໝີວົງມົນແນບໃນ r (ສູດ: S = p·r)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: r ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ຮູບ 12 ແຈສະເໝີແບ່ງອອກເປັນ 12 ຮູບສາມແຈສະເໝີທີ່ມີມຸມຍອດ 30° ແລະ ສອງຂ້າງແມ່ນ R = 1. ເນື້ອທີ່ແຕ່ລະສາມແຈແມ່ນ (1/2) × 1² × sin 30° = 1/4. ດັ່ງນັ້ນເນື້ອທີ່ລວມແມ່ນ 12 × (1/4) = 3! ສຳລັບ r: p = 8, S = 12 ⇒ 12 = 8r ⇒ r = 1.5!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ສູດເນື້ອທີ່ຮ່ວມມຸມ B: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສູດຄິດໄລ່ເນື້ອທີ່ຮູບສາມແຈ ABC ຜ່ານມຸມ B ແມ່ນຫຍັງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: S = (1/2)"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"sin B"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ເນື້ອທີ່ຮູບສາມແຈສາກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈ ABC ສາກຢູ່ C ທີ່ມີຂ້າງ AC = 6 ແລະ BC = 8. ເນື້ອທີ່ S ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: S ="}</span>
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
          <span key="1">{"5 (ຄິດໄລ່: S = (1/2) × 4 × 5 × (1/2) = 5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"150 (ຄິດໄລ່: B = 180° - 30° = 150°)"}</span>,
          <span key="2-2">{"3√2 (ຄິດໄລ່: c = 6 / √2 = 3√2)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"8 (ຄິດໄລ່: p = (5 + 5 + 6)/2 = 8)"}</span>,
          <span key="3-2">{"12 (ຄິດໄລ່: S = √[8(3)(3)(2)] = √144 = 12)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"10√3 (ຄິດໄລ່: ຄວາມສູງ h = AB sin 60° = 5 × √3/2 = 2.5√3. ເນື້ອທີ່ S = (AD + BC) × h / 2 = 8 × 2.5√3 / 2 = 10√3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"3 (ຄິດໄລ່: S = 12 × (1/2) × 1² × sin 30° = 12 × 1/4 = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"1.5 (ຄິດໄລ່: r = S/p = 12/8 = 1.5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ac (ຄິດໄລ່: ເພາະສູດແມ່ນ S = (1/2)ac sin B)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"24 (ຄິດໄລ່: S = (1/2) × AC × BC = (1/2) × 6 × 8 = 24)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຄິດໄລ່ເນື້ອທີ່ຮູບສາມແຈດ້ວຍໄຕມູມມິຕິ ແລະ ສູດເຮຣົງ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ໄຂບັນຫາເລຂາຄະນິດລະດັບສູງໄດ້ຢ່າງສະບາຍ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
