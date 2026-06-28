import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit1Data: UnitData = {
    
    unitNumber: 1,
    unitTitle: "ຈຳນວນຫຼາຍກວ່າ 10000",
    unitGoal: "ອ່ານ ແລະ ຂຽນຈຳນວນຫຼາຍກວ່າ 10000",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 6-15",
    keyPoints: {
      hint: {
        text: "ການອ່ານຈຳນວນໃຫຍ່ໆ, ໃຫ້ແບ່ງອ່ານເທື່ອລະ 3 ຕົວເລກຈາກເບື້ອງຂວາມາເບື້ອງຊ້າຍເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນຫຼາຍກວ່າ 10000"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {"ຕາຕະລາງຄ່າປະຈຳຫຼັກ ຊ່ວຍໃຫ້ເຮົາອ່ານຈຳນວນໃຫຍ່ໆໄດ້ງ່າຍຂຶ້ນ."}
          </p>

          {/* Place Value Chart */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #333",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Headers */}
            <div
              style={{
                display: "flex",
                backgroundColor: "#4CAF50",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRight: "2px solid #333",
                }}
              >
                {"ຫຼັກລ້ານ"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRight: "2px solid #333",
                }}
              >
                {"ຫຼັກແສນ"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRight: "2px solid #333",
                }}
              >
                {"ຫຼັກໝື່ນ"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRight: "2px solid #333",
                }}
              >
                {"ຫຼັກພັນ"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRight: "2px solid #333",
                }}
              >
                {"ຫຼັກຮ້ອຍ"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRight: "2px solid #333",
                }}
              >
                {"ຫຼັກສິບ"}
              </div>
              <div style={{ flex: 1, padding: "12px" }}>{"ຫຼັກໜ່ວຍ"}</div>
            </div>
            {/* Example Row */}
            <div
              style={{
                display: "flex",
                backgroundColor: "#FFF",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRight: "2px solid #ccc",
                }}
              >
                {"4"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRight: "2px solid #ccc",
                  backgroundColor: "#F5F5F5",
                }}
              >
                {"0"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRight: "2px solid #ccc",
                }}
              >
                {"7"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRight: "2px solid #ccc",
                  backgroundColor: "#F5F5F5",
                }}
              >
                {"8"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRight: "2px solid #ccc",
                }}
              >
                {"3"}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRight: "2px solid #ccc",
                  backgroundColor: "#F5F5F5",
                }}
              >
                {"0"}
              </div>
              <div style={{ flex: 1, padding: "16px" }}>{"9"}</div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#E3F2FD",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "6px solid #2196F3",
            }}
          >
            <p style={{ fontSize: "22px", margin: 0, fontWeight: "bold" }}>
              {"ອ່ານວ່າ: ສີ່ລ້ານ ເຈັດໝື່ນແປດພັນ ສາມຮ້ອຍເກົ້າ (4,078,309)"}
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
              {
                "ຈົ່ງເບິ່ງຕາຕະລາງຄ່າປະຈຳຫຼັກລຸ່ມນີ້ ແລ້ວຕື່ມຕົວເລກ ແລະ ຄຳອ່ານໃສ່ບ່ອນຫວ່າງ: "
              }{" "}
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
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "20px" }, whiteSpace: "nowrap"}>
                  {"(1)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "500px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ລ້ານ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ແສນ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໝື່ນ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ພັນ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ຮ້ອຍ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສິບ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#E0F7FA",
                      padding: "8px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໜ່ວຍ"}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #333",
                    borderTop: "none",
                    borderRadius: "0 0 4px 4px",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "500px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    backgroundColor: "#FFF",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"2"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"0"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"5"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"0"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"0"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"3"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    {"0"}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginTop: "8px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຂຽນເປັນຕົວເລກ:"}</span>
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

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "20px" }, whiteSpace: "nowrap"}>
                  {"(2)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "500px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ລ້ານ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ແສນ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໝື່ນ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ພັນ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ຮ້ອຍ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      borderRight: "1px solid #333",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສິບ"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF3E0",
                      padding: "8px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໜ່ວຍ"}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #333",
                    borderTop: "none",
                    borderRadius: "0 0 4px 4px",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "500px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    backgroundColor: "#FFF",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {" "}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"8"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"0"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"0"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"4"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                      borderRight: "1px dashed #ccc",
                    }}
                  >
                    {"0"}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    {"0"}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginTop: "8px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ອ່ານວ່າ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "250px",
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
              {"ຈົ່ງຄິດໄລ່ຈຳນວນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 10 ເທື່ອຂອງ 45,000 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) ຈຳນວນທີ່ 23,000 ຖືກຫານໃຫ້ 10 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນ ລຸ່ມນີ້ ແລ້ວຕື່ມໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  marginTop: "20px",
                }}
              >
                {/* Number Line 1 */}
                <div
                  style={{
                    position: "relative",
                    height: "60px",
                    width: "100%",
                    maxWidth: "600px",
                    borderBottom: "4px solid #333",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "0",
                      width: "2px",
                      height: "20px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "-20px",
                      width: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {"0"}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      width: "2px",
                      height: "20px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "calc(50% - 30px)",
                      width: "60px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {"50,000"}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "0",
                      width: "2px",
                      height: "20px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "-30px",
                      width: "60px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {"100,000"}
                  </div>

                  {/* Ticks */}
                  {[1, 2, 3, 4, 6, 7, 8, 9].map((i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: `${i * 10}%`,
                        width: "2px",
                        height: "10px",
                        backgroundColor: "#666",
                      }}
                    ></div>
                  ))}

                  {/* Arrows */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "30%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#E91E63",
                      }}
                    >
                      {"(1)"}
                    </div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#E91E63",
                        lineHeight: "0.8",
                      }}
                    >
                      {"↓"}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "80%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#E91E63",
                      }}
                    >
                      {"(2)"}
                    </div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#E91E63",
                        lineHeight: "0.8",
                      }}
                    >
                      {"↓"}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span>{"(1) ແມ່ນ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                      }}
                    ></span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span>{"(2) ແມ່ນ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
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
                    backgroundColor: "#FFF9C4",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "2px dashed #FF9800",
                    fontSize: "18px",
                  }}
                >
                  {
                    "(3) ປະເທດລາວມີປະຊາກອນປະມານ 7,300,000 ຄົນ. ຖ້າປະຊາກອນເພີ່ມຂຶ້ນອີກ 100,000 ຄົນ, ປະຊາກອນທັງໝົດຈະເປັນຈັກຄົນ?"
                  }
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    fontSize: "20px",
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
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ສັງເກດເບິ່ງດີໆວ່າ 1 ຂີດນ້ອຍໆຂອງເສັ້ນຈຳນວນໝາຍເຖິງເທົ່າໃດ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງປຽບທຽບຈຳນວນ ໂດຍຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ບ່ອນຫວ່າງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 45,000"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "40px",
                  }}
                ></span>
                <span>{"40,500"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 100,000"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "40px",
                  }}
                ></span>
                <span>{"99,999"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 123,456"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "40px",
                  }}
                ></span>
                <span>{"123,456"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 5,000,000"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "40px",
                  }}
                ></span>
                <span>{"5,000,001"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(5) 10 ເທື່ອຂອງ 4,000"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "40px",
                  }}
                ></span>
                <span>{"40,000"}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div style={{ display: "flex", gap: "60px", paddingLeft: "40px" }}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <span
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }, whiteSpace: "nowrap"}
                >
                  {"(6)"}
                </span>
                <VerticalMath
                  top={45000}
                  bottom={23000}
                  operator="+"
                  columns={6}
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <span
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }, whiteSpace: "nowrap"}
                >
                  {"(7)"}
                </span>
                <VerticalMath
                  top={87000}
                  bottom={15000}
                  operator="-"
                  columns={6}
                />
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
            <span key="1">{"(1) 2,050,030, (2) ແປດແສນສີ່ຮ້ອຍ (800,400)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 450,000, (4) 2,300"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 30,000, (2) 80,000"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"(3) 7,400,000 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"(1) >, (2) >, (3) =, (4) <, (5) ="}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"(6) 68000, (7) 72000"}</span>],
        },
      ],
      advice:
        "ຖ້າຕົວເລກຫຼາຍ, ໃຫ້ຂຽນຈຸດ (,) ຂັ້ນທຸກໆ 3 ຕົວເລກ ເພື່ອຈະໄດ້ອ່ານງ່າຍຂຶ້ນ!",
    },
  };
