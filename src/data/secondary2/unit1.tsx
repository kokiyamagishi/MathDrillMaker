import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit1Data: UnitData = {
  unitNumber: 1,
  unitTitle: "ພາກທີ I - ບົດທີ 1: ເລກສ່ວນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງເລກສ່ວນ, ການຄູນຈຳນວນຖ້ວນກັບເລກສ່ວນ ແລະ ການນຳໃຊ້ເລກສ່ວນໃນການແກ້ໂຈດບັນຫາຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 1-4",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງເລກສ່ວນ ແລະ ການຄູນຈຳນວນຖ້ວນກັບເລກສ່ວນ",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານ ແລະ ຕົວຢ່າງຄວາມໝາຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເລກສ່ວນປະກອບມີ ຕົວເສດ ຢູ່ທາງເທິງ ແລະ ຕົວສ່ວນ ຢູ່ທາງລຸ່ມ. ເມື່ອຄູນຈຳນວນຖ້ວນໃດໜຶ່ງກັບເລກສ່ວນ, ເຮົາຈະເອົາຈຳນວນຖ້ວນນັ້ນຄູນກັບຕົວເສດ ແລ້ວຫານໃຫ້ຕົວສ່ວນຄືເກົ່າ:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.8rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"c × "} <Fraction num="a" den="b" /> {" = "} <Fraction num={<span>{"c × a"}</span>} den="b" />
              </span>
            </div>

            {/* Visual representation of 4/5 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1565C0" }}>{"ແຜນວາດສະແດງອັດຕາສ່ວນ "}<Fraction num="4" den="5" /></span>
              <svg viewBox="0 0 400 40">
                {/* 5 blocks, 4 shaded blue, 1 gray */}
                <rect x="0" y="5" width="60" height="30" fill="#2196F3" stroke="#0D47A1" strokeWidth="2" rx="4" />
                <rect x="65" y="5" width="60" height="30" fill="#2196F3" stroke="#0D47A1" strokeWidth="2" rx="4" />
                <rect x="130" y="5" width="60" height="30" fill="#2196F3" stroke="#0D47A1" strokeWidth="2" rx="4" />
                <rect x="195" y="5" width="60" height="30" fill="#2196F3" stroke="#0D47A1" strokeWidth="2" rx="4" />
                <rect x="260" y="5" width="60" height="30" fill="#ECEFF1" stroke="#90A4AE" strokeWidth="2" rx="4" />
                {/* Text identifier */}
                <text x="100" y="24" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">{"ທີ່ເລືອກ:"}</text>
                <text x="140" y="18" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">{"4"}</text>
                <line x1="133" y1="21" x2="147" y2="21" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="140" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">{"5"}</text>
              </svg>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ: ຕົວສ່ວນ (ທາງລຸ່ມ) ບອກເຖິງຈຳນວນສ່ວນທັງໝົດທີ່ຖືກແບ່ງເທົ່າໆກັນ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"200 × "} <Fraction num="4" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"150 × "} <Fraction num="2" den="3" /> {" ="}
                  </span>
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
                {"ຈົ່ງຊອກຫາອັດຕາສ່ວນຂອງມຸມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                    <Fraction num="1" den="4" /> {" ຂອງ ມຸມພຽງ (180°) ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                    <Fraction num="2" den="3" /> {" ຂອງ ມຸມສາກ (90°) ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດເບິ່ງແຜນວາດ ແລະ ນຳໃຊ້ຄວາມຮູ້ເລກສ່ວນແກ້ໂຈດບັນຫາໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການປຽບທຽບເນື້ອທີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສວນຄົວແຫ່ງໜຶ່ງມີເນື້ອທີ່ທັງໝົດ 600 m². ຖ້າແບ່ງເນື້ອທີ່ "} <Fraction num="3" den="5" /> {" ຂອງສວນເພື່ອປູກຜັກກາດ. ຖາມວ່າເນື້ອທີ່ທີ່ເຫຼືອເພື່ອປູກດອກໄມ້ມີຈັກຕາແມັດ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              {/* Graphic container for garden */}
              <svg viewBox="0 0 300 120" style={{ width: "100%", maxWidth: "250px", height: "auto" }}>
                <rect x="10" y="10" width="280" height="100" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3" rx="8" />
                {/* 3/5 green for veggies */}
                <rect x="10" y="10" width="168" height="100" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2" rx="4" />
                <text x="94" y="52" fill="#1B5E20" fontSize="14" fontWeight="bold" textAnchor="middle">{"ປູກຜັກກາດ"}</text>
                <text x="94" y="72" fill="#1B5E20" fontSize="14" fontWeight="bold" textAnchor="middle">{"(3/5)"}</text>
                <text x="234" y="52" fill="#E65100" fontSize="14" fontWeight="bold" textAnchor="middle">{"ດອກໄມ້"}</text>
                <text x="234" y="72" fill="#E65100" fontSize="14" fontWeight="bold" textAnchor="middle">{"(2/5)"}</text>
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ປູກດອກໄມ້ມີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"m²"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄ່າຂອງສ່ວນທີ່ແຖວສີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າຮູບວົງມົນລຸ່ມນີ້ມີເນື້ອທີ່ທັງໝົດ 120 cm². จົ່ງຊອກຫາເນື້ອທີ່ຂອງສ່ວນທີ່ແຖວສີຟ້າ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 120 120" style={{ width: "100%", maxWidth: "120px", height: "auto" }}>
                {/* 3 quarters blue, 1 quarter white */}
                <circle cx="60" cy="60" r="50" fill="#ECEFF1" stroke="#37474F" strokeWidth="3" />
                <path d="M 60,60 L 60,10 A 50,50 0 1,1 10,60 Z" fill="#90CAF9" stroke="#1565C0" strokeWidth="2" />
                {/* Center dot */}
                <circle cx="60" cy="60" r="4" fill="#37474F" />
                <text x="85" y="62" fill="#0D47A1" fontSize="12" fontWeight="bold" textAnchor="middle">{"3"}</text>
                <line x1="77" y1="66" x2="93" y2="66" stroke="#0D47A1" strokeWidth="1.5" />
                <text x="85" y="80" fill="#0D47A1" fontSize="12" fontWeight="bold" textAnchor="middle">{"4"}</text>
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ສ່ວນແຖວສີແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm²"}</span>
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
            {"...ໂຈດບັນຫາສະຫຼຸບເລກສ່ວນປະຕິບັດຕົວຈິງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ້າວ ສົມສັກ ມີເງິນທັງໝົດ 240,000 ກີບ. ລາວໄດ້ໃຊ້ຈ່າຍເງິນໄປ "} <Fraction num="5" den="8" /> {" ຂອງເງິນທັງໝົດເພື່ອຊື້ອຸປະກອນການຮຽນ. ຖາມວ່າລາວຍັງເຫຼືອເງິນຈັກກີບ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເຫຼືອເງິນ"}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຊອກຫາຄ່າຂອງຕົວລັບຈາກອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຊອກຫາຄ່າຂອງ 𝑥 ຈາກເງື່ອນໄຂ: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "8px" }}>
              {"𝑥 = 360 × "} <Fraction num="7" den="12" />
            </span>
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
          <span key="1-1">{"(1) 160"}</span>,
          <span key="1-2">{"(2) 100"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 45"}</span>,
          <span key="2-2">{"(2) 60"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 240 (ເນື້ອທີ່ທັງໝົດ 600 m², ປູກຜັກກາດ 3/5 = 360 m², ເຫຼືອປູກດອກໄມ້ 600 - 360 = 240 m²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 90 (ເນື້ອທີ່ສ່ວນແຖວສີ 3/4 ຂອງ 120 cm²: 120 × 3/4 = 90 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 90000 (ລາວໃຊ້ໄປ 5/8 ຂອງ 240,000 = 150,000 ກີບ, ດັ່ງນັ້ນຍັງເຫຼືອເງິນ 240,000 - 150,000 = 90,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 210 (ຄິດໄລ່: 360 × 7 / 12 = 30 × 7 = 210)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຮຽນຮູ້ເລກສ່ວນຊ່ວຍໃຫ້ເຮົາແບ່ງປັນສິ່ງຕ່າງໆໃນຊີວິດໄດ້ຢ່າງຖືກຕ້ອງ. ໝັ່ນຝຶກຝົນຕໍ່ໄປເດີ້!"
  }
};
