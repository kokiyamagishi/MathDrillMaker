import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit9Data: UnitData = {
  unitNumber: 9,
  unitTitle: "ພາກທີ I - ບົດທີ 9: ຈຳນວນສົມບູນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງຈຳນວນສົມບູນ (ຄ່າສໍາບູນ) ຢູ່ເທິງເສັ້ນຈຳນວນ, ວິທີຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນ ແລະ ການປຽບທຽບ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 65-70",
  keyPoints: [
    {
      title: "1. ຄວາມໝາຍຂອງຈຳນວນສົມບູນ (Absolute Value)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຈຳນວນສົມບູນ ຂອງຈຳນວນຖ້ວນ a (ສັນຍະລັກດ້ວຍ |a|) ແມ່ນ ໄລຍະຫ່າງ ແຕ່ຈຸດ 0 ຫາ ຈຸດປະສານ a ຢູ່ເທິງເສັ້ນຈຳນວນ:"}
          </p>
          {/* SVG Visual Representation of Number Line for Absolute Value */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "500px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 400 100" style={{ width: "100%", height: "auto" }}>
              {/* Main Line */}
              <line x1="20" y1="50" x2="380" y2="50" stroke="#333" strokeWidth="2" />
              <polygon points="380,45 390,50 380,55" fill="#333" />
              
              {/* Ticks */}
              <line x1="80" y1="45" x2="80" y2="55" stroke="#333" strokeWidth="2" />
              <text x="75" y="75" style={{ fontSize: "14px", fill: "#333" }}>{"-3"}</text>

              <line x1="200" y1="45" x2="200" y2="55" stroke="#333" strokeWidth="2" />
              <text x="195" y="75" style={{ fontSize: "14px", fontWeight: "bold", fill: "#D32F2F" }}>{"0"}</text>

              <line x1="320" y1="45" x2="320" y2="55" stroke="#333" strokeWidth="2" />
              <text x="315" y="75" style={{ fontSize: "14px", fill: "#333" }}>{"+3"}</text>

              {/* Distance Brackets */}
              <path d="M 80,40 Q 140,20 200,40" fill="none" stroke="#2196F3" strokeWidth="2" strokeDasharray="4" />
              <text x="125" y="25" style={{ fontSize: "14px", fill: "#2196F3", fontWeight: "bold" }}>{"3 ຫົວໜ່ວຍ"}</text>

              <path d="M 200,40 Q 260,20 320,40" fill="none" stroke="#4CAF50" strokeWidth="2" strokeDasharray="4" />
              <text x="245" y="25" style={{ fontSize: "14px", fill: "#4CAF50", fontWeight: "bold" }}>{"3 ຫົວໜ່ວຍ"}</text>
            </svg>
          </div>
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
            <div>{"• |+3| = 3 (ໄລຍະຫ່າງຈາກ 0 ຫາ +3 ແມ່ນ 3 ຫົວໜ່ວຍ)"}</div>
            <div>{"• |-3| = 3 (ໄລຍະຫ່າງຈາກ 0 ຫາ -3 ແມ່ນ 3 ຫົວໜ່ວຍ)"}</div>
            <div style={{ color: "#0D47A1", fontWeight: "bold" }}>
              {"* ຈຳນວນສົມບູນຈະມີຄ່າເປັນບວກ ຫຼື 0 ສະເໝີ, ບໍ່ມີທາງເປັນຄ່າລົບເດີ້!"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຄິດງ່າຍໆກໍ່ຄື ບໍ່ວ່າຈະມີເຄື່ອງໝາຍບວກ ຫຼື ລົບ ທາງໃນເຄື່ອງໝາຍ | |, ເວລາຖອດອອກມາຈະເປັນບວກສະເໝີ!",
        isBlue: true,
      },
    },
    {
      title: "2. ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນ (Distance between two numbers)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນ a ແລະ b ແມ່ນເທົ່າກັບ |a - b| (ຫຼື ເອົາຕົວເລກໃຫຍ່ລົບຕົວເລກນ້ອຍ):"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div><strong>{"ຕົວຢ່າງ 1: "}</strong>{"ໄລຍະຫ່າງລະຫວ່າງ 5 ແລະ 15 ແມ່ນ:"}</div>
            <div style={{ paddingLeft: "16px", color: "#2E7D32" }}>{"|15 - 5| = |10| = 10 ຫົວໜ່ວຍ"}</div>
            <div><strong>{"ຕົວຢ່າງ 2: "}</strong>{"ໄລຍະຫ່າງລະຫວ່າງ -12 ແລະ -7 ແມ່ນ:"}</div>
            <div style={{ paddingLeft: "16px", color: "#2E7D32" }}>{"|-7 - (-12)| = |-7 + 12| = |+5| = 5 ຫົວໜ່ວຍ"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນ ໃຫ້ເອົາຕົວເລກທີ່ຢູ່ເບື້ອງຂວາ (ໃຫຍ່ກວ່າ) ລົບໃຫ້ຕົວເລກເບື້ອງຊ້າຍ (ນ້ອຍກວ່າ) ຢູ່ເທິງເສັ້ນຈຳນວນຈະງ່າຍທີ່ສຸດ!",
      },
    },
    {
      title: "3. ການປຽບທຽບຈຳນວນລົບ ໂດຍໃຊ້ຈຳນວນສົມບູນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສຳລັບສອງຈຳນວນລົບ, ຈຳນວນທີ່ມີຈຳນວນສົມບູນ (ໄລຍະຫ່າງຈາກ 0) ໃຫຍ່ກວ່າ ຈະເປັນຈຳນວນທີ່ນ້ອຍກວ່າ:"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"ປຽບທຽບ -5 ແລະ -3:"}</div>
            <div>{"• |-5| = 5 (ຢູ່ຫ່າງຈາກ 0 ຫຼາຍກວ່າ)"}</div>
            <div>{"• |-3| = 3 (ຢູ່ໃກ້ 0 ຫຼາຍກວ່າ)"}</div>
            <div style={{ color: "#D84315", fontWeight: "bold", borderTop: "1px solid #FFE0B2", paddingTop: "6px", marginTop: "4px" }}>
              {"→ ດັ່ງນັ້ນ -5 < -3 (ເພາະ -5 ຢູ່ເບື້ອງຊ້າຍຂອງ -3 ເທິງເສັ້ນຈຳນວນ)"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຍິ່ງຕິດລົບຫຼາຍ ຄ່າຂອງມັນຍິ່ງນ້ອຍລົງເດີ້!",
        isBlue: true,
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າຂອງຈຳນວນສົມບູນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ้ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) |+7| ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) |-12| ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) |0| ="}</span>
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
            {"ຈົ່ງປຽບທຽບຈຳນວນລຸ່ມນີ້ ໂດຍຕື່ມເຄື່ອງໝາຍ "}<strong>{"<"}</strong>{" ຫຼື "}<strong>{">"}</strong>{" ໃສ່ບ່ອນວ່າງ: "}{" "}
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
              <span>{"(1) -8"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"-3"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) |-15|"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"|-10|"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໄລຍະຫ່າງລະຫວ່າງສອງຈຸດແມ່ນຜົນຕ່າງຂອງຄ່າປະສານ ໂດຍຄິດໄລ່ຄ່າສົມບູນ |a - b|. ບົດທ້າທາຍ 2: ການຊອກຫາການປ່ຽນແປງອຸນຫະພູມ ໃຫ້ເອົາອຸນຫະພູມຫຼ້າສຸດ ລົບໃຫ້ອຸນຫະພູມເລີ່ມຕົ້ນ (20 - (-5)) ຈະໄດ້ໄລຍະຫ່າງທັງໝົດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງຈຸດ ຢູ່ເທິງເສັ້ນຈຳນວນຕໍ່ໄປນີ້: "}{" "}
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
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ໄລຍະຫ່າງລະຫວ່າງຈຸດ 5 ແລະ 15 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຫົວໜ່ວຍ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ໄລຍະຫ່າງລະຫວ່າງຈຸດ -2 ແລະ 3 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຫົວໜ່ວຍ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບອຸນຫະພູມຕໍ່ໄປນີ້ (ໃຊ້ຄວາມຮູ້ເລື່ອງໄລຍະຫ່າງ): "}{" "}
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
                <span>{"(1) ອາຫານແຊ່ແຂງມີອຸນຫະພູມ -5°C. ຫຼັງຈາກເອົາມາປະໄວ້ທາງນອກ, ອຸນຫະພູມໄດ້ເພີ່ມຂຶ້ນເປັນ 20°C. ຖາມວ່າອຸນຫະພູມໄດ້ເພີ່ມຂຶ້ນຈັກອົງສາ (°C)?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ເພີ່ມຂຶ້ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°C"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ອຸນຫະພູມຂອງແຂວງໜຶ່ງປ່ຽນແປງຈາກ -12°C ຫາ -7°C ໃນຕອນກາງຄືນ. ຖາມວ່າອຸນຫະພູມປ່ຽນແປງ (ໄລຍະຫ່າງ) ຈັກອົງສາ (°C)?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ປ່ຽນແປງ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°C"}</span>
                </div>
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
            {"ຈົ່ງຄິດໄລ່ຜົນຄຳນວນຂອງຈຳນວນສົມບູນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) |-8| + |+3| ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) |-20| - |-12| ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) |-5| × |+4| ="}</span>
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
            {"ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງຈຳນວນລຸ່ມນີ້: "}{" "}
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
              <span>{"(1) ໄລຍະຫ່າງລະຫວ່າງ -10 ແລະ +5 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ຫົວໜ່ວຍ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໄລຍະຫ່າງລະຫວ່າງ -8 ແລະ -2 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ຫົວໜ່ວຍ"}</span>
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
          <span key="u9-ans-1-1">{"(1) 7"}</span>,
          <span key="u9-ans-1-2">{"(2) 12"}</span>,
          <span key="u9-ans-1-3">{"(3) 0"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u9-ans-2-1">{"(1) < (ເພາະ -8 ຢູ່ເບື້ອງຊ້າຍຂອງ -3 ເທິງເສັ້ນຈຳນວນ)"}</span>,
          <span key="u9-ans-2-2">{"(2) > (ເພາະ |-15| = 15 ແລະ |-10| = 10, ດັ່ງນັ້ນ 15 > 10)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u9-ans-t1-1">{"(1) 10 (ຄິດໄລ່ຈາກ |15 - 5| = 10)"}</span>,
          <span key="u9-ans-t1-2">{"(2) 5 (ຄິດໄລ່ຈາກ |3 - (-2)| = |3 + 2| = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u9-ans-t2-1">{"(1) 25°C (ຄິດໄລ່ຈາກ 20 - (-5) = 20 + 5 = 25)"}</span>,
          <span key="u9-ans-t2-2">{"(2) 5°C (ຄິດໄລ່ຈາກ |-7 - (-12)| = |-7 + 12| = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u9-ans-s1-1">{"(1) 11 (ເພາະ 8 + 3 = 11)"}</span>,
          <span key="u9-ans-s1-2">{"(2) 8 (ເພາະ 20 - 12 = 8)"}</span>,
          <span key="u9-ans-s1-3">{"(3) 20 (ເພາະ 5 × 4 = 20)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u9-ans-s2-1">{"(1) 15 (ຄິດໄລ່ຈາກ |+5 - (-10)| = |5 + 10| = 15)"}</span>,
          <span key="u9-ans-s2-2">{"(2) 6 (ຄິດໄລ່ຈາກ |-2 - (-8)| = |-2 + 8| = 6)"}</span>,
        ],
      },
    ],
    advice: "ຈຳນວນສົມບູນ (Absolute Value) ແມ່ນໄລຍະຫ່າງ ດັ່ງນັ້ນຄຳຕອບຈະຕ້ອງເປັນຈຳນວນບວກສະເໝີ. ເມື່ອຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງອຸນຫະພູມ ຫຼື ສອງຈຸດ ໃຫ້ເອົາຕົວໃຫຍ່ລົບຕົວນ້ອຍເດີ້!",
  },
};
