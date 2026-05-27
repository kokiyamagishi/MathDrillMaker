import React from "react";
import { UnitData } from "./units2";

export const unitsData5: UnitData[] = [
  {
    unitNumber: 1,
    unitTitle: "ຈຳນວນຖ້ວນ ແລະ ຈຳນວນທົດສະນິຍົມ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບໂຄງສ້າງຂອງຈຳນວນຖ້ວນ ແລະ ຈຳນວນທົດສະນິຍົມ, ແລະ ວິທີການເລື່ອນຈຸດທົດສະນິຍົມເມື່ອຄູນ ຫຼື ຫານດ້ວຍ 10, 100, 1000",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 6-11",
    keyPoints: {
      hint: {
        text: "ເມື່ອຄູນດ້ວຍ 10 ຫຼື 100, ຈຸດທົດສະນິຍົມຈະຍ້າຍໄປທາງຂວາ. ແຕ່ຖ້າຫານດ້ວຍ 10 ຫຼື 100, ຈຸດທົດສະນິຍົມຈະຍ້າຍໄປທາງຊ້າຍເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ໂຄງສ້າງຫຼັກຂອງຈຳນວນ"}
          </h3>
          <p style={{ fontSize: "22px", margin: 0 }}>
            {"ຕົວຢ່າງ: ໂຄງສ້າງຂອງຈຳນວນ 9.35 (ເກົ້າຈຸດສາມຫ້າ) ປະກອບດ້ວຍ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "22px",
              }}
            >
              <div>{"• ຫຼັກຫົວໜ່ວຍ (1): ມີ 9 ຕົວ (9)"}</div>
              <div>{"• ຫຼັກທົດສະນіຍົມທີ 1 (0.1): ມີ 3 ຕົວ (0.3)"}</div>
              <div>{"• ຫຼັກທົດສະນິຍົມທີ 2 (0.01): ມີ 5 ຕົວ (0.05)"}</div>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#0D47A1",
                  fontSize: "22px",
                  marginTop: "8px",
                  borderTop: "1px solid #ccc",
                  paddingTop: "8px",
                  textAlign: "center",
                }}
              >
                {"9 + 0.3 + 0.05 = 9.35"}
              </div>
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ການເລື່ອນຈຸດທົດສະນິຍົມ"}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {/* Multiplication */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"ການຄູນດ້ວຍ 10 ແລະ 100 (×10, ×100)"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ຈຸດທົດສະນິຍົມຈະຍ້າຍໄປທາງຂວາ (Right)"}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "22px",
                  lineHeight: "1.5",
                }}
              >
                <li>{"3.14 × 10 = 31.4 (ຍ້ອນ 1 ຫຼັກ)"}</li>
                <li>{"3.14 × 100 = 314 (ຍ້ອນ 2 ຫຼັກ)"}</li>
              </ul>
            </div>

            {/* Division */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#E65100" }}>
                {"ການຫານດ້ວຍ 10 ແລະ 100 (÷10, ÷100)"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ຈຸດທົດສະນິຍົມຈະຍ້າຍໄປທາງຊ້າຍ (Left)"}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "22px",
                  lineHeight: "1.5",
                }}
              >
                <li>{"365 ÷ 10 = 36.5 (ຍ້ອນ 1 ຫຼັກ)"}</li>
                <li>{"365 ÷ 100 = 3.65 (ຍ້ອນ 2 ຫຼັກ)"}</li>
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
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນ ແລະ ການຫານຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) 3.14 × 10 ="}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(2) 3.14 × 100 ="}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(3) 365 ÷ 10 ="}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(4) 365 ÷ 100 ="}</span>
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
        "0.001 ແມ່ນຫຼັກທົດສະນິຍົມທີ 3. ຖ້າມີ 235 ຕົວ ຈະປະກອບກັນເປັນຈຳນວນໃດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງສ້າງຈຳນວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
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
                  <span>{"(1) ຈຳນວນທີ່ມີ 0.001 ຢູ່ 235 ຕົວ ຈະແມ່ນ"}</span>
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
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"(2) ຖ້າເອົາ 9.35 ມາຄູນໃຫ້ 1000 ຈະໄດ້ຄຳຕອບແມ່ນ"}</span>
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 2.385 × 10 ="}</span>
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
                <span>{"(2) 2.385 × 100 ="}</span>
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
                <span>{"(3) 238.5 ÷ 10 ="}</span>
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
                <span>{"(4) 238.5 ÷ 1000 ="}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 31.4, (2) 314, (3) 36.5, (4) 3.65"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "(1) 0.235 (ຍ້ອນ 0.001 × 235 = 0.235), (2) 9350 (ຍ້ອນເລື່ອນຈຸດໄປທາງຂວາ 3 ຫຼັກ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"(1) 23.85, (2) 238.5, (3) 23.85, (4) 0.2385"}
            </span>,
          ],
        },
      ],
      advice:
        "ການຄູນ 10, 100, 1000 ແມ່ນຍ້າຍຈຸດທົດສະນິຍົມໄປທາງຂວາ 1, 2, 3 ຫຼັກ. ການຫານ 10, 100, 1000 ແມ່ນຍ້າຍຈຸດໄປທາງຊ້າຍ 1, 2, 3 ຫຼັກ. ວິທີນີ້ງ່າຍ ແລະ ວ່ອງໄວຫຼາຍ!",
    },
  },

  {
    unitNumber: 2,
    unitTitle: "ການຄູນ ແລະ ການຫານຈຳນວນທົດສະນິຍົມ",
    unitGoal:
      "ຮຽນຮູ້ວິທີການຄູນ ແລະ ການຫານຈຳນວນທົດສະນິຍົມຕາມທາງຕັ້ງ ແລະ ການແກ້ໄຂໂຈດບັນຫາຕົວຈິງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 12-29",
    keyPoints: {
      hint: {
        text: "ເວລາຄູນຈຳນວນທົດສະນິຍົມຕາມທາງຕັ້ງ, ໃຫ້ຄູນຄືເລກທຳມະດາ ແລ້ວຈຶ່ງນັບຈຳນວນຫຼັກທົດສະນິຍົມທັງໝົດເພື່ອໝາຍຈຸດໃສ່ຜົນຄູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {/* 1. ການຄູນຈຳນວນທົດສະນິຍົມ (かけ算カード) */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{ fontSize: "22px", color: "#2E7D32", margin: "0 0 12px 0" }}
              >
                {"1. ການຄູນຈຳນວນທົດສະນິຍົມ"}
              </h3>
              <p style={{ margin: "0 0 10px 0", fontSize: "22px" }}>
                {"ຕົວຢ່າງ: 2.4 × 1.3 = ? (ມີຫຼັກທົດສະນິຍົມລວມກັນ 2 ຫຼັກ):"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* Decimal Vertical Calculation illustration using custom table layout */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"4"}</td>
                    </tr>
                    <tr>
                      <td style={{ width: "30px" }}>{"×"}</td>
                      <td style={{ width: "30px" }}>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"3"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td>{"7"}</td>
                      <td></td>
                      <td>{"2"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>{"2"}</td>
                      <td></td>
                      <td>{"4"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td>{"3"}</td>
                      <td style={{ color: "red" }}>{"."}</td>
                      <td>{"1"}</td>
                      <td>{"2"}</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  style={{ fontSize: "22px", color: "#555", maxWidth: "280px" }}
                >
                  <div>{"1. ຄິດໄລ່ຄືກັບ 24 × 13 = 312."}</div>
                  <div>
                    {
                      "2. ເນື່ອງຈາກ 2.4 (1 ຫຼັກ) ແລະ 1.3 (1 ຫຼັກ) ມີຫຼັກທົດສະນິຍົມລວມກັນ 2 ຫຼັກ."
                    }
                  </div>
                  <div>
                    {
                      "3. ຈຶ່ງໝາຍຈຸດທົດສະນິຍົມຖອຍຫຼັງ 2 ຫຼັກ ເປັນ 3.12 (ໝາຍຈຸດສີແດງເດີ້!)."
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ການຫານຈຳນວນທົດສະນິຍົມ (わり算カード - 新規追加) */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{ fontSize: "22px", color: "#E65100", margin: "0 0 12px 0" }}
              >
                {"2. ການຫານຈຳນວນທົດສະນິຍົມ"}
              </h3>
              <p style={{ margin: "0 0 10px 0", fontSize: "22px" }}>
                {"ຕົວຢ່າງ: 6.5 ÷ 2.5 = ? (ເລື່ອນຈຸດໄປທາງຂວາ 1 ຫຼັກ):"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* わり算の筆算テーブル (HTML Table) */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          color: "red",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"6"}</td>
                    </tr>
                    <tr style={{ borderBottom: "2px solid #000" }}>
                      <td style={{ width: "30px" }}>{"25"}</td>
                      <td
                        style={{
                          width: "15px",
                          borderRight: "2px solid #000",
                          borderTopLeftRadius: "10px",
                        }}
                      >
                        {")"}
                      </td>
                      <td style={{ width: "30px" }}>{"6"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          color: "#ccc",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"5"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>{"5"}</td>
                      <td></td>
                      <td>{"0"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td></td>
                      <td>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          color: "red",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td>{"5"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>{"1"}</td>
                      <td></td>
                      <td>{"5"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{"0"}</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  style={{ fontSize: "22px", color: "#555", maxWidth: "280px" }}
                >
                  <div>
                    {
                      "1. ເລື່ອນຈຸດທົດສະນິຍົມຂອງຕົວຫານ ແລະ ຕົວຕັ້ງຫານໄປທາງຂວາ 1 ຫຼັກ (ຄືກັບ 65 ÷ 25)."
                    }
                  </div>
                  <div>{"2. ຄິດໄລ່ຄືເລກທຳມະດາ 65 ÷ 25 = 2 ເສດ 15."}</div>
                  <div>
                    {
                      "3. ຕື່ມເລກ 0 ໃສ່ທາງຫຼັງຕົວເສດ 15 ຈະໄດ້ 150 ແລ້ວຫານຕໍ່ 150 ÷ 25 = 6. ຢ່າລືມໝາຍຈຸດໃສ່ຜົນຫານເດີ້!"
                    }
                  </div>
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
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
              {/* Problem 1 */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "18px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "14px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"8"}</td>
                    </tr>
                    <tr>
                      <td style={{ width: "30px" }}>{"×"}</td>
                      <td style={{ width: "30px" }}>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "16px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"5"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td
                        colSpan={4}
                        style={{
                          height: "40px",
                          backgroundColor: "#f9f9f9",
                          border: "1px dashed #ccc",
                        }}
                      >
                        {"(ຄິດໄລ່)"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຄຳຕອບ ="}</span>
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

              {/* Problem 2 */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "18px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "14px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td style={{ width: "30px" }}>{"5"}</td>
                    </tr>
                    <tr>
                      <td style={{ width: "30px" }}>{"×"}</td>
                      <td style={{ width: "30px" }}></td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "14px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td style={{ width: "30px" }}>{"4"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td
                        colSpan={5}
                        style={{
                          height: "40px",
                          backgroundColor: "#f9f9f9",
                          border: "1px dashed #ccc",
                        }}
                      >
                        {"(ຄິດໄລ່)"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຄຳຕອບ ="}</span>
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

              {/* Problem 3 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  fontSize: "20px",
                }}
              >
                <span>{"(3) 6.5 ÷ 2.5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
              </div>

              {/* Problem 4 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  fontSize: "20px",
                }}
              >
                <span>{"(4) 13.5 ÷ 5 ="}</span>
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
        "⚖️ ໂຈດບັນຫານີ້ໃຊ້ວິທີການຄູນ! ລວດເຫຼັກ 1.4m ຈະມີນ້ຳໜັກແມ່ນ ນ້ຳໜັກຕໍ່ 1m ຄູນໃຫ້ຄວາມຍາວເດີ້!",
      problems: [
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
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {
                    "⛓️ ມີລວດເຫຼັກເສັ້ນໜຶ່ງ ທີ່ມີຄວາມຍາວ 1m ມີນ້ຳໜັກ 2.5kg. ຖ້າລວດເຫຼັກເສັ້ນນີ້ຍາວ 1.4m ຈະມີນ້ຳໜັກຈັກ kg?"
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
                  <span>{"kg"}</span>
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
              {"ຈົ່ງຄິດໄລ່ ແລະ ແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 0.8 × 2.5 ="}</span>
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
                <span>{"(2) 1.2 × 0.5 ="}</span>
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
                <span>{"(3) 7.5 ÷ 1.5 ="}</span>
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
                <span>{"(4) 10.5 ÷ 3 ="}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 4.2 (ຍ້ອນ 2.8 × 1.5 = 4.20), (2) 3 (ຍ້ອນ 1.25 × 2.4 = 3.00), (3) 2.6 (ຍ້ອນ 6.5 ÷ 2.5 = 2.6), (4) 2.7 (ຍ້ອນ 13.5 ÷ 5 = 2.7)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"3.5 kg (ຍ້ອນ 2.5 × 1.4 = 3.5)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 2 (ຍ້ອນ 0.8 × 2.5 = 2.0), (2) 0.6 (ຍ້ອນ 1.2 × 0.5 = 0.6), (3) 5 (ຍ້ອນ 7.5 ÷ 1.5 = 5), (4) 3.5 (ຍ້ອນ 10.5 ÷ 3 = 3.5)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ການຫານຈຳນວນທົດສະນິຍົມ, ເຮົາສາມາດເລື່ອນຈຸດທົດສະນິຍົມຂອງຕົວຫານໃຫ້ເປັນຈຳນວນຖ້ວນກ່ອນ ແລ້ວຈຶ່ງເລື່ອນຕົວຕັ້ງຫານຕາມກັນ ຈະເຮັດໃຫ້ຫານງ່າຍຂຶ້ນສະເໝີເດີ້!",
    },
  },
  {
    unitNumber: 3,
    unitTitle: "ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ຮູບກ້ອນສາກ",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາບໍລິມາດຂອງຮູບກ່ອງສາກ, ຮູບກ້ອນສາກ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍບໍລິມາດ (cm³, m³)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 30-37",
    keyPoints: {
      hint: {
        text: "ບໍລິມາດແມ່ນຂະໜາດຂອງເນື້ອທີ່ວ່າງໃນສາມມິຕິ! ຈື່ສູດ: ບໍລິມາດຮູບກ່ອງສາກ = ກວ້າງ × ຍາວ × ສູງ ແລະ ຮູບກ້ອນສາກ = ຂ້າງ × ຂ້າງ × ຂ້າງ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດບໍລິມາດ (Volume Formulas)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Cuboid Volume */}
            <div
              className="math-illustration"
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
                {"ຮູບກ່ອງສາກ (Cuboid)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="140" height="90">
                  <path
                    d="M 10,50 L 80,50 L 80,80 L 10,80 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <path
                    d="M 80,50 L 110,30 L 110,60 L 80,80 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <path
                    d="M 10,50 L 40,30 L 110,30 L 80,50 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text x="45" y="75" style={{ fontSize: "22px" }}>
                    {"ກວ້າງ"}
                  </text>
                  <text x="98" y="75" style={{ fontSize: "22px" }}>
                    {"ຍາວ"}
                  </text>
                  <text x="115" y="45" style={{ fontSize: "22px" }}>
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"ກວ້າງ × ຍາວ × ສູງ"}
              </strong>
            </div>

            {/* Cube Volume */}
            <div
              className="math-illustration"
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
                {"ຮູບກ້ອນສາກ (Cube)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="100" height="90">
                  <rect
                    x="10"
                    y="30"
                    width="50"
                    height="50"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <path
                    d="M 60,30 L 90,10 L 90,60 L 60,80"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <path
                    d="M 10,30 L 40,10 L 90,10"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="80"
                    x2="90"
                    y2="60"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <text x="35" y="75" style={{ fontSize: "22px" }}>
                    {"ຂ້າງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"ຂ້າງ × ຂ້າງ × ຂ້າງ"}
              </strong>
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍ (Unit Relations)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>{"• 1 cm³ = 1 mL (ມີລີລິດ) = 0.001 L"}</div>
            <div>
              {"• 1 m³ = 1,000,000 cm³ = 1,000 L (ລິດ) = 1 kL (ກິໂລລິດ)"}
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
              {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຊົງລຸ່ມນີ້: "}{" "}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(1) ຮູບກ່ອງສາກທີ່ມີລວງກວ້າງ 4 cm, ລວງຍາວ 5 cm ແລະ ລວງສູງ 6 cm. ບໍລິມາດແມ່ນ"
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
                  <span>{"cm³"}</span>
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
                  {"(2) ຮູບກ້ອນສາກທີ່ມີຄວາມຍາວຂ້າງ 5 cm. ບໍລິມາດແມ່ນ"}
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
                  <span>{"cm³"}</span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍບໍລິມາດຕໍ່ໄປນີ້: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 2 m³ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm³"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 5,000 cm³ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"L (ລິດ)"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ບໍລິມາດນ້ຳທາງໃນແມ່ນເອົາ ຂະໜາດທາງໃນ (ລວງກວ້າງ, ລວງຍາວ, ລວງເລິກ) ມາຄູນກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດນ້ຳ: "}{" "}
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
                    "🥛 ມີກ່ອງໃສ່ນ້ຳຮູບກ່ອງສາກຂະໜາດທາງໃນມີ ລວງກວ້າງ 10 cm, ລວງຍາວ 12 cm ແລະ ລວງເລິກ 8 cm. ຖ້າເທນ້ຳໃສ່ເຕັມກ່ອງ ຈະມີນ້ຳຈັກ mL?"
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
                  <span>{"mL"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການປຽບທຽບຄວາມຈຸນ້ຳ: "}{" "}
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
                  "🐳 ມີອ່າງລ້ຽງປາຮູບກ່ອງສາກ ທີ່ມີລວງກວ້າງ 2 m, ລວງຍາວ 3 m ແລະ ລວງສູງ 1.5 m. ອ່າງລ້ຽງປານີ້ສາມາດບັນຈຸນ້ຳໄດ້ຫຼາຍທີ່ສຸດຈັກ L (ລິດ)?"
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {"(1) 120 cm³ (4 × 5 × 6), (2) 125 cm³ (5 × 5 × 5)"}
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {
                "(3) 2,000,000 cm³ (2 × 1,000,000), (4) 5 L (ຍ້ອນ 5000 cm³ = 5000 mL = 5 L)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">
              {"960 mL (ຍ້ອນ 10 × 12 × 8 = 960 cm³ = 960 mL)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">
              {"9,000 L (ຍ້ອນ 2 × 3 × 1.5 = 9 m³ = 9,000,000 cm³ = 9,000 L)"}
            </span>,
          ],
        },
      ],
      advice:
        "ບໍລິມາດແລະຄວາມຈຸນ້ຳແມ່ນມີຄວາມສຳພັນກັນຢ່າງສະໜິດແໜ້ນ! ຈື່ໄວ້ວ່າ 1 cm³ = 1 mL ແລະ 1 m³ = 1,000,000 cm³ = 1,000 L ຈະຊ່ວຍໃຫ້ປ່ຽນຫົວໜ່ວຍໄດ້ງ່າຍສະເໝີ.",
    },
  },

  {
    unitNumber: 4,
    unitTitle: "ການທຽບເທົ່າກັນຂອງຮູບເລຂາຄະນິດ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມໝາຍຂອງການທຽບເທົ່າກັນ (合同) ຂອງຮູບເລຂາຄະນິດ, ແລະ ຊອກຫາຂ້າງ ຫຼື ມຸມທີ່ກົງກັນຂ້າມກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 38-45",
    keyPoints: {
      hint: {
        text: "ສອງຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ ຈະມີຮູບຮ່າງ ແລະ ຂະໜາດເທົ່າກັນພໍດີ! ເມື່ອທັບກັນ ມັນຈະຊ້ອນກັນໄດ້ຢ່າງສົມບູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບເລຂາຄະນິດທີ່ທຽບເທົ່າກັນ (Congruent Figures)"}
          </h3>
          <p style={{ fontSize: "22px", margin: 0 }}>
            {"ຄຸນລັກສະນະສຳຄັນຂອງສອງຮູບທີ່ທຽບເທົ່າກັນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>{"• ຄວາມຍາວຂອງຂ້າງທີ່ສົມທຽບ (对应边) ແມ່ນເທົ່າກັນ."}</div>
            <div>{"• ຂະໜາດຂອງມຸມທີ່ສົມທຽບ (对应角) ແມ່ນເທົ່າກັນ."}</div>
          </div>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              margin: "10px 0",
            }}
          >
            {/* SVG of two congruent triangles */}
            <svg width="150" height="100">
              <path
                d="M 20,80 L 120,80 L 70,20 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <text x="15" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"A"}
              </text>
              <text x="125" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"B"}
              </text>
              <text x="65" y="15" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"C"}
              </text>
            </svg>
            <svg width="150" height="100">
              {/* Congruent but rotated or shifted */}
              <path
                d="M 30,80 L 130,80 L 80,20 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <text x="25" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"D"}
              </text>
              <text x="135" y="95" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"E"}
              </text>
              <text x="75" y="15" style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"F"}
              </text>
            </svg>
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
              {"ຈາກຮູບສາມແຈສອງຮູບ ABC ແລະ DEF ທີ່ທຽບເທົ່າກັນດ້ານເທິງ: "}{" "}
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
                <span>{"(1) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AB ແມ່ນຂ້າງ"}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(2) ຂ້າງທີ່ສົມທຽບກັບຂ້າງ AC ແມ່ນຂ້າງ"}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(3) ມຸມທີ່ສົມທຽບກັບມຸມ A ແມ່ນມຸມ"}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(4) ຖ້າຄວາມຍາວຂ້າງ AB = 6 cm, ຂ້າງ DE ຈະຍາວຈັກ cm?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
    challengeProblems: {
      hintText:
        "📐 ຜົນບວກມຸມໃນຮູບສາມແຈແມ່ນ 180 ອົງສາສະເໝີ! ໃຊ້ຄວາມຮູ້ນີ້ຊອກຫາມຸມທີ່ເຫຼືອເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ກຳນົດ: "}{" "}
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
                <svg className="math-illustration" width="150" height="100">
                  <path
                    d="M 20,80 L 130,80 L 90,20 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <text x="30" y="75" style={{ fontSize: "12px" }}>
                    {"45°"}
                  </text>
                  <text x="90" y="75" style={{ fontSize: "12px" }}>
                    {"65°"}
                  </text>
                  <text x="80" y="35" style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {"C"}
                  </text>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "20px",
                  }}
                >
                  <div>{"(1) ມຸມ C ໃນຮູບສາມແຈນີ້ເທົ່າກັບ"}</div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
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
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
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
                  "📐 ຖ້າເຮົາແບ່ງຮູບສີ່ແຈສາກອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ, ເຮົາຈະໄດ້ຮູບສາມແຈສອງຮູບທີ່ທຽບເທົ່າກັນພໍດີ ຫຼື ບໍ່?"
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
            <span key="1">{"(1) DE, (2) DF, (3) ມຸມ D, (4) 6 cm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"70° (ຍ້ອນ 180 - (45 + 65) = 180 - 110 = 70)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"ທຽບເທົ່າກັນ (ຍ້ອນມີຂ້າງ ແລະ ມຸມເທົ່າກັນພໍດີ ເມື່ອປິ່ນທັບກັນ)"}
            </span>,
          ],
        },
      ],
      advice:
        "ການກຳນົດຂ້າງ ແລະ ມຸມສົມທຽບໃນຮູບທຽບເທົ່າກັນ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດຄິດໄລ່ມຸມ ຫຼື ຄວາມຍາວຂ້າງທີ່ບໍ່ທັນຮູ້ໄດ້ຢ່າງງ່າຍດາຍ!",
    },
  },
  {
    unitNumber: 5,
    unitTitle: "ການຄູນ ແລະ ການຫານເລກສ່ວນ",
    unitGoal:
      "ຮຽນຮູ້ວິທີການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ແລະ ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ພ້ອມທັງການຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 46-57",
    keyPoints: {
      hint: {
        text: "ເວລາຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ, ໃຫ້ເອົາຈຳນວນຖ້ວນຄູນໃສ່ຈຳນວນພູດ (ຕົວເທິງ). ເວລາຫານ, ໃຫ້ເອົາຈຳນວນຖ້ວນຄູນໃສ່ພູດ (ຕົວລຸ່ມ) ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ (Fraction × Whole)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <p style={{ margin: "0 0 10px 0" }}>
              {"ສູດ: a/b × c = (a × c) / b"}
            </p>
            <div
              style={{ fontWeight: "bold", color: "#0D47A1", fontSize: "22px" }}
            >
              {"ຕົວຢ່າງ: 2/7 × 3 = (2 × 3) / 7 = 6/7"}
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ (Fraction ÷ Whole)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <p style={{ margin: "0 0 10px 0" }}>
              {"ສູດ: a/b ÷ c = a / (b × c)"}
            </p>
            <div
              style={{ fontWeight: "bold", color: "#2E7D32", fontSize: "22px" }}
            >
              {"ຕົວຢ່າງ: 4/5 ÷ 3 = 4 / (5 × 3) = 4/15"}
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
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 2/7 × 3 ="}</span>
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
                <span>{"(2) 5/8 × 2 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "16px", color: "#888" }}>
                  {"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 4/5 ÷ 3 ="}</span>
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
                <span>{"(4) 6/7 ÷ 2 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "16px", color: "#888" }}>
                  {"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "🥛 ໃຊ້ວິທີການຄູນເລກສ່ວນ! ເອົາປະລິມານນ້ຳຕໍ່ 1 ກະປ໋ອງ ຄູນໃຫ້ຈຳນວນກະປ໋ອງທັງໝົດເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນລຸ່ມນີ້: "}{" "}
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
                    "🥤 ນ້ຳໝາກໄມ້ 1 ກະປ໋ອງ ມີປະລິມານ 2/3 L. ຖ້າມີນ້ຳໝາກໄມ້ປະເພດດຽວກັນ 4 ກະປ໋ອງ ຈະມີປະລິມານນ້ຳທັງໝົດຈັກ L? (ຂຽນເປັນເລກສ່ວນປະສົມ ຫຼື ເລກສ່ວນເກີນ)"
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 3/10 × 5 ="}</span>
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
                <span>{"(2) 2/9 × 4 ="}</span>
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
                <span>{"(3) 8/9 ÷ 4 ="}</span>
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
                <span>{"(4) 5/6 ÷ 3 ="}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 6/7, (2) 5/4 (ຍ້ອນ 10/8 ຫານໃຫ້ 2 ທັງພູດແລະພູດ = 5/4), (3) 4/15, (4) 3/7 (ຍ້ອນ 6/14 = 3/7)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"8/3 L ຫຼື 2 2/3 L (ຍ້ອນ 2/3 × 4 = 8/3)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 3/2 (ຍ້ອນ 15/10 = 3/2), (2) 8/9, (3) 2/9 (ຍ້ອນ 8/36 = 2/9), (4) 5/18"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຢ່າລືມກວດເບິ່ງສະເໝີວ່າ ເລກສ່ວນທີ່ໄດ້ສາມາດຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳໄດ້ບໍ່! ການຄັດຈ້ອນຈະຊ່ວຍໃຫ້ຄຳຕອບຂອງເຮົາຖືກຕ້ອງສົມບູນເດີ້.",
    },
  },

  {
    unitNumber: 6,
    unitTitle: "ຮູບຮ່າງທີ່ມີລັກສະນະເຄິ່ງຄືກັນ",
    unitGoal:
      "ຮຽນຮູ້ຄວາມໝາຍ ແລະ ຄຸນລັກສະນະຂອງຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ (線対称) ແລະ ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (点対称)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 58-69",
    keyPoints: {
      hint: {
        text: "ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ສາມາດພັບເຄິ່ງຕາມເສັ້ນແກນໄດ້ພໍດີ! ສ່ວນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ແມ່ນພັບປິ່ນ 180 ອົງສາ ແລ້ວຊ້ອນກັນໄດ້ພໍດີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ (Line Symmetry)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              style={{ flex: "1 1 250px", fontSize: "22px", lineHeight: "1.6" }}
            >
              {
                "ຮູບພາບທີ່ສາມາດພັບເຄິ່ງຕາມເສັ້ນຊື່ໜຶ່ງ (ແກນເຄິ່ງຄື / Axis of Symmetry) ແລ້ວທັງສອງສ່ວນຊ້ອນກັນໄດ້ພໍດີ."
              }
            </div>
            <svg className="math-illustration" width="120" height="90">
              {/* Symmetric Butterfly or shape */}
              <path
                d="M 60,10 L 90,40 L 60,80 L 30,40 Z"
                fill="rgba(33, 150, 243, 0.2)"
                stroke="#2196F3"
                strokeWidth="2"
              />
              {/* Symmetry Axis Line */}
              <line
                x1="60"
                y1="5"
                x2="60"
                y2="85"
                stroke="red"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              <text x="65" y="80" style={{ fontSize: "22px" }} fill="red">
                {"ແກນ"}
              </text>
            </svg>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (Point Symmetry)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              style={{ flex: "1 1 250px", fontSize: "22px", lineHeight: "1.6" }}
            >
              {
                "ຮູບພາບທີ່ເມື່ອປິ່ນອ້ອມເມັດໃຈກາງ (ເມັດເຄິ່ງຄື / Center of Symmetry) ໄປ 180° ແລ້ວມັນຈະທັບກັບຮູບເດີມພໍດີ."
              }
            </div>
            <svg className="math-illustration" width="120" height="90">
              {/* Parallelogram (Point Symmetric) */}
              <path
                d="M 30,25 L 100,25 L 90,65 L 20,65 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <circle cx="60" cy="45" r="4" fill="red" />
              <text x="65" y="50" style={{ fontSize: "22px" }} fill="red">
                {"ເມັດ"}
              </text>
            </svg>
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
              {"ຈົ່ງຈຳແນກປະເພດຮູບເຄິ່ງຄືກັນຕໍ່ໄປນີ້: "}{" "}
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
                  {"(1) ຮູບວົງມົນ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ຫຼື ບໍ່?"}
                </span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(2) ຮູບສີ່ແຈຂ້າງຂະໜານ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ຫຼື ບໍ່?"
                  }
                </span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(3) ຮູບຈະຕຸລັດ (Square) ມີແກນເຄິ່ງຄືທັງໝົດຈັກແກນ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ແກນ"}</span>
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
                    "(4) ຕົວອັກສອນພາສາອັງກິດ 'S' ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ຫຼື ບໍ່?"
                  }
                </span>
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
        "📐 ຈື່ໄວ້ວ່າ ຖ້າເປັນຮູບຈະຕຸລັດ ຫຼື ວົງມົນ ຈະມີຄວາມສົມມາດຫຼາຍຮູບແບບເລີຍເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບເຄິ່ງຄືກັນ: "}{" "}
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
                    "⭐ ຮູບດາວ 5 ແຈສະເໝີ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ທີ່ມີແກນເຄິ່ງຄືທັງໝົດຈັກແກນ?"
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
                  <span>{"ແກນ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເພື່ອທົດສອບ: "}{" "}
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
                  "📐 ຮູບສາມແຈສະເໝີ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (ປິ່ນ 180° ແລ້ວທັບກັນພໍດີ) ຫຼື ບໍ່?"
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
                "(1) ແມ່ນ (ມີແກນຫຼາຍບໍ່ສິ້ນສຸດ), (2) ບໍ່ແມ່ນ (ແຕ່ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ), (3) 4 ແກນ, (4) ແມ່ນ (ປິ່ນ 180° ແລ້ວທັບກັນພໍດີ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"5 ແກນ (ຍ້ອນແຕ່ລະແຈສາມາດຜ່ານໃຈກາງຫາຂ້າງກົງກັນຂ້າມໄດ້)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "ບໍ່ແມ່ນ (ຍ້ອນເມື່ອປິ່ນ 180° ແລ້ວ ຍອດສາມແຈຈະຊີ້ລົງລຸ່ມ ເຮັດໃຫ້ບໍ່ທັບກັບຮູບເດີມ)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບເຄິ່ງຄືກັນທັງສອງປະເພດແມ່ນມີຄວາມສວຍງາມ ແລະ ພົບເຫັນໄດ້ຫຼາຍໃນທຳມະຊາດ! ການຈຳແນກແກນ ແລະ ເມັດເຄິ່ງຄື ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈຄວາມສົມດຸນຂອງສິ່ງຕ່າງໆໄດ້ດີຂຶ້ນ.",
    },
  },
  {
    unitNumber: 7,
    unitTitle: "ຄ່າສະເລ່ຍ",
    unitGoal:
      "ຮຽນຮູ້ຄວາມໝາຍຂອງຄ່າສະເລ່ຍ, ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (ຜົນບວກທັງໝົດ ÷ ຈຳນວນ) ແລະ ການນຳໃຊ້ໃນຊີວິດປະຈຳວັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 70-75",
    keyPoints: {
      hint: {
        text: "ຄ່າສະເລ່ຍແມ່ນການແບ່ງປັນໃຫ້ເທົ່າໆກັນ! ຈື່ສູດ: ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (Average Formula)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
              {"ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນ"}
            </p>
            <div style={{ color: "#0D47A1", fontSize: "22px" }}>
              {"ຕົວຢ່າງ: ຄະແນນສອບເສັງ 3 ຄັ້ງແມ່ນ 80, 90, 70. ຄ່າສະເລ່ຍແມ່ນ:"}
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginTop: "6px",
                }}
              >
                {"(80 + 90 + 70) ÷ 3 = 240 ÷ 3 = 80 (ຄະແນນ)"}
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
              {"ຈົ່ງຊອກຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
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
                  {"(1) ຄະແນນສອບເສັງ 4 ວິຊາ: 80, 90, 75, 85. ຄ່າສະເລ່ຍແມ່ນ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຄະແນນ"}</span>
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
                    "(2) ຈຳນວນປຶ້ມທີ່ນັກຮຽນ 5 ຄົນອ່ານ: 3ຫົວ, 5ຫົວ, 2ຫົວ, 6ຫົວ, 4ຫົວ. ຄ່າສະເລ່ຍແມ່ນ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຫົວ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "👣 ໃຊ້ຄ່າສະເລ່ຍຊອກຫາໄລຍະທາງ! ເອົາຄວາມຍາວບາດກ້າວສະເລ່ຍ ຄູນໃຫ້ຈຳນວນບາດກ້າວເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງຈາກບາດກ້າວ: "}{" "}
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
                    "🚶 ທ້າວ ສົມພອນ ຍ່າງ 10 ບາດກ້າວ ໄດ້ໄລຍະທາງສະເລ່ຍແມ່ນ 6.4 m. ຖ້າລາວຍ່າງ 500 ບາດກ້າວ ຈະໄດ້ໄລຍະທາງທັງໝົດປະມານຈັກແມັດ?"
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
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
                  "🐔 ແມ່ຄ້າເກັບໄຂ່ໄກ່ໄດ້ 5 ວັນ ດັ່ງນີ້: ວັນຈັນ 24 ຟອງ, ວັນອັງຄານ 30 ຟອງ, ວັນພຸດ 25 ຟອງ, ວັນພະຫັດ 28 ຟອງ ແລະ ວັນສຸກ 23 ຟອງ. ໃນ 5 ວັນນີ້, ແມ່ຄ້າເກັບໄຂ່ໄດ້ສະເລ່ຍວັນລະຈັກຟອງ?"
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
                <span>{"ຟອງ"}</span>
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
                "(1) 82.5 ຄະແນນ (ຍ້ອນ (80+90+75+85) ÷ 4 = 330 ÷ 4 = 82.5), (2) 4 ຫົວ (ຍ້ອນ (3+5+2+6+4) ÷ 5 = 20 ÷ 5 = 4)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"320 m (ຍ້ອນ ບາດກ້າວລະ 6.4 ÷ 10 = 0.64 m, ແລະ 0.64 × 500 = 320)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"26 ຟອງ (ຍ້ອນ (24+30+25+28+23) ÷ 5 = 130 ÷ 5 = 26)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຄ່າສະເລ່ຍຊ່ວຍໃຫ້ເຮົາຄາດຄະເນ ແລະ ເຫັນພາບລວມຂອງຂໍ້ມູນໄດ້ດີຫຼາຍ! ຢ່າລືມບວກຂໍ້ມູນທັງໝົດກ່ອນ ແລ້ວຈຶ່ງຫານໃຫ້ຈຳນວນຂໍ້ມູນເດີ້.",
    },
  },

  {
    unitNumber: 8,
    unitTitle: "ຄວາມໄວ",
    unitGoal:
      "ຮຽນຮູ້ສາມສູດພື້ນຖານຂອງຄວາມໄວ, ວິທີການຊອກຫາຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ ພ້ອມທັງການປຽບທຽບຄວາມໄວ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 76-85",
    keyPoints: {
      hint: {
        text: "ຈື່ສູດ 3 ຫຼັກໃຫ້ດີເດີ້! 1. ຄວາມໄວ = ໄລຍະທາງ ÷ ເວລາ. 2. ໄລຍະທາງ = ຄວາມໄວ × ເວລາ. 3. ເວລາ = ໄລຍະທາງ ÷ ຄວາມໄວ.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄວາມໄວພື້ນຖານ (Speed Formulas)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFE082",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              <strong>{"• ຄວາມໄວ (Speed) = ໄລຍະທາງ ÷ ເວລາ"}</strong>
            </div>
            <div>
              <strong>{"• ໄລຍະທາງ (Distance) = ຄວາມໄວ × ເວລາ"}</strong>
            </div>
            <div>
              <strong>{"• ເວລາ (Time) = ໄລຍະທາງ ÷ ຄວາມໄວ"}</strong>
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
              {"ຈົ່ງຄິດໄລ່ຕາມສູດຄວາມໄວຕໍ່ໄປນີ້: "}{" "}
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
                    "(1) ລົດຄັນໜຶ່ງແລ່ນໄດ້ 120 km ໃນເວລາ 2 ຊົ່ວໂມງ. ຄວາມໄວຂອງລົດແມ່ນ"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"km/h"}</span>
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
                    "(2) ຄົນຜູ້ໜຶ່ງຍ່າງດ້ວຍຄວາມໄວ 80 m/min ໃນເວລາ 15 ນາທີ. ໄລຍະທາງແມ່ນ"
                  }
                </span>
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
                    "(3) ລົດໄຟແລ່ນດ້ວຍຄວາມໄວ 60 km/h ໃນໄລຍະທາງ 180 km. ຈະຕ້ອງໃຊ້ເວລາ"
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
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "⚖️ ເພື່ອປຽບທຽບຄວາມໄວ, ເຮົາຕ້ອງປ່ຽນຫົວໜ່ວຍເວລາ ຫຼື ໄລຍະທາງໃຫ້ຄືກັນກ່ອນເດີ້! ຕົວຢ່າງ ປ່ຽນເປັນຄວາມໄວຕໍ່ວິນາທີ.",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການປຽບທຽບຄວາມໄວ: "}{" "}
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
                    "🐆 ເສືອແລ່ນໄດ້ 300 m ໃນເວລາ 15 ວິນາທີ. ມ້າແລ່ນໄດ້ 240 m ໃນເວລາ 10 ວິນາທີ. ສັດຊະນິດໃດແລ່ນໄວກວ່າກັນ?"
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງລຸ່ມນີ້: "}{" "}
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
                  "✈️ ເຮືອບິນລຳໜຶ່ງບິນດ້ວຍຄວາມໄວ 800 km/h. ຖ້າເຮືອບິນບິນເປັນເວລາ 2.5 ຊົ່ວໂມງ, ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ km?"
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
                <span>{"km"}</span>
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
                "(1) 60 km/h (120 ÷ 2), (2) 1,200 m (80 × 15), (3) 3 ຊົ່ວໂມງ (180 ÷ 60)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ມ້າແລ່ນໄວກວ່າ (ຍ້ອນຄວາມໄວເສືອແມ່ນ 300÷15 = 20 m/s, ຄວາມວີມ້າແມ່ນ 240÷10 = 24 m/s, 24 > 20)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"2,000 km (ຍ້ອນ 800 × 2.5 = 2,000)"}</span>],
        },
      ],
      advice:
        "ຄວາມໄວແມ່ນສິ່ງທີ່ສຳຄັນຫຼາຍໃນຟີຊິກ ແລະ ຊີວິດປະຈຳວັນ! ຈື່ໄວ້ສະເໝີວ່າສູດທັງສາມແມ່ນກ່ຽວຂ້ອງກັນ ຖ້າຮູ້ສອງຕົວ ຈະສາມາດຊອກຫາຕົວທີສາມໄດ້ສະເໝີ.",
    },
  },
  {
    unitNumber: 9,
    unitTitle: "ເນື້ອທີ່ຂອງຮູບສີ່ແຈ ແລະ ຮູບສາມແຈ",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາເນື້ອທີ່ຂອງຮູບສາມແຈ, ຮູບສີ່ແຈຂ້າງຂະໜານ, ຮູບຄາງໝູ ແລະ ຮູບສີ່ແຈລີ ພ້ອມທັງການແກ້ໄຂໂຈດບັນຫາເລຂາຄະນິດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 86-109",
    keyPoints: {
      hint: {
        text: "ສູດເນື້ອທີ່ແຕ່ລະຮູບແມ່ນມີຄວາມກ່ຽວຂ້ອງກັນ! ຈື່ສູດ: ຮູບສາມແຈ = ພື້ນ × ລວງສູງ ÷ 2, ຮູບສີ່ແຈຂ້າງຂະໜານ = ພື້ນ × ລວງສູງ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດເນື້ອທີ່ຮູບເລຂາຄະນິດ (Area Formulas)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Triangle area */}
            <div
              className="math-illustration"
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
                {"ຮູບສາມແຈ (Triangle)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 20,70 L 100,70 L 80,20 Z"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <line
                    x1="80"
                    y1="20"
                    x2="80"
                    y2="70"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="50" y="82" style={{ fontSize: "22px" }}>
                    {"ພື້ນ"}
                  </text>
                  <text x="85" y="45" style={{ fontSize: "22px" }} fill="red">
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"ພື້ນ × ລວງສູງ ÷ 2"}
              </strong>
            </div>

            {/* Parallelogram area */}
            <div
              className="math-illustration"
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
                {"ຮູບສີ່ແຈຂ້າງຂະໜານ (Parallelogram)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 20,70 L 90,70 L 100,20 L 30,20 Z"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="20"
                    x2="30"
                    y2="70"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="55" y="82" style={{ fontSize: "22px" }}>
                    {"ພື້ນ"}
                  </text>
                  <text x="35" y="45" style={{ fontSize: "22px" }} fill="red">
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>{"ພື້ນ × ລວງສູງ"}</strong>
            </div>

            {/* Trapezoid area */}
            <div
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#FFE082",
                border: "2px solid #FFB300",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#FF8F00" }}>
                {"ຮູບຄາງໝູ (Trapezoid)"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="80">
                  <path
                    d="M 20,70 L 100,70 L 80,20 L 40,20 Z"
                    fill="rgba(255, 179, 0, 0.2)"
                    stroke="#FFB300"
                    strokeWidth="2"
                  />
                  <line
                    x1="40"
                    y1="20"
                    x2="40"
                    y2="70"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="50" y="15" fontSize="10">
                    {"ຂ້າງເທິງ"}
                  </text>
                  <text x="50" y="82" fontSize="10">
                    {"ຂ້າງລຸ່ມ"}
                  </text>
                  <text x="45" y="45" fontSize="10" fill="red">
                    {"ສູງ"}
                  </text>
                </svg>
              </div>
              <strong style={{ fontSize: "22px" }}>
                {"(ຂ້າງເທິງ + ຂ້າງລຸ່ມ) × ລວງສູງ ÷ 2"}
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
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບຕໍ່ໄປນີ້: "}{" "}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(1) ຮູບສາມແຈທີ່ມີພື້ນ 8 cm ແລະ ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນ"}
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
                  {
                    "(2) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນ 10 cm ແລະ ລວງສູງ 6 cm. ເນື້ອທີ່ແມ່ນ"
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
                  {
                    "(3) ຮູບຄາງໝູທີ່ມີຂ້າງເທິງ 4 cm, ຂ້າງລຸ່ມ 8 cm ແລະ ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນ"
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
                  {
                    "(4) ຮູບສີ່ແຈລີທີ່ມີເສັ້ນເນັ່ງຈອມຍາວ 6 cm ແລະ 8 cm. ເນື້ອທີ່ແມ່ນ"
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
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ລະວັງເດີ້! ພື້ນ ແລະ ລວງສູງຕ້ອງຕັ້ງສາກກັນສະເໝີ! ຕົວເລກທີ່ສະຫຼຽງ ຫຼື ບໍ່ຕັ້ງສາກກັນແມ່ນບໍ່ນຳມາໃຊ້ໃນສູດຄິດໄລ່ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສາມແຈຕໍ່ໄປນີ້: "}{" "}
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
                    d="M 20,80 L 120,80 L 100,20 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="80"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="60" y="95" fontSize="12">
                    {"10 cm (ພື້ນ)"}
                  </text>
                  <text x="105" y="50" fontSize="12" fill="red">
                    {"6 cm"}
                  </text>
                  <text x="40" y="45" fontSize="11" fill="#888">
                    {"7 cm (ຂ້າງສະຫຼຽງ)"}
                  </text>
                </svg>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ເນື້ອທີ່ ="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
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
                  "🌾 ດິນນາຕອນໜຶ່ງເປັນຮູບຄາງໝູ ທີ່ມີຂ້າງເທິງຍາວ 20 m, ຂ້າງລຸ່ມຍາວ 30 m ແລະ ມີໄລຍະຫ່າງລະຫວ່າງສອງຂ້າງນີ້ (ລວງສູງ) ແມ່ນ 15 m. ດິນນາຕອນນີ້ມີເນື້ອທີ່ທັງໝົດຈັກ m²?"
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
                <span>{"m²"}</span>
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
                "(1) 20 cm² (8 × 5 ÷ 2), (2) 60 cm² (10 × 6), (3) 30 cm² ((4 + 8) × 5 ÷ 2), (4) 24 cm² (6 × 8 ÷ 2)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "30 cm² (ຍ້ອນເອົາພື້ນ 10 cm × ລວງສູງ 6 cm ÷ 2 = 30. ຂ້າງສະຫຼຽງ 7 cm ບໍ່ນຳມາຄິດໄລ່)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"375 m² (ຍ້ອນ ((20 + 30) × 15) ÷ 2 = 50 × 15 ÷ 2 = 375)"}
            </span>,
          ],
        },
      ],
      advice:
        "ສູດເນື້ອທີ່ແຕ່ລະຮູບມີເງື່ອນໄຂພິເສດສະເພາະ! ການຈື່ຈຳວ່າຕົວເລກໃດຕ້ອງເອົາມາໃຊ້ ແລະ ຕົວເລກໃດຄວນຫຼີກເວັ້ນ ຈະຊ່ວຍໃຫ້ເຮົາຄິດໄລ່ໄດ້ຢ່າງຖືກຕ້ອງສະເໝີ.",
    },
  },

  {
    unitNumber: 10,
    unitTitle: "ຮູບຫຼາຍແຈ ແລະ ວົງມົນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບຫຼາຍແຈສະເໝີ, ຄວາມໝາຍຂອງ円周率 (3.14) ແລະ ສູດຄິດໄລ່ຄວາມຍາວອ້ອມວົງ (圆周)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 110-125",
    keyPoints: {
      hint: {
        text: "ເສັ້ນອ້ອມວົງແມ່ນຄວາມຍາວອ້ອມຮອບວົງມົນ! ຈື່ສູດ: ເສັ້ນອ້ອມວົງ = ເສັ້ນຜ່ານໃຈກາງ × 3.14 ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ເສັ້ນອ້ອມວົງ (Circumference)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              <strong>{"• ເສັ້ນອ້ອມວົງ = ເສັ້ນຜ່ານໃຈກາງ × 3.14"}</strong>
            </div>
            <div>
              <strong>{"• ເສັ້ນຜ່ານໃຈກາງ = ລັດສະໝີ × 2"}</strong>
            </div>
            <div style={{ fontSize: "22px", color: "#555", marginTop: "8px" }}>
              {
                "* 3.14 ແມ່ນຄ່າປະມານຂອງອັດຕາສ່ວນເສັ້ນອ້ອມວົງຕໍ່ເສັ້ນຜ່ານໃຈກາງ (Pi)."
              }
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
              {"ຈົ່ງຊອກຫາຄວາມຍາວເສັ້ນອ້ອມວົງຕໍ່ໄປນີ້: "}{" "}
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
                  {"(1) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 10 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(2) ວົງມົນທີ່ມີລັດສະໝີຍາວ 5 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(3) ວົງມົນທີ່ມີລັດສະໝີຍາວ 4 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
    challengeProblems: {
      hintText:
        "📐 ຮູບຫົກແຈສະເໝີ ປະກອບດ້ວຍຮູບສາມແຈສະເໝີ 6 ຮູບທີ່ມີຂະໜາດເທົ່າກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຫຼາຍແຈສະເໝີ: "}{" "}
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
                    "⭐ ຖ້າແຕ້ມຮູບຫົກແຈສະເໝີ ໃສ່ທາງໃນວົງມົນທີ່ມີລັດສະໝີ 5 cm ໂດຍໃຫ້ຈອມຂອງມັນຕິດກັບເສັ້ນອ້ອມວົງມົນ. ຄວາມຍາວອ້ອມຮອບຮູບຫົກແຈສະເໝີນີ້ຈະແມ່ນຈັກ cm?"
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
                  "🚴 ລໍ້ລົດຖີບຄັນໜຶ່ງ ມີເສັ້ນຜ່ານໃຈກາງຍາວ 60 cm. ຖ້າລໍ້ລົດຖີບນີ້ປິ່ນໄດ້ 10 ຮອບ, ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ cm?"
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
                    width: "150px",
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 31.4 cm (10 × 3.14), (2) 31.4 cm (5 × 2 × 3.14), (3) 25.12 cm (4 × 2 × 3.14 = 8 × 3.14 = 25.12)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "30 cm (ຍ້ອນຄວາມຍາວຂ້າງຮູບຫົກແຈສະເໝີໃນວົງມົນ ຈະເທົ່າກັບລັດສະໝີ 5 cm ພໍດີ, ດັ່ງນັ້ນ 5 × 6 = 30)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "1,884 cm (ຍ້ອນຄວາມຍາວອ້ອມຮອບ 1 ຮອບແມ່ນ 60 × 3.14 = 188.4 cm, ດັ່ງນັ້ນ 10 ຮອບແມ່ນ 188.4 × 10 = 1,884)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ອັດຕາສ່ວນເສັ້ນອ້ອມວົງຕໍ່ເສັ້ນຜ່ານໃຈກາງແມ່ນຄ່າຄົງທີ່ (3.14)! ຖ້າເຮົາຈື່ສູດນີ້ ຈະສາມາດຄິດໄລ່ໄລຍະທາງຂອງການປິ່ນລໍ້ ຫຼື ສິ່ງມົນໆໄດ້ຢ່າງງ່າຍດາຍ.",
    },
  },
  {
    unitNumber: 11,
    unitTitle: "ອັດຕາສ່ວນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນ (a : b), ຄ່າຂອງອັດຕາສ່ວນ (比の値) ແລະ ການຊອກຫາອັດຕາສ່ວນທີ່ເທົ່າກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 126-135",
    keyPoints: {
      hint: {
        text: "ອັດຕາສ່ວນ a : b ປຽບທຽບສອງປະລິມານ! ຄ່າຂອງອັດຕາສ່ວນແມ່ນຊອກໄດ້ຈາກການຫານ a ÷ b ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນ ແລະ ຄ່າຂອງອັດຕາສ່ວນ (Ratio and Value)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <p style={{ margin: "0 0 10px 0" }}>{"ອັດຕາສ່ວນແມ່ນ a : b"}</p>
            <p style={{ margin: "0 0 10px 0" }}>
              {"ຄ່າຂອງອັດຕາສ່ວນແມ່ນ a ÷ b (ຫຼື ຂຽນເປັນເລກສ່ວນ a/b)"}
            </p>
            <div
              style={{ fontWeight: "bold", color: "#0D47A1", fontSize: "22px" }}
            >
              {"ຕົວຢ່າງ: 3 : 4 ຈະມີຄ່າແມ່ນ 3 ÷ 4 = 0.75 (ຫຼື 3/4)"}
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ອັດຕາສ່ວນທີ່ເທົ່າກັນ (Equal Ratios)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.6",
            }}
          >
            {
              "ເຮົາສາມາດຄູນ ຫຼື ຫານທັງສອງເບື້ອງຂອງອັດຕາສ່ວນດ້ວຍຈຳນວນດຽວກັນເພື່ອຫາອັດຕາສ່ວນທີ່ເທົ່າກັນໄດ້."
            }
            <div
              style={{
                fontWeight: "bold",
                color: "#2E7D32",
                fontSize: "22px",
                marginTop: "8px",
              }}
            >
              {"12 : 18 = (12÷6) : (18÷6) = 2 : 3 (ອັດຕາສ່ວນຂັ້ນຕ່ຳ)"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບອັດຕາສ່ວນຕໍ່ໄປນີ້: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) ຄ່າຂອງອັດຕາສ່ວນ 3 : 5 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "16px", color: "#888" }}>
                  {"(ຂຽນເປັນເລກທົດສະນິຍົມ)"}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  {"(2) ປ່ຽນອັດຕາສ່ວນ 12 : 18 ໃຫ້ເປັນອັດຕາສ່ວນຂັ້ນຕ່ຳແມ່ນ"}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  {"(3) ຈົ່ງຊອກຫາຄ່າຂອງ x:  2 : 5 = x : 15. ຄ່າຂອງ x ແມ່ນ"}
                </span>
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
        "🥤 ໃຊ້ອັດຕາສ່ວນທີ່ເທົ່າກັນ! ນົມ : ຊາ = 2 : 3, ຖ້າຊາແມ່ນ 150 mL (ເພີ່ມຂຶ້ນ 50 ເທື່ອ) ນົມກໍຕ້ອງເພີ່ມຂຶ້ນ 50 ເທື່ອເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນລຸ່ມນີ້: "}{" "}
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
                    "🥛 ສູດເຮັດນົມຊາ ຕ້ອງປະສົມນົມ ແລະ ຊາ ໃນອັດຕາສ່ວນ 2 : 3. ຖ້າຕ້ອງການໃຊ້ນ້ຳຊາ 150 mL, ຈະຕ້ອງໃຊ້ນົມຈັກ mL?"
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
                  <span>{"mL"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງປັນສ່ວນຕໍ່ໄປນີ້: "}{" "}
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
                  "🍬 ມີເຂົ້າໜົມ 40 ກ້ອນ, ຕ້ອງການແບ່ງໃຫ້ສອງຄົນໃນອັດຕາສ່ວນ 3 : 5. ຜູ້ທີ່ໄດ້ສ່ວນຫຼາຍກວ່າ ຈະໄດ້ເຂົ້າໜົມຈັກກ້ອນ?"
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
                <span>{"ກ້ອນ"}</span>
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
                "(1) 0.6 (3 ÷ 5), (2) 2 : 3 (ຍ້ອນຫານໃຫ້ 6 ທັງສອງເບື້ອງ), (3) 6 (ຍ້ອນ 5 × 3 = 15, ດັ່ງນັ້ນ 2 × 3 = 6)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"100 mL (ຍ້ອນ 150 ÷ 3 = 50, ດັ່ງນັ້ນ 2 × 50 = 100)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "25 ກ້ອນ (ຍ້ອນສ່ວນທັງໝົດແມ່ນ 3 + 5 = 8 ສ່ວນ, ສ່ວນຫຼາຍແມ່ນ 5/8, 40 × 5/8 = 25 ກ້ອນ)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ອັດຕາສ່ວນແມ່ນເຄື່ອງມືທີ່ດີຫຼາຍໃນການປະສົມສິ່ງຂອງ ຫຼື ແບ່ງປັນສິ່ງຂອງໃຫ້ມີຄວາມຍຸດຕິທຳ! ຈື່ວິທີການຫາສ່ວນລວມ (ບວກອັດຕາສ່ວນທັງສອງ) ຈະຊ່ວຍໃຫ້ແກ້ໂຈດໄດ້ງ່າຍ.",
    },
  },

  {
    unitNumber: 12,
    unitTitle: "ການຂະຫຍາຍ ແລະ ການຫຍໍ້ຮູບເລຂາຄະນິດ",
    unitGoal:
      "ຮຽນຮູ້ແນວຄວາມຄິດຂອງຮູບຂະຫຍາຍ (Enlarged) ແລະ ຮູບຫຍໍ້ (Reduced), ຄວາມສຳພັນດ້ານຂ້າງ ແລະ ມຸມ ພ້ອມທັງການຄິດໄລ່ມາດຕາສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 136-145",
    keyPoints: {
      hint: {
        text: "ຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້ ຈະມີຮູບຮ່າງຄືເກົ່າ ແລະ ຂະໜາດມຸມເທົ່າເດີມ! ແຕ່ຄວາມຍາວຂ້າງຈະເພີ່ມຂຶ້ນ ຫຼື ຫຼຸດລົງໃນອັດຕາສ່ວນດຽວກັນສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຄຸນລັກສະນະຂອງຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFE082",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              {"• ຂະໜາດຂອງມຸມທີ່ສົມທຽບກັນ ແມ່ນເທົ່າກັນສະເໝີ (ບໍ່ປ່ຽນແປງ)."}
            </div>
            <div>
              {
                "• ອັດຕາສ່ວນຄວາມຍາວຂ້າງສົມທຽບ ແມ່ນຄືກັນທຸກຂ້າງ (ຂະຫຍາຍ/ຫຍໍ້ສະໝໍ່າສະເໝີ)."
              }
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
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
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
                    "(1) ຖ້າຮູບ B ແມ່ນຮູບຂະຫຍາຍ 2 ເທື່ອຂອງຮູບ A, ຂ້າງທີ່ຍາວ 3 cm ໃນຮູບ A ຈະຍາວຈັກ cm ໃນຮູບ B?"
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
                <span>{"cm"}</span>
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
                    "(2) ຈາກຂໍ້ (1), ຖ້າມຸມໜຶ່ງໃນຮູບ A ມີຂະໜາດ 60°, ມຸມສົມທຽບໃນຮູບ B ຈະມີຂະໜາດຈັກອົງສາ?"
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
                    "(3) ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 1000, ຄວາມຍາວໃນແຜນທີ່ 5 cm ຈະເທົ່າກັບໄລຍະທາງຈິງຈັກ m?"
                  }
                </span>
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
    challengeProblems: {
      hintText:
        "📐 ໄລຍະທາງຈິງ = ໄລຍະທາງໃນແຜນທີ່ × ຕົວຫານຂອງມາດຕາສ່ວນ! ຫຼັງຈາກນັ້ນ ປ່ຽນຫົວໜ່ວຍຈາກ cm ໃຫ້ເປັນ m ຫຼື km ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາມາດຕາສ່ວນ: "}{" "}
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
                    "🌊 ຕ້ອງການຊອກຫາຄວາມກວ້າງຂອງແມ່ນ້ຳ. ໃນແຜນວາດຫຍໍ້ ມາດຕາສ່ວນ 1 : 500, ຄວາມກວ້າງຂອງແມ່ນ້ຳແທກໄດ້ 4 cm. ຄວາມກວ້າງຈິງຂອງແມ່ນ້ຳແມ່ນຈັກແມັດ?"
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
                  "🗺️ ໄລຍະທາງລະຫວ່າງສອງໂຮງຮຽນແມ່ນ 1 km (100,000 cm). ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 25,000, ໄລຍະທາງລະຫວ່າງສອງໂຮງຮຽນນີ້ຈະແທກໄດ້ຈັກ cm?"
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
                <span>{"cm"}</span>
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
                "(1) 6 cm (3 × 2), (2) 60° (ມຸມບໍ່ປ່ຽນແປງ), (3) 50 m (ຍ້ອນ 5 × 1,000 = 5,000 cm = 50 m)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"20 m (ຍ້ອນ 4 × 500 = 2,000 cm = 20 m)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"4 cm (ຍ້ອນ 100,000 ÷ 25,000 = 4)"}</span>],
        },
      ],
      advice:
        "ມາດຕາສ່ວນຊ່ວຍໃຫ້ເຮົາສາມາດແຕ້ມແຜນທີ່ ແລະ ແຜນຜັງຂອງເມືອງ ຫຼື ຕຶກອາຄານຂະໜາດໃຫຍ່ໃສ່ໃນເຈ້ຍແຜ່ນດຽວໄດ້! ຈື່ຫຼັກການປ່ຽນຫົວໜ່ວຍ cm -> m -> km ໃຫ້ດີເດີ້.",
    },
  },
  {
    unitNumber: 13,
    unitTitle: "ອັດຕາສ່ວນພົວພັນ ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນພົວພັນ (比例) ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ (反比例), ການຕື່ມຂໍ້ມູນໃສ່ຕາຕະລາງ ແລະ ການຊອກຫາສູດການພົວພັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 146-159",
    keyPoints: {
      hint: {
        text: "ອັດຕາສ່ວນພົວພັນ: ເມື່ອ x ເພີ່ມ 2, 3 ເທື່ອ, y ກໍເພີ່ມ 2, 3 ເທື່ອ. ອັດຕາສ່ວນພົວພັນປີ້ນ: ເມື່ອ x ເພີ່ມ 2, 3 ເທື່ອ, y ຈະຫຼຸດລົງ 2, 3 ເທື່ອ (1/2, 1/3) ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ (Proportion & Inverse)"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Proportion */}
            <div
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#2E7D32" }}>
                {"ອັດຕາສ່ວນພົວພັນ (Proportion)"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ເມື່ອ x ເພີ່ມຂຶ້ນ, y ກໍເພີ່ມຂຶ້ນສະໝໍ່າສະເໝີ."}
              </p>
              <div style={{ fontWeight: "bold", fontSize: "22px" }}>
                {"ສູດ: y = a × x"}
              </div>
            </div>

            {/* Inverse Proportion */}
            <div
              style={{
                flex: "1 1 240px",
                padding: "16px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#E65100" }}>
                {"ອັດຕາສ່ວນພົວພັນປີ້ນ (Inverse)"}
              </strong>
              <p style={{ fontSize: "22px", margin: "8px 0" }}>
                {"ເມື່ອ x ເພີ່ມຂຶ້ນ, y ຈະຫຼຸດລົງສະໝໍ່າສະເໝີ."}
              </p>
              <div style={{ fontWeight: "bold", fontSize: "22px" }}>
                {"ສູດ: y = a ÷ x (ຫຼື x × y = a)"}
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
              {"ຈົ່ງສັງເກດຕາຕະລາງ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ overflowX: "auto", padding: "8px" }}>
              {/* Inverse Proportion Table: Area of Rectangle is 24 cm2 */}
              <table
                className="math-illustration"
                style={{
                  minWidth: "300px",
                  borderCollapse: "collapse",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ລວງກວ້າງ x (cm)"}
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
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"6"}
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
                      {"ລວງຍາວ y (cm)"}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"12"}
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
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        backgroundColor: "#FFE082",
                      }}
                    >
                      {"(C)"}
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
                <span>{"cm"}</span>
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
                <span>{"cm"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) ຈຳນວນ (C) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm"}</span>
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
                    "(4) ຄວາມສຳພັນລະຫວ່າງ x ແລະ y ໃນຕາຕະລາງນີ້ ແມ່ນອັດຕາສ່ວນພົວພັນປີ້ນ ຫຼື ບໍ່?"
                  }
                </span>
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
        "⚙️ ໂຈດບັນຫາຟັນເຟືອງ (齿轮) ແມ່ນເປັນອັດຕາສ່ວນພົວພັນປີ້ນ! ຜົນຄູນຂອງຈຳນວນແຂ້ວ ແລະ ຈຳນວນຮອບປິ່ນຂອງທັງສອງຟັນເຟືອງ ຈະເທົ່າກັນສະເໝີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຟັນເຟືອງ: "}{" "}
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
                    "⚙️ ຟັນເຟືອງ A ມີແຂ້ວ 24 ແຂ້ວ ປິ່ນໄດ້ 6 ຮອບຕໍ່ນາທີ. ມັນຂົບກັບຟັນເຟືອງ B ທີ່ມີແຂ້ວ 16 ແຂ້ວ. ຟັນເຟືອງ B ຈະປິ່ນໄດ້ຈັກຮອບຕໍ່ນາທີ?"
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
                  <span>{"ຮອບ/ນາທີ"}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
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
                  "📐 ຖ້າຊື້ດິນສໍ 3 ກ້ານ ລາຄາ 15 ກີບ. ຖ້າຊື້ 9 ກ້ານ ຕ້ອງຈ່າຍເງິນ 45 ກີບ. ຄວາມສຳພັນລະຫວ່າງຈຳນວນດິນສໍ ແລະ ລາຄາ ແມ່ນອັດຕາສ່ວນພົວພັນ ຫຼື ອັດຕາສ່ວນພົວພັນປີ້ນ?"
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 8 (ຍ້ອນ 24÷3), (2) 6 (ຍ້ອນ 24÷4), (3) 4 (ຍ້ອນ 24÷6), (4) ແມ່ນ (ຍ້ອນຜົນຄູນ x × y = 24 ຄົງທີ່ສະເໝີ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"9 ຮອບ (ຍ້ອນ 24 × 6 = 144, ດັ່ງນັ້ນ 144 ÷ 16 = 9 ຮອບ)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "ອັດຕາສ່ວນພົວພັນ (ຍ້ອນເມື່ອຈຳນວນດິນສໍເພີ່ມຂຶ້ນ 3 ເທື່ອ, ລາຄາກໍເພີ່ມຂຶ້ນ 3 ເທື່ອ 15 × 3 = 45)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ ແມ່ນພື້ນຖານທີ່ສຳຄັນຫຼາຍໃນການວິເຄາະສອງປະລິມານ! ຈື່ຈຳວິທີການກວດສອບຜົນຄູນ (ພົວພັນປີ້ນ) ແລະ ຜົນຫານ (ພົວພັນ) ເດີ້.",
    },
  },

  {
    unitNumber: 14,
    unitTitle: "ສ່ວນຮ້ອຍ ແລະ ກຣາບ",
    unitGoal:
      "ຮຽນຮູ້ຄວາມໝາຍຂອງສ່ວນຮ້ອຍ (%), ສູດການຊອກຫາອັດຕາສ່ວນ (割合), ການຄິດໄລ່ລາຄາຫຼຸດ ແລະ ການອ່ານກຣາບເສັ້ນສະແດງ (ກຣາບບົງ ແລະ ກຣາບວົງມົນ)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 160-171",
    keyPoints: {
      hint: {
        text: "ສ່ວນຮ້ອຍ (%) ແມ່ນການປຽບທຽບປະລິມານໂດຍກຳນົດໃຫ້ປະລິມານພື້ນຖານເປັນ 100! ຈື່ສູດ: ອັດຕາສ່ວນ = ປະລິມານທີ່ສົມທຽບ ÷ ປະລິມານພື້ນຖານ ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດຄິດໄລ່ອັດຕາສ່ວນ ແລະ ສ່ວນຮ້ອຍ (Percentage Formulas)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              <strong>
                {"• ອັດຕາສ່ວນ = ປະລິມານທີ່ສົມທຽບ ÷ ປະລິມານພື້ນຖານ"}
              </strong>
            </div>
            <div>
              <strong>{"• ສ່ວນຮ້ອຍ (%) = ອັດຕາສ່ວນ × 100"}</strong>
            </div>
            <div style={{ fontSize: "22px", color: "#555", marginTop: "8px" }}>
              {
                "ຕົວຢ່າງ: ໃນຫ້ອງຮຽນມີ 40 ຄົນ, ເສັງຜ່ານ 30 ຄົນ. ສ່ວນຮ້ອຍແມ່ນ: 30 ÷ 40 × 100 = 0.75 × 100 = 75%."
              }
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
              {"ຈົ່ງຄິດໄລ່ຕາມສູດສ່ວນຮ້ອຍລຸ່ມນີ້: "}{" "}
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
                    "(1) ມີນັກຮຽນທັງໝົດ 50 ຄົນ, ມັກເຕະບານ 20 ຄົນ. ນັກຮຽນທີ່ມັກເຕະບານກວມຈັກ %?"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"%"}</span>
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
                    "(2) ເສື້ອໂຕໜຶ່ງລາຄາ 1,200 ກີບ. ຖ້າຫຼຸດລາຄາ 20%, ຈະໄດ້ຫຼຸດລາຄາຈັກກີບ?"
                  }
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
                  {"(3) ຈາກຂໍ້ (2), ລາຄາເສື້ອຫຼັງຈາກຫຼຸດແລ້ວແມ່ນຈັກກີບ?"}
                </span>
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
    challengeProblems: {
      hintText:
        "📈 ໃນກຣາບວົງມົນ ຫຼື ກຣາບບົງ, ຜົນບວກຂອງທຸກໆສ່ວນຈະຕ້ອງເທົ່າກັບ 100% ສະເໝີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຈາກກຣາບ: "}{" "}
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
                <svg className="math-illustration" width="150" height="150">
                  {/* Circle chart representation */}
                  <circle
                    cx="75"
                    cy="75"
                    r="60"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <path d="M 75,75 L 75,15" stroke="#333" strokeWidth="1.5" />
                  <path d="M 75,75 L 135,75" stroke="#333" strokeWidth="1.5" />
                  <path d="M 75,75 L 15,75" stroke="#333" strokeWidth="1.5" />
                  <text x="95" y="45" style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {"A: 25%"}
                  </text>
                  <text x="95" y="110" style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {"B: 25%"}
                  </text>
                  <text x="35" y="80" style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {"C: ?"}
                  </text>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "20px",
                  }}
                >
                  <div>
                    {"(1) ສ່ວນຮ້ອຍຂອງກຸ່ມ C ໃນກຣາບວົງມົນນີ້ ແມ່ນຈັກ %?"}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{"%"}</span>
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂջດບັນຫາສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
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
                  "🍬 ມີເຂົ້າໜົມທັງໝົດ 80 ກ້ອນ, ແບ່ງໃຫ້ນັກຮຽນໄປ 40%. ຈະເຫຼືອເຂົ້າໜົມທັງໝົດຈັກກ້ອນ?"
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
                <span>{"ກ້ອນ"}</span>
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
                "(1) 40% (20 ÷ 50 × 100), (2) 240 ກີບ (1,200 × 0.2 = 240), (3) 960 ກີບ (1,200 - 240)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"50% (ຍ້ອນວົງມົນທັງໝົດແມ່ນ 100%, 100 - (25 + 25) = 50)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "48 ກ້ອນ (ຍ້ອນແບ່ງໄປ 80 × 0.4 = 32 ກ້ອນ, ເຫຼືອແມ່ນ 80 - 32 = 48 ກ້ອນ)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ສ່ວນຮ້ອຍແລະກຣາບຊ່ວຍໃຫ້ເຮົາຈັດການຂໍ້ມູນທີ່ມີຄວາມຊັບຊ້ອນໃຫ້ເບິ່ງງ່າຍ ແລະ ສາມາດວິເຄາະໄດ້ດີຫຼາຍ! ຈື່ຈຳວິທີການປ່ຽນສ່ວນຮ້ອຍໃຫ້ເປັນເລກທົດສະນິຍົມ (ຕົວຢ່າງ 40% = 0.4) ຈະຊ່ວຍໃຫ້ຄິດໄລ່ໄດ້ໄວຂຶ້ນ.",
    },
  },
  {
    unitNumber: 15,
    unitTitle: "ຮູບກ້ອນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຮູບກ້ອນເລຂາຄະນິດ (立体) ເຊັ່ນ: ຮູບຫຼັງຄາຫຼາຍແຈ (Prism) ແລະ ຮູບຫຼັງຄາມົນ (Cylinder), ອົງປະກອບ ແລະ ແຜນວາດຄີ່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 172-183",
    keyPoints: {
      hint: {
        text: "ຮູບຫຼັງຄາຫຼາຍແຈ ມີໜ້າຂ້າງເປັນຮູບສີ່ແຈສາກ. ສ່ວນຮູບຫຼັງຄາມົນ ມີໜ້າຂ້າງທີ່ເມື່ອຄີ່ອອກຈະເປັນຮູບສີ່ແຈສາກເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອົງປະກອບຂອງຮູບຫຼັງຄາ (Prisms and Cylinders)"}
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
                    {"ປະເພດຮູບກ້ອນ"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ໜ້າພື້ນ (Base)"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ໜ້າຂ້າງ (Side)"}
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
                    {"ຮູບຫຼັງຄາສາມແຈ (Triangular Prism)"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຮູບສາມແຈ (2 ໜ້າ)"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຮູບສີ່ແຈສາກ (3 ໜ້າ)"}
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
                    {"ຮູບຫຼັງຄາມົນ (Cylinder)"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຮູບວົງມົນ (2 ໜ້າ)"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ໜ້າໂຄ້ງ (ຄີ່ອອກເປັນສີ່ແຈສາກ)"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບກ້ອນຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) ຮູບຫຼັງຄາສາມແຈ ມີໜ້າທັງໝົດຈັກໜ້າ?"}</span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(2) ຮູບຫຼັງຄາສາມແຈ ມີຈອມທັງໝົດຈັກຈອມ?"}</span>
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
                    "(3) ເມື່ອຄີ່ໜ້າໂຄ້ງຂອງຮູບຫຼັງຄາມົນ (Cylinder) ອອກ, ຈະໄດ້ຮູບໃດ?"
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
        "📐 ຄວາມຍາວອ້ອມຮອບຂອງໜ້າພື້ນຮູບວົງມົນ ຈະເທົ່າກັບລວງຍາວຂອງໜ້າຂ້າງຮູບສີ່ແຈສາກພໍດີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາແຜນວາດຄີ່: "}{" "}
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
                    "📐 ເມື່ອແຕ້ມແຜນວາດຄີ່ຂອງຮູບຫຼັງຄາມົນ ທີ່ມີເສັ້ນຜ່ານໃຈກາງຂອງພື້ນວົງມົນແມ່ນ 10 cm. ລວງຍາວຂອງໜ້າຂ້າງຮູບສີ່ແຈສາກຈະແມ່ນຈັກ cm?"
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາອົງປະກອບຮູບຫຼັງຄາ: "}{" "}
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
                  "📐 ຮູບຫຼັງຄາຫ້າແຈ (Pentagonal Prism) ຈະມີເສັ້ນຂອບ (Edges) ທັງໝົດຈັກເສັ້ນ?"
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
                <span>{"ເສັ້ນ"}</span>
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
              {"(1) 5 ໜ້າ (2 ໜ້າພື້ນ + 3 ໜ້າຂ້າງ), (2) 6 ຈອມ, (3) ຮູບສີ່ແຈສາກ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"31.4 cm (ຍ້ອນເທົ່າກັບຄວາມຍາວອ້ອມວົງມົນ 10 × 3.14 = 31.4)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"15 ເສັ້ນ (ຍ້ອນໜ້າພື້ນເທິງມີ 5, ພື້ນລຸ່ມມີ 5 ແລະ ແນວຕັ້ງມີ 5)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບຫຼັງຄາເລຂາຄະນິດມີຄວາມງາມໃນໂຄງສ້າງສາມມິຕິຫຼາຍ! ການຈື່ຈຳຄວາມສຳພັນລະຫວ່າງໜ້າພື້ນ ແລະ ໜ້າຂ້າງ ຈະຊ່ວຍໃຫ້ເຮົາສ້າງແຜນວາດຄີ່ໄດ້ຢ່າງຖືກຕ້ອງສະເໝີ.",
    },
  },

  {
    unitNumber: 16,
    unitTitle: "ລະບົບຫົວໜ່ວຍວັດແທກສາກົນ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍວັດແທກຄວາມຍາວ, ເນື້ອທີ່, ບໍລິມາດ ແລະ ນ້ຳໜັກໃນລະບົບເມດ (Metre System)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 184-189",
    keyPoints: {
      hint: {
        text: "ລະບົບຫົວໜ່ວຍເມດໃຊ້ຫຼັກສິບ! ເມື່ອເພີ່ມຂຶ້ນ 10 ເທື່ອ, 100 ເທື່ອ ຈະມີການປ່ຽນຫົວໜ່ວຍທີ່ເປັນລະບົບສະໝໍ່າສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ລະບົບຫົວໜ່ວຍວັດແທກ (System of Units)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              <strong>{"• ຄວາມຍາວ (Length):"}</strong>
              {" 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm"}
            </div>
            <div>
              <strong>{"• ເນື້ອທີ່ (Area):"}</strong>
              {" 1 ha = 10,000 m², 1 a = 100 m²"}
            </div>
            <div>
              <strong>{"• ນ້ຳໜັກ (Weight):"}</strong>
              {" 1 t (ໂຕນ) = 1,000 kg, 1 kg = 1,000 g"}
            </div>
            <div>
              <strong>{"• ບໍລິມາດ (Volume):"}</strong>
              {" 1 L = 1,000 mL = 1,000 cm³"}
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
              {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 1.5 kg ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 1.5 m ="}</span>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 2.5 L ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"mL"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 3 ha ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
      hintText: "⚖️ ປ່ຽນຫົວໜ່ວຍທັງໝົດໃຫ້ເປັນ kg ກ່ອນ ແລ້ວຈຶ່ງເອົາມາບວກກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ: "}{" "}
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
                    "📦 ແມ່ຊື້ໝາກກ້ຽງ 1.5 kg ແລະ ໝາກມ່ວງ 800 g. ໝາກໄມ້ທັງໝົດທີ່ແມ່ຊື້ມີນ້ຳໜັກລວມກັນຈັກ kg?"
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
                  <span>{"kg"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດນ້ຳຕໍ່ໄປນີ້: "}{" "}
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
                  "💧 ຖັງນ້ຳໃບໜຶ່ງມີຄວາມຈຸ 1 m³. ຖ້າມີນ້ຳຢູ່ 400 L, ຈະຕ້ອງເທນ້ຳໃສ່ຕື່ມອີກຈັກ L ຈຶ່ງຈະເຕັມຖັງ?"
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
          answers: [
            <span key="1">
              {
                "(1) 1500 g, (2) 150 cm, (3) 2500 mL, (4) 30,000 m² (ຍ້ອນ 1 ha = 10,000 m²)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"2.3 kg (ຍ້ອນ 800 g = 0.8 kg, ແລະ 1.5 + 0.8 = 2.3 kg)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"600 L (ຍ້ອນ 1 m³ = 1000 L, 1000 - 400 = 600)"}
            </span>,
          ],
        },
      ],
      advice:
        "ລະບົບຫົວໜ່ວຍສາກົນໃຊ້ການພົວພັນຫຼັກສິບ (10, 100, 1000) ທີ່ສະໝໍ່າສະເໝີຫຼາຍ! ຈື່ຈຳຕາຕະລາງປ່ຽນຫົວໜ່ວຍຈະຊ່ວຍໃຫ້ເຮົາບໍ່ສັບສົນໃນຊີວິດປະຈຳວັນ.",
    },
  },

  {
    unitNumber: 17,
    unitTitle: "ສະຫຼຸບບົດຮຽນປະຖົມສຶກສາ ປີທີ 5",
    unitGoal:
      "ທົບທວນຄືນບົດຮຽນທັງໝົດທີ່ໄດ້ຮຽນມາໃນຊັ້ນ ປ.5 ເພື່ອກຽມຄວາມພ້ອມໃນການສອບເສັງຈົບຊັ້ນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 190-200",
    keyPoints: {
      hint: {
        text: "ນີ້ແມ່ນບົດທົດສອບລວມຂອງທຸກໆບົດຮຽນເດີ້! ພະຍາຍາມແກ້ໄຂດ້ວຍຕົນເອງເພື່ອວັດແທກລະດັບຄວາມເຂົ້າໃຈຂອງຕົນເອງ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສິ່ງທີ່ໄດ້ຮຽນມາທັງໝົດໃນ ປ.5 (P5 Summary)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFE082",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>{"• ການຄູນ, ການຫານເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ."}</div>
            <div>{"• ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ເນື້ອທີ່ຮູບຫຼາຍແຈ."}</div>
            <div>{"• ອັດຕາສ່ວນພົວພັນ ແລະ ສ່ວນຮ້ອຍ."}</div>
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
              {"ຈົ່ງແກ້ເລກທົດສອບຄວາມຮູ້ນຳກັນ: "}{" "}
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
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) 1.2 × 2.5 ="}</span>
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
                <span>{"(2) 2/3 × 5 ="}</span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(3) ຮູບສາມແຈທີ່ມີພື້ນ 6 cm ແລະ ລວງສູງ 4 cm. ເນື້ອທີ່ແມ່ນ"}
                </span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(4) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 20 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
    challengeProblems: {
      hintText:
        "⚖️ ໃຊ້ອັດຕາສ່ວນເພື່ອຊອກຫາປະລິມານ! ສ່ວນຫຼາຍແມ່ນໃຊ້ສູດອັດຕາສ່ວນທີ່ເທົ່າກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາລວມ: "}{" "}
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
                    "🥛 ຕ້ອງການເຮັດເຂົ້າໜົມຫວານ ໂດຍໃຊ້ນ້ຳຕານ ແລະ ແປ້ງ ໃນອັດຕາສ່ວນ 3 : 5. ຖ້າໃຊ້ແປ້ງ 250 g, ຈະຕ້ອງໃຊ້ນ້ຳຕານຈັກ g?"
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
                  <span>{"g"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
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
                  "🚴 ສິນຄ້າຊະນິດໜຶ່ງລາຄາ 5,000 ກີບ. ຖ້າຫຼຸດລາຄາໃຫ້ 15%, ລາຄາສຸດທ້າຍຂອງສິນຄ້ານີ້ແມ່ນຈັກກີບ?"
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
                "(1) 3 (ຍ້ອນ 1.2 × 2.5 = 3.0), (2) 10/3 (ຫຼື 3 1/3), (3) 12 cm² (6 × 4 ÷ 2), (4) 62.8 cm (20 × 3.14)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"150 g (ຍ້ອນ 250 ÷ 5 = 50, ດັ່ງນັ້ນ 3 × 50 = 150)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "4,250 ກີບ (ຍ້ອນຫຼຸດລາຄາ 5,000 × 0.15 = 750 ກີບ, ລາຄາສຸດທ້າຍ 5,000 - 750 = 4,250)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຊົມເຊີຍທຸກຄົນທີ່ຮຽນຈົບບົດຮຽນ ປ.5 ຢ່າງສົມບູນ! ຄວາມຮູ້ທັງໝົດນີ້ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການຮຽນຕໍ່ຊັ້ນມັດທະຍົມ ແລະ ການນຳໃຊ້ໃນຊີວິດ.",
    },
  },
];
