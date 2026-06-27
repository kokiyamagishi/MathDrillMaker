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

export const unit8Data: UnitData = {
    
    unitNumber: 8,
    unitTitle: "ຫົວໜ່ວຍ ແລະ ວິທີວັດແທກບໍລິມາດຂອງນໍ້າ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍລິດ (L) ແລະ ມິນລີລິດ (mL) ແລະ ການວັດແທກບໍລິມາດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 82〜89",
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
            {"ຫົວໜ່ວຍບໍລິມາດ (ປະລິມານນໍ້າ):"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ລິດ (L):"}</strong>{" "}
              {"ໃຊ້ສຳລັບບໍລິມາດໃຫຍ່ (ເຊັ່ນ: ນໍ້າໃນຄຸ, ກະຕຸກ)"}
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ມິນລີລິດ (mL):"}</strong>{" "}
              {"ໃຊ້ສຳລັບບໍລິມາດນ້ອຍ (ເຊັ່ນ: ນໍ້າໃນກະປ໋ອງ)"}
            </li>
            <li>
              <strong style={{ color: "#E53935" }}>{"1 L = 1000 mL"}</strong>
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                border: "2px solid #90CAF9",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#E3F2FD",
              }}
            >
              <p style={{ fontSize: "32px", marginBottom: "4px" }}>{"🫗"}</p>
              <p style={{ fontWeight: "bold" }}>{"1 L"}</p>
              <p>{"= 1000 mL"}</p>
            </div>
            <div
              style={{
                border: "2px solid #CE93D8",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#F3E5F5",
              }}
            >
              <p style={{ fontSize: "32px", marginBottom: "4px" }}>{"🥤"}</p>
              <p style={{ fontWeight: "bold" }}>{"500 mL"}</p>
              <p>{"= 0.5 L"}</p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "1 ລິດ ເທົ່າກັບ 1000 ມິນລີລິດ ເດີ! ຖ້າມີ 2 L ແລະ 600 mL ລວມກັນ ແມ່ນ 2 L 600 mL ຫຼື 2600 mL.",
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
                {"(1) 8 L ແມ່ນບໍລິມາດ "} <span className="answer-blank"></span>{" "}
                {" ເທື່ອຂອງ 1 L"}
              </p>
              <p>
                {"(2) 1000 mL = "} <span className="answer-blank"></span> {" L"}
              </p>
              <p>
                {"(3) 3 L = "} <span className="answer-blank"></span> {" mL"}
              </p>
              <p>
                {"(4) 2000 mL = "} <span className="answer-blank"></span> {" L"}
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
              {"ຈົ່ງຂຽນຫົວໜ່ວຍ L ຫຼື mL ທີ່ເໝາະສົມໃສ່ໃນ ( ): "}{" "}
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
                {"(1) ນໍ້າໝາກໄມ້ໃນກະຕຸກ: 450 ( "}{" "}
                <span className="answer-blank"></span> {" )"}
              </p>
              <p>
                {"(2) ນໍ້າໃນຄຸ: 9 ( "} <span className="answer-blank"></span>{" "}
                {" )"}
              </p>
              <p>
                {"(3) ນໍ້າອັດລົມໃນກະປ໋ອງ: 325 ( "}{" "}
                <span className="answer-blank"></span> {" )"}
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
              {
                "ມີກະຕຸກນໍ້າ 2 L ແລະ ກະຕຸກນ້ອຍ 600 mL. ຖ້າເອົາມາລວມກັນ ຈະມີນໍ້າທັງໝົດຈັກ L ຈັກ mL? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" L "}{" "}
              <span className="answer-blank"></span> {" mL"}
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
                {"ຈົ່ງຄິດໄລ່ບໍລິມາດ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                  {"(1) 3 L + 5 L = "} <span className="answer-blank"></span>{" "}
                  {" L"}
                </p>
                <p>
                  {"(2) 400 mL + 600 mL = "}{" "}
                  <span className="answer-blank"></span> {" mL = "}{" "}
                  <span className="answer-blank"></span> {" L"}
                </p>
                <p>
                  {"(3) 5 L − 2 L 300 mL = "}{" "}
                  <span className="answer-blank"></span> {" L "}{" "}
                  <span className="answer-blank"></span> {" mL"}
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
                {
                  "ມີນໍ້າໃນຄຸ 10 L, ໃຊ້ໄປ 3 L 500 mL. ຍັງເຫຼືອນໍ້າຈັກ L ຈັກ mL? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" L "}{" "}
                <span className="answer-blank"></span> {" mL"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "1 L = 1000 mL ເດີ! ເວລາລົບ ຖ້າ mL ບໍ່ພໍ ໃຫ້ປ່ຽນ 1 L ເປັນ 1000 mL ແລ້ວລົບ.",
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
                {"(1) 5 L = "} <span className="answer-blank"></span> {" mL"}
              </p>
              <p>
                {"(2) 4000 mL = "} <span className="answer-blank"></span> {" L"}
              </p>
              <p>
                {"(3) 2 L 500 mL = "} <span className="answer-blank"></span>{" "}
                {" mL"}
              </p>
              <p>
                {"(4) 1500 mL = "} <span className="answer-blank"></span>{" "}
                {" L "} <span className="answer-blank"></span> {" mL"}
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
              {"ຈົ່ງຄິດໄລ່: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                {"(1) 6 L + 4 L = "} <span className="answer-blank"></span>{" "}
                {" L"}
              </p>
              <p>
                {"(2) 800 mL + 200 mL = "}{" "}
                <span className="answer-blank"></span> {" mL = "}{" "}
                <span className="answer-blank"></span> {" L"}
              </p>
              <p>
                {"(3) 7 L − 2 L 800 mL = "}{" "}
                <span className="answer-blank"></span> {" L "}{" "}
                <span className="answer-blank"></span> {" mL"}
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
            <span key="u8-1">{"(1) 8"}</span>,
            <span key="u8-2">{"(2) 1"}</span>,
            <span key="u8-3">{"(3) 3000"}</span>,
            <span key="u8-4">{"(4) 2"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u8-5">{"(1) mL"}</span>,
            <span key="u8-6">{"(2) L"}</span>,
            <span key="u8-7">{"(3) mL"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [<span key="u8-8">{"2 L 600 mL"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u8-9">{"(1) 8 L"}</span>,
            <span key="u8-10">{"(2) 1000 mL = 1 L"}</span>,
            <span key="u8-11">{"(3) 2 L 700 mL"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u8-12">{"10 L − 3 L 500 mL = 6 L 500 mL"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 8",
          answers: [
            <span key="u8-s1">
              {"ຂໍ້ 1: (1) 5000, (2) 4, (3) 2500, (4) 1 L 500 mL"}
            </span>,
            <span key="u8-s2">
              {"ຂໍ້ 2: (1) 10 L, (2) 1000 mL = 1 L, (3) 4 L 200 mL"}
            </span>,
          ],
        },
      ],
      advice:
        "1 L = 1000 mL ເດີ! ເວລາບວກ ຫຼື ລົບ ໃຫ້ຄິດ L ກັບ L, mL ກັບ mL. ຖ້າ mL ກາຍ 1000 ກໍປ່ຽນເປັນ L!",
    },
  };
