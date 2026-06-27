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

export const unit3Data: UnitData = {
    
    unitNumber: 3,
    unitTitle: "ການລົບຈໍານວນທີ່ມີ 2 ຕົວເລກ",
    unitGoal: "ຮຽນຮູ້ວິທີການຕັ້ງບັ້ງເລກລົບ ແລະ ການລົບທີ່ມີຍືມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 24〜35",
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
            {"ເວລາຕັ້ງບັ້ງເລກລົບ ຕ້ອງປະຕິບັດຕາມນີ້:"}
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
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ເລີ່ມລົບຈາກຂວາໄປຊ້າຍ:"}</strong>{" "}
              {"ໃຫ້ລົບຫຼັກຫົວໜ່ວຍກ່ອນ, ແລ້ວຈຶ່ງລົບຫຼັກຫົວສິບ."}
            </li>
            <li>
              <strong>{"ຖ້າລົບບໍ່ໄດ້ ຕ້ອງຍືມ:"}</strong>{" "}
              {"ເອົາ 1 ຈາກຫຼັກຫົວສິບມາເປັນ 10 ບວກໃສ່ຫຼັກຫົວໜ່ວຍ."}
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
                top={47}
                bottom={12}
                operator="-"
                showAnswer={true}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 2 (ມີຍືມ)"}
              </p>
              <VerticalMath
                top={42}
                bottom={18}
                operator="-"
                showAnswer={true}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາລົບ, ຖ້າລົບຫຼັກຫົວໜ່ວຍບໍ່ໄດ້ ຢ່າລືມຍືມ 1 ຈາກຫຼັກຫົວສິບເດີ!",
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
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={55} bottom={12} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={78} bottom={48} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={42} bottom={36} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={85} bottom={44} operator="-" />
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
            <p>{"ມີເປັດນ້ຳ 42 ໂຕ, ບິນໜີໄປ 16 ໂຕ. ເປັດນ້ຳຍັງເຫຼືອຈັກໂຕ?"}</p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ໂຕ "}{" "}
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
              {
                "ມີໝາກມ່ວງ 24 ໜ່ວຍ ແລະ ໝາກຫຸ່ງ 32 ໜ່ວຍ. ໝາກໄມ້ຊະນິດໃດຫຼາຍກວ່າ? ຫຼາຍກວ່າເທົ່າໃດ?"
              }
            </p>
            <p>
              {"ຊະນິດທີ່ຫຼາຍກວ່າ: "} <span className="answer-blank"></span>{" "}
              <span className="point-label">{"(1 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ຫຼາຍກວ່າ "} <span className="answer-blank"></span>{" "}
              {"ໜ່ວຍ "} <span className="point-label">{"(1 ຄະແນນ)"}</span>
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
                {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ລົບແບບມີຍືມ): "}{" "}
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
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (1)
                  </span>{" "}
                  <VerticalMath top={75} bottom={28} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (2)
                  </span>{" "}
                  <VerticalMath top={63} bottom={37} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (3)
                  </span>{" "}
                  <VerticalMath top={87} bottom={49} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (4)
                  </span>{" "}
                  <VerticalMath top={50} bottom={36} operator="-" />
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
                  "ການຄິດໄລ່ຕໍ່ໄປນີ້ ຂໍ້ໃດມີຄຳຕອບຜິດ? ມາຊອກຫາຄຳຕອບທີ່ຖືກຕ້ອງ ໂດຍການຄິດໄລ່ກວດຄືນ."
                }
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                    {"ກ"}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-number)",
                      fontSize: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {"56 − 19 = 43"}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                    {"ຂ"}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-number)",
                      fontSize: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {"85 − 12 = 73"}
                  </div>
                </div>
              </div>
              <p>
                {"ຂໍ້ທີ່ຜິດ: "} <span className="answer-blank"></span>{" "}
                <span className="point-label">{"(1 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ຄຳຕອບທີ່ຖືກຕ້ອງ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                <span className="point-label">{"(1 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ການກວດຄືນ (ບວກ): "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ຖ້າລົບຫຼັກຫົວໜ່ວຍບໍ່ໄດ້, ຕ້ອງຍືມ 1 ຈາກຫຼັກຫົວສິບ ແລ້ວບວກ 10 ໃສ່ຫຼັກຫົວໜ່ວຍ!",
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
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={92} bottom={51} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={64} bottom={38} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={80} bottom={45} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={71} bottom={6} operator="-" />
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
              {"ນາງແກ້ວມີເງິນ 95 ກີບ, ຊື້ສໍ 48 ກີບ. ນາງແກ້ວຍັງເຫຼືອເງິນຈັກກີບ?"}
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ກີບ "}{" "}
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
            <span key="1">{"(1) 43"}</span>,
            <span key="2">{"(2) 30"}</span>,
            <span key="3">{"(3) 6"}</span>,
            <span key="4">{"(4) 41"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="5">{"ປະໂຫຍກສັນຍະລັກ: 42−16=26, ຕອບ: 26 ໂຕ"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="6">
              {"ໝາກຫຸ່ງ ຫຼາຍກວ່າ, ປະໂຫຍກສັນຍະລັກ: 32−24=8, ຕອບ: 8 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="7">{"(1) 47"}</span>,
            <span key="8">{"(2) 26"}</span>,
            <span key="9">{"(3) 38"}</span>,
            <span key="10">{"(4) 14"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="11">
              {"ຂໍ້ ກ ຜິດ. ຄຳຕອບທີ່ຖືກ: 56−19=37. ກວດ: 37+19=56 ✓"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 3",
          answers: [
            <span key="s1">{"(1) 41, (2) 26, (3) 35, (4) 65"}</span>,
            <span key="s2">{"ປະໂຫຍກສັນຍະລັກ: 95−48=47, ຕອບ: 47 ກີບ"}</span>,
          ],
        },
      ],
      advice:
        "ເວລາລົບ, ຕ້ອງເລີ່ມຈາກຫຼັກຫົວໜ່ວຍກ່ອນ! ຖ້າລົບບໍ່ໄດ້ ຕ້ອງຍືມ 1 ຈາກຫຼັກຫົວສິບ. ກວດຄືນໂດຍການບວກ: ຄຳຕອບ + ຕົວລົບ = ຕົວຕັ້ງ.",
    },
  };
