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
              gridTemplateColumns: "1fr 1fr",
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
                {"\u0e81\u0eb2\u0e99\u0e84\u0eb5\u0e99\u0ec0\u0ea5\u0e81\u0e97\u0eb5\u0e94\u0eac\u0eb0\u0e99\u0eb4\u0ea0\u0ecd\u0ea5\u0eb0\u0ec0\u0ea5\u0e81\u0eab\u0ebc\u0ec8\u0ea7\u0e99"}
              </strong>
              <p style={{ fontSize: "18px", margin: "8px 0" }}>
                {"\u0e88\u0eb8\u0e94\u0e97\u0eb5\u0e94\u0eac\u0eb0\u0e99\u0eb4\u0ea0\u0ecd\u0e88\u0eb0\u0ea2\u0ec9\u0eb2\u0ea2\u0ec4\u0e9b\u0e97\u0eb2\u0e87\u0e82\u0ea7\u0eb2 (Right)"}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                <li>{"3.14 \u00d7 10 = 31.4 (\u0ea2\u0ec9\u0ebd\u0e99 1 \u0eab\u0ebc\u0eb1\u0e81)"}</li>
                <li>{"3.14 \u00d7 100 = 314 (\u0ea2\u0ec9\u0ebd\u0e99 2 \u0eab\u0ebc\u0eb1\u0e81)"}</li>
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
                {"\u0e81\u0eb2\u0e99\u0eab\u0eb2\u0e99\u0ec0\u0ea5\u0e81\u0e97\u0eb5\u0e94\u0eac\u0eb0\u0e99\u0eb4\u0ea0\u0ecd\u0ea5\u0eb0\u0ec0\u0ea5\u0e81\u0eab\u0ebc\u0ec8\u0ea7\u0e99"}
              </strong>
              <p style={{ fontSize: "18px", margin: "8px 0" }}>
                {"\u0e88\u0eb8\u0e94\u0e97\u0eb5\u0e94\u0eac\u0eb0\u0e99\u0eb4\u0ea0\u0ecd\u0e88\u0eb0\u0ea2\u0ec9\u0eb2\u0ea2\u0ec4\u0e9b\u0e97\u0eb2\u0e87\u0e8b\u0ec9\u0eb2\u0ea2 (Left)"}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                <li>{"365 \u00f7 10 = 36.5 (\u0ea2\u0ec9\u0ebd\u0e99 1 \u0eab\u0ebc\u0eb1\u0e81)"}</li>
                <li>{"365 \u00f7 100 = 3.65 (\u0ea2\u0ec9\u0ebd\u0e99 2 \u0eab\u0ebc\u0eb1\u0e81)"}</li>
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
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນ ແລະ ການຫານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
                <span>{"(1) 3.14 × 10 ="}</span>
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
                <span>{"(2) 3.14 × 100 ="}</span>
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
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນ ແລະ ການຫານຕໍ່ໄປນີ້ (ຕໍ່): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
                <span>{"(1) 365 ÷ 10 ="}</span>
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
                <span>{"(2) 365 ÷ 100 ="}</span>
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
        "0.001 ແມ່ນຫຼັກທົດສະນິຍົມທີ 3. ຖ້າມີ 235 ຕົວ ຈະປະກອບກັນເປັນຈຳນວນໃດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງສ້າງຈຳນວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
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
                  <span>{"(1) ຈຳນວນທີ່ມີ 0.001 ຢູ່ 235 ຕົວ ຈະແມ່ນ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
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
                  <span>{"(2) ຖ້າເອົາ 9.35 ມາຄູນໃຫ້ 1000 ຈະໄດ້ຄຳຕອບແມ່ນ"}</span>
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
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
                <span>{"(1) 2.385 × 10 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 2.385 × 100 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 238.5 ÷ 10 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 238.5 ÷ 1000 ="}</span>
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
            <span key="u1-ans-1-1">{"(1) 31.4 (ຍ້ອນ 3.14 × 10 = 31.4)"}</span>,
            <span key="u1-ans-1-2">{"(2) 314 (ຍ້ອນ 3.14 × 100 = 314)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u1-ans-2-1">{"(1) 36.5 (ຍ້ອນ 365 ÷ 10 = 36.5)"}</span>,
            <span key="u1-ans-2-2">{"(2) 3.65 (ຍ້ອນ 365 ÷ 100 = 3.65)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u1-ans-t1-1">{"(1) 0.235 (ຍ້ອນ 0.001 × 235 = 0.235)"}</span>,
            <span key="u1-ans-t1-2">{"(2) 9,350 (ຍ້ອນເລື່ອນຈຸດໄປທາງຂວາ 3 ຫຼັກ)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u1-ans-s1-1">{"(1) 23.85"}</span>,
            <span key="u1-ans-s1-2">{"(2) 238.5"}</span>,
            <span key="u1-ans-s1-3">{"(3) 23.85"}</span>,
            <span key="u1-ans-s1-4">{"(4) 0.2385"}</span>,
          ],
        },
      ],
      advice: "",
    },
  };
