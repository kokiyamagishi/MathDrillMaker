import React from "react";
import { UnitData } from "../units2";

export const unit3Data: UnitData = {
    unitNumber: 3,
    unitTitle: "ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອນສາກ",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາບໍລິມາດຂອງຮູບກ່ອງສາກ, ຮູບກ້ອນສາກ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍບໍລິມາດ (cm³, m³)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 30-37",
    keyPoints: {
      hint: {
        text: "ບໍລິມາດແມ່ນຂະໜາດຂອງເນື້ອທີ່ວ່າງໃນສາມມິຕິ! ຈື່ສູດ: ບໍລິມາດຮູບກ່ອງສາກ = ກວ້າງ × ຍາວ × ສູງ ແລະ ຮູບກ້ອນສາກ = ຂ້າງ × ຂ້າງ × ຂ້າງ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດບໍລິມາດ (Volume Formulas)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Cuboid Volume */}
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
                {"ຮູບກ່ອງສາກ (Cuboid)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="140" height="90">
                  <path
                    d="M 10,50 L 80,50 L 80,80 L 10,80 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <path
                    d="M 80,50 L 110,30 L 110,60 L 80,80 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <path
                    d="M 10,50 L 40,30 L 110,30 L 80,50 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text x="30" y="75" style={{ fontSize: "22px" }}>
                    {"ກວ້າງ"}
                  </text>
                  <text x="98" y="75" style={{ fontSize: "22px" }}>
                    {"ຍາວ"}
                  </text>
                  <text x="115" y="45" style={{ fontSize: "22px" }}>
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"ກວ້າງ × ຍາວ × ສູງ"}
              </strong>
            </div>

            {/* Cube Volume */}
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
                {"ຮູບກ້ອນສາກ (Cube)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="100" height="90">
                  <rect
                    x="10"
                    y="30"
                    width="50"
                    height="50"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <path
                    d="M 60,30 L 90,10 L 90,60 L 60,80"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <path
                    d="M 10,30 L 40,10 L 90,10"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="80"
                    x2="90"
                    y2="60"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <text x="20" y="75" style={{ fontSize: "22px" }}>
                    {"ຂ້າງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"ຂ້າງ × ຂ້າງ × ຂ້າງ"}
              </strong>
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍ (Unit Relations)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>{"• 1 cm³ = 1 mL (ມີລີລິດ) = 0.001 L"}</div>
            <div>
              {"• 1 m³ = 1,000,000 cm³ = 1,000 L (ລິດ) = 1 kL (ກິໂລລິດ)"}
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
              {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຊົງລຸ່ມນີ້: "}{" "}
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
                  {
                    "(1) ຮູບກ່ອງສາກທີ່ມີລວງກວ້າງ 4 cm, ລວງຍາວ 5 cm ແລະ ລວງສູງ 6 cm. ບໍລິມາດແມ່ນ"
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
                  <span>{"cm³"}</span>
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
                  {"(2) ຮູບກ້ອນສາກທີ່ມີຄວາມຍາວຂ້າງ 5 cm. ບໍລິມາດແມ່ນ"}
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
                  <span>{"cm³"}</span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍບໍລິມາດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
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
                <span>{"(3) 2 m³ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm³"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 5,000 cm³ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"L (ລິດ)"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ບໍລິມາດນ້ຳທາງໃນແມ່ນເອົາ ຂະໜາດທາງໃນ (ລວງກວ້າງ, ລວງຍາວ, ລວງເລິກ) ມາຄູນກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
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
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {
                    "🥛 ມີກ່ອງໃສ່ນ້ຳຮູບກ່ອງສາກຂະໜາດທາງໃນມີ ລວງກວ້າງ 10 cm, ລວງຍາວ 12 cm ແລະ ລວງເລິກ 8 cm. ຖ້າເທນ້ຳໃສ່ເຕັມກ່ອງ ຈະມີນ້ຳຈັກ mL?"
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການປຽບທຽບຄວາມຈຸນ້ຳ: "}{" "}
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
                  "🐳 ມີອ່າງລ້ຽງປາຮູບກ່ອງສາກ ທີ່ມີລວງກວ້າງ 2 m, ລວງຍາວ 3 m ແລະ ລວງສູງ 1.5 m. ອ່າງລ້ຽງປານີ້ສາມາດບັນຈຸນ້ຳໄດ້ຫຼາຍທີ່ສຸດຈັກ L (ລິດ)?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
          answers: [
            <span key="1">
              {"(1) 120 cm³ (4 × 5 × 6), (2) 125 cm³ (5 × 5 × 5)"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {
                "(3) 2,000,000 cm³ (2 × 1,000,000), (4) 5 L (ຍ້ອນ 5000 cm³ = 5000 mL = 5 L)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">
              {"960 mL (ຍ້ອນ 10 × 12 × 8 = 960 cm³ = 960 mL)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">
              {"9,000 L (ຍ້ອນ 2 × 3 × 1.5 = 9 m³ = 9,000,000 cm³ = 9,000 L)"}
            </span>,
          ],
        },
      ],
      advice:
        "ບໍລິມາດແລະຄວາມຈຸນ້ຳແມ່ນມີຄວາມສຳພັນກັນຢ່າງສະໜິດແໜ້ນ! ຈື່ໄວ້ວ່າ 1 cm³ = 1 mL ແລະ 1 m³ = 1,000,000 cm³ = 1,000 L ຈະຊ່ວຍໃຫ້ປ່ຽນຫົວໜ່ວຍໄດ້ງ່າຍສະເໝີ.",
    },
  };
