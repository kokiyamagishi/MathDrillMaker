import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit9Data: UnitData = {
    
    unitNumber: 9,
    unitTitle: "ການຕັ້ງສາກ, ຂະໜານ ແລະ ຮູບສີ່ແຈ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບເສັ້ນຕັ້ງສາກ, ເສັ້ນຂະໜານ ແລະ ຄຸນລັກສະນະຂອງຮູບສີ່ແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 84-98",
    keyPoints: {
      hint: {
        text: "ຮູບຄາງໝູມີ 1 ຄູ່ຂ້າງຂະໜານກັນ. ຮູບສີ່ແຈຂ້າງຂະໜານມີ 2 ຄູ່ຂ້າງຂະໜານກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງເທົ່າກັນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບສີ່ແຈປະເພດຕ່າງໆ"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Trapezoid */}
            <div
              style={{
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                width: "100px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບຄາງໝູ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 30,20 L 90,20 L 110,60 L 10,60 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "22px" , whiteSpace: "nowrap"}}>{"ມີ 1 ຄູ່ຂ້າງຂະໜານກັນ"}</span>
            </div>

            {/* Parallelogram */}
            <div
              style={{
                border: "2px solid #2196F3",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                width: "100px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>
                {"ຮູບສີ່ແຈຂ້າງຂະໜານ"}
              </strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 30,20 L 110,20 L 90,60 L 10,60 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "22px" , whiteSpace: "nowrap"}}>{"ມີ 2 ຄູ່ຂ້າງຂະໜານກັນ"}</span>
            </div>

            {/* Rhombus */}
            <div
              style={{
                border: "2px solid #9C27B0",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#F3E5F5",
                width: "100px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບສີ່ແຈລີ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 60,10 L 100,40 L 60,70 L 20,40 Z"
                    fill="rgba(156, 39, 176, 0.2)"
                    stroke="#9C27B0"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "22px" , whiteSpace: "nowrap"}}>{"ມີ 4 ຂ້າງຍາວເທົ່າກັນ"}</span>
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
              {
                "ຈົ່ງບອກຊື່ຂອງຮູບສີ່ແຈຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ (ຮູບຄາງໝູ, ຮູບສີ່ແຈຂ້າງຂະໜານ, ຮູບສີ່ແຈລີ): "
              }{" "}
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
                    d="M 30,20 L 100,20 L 80,60 L 10,60 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
                  <path
                    d="M 60,10 L 95,40 L 60,70 L 25,40 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບສີ່ແຈ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
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
                  {"(3) ຮູບສີ່ແຈທີ່ມີຂ້າງຂະໜານກັນພຽງແຕ່ 1 ຄູ່ ເອີ້ນວ່າ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
              </div>
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
                    "(4) ຮູບສີ່ແຈທີ່ມີ 2 ຄູ່ຂ້າງຂະໜານກັນ ແລະ ມີ 4 ຂ້າງຍາວເທົ່າກັນ ເອີ້ນວ່າ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "ຮູບສີ່ແຈຂ້າງຂະໜານມີຂ້າງກົງກັນຂ້າມຍາວເທົ່າກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງຍາວເທົ່າກັນທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບສີ່ແຈຂ້າງຂະໜານລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 30,20 L 120,20 L 100,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="75" y="15" fontSize="14" textAnchor="middle">{"6 cm"}</text>
                    <text x="120" y="50" fontSize="14">{"4 cm"}</text>
                    <text x="50" y="85" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ຂ້າງ ? ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
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
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບສີ່ແຈລີລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 75,10 L 115,50 L 75,90 L 35,50 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="105" y="30" fontSize="14">{"5 cm"}</text>
                    <text x="45" y="80" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ຂ້າງ ? ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                    <span>{"cm"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈຂ້າງຂະໜານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💡 ຮູບສີ່ແຈຂ້າງຂະໜານມີຄຸນລັກສະນະຄື: ມຸມກົງກັນຂ້າມມີຂະໜາດເທົ່າກັນ."}
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <svg width="180" height="100">
                  <path d="M 30,20 L 130,20 L 110,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 25,70 A 15,15 0 0,0 20,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="28" y="60" fill="#2196F3" fontSize="14">{"70°"}</text>
                  <path d="M 115,20 A 15,15 0 0,0 120,32" fill="none" stroke="red" strokeWidth="2" />
                  <text x="105" y="35" fill="red" fontSize="16" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບຄາງໝູລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💡 ໃນຮູບຄາງໝູ, ຜົນບວກຂອງສອງມຸມທີ່ຢູ່ຂ້າງດຽວກັນລະຫວ່າງສອງເສັ້ນຂະໜານແມ່ນເທົ່າກັບ 180°."}
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <svg width="180" height="100">
                  <path d="M 40,20 L 140,20 L 160,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 23,70 A 15,15 0 0,0 18,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="25" y="60" fill="#2196F3" fontSize="14">{"110°"}</text>
                  <path d="M 45,20 A 15,15 0 0,0 52,32" fill="none" stroke="red" strokeWidth="2" />
                  <text x="42" y="38" fill="red" fontSize="16" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
            <span key="1">{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານ, (2) ຮູບສີ່ແຈລີ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) ຮູບຄາງໝູ, (4) ຮູບສີ່ແຈລີ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">
              {"(1) 6 cm (ຂ້າງກົງກັນຂ້າມ), (2) 5 cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"70° (ມຸມກົງກັນຂ້າມເທົ່າກັນ)"}</span>],
        },
      ],
      advice:
        "ຮູບສີ່ແຈແຕ່ລະປະເພດມີຄຸນລັກສະນະສະເພາະຂອງມັນ! ການຈົດຈຳຄວາມຍາວຂ້າງ ແລະ ຂະໜາດມຸມຈະຊ່ວຍໃຫ້ແກ້ເລກໄດ້ງ່າຍຂຶ້ນ.",
    },
  };
