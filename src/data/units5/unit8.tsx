import React from "react";
import { UnitData } from "../units2";

export const unit8Data: UnitData = {
    unitNumber: 8,
    unitTitle: "ຄວາມໄວ",
    unitGoal:
      "ຮຽນຮູ້ສາມສູດພື້ນຖານຂອງຄວາມໄວ, ວິທີການຊອກຫາຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ ພ້ອມທັງການປຽບທຽບຄວາມໄວ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 76-85",
    keyPoints: {
      hint: {
        text: "ຈື່ສູດ 3 ຫຼັກໃຫ້ດີເດີ້! 1. ຄວາມໄວ = ໄລຍະທາງ ÷ ເວລາ. 2. ໄລຍະທາງ = ຄວາມໄວ × ເວລາ. 3. ເວລາ = ໄລຍະທາງ ÷ ຄວາມໄວ.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄວາມໄວພື້ນຖານ (Speed Formulas)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFE082",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              <strong>{"• ຄວາມໄວ (Speed) = ໄລຍະທາງ ÷ ເວລາ"}</strong>
            </div>
            <div>
              <strong>{"• ໄລຍະທາງ (Distance) = ຄວາມໄວ × ເວລາ"}</strong>
            </div>
            <div>
              <strong>{"• ເວລາ (Time) = ໄລຍະທາງ ÷ ຄວາມໄວ"}</strong>
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
              {"ຈົ່ງຄິດໄລ່ຕາມສູດຄວາມໄວຕໍ່ໄປນີ້: "}{" "}
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
                <span>
                  {
                    "(1) ລົດຄັນໜຶ່ງແລ່ນໄດ້ 120 km ໃນເວລາ 2 ຊົ່ວໂມງ. ຄວາມໄວຂອງລົດແມ່ນ"
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
                <span>{"km/h"}</span>
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
                    "(2) ຄົນຜູ້ໜຶ່ງຍ່າງດ້ວຍຄວາມໄວ 80 m/min ໃນເວລາ 15 ນາທີ. ໄລຍະທາງແມ່ນ"
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
                <span>{"m"}</span>
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
                    "(3) ລົດໄຟແລ່ນດ້ວຍຄວາມໄວ 60 km/h ໃນໄລຍະທາງ 180 km. ຈະຕ້ອງໃຊ້ເວລາ"
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
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "⚖️ ເພື່ອປຽບທຽບຄວາມໄວ, ເຮົາຕ້ອງປ່ຽນຫົວໜ່ວຍເວລາ ຫຼື ໄລຍະທາງໃຫ້ຄືກັນກ່ອນເດີ້! ຕົວຢ່າງ ປ່ຽນເປັນຄວາມໄວຕໍ່ວິນາທີ.",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການປຽບທຽບຄວາມໄວ: "}{" "}
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
                    "🐆 ເສືອແລ່ນໄດ້ 300 m ໃນເວລາ 15 ວິນາທີ. ມ້າແລ່ນໄດ້ 240 m ໃນເວລາ 10 ວິນາທີ. ສັດຊະນິດໃດແລ່ນໄວກວ່າກັນ?"
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງລຸ່ມນີ້: "}{" "}
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
                  "✈️ ເຮືອບິນລຳໜຶ່ງບິນດ້ວຍຄວາມໄວ 800 km/h. ຖ້າເຮືອບິນບິນເປັນເວລາ 2.5 ຊົ່ວໂມງ, ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ km?"
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
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
                <span>{"km"}</span>
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
              {
                "(1) 60 km/h (120 ÷ 2), (2) 1,200 m (80 × 15), (3) 3 ຊົ່ວໂມງ (180 ÷ 60)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ມ້າແລ່ນໄວກວ່າ (ຍ້ອນຄວາມໄວເສືອແມ່ນ 300÷15 = 20 m/s, ຄວາມວີມ້າແມ່ນ 240÷10 = 24 m/s, 24 > 20)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"2,000 km (ຍ້ອນ 800 × 2.5 = 2,000)"}</span>],
        },
      ],
      advice:
        "ຄວາມໄວແມ່ນສິ່ງທີ່ສຳຄັນຫຼາຍໃນຟີຊິກ ແລະ ຊີວິດປະຈຳວັນ! ຈື່ໄວ້ສະເໝີວ່າສູດທັງສາມແມ່ນກ່ຽວຂ້ອງກັນ ຖ້າຮູ້ສອງຕົວ ຈະສາມາດຊອກຫາຕົວທີສາມໄດ້ສະເໝີ.",
    },
  };
