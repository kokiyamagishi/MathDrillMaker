import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ພາກທີ I - ບົດທີ 7: ເປີເຊັນ ແລະ ດອກເບ້ຍ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບການຄິດໄລ່ເປີເຊັນ (Percentage), ດອກເບ້ຍດ່ຽວ (Simple Interest) ແລະ ດອກເບ້ຍທົບຕົ້ນ (Compound Interest) ໃນຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 7 ໜ້າ 37-42",
  subSections: [
    {
      title: "1. ການຄິດໄລ່ດອກເບ້ຍດ່ຽວ (Simple Interest)",
      keyPoint: {
      title: "1. ການຄິດໄລ່ດອກເບ້ຍດ່ຽວ (Simple Interest)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ດອກເບ້ຍດ່ຽວແມ່ນດອກເບ້ຍທີ່ຄິດໄລ່ສະເພາະແຕ່ເທິງຕົ້ນທຶນເບື້ອງຕົ້ນເທົ່ານັ້ນ:"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດຄິດໄລ່ດອກເບ້ຍດ່ຽວ: "}</strong>
              <span style={{ fontWeight: "bold" }}>{"I = P × r × t"}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"P: ຕົ້ນທຶນ (Principal), r: ອັດຕາດອກເບ້ຍຕໍ່ປີ (Interest rate), t: ໄລຍະເວລາເປັນປີ (Time)"}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຕົວຢ່າງ: ຝາກເງິນ 1,000,000 ກີບ ອັດຕາດອກເບ້ຍ 5% ຕໍ່ປີ ເປັນເວລາ 2 ປີ:"}
              </span>
              <br />
              <span style={{ paddingLeft: "40px", color: "#E65100", fontWeight: "bold" }}>
                {"I = 1,000,000 × 0.05 × 2 = 100,000 ກີບ."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ແນະນຳ: ປ່ຽນເປີເຊັນເປັນຈຳນວນທົດສະນິຍົມກ່ອນຄິດໄລ່ສະເໝີ (ເຊັ່ນ: 5% = 0.05, 12% = 0.12) ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫາເປີເຊັນ ແລະ ສ່ວນຫຼຸດໃນການຄ້າຂາຍ: "}{" "}
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
              <span>{"(1) ເສື້ອຢືດລາຄາ 150,000 ກີບ ຕິດປ້າຍຫຼຸດລາຄາ 20%. ຈົ່ງຊອກຫາສ່ວນຫຼຸດເປັນກີບ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ລາຄາຂາຍຕົວຈິງຂອງເສື້ອຢືດຫຼັງຈາກຫຼຸດແລ້ວແມ່ນຈັກກີບ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ດອກເບ້ຍທົບຕົ້ນ (Compound Interest)",
      keyPoint: {
      title: "2. ການຄິດໄລ່ດອກເບ້ຍທົບຕົ້ນ (Compound Interest)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ດອກເບ້ຍທົບຕົ້ນແມ່ນດອກເບ້ຍທີ່ຄິດໄລ່ລວມເອົາທັງຕົ້ນທຶນ ແລະ ດອກເບ້ຍສະສົມຂອງປີກ່ອນໆເຂົ້າກັນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#2E7D32" }}>{"• ສູດຄິດໄລ່ເງິນລວມທັງໝົດ (A): "}</strong>
              <span style={{ fontWeight: "bold" }}>{"A = P(1 + r)^t"}</span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"A: ເງິນລວມທັງໝົດ, P: ຕົ້ນທຶນ, r: ອັດຕາດອກເບ້ຍຕໍ່ປີ, t: ຈຳນວນປີ"}
              </span>
            </div>
          </div>
          {/* Comparison chart SVG */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ແຜນວາດປຽບທຽບການເຕີບໂຕຂອງດອກເບ້ຍ (3 ປີ)"}</span>
            <svg viewBox="0 0 280 90" style={{ width: "100%", maxWidth: "280px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Axes */}
              <line x1="30" y1="75" x2="250" y2="75" stroke="#333" strokeWidth="1" />
              <line x1="30" y1="75" x2="30" y2="15" stroke="#333" strokeWidth="1" />

              {/* Simple Interest Line (orange) */}
              <path d="M 30,65 L 100,55 L 170,45 L 240,35" fill="none" stroke="#FF9800" strokeWidth="2.5" />
              <text x="245" y="38" fill="#FF9800" fontSize="7" fontWeight="bold">{"ດອກເບ້ຍດ່ຽວ"}</text>

              {/* Compound Interest Curve (green) */}
              <path d="M 30,65 Q 100,53 240,20" fill="none" stroke="#4CAF50" strokeWidth="2.5" />
              <text x="245" y="22" fill="#4CAF50" fontSize="7" fontWeight="bold">{"ດອກເບ້ຍທົບຕົ້ນ"}</text>

              {/* Year markers */}
              <text x="30" y="85" fill="#333" fontSize="7" textAnchor="middle">{"ປີ 0"}</text>
              <text x="100" y="85" fill="#333" fontSize="7" textAnchor="middle">{"ປີ 1"}</text>
              <text x="170" y="85" fill="#333" fontSize="7" textAnchor="middle">{"ປີ 2"}</text>
              <text x="240" y="85" fill="#333" fontSize="7" textAnchor="middle">{"ປີ 3"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ດອກເບ້ຍທົບຕົ້ນຈະເຮັດໃຫ້ເງິນເຕີບໂຕໄວກວ່າດອກເບ້ຍດ່ຽວໃນໄລຍະຍາວ ຍ້ອນມີຜົນຂອງດອກເບ້ຍຊ້ອນດອກເບ້ຍເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ດອກເບ້ຍດ່ຽວຈາກການກູ້ຢືມ ຫຼື ຝາກເງິນ: "}{" "}
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
              <span>{"(1) ທ້າວບຸນມີ ຝາກເງິນ 2,000,000 ກີບ ຢູ່ທະນາຄານດ້ວຍອັດຕາດອກເບ້ຍດ່ຽວ 6% ຕໍ່ປີ. ໃນ 1 ປີ ລາວຈະໄດ້ດອກເບ້ຍຈັກກີບ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າທ້າວບຸນມີ ຝາກເງິນດຽວກັນນີ້ເປັນເວລາ 3 ປີ, ດອກເບ້ຍດ່ຽວທັງໝົດທີ່ລາວໄດ້ຮັບແມ່ນຈັກກີບ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ດອກເບ້ຍທົບຕົ້ນ ໃຫ້ໃຊ້ສູດ A = P(1 + r)^t. ບົດທ້າທາຍ 2: ການຄິດໄລ່ອັດຕາພາສີມູນຄ່າເພີ່ມ (VAT) 10% ແມ່ນການບວກ 10% ໃສ່ລາຄາເບື້ອງຕົ້ນ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ດອກເບ້ຍທົບຕົ້ນສະສົມຫຼາຍປີ: "}{" "}
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
                <span>{"(1) ຝາກເງິນຕົ້ນທຶນ 1,000,000 ກີບ ອັດຕາດອກເບ້ຍທົບຕົ້ນ 10% ຕໍ່ປີ. ຫຼັງຈາກ 2 ປີ, ເງິນລວມທັງໝົດ (ຕົ້ນທຶນ + ດອກເບ້ຍ) ຈະເປັນຈັກກີບ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ດອກເບ້ຍທົບຕົ້ນທີ່ໄດ້ຮັບສະເພາະແຕ່ດອກເບ້ຍໃນ 2 ປີແມ່ນຈັກກີບ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
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
              {"ຈົ່ງຄິດໄລ່ພາສີ ແລະ ການເພີ່ມຂຶ້ນຂອງລາຄາສິນຄ້າ: "}{" "}
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
                <span>{"(1) ຄອມພິວເຕີເຄື່ອງໜຶ່ງລາຄາ 4,000,000 ກີບ (ບໍ່ລວມພາສີ). ຖ້າມີພາສີມູນຄ່າເພີ່ມ (VAT) 10%, ຜູ້ຊື້ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໂທລະສັບລາຄາ 2,000,000 ກີບ. ຫຼັງຈາກຜ່ານໄປ 1 ປີ, ລາຄາຫຼຸດລົງ 15%. ລາຄາໃໝ່ແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມກ່ຽວກັບດອກເບ້ຍ ແລະ ການຝາກປະຢັດ: "}{" "}
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
              <span>{"(1) ທ້າວຈັນທາ ກູ້ຢືມເງິນ 5,000,000 ກີບ ມາເຮັດທຸລະກິດ ດ້ວຍອັດຕາດອກເບ້ຍດ່ຽວ 8% ຕໍ່ປີ. ຫຼັງຈາກ 6 ເດືອນ ລາວຕ້ອງຈ່າຍດອກເບ້ຍຈັກກີບ? (t = 0.5 ປີ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຝາກເງິນຕົ້ນທຶນ 500,000 ກີບ ດ້ວຍອັດຕາດອກເບ້ຍທົບຕົ້ນ 4% ຕໍ່ປີ. ຫຼັງຈາກ 2 ປີ ຈະມີເງິນລວມທັງໝົດຈັກກີບ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຜົນກຳໄລ ແລະ ຕົ້ນທຶນ: "}{" "}
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
              <span>{"(1) ຮ້ານຄ້າຊື້ສິນຄ້າມາໃນລາຄາຕົ້ນທຶນ 80,000 ກີບ. ຕ້ອງການຂາຍໃຫ້ໄດ້ກຳໄລ 25% ຂອງລາຄາຕົ້ນທຶນ. ຈະຕ້ອງຕັ້ງລາຄາຂາຍຈັກກີບ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຂາຍສິນຄ້ານັ້ນຫຼຸດລາຄາ 10% ຈາກລາຄາຂາຍທີ່ຕັ້ງໄວ້, ທາງຮ້ານຈະໄດ້ຮັບເງິນຕົວຈິງຈັກກີບ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
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
          <span key="u7-ans-1-1">{"(1) 30,000 (ເພາະວ່າ 150,000 × 0.20 = 30,000 ກີບ)"}</span>,
          <span key="u7-ans-1-2">{"(2) 120,000 (ເພາະວ່າ 150,000 - 30,000 = 120,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u7-ans-2-1">{"(1) 120,000 (ເພາະວ່າ 2,000,000 × 0.06 × 1 = 120,000 ກີບ)"}</span>,
          <span key="u7-ans-2-2">{"(2) 360,000 (ເພາະວ່າ 120,000 × 3 = 360,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u7-ans-t1-1">{"(1) 1,210,000 (ເພາະວ່າ A = 1,000,000 × (1.10)² = 1,210,000 ກີບ)"}</span>,
          <span key="u7-ans-t1-2">{"(2) 210,000 (ເພາະວ່າດອກເບ້ຍ = 1,210,000 - 1,000,000 = 210,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u7-ans-t2-1">{"(1) 4,400,000 (ເພາະວ່າ 4,000,000 × 1.10 = 4,400,000 ກີບ)"}</span>,
          <span key="u7-ans-t2-2">{"(2) 1,700,000 (ເພາະວ່າ 2,000,000 × 0.85 = 1,700,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u7-ans-s1-1">{"(1) 200,000 (ເພາະວ່າ 5,000,000 × 0.08 × 0.5 = 200,000 ກີບ)"}</span>,
          <span key="u7-ans-s1-2">{"(2) 540,800 (ເພາະວ່າ A = 500,000 × (1.04)² = 540,800 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u7-ans-s2-1">{"(1) 100,000 (ເພາະວ່າກຳໄລ = 20,000, ດັ່ງນັ້ນ ລາຄາຂາຍ = 80,000 + 20,000 = 100,000 ກີບ)"}</span>,
          <span key="u7-ans-s2-2">{"(2) 90,000 (ເພາະວ່າ 100,000 × 0.90 = 90,000 ກີບ)"}</span>,
        ],
      },
    ],
    advice: "ການຄິດໄລ່ເປີເຊັນ ແລະ ດອກເບ້ຍ ຕ້ອງໃຊ້ຄວາມລະອຽດອ່ອນໃນການປ່ຽນອັດຕາເປີເຊັນເປັນເລກທົດສະນິຍົມ! ແລະ ຢ່າລືມແຍກຄວາມແຕກຕ່າງລະຫວ່າງດອກເບ້ຍດ່ຽວ ແລະ ທົບຕົ້ນໃຫ້ດີເດີ້!",
  },
};
