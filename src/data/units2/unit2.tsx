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

export const unit2Data: UnitData = {
    
    unitNumber: 2,
    unitTitle: "ການບວກຈໍານວນທີ່ມີ 2 ຕົວເລກ",
    unitGoal: "ຮຽນຮູ້ວິທີການຕັ້ງບັ້ງເລກບວກ ແລະ ການບວກທີ່ມີຈື່",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 12〜23",
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
            {"ເວລາຕັ້ງບັ້ງເລກບວກ ຕ້ອງປະຕິບັດຕາມນີ້:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ວາງຫຼັກໃຫ້ຊື່ກັນ:"}</strong>{" "}
              {
                "ຂຽນຫຼັກຫົວໜ່ວຍໃຫ້ເຊິ່ງຫຼັກຫົວໜ່ວຍ, ຫຼັກຫົວສິບໃຫ້ເຊິ່ງຫຼັກຫົວສິບ."
              }
            </li>
            <li>
              <strong>{"ເລີ່ມບວກຈາກຂວາໄປຊ້າຍ:"}</strong>{" "}
              {"ໃຫ້ບວກຫຼັກຫົວໜ່ວຍກ່ອນ, ແລ້ວຈຶ່ງບວກຫຼັກຫົວສິບ."}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              margin: "24px 0",
              fontSize: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 1"}
              </p>
              <VerticalMath
                top={25}
                bottom={14}
                operator="+"
                showAnswer={true}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 2 (ມີຈື່)"}
              </p>
              <VerticalMath
                top={38}
                bottom={27}
                operator="+"
                showAnswer={true}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາຂຽນຄຳຕອບ ຢ່າລືມຂຽນໃຫ້ຊື່ກັບຫຼັກຂອງມັນເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (1)
                </span>{" "}
                <VerticalMath top={24} bottom={15} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (2)
                </span>{" "}
                <VerticalMath top={42} bottom={15} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (3)
                </span>{" "}
                <VerticalMath top={35} bottom={23} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (4)
                </span>{" "}
                <VerticalMath top={51} bottom={27} operator="+" />
              </div>
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
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີໝາກກ້ຽງ 23 ໜ່ວຍ ແລະ ໝາກແອັບເປິ້ນ 15 ໜ່ວຍ. ລວມມີໝາກໄມ້ທັງໝົດຈັກໜ່ວຍ?"
              }
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ໜ່ວຍ "}{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
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
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ມີປຶ້ມຂຽນ 12 ຫົວ ແລະ ປຶ້ມແບບຮຽນ 25 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ?"}
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ຫົວ "}{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
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
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ບວກແບບມີຈື່): "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                    (1)
                  </span>{" "}
                  <VerticalMath top={46} bottom={38} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                    (2)
                  </span>{" "}
                  <VerticalMath top={57} bottom={36} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                    (3)
                  </span>{" "}
                  <VerticalMath top={29} bottom={62} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                    (4)
                  </span>{" "}
                  <VerticalMath top={68} bottom={28} operator="+" />
                </div>
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
                gap: "12px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ມີນັກຮຽນ 28 ຄົນ ຢູ່ໃນຫ້ອງຮຽນ, ມີນັກຮຽນເຂົ້າມາຕື່ມອີກ 15 ຄົນ. ຈະມີນັກຮຽນທັງໝົດຈັກຄົນ?"
                }
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {"ຄົນ "}{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ເວລາຕັ້ງບັ້ງເລກ ຢ່າລືມວາງຫຼັກໃຫ້ຊື່ກັນເດີ! ຖ້າບວກຫຼັກຫົວໜ່ວຍກາຍ 10 ຕ້ອງຈື່ 1 ໃສ່ຫຼັກຫົວສິບ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "16px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (1)
                </span>{" "}
                <VerticalMath top={34} bottom={12} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (2)
                </span>{" "}
                <VerticalMath top={60} bottom={28} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (3)
                </span>{" "}
                <VerticalMath top={47} bottom={25} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  (4)
                </span>{" "}
                <VerticalMath top={8} bottom={91} operator="+" />
              </div>
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
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີດອກໄມ້ສີແດງ 15 ດອກ ແລະ ສີເຫຼືອງ 20 ດອກ. ລວມມີດອກໄມ້ທັງໝົດຈັກດອກ?"
              }
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ດອກ "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
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
            <span key="1">{"(1) 39"}</span>,
            <span key="2">{"(2) 57"}</span>,
            <span key="3">{"(3) 58"}</span>,
            <span key="4">{"(4) 78"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="5">{"ປະໂຫຍກສັນຍະລັກ: 23+15=38, ຕອບ: 38 ໜ່ວຍ"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="6">{"ປະໂຫຍກສັນຍະລັກ: 12+25=37, ຕອບ: 37 ຫົວ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="7">{"(1) 84"}</span>,
            <span key="8">{"(2) 93"}</span>,
            <span key="9">{"(3) 91"}</span>,
            <span key="10">{"(4) 96"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="11">{"ປະໂຫຍກສັນຍະລັກ: 28+15=43, ຕອບ: 43 ຄົນ"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="s1">{"(1) 46, (2) 88, (3) 72, (4) 99"}</span>,
            <span key="s2">{"ປະໂຫຍກສັນຍະລັກ: 15+20=35, ຕອບ: 35 ດອກ"}</span>,
          ],
        },
      ],
      advice:
        "ເວລາຕັ້ງບັ້ງເລກ, ຕ້ອງຂຽນຫຼັກຫົວໜ່ວຍໃຫ້ເຊິ່ງຫຼັກຫົວໜ່ວຍ ແລະ ເລີ່ມບວກຈາກຂວາໄປຊ້າຍສະເໝີ! ຖ້າບວກຫຼັກຫົວໜ່ວຍກາຍ 10 ຕ້ອງຈື່ 1 ໃສ່ຫຼັກຫົວສິບ.",
    },
  };
