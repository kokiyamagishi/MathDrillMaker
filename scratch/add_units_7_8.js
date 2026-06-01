const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

const u7_u8_code = `  {
    unitNumber: 7,
    unitTitle: "ຈຳນວນທົດສະນິຍົມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຈຳນວນທົດສະນິຍົມ ແລະ ການວັດແທກດ້ວຍເລກທົດສະນິຍົມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 64-76",
    keyPoints: {
      hint: {
        text: "0.1 ແມ່ນ 1 ສ່ວນ 10 ຂອງ 1. ຖ້າມີ 0.1 ຢູ່ 10 ເທື່ອ ຈະເທົ່າກັບ 1 ເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນທົດສະນິຍົມ (Decimals)"}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "24px",
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
                  fontSize: "20px",
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
              <p style={{ fontSize: "18px", margin: "12px 0 0 0" }}>
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
                  fontSize: "20px",
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
                  fontSize: "18px",
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
                  fontSize: "16px",
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
                gap: "24px",
                padding: "16px",
              }}
            >
              {/* Problem 1.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
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
                  gap: "24px",
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
                          left: (i * 5) + "%",
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
                      left: "35%",
                      transform: "translateX(-50%)",
                      color: "#E91E63",
                      fontWeight: "bold",
                    }}
                  >
                    {"↓ (1)"}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "70%",
                      transform: "translateX(-50%)",
                      color: "#E91E63",
                      fontWeight: "bold",
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
                paddingLeft: "16px",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຫານຕາມທາງຕັ້ງທີ່ມີຜົນຫານ 2 ຕົວເລກ"}
          </h3>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
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
                  fontSize: "18px",
                }}
              >
                {"ຕົວຢ່າງ: 85 ÷ 3"}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
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
                <div style={{ fontSize: "16px", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 6px 0" }}>
                    {"• 8 ÷ 3 = 2 (ຂຽນ 2)"}
                  </p>
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
                  fontSize: "20px",
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
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                {"(ຕົວຫານ × ຜົນຫານ) + ຕົວເສດ = ຕົວຕັ້ງຫານ"}
              </div>
              <p style={{ fontSize: "16px", margin: 0, lineHeight: "1.5" }}>
                {"ຈາກຕົວຢ່າງຂ້າງເທິງ: (3 × 28) + 1 = 84 + 1 = 85. ຄຳຕອບຖືກຕ້ອງ!"}
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
                gap: "24px",
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
                  paddingLeft: "16px",
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
                  paddingLeft: "16px",
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
                  {"ຄຸນລັກສະນະ: ຖ້າຫານຕົວຕັ້ງຫານ ແລະ ຕົວຫານໃຫ້ 10, ຜົນຫານຈະບໍ່ປ່ຽນແປງ."}
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງກຸ່ມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                paddingLeft: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "⛵ ມີນັກຮຽນທັງໝົດ 47 ຄົນ ຕ້ອງການຂີ່ເຮືອທ່ອງທ່ຽວ. ຖ້າເຮືອແຕ່ລະ艘ສາມາດບັນຈຸຄົນໄດ້ຫຼາຍສຸດ 4 ຄົນ, ຈະຕ້ອງໃຊ້ເຮືອຢ່າງໜ້ອຍຈັກ艘 ຈຶ່ງຈະສາມາດພານັກຮຽນໄປໄດ້ທັງໝົດ?"
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
                <span>{"艘"}</span>
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
          answers: [<span key="2">{"(3) 13 ເսດ 3, (4) 13 ເսດ 1"}</span>],
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
          answers: [
            <span key="5">
              {"12 艘 (ຍ້ອນ 47 ÷ 4 = 11 ເսດ 3, ຕ້ອງເພີ່ມເຮືອອີກ 1 艘 ສຳລັບ 3 ຄົນທີ່ເຫຼືອ)"}
            </span>,
          ],
        },
      ],
      advice:
        "ໃນໂຈດບັນຫາຕົວຈິງ, ບາງເທື່ອເຮົາຕ້ອງບວກ 1 ໃສ່ຜົນຫານ ຖ້າຕົວເສດທີ່ເຫຼືຍັງຕ້ອງການກຸ່ມ ຫຼື ພາຫະນະເພື່ອບັນຈຸເດີ້!",
    },
  },
`;

// Find where the unit array ends
const targetStr = 'advice:\\n        "ມຸມເທິງເສັ້ນຊື່ມີຂະໜາດ 180 ອົງສາສະເໝີ! ຖ້າຮູ້ມຸມໜຶ່ງ ແລ້ວຢາກຊອກຫາມຸມທີ່ເຫຼືອ ແມ່ນໃຫ້ເອົາ 180 ມາລົບອອກ.",\\n    },\\n  },\\n];';

const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// Check if we can find the end of the last object
const lastObjectEnd = content.lastIndexOf('}', replacementPoint);

// We will insert u7_u8_code right before the last '];' but with a comma after the unit 6 object.
// To do this safely, let's find the closing bracket of unit 6.
// The array ends with '];' and unit 6 ends with '  },\n];' or similar.
// Let's replace the last '];' with ',\n' + u7_u8_code + '\n];'
const newContent = content.substring(0, replacementPoint) + ',\n' + u7_u8_code + '];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 7 & 8 added successfully.");
