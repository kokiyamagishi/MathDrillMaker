import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit4Data: UnitData = {
    
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
                      width: "100px",
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
  };
