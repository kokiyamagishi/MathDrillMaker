import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit5Data: UnitData = {
  unitNumber: 5,
  unitTitle: "ພາກທີ I - ບົດທີ 5: ການຄູນ ແລະ ການຫານຈຳນວນທຳມະຊາດ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍ ແລະ ຊື່ເອີ້ນຂອງແຕ່ລະພົດໃນການຄູນ ແລະ ການຫານ, ຄຸນລັກສະນະສະຫຼັບບ່ອນ, ຄຸນລັກສະນະໂຮມໝູ່ ແລະ ຫຼັກການຫານແບບມີເສດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 33-39",
  subSections: [
    {
      title: "1. ການຄູນຈຳນວນທຳມະຊາດ",
      keyPoint: {
      title: "1. ການຄູນຈຳນວນທຳມະຊາດ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນການຄູນ "}<strong>{"138 × 24 = 3,312"}</strong>{" :"}
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
            <div>{"• "}<strong>{"138"}</strong>{" ແລະ "}<strong>{"24"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ສ່ວນຄູນ (Factors)"}</strong></div>
            <div>{"• "}<strong>{"3,312"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຜົນຄູນ (Product)"}</strong></div>
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄຸນລັກສະນະຂອງການຄູນ:"}
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
              gap: "8px",
            }}
          >
            <div>{"• "}<strong>{"ຄຸນລັກສະນະສະຫຼັບບ່ອນ:"}</strong>{" a × b = b × a (ຕົວຢ່າງ: 8 × 7 = 7 × 8)"}</div>
            <div>{"• "}<strong>{"ຄຸນລັກສະນະໂຮມໝູ່:"}</strong>{" (a × b) × c = a × (b × c)"}</div>
            <div style={{ paddingLeft: "16px", color: "#2E7D32", fontWeight: "bold" }}>
              {"ຕົວຢ່າງ: (25 × 12) × 8 = (25 × 8) × 12 = 200 × 12 = 2,400"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການຄູນມີ 1 ເປັນຈຳນວນເອກະລັກ (a × 1 = a). ການຄູນໃຫ້ 0 ຈະໄດ້ 0 ສະເໝີເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕື່ມຊື່ເອີ້ນທາງຄະນິດສາດ (ສ່ວນຄູນ, ຜົນຄູນ, ຕົວຕັ້ງຫານ, ຕົວຫານ, ຜົນຫານ, ຕົວເສດ) ໃស່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"ໃນປະໂຫຍກສັນຍະລັກ 15 × 8 = 120 :"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(1) 15 ແລະ 8 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(2) 120 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
              <span>{"ໃນປະໂຫຍກສັນຍະລັກ 45 ÷ 6 = 7 ຕົວເສດ 3 :"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(3) 45 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(4) 6 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(5) 3 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການຫານຈຳນວນທຳມະຊາດ",
      keyPoint: {
      title: "2. ການຫານຈຳນວນທຳມະຊາດ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນການຫານແບບມີເສດ "}<strong>{"23 ÷ 7 = 3 ຕົວເສດ 2"}</strong>{" :"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFEBEE",
              border: "2px solid #EF5350",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• "}<strong>{"23"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຕົວຕັ້ງຫານ (Dividend)"}</strong></div>
            <div>{"• "}<strong>{"7"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຕົວຫານ (Divisor)"}</strong></div>
            <div>{"• "}<strong>{"3"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຜົນຫານ (Quotient)"}</strong></div>
            <div>{"• "}<strong>{"2"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຕົວເສດ (Remainder)"}</strong></div>
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການພົວພັນການຫານ (ສູດກວດຄືນ):"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
            }}
          >
            {"ຖ້າ "}<strong>{"a ÷ b = q ເຫຼືອ r"}</strong>{" ແລ້ວ "}<strong>{"a = b × q + r"}</strong>{" (ເຊິ່ງຕົວເສດ r ຕ້ອງນ້ອຍກວ່າຕົວຫານ b ສະເໝີ: r < b)"}
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າຕົວເສດ r = 0, ເຮົາເອີ້ນວ່າ ການຫານຂາດ (a = b × q) ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງໃຊ້ຄຸນລັກສະນະໂຮມໝູ່ ເພື່ອຄິດໄລ່ໃຫ້ໄວຂຶ້ນ ແລ້ວຕື່ມຄຳຕອບໃស່ບ່ອນວ່າງ: "}{" "}
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
              <span>{"(1) (25 × 8) × 12 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 50 × 14 × 2 = (50 × 2) × 14 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
      "💡 ໃຊ້ສູດກວດຄືນການຫານ: ຕົວຕັ້ງຫານ = (ຕົວຫານ × ຜົນຫານ) + ຕົວເສດ. ຄິດໄລ່ຕາມສູດນີ້ເພື່ອຊອກຫາຄ່າຂອງ x ແລະ y ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ x ແລະ y ໂດຍນຳໃຊ້ສູດການພົວພັນຂອງການຫານ: "}{" "}
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
                <span>{"(1) ຖ້າຊອກຫາ x ທີ່ຫານໃຫ້ 6 ແລ້ວໄດ້ຜົນຫານແມ່ນ 7 ແລະ ຕົວເສດແມ່ນ 4. ຄ່າຂອງ x ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຖ້າຊອກຫາ y ທີ່ຫານໃຫ້ 12 ແລ້ວໄດ້ຜົນຫານແມ່ນ 5 ແລະ ຕົວເສດແມ່ນ 3. ຄ່າຂອງ y ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}{" "}
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
                <span>{"(1) ໂຮງຮຽນມັດທະຍົມແຫ່ງໜຶ່ງມີນັກຮຽນທັງໝົດ 1,522 ຄົນ. ໃນນີ້ ມ.1 ມີ 439 ຄົນ, ມ.2 ມີ 413 ຄົນ, ແລະ ມ.4 ມີ 295 ຄົນ. ຖາມວ່ານັກຮຽນຊັ້ນ ມ.3 ມີຈັກຄົນ?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ປຶ້ມແບບຮຽນຄະນິດສາດ 3 ຫົວ ລາຄາລວມ 21,000 ກີບ. ຖ້າຕ້ອງການຊື້ປຶ້ມແບບຮຽນດັ່ງກ່າວ 15 ຫົວ ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ?"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) (5 × 12) × 2 = 12 × (5 ×"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{")"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) a × b"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N (ຕື່ມ ∈ ຫຼື ∉, ຖ້າ a, b ເປັນຈຳນວນທຳມະຊາດ)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຕົວຕັ້ງຫານ ໃນປະໂຫຍກສັນຍະລັກ 108 ÷ 9 = 12 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(4) ຜົນຫານ ໃນປະໂຫຍກສັນຍະລັກ 108 ÷ 9 = 12 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(5) ຕົວເສດ ຂອງການຫານ 23 ÷ 7 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ເພື່ອຊອກຫາຄ່າຂອງ x ແລະ y ຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຖ້າ 6 × x = 42, ຄ່າຂອງ x ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າ 60 ÷ y = 5, ຄ່າຂອງ y ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u5-ans-1-1">{"(1) ສ່ວນຄູນ"}</span>,
          <span key="u5-ans-1-2">{"(2) ຜົນຄູນ"}</span>,
          <span key="u5-ans-1-3">{"(3) ຕົວຕັ້ງຫານ"}</span>,
          <span key="u5-ans-1-4">{"(4) ຕົວຫານ"}</span>,
          <span key="u5-ans-1-5">{"(5) ຕົວເສດ"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u5-ans-2-1">{"(1) 2,400 (ເພາະ 200 × 12 = 2,400)"}</span>,
          <span key="u5-ans-2-2">{"(2) 1,400 (ເພາະ 100 × 14 = 1,400)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u5-ans-t1-1">{"(1) x = 46 (6 × 7 + 4 = 46)"}</span>,
          <span key="u5-ans-t1-2">{"(2) y = 63 (12 × 5 + 3 = 63)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u5-ans-t2-1">{"(1) 375 ຄົນ (ເພາະ 1,522 - (439 + 413 + 295) = 375)"}</span>,
          <span key="u5-ans-t2-2">{"(2) 105,000 ກີບ (ເພາະ (21,000 ÷ 3) × 15 = 105,000)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u5-ans-s1-1">{"(1) 2"}</span>,
          <span key="u5-ans-s1-2">{"(2) ∈"}</span>,
          <span key="u5-ans-s1-3">{"(3) 108"}</span>,
          <span key="u5-ans-s1-4">{"(4) 12"}</span>,
          <span key="u5-ans-s1-5">{"(5) 2"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u5-ans-s2-1">{"(1) x = 7 (42 ÷ 6)"}</span>,
          <span key="u5-ans-s2-2">{"(2) y = 12 (60 ÷ 5)"}</span>,
        ],
      },
    ],
    advice: "ສູດກວດຄືນການຫານ: ຕົວຕັ້ງຫານ = (ຕົວຫານ × ຜົນຫານ) + ຕົວເສດ ແມ່ນສຳຄັນຫຼາຍໃນການແກ້ເລກປີ້ນກັບເດີ້!",
  },
};
