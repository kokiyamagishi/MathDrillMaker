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

export const unit9Data: UnitData = {
    
    unitNumber: 9,
    unitTitle: "ການບວກ ແລະ ການລົບ (ຈໍານວນ 3 ຕົວເລກ)",
    unitGoal: "ຮຽນຮູ້ວິທີບວກ ແລະ ລົບຈໍານວນ 3 ຕົວເລກ ຕາມທາງຕັ້ງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 90〜107",
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
            {"ການບວກ-ລົບ ຈໍານວນ 3 ຕົວເລກ ແມ່ນຄິດໄລ່ຕາມແຕ່ລະຫຼັກ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຂຽນຫຼັກໃຫ້ຊື່ກັນ:"}</strong>{" "}
              {"ຫຼັກຫົວໜ່ວຍ, ຫຼັກຫົວສິບ, ຫຼັກຫົວຮ້ອຍ"}
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ເລີ່ມຈາກຂວາໄປຊ້າຍ:"}</strong>{" "}
              {"ບວກ/ລົບ ຫຼັກຫົວໜ່ວຍກ່ອນ → ຫຼັກຫົວສິບ → ຫຼັກຫົວຮ້ອຍ"}
            </li>
            <li>
              <strong>{"ຖ້າກາຍ 10 ຕ້ອງຈື່, ຖ້າລົບບໍ່ພໍ ຕ້ອງຍືມ"}</strong>
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
                {"ຕົວຢ່າງ ບວກ"}
              </p>
              <VerticalMath
                top={256}
                bottom={38}
                operator="+"
                showAnswer={true}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ ລົບ"}
              </p>
              <VerticalMath
                top={543}
                bottom={261}
                operator="-"
                showAnswer={true}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເຖິງວ່າຈະເປັນຈໍານວນ 3 ຫຼັກ, ແຕ່ກໍຄິດໄລ່ຕາມແຕ່ລະຫຼັກຄືເດີມ! ຈື່ວ່າ ເລີ່ມຈາກຫຼັກຫົວໜ່ວຍ (ຂວາ) ກ່ອນ.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ການບວກ): "}{" "}
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
                <VerticalMath top={121} bottom={67} operator="+" />
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
                <VerticalMath top={348} bottom={26} operator="+" />
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
                <VerticalMath top={513} bottom={72} operator="+" />
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
                <VerticalMath top={225} bottom={6} operator="+" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <>
            <p style={{ marginBottom: "12px", marginTop: "16px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ການລົບ): "}{" "}
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
                <VerticalMath top={468} bottom={35} operator="-" />
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
                <VerticalMath top={730} bottom={418} operator="-" />
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
                <VerticalMath top={952} bottom={647} operator="-" />
              </div>
            </div>
          </>
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
              marginTop: "16px",
            }}
          >
            <p>
              {
                "ໃນຫ້ອງສະໝຸດມີປຶ້ມແບບຮຽນ 256 ຫົວ ແລະ ປຶ້ມເລື່ອງ 38 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ຫົວ"}
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
                {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ມີຈື່/ຍືມ): "}{" "}
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
                  <VerticalMath top={138} bottom={42} operator="+" />
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
                  <VerticalMath top={59} bottom={531} operator="+" />
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
                  <VerticalMath top={385} bottom={247} operator="-" />
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
                  <VerticalMath top={600} bottom={358} operator="-" />
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
                marginTop: "16px",
              }}
            >
              <p>
                {
                  "ໂຮງຮຽນມີນັກຮຽນ 435 ຄົນ. ນັກຮຽນຊາຍມີ 218 ຄົນ. ນັກຮຽນຍິງມີຈັກຄົນ? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ຄົນ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ເວລາຕັ້ງບັ້ງເລກ 3 ຫຼັກ, ໃຫ້ຂຽນຫຼັກໃຫ້ຊື່ກັນ ແລ້ວຄິດໄລ່ທີລະຫຼັກຈາກຂວາໄປຊ້າຍ!",
    },
    summaryProblems: [
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
                <VerticalMath top={345} bottom={123} operator="+" />
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
                <VerticalMath top={467} bottom={285} operator="+" />
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
                <VerticalMath top={876} bottom={543} operator="-" />
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
                <VerticalMath top={703} bottom={456} operator="-" />
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
              marginTop: "16px",
            }}
          >
            <p>
              {
                "ໃນໂຮງງານມີສິນຄ້າ 860 ຊິ້ນ, ຂາຍໄປ 375 ຊິ້ນ. ຍັງເຫຼືອສິນຄ້າຈັກຊິ້ນ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ຊິ້ນ"}
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
              marginTop: "16px",
            }}
          >
            <p>
              {
                "ມີເຂົ້າໜຽວ 425 kg ແລະ ເຂົ້າຈ້າວ 318 kg. ລວມມີເຂົ້າທັງໝົດຈັກ kg? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" kg"}
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
            <span key="u9-1">{"(1) 188"}</span>,
            <span key="u9-2">{"(2) 374"}</span>,
            <span key="u9-3">{"(3) 585"}</span>,
            <span key="u9-4">{"(4) 231"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u9-5">{"(1) 433"}</span>,
            <span key="u9-6">{"(2) 312"}</span>,
            <span key="u9-7">{"(3) 305"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [<span key="u9-8">{"256 + 38 = 294, ຕອບ: 294 ຫົວ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u9-9">{"(1) 180"}</span>,
            <span key="u9-10">{"(2) 590"}</span>,
            <span key="u9-11">{"(3) 138"}</span>,
            <span key="u9-12">{"(4) 242"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u9-13">{"435 − 218 = 217, ຕອບ: 217 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 9",
          answers: [
            <span key="u9-s1">
              {"ຂໍ້ 1: (1) 468, (2) 752, (3) 333, (4) 247"}
            </span>,
            <span key="u9-s2">{"ຂໍ້ 2: 860 − 375 = 485, ຕອບ: 485 ຊິ້ນ"}</span>,
            <span key="u9-s3">{"ຂໍ້ 3: 425 + 318 = 743, ຕອບ: 743 kg"}</span>,
          ],
        },
      ],
      advice:
        "ຈໍານວນ 3 ຫຼັກ ກໍຄິດໄລ່ຕາມແຕ່ລະຫຼັກຄືກັນ! ຂຽນຫຼັກໃຫ້ຊື່ກັນ, ເລີ່ມຈາກຂວາໄປຊ້າຍ. ຖ້າບວກກາຍ 10 ຕ້ອງຈື່, ຖ້າລົບບໍ່ພໍ ຕ້ອງຍືມ!",
    },
  };
