import React from "react";
import { UnitData } from "../units2";

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ຮູບກ້ອນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຮູບກ້ອນເລຂາຄະນິດ ເຊັ່ນ: ຮູບຫຼັງຄາຫຼາຍແຈ ແລະ ຮູບຫຼັງຄາມົນ, ອົງປະກອບ ແລະ ແຜນວາດຄີ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 172-183",
  keyPoints: {
    hint: {
      text: "ຮູບຫຼັງຄາຫຼາຍແຈ ມີໜ້າຂ້າງເປັນຮູບສີ່ແຈສາກ. ສ່ວນຮູບຫຼັງຄາມົນ ມີໜ້າຂ້າງທີ່ເມື່ອຄີ່ອອກຈະເປັນຮູບສີ່ແຈສາກເດີ້!",
    },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ອົງປະກອບຂອງຮູບຫຼັງຄາ"}
        </h3>
        
        {/* Side-by-side 3D SVG Illustrations */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
          
          {/* Triangular Prism Box */}
          <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#fff", border: "2px solid #2196F3", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <strong style={{ fontSize: "16px", color: "#1565C0", display: "block", marginBottom: "8px" }}>{"ຮູບຫຼັງຄາສາມແຈ"}</strong>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg width="180" height="110">
                {/* 3D Triangular Prism lines */}
                {/* Dotted hidden back vertical line */}
                <line x1="40" y1="15" x2="40" y2="75" stroke="#90CAF9" strokeWidth="1" strokeDasharray="2,2"/>
                {/* Bottom hidden back lines */}
                <line x1="20" y1="90" x2="40" y2="75" stroke="#90CAF9" strokeWidth="1" strokeDasharray="2,2"/>
                <line x1="65" y1="95" x2="40" y2="75" stroke="#90CAF9" strokeWidth="1" strokeDasharray="2,2"/>

                {/* Shaded sides */}
                <polygon points="20,30 65,35 65,95 20,90" fill="rgba(33, 150, 243, 0.15)"/>
                
                {/* Top Face */}
                <polygon points="20,30 65,35 40,15" fill="rgba(33, 150, 243, 0.35)" stroke="#1976D2" strokeWidth="1.5"/>

                {/* Visible front vertical and bottom lines */}
                <line x1="20" y1="30" x2="20" y2="90" stroke="#1976D2" strokeWidth="1.5"/>
                <line x1="65" y1="35" x2="65" y2="95" stroke="#1976D2" strokeWidth="1.5"/>
                <line x1="20" y1="90" x2="65" y2="95" stroke="#1976D2" strokeWidth="1.5"/>

                {/* Leader lines */}
                <line x1="42" y1="25" x2="90" y2="25" stroke="#1565C0" strokeWidth="1" strokeDasharray="2,2"/>
                <circle cx="42" cy="25" r="2" fill="#1565C0"/>
                <text x="95" y="28" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"ໜ້າພື້ນ"}</text>

                <line x1="42" y1="65" x2="90" y2="65" stroke="#1565C0" strokeWidth="1" strokeDasharray="2,2"/>
                <circle cx="42" cy="65" r="2" fill="#1565C0"/>
                <text x="95" y="68" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"ໜ້າຂ້າງ"}</text>
              </svg>
            </div>
          </div>

          {/* Cylinder Box */}
          <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#fff", border: "2px solid #4CAF50", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <strong style={{ fontSize: "16px", color: "#2E7D32", display: "block", marginBottom: "8px" }}>{"ຮູບຫຼັງຄາມົນ"}</strong>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg width="180" height="110">
                {/* Shaded cylinder body */}
                <rect x="20" y="25" width="50" height="60" fill="rgba(76, 175, 80, 0.15)"/>

                {/* Top Ellipse */}
                <ellipse cx="45" cy="25" rx="25" ry="10" fill="rgba(76, 175, 80, 0.35)" stroke="#2E7D32" strokeWidth="1.5"/>

                {/* Bottom Ellipse visible edge */}
                <path d="M 20,85 A 25,10 0 0,0 70,85" fill="none" stroke="#2E7D32" strokeWidth="1.5"/>
                {/* Bottom Ellipse hidden edge */}
                <path d="M 20,85 A 25,10 0 0,1 70,85" fill="none" stroke="#A5D6A7" strokeWidth="1" strokeDasharray="2,2"/>

                {/* Vertical boundaries */}
                <line x1="20" y1="25" x2="20" y2="85" stroke="#2E7D32" strokeWidth="1.5"/>
                <line x1="70" y1="25" x2="70" y2="85" stroke="#2E7D32" strokeWidth="1.5"/>

                {/* Leader lines */}
                <line x1="45" y1="25" x2="90" y2="25" stroke="#2E7D32" strokeWidth="1" strokeDasharray="2,2"/>
                <circle cx="45" cy="25" r="2" fill="#2E7D32"/>
                <text x="95" y="28" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#2E7D32">{"ໜ້າພື້ນ"}</text>

                <line x1="45" y1="60" x2="90" y2="60" stroke="#2E7D32" strokeWidth="1" strokeDasharray="2,2"/>
                <circle cx="45" cy="60" r="2" fill="#2E7D32"/>
                <text x="95" y="63" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#2E7D32">{"ໜ້າໂຄ້ງ"}</text>
              </svg>
            </div>
          </div>

        </div>

        {/* Elements Table */}
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
              backgroundColor: "#fff",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#F5F5F5" }}>
                <th style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
                  {"ປະເພດຮູບກ້ອນ"}
                </th>
                <th style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
                  {"ໜ້າພື້ນ"}
                </th>
                <th style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
                  {"ໜ້າຂ້າງ"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 8px",
                    border: "1px solid #ccc",
                    fontWeight: "bold",
                    color: "#1565C0",
                  }}
                >
                  {"ຮູບຫຼັງຄາສາມແຈ"}
                </td>
                <td style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
                  {"ຮູບສາມແຈ (2 ໜ້າ)"}
                </td>
                <td style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
                  {"ຮູບສີ່ແຈສາກ (3 ໜ້າ)"}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 8px",
                    border: "1px solid #ccc",
                    fontWeight: "bold",
                    color: "#2E7D32",
                  }}
                >
                  {"ຮູບຫຼັງຄາມົນ"}
                </td>
                <td style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
                  {"ຮູບວົງມົນ (2 ໜ້າ)"}
                </td>
                <td style={{ padding: "12px 8px", border: "1px solid #ccc" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຫຼັງຄາສາມແຈຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ຮູບຫຼັງຄາສາມແຈ ມີໜ້າທັງໝົດຈັກໜ້າ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ໜ້າ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຮູບຫຼັງຄາສາມແຈ ມີຈອມທັງໝົດຈັກຈອມ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຈອມ"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຫຼັງຄາມົນຕໍ່ໄປນີ້: "}{" "}
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
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ເມື່ອຄີ່ໜ້າໂຄ້ງຂອງຮູບຫຼັງຄາມົນ ອອກ, ຈະໄດ້ເປັນຮູບເລຂາຄະນິດໃດ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ໃນແຜນວາດຄີ່ຂອງຮູບຫຼັງຄາມົນ, ມີໜ້າພື້ນວົງມົນທັງໝົດຈັກໜ້າ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ໜ້າ"}</span>
              </div>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາແຜນວາດຄີ່ຂອງຮູບຫຼັງຄາມົນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 📐 ເມື່ອແຕ້ມແຜນວາດຄີ່ຂອງຮູບຫຼັງຄາມົນ ທີ່ມີເສັ້ນຜ່ານໃຈກາງຂອງພື້ນວົງມົນແມ່ນ 10 cm. ລວງຍາວຂອງໜ້າຂ້າງຮູບສີ່ແຈສາກຈະແມ່ນຈັກ cm? (ກຳນົດ π = 3.14)"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingLeft: "16px",
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
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຊອກຫາເນື້ອທີ່ຂ້າງຂອງຮູບຫຼັງຄາສາມແຈ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 📐 ຮູບຫຼັງຄາສາມແຈໜຶ່ງ ມີລວງຮອບພື້ນແມ່ນ 12 cm ແລະ ມີຄວາມສູງແມ່ນ 8 cm. ເນື້ອທີ່ຂ້າງທັງໝົດ (ເນື້ອທີ່ຂອງໜ້າຂ້າງທັງ 3 ໜ້າລວມກັນ) ຈະແມ່ນຈັກ cm²?"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingLeft: "16px",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາເສັ້ນຂອບຂອງຮູບຫຼັງຄາຫ້າແຈ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {
                "(1) 📐 ຮູບຫຼັງຄາຫ້າແຈ ຈະມີເສັ້ນຂອບ ທັງໝົດຈັກເສັ້ນ?"
              }
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingLeft: "16px",
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
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາຈອມຂອງຮູບຫຼັງຄາຫົກແຈ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {
                "(1) 📐 ຮູບຫຼັງຄາຫົກແຈ ຈະມີຈອມ ທັງໝົດຈັກຈອມ?"
              }
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingLeft: "16px",
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
              <span>{"ຈອມ"}</span>
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
          <span key="u15-ans-1-1">{"(1) 5 ໜ້າ (2 ໜ້າພື້ນ + 3 ໜ້າຂ້າງ)"}</span>,
          <span key="u15-ans-1-2">{"(2) 6 ຈອມ"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u15-ans-2-1">{"(1) ຮູບສີ່ແຈສາກ (ໜ້າໂຄ້ງເມື່ອຄີ່ອອກຈະເປັນຮູບສີ່ແຈສາກ)"}</span>,
          <span key="u15-ans-2-2">{"(2) 2 ໜ້າ"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u15-ans-t1-1">{"(1) 31.4 cm (ຍ້ອນເທົ່າກັບຄວາມຍາວອ້ອມວົງມົນ 10 × 3.14 = 31.4 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u15-ans-t2-1">{"(1) 96 cm² (ຍ້ອນເນື້ອທີ່ຂ້າງທັງໝົດແມ່ນ 12 × 8 = 96 cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u15-ans-s1-1">{"(1) 15 ເສັ້ນ (ຍ້ອນໜ້າພື້ນເທິງມີ 5, ພື້ນລຸ່ມມີ 5 ແລະ ເສັ້ນຂອບແນວຕັ້ງມີ 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u15-ans-s2-1">{"(1) 12 ຈອມ (ຍ້ອນຈອມຢູ່ພື້ນເທິງມີ 6 ແລະ ຈອມຢູ່ພື້ນລຸ່ມມີ 6)"}</span>,
        ],
      },
    ],
    advice:
      "ຮູບຫຼັງຄາເລຂາຄະນິດມີຄວາມງາມໃນໂຄງສ້າງສາມມິຕິຫຼາຍ! ການຈື່ຈຳຄວາມສຳພັນລະຫວ່າງໜ້າພື້ນ ແລະ ໜ້າຂ້າງ ຈະຊ່ວຍໃຫ້ເຮົາສ້າງແຜນວາດຄີ່ໄດ້ຢ່າງຖືກຕ້ອງສະເໝີ.",
  },
};
