import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit9Data: UnitData = {
  unitNumber: 9,
  unitTitle: "ພາກທີ I - ບົດທີ 9: ເລກຮາກຂັ້ນ n",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບນິຍາມ ແລະ ຄຸນລັກສະນະຂອງຮາກຂັ້ນ n (n-th Roots), ຄວາມກ່ຽວພັນກັບເລກກຳລັງທີ່ມີກຳລັງເປັນເລກສ່ວນ ແລະ ການຄິດໄລ່ພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 9 ໜ້າ 49-54",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ສ່ວນປະກອບຂອງຮາກຂັ້ນ n (Definition and Anatomy of n-th Roots)",
      keyPoint: {
      title: "1. ນິຍາມ ແລະ ສ່ວນປະກອບຂອງຮາກຂັ້ນ n (Definition and Anatomy of n-th Roots)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຖ້າ a ເປັນຈຳນວນຈິງ ແລະ n ເປັນຈຳນວນຖ້ວນບວກທີ່ໃຫຍ່ກວ່າ 1, ຮາກຂັ້ນ n ຂອງ a ແມ່ນຈຳນວນຈິງ x ທີ່ x^n = a."}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ສ່ວນປະກອບຂອງຮາກຂັ້ນ n"}</span>
            <svg viewBox="0 0 240 85" style={{ width: "100%", maxWidth: "240px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Index indicator */}
              <text x="65" y="32" fill="#E91E63" fontSize="10" fontWeight="bold" textAnchor="end">{"n (ດັດສະນີ)"}</text>
              <path d="M 68,30 L 85,38" stroke="#E91E63" strokeWidth="1" strokeDasharray="2,2" />

              {/* Radical symbol */}
              <path d="M 80,48 L 86,48 L 92,60 L 102,36 L 140,36" fill="none" stroke="#333" strokeWidth="2" />
              <text x="122" y="28" fill="#333" fontSize="8">{"ເຄື່ອງໝາຍຮາກ"}</text>

              {/* Radicand indicator */}
              <text x="112" y="50" fill="#2196F3" fontSize="12" fontWeight="bold">{"a"}</text>
              <text x="145" y="65" fill="#2196F3" fontSize="10" fontWeight="bold">{"(ຈຳນວນກ້ອງຮາກ)"}</text>
              <path d="M 140,62 L 120,52" stroke="#2196F3" strokeWidth="1" strokeDasharray="2,2" />
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ແນະນຳ: ຖ້າ n ແມ່ນເລກຄູ່, ຈຳນວນກ້ອງຮາກ a ຕ້ອງໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ 0 ສະເໝີ ເດີ້! ແຕ່ຖ້າ n ແມ່ນເລກຄີກ, a ສາມາດເປັນຄ່າລົບໄດ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າຂອງຮາກຂັ້ນ n ຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຊອກຫາຄ່າຂອງ: ຮາກຂັ້ນ 3 ຂອງ 27 = (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊອກຫາຄ່າຂອງ: ຮາກຂັ້ນ 4 ຂອງ 16 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການພົວພັນລະຫວ່າງຮາກ ແລະ ເລກກຳລັງ (Radicals and Fractional Exponents)",
      keyPoint: {
      title: "2. ການພົວພັນລະຫວ່າງຮາກ ແລະ ເລກກຳລັງ (Radicals and Fractional Exponents)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເຮົາສາມາດຜັນປ່ຽນຮູບຮ່າງເຄື່ອງໝາຍຮາກຂັ້ນ n ໃຫ້ເປັນເລກກຳລັງທີ່ມີກຳລັງເປັນເລກສ່ວນໄດ້ດັ່ງນີ້:"}
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#2E7D32" }}>{"• ສູດການປ່ຽນແປງ: "}</strong>
              <span>{"ຮາກຂັ້ນ n ຂອງ a = a^"}</span>
              <Fraction num="1" den="n" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderTop: "1px solid #C8E6C9", paddingTop: "8px" }}>
              <strong style={{ color: "#2E7D32" }}>{"• ສູດທົ່ວໄປ: "}</strong>
              <span>{"ຮາກຂັ້ນ n ຂອງ a^m = a^"}</span>
              <Fraction num="m" den="n" />
            </div>
          </div>
          <p style={{ fontSize: "1.375rem", margin: "10px 0 0 0" }}>
            {"ຕົວຢ່າງ: ຮາກຂັ້ນ 3 ຂອງ 8 = ຮາກຂັ້ນ 3 ຂອງ 2³ = 2^"}
            <Fraction num="3" den="3" />
            {" = 2¹ = 2."}
          </p>
        </div>
      ),
      hint: {
        text: "ດັດສະນີ n ຂອງຮາກ ຈະກາຍເປັນ ຕົວຫານ ຂອງກຳລັງເລກສ່ວນສະເໝີເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງປ່ຽນຮູບຮ່າງລະຫວ່າງຮາກ ແລະ ເລກກຳລັງເລກສ່ວນ: "}{" "}
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
              <span>{"(1) ປ່ຽນ ຮາກຂັ້ນ 5 ຂອງ x³ ໃຫ້ເປັນເລກກຳລັງ (ຕອບໃນຮູບແບບ x^(m/n), ຕົວຢ່າງ: x^(3/5)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ປ່ຽນເລກກຳລັງ y^"} <Fraction num="1" den="3" /> {" ໃຫ້ເປັນຮູບຮ່າງຮາກຂັ້ນ n (ຕອບເປັນພາສາລາວ, ຕົວຢ່າງ: ຮາກຂັ້ນ 3 ຂອງ y):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ຖ້າມີຄ່າລົບພາຍໃຕ້ຮາກຂັ້ນຄີກ (ເຊັ່ນ ຮາກຂັ້ນ 3 ຂອງ -8), ຜົນຮັບຈະເປັນຄ່າລົບ (-) ເພາະ (-2)³ = -8! ບົດທ້າທາຍ 2: ຄິດໄລ່ຕາມສູດການຄູນເລກຮາກທີ່ມີດັດສະນີຄືກັນ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງຮາກຂັ້ນ n ທີ່ມີຄ່າລົບ ແລະ ເລກສ່ວນ: "}{" "}
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
                <span>{"(1) ຊອກຫາຄ່າຂອງ: ຮາກຂັ້ນ 3 ຂອງ -64 (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຊອກຫາຄ່າຂອງ: ຮາກຂັ້ນ 3 ຂອງ "}<Fraction num="1" den="125" />{" (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ການຄູນ ແລະ ຫານເລກຮາກຂັ້ນ n: "}{" "}
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
                <span>{"(1) ຄິດໄລ່ຜົນຄູນ: ຮາກຂັ້ນ 3 ຂອງ 2 × ຮາກຂັ້ນ 3 ຂອງ 4 = (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່ຜົນຫານ: ຮາກຂັ້ນ 4 ຂອງ 80 ÷ ຮາກຂັ້ນ 4 ຂອງ 5 ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມກ່ຽວກັບເລກກຳລັງເລກສ່ວນ ແລະ ຮາກ: "}{" "}
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
              <span>{"(1) ໃຫ້ x = 32. ຈົ່ງຊອກຫາຄ່າຂອງ x^"} <Fraction num="3" den="5" /> {" (ຄຳແນະນຳ: ປ່ຽນ 32 = 2⁵ ກ່ອນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຊອກຫາຄ່າ x ທີ່ເຮັດໃຫ້ສົມຜົນ ຮາກຂັ້ນ 3 ຂອງ x = -3 ເປັນຈິງ (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາປະຍຸກຕົວຈິງກ່ຽວກັບຂ້າງຂອງກ່ອງບາດສາກ (3D Cube Root Problem): "}{" "}
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
              <span>{"(1) ກ່ອງໄມ້ຮູບກ້ອນບາດສາກ (Cube) ໃສ່ເຄື່ອງໜຶ່ງມີບໍລິມາດ V = 64 cm³. ຄວາມຍາວຂ້າງ s ຂອງກ່ອງນີ້ຈະແມ່ນຈັກຊັງຕີແມັດ (cm)? (s = ຮາກຂັ້ນ 3 ຂອງ V):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: s ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າບໍລິມາດ V ຂອງກ່ອງເພີ່ມຂຶ້ນເປັນ 125 cm³, ຄວາມຍາວຂ້າງ s ຂອງກ່ອງຈະປ່ຽນເປັນຈັກຊັງຕີແມັດ (cm)?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: s ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
          <span key="u9-ans-1-1">{"(1) 3 (ເພາະວ່າ 3³ = 27)"}</span>,
          <span key="u9-ans-1-2">{"(2) 2 (ເພາະວ່າ 2⁴ = 16)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u9-ans-2-1">{"(1) x^(3/5) (ເພາະວ່າ ດັດສະນີ 5 ແມ່ນຕົວຫານຂອງກຳລັງ)"}</span>,
          <span key="u9-ans-2-2">{"(2) ຮາກຂັ້ນ 3 ຂອງ y (ເພາະວ່າ y^(1/3) = ຮາກຂັ້ນ 3 ຂອງ y)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u9-ans-t1-1">{"(1) -4 (ເພາະວ່າ (-4)³ = -64)"}</span>,
          <span key="u9-ans-t1-2">{"(2) 1/5 (ເພາະວ່າ (1/5)³ = 1/125)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u9-ans-t2-1">{"(1) 2 (ເພາະວ່າ ຮາກຂັ້ນ 3 ຂອງ (2 × 4) = ຮາກຂັ້ນ 3 ຂອງ 8 = 2)"}</span>,
          <span key="u9-ans-t2-2">{"(2) 2 (ເພາະວ່າ ຮາກຂັ້ນ 4 ຂອງ (80 / 5) = ຮາກຂັ້ນ 4 ຂອງ 16 = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u9-ans-s1-1">{"(1) 8 (ເພາະວ່າ (2⁵)^(3/5) = 2³ = 8)"}</span>,
          <span key="u9-ans-s1-2">{"(2) -27 (ເພາະວ່າ x = (-3)³ = -27)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u9-ans-s2-1">{"(1) 4 (ເພາະວ່າ ຮາກຂັ້ນ 3 ຂອງ 64 = 4 cm)"}</span>,
          <span key="u9-ans-s2-2">{"(2) 5 (ເພາະວ່າ ຮາກຂັ້ນ 3 ຂອງ 125 = 5 cm)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ໄວ້ວ່າ ເມື່ອປ່ຽນຮາກຂັ້ນ n ໃຫ້ເປັນເລກກຳລັງ, ດັດສະນີ n ຈະຕ້ອງເປັນສ່ວນຫານຂອງກຳລັງສະເໝີ! ແລະ ຮາກຂັ້ນຄີກສາມາດມີຄ່າລົບຢູ່ກ້ອງຮາກໄດ້ເດີ້!",
  },
};
