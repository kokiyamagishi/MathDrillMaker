import React from "react";
import { UnitData } from "../units2";

export const unit2Data: UnitData = {
  unitNumber: 2,
  unitTitle: "ພາກທີ I - ບົດທີ 2: ຈຳນວນຖ້ວນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງຈຳນວນຖ້ວນ (ຈຳນວນຖ້ວນບວກ, ຈຳນວນຖ້ວນລົບ ແລະ ສູນ), ແກນຈຳນວນ, ຈຳນວນກົງກັນຂ້າມ ແລະ ການປຽບທຽບຈຳນວນຖ້ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 10-13",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງຈຳນວນຖ້ວນ ແລະ ແກນຈຳນວນ",
      keyPoint: {
        title: "ຈຳນວນຖ້ວນບວກ, ຈຳນວນຖ້ວນລົບ ແລະ ແກນຈຳນວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈຳນວນຖ້ວນປະກອບມີ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຈຳນວນຖ້ວນບວກ: "}</strong>{" +1, +2, +3, ... (ຫຼື ຂຽນ 1, 2, 3, ...)"}</li>
              <li><strong>{"ຈຳນວນຖ້ວນລົບ: "}</strong>{" -1, -2, -3, ... (ສະແດງເຖິງຄ່າທີ່ກົງກັນຂ້າມກັບຈຳນວນຖ້ວນບວກ)"}</li>
              <li><strong>{"ສູນ (0): "}</strong>{" ເປັນຈຳນວນຖ້ວນ ແຕ່ບໍ່ແມ່ນຈຳນວນຖ້ວນບວກ ແລະ ບໍ່ແມ່ນຈຳນວນຖ້ວນລົບ"}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1565C0" }}>{"ແຜນວາດແກນຈຳນວນ (Number Line)"}</span>
              <svg viewBox="0 0 400 60" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                {/* Main line with arrow */}
                <line x1="10" y1="30" x2="390" y2="30" stroke="#37474F" strokeWidth="2" />
                <polygon points="390,30 380,25 380,35" fill="#37474F" />
                <polygon points="10,30 20,25 20,35" fill="#37474F" />

                {/* Ticks and Labels */}
                {/* -3 */}
                <line x1="70" y1="25" x2="70" y2="35" stroke="#37474F" strokeWidth="2" />
                <text x="70" y="50" fill="#E53935" fontSize="14" textAnchor="middle" fontWeight="bold">{"-3"}</text>
                
                {/* -2 */}
                <line x1="120" y1="25" x2="120" y2="35" stroke="#37474F" strokeWidth="2" />
                <text x="120" y="50" fill="#E53935" fontSize="14" textAnchor="middle" fontWeight="bold">{"-2"}</text>

                {/* -1 */}
                <line x1="170" y1="25" x2="170" y2="35" stroke="#37474F" strokeWidth="2" />
                <text x="170" y="50" fill="#E53935" fontSize="14" textAnchor="middle" fontWeight="bold">{"-1"}</text>

                {/* 0 */}
                <line x1="220" y1="23" x2="220" y2="37" stroke="#000" strokeWidth="3" />
                <text x="220" y="52" fill="#000" fontSize="16" textAnchor="middle" fontWeight="bold">{"0"}</text>

                {/* +1 */}
                <line x1="270" y1="25" x2="270" y2="35" stroke="#37474F" strokeWidth="2" />
                <text x="270" y="50" fill="#43A047" fontSize="14" textAnchor="middle" fontWeight="bold">{"+1"}</text>

                {/* +2 */}
                <line x1="320" y1="25" x2="320" y2="35" stroke="#37474F" strokeWidth="2" />
                <text x="320" y="50" fill="#43A047" fontSize="14" textAnchor="middle" fontWeight="bold">{"+2"}</text>

                {/* +3 */}
                <line x1="370" y1="25" x2="370" y2="35" stroke="#37474F" strokeWidth="2" />
                <text x="370" y="50" fill="#43A047" fontSize="14" textAnchor="middle" fontWeight="bold">{"+3"}</text>
              </svg>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຳນວນກົງກັນຂ້າມແມ່ນສອງຈຳນວນທີ່ມີໄລຍະຫ່າງຫາຈຸດ O (ເລກ 0) ເທົ່າກັນ ແຕ່ຢູ່ຄົນລະເບື້ອງ ເຊັ່ນ: -3 ແລະ +3 ແມ່ນຈຳນວນກົງກັນຂ້າມກັນ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກຈຳນວນກົງກັນຂ້າມຂອງຈຳນວນຖ້ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈຳນວນກົງກັນຂ້າມຂອງ -15 ແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈຳນວນກົງກັນຂ້າມຂອງ +42 ແມ່ນ"}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວລັບຈາກເງື່ອນໄຂຈຳນວນກົງກັນຂ້າມ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"-(-8) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "45px", width: "45px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"-(+13) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "45px", width: "45px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການປຽບທຽບຈຳນວນຖ້ວນ",
      keyPoint: {
        title: "ຫຼັກການປຽບທຽບຈຳນວນຖ້ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຫຼັກການປຽບທຽບຈຳນວນຖ້ວນມີດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li>{"ຈຳນວນຖ້ວນບວກຈະມີຄ່າຫຼາຍກວ່າຈຳນວນຖ້ວນລົບສະເໝີ."}</li>
              <li>{"ຈຳນວນຖ້ວນບວກຍິ່ງຢູ່ຫ່າງຈາກເລກ 0 ເທົ່າໃດ ຄ່າຂອງມັນຍິ່ງຫຼາຍຂຶ້ນເທົ່ານັ້ນ."}</li>
              <li>{"ສຳລັບຈຳນວນຖ້ວນລົບ, ຈຳນວນໃດທີ່ຢູ່ຫ່າງຈາກເລກ 0 ຫຼາຍກວ່າ ຈະມີຄ່າ "}<strong>{"ນ້ອຍກວ່າ"}</strong>{" ເຊັ່ນ: "}
                <strong style={{ color: "#E53935" }}>{"-5 < -3"}</strong>{" (ເພາະວ່າ -5 ຢູ່ເບື້ອງຊ້າຍ ແລະ ຫ່າງຈາກ 0 ຫຼາຍກວ່າ -3)."}
              </li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ: ຢູ່ເທິງແກນຈຳນວນ, ຈຳນວນທີ່ຢູ່ເບື້ອງຂວາ ຈະມີຄ່າຫຼາຍກວ່າຈຳນວນທີ່ຢູ່ເບື້ອງຊ້າຍສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ < , > ຫຼື = ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"-8"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span className="math">{"-3"}</span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"-1"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span className="math">{"0"}</span>
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
                {"ຈົ່ງຈັດລຽງຈຳນວນຖ້ວນຕໍ່ໄປນີ້ແຕ່ໜ້ອຍຫາຫຼາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                <strong>{"-7,  +3,  -12,  0,  -1,  +5"}</strong>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", padding: "8px 0" }}>
                <span>{"ຈັດລຽງ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "240px", height: "42px" }}></span>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ແກນຈຳນວນເພື່ອຄົ້ນຫາໄລຍະຫ່າງ ແລະ ປຽບທຽບຄວາມແຕກຕ່າງລະຫວ່າງອຸນຫະພູມ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາປຽບທຽບອຸນຫະພູມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຢູ່ເມືອງໜຶ່ງ, ອຸນຫະພູມໃນຕອນເຊົ້າແມ່ນ "}<strong>{"-5°C"}</strong>{" ແລະ ຕອນທ່ຽງແມ່ນ "}<strong>{"+2°C"}</strong>
              {". ຖາມວ່າອຸນຫະພູມໃນຕອນທ່ຽງຫຼາຍກວ່າຕອນເຊົ້າຈັກອົງສາເຊ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຫຼາຍກວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"°C"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງຈຸດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຢູ່ເທິງແກນຈຳນວນ, ຈຸດ A ມີອັບຊິດແມ່ນ "}<strong>{"-7"}</strong>{" ແລະ ຈຸດ B ມີອັບຊິດແມ່ນ "}<strong>{"+3"}</strong>
              {". ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງຈຸດ A ແລະ B ມີຈັກຫົວໜ່ວຍ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໄລຍະຫ່າງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຫົວໜ່ວຍ"}</span>
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
            {"ໂຈດບັນຫາລາຍຮັບ-ລາຍຈ່າຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮ້ານຄ້າແຫ່ງໜຶ່ງບັນທຶກຜົນໄດ້ຮັບເປັນເງິນກີບ: ວັນຈັນ ໄດ້ກຳໄລ 500,000 ກີບ, ວັນອັງຄານ ຂາດທຶນ 120,000 ກີບ, ວັນພຸດ ຂາດທຶນ 80,000 ກີບ. ຈົ່ງຂຽນຈຳນວນຖ້ວນສະແດງຜົນໄດ້ຮັບຂອງວັນອັງຄານ ແລະ ວັນພຸດ ຕາມລຳດັບ:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ວັນອັງຄານ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "42px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ວັນພຸດ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "42px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການປຽບທຽບ ແລະ ຊອກຫາຈຳນວນຖ້ວນທີ່ເໝາະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຈຳນວນຖ້ວນ x ທັງໝົດທີ່ຕອບສະໜອງເງື່ອນໄຂ: "}<strong>{" -3 < x ≤ +2 "}</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: x ປະກອບມີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) +15 (ຫຼື 15)"}</span>,
          <span key="1-2">{"(2) -42"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) +8 (ຫຼື 8)"}</span>,
          <span key="2-2">{"(2) -13"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) -8 < -3"}</span>,
          <span key="3-2">{"(2) -1 < 0"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"-12, -7, -1, 0, +3, +5"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"7°C (ຄິດໄລ່: ໄລຍະຫ່າງຈາກ -5°C ຫາ +2°C ແມ່ນ 7 ຫົວໜ່ວຍ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"10 ຫົວໜ່ວຍ (ໄລຍະຫ່າງຈາກ -7 ຫາ +3 ແມ່ນ 3 - (-7) = 10 ຫົວໜ່ວຍ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1">{"- ວັນອັງຄານ: -120,000 ກີບ"}</span>,
          <span key="s1-2">{"- ວັນພຸດ: -80,000 ກີບ"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"-2, -1, 0, 1, 2"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການເຂົ້າໃຈຈຳນວນຖ້ວນ ແລະ ແກນຈຳນວນ ຈະຊ່ວຍໃຫ້ເຮົາຮຽນຮູ້ເລກລົບ ແລະ ການຄິດໄລ່ຂັ້ນສູງໄດ້ຢ່າງສະດວກ. ສູ້ໆເດີ້!"
  }
};
