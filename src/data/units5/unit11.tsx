import React from "react";
import { UnitData } from "../units2";

export const unit11Data: UnitData = {
    unitNumber: 11,
    unitTitle: "ອັດຕາສ່ວນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນ (a : b), ຄ່າຂອງອັດຕາສ່ວນ (比の値) ແລະ ການຊອກຫາອັດຕາສ່ວນທີ່ເທົ່າກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 126-135",
    keyPoints: {
      hint: {
        text: "ອັດຕາສ່ວນ a : b ປຽບທຽບສອງປະລິມານ! ຄ່າຂອງອັດຕາສ່ວນແມ່ນຊອກໄດ້ຈາກການຫານ a ÷ b ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນ ແລະ ຄ່າຂອງອັດຕາສ່ວນ (Ratio and Value)"}
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
            <p style={{ margin: "0 0 10px 0" }}>{"ອັດຕາສ່ວນແມ່ນ a : b"}</p>
            <p style={{ margin: "0 0 10px 0" }}>
              {"ຄ່າຂອງອັດຕາສ່ວນແມ່ນ a ÷ b (ຫຼື ຂຽນເປັນເລກສ່ວນ a/b)"}
            </p>
            <div
              style={{ fontWeight: "bold", color: "#0D47A1", fontSize: "22px" }}
            >
              {"ຕົວຢ່າງ: 3 : 4 ຈະມີຄ່າແມ່ນ 3 ÷ 4 = 0.75 (ຫຼື 3/4)"}
            </div>
          </div>

          <h3
            style={{ fontSize: "28px", color: "#1976D2", margin: "12px 0 0 0" }}
          >
            {"2. ອັດຕາສ່ວນທີ່ເທົ່າກັນ (Equal Ratios)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.6",
            }}
          >
            {
              "ເຮົາສາມາດຄູນ ຫຼື ຫານທັງສອງເບື້ອງຂອງອັດຕາສ່ວນດ້ວຍຈຳນວນດຽວກັນເພື່ອຫາອັດຕາສ່ວນທີ່ເທົ່າກັນໄດ້."
            }
            <div
              style={{
                fontWeight: "bold",
                color: "#2E7D32",
                fontSize: "22px",
                marginTop: "8px",
              }}
            >
              {"12 : 18 = (12÷6) : (18÷6) = 2 : 3 (ອັດຕາສ່ວນຂັ້ນຕ່ຳ)"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບອັດຕາສ່ວນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
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
                <span>{"(1) ຄ່າຂອງອັດຕາສ່ວນ 3 : 5 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "16px", color: "#888" }}>
                  {"(ຂຽນເປັນເລກທົດສະນິຍົມ)"}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  {"(2) ປ່ຽນອັດຕາສ່ວນ 12 : 18 ໃຫ້ເປັນອັດຕາສ່ວນຂັ້ນຕ່ຳແມ່ນ"}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  {"(3) ຈົ່ງຊອກຫາຄ່າຂອງ x:  2 : 5 = x : 15. ຄ່າຂອງ x ແມ່ນ"}
                </span>
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
      hintText:
        "🥤 ໃຊ້ອັດຕາສ່ວນທີ່ເທົ່າກັນ! ນົມ : ຊາ = 2 : 3, ຖ້າຊາແມ່ນ 150 mL (ເພີ່ມຂຶ້ນ 50 ເທື່ອ) ນົມກໍຕ້ອງເພີ່ມຂຶ້ນ 50 ເທື່ອເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນລຸ່ມນີ້: "}{" "}
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
                  {
                    "🥛 ສູດເຮັດນົມຊາ ຕ້ອງປະສົມນົມ ແລະ ຊາ ໃນອັດຕາສ່ວນ 2 : 3. ຖ້າຕ້ອງການໃຊ້ນ້ຳຊາ 150 mL, ຈະຕ້ອງໃຊ້ນົມຈັກ mL?"
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
                  <span>{"mL"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງປັນສ່ວນຕໍ່ໄປນີ້: "}{" "}
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
                {
                  "🍬 ມີເຂົ້າໜົມ 40 ກ້ອນ, ຕ້ອງການແບ່ງໃຫ້ສອງຄົນໃນອັດຕາສ່ວນ 3 : 5. ຜູ້ທີ່ໄດ້ສ່ວນຫຼາຍກວ່າ ຈະໄດ້ເຂົ້າໜົມຈັກກ້ອນ?"
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
                <span>{"ກ້ອນ"}</span>
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
            <span key="1">
              {
                "(1) 0.6 (3 ÷ 5), (2) 2 : 3 (ຍ້ອນຫານໃຫ້ 6 ທັງສອງເບື້ອງ), (3) 6 (ຍ້ອນ 5 × 3 = 15, ດັ່ງນັ້ນ 2 × 3 = 6)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"100 mL (ຍ້ອນ 150 ÷ 3 = 50, ດັ່ງນັ້ນ 2 × 50 = 100)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "25 ກ້ອນ (ຍ້ອນສ່ວນທັງໝົດແມ່ນ 3 + 5 = 8 ສ່ວນ, ສ່ວນຫຼາຍແມ່ນ 5/8, 40 × 5/8 = 25 ກ້ອນ)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ອັດຕາສ່ວນແມ່ນເຄື່ອງມືທີ່ດີຫຼາຍໃນການປະສົມສິ່ງຂອງ ຫຼື ແບ່ງປັນສິ່ງຂອງໃຫ້ມີຄວາມຍຸດຕິທຳ! ຈື່ວິທີການຫາສ່ວນລວມ (ບວກອັດຕາສ່ວນທັງສອງ) ຈະຊ່ວຍໃຫ້ແກ້ໂຈດໄດ້ງ່າຍ.",
    },
  };
