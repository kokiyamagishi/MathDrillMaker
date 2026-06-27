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

export const unit7Data: UnitData = {
    
    unitNumber: 7,
    unitTitle: "ໂມງ ແລະ ປະຕິທິນ",
    unitGoal:
      "ຮຽນຮູ້ວິທີອ່ານເວລາ, ຄວາມສຳພັນລະຫວ່າງຊົ່ວໂມງ-ນາທີ-ວັນ, ແລະ ການນໍາໃຊ້ປະຕິທິນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 72〜81",
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
            {"ສິ່ງສຳຄັນກ່ຽວກັບໂມງ ແລະ ປະຕິທິນ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ຊົ່ວໂມງ = 60 ນາທີ"}</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ວັນ = 24 ຊົ່ວໂມງ"}</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ອາທິດ = 7 ວັນ"}</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ປີ = 12 ເດືອນ = 365 ວັນ"}</strong>
            </li>
            <li>
              <strong>{"ເຂັມສັ້ນ:"}</strong> {"ບອກ ໂມງ, "}{" "}
              <strong>{"ເຂັມຍາວ:"}</strong> {"ບອກ ນາທີ"}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                border: "2px solid #A5D6A7",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                backgroundColor: "#E8F5E9",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{"ເດືອນທີ່ມີ 31 ວັນ"}</p>
              <p>{"1, 3, 5, 7, 8, 10, 12"}</p>
            </div>
            <div
              style={{
                border: "2px solid #FFCC80",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                backgroundColor: "#FFF3E0",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{"ເດືອນທີ່ມີ 30 ວັນ"}</p>
              <p>{"4, 6, 9, 11"}</p>
            </div>
            <div
              style={{
                border: "2px solid #EF9A9A",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                backgroundColor: "#FFEBEE",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{"ເດືອນ 2"}</p>
              <p>{"28 ຫຼື 29 ວັນ"}</p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເຂັມຍາວຊີ້ໄປເລກ 6 ແມ່ນ 30 ນາທີ ເພາະ 1 ຊ່ອງ = 5 ນາທີ, ເລກ 6 = 6 × 5 = 30 ນາທີ!",
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
                {"(1) 1 ຊົ່ວໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ນາທີ"}
              </p>
              <p>
                {"(2) 1 ວັນ = "} <span className="answer-blank"></span>{" "}
                {" ຊົ່ວໂມງ"}
              </p>
              <p>
                {"(3) 15 ໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ໂມງແລງ"}
              </p>
              <p>
                {"(4) 1 ປີ = "} <span className="answer-blank"></span> {" ວັນ"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບປະຕິທິນ: "}{" "}
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
                {"(1) 1 ອາທິດ = "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
              <p>
                {"(2) ເດືອນ 3 ມີ "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
              <p>
                {"(3) ເດືອນ 6 ມີ "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
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
                "ທ້າວບຸນມາອອກຈາກເຮືອນເວລາ 7 ໂມງ 10 ນາທີ, ຮອດໂຮງຮຽນເວລາ 7 ໂມງ 40 ນາທີ. ລາວໃຊ້ເວລາຈັກນາທີ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ນາທີ"}
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
                {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
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
                  {"(1) 7 ໂມງແລງ = "} <span className="answer-blank"></span>{" "}
                  {" ໂມງ (ແບບ 24 ຊົ່ວໂມງ)"}
                </p>
                <p>
                  {"(2) 22 ໂມງ = "} <span className="answer-blank"></span>{" "}
                  {" ໂມງແລງ"}
                </p>
                <p>
                  {"(3) 18 ໂມງ = "} <span className="answer-blank"></span>{" "}
                  {" ໂມງແລງ"}
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
                  "ນາງຄຳຫຼ້າເລີ່ມອ່ານປຶ້ມເວລາ 3 ໂມງ 15 ນາທີ, ອ່ານຈົບເວລາ 4 ໂມງ. ນາງຄຳຫຼ້າອ່ານປຶ້ມໃຊ້ເວລາຈັກນາທີ? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ນາທີ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ຈື່ໄວ້ວ່າ 1 ໂມງແລງ = 13 ໂມງ, 2 ໂມງແລງ = 14 ໂມງ, ແລ້ວນັບຕໍ່ໄປ!",
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
                {"(1) 2 ຊົ່ວໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ນາທີ"}
              </p>
              <p>
                {"(2) 1 ປີ = "} <span className="answer-blank"></span>{" "}
                {" ເດືອນ"}
              </p>
              <p>
                {"(3) ເດືອນ 8 ມີ "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
              <p>
                {"(4) 20 ໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ໂມງແລງ"}
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
                "ທ້າວສຸກໄປຕະຫຼາດເວລາ 8 ໂມງ 20 ນາທີ ແລະ ກັບເຮືອນເວລາ 9 ໂມງ. ລາວໃຊ້ເວລາຢູ່ຕະຫຼາດຈັກນາທີ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ນາທີ"}
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
              {
                "ວັນຈັນ, ອັງຄານ, ພຸດ, ພະຫັດ, ສຸກ, ເສົາ, ອາທິດ. ຖ້າມື້ນີ້ແມ່ນວັນພຸດ, ອີກ 5 ວັນຈະເປັນວັນຫຍັງ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ວັນ "} <span className="answer-blank"></span>
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
            <span key="u7-1">{"(1) 60"}</span>,
            <span key="u7-2">{"(2) 24"}</span>,
            <span key="u7-3">{"(3) 3"}</span>,
            <span key="u7-4">{"(4) 365"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u7-5">{"(1) 7"}</span>,
            <span key="u7-6">{"(2) 31"}</span>,
            <span key="u7-7">{"(3) 30"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [<span key="u7-8">{"40 − 10 = 30, ຕອບ: 30 ນາທີ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u7-9">{"(1) 19"}</span>,
            <span key="u7-10">{"(2) 10"}</span>,
            <span key="u7-11">{"(3) 6"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u7-12">{"60 − 15 = 45, ຕອບ: 45 ນາທີ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 7",
          answers: [
            <span key="u7-s1">{"ຂໍ້ 1: (1) 120, (2) 12, (3) 31, (4) 8"}</span>,
            <span key="u7-s2">{"ຂໍ້ 2: 60 − 20 = 40, ຕອບ: 40 ນາທີ"}</span>,
            <span key="u7-s3">{"ຂໍ້ 3: ວັນຈັນ"}</span>,
          ],
        },
      ],
      advice:
        "1 ຊົ່ວໂມງ = 60 ນາທີ, 1 ວັນ = 24 ຊົ່ວໂມງ. ຫຼັງທ່ຽງວັນ ໃຫ້ບວກ 12 ເຂົ້າ (ເຊັ່ນ: 3 ໂມງແລງ = 15 ໂມງ).",
    },
  };
