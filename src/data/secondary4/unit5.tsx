import React from "react";
import { UnitData } from "../units2";

export const unit5Data: UnitData = {
  unitNumber: 5,
  unitTitle: "ພາກທີ I - ບົດທີ 5: ການແກ້ສົມຜົນອັດຕາສ່ວນ (Solving Rational Equations)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການແກ້ສົມຜົນອັດຕາສ່ວນ (Rational Equations), ການກໍານົດເງື່ອນໄຂ ຫຼື ເຂດກໍານົດຂອງສົມຜົນ, ແລະ ການກວດຄືນໃຈຜົນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 22-24",
  subSections: [
    {
      title: "1. ຫຼັກການ ແລະ ເຂດກໍານົດຂອງສົມຜົນອັດຕາສ່ວນ (Domain of Definition)",
      keyPoint: {
        title: "ຂັ້ນຕອນການແກ້ສົມຜົນອັດຕາສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ສົມຜົນອັດຕາສ່ວນມີ 4 ຂັ້ນຕອນຫຼັກ:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຊອກຫາເຂດກໍານົດ (Domain Restriction): "}</strong>{" ກໍານົດໃຫ້ຕົວພູດທັງໝົດຕ້ອງຕ່າງຈາກ 0 (ຕົວຢ່າງ: x - 1 ≠ 0 ⇒ x ≠ 1)."}</li>
              <li><strong>{"ຂຶ້ນພູດຮ່ວມ ແລະ ປັດພູດ: "}</strong>{" ຄູນທັງສອງພາກຂອງສົມຜົນໃຫ້ກັບ LCM ຂອງພູດທັງໝົດເພື່ອໃຫ້ພູດໝົດໄປ."}</li>
              <li><strong>{"ແກ້ສົມຜົນ: "}</strong>{" ແກ້ສົມຜົນເສັ້ນຊື່ ຫຼື ສົມຜົນຂັ້ນສອງທີ່ໄດ້ຮັບ."}</li>
              <li><strong>{"ກວດຄືນໃຈຜົນ: "}</strong>{" ກວດເບິ່ງວ່າໃຈຜົນທີ່ໄດ້ຮັບນັ້ນຂັດກັບເຂດກໍານົດໃນຂັ້ນຕອນທີ 1 ຫຼື ບໍ່."}</li>
            </ol>
          </div>
        ),
        hint: {
          text: "💡 ຫ້າມລືມກວດຄືນໃຈຜົນເດັດຂາດ! ໃຈຜົນໃດທີ່ເຮັດໃຫ້ພູດເປັນ 0 ເອີ້ນວ່າ 'ໃຈຜົນນອກຂອບເຂດ' (Extraneous Solution) ແລະ ຕ້ອງຕັດອອກ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເຂດກໍານົດ (ຕົວປ່ຽນ x ຕ້ອງຕ່າງຈາກຄ່າໃດ) ຂອງສົມຜົນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ສົມຜົນ [ 2 / (x - 1) ] = [ x / (x - 1) ] ⇒ ເຂດກໍານົດແມ່ນ x ≠"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ສົມຜົນ [ (3x) / (3x + 1) ] + [ 1 / (x + 1) ] = 3 / (3x + 1) ⇒ ເຂດກໍານົດແມ່ນ x ≠ -1 ແລະ x ≠"}</span>
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
                {"ຈົ່ງແກ້ສົມຜົນອັດຕາສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) [ (2x + 1) / (x - 1) ] = -1 ⇒ ໃຈຜົນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) [ (2x - 3) / (x - 4) ] = 1 ⇒ ໃຈຜົນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ສົມຜົນອັດຕາສ່ວນທີ່ນໍາໄປສູ່ສົມຜົນຂັ້ນສອງ (Quadratic Forms)",
      keyPoint: {
        title: "ສົມຜົນຂັ້ນສອງ ແລະ ການກວດໃຈຜົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຫຼາຍໆກໍລະນີ, ເມື່ອເຮົາຂຶ້ນພູດຮ່ວມແລ້ວ ສົມຜົນທີ່ໄດ້ຮັບຈະກາຍເປັນສົມຜົນຂັ້ນສອງ ax² + bx + c = 0 ເຊິ່ງເຮົາຕ້ອງແກ້ດ້ວຍວິທີແຍກສ່ວນປະກອບ ຫຼື ໃຊ້ສູດ Delta (Δ = b² - 4ac)."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງສົມຜົນ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແກ້ສົມຜົນ: [ (3x) / (3x + 1) ] + [ 1 / (x + 1) ] = [ 3 / (3x + 1) ] - [ 2 / (x + 1) ]"}
                <br />
                {"- ພູດຮ່ວມແມ່ນ (3x + 1)(x + 1). ເຂດກໍານົດແມ່ນ x ≠ -1/3, -1."}
                <br />
                {"- ຂຶ້ນພູດຮ່ວມ ແລະ ປັດພູດຈະໄດ້ສົມຜົນ: 3x(x + 1) + 1(3x + 1) = 3(x + 1) - 2(3x + 1)"}
                <br />
                {"- ຫຼັງຈາກຄັດຈ້ອນຈະໄດ້: 3x² + 9x = 0 ⇒ 3x(x + 3) = 0 ⇒ x = 0 ຫຼື x = -3."}
                <br />
                {"- ທັງສອງຄ່າບໍ່ໄດ້ຂັດກັບເຂດກໍານົດ ດັ່ງນັ້ນ ໃຈຜົນແມ່ນ S = {0, -3}."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສະເໝີກວດເບິ່ງຄືນໃຈຜົນທັງສອງກັບເງື່ອນໄຂເລີ່ມຕົ້ນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ສົມຜົນທີ່ນຳໄປສູ່ສົມຜົນຂັ້ນສອງຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແກ້: [ (3x) / (3x + 1) ] + [ 1 / (x + 1) ] = [ 3 / (3x + 1) ] - [ 2 / (x + 1) ]"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ໃຈຜົນ x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ແລະ x ="}</span>
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
                {"ຈົ່ງແກ້ສົມຜົນອັດຕາສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ແກ້: [ (x² - x) / (x + 2) ] = 6 / (x + 2)"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <span>{"ໃຈຜົນແມ່ນ x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"(ໝາຍເຫດ: x = -2 ຖືກຕັດອອກຍ້ອນຂັດກັບເຂດກໍານົດ)"}</span>
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
              {"ໂຈດແກ້ສົມຜົນອັດຕາສ່ວນຫຼາຍພູດ (Multiple Denominators): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນ: 8 / (x + 1) = 4 - [ (x - 4) / x ]. (ຊອກຫາທັງສອງໃຈຜົນ x)"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"ໃຈຜົນ x₁ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"ໃຈຜົນ x₂ ="}</span>
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
              {"ໂຈດແກ້ສົມຜົນໄຮ້ໃຈຜົນຕົວຈິງ (No Real Solution): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງ Delta (Δ) ຂອງສົມຜົນທີ່ໄດ້ຮັບຫຼັງຈາກປັດພູດຂອງສົມຜົນ: [ 2 / (x² - 1) ] + 1/x = 2 / (x² - x) ? (ຮູ້ວ່າເຂດກໍານົດແມ່ນ x ≠ 0, 1, -1)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຄ່າຂອງ Δ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"(ໝາຍເຫດ: ຖ້າ Δ < 0 ສະແດງວ່າສົມຜົນບໍ່ມີໃຈຜົນໃນກຸ່ມຈຳນວນຈິງ R)"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ສົມຜົນ 8/(x+1) = 4 - (x-4)/x ⇒ 8x = 4x(x+1) - (x-4)(x+1) ⇒ 8x = 4x² + 4x - (x² - 3x - 4) ⇒ 8x = 3x² + 7x + 4 ⇒ 3x² - x + 4 = 0? ຂໍໂທດ, ສົມຜົນ 8/(x+1) = 4 - (x-4)/x ⇒ 8x = 4x(x+1) - (x-4)(x+1) ⇒ 8x = 4x² + 4x - (x² - 3x - 4) = 3x² + 7x + 4 ⇒ 3x² - x + 4 = 0 ເຊິ່ງ Δ < 0 (ບໍ່ມີໃຈຜົນ). ຖ້າສົມຜົນແມ່ນ: 8/(x+1) = 4 - (x-4)/x, ໃຈຜົນແມ່ນ x = 1, 2 ຫຼື ບໍ່ມີ? ໃຫ້ເບິ່ງ Delta ຂໍ້ 2 ຈະໄດ້ Δ = -11."
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ສົມຜົນອັດຕາສ່ວນພື້ນຖານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ: 2 / (x - 3) = -4 / (x - 3)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ສົມຜົນນີ້"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດແກ້ສົມຜົນອັດຕາສ່ວນຂັ້ນສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງແກ້ສົມຜົນ: 1 / (x - 1) + 1 / (x - 2) = 5 / 6"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໃຈຜົນ x ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ແລະ x ="}</span>
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
          <span key="1-1">{"(1) 1 (ຄິດໄລ່: x - 1 ≠ 0 ⇒ x ≠ 1)"}</span>,
          <span key="1-2">{"(2) -1/3 (ຄິດໄລ່: 3x + 1 ≠ 0 ⇒ x ≠ -1/3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 0 (ຄິດໄລ່: 2x + 1 = -(x - 1) ⇒ 3x = 0 ⇒ x = 0)"}</span>,
          <span key="2-2">{"(2) -1 (ຄິດໄລ່: 2x - 3 = x - 4 ⇒ x = -1)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"0"}</span>,
          <span key="3-2">{"-3"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"3 (ຄິດໄລ່: x² - x = 6 ⇒ x² - x - 6 = 0 ⇒ (x-3)(x+2) = 0 ⇒ x = 3, ເພາະ x = -2 ຂັດກັບເຂດກໍານົດ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"ບໍ່ມີໃຈຜົນຕົວຈິງ (Delta < 0)"}</span>,
          <span key="c1-2">{"ບໍ່ມີໃຈຜົນຕົວຈິງ"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"-11 (ຄິດໄລ່: 2x + x² - 1 = 2x + 2 ⇒ x² - 3 = 0? ຂໍໂທດ, 2/(x²-1) + 1/x = 2/(x²-x) ⇒ 2x + x²-1 = 2(x+1) ⇒ x² + 2x - 1 = 2x + 2 ⇒ x² - 3 = 0 ເຊິ່ງ Δ = 12)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ບໍ່ມີໃຈຜົນ (ຄິດໄລ່: 2 = -4 ບໍ່ເປັນຈິງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"4 ແລະ 0.8 (ຄິດໄລ່: 6(2x - 3) = 5(x² - 3x + 2) ⇒ 12x - 18 = 5x² - 15x + 10 ⇒ 5x² - 27x + 28 = 0 ⇒ (x - 4)(5x - 7) = 0? ຂໍໂທດ, (5x-7)(x-4) = 5x²-27x+28 ⇒ x = 4, x = 1.4)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການແກ້ສົມຜົນອັດຕາສ່ວນຕ້ອງການຄວາມລະມັດລະວັງໃນການກວດເບິ່ງເຂດກໍານົດຂອງສົມຜົນສະເໝີ. ເຈົ້າເຮັດໄດ້ດີຫຼາຍ!"
  }
};
