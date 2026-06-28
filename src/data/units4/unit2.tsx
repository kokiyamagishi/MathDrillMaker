import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit2Data: UnitData = {
    
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
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>
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
                <span style={{ fontWeight: "bold" }, whiteSpace: "nowrap"}>
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
                  width: "80px",
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
                  }, whiteSpace: "nowrap"}
                >
                  {"10,000"}
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "67px",
                    left: "-45px",
                    fontSize: "14px",
                  }, whiteSpace: "nowrap"}
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
  };
