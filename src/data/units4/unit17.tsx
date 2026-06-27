import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit17Data: UnitData = {
    
    unitNumber: 17,
    unitTitle: "ເນື້ອທີ່",
    unitGoal:
      "ຮຽນຮູ້ສູດການຊອກຫາເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍເນື້ອທີ່ (cm², m², a, ha, km²)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 153-165",
    keyPoints: {
      hint: {
        text: "ເນື້ອທີ່ແມ່ນຂະໜາດຂອງໜ້າພຽງ! ຈື່ສູດເນື້ອທີ່ຮູບສີ່ແຈສາກ = ກວ້າງ × ຍາວ ແລະ ຮູບຈະຕຸລັດ = ຂ້າງ × ຂ້າງ ໃຫ້ດີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສູດເນື້ອທີ່ພື້ນຖານ"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {/* Rectangle */}
            <div
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
                {"ຮູບສີ່ແຈສາກ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="120" height="70">
                  <rect
                    x="10"
                    y="10"
                    width="100"
                    height="50"
                    fill="rgba(33, 150, 243, 0.2)"
                    stroke="#2196F3"
                    strokeWidth="2"
                  />
                  <text
                    x="60"
                    y="40"
                    fontSize="12"
                    fill="#333"
                    textAnchor="middle"
                  >
                    {"ເນື້ອທີ່ = ກວ້າງ × ຍາວ"}
                  </text>
                </svg>
              </div>
            </div>

            {/* Square */}
            <div
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
                {"ຮູບຈະຕຸລັດ"}
              </strong>
              <div
                style={{
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <svg width="80" height="80">
                  <rect
                    x="10"
                    y="10"
                    width="60"
                    height="60"
                    fill="rgba(76, 175, 80, 0.2)"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <text
                    x="40"
                    y="45"
                    fontSize="12"
                    fill="#333"
                    textAnchor="middle"
                  >
                    {"ຂ້າງ × ຂ້າງ"}
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ຫົວໜ່ວຍເນື້ອທີ່ຂະໜາດໃຫຍ່"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                fontSize: "22px",
                lineHeight: "1.8",
              }}
            >
              <li>
                <strong>{"1 a (ອາ)"}</strong>
                {" = 100 m² (ຮູບຈະຕຸລັດຂ້າງ 10m)"}
              </li>
              <li>
                <strong>{"1 ha (ເຮັກຕາ)"}</strong>
                {" = 10000 m² (ຮູບຈະຕຸລັດຂ້າງ 100m)"}
              </li>
              <li>
                <strong>{"1 km² (ກິໂລຕາແມັດ)"}</strong>
                {" = 1000000 m² (ຮູບຈະຕຸລັດຂ້າງ 1km)"}
              </li>
            </ul>
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
              {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແနນ)"}</span>
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
                    "(1) ຮູບສີ່ແຈສາກທີ່ມີລວງກວ້າງ 6 cm ແລະ ລວງຍາວ 9 cm. ເນື້ອທີ່ແມ່ນ"
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
                  {"(2) ຮູບຈະຕຸລັດທີ່ມີຄວາມຍາວຂ້າງ 8 cm. ເນື້ອທີ່ແມ່ນ"}
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
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແနນ)"}</span>
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
                <span>{"(3) 3 a ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"m²"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 5 ha ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
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
      hintText: "ຊອກຫາເນື້ອທີ່ທັງໝົດໂດຍການແບ່ງຮູບ ຫຼື ເອົາຮູບໃຫຍ່ລົບຮູບນ້ອຍອອກເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງຮູບປະສົມລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="200" height="120">
                    {/* A cutout shape: 10cm x 6cm rect with a 4cm x 3cm cutout in bottom right */}
                    <path d="M 20,20 L 160,20 L 160,60 L 100,60 L 100,100 L 20,100 Z" fill="none" stroke="#333" strokeWidth="2" />
                    <text x="90" y="15" fontSize="12">{"10 cm"}</text>
                    <text x="5" y="65" fontSize="12">{"6 cm"}</text>
                    {/* Top part is 6cm wide */}
                    <text x="125" y="55" fontSize="12">{"3 cm"}</text>
                    <text x="60" y="115" fontSize="12">{"6 cm"}</text>
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"ເນື້ອທີ່ ="}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
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
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງດິນປູກຝັງລຸ່ມນີ້ເປັນ ອາ (a): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📘 ສວນຜັກຮູບສີ່ແຈສາກແຫ່ງໜຶ່ງ ມີຂະໜາດຄວາມກວ້າງ 20 m ແລະ ຄວາມຍາວ 30 m. ເນື້ອທີ່ຂອງສວນຜັກນີ້ຈະເທົ່າກັບຈັກ a?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"a"}</span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 400 m² ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"a"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 2 ha ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m²"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📘 ທົ່ງນາຮູບສີ່ແຈສາກແຫ່ງໜຶ່ງ ມີຄວາມຍາວ 200 m ແລະ ຄວາມກວ້າງ 150 m. ເນື້ອທີ່ທົ່ງນານີ້ມີຈັກ ເຮັກຕາ (ha)?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ha"}</span>
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
            <span key="1">{"(1) 54 cm² (6 × 9), (2) 64 cm² (8 × 8)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {"(3) 300 m² (3 × 100), (4) 50000 m² (5 × 10000)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"56 cm² (16 + 40 = 56 cm²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3_2">
              {"84 cm² (ຍ້ອນ 12 × 8 - 4 × 3 = 96 - 12 = 84 cm²)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"10 a (ຍ້ອນ 20 × 50 = 1000 m² = 10 a)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="4_2">
              {"12 ha (ຍ້ອນ 300 × 400 = 120000 m² = 12 ha)"}
            </span>,
          ],
        },
      ],
      advice:
        "ການຄິດໄລ່ເນື້ອທີ່ຕ້ອງລະວັງຫົວໜ່ວຍໃຫ້ດີເດີ້! 1 a = 100 m² ສະເໝີ, ຖ້າຢາກປ່ຽນຈາກ m² ໄປເປັນ a ແມ່ນໃຫ້ຫານດ້ວຍ 100.",
    },
  };
