import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit3Data: UnitData = {
    
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
  };
