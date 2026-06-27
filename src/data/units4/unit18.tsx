import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit18Data: UnitData = {
    
    unitNumber: 18,
    unitTitle: "ຮູບກ້ອງສາກ ແລະ ຮູບກ່ອງສາກ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມແຕກຕ່າງລະຫວ່າງຮູບກ້ອງສາກ ແລະ ຮູບກ່ອງສາກ, ຮຽນຮູ້ອົງປະກອບ, ເສັ້ນສະແດງຄວາມສຳພັນ (ຕັ້ງສາກ ແລະ ຂະໜານ) ແລະ ແຜນວາດຄີ່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 166-175",
    keyPoints: {
      hint: {
        text: "ຮູບກ່ອງສາກ ປະກອບດ້ວຍໜ້າຮູບສີ່ແຈສາກ. ສ່ວນຮູບກ້ອງສາກ ແມ່ນປະກອບດ້ວຍໜ້າຮູບຈະຕຸລັດທີ່ເທົ່າກັນທັງ 6 ໜ້າເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອົງປະກອບຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            <table
              className="math-illustration"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ອົງປະກອບ"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຈຳນວນ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໜ້າ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"6 ໜ້າ"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ຂ້າງ / ເສັ້ນຂອບ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"12 ຂ້າງ"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ຈອມ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"8 ຈອມ"}
                  </td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຊົງສາມມິຕິຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍးລະ 2.5 ຄະແນນ)"}</span>
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
                    "(1) ຮູບຊົງສາມມິຕິທີ່ມີ 6 ໜ້າເປັນຮູບຈະຕຸລັດທັງໝົດ ເອີ້ນວ່າຮູບ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
                  {"(2) ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີເສັ້ນຂອບທັງໝົດຈັກເສັ້ນ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສັ້ນ"}</span>
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
                  {"(3) ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີຈອມທັງໝົດຈັກຈອມ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຈອມ"}</span>
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
                    "(4) ຖ້າເຮົາເບິ່ງແຜນວາດຄີ່ຂອງຮູບກ້ອງສາກ, ມັນຈະມີໜ້າຮູບຈະຕຸລັດຈັກໜ້າ?"
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
                <span>{"ໜ້າ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ລວງຍາວຂອບທັງໝົດຂອງຮູບກ່ອງສາກ = (ກວ້າງ + ຍາວ + ສູງ) × 4 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງເສັ້ນລວດຮູບກ່ອງສາກ: "}{" "}
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
                    "📦 ຕ້ອງການເຮັດໂຄງຮູບກ່ອງສາກດ້ວຍເສັ້ນລວດ ໂດຍມີລວງກວ້າງ 4cm, ລວງຍາວ 6cm ແລະ ລວງສູງ 5cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"
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
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງເສັ້ນລວດຮູບກ້ອງສາກ: "}{" "}
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
                    "📦 ຕ້ອງການເຮັດໂຄງຮູບກ້ອງສາກ (ຮູບກ້ອນສາກ) ດ້ວຍເສັ້ນລວດ ໂດຍມີລວງຍາວຂອບແຕ່ລະຂ້າງ 6cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາໜ້າທີ່ຂະໜານກັນ: "}{" "}
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
              <svg width="180" height="140">
                <rect
                  x="50"
                  y="20"
                  width="100"
                  height="70"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <line
                  x1="20"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="#ccc"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <line
                  x1="120"
                  y1="120"
                  x2="150"
                  y2="90"
                  stroke="#333"
                  strokeWidth="1.5"
                />
                <line
                  x1="20"
                  y1="120"
                  x2="50"
                  y2="90"
                  stroke="#ccc"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="120"
                  y1="50"
                  x2="150"
                  y2="20"
                  stroke="#333"
                  strokeWidth="1.5"
                />
                <rect
                  x="20"
                  y="50"
                  width="100"
                  height="70"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="120"
                  y1="50"
                  x2="120"
                  y2="120"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="120"
                  x2="120"
                  y2="120"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="20"
                  x2="150"
                  y2="90"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="90"
                  x2="150"
                  y2="90"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="15" y="45" fontSize="12" fontWeight="bold">
                  {"A"}
                </text>
                <text x="125" y="45" fontSize="12" fontWeight="bold">
                  {"B"}
                </text>
                <text x="125" y="135" fontSize="12" fontWeight="bold">
                  {"C"}
                </text>
                <text x="15" y="135" fontSize="12" fontWeight="bold">
                  {"D"}
                </text>
                <text x="45" y="15" fontSize="12" fontWeight="bold">
                  {"E"}
                </text>
                <text x="155" y="15" fontSize="12" fontWeight="bold">
                  {"F"}
                </text>
                <text x="155" y="105" fontSize="12" fontWeight="bold">
                  {"G"}
                </text>
                <text x="45" y="105" fontSize="12" fontWeight="bold">
                  {"H"}
                </text>
              </svg>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span>{"(1) ໜ້າທີ່ຂະໜານກັບ ໜ້າ ABCD ແມ່ນໜ້າ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
              {"ຈົ່ງຊອກຫາໜ້າທີ່ຕັ້ງສາກກັນ: "}{" "}
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
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span>{"(2) ໜ້າທີ່ຕັ້ງສາກກັບ ໜ້າ ABCD ມີທັງໝົດຈັກໜ້າ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ໜ້າ"}</span>
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
              {"(1) ຮູບກ້ອງສາກ, (2) 12 ເສັ້ນ, (3) 8 ຈອມ, (4) 6 ໜ້າ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "60 cm (ຍ້ອນມີຂອບແນວກວ້າງ 4, ແນວຍາວ 4, ແນວສູງ 4, (4+6+5)×4 = 60)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"(1) ໜ້າ EFGH, (2) 4 ໜ້າ (ໜ້າ ABFE, BCGF, CDHG, DAEH)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີລັກສະນະພິເສດດ້ານຄວາມສຳພັນລະຫວ່າງໜ້າ! ໜ້າກົງກັນຂ້າມຈະຂະໜານກັນ ແລະ ໜ້າຕິດກັນຈະຕັ້ງສາກກັນສະເໝີເດີ້!",
    },
  };
