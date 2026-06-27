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

export const unit1Data: UnitData = {
    
    unitNumber: 1,
    unitTitle: "ການຄູນ",
    unitGoal: "ຮຽນຮູ້ການຄູນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ການຄູນແມ່ນການບວກຈຳນວນດຽວກັນຫຼາຍໆເທື່ອ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຄູນ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການຄູນແມ່ນການບວກຈຳນວນດຽວກັນຫຼາຍໆເທື່ອ. ຕົວຢ່າງ: ມີໝາກໂປມ 3 ກຸ່ມ, ກຸ່ມລະ 4 ໜ່ວຍ, ລວມທັງໝົດມີເທົ່າໃດ?"
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  border: "2px dashed #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ItemGrid item="🍎" count={4} />
              </div>
              <div
                style={{
                  border: "2px dashed #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ItemGrid item="🍎" count={4} />
              </div>
              <div
                style={{
                  border: "2px dashed #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ItemGrid item="🍎" count={4} />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              {"4 + 4 + 4 = 12"} <br />
              {"ເຊິ່ງຂຽນເປັນບັ້ງເລກຄູນໄດ້: 4 x 3 = 12"}
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { n: "(1)", q: "3 x 2 =" },
                { n: "(2)", q: "4 x 5 =" },
                { n: "(3)", q: "6 x 3 =" },
                { n: "(4)", q: "7 x 4 =" },
                { n: "(5)", q: "8 x 6 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ fontSize: "20px" }}>
                <span>
                  {
                    "(6) ມີໝາກກ້ຽງ 4 ຖົງ, ຖົງລະ 5 ໜ່ວຍ. ລວມທັງໝົດມີໝາກກ້ຽງຈັກໜ່ວຍ?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
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
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ໜ່ວຍ"}</span>
                </div>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບສິ່ງຂອງ: "}{" "}
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
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(1)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີກ່ອງສໍສີ 5 ກ່ອງ, ແຕ່ລະກ່ອງມີສໍສີ 12 ກ້ານ. ລວມທັງໝົດມີສໍສີຈັກກ້ານ?"
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
                    <span>{"ກ້ານ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ຊື້ເຂົ້າໜົມ 6 ຖົງ, ຖົງລະ 5 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"
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
                    <span>{"ພັນກີບ"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄົນ: "}{" "}
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
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(3)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ນັກຮຽນຊັ້ນ ປ.3 ມີ 4 ຫ້ອງ, ແຕ່ລະຫ້ອງມີນັກຮຽນ 30 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"
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
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ອ່ານໂຈດໃຫ້ເຂົ້າໃຈວ່າ ແຕ່ລະກຸ່ມມີຈັກອັນ ແລະ ມີຈັກກຸ່ມ. ແລ້ວເອົາຈຳນວນມາຄູນກັນ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", q: "10 x 5 =" },
                { n: "(2)", q: "20 x 4 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{  }}>
              <div style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ marginLeft: "12px" }}>
                  {"ມີປຶ້ມ 3 ແຖວ, ແຖວລະ 100 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ?"}
                </span>
                <div
                  style={{
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຫົວ"}</span>
                </div>
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
              {"(1) 6, (2) 20, (3) 18, (4) 28, (5) 48, (6) 20 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 60 ກ້ານ, (2) 30 ພັນກີບ, (3) 120 ຄົນ, (4) 90 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 50, (2) 80, (3) 300 ຫົວ"}</span>],
        },
      ],
      advice:
        "ການທ່ອງບັ້ງສູດໃຫ້ໄດ້ ແມ່ນສຳຄັນຫຼາຍສຳລັບການຄູນ. ນ້ອງໆຄວນຝຶກທ່ອງບັ້ງສູດທຸກໆມື້ເດີ!",
    },
  };
