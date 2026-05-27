import React from "react";
import { UnitData } from "../units2";

export const unit5Data: UnitData = {
    unitNumber: 5,
    unitTitle: "ການຄູນ ແລະ ການຫານເລກສ່ວນ",
    unitGoal:
      "ຮຽນຮູ້ວິທີການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ແລະ ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ພ້ອມທັງການຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 46-57",
    keyPoints: {
      hint: {
        text: "ເວລາຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ, ໃຫ້ເອົາຈຳນວນຖ້ວນຄູນໃສ່ຈຳນວນພູດ (ຕົວເທິງ). ເວລາຫານ, ໃຫ້ເອົາຈຳນວນຖ້ວນຄູນໃສ່ພູດ (ຕົວລຸ່ມ) ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ (Fraction × Whole)"}
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
            <p style={{ margin: "0 0 10px 0" }}>
              {"ສູດ: a/b × c = (a × c) / b"}
            </p>
            <div
              style={{ fontWeight: "bold", color: "#0D47A1", fontSize: "22px" }}
            >
              {"ຕົວຢ່າງ: 2/7 × 3 = (2 × 3) / 7 = 6/7"}
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ (Fraction ÷ Whole)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <p style={{ margin: "0 0 10px 0" }}>
              {"ສູດ: a/b ÷ c = a / (b × c)"}
            </p>
            <div
              style={{ fontWeight: "bold", color: "#2E7D32", fontSize: "22px" }}
            >
              {"ຕົວຢ່າງ: 4/5 ÷ 3 = 4 / (5 × 3) = 4/15"}
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
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
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
                <span>{"(1) 2/7 × 3 ="}</span>
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 5/8 × 2 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "16px", color: "#888" }}>
                  {"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 4/5 ÷ 3 ="}</span>
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 6/7 ÷ 2 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "16px", color: "#888" }}>
                  {"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "🥛 ໃຊ້ວິທີການຄູນເລກສ່ວນ! ເອົາປະລິມານນ້ຳຕໍ່ 1 ກະປ໋ອງ ຄູນໃຫ້ຈຳນວນກະປ໋ອງທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນລຸ່ມນີ້: "}{" "}
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
                    "🥤 ນ້ຳໝາກໄມ້ 1 ກະປ໋ອງ ມີປະລິມານ 2/3 L. ຖ້າມີນ້ຳໝາກໄມ້ປະເພດດຽວກັນ 4 ກະປ໋ອງ ຈະມີປະລິມານນ້ຳທັງໝົດຈັກ L? (ຂຽນເປັນເລກສ່ວນປະສົມ ຫຼື ເລກສ່ວນເກີນ)"
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
                <span>{"(1) 3/10 × 5 ="}</span>
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 2/9 × 4 ="}</span>
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 8/9 ÷ 4 ="}</span>
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 5/6 ÷ 3 ="}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 6/7, (2) 5/4 (ຍ້ອນ 10/8 ຫານໃຫ້ 2 ທັງພູດແລະພູດ = 5/4), (3) 4/15, (4) 3/7 (ຍ້ອນ 6/14 = 3/7)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"8/3 L ຫຼື 2 2/3 L (ຍ້ອນ 2/3 × 4 = 8/3)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 3/2 (ຍ້ອນ 15/10 = 3/2), (2) 8/9, (3) 2/9 (ຍ້ອນ 8/36 = 2/9), (4) 5/18"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຢ່າລືມກວດເບິ່ງສະເໝີວ່າ ເລກສ່ວນທີ່ໄດ້ສາມາດຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳໄດ້ບໍ່! ການຄັດຈ້ອນຈະຊ່ວຍໃຫ້ຄຳຕອບຂອງເຮົາຖືກຕ້ອງສົມບູນເດີ້.",
    },
  };
