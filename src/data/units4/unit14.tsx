import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit14Data: UnitData = {
    
    unitNumber: 14,
    unitTitle: "ຄຸນລັກສະນະ, ການບວກ ແລະ ການລົບເລກສ່ວນ",
    unitGoal:
      "ຮຽນຮູ້ປະເພດຂອງເລກສ່ວນ, ການປ່ຽນຮູບແບບເລກສ່ວນ, ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີສ່ວນຄືກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 127-137",
    keyPoints: {
      hint: {
        text: "ເລກສ່ວນແທ້ມີຈຳນວນພູດນ້ອຍກວ່າພູດ. ເລກສ່ວນເກີນມີຈຳນວນພູດເທົ່າກັບ ຫຼື ໃຫຍ່ກວ່າພູດ. ເລກສ່ວນປະສົມແມ່ນປະກອບດ້ວຍຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນແທ້ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ປະເພດຂອງເລກສ່ວນ"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Proper fraction */}
            <div
              style={{
                flex: "1 1 200px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"ເລກສ່ວນແທ້"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ຈຳນວນພູດ ນ້ອຍກວ່າ ພູດ"}
              </p>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
                {"2/3"}
              </div>
            </div>

            {/* Improper fraction */}
            <div
              style={{
                flex: "1 1 200px",
                padding: "16px",
                backgroundColor: "#FFE082",
                border: "2px solid #FFB300",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#FF8F00" }}>
                {"ເລກສ່ວນເກີນ"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ຈຳນວນພູດ ໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ ພູດ"}
              </p>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
                {"5/3"}
              </div>
            </div>

            {/* Mixed fraction */}
            <div
              style={{
                flex: "1 1 200px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#1565C0" }}>
                {"ເລກສ່ວນປະສົມ"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ມີຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນແທ້"}
              </p>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
                {"1 2/3"}
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
              {"ຈົ່ງປ່ຽນຮູບແບບເລກສ່ວນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
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
                <span>{"(1) ປ່ຽນເລກສ່ວນເກີນ 7/3 ໃຫ້ເປັນເລກສ່ວນປະສົມ ="}</span>
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
                <span>{"(2) ປ່ຽນເລກສ່ວນປະສົມ 1 3/4 ໃຫ້ເປັນເລກສ່ວນເກີນ ="}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
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
                <span>{"(3) ບວກເລກສ່ວນ: 2/5 + 1/5 ="}</span>
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
                <span>{"(4) ລົບເລກສ່ວນ: 7/8 - 3/8 ="}</span>
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
        "ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີສ່ວນຄືກັນ ແມ່ນໃຫ້ບວກ ຫຼື ລົບສະເພາະຈຳນວນພູດ (ຕົວເທິງ) ເດີ້! ພູດ (ຕົວລຸ່ມ) ແມ່ນຮັກສາໄວ້ຄືເກົ່າ.",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  fontSize: "22px",
                  padding: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"(1) 1 2/5 + 2/5 ="}</span>
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
                  <span>{"(2) 2 3/7 - 1 1/7 ="}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
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
                    "🥛 ທ້າວ ສົມພອນ ດື່ມນ້ຳນົມໄປ 2/5 L ໃນຕອນເຊົ້າ ແລະ ດື່ມອີກ 1/5 L ໃນຕອນແລງ. ຖ້າຕອນເລີ່ມຕົ້ນມີນ້ຳນົມຢູ່ 1 L, ຈະເຫຼືອນ້ຳນົມຈັກ L?"
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການລົບເລກສ່ວນ: "}{" "}
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
                  "🎗️ ແມ່ມີໂບຍາວ 2 1/4 m. ຕ້ອງການຕັດໂບອອກໄປ 3/4 m ເພື່ອມັດຂອງຂວັນ. ໂບທີ່ເຫຼືອຈະຍາວຈັກແມັດ?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                  flexWrap: "wrap",
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
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການບວກເລກສ່ວນ: "}{" "}
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
                  "🥛 ມີນ້ຳນົມຢູ່ 1 2/4 L ແລະ ຊື້ຕື່ມອີກ 3/4 L. ຈະມີນ້ຳນົມທັງໝົດຈັກ L?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                  flexWrap: "wrap",
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 2 1/3, (2) 7/4, (3) 3/5, (4) 4/8 = 1/2"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 1 4/5, (2) 1 2/7"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3">
              {"2/5 L (ຍ້ອນ 1 - (2/5 + 1/5) = 5/5 - 3/5 = 2/5)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">
              {
                "1 2/4 m ຫຼື 1 1/2 m (ຍ້ອນ 2 1/4 - 3/4 = 9/4 - 3/4 = 6/4 = 1 2/4)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ການປ່ຽນເລກສ່ວນປະສົມໃຫ້ເປັນເລກສ່ວນເກີນ ຈະຊ່ວຍໃຫ້ການບວກ ແລະ ການລົບເລກສ່ວນມີຄວາມສະດວກ ແລະ ຜິດພາດໜ້ອຍລົງເດີ້!",
    },
  };
