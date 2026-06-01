import React from "react";
import { UnitData } from "../units2";

export const unit4Data: UnitData = {
    unitNumber: 4,
    unitTitle: "ການທຽບເທົ່າກັນຂອງຮູບເລຂາຄະນິດ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມໝາຍຂອງການທຽບເທົ່າກັນ ຂອງຮູບເລຂາຄະນິດ, ແລະ ຊອກຫາຂ້າງ ຫຼື ມຸມທີ່ກົງກັນຂ້າມກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 38-45",
    keyPoints: {
      hint: {
        text: "ສອງຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ ຈະມີຮູບຮ່າງ ແລະ ຂະໜາດເທົ່າກັນພໍດີ! ເມື່ອທັບກັນ ມັນຈະຊ້ອນກັນໄດ້ຢ່າງສົມບູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ"}
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
            <svg width="150" height="120">
              <path
                d="M 20,95 L 120,95 L 70,35 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <text x="15" y="110" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"A"}
              </text>
              <text x="125" y="110" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"B"}
              </text>
              <text x="65" y="27" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"C"}
              </text>
            </svg>
            <svg width="150" height="120">
              {/* Congruent but rotated or shifted */}
              <path
                d="M 30,95 L 130,95 L 80,35 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <text x="25" y="110" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"D"}
              </text>
              <text x="135" y="110" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"E"}
              </text>
              <text x="75" y="27" style={{ fontSize: "22px", fontWeight: "bold" }}>
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
                <span>{"(1) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AB ແມ່ນຂ້າງ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ມຸມທີ່ສົມທຽບກັບມຸມ A ແມ່ນມຸມ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຍາວ ແລະ ມຸມ: "}{" "}
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
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຖ້າຄວາມຍາວຂ້າງ AB = 6 cm, ຂ້າງ DE ຈະຍາວຈັກ cm?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຖ້າມຸມ B = 60°, ມຸມ E ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ຜົນບວກມຸມໃນຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ! ແລະ ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 360 ອົງສາສະເໝີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ກຳນົດ (ຮູບສາມແຈ): "}{" "}
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
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"(1) ມຸມ C ໃນຮູບສາມແຈນີ້ເທົ່າກັບ"}</span>
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
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ກຳນົດ (ຮູບສີ່ແຈ): "}{" "}
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
                <svg className="math-illustration" width="300" height="200">
                  <path
                    d="M 40,160 L 260,160 L 220,50 L 80,50 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="3"
                  />
                  <text x="55" y="150" style={{ fontSize: "22px" }}>
                    {"110°"}
                  </text>
                  <text x="210" y="150" style={{ fontSize: "22px" }}>
                    {"70°"}
                  </text>
                  <text x="90" y="80" style={{ fontSize: "22px" }}>
                    {"80°"}
                  </text>
                  <text x="180" y="80" style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"D"}
                  </text>
                </svg>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"(1) ມຸມ D ໃນຮູບສີ່ແຈນີ້ເທົ່າກັບ"}</span>
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບການທຽບເທົ່າກັນ: "}{" "}
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
                <span>{"(1) 📐 ຖ້າເຮົາແບ່ງຮູບສີ່ແຈສາກອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ, ເຮົາຈະໄດ້ຮູບສາມແຈສອງຮູບທີ່ທຽບເທົ່າກັນພໍດີ ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ⏹️ ຖ້າເຮົາແບ່ງຮູບຈະຕຸລັດອອກເປັນສີ່ສ່ວນຕາມເສັ້ນເນັ່ງຈອມທັງສອງ, ເຮົາຈະໄດ້ຮູບສາມແຈສີ່ຮູບທີ່ທຽບເທົ່າກັນພໍດີ ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງຄິດໄລ່ມຸມໃນຮູບເລຂາຄະນິດຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈສາກໜຶ່ງ, ຖ້າມີມຸມແຫຼມໜຶ່ງເທົ່າກັບ 35°, ມຸມແຫຼມອີກມຸມໜຶ່ງຈະເທົ່າກັບ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ໃນຮູບສີ່ແຈຂ້າງຂະໜານໜຶ່ງ, ຖ້າມີມຸມໜຶ່ງເທົ່າກັບ 70°, ມຸມຖັດໄປ (ມຸມຂ້າງດຽວກັນ) ຈະເທົ່າກັບ"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            <span key="u4-ans-1-1">{"(1) ຂ້າງ DE"}</span>,
            <span key="u4-ans-1-2">{"(2) ມຸມ D"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u4-ans-2-1">{"(1) 6 cm"}</span>,
            <span key="u4-ans-2-2">{"(2) 60°"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u4-ans-t1-1">{"70° (ຍ້ອນ 180 - (45 + 65) = 70)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u4-ans-t2-1">{"100° (ຍ້ອນ 360 - (110 + 70 + 80) = 100)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u4-ans-s1-1">{"(1) ທຽບເທົ່າກັນ (ໄດ້ຮູບສາມແຈສາກສອງຮູບທີ່ເທົ່າກັນພໍດີ)"}</span>,
            <span key="u4-ans-s1-2">{"(2) ທຽບເທົ່າກັນ (ໄດ້ຮູບສາມແຈທ່ຽງສີ່ຮູບທີ່ເທົ່າກັນພໍດີ)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u4-ans-s2-1">{"(1) 55° (ຍ້ອນ 180 - 90 - 35 = 55)"}</span>,
            <span key="u4-ans-s2-2">{"(2) 110° (ຍ້ອນ 180 - 70 = 110)"}</span>,
          ],
        },
      ],
      advice:
        "ການກຳນົດຂ້າງ ແລະ ມຸມສົມທຽບໃນຮູບທຽບເທົ່າກັນ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດຄິດໄລ່ມຸມ ຫຼື ຄວາມຍາວຂ້າງທີ່ບໍ່ທັນຮູ້ໄດ້ຢ່າງງ່າຍດາຍ!",
    },
  };
