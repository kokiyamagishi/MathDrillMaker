import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit15Data: UnitData = {
    
    unitNumber: 15,
    unitTitle: "ປະໂຫຍກສັນຍະລັກທີ່ໃຊ້ຕົວອັກສອນ",
    unitGoal:
      "ຮຽນຮູ້ການນຳໃຊ້ຕົວອັກສອນ (ເຊັ່ນ x, a) ເພື່ອສະແດງເຖິງປະລິມານທີ່ບໍ່ທັນຮູ້ ແລະ ຂຽນເປັນປະໂຫຍກສັນຍະລັກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 138-143",
    keyPoints: {
      hint: {
        text: "ເຮົາສາມາດໃຊ້ຕົວອັກສອນ x ຫຼື a ແທນຈຳນວນທີ່ບໍ່ທັນຮູ້ ເພື່ອເຮັດໃຫ້ການຂຽນສູດ ແລະ ປະໂຫຍກສັນຍະລັກງ່າຍຂຶ້ນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການໃຊ້ຕົວອັກສອນແທນຈຳນວນ"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "0 0 12px 0", fontSize: "22px" }}>
              {
                "ຕົວຢ່າງ: ຊື້ສໍດຳ 1 ກ້ານ ລາຄາ a ກີບ ຈຳນວນ 5 ກ້ານ. ປະໂຫຍກສັນຍະລັກແມ່ນ:"
              }
            </p>
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#0D47A1",
              }}
            >
              {"a × 5 (ກີບ)"}
            </div>
            <p
              style={{ margin: "12px 0 0 0", fontSize: "22px", color: "#555" }}
            >
              {"ຖ້າ a = 500 ກີບ, ລາຄາລວມ ຈະແມ່ນ 500 × 5 = 2500 ກີບ."}
            </p>
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
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຊອກຫາຄຳຕອບ: "}{" "}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(1) ຊື້ປຶ້ມຂຽນ 1 ຫົວ ລາຄາ x ກີບ ຈຳນວນ 6 ຫົວ. ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ:"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(2) ຈາກຂໍ້ (1), ຖ້າ x = 800 ກີບ. ລາຄາລວມທັງໝົດຈະແມ່ນ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ກີບ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(3) ມີເຂົ້າໜົມທັງໝົດ a ກ້ອນ, ກິນໄປແລ້ວ 5 ກ້ອນ. ເຫຼືອເຂົ້າໜົມຈັກກ້ອນ (ຂຽນເປັນສັນຍະລັກ):"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(4) ຈາກຂໍ້ (3), ຖ້າ a = 12. ຈະເຫຼືອເຂົ້າໜົມ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
    challengeProblems: {
      hintText: "📐 ສູດເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານແມ່ນ ພື້ນ × ລວງສູງ ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານ: "}{" "}
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
                <span>
                  {
                    "(1) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນຍາວ a cm ແລະ ລວງສູງ 6 cm. ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່:"
                  }
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "4px",
                  }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "150px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm²"}</span>
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
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຕົວຈິງ: "}{" "}
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
                <span>
                  {
                    "(2) ຈາກຂໍ້ (1), ຖ້າ a = 8 cm. ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານຈະແມ່ນຈັກ cm²?"
                  }
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "4px",
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກຂອງການຊື້ເຄື່ອງ: "}{" "}
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
                  "🍎 ຊື້ໝາກແອບເປິນ 1 ໜ່ວຍ ລາຄາ x ກີບ ຈຳນວນ 4 ໜ່ວຍ ແລະ ໃສ່ກ່ອງຂອງຂວັນລາຄາ 50 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "180px",
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາລາຄາລວມຕົວຈິງ: "}{" "}
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
              <span>
                {
                  "ຖ້າລາຄາໝາກແອບເປິນ 1 ໜ່ວຍແມ່ນ x = 1500 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"
                }
              </span>
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
            <span key="1">
              {
                "(1) x × 6, (2) 4800 ກີບ (800 × 6), (3) a - 5, (4) 7 ກ້ອນ (12 - 5)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"a × 6 (cm²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"48 cm² (ຍ້ອນ 8 × 6 = 48)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"x × 4 + 50 (ຫຼື 4 × x + 50)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="3_2">{"6050 ກີບ (ຍ້ອນ 1500 × 4 + 50 = 6050)"}</span>,
          ],
        },
      ],
      advice:
        "ການໃຊ້ຕົວອັກສອນ x ແລະ a ຊ່ວຍໃຫ້ເຮົາສ້າງສູດທົ່ວໄປໄດ້ງ່າຍ! ເມື່ອເຮົາປ່ຽນຕົວເລກໃສ່ຕົວອັກສອນນັ້ນ ເຮົາກໍຈະໄດ້ຄຳຕອບທັນທີ.",
    },
  };
