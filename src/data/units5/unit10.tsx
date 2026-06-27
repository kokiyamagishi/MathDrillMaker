import React from "react";
import { UnitData } from "../units2";

export const unit10Data: UnitData = {
    unitNumber: 10,
    unitTitle: "ຮູບຫຼາຍແຈ ແລະ ວົງມົນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບຫຼາຍແຈສະເໝີ, ຄວາມໝາຍຂອງ (3.14) ແລະ ສູດຄິດໄລ່ຄວາມຍາວອ້ອມວົງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 110-125",
    keyPoints: {
      hint: {
        text: "ເສັ້ນອ້ອມວົງແມ່ນຄວາມຍາວອ້ອມຮອບວົງມົນ! ຈື່ສູດ: ເສັ້ນອ້ອມວົງ = ເສັ້ນຜ່ານໃຈກາງ × 3.14 ເດີ້!",
      },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ເສັ້ນອ້ອມວົງ"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#E3F2FD",
            border: "2px solid #2196F3",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", width: "500px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <svg width="460" height="180">
              {/* Circle */}
              <circle cx="110" cy="90" r="65" fill="none" stroke="#2196F3" strokeWidth="3"/>
              
              {/* Diameter Line */}
              <line x1="45" y1="90" x2="175" y2="90" stroke="red" strokeWidth="2.5"/>
              
              {/* Radius Line */}
              <line x1="110" y1="90" x2="156" y2="44" stroke="green" strokeWidth="2.5"/>
              
              {/* Center point */}
              <circle cx="110" cy="90" r="4.5" fill="#333"/>

              {/* Labels on Right */}
              <text x="240" y="55" style={{ fontSize: "14px", fontWeight: "bold" }} fill="#1565C0">{"• ເສັ້ນອ້ອມວົງ"}</text>
              <text x="240" y="95" style={{ fontSize: "14px", fontWeight: "bold" }} fill="red">{"• ເສັ້ນຜ່ານໃຈກາງ"}</text>
              <text x="240" y="135" style={{ fontSize: "14px", fontWeight: "bold" }} fill="green">{"• ລັດສະໝີ"}</text>

              {/* Leader lines */}
              <line x1="235" y1="51" x2="165" y2="45" stroke="#1565C0" strokeWidth="1.2" strokeDasharray="3,3"/>
              <circle cx="165" cy="45" r="2.5" fill="#1565C0"/>
              
              <line x1="235" y1="91" x2="145" y2="90" stroke="red" strokeWidth="1.2" strokeDasharray="3,3"/>
              <circle cx="145" cy="90" r="2.5" fill="red"/>
              
              <line x1="235" y1="131" x2="133" y2="67" stroke="green" strokeWidth="1.2" strokeDasharray="3,3"/>
              <circle cx="133" cy="67" r="2.5" fill="green"/>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "22px", lineHeight: "1.6" }}>
            <div style={{ fontWeight: "bold", color: "#1565C0", marginBottom: "8px" }}>
              {"ເສັ້ນອ້ອມວົງ = ເສັ້ນຜ່ານໃຈກາງ × 3.14"}
            </div>
            <div style={{ fontSize: "18px", color: "#333" }}>
              <div>{"• ເສັ້ນຜ່ານໃຈກາງ = ລັດສະໝີ × 2"}</div>
              <div style={{ marginTop: "4px" }}>
                {"* 3.14 ແມ່ນຄ່າປະມານຂອງອັດຕາສ່ວນ ເສັ້ນອ້ອມວົງ ຕໍ່ ເສັ້ນຜ່ານໃຈກາງ."}
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
              {"ຈົ່ງຊອກຫາຄວາມຍາວເສັ້ນອ້ອມວົງຕໍ່ໄປນີ້ (ຊອກຈາກເສັ້ນຜ່ານໃຈກາງ): "}{" "}
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
                <span>{"(1) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 10 cm. ເສັ້ນອ້ອມວົງແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 20 cm. ເສັ້ນອ້ອມວົງແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
              {"ຈົ່ງຊອກຫາຄວາມຍາວເສັ້ນອ້ອມວົງຕໍ່ໄປນີ້ (ຊອກຈາກລັດສະໝີ): "}{" "}
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
                <span>{"(1) ວົງມົນທີ່ມີລັດສະໝີຍາວ 5 cm. ເສັ້ນອ້ອມວົງແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ວົງມົນທີ່ມີລັດສະໝີຍາວ 4 cm. ເສັ້ນອ້ອມວົງແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "📐 ຮູບຫົກແຈສະເໝີທີ່ແຕ້ມໃນວົງມົນ ຈະມີຄວາມຍາວແຕ່ລະຂ້າງເທົ່າກັບລັດສະໝີເດີ້! ສ່ວນການຊອກຫາເສັ້ນຜ່ານໃຈກາງຈາກເສັ້ນອ້ອມວົງ ແມ່ນໃຫ້ເອົາເສັ້ນອ້ອມວົງຫານດ້ວຍ 3.14 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຫຼາຍແຈສະເໝີ: "}{" "}
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
                  {"⭐ ຖ້າແຕ້ມຮູບຫົກແຈສະເໝີ ໃສ່ທາງໃນວົງມົນທີ່ມີລັດສະໝີ 5 cm ໂດຍໃຫ້ຈອມຂອງມັນຕິດກັບເສັ້ນອ້ອມວົງມົນ. ຄວາມຍາວອ້ອມຮອບຮູບຫົກແຈສະເໝີນີ້ຈະແມ່ນຈັກ cm?"}
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
                  <span>{"cm"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາຊອກຫາເສັ້ນຜ່ານໃຈກາງ: "}{" "}
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
                  {"⭕ ຖ້າຄວາມຍາວເສັ້ນອ້ອມວົງຂອງວົງມົນໜຶ່ງແມ່ນ 15.7 cm, ເສັ້ນຜ່ານໃຈກາງຂອງວົງມົນນີ້ຈະມີຄວາມຍາວຈັກ cm?"}
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
                  <span>{"cm"}</span>
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
              {"ຈົ່ງຄິດໄລ່ຄວາມຍາວເສັ້ນອ້ອມວົງຂອງວົງມົນຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 30 cm. ເສັ້ນອ້ອມວົງແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) ວົງມົນທີ່ມີລັດສະໝີຍາວ 10 cm. ເສັ້ນອ້ອມວົງແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລຂາຄະນິດຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) 🚴 ລໍ້ລົດຖີບຄັນໜຶ່ງມີເສັ້ນຜ່ານໃຈກາງຍາວ 60 cm. ຖ້າລໍ້ລົດຖີບນີ້ປິ່ນໄດ້ 10 ຮອບ, ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span>{"(2) 🛑 ຮູບແປດແຈສະເໝີ ທີ່ມີຄວາມຍາວແຕ່ລະຂ້າງລະ 6 cm. ຄວາມຍາວອ້ອມຮອບຮູບແປດແຈນີ້ແມ່ນຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
            <span key="u10-ans-1-1">{"(1) 31.4 cm (10 × 3.14 = 31.4)"}</span>,
            <span key="u10-ans-1-2">{"(2) 62.8 cm (20 × 3.14 = 62.8)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u10-ans-2-1">{"(1) 31.4 cm (5 × 2 × 3.14 = 31.4)"}</span>,
            <span key="u10-ans-2-2">{"(2) 25.12 cm (4 × 2 × 3.14 = 25.12)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u10-ans-t1-1">{"30 cm (ຍ້ອນຄວາມຍາວຂ້າງຮູບຫົກແຈສະເໝີໃນວົງມົນ ຈະເທົ່າກັບລັດສະໝີ 5 cm ພໍດີ, ດັ່ງນັ້ນ 5 × 6 = 30)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u10-ans-t2-1">{"5 cm (ຍ້ອນ 15.7 ÷ 3.14 = 5)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u10-ans-s1-1">{"(1) 94.2 cm (30 × 3.14 = 94.2)"}</span>,
            <span key="u10-ans-s1-2">{"(2) 62.8 cm (10 × 2 × 3.14 = 62.8)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u10-ans-s2-1">{"(1) 1,884 cm (ຍ້ອນ 60 × 3.14 × 10 = 1884)"}</span>,
            <span key="u10-ans-s2-2">{"(2) 48 cm (ຍ້ອນ 6 × 8 = 48)"}</span>,
          ],
        },
      ],
      advice:
        "ອັດຕາສ່ວນເສັ້ນອ້ອມວົງຕໍ່ເສັ້ນຜ່ານໃຈກາງແມ່ນຄ່າຄົງທີ່ (3.14)! ຖ້າເຮົາຈື່ສູດນີ້ ຈະສາມາດຄິດໄລ່ໄລຍະທາງຂອງການປິ່ນລໍ້ ຫຼື ສິ່ງມົນໆໄດ້ຢ່າງງ່າຍດາຍ.",
    },
  };
