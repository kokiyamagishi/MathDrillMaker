import React from "react";
import { UnitData } from "../units2";

export const unit9Data: UnitData = {
    unitNumber: 9,
    unitTitle: "ເນື້ອທີ່ຂອງຮູບສີ່ແຈ ແລະ ຮູບສາມແຈ",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາເນື້ອທີ່ຂອງຮູບສາມແຈ, ຮູບສີ່ແຈຂ້າງຂະໜານ, ຮູບຄາງໝູ ແລະ ຮູບສີ່ແຈລີ ພ້ອມທັງການແກ້ໄຂໂຈດບັນຫາເລຂາຄະນິດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 86-109",
    keyPoints: {
      hint: {
        text: "ສູດເນື້ອທີ່ແຕ່ລະຮູບແມ່ນມີຄວາມກ່ຽວຂ້ອງກັນ! ຈື່ສູດ: ຮູບສາມແຈ = ພື້ນ × ລວງສູງ ÷ 2, ຮູບສີ່ແຈຂ້າງຂະໜານ = ພື້ນ × ລວງສູງ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດເນື້ອທີ່ຮູບເລຂາຄະນິດ (Area Formulas)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Triangle area */}
            <div
              className="math-illustration"
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#1565C0" }}>
                {"ຮູບສາມແຈ (Triangle)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 20,70 L 100,70 L 80,20 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <line
                    x1="80"
                    y1="20"
                    x2="80"
                    y2="70"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="50" y="82" style={{ fontSize: "22px" }}>
                    {"ພື້ນ"}
                  </text>
                  <text x="85" y="45" style={{ fontSize: "22px" }} fill="red">
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"ພື້ນ × ລວງສູງ ÷ 2"}
              </strong>
            </div>

            {/* Parallelogram area */}
            <div
              className="math-illustration"
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"ຮູບສີ່ແຈຂ້າງຂະໜານ (Parallelogram)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 20,70 L 90,70 L 100,20 L 30,20 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="20"
                    x2="30"
                    y2="70"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="55" y="82" style={{ fontSize: "22px" }}>
                    {"ພື້ນ"}
                  </text>
                  <text x="35" y="45" style={{ fontSize: "22px" }} fill="red">
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>{"ພື້ນ × ລວງສູງ"}</strong>
            </div>

            {/* Trapezoid area */}
            <div
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#FFE082",
                border: "2px solid #FFB300",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#FF8F00" }}>
                {"ຮູບຄາງໝູ (Trapezoid)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 20,70 L 100,70 L 80,20 L 40,20 Z"
                    fill="rgba(255, 179, 0, 0.2)"
                    stroke="#FFB300"
                    strokeWidth="2"
                  />
                  <line
                    x1="40"
                    y1="20"
                    x2="40"
                    y2="70"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="50" y="15" fontSize="10">
                    {"ຂ້າງເທິງ"}
                  </text>
                  <text x="50" y="82" fontSize="10">
                    {"ຂ້າງລຸ່ມ"}
                  </text>
                  <text x="45" y="45" fontSize="10" fill="red">
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"(ຂ້າງເທິງ + ຂ້າງລຸ່ມ) × ລວງສູງ ÷ 2"}
              </strong>
            </div>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(1) ຮູບສາມແຈທີ່ມີພື້ນ 8 cm ແລະ ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນ"}
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(2) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນ 10 cm ແລະ ລວງສູງ 6 cm. ເນື້ອທີ່ແມ່ນ"
                  }
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(3) ຮູບຄາງໝູທີ່ມີຂ້າງເທິງ 4 cm, ຂ້າງລຸ່ມ 8 cm ແລະ ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນ"
                  }
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(4) ຮູບສີ່ແຈລີທີ່ມີເສັ້ນເນັ່ງຈອມຍາວ 6 cm ແລະ 8 cm. ເນື້ອທີ່ແມ່ນ"
                  }
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ລະວັງເດີ້! ພື້ນ ແລະ ລວງສູງຕ້ອງຕັ້ງສາກກັນສະເໝີ! ຕົວເລກທີ່ສະຫຼຽງ ຫຼື ບໍ່ຕັ້ງສາກກັນແມ່ນບໍ່ນຳມາໃຊ້ໃນສູດຄິດໄລ່ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສາມແຈຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "16px",
                }}
              >
                <svg width="150" height="100">
                  <path
                    d="M 20,80 L 120,80 L 100,20 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="80"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="60" y="95" fontSize="12">
                    {"10 cm (ພື້ນ)"}
                  </text>
                  <text x="105" y="50" fontSize="12" fill="red">
                    {"6 cm"}
                  </text>
                  <text x="40" y="45" fontSize="11" fill="#888">
                    {"7 cm (ຂ້າງສະຫຼຽງ)"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ເນື້ອທີ່ ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm²"}</span>
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "🌾 ດິນນາຕອນໜຶ່ງເປັນຮູບຄາງໝູ ທີ່ມີຂ້າງເທິງຍາວ 20 m, ຂ້າງລຸ່ມຍາວ 30 m ແລະ ມີໄລຍະຫ່າງລະຫວ່າງສອງຂ້າງນີ້ (ລວງສູງ) ແມ່ນ 15 m. ດິນນາຕອນນີ້ມີເນື້ອທີ່ທັງໝົດຈັກ m²?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
            <span key="1">
              {
                "(1) 20 cm² (8 × 5 ÷ 2), (2) 60 cm² (10 × 6), (3) 30 cm² ((4 + 8) × 5 ÷ 2), (4) 24 cm² (6 × 8 ÷ 2)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "30 cm² (ຍ້ອນເອົາພື້ນ 10 cm × ລວງສູງ 6 cm ÷ 2 = 30. ຂ້າງສະຫຼຽງ 7 cm ບໍ່ນຳມາຄິດໄລ່)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"375 m² (ຍ້ອນ ((20 + 30) × 15) ÷ 2 = 50 × 15 ÷ 2 = 375)"}
            </span>,
          ],
        },
      ],
      advice:
        "ສູດເນື້ອທີ່ແຕ່ລະຮູບມີເງື່ອນໄຂພິເສດສະເພາະ! ການຈື່ຈຳວ່າຕົວເລກໃດຕ້ອງເອົາມາໃຊ້ ແລະ ຕົວເລກໃດຄວນຫຼີກເວັ້ນ ຈະຊ່ວຍໃຫ້ເຮົາຄິດໄລ່ໄດ້ຢ່າງຖືກຕ້ອງສະເໝີ.",
    },
  };
