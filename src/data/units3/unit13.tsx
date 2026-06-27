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

export const unit13Data: UnitData = {
    
    unitNumber: 13,
    unitTitle: "ການຫານ ແລະ ຄຳນວນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳພັນລະຫວ່າງການຄູນ ແລະ ການຫານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"13. ຄວາມສຳພັນລະຫວ່າງການຄູນ ແລະ ການຫານ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການປຽບທຽບວ່າຄວາມຍາວໜຶ່ງໃຫຍ່ກວ່າອີກຄວາມຍາວໜຶ່ງຈັກເທົ່າ, ເຮົາໃຊ້ການຫານ."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{ fontSize: "22px", fontWeight: "bold", width: "120px" }}
              >
                {"ແຖບສີແດງ:"}
              </span>
              <div
                style={{
                  height: "30px",
                  width: "100px",
                  backgroundColor: "#E53935",
                  borderRadius: "4px",
                }}
              ></div>
              <span style={{ fontSize: "22px" }}>{"2 m"}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  width: "120px",
                  paddingTop: "34px",
                }}
              >
                {"ແຖບສີຟ້າ:"}
              </span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      height: "24px",
                      width: "100px",
                      borderLeft: "2px dashed #E53935",
                      borderRight: "2px dashed #E53935",
                      borderTop: "2px dashed #E53935",
                      backgroundColor: "#FFCDD2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#C62828",
                      boxSizing: "border-box",
                    }}
                  >
                    {"2 m"}
                  </div>
                  <div
                    style={{
                      height: "24px",
                      width: "100px",
                      borderRight: "2px dashed #E53935",
                      borderTop: "2px dashed #E53935",
                      backgroundColor: "#FFCDD2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#C62828",
                      boxSizing: "border-box",
                    }}
                  >
                    {"2 m"}
                  </div>
                  <div
                    style={{
                      height: "24px",
                      width: "100px",
                      borderRight: "2px dashed #E53935",
                      borderTop: "2px dashed #E53935",
                      backgroundColor: "#FFCDD2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#C62828",
                      boxSizing: "border-box",
                    }}
                  >
                    {"2 m"}
                  </div>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "300px",
                    backgroundColor: "#1E88E5",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  {"6 m"}
                </div>
              </div>
              <span style={{ fontSize: "22px", paddingTop: "34px" }}>
                {"(ໃຫຍ່ກວ່າ 3 ເທື່ອ)"}
              </span>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {"6 ÷ 2 = 3 (ເທື່ອ)"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຈຳນວນເທື່ອລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                {
                  n: "(1)",
                  q: "ເຊືອກຍາວ 15 ແມັດ ຍາວເປັນຈັກເທື່ອຂອງເຊືອກ 3 ແມັດ?",
                },
                {
                  n: "(2)",
                  q: "ປຶ້ມ 24 ຫົວ ມີຈຳນວນເປັນຈັກເທື່ອຂອງປຶ້ມ 6 ຫົວ?",
                },
                {
                  n: "(3)",
                  q: "ນ້ຳ 32 ລິດ ມີປະລິມານເປັນຈັກເທື່ອຂອງນ້ຳ 4 ລິດ?",
                },
                {
                  n: "(4)",
                  q: "ເງິນ 50 ພັນກີບ ມີຄ່າເປັນຈັກເທື່ອຂອງເງິນ 10 ພັນກີບ?",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "20px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ເທື່ອ"}</span>
                </div>
              ))}
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
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
                  "(5) ເຊືອກເສັ້ນໜຶ່ງຍາວ 24 ແມັດ, ເຊິ່ງຍາວເປັນ 3 ເທື່ອຂອງເຊືອກສີແດງ. ເຊືອກສີແດງຍາວຈັກແມັດ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ແມັດ"}</span>
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
                {"ຈົ່ງຄິດໄລ່ເພື່ອຊອກຫາຄຳຕອບ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                    {
                      "(1) ຖ້າຮູ້ວ່າແຖບສີແດງຍາວ 4m ແລະ ແຖບສີຟ້າຍາວເປັນ 5 ເທື່ອຂອງແຖບສີແດງ. ແຖບສີຟ້າຍາວຈັກແມັດ?"
                    }
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
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
                    <span>{"ແມັດ"}</span>
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
                    {
                      "(2) ຖ້າຮູ້ວ່າແຖບສີເyellowືອງຍາວ 15m, ເຊິ່ງຍາວເປັນ 3 ເທື່ອຂອງແຖບສີຂຽວ. ແຖບສີຂຽວຍາວຈັກແມັດ?"
                    }
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
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
                    <span>{"ແມັດ"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວຂອງໄມ້ບັນທັດ: "}{" "}
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
                <p>
                  {
                    "(3) ໄມ້ບັນທັດອັນໜຶ່ງຍາວ 30cm, ໄມ້ບັນທັດອັນທີສອງຍາວເປັນ 2 ເທື່ອຂອງອັນທຳອິດ. ໄມ້ບັນທັດອັນທີສອງຍາວຈັກ cm?"
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
                      width: "120px",
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
      hintText: "ໃຊ້ການຫານເພື່ອຊອກຫາຈຳນວນເທື່ອເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
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
                  {
                    "(1) ມີແຖບເຈ້ຍສີຟ້າຍາວ 18 ແມັດ. ແຖບເຈ້ຍສີແດງຍາວ 6 ແມັດ. ແຖບເຈ້ຍສີຟ້າຍາວເປັນຈັກເທື່ອຂອງສີແດງ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                  <span>{"ເທື່ອ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມສູງຂອງຕົ້ນໄມ້: "}{" "}
              <span className="point-label">{"(5 - ຄະແນນ)"}</span>
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
                  "(2) ຕົ້ນໄມ້ A ສູງ 12 ແມັດ, ຕົ້ນໄມ້ B ສູງ 4 ແມັດ. ຕົ້ນໄມ້ A ສູງເປັນຈັກເທື່ອຂອງຕົ້ນໄມ້ B?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເທື່ອ"}</span>
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
                "(1) 5 ເທື່ອ, (2) 4 ເທື່ອ, (3) 8 ເທື່ອ, (4) 5 ເທື່ອ, (5) 8 ແມັດ (24 ÷ 3)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 20 ແມັດ (4 x 5), (2) 5 ແມັດ (15 ÷ 3), (3) 60cm (30 x 2)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3 ເທື່ອ (18 ÷ 6), (2) 3 ເທື່ອ (12 ÷ 4)"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!",
    },
  };
