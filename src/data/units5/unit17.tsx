import React from "react";
import { UnitData } from "../units2";

export const unit17Data: UnitData = {
    unitNumber: 17,
    unitTitle: "ສະຫຼຸບບົດຮຽນປະຖົມສຶກສາ ປີທີ 5",
    unitGoal:
      "ທົບທວນຄືນບົດຮຽນທັງໝົດທີ່ໄດ້ຮຽນມາໃນຊັ້ນ ປ.5 ເພື່ອກຽມຄວາມພ້ອມໃນການສອບເສັງຈົບຊັ້ນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 190-200",
    keyPoints: {
      hint: {
        text: "ນີ້ແມ່ນບົດທົດສອບລວມຂອງທຸກໆບົດຮຽນເດີ້! ພະຍາຍາມແກ້ໄຂດ້ວຍຕົນເອງເພື່ອວັດແທກລະດັບຄວາມເຂົ້າໃຈຂອງຕົນເອງ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສິ່ງທີ່ໄດ້ຮຽນມາທັງໝົດໃນ ປ.5 (P5 Summary)"}
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
            <div>{"• ການຄູນ, ການຫານເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ."}</div>
            <div>{"• ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ເນື້ອທີ່ຮູບຫຼາຍແຈ."}</div>
            <div>{"• ອັດຕາສ່ວນພົວພັນ ແລະ ສ່ວນຮ້ອຍ."}</div>
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
              {"ຈົ່ງແກ້ເລກທົດສອບຄວາມຮູ້ນຳກັນ: "}{" "}
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
                <span>{"(1) 1.2 × 2.5 ="}</span>
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
                <span>{"(2) 2/3 × 5 ="}</span>
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
                  {"(3) ຮູບສາມແຈທີ່ມີພື້ນ 6 cm ແລະ ລວງສູງ 4 cm. ເນື້ອທີ່ແມ່ນ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm²"}</span>
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
                  {"(4) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 20 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
    challengeProblems: {
      hintText:
        "⚖️ ໃຊ້ອັດຕາສ່ວນເພື່ອຊອກຫາປະລິມານ! ສ່ວນຫຼາຍແມ່ນໃຊ້ສູດອັດຕາສ່ວນທີ່ເທົ່າກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາລວມ: "}{" "}
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
                    "🥛 ຕ້ອງການເຮັດເຂົ້າໜົມຫວານ ໂດຍໃຊ້ນ້ຳຕານ ແລະ ແປ້ງ ໃນອັດຕາສ່ວນ 3 : 5. ຖ້າໃຊ້ແປ້ງ 250 g, ຈະຕ້ອງໃຊ້ນ້ຳຕານຈັກ g?"
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
                  <span>{"g"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
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
                  "🚴 ສິນຄ້າຊະນິດໜຶ່ງລາຄາ 5,000 ກີບ. ຖ້າຫຼຸດລາຄາໃຫ້ 15%, ລາຄາສຸດທ້າຍຂອງສິນຄ້ານີ້ແມ່ນຈັກກີບ?"
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
                <span>{"ກີບ"}</span>
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
                "(1) 3 (ຍ້ອນ 1.2 × 2.5 = 3.0), (2) 10/3 (ຫຼື 3 1/3), (3) 12 cm² (6 × 4 ÷ 2), (4) 62.8 cm (20 × 3.14)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"150 g (ຍ້ອນ 250 ÷ 5 = 50, ດັ່ງນັ້ນ 3 × 50 = 150)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "4,250 ກີບ (ຍ້ອນຫຼຸດລາຄາ 5,000 × 0.15 = 750 ກີບ, ລາຄາສຸດທ້າຍ 5,000 - 750 = 4,250)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຊົມເຊີຍທຸກຄົນທີ່ຮຽນຈົບບົດຮຽນ ປ.5 ຢ່າງສົມບູນ! ຄວາມຮູ້ທັງໝົດນີ້ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການຮຽນຕໍ່ຊັ້ນມັດທະຍົມ ແລະ ການນຳໃຊ້ໃນຊີວິດ.",
    },
  };
