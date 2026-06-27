import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit8Data: UnitData = {
    
    unitNumber: 8,
    unitTitle: "ການຫານ (ຕໍ່)",
    unitGoal:
      "ຮຽນຮູ້ການຫານຕາມທາງຕັ້ງທີ່ມີຜົນຫານ 2 ຕົວເລກ ແລະ ວິທີການຫານທີ່ມີຕົວເສດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 77-83",
    keyPoints: {
      hint: {
        text: "ວິທີການຫານຕາມທາງຕັ້ງ: 1. ຫານ -> 2. ຄູນ -> 3. ລົບ -> 4. ຊັກລົງມາ. ຢ່າລືມກວດຄືນວ່າ ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ!",
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
  };
