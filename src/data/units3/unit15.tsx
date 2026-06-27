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

export const unit15Data: UnitData = {
    
    unitNumber: 15,
    unitTitle: "ກຣາບເສົາ ແລະ ຕາຕະລາງ",
    unitGoal: "ອ່ານ ແລະ ສ້າງກຣາບເສົາພື້ນຖານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ! ພະຍາຍາມອ່ານຄວາມສູງຂອງເສົາໃຫ້ລະອຽດເດີ້.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"15. ກຣາບເສົາ ແລະ ຕາຕະລາງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {"ກຣາບເສົາຊ່ວຍໃຫ້ເຮົາປຽບທຽບຂໍ້ມູນໄດ້ຢ່າງຈະແຈ້ງ ແລະ ວ່ອງໄວ."}
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
            {/* Picture Graph (Tally) */}
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "500px",
                border: "1px solid #E0E0E0",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "12px",
                  fontSize: "22px",
                }}
              >
                {"ໝາກໄມ້ທີ່ແຕ່ລະຄົນມັກ"}
              </p>
              <div
                className="math-illustration"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "80px", fontWeight: "bold" }}>
                    {"ໝາກໂປມ:"}
                  </span>{" "}
                  <span style={{ fontSize: "24px", letterSpacing: "4px" }}>
                    {"🍎🍎🍎🍎🍎"}
                  </span>{" "}
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    {"5 ຄົນ"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "80px", fontWeight: "bold" }}>
                    {"ກ້ວຍ:"}
                  </span>{" "}
                  <span style={{ fontSize: "24px", letterSpacing: "4px" }}>
                    {"🍌🍌🍌"}
                  </span>{" "}
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    {"3 ຄົນ"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "80px", fontWeight: "bold" }}>
                    {"ໝາກມ່ວງ:"}
                  </span>{" "}
                  <span style={{ fontSize: "24px", letterSpacing: "4px" }}>
                    {"🥭🥭🥭🥭🥭🥭"}
                  </span>{" "}
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    {"6 ຄົນ"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bar Graph (Grid-based) */}
            <div className="math-illustration" style={{ width: "400px" }}>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: "0 0 16px 0",
                }}
              >
                {"ກຣາບເສົາສະແດງຈຳນວນຄົນທີ່ມັກໝາກໄມ້"}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* Y-axis */}
                <div
                  style={{
                    position: "relative",
                    height: "180px",
                    width: "20px",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <span
                      key={n}
                      style={{
                        position: "absolute",
                        bottom: `${n * 30 - 7}px`,
                        right: 0,
                      }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
                {/* Graph Area */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "180px",
                    width: "100%",
                    borderLeft: "2px solid #000",
                    borderBottom: "2px solid #000",
                    gap: "30px",
                    padding: "0 20px",
                  }}
                >
                  {/* Apple Bar */}
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`apple-${i}`}
                        style={{
                          height: "30px",
                          width: "50px",
                          backgroundColor: "#FFCDD2",
                          borderTop: "1px solid #D32F2F",
                          borderLeft: "1px solid #D32F2F",
                          borderRight: "1px solid #D32F2F",
                          borderBottom: i === 0 ? "none" : "1px solid #D32F2F",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Banana Bar */}
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`banana-${i}`}
                        style={{
                          height: "30px",
                          width: "50px",
                          backgroundColor: "#FFE082",
                          borderTop: "1px solid #FFA000",
                          borderLeft: "1px solid #FFA000",
                          borderRight: "1px solid #FFA000",
                          borderBottom: i === 0 ? "none" : "1px solid #FFA000",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Mango Bar */}
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`mango-${i}`}
                        style={{
                          height: "30px",
                          width: "50px",
                          backgroundColor: "#C8E6C9",
                          borderTop: "1px solid #388E3C",
                          borderLeft: "1px solid #388E3C",
                          borderRight: "1px solid #388E3C",
                          borderBottom: i === 0 ? "none" : "1px solid #388E3C",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              {/* X-axis labels */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  gap: "30px",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {"🍎"}
                </div>
                <div
                  style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {"🍌"}
                </div>
                <div
                  style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {"🥭"}
                </div>
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
              {"ເບິ່ງກຣາບເສົາແລ້ວຕອບຄຳຖາມ (ສີທີ່ນັກຮຽນມັກ):"}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {/* Bar Graph here */}
              <div
                style={{
                  width: "300px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Y-axis */}
                  <div
                    style={{
                      position: "relative",
                      height: "160px",
                      width: "20px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        style={{
                          position: "absolute",
                          bottom: `${n * 20 - 6}px`,
                          right: 0,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  {/* Graph Area */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "160px",
                      width: "100%",
                      borderLeft: "2px solid #000",
                      borderBottom: "2px solid #000",
                      gap: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Red: 6 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`r-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#FFCDD2",
                            borderTop: "1px solid #D32F2F",
                            borderLeft: "1px solid #D32F2F",
                            borderRight: "1px solid #D32F2F",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #D32F2F",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Blue: 8 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`b-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#BBDEFB",
                            borderTop: "1px solid #1976D2",
                            borderLeft: "1px solid #1976D2",
                            borderRight: "1px solid #1976D2",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #1976D2",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Green: 4 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={`g-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C8E6C9",
                            borderTop: "1px solid #388E3C",
                            borderLeft: "1px solid #388E3C",
                            borderRight: "1px solid #388E3C",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #388E3C",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* X-axis labels */}
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "30px",
                    gap: "20px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສີແດງ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສີຟ້າ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສີຂຽວ"}
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  flex: 1,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ marginLeft: "8px", fontSize: "18px" }}>
                    {"ສີໃດມີຄົນມັກຫຼາຍທີ່ສຸດ ແລະ ມີຈັກຄົນ?"}
                  </span>
                  <div style={{ marginTop: "8px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "40px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span>{","}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ marginLeft: "8px", fontSize: "18px" }}>
                    {"ລວມທັງໝົດມີນັກຮຽນຈັກຄົນ?"}
                  </span>
                  <div style={{ marginTop: "8px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span>{"ຄົນ"}</span>
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
              {"ຈົ່ງເບິ່ງຕາຕະລາງ (ສັດລ້ຽງທີ່ມັກ) ແລ້ວລະບາຍສີໃສ່ກຣາບເສົາ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div style={{ display: "flex", gap: "40px" }}>
              {/* Table */}
              <div style={{ width: "220px" }}>
                <table
                  className="math-illustration"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "2px solid #000",
                    fontSize: "16px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ສັດ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ໝາ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ແມວ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ໄກ່"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ຈຳນວນ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"5"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"7"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"4"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                    <span style={{ marginLeft: "8px", fontSize: "16px" }}>
                      {"ສັດຊະນິດໃດມີຄົນມັກໜ້ອຍທີ່ສຸດ?"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span>{"ຕອບ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                          margin: "0 8px",
                        }}
                      ></span>
                    </div>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                    <span style={{ marginLeft: "8px", fontSize: "16px" }}>
                      {"ໝາມີຄົນມັກຫຼາຍກວ່າໄກ່ຈັກຄົນ?"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span>{"ຕອບ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                          margin: "0 8px",
                        }}
                      ></span>
                      <span>{"ຄົນ"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blank Graph for coloring */}
              <div
                className="math-illustration"
                style={{
                  padding: "10px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  fontSize: "14px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#666",
                    margin: "0 0 8px 0",
                  }}
                >
                  {"ລະບາຍສີໃສ່ກຣາບເສົາ"}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "160px",
                      width: "20px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        style={{
                          position: "absolute",
                          bottom: `${n * 20 - 6}px`,
                          right: 0,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "160px",
                      width: "100%",
                      borderLeft: "2px solid #000",
                      borderBottom: "2px solid #000",
                      gap: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Dog Bar (empty grid) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`d-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            border: "1px dashed #999",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Cat Bar (empty grid) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`c-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            border: "1px dashed #999",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Bird Bar (empty grid) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`b-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            border: "1px dashed #999",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "30px",
                    gap: "20px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໝາ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ແມວ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໄກ່"}
                  </div>
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
                {"ນຳເອົາຂໍ້ມູນລຸ່ມນີ້ມາຂຽນໃສ່ຕາຕະລາງ ແລະ ລະບາຍສີໃສ່ກຣາບເສົາ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p>
                  {
                    "ມີເດັກນ້ອຍ 20 ຄົນ. ມັກສີແດງ 8 ຄົນ, ມັກສີຟ້າ 7 ຄົນ, ມັກສີຂຽວ 5 ຄົນ."
                  }
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Table */}
                  <div style={{ width: "240px" }}>
                    <table
                      className="math-illustration"
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "2px solid #000",
                        fontSize: "16px",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              fontWeight: "bold",
                              textAlign: "center",
                              backgroundColor: "#E0F7FA",
                            }}
                          >
                            {"ສີທີ່ມັກ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {"ສີແດງ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {"ສີຟ້າ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {"ສີຂຽວ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            {"ລວມ"}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              fontWeight: "bold",
                              textAlign: "center",
                              backgroundColor: "#E0F7FA",
                            }}
                          >
                            {"ຈຳນວນ"}
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Blank Graph for coloring */}
                  <div
                    className="math-illustration"
                    style={{
                      padding: "10px",
                      border: "1px dashed #ccc",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      fontSize: "14px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#666",
                        margin: "0 0 8px 0",
                      }}
                    >
                      {"ລະບາຍສີໃສ່ກຣາບເສົາ"}
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          position: "relative",
                          height: "160px",
                          width: "20px",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <span
                            key={n}
                            style={{
                              position: "absolute",
                              bottom: `${n * 20 - 6}px`,
                              right: 0,
                            }}
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          height: "160px",
                          width: "100%",
                          borderLeft: "2px solid #000",
                          borderBottom: "2px solid #000",
                          gap: "20px",
                          padding: "0 10px",
                        }}
                      >
                        {/* Red Bar (empty grid) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`r-${i}`}
                              style={{
                                height: "20px",
                                width: "40px",
                                border: "1px dashed #999",
                                boxSizing: "border-box",
                              }}
                            ></div>
                          ))}
                        </div>
                        {/* Blue Bar (empty grid) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`b-${i}`}
                              style={{
                                height: "20px",
                                width: "40px",
                                border: "1px dashed #999",
                                boxSizing: "border-box",
                              }}
                            ></div>
                          ))}
                        </div>
                        {/* Green Bar (empty grid) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`g-${i}`}
                              style={{
                                height: "20px",
                                width: "40px",
                                border: "1px dashed #999",
                                boxSizing: "border-box",
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        paddingLeft: "30px",
                        gap: "20px",
                        marginTop: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {"ສີແດງ"}
                      </div>
                      <div
                        style={{
                          width: "40px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {"ສີຟ້າ"}
                      </div>
                      <div
                        style={{
                          width: "40px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {"ສີຂຽວ"}
                      </div>
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
                {"ຈົ່ງຕອບຄຳຖາມຈາກຂໍ້ມູນຂ້າງເທິງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "18px",
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ marginLeft: "8px" }}>
                    {"ສີໃດທີ່ມີຄົນມັກໜ້ອຍທີ່ສຸດ ແລະ ມີຈັກຄົນ?"}
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
                        width: "100px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{", ຈຳນວນ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ marginLeft: "8px" }}>
                    {"ສີແດງມີຄົນມັກຫຼາຍກວ່າສີຂຽວຈັກຄົນ?"}
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
                        width: "80px",
                        height: "40px",
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
      hintText:
        "ອ່ານຂໍ້ມູນຈາກໂຈດແລ້ວນຳມາຕື່ມໃສ່ຕາຕະລາງແຕ່ລະຊ່ອງໃຫ້ຖືກຕ້ອງເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງເບິ່ງກຣາບເສົາແລ້ວຕື່ມຈຳນວນໃສ່ຕາຕະລາງໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                alignItems: "flex-start",
              }}
            >
              {/* Graph Area */}
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "0 0 8px 0",
                  }}
                >
                  {"ກິລາທີ່ມັກ"}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Y-axis */}
                  <div
                    style={{
                      position: "relative",
                      height: "160px",
                      width: "20px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        style={{
                          position: "absolute",
                          bottom: `${n * 20 - 6}px`,
                          right: 0,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "160px",
                      width: "100%",
                      borderLeft: "2px solid #000",
                      borderBottom: "2px solid #000",
                      gap: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Football: 7 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={`f-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#81C784",
                            borderTop: "1px solid #388E3C",
                            borderLeft: "1px solid #388E3C",
                            borderRight: "1px solid #388E3C",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #388E3C",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Volleyball: 5 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={`v-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#FFB74D",
                            borderTop: "1px solid #F57C00",
                            borderLeft: "1px solid #F57C00",
                            borderRight: "1px solid #F57C00",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #F57C00",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Running: 3 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={`r-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#64B5F6",
                            borderTop: "1px solid #1976D2",
                            borderLeft: "1px solid #1976D2",
                            borderRight: "1px solid #1976D2",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #1976D2",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "30px",
                    gap: "20px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ບານເຕະ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ບານສົ່ງ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ແລ່ນ"}
                  </div>
                </div>
              </div>

              {/* Table */}
              <div style={{ width: "240px", marginTop: "40px" }}>
                <table
                  className="math-illustration"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "2px solid #000",
                    fontSize: "16px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ກິລາ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ບານເຕະ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ບານສົ່ງ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ແລ່ນ"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ຈຳນວນ"}
                      </td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>
                        <span
                          className="answer-blank"
                          style={{
                            display: "inline-block",
                            width: "100%",
                            height: "24px",
                          }}
                        ></span>
                      </td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>
                        <span
                          className="answer-blank"
                          style={{
                            display: "inline-block",
                            width: "100%",
                            height: "24px",
                          }}
                        ></span>
                      </td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>
                        <span
                          className="answer-blank"
                          style={{
                            display: "inline-block",
                            width: "100%",
                            height: "24px",
                          }}
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              {"ຈົ່ງຕອບຄຳຖາມຈາກກຣາບເສົາຂ້າງເທິງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
              }}
            >
              <div>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ marginLeft: "8px" }}>
                  {"ກິລາປະເພດໃດມີຄົນມັກຫຼາຍທີ່ສຸດ?"}
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
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ marginLeft: "8px" }}>
                  {"ບານເຕະມີຄົນມັກຫຼາຍກວ່າແລ່ນຈັກຄົນ?"}
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
                      width: "80px",
                      height: "40px",
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) ສີຟ້າ, 8 ຄົນ, (2) 18 ຄົນ, (3) ໄກ່, (4) 1 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ສີແດງ: 8, ສີຟ້າ: 7, ສີຂຽວ: 5, ລວມ: 20, (1) ສີຂຽວ, 5 ຄົນ, (2) 3 ຄົນ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"ບານເຕະ: 7, ບານສົ່ງ: 5, ແລ່ນ: 3, (1) ບານເຕະ, (2) 4 ຄົນ"}
            </span>,
          ],
        },
      ],
      advice: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ!",
    },
  };
