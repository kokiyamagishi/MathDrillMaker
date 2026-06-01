import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit3Data: UnitData = {
  unitNumber: 3,
  unitTitle: "ພາກທີ I - ບົດທີ 3: ການບວກ ແລະ ການລົບຈຳນວນທຳມະຊາດ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍ ແລະ ຊື່ເອີ້ນຂອງແຕ່ລະພົດໃນການບວກ ແລະ ການລົບ, ຄຸນລັກສະນະສະຫຼັບບ່ອນ, ຄຸນລັກສະນະໂຮມໝູ່ ແລະ ການພົວພັນປີ້ນກັບ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 16-23",
  subSections: [
    {
      title: "1. ການບວກຈຳນວນທຳມະຊາດ",
      keyPoint: {
      title: "1. ການບວກຈຳນວນທຳມະຊາດ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນການບວກ "}<strong>{"2,609 + 352 = 2,961"}</strong>{" :"}
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
            <div>{"• "}<strong>{"2,609"}</strong>{" ແລະ "}<strong>{"352"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ພົດ (Terms)"}</strong></div>
            <div>{"• "}<strong>{"2,961"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຜົນບວກ (Sum)"}</strong></div>
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄຸນລັກສະນະຂອງການບວກ:"}
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
            <div>{"• "}<strong>{"ຄຸນລັກສະນະສະຫຼັບບ່ອນ:"}</strong>{" a + b = b + a (ຕົວຢ່າງ: 75 + 12 = 12 + 75)"}</div>
            <div>{"• "}<strong>{"ຄຸນລັກສະນະໂຮມໝູ່:"}</strong>{" (a + b) + c = a + (b + c)"}</div>
            <div style={{ paddingLeft: "16px", color: "#2E7D32", fontWeight: "bold" }}>
              {"ຕົວຢ່າງ: (75 + 8) + 12 = 75 + (8 + 12) = 75 + 20 = 95"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຄຸນລັກສະນະໂຮມໝູ່ ຊ່ວຍໃຫ້ເຮົາເລືອກບວກຄູ່ທີ່ລົງທ້າຍດ້ວຍ 0 ກ່ອນ ເພື່ອໃຫ້ຄິດໄລ່ງ່າຍຂຶ້ນເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕື່ມຊື່ເອີ້ນທາງຄະນິດສາດ (ພົດ, ຜົນບວກ, ຕົວຕັ້ງລົບ, ຕົວລົບ, ຜົນລົບ) ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
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
              <span>{"ໃນປະໂຫຍກສັນຍະລັກ 125 + 45 = 170 :"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(1) 125 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(2) 170 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
              <span>{"ໃນປະໂຫຍກສັນຍະລັກ 350 - 120 = 230 :"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(3) 350 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(4) 120 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
              <span>{"(5) 230 ເອີ້ນວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການລົບຈຳນວນທຳມະຊາດ",
      keyPoint: {
      title: "2. ການລົບຈຳນວນທຳມະຊາດ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນການລົບ "}<strong>{"8,632 - 4,725 = 3,907"}</strong>{" :"}
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
            <div>{"• "}<strong>{"8,632"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຕົວຕັ້ງລົບ (Minuend)"}</strong></div>
            <div>{"• "}<strong>{"4,725"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຕົວລົບ (Subtrahend)"}</strong></div>
            <div>{"• "}<strong>{"3,907"}</strong>{" ເອີ້ນວ່າ "}<strong>{"ຜົນລົບ (Difference)"}</strong></div>
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການພົວພັນປີ້ນກັບ (ລົບ ແລະ ບວກ):"}
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
            {"ຖ້າ "}<strong>{"a - b = c"}</strong>{" ແລ້ວ "}<strong>{"c + b = a"}</strong>{" (ຕົວຢ່າງ: 8,632 - 4,725 = 3,907 → 3,907 + 4,725 = 8,632)"}
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0, color: "#D32F2F", fontWeight: "bold" }}>
            {"* ການລົບ ບໍ່ມີ ຄຸນລັກສະນະສະຫຼັບບ່ອນເດີ້! (a - b ≠ b - a)"}
          </p>
        </div>
      ),
      hint: {
        text: "ໃນກຸ່ມຈຳນວນທຳມະຊາດ, ເຮົາຈະລົບໄດ້ກໍ່ຕໍ່ເມື່ອ ຕົວຕັ້ງລົບ ໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ ຕົວລົບ ເທົ່ານັ້ນ!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງໃຊ້ຄຸນລັກສະນະໂຮມໝູ່ ເພື່ອຄິດໄລ່ໃຫ້ໄວຂຶ້ນ ແລ້ວຕື່ມຄຳຕອບໃສ່ບ່ອນວ່າງ: "}{" "}
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
              <span>{"(1) 45 + 98 + 5 = (45 + 5) + 98 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 127 + 84 + 73 = (127 + 73) + 84 ="}</span>
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
      "💡 ການພົວພັນປີ້ນກັບຊ່ວຍເຈົ້າໄດ້! ຖ້າ x - a = b, ເຮົາຈະໄດ້ x = b + a. ຖ້າ a - y = b, ເຮົາຈະໄດ້ y = a - b. ລອງນຳໃຊ້ເບິ່ງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ x ແລະ y ໂດຍນຳໃຊ້ການພົວພັນປີ້ນກັບຂອງການລົບ ແລະ ການບວກ: "}{" "}
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
                <span>{"(1) ຖ້າ x - 350 = 420, ຄ່າຂອງ x ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຖ້າ 850 - y = 320, ຄ່າຂອງ y ແມ່ນ"}</span>
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
                <span>{"(1) ທ້າວ ທອງ ໜັກ 47 kg ແລະ ແບກກະເປົາເຄື່ອງໜັກ 8 kg. ຖ້າລາວຂຶ້ນຊັ່ງນ້ຳໜັກລວມທັງໝົດຈະເປັນຈັກ kg?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"kg"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ນາງ ບຸນມີ ແບກກະເປົາເຄື່ອງຂຶ້ນຊັ່ງໄດ້ນ້ຳໜັກລວມ 50 kg. ຖ້າຮູ້ວ່ານາງ ບຸນມີ ໜັກ 45 kg, ກະເປົາຂອງລາວຈະໜັກຈັກ kg?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"kg"}</span>
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
              <span>{"(1) (75 + 8) + 12 = 75 + (8 +"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{")"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) a + b"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N (ຕື່ມ ∈ ຫຼື ∉, ຖ້າ a, b ເປັນຈຳນວນທຳມະຊາດ)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) 35 - 12"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"12 - 35 (ຕື່ມ = ຫຼື ≠)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(4) ຕົວຕັ້ງລົບ ໃນປະໂຫຍກສັນຍະລັກ 500 - 150 = 350 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(5) ຜົນລົບ ໃນປະໂຫຍກສັນຍະລັກ 500 - 150 = 350 ແມ່ນ"}</span>
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
            {"ຈົ່ງແກ້ເລກໂຈດ ແລະ ການຄິດໄລ່ດັ່ງຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ປ່ຽນຮູບແບບ (23 + 89) + 11 = 23 + (89 + 11) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າຊອກຫາ z ຈາກ z - 120 = 280, ຄ່າຂອງ z ແມ່ນ"}</span>
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
          <span key="u3-ans-1-1">{"(1) ພົດ"}</span>,
          <span key="u3-ans-1-2">{"(2) ຜົນບວກ"}</span>,
          <span key="u3-ans-1-3">{"(3) ຕົວຕັ້ງລົບ"}</span>,
          <span key="u3-ans-1-4">{"(4) ຕົວລົບ"}</span>,
          <span key="u3-ans-1-5">{"(5) ຜົນລົບ"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u3-ans-2-1">{"(1) 148 (ເພາະ 50 + 98 = 148)"}</span>,
          <span key="u3-ans-2-2">{"(2) 284 (ເພາະ 200 + 84 = 284)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u3-ans-t1-1">{"(1) x = 770 (420 + 350)"}</span>,
          <span key="u3-ans-t1-2">{"(2) y = 530 (850 - 320)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u3-ans-t2-1">{"(1) 55 kg (47 + 8 = 55)"}</span>,
          <span key="u3-ans-t2-2">{"(2) 5 kg (50 - 45 = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u3-ans-s1-1">{"(1) 12"}</span>,
          <span key="u3-ans-s1-2">{"(2) ∈"}</span>,
          <span key="u3-ans-s1-3">{"(3) ≠"}</span>,
          <span key="u3-ans-s1-4">{"(4) 500"}</span>,
          <span key="u3-ans-s1-5">{"(5) 350"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u3-ans-s2-1">{"(1) 123 (23 + 100)"}</span>,
          <span key="u3-ans-s2-2">{"(2) z = 400 (280 + 120)"}</span>,
        ],
      },
    ],
    advice: "ຈື່ໃຫ້ດີວ່າ: ການບວກມີຄຸນລັກສະນະສະຫຼັບບ່ອນ ແລະ ໂຮມໝູ່ໄດ້, ແຕ່ການລົບແມ່ນບໍ່ມີເດີ້! ຕົວຕັ້ງລົບກໍ່ຕ້ອງໃຫຍ່ກວ່າຕົວລົບສະເໝີ.",
  },
};
