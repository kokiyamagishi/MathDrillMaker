import React from "react";
import { UnitData } from "../units2";

export const unit6Data: UnitData = {
    unitNumber: 6,
    unitTitle: "ຮູບຮ່າງທີ່ມີລັກສະນະເຄິ່ງຄືກັນ",
    unitGoal:
      "ຮຽນຮູ້ຄວາມໝາຍ ແລະ ຄຸນລັກສະນະຂອງຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່  ແລະ ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ",
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
            <svg className="math-illustration" width="180" height="135">
              {/* Symmetric Butterfly or shape */}
              <path
                d="M 90,15 L 135,60 L 90,120 L 45,60 Z"
                fill="rgba(33, 150, 243, 0.2)"
                stroke="#2196F3"
                strokeWidth="2"
              />
              {/* Symmetry Axis Line */}
              <line
                x1="90"
                y1="7.5"
                x2="90"
                y2="127.5"
                stroke="red"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              <text x="95" y="120" style={{ fontSize: "24px" }} fill="red">
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
            <svg className="math-illustration" width="180" height="135">
              {/* Parallelogram (Point Symmetric) */}
              <path
                d="M 45,37.5 L 150,37.5 L 135,97.5 L 30,97.5 Z"
                fill="rgba(76, 175, 80, 0.2)"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <circle cx="90" cy="67.5" r="6" fill="red" />
              <text x="95" y="75" style={{ fontSize: "24px" }} fill="red">
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
                <span>{"(1) ຮູບວົງມົນ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ (ພັບເຄິ່ງຊ້ອນກັນໄດ້ພໍດີ) ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ຮູບສີ່ແຈຂ້າງຂະໜານ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ (ພັບເຄິ່ງຊ້ອນກັນໄດ້ພໍດີ) ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບແກນເຄິ່ງຄື ແລະ ເມັດເຄິ່ງຄື: "}{" "}
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
                <span>{"(1) ຮູບຈະຕຸລັດ (Square) ມີແກນເຄິ່ງຄືທັງໝົດຈັກແກນ?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ແກນ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ຕົວອັກສອນພາສາອັງກິດ 'S' ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (ໝູນ 180° ທັບກັນພໍດີ) ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ຈື່ໄວ້ວ່າ ຖ້າເປັນຮູບຈະຕຸລັດ ຫຼື ວົງມົນ ຈະມີຄວາມສົມມາດຫຼາຍຮູບແບບ, ສ່ວນຕົວອັກສອນ 'H' ສາມາດທັງພັບເຄິ່ງ ແລະ ທັງໝູນໄດ້ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບເຄິ່ງຄືກັນຂອງດາວ: "}{" "}
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
                  {"⭐ ຮູບດາວ 5 ແຈສະເໝີ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ທີ່ມີແກນເຄິ່ງຄືທັງໝົດຈັກແກນ?"}
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
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຕົວອັກສອນເຄິ່ງຄື: "}{" "}
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
                  {"🔤 ຕົວອັກສອນພາສາອັງກິດ 'H' ມີຄຸນລັກສະນະເປັນທັງຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່ ແລະ ຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ຫຼື ບໍ່?"}
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
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
                <span>{"(1) 📐 ຮູບສາມແຈສະເໝີ ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ (ໝູນ 180° ແລ້ວທັບກັນພໍດີ) ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) 🛑 ຮູບຫົກແຈສະເໝີ (Regular Hexagon) ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບເຄິ່ງຄື: "}{" "}
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
                <span>{"(1) ໃນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເສັ້ນຊື່, ເສັ້ນຊື່ທີ່ເຊື່ອມຕໍ່ສອງເມັດສົມທຽບກັນ ຈະຕັ້ງສາກ (直交) ກັບແກນເຄິ່ງຄື ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ໃນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ, ເເສັ້ນຊື່ທີ່ເຊື່ອມຕໍ່ສອງເມັດສົມທຽບກັນ ຈະຜ່ານເມັດໃຈກາງເຄິ່ງຄືສະເໝີ ຫຼື ບໍ່?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            <span key="u6-ans-1-1">{"(1) ແມ່ນ (ມີແກນເຄິ່ງຄືຫຼາຍບໍ່ສິ້ນສຸດ)"}</span>,
            <span key="u6-ans-1-2">{"(2) ບໍ່ແມ່ນ (ແຕ່ແມ່ນຮູບເຄິ່ງຄືກັນທຽບໃສ່ເມັດ)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u6-ans-2-1">{"(1) 4 ແກນ"}</span>,
            <span key="u6-ans-2-2">{"(2) ແມ່ນ (ປິ່ນ 180° ແລ້ວທັບກັນພໍດີ)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u6-ans-t1-1">{"5 ແກນ (ຍ້ອນແຕ່ລະແຈສາມາດຜ່ານໃຈກາງຫາຂ້າງກົງກັນຂ້າມໄດ້)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u6-ans-t2-1">{"ແມ່ນ (ສາມາດພັບເຄິ່ງໄດ້ທັງແນວນອນ/ແນວຕັ້ງ ແລະ ປິ່ນ 180° ກໍ່ທັບກັນພໍດີ)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u6-ans-s1-1">{"(1) ບໍ່ແມ່ນ (ຍ້ອນເມື່ອປິ່ນ 180° ຍອດສາມແຈຈະຊີ້ລົງລຸ່ມ)"}</span>,
            <span key="u6-ans-s1-2">{"(2) ແມ່ນ (ຍ້ອນເປັນຮູບຫຼາຍແຈສະເໝີທີ່ມີຈຳນວນແຈເປັນເລກຄູ່)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u6-ans-s2-1">{"(1) ຕັ້ງສາກ"}</span>,
            <span key="u6-ans-s2-2">{"(2) ຜ່ານເມັດໃຈກາງເຄິ່ງຄື"}</span>,
          ],
        },
      ],
      advice:
        "ຮູບເຄິ່ງຄືກັນທັງສອງປະເພດແມ່ນມີຄວາມສວຍງາມ ແລະ ພົບເຫັນໄດ້ຫຼາຍໃນທຳມະຊາດ! ການຈຳແນກແກນ ແລະ ເມັດເຄິ່ງຄື ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈຄວາມສົມດຸນຂອງສິ່ງຕ່າງໆໄດ້ດີຂຶ້ນ.",
    },
  };
