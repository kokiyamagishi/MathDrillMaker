import React from "react";
import { UnitData } from "../units2";

export const unit1Data: UnitData = {
    unitNumber: 1,
    unitTitle: "ຈຳນວນຖ້ວນ ແລະ ຈຳນວນທົດສະນິຍົມ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບໂຄງສ້າງຂອງຈຳນວນຖ້ວນ ແລະ ຈຳນວນທົດສະນິຍົມ, ແລະ ວິທີການເລື່ອນຈຸດທົດສະນິຍົມເມື່ອຄູນ ຫຼື ຫານດ້ວຍ 10, 100, 1000",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 6-11",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ໂຄງສ້າງຫຼັກຂອງຈຳນວນ"}
          </h3>
          <p style={{ fontSize: "22px", margin: 0 }}>
            {"ຕົວຢ່າງ: ໂຄງສ້າງຂອງຈຳນວນ 9.35 (ເກົ້າຈຸດສາມຫ້າ) ປະກອບດ້ວຍ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "18px",
              }}
            >
              <div>{"• ຫຼັກຫົວໜ່ວຍ (1): ມີ 9 ຕົວ (9)"}</div>
              <div>{"• ຫຼັກທົດສະນіຍົມທີ 1 (0.1): ມີ 3 ຕົວ (0.3)"}</div>
              <div>{"• ຫຼັກທົດສະນິຍົມທີ 2 (0.01): ມີ 5 ຕົວ (0.05)"}</div>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#0D47A1",
                  fontSize: "18px",
                  marginTop: "8px",
                  borderTop: "1px solid #ccc",
                  paddingTop: "8px",
                  textAlign: "center",
                }}
              >
                {"9 + 0.3 + 0.05 = 9.35"}
              </div>
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ການເລື່ອນຈຸດທົດສະນິຍົມ"}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {/* Multiplication */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
              }}
            >
              <strong style={{ fontSize: "18px", color: "#2E7D32" }}>
                {"ການຄູນເລກທີດສະນິຍົມລະເລກຫຼ່ວນ"}
              </strong>
              <p style={{ fontSize: "18px", margin: "8px 0" }}>
                {"ຈຸດທີດສະນິຍົມຈະຍ້າຍໄປທາງຂວາ (Right)"}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                <li>{"3.14 × 10 = 31.4 (ຍ້ຽນ 1 ຫຼັກ)"}</li>
                <li>{"3.14 × 100 = 314 (ຍ້ຽນ 2 ຫຼັກ)"}</li>
              </ul>
            </div>

            {/* Division */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
              }}
            >
              <strong style={{ fontSize: "18px", color: "#E65100" }}>
                {"ການຫານເລກທີດສະນິຍົມລະເລກຫຼ່ວນ"}
              </strong>
              <p style={{ fontSize: "18px", margin: "8px 0" }}>
                {"ຈຸດທີດສະນິຍົມຈະຍ້າຍໄປທາງຊ້າຍ (Left)"}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                <li>{"365 ÷ 10 = 36.5 (ຍ້ຽນ 1 ຫຼັກ)"}</li>
                <li>{"365 ÷ 100 = 3.65 (ຍ້ຽນ 2 ຫຼັກ)"}</li>
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
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນຕໍ່ໄປນີ້: "}
              <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 3.14 × 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 0.58 × 100 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 2.7 × 1000 ="}</span>
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
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຫານຕໍ່ໄປນີ້: "}
              <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 365 ÷ 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 42.5 ÷ 100 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 9800 ÷ 1000 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບໂຄງສ້າງຂອງຈຳນວນຕໍ່ໄປນີ້: "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຈຳນວນ 4.73 ປະກອບດ້ວຍ 4 + "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{" + 0.03"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຈຳນວນ 12.06 ມີ 0.01 ຢູ່ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{" ຕົວ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "0.001 ແມ່ນຫຼັກທົດສະນິຍົມທີ 3. ໃຫ້ຄິດວ່າຈະຕ້ອງເລື່ອນຈຸດໄປທາງໃດ ແລ້ວຈຶ່ງເລືອກວິທີຄູນ ຫຼື ຫານ!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  fontSize: "20px",
                  padding: "8px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span>{"(1) ຈຳນວນທີ່ມີ 0.001 ຢູ່ 235 ຕົວ ຈະແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span>{"(2) ຖ້າເອົາ 9.35 ມາຄູນໃຫ້ 1000 ຈະໄດ້ຄຳຕອບແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
                {"ຈົ່ງຕອບຄຳຖາມ: "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  fontSize: "20px",
                  padding: "8px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span>{"(1) ເອົາ 0.46 ຄູນເລກໃດຈຶ່ງຈະໄດ້ 460?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span>{"(2) ເອົາ 7200 ຫານເລກໃດຈຶ່ງຈະໄດ້ 7.2?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງຄິດໄລ່ຕໍ່ໄປນີ້: "}
              <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 2.385 × 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 0.067 × 1000 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 238.5 ÷ 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 56 ÷ 1000 ="}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບໂຄງສ້າງຂອງຈຳນວນ: "}
              <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) 6.205 ປະກອບດ້ວຍ 6 + 0.2 + "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 0.01 ຢູ່ 307 ຕົວ ຈະເປັນ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມ: "}
              <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ເອົາ 0.35 ຄູນເລກໃດຈຶ່ງຈະໄດ້ 350?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ເອົາ 4500 ຫານເລກໃດຈຶ່ງຈະໄດ້ 4.5?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            <span key="u1-ans-1-1">{"(1) 31.4"}</span>,
            <span key="u1-ans-1-2">{"(2) 58"}</span>,
            <span key="u1-ans-1-3">{"(3) 2700"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u1-ans-2-1">{"(1) 36.5"}</span>,
            <span key="u1-ans-2-2">{"(2) 0.425"}</span>,
            <span key="u1-ans-2-3">{"(3) 9.8"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="u1-ans-3-1">{"(1) 0.7"}</span>,
            <span key="u1-ans-3-2">{"(2) 1206 ຕົວ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u1-ans-t1-1">{"(1) 0.235"}</span>,
            <span key="u1-ans-t1-2">{"(2) 9350"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u1-ans-t2-1">{"(1) 1000"}</span>,
            <span key="u1-ans-t2-2">{"(2) 1000"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u1-ans-s1-1">{"(1) 23.85"}</span>,
            <span key="u1-ans-s1-2">{"(2) 67"}</span>,
            <span key="u1-ans-s1-3">{"(3) 23.85"}</span>,
            <span key="u1-ans-s1-4">{"(4) 0.056"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u1-ans-s2-1">{"(1) 0.005"}</span>,
            <span key="u1-ans-s2-2">{"(2) 3.07"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 3",
          answers: [
            <span key="u1-ans-s3-1">{"(1) 1000"}</span>,
            <span key="u1-ans-s3-2">{"(2) 1000"}</span>,
          ],
        },
      ],
      advice: "",
    },
  };
