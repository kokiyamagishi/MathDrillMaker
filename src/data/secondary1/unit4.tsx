import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit4Data: UnitData = {
  unitNumber: 4,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ການບວກ ແລະ ການລົບຈຳນວນຖ້ວນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບການບວກ ແລະ ການລົບຈຳນວນຖ້ວນ (ທັງເຄື່ອງໝາຍຄືກັນ ແລະ ຕ່າງກັນ), ຄ່າສຳບູນ (ໄລຍະຫ່າງຈາກ 0) ແລະ ຫຼັກການປ່ຽນເຄື່ອງໝາຍ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 24-31",
  subSections: [
    {
      title: "1. ໄລຍະຫ່າງຈາກ 0 (ຄ່າສຳບູນ)",
      keyPoint: {
      title: "1. ໄລຍະຫ່າງຈາກ 0 (ຄ່າສຳບູນ)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໄລຍະຫ່າງຈາກ 0 ແມ່ນໄລຍະທາງແຕ່ຈຸດເຄົ້າ 0 ຫາຈຸດນັ້ນເທິງແກນຈຳນວນ (ເປັນບວກສະເໝີ):"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• ໄລຍະຫ່າງຂອງ "}<strong>{"+6"}</strong>{" ຈາກ 0 ແມ່ນ "}<strong>{"6"}</strong></div>
            <div>{"• ໄລຍະຫ່າງຂອງ "}<strong>{"-3"}</strong>{" ຈາກ 0 ແມ່ນ "}<strong>{"3"}</strong></div>
          </div>
        </div>
      ),
      hint: {
        text: "ໄລຍະຫ່າງຈາກ 0 ຈະບໍ່ມີເຄື່ອງໝາຍລົບເດີ້! ມັນສະແດງເຖິງຄວາມຍາວສະເໝີ.",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຜົນບວກຂອງຈຳນວນຖ້ວນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) (+3) + (+7) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) (-8) + (-12) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) (-6) + (+8) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) (+4) + (-7) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(5) (-15) + (+5) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການບວກຈຳນວນຖ້ວນ",
      keyPoint: {
      title: "2. ການບວກຈຳນວນຖ້ວນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການບວກຈຳນວນຖ້ວນແບ່ງອອກເປັນ 2 ກໍລະນີດັ່ງນີ້:"}
          </p>
          <div
            style={{
              padding: "14px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>
              <strong style={{ color: "#2E7D32" }}>{"• ເຄື່ອງໝາຍຄືກັນ:"}</strong>
              {" ເອົາໄລຍະຫ່າງມາບວກກັນ ແລ້ວຮັກສາເຄື່ອງໝາຍເດີມ."}
              <br />
              <span style={{ paddingLeft: "16px", color: "#1B5E20", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ: (+3) + (+7) = +10 | (-8) + (-12) = -20"}
              </span>
            </div>
            <div style={{ borderTop: "1px dashed #ccc", paddingTop: "8px" }}>
              <strong style={{ color: "#00796B" }}>{"• ເຄື່ອງໝາຍຕ່າງກັນ:"}</strong>
              {" ເອົາໄລຍະຫ່າງໃຫຍ່ລົບໄລຍະຫ່າງນ້ອຍ ແລ້ວເອົາເຄື່ອງໝາຍຕາມຕົວທີ່ໃຫຍ່ກວ່າ."}
              <br />
              <span style={{ paddingLeft: "16px", color: "#004D40", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ: (-6) + (+8) = +2 (ເພາະ 8 - 6 = 2) | (+4) + (-7) = -3 (ເພາະ 7 - 4 = 3)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາບວກເຄື່ອງໝາຍຕ່າງກັນ ໃຫ້ເບິ່ງວ່າຈຳນວນໃດຢູ່ຫ່າງຈາກ 0 ຫຼາຍກວ່າ, ແລ້ວໃຊ້ເຄື່ອງໝາຍຂອງຕົວນັ້ນເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງປ່ຽນການລົບໃຫ້ເປັນການບວກຈຳນວນກົງກັນຂ້າມ ແລ້ວຄິດໄລ່ຄຳຕອບ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) (-5) - (+8) = (-5) +"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) (-3) - (-7) = (-3) +"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ການລົບຈຳນວນຖ້ວນ",
      keyPoint: {
      title: "3. ການລົບຈຳນວນຖ້ວນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຫຼັກການລົບ: ການລົບຈຳນວນຖ້ວນ ແມ່ນເທົ່າກັບການບວກຈຳນວນກົງກັນຂ້າມຂອງຕົວລົບ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              textAlign: "center",
              fontWeight: "bold",
              color: "#E65100",
            }}
          >
            {"a - b = a + ( -b )"}
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FAFAFA",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• (+4) - (+3) = (+4) + (-3) = +1"}</div>
            <div>{"• (+2) - (-5) = (+2) + (+5) = +7"}</div>
            <div>{"• (-5) - (+8) = (-5) + (-8) = -13"}</div>
            <div>{"• (-3) - (-7) = (-3) + (+7) = +4"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ການລົບຈຳນວນລົບ ຈະກາຍເປັນການບວກຈຳນວນບວກເດີ້! ເຊັ່ນ: - ( -7 ) = +7",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "🔍 ໄລຍະຫ່າງຈາກ 0 ແມ່ນຄ່າສຳບູນ (ເປັນບວກສະເໝີ). ເວລາບວກຫຼາຍຈຳນວນ ໃຫ້ເອົາພວກເຄື່ອງໝາຍຄືກັນມາບວກກັນກ່ອນ ແລ້ວຈຶ່ງໄລ່ຂັ້ນຕອນສຸດທ້າຍເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາໄລຍະຫ່າງຈາກ 0 (ຄ່າສຳບູນ) ຂອງຈຳນວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ໄລຍະຫ່າງຈາກ 0 ຂອງ +10 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) ໄລຍະຫ່າງຈາກ 0 ຂອງ -18 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກບວກ ແລະ ລົບປະສົມຫຼາຍພົດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) (+7) + (-3) + (+5) + (-2) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) (-4) - (+5) - (-8) + (+2) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ ແລະ ຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) (+12) + (-12) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) (-20) - (+5) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) (+8) - (-8) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) ໄລຍະຫ່າງຈາກ 0 ຂອງ -100 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(5) (-3) + (-4) + (-5) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ໃນຕອນເຊົ້າອຸນຫະພູມແມ່ນ -3°C. ໃນຕອນທ່ຽງ ອຸນຫະພູມເພີ່ມຂຶ້ນ (ບວກ) 8°C. ອຸນຫະພູມໃນຕອນທ່ຽງຈະແມ່ນຈັກ °C?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°C"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຍົນລຳໜຶ່ງບິນຢູ່ລວງສູງ +1,200 m ຈາກລະດັບນ້ຳທະເລ, ສ່ວນກຳປັ່ນດຳນ້ຳຈົມຢູ່ລວງເລິກ -300 m. ຖ້າໄລ່ຄວາມແຕກຕ່າງ (ລົບ) ຂອງລວງສູງທັງສອງ ຈະແມ່ນຈັກ m?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຕ່າງກັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u4-ans-1-1">{"(1) +10"}</span>,
          <span key="u4-ans-1-2">{"(2) -20"}</span>,
          <span key="u4-ans-1-3">{"(3) +2"}</span>,
          <span key="u4-ans-1-4">{"(4) -3"}</span>,
          <span key="u4-ans-1-5">{"(5) -10"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u4-ans-2-1">{"(1) (-5) + (-8) = -13"}</span>,
          <span key="u4-ans-2-2">{"(2) (-3) + (+7) = +4"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u4-ans-t1-1">{"(1) 10 (ເພາະຄ່າສຳບູນແມ່ນບວກສະເໝີ)"}</span>,
          <span key="u4-ans-t1-2">{"(2) 18"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u4-ans-t2-1">{"(1) +7 (ເພາະ (+7) + (+5) = +12, ແລະ (-3) + (-2) = -5, ຈະໄດ້ 12 - 5 = 7)"}</span>,
          <span key="u4-ans-t2-2">{"(2) +1 (ເພາະ (-4) + (-5) = -9, ແລະ (+8) + (+2) = +10, ຈະໄດ້ -9 + 10 = +1)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u4-ans-s1-1">{"(1) 0"}</span>,
          <span key="u4-ans-s1-2">{"(2) -25"}</span>,
          <span key="u4-ans-s1-3">{"(3) +16"}</span>,
          <span key="u4-ans-s1-4">{"(4) 100"}</span>,
          <span key="u4-ans-s1-5">{"(5) -12"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u4-ans-s2-1">{"(1) +5°C (ເພາະ -3 + 8 = +5)"}</span>,
          <span key="u4-ans-s2-2">{"(2) 1,500 m (ເພາະ 1200 - (-300) = 1200 + 300 = 1500)"}</span>,
        ],
      },
    ],
    advice: "ເວລາລົບຈຳນວນລົບ ຢ່າລືມປ່ຽນເປັນບວກເດີ້! ຕົວຢ່າງ: 1200 - (-300) = 1200 + 300 = 1500 m.",
  },
};
