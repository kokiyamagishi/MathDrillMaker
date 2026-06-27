import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ສະຫຼຸບບົດຮຽນປະຖົມສຶກສາ ປີທີ 5",
  unitGoal:
    "ທົບທວນຄືນບົດຮຽນທັງໝົດທີ່ໄດ້ຮຽນມາໃນຊັ້ນ ປ.5 ເພື່ອກຽມຄວາມພ້ອມໃນການສອບເສັງຈົບຊັ້ນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 190-200",
  keyPoints: {
    hint: {
      text: "ນີ້ແມ່ນບົດທົດສອບລວມຂອງທຸກໆບົດຮຽນເດີ້! ພະຍາຍາມແກ້ໄຂດ້ວຍຕົນເອງເພື່ອວັດແທກລະດັບຄວາມເຂົ້າໃຈຂອງຕົນເອງ!",
    },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ສິ່ງທີ່ໄດ້ຮຽນມາທັງໝົດໃນ ປ.5"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#FFE082",
            border: "2px solid #FFB300",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", display: "flex", justifyContent: "center", alignItems: "center", width: "500px", height: "450px", flexShrink: 0 }}>
            <svg width="468" height="440" style={{ maxWidth: "100%", height: "auto" }}>
              {/* Row 1: Operations */}
              <rect x="15" y="15" width="438" height="125" fill="#F8F9FA" stroke="#2196F3" strokeWidth="2.5" rx="8"/>
              <rect x="15" y="15" width="110" height="125" fill="#E3F2FD" rx="8"/>
              <line x1="125" y1="15" x2="125" y2="140" stroke="#2196F3" strokeWidth="2.5"/>
              <text x="70" y="77" textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }} fill="#0D47A1">{"ເລກຄິດໄລ່"}</text>
              
              {/* Op 1: Decimals */}
              <circle cx="210" cy="65" r="38" fill="#fff" stroke="#2196F3" strokeWidth="1.5"/>
              <text x="210" y="77" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"1.2 × 2.5"}</text>
              
              {/* Op 2: Fractions */}
              <circle cx="330" cy="65" r="38" fill="#fff" stroke="#2196F3" strokeWidth="1.5"/>
              <text x="320" y="65" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"2"}</text>
              <line x1="310" y1="70" x2="330" y2="70" stroke="#1565C0" strokeWidth="1.5"/>
              <text x="320" y="90" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"3"}</text>
              <text x="350" y="77" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"× 5"}</text>

              {/* Theme name at the bottom right */}
              <text x="400" y="127" textAnchor="end" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#555">{"ເລກສ່ວນ & ທົດສະນິຍົມ"}</text>

              {/* Row 2: Shapes */}
              <rect x="15" y="160" width="438" height="125" fill="#F8F9FA" stroke="#4CAF50" strokeWidth="2.5" rx="8"/>
              <rect x="15" y="160" width="110" height="125" fill="#E8F5E9" rx="8"/>
              <line x1="125" y1="160" x2="125" y2="285" stroke="#4CAF50" strokeWidth="2.5"/>
              <text x="70" y="222" textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }} fill="#1B5E20">{"ຮູບເລຂາ"}</text>
              
              {/* Shape 1: Triangle */}
              <circle cx="210" cy="212" r="38" fill="#fff" stroke="#4CAF50" strokeWidth="1.5"/>
              <polygon points="195,222 225,222 210,195" fill="none" stroke="#2E7D32" strokeWidth="1.5"/>
              
              {/* Shape 2: Cube/Circle */}
              <circle cx="330" cy="212" r="38" fill="#fff" stroke="#4CAF50" strokeWidth="1.5"/>
              <circle cx="330" cy="212" r="18" fill="none" stroke="#2E7D32" strokeWidth="1.5"/>
              <line x1="312" y1="212" x2="348" y2="212" stroke="red" strokeWidth="1" strokeDasharray="2,2"/>

              {/* Theme name at the bottom right */}
              <text x="350" y="272" textAnchor="end" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#555">{"ເນື້ອທີ່ & ບໍລິມາດ"}</text>

              {/* Row 3: Relations */}
              <rect x="15" y="305" width="438" height="125" fill="#F8F9FA" stroke="#FF9800" strokeWidth="2.5" rx="8"/>
              <rect x="15" y="305" width="110" height="125" fill="#FFF3E0" rx="8"/>
              <line x1="125" y1="305" x2="125" y2="430" stroke="#FF9800" strokeWidth="2.5"/>
              <text x="70" y="367" textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }} fill="#E65100">{"ພົວພັນ %"}</text>
              
              {/* Rel 1: Ratio */}
              <circle cx="210" cy="355" r="38" fill="#fff" stroke="#FF9800" strokeWidth="1.5"/>
              <text x="210" y="360" textAnchor="middle" style={{ fontSize: "13px", fontWeight: "bold" }} fill="#E65100">{"3 : 4"}</text>
              
              {/* Rel 2: Percent */}
              <circle cx="330" cy="355" r="38" fill="#fff" stroke="#FF9800" strokeWidth="1.5"/>
              <text x="330" y="360" textAnchor="middle" style={{ fontSize: "13px", fontWeight: "bold" }} fill="#E65100">{"75%"}</text>

              {/* Theme name at the bottom right */}
              <text x="390" y="417" textAnchor="end" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#555">{"ສ່ວນຮ້ອຍ & ອັດຕາສ່ວນ"}</text>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "22px", lineHeight: "1.6" }}>
            <div style={{ fontSize: "18px", color: "#333" }}>
              <div>{"• ການຄູນ, ການຫານເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ."}</div>
              <div>{"• ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ເນື້ອທີ່ຮູບຫຼາຍແຈ."}</div>
              <div>{"• ອັດຕາສ່ວນພົວພັນ ແລະ ສ່ວນຮ້ອຍ."}</div>
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
            {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນລຸ່ມນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) 1.2 × 2.5"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                {"(2) "}
                <Fraction num="2" den="3" />
                {" × 5"}
              </span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາເລຂາຄະນິດລຸ່ມນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຮູບສາມແຈທີ່ມີພື້ນ 6 cm ແລະ ລວງສູງ 4 cm. ເນື້ອທີ່ຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm²?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 20 cm. ເສັ້ນອ້ອມວົງຈະຍາວຈັກ cm? (ກຳນົດ π = 3.14)"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "⚖️ ໃຊ້ອັດຕາສ່ວນເພື່ອຊອກຫາປະລິມານ! ສ່ວນຮູບກ່ອງສາກ ບໍລິມາດແມ່ນ ພື້ນ × ລວງສູງ (ລວງກວ້າງ × ລວງຍາວ × ລວງສູງ) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນຂອງເຂົ້າໜົມຫວານ: "}{" "}
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
                {"(1) 🥛 ຕ້ອງການເຮັດເຂົ້າໜົມຫວານ ໂດຍໃຊ້ນ້ຳຕານ ແລະ ແປ້ງ ໃນອັດຕາສ່ວນ 3 : 5. ຖ້າໃຊ້ແປ້ງ 250 g, ຈະຕ້ອງໃຊ້ນ້ຳຕານຈັກ g?"}
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
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດຂອງນ້ຳໃນຖັງ: "}{" "}
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
                {"(1) 📦 ຖັງນ້ຳຮູບກ່ອງສາກໃບໜຶ່ງ ມີລວງກວ້າງ 1.2 m, ລວງຍາວ 1.5 m ແລະ ລວງສູງ 1 m. ບໍລິມາດຂອງຖັງນ້ຳໃບນີ້ຈະແມ່ນຈັກ m³?"}
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
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"m³"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການຫຼຸດລາຄาສິນຄ້າ: "}{" "}
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
              {"(1) 🚴 ສິນຄ້າຊະນິດໜຶ່ງລາຄາ 5,000 ກີບ. ຖ້າຫຼຸດລາຄາໃຫ້ 15%, ລາຄາສຸດທ້າຍຂອງສິນຄ້ານີ້ແມ່ນຈັກກີບ?"}
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
                  width: "100px",
                  height: "40px",
                }}
              ></span>
              <span>{"ກີບ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງຂອງລົດແລ່ນ: "}{" "}
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
              {"(1) 🚗 ລົດຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວສະເລ່ຍ 60 km/h. ໃນເວລາ 2.5 ຊົ່ວໂມງ ລົດຄັນນີ້ຈະແລ່ນໄດ້ໄລຍະທາງທັງໝົດຈັກ km?"}
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
              <span>{"km"}</span>
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
          <span key="u17-ans-1-1">{"(1) 3"}</span>,
          <span key="u17-ans-1-2">{"(2) 10/3 (ຫຼື 3 1/3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u17-ans-2-1">{"(1) 12 cm² (ຍ້ອນ 6 × 4 ÷ 2 = 12)"}</span>,
          <span key="u17-ans-2-2">{"(2) 62.8 cm (ຍ້ອນ 20 × 3.14 = 62.8)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u17-ans-t1-1">{"(1) 150 g (ຍ້ອນ 250 ÷ 5 = 50, ດັ່ງນັ້ນ 3 × 50 = 150 g)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u17-ans-t2-1">{"(1) 1.8 m³ (ຍ້ອນ 1.2 × 1.5 × 1 = 1.8 m³)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u17-ans-s1-1">{"(1) 4,250 ກີບ (ຍ້ອນຫຼຸດລາຄາ 5,000 × 0.15 = 750 ກີບ, ຕ້ອງຈ່າຍ 5,000 - 750 = 4,250 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u17-ans-s2-1">{"(1) 150 km (ຍ້ອນ 60 × 2.5 = 150 km)"}</span>,
        ],
      },
    ],
    advice:
      "ຊົມເຊີຍທຸກຄົນທີ່ຮຽນຈົບບົດຮຽນ ປ.5 ຢ່າງສົມບູນ! ຄວາມຮູ້ທັງໝົດນີ້ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການຮຽນຕໍ່ຊັ້ນມັດທະຍົມ ແລະ ການນຳໃຊ້ໃນຊີວິດ.",
  },
};
