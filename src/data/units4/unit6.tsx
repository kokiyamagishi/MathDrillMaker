import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit6Data: UnitData = {
    
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
                  <span style={{ fontSize: "22px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
                  <span style={{ fontSize: "22px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
                  <span style={{ fontSize: "22px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
                <span style={{ fontSize: "20px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
                <span style={{ fontSize: "20px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
                <span style={{ fontSize: "20px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
                <span style={{ fontSize: "20px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
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
  };
