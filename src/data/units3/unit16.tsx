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

export const unit16Data: UnitData = {
    
    unitNumber: 16,
    unitTitle: "ເລກສ່ວນ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງ (ຈຳນວນພູດ) ມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມ (ພູດ) ຮັກສາໄວ້ຄືເກົ່າເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"16. ເލກສ່ວນ (ຕໍ່)"}
          </h3>
          <p style={{ fontSize: "22px", lineHeight: "1.5" }}>
            {
              "ການບວກເລກສ່ວນທີ່ມີພູດ (ຕົວລຸ່ມ) ຄືກັນ, ໃຫ້ເອົາຈຳນວນພູດ (ຕົວເທິງ) ບວກກັນເລີຍ. ພູດຍັງຄືເກົ່າ."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Fraction Math Expression */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#1976D2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    borderBottom: "3px solid #1976D2",
                    padding: "0 8px",
                  }}
                >
                  {"1"}
                </span>
                <span style={{ padding: "0 8px" }}>{"4"}</span>
              </div>
              <span>{"+"}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    borderBottom: "3px solid #1976D2",
                    padding: "0 8px",
                  }}
                >
                  {"2"}
                </span>
                <span style={{ padding: "0 8px" }}>{"4"}</span>
              </div>
              <span>{"="}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    borderBottom: "3px solid #1976D2",
                    padding: "0 8px",
                  }}
                >
                  {"3"}
                </span>
                <span style={{ padding: "0 8px" }}>{"4"}</span>
              </div>
            </div>

            {/* Tape Diagram */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {/* 1/4 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "160px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#64B5F6",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </div>
              <span>{"+"}</span>
              {/* 2/4 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "160px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </div>
              <span>{"="}</span>
              {/* 3/4 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "160px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#64B5F6",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "22px",
                color: "#555",
                margin: 0,
                textAlign: "center",
              }}
            >
              {"ແບ່ງເປັນ 4 ສ່ວນເທົ່າກັນ (ພູດຍັງເປັນ 4)."} <br />
              {"ເອົາ 1 ສ່ວນ ບວກກັບ 2 ສ່ວນ ຈະໄດ້ທັງໝົດ 3 ສ່ວນ."}
            </p>
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
              {"ຈົ່ງເບິ່ງຮູບແລ້ວຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຄິດໄລ່: "}{" "}
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
              {/* Problem (1) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(1)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "200px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFCDD2",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFCDD2",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#BBDEFB",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"5"}
                    </span>
                  </div>
                  <span>{"+"}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"5"}
                    </span>
                  </div>
                  <span>{"="}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"5"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Problem (2) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(2)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "240px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#C8E6C9",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#C8E6C9",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#C8E6C9",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF9C4",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF9C4",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"6"}
                    </span>
                  </div>
                  <span>{"+"}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"6"}
                    </span>
                  </div>
                  <span>{"="}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"6"}
                    </span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນ (ການບວກ): "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "20px",
              }}
            >
              <p>
                {
                  "(3) ນ້ຳໃນຈອກທີໜຶ່ງມີ 2/5 ລິດ ແລະ ໃນຈອກທີສອງມີ 1/5 ລິດ. ລວມທັງໝົດມີນ້ຳຈັກລິດ?"
                }
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-end",
                  margin: "10px 0",
                }}
              >
                {/* Beaker 1 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "100px",
                      border: "2px solid #000",
                      borderTop: "none",
                      position: "relative",
                      backgroundColor: "#fff",
                    }}
                  >
                    {/* Tick marks */}
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          bottom: `${i * 20}px`,
                          left: 0,
                          width: "10px",
                          height: "1px",
                          backgroundColor: "#000",
                        }}
                      ></div>
                    ))}
                    {/* Water 2/5 */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#64B5F6",
                      }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "16px", marginTop: "8px" }}>
                    {"2/5 ລິດ"}
                  </span>
                </div>
                <span style={{ fontSize: "32px", paddingBottom: "30px" }}>
                  {"+"}
                </span>
                {/* Beaker 2 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "100px",
                      border: "2px solid #000",
                      borderTop: "none",
                      position: "relative",
                      backgroundColor: "#fff",
                    }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          bottom: `${i * 20}px`,
                          left: 0,
                          width: "10px",
                          height: "1px",
                          backgroundColor: "#000",
                        }}
                      ></div>
                    ))}
                    {/* Water 1/5 */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: "20px",
                        backgroundColor: "#64B5F6",
                      }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "16px", marginTop: "8px" }}>
                    {"1/5 ລິດ"}
                  </span>
                </div>
              </div>

              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                <span>{"ລິດ"}</span>
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
                {"ຈົ່ງເບິ່ງຮູບແລ້ວຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຄິດໄລ່ການລົບ: "}{" "}
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
                {/* Problem (1): 4/5 - 1/5 */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {"(1)"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #000",
                      height: "40px",
                      width: "200px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#64B5F6",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#64B5F6",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#64B5F6",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"5"}
                      </span>
                    </div>
                    <span>{"-"}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"5"}
                      </span>
                    </div>
                    <span>{"="}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"5"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Problem (2): 7/8 - 3/8 */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {"(2)"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #000",
                      height: "40px",
                      width: "240px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"8"}
                      </span>
                    </div>
                    <span>{"-"}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"8"}
                      </span>
                    </div>
                    <span>{"="}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"8"}
                      </span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນ (ການລົບ): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <p>
                  {
                    "(3) ເຊືອກເສັ້ນໜຶ່ງຍາວ 5/6 ແມັດ, ຕັດອອກໄປ 2/6 ແມັດ. ຈະເຫຼືອເຊືອກຈັກແມັດ?"
                  }
                </p>

                {/* Rope Tape Diagram */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    margin: "10px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #8D6E63",
                      height: "30px",
                      width: "300px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#D7CCC8",
                        borderRight: "2px dashed #8D6E63",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#D7CCC8",
                        borderRight: "2px dashed #8D6E63",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#D7CCC8",
                        borderRight: "2px dashed #8D6E63",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px dashed #8D6E63",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px dashed #8D6E63",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <span style={{ fontSize: "16px" }}>{"← ຕັດອອກ"}</span>
                </div>

                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                  <span>{"ແມັດ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText:
        "ຕົວເລກພູດທາງລຸ່ມບໍ່ຕ້ອງລົບກັນເດີ້, ຮັກສາໄວ້ຄືເກົ່າ ແລ້ວເອົາທາງເທິງລົບກັນ!",
    },
    summaryProblems: [
      {
        number: 1,
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p style={{ fontSize: "22px", margin: 0 }}>
                  {
                    "(1) ມີໂບເສັ້ນໜຶ່ງ. ນາງ ໄມ ຕັດເອົາໄປ 2/5 ແມັດ. ທ້າວ ສົມ ຕັດເອົາໄປ 1/5 ແມັດ. ສອງຄົນຕັດເອົາໄປທັງໝົດຈັກແມັດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "150px",
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
              {"ຈົ່ງຂຽນເລກສ່ວນສະແດງສ່ວນທີ່ທາສີ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "20px",
              }}
            >
              {/* Problem (2) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(2)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "200px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF176",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF176",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF176",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <span>{"="}</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    lineHeight: "1.2",
                    fontSize: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
                  <span
                    style={{
                      borderTop: "2px solid #000",
                      width: "40px",
                      textAlign: "center",
                    }}
                  ></span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
                </div>
              </div>

              {/* Problem (3) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(3)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "280px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <span>{"="}</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    lineHeight: "1.2",
                    fontSize: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
                  <span
                    style={{
                      borderTop: "2px solid #000",
                      width: "40px",
                      textAlign: "center",
                    }}
                  ></span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
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
          answers: [<span key="1">{"(1) 3/5, (2) 5/6, (3) 3/5 ລິດ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 3/5, (2) 4/8, (3) 3/6 ແມັດ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 3/5 ແມັດ, (2) 3/5, (3) 4/7"}</span>],
        },
      ],
      advice:
        "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງ (ຈຳນວນພູດ) ມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມ (ພູດ) ຮັກສາໄວ້ຄືເກົ່າເດີ!",
    },
  };
