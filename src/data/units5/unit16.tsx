import React from "react";
import { UnitData } from "../units2";

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ລະບົບຫົວໜ່ວຍວັດແທກສາກົນ",
  unitGoal:
    "ເຂົ້າໃຈຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍວັດແທກຄວາມຍາວ, ເນື້ອທີ່, ບໍລິມາດ ແລະ ນ້ຳໜັກໃນລະບົບເມດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 184-189",
  keyPoints: {
    hint: {
      text: "ລະບົບຫົວໜ່ວຍເມດໃຊ້ຫຼັກສິບ! ເມື່ອເພີ່ມຂຶ້ນ 10 ເທື່ອ, 100 ເທື່ອ ຈະມີການປ່ຽນຫົວໜ່ວຍທີ່ເປັນລະບົບສະໝໍ່າສະເໝີເດີ້!",
    },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ລະບົບຫົວໜ່ວຍວັດແທກ"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#E8F5E9",
            border: "2px solid #4CAF50",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", width: "500px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <svg width="468" height="250">
              {/* Length Flow */}
              <text x="15" y="25" style={{ fontSize: "13px", fontWeight: "bold" }} fill="#2E7D32">{"ຄວາມຍາວ (Length)"}</text>
              {/* km node */}
              <circle cx="35" cy="65" r="17" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="1.5"/>
              <text x="35" y="69" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#2E7D32">{"km"}</text>
              
              <path d="M 52,65 L 142,65" fill="none" stroke="#2E7D32" strokeWidth="1"/>
              <polygon points="142,65 136,62 136,68" fill="#2E7D32"/>
              <text x="97" y="58" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#2E7D32">{"×1000"}</text>

              {/* m node */}
              <circle cx="160" cy="65" r="17" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="1.5"/>
              <text x="160" y="69" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#2E7D32">{"m"}</text>

              <path d="M 177,65 L 267,65" fill="none" stroke="#2E7D32" strokeWidth="1"/>
              <polygon points="267,65 261,62 261,68" fill="#2E7D32"/>
              <text x="222" y="58" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#2E7D32">{"×100"}</text>

              {/* cm node */}
              <circle cx="285" cy="65" r="17" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="1.5"/>
              <text x="285" y="69" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#2E7D32">{"cm"}</text>

              <path d="M 302,65 L 392,65" fill="none" stroke="#2E7D32" strokeWidth="1"/>
              <polygon points="392,65 386,62 386,68" fill="#2E7D32"/>
              <text x="347" y="58" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#2E7D32">{"×10"}</text>

              {/* mm node */}
              <circle cx="410" cy="65" r="17" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="1.5"/>
              <text x="410" y="69" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#2E7D32">{"mm"}</text>


              {/* Weight Flow */}
              <text x="15" y="145" style={{ fontSize: "13px", fontWeight: "bold" }} fill="#E65100">{"ນ້ຳໜັກ (Weight)"}</text>
              {/* t node */}
              <circle cx="70" cy="185" r="17" fill="#FFF3E0" stroke="#E65100" strokeWidth="1.5"/>
              <text x="70" y="189" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#E65100">{"t"}</text>

              <path d="M 87,185 L 217,185" fill="none" stroke="#E65100" strokeWidth="1"/>
              <polygon points="217,185 211,182 211,188" fill="#E65100"/>
              <text x="152" y="178" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#E65100">{"×1000"}</text>

              {/* kg node */}
              <circle cx="235" cy="185" r="17" fill="#FFF3E0" stroke="#E65100" strokeWidth="1.5"/>
              <text x="235" y="189" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#E65100">{"kg"}</text>

              <path d="M 252,185 L 382,185" fill="none" stroke="#E65100" strokeWidth="1"/>
              <polygon points="382,185 376,182 376,188" fill="#E65100"/>
              <text x="317" y="178" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }} fill="#E65100">{"×1000"}</text>

              {/* g node */}
              <circle cx="400" cy="185" r="17" fill="#FFF3E0" stroke="#E65100" strokeWidth="1.5"/>
              <text x="400" y="189" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#E65100">{"g"}</text>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "22px", lineHeight: "1.6" }}>
            <div style={{ fontSize: "18px", color: "#333" }}>
              <div><strong>{"• ຄວາມຍາວ:"}</strong>{" 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm"}</div>
              <div><strong>{"• ເນື້ອທີ່:"}</strong>{" 1 ha = 10,000 m², 1 a = 100 m²"}</div>
              <div><strong>{"• ນ້ຳໜັກ:"}</strong>{" 1 t (ໂຕນ) = 1,000 kg, 1 kg = 1,000 g"}</div>
              <div><strong>{"• ບໍລິມາດ:"}</strong>{" 1 L = 1,000 mL = 1,000 cm³"}</div>
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
            {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງກ່ຽວກັບນ້ຳໜັກ ແລະ ຄວາມຍາວໃສ່ບ່ອນຫວ່າງ: "}{" "}
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
              <span>{"(1) 1.5 kg = ຈັກ g?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"g"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) 1.5 m = ຈັກ cm?"}</span>
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
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງກ່ຽວກັບບໍລິມາດ ແລະ ເນື້ອທີ່ໃສ່ບ່ອນຫວ່າງ: "}{" "}
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
              <span>{"(1) 2.5 L = ຈັກ mL?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"mL"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) 3 ha = ຈັກ m²?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText: "⚖️ ປ່ຽນຫົວໜ່ວຍທັງໝົດໃຫ້ເປັນຫົວໜ່ວຍດຽວກັນກ່ອນ ແລ້ວຈຶ່ງເອົາມາບວກກັນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ: "}{" "}
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
                {"(1) 📦 ແມ່ຊື້ໝາກກ້ຽງ 1.5 kg ແລະ ໝາກມ່ວງ 800 g. ໝາກໄມ້ທັງໝົດທີ່ແມ່ຊື້ມີນ້ຳໜັກລວມກັນຈັກ kg?"}
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
                <span>{"kg"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍຄວາມຍາວ: "}{" "}
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
                {"(1) 🎗️ ທ້າວສົມສັກ ມີຮິບບິນຍາວ 2.4 m ແລະ ນາງວັນດີ ມີຮິບບິນຍາວ 60 cm. ຖ້າເອົາຮິບບິນຂອງທັງສອງຄົນມາຕໍ່ກັນ ຈະມີຄວາມຍາວລວມກັນທັງໝົດຈັກ cm?"}
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
                <span>{"cm"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດນ້ຳ: "}{" "}
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
              {"(1) 💧 ຖັງນ້ຳໃບໜຶ່ງມີຄວາມຈຸ 1 m³. ຖ້າມີນ້ຳຢູ່ແລ້ວ 400 L, ຈະຕ້ອງເທນ້ຳໃສ່ຕື່ມອີກຈັກ L ຈຶ່ງຈະເຕັມຖັງພໍດີ?"}
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
              <span>{"L"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາເນື້ອທີ່ດິນ: "}{" "}
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
              {"(1) 🌳 ສວນກາເຟແຫ່ງໜຶ່ງມີເນື້ອທີ່ທັງໝົດ 0.5 ha. ເນື້ອທີ່ຂອງສວນກາເຟນີ້ຈະເທົ່າກັບຈັກ m²?"}
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
              <span>{"m²"}</span>
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
          <span key="u16-ans-1-1">{"(1) 1,500 g (ຍ້ອນ 1.5 × 1,000 = 1,500)"}</span>,
          <span key="u16-ans-1-2">{"(2) 150 cm (ຍ້ອນ 1.5 × 100 = 150)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u16-ans-2-1">{"(1) 2,500 mL (ຍ້ອນ 2.5 × 1,000 = 2,500)"}</span>,
          <span key="u16-ans-2-2">{"(2) 30,000 m² (ຍ້ອນ 3 × 10,000 = 30,000)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u16-ans-t1-1">{"(1) 2.3 kg (ຍ້ອນ 800 g = 0.8 kg, ແລະ 1.5 + 0.8 = 2.3 kg)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u16-ans-t2-1">{"(1) 300 cm (ຍ້ອນ 2.4 m = 240 cm, ແລະ 240 + 60 = 300 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u16-ans-s1-1">{"(1) 600 L (ຍ້ອນ 1 m³ = 1,000 L, ດັ່ງນັ້ນ 1,000 - 400 = 600 L)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u16-ans-s2-1">{"(1) 5,000 m² (ຍ້ອນ 1 ha = 10,000 m², ດັ່ງນັ້ນ 0.5 × 10,000 = 5,000 m²)"}</span>,
        ],
      },
    ],
    advice:
      "ລະບົບຫົວໜ່ວຍສາກົນໃຊ້ການພົວພັນຫຼັກສິບ (10, 100, 1000) ທີ່ສະໝໍ່າສະເໝີຫຼາຍ! ຈື່ຈຳຕາຕະລາງປ່ຽນຫົວໜ່ວຍຈະຊ່ວຍໃຫ້ເຮົາບໍ່ສັບສົນໃນຊີວິດປະຈຳວັນ.",
  },
};
