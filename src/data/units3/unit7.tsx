import React from "react";
import { UnitData } from "../units2";
import {
  ItemGrid,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  NumberLine,
  NumberCards,
  TapeDiagram,
  Shape,
} from "@/components/illustrations";

export const unit7Data: UnitData = {
    
    unitNumber: 7,
    unitTitle: "ຄວາມຍາວ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກຄວາມຍາວ m, cm, mm",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 m = 100 cm, 1 cm = 10 mm" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"7. ຄວາມຍາວ (m, cm, mm)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການວັດແທກຄວາມຍາວ ໃຊ້ຫົວໜ່ວຍ ແມັດ (m), ຊັງຕີແມັດ (cm), ແລະ ມິນລີແມັດ (mm)."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F1F8E9",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "120px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E8F5E9",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #4CAF50",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"1 m"}
                </span>
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#4CAF50",
                }}
              >
                {"="}
              </div>
              <div
                style={{
                  backgroundColor: "#E8F5E9",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #4CAF50",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"100 cm"}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFF3E0",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #FF9800",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"1 cm"}
                </span>
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#FF9800",
                }}
              >
                {"="}
              </div>
              <div
                style={{
                  backgroundColor: "#FFF3E0",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #FF9800",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"10 mm"}
                </span>
              </div>
            </div>
            <div
              style={{
                overflowX: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Ruler
                measuredLength={10}
                maxLength={15}
                objectType="pencil"
                showAnswer={true}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {"10 cm = 100 mm"}
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(1)"}
                </span>
                <span>{"1 m ="}</span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(2)"}
                </span>
                <span>{"2 cm ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"mm"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(3)"}
                </span>
                <span>{"100 cm ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(4)"}
                </span>
                <span>{"50 mm ="}</span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(5)"}
                </span>
                <span>{"3 m ="}</span>
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
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມຍາວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }, whiteSpace: "nowrap"}>
                  {
                    "ໄມ້ທ່ອນໜຶ່ງຍາວ 1 m 20 cm. ຖ້າປ່ຽນເປັນ cm ທັງໝົດ ຈະເທົ່າກັບຈັກ cm?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "8px",
                    paddingLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                      margin: "0 10px",
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການຕໍ່ຄວາມຍາວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }, whiteSpace: "nowrap"}>
                  {
                    "ເຊືອກເສັ້ນໜຶ່ງຍາວ 50 cm. ຖ້າເອົາ 2 ເສັ້ນມາຕໍ່ກັນ ຈະຍາວເທົ່າໃດ m?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "8px",
                    paddingLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                      margin: "0 10px",
                    }}
                  ></span>
                  <span>{"m"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "1 m = 100 cm. ດັ່ງນັ້ນ 1 m 20 cm = 100 cm + 20 cm.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                {" 4 cm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" mm"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                {" 200 cm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" m"}
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
              {"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍປະສົມ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                {" 1 m 50 cm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" cm"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                {" 30 mm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" cm"}
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
            <span key="1">{"(1) 100, (2) 20, (3) 1, (4) 5, (5) 300"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 120 cm (100 + 20), (2) 1 m (50 + 50 = 100 cm = 1 m)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 40, (2) 2, (3) 150, (4) 3"}</span>],
        },
      ],
      advice:
        "ຫົວໜ່ວຍຄວາມຍາວມັກຈະໃຊ້ໃນຊີວິດປະຈຳວັນ. ລອງເອົາໄມ້ບັນທັດມາວັດແທກສິ່ງຂອງຕ່າງໆເບິ່ງເດີ!",
    },
  };
