import React from "react";
import { UnitData } from "../units2";
import {
  ItemGrid,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  NumberLine,
  NumberCards,
  TapeDiagram,
  Shape,
} from "@/components/illustrations";

export const unit9Data: UnitData = {
    
    unitNumber: 9,
    unitTitle: "ວິທີຊັ່ງ ແລະ ຫົວໜ່ວຍຂອງນ້ຳໜັກ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກນ້ຳໜັກ kg, g",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 ກິໂລກຣາມ (kg) = 1000 ກຣາມ (g)" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"9. ວິທີຊັ່ງ ແລະ ຫົວໜ່ວຍຂອງນ້ຳໜັກ (kg, g)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ພວກເຮົາໃຊ້ນ້ຳໜັກເພື່ອບອກວ່າສິ່ງຂອງໜັກເທົ່າໃດ. ຫົວໜ່ວຍທີ່ໃຊ້ຫຼາຍແມ່ນ ກິໂລກຣາມ (kg) ແລະ ກຣາມ (g)."
            }
          </p>
          <div
            style={{
              backgroundColor: "#FCE4EC",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "10px" }}>{"⚖️"}</div>
            <div
              style={{ fontSize: "28px", fontWeight: "bold", color: "#E91E63" }}
            >
              {"1 kg = 1000 g"}
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກເປັນກຣາມ (g): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(1)"}
                </span>
                <span>{"1 kg ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(2)"}
                </span>
                <span>{"2 kg ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(3)"}
                </span>
                <span>{"1000 g ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"kg"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(4)"}
                </span>
                <span>{"5000 g ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"kg"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(5)"}
                </span>
                <span>{"1 kg ເຄິ່ງ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການລວມນ້ຳໜັກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" , whiteSpace: "nowrap"}}>
                  {
                    "ໝາກໂມໜ່ວຍໜຶ່ງໜັກ 2 kg, ໝາກຫຸ່ງໜ່ວຍໜຶ່ງໜັກ 500 g. ທັງສອງໜ່ວຍລວມກັນໜັກເທົ່າໃດ g?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "8px",
                    paddingLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                      margin: "0 10px",
                    }}
                  ></span>
                  <span>{"g"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການລົບນ້ຳໜັກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" , whiteSpace: "nowrap"}}>
                  {"ຊີ້ນໝູ 1 kg. ຖ້າແບ່ງອອກໄປ 300 g ຈະເຫຼືອຊີ້ນໝູເທົ່າໃດ g?"}
                </span>
                <div
                  style={{
                    marginTop: "8px",
                    paddingLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                      margin: "0 10px",
                    }}
                  ></span>
                  <span>{"g"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນກຣາມ (g) ກ່ອນແລ້ວຈຶ່ງບວກ ຫຼື ລົບເດີ. (1 kg = 1000 g)",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                {" 3 kg = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" g"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                {" 4000 g = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" kg"}
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
              {"ທົດສອບປະຈຳບົດ: ນ້ຳໜັກປະສົມ ແລະ ການເລືອກຫົວໜ່ວຍ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                {" 1 kg 200 g = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" g"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                {" ນ້ຳໜັກຄົນເຮົາຄວນໃຊ້ຫົວໜ່ວຍອັນໃດ? (kg ຫຼື g) = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
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
            <span key="1">{"(1) 3000 g, (2) 4 kg, (3) 1200 g, (4) kg"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 2500 g, (2) 700 g"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3000 g, (2) 4 kg, (3) 1200 g, (4) kg"}</span>,
          ],
        },
      ],
      advice:
        "ເວັບຊັ່ງນ້ຳໜັກເຄື່ອງຢູ່ຕະຫຼາດ ແມ່ຄ້າຈະມັກໃຊ້ 'ກິໂລ' (kg) ແລະ 'ຂີດ'. (1 ຂີດ = 100 g)",
    },
  };
