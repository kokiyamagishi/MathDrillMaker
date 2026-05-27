import React from "react";
import { UnitData } from "../units2";

export const unit4Data: UnitData = {
    unitNumber: 4,
    unitTitle: "ການທຽບເທົ່າກັນຂອງຮູບເລຂາຄະນິດ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມໝາຍຂອງການທຽບເທົ່າກັນ (合同) ຂອງຮູບເລຂາຄະນິດ, ແລະ ຊອກຫາຂ້າງ ຫຼື ມຸມທີ່ກົງກັນຂ້າມກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 38-45",
    keyPoints: {
      hint: {
        text: "ສອງຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ ຈະມີຮູບຮ່າງ ແລະ ຂະໜາດເທົ່າກັນພໍດີ! ເມື່ອທັບກັນ ມັນຈະຊ້ອນກັນໄດ້ຢ່າງສົມບູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ (Congruent Figures)"}
          </h3>
          <p style={{ fontSize: "22px", margin: 0 }}>
            {"ຄຸນລັກສະນະສຳຄັນຂອງສອງຮູບທີ່ທຽບເທົ່າກັນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>{"• ຄວາມຍາວຂອງຂ້າງທີ່ສົມທຽບ ແມ່ນເທົ່າກັນ."}</div>
            <div>{"• ຂະໜາດຂອງມຸມທີ່ສົມທຽບ ແມ່ນເທົ່າກັນ."}</div>
          </div>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              margin: "10px 0",
            }}
          >
            {/* SVG of two congruent triangles */}
            <svg width="150" height="100">
              <path
                d="M 20,80 L 120,80 L 70,20 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <text x="15" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"A"}
              </text>
              <text x="125" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"B"}
              </text>
              <text x="65" y="15" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"C"}
              </text>
            </svg>
            <svg width="150" height="100">
              {/* Congruent but rotated or shifted */}
              <path
                d="M 30,80 L 130,80 L 80,20 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <text x="25" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"D"}
              </text>
              <text x="135" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"E"}
              </text>
              <text x="75" y="15" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"F"}
              </text>
            </svg>
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
              {"ຈາກຮູບສາມແຈສອງຮູບ ABC ແລະ DEF ທີ່ທຽບເທົ່າກັນດ້ານເທິງ: "}{" "}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(1) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AB ແມ່ນຂ້າງ"}</span>
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
                <span>{"(2) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AC ແມ່ນຂ້າງ"}</span>
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
                <span>{"(3) ມຸມທີ່ສົມທຽບກັບມຸມ A ແມ່ນມຸມ"}</span>
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
                  {"(4) ຖ້າຄວາມຍາວຂ້າງ AB = 6 cm, ຂ້າງ DE ຈະຍາວຈັກ cm?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
    challengeProblems: {
      hintText:
        "📐 ຜົນບວກມຸມໃນຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ! ໃຊ້ຄວາມຮູ້ນີ້ຊອກຫາມຸມທີ່ເຫຼືອເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ກຳນົດ: "}{" "}
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
                <svg className="math-illustration" width="300" height="200">
                  <path
                    d="M 40,160 L 260,160 L 180,40 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="3"
                  />
                  <text x="70" y="150" style={{ fontSize: "22px" }}>
                    {"45°"}
                  </text>
                  <text x="200" y="150" style={{ fontSize: "22px" }}>
                    {"65°"}
                  </text>
                  <text x="172" y="70" style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"C"}
                  </text>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "20px",
                  }}
                >
                  <div>{"(1) ມຸມ C ໃນຮູບສາມແຈນີ້ເທົ່າກັບ"}</div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
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
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
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
                  "📐 ຖ້າເຮົາແບ່ງຮູບສີ່ແຈສາກອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ, ເຮົາຈະໄດ້ຮູບສາມແຈສອງຮູບທີ່ທຽບເທົ່າກັນພໍດີ ຫຼື ບໍ່?"
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
            <span key="1">{"(1) DE, (2) DF, (3) ມຸມ D, (4) 6 cm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"70° (ຍ້ອນ 180 - (45 + 65) = 180 - 110 = 70)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"ທຽບເທົ່າກັນ (ຍ້ອນມີຂ້າງ ແລະ ມຸມເທົ່າກັນພໍດີ ເມື່ອປິ່ນທັບກັນ)"}
            </span>,
          ],
        },
      ],
      advice:
        "ການກຳນົດຂ້າງ ແລະ ມຸມສົມທຽບໃນຮູບທຽບເທົ່າກັນ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດຄິດໄລ່ມຸມ ຫຼື ຄວາມຍາວຂ້າງທີ່ບໍ່ທັນຮູ້ໄດ້ຢ່າງງ່າຍດາຍ!",
    },
  };
