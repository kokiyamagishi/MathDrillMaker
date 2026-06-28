import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit12Data: UnitData = {
    
    unitNumber: 12,
    unitTitle: "ຄຸນລັກສະນະມຸມໃນຂອງຮູບເລຂາຄະນິດ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະ ແລະ ຜົນບວກຂອງມຸມໃນຂອງຮູບສາມແຈ ແລະ ຮູບສີ່ແຈ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 110-115",
    keyPoints: {
      hint: {
        text: "ຜົນບວກຂອງມຸມໃນຂອງຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ ແລະ ຮູບສີ່ແຈແມ່ນ 360 ອົງສາສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຜົນບວກຂອງມຸມໃນຮູບເລຂາຄະນິດ"}
          </h3>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* Triangle interior angles */}
            <div
              style={{
                flex: "1 1 250px",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບສາມແຈ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="90">
                  <path
                    d="M 60,10 L 110,80 L 10,80 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text x="60" y="35" fontSize="12" fill="#333">
                    {"a"}
                  </text>
                  <text x="30" y="72" fontSize="12" fill="#333">
                    {"b"}
                  </text>
                  <text x="90" y="72" fontSize="12" fill="#333">
                    {"c"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px", color: "#1565C0" }}>
                {"a + b + c = 180°"}
              </strong>
            </div>

            {/* Quadrilateral interior angles */}
            <div
              style={{
                flex: "1 1 250px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບສີ່ແຈ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="90">
                  <path
                    d="M 30,15 L 100,15 L 110,75 L 10,75 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  {/* Diagonal line split into 2 triangles */}
                  <path
                    d="M 30,15 L 110,75"
                    stroke="#999"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="35" y="32" fontSize="12">
                    {"a"}
                  </text>
                  <text x="85" y="32" fontSize="12">
                    {"b"}
                  </text>
                  <text x="95" y="65" fontSize="12">
                    {"c"}
                  </text>
                  <text x="25" y="65" fontSize="12">
                    {"d"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"a + b + c + d = 360°"}
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(1)"}
                </span>
                <svg width="120" height="80">
                  <path
                    d="M 60,10 L 110,70 L 10,70 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <text x="30" y="65" fontSize="12">
                    {"60°"}
                  </text>
                  <text x="80" y="65" fontSize="12">
                    {"70°"}
                  </text>
                  <text
                    x="60"
                    y="30"
                    fontSize="14"
                    fill="red"
                    fontWeight="bold"
                  >
                    {"?"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ມຸມ ? ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(2)"}
                </span>
                <svg width="120" height="80">
                  {/* Right-angled triangle */}
                  <path
                    d="M 20,10 L 100,70 L 20,70 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {/* Right angle indicator */}
                  <path
                    d="M 20,60 L 30,60 L 30,70"
                    fill="none"
                    stroke="#333"
                    strokeWidth="1"
                  />
                  <text x="80" y="65" fontSize="12">
                    {"35°"}
                  </text>
                  <text
                    x="30"
                    y="30"
                    fontSize="14"
                    fill="red"
                    fontWeight="bold"
                  >
                    {"?"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ມຸມ ? ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(3) ຮູບສີ່ແຈທີ່ມີ 3 ມຸມເທົ່າກັບ 90°, 85°, 105°. ມຸມທີ 4 ແມ່ນ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ມຸມພາຍໃນຂອງຮູບສາມແຈສະເໝີແມ່ນເທົ່າກັບ 60 ອົງສາໃນທຸກໆມຸມເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <div>
                  {
                    "(1) ຖ້າຕັດຮູບສີ່ແຈອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ ຈະໄດ້ຮູບສາມແຈຈັກຮູບ?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                {"ຈົ່ງຊອກຫາຜົນບວກມຸມໃນຂອງຮູບຫ້າແຈລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <div>
                  {
                    "(2) ຮູບຫ້າແຈ ສາມາດແບ່ງອອກເປັນຮູບສາມແຈໄດ້ 3 ຮູບ. ຜົນບວກມຸມໃນທັງໝົດແມ່ນຈັກອົງສາ?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
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
                  d="M 20,20 L 130,20 L 110,80 L 40,80 Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="45" y="35" fontSize="12">
                  {"110°"}
                </text>
                <text x="100" y="35" fontSize="12">
                  {"120°"}
                </text>
                <text x="45" y="75" fontSize="12">
                  {"65°"}
                </text>
                <text x="90" y="75" fontSize="14" fill="red" fontWeight="bold">
                  {"?"}
                </text>
              </svg>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span>{"ມຸມ ? ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
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
                  d="M 75,15 L 130,85 L 20,85 Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="35" y="80" fontSize="12">
                  {"45°"}
                </text>
                <text x="110" y="80" fontSize="12">
                  {"55°"}
                </text>
                <text x="70" y="40" fontSize="14" fill="red" fontWeight="bold">
                  {"?"}
                </text>
              </svg>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span>{"ມຸມ ? ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
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
              {"(1) 50° (180 - (60+70)), (2) 55° (180 - (90+35))"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 80° (360 - (90+85+105))"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">
              {
                "ໄດ້ຮູບສາມແຈ 2 ຮູບ (ເຊິ່ງເປັນສາເຫດທີ່ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 180 × 2 = 360°)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"65° (360 - (110+120+65))"}</span>],
        },
      ],
      advice:
        "ຜົນບວກມຸມໃນແມ່ນຄວາມຮູ້ພື້ນຖານທີ່ສຳຄັນຫຼາຍ! ຖ້າຈື່ຜົນບວກ 180° ແລະ 360° ຈະສາມາດຊອກຫາຂະໜາດມຸມທີ່ເຫຼືອໄດ້ສະເໝີ.",
    },
  };
