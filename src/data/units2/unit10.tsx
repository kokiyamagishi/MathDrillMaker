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

export const unit10Data: UnitData = {
    
    unitNumber: 10,
    unitTitle: "ຮູບສາມແຈ ແລະ ຮູບສີ່ແຈ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຮູບສາມແຈ, ຮູບສີ່ແຈ, ມຸມສາກ, ຮູບສີ່ແຈສາກ ແລະ ຮູບຈະຕຸລັດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 108〜119",
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
            {"ຊະນິດຂອງຮູບຕ່າງໆ:"}
          </p>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape type="triangle" width={100} height={100} color="#FFCDD2" />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສາມແຈ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }, whiteSpace: "nowrap"}>
                {"ມີ 3 ຂ້າງ, 3 ແຈ"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="quadrilateral"
                width={100}
                height={100}
                color="#C8E6C9"
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສີ່ແຈ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }, whiteSpace: "nowrap"}>
                {"ມີ 4 ຂ້າງ, 4 ແຈ"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="rightTriangle"
                width={100}
                height={100}
                color="#BBDEFB"
                showRightAngle={true}
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສາມແຈສາກ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }, whiteSpace: "nowrap"}>
                {"ມີ 1 ມຸມສາກ"}
              </span>
            </div>
          </div>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="rectangle"
                width={140}
                height={80}
                color="#FFF9C4"
                showRightAngle={true}
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສີ່ແຈສາກ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }, whiteSpace: "nowrap"}>
                {"4 ມຸມສາກ, ຂ້າງເຊິ່ງໜ້າເທົ່າກັນ"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="square"
                width={100}
                height={100}
                color="#E1BEE7"
                showRightAngle={true}
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບຈະຕຸລັດ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }, whiteSpace: "nowrap"}>
                {"4 ມຸມສາກ, 4 ຂ້າງເທົ່າກັນ"}
              </span>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ຮູບສີ່ແຈສາກ ຈະມີຂ້າງຍາວ ແລະ ຂ້າງສັ້ນ, ສ່ວນຮູບຈະຕຸລັດ ທຸກຂ້າງຈະຍາວເທົ່າກັນໝົດ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງບອກຊື່ຂອງຮູບລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
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
                <Shape type="triangle" color="#F5F5F5" />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(1) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Shape type="square" color="#F5F5F5" showRightAngle={true} />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(2) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Shape
                  type="rectangle"
                  width={120}
                  height={80}
                  color="#F5F5F5"
                  showRightAngle={true}
                />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(3) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Shape
                  type="rightTriangle"
                  color="#F5F5F5"
                  showRightAngle={true}
                />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(4) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
            </div>
          </div>
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
              {"ຮູບສີ່ແຈສາກ ແລະ ຮູບຈະຕຸລັດ ມີຈັກມຸມສາກ? "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ມີ "} <span className="answer-blank"></span> {" ມຸມສາກ"}
            </p>
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
              {"ຮູບສາມແຈ ມີຈັກຂ້າງ ແລະ ຈັກແຈ? "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ມີ "} <span className="answer-blank"></span> {" ຂ້າງ ແລະ "}{" "}
              <span className="answer-blank"></span> {" ແຈ"}
            </p>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງທີ່ເຫຼືອ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "flex",
                  gap: "32px",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      marginBottom: "8px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {"(1) ຮູບສີ່ແຈສາກ"}
                  </p>
                  <Shape
                    type="rectangle"
                    width={160}
                    height={100}
                    color="#FFF"
                    showRightAngle={true}
                    sideLabels={{
                      top: "? cm",
                      bottom: "5 cm",
                      left: "3 cm",
                      right: "? cm",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      marginBottom: "8px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {"(2) ຮູບຈະຕຸລັດ"}
                  </p>
                  <Shape
                    type="square"
                    width={120}
                    height={120}
                    color="#FFF"
                    showRightAngle={true}
                    sideLabels={{
                      top: "4 cm ",
                      bottom: "? cm",
                      left: "? cm",
                      right: "? cm",
                    }}
                  />
                </div>
              </div>
              <div
                className="math-illustration"
                style={{ fontSize: "16px" }}
              >
                <p style={{ fontSize: "16px" }}>
                  {"(1) ຂ້າງເທິງຍາວ = "} <span className="answer-blank"></span>{" "}
                  {" cm, ຂ້າງຊ້າຍຍາວ = "} <span className="answer-blank"></span>{" "}
                  {" cm"}
                </p>
                <p style={{ fontSize: "16px" }}>
                  {"(2) ທຸກຂ້າງຍາວ = "} <span className="answer-blank"></span>{" "}
                  {" cm"}
                </p>
              </div>
            </div>
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
                {
                  "ຖ້າເອົາຮູບສາມແຈສາກ 2 ຮູບທີ່ເທົ່າກັນມາປະກອບເຂົ້າກັນຕາມຂ້າງທີ່ຍາວທີ່ສຸດ, ຈະໄດ້ຮູບຫຍັງ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ຕອບ: ຮູບ "} <span className="answer-blank"></span>
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ຮູບສີ່ແຈສາກ ຂ້າງທີ່ເຊິ່ງໜ້າກັນຈະຍາວເທົ່າກັນ. ຮູບຈະຕຸລັດ ທຸກຂ້າງຈະຍາວເທົ່າກັນ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
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
                {"(1) ຮູບສີ່ແຈ ມີ "} <span className="answer-blank"></span>{" "}
                {" ຂ້າງ."}
              </p>
              <p>
                {"(2) ຮູບສາມແຈ ມີ "} <span className="answer-blank"></span>{" "}
                {" ແຈ."}
              </p>
              <p>
                {"(3) ຮູບຈະຕຸລັດ ມີມຸມສາກ "}{" "}
                <span className="answer-blank"></span> {" ມຸມ."}
              </p>
              <p>
                {"(4) ຮູບສີ່ແຈສາກ ມີຂ້າງທີ່ເຊິ່ງໜ້າກັນຍາວ "}{" "}
                <span className="answer-blank"></span> {" ກັນ."}
              </p>
            </div>
          </div>
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
              {
                "ຮູບສີ່ແຈສາກໜຶ່ງ ມີລວງກວ້າງ 3 cm ແລະ ລວງຍາວ 6 cm. ຜົນບວກຄວາມຍາວຂອງທັງ 4 ຂ້າງ ແມ່ນຈັກ cm? "
              }{" "}
              <span className="point-label">{"(6 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" cm"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u10-1">{"(1) ສາມແຈ"}</span>,
            <span key="u10-2">{"(2) ຈະຕຸລັດ"}</span>,
            <span key="u10-3">{"(3) ສີ່ແຈສາກ"}</span>,
            <span key="u10-4">{"(4) ສາມແຈສາກ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="u10-5">{"ມີ 4 ມຸມສາກ"}</span>],
        },
        {
          questionNumber: 3,
          answers: [<span key="u10-6">{"ມີ 3 ຂ້າງ ແລະ 3 ແຈ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u10-7">{"(1) ຂ້າງເທິງ 5 cm, ຂ້າງຊ້າຍ 3 cm"}</span>,
            <span key="u10-8">{"(2) 4 cm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u10-9">{"ຮູບສີ່ແຈສາກ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 10",
          answers: [
            <span key="u10-s1">{"ຂໍ້ 1: (1) 4, (2) 3, (3) 4, (4) ເທົ່າ"}</span>,
            <span key="u10-s2">{"ຂໍ້ 2: 3 + 6 + 3 + 6 = 18, ຕອບ: 18 cm"}</span>,
          ],
        },
      ],
      advice:
        "ຮູບຈະຕຸລັດ ແລະ ຮູບສີ່ແຈສາກ ລ້ວນແຕ່ມີ 4 ມຸມສາກ! ແຕ່ຈະຕຸລັດ ທຸກຂ້າງຍາວເທົ່າກັນ.",
    },
  };
