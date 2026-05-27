import React from "react";
import { UnitData } from "../units2";

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ຄ່າສະເລ່ຍ",
  unitGoal:
    "ຮຽນຮູ້ຄວາມໝາຍຂອງຄ່າສະເລ່ຍ, ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (ຜົນບວກທັງໝົດ ÷ ຈຳນວນ) ແລະ ການນຳໃຊ້ໃນຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 70-75",
  keyPoints: {
    hint: {
      text: "ຄ່າສະເລ່ຍແມ່ນການແບ່ງປັນໃຫ້ເທົ່າໆກັນ! ຈື່ສູດ: ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນເດີ້!",
    },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ສູດຄິດໄລ່ຄ່າສະເລ່ຍ (Average Formula)"}
        </h3>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#E3F2FD",
            border: "2px solid #2196F3",
            borderRadius: "8px",
            fontSize: "22px",
          }}
        >
          <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
            {"ຄ່າສະເລ່ຍ = ຜົນບວກທັງໝົດ ÷ ຈຳນວນ"}
          </p>
          <div style={{ color: "#0D47A1", fontSize: "22px" }}>
            {"ຕົວຢ່າງ: ຄະແນນສອບເສັງ 3 ຄັ້ງແມ່ນ 80, 90, 70. ຄ່າສະເລ່ຍແມ່ນ:"}
            <div
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "6px",
              }}
            >
              {"(80 + 90 + 70) ÷ 3 = 240 ÷ 3 = 80 (ຄະແນນ)"}
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
            {"ຈົ່ງຊອກຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຄະແນນສອບເສັງ 4 ວິຊາ: 80, 90, 75, 85. ຄ່າສະເລ່ຍແມ່ນ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຄະແນນ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຈຳນວນປຶ້ມທີ່ນັກຮຽນ 5 ຄົນອ່ານ: 3 ຫົວ, 5 ຫົວ, 2 ຫົວ, 6 ຫົວ, 4 ຫົວ. ຄ່າສະເລ່ຍແມ່ນ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຫົວ"}</span>
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
            {"ຈົ່ງຄິດໄລ່ຄ່າຍ້ອນກັບ ແລະ ຄວາມສຳພັນຄ່າສະເລ່ຍ: "}{" "}
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
              <span>{"(1) ຖ້ານ້ຳໜັກສະເລ່ຍຂອງນັກຮຽນ 5 ຄົນແມ່ນ 36 kg. ນ້ຳໜັກລວມທັງໝົດແມ່ນຈັກ kg?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"kg"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ໃນ 4 ວັນ ທ້າວ ສີຫາ ຖອກນ້ຳໃສ່ຖັງ ວັນລະ 1.5 L ເທົ່າໆກັນ. ປະລິມານນ້ຳສະເລ່ຍຕໍ່ວັນແມ່ນຈັກ L?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"L"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "👣 ໃຊ້ຄ່າສະເລ່ຍຊອກຫາໄລຍະທາງ! ເອົາຄວາມຍາວບາດກ້າວສະເລ່ຍ ຄູນໃຫ້ຈຳນວນບາດກ້າວ, ສ່ວນການຫາຄ່າສະເລ່ຍໃໝ່ໃຫ້ເອົານ້ຳໜັກລວມທັງໝົດ 5 ຄົນ ຫານໃຫ້ 5 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງຈາກບາດກ້າວ: "}{" "}
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
                {"🚶 ທ້າວ ສົມພອນ ຍ່າງ 10 ບາດກ້າວ ໄດ້ໄລຍະທາງສະເລ່ຍແມ່ນ 6.4 m. ຖ້າລາວຍ່າງ 500 ບາດກ້າວ ຈະໄດ້ໄລຍະທາງທັງໝົດປະມານຈັກແມັດ?"}
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
                <span>{"m"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫານ້ຳໜັກສະເລ່ຍໃໝ່: "}{" "}
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
                {"⚖️ ນັກຮຽນ 4 ຄົນ ມີນ້ຳໜັກສະເລ່ຍແມ່ນ 32 kg. ຖ້າມີນັກຮຽນອີກ 1 ຄົນ ທີ່ມີນ້ຳໜັກ 42 kg ເຂົ້າມາຕື່ມ, ນ້ຳໜັກສະເລ່ຍຂອງທັງໝົດ 5 ຄົນ ຈະແມ່ນຈັກ kg?"}
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
                <span>{"kg"}</span>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "10px",
              fontSize: "20px",
              padding: "4px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຄ່າສະເລ່ຍຂອງຈຳນວນ 12, 18, 15 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span>{"(2) ຄ່າສະເລ່ຍຂອງຈຳນວນ 3.5, 4.2, 4.3 ແມ່ນ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span>{"(3) ປະລິມານນ້ຳສະເລ່ຍໃນຈອກ 3 ໃບ ທີ່ມີນ້ຳ 150 mL, 250 mL, 200 mL ແມ່ນ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"mL"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "10px",
              fontSize: "20px",
              padding: "4px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span>{"(1) ຖ້າລວງສູງສະເລ່ຍຂອງນັກຮຽນ 5 ຄົນແມ່ນ 140 cm, ລວງສູງລວມທັງໝົດແມ່ນຈັກ cm?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span>{"(2) 🐔 ແມ່ຄ້າເກັບໄຂ່ໄກ່ໄດ້ 5 ວັນ: ວັນຈັນ 24 ຟອງ, ວັນອັງຄານ 30 ຟອງ, ວັນພຸດ 25 ຟອງ, ວັນພະຫັດ 28 ຟອງ, ວັນສຸກ 23 ຟອງ. ເກັບໄຂ່ໄດ້ສະເລ່ຍວັນລະຈັກຟອງ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ຟອງ"}</span>
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
          <span key="u7-ans-1-1">{"(1) 82.5 ຄະແນນ (ຍ້ອນ (80+90+75+85) ÷ 4 = 82.5)"}</span>,
          <span key="u7-ans-1-2">{"(2) 4 ຫົວ (ຍ້ອນ (3+5+2+6+4) ÷ 5 = 4)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u7-ans-2-1">{"(1) 180 kg (ຍ້ອນ 36 × 5 = 180)"}</span>,
          <span key="u7-ans-2-2">{"(2) 1.5 L"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u7-ans-t1-1">{"(1) 320 m (ຍ້ອນ ບາດກ້າວລະ 6.4 ÷ 10 = 0.64 m, ແລະ 0.64 × 500 = 320)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u7-ans-t2-1">{"(1) 34 kg (ຍ້ອນ ນ້ຳໜັກລວມ 5 ຄົນແມ່ນ (32 × 4) + 42 = 170 kg, ແລະ 170 ÷ 5 = 34)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u7-ans-s1-1">{"(1) 15 (ຍ້ອນ (12+18+15) ÷ 3 = 15)"}</span>,
          <span key="u7-ans-s1-2">{"(2) 4 (ຍ້ອນ (3.5+4.2+4.3) ÷ 3 = 4)"}</span>,
          <span key="u7-ans-s1-3">{"(3) 200 mL (ຍ້ອນ (150+250+200) ÷ 3 = 200)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u7-ans-s2-1">{"(1) 700 cm (ຍ້ອນ 140 × 5 = 700)"}</span>,
          <span key="u7-ans-s2-2">{"(2) 26 ຟອງ (ຍ້ອນ (24+30+25+28+23) ÷ 5 = 26)"}</span>,
        ],
      },
    ],
    advice:
      "ຄ່າສະເລ່ຍຊ່ວຍໃຫ້ເຮົາຄາດຄະເນ ແລະ ເຫັນພາບລວມຂອງຂໍ້ມູນໄດ້ດີຫຼາຍ! ຢ່າລືມບວກຂໍ້ມູນທັງໝົດກ່ອນ ແລ້ວຈຶ່ງຫານໃຫ້ຈຳນວນຂໍ້ມູນເດີ້.",
  },
};
