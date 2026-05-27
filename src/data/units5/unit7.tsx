import React from "react";
import { UnitData } from "../units2";

export const unit7Data: UnitData = {
    unitNumber: 7,
    unitTitle: "ຄ່າສະເລ່ຍ",
    unitGoal:
      "ຮຽນຮູ້ຄວາມໝາຍຂອງຄ່າສະເລ່ຍ, ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (ຜົນບວກທັງໝົດ ÷ ຈຳນວນ) ແລະ ການນຳໃຊ້ໃນຊີວິດປະຈຳວັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 70-75",
    keyPoints: {
      hint: {
        text: "ຄ່າສະເລ່ຍແມ່ນການແບ່ງປັນໃຫ້ເທົ່າໆກັນ! ຈື່ສູດ: ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (Average Formula)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
              {"ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນ"}
            </p>
            <div style={{ color: "#0D47A1", fontSize: "22px" }}>
              {"ຕົວຢ່າງ: ຄະແນນສອບເສັງ 3 ຄັ້ງແມ່ນ 80, 90, 70. ຄ່າສະເລ່ຍແມ່ນ:"}
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginTop: "6px",
                }}
              >
                {"(80 + 90 + 70) ÷ 3 = 240 ÷ 3 = 80 (ຄະແນນ)"}
              </div>
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
              {"ຈົ່ງຊອກຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
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
                  {"(1) ຄະແນນສອບເສັງ 4 ວິຊາ: 80, 90, 75, 85. ຄ່າສະເລ່ຍແມ່ນ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຄະແນນ"}</span>
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
                    "(2) ຈຳນວນປຶ້ມທີ່ນັກຮຽນ 5 ຄົນອ່ານ: 3ຫົວ, 5ຫົວ, 2ຫົວ, 6ຫົວ, 4ຫົວ. ຄ່າສະເລ່ຍແມ່ນ"
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
                <span>{"ຫົວ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "👣 ໃຊ້ຄ່າສະເລ່ຍຊອກຫາໄລຍະທາງ! ເອົາຄວາມຍາວບາດກ້າວສະເລ່ຍ ຄູນໃຫ້ຈຳນວນບາດກ້າວເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງຈາກບາດກ້າວ: "}{" "}
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
                    "🚶 ທ້າວ ສົມພອນ ຍ່າງ 10 ບາດກ້າວ ໄດ້ໄລຍະທາງສະເລ່ຍແມ່ນ 6.4 m. ຖ້າລາວຍ່າງ 500 ບາດກ້າວ ຈະໄດ້ໄລຍະທາງທັງໝົດປະມານຈັກແມັດ?"
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
                  <span>{"m"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
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
                  "🐔 ແມ່ຄ້າເກັບໄຂ່ໄກ່ໄດ້ 5 ວັນ ດັ່ງນີ້: ວັນຈັນ 24 ຟອງ, ວັນອັງຄານ 30 ຟອງ, ວັນພຸດ 25 ຟອງ, ວັນພະຫັດ 28 ຟອງ ແລະ ວັນສຸກ 23 ຟອງ. ໃນ 5 ວັນນີ້, ແມ່ຄ້າເກັບໄຂ່ໄດ້ສະເລ່ຍວັນລະຈັກຟອງ?"
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
                <span>{"ຟອງ"}</span>
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
                "(1) 82.5 ຄະແນນ (ຍ້ອນ (80+90+75+85) ÷ 4 = 330 ÷ 4 = 82.5), (2) 4 ຫົວ (ຍ້ອນ (3+5+2+6+4) ÷ 5 = 20 ÷ 5 = 4)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"320 m (ຍ້ອນ ບາດກ້າວລະ 6.4 ÷ 10 = 0.64 m, ແລະ 0.64 × 500 = 320)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"26 ຟອງ (ຍ້ອນ (24+30+25+28+23) ÷ 5 = 130 ÷ 5 = 26)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຄ່າສະເລ່ຍຊ່ວຍໃຫ້ເຮົາຄາດຄະເນ ແລະ ເຫັນພາບລວມຂອງຂໍ້ມູນໄດ້ດີຫຼາຍ! ຢ່າລືມບວກຂໍ້ມູນທັງໝົດກ່ອນ ແລ້ວຈຶ່ງຫານໃຫ້ຈຳນວນຂໍ້ມູນເດີ້.",
    },
  };
