import React from "react";
import { UnitData } from "../units2";

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ສ່ວນຮ້ອຍ ແລະ ກຣາບ",
  unitGoal:
    "ຮຽນຮູ້ຄວາມໝາຍຂອງສ່ວນຮ້ອຍ (%), ສູດການຊອກຫາອັດຕາສ່ວນ (割合), ການຄິດໄລ່ລາຄາຫຼຸດ ແລະ ການອ່ານກຣາບເສັ້ນສະແດງ (ກຣາບບົງ ແລະ ກຣາບວົງມົນ)",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 160-171",
  keyPoints: {
    hint: {
      text: "ສ່ວນຮ້ອຍ (%) ແມ່ນການປຽບທຽບປະລິມານໂດຍກຳນົດໃຫ້ປະລິມານພື້ນຖານເປັນ 100! ຈື່ສູດ: ອັດຕາສ່ວນ = ປະລິມານທີ່ສົມທຽບ ÷ ປະລິມານພື້ນຖານ ເດີ້!",
    },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ສູດຄິດໄລ່ອັດຕາສ່ວນ ແລະ ສ່ວນຮ້ອຍ (Percentage Formulas)"}
        </h3>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#E8F5E9",
            border: "2px solid #4CAF50",
            borderRadius: "8px",
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          <div>
            <strong>
              {"• ອັດຕາສ່ວນ = ປະລິມານທີ່ສົມທຽບ ÷ ປະລິມານພື້ນຖານ"}
            </strong>
          </div>
          <div>
            <strong>{"• ສ່ວນຮ້ອຍ (%) = ອັດຕາສ່ວນ × 100"}</strong>
          </div>
          <div style={{ fontSize: "22px", color: "#555", marginTop: "8px" }}>
            {
              "ຕົວຢ່າງ: ໃນຫ້ອງຮຽນມີ 40 ຄົນ, ເສັງຜ່ານ 30 ຄົນ. ສ່ວນຮ້ອຍແມ່ນ: 30 ÷ 40 × 100 = 0.75 × 100 = 75%."
            }
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
            {"ຈົ່ງຄິດໄລ່ອັດຕາສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ມີນັກຮຽນທັງໝົດ 50 ຄົນ, ມັກເຕະບານ 20 ຄົນ. ນັກຮຽນທີ່ມັກເຕະບານກວມຈັກ %?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"%"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ໃນຕູ້ເຢັນມີໝາກໄມ້ທັງໝົດ 40 ໜ່ວຍ, ໃນນັ້ນມີສະຕໍເບີຣີ 10 ໜ່ວຍ. ສະຕໍເບີຣີກວມຈັກ % ຂອງໝາກໄມ້ທັງໝົດ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"%"}</span>
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
            {"ຈົ່ງຄິດໄລ່ລາຄາຫຼຸດສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ເສື້ອໂຕໜຶ່ງລາຄາ 1,200 ກີບ, ຖ້າຫຼຸດລາຄາ 20% ຈະໄດ້ຫຼຸດລາຄາຈັກກີບ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ລາຄາເສື້ອຕົວຈິງຫຼັງຈາກຫຼຸດລາຄາແລ້ວແມ່ນຈັກກີບ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "📈 ໃນກຣາບວົງມົນ ຫຼື ກຣາບບົງ, ຜົນບວກຂອງທຸກໆສ່ວນຈະຕ້ອງເທົ່າກັບ 100% ສະເໝີເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມຈາກກຣາບວົງມົນລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "8px 16px",
              }}
            >
              <svg className="math-illustration" width="150" height="150">
                <circle
                  cx="75"
                  cy="75"
                  r="60"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <path d="M 75,75 L 75,15" stroke="#333" strokeWidth="1.5" />
                <path d="M 75,75 L 135,75" stroke="#333" strokeWidth="1.5" />
                <path d="M 75,75 L 15,75" stroke="#333" strokeWidth="1.5" />
                <text x="95" y="45" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {"A: 25%"}
                </text>
                <text x="95" y="110" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {"B: 25%"}
                </text>
                <text x="35" y="80" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {"C: ?"}
                </text>
              </svg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <div>
                  {"(1) ສ່ວນຮ້ອຍຂອງກຸ່ມ C ໃນກຣາບວົງມົນນີ້ ແມ່ນຈັກ %?"}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    paddingLeft: "16px",
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
                  <span>{"%"}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມຈາກກຣາບບົງລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
                {"(1) 📊 ຈາກກຣາບບົງສະແດງສ່ວນຮ້ອຍຂອງໝາກໄມ້ທີ່ນັກຮຽນມັກ: ໝາກກ້ວຍ 35%, ໝາກມ່ວງ 45% ແລະ ໝາກແອບເປິ້ນສ່ວນທີ່ເຫຼືອ. ໝາກແອບເປິ້ນຈະກວມເອົາຈັກ %?"}
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
                <span>{"%"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາສ່ວນຮ້ອຍຂອງເຂົ້າໜົມ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
                "(1) 🍬 ມີເຂົ້າໜົມທັງໝົດ 80 ກ້ອນ, ແບ່ງໃຫ້ນັກຮຽນໄປ 40%. ຈະເຫຼືອເຂົ້າໜົມທັງໝົດຈັກກ້ອນ?"
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
                  width: "120px",
                  height: "40px",
                }}
              ></span>
              <span>{"ກ້ອນ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການຫຼຸດລາຄາຂອງຫຼິ້ນ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
                "(1) 🧸 ເຄື່ອງຫຼິ້ນອັນໜຶ່ງລາຄາ 5,000 ກີບ, ທາງຮ້ານຕິດປ້າຍຫຼຸດລາຄາ 15%. ພວກເຮົາຈະຕ້ອງຈ່າຍເງິນຊື້ເຄື່ອງຫຼິ້ນນັ້ນຕົວຈິງຈັກກີບ?"
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
                  width: "120px",
                  height: "40px",
                }}
              ></span>
              <span>{"ກີບ"}</span>
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
          <span key="u14-ans-1-1">{"(1) 40% (20 ÷ 50 × 100)"}</span>,
          <span key="u14-ans-1-2">{"(2) 25% (10 ÷ 40 × 100)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u14-ans-2-1">{"(1) 240 ກີບ (1,200 × 0.2)"}</span>,
          <span key="u14-ans-2-2">{"(2) 960 ກີບ (1,200 - 240)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u14-ans-t1-1">{"(1) 50% (ຍ້ອນວົງມົນທັງໝົດແມ່ນ 100%, 100 - (25 + 25) = 50%)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u14-ans-t2-1">{"(1) 20% (ຍ້ອນທັງໝົດແມ່ນ 100%, 100 - (35 + 45) = 20%)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u14-ans-s1-1">{"(1) 48 ກ້ອນ (ຍ້ອນແບ່ງໄປ 80 × 0.4 = 32 ກ້ອນ, ເຫຼືອແມ່ນ 80 - 32 = 48 ກ້ອນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u14-ans-s2-1">{"(1) 4,250 ກີບ (ຍ້ອນຫຼຸດລາຄາ 5,000 × 0.15 = 750 ກີບ, ຕ້ອງຈ່າຍ 5,000 - 750 = 4,250 ກີບ)"}</span>,
        ],
      },
    ],
    advice:
      "ສ່ວນຮ້ອຍແລະກຣາບຊ່ວຍໃຫ້ເຮົາຈັດການຂໍ້ມູນທີ່ມີຄວາມຊັບຊ້ອນໃຫ້ເບິ່ງງ່າຍ ແລະ ສາມາດວິເຄາະໄດ້ດີຫຼາຍ! ຈື່ຈຳວິທີການປ່ຽນສ່ວນຮ້ອຍໃຫ້ເປັນເລກທົດສະນິຍົມ (ຕົວຢ່າງ 40% = 0.4) ຈະຊ່ວຍໃຫ້ຄິດໄລ່ໄດ້ໄວຂຶ້ນ.",
  },
};
