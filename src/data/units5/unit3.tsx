import React from "react";
import { UnitData } from "../units2";

export const unit3Data: UnitData = {
    unitNumber: 3,
    unitTitle: "ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອນສາກ",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາບໍລິມາດຂອງຮູບກ່ອງສາກ, ຮູບກ້ອນສາກ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍບໍລິມາດ (cm³, m³)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 30-37",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດບໍລິມາດ"}
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
                {"ຮູບກ່ອງສາກ"}
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
                {"ຮູບກ້ອນສາກ"}
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
            {"2. ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍ"}
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
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                padding: "8px 16px",
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
                  {"(1) ຮູບກ່ອງສາກທີ່ມີລວງກວ້າງ 3 cm, ລວງຍາວ 4 cm ແລະ ລວງສູງ 5 cm. ບໍລິມາດແມ່ນ"}
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
                  {"(2) ຮູບກ້ອນສາກທີ່ມີຄວາມຍາວຂ້າງ 4 cm. ບໍລິມາດແມ່ນ"}
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
              {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຊົງລະດັບໃຫຍ່ຕໍ່ໄປນີ້: "}{" "}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}
              >
                <span>{"(1) ສະລອຍນ້ຳຮູບກ່ອງສາກ ກວ້າງ 10 m, ຍາວ 5 m, ເລິກ 2 m ຈະມີບໍລິມາດ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}
              >
                <span>{"(2) ຕູ້ຄອນເທນເນີຮູບກ້ອນສາກ ທີ່ມີຄວາມຍາວຂ້າງລະ 2 m ຈະມີບໍລິມາດ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ບໍລິມາດນ້ຳທາງໃນແມ່ນເອົາ ຂະໜາດທາງໃນ (ລວງກວ້າງ, ລວງຍາວ, ລວງເລິກ) ມາຄູນກັນ, ສ່ວນຄວາມເລິກແມ່ນ ບໍລິມາດຫານໃຫ້ເນື້ອທີ່ກົ້ນອ່າງເດີ້!",
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
                  {"🥛 ມີກ່ອງໃສ່ນ້ຳຮູບກ່ອງສາກຂະໜາດທາງໃນມີ ລວງກວ້າງ 10 cm, ລວງຍາວ 12 cm ແລະ ລວງເລິກ 8 cm. ຖ້າເທນ້ຳໃສ່ເຕັມກ່ອງ ຈະມີນ້ຳຈັກ mL?"}
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
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຊອກຫາລວງສູງ (ເລິກ) ຂອງນ້ຳ: "}{" "}
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
                  {"🐳 ຖັງນ້ຳຮູບກ່ອງສາກໜຶ່ງທີ່ມີເນື້ອທີ່ກົ້ນຖັງ 50 cm². ຖ້າທອກນ້ຳທີ່ມີບໍລິມາດ 250 cm³ ໃສ່, ລະດັບນ້ຳໃນຖັງຈະສູງຂຶ້ນຈັກ cm?"}
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ ແລະ ປ່ຽນຫົວໜ່ວຍບໍລິມາດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
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
                <span>{"(1) 2 m³ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "130px", height: "40px" }}></span>
                <span>{"cm³"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 3,000,000 cm³ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m³"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບກ່ອງສາກ ກວ້າງ 6 cm, ຍາວ 8 cm, ສູງ 10 cm. ບໍລິມາດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm³"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຮູບກ້ອນສາກ ທີ່ມີຄວາມຍາວຂ້າງລະ 6 cm. ບໍລິມາດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm³"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <span>{"(1) ອ່າງລ້ຽງປາກວ້າງ 20 cm, ຍາວ 30 cm ແລະ ສູງ 15 cm. ຖ້າໃສ່ນ້ຳໃຫ້ເລິກ 10 cm, ບໍລິມາດນ້ຳຈະມີຈັກ cm³?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm³"}</span>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <span>{"(2) ກ່ອງຮູບກ້ອນສາກ ທີ່ມີຂ້າງຍາວ 50 cm. ບໍລິມາດຂອງກ່ອງນີ້ແມ່ນຈັກ cm³?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
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
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u3-ans-1-1">{"(1) 60 cm³ (3 × 4 × 5 = 60)"}</span>,
            <span key="u3-ans-1-2">{"(2) 64 cm³ (4 × 4 × 4 = 64)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u3-ans-2-1">{"(1) 100 m³ (10 × 5 × 2 = 100)"}</span>,
            <span key="u3-ans-2-2">{"(2) 8 m³ (2 × 2 × 2 = 8)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u3-ans-t1-1">{"960 mL (ຍ້ອນ 10 × 12 × 8 = 960 cm³ = 960 mL)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u3-ans-t2-1">{"5 cm (ຍ້ອນ 250 ÷ 50 = 5)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u3-ans-s1-1">{"(1) 2,000,000 cm³"}</span>,
            <span key="u3-ans-s1-2">{"(2) 3 m³"}</span>,
            <span key="u3-ans-s1-3">{"(3) 480 cm³ (6 × 8 × 10 = 480)"}</span>,
            <span key="u3-ans-s1-4">{"(4) 216 cm³ (6 × 6 × 6 = 216)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u3-ans-s2-1">{"(1) 6,000 cm³ (ຍ້ອນ 20 × 30 × 10 = 6,000)"}</span>,
            <span key="u3-ans-s2-2">{"(2) 125,000 cm³ (ຍ້ອນ 50 × 50 × 50 = 125,000)"}</span>,
          ],
        },
      ],
      advice:
        "ບໍລິມາດແລະຄວາມຈຸນ້ຳແມ່ນມີຄວາມສຳພັນກັນຢ່າງສະໜິດແໜ້ນ! ຈື່ໄວ້ວ່າ 1 cm³ = 1 mL ແລະ 1 m³ = 1,000,000 cm³ = 1,000 L ຈະຊ່ວຍໃຫ້ປ່ຽນຫົວໜ່ວຍໄດ້ງ່າຍສະເໝີ.",
    },
  };
