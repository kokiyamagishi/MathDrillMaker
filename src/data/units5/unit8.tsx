import React from "react";
import { UnitData } from "../units2";

export const unit8Data: UnitData = {
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
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ສູດຄວາມໄວພື້ນຖານ"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#FFE082",
            border: "2px solid #FFB300",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "6px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <svg width="200" height="110">
              {/* Triangle path */}
              <polygon points="100,10 25,95 175,95" fill="none" stroke="#FFB300" strokeWidth="2.5"/>
              
              {/* Division Line */}
              <line x1="62" y1="52" x2="138" y2="52" stroke="#FFB300" strokeWidth="2"/>
              {/* Multiplication Line */}
              <line x1="100" y1="52" x2="100" y2="95" stroke="#FFB300" strokeWidth="2"/>

              {/* Labels inside triangle */}
              <text x="100" y="40" textAnchor="middle" style={{ fontSize: "12px", fontWeight: "bold" }} fill="#E65100">{"ໄລຍະທາງ"}</text>
              <text x="52" y="78" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#E65100">{"ຄວາມໄວ"}</text>
              <text x="138" y="78" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#E65100">{"ເວລາ"}</text>

              {/* Operator Hints */}
              <text x="100" y="80" textAnchor="middle" style={{ fontSize: "14px", fontWeight: "bold" }} fill="red">{"×"}</text>
              <text x="47" y="55" textAnchor="middle" style={{ fontSize: "14px", fontWeight: "bold" }} fill="red">{"÷"}</text>
              <text x="153" y="55" textAnchor="middle" style={{ fontSize: "14px", fontWeight: "bold" }} fill="red">{"÷"}</text>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "22px", lineHeight: "1.6" }}>
            <div style={{ fontWeight: "bold", color: "#E65100", marginBottom: "8px" }}>
              {"ວິທີໃຊ້ສາມຫຼ່ຽມຊ່ວຍຈື່:"}
            </div>
            <div style={{ fontSize: "18px", color: "#333" }}>
              <div>{"• ຊອກ ໄລຍະທາງ = ຄວາມໄວ × ເວລາ"}</div>
              <div>{"• ຊອກ ຄວາມໄວ = ໄລຍະທາງ ÷ ເວລາ"}</div>
              <div>{"• ຊອກ ເວລາ = ໄລຍະທາງ ÷ ຄວາມໄວ"}</div>
            </div>
            <div style={{ fontSize: "15px", color: "#555", marginTop: "8px" }}>
              {"* ປິດຄຳສັບທີ່ຕ້ອງການຊອກຫາ ແລ້ວຄິດໄລ່ຕາມຮູບເດີ້!"}
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຕາມສູດຄວາມໄວຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ລົດຄັນໜຶ່ງແແລ່ນໄດ້ 120 km ໃນເວລາ 2 ຊົ່ວໂມງ. ຄວາມໄວຂອງລົດແມ່ນຈັກ km/h?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km/h"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຄົນຜູ້ໜຶ່ງຍ່າງດ້ວຍຄວາມໄວ 80 m/min ໃນເວລາ 15 ນາທີ. ໄລຍະທາງແມ່ນຈັກ m?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
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
            {"ຈົ່ງຄິດໄລ່ໄລຍະທາງ ແລະ ເວລາຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ລົດໄຟແລ່ນດ້ວຍຄວາມໄວ 60 km/h ໃນໄລຍະທາງ 180 km. ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ລົດຈັກຄັນໜຶ່ງຂີ່ດ້ວຍຄວາມໄວ 90 km/h ເປັນເວລາ 1.5 ຊົ່ວໂມງ. ໄລຍະທາງແມ່ນຈັກ km?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "⚖️ ເພື່ອປຽບທຽບຄວາມໄວ, ເຮົາຕ້ອງປ່ຽນຫົວໜ່ວຍເວລາ ຫຼື ໄລຍະທາງໃຫ້ຄືກັນກ່ອນເດີ້! ສ່ວນການປ່ຽນຄວາມໄວຊົ່ວໂມງເປັນວິນາທີ ໃຫ້ຫານດ້ວຍ 3.6 ໄດ້ເລີຍ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🐆 ເສືອແລ່ນໄດ້ 300 m ໃນເວລາ 15 ວິນາທີ. ມ້າແລ່ນໄດ້ 240 m ໃນເວລາ 10 ວິນາທີ. ສັດຊະນິດໃດແລ່ນໄວກວ່າກັນ?"}
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍຄວາມໄວ: "}{" "}
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
                {"🚆 ລົດໄຟແລ່ນດ້ວຍຄວາມໄວ 72 km/h. ຖ້າປ່ຽນຄວາມໄວນີ້ເປັນຄວາມໄວຕໍ່ວິນາທີ (m/s) ຈະແມ່ນຈັກ m/s?"}
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
                <span>{"m/s"}</span>
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
            {"ຈົ່ງຄິດໄລ່ຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຍ່າງດ້ວຍຄວາມໄວ 70 m/min ໃນເວລາ 20 ນາທີ ຈະໄດ້ໄລຍະທາງຈັກ m?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ໄລຍະທາງ 420 km ດ້ວຍຄວາມໄວ 60 km/h ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມໄວ ແລະ ໄລຍະທາງຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຂີ່ລົດຖີບໄດ້ໄລຍະທາງ 1800 m ໃນເວລາ 3 ນາທີ. ຄວາມໄວສະເລ່ຍແມ່ນຈັກ m/min?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m/min"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ເຮືອບິນບິນດ້ວຍຄວາມໄວ 800 km/h ເປັນເວລາ 2.5 ຊົ່ວໂມງ ຈະໄດ້ໄລຍະທາງຈັກ km?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km"}</span>
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
          <span key="u8-ans-1-1">{"(1) 60 km/h (120 ÷ 2 = 60)"}</span>,
          <span key="u8-ans-1-2">{"(2) 1,200 m (80 × 15 = 1,200)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u8-ans-2-1">{"(1) 3 ຊົ່ວໂມງ (180 ÷ 60 = 3)"}</span>,
          <span key="u8-ans-2-2">{"(2) 135 km (90 × 1.5 = 135)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u8-ans-t1-1">{"(1) ມ້າແລ່ນໄວກວ່າ (ຍ້ອນຄວາມໄວເສືອແມ່ນ 300 ÷ 15 = 20 m/s, ຄວາມໄວມ້າແມ່ນ 240 ÷ 10 = 24 m/s)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u8-ans-t2-1">{"(1) 20 m/s (ຍ້ອນ 72 km/h = 72,000 m ÷ 3,600 s = 20 m/s)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u8-ans-s1-1">{"(1) 1,400 m (70 × 20 = 1,400)"}</span>,
          <span key="u8-ans-s1-2">{"(2) 7 ຊົ່ວໂມງ (420 ÷ 60 = 7)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u8-ans-s2-1">{"(1) 600 m/min (1800 ÷ 3 = 600)"}</span>,
          <span key="u8-ans-s2-2">{"(2) 2,000 km (800 × 2.5 = 2,000)"}</span>,
        ],
      },
    ],
    advice:
      "ຄວາມໄວແມ່ນສິ່ງທີ່ສຳຄັນຫຼາຍໃນຟີຊິກ ແລະ ຊີວິດປະຈຳວັນ! ຈື່ໄວ້ສະເໝີວ່າສູດທັງສາມແມ່ນກ່ຽວຂ້ອງກັນ ຖ້າຮູ້ສອງຕົວ ຈະສາມາດຊອກຫາຕົວທີສາມໄດ້ສະເໝີ.",
  },
};
