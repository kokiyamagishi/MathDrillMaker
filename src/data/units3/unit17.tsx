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

export const unit17Data: UnitData = {
    
    unitNumber: 17,
    unitTitle: "ທະນະບັດ (ເງິນກີບ)",
    unitGoal: "ຮູ້ຈັກ ແລະ ຄິດໄລ່ເງິນກີບ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"17. ທະນະບັດ (ເງິນກີບ)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ເງິນທີ່ເຮົາໃຊ້ແມ່ນມີຫຼາຍໃບ ເຊັ່ນ: ໃບ 10,000 ກີບ, ໃບ 20,000 ກີບ, ໃບ 50,000 ກີບ, ໃບ 100,000 ກີບ."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[10000, 20000, 50000, 100000].map((amount, idx) => {
              let color = "#2196F3";
              if (amount === 20000) color = "#F44336";
              if (amount === 50000) color = "#FF9800";
              if (amount === 100000) color = "#4CAF50";
              return (
                <div
                  key={idx}
                  className="math-illustration"
                  style={{
                    width: "140px",
                    height: "70px",
                    border: `2px solid ${color}`,
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${color}1A`,
                    fontWeight: "bold",
                    color: color,
                    fontSize: "22px",
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <span style={{ fontSize: "22px" }, whiteSpace: "nowrap"}>{amount.toLocaleString()} ₭</span>
                </div>
              );
            })}
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
              {"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນທັງໝົດລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", bills: [10000, 10000, 10000, 10000, 10000] },
                { n: "(2)", bills: [20000, 20000, 20000] },
                { n: "(3)", bills: [50000, 50000] },
                { n: "(4)", bills: [100000] },
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
                  <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{item.n}</span>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                      width: "400px",
                    }}
                  >
                    {item.bills.map((amount, bIdx) => {
                      let color = "#2196F3";
                      if (amount === 20000) color = "#F44336";
                      if (amount === 50000) color = "#FF9800";
                      if (amount === 100000) color = "#4CAF50";
                      return (
                        <div
                          key={bIdx}
                          className="math-illustration"
                          style={{
                            width: "80px",
                            height: "40px",
                            border: `2px solid ${color}`,
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: `${color}1A`,
                            fontWeight: "bold",
                            color: color,
                            fontSize: "12px",
                            boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                          }}
                        >
                          <span style={{ fontSize: "12px" }, whiteSpace: "nowrap"}>{amount.toLocaleString()} ₭</span>
                        </div>
                      );
                    })}
                  </div>
                  <span>{"="}</span>
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
              {"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມ: "}{" "}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {[20000, 20000, 10000].map((amount, bIdx) => {
                    let color = "#2196F3";
                    if (amount === 20000) color = "#F44336";
                    return (
                      <div
                        key={bIdx}
                        className="math-illustration"
                        style={{
                          width: "80px",
                          height: "40px",
                          border: `2px solid ${color}`,
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: `${color}1A`,
                          fontWeight: "bold",
                          color: color,
                          fontSize: "12px",
                          boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span style={{ fontSize: "12px" }, whiteSpace: "nowrap"}>{amount.toLocaleString()} ₭</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບລວມ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
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
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* 1 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                    {"(1) ຊື້ປຶ້ມຫົວໜຶ່ງລາຄາ 35,000 ກີບ."}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                    }}
                  >
                    {/* Item */}
                    <div
                      className="math-illustration"
                      style={{
                        padding: "10px",
                        border: "2px dashed #9E9E9E",
                        borderRadius: "8px",
                        textAlign: "center",
                        width: "80px",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                        {"📘"}
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E0E0E0",
                          padding: "4px",
                          borderRadius: "4px",
                          fontSize: "16px",
                        }}
                      >
                        {"35,000 ₭"}
                      </div>
                    </div>
                    {/* Pay with */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{"ຈ່າຍເງິນ:"}</span>
                      <div
                        className="math-illustration"
                        style={{
                          width: "100px",
                          height: "50px",
                          border: "2px solid #FF9800",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#FF98001A",
                          fontWeight: "bold",
                          color: "#FF9800",
                          fontSize: "14px",
                          boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span style={{ fontSize: "14px" }, whiteSpace: "nowrap"}>{"50,000 ₭"}</span>
                      </div>
                    </div>
                    {/* Change */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }, whiteSpace: "nowrap"}>{"ເງິນທອນ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                        }}
                      ></span>
                      <span>{"ກີບ"}</span>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                    {"(2) ຊື້ກະເປົາລາຄາ 75,000 ກີບ."}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                    }}
                  >
                    {/* Item */}
                    <div
                      className="math-illustration"
                      style={{
                        padding: "10px",
                        border: "2px dashed #9E9E9E",
                        borderRadius: "8px",
                        textAlign: "center",
                        width: "80px",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                        {"🎒"}
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E0E0E0",
                          padding: "4px",
                          borderRadius: "4px",
                          fontSize: "16px",
                        }}
                      >
                        {"75,000 ₭"}
                      </div>
                    </div>
                    {/* Pay with */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{"ຈ່າຍເງິນ:"}</span>
                      <div
                        className="math-illustration"
                        style={{
                          width: "100px",
                          height: "50px",
                          border: "2px solid #4CAF50",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#4CAF501A",
                          fontWeight: "bold",
                          color: "#4CAF50",
                          fontSize: "14px",
                          boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span style={{ fontSize: "14px" }, whiteSpace: "nowrap"}>{"100,000 ₭"}</span>
                      </div>
                    </div>
                    {/* Change */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }, whiteSpace: "nowrap"}>{"ເງິນທອນ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                        }}
                      ></span>
                      <span>{"ກີບ"}</span>
                    </div>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການຊື້ເຄື່ອງ ແລະ ທອນເງິນ: "}{" "}
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
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(3) ຊື້ປຶ້ມຂຽນ ແລະ ປາກກາ."}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    className="math-illustration"
                    style={{
                      padding: "8px",
                      border: "2px dashed #9E9E9E",
                      borderRadius: "8px",
                      textAlign: "center",
                      width: "100px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>{"📓"}</div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {"12,000 ₭"}
                    </div>
                  </div>
                  <span style={{ fontSize: "24px" }, whiteSpace: "nowrap"}>{"+"}</span>
                  <div
                    className="math-illustration"
                    style={{
                      padding: "8px",
                      border: "2px dashed #9E9E9E",
                      borderRadius: "8px",
                      textAlign: "center",
                      width: "100px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>{"🖊️"}</div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {"8,000 ₭"}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      marginLeft: "30px",
                    }}
                  >
                    <span>{"ຈ່າຍເງິນ:"}</span>
                    <div
                      className="math-illustration"
                      style={{
                        width: "90px",
                        height: "40px",
                        border: "2px solid #FF9800",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FF98001A",
                        fontWeight: "bold",
                        color: "#FF9800",
                        fontSize: "12px",
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "12px" }, whiteSpace: "nowrap"}>{"50,000 ₭"}</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ເງິນທອນ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "100px",
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
      hintText: "ໃຊ້ການລົບເພື່ອຊອກຫາເງິນທອນເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມທັງໝົດ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "22px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                {"(1) ມີເງິນທັງໝົດຈັກກີບ?"}
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  padding: "16px",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px",
                }}
              >
                {[100000, 50000, 10000, 10000, 10000].map((amount, idx) => {
                  let color = "#2196F3";
                  if (amount === 50000) color = "#FF9800";
                  if (amount === 100000) color = "#4CAF50";
                  return (
                    <div
                      key={idx}
                      className="math-illustration"
                      style={{
                        width: "100px",
                        height: "50px",
                        border: `2px solid ${color}`,
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${color}1A`,
                        fontWeight: "bold",
                        color: color,
                        fontSize: "14px",
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "14px" }, whiteSpace: "nowrap"}>{amount.toLocaleString()} ₭</span>
                    </div>
                  );
                })}
              </div>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                <span style={{ fontSize: "20px" }, whiteSpace: "nowrap"}>{"ກີບ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການຊື້ກະເປົາ: "}{" "}
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
              <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>
                {"(2) ຕ້ອງການຊື້ກະເປົາລາຄາ 180,000 ກີບ. ປັດຈຸບັນມີເງິນດັ່ງນີ້:"}
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  padding: "16px",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px",
                  width: "fit-content",
                }}
              >
                {[50000, 50000, 50000, 20000].map((amount, idx) => {
                  let color = "#F44336";
                  if (amount === 50000) color = "#FF9800";
                  return (
                    <div
                      key={idx}
                      className="math-illustration"
                      style={{
                        width: "90px",
                        height: "45px",
                        border: `2px solid ${color}`,
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${color}1A`,
                        fontWeight: "bold",
                        color: color,
                        fontSize: "14px",
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "14px" }, whiteSpace: "nowrap"}>{amount.toLocaleString()} ₭</span>
                    </div>
                  );
                })}
              </div>
              <p style={{ margin: "8px 0" }}>
                {"ເງິນພໍຊື້ຫຼືບໍ່ ແລະ ຍັງຂາດອີກຈັກກີບ?"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span>{"ຄຳຕອບ: ເງິນພໍຫຼືບໍ່:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{", ຍັງຂາດອີກ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
                "(1) 50,000 ກີບ, (2) 60,000 ກີບ, (3) 100,000 ກີບ, (4) 100,000 ກີບ, (5) 50,000 ກີບ (20,000 x 2 + 10,000)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "(1) 15,000 ກີບ, (2) 25,000 ກີບ, (3) 30,000 ກີບ [50,000 - (12,000 + 8,000)]"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 180,000 ກີບ, (2) ບໍ່ພໍ, ຍັງຂາດອີກ 10,000 ກີບ (ມີທັງໝົດ 170,000 ກີບ, ຂາດອີກ 180,000 - 170,000 = 10,000)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!",
    },
  };
