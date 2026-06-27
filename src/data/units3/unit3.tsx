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

export const unit3Data: UnitData = {
    
    unitNumber: 3,
    unitTitle: "ການຫານ",
    unitGoal: "ຮຽນຮູ້ການຫານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ການແບ່ງຈຳນວນອອກເປັນກຸ່ມຍ່ອຍ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"3. ການຫານ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການຫານແມ່ນການແບ່ງຈຳນວນອອກເປັນກຸ່ມຍ່ອຍ ທີ່ແຕ່ລະກຸ່ມມີຈຳນວນເທົ່າກັນ. ຕົວຢ່າງ: ມີໝາກກ້ຽງ 12 ໜ່ວຍ ແບ່ງໃຫ້ 3 ຄົນ, ແຕ່ລະຄົນຈະໄດ້ຈັກໜ່ວຍ?"
            }
          </p>
          <div
            style={{
              backgroundColor: "#FCE4EC",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              className="math-illustration"
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
                  border: "2px solid #E91E63",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ຄົນທີ 1"}
                </div>
                <ItemGrid item="🍊" count={4} />
              </div>
              <div
                style={{
                  border: "2px solid #E91E63",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ຄົນທີ 2"}
                </div>
                <ItemGrid item="🍊" count={4} />
              </div>
              <div
                style={{
                  border: "2px solid #E91E63",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ຄົນທີ 3"}
                </div>
                <ItemGrid item="🍊" count={4} />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              {"12 ÷ 3 = 4"} <br />
              {"ຕອບ: ໄດ້ຄົນລະ 4 ໜ່ວຍ"}
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}
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
                { n: "(1)", q: "8 ÷ 2 =" },
                { n: "(2)", q: "10 ÷ 5 =" },
                { n: "(3)", q: "15 ÷ 3 =" },
                { n: "(4)", q: "20 ÷ 4 =" },
                { n: "(5)", q: "18 ÷ 6 =" },
                { n: "(6)", q: "24 ÷ 8 =" },
                { n: "(7)", q: "14 ÷ 7 =" },
                { n: "(8)", q: "30 ÷ 5 =" },
                { n: "(9)", q: "36 ÷ 6 =" },
                { n: "(10)", q: "81 ÷ 9 =" },
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຫານ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}
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
                      "ມີປຶ້ມ 20 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ປຶ້ມຈັກຫົວ?"
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
                    <span>{"ຫົວ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ຄູມີສໍດຳ 30 ກ້ານ, ຢາກຈັດໃສ່ກ່ອງ ກ່ອງລະ 5 ກ້ານ. ຈະຕ້ອງໃຊ້ຈັກກ່ອງ?"
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
                    <span>{"ກ່ອງ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(3)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີດອກໄມ້ 42 ດອກ, ມັດເປັນຊໍ່ ຊໍ່ລະ 7 ດອກ. ຈະໄດ້ດອກໄມ້ທັງໝົດຈັກຊໍ່?"
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
                    <span>{"ຊໍ່"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ເງິນ 50,000 ກີບ ແບ່ງໃຫ້ເດັກນ້ອຍ 5 ຄົນ. ແຕ່ລະຄົນຈະໄດ້ເງິນເທົ່າໃດ?"
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
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກີບ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ການຫານ ແມ່ນກົງກັນຂ້າມກັບການຄູນ. ລອງຄິດເບິ່ງວ່າ ຫຍັງຄູນກັນແລ້ວອອກຈຳນວນນັ້ນ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span>{"4 x"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"= 24  ດັ່ງນັ້ນ, 24 ÷ 4 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>{"5 x"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"= 35  ດັ່ງນັ້ນ, 35 ÷ 5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(3)"}
                </span>
                <span>{"7 x"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"= 49  ດັ່ງນັ້ນ, 49 ÷ 7 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
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
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span>
                    {
                      "ມີເຊືອກຍາວ 12 ແມັດ. ຖ້າຕັດແບ່ງເປັນທ່ອນລະ 3 ແມັດ, ຈະໄດ້ເຊືອກທັງໝົດຈັກທ່ອນ?"
                    }
                  </span>
                </div>
                <TapeDiagram
                  type="single"
                  totalLabel="ເຊືອກທັງໝົດ 12 ແມັດ"
                  leftLabel="3 ແມັດ"
                  rightLabel="ສ່ວນທີ່ເຫຼືອ?"
                  leftWidthPercent={25}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                    marginTop: "8px",
                  }}
                >
                  <span>{"ປະໂຫຍກສັນຍາລັກ: 12 ÷ 3 = "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span style={{ marginLeft: "16px" }}>{"ຕອບ: "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ທ່ອນ"}</span>
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
              {
                "(1) 4, (2) 2, (3) 5, (4) 5, (5) 3, (6) 3, (7) 2, (8) 6, (9) 6, (10) 9"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 5 ຫົວ, (2) 6 ກ່ອງ, (3) 6 ຊໍ່, (4) 10,000 ກີບ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ແລະ 6, (2) 7 ແລະ 7, (3) 7 ແລະ 7"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4">{"(4) 4, 4 ທ່ອນ"}</span>],
        },
      ],
      advice:
        "ຖ້ານ້ອງໆທ່ອງບັ້ງສູດໄດ້ໄວ, ການຫານກໍຈະງ່າຍຂຶ້ນຫຼາຍ. ພະຍາຍາມຝຶກຄິດໃນໃຈເບິ່ງເດີ.",
    },
  };
