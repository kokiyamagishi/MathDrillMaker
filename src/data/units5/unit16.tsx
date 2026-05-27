import React from "react";
import { UnitData } from "../units2";

export const unit16Data: UnitData = {
    unitNumber: 16,
    unitTitle: "ລະບົບຫົວໜ່ວຍວັດແທກສາກົນ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍວັດແທກຄວາມຍາວ, ເນື້ອທີ່, ບໍລິມາດ ແລະ ນ້ຳໜັກໃນລະບົບເມດ (Metre System)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 184-189",
    keyPoints: {
      hint: {
        text: "ລະບົບຫົວໜ່ວຍເມດໃຊ້ຫຼັກສິບ! ເມື່ອເພີ່ມຂຶ້ນ 10 ເທື່ອ, 100 ເທື່ອ ຈະມີການປ່ຽນຫົວໜ່ວຍທີ່ເປັນລະບົບສະໝໍ່າສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ລະບົບຫົວໜ່ວຍວັດແທກ (System of Units)"}
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
              <strong>{"• ຄວາມຍາວ (Length):"}</strong>
              {" 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm"}
            </div>
            <div>
              <strong>{"• ເນື້ອທີ່ (Area):"}</strong>
              {" 1 ha = 10,000 m², 1 a = 100 m²"}
            </div>
            <div>
              <strong>{"• ນ້ຳໜັກ (Weight):"}</strong>
              {" 1 t (ໂຕນ) = 1,000 kg, 1 kg = 1,000 g"}
            </div>
            <div>
              <strong>{"• ບໍລິມາດ (Volume):"}</strong>
              {" 1 L = 1,000 mL = 1,000 cm³"}
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
              {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ: "}{" "}
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
                <span>{"(1) 1.5 kg ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) 1.5 m ="}</span>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(3) 2.5 L ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{"mL"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(4) 3 ha ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
      hintText: "⚖️ ປ່ຽນຫົວໜ່ວຍທັງໝົດໃຫ້ເປັນ kg ກ່ອນ ແລ້ວຈຶ່ງເອົາມາບວກກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ: "}{" "}
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
                    "📦 ແມ່ຊື້ໝາກກ້ຽງ 1.5 kg ແລະ ໝາກມ່ວງ 800 g. ໝາກໄມ້ທັງໝົດທີ່ແມ່ຊື້ມີນ້ຳໜັກລວມກັນຈັກ kg?"
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
                      width: "100px",
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດນ້ຳຕໍ່ໄປນີ້: "}{" "}
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
                  "💧 ຖັງນ້ຳໃບໜຶ່ງມີຄວາມຈຸ 1 m³. ຖ້າມີນ້ຳຢູ່ 400 L, ຈະຕ້ອງເທນ້ຳໃສ່ຕື່ມອີກຈັກ L ຈຶ່ງຈະເຕັມຖັງ?"
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
                <span>{"L"}</span>
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
                "(1) 1500 g, (2) 150 cm, (3) 2500 mL, (4) 30,000 m² (ຍ້ອນ 1 ha = 10,000 m²)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"2.3 kg (ຍ້ອນ 800 g = 0.8 kg, ແລະ 1.5 + 0.8 = 2.3 kg)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"600 L (ຍ້ອນ 1 m³ = 1000 L, 1000 - 400 = 600)"}
            </span>,
          ],
        },
      ],
      advice:
        "ລະບົບຫົວໜ່ວຍສາກົນໃຊ້ການພົວພັນຫຼັກສິບ (10, 100, 1000) ທີ່ສະໝໍ່າສະເໝີຫຼາຍ! ຈື່ຈຳຕາຕະລາງປ່ຽນຫົວໜ່ວຍຈະຊ່ວຍໃຫ້ເຮົາບໍ່ສັບສົນໃນຊີວິດປະຈຳວັນ.",
    },
  };
