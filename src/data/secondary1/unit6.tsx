import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit6Data: UnitData = {
  unitNumber: 6,
  unitTitle: "ພາກທີ I - ບົດທີ 6: ການຄູນ ແລະ ການຫານຈຳນວນຖ້ວນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບກົດເຄື່ອງໝາຍໃນການຄູນ ແລະ ການຫານຈຳນວນຖ້ວນ, ການຄິດໄລ່ກຳລັງສອງ, ການກຳນົດເຄື່ອງໝາຍຂອງຜົນຄູນຫຼາຍພົດ, ຕົວທະວີຄູນ ແລະ ຕົວອຸປະຄູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 40-46",
  subSections: [
    {
      title: "1. ກົດເຄື່ອງໝາຍໃນການຄູນ ແລະ ການຫານຈຳນວນຖ້ວນ",
      keyPoint: {
      title: "1. ກົດເຄື່ອງໝາຍໃນການຄູນ ແລະ ການຫານຈຳນວນຖ້ວນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຄູນ ແລະ ການຫານຈຳນວນຖ້ວນ ປະຕິບັດຕາມກົດເຄື່ອງໝາຍດັ່ງນີ້:"}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                fontSize: "1.375rem",
              }}
            >
              <strong style={{ color: "#2E7D32" }}>{"• ເຄື່ອງໝາຍຄືກັນ ຈະໄດ້ຜົນບວກ (+):"}</strong>
              <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                <li>{"(+) × (+) = (+)"}</li>
                <li>{"(-) × (-) = (+)"}</li>
                <li style={{ color: "#1B5E20", fontWeight: "bold", listStyleType: "none", marginTop: "4px" }}>
                  {"ຕົວຢ່າງ: (-8) × (-3) = +24"}
                </li>
              </ul>
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFEBEE",
                border: "2px solid #EF5350",
                borderRadius: "8px",
                fontSize: "1.375rem",
              }}
            >
              <strong style={{ color: "#C62828" }}>{"• ເຄື່ອງໝາຍຕ່າງກັນ ຈະໄດ້ຜົນລົບ (-):"}</strong>
              <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                <li>{"(+) × (-) = (-)"}</li>
                <li>{"(-) × (+) = (-)"}</li>
                <li style={{ color: "#B71C1C", fontWeight: "bold", listStyleType: "none", marginTop: "4px" }}>
                  {"ຕົວຢ່າງ: (-6) × (+4) = -24"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ກົດເຄື່ອງໝາຍການຫານ ກໍ່ແມ່ນຄືກັນກັບການຄູນເລີຍເດີ້! ເຊັ່ນ: (-16) ÷ (-8) = +2",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນ ແລະ ຜົນຫານຂອງຈຳນວນຖ້ວນຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) (-5) × (-6) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) (+8) × (-4) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) (-24) ÷ (+8) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) (-36) ÷ (-6) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(5) 0 × (-15) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ກຳລັງສອງ (Square) ແລະ ຜົນຄູນຫຼາຍພົດ",
      keyPoint: {
      title: "2. ກຳລັງສອງ (Square) ແລະ ຜົນຄູນຫຼາຍພົດ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"• "}<strong>{"ກຳລັງສອງ:"}</strong>{" a² = a × a (ຕົວຢ່າງ: (-5)² = (-5) × (-5) = +25, ແຕ່ -5² = -(5 × 5) = -25)"}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"• "}<strong>{"ເຄື່ອງໝາຍຂອງຜົນຄູນຫຼາຍພົດ (ບໍ່ເທົ່າ 0):"}</strong>
          </p>
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
            <div>{"- ຖ້າມີສ່ວນຄູນລົບເປັນ "}<strong>{"ຈຳນວນຄູ່"}</strong>{" (2, 4, 6, ...) → ຜົນຄູນເປັນ "}<strong>{"ບວກ (+)"}</strong></div>
            <div>{"- ຖ້າມີສ່ວນຄູນລົບເປັນ "}<strong>{"ຈຳນວນຄີກ"}</strong>{" (1, 3, 5, ...) → ຜົນຄູນເປັນ "}<strong>{"ລົບ (-)"}</strong></div>
          </div>
        </div>
      ),
      hint: {
        text: "ກວດນັບຈຳນວນເຄື່ອງໝາຍລົບກ່ອນຄິດໄລ່ສະເໝີ ເພື່ອກຳນົດເຄື່ອງໝາຍຂອງຄຳຕອບໄດ້ຖືກຕ້ອງ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ກຳລັງສອງຂອງຈຳນວນຖ້ວນຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) (-6)² = (-6) × (-6) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) -4² = -(4 × 4) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ຕົວທະວີຄູນ ແລະ ຕົວອຸປະຄູນ",
      keyPoint: {
      title: "3. ຕົວທະວີຄູນ ແລະ ຕົວອຸປະຄູນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຖ້າການຫານຫາກຫານຂາດ (ຕົວເສດ r = 0) ເຊັ່ນ "}<strong>{"36 ÷ 4 = 9"}</strong>{" :"}
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
            <div>{"• "}<strong>{"36"}</strong>{" ແມ່ນ "}<strong>{"ຕົວທະວີຄູນ (Multiple)"}</strong>{" ຂອງ 4"}</div>
            <div>{"• "}<strong>{"4"}</strong>{" ແມ່ນ "}<strong>{"ຕົວອຸປະຄູນ (Divisor)"}</strong>{" ຂອງ 36"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຕົວອຸປະຄູນຂອງ 24 ແມ່ນກຸ່ມຈຳນວນທຳມະຊາດທີ່ຫານ 24 ຂາດ ເຊັ່ນ: {1, 2, 3, 4, 6, 8, 12, 24} ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ນັບຈຳນວນເຄື່ອງໝາຍລົບ! ຖ້າມີຄູ່ຕົວ ຄຳຕອບເປັນບວກ, ຖ້າມີຄີກຕົວ ຄຳຕອບເປັນລົບ. ບົດທ້າທາຍ 2: ຕົວທະວີຄູນແມ່ນຕົວຕັ້ງຫານ, ຕົວອຸປະຄູນແມ່ນຕົວຫານເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຜົນຄູນຫຼາຍພົດຕໍ່ໄປນີ້ ໂດຍກຳນົດເຄື່ອງໝາຍກ່ອນຄິດໄລ່: "}{" "}
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
                <span>{"(1) (-2) × (-5) × (-3) × (+2) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) (-1) × (-2) × (-3) × (-4) × (+5) ="}</span>
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
              {"ຈົ່ງສັງເກດປະໂຫຍກສັນຍະລັກ 42 ÷ 6 = 7 ແລ້ວຕື່ມຄຳວ່າ ❝ແມ່ນຕົວທະວີຄູນ❞ ຫຼື ❝ແມ່ນຕົວອຸປະຄູນ❞: "}{" "}
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
                <span>{"(1) 42"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
                <span>{"ຂອງ 6"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 6"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
                <span>{"ຂອງ 42"}</span>
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
            {"ຈົ່ງຄິດໄລ່ ແລະ ຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
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
              <span>{"(1) (-8) × (-9) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) (-2)³ = (-2) × (-2) × (-2) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 72 ÷ (-8) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) (-12) × (-5) × 0 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(5) 8 ແມ່ນຕົວອຸປະຄູນຂອງ 24. (ຕື່ມ ∈ ຫຼື ∉ ໃສ່ບ່ອນວ່າງ: 8"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ກຸ່ມຕົວອຸປະຄູນຂອງ 24)"}</span>
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
            {"ຈົ່ງແກ້ເລກ四則演算 (ການຄິດໄລ່ປະສົມ) ຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) (-3) × (+4) + (-12) ÷ (-2) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) (-5) × [ (+8) + (-6) ] ="}</span>
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
          <span key="u6-ans-1-1">{"(1) +30 (ຫຼື 30)"}</span>,
          <span key="u6-ans-1-2">{"(2) -32"}</span>,
          <span key="u6-ans-1-3">{"(3) -3"}</span>,
          <span key="u6-ans-1-4">{"(4) +6 (ຫຼື 6)"}</span>,
          <span key="u6-ans-1-5">{"(5) 0"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u6-ans-2-1">{"(1) 36"}</span>,
          <span key="u6-ans-2-2">{"(2) -16 (ເພາະເຄື່ອງໝາຍລົບຢູ່ນອກກຳລັງສອງ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u6-ans-t1-1">{"(1) -60 (ເພາະເຄື່ອງໝາຍລົບມີ 3 ຕົວ ເປັນຈຳນວນຄີກ)"}</span>,
          <span key="u6-ans-t1-2">{"(2) +120 (ເພາະເຄື່ອງໝາຍລົບມີ 4 ຕົວ ເປັນຈຳນວນຄູ່)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u6-ans-t2-1">{"(1) ແມ່ນຕົວທະວີຄູນ"}</span>,
          <span key="u6-ans-t2-2">{"(2) ແມ່ນຕົວອຸປະຄູນ"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u6-ans-s1-1">{"(1) 72"}</span>,
          <span key="u6-ans-s1-2">{"(2) -8"}</span>,
          <span key="u6-ans-s1-3">{"(3) -9"}</span>,
          <span key="u6-ans-s1-4">{"(4) 0"}</span>,
          <span key="u6-ans-s1-5">{"(5) ∈"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u6-ans-s2-1">{"(1) -6 (ເພາະ -12 + (+6) = -6)"}</span>,
          <span key="u6-ans-s2-2">{"(2) -10 (ເພາະ -5 × (+2) = -10)"}</span>,
        ],
      },
    ],
    advice: "ຈື່ໃຫ້ດີວ່າ: ກຳລັງສອງຂອງຈຳນວນລົບໃນວົງເລັບ (-a)² ຈະໄດ້ຄ່າບວກສະເໝີ, ແຕ່ຖ້າບໍ່ມີວົງເລັບ -a² ຈະໄດ້ຄ່າລົບເດີ້!",
  },
};
