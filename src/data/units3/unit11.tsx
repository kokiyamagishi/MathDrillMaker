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

export const unit11Data: UnitData = {
    
    unitNumber: 11,
    unitTitle: "ຮູບສາມແຈ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຮູບສາມແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ! ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດ！",
      },
      content: (
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              flex: 1,
              minWidth: "250px",
            }}
          >
            <Shape type="triangle" color="#2196F3" size={120} />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {"ຮູບສາມແຈທ່ຽງ"}
            </p>
            <p>{"ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈທ່ຽງ."}</p>
          </div>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              flex: 1,
              minWidth: "250px",
            }}
          >
            <Shape type="triangle" color="#4CAF50" size={120} />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {"ຮູບສາມແຈສະເໝີ"}
            </p>
            <p>{"ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈສະເໝີ."}</p>
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
              {"ຈົ່ງບອກຊື່ຂອງຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                <Shape type="triangle" color="#FF9800" size={80} />
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
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                <Shape
                  type="triangle"
                  color="#9C27B0"
                  size={80}
                  rotation={90}
                />
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
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                <Shape type="triangle" color="#00BCD4" size={80} />
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
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                <Shape
                  type="triangle"
                  color="#E91E63"
                  size={80}
                  rotation={180}
                />
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຍາວຂອງຂ້າງ: "}{" "}
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
              <p>
                {
                  "(5) ຮູບສາມແຈສະເໝີຮູບໜຶ່ງ ມີຄວາມຍາວຂ້າງໜຶ່ງແມ່ນ 6cm. ຂ້າງອື່ນໆຈະຍາວຈັກ cm?"
                }
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"ຄຳຕອບ:"}</span>
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
                {"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "22px", margin: 0 }}>
                    {"(1) ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "20px" }, whiteSpace: "nowrap"}>{"ຄຳຕອບ:"}</span>
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "22px", margin: 0 }}>
                    {"(2) ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "20px" }, whiteSpace: "nowrap"}>{"ຄຳຕອບ:"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມຍາວຮອບຮູບ: "}{" "}
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
                <p>
                  {
                    "(3) ຮູບສາມແຈສະເໝີຮູບໜຶ່ງ ມີຄວາມຍາວຂ້າງລະ 5cm. ຄວາມຍາວຮອບຮູບທັງໝົດແມ່ນຈັກ cm?"
                  }
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
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
      hintText: "ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບສາມແຈ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p style={{ fontSize: "20px", margin: 0 }}>
                  {
                    "(1) ຮູບສາມແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ 4cm, 4cm ແລະ 4cm ແມ່ນຮູບສາມແຈຊະນິດໃດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p style={{ fontSize: "20px", margin: 0 }}>
                  {
                    "(2) ຮູບສາມແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ 3cm, 5cm ແລະ 5cm ແມ່ນຮູບສາມແຈຊະນິດໃດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວຮອບຮູບສາມແຈທ່ຽງ: "}{" "}
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
              <p>
                {
                  "(3) ມີຮູບສາມແຈທ່ຽງຮູບໜຶ່ງ ເຊິ່ງມີສອງຂ້າງຍາວ 7cm ແລະ ຂ້າງທີ່ເຫຼືອຍາວ 4cm. ຄວາມຍາວຮອບຮູບແມ່ນຈັກ cm?"
                }
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"ຄຳຕອບ:"}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) ຮູບສາມແຈສະເໝີ, (4) ຮູບສາມແຈທ່ຽງ, (5) 6cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) 15cm (5 x 3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) 18cm (7 + 7 + 4)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ!",
    },
  };
