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

export const unit12Data: UnitData = {
    
    unitNumber: 12,
    unitTitle: "ການຄູນ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄູນບັ້ງ 6, 7, 8, 9 ແລະ 1",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 148〜175",
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
            {"ສູດຄູນບັ້ງ 6, 7, 8, 9 ແລະ 1"}
          </p>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-around",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                backgroundColor: "#E3F2FD",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #90CAF9",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 6"}
              </p>
              <p style={{ fontSize: "14px" }}>{"6 × 1 = 6"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 2 = 12"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 3 = 18"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 4 = 24"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 5 = 30"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
            <div
              style={{
                backgroundColor: "#FCE4EC",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #F48FB1",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 7"}
              </p>
              <p style={{ fontSize: "14px" }}>{"7 × 1 = 7"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 2 = 14"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 3 = 21"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 4 = 28"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 5 = 35"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
            <div
              style={{
                backgroundColor: "#E8F5E9",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #A5D6A7",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 8"}
              </p>
              <p style={{ fontSize: "14px" }}>{"8 × 1 = 8"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 2 = 16"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 3 = 24"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 4 = 32"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 5 = 40"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
            <div
              style={{
                backgroundColor: "#FFF3E0",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #FFCC80",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 9"}
              </p>
              <p style={{ fontSize: "14px" }}>{"9 × 1 = 9"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 2 = 18"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 3 = 27"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 4 = 36"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 5 = 45"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#FFF",
              borderRadius: "8px",
              border: "1px dashed #CCC",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              {"ຈື່ໄວ້!"}
            </p>
            <p>{"ສູດຄູນບັ້ງ 1: ຈຳນວນໃດມາຄູນກັບ 1 ກໍຈະອອກຈຳນວນນັ້ນເອງ!"}</p>
            <p>{"(ຕົວຢ່າງ: 1 × 7 = 7, 1 × 9 = 9)"}</p>
          </div>
        </>
      ),
      hint: {
        text: "ທ່ອງສູດຄູນໃຫ້ລ່ຽນໄຫຼເລີຍເດີ! ເລີ່ມແຕ່ 6×1=6 ໄປຮອດ 9×9=81",
        isBlue: false,
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
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 6 × 4 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 7 × 3 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 8 × 6 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 9 × 2 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(5) 6 × 8 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(6) 7 × 7 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(7) 8 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(8) 1 × 5 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
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
              {"ຊື້ປາ 2 ຖົງ, ແຕ່ລະຖົງມີ 6 ໂຕ. ລວມທັງໝົດມີປາຈັກໂຕ? "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ໂຕ"}
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
                {"1 ອາທິດມີ 7 ວັນ. ຖ້າ 4 ອາທິດຈະມີທັງໝົດຈັກວັນ? "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ວັນ"}
              </p>
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
                {"ຊື້ປຶ້ມ 9 ຫົວ. ລາຄາຫົວລະ 8 ກີບ. ລວມເປັນເງິນທັງໝົດຈັກກີບ? "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ໃຊ້ສູດຄູນໄດ້ເລີຍ! 7 ວັນ ມີ 4 ອາທິດ ກໍຄື 7 × 4.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນລຸ່ມນີ້: "}{" "}
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
              <div>
                {"(1) 6 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 9 × 6 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 7 × 8 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 8 × 7 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
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
              {
                "ເຂົ້າໜົມ 1 ກ່ອງມີ 6 ກ້ອນ. ຖ້າຊື້ 7 ກ່ອງ ຈະມີເຂົ້າໜົມທັງໝົດຈັກກ້ອນ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກ້ອນ"}
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
                "ຢາຍສໍດຳໃຫ້ເດັກນ້ອຍ 8 ຄົນ, ຄົນລະ 9 ກ້ານ. ຕ້ອງໃຊ້ສໍດຳທັງໝົດຈັກກ້ານ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກ້ານ"}
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
            <span key="u12-1">{"(1) 24"}</span>,
            <span key="u12-2">{"(2) 21"}</span>,
            <span key="u12-3">{"(3) 48"}</span>,
            <span key="u12-4">{"(4) 18"}</span>,
            <span key="u12-5">{"(5) 48"}</span>,
            <span key="u12-6">{"(6) 49"}</span>,
            <span key="u12-7">{"(7) 72"}</span>,
            <span key="u12-8">{"(8) 5"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="u12-b2-1">{"6 × 2 = 12, ຕອບ: 12 ໂຕ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u12-9">{"7 × 4 = 28, ຕອບ: 28 ວັນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u12-10">{"8 × 9 = 72, ຕອບ: 72 ກີບ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 12",
          answers: [
            <span key="u12-s1">{"ຂໍ້ 1: (1) 54, (2) 54, (3) 56, (4) 56"}</span>,
            <span key="u12-s2">{"ຂໍ້ 2: 6 × 7 = 42, ຕອບ: 42 ກ້ອນ"}</span>,
            <span key="u12-s3">{"ຂໍ້ 3: 9 × 8 = 72, ຕອບ: 72 ກ້ານ"}</span>,
          ],
        },
      ],
      advice:
        "ສູດຄູນ 6, 7, 8, 9 ອາດຈະຍາກແດ່, ແຕ່ພະຍາຍາມທ່ອງທຸກມື້ໃຫ້ຈື່ເດີ! 6×9 ກັບ 9×6 ແມ່ນອອກ 54 ຄືກັນ!",
    },
  };
