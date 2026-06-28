import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ອັດຕາສ່ວນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນ (a : b), ຄ່າຂອງອັດຕາສ່ວນ ແລະ ການຊອກຫາອັດຕາສ່ວນທີ່ເທົ່າກັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 126-135",
  keyPoints: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ fontSize: "22px", color: "#1976D2", margin: "4px 0" }}>
          {"1. ອັດຕາສ່ວນ ແລະ ຄ່າຂອງອັດຕາສ່ວນ"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "12px",
            backgroundColor: "#E3F2FD",
            border: "2px solid #2196F3",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "8px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", width: "500px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <svg width="468" height="100">
              {/* Left Mixture: 3 : 4 */}
              {/* Blue Syrup (3 cups) */}
              <circle cx="35" cy="25" r="9" fill="#2196F3"/>
              <circle cx="58" cy="25" r="9" fill="#2196F3"/>
              <circle cx="81" cy="25" r="9" fill="#2196F3"/>
              <text x="104" y="29" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#0D47A1">{"ນ້ຳຫວານ (3)"}</text>
              
              {/* Orange Water (4 cups) */}
              <circle cx="35" cy="65" r="9" fill="#FF9800"/>
              <circle cx="58" cy="65" r="9" fill="#FF9800"/>
              <circle cx="81" cy="65" r="9" fill="#FF9800"/>
              <circle cx="104" cy="65" r="9" fill="#FF9800"/>
              <text x="127" y="69" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#E65100">{"ນ້ຳລ້າ (4)"}</text>

              <text x="215" y="52" textAnchor="middle" style={{ fontSize: "28px", fontWeight: "bold" }} fill="#1565C0">{"→"}</text>

              {/* Ratio values */}
              <text x="260" y="40" style={{ fontSize: "15px", fontWeight: "bold" }} fill="#0D47A1">{"ອັດຕາສ່ວນແມ່ນ 3 : 4"}</text>
              <text x="260" y="70" style={{ fontSize: "15px", fontWeight: "bold" }} fill="#1976D2">{"ຄ່າແມ່ນ 3 ÷ 4 = 0.75"}</text>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "18px", lineHeight: "1.5" }}>
            <div style={{ fontWeight: "bold", color: "#0D47A1", marginBottom: "4px" }}>
              {"ອັດຕາສ່ວນແມ່ນ a : b"}
            </div>
            <div style={{ fontSize: "15px", color: "#333", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                {"ຄ່າຂອງອັດຕາສ່ວນແມ່ນຊອກໄດ້ຈາກການຫານ a ÷ b ຫຼື ຂຽນ"}
                <Fraction num="a" den="b" />
              </div>
              <div style={{ fontWeight: "bold", color: "#1565C0", marginTop: "2px", display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                {"ຕົວຢ່າງ: 3 : 4 ຈະມີຄ່າແມ່ນ 3 ÷ 4 = 0.75 (ຫຼື "}
                <Fraction num="3" den="4" />
                {")"}
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: "22px", color: "#2E7D32", margin: "4px 0" }}>
          {"2. ອັດຕາສ່ວນທີ່ເທົ່າກັນ"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "12px",
            backgroundColor: "#E8F5E9",
            border: "2px solid #4CAF50",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "8px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", width: "500px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <svg width="468" height="105">
              {/* Left group: 3 : 4 */}
              <rect x="15" y="10" width="110" height="70" fill="none" stroke="#A5D6A7" strokeWidth="1.5" rx="4" strokeDasharray="3,3"/>
              <circle cx="35" cy="28" r="7" fill="#2196F3"/>
              <circle cx="60" cy="28" r="7" fill="#2196F3"/>
              <circle cx="85" cy="28" r="7" fill="#2196F3"/>
              <circle cx="30" cy="52" r="7" fill="#FF9800"/>
              <circle cx="53" cy="52" r="7" fill="#FF9800"/>
              <circle cx="76" cy="52" r="7" fill="#FF9800"/>
              <circle cx="99" cy="52" r="7" fill="#FF9800"/>
              <text x="70" y="95" textAnchor="middle" style={{ fontSize: "13px", fontWeight: "bold" }} fill="#2E7D32">{"3 : 4"}</text>

              {/* Dotted arrows showing × 2 scaling */}
              <path d="M 135,28 Q 195,12 255,28" fill="none" stroke="#2196F3" strokeWidth="1.5" strokeDasharray="2,2"/>
              <polygon points="255,28 250,24 253,31" fill="#2196F3"/>
              <text x="195" y="15" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#2196F3">{"× 2"}</text>

              <path d="M 135,52 Q 195,68 255,52" fill="none" stroke="#FF9800" strokeWidth="1.5" strokeDasharray="2,2"/>
              <polygon points="255,52 253,48 250,55" fill="#FF9800"/>
              <text x="195" y="68" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#FF9800">{"× 2"}</text>

              {/* Right group: 6 : 8 */}
              <rect x="265" y="10" width="185" height="70" fill="none" stroke="#2E7D32" strokeWidth="1.5" rx="4"/>
              {/* Blue (6) */}
              <circle cx="285" cy="28" r="7" fill="#2196F3"/>
              <circle cx="310" cy="28" r="7" fill="#2196F3"/>
              <circle cx="335" cy="28" r="7" fill="#2196F3"/>
              <circle cx="360" cy="28" r="7" fill="#2196F3"/>
              <circle cx="385" cy="28" r="7" fill="#2196F3"/>
              <circle cx="410" cy="28" r="7" fill="#2196F3"/>
              {/* Orange (8 in two rows of 4) */}
              <circle cx="290" cy="46" r="6" fill="#FF9800"/>
              <circle cx="320" cy="46" r="6" fill="#FF9800"/>
              <circle cx="350" cy="46" r="6" fill="#FF9800"/>
              <circle cx="380" cy="46" r="6" fill="#FF9800"/>
              <circle cx="290" cy="62" r="6" fill="#FF9800"/>
              <circle cx="320" cy="62" r="6" fill="#FF9800"/>
              <circle cx="350" cy="62" r="6" fill="#FF9800"/>
              <circle cx="380" cy="62" r="6" fill="#FF9800"/>
              <text x="357" y="95" textAnchor="middle" style={{ fontSize: "13px", fontWeight: "bold" }} fill="#2E7D32">{"6 : 8"}</text>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "18px", lineHeight: "1.5" }}>
            <div style={{ fontWeight: "bold", color: "#2E7D32", marginBottom: "4px" }}>
              {"ອັດຕາສ່ວນທີ່ເທົ່າກັນ:"}
            </div>
            <div style={{ fontSize: "15px", color: "#333" }}>
              {"ເຮົາສາມາດຄູນ ຫຼື ຫານທັງສອງເບື້ອງຂອງອັດຕາສ່ວນດ້ວຍຈຳນວນດຽວກັນເພື່ອຫາອັດຕາສ່ວນທີ່ເທົ່າກັນ."}
              <div style={{ fontWeight: "bold", color: "#2E7D32", marginTop: "2px" }}>
                {"ຕົວຢ່າງ: 3 : 4 = (3×2) : (4×2) = 6 : 8"}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຄ່າຂອງອັດຕາສ່ວນຕໍ່ໄປນີ້ (ຂຽນເປັນເລກທົດສະນິຍົມ): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ຄ່າຂອງອັດຕາສ່ວນ 3 : 5"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຄ່າຂອງອັດຕາສ່ວນ 5 : 8"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(3) ຄ່າຂອງອັດຕາສ່ວນ 7 : 4"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບອັດຕາສ່ວນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ປ່ຽນອັດຕາສ່ວນ 12 : 18 ໃຫ້ເປັນອັດຕາສ່ວນຂັ້ນຕ່ຳ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຈົ່ງຊອກຫາຄ່າຂອງ x ຈາກອັດຕາສ່ວນ 2 : 5 = x : 15"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "🥤 ໃຊ້ອັດຕາສ່ວນທີ່ເທົ່າກັນ! ຖ້າອັດຕາສ່ວນແມ່ນ a : b = c : d, ເຮົາສາມາດຊອກຫາຕົວເລກທີ່ຄູນ ຫຼື ຫານ ເພື່ອຊອກຫາຄ່າທີ່ຕ້ອງການໄດ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "🥛 ສູດເຮັດນົມຊາ ຕ້ອງປະສົມນົມ ແລະ ຊາ ໃນອັດຕາສ່ວນ 2 : 3. ຖ້າຕ້ອງການໃຊ້ນ້ຳຊາ 150 mL, ຈະຕ້ອງໃຊ້ນົມຈັກ mL?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingLeft: "16px",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"mL"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "🎨 ໃນການປະສົມສີນ້ຳ ສີຟ້າ ແລະ ສີເຫຼືອງ ໃນອັດຕາສ່ວນ 3 : 4 ເພື່ອໃຫ້ໄດ້ສີຂຽວທີ່ຕ້ອງການ. ຖ້າໃຊ້ສີຟ້າ 120 mL, ຈະຕ້ອງໃຊ້ສີເຫຼືອງຈັກ mL?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingLeft: "16px",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"mL"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງປັນສ່ວນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {
                "🍬 ມີເຂົ້າໜົມ 40 ກ້ອນ, ຕ້ອງການແບ່ງໃຫ້ສອງຄົນໃນອັດຕາສ່ວນ 3 : 5. ຜູ້ທີ່ໄດ້ສ່ວນຫຼາຍກວ່າ ຈະໄດ້ເຂົ້າໜົມຈັກກ້ອນ?"
              }
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingLeft: "16px",
                marginTop: "8px",
              }}
            >
              <span>{"ຄຳຕອບ:"}</span>
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "80px",
                  height: "40px",
                }}
              ></span>
              <span>{"ກ້ອນ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງປັນສ່ວນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {
                "🎗️ ຕ້ອງການຕັດຮິບບິນ ທີ່ຍາວ 24 cm ອອກເປັນສອງສ່ວນໃຫ້ມີອັດຕາສ່ວນ 1 : 3. ສ່ວນທີ່ຍາວກວ່າຈະມີຄວາມຍາວຈັກ cm?"
              }
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingLeft: "16px",
                marginTop: "8px",
              }}
            >
              <span>{"ຄຳຕອບ:"}</span>
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "80px",
                  height: "40px",
                }}
              ></span>
              <span>{"cm"}</span>
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
          <span key="u11-ans-1-1">{"(1) 0.6"}</span>,
          <span key="u11-ans-1-2">{"(2) 0.625"}</span>,
          <span key="u11-ans-1-3">{"(3) 1.75"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u11-ans-2-1">{"(1) 2 : 3 (ຫານດ້ວຍ 6 ທັງສອງເບື້ອງ)"}</span>,
          <span key="u11-ans-2-2">{"(2) x = 6 (ຍ້ອນ 5 × 3 = 15, ດັ່ງນັ້ນ 2 × 3 = 6)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u11-ans-c1-1">{"100 mL (ຍ້ອນ 150 ÷ 3 = 50, ດັ່ງນັ້ນ 2 × 50 = 100)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u11-ans-c2-1">{"160 mL (ຍ້ອນ 120 ÷ 3 = 40, ດັ່ງນັ້ນ 4 × 40 = 160)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u11-ans-s1-1">
            {
              "25 ກ້ອນ (ຍ້ອນສ່ວນທັງໝົດແມ່ນ 3 + 5 = 8 ສ່ວນ, ສ່ວນຫຼາຍແມ່ນ 5 ສ່ວນ, ຈະໄດ້ 40 × (5/8) = 25 ກ້ອນ)"
            }
          </span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u11-ans-s2-1">
            {
              "18 cm (ຍ້ອນສ່ວນທັງໝົດແມ່ນ 1 + 3 = 4 ສ່ວນ, ສ່ວນທີ່ຍາວກວ່າແມ່ນ 3 ສ່ວນ, ຈະໄດ້ 24 × (3/4) = 18 cm)"
            }
          </span>,
        ],
      },
    ],
    advice: "",
  },
};
