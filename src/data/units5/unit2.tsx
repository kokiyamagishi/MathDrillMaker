import React from "react";
import { UnitData } from "../units2";

export const unit2Data: UnitData = {
    unitNumber: 2,
    unitTitle: "ການຄູນ ແລະ ການຫານຈຳນວນທົດສະນິຍົມ",
    unitGoal:
      "ຮຽນຮູ້ວິທີການຄູນ ແລະ ການຫານຈຳນວນທົດສະນິຍົມຕາມທາງຕັ້ງ ແລະ ການແກ້ໄຂໂຈດບັນຫາຕົວຈິງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 12-29",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {/* 1. ການຄູນຈຳນວນທົດສະນິຍົມ */}
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
                    <tr>
                      <td></td>
                      <td style={{ color: "red", fontSize: "14px", verticalAlign: "top" }}>{"↑"}</td>
                      <td></td>
                      <td></td>
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

            {/* 2. ການຫານຈຳນວນທົດສະນິຍົມ */}
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
                {/* French Style long division table */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "center", paddingRight: "15px", width: "80px", fontFamily: "monospace", whiteSpace: "pre" }}>{"65  "}</td>
                      <td style={{ borderLeft: "2px solid #000", paddingLeft: "15px", width: "80px", borderBottom: "2px solid #000" }}>{"25"}</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left", paddingRight: "15px", borderBottom: "2px solid #000", fontFamily: "monospace", whiteSpace: "pre" }}>{"-50 "}</td>
                      <td style={{ borderLeft: "2px solid #000", paddingLeft: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "12px", width: "fit-content" }}>
                          <span>{"2"}<span style={{ color: "red" }, whiteSpace: "nowrap"}>{"."}</span>{"6"}</span>
                          <span style={{ color: "red", fontSize: "14px", marginTop: "2px" }, whiteSpace: "nowrap"}>{"↑"}</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left", paddingRight: "15px", fontFamily: "monospace", whiteSpace: "pre" }}>{" 150"}</td>
                      <td style={{ borderLeft: "2px solid #000" }}></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left", paddingRight: "15px", borderBottom: "2px solid #000", fontFamily: "monospace", whiteSpace: "pre" }}>{"-150"}</td>
                      <td style={{ borderLeft: "2px solid #000" }}></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left", paddingRight: "15px", fontFamily: "monospace", whiteSpace: "pre" }}>{"   0"}</td>
                      <td style={{ borderLeft: "2px solid #000" }}></td>
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
                      "3. ຕື່ມເລກ 0 ໃស່ທາງຫຼັງຕົວເສດ 15 ຈະໄດ້ 150 ແລ້ວຫານຕໍ່ 150 ÷ 25 = 6. ຢ່າລືມໝາຍຈຸດໃສ່ຜົນຫານເດີ້!"
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນіຍົມຕໍ່ໄປນີ້ຕາມທາງຕັ້ງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "24px",
                padding: "8px 16px",
              }}
            >
              {/* Problem 1 */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
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
                        {""}
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
                  flexWrap: "nowrap",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
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
                      <td style={{ width: "30px" }}>{"0"}</td>
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
                        {""}
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຕໍ່ໄປນີ້ (ຫານ): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              {/* Problem 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(1) 6.5 ÷ 2.5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
              </div>

              {/* Problem 2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(2) 13.5 ÷ 5 ="}</span>
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
        "⚖️ ໂຈດບັນຫານີ້ໃຊ້ວິທີການຄູນ ແລະ ຫານ! ໃຫ້ອ່ານຄຳຖາມໃຫ້ລະອຽດແລ້ວຄິດໄລ່ເດີ້!",
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
                  {"⛓️ ມີລວດເຫຼັກເສັ້ນໜຶ່ງ ທີ່ມີຄວາມຍາວ 1m ມີນ້ຳໜັກ 2.5kg. ຖ້າລວດເຫຼັກເສັ້ນນີ້ຍາວ 1.4m ຈະມີນ້ຳໜັກຈັກ kg?"}
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
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້ (ຫານ): "}{" "}
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
                  {"🥛 ນ້ຳໜຽວຫວານ 1.5L ມີນ້ຳໜັກຂອງນ້ຳຕານປະສົມຢູ່ 300g. ຖ້ານ້ຳຫວານນີ້ 1L ຈະມີນ້ຳຕານປະສົມຢູ່ຈັກ g?"}
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
                      width: "80px",
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
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
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <span>{"(1) ເຊືອກເສັ້ນໜຶ່ງຍາວ 4.5m, ເຊືອກເສັ້ນທີສອງຍາວເປັນ 1.2 ເທົ່າຂອງເສັ້ນທຳອິດ. ເຊືອກເສັ້ນທີສອງຍາວຈັກ m?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <span>{"(2) ໝາກແອັບເປິ້ນໜຶ່ງຕູ້ມີນ້ຳໜັກ 6.3kg, ເຊິ່ງໜັກເປັນ 1.5 ເທົ່າຂອງໝາກກ້ຽງໜຶ່ງຕູ້. ໝາກກ້ຽງໜຶ່ງຕູ້ມີນ້ຳໜັກຈັກ kg?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
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
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u2-ans-1-1">{"(1) 4.2"}</span>,
            <span key="u2-ans-1-2">{"(2) 0.3"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u2-ans-2-1">{"(1) 2.6"}</span>,
            <span key="u2-ans-2-2">{"(2) 2.7"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u2-ans-t1-1">{"3.5 kg (ຍ້ອນ 2.5 × 1.4 = 3.5)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u2-ans-t2-1">{"200 g (ຍ້ອນ 300 ÷ 1.5 = 200)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u2-ans-s1-1">{"(1) 2"}</span>,
            <span key="u2-ans-s1-2">{"(2) 0.6"}</span>,
            <span key="u2-ans-s1-3">{"(3) 5"}</span>,
            <span key="u2-ans-s1-4">{"(4) 3.5"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u2-ans-s2-1">{"(1) 5.4 m (ຍ້ອນ 4.5 × 1.2 = 5.4)"}</span>,
            <span key="u2-ans-s2-2">{"(2) 4.2 kg (ຍ້ອນ 6.3 ÷ 1.5 = 4.2)"}</span>,
          ],
        },
      ],
      advice: "",
    },
  };
