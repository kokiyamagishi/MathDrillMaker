import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit7Data: UnitData = {
    
    unitNumber: 7,
    unitTitle: "ຈຳນວນທົດສະນິຍົມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຈຳນວນທົດສະນິຍົມ ແລະ ການວັດແທກດ້ວຍເລກທົດສະນິຍົມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 64-76",
    keyPoints: {
      hint: {
        text: "0.1 ແມ່ນ 1 ສ່ວນ 10 ຂອງ 1. ຖ້າມີ 0.1 ຢູ່ 10 ເທື່ອ ຈະເທົ່າກັບ 1 ເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນທົດສະນິຍົມ (Decimals)"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {/* Visual Beaker */}
            <div
              style={{
                flex: "1 1 300px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {"ຕົວຢ່າງ: ປະລິມານນ້ຳ 1.3 L"}
              </div>
              <svg width="120" height="150" viewBox="0 0 120 150">
                {/* 1st Beaker (Full) */}
                <rect
                  x="10"
                  y="10"
                  width="40"
                  height="120"
                  fill="#FFF"
                  stroke="#333"
                  strokeWidth="2"
                />
                <rect x="10" y="10" width="40" height="120" fill="#2196F3" />
                <text
                  x="30"
                  y="70"
                  fill="#FFF"
                  fontSize="18"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {"1 L"}
                </text>

                {/* 2nd Beaker (0.3 L Filled) */}
                <rect
                  x="70"
                  y="10"
                  width="40"
                  height="120"
                  fill="#FFF"
                  stroke="#333"
                  strokeWidth="2"
                />
                {/* 10 Division ticks */}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={i}
                    x1="70"
                    y1={130 - i * 12}
                    x2="80"
                    y2={130 - i * 12}
                    stroke="#333"
                    strokeWidth="1"
                  />
                ))}
                {/* Liquid 3 divisions high (0.3L) */}
                <rect x="70" y="94" width="40" height="36" fill="#2196F3" />
                <text
                  x="90"
                  y="145"
                  fill="#333"
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {"0.3 L"}
                </text>
              </svg>
              <p style={{ fontSize: "22px", margin: "12px 0 0 0" }}>
                {"1 L ກັບ 0.3 L ລວມກັນເປັນ "}
                <strong style={{ color: "#E91E63" }}>{"1.3 L"}</strong>
              </p>
            </div>

            {/* Decimal Place Value */}
            <div
              style={{
                flex: "1 1 300px",
                padding: "16px",
                backgroundColor: "#FFF",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: "0 0 16px 0",
                  color: "#1976D2",
                }}
              >
                {"ໂຄງປະກອບຄ່າປະຈຳຫຼັກ:"}
              </p>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຫຼັກໜ່ວຍ"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຈຸດ"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຫຼັກທົດສະນິຍົມທີ 1"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "24px", fontWeight: "bold" }}>
                    <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                      {"1"}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        color: "red",
                      }}
                    >
                      {"."}
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                      {"3"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul
                style={{
                  fontSize: "22px",
                  margin: "16px 0 0 0",
                  paddingLeft: "20px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  {
                    "ຫຼັກທົດສະນິຍົມທີ 1 ແມ່ນຕຳແໜ່ງທີ່ສະແດງເຖິງສ່ວນສິບ (1/10) ຂອງ 1."
                  }
                </li>
                <li>{"ຈຸດ '.' ເອີ້ນວ່າ ຈຸດທົດສະນິຍົມ."}</li>
              </ul>
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
              {"ຈົ່ງບອກປະລິມານນ້ຳຕໍ່ໄປນີ້ເປັນເລກທົດສະນິຍົມ: "}{" "}
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
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <svg width="120" height="100" viewBox="0 0 120 100">
                  <rect
                    x="20"
                    y="10"
                    width="40"
                    height="80"
                    fill="#FFF"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1="20"
                      y1={90 - i * 8}
                      x2="30"
                      y2={90 - i * 8}
                      stroke="#333"
                    />
                  ))}
                  <rect x="20" y="34" width="40" height="56" fill="#2196F3" />
                  <text x="75" y="55" fontSize="16">
                    {"1 L"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຕອບ:"}</span>
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

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <svg width="70" height="100" viewBox="0 0 70 100">
                    <rect
                      x="10"
                      y="10"
                      width="40"
                      height="80"
                      fill="#FFF"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <rect x="10" y="10" width="40" height="80" fill="#2196F3" />
                  </svg>
                  <svg width="70" height="100" viewBox="0 0 70 100">
                    <rect
                      x="10"
                      y="10"
                      width="40"
                      height="80"
                      fill="#FFF"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={i}
                        x1="10"
                        y1={90 - i * 8}
                        x2="20"
                        y2={90 - i * 8}
                        stroke="#333"
                      />
                    ))}
                    <rect x="10" y="58" width="40" height="32" fill="#2196F3" />
                  </svg>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຕອບ:"}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) ຈຳນວນທີ່ປະກອບດ້ວຍ 0.1 ຢູ່ 18 ເທື່ອ ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) ຈຳນວນທີ່ປະກອບດ້ວຍ 0.1 ຢູ່ 25 ເທື່ອ ແມ່ນ"}</span>
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
    ],
    challengeProblems: {
      hintText: "1 ຂີດໝາຍນ້ອຍໆ ຢູ່ເທິງເສັ້ນຈຳນວນແມ່ນເທົ່າກັບ 0.1 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນລຸ່ມນີ້ ແລ້ວຂຽນໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  marginTop: "20px",
                }}
              >
                {/* Decimal Number Line */}
                <div
                  className="math-illustration"
                  style={{
                    position: "relative",
                    height: "50px",
                    width: "100%",
                    maxWidth: "500px",
                    borderBottom: "4px solid #333",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "0",
                      width: "2px",
                      height: "15px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: "-10px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"0"}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      width: "2px",
                      height: "15px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: "calc(50% - 10px)",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"1"}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "0",
                      width: "2px",
                      height: "15px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      right: "-10px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"2"}
                  </div>

                  {/* division ticks */}
                  {[...Array(20)].map((_, i) => {
                    if (i === 10) return null;
                    return (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: i * 5 + "%",
                          width: "1px",
                          height: i % 5 === 0 ? "10px" : "6px",
                          backgroundColor: "#666",
                        }}
                      ></div>
                    );
                  })}

                  {/* Arrows */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "38%",
                      transform: "translateX(-50%)",
                      color: "#E91E63",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"↓ (1)"}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "73%",
                      transform: "translateX(-50%)",
                      color: "#E91E63",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"↓ (2)"}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span>{"(1) ແມ່ນ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                      }}
                    ></span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span>{"(2) ແມ່ນ"}</span>
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
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  fontSize: "22px",
                  padding: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(3) 0.8"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"0.5"}</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(4) 1.2"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"1.5"}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "22px",
                padding: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 0.4 + 0.3 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 1.5 - 0.7 ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
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
                  "📘 ນາງ ມີນາ ມີນ້ຳສົ້ມ 0.6 L ແລະ ນາງ ອາລິນ ມີນ້ຳສົ້ມ 0.8 L. ຖ້າເອົານ້ຳສົ້ມຂອງທັງສອງຄົນມາເທໃສ່ກັນ ຈະມີນ້ຳສົ້ມທັງໝົດຈັກ L?"
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
                <span>{"L"}</span>
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
          answers: [<span key="1">{"(1) 0.7 L, (2) 1.4 L"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 1.8, (4) 2.5"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 0.7, (2) 1.4"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"(3) >, (4) <"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"(1) 0.7, (2) 0.8"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"1.4 L (ຍ້ອນ 0.6 + 0.8 = 1.4)"}</span>],
        },
      ],
      advice:
        "ຫຼັກທົດສະນິຍົມທີ 1 ບວກລົບກັນໄດ້ຄືກັບເລກທຳມະດາ, ແຕ່ຢ່າລືມຂຽນຈຸດທົດສະນິຍົມໃຫ້ຖືກຫຼັກເດີ!",
    },
  };
