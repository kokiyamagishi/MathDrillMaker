import React from "react";
import { UnitData } from "../units2";

export const unit10Data: UnitData = {
    unitNumber: 10,
    unitTitle: "ຮູບຫຼາຍແຈ ແລະ ວົງມົນ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບຫຼາຍແຈສະເໝີ, ຄວາມໝາຍຂອງ円周率 (3.14) ແລະ ສູດຄິດໄລ່ຄວາມຍາວອ້ອມວົງ (圆周)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 110-125",
    keyPoints: {
      hint: {
        text: "ເສັ້ນອ້ອມວົງແມ່ນຄວາມຍາວອ້ອມຮອບວົງມົນ! ຈື່ສູດ: ເສັ້ນອ້ອມວົງ = ເສັ້ນຜ່ານໃຈກາງ × 3.14 ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ເສັ້ນອ້ອມວົງ (Circumference)"}
          </h3>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            <div>
              <strong>{"• ເສັ້ນອ້ອມວົງ = ເສັ້ນຜ່ານໃຈກາງ × 3.14"}</strong>
            </div>
            <div>
              <strong>{"• ເສັ້ນຜ່ານໃຈກາງ = ລັດສະໝີ × 2"}</strong>
            </div>
            <div style={{ fontSize: "22px", color: "#555", marginTop: "8px" }}>
              {
                "* 3.14 ແມ່ນຄ່າປະມານຂອງອັດຕາສ່ວນເສັ້ນອ້ອມວົງຕໍ່ເສັ້ນຜ່ານໃຈກາງ (Pi)."
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄວາມຍາວເສັ້ນອ້ອມວົງຕໍ່ໄປນີ້: "}{" "}
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
                  {"(1) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 10 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(2) ວົງມົນທີ່ມີລັດສະໝີຍາວ 5 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(3) ວົງມົນທີ່ມີລັດສະໝີຍາວ 4 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}
                </span>
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
    ],
    challengeProblems: {
      hintText:
        "📐 ຮູບຫົກແຈສະເໝີ ປະກອບດ້ວຍຮູບສາມແຈສະເໝີ 6 ຮູບທີ່ມີຂະໜາດເທົ່າກັນເດີ້!",
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
                  {
                    "⭐ ຖ້າແຕ້ມຮູບຫົກແຈສະເໝີ ໃສ່ທາງໃນວົງມົນທີ່ມີລັດສະໝີ 5 cm ໂດຍໃຫ້ຈອມຂອງມັນຕິດກັບເສັ້ນອ້ອມວົງມົນ. ຄວາມຍາວອ້ອມຮອບຮູບຫົກແຈສະເໝີນີ້ຈະແມ່ນຈັກ cm?"
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
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
                  "🚴 ລໍ້ລົດຖີບຄັນໜຶ່ງ ມີເສັ້ນຜ່ານໃຈກາງຍາວ 60 cm. ຖ້າລໍ້ລົດຖີບນີ້ປິ່ນໄດ້ 10 ຮອບ, ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ cm?"
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
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 31.4 cm (10 × 3.14), (2) 31.4 cm (5 × 2 × 3.14), (3) 25.12 cm (4 × 2 × 3.14 = 8 × 3.14 = 25.12)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "30 cm (ຍ້ອນຄວາມຍາວຂ້າງຮູບຫົກແຈສະເໝີໃນວົງມົນ ຈະເທົ່າກັບລັດສະໝີ 5 cm ພໍດີ, ດັ່ງນັ້ນ 5 × 6 = 30)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "1,884 cm (ຍ້ອນຄວາມຍາວອ້ອມຮອບ 1 ຮອບແມ່ນ 60 × 3.14 = 188.4 cm, ດັ່ງນັ້ນ 10 ຮອບແມ່ນ 188.4 × 10 = 1,884)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ອັດຕາສ່ວນເສັ້ນອ້ອມວົງຕໍ່ເສັ້ນຜ່ານໃຈກາງແມ່ນຄ່າຄົງທີ່ (3.14)! ຖ້າເຮົາຈື່ສູດນີ້ ຈະສາມາດຄິດໄລ່ໄລຍະທາງຂອງການປິ່ນລໍ້ ຫຼື ສິ່ງມົນໆໄດ້ຢ່າງງ່າຍດາຍ.",
    },
  };
