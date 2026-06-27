import React from "react";
import { UnitData } from "../units2";
import {
  FruitGraph,
  AnimalTable,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  Shape,
  TapeDiagram,
  LaoBanknote,
} from "@/components/illustrations";

export const unit5Data: UnitData = {
    
    unitNumber: 5,
    unitTitle: "ຈຳນວນທີ່ມີ 3 ຕົວເລກ",
    unitGoal:
      "ຮຽນຮູ້ຈຳນວນ 3 ຫຼັກ, ການອ່ານ-ຂຽນ, ການປຽບທຽບ ແລະ ການຄິດໄລ່ຫົວສິບ ແລະ ຫົວຮ້ອຍ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 48〜67",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ຈຳນວນທີ່ມີ 3 ຕົວເລກ ປະກອບດ້ວຍ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຫຼັກຫົວຮ້ອຍ:"}</strong>{" "}
              {"ບອກຈຳນວນຂອງ 100 (ເຊັ່ນ: 3 ແມ່ນ 300)"}
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຫຼັກຫົວສິບ:"}</strong>{" "}
              {"ບອກຈຳນວນຂອງ 10 (ເຊັ່ນ: 5 ແມ່ນ 50)"}
            </li>
            <li>
              <strong>{"ຫຼັກຫົວໜ່ວຍ:"}</strong>{" "}
              {"ບອກຈຳນວນຂອງ 1 (ເຊັ່ນ: 7 ແມ່ນ 7)"}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              marginTop: "16px",
              fontSize: "16px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              {"ຕົວຢ່າງ: ຈຳນວນ 357"}
            </p>
            <PlaceValueTable hundreds={3} tens={5} ones={7} showAnswer={true} />
            <p
              style={{
                textAlign: "center",
                color: "#E53935",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {"357 = 300 + 50 + 7"}
            </p>
            <div style={{ marginTop: "8px", fontSize: "16px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "4px",
                  fontSize: "16px",
                }}
              >
                {"CNການປຽບທຽບຈຳນວນ:"}
              </p>
              <p style={{ textAlign: "center", fontSize: "16px" }}>
                {"325 "}
                <strong style={{ color: "#E53935" }}>{"<"}</strong>
                {" 413 (ເພາະ 3 < 4 ທີ່ຫຼັກຫົວຮ້ອຍ)"}
              </p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາປຽບທຽບຈຳນວນ, ໃຫ້ເລີ່ມຈາກຫຼັກທີ່ຫຼາຍສຸດກ່ອນເດີ! ຖ້າຫຼັກຫົວຮ້ອຍເທົ່າກັນ ກໍເບິ່ງຫຼັກຫົວສິບຕໍ່.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 100 ມີ 4 ບັດ, 10 ມີ 8 ບັດ, 1 ມີ 5 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) 100 ມີ 5 ບັດ, 1 ມີ 7 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 321 = 100 ມີ "} <span className="answer-blank"></span>{" "}
                {" ບັດ, 10 ມີ "} <span className="answer-blank"></span>{" "}
                {" ບັດ, 1 ມີ "} <span className="answer-blank"></span> {" ບັດ"}
              </p>
              <p>
                {"(4) 630 = 100 ມີ "} <span className="answer-blank"></span>{" "}
                {" ບັດ, 10 ມີ "} <span className="answer-blank"></span> {" ບັດ"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຂຽນຕົວເລກໃສ່ຫຼັກຫົວຮ້ອຍ, ຫຼັກຫົວສິບ ແລະ ຫຼັກຫົວໜ່ວຍ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "4px", fontWeight: "bold" }}>
                  {"(1) 256"}
                </p>
                <PlaceValueTable
                  hundreds={2}
                  tens={5}
                  ones={6}
                  hideHundreds={true}
                  hideTens={true}
                  hideOnes={true}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "4px", fontWeight: "bold" }}>
                  {"(2) 709"}
                </p>
                <PlaceValueTable
                  hundreds={7}
                  tens={0}
                  ones={9}
                  hideHundreds={true}
                  hideTens={true}
                  hideOnes={true}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "4px", fontWeight: "bold" }}>
                  {"(3) 840"}
                </p>
                <PlaceValueTable
                  hundreds={8}
                  tens={4}
                  ones={0}
                  hideHundreds={true}
                  hideTens={true}
                  hideOnes={true}
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) ຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ທີ່ມີ 21 ບັດແມ່ນ "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) ຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ທີ່ມີ 48 ບັດແມ່ນ "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 230 ແມ່ນຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ຈັກ "}{" "}
                <span className="answer-blank"></span> {" ບັດ"}
              </p>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p>
                  {"(1) 30 + 80 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(2) 70 + 60 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(3) 150 − 90 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(4) 400 + 400 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(5) 100 + 500 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(6) 1000 − 600 = "} <span className="answer-blank"></span>
                </p>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນ "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "18px",
                    verticalAlign: "middle",
                  }}
                ></span>{" "}
                {" ໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <p>
                  {"(1) 789 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 879"}
                </p>
                <p>
                  {"(2) 817 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 808"}
                </p>
                <p>
                  {"(3) 500 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 300 + 400"}
                </p>
                <p>
                  {"(4) 1000 − 400 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 600"}
                </p>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ເວລາປຽບທຽບຈຳນວນ, ໃຫ້ເລີ່ມຈາກຫຼັກທີ່ຫຼາຍສຸດກ່ອນ! ຖ້າຫຼັກຫົວຮ້ອຍເທົ່າກັນ ກໍເບິ່ງຫຼັກຫົວສິບຕໍ່.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 100 ມີ 7 ບັດ, 10 ມີ 3 ບັດ, 1 ມີ 9 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) 100 ມີ 6 ບັດ, 10 ມີ 2 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 460 ແມ່ນຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ຈັກ "}{" "}
                <span className="answer-blank"></span> {" ບັດ"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 40 + 90 = "} <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) 500 + 200 = "} <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 1000 − 100 = "} <span className="answer-blank"></span>
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "18px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {" ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 349 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 351"}
              </p>
              <p>
                {"(2) 607 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 518"}
              </p>
              <p>
                {"(3) 900 + 700 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 200"}
              </p>
              <p>
                {"(4) 160 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 80 + 90"}
              </p>
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
            <span key="u5-1">{"(1) 485"}</span>,
            <span key="u5-2">{"(2) 507"}</span>,
            <span key="u5-3">{"(3) 3 ບັດ, 2 ບັດ, 1 ບັດ"}</span>,
            <span key="u5-4">{"(4) 6 ບັດ, 3 ບັດ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u5-5">{"(1) 2, 5, 6"}</span>,
            <span key="u5-6">{"(2) 7, 0, 9"}</span>,
            <span key="u5-7">{"(3) 8, 4, 0"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="u5-8">{"(1) 210"}</span>,
            <span key="u5-9">{"(2) 480"}</span>,
            <span key="u5-10">{"(3) 23 ບັດ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u5-11">{"(1) 110"}</span>,
            <span key="u5-12">{"(2) 130"}</span>,
            <span key="u5-13">{"(3) 60"}</span>,
            <span key="u5-14">{"(4) 800"}</span>,
            <span key="u5-15">{"(5) 600"}</span>,
            <span key="u5-16">{"(6) 400"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u5-17">{"(1) <"}</span>,
            <span key="u5-18">{"(2) >"}</span>,
            <span key="u5-19">{"(3) < (500 < 700)"}</span>,
            <span key="u5-20">{"(4) = (600 = 600)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 5",
          answers: [
            <span key="u5-s1">{"ຂໍ້ 1: (1) 739, (2) 620, (3) 46 ບັດ"}</span>,
            <span key="u5-s2">{"ຂໍ້ 2: (1) 130, (2) 700, (3) 900"}</span>,
            <span key="u5-s3">
              {"ຂໍ້ 3: (1) <, (2) >, (3) >, (4) < (160 < 170)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຈຳນວນ 3 ຫຼັກ ປະກອບດ້ວຍຫຼັກຫົວຮ້ອຍ, ຫຼັກຫົວສິບ ແລະ ຫຼັກຫົວໜ່ວຍ. ເວລາປຽບທຽບຈຳນວນ ໃຫ້ເລີ່ມຈາກຫຼັກທີ່ຫຼາຍສຸດກ່ອນເດີ!",
    },
  };
