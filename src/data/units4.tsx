import React from "react";
import { UnitData } from "./units2";
import { VerticalMath } from "@/components/illustrations";

export const unitsData4: UnitData[] = [
  {
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
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
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
                      width: "150px",
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
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
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
                    width: "120px",
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
                    width: "120px",
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
                        width: "120px",
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
                        width: "120px",
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
                      width: "150px",
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
                  }}
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
                  }}
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
  },

  {
    unitNumber: 2,
    unitTitle: "ຈຳນວນໂດຍປະມານ",
    unitGoal: "ເຂົ້າໃຈການຊອກຫາຈຳນວນໂດຍປະມານດ້ວຍການປັດຂຶ້ນ ຫຼື ປັດລົງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 16-23",
    keyPoints: {
      hint: {
        text: "ຖ້າຕົວເລກຖັດໄປແມ່ນ 0, 1, 2, 3, 4 ໃຫ້ປັດລົງ. ແຕ່ຖ້າເປັນ 5, 6, 7, 8, 9 ໃຫ້ປັດຂຶ້ນເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"2. ຈຳນວນໂດຍປະມານ"}
          </h3>

          <div
            style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: "#FFF3E0",
                padding: "16px",
                borderRadius: "8px",
                border: "2px solid #FF9800",
              }}
            >
              <h4 style={{ margin: "0 0 10px 0", color: "#E65100" }}>
                {"ປັດລົງ"}
              </h4>
              <p style={{ margin: 0 }}>
                {
                  "ເມື່ອຕົວເລກທີ່ຕ້ອງພິຈາລະນາແມ່ນ 0, 1, 2, 3, 4 ເຮົາຈະປ່ຽນເປັນ 0 ໝົດ."
                }
              </p>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: "#E8F5E9",
                padding: "16px",
                borderRadius: "8px",
                border: "2px solid #4CAF50",
              }}
            >
              <h4 style={{ margin: "0 0 10px 0", color: "#2E7D32" }}>
                {"ປັດຂຶ້ນ"}
              </h4>
              <p style={{ margin: 0 }}>
                {
                  "ເມື່ອຕົວເລກທີ່ຕ້ອງພິຈາລະນາແມ່ນ 5, 6, 7, 8, 9 ເຮົາຈະບວກ 1 ໃສ່ຫຼັກທາງໜ້າ ແລ້ວປ່ຽນທາງຫຼັງເປັນ 0."
                }
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                margin: "0 0 16px 0",
                textAlign: "center",
              }}
            >
              {"ຕົວຢ່າງ: ຊອກຫາຈຳນວນໂດຍປະມານຂອງ 6,840 ຢູ່ໃນຫຼັກພັນ"}
            </p>

            {/* Rounding Number Line */}
            <div
              className="math-illustration"
              style={{
                position: "relative",
                height: "80px",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
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
                  color: "#1976D2",
                  fontSize: "22px",
                }}
              >
                {"6,000"}
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
                  fontSize: "22px",
                }}
              >
                {"6,500"}
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
                  color: "#E91E63",
                  fontSize: "22px",
                }}
              >
                {"7,000"}
              </div>

              {/* Arrow pointing to 6840 */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "84%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    backgroundColor: "#FFF",
                    padding: "2px 6px",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    marginBottom: "4px",
                  }}
                >
                  {"6,840"}
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {"↓"}
                </div>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: "40px",
                fontSize: "22px",
              }}
            >
              {
                "6,840 ແມ່ນຢູ່ໃກ້ກັບ 7,000 ຫຼາຍກວ່າ 6,000 (ເພາະຫຼັກຮ້ອຍແມ່ນ 8 > 5) ສະນັ້ນ ປັດຂຶ້ນເປັນ 7,000."
              }
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
              {"ຈົ່ງຊອກຫາຈຳນວນໂດຍປະມານ ໂດຍການປັດຂຶ້ນ ຫຼື ປັດລົງຕາມທີ່ກຳນົດ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>

            <table
              style={{
                width: "100%",
                maxWidth: "600px",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "18px",
                marginLeft: "16px",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#E0E0E0",
                    borderBottom: "2px solid #333",
                  }}
                >
                  <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                    {"ຈຳນວນ"}
                  </th>
                  <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                    {"ປະມານຫຼັກສິບ"}
                  </th>
                  <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                    {"ປະມານຫຼັກຮ້ອຍ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "12px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"(1) 4,236"}
                  </td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "30px",
                      }}
                    ></span>
                  </td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "30px",
                      }}
                    ></span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "12px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"(2) 8,975"}
                  </td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "30px",
                      }}
                    ></span>
                  </td>
                  <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "30px",
                      }}
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງຊອກຫາຈຳນວນໂດຍປະມານຂອງ 4,425 ໃຫ້ເປັນຫຼັກພັນ: "}{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <div style={{  }}>
              {/* Number Line */}
              <div
                className="math-illustration"
                style={{
                  position: "relative",
                  height: "60px",
                  width: "100%",
                  maxWidth: "500px",
                  borderBottom: "4px solid #333",
                  marginTop: "20px",
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
                    fontSize: "14px",
                  }}
                >
                  {"4,000"}
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
                    fontSize: "14px",
                  }}
                >
                  {"4,500"}
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
                    fontSize: "14px",
                  }}
                >
                  {"5,000"}
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "42.5%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      backgroundColor: "#FFF",
                      padding: "2px 6px",
                      border: "1px solid #000",
                      borderRadius: "4px",
                      marginBottom: "4px",
                    }}
                  >
                    {"4,425"}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#E91E63",
                    }}
                  >
                    {"↓"}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "40px",
                  fontSize: "20px",
                }}
              >
                <span>{"(3) ຄຳຕອບແມ່ນ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
                {"ຂອບເຂດຂອງຈຳນວນ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "18px",
                }}
              >
                <p>{"ຖ້າປັດຈຳນວນໜຶ່ງເປັນຫຼັກພັນແລ້ວໄດ້ 3,000."}</p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"(1) ຈຳນວນທີ່ນ້ອຍທີ່ສຸດ ທີ່ປັດເປັນ 3,000 ແມ່ນ:"}</span>
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
                  <span>{"(2) ຈຳນວນທີ່ໃຫຍ່ທີ່ສຸດ ທີ່ປັດເປັນ 3,000 ແມ່ນ:"}</span>
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
                  className="math-illustration"
                  style={{
                    height: "10px",
                    width: "100%",
                    maxWidth: "400px",
                    background:
                      "linear-gradient(to right, transparent 20%, rgba(76, 175, 80, 0.3) 20%, rgba(76, 175, 80, 0.3) 80%, transparent 80%)",
                    borderLeft: "2px solid #333",
                    borderRight: "2px solid #333",
                    position: "relative",
                    marginTop: "40px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "20%",
                      transform: "translateX(-50%)",
                      fontSize: "12px",
                    }}
                  >
                    {"ນ້ອຍສຸດ"}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"3000"}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "80%",
                      transform: "translateX(-50%)",
                      fontSize: "12px",
                    }}
                  >
                    {"ໃຫຍ່ສຸດ"}
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
                  fontSize: "18px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F3E5F5",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "2px dashed #9C27B0",
                  }}
                >
                  {
                    "(3) ໄປຊື້ເຄື່ອງຢູ່ຕະຫຼາດ, ຊີ້ນໝູລາຄາ 48,500 ກີບ ແລະ ຜັກລາຄາ 12,000 ກີບ. ຖ້າປະມານລາຄາເປັນຫຼັກໝື່ນ, ເຮົາຄວນກຽມເງິນໄປປະມານຈັກກີບ ຈຶ່ງຈະພໍ?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ຄຳຕອບປະມານ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
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
      hintText: "ຂອບເຂດການປັດຂຶ້ນ ຫຼື ປັດລົງ ເລີ່ມແຕ່ 5 ປັດຂຶ້ນ, 4 ປັດລົງ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ ໂດຍປ່ຽນເປັນຈຳນວນປະມານຫຼັກພັນກ່ອນ ແລ້ວຈຶ່ງບວກກັນ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {"(1) 4,800 + 3,100"}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingLeft: "32px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"ປະມານເປັນ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"+"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"="}</span>
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
                <span style={{ fontWeight: "bold" }}>
                  {"(2) 9,500 - 2,400"}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingLeft: "32px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"ປະມານເປັນ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"-"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"="}</span>
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
              {"ອ່ານກຣາບໂດຍປະມານ: "}{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "200px",
                  borderLeft: "2px solid #000",
                  borderBottom: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "30px",
                  marginLeft: "40px",
                }}
              >
                {/* Y-axis Labels & Ticks */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "142px",
                    left: "-55px",
                    fontSize: "14px",
                  }}
                >
                  {"10,000"}
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "67px",
                    left: "-45px",
                    fontSize: "14px",
                  }}
                >
                  {"5,000"}
                </span>

                {/* Ticks every 1000 (15px each) */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      bottom: `${i * 15}px`,
                      left: "0",
                      width: i === 5 || i === 10 ? "10px" : "5px",
                      height: "2px",
                      backgroundColor: "#000",
                    }}
                  ></div>
                ))}

                {/* Bar near 7000 (7 * 15 = 105px) */}
                <div
                  style={{
                    width: "50px",
                    height: "105px",
                    backgroundColor: "#2196F3",
                    border: "1px solid #1565C0",
                  }}
                ></div>
              </div>
              <div style={{ fontSize: "18px" }}>
                <p>{"(3) ຈາກກຣາບເສົາ, ຄວາມສູງຂອງເສົາແມ່ນປະມານເທົ່າໃດ?"}</p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ຕອບ:"}</span>
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
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) ຫຼັກສິບ: 4,240, ຫຼັກຮ້ອຍ: 4,200 | (2) ຫຼັກສິບ: 8,980, ຫຼັກຮ້ອຍ: 9,000"
              }
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 4,000"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 2,500, (2) 3,499"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="4">
              {
                "(3) ປະມານ 60,000 ກີບ (48500 ປັດເປັນ 50000, 12000 ປັດເປັນ 10000)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">
              {"(1) 5,000 + 3,000 = 8,000 | (2) 10,000 - 2,000 = 8,000"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"(3) ປະມານ 7,000"}</span>],
        },
      ],
      advice:
        "ກ່ອນຈະປັດຂຶ້ນ ຫຼື ປັດລົງ, ໃຫ້ເບິ່ງວ່າເຂົາຖາມຫາຫຼັກໃດ ແລ້ວພິຈາລະນາຕົວເລກທີ່ຢູ່ເບື້ອງຂວາມືຂອງຫຼັກນັ້ນ!",
    },
  },
  {
    unitNumber: 3,
    unitTitle: "ກຣາບເສັ້ນ",
    unitGoal: "ເຂົ້າໃຈ ແລະ ອ່ານຂໍ້ມູນຈາກກຣາບເສັ້ນທີ່ສະແດງການປ່ຽນແປງ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>
            <strong>ກຣາບເສັ້ນແມ່ນຫຍັງ?</strong>
          </p>
          <p>
            ກຣາບເສັ້ນ ແມ່ນກຣາບທີ່ໃຊ້ຈຸດ ແລະ ເສັ້ນ
            ເພື່ອສະແດງການປ່ຽນແປງຂອງຂໍ້ມູນຕາມເວລາ. ມັນຊ່ວຍໃຫ້ເຮົາເຫັນໄດ້ຊັດເຈນວ່າ
            ຂໍ້ມູນເພີ່ມຂຶ້ນ ຫຼື ຫຼຸດລົງແນວໃດ.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <svg
              width="400"
              height="250"
              viewBox="0 0 400 250"
              style={{ border: "1px solid #ccc", backgroundColor: "#fff" }}
            >
              <line x1="50" y1="200" x2="380" y2="200" stroke="#ddd" />
              <line x1="50" y1="160" x2="380" y2="160" stroke="#ddd" />
              <line x1="50" y1="120" x2="380" y2="120" stroke="#ddd" />
              <line x1="50" y1="80" x2="380" y2="80" stroke="#ddd" />
              <line x1="50" y1="40" x2="380" y2="40" stroke="#ddd" />
              <line
                x1="50"
                y1="40"
                x2="50"
                y2="200"
                stroke="#000"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="200"
                x2="380"
                y2="200"
                stroke="#000"
                strokeWidth="2"
              />
              <text x="40" y="205" fontSize="12" textAnchor="end">
                0°C
              </text>
              <text x="40" y="165" fontSize="12" textAnchor="end">
                10°C
              </text>
              <text x="40" y="125" fontSize="12" textAnchor="end">
                20°C
              </text>
              <text x="40" y="85" fontSize="12" textAnchor="end">
                30°C
              </text>
              <text x="40" y="45" fontSize="12" textAnchor="end">
                40°C
              </text>
              <text x="100" y="220" fontSize="12" textAnchor="middle">
                8:00
              </text>
              <text x="160" y="220" fontSize="12" textAnchor="middle">
                10:00
              </text>
              <text x="220" y="220" fontSize="12" textAnchor="middle">
                12:00
              </text>
              <text x="280" y="220" fontSize="12" textAnchor="middle">
                14:00
              </text>
              <text x="340" y="220" fontSize="12" textAnchor="middle">
                16:00
              </text>
              <polyline
                points="100,120 160,100 220,80 280,72 340,88"
                fill="none"
                stroke="#2196F3"
                strokeWidth="3"
              />
              <circle cx="100" cy="120" r="4" fill="#E53935" />
              <circle cx="160" cy="100" r="4" fill="#E53935" />
              <circle cx="220" cy="80" r="4" fill="#E53935" />
              <circle cx="280" cy="72" r="4" fill="#E53935" />
              <circle cx="340" cy="88" r="4" fill="#E53935" />
            </svg>
          </div>
          <p>
            ຈາກກຣາບເທິງ, ເຮົາເຫັນວ່າອຸນຫະພູມເພີ່ມຂຶ້ນແຕ່ 8:00 ຫາ 14:00, ແລະ
            ເລີ່ມຫຼຸດລົງຫຼັງຈາກ 14:00.
          </p>
        </div>
      ),
      hint: {
        text: "ກຣາບເສັ້ນແມ່ນໃຊ້ສຳລັບເບິ່ງການປ່ຽນແປງຂອງຂໍ້ມູນວ່າເພີ່ມຂຶ້ນ ຫຼື ຫຼຸດລົງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈາກກຣາບອຸນຫະພູມລຸ່ມນີ້, ໃຫ້ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <svg
                width="400"
                height="250"
                viewBox="0 0 400 250"
                style={{ border: "1px solid #ccc", backgroundColor: "#fff" }}
              >
                <line x1="50" y1="200" x2="380" y2="200" stroke="#ddd" />
                <line x1="50" y1="160" x2="380" y2="160" stroke="#ddd" />
                <line x1="50" y1="120" x2="380" y2="120" stroke="#ddd" />
                <line x1="50" y1="80" x2="380" y2="80" stroke="#ddd" />
                <line x1="50" y1="40" x2="380" y2="40" stroke="#ddd" />
                <line
                  x1="50"
                  y1="40"
                  x2="50"
                  y2="200"
                  stroke="#000"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="200"
                  x2="380"
                  y2="200"
                  stroke="#000"
                  strokeWidth="2"
                />
                <text x="40" y="205" fontSize="12" textAnchor="end">
                  0°C
                </text>
                <text x="40" y="165" fontSize="12" textAnchor="end">
                  10°C
                </text>
                <text x="40" y="125" fontSize="12" textAnchor="end">
                  20°C
                </text>
                <text x="40" y="85" fontSize="12" textAnchor="end">
                  30°C
                </text>
                <text x="40" y="45" fontSize="12" textAnchor="end">
                  40°C
                </text>
                <text x="100" y="220" fontSize="12" textAnchor="middle">
                  8:00
                </text>
                <text x="160" y="220" fontSize="12" textAnchor="middle">
                  10:00
                </text>
                <text x="220" y="220" fontSize="12" textAnchor="middle">
                  12:00
                </text>
                <text x="280" y="220" fontSize="12" textAnchor="middle">
                  14:00
                </text>
                <text x="340" y="220" fontSize="12" textAnchor="middle">
                  16:00
                </text>
                <polyline
                  points="100,120 160,100 220,80 280,72 340,88"
                  fill="none"
                  stroke="#2196F3"
                  strokeWidth="3"
                />
                <circle cx="100" cy="120" r="4" fill="#E53935" />
                <circle cx="160" cy="100" r="4" fill="#E53935" />
                <circle cx="220" cy="80" r="4" fill="#E53935" />
                <circle cx="280" cy="72" r="4" fill="#E53935" />
                <circle cx="340" cy="88" r="4" fill="#E53935" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) ເວລາ 10:00 ອຸນຫະພູມແມ່ນຈັກອົງສາ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°C"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) ເວລາ 12:00 ອຸນຫະພູມແມ່ນຈັກອົງສາ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°C"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p>
              {"ອຸນຫະພູມສູງສຸດແມ່ນເວລາໃດ? "}{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <div style={{ fontSize: "20px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"ຕອບ: ເວລາ"}</span>
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
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {
                  "ກຣາບລຸ່ມນີ້ສະແດງອຸນຫະພູມຂອງ 2 ເມືອງ (ວຽງຈັນ: ເສັ້ນສີແດງ, ຊຽງຂວາງ: ເສັ້ນສີຟ້າ)."
                }{" "}
                <span className="point-label">{"(6 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <svg
                  width="400"
                  height="250"
                  viewBox="0 0 400 250"
                  style={{ border: "1px solid #ccc", backgroundColor: "#fff" }}
                >
                  <line x1="50" y1="200" x2="380" y2="200" stroke="#ddd" />
                  <line x1="50" y1="160" x2="380" y2="160" stroke="#ddd" />
                  <line x1="50" y1="120" x2="380" y2="120" stroke="#ddd" />
                  <line x1="50" y1="80" x2="380" y2="80" stroke="#ddd" />
                  <line x1="50" y1="40" x2="380" y2="40" stroke="#ddd" />
                  <line
                    x1="50"
                    y1="40"
                    x2="50"
                    y2="200"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="200"
                    x2="380"
                    y2="200"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <text x="40" y="205" fontSize="12" textAnchor="end">
                    0°C
                  </text>
                  <text x="40" y="165" fontSize="12" textAnchor="end">
                    10°C
                  </text>
                  <text x="40" y="125" fontSize="12" textAnchor="end">
                    20°C
                  </text>
                  <text x="40" y="85" fontSize="12" textAnchor="end">
                    30°C
                  </text>
                  <text x="40" y="45" fontSize="12" textAnchor="end">
                    40°C
                  </text>
                  <text x="100" y="220" fontSize="12" textAnchor="middle">
                    8:00
                  </text>
                  <text x="160" y="220" fontSize="12" textAnchor="middle">
                    10:00
                  </text>
                  <text x="220" y="220" fontSize="12" textAnchor="middle">
                    12:00
                  </text>
                  <text x="280" y="220" fontSize="12" textAnchor="middle">
                    14:00
                  </text>
                  <text x="340" y="220" fontSize="12" textAnchor="middle">
                    16:00
                  </text>
                  <polyline
                    points="100,100 160,88 220,72 280,60 340,80"
                    fill="none"
                    stroke="#E53935"
                    strokeWidth="3"
                  />
                  <polyline
                    points="100,140 160,128 220,112 280,100 340,120"
                    fill="none"
                    stroke="#1E88E5"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ເວລາ 14:00 ອຸນຫະພູມຢູ່ຊຽງຂວາງແມ່ນຈັກອົງສາ?"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"°C"}</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"ເວລາໃດທີ່ອຸນຫະພູມຂອງ 2 ເມືອງຕ່າງກັນຫຼາຍທີ່ສຸດ? "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "20px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຕອບ: ເວລາ"}</span>
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
      hintText:
        "ກຣາບ 2 ເສັ້ນຊ່ວຍໃຫ້ປຽບທຽບຂໍ້ມູນໄດ້ງ່າຍຂຶ້ນ. ເວລາໃດເສັ້ນຫ່າງກັນທີ່ສຸດ ແມ່ນຕ່າງກັນຫຼາຍທີ່ສຸດ.",
      hintIndex: 1,
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ກຣາບລຸ່ມນີ້ສະແດງນໍ້າໜັກຂອງ ທ້າວ ສອນ ໃນ 6 ເດືອນ. ຈົ່ງຕື່ມຂໍ້ມູນໃສ່ຕາຕະລາງ."
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <svg
                width="400"
                height="200"
                viewBox="0 0 400 200"
                style={{ border: "1px solid #ccc", backgroundColor: "#fff" }}
              >
                <line x1="50" y1="160" x2="380" y2="160" stroke="#ddd" />
                <line x1="50" y1="120" x2="380" y2="120" stroke="#ddd" />
                <line x1="50" y1="80" x2="380" y2="80" stroke="#ddd" />
                <line x1="50" y1="40" x2="380" y2="40" stroke="#ddd" />
                <line
                  x1="50"
                  y1="40"
                  x2="50"
                  y2="160"
                  stroke="#000"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="160"
                  x2="380"
                  y2="160"
                  stroke="#000"
                  strokeWidth="2"
                />
                <text x="40" y="165" fontSize="12" textAnchor="end">
                  20kg
                </text>
                <text x="40" y="125" fontSize="12" textAnchor="end">
                  25kg
                </text>
                <text x="40" y="85" fontSize="12" textAnchor="end">
                  30kg
                </text>
                <text x="40" y="45" fontSize="12" textAnchor="end">
                  35kg
                </text>
                <text x="100" y="180" fontSize="12" textAnchor="middle">
                  ເດືອນ 1
                </text>
                <text x="150" y="180" fontSize="12" textAnchor="middle">
                  ເດືອນ 2
                </text>
                <text x="200" y="180" fontSize="12" textAnchor="middle">
                  ເດືອນ 3
                </text>
                <text x="250" y="180" fontSize="12" textAnchor="middle">
                  ເດືອນ 4
                </text>
                <text x="300" y="180" fontSize="12" textAnchor="middle">
                  ເດືອນ 5
                </text>
                <text x="350" y="180" fontSize="12" textAnchor="middle">
                  ເດືອນ 6
                </text>
                <polyline
                  points="100,120 150,112 200,96 250,80 300,72 350,64"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3"
                />
                <circle cx="100" cy="120" r="4" fill="#000" />
                <circle cx="150" cy="112" r="4" fill="#000" />
                <circle cx="200" cy="96" r="4" fill="#000" />
                <circle cx="250" cy="80" r="4" fill="#000" />
                <circle cx="300" cy="72" r="4" fill="#000" />
                <circle cx="350" cy="64" r="4" fill="#000" />
              </svg>
            </div>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      border: "1px solid #333",
                      padding: "8px",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {"ເດືອນ"}
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    {"1"}
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    {"2"}
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    {"3"}
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    {"4"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1px solid #333",
                      padding: "8px",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {"ນໍ້າໜັກ (kg)"}
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    {"25"}
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                  </td>
                  <td style={{ border: "1px solid #333", padding: "8px" }}>
                    {"30"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p>
              {"ຈາກເດືອນ 1 ຫາ ເດືອນ 3 ນໍ້າໜັກເພີ່ມຂຶ້ນຈັກກິໂລກຣາມ? "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ fontSize: "20px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"ຕອບ: ເພີ່ມຂຶ້ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"kg"}</span>
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
            <span key="1">{"(1) 25 °C"}</span>,
            <span key="2">{"(2) 30 °C"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="3">{"ເວລາ 14:00 (ອຸນຫະພູມ 32°C)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="4">{"25 °C (ເບິ່ງເສັ້ນສີຟ້າທ່ອນເວລາ 14:00)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="5">
              {"ເວລາ 14:00 (ວຽງຈັນ 35°C, ຊຽງຂວາງ 25°C ຕ່າງກັນ 10°C)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="6">{"ເດືອນ 2: 26 kg, ເດືອນ 3: 28 kg"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="7">{"ເພີ່ມຂຶ້ນ 3 kg (28 - 25 = 3)"}</span>],
        },
      ],
      advice: "ອ່ານຄ່າຈາກກຣາບໃຫ້ລະອຽດແລ້ວນຳມາຄິດໄລ່.",
    },
  },
  {
    unitNumber: 4,
    unitTitle: "ການຫານ",
    unitGoal:
      "ເຂົ້າໃຈວິທີການຫານທີ່ມີຕົວຫານເປັນ 2 ຕົວເລກ ແລະ ສາມາດຕັ້ງບັ້ງຫານໄດ້",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ fontSize: "24px", color: "#1976D2", fontWeight: "bold" }}>
            {"ການຫານດ້ວຍ 2 ຕົວເລກ ຕາມທາງຕັ້ງ"}
          </p>
          <p style={{ fontSize: "22px" }}>
            {
              "ເມື່ອຫານຈຳນວນທີ່ມີຕົວຫານເປັນ 2 ຕົວເລກ ເຮົາສາມາດຕັ້ງບັ້ງຫານຕາມຂັ້ນຕອນ: "
            }
            <br />
            <strong>{"ກຳນົດຕົວຕັ້ງຫານ ➞ ຄາດເດົາຜົນຫານ ➞ ຄູນ ➞ ລົບ"}</strong>
            {"."}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              alignItems: "flex-start",
              padding: "20px",
              backgroundColor: "#F1F8E9",
              border: "2px dashed #4CAF50",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                ຕົວຢ່າງ: 85 ÷ 20 = ?
              </p>
              <table
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "var(--font-number)",
                  fontSize: "26px",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"85"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"20"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"80"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        borderTop: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                        color: "#1976D2",
                      }}
                    >
                      {"4"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                        color: "#D32F2F",
                      }}
                    >
                      {" 5"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                </tbody>
              </table>
              <span
                style={{
                  color: "#D32F2F",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"ຄຳຕອບ: 4 ເສດ 5"}
              </span>
            </div>

            <div
              style={{ fontSize: "22px", maxWidth: "450px", lineHeight: "1.6" }}
            >
              <p
                style={{
                  margin: "4px 0",
                  fontWeight: "bold",
                  color: "#1976D2",
                }}
              >
                {"ຂັ້ນຕອນການຄິດໄລ່ 85 ÷ 20 ຕາມທາງຕັ້ງ:"}
              </p>
              <p style={{ margin: "4px 0" }}>{"① ຄາດເດົາຜົນຫານ:"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຄິດໃນໃຈວ່າ 8 ÷ 2 = 4, ດັ່ງນັ້ນ 85 ÷ 20 ໜ້າຈະໄດ້ປະມານ 4."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຂຽນ '4' ເປັນຜົນຫານ (ກ້ອງຕົວຫານ 20)."}
              </p>

              <p style={{ margin: "8px 0 4px 0" }}>{"② ຄູນ ແລະ ລົບ:"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຄູນ: ເອົາຜົນຫານ 4 × 20 = 80. ຂຽນ '80' ໄວ້ກ້ອງ 85."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ລົບ: 85 - 80 = 5. ຂຽນ '5' ເປັນຕົວເສດ."}
              </p>

              <p style={{ margin: "8px 0 4px 0" }}>{"③ ກວດເບິ່ງຕົວເສດ:"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {
                  "• ຕົວເສດ 5 ແມ່ນໜ້ອຍກວ່າຕົວຫານ 20 (5 < 20), ສະແດງວ່າການຫານຖືກຕ້ອງແລ້ວ."
                }
              </p>
              <p
                style={{
                  margin: "8px 0 0 0",
                  fontWeight: "bold",
                  color: "#D32F2F",
                }}
              >
                {"ຜົນຫານແມ່ນ 4, ເສດ 5."}
              </p>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາຄາດເດົາຜົນຫານ, ໃຫ້ລອງເອົາຕົວເລກໜ້າສຸດມາຫານກັນເບິ່ງກ່ອນ. ແລະ ຕົວເສດຕ້ອງໜ້ອຍກວ່າຕົວຫານສະເໝີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ການຫານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                <span>{"(1) 60 ÷ 20 ="}</span>
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
                <span>{"(2) 90 ÷ 30 ="}</span>
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
                <span>{"(3) 120 ÷ 40 ="}</span>
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
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຜົນຫານ ແລະ ຕົວເສດ: "}{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <div style={{ fontSize: "20px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"85 ÷ 20 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສດ"}</span>
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
                {
                  "ມີເຈ້ຍ 120 ແຜ່ນ, ແບ່ງໃຫ້ນັກຮຽນຫ້ອງລະ 30 ແຜ່ນ. ຈະແບ່ງໄດ້ຈັກຫ້ອງ?"
                }{" "}
                <span className="point-label">{"(6 ຄະແນນ)"}</span>
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
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "200px",
                      height: "40px",
                    }}
                  ></span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
                  <span>{"ຫ້ອງ"}</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {
                  "ມີໝາກໂປມ 100 ໜ່ວຍ, ເອົາໃສ່ກັບ ກັບລະ 30 ໜ່ວຍ. ຈະໄດ້ຈັກກັບ ແລະ ເຫຼືອຈັກໜ່ວຍ?"
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"ຕອບ: ໄດ້"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ກັບ, ເຫຼືອ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ໜ່ວຍ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ໃນໂຈດບັນຫາ, ຢ່າລືມຂຽນຫົວໜ່ວຍໃຫ້ຄົບຖ້ວນທັງຜົນຫານ ແລະ ຕົວເສດ!",
      hintIndex: 1,
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັ້ງຫານໃຫ້ຖືກຕ້ອງ."}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "60px",
                paddingLeft: "40px",
                fontFamily: "var(--font-number)",
                fontSize: "24px",
              }}
            >
              <table
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "var(--font-number)",
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"85"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"20"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      {"0"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        borderTop: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                </tbody>
              </table>

              <table
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "var(--font-number)",
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"97"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"30"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      {"0"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        borderTop: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່: 75 ÷ 20 "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ fontSize: "20px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
                <span>{"ເສດ"}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 3 | (2) 3 | (3) 3"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"85 ÷ 20 = 4 ເສດ 5"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"ປະໂຫຍກສັນຍະລັກ: 120 ÷ 30 = 4 (ຕອບ: 4 ຫ້ອງ)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="4">
              {"100 ÷ 30 = 3 ເສດ 10 (ຕອບ: ໄດ້ 3 ກັບ, ເຫຼືອ 10 ໜ່ວຍ)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">{"ບັ້ງທີ 1: ຜົນຫານ 4, ລົບ 80, ເສດ 5"}</span>,
            <span key="6">{"ບັ້ງທີ 2: ຜົນຫານ 3, ລົບ 90, ເສດ 7"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="7">{"75 ÷ 20 = 3 ເສດ 15"}</span>],
        },
      ],
      advice:
        "ເມື່ອຕົວຫານມີ 0 ຢູ່ທາງຫຼັງ, ເຮົາສາມາດຄາດເດົາຜົນຫານໄດ້ໂດຍການຕັດ 0 ອອກທັງສອງເບື້ອງແລ້ວຫານໃນໃຈ (ແຕ່ເວລາລົບຕ້ອງໃຊ້ຕົວເລກເດີມ).",
    },
  },
  {
    unitNumber: 5,
    unitTitle: "ຫຼັກການຄິດໄລ່",
    unitGoal: "ຮຽນຮູ້ລຳດັບຂອງການຄິດໄລ່ ແລະ ປະໂຫຍກສັນຍະລັກຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 46-53",
    keyPoints: {
      hint: {
        text: "ລຳດັບການຄິດໄລ່: 1. ໃນວົງເລັບ ( ) -> 2. ຄູນ ແລະ ຫານ -> 3. ບວກ ແລະ ລົບ. ຖ້າມີແຕ່ + ແລະ - ຫຼື × ແລະ ÷ ແມ່ນໃຫ້ຄິດໄລ່ຈາກຊ້າຍຫາຂວາເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ກົດລະບຽບການຄິດໄລ່"}
          </h3>

          <div
            style={{
              backgroundColor: "#FFF9C4",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "6px solid #FFC107",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                margin: "0 0 12px 0",
              }}
            >
              {"ລຳດັບການຄິດໄລ່ມີດັ່ງນີ້:"}
            </p>
            <ol
              style={{
                fontSize: "22px",
                margin: 0,
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <li>{"ຄິດໄລ່ເລກໃນວົງເລັບ ( ) ກ່ອນໝູ່ໝົດ."}</li>
              <li>{"ຄິດໄລ່ເລກຄູນ × ແລະ ເລກຫານ ÷ ກ່ອນບວກ ແລະ ລົບ."}</li>
              <li>
                {"ຖ້າມີແຕ່ + ແລະ - ຫຼື × ແລະ ÷ ແມ່ນໃຫ້ຄິດໄລ່ຈາກ ຊ້າຍ ໄປ ຂວາ."}
              </li>
            </ol>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* Example 1 */}
            <div
              style={{
                flex: "1 1 300px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "8px",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {"ຕົວຢ່າງ: ມີວົງເລັບ ( )"}
              </div>
              <div
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  fontFamily: "monospace",
                }}
              >
                <div>{"20 - (6 + 5)"}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8px",
                  }}
                >
                  <svg width="100" height="30">
                    <path
                      d="M 60,0 L 60,15 L 80,15 L 80,0"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                    <text
                      x="70"
                      y="28"
                      fill="#F44336"
                      fontSize="16"
                      textAnchor="middle"
                    >
                      {"11"}
                    </text>
                  </svg>
                </div>
                <div>{"= 20 - 11 = 9"}</div>
              </div>
            </div>

            {/* Example 2 */}
            <div
              style={{
                flex: "1 1 300px",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  padding: "8px",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {"ຕົວຢ່າງ: ມີຄູນ ຫຼື ຫານ"}
              </div>
              <div
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  fontFamily: "monospace",
                }}
              >
                <div>{"50 - 4 × 7"}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8px",
                  }}
                >
                  <svg width="100" height="30">
                    <path
                      d="M 60,0 L 60,15 L 80,15 L 80,0"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                    <text
                      x="70"
                      y="28"
                      fill="#F44336"
                      fontSize="16"
                      textAnchor="middle"
                    >
                      {"28"}
                    </text>
                  </svg>
                </div>
                <div>{"= 50 - 28 = 22"}</div>
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
              {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້ຕາມລຳດັບການຄິດໄລ່: "}{" "}
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
                <span>{"(1) 100 - (10 + 5) ="}</span>
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
                <span>{"(2) 51 + (68 - 43) ="}</span>
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
                <span>{"(3) (17 + 8) × 4 ="}</span>
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
                <span>{"(4) 42 ÷ (21 - 14) ="}</span>
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
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້ (ລະວັງເລກຄູນ ແລະ ເລກຫານ): "}{" "}
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
                <span>{"(1) 8 + 12 × 5 ="}</span>
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
                <span>{"(2) 24 - 15 ÷ 5 ="}</span>
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
                <span>{"(3) 300 - 25 × 4 ="}</span>
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
                <span>{"(4) 40 + 28 ÷ 4 ="}</span>
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
      hintText: "ນຳໃຊ້ຄຸນລັກສະນະການແຈກຢາຍເພື່ອຊ່ວຍໃຫ້ການຄິດໄລ່ໄວຂຶ້ນເດີ!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບ່ອນຫວ່າງ ໂດຍນຳໃຊ້ຄຸນລັກສະນະການແຈກຢາຍ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 4 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  padding: "16px",
                  backgroundColor: "#F3E5F5",
                  borderRadius: "8px",
                  border: "2px dashed #9C27B0",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: "0 0 12px 0", fontWeight: "bold" }}>
                  {"ຄຸນລັກສະນະການແຈກຢາຍ:"}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontFamily: "monospace",
                  }}
                >
                  <div>{"(◯ + △) × □ = ◯ × □ + △ × □"}</div>
                  <div>{"(◯ - △) × □ = ◯ × □ - △ × □"}</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "22px",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"(1) ( 5 + 3 ) × 9 ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"× 9 +"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"× 9"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"(2) ( 12 - 8 ) × 4 = 12 × 4 -"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"× 4"}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້ຕາມລຳດັບການຄິດໄລ່: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "22px",
                padding: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 45 + 5 × 8 ="}</span>
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
                <span>{"(2) (90 - 30) ÷ 6 ="}</span>
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
                <span>{"(3) 8 × 7 - 12 ÷ 3 ="}</span>
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
                <span>{"(4) 100 - (24 + 16) ÷ 8 ="}</span>
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
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ ໂດຍນຳໃຊ້ຄຸນລັກສະນະການແຈກຢາຍ: "
              }{" "}
              <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ)"}</span>
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
              {/* Problem 1 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{"(1) 98 × 5"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingLeft: "32px",
                  }}
                >
                  <span>{"= ( 100 -"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{") × 5"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingLeft: "32px",
                  }}
                >
                  <span>{"= 100 × 5 -"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"× 5 ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              </div>

              {/* Problem 2 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{"(2) 13 × 7 + 87 × 7"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingLeft: "32px",
                  }}
                >
                  <span>{"= ("}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"+ 87 ) ×"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
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
          answers: [<span key="1">{"(1) 85, (2) 76, (3) 100, (4) 6"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(1) 68, (2) 21, (3) 200, (4) 47"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 5 ແລະ 3, (2) 8"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 5 - 1",
          answers: [<span key="4">{"(1) 85, (2) 10, (3) 52, (4) 95"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 5 - 2",
          answers: [<span key="5">{"(1) 2, 2, 490, (2) 13, 7, 700"}</span>],
        },
      ],
      advice:
        "ຖ້າມີທັງ + - × ÷ ປົນກັນ, ຢ່າລືມເຮັດເລກຄູນ ຫຼື ເລກຫານ ກ່ອນເດີ! ຍົກເວັ້ນວ່າມີວົງເລັບ ( ) ຈຶ່ງເຮັດໃນວົງເລັບກ່ອນ.",
    },
  },

  {
    unitNumber: 6,
    unitTitle: "ຂະໜາດຂອງມຸມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບມຸມ ແລະ ການວັດແທກມຸມດ້ວຍບັນທັດແທກມຸມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 54-63",
    keyPoints: {
      hint: {
        text: "ມຸມສາກ ມີຂະໜາດເທົ່າກັບ 90 ອົງສາ (90°). ເສັ້ນຊື່ມີມຸມເທົ່າກັບ 180° ແລະ ວົງມົນມີມຸມເທົ່າກັບ 360°.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການວັດແທກຂະໜາດຂອງມຸມ"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {/* Visualizing angles */}
            <div
              style={{
                flex: "1 1 300px",
                border: "2px solid #9C27B0",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#F3E5F5",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  textAlign: "center",
                }}
              >
                {"ຊະນິດຂອງມຸມຕ່າງໆ"}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                {/* 90 degrees */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"ມຸມສາກ = 90°"}
                  </span>
                  <svg width="80" height="80">
                    <path
                      d="M 10,70 L 70,70"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 70,70 L 70,10"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 60,70 L 60,60 L 70,60"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* 180 degrees */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"ມຸມພຽງ = 180°"}
                  </span>
                  <svg width="100" height="60">
                    <path
                      d="M 10,50 L 90,50"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="50" r="3" fill="#333" />
                    <path
                      d="M 70,50 A 20,20 0 0,0 30,50"
                      fill="none"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* 360 degrees */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"ມຸມຮອບ = 360°"}
                  </span>
                  <svg width="100" height="80">
                    <path
                      d="M 50,40 L 90,40"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="40" r="3" fill="#333" />
                    <circle
                      cx="50"
                      cy="40"
                      r="20"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Facts */}
            <div
              style={{
                flex: "1 1 300px",
                padding: "16px",
                backgroundColor: "#FFF",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: "0 0 16px 0",
                  color: "#333",
                }}
              >
                {"ຈົ່ງຈື່ໄວ້ວ່າ:"}
              </p>
              <ul
                style={{
                  fontSize: "22px",
                  margin: 0,
                  paddingLeft: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  {
                    "1 ສ່ວນທີ່ແບ່ງມຸມສາກອອກເປັນ 90 ສ່ວນເທົ່າກັນ ເອີ້ນວ່າ 1 ອົງສາ (ຂຽນເປັນ 1°)."
                  }
                </li>
                <li>{"ຂະໜາດຂອງມຸມສາກ ແມ່ນ 90°."}</li>
                <li>{"ຂະໜາດຂອງມຸມພຽງ (ເສັ້ນຊື່) ແມ່ນ 180°."}</li>
                <li>{"ຂະໜາດຂອງມຸມ 1 ຮອບວົງມົນ ແມ່ນ 360°."}</li>
              </ul>
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
              {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ: "}{" "}
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
                <span>{"(1) ມຸມສາກ 1 ມຸມ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) ມຸມທີ່ປິ່ນໄດ້ ເຄິ່ງຮອບ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) ມຸມທີ່ປິ່ນໄດ້ 1 ຮອບເຕັມ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) ມຸມສາກ 2 ມຸມລວມກັນ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
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
              {"ຈົ່ງຄິດໄລ່ຊອກຫາຂະໜາດຂອງມຸມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {/* Angle problem 1 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <div style={{ position: "relative" }}>
                  <svg width="200" height="120">
                    {/* Base line */}
                    <path
                      d="M 20,100 L 180,100"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Angle line */}
                    <path
                      d="M 100,100 L 150,20"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Known angle arc */}
                    <path
                      d="M 130,100 A 30,30 0 0,0 115,75"
                      fill="none"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                    <text x="140" y="85" fill="#2196F3" fontSize="16">
                      {"60°"}
                    </text>
                    {/* Unknown angle arc */}
                    <path
                      d="M 70,100 A 30,30 0 0,1 115,75"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                    <text
                      x="80"
                      y="70"
                      fill="#F44336"
                      fontSize="20"
                      fontWeight="bold"
                    >
                      {"?"}
                    </text>
                    {/* Vertex */}
                    <circle cx="100" cy="100" r="4" fill="#333" />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ມຸມ ? = "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "30px",
                    }}
                  ></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Angle problem 2 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <div style={{ position: "relative" }}>
                  <svg width="200" height="160">
                    {/* Right angle lines */}
                    <path
                      d="M 100,140 L 180,140"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 100,140 L 100,20"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Right angle symbol */}
                    <path
                      d="M 120,140 L 120,120 L 100,120"
                      fill="none"
                      stroke="#333"
                      strokeWidth="1"
                    />

                    {/* Inner angle line */}
                    <path
                      d="M 100,140 L 160,70"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />

                    {/* Known angle arc */}
                    <path
                      d="M 100,100 A 40,40 0 0,1 125,110"
                      fill="none"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                    <text x="110" y="90" fill="#2196F3" fontSize="16">
                      {"35°"}
                    </text>

                    {/* Unknown angle arc */}
                    <path
                      d="M 140,140 A 40,40 0 0,0 125,110"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                    <text
                      x="145"
                      y="115"
                      fill="#F44336"
                      fontSize="20"
                      fontWeight="bold"
                    >
                      {"?"}
                    </text>

                    <circle cx="100" cy="140" r="4" fill="#333" />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ມຸມ ? = "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "30px",
                    }}
                  ></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "ມຸມເທິງເສັ້ນຊື່ແມ່ນ 180 ອົງສາສະເໝີ. ຖ້າຮູ້ມຸມໜຶ່ງແລ້ວ ໃຫ້ເອົາ 180 ມາລົບອອກ.",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                <svg width="300" height="200">
                  {/* Base line */}
                  <path
                    d="M 20,100 L 280,100"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {/* Line 1 */}
                  <path
                    d="M 150,100 L 220,30"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {/* Line 2 */}
                  <path
                    d="M 150,100 L 50,20"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />

                  {/* Angle 1 (known) */}
                  <path
                    d="M 190,100 A 40,40 0 0,0 178,72"
                    fill="none"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text x="195" y="85" fill="#2196F3" fontSize="16">
                    {"45°"}
                  </text>

                  {/* Angle 2 (known) */}
                  <path
                    d="M 110,100 A 40,40 0 0,1 120,75"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <text x="80" y="90" fill="#4CAF50" fontSize="16">
                    {"38°"}
                  </text>

                  {/* Angle 3 (unknown) */}
                  <path
                    d="M 178,72 A 40,40 0 0,0 120,75"
                    fill="none"
                    stroke="#F44336"
                    strokeWidth="2"
                  />
                  <text
                    x="145"
                    y="55"
                    fill="#F44336"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    {"?"}
                  </text>

                  <circle cx="150" cy="100" r="4" fill="#333" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span>{"ມຸມ ? = 180° - (45° + 38°) ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
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
              {"ຈົ່ງຄິດໄລ່ຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {/* Problem 1: Straight line 180 - 125 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <div style={{ position: "relative" }}>
                  <svg width="200" height="120">
                    <path
                      d="M 20,100 L 180,100"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 100,100 L 140,30"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 125,100 A 30,30 0 0,0 115,74"
                      fill="none"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                    <text x="135" y="85" fill="#2196F3" fontSize="16">
                      {"55°"}
                    </text>
                    <path
                      d="M 70,100 A 30,30 0 0,1 115,74"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                    <text
                      x="75"
                      y="70"
                      fill="#F44336"
                      fontSize="20"
                      fontWeight="bold"
                    >
                      {"?"}
                    </text>
                    <circle cx="100" cy="100" r="4" fill="#333" />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ມຸມ ? = "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "30px",
                    }}
                  ></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Problem 2: Right angle 90 - 40 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <div style={{ position: "relative" }}>
                  <svg width="200" height="160">
                    <path
                      d="M 100,140 L 180,140"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 100,140 L 100,20"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 120,140 L 120,120 L 100,120"
                      fill="none"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <path
                      d="M 100,140 L 155,75"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <path
                      d="M 100,100 A 40,40 0 0,1 126,110"
                      fill="none"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                    <text x="110" y="90" fill="#2196F3" fontSize="16">
                      {"50°"}
                    </text>
                    <path
                      d="M 140,140 A 40,40 0 0,0 126,110"
                      fill="none"
                      stroke="#F44336"
                      strokeWidth="2"
                    />
                    <text
                      x="145"
                      y="115"
                      fill="#F44336"
                      fontSize="20"
                      fontWeight="bold"
                    >
                      {"?"}
                    </text>
                    <circle cx="100" cy="140" r="4" fill="#333" />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ມຸມ ? = "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "30px",
                    }}
                  ></span>
                  <span>{"°"}</span>
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
              {
                "ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ທີ່ເກີດຈາກການປະສົມບັນທັດແທກມຸມ (ສາມຫຼ່ຽມ): "
              }{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <svg width="300" height="180">
                {/* Baseline */}
                <path
                  d="M 20,150 L 280,150"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                {/* 45-45-90 Triangle left */}
                <path
                  d="M 50,150 L 150,50 L 150,150 Z"
                  fill="rgba(33, 150, 243, 0.1)"
                  stroke="#2196F3"
                  strokeWidth="2"
                />
                {/* 30-60-90 Triangle right */}
                <path
                  d="M 150,150 L 150,50 L 208,150 Z"
                  fill="rgba(76, 175, 80, 0.1)"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                />

                {/* Target Angle Arc (?) combining 45 on left and 30 on right at the top vertex (150, 50) */}
                <path
                  d="M 129,71 A 30,30 0 0,0 165,76"
                  fill="none"
                  stroke="#F44336"
                  strokeWidth="2"
                />
                <text
                  x="145"
                  y="95"
                  fill="#F44336"
                  fontSize="22"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {"?"}
                </text>

                {/* Info Labels */}
                <text x="90" y="130" fill="#2196F3" fontSize="14">
                  {"45°"}
                </text>
                <text x="180" y="130" fill="#4CAF50" fontSize="14">
                  {"60°"}
                </text>

                <circle cx="150" cy="50" r="4" fill="#333" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                fontSize: "22px",
              }}
            >
              <span>{"ມຸມ ? = 45° + 30° ="}</span>
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "80px",
                  height: "40px",
                }}
              ></span>
              <span>{"°"}</span>
            </div>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 90, (2) 180, (3) 360, (4) 180"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {"(1) 120° (ຍ້ອນ 180 - 60), (2) 55° (ຍ້ອນ 90 - 35)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"97°"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 6 - 1",
          answers: [
            <span key="4">
              {"(1) 125° (ຍ້ອນ 180 - 55), (2) 40° (ຍ້ອນ 90 - 50)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 6 - 2",
          answers: [<span key="5">{"75° (ຍ້ອນ 45 + 30)"}</span>],
        },
      ],
      advice:
        "ມຸມເທິງເສັ້ນຊື່ມີຂະໜາດ 180 ອົງສາສະເໝີ! ຖ້າຮູ້ມຸມໜຶ່ງ ແລ້ວຢາກຊອກຫາມຸມທີ່ເຫຼືອ ແມ່ນໃຫ້ເອົາ 180 ມາລົບອອກ.",
    },
  },
  {
    unitNumber: 7,
    unitTitle: "ຈຳນວນທົດສະນິຍົມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຈຳນວນທົດສະນິຍົມ ແລະ ການວັດແທກດ້ວຍເລກທົດສະນິຍົມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 64-76",
    keyPoints: {
      hint: {
        text: "0.1 ແມ່ນ 1 ສ່ວນ 10 ຂອງ 1. ຖ້າມີ 0.1 ຢູ່ 10 ເທື່ອ ຈະເທົ່າກັບ 1 ເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນທົດສະນິຍົມ (Decimals)"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {/* Visual Beaker */}
            <div
              style={{
                flex: "1 1 300px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {"ຕົວຢ່າງ: ປະລິມານນ້ຳ 1.3 L"}
              </div>
              <svg width="120" height="150" viewBox="0 0 120 150">
                {/* 1st Beaker (Full) */}
                <rect
                  x="10"
                  y="10"
                  width="40"
                  height="120"
                  fill="#FFF"
                  stroke="#333"
                  strokeWidth="2"
                />
                <rect x="10" y="10" width="40" height="120" fill="#2196F3" />
                <text
                  x="30"
                  y="70"
                  fill="#FFF"
                  fontSize="18"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {"1 L"}
                </text>

                {/* 2nd Beaker (0.3 L Filled) */}
                <rect
                  x="70"
                  y="10"
                  width="40"
                  height="120"
                  fill="#FFF"
                  stroke="#333"
                  strokeWidth="2"
                />
                {/* 10 Division ticks */}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={i}
                    x1="70"
                    y1={130 - i * 12}
                    x2="80"
                    y2={130 - i * 12}
                    stroke="#333"
                    strokeWidth="1"
                  />
                ))}
                {/* Liquid 3 divisions high (0.3L) */}
                <rect x="70" y="94" width="40" height="36" fill="#2196F3" />
                <text
                  x="90"
                  y="145"
                  fill="#333"
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {"0.3 L"}
                </text>
              </svg>
              <p style={{ fontSize: "22px", margin: "12px 0 0 0" }}>
                {"1 L ກັບ 0.3 L ລວມກັນເປັນ "}
                <strong style={{ color: "#E91E63" }}>{"1.3 L"}</strong>
              </p>
            </div>

            {/* Decimal Place Value */}
            <div
              style={{
                flex: "1 1 300px",
                padding: "16px",
                backgroundColor: "#FFF",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: "0 0 16px 0",
                  color: "#1976D2",
                }}
              >
                {"ໂຄງປະກອບຄ່າປະຈຳຫຼັກ:"}
              </p>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຫຼັກໜ່ວຍ"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຈຸດ"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຫຼັກທົດສະນິຍົມທີ 1"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "24px", fontWeight: "bold" }}>
                    <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                      {"1"}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        color: "red",
                      }}
                    >
                      {"."}
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #ccc" }}>
                      {"3"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul
                style={{
                  fontSize: "22px",
                  margin: "16px 0 0 0",
                  paddingLeft: "20px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  {
                    "ຫຼັກທົດສະນິຍົມທີ 1 ແມ່ນຕຳແໜ່ງທີ່ສະແດງເຖິງສ່ວນສິບ (1/10) ຂອງ 1."
                  }
                </li>
                <li>{"ຈຸດ '.' ເອີ້ນວ່າ ຈຸດທົດສະນິຍົມ."}</li>
              </ul>
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
              {"ຈົ່ງບອກປະລິມານນ້ຳຕໍ່ໄປນີ້ເປັນເລກທົດສະນິຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <svg width="120" height="100" viewBox="0 0 120 100">
                  <rect
                    x="20"
                    y="10"
                    width="40"
                    height="80"
                    fill="#FFF"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1="20"
                      y1={90 - i * 8}
                      x2="30"
                      y2={90 - i * 8}
                      stroke="#333"
                    />
                  ))}
                  <rect x="20" y="34" width="40" height="56" fill="#2196F3" />
                  <text x="75" y="55" fontSize="16">
                    {"1 L"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
                  <span>{"L"}</span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <svg width="70" height="100" viewBox="0 0 70 100">
                    <rect
                      x="10"
                      y="10"
                      width="40"
                      height="80"
                      fill="#FFF"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    <rect x="10" y="10" width="40" height="80" fill="#2196F3" />
                  </svg>
                  <svg width="70" height="100" viewBox="0 0 70 100">
                    <rect
                      x="10"
                      y="10"
                      width="40"
                      height="80"
                      fill="#FFF"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={i}
                        x1="10"
                        y1={90 - i * 8}
                        x2="20"
                        y2={90 - i * 8}
                        stroke="#333"
                      />
                    ))}
                    <rect x="10" y="58" width="40" height="32" fill="#2196F3" />
                  </svg>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
                  <span>{"L"}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
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
                <span>{"(3) ຈຳນວນທີ່ປະກອບດ້ວຍ 0.1 ຢູ່ 18 ເທື່ອ ແມ່ນ"}</span>
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
                <span>{"(4) ຈຳນວນທີ່ປະກອບດ້ວຍ 0.1 ຢູ່ 25 ເທື່ອ ແມ່ນ"}</span>
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
      hintText: "1 ຂີດໝາຍນ້ອຍໆ ຢູ່ເທິງເສັ້ນຈຳນວນແມ່ນເທົ່າກັບ 0.1 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນລຸ່ມນີ້ ແລ້ວຂຽນໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  marginTop: "20px",
                }}
              >
                {/* Decimal Number Line */}
                <div
                  className="math-illustration"
                  style={{
                    position: "relative",
                    height: "50px",
                    width: "100%",
                    maxWidth: "500px",
                    borderBottom: "4px solid #333",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "0",
                      width: "2px",
                      height: "15px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: "-10px",
                      fontWeight: "bold",
                      fontSize: "14px",
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
                      height: "15px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: "calc(50% - 10px)",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"1"}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "0",
                      width: "2px",
                      height: "15px",
                      backgroundColor: "#333",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      right: "-10px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"2"}
                  </div>

                  {/* division ticks */}
                  {[...Array(20)].map((_, i) => {
                    if (i === 10) return null;
                    return (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: i * 5 + "%",
                          width: "1px",
                          height: i % 5 === 0 ? "10px" : "6px",
                          backgroundColor: "#666",
                        }}
                      ></div>
                    );
                  })}

                  {/* Arrows */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "38%",
                      transform: "translateX(-50%)",
                      color: "#E91E63",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"↓ (1)"}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "73%",
                      transform: "translateX(-50%)",
                      color: "#E91E63",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {"↓ (2)"}
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
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
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
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(3) 0.8"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"0.5"}</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(4) 1.2"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"1.5"}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "22px",
                padding: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 0.4 + 0.3 ="}</span>
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
                <span>{"(2) 1.5 - 0.7 ="}</span>
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
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "📘 ນາງ ມີນາ ມີນ້ຳສົ້ມ 0.6 L ແລະ ນາງ ອາລິນ ມີນ້ຳສົ້ມ 0.8 L. ຖ້າເອົານ້ຳສົ້ມຂອງທັງສອງຄົນມາເທໃສ່ກັນ ຈະມີນ້ຳສົ້ມທັງໝົດຈັກ L?"
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
          answers: [<span key="1">{"(1) 0.7 L, (2) 1.4 L"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 1.8, (4) 2.5"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"(1) 0.7, (2) 1.4"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"(3) >, (4) <"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"(1) 0.7, (2) 0.8"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="6">{"1.4 L (ຍ້ອນ 0.6 + 0.8 = 1.4)"}</span>],
        },
      ],
      advice:
        "ຫຼັກທົດສະນິຍົມທີ 1 ບວກລົບກັນໄດ້ຄືກັບເລກທຳມະດາ, ແຕ່ຢ່າລືມຂຽນຈຸດທົດສະນິຍົມໃຫ້ຖືກຫຼັກເດີ!",
    },
  },

  {
    unitNumber: 8,
    unitTitle: "ການຫານ (ຕໍ່)",
    unitGoal:
      "ຮຽນຮູ້ການຫານຕາມທາງຕັ້ງທີ່ມີຜົນຫານ 2 ຕົວເລກ ແລະ ວິທີການຫານທີ່ມີຕົວເສດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 77-83",
    keyPoints: {
      hint: {
        text: "ວິທີການຫານຕາມທາງຕັ້ງ: 1. ຫານ -> 2. ຄູນ -> 3. ລົບ -> 4. ຊັກລົງມາ. ຢ່າລືມກວດຄືນວ່າ ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະ微ີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຫານຕາມທາງຕັ້ງທີ່ມີຜົນຫານ 2 ຕົວເລກ"}
          </h3>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* Division steps */}
            <div
              style={{
                flex: "1 1 300px",
                border: "2px solid #FF9800",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#FFF8E1",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FF9800",
                  color: "white",
                  padding: "8px",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  fontSize: "22px",
                }}
              >
                {"ຕົວຢ່າງ: 85 ÷ 3"}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                {/* Division display */}
                <table
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "24px",
                    fontFamily: "monospace",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "4px 12px",
                          textAlign: "right",
                          borderBottom: "2px solid #333",
                        }}
                      >
                        {"85"}
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #333",
                          padding: "4px 12px",
                          textAlign: "left",
                          borderBottom: "2px solid #333",
                        }}
                      >
                        {"3"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 12px", textAlign: "right" }}>
                        {"6"}
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #333",
                          padding: "4px 12px",
                          textAlign: "left",
                        }}
                      >
                        {"28"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 12px", textAlign: "right" }}>
                        {"25"}
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #333",
                          padding: "0",
                        }}
                      ></td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 12px", textAlign: "right" }}>
                        {"24"}
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #333",
                          padding: "0",
                        }}
                      ></td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "4px 12px",
                          textAlign: "right",
                          borderTop: "1px dashed #333",
                        }}
                      >
                        {"1"}
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #333",
                          padding: "0",
                        }}
                      ></td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ fontSize: "22px", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 6px 0" }}>{"• 8 ÷ 3 = 2 (ຂຽນ 2)"}</p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    {"• 3 × 2 = 6, 8 - 6 = 2"}
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    {"• ຊັກ 5 ລົງມາເປັນ 25"}
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    {"• 25 ÷ 3 = 8 (ຂຽນ 8)"}
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    {"• 3 × 8 = 24, 25 - 24 = 1"}
                  </p>
                  <strong style={{ color: "#E91E63" }}>
                    {"ຜົນຫານ: 28 ເສດ 1"}
                  </strong>
                </div>
              </div>
            </div>

            {/* Fact checking */}
            <div
              style={{
                flex: "1 1 300px",
                padding: "16px",
                backgroundColor: "#FFF",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: "0 0 12px 0",
                }}
              >
                {"ສູດການກວດຄືນຄຳຕອບ:"}
              </p>
              <div
                style={{
                  backgroundColor: "#E3F2FD",
                  padding: "12px",
                  borderRadius: "6px",
                  fontSize: "22px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                {"(ຕົວຫານ × ຜົນຫານ) + ຕົວເສດ = ຕົວຕັ້ງຫານ"}
              </div>
              <p style={{ fontSize: "22px", margin: 0, lineHeight: "1.5" }}>
                {
                  "ຈາກຕົວຢ່າງຂ້າງເທິງ: (3 × 28) + 1 = 84 + 1 = 85. ຄຳຕອບຖືກຕ້ອງ!"
                }
              </p>
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
              {"ຈົ່ງຄິດໄລ່ການຫານຕາມທາງຕັ້ງຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1) 94 ÷ 4 ="}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2) 86 ÷ 3 ="}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
              {"ຈົ່ງຄິດໄລ່ເລກຫານທີ່ມີຕົວເສດລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
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
                <span>{"(3) 68 ÷ 5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 79 ÷ 6 ="}</span>
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
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "ໃຊ້ການຫານເພື່ອຊອກຫາຈຳນວນຖົງ, ຕົວເສດທີ່ເຫຼືອແມ່ນຈຳນວນເຂົ້າໜົມທີ່ບໍ່ພໍໃສ່ຖົງເດີ້!",
      problems: [
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
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {
                    "🍬 ມີເຂົ້າໜົມ 95 ກ້ອນ. ແບ່ງໃສ່ຖົງ ຖົງລະ 6 ກ້ອນ. ຈະໄດ້ເຂົ້າໜົມຈັກຖົງ ແລະ ຍັງເຫຼືອເຂົ້າໜົມຈັກກ້ອນ?"
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
                      width: "200px",
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
                {"ຈົ່ງນຳໃຊ້ຄຸນລັກສະນະການຫານເພື່ອຊອກຫາຜົນຫານຢ່າງວ່ອງໄວ: "}{" "}
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
                <div
                  style={{
                    backgroundColor: "#FFF9C4",
                    padding: "12px",
                    borderRadius: "6px",
                    fontSize: "18px",
                  }}
                >
                  {
                    "ຄຸນລັກສະນະ: ຖ້າຫານຕົວຕັ້ງຫານ ແລະ ຕົວຫານໃຫ້ 10, ຜົນຫານຈະບໍ່ປ່ຽນແປງ."
                  }
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"(2) 150 ÷ 30 = 15 ÷"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
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
              {"ຈົ່ງຄິດໄລ່ເລກຫານລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 485 ÷ 21 ="}</span>
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
                <span>{"(2) 422 ÷ 15 ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງກຸ່ມຕໍ່ໄປນີ້: "}{" "}
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
                  "⛵ ມີນັກຮຽນທັງໝົດ 47 ຄົນ ຕ້ອງການຂີ່ເຮືອທ່ອງທ່ຽວ. ຖ້າເຮືອແຕ່ລະລຳສາມາດບັນຈຸຄົນໄດ້ຫຼາຍສຸດ 4 ຄົນ, ຈະຕ້ອງໃຊ້ເຮືອຢ່າງໜ້ອຍຈັກລຳ ຈຶ່ງຈະສາມາດພານັກຮຽນໄປໄດ້ທັງໝົດ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ລຳ"}</span>
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
          answers: [<span key="1">{"(1) 23 ເսດ 2, (2) 28 ເսດ 2"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 13 ເսດ 3, (4) 13 ເສດ 1"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"ໄດ້ 15 ຖົງ, ເຫຼືອ 5 ກ້ອນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"15 ÷ 3 = 5"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="5">{"(1) 23 ເսດ 2, (2) 28 ເսດ 2"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="6">
              {
                "12 ລຳ (ຍ້ອນ 47 ÷ 4 = 11 ເສດ 3, ຕ້ອງເພີ່ມເຮືອອີກ 1 ລຳ ສຳລັບ 3 ຄົນທີ່ເຫຼືອ)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ໃນໂຈດບັນຫາຕົວຈິງ, ບາງເທື່ອເຮົາຕ້ອງບວກ 1 ໃສ່ຜົນຫານ ຖ້າຕົວເສດທີ່ເຫຼືຍັງຕ້ອງການກຸ່ມ ຫຼື ພາຫະນະເພື່ອບັນຈຸເດີ້!",
    },
  },

  {
    unitNumber: 9,
    unitTitle: "ການຕັ້ງສາກ, ຂະໜານ ແລະ ຮູບສີ່ແຈ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບເສັ້ນຕັ້ງສາກ, ເສັ້ນຂະໜານ ແລະ ຄຸນລັກສະນະຂອງຮູບສີ່ແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 84-98",
    keyPoints: {
      hint: {
        text: "ຮູບຄາງໝູມີ 1 ຄູ່ຂ້າງຂະໜານກັນ. ຮູບສີ່ແຈຂ້າງຂະໜານມີ 2 ຄູ່ຂ້າງຂະໜານກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງເທົ່າກັນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບສີ່ແຈປະເພດຕ່າງໆ"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Trapezoid */}
            <div
              style={{
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                width: "200px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບຄາງໝູ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 30,20 L 90,20 L 110,60 L 10,60 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "22px" }}>{"ມີ 1 ຄູ່ຂ້າງຂະໜານກັນ"}</span>
            </div>

            {/* Parallelogram */}
            <div
              style={{
                border: "2px solid #2196F3",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                width: "200px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>
                {"ຮູບສີ່ແຈຂ້າງຂະໜານ"}
              </strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 30,20 L 110,20 L 90,60 L 10,60 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "22px" }}>{"ມີ 2 ຄູ່ຂ້າງຂະໜານກັນ"}</span>
            </div>

            {/* Rhombus */}
            <div
              style={{
                border: "2px solid #9C27B0",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#F3E5F5",
                width: "200px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບສີ່ແຈລີ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 60,10 L 100,40 L 60,70 L 20,40 Z"
                    fill="rgba(156, 39, 176, 0.2)"
                    stroke="#9C27B0"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "22px" }}>{"ມີ 4 ຂ້າງຍາວເທົ່າກັນ"}</span>
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
              {
                "ຈົ່ງບອກຊື່ຂອງຮູບສີ່ແຈຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ (ຮູບຄາງໝູ, ຮູບສີ່ແຈຂ້າງຂະໜານ, ຮູບສີ່ແຈລີ): "
              }{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <svg width="120" height="80">
                  <path
                    d="M 30,20 L 100,20 L 80,60 L 10,60 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
                </div>
              </div>

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <svg width="120" height="80">
                  <path
                    d="M 60,10 L 95,40 L 60,70 L 25,40 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບສີ່ແຈ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(3) ຮູບສີ່ແຈທີ່ມີຂ້າງຂະໜານກັນພຽງແຕ່ 1 ຄູ່ ເອີ້ນວ່າ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
                  {
                    "(4) ຮູບສີ່ແຈທີ່ມີ 2 ຄູ່ຂ້າງຂະໜານກັນ ແລະ ມີ 4 ຂ້າງຍາວເທົ່າກັນ ເອີ້ນວ່າ"
                  }
                </span>
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
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "ຮູບສີ່ແຈຂ້າງຂະໜານມີຂ້າງກົງກັນຂ້າມຍາວເທົ່າກັນ ແລະ ຮູບສີ່ແຈລີມີ 4 ຂ້າງຍາວເທົ່າກັນທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບສີ່ແຈຂ້າງຂະໜານລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 30,20 L 120,20 L 100,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="75" y="15" fontSize="14" textAnchor="middle">{"6 cm"}</text>
                    <text x="120" y="50" fontSize="14">{"4 cm"}</text>
                    <text x="50" y="85" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ຂ້າງ ? ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງ ? ໃນຮູບສີ່ແຈລີລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="150" height="100">
                    <path d="M 75,10 L 115,50 L 75,90 L 35,50 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="105" y="30" fontSize="14">{"5 cm"}</text>
                    <text x="45" y="80" fontSize="14" fill="red">{"? cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ຂ້າງ ? ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "35px" }}></span>
                    <span>{"cm"}</span>
                  </div>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈຂ້າງຂະໜານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💡 ຮູບສີ່ແຈຂ້າງຂະໜານມີຄຸນລັກສະນະຄື: ມຸມກົງກັນຂ້າມມີຂະໜາດເທົ່າກັນ."}
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <svg width="180" height="100">
                  <path d="M 30,20 L 130,20 L 110,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 25,70 A 15,15 0 0,0 20,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="28" y="60" fill="#2196F3" fontSize="14">{"70°"}</text>
                  <path d="M 115,20 A 15,15 0 0,0 120,32" fill="none" stroke="red" strokeWidth="2" />
                  <text x="105" y="35" fill="red" fontSize="16" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບຄາງໝູລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💡 ໃນຮູບຄາງໝູ, ຜົນບວກຂອງສອງມຸມທີ່ຢູ່ຂ້າງດຽວກັນລະຫວ່າງສອງເສັ້ນຂະໜານແມ່ນເທົ່າກັບ 180°."}
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <svg width="180" height="100">
                  <path d="M 40,20 L 140,20 L 160,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M 23,70 A 15,15 0 0,0 18,58" fill="none" stroke="#2196F3" strokeWidth="2" />
                  <text x="25" y="60" fill="#2196F3" fontSize="14">{"110°"}</text>
                  <path d="M 45,20 A 15,15 0 0,0 52,32" fill="none" stroke="red" strokeWidth="2" />
                  <text x="42" y="38" fill="red" fontSize="16" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
            <span key="1">{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານ, (2) ຮູບສີ່ແຈລີ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) ຮູບຄາງໝູ, (4) ຮູບສີ່ແຈລີ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">
              {"(1) 6 cm (ຂ້າງກົງກັນຂ້າມ), (2) 5 cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"70° (ມຸມກົງກັນຂ້າມເທົ່າກັນ)"}</span>],
        },
      ],
      advice:
        "ຮູບສີ່ແຈແຕ່ລະປະເພດມີຄຸນລັກສະນະສະເພາະຂອງມັນ! ການຈົດຈຳຄວາມຍາວຂ້າງ ແລະ ຂະໜາດມຸມຈະຊ່ວຍໃຫ້ແກ້ເລກໄດ້ງ່າຍຂຶ້ນ.",
    },
  },

  {
    unitNumber: 10,
    unitTitle: "ຄວາມສຳພັນຂອງຈຳນວນຖ້ວນ, ທົດສະນິຍົມ ແລະ ເລກສ່ວນ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມສຳພັນ ແລະ ການປ່ຽນຮູບແບບລະຫວ່າງຈຳນວນຖ້ວນ, ເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 99-104",
    keyPoints: {
      hint: {
        text: "ເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມສາມາດສະແດງປະລິມານດຽວກັນໄດ້ ເຊັ່ນ: 1/10 ແມ່ນເທົ່າກັບ 0.1 ແລະ 1/2 ແມ່ນເທົ່າກັບ 0.5 ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຄວາມສຳພັນລະຫວ່າງເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມ"}
          </h3>

          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                margin: "0 0 16px 0",
                textAlign: "center",
              }}
            >
              {"ປຽບທຽບໃສ່ເສັ້ນຈຳນວນດຽວກັນ:"}
            </p>

            {/* Number Line showing Fractions & Decimals */}
            <div
              className="math-illustration"
              style={{
                position: "relative",
                height: "80px",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
                borderBottom: "4px solid #333",
              }}
            >
              {/* Left End */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "2px",
                  height: "15px",
                  backgroundColor: "#333",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"0"}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"0"}
              </div>

              {/* Ticks & Labels */}
              {[...Array(10)].map((_, i) => {
                if (i === 0) return null;
                const pos = i * 10;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: pos + "%",
                    }}
                  >
                    <div
                      style={{
                        width: "1px",
                        height: "8px",
                        backgroundColor: "#666",
                      }}
                    ></div>
                    {i === 5 && (
                      <>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-24px",
                            left: "-10px",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          {"0.5"}
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "-25px",
                            left: "-10px",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          {"1/2"}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}

              {/* Right End */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "0",
                  width: "2px",
                  height: "15px",
                  backgroundColor: "#333",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"1"}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  right: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"1"}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "35px",
                fontSize: "22px",
              }}
            >
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#FFF",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <strong>{"0.1 = 1/10"}</strong>
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#FFF",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <strong>{"0.5 = 5/10 = 1/2"}</strong>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນιຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1/2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກທົດສະນιຍົມລຸ່ມນີ້ໃຫ້ເປັນເລກສ່ວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 0.3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 0.7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນເລກທົດສະນິຍົມກ່ອນແລ້ວຈຶ່ງປຽບທຽບເດີ້! (1/2 = 0.5)",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
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
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(1) 0.6"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"1/2"}</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(2) 3/10"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"0.3"}</span>
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
                    "🥛 ນາງ ນະລິນ ມີນ້ຳນົມ 1/2 L ແລະ ນາງ ມະລິ ມີນ້ຳນົມ 0.4 L. ໃຜມີນ້ຳນົມຫຼາຍກວ່າກັນ?"
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມເລກສ່ວນທີ່ຖືກຕ້ອງໃស່ບ່ອນຫວ່າງ (1) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div className="math-illustration" style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold", fontSize: "14px" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold", fontSize: "14px" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "14px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ແມ່ນເລກສ່ວນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມເລກທົດສະນιຍົມທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ (2) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "70%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ແມ່ນເລກທົດສະນιຍົມ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          answers: [<span key="1">{"(1) 0.1, (2) 0.5"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1_2">{"(3) 3/10, (4) 7/10"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) > (ຍ້ອນ 0.6 > 0.5), (2) = (ຍ້ອນ 0.3 = 0.3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3">
              {"ນາງ ນະລິນ ຫຼາຍກວ່າ (ຍ້ອນ 1/2 = 0.5 L, 0.5 > 0.4)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"3/10"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4_2">{"0.7"}</span>],
        },
      ],
      advice:
        "ການໃຊ້ເສັ້ນຈຳນວນຈະຊ່ວຍໃຫ້ເຮົາເຫັນພາບຄວາມຍາວ ແລະ ປຽບທຽບເລກສ່ວນ ກັບເລກທົດສະນິຍົມໄດ້ຢ່າງຊັດເຈນ!",
    },
  },

  {
    unitNumber: 11,
    unitTitle: "ວິທີຈັດການຂໍ້ມູນ",
    unitGoal: "ຮຽນຮູ້ການຈັດການຂໍ້ມູນ ແລະ ການອ່ານຕາຕະລາງສອງທາງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 105-109",
    keyPoints: {
      hint: {
        text: "ຕາຕະລາງສອງທາງ ຊ່ວຍໃຫ້ເຮົາຈັດລະບຽບຂໍ້ມູນທີ່ມີສອງລັກສະນະໄດ້ງ່າຍຂຶ້ນ ແລະ ເຫັນຄວາມສຳພັນລະຫວ່າງຂໍ້ມູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຕາຕະລາງສອງທາງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ຕາຕະລາງທີ່ຈັດລະບຽບຂໍ້ມູນຕາມສອງປະເພດ (ເຊັ່ນ: ປະເພດກິລາ ແລະ ຂັ້ນຮຽນ) ເອີ້ນວ່າ ຕາຕະລາງສອງທາງ."
            }
          </p>

          <div
            style={{
              backgroundColor: "#FFF8E1",
              padding: "16px",
              borderRadius: "8px",
              border: "2px solid #FF9800",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "0 0 12px 0",
                fontSize: "22px",
              }}
            >
              {"ຕົວຢ່າງ: ກິລາທີ່ນັກຮຽນມັກ (ຄົນ)"}
            </p>
            <table
              className="math-illustration"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "22px",
                backgroundColor: "#FFF",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#FFE082" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ກິລາ / ຂັ້ນຮຽນ"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ປ.4"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ປ.5"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ລວມ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ເຕະບານ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"12"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"15"}
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"27"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ບານບ້ວງ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"8"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"10"}
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"18"}
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#ECEFF1", fontWeight: "bold" }}>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ລວມ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"20"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"25"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"45"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 0.46 + 0.23 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1.57 - 0.34 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) ມີເຊືອກຍາວ 0.85 m ຕັດອອກ 0.15 m ຈະເຫຼືອ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) ນ້ຳສົ້ມ 2.45 L ຕື່ມອີກ 1.2 L ຈະມີທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"L"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "1 ຂີດໝາຍນ້ອຍໆ ຢູ່ເທິງເສັ້ນຈຳນວນແມ່ນເທົ່າກັບ 0.01 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນລຸ່ມນີ້ ແລ້ວຂຽນໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "10px" }}>
                <div style={{ position: "relative", height: "50px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                  <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"1.2"}</div>
                  
                  <div style={{ position: "absolute", bottom: "-4px", left: "50%", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 15px)", fontWeight: "bold" }}>{"1.3"}</div>

                  <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1.4"}</div>

                  {/* Ticks */}
                  {[...Array(20)].map((_, i) => {
                    if (i === 10) return null;
                    return (
                      <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 5) + "%", width: "1px", height: i % 5 === 0 ? "10px" : "6px", backgroundColor: "#666" }}></div>
                    );
                  })}

                  <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", color: "#E91E63", fontWeight: "bold" }}>{"↓ (1)"}</div>
                  <div style={{ position: "absolute", bottom: "10px", left: "75%", transform: "translateX(-50%)", color: "#E91E63", fontWeight: "bold" }}>{"↓ (2)"}</div>
                </div>

                <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(1) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(2) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ่างໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "22px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(3) 2.45"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"2.4"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(4) 0.08"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"0.1"}</span>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 0.24 + 0.57 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 3.82 - 1.45 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📘 ນາງ ສີດາ ມີນ້ຳ 1.35 L ແລະ ທ້າວ ສົມພອນ ມີນ້ຳ 0.8 L. ຖ້າເອົານ້ຳຂອງທັງສອງຄົນມາເທໃສ່ກັນ ຈະມີນ້ຳທັງໝົດຈັກ L?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          answers: [<span key="1">{"(1) 12 ຄົນ, (2) 10 ຄົນ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1_2">{"(3) 27 ຄົນ, (4) 18 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ໝາກມ່ວງຍິງ: 10 ຄົນ (25-15), ໝາກກ້ວຍຊາຍ: 8 ຄົນ (20-12), ລວມຊາຍ: 23 ຄົນ, ລວມຍິງ: 22 ຄົນ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"45 ຄົນ (23 + 22 = 45 ຄົນ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"10 ຄົນ (ໝາກມ່ວງຍິງ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"45 ຄົນ (ລວມທັງໝົດ)"}</span>],
        },
      ],
      advice:
        "ການອ່ານແຖວ ແລະ ຖັນ ໃຫ້ຕັດກັນ ຈະຊ່ວຍໃຫ້ຊອກຫາຂໍ້ມູນທີ່ຕ້ອງການໄດ້ຢ່າງວ່ອງໄວ ແລະ ຖືກຕ້ອງ!",
    },
  },

  {
    unitNumber: 12,
    unitTitle: "ຄຸນລັກສະນະມຸມໃນຂອງຮູບເລຂາຄະນິດ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະ ແລະ ຜົນບວກຂອງມຸມໃນຂອງຮູບສາມແຈ ແລະ ຮູບສີ່ແຈ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 110-115",
    keyPoints: {
      hint: {
        text: "ຜົນບວກຂອງມຸມໃນຂອງຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ ແລະ ຮູບສີ່ແຈແມ່ນ 360 ອົງສາສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຜົນບວກຂອງມຸມໃນຮູບເລຂາຄະນິດ"}
          </h3>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* Triangle interior angles */}
            <div
              style={{
                flex: "1 1 250px",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບສາມແຈ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="90">
                  <path
                    d="M 60,10 L 110,80 L 10,80 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text x="60" y="35" fontSize="12" fill="#333">
                    {"a"}
                  </text>
                  <text x="30" y="72" fontSize="12" fill="#333">
                    {"b"}
                  </text>
                  <text x="90" y="72" fontSize="12" fill="#333">
                    {"c"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px", color: "#1565C0" }}>
                {"a + b + c = 180°"}
              </strong>
            </div>

            {/* Quadrilateral interior angles */}
            <div
              style={{
                flex: "1 1 250px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px" }}>{"ຮູບສີ່ແຈ"}</strong>
              <div
                style={{
                  margin: "16px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="90">
                  <path
                    d="M 30,15 L 100,15 L 110,75 L 10,75 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  {/* Diagonal line split into 2 triangles */}
                  <path
                    d="M 30,15 L 110,75"
                    stroke="#999"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="35" y="32" fontSize="12">
                    {"a"}
                  </text>
                  <text x="85" y="32" fontSize="12">
                    {"b"}
                  </text>
                  <text x="95" y="65" fontSize="12">
                    {"c"}
                  </text>
                  <text x="25" y="65" fontSize="12">
                    {"d"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"a + b + c + d = 360°"}
              </strong>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <svg width="120" height="80">
                  <path
                    d="M 60,10 L 110,70 L 10,70 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <text x="30" y="65" fontSize="12">
                    {"60°"}
                  </text>
                  <text x="80" y="65" fontSize="12">
                    {"70°"}
                  </text>
                  <text
                    x="60"
                    y="30"
                    fontSize="14"
                    fill="red"
                    fontWeight="bold"
                  >
                    {"?"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ມຸມ ? ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <svg width="120" height="80">
                  {/* Right-angled triangle */}
                  <path
                    d="M 20,10 L 100,70 L 20,70 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {/* Right angle indicator */}
                  <path
                    d="M 20,60 L 30,60 L 30,70"
                    fill="none"
                    stroke="#333"
                    strokeWidth="1"
                  />
                  <text x="80" y="65" fontSize="12">
                    {"35°"}
                  </text>
                  <text
                    x="30"
                    y="30"
                    fontSize="14"
                    fill="red"
                    fontWeight="bold"
                  >
                    {"?"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ມຸມ ? ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(3) ຮູບສີ່ແຈທີ່ມີ 3 ມຸມເທົ່າກັບ 90°, 85°, 105°. ມຸມທີ 4 ແມ່ນ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ມຸມພາຍໃນຂອງຮູບສາມແຈສະເໝີແມ່ນເທົ່າກັບ 60 ອົງສາໃນທຸກໆມຸມເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
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
                <div>
                  {
                    "(1) ຖ້າຕັດຮູບສີ່ແຈອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ ຈະໄດ້ຮູບສາມແຈຈັກຮູບ?"
                  }
                </div>
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
                {"ຈົ່ງຊອກຫາຜົນບວກມຸມໃນຂອງຮູບຫ້າແຈລຸ່ມນີ້: "}{" "}
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
                <div>
                  {
                    "(2) ຮູບຫ້າແຈ ສາມາດແບ່ງອອກເປັນຮູບສາມແຈໄດ້ 3 ຮູບ. ຜົນບວກມຸມໃນທັງໝົດແມ່ນຈັກອົງສາ?"
                  }
                </div>
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
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "16px",
              }}
            >
              <svg width="150" height="100">
                <path
                  d="M 20,20 L 130,20 L 110,80 L 40,80 Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="45" y="35" fontSize="12">
                  {"110°"}
                </text>
                <text x="100" y="35" fontSize="12">
                  {"120°"}
                </text>
                <text x="45" y="75" fontSize="12">
                  {"65°"}
                </text>
                <text x="90" y="75" fontSize="14" fill="red" fontWeight="bold">
                  {"?"}
                </text>
              </svg>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span>{"ມຸມ ? ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "16px",
              }}
            >
              <svg width="150" height="100">
                <path
                  d="M 75,15 L 130,85 L 20,85 Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="35" y="80" fontSize="12">
                  {"45°"}
                </text>
                <text x="110" y="80" fontSize="12">
                  {"55°"}
                </text>
                <text x="70" y="40" fontSize="14" fill="red" fontWeight="bold">
                  {"?"}
                </text>
              </svg>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span>{"ມຸມ ? ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"°"}</span>
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
              {"(1) 50° (180 - (60+70)), (2) 55° (180 - (90+35))"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 80° (360 - (90+85+105))"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">
              {
                "ໄດ້ຮູບສາມແຈ 2 ຮູບ (ເຊິ່ງເປັນສາເຫດທີ່ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 180 × 2 = 360°)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"65° (360 - (110+120+65))"}</span>],
        },
      ],
      advice:
        "ຜົນບວກມຸມໃນແມ່ນຄວາມຮູ້ພື້ນຖານທີ່ສຳຄັນຫຼາຍ! ຖ້າຈື່ຜົນບວກ 180° ແລະ 360° ຈະສາມາດຊອກຫາຂະໜາດມຸມທີ່ເຫຼືອໄດ້ສະເໝີ.",
    },
  },

  {
    unitNumber: 13,
    unitTitle: "ທະວີຄູນ ແລະ ອຸປະຄູນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທະວີຄູນ, ອຸປະຄູນ, ຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 116-126",
    keyPoints: {
      hint: {
        text: "ທະວີຄູນຮ່ວມນ້ອຍສຸດ (LCM) ແມ່ນຈຳນວນນ້ອຍສຸດທີ່ຫານຂາດໃຫ້ທັງສອງຕົວຫານ. ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ (GCD) ແມ່ນຈຳນວນໃຫຍ່ສຸດທີ່ສາມາດຫານທັງສອງຕົວຕັ້ງຫານໄດ້ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
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
                {"ຈຳນວນຄູ່"}
              </strong>
              <p style={{ fontSize: "22px", margin: "10px 0 0 0" }}>
                {"ຈຳນວນຖ້ວນທີ່ຫານຂາດໃຫ້ 2 (ຕົວເລກລົງທ້າຍດ້ວຍ 0, 2, 4, 6, 8)."}
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "10px 0 0 0",
                }}
              >
                {"0, 2, 4, 6, 8, 10..."}
              </p>
            </div>
            <div
              style={{
                flex: "1 1 200px",
                padding: "16px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#E65100" }}>
                {"ຈຳນວນຄີກ"}
              </strong>
              <p style={{ fontSize: "22px", margin: "10px 0 0 0" }}>
                {
                  "ຈຳນວນຖ້ວນທີ່ຫານບໍ່ຂາດໃຫ້ 2 (ຕົວເລກລົງທ້າຍດ້ວຍ 1, 3, 5, 7, 9)."
                }
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "10px 0 0 0",
                }}
              >
                {"1, 3, 5, 7, 9, 11..."}
              </p>
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
              {"ຈົ່ງຊອກຫາທະວີຄູນ ແລະ ອຸປະຄູນຕາມທີ່ກຳນົດ: "}{" "}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(1) ຈົ່ງຊອກຫາ 3 ທະວີຄູນຮ່ວມທຳອິດຂອງ 3 ແລະ 4 ແມ່ນ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
                <span>{"(2) ທະວີຄູນຮ່ວມນ້ອຍສຸດ (LCM) ຂອງ 3 ແລະ 4 ແມ່ນ"}</span>
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
                  flexWrap: "wrap",
                }}
              >
                <span>{"(3) ຈົ່ງຊອກຫາອຸປະຄູນທັງໝົດຂອງ 12 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "200px",
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
                <span>{"(4) ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ (GCD) ຂອງ 12 ແລະ 18 ແມ່ນ"}</span>
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
      hintText:
        "ຈຳນວນຄູ່ແມ່ນຕົວເລກທີ່ລົງທ້າຍດ້ວຍ 0, 2, 4, 6, 8. ສ່ວນຈຳນວນຄີກແມ່ນລົງທ້າຍດ້ວຍ 1, 3, 5, 7, 9 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຈຳແນກຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ ໂດຍຂຽນຄຳຕອບໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  fontSize: "20px",
                  padding: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"(1) ຈຳນວນ 48 ແມ່ນຈຳນວນ"}</span>
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
                  <span>{"(2) ຈຳນວນ 75 ແມ່ນຈຳນວນ"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
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
                    "📐 ຕ້ອງການຈັດວາງກະເບື້ອງຮູບຈະຕຸລັດຂະໜາດເທົ່າກັນ ໃສ່ໃນພື້ນທີ່ຮູບສາມແຈສາກ (ຫຼື ຮູບສີ່ແຈສາກ) ທີ່ມີລວງກວ້າງ 12m ແລະ ລວງຍາວ 18m. ຂະໜາດຄວາມຍາວຂ້າງທີ່ໃຫຍ່ທີ່ສຸດຂອງກະເບື້ອງຮູບຈະຕຸລັດທີ່ສາມາດປູໄດ້ພໍດີແມ່ນຈັກແມັດ?"
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
                  <span>{"m"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແຈກຢາຍສິ່ງຂອງ (ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ): "}{" "}
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
                  "🍎 ມີໝາກແອບເປິນ 18 ໜ່ວຍ ແລະ ໝາກກ້ຽງ 24 ໜ່ວຍ. ຖ້າຕ້ອງການແບ່ງໝາກໄມ້ທັງສອງປະເພດນີ້ ໃຫ້ເດັກນ້ອຍກຸ່ມໜຶ່ງໂດຍໃຫ້ແຕ່ລະຄົນໄດ້ຮັບເທົ່າໆກັນ. ຈະສາມາດແບ່ງໃຫ້ເດັກນ້ອຍໄດ້ຫຼາຍທີ່ສຸດຈັກຄົນ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຄົນ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການອອກເດີນທາງພ້ອມກັນ (ທະວີຄູນຮ່ວມນ້ອຍສຸດ): "}{" "}
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
                  "🚌 ລົດເມສາຍ A ອອກທຸກໆ 8 ນາທີ ແລະ ສາຍ B ອອກທຸກໆ 12 ນາທີ. ຖ້າລົດເມທັງສອງສາຍອອກເດີນທາງພ້ອມກັນໃນເວລາ 8:00, ພວກມັນຈະອອກເດີນທາງພ້ອມກັນອີກຄັ້ງໃນອີກຈັກນາທີ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ນາທີ"}</span>
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
              {"(1) 12, 24, 36, (2) 12, (3) 1, 2, 3, 4, 6, 12, (4) 6"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) ຈຳນວນຄູ່, (2) ຈຳນວນຄີກ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3">
              {"6 m (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 12 ແລະ 18)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">
              {"6 ຄົນ (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 18 ແລະ 24)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="4_2">
              {"24 ນາທີ (ຍ້ອນ 24 ແມ່ນທະວີຄູນຮ່ວມນ້ອຍສຸດຂອງ 8 ແລະ 12)"}
            </span>,
          ],
        },
      ],
      advice:
        "ການຊອກຫາ LCM ແລະ GCD ຈະຊ່ວຍໃຫ້ເຮົາແກ້ໄຂບັນຫາການຈັດສັນພື້ນທີ່ ແລະ ການແບ່ງປັນສິ່ງຂອງໃນຊີວິດປະຈຳວັນໄດ້ຢ່າງມີປະສິດທິພາບ!",
    },
  },

  {
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
  },
  {
    unitNumber: 15,
    unitTitle: "ປະໂຫຍກສັນຍະລັກທີ່ໃຊ້ຕົວອັກສອນ",
    unitGoal:
      "ຮຽນຮູ້ການນຳໃຊ້ຕົວອັກສອນ (ເຊັ່ນ x, a) ເພື່ອສະແດງເຖິງປະລິມານທີ່ບໍ່ທັນຮູ້ ແລະ ຂຽນເປັນປະໂຫຍກສັນຍະລັກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 138-143",
    keyPoints: {
      hint: {
        text: "ເຮົາສາມາດໃຊ້ຕົວອັກສອນ x ຫຼື a ແທນຈຳນວນທີ່ບໍ່ທັນຮູ້ ເພື່ອເຮັດໃຫ້ການຂຽນສູດ ແລະ ປະໂຫຍກສັນຍະລັກງ່າຍຂຶ້ນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການໃຊ້ຕົວອັກສອນແທນຈຳນວນ"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0 0 12px 0", fontSize: "22px" }}>
              {
                "ຕົວຢ່າງ: ຊື້ສໍດຳ 1 ກ້ານ ລາຄາ a ກີບ ຈຳນວນ 5 ກ້ານ. ປະໂຫຍກສັນຍະລັກແມ່ນ:"
              }
            </p>
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#0D47A1",
              }}
            >
              {"a × 5 (ກີບ)"}
            </div>
            <p
              style={{ margin: "12px 0 0 0", fontSize: "22px", color: "#555" }}
            >
              {"ຖ້າ a = 500 ກີບ, ລາຄາລວມ ຈະແມ່ນ 500 × 5 = 2500 ກີບ."}
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
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຊອກຫາຄຳຕອບ: "}{" "}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(1) ຊື້ປຶ້ມຂຽນ 1 ຫົວ ລາຄາ x ກີບ ຈຳນວນ 6 ຫົວ. ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ:"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
                  {"(2) ຈາກຂໍ້ (1), ຖ້າ x = 800 ກີບ. ລາຄາລວມທັງໝົດຈະແມ່ນ"}
                </span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(3) ມີເຂົ້າໜົມທັງໝົດ a ກ້ອນ, ກິນໄປແລ້ວ 5 ກ້ອນ. ເຫຼືອເຂົ້າໜົມຈັກກ້ອນ (ຂຽນເປັນສັນຍະລັກ):"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
                <span>{"(4) ຈາກຂໍ້ (3), ຖ້າ a = 12. ຈະເຫຼືອເຂົ້າໜົມ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ກ້ອນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ສູດເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານແມ່ນ ພື້ນ × ລວງສູງ ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານ: "}{" "}
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
                <span>
                  {
                    "(1) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນຍາວ a cm ແລະ ລວງສູງ 6 cm. ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່:"
                  }
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "4px",
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
                  <span>{"cm²"}</span>
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
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຕົວຈິງ: "}{" "}
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
                <span>
                  {
                    "(2) ຈາກຂໍ້ (1), ຖ້າ a = 8 cm. ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານຈະແມ່ນຈັກ cm²?"
                  }
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "4px",
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
                  <span>{"cm²"}</span>
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
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກຂອງການຊື້ເຄື່ອງ: "}{" "}
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
                  "🍎 ຊື້ໝາກແອບເປິນ 1 ໜ່ວຍ ລາຄາ x ກີບ ຈຳນວນ 4 ໜ່ວຍ ແລະ ໃສ່ກ່ອງຂອງຂວັນລາຄາ 50 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"
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
                <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "180px",
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
              {"ຈົ່ງຊອກຫາລາຄາລວມຕົວຈິງ: "}{" "}
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
              <span>
                {
                  "ຖ້າລາຄາໝາກແອບເປິນ 1 ໜ່ວຍແມ່ນ x = 1500 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"
                }
              </span>
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
                    width: "120px",
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
                "(1) x × 6, (2) 4800 ກີບ (800 × 6), (3) a - 5, (4) 7 ກ້ອນ (12 - 5)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"a × 6 (cm²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"48 cm² (ຍ້ອນ 8 × 6 = 48)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"x × 4 + 50 (ຫຼື 4 × x + 50)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3_2">{"6050 ກີບ (ຍ້ອນ 1500 × 4 + 50 = 6050)"}</span>,
          ],
        },
      ],
      advice:
        "ການໃຊ້ຕົວອັກສອນ x ແລະ a ຊ່ວຍໃຫ້ເຮົາສ້າງສູດທົ່ວໄປໄດ້ງ່າຍ! ເມື່ອເຮົາປ່ຽນຕົວເລກໃສ່ຕົວອັກສອນນັ້ນ ເຮົາກໍຈະໄດ້ຄຳຕອບທັນທີ.",
    },
  },

  {
    unitNumber: 16,
    unitTitle: "ການປ່ຽນແປງຂອງສອງປະລິມານ ແລະ ອັດຕາສ່ວນພົວພັນ",
    unitGoal:
      "ຮຽນຮູ້ການສັງເກດຄວາມສຳພັນລະຫວ່າງສອງປະລິມານທີ່ປ່ຽນແປງໄປພ້ອມກັນ ແລະ ເຂົ້າໃຈແນວຄວາມຄິດຂອງອັດຕາສ່ວນພົວພັນ (比例)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 144-152",
    keyPoints: {
      hint: {
        text: "ເມື່ອປະລິມານໜຶ່ງເພີ່ມຂຶ້ນ 2 ເທື່ອ, 3 ເທື່ອ... ແລ້ວອີກປະລິມານໜຶ່ງກໍເພີ່ມຂຶ້ນ 2 ເທື່ອ, 3 ເທື່ອ... ຕາມກັນ, ເຮົາເອີ້ນວ່າ ສອງປະລິມານນັ້ນເປັນອັດຕາສ່ວນພົວພັນກັນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນພົວພັນ"}
          </h3>
          <p style={{ fontSize: "22px", margin: 0 }}>
            {"ຕົວຢ່າງ: ລາຄາຂອງປຶ້ມຂຽນ (1 ຫົວ ລາຄາ 80 ກີບ):"}
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              className="math-illustration"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຈຳນວນປຶ້ມ (ຫົວ)"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"1"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"2"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"3"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"4"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ລາຄາລວມ (ກີບ)"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"80"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"160"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"240"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"320"}
                  </td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງສັງເກດຕາຕະລາງລວດເຫຼັກ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ overflowX: "auto", padding: "8px" }}>
              <table
                className="math-illustration"
                style={{
                  minWidth: "300px",
                  borderCollapse: "collapse",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຄວາມຍາວ (m)"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"1"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"2"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"3"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"4"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        fontWeight: "bold",
                      }}
                    >
                      {"ນ້ຳໜັກ (g)"}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"20"}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"40"}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        backgroundColor: "#FFE082",
                      }}
                    >
                      {"(A)"}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        backgroundColor: "#FFE082",
                      }}
                    >
                      {"(B)"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) ຈຳນວນ (A) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) ຈຳນວນ (B) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  {
                    "(3) ຖ້າຄວາມຍາວເພີ່ມຂຶ້ນ 3 ເທື່ອ, ນ້ຳໜັກກໍຈະເພີ່ມຂຶ້ນຈັກເທື່ອ?"
                  }
                </span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(4) ຖ້າຄວາມຍາວແມ່ນ x m ແລະ ນ້ຳໜັກແມ່ນ y g. ຈົ່ງຂຽນການພົວພັນ y = "
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
        "💧 ຄວາມເລິກຂອງນ້ຳຈະເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີຕາມເວລາທີ່ຜ່ານໄປເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນຕໍ່ໄປນີ້: "}{" "}
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
                <div>
                  {
                    "🥤 ເປີດນ້ຳໃສ່ອ່າງ, ຜ່ານໄປ 2 ນາທີ ນ້ຳເລິກໄດ້ 6 cm. ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 6 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                {"ຈົ່ງຄິດໄລ່ຄວາມເລິກຂອງນ້ຳໃນເວລາອື່ນ: "}{" "}
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
                <div>
                  {
                    "🥤 ຈາກຂໍ້ (1), ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 10 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
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
                  <span>{"cm"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລາຄາປຶ້ມຂຽນ: "}{" "}
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
                  "📐 ຖ້າຊື້ປຶ້ມຂຽນ 5 ຫົວ ຕ້ອງຈ່າຍເງິນ 400 ກີບ. ຖ້າຊື້ປຶ້ມຂຽນປະເພດດຽວກັນ 15 ຫົວ ຈະຕ້ອງຈ່າຍເງິນຈັກກີບ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ກີບ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫານ້ຳໜັກລວດເຫຼັກ: "}{" "}
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
                  "📐 ຖ້າລວດເຫຼັກຍາວ 3m ມີນ້ຳໜັກ 60g. ຖ້າລວດເຫຼັກປະເພດດຽວກັນຍາວ 9m ຈະມີນ້ຳໜັກຈັກ g?"
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
                    width: "120px",
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 60, (2) 80, (3) 3 ເທື່ອ, (4) 20 × x"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"18 cm (ຍ້ອນ 6 × 3 = 18)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"30 cm (ຍ້ອນ 6 × 5 = 30)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"1200 ກີບ (ຍ້ອນ 400 × 3 = 1200)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"180 g (ຍ້ອນ 60 × 3 = 180)"}</span>],
        },
      ],
      advice:
        "ອັດຕາສ່ວນພົວພັນແມ່ນມີປະໂຫຍດຫຼາຍໃນການຄິດໄລ່ສິ່ງຕ່າງໆທີ່ເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີ! ຈົ່ງຊອກຫາວ່າປະລິມານເພີ່ມຂຶ້ນຈັກເທື່ອ ແລ້ວຄູນເຂົ້າໄດ້ເລີຍ.",
    },
  },
  {
    unitNumber: 17,
    unitTitle: "ເນື້ອທີ່",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍເນື້ອທີ່ (cm², m², a, ha, km²)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 153-165",
    keyPoints: {
      hint: {
        text: "ເນື້ອທີ່ແມ່ນຂະໜາດຂອງໜ້າພຽງ! ຈື່ສູດເນື້ອທີ່ຮູບສີ່ແຈສາກ = ກວ້າງ × ຍາວ ແລະ ຮູບຈະຕຸລັດ = ຂ້າງ × ຂ້າງ ໃຫ້ດີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດເນື້ອທີ່ພື້ນຖານ"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Rectangle */}
            <div
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#1565C0" }}>
                {"ຮູບສີ່ແຈສາກ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="70">
                  <rect
                    x="10"
                    y="10"
                    width="100"
                    height="50"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text
                    x="60"
                    y="40"
                    fontSize="12"
                    fill="#333"
                    textAnchor="middle"
                  >
                    {"ເນື້ອທີ່ = ກວ້າງ × ຍາວ"}
                  </text>
                </svg>
              </div>
            </div>

            {/* Square */}
            <div
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"ຮູບຈະຕຸລັດ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="80" height="80">
                  <rect
                    x="10"
                    y="10"
                    width="60"
                    height="60"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <text
                    x="40"
                    y="45"
                    fontSize="12"
                    fill="#333"
                    textAnchor="middle"
                  >
                    {"ຂ້າງ × ຂ້າງ"}
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ຫົວໜ່ວຍເນື້ອທີ່ຂະໜາດໃຫຍ່"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                fontSize: "22px",
                lineHeight: "1.8",
              }}
            >
              <li>
                <strong>{"1 a (ອາ)"}</strong>
                {" = 100 m² (ຮູບຈະຕຸລັດຂ້າງ 10m)"}
              </li>
              <li>
                <strong>{"1 ha (ເຮັກຕາ)"}</strong>
                {" = 10000 m² (ຮູບຈະຕຸລັດຂ້າງ 100m)"}
              </li>
              <li>
                <strong>{"1 km² (ກິໂລຕາແມັດ)"}</strong>
                {" = 1000000 m² (ຮູບຈະຕຸລັດຂ້າງ 1km)"}
              </li>
            </ul>
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
              {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແနນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(1) ຮູບສີ່ແຈສາກທີ່ມີລວງກວ້າງ 6 cm ແລະ ລວງຍາວ 9 cm. ເນື້ອທີ່ແມ່ນ"
                  }
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
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
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(2) ຮູບຈະຕຸລັດທີ່ມີຄວາມຍາວຂ້າງ 8 cm. ເນື້ອທີ່ແມ່ນ"}
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແနນ)"}</span>
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
                <span>{"(3) 3 a ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"m²"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 5 ha ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"m²"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ຊອກຫາເນື້ອທີ່ທັງໝົດໂດຍການແບ່ງຮູບ ຫຼື ເອົາຮູບໃຫຍ່ລົບຮູບນ້ອຍອອກເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບປະສົມລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="200" height="120">
                    {/* A cutout shape: 10cm x 6cm rect with a 4cm x 3cm cutout in bottom right */}
                    <path d="M 20,20 L 160,20 L 160,60 L 100,60 L 100,100 L 20,100 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="90" y="15" fontSize="12">{"10 cm"}</text>
                    <text x="5" y="65" fontSize="12">{"6 cm"}</text>
                    {/* Top part is 6cm wide */}
                    <text x="125" y="55" fontSize="12">{"3 cm"}</text>
                    <text x="60" y="115" fontSize="12">{"6 cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ເນື້ອທີ່ ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງດິນປູກຝັງລຸ່ມນີ້ເປັນ ອາ (a): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📘 ສວນຜັກຮູບສີ່ແຈສາກແຫ່ງໜຶ່ງ ມີຂະໜາດຄວາມກວ້າງ 20 m ແລະ ຄວາມຍາວ 30 m. ເນື້ອທີ່ຂອງສວນຜັກນີ້ຈະເທົ່າກັບຈັກ a?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"a"}</span>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 400 m² ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"a"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 2 ha ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📘 ທົ່ງນາຮູບສີ່ແຈສາກແຫ່ງໜຶ່ງ ມີຄວາມຍາວ 200 m ແລະ ຄວາມກວ້າງ 150 m. ເນື້ອທີ່ທົ່ງນານີ້ມີຈັກ ເຮັກຕາ (ha)?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ha"}</span>
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
            <span key="1">{"(1) 54 cm² (6 × 9), (2) 64 cm² (8 × 8)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {"(3) 300 m² (3 × 100), (4) 50000 m² (5 × 10000)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"56 cm² (16 + 40 = 56 cm²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3_2">
              {"84 cm² (ຍ້ອນ 12 × 8 - 4 × 3 = 96 - 12 = 84 cm²)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"10 a (ຍ້ອນ 20 × 50 = 1000 m² = 10 a)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="4_2">
              {"12 ha (ຍ້ອນ 300 × 400 = 120000 m² = 12 ha)"}
            </span>,
          ],
        },
      ],
      advice:
        "ການຄິດໄລ່ເນື້ອທີ່ຕ້ອງລະວັງຫົວໜ່ວຍໃຫ້ດີເດີ້! 1 a = 100 m² ສະເໝີ, ຖ້າຢາກປ່ຽນຈາກ m² ໄປເປັນ a ແມ່ນໃຫ້ຫານດ້ວຍ 100.",
    },
  },

  {
    unitNumber: 18,
    unitTitle: "ຮູບກ້ອງສາກ ແລະ ຮູບກ່ອງສາກ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມແຕກຕ່າງລະຫວ່າງຮູບກ້ອງສາກ ແລະ ຮູບກ່ອງສາກ, ຮຽນຮູ້ອົງປະກອບ, ເສັ້ນສະແດງຄວາມສຳພັນ (ຕັ້ງສາກ ແລະ ຂະໜານ) ແລະ ແຜນວາດຄີ່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 166-175",
    keyPoints: {
      hint: {
        text: "ຮູບກ່ອງສາກ ປະກອບດ້ວຍໜ້າຮູບສີ່ແຈສາກ. ສ່ວນຮູບກ້ອງສາກ ແມ່ນປະກອບດ້ວຍໜ້າຮູບຈະຕຸລັດທີ່ເທົ່າກັນທັງ 6 ໜ້າເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອົງປະກອບຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            <table
              className="math-illustration"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ອົງປະກອບ"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຈຳນວນ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໜ້າ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"6 ໜ້າ"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ຂ້າງ / ເສັ້ນຂອບ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"12 ຂ້າງ"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ຈອມ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"8 ຈອມ"}
                  </td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຊົງສາມມິຕິຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍးລະ 2.5 ຄະແນນ)"}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(1) ຮູບຊົງສາມມິຕິທີ່ມີ 6 ໜ້າເປັນຮູບຈະຕຸລັດທັງໝົດ ເອີ້ນວ່າຮູບ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
                  {"(2) ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີເສັ້ນຂອບທັງໝົດຈັກເສັ້ນ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສັ້ນ"}</span>
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
                  {"(3) ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີຈອມທັງໝົດຈັກຈອມ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຈອມ"}</span>
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
                  {
                    "(4) ຖ້າເຮົາເບິ່ງແຜນວາດຄີ່ຂອງຮູບກ້ອງສາກ, ມັນຈະມີໜ້າຮູບຈະຕຸລັດຈັກໜ້າ?"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ໜ້າ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ລວງຍາວຂອບທັງໝົດຂອງຮູບກ່ອງສາກ = (ກວ້າງ + ຍາວ + ສູງ) × 4 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງເສັ້ນລວດຮູບກ່ອງສາກ: "}{" "}
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
                    "📦 ຕ້ອງການເຮັດໂຄງຮູບກ່ອງສາກດ້ວຍເສັ້ນລວດ ໂດຍມີລວງກວ້າງ 4cm, ລວງຍາວ 6cm ແລະ ລວງສູງ 5cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງເສັ້ນລວດຮູບກ້ອງສາກ: "}{" "}
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
                    "📦 ຕ້ອງການເຮັດໂຄງຮູບກ້ອງສາກ (ຮູບກ້ອນສາກ) ດ້ວຍເສັ້ນລວດ ໂດຍມີລວງຍາວຂອບແຕ່ລະຂ້າງ 6cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"
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
                  <span>{"cm"}</span>
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
              {"ຈົ່ງຊອກຫາໜ້າທີ່ຂະໜານກັນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "16px",
              }}
            >
              <svg width="180" height="140">
                <rect
                  x="50"
                  y="20"
                  width="100"
                  height="70"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <line
                  x1="20"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="#ccc"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <line
                  x1="120"
                  y1="120"
                  x2="150"
                  y2="90"
                  stroke="#333"
                  strokeWidth="1.5"
                />
                <line
                  x1="20"
                  y1="120"
                  x2="50"
                  y2="90"
                  stroke="#ccc"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="120"
                  y1="50"
                  x2="150"
                  y2="20"
                  stroke="#333"
                  strokeWidth="1.5"
                />
                <rect
                  x="20"
                  y="50"
                  width="100"
                  height="70"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="120"
                  y1="50"
                  x2="120"
                  y2="120"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="120"
                  x2="120"
                  y2="120"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="20"
                  x2="150"
                  y2="90"
                  stroke="#333"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="90"
                  x2="150"
                  y2="90"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="15" y="45" fontSize="12" fontWeight="bold">
                  {"A"}
                </text>
                <text x="125" y="45" fontSize="12" fontWeight="bold">
                  {"B"}
                </text>
                <text x="125" y="135" fontSize="12" fontWeight="bold">
                  {"C"}
                </text>
                <text x="15" y="135" fontSize="12" fontWeight="bold">
                  {"D"}
                </text>
                <text x="45" y="15" fontSize="12" fontWeight="bold">
                  {"E"}
                </text>
                <text x="155" y="15" fontSize="12" fontWeight="bold">
                  {"F"}
                </text>
                <text x="155" y="105" fontSize="12" fontWeight="bold">
                  {"G"}
                </text>
                <text x="45" y="105" fontSize="12" fontWeight="bold">
                  {"H"}
                </text>
              </svg>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span>{"(1) ໜ້າທີ່ຂະໜານກັບ ໜ້າ ABCD ແມ່ນໜ້າ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
              {"ຈົ່ງຊອກຫາໜ້າທີ່ຕັ້ງສາກກັນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <span>{"(2) ໜ້າທີ່ຕັ້ງສາກກັບ ໜ້າ ABCD ມີທັງໝົດຈັກໜ້າ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ໜ້າ"}</span>
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
              {"(1) ຮູບກ້ອງສາກ, (2) 12 ເສັ້ນ, (3) 8 ຈອມ, (4) 6 ໜ້າ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "60 cm (ຍ້ອນມີຂອບແນວກວ້າງ 4, ແນວຍາວ 4, ແນວສູງ 4, (4+6+5)×4 = 60)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"(1) ໜ້າ EFGH, (2) 4 ໜ້າ (ໜ້າ ABFE, BCGF, CDHG, DAEH)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບກ່ອງສາກ ແລະ ຮູບກ້ອງສາກ ມີລັກສະນະພິເສດດ້ານຄວາມສຳພັນລະຫວ່າງໜ້າ! ໜ້າກົງກັນຂ້າມຈະຂະໜານກັນ ແລະ ໜ້າຕິດກັນຈະຕັ້ງສາກກັນສະເໝີເດີ້!",
    },
  },
];
