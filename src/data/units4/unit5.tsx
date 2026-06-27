import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit5Data: UnitData = {
    
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
  };
