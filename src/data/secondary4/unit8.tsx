import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit8Data: UnitData = {
  unitNumber: 8,
  unitTitle: "ພາກທີ I - ບົດທີ 8: ການແກ້ໂຈດກ່ຽວກັບຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ",
  unitGoal:
    "ຮຽນຮູ້ວິທີແກ້ໂຈດບັນຫາຄະນິດສາດກ່ຽວກັບການເຄື່ອນທີ່ (Word Problems of Motion) ໂດຍນຳໃຊ້ສົມຜົນພົວພັນລະຫວ່າງ ໄລຍະທາງ (Distance), ຄວາມໄວ (Speed) ແລະ ເວລາ (Time)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 8 ໜ້າ 43-48",
  subSections: [
    {
      title: "1. ສູດພື້ນຖານຂອງການເຄື່ອນທີ່ (Fundamental Motion Formulas)",
      keyPoint: {
      title: "1. ສູດພື້ນຖານຂອງການເຄື່ອນທີ່ (Fundamental Motion Formulas)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການເຄື່ອນທີ່ຂອງວັດຖຸໃນຄວາມໄວສະເໝີ ມີ 3 ສູດພົວພັນທີ່ສຳຄັນດັ່ງນີ້:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ໄລຍະທາງ (Distance - d): "}</strong>
              <span style={{ fontWeight: "bold" }}>{"d = v × t"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຄວາມໄວ (Speed - v): "}</strong>
              <span style={{ fontWeight: "bold" }}>
                {"v = "}
                <Fraction num="d" den="t" />
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ເວລາ (Time - t): "}</strong>
              <span style={{ fontWeight: "bold" }}>
                {"t = "}
                <Fraction num="d" den="v" />
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງລະວັງຫົວໜ່ວຍການວັດແທກ! ຖ້າໄລຍະທາງເປັນ km ແລະ ເວລາເປັນ ຊົ່ວໂມງ (h), ຄວາມໄວຕ້ອງເປັນ km/h ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫາໄລຍະທາງ, ຄວາມໄວ ຫຼື ເວລາ ຂອງການເຄື່ອນທີ່ພື້ນຖານ: "}{" "}
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
              <span>{"(1) ລົດຈັກຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວ 50 km/h ເປັນເວລາ 3 ຊົ່ວໂມງ. ໄລຍະທາງ d ທີ່ແລ່ນໄດ້ແມ່ນຈັກ km? (d = v × t):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"km"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ລົດໃຫຍ່ຄັນໜຶ່ງແລ່ນໄດ້ໄລຍະທາງ 240 km ໃນເວລາ 4 ຊົ່ວໂມງ. ຄວາມໄວສະເລ່ຍ v ຂອງລົດແມ່ນຈັກ km/h? (v = d/t):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"km/h"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ແຜນວາດການເຄື່ອນທີ່ສວນທາງ ແລະ ໄລ່ທັນ (Two Motion Scenarios)",
      keyPoint: {
      title: "2. ແຜນວາດການເຄື່ອນທີ່ສວນທາງ ແລະ ໄລ່ທັນ (Two Motion Scenarios)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* Overtaking / Chase SVG */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "4px" }}>{"ການເຄື່ອນທີ່ໄລ່ທັນ (Overtake)"}</span>
              <svg viewBox="0 0 140 80" style={{ width: "140px", height: "80px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                {/* Road */}
                <line x1="10" y1="60" x2="130" y2="60" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />

                {/* Car A (front) */}
                <circle cx="70" cy="50" r="4" fill="#2196F3" />
                <line x1="70" y1="50" x2="95" y2="50" stroke="#2196F3" strokeWidth="1.5" />
                <polygon points="95,48 99,50 95,52" fill="#2196F3" />
                <text x="70" y="42" fill="#2196F3" fontSize="7" textAnchor="middle">{"A: v₁"}</text>

                {/* Car B (behind, faster) */}
                <circle cx="25" cy="50" r="4" fill="#E91E63" />
                <line x1="25" y1="50" x2="65" y2="50" stroke="#E91E63" strokeWidth="1.5" />
                <polygon points="65,48 69,50 65,52" fill="#E91E63" />
                <text x="25" y="42" fill="#E91E63" fontSize="7" textAnchor="middle">{"B: v₂ (v₂ > v₁)"}</text>
              </svg>
            </div>
            {/* Meeting SVG */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "4px" }}>{"ການເຄື່ອນທີ່ພົບກັນ (Opposite)"}</span>
              <svg viewBox="0 0 140 80" style={{ width: "140px", height: "80px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                {/* Road */}
                <line x1="10" y1="60" x2="130" y2="60" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />

                {/* Object A (moves right) */}
                <circle cx="20" cy="50" r="4" fill="#4CAF50" />
                <line x1="20" y1="50" x2="55" y2="50" stroke="#4CAF50" strokeWidth="1.5" />
                <polygon points="55,48 59,50 55,52" fill="#4CAF50" />
                <text x="20" y="42" fill="#4CAF50" fontSize="7" textAnchor="middle">{"A →"}</text>

                {/* Object B (moves left) */}
                <circle cx="120" cy="50" r="4" fill="#FF9800" />
                <line x1="120" y1="50" x2="85" y2="50" stroke="#FF9800" strokeWidth="1.5" />
                <polygon points="85,48 81,50 85,52" fill="#FF9800" />
                <text x="120" y="42" fill="#FF9800" fontSize="7" textAnchor="middle">{"← B"}</text>
              </svg>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າເຄື່ອນທີ່ສວນທາງກັນ ຄວາມໄວລວມຈະແມ່ນ v₁ + v₂. ແຕ່ຖ້າແລ່ນໄລ່ທັນກັນໃນທິດດຽວກັນ ຄວາມໄວຜົນຕ່າງຈະແມ່ນ v₂ - v₁ ເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ເວລາ ແລະ ຜັນປ່ຽນຫົວໜ່ວຍເວລາໃຫ້ຖືກຕ້ອງ: "}{" "}
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
              <span>{"(1) ຄົນຜູ້ໜຶ່ງຍ່າງດ້ວຍຄວາມໄວ 4 km/h ເພື່ອໄປບ້ານທີ່ຢູ່ຫ່າງອອກໄປ 10 km. ລາວຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ? (ຕອບເປັນທົດສະນິຍົມ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ຊົ່ວໂມງ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ລົດໄຟແລ່ນດ້ວຍຄວາມໄວ 80 km/h. ຖ້າຕ້ອງການແລ່ນໃຫ້ໄດ້ໄລຍະທາງ 120 km, ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ ແລະ ຈັກນາທີ? (ຈົ່ງຕອບສະເພາະຈຳນວນນາທີທັງໝົດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ນາທີ"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ການແລ່ນສວນທາງກັນ ໃຫ້ເອົາຄວາມໄວບວກກັນ v_ລວມ = v₁ + v₂. ບົດທ້າທາຍ 2: ການແລ່ນໄລ່ທັນກັນ ໃຫ້ຕັ້ງສົມຜົນ d = v₁ × t = v₂ × (t - t_ຊ້າ) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການເຄື່ອນທີ່ສວນທາງກັນ (Opposite Directions): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ສອງເມືອງ A ແລະ B ຢູ່ຫ່າງກັນ 180 km. ທ້າວ A ຂີ່ລົດຈັກອອກຈາກເມືອງ A ດ້ວຍຄວາມໄວ 40 km/h, ສ່ວນທ້າວ B ຂີ່ລົດໃຫຍ່ອອກຈາກເມືອງ B ສວນທາງມາດ້ວຍຄວາມໄວ 50 km/h. ຫຼັງຈາກຈັກຊົ່ວໂມງ ເຂົາເຈົ້າຈຶ່ງຈະພົບກັນ? (t = d / (v₁ + v₂)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ເມື່ອພົບກັນ ທ້າວ A (ທີ່ອອກຈາກເມືອງ A ດ້ວຍຄວາມໄວ 40 km/h) ຈະແລ່ນໄດ້ໄລຍະທາງທັງໝົດຈັກກິໂລແມັດ (km)?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"km"}</span>
                </div>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການເຄື່ອນທີ່ໄລ່ທັນກັນ (Catch-up/Overtake): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ທ້າວຈັນທາ ຂີ່ລົດຖີບອອກຈາກບ້ານກ່ອນ ດ້ວຍຄວາມໄວ 12 km/h. ຫຼັງຈາກຜ່ານໄປ 1 ຊົ່ວໂມງ, ທ້າວບຸນມີ ຈຶ່ງຂີ່ລົດຈັກໄລ່ຕາມຫຼັງມາດ້ວຍຄວາມໄວ 36 km/h. ຖ້າທ້າວບຸນມີອອກເດີນທາງ, ລາວຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ ຈຶ່ງຈະໄລ່ທັນທ້າວຈັນທາ? (t = d_ຫ່າງ / (v₂ - v₁)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ທ້າວບຸນມີ ຈະໄລ່ທັນທ້າວຈັນທາ ຢູ່ຈຸດທີ່ຫ່າງຈາກບ້ານເປັນໄລຍະທາງຈັກກິໂລແມັດ (km)?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"km"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການເຄື່ອນທີ່ໃນແມ່ນ້ຳ (River Current Word Problems): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ເຮືອລຳໜຶ່ງແລ່ນໃນນ້ຳນິ້ງດ້ວຍຄວາມໄວ 20 km/h. ຖ້າແລ່ນຕາມກະແສນ້ຳທີ່ມີຄວາມໄວ 4 km/h ໄປເປັນໄລຍະທາງ 48 km, ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ? (v_ຕາມ = v_ເຮືອ + v_ນ້ຳ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າເຮືອລຳດຽວກັນນີ້ ແລ່ນທວນກະແສນ້ຳ (v_ທວນ = v_ເຮືອ - v_ນ້ຳ) ໃນໄລຍະທາງ 48 km ເທົ່າເດີມ, ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາສະເລ່ຍຄວາມໄວ ແລະ ການເຄື່ອນທີ່ສອງຂັ້ນຕອນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ລົດຄັນໜຶ່ງເຄິ່ງທາງທຳອິດແລ່ນ 60 km ດ້ວຍຄວາມໄວ 30 km/h, ເຄິ່ງທາງຫຼັງແລ່ນ 60 km ດ້ວຍຄວາມໄວ 60 km/h. ເວລາທັງໝົດທີ່ໃຊ້ໃນການເດີນທາງແມ່ນຈັກຊົ່ວໂມງ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄວາມໄວສະເລ່ຍຕະຫຼອດການເດີນທາງ 120 km ນີ້ແມ່ນຈັກ km/h? (v_ສະເລ່ຍ = d_ທັງໝົດ / t_ທັງໝົດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km/h"}</span>
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
          <span key="u8-ans-1-1">{"(1) 150 (ເພາະວ່າ d = 50 × 3 = 150 km)"}</span>,
          <span key="u8-ans-1-2">{"(2) 60 (ເພາະວ່າ v = 240 / 4 = 60 km/h)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u8-ans-2-1">{"(1) 2.5 (ເພາະວ່າ t = 10 / 4 = 2.5 ຊົ່ວໂມງ)"}</span>,
          <span key="u8-ans-2-2">{"(2) 90 (ເພາະວ່າ t = 120 / 80 = 1.5 ຊົ່ວໂມງ = 90 นาທີ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u8-ans-t1-1">{"(1) 2 (ເພາະວ່າ ຄວາມໄວລວມແມ່ນ 40 + 50 = 90 km/h. ດັ່ງນັ້ນ 180 / 90 = 2 ຊົ່ວໂມງ)"}</span>,
          <span key="u8-ans-t1-2">{"(2) 80 (ເພາະວ່າ d_A = 40 × 2 = 80 km)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u8-ans-t2-1">{"(1) 0.5 (ຫຼື 1/2. ເພາະວ່າໄລຍະທາງຫ່າງກັນແມ່ນ 12 km, ຄວາມໄວຜົນຕ່າງແມ່ນ 36 - 12 = 24 km/h. ດັ່ງນັ້ນ t = 12 / 24 = 0.5 ຊົ່ວໂມງ)"}</span>,
          <span key="u8-ans-t2-2">{"(2) 18 (ເພາະວ່າ d = 36 × 0.5 = 18 km)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u8-ans-s1-1">{"(1) 2 (ເພາະວ່າ v_ຕາມ = 20 + 4 = 24 km/h. ດັ່ງນັ້ນ t = 48 / 24 = 2 ຊົ່ວໂມງ)"}</span>,
          <span key="u8-ans-s1-2">{"(2) 3 (ເພາະວ່າ v_ທວນ = 20 - 4 = 16 km/h. ດັ່ງນັ້ນ t = 48 / 16 = 3 ຊົ່ວໂມງ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u8-ans-s2-1">{"(1) 3 (ເພາະວ່າ t₁ = 60/30 = 2 ຊົ່ວໂມງ, t₂ = 60/60 = 1 ຊົ່ວໂມງ, ລວມ 3 ຊົ່ວໂມງ)"}</span>,
          <span key="u8-ans-s2-2">{"(2) 40 (ເພາະວ່າ v_ສະເລ່ຍ = 120 / 3 = 40 km/h)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງແຕ້ມແຜນວາດການເຄື່ອນທີ່ກ່ອນແກ້ໂຈດສະເໝີ! ມັນຈະຊ່ວຍໃຫ້ເຫັນພາບວ່າຕ້ອງເອົາຄວາມວົຍມາບວກ ຫຼື ລົບກັນໄດ້ຢ່າງງ່າຍດາຍເດີ້!",
  },
};
