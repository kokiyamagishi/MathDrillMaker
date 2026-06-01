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
            {"1. ສູດເນື້ອທີ່ຮູບເລຂາຄະນິດ"}
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
                {"ຮູບສາມແຈ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="180" height="120">
                  <path
                    d="M 30,105 L 150,105 L 120,30 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <line
                    x1="120"
                    y1="30"
                    x2="120"
                    y2="105"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="75" y="118" style={{ fontSize: "22px" }}>
                    {"ພື້ນ"}
                  </text>
                  <text x="125" y="65" style={{ fontSize: "22px" }} fill="red">
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
                {"ຮູບສີ່ແຈຂ້າງຂະໜານ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="180" height="120">
                  <path
                    d="M 30,105 L 135,105 L 150,30 L 45,30 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <line
                    x1="45"
                    y1="30"
                    x2="45"
                    y2="105"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="82" y="118" style={{ fontSize: "22px" }}>
                    {"ພື້ນ"}
                  </text>
                  <text x="52" y="65" style={{ fontSize: "22px" }} fill="red">
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
                {"ຮູບຄາງໝູ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="180" height="120">
                  <path
                    d="M 30,105 L 150,105 L 120,30 L 60,30 Z"
                    fill="rgba(255, 179, 0, 0.2)"
                    stroke="#FFB300"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="30"
                    x2="60"
                    y2="105"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="75" y="22" style={{ fontSize: "16px" }}>
                    {"ຂ້າງເທິງ"}
                  </text>
                  <text x="75" y="118" style={{ fontSize: "16px" }}>
                    {"ຂ້າງລຸ່ມ"}
                  </text>
                  <text x="68" y="65" style={{ fontSize: "16px" }} fill="red">
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
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບຊົງຕໍ່ໄປນີ້ (ສາມແຈ ແລະ ຂ້າງຂະໜານ): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
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
                <span>{"(1) ຮູບສາມແຈທີ່ມີພື້ນ 8 cm ແລະ ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນຈັກ cm²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນ 10 cm ແລະ ລວງສູງ 6 cm. ເນື້ອທີ່ແມ່ນຈັກ cm²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບຊົງຕໍ່ໄປນີ້ (ຄາງໝູ ແລະ ສີ່ແຈລີ): "}{" "}
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
                <span>{"(1) ຮູບຄາງໝູທີ່ມີຂ້າງເທິງ 4 cm, ຂ້າງລຸ່ມ 8 cm ແລະ ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນຈັກ cm²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ຮູບສີ່ແຈລີທີ່ມີເສັ້ນເນັ່ງຈອມຍາວ 6 cm ແລະ 8 cm. ເນື້ອທີ່ແມ່ນຈັກ cm²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສາມແຈ (ມີຕົວເລກຫຼອກ): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "8px 16px",
                }}
              >
                <svg width="225" height="150">
                  <path
                    d="M 30,120 L 180,120 L 150,30 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="30"
                    x2="150"
                    y2="120"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="90" y="140" style={{ fontSize: "16px" }}>
                    {"10 cm (ພື້ນ)"}
                  </text>
                  <text x="158" y="75" style={{ fontSize: "16px" }} fill="red">
                    {"6 cm"}
                  </text>
                  <text x="60" y="68" style={{ fontSize: "15px" }} fill="#888">
                    {"7 cm (ສະຫຼຽງ)"}
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
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານ (ມີຕົວເລກຫຼອກ): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "8px 16px",
                }}
              >
                <svg width="270" height="150">
                  <path
                    d="M 30,120 L 165,120 L 195,30 L 60,30 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="30"
                    x2="60"
                    y2="120"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="75" y="140" style={{ fontSize: "16px" }}>
                    {"12 cm (ພື້ນ)"}
                  </text>
                  <text x="68" y="75" style={{ fontSize: "16px" }} fill="red">
                    {"8 cm"}
                  </text>
                  <text x="145" y="80" style={{ fontSize: "15px" }} fill="#888">
                    {"9 cm (ສະຫຼຽງ)"}
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
              {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບເລຂາຄະນິດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
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
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຮູບສາມແຈທີ່ມີພື້ນ 12 cm ແລະ ລວງສູງ 4 cm ຈະມີເນື້ອທີ່"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນ 7 cm ແລະ ລວງສູງ 8 cm ຈະມີເນື້ອທີ່"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາເນື້ອທີ່ຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) 🌾 ດິນນາຕອນໜຶ່ງເປັນຮູບຄາງໝູ ທີ່ມີຂ້າງເທິງຍາວ 20 m, ຂ້າງລຸ່ມຍາວ 30 m ແລະ ມີລວງສູງແມ່ນ 15 m. ດິນນາຕອນນີ້ມີເນື້ອທີ່ທັງໝົດຈັກ m²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"m²"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ✂️ ເຈ້ຍຮູບສາມແຈໃບໜຶ່ງມີພື້ນ 15 cm ແລະ ລວງສູງ 10 cm. ຖ້າຕັດຮູບສາມແຈນ້ອຍທີ່ມີພື້ນ 5 cm ແລະ ລວງສູງ 4 cm ອອກ, ເນື້ອທີ່ເຈ້ຍທີ່ເຫຼືອແມ່ນຈັກ cm²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
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
            <span key="u9-ans-1-1">{"(1) 20 cm² (8 × 5 ÷ 2 = 20)"}</span>,
            <span key="u9-ans-1-2">{"(2) 60 cm² (10 × 6 = 60)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u9-ans-2-1">{"(1) 30 cm² ((4 + 8) × 5 ÷ 2 = 30)"}</span>,
            <span key="u9-ans-2-2">{"(2) 24 cm² (6 × 8 ÷ 2 = 24)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u9-ans-t1-1">{"30 cm² (ຍ້ອນເອົາພື້ນ 10 cm × ລວງສູງ 6 cm ÷ 2 = 30, ຂ້າງສະຫຼຽງ 7 cm ບໍ່ນຳມາໃຊ້)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u9-ans-t2-1">{"96 cm² (ຍ້ອນເອົາພື້ນ 12 cm × ລວງສູງ 8 cm = 96, ຂ້າງສະຫຼຽງ 9 cm ບໍ່ນຳມາໃຊ້)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u9-ans-s1-1">{"(1) 24 cm² (12 × 4 ÷ 2 = 24)"}</span>,
            <span key="u9-ans-s1-2">{"(2) 56 cm² (7 × 8 = 56)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u9-ans-s2-1">{"(1) 375 m² (ຍ້ອນ ((20 + 30) × 15) ÷ 2 = 375)"}</span>,
            <span key="u9-ans-s2-2">{"(2) 65 cm² (ຍ້ອນ ເນື້ອທີ່ທັງໝົດ (15 × 10 ÷ 2 = 75) ລົບອອກເນື້ອທີ່ສ່ວນຕັດ (5 × 4 ÷ 2 = 10) ຈະເຫຼືອ 65)"}</span>,
          ],
        },
      ],
      advice:
        "ສູດເນື້ອທີ່ແຕ່ລະຮູບມີເງື່ອນໄຂພິເສດສະເພາະ! ການຈື່ຈຳວ່າຕົວເລກໃດຕ້ອງເອົາມາໃຊ້ ແລະ ຕົວເລກໃດຄວນຫຼີກເວັ້ນ ຈະຊ່ວຍໃຫ້ເຮົາຄິດໄລ່ໄດ້ຢ່າງຖືກຕ້ອງສະեໝີ.",
    },
  };
