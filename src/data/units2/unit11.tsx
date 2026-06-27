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

export const unit11Data: UnitData = {
    
    unitNumber: 11,
    unitTitle: "ການຄູນ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງການຄູນ ແລະ ການນຳໃຊ້ສູດຄູນບັ້ງ 5",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 120〜130",
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
            {"ຄວາມໝາຍຂອງການຄູນ:"}
          </p>
          <div
            className="math-illustration"
            style={{
              backgroundColor: "#FFF8E1",
              padding: "16px",
              borderRadius: "12px",
              border: "2px solid #FFD54F",
              marginBottom: "16px",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              {"(ຈໍານວນຂອງ 1 ເທື່ອ) × (ຈໍານວນເທື່ອ) = (ຈໍານວນທັງໝົດ)"}
            </p>
          </div>
          <p style={{ marginBottom: "8px" }}>
            <strong>{"ຕົວຢ່າງ:"}</strong>{" "}
            {"ເຂົ້າໜົມ 1 ຈານມີ 5 ກ້ອນ. ຖ້າມີ 3 ຈານ ຈະມີເຂົ້າໜົມທັງໝົດຈັກກ້ອນ?"}
          </p>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "16px",
              fontSize: "20px",
            }}
          >
            <span style={{ fontSize: "20px" }}>{"(🍬🍬🍬🍬🍬)"}</span>
            <span style={{ fontSize: "20px" }}>{"(🍬🍬🍬🍬🍬)"}</span>
            <span style={{ fontSize: "20px" }}>{"(🍬🍬🍬🍬🍬)"}</span>
          </div>
          <p
            className="math-illustration"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#E53935",
              fontSize: "18px",
            }}
          >
            {"5 × 3 = 15 ກ້ອນ"}
          </p>

          <div
            className="math-illustration"
            style={{
              backgroundColor: "#E8F5E9",
              padding: "16px",
              borderRadius: "12px",
              border: "2px solid #81C784",
              marginTop: "24px",
              fontSize: "16px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            >
              {"ສູດຄູນບັ້ງ 5"}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "16px",
              }}
            >
              <div>
                <p style={{ fontSize: "16px" }}>{"5 × 1 = 5"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 2 = 10"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 3 = 15"}</p>
              </div>
              <div>
                <p style={{ fontSize: "16px" }}>{"5 × 4 = 20"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 5 = 25"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 6 = 30"}</p>
              </div>
              <div>
                <p style={{ fontSize: "16px" }}>{"5 × 7 = 35"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 8 = 40"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 9 = 45"}</p>
              </div>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາຂຽນປະໂຫຍກສັນຍະລັກການຄູນ ໃຫ້ຂຽນສິ່ງທີ່ຢູ່ທາງໃນ 1 ກຸ່ມກ່ອນ ແລ້ວຄູນໃຫ້ຈຳນວນກຸ່ມເດີ!",
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
              {"ຈົ່ງຂຽນເປັນປະໂຫຍກສັນຍະລັກຂອງການຄູນ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
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
                {
                  "(1) ໝາກແຕງ 1 ຖົງມີ 8 ໜ່ວຍ. ມີ 4 ຖົງ. ລວມທັງໝົດມີໝາກແຕງຈັກໜ່ວຍ?"
                }
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank"></span>{" "}
                {" × "} <span className="answer-blank"></span>
              </p>
              <p>{"(2) ຄວາມຍາວ 2 ເທື່ອຂອງເຫຼັກຕາປູ 5 cm ແມ່ນຈັກ cm?"}</p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank"></span>{" "}
                {" × "} <span className="answer-blank"></span>
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
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນບັ້ງ 5: "}{" "}
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
              <div>
                {"(1) 5 × 3 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 5 × 6 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 5 × 2 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 5 × 8 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(5) 5 × 5 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(6) 5 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
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
                {
                  "ໝາກກ້ວຍໃນແຕ່ລະຈານມີ 5 ໜ່ວຍ. ຖ້າມີ 7 ຈານ ຈະມີໝາກກ້ວຍທັງໝົດຈັກໜ່ວຍ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ໜ່ວຍ"}
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
                {"ນັກຮຽນນັ່ງໂຕະລະ 5 ຄົນ. ຖ້າມີ 4 ໂຕະ ຈະມີນັກຮຽນທັງໝົດຈັກຄົນ? "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
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
      hintText: "ໃຊ້ສູດຄູນບັ້ງ 5 ເຂົ້າຊ່ວຍເລີຍ! 5 × 7 ແລະ 5 × 4",
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
                {"(1) 5 × 4 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 5 × 7 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 5 × 1 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 5 × 9 = "}{" "}
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
              {"ດອກໄມ້ 1 ຊໍ່ມີ 5 ດອກ. ຖ້າມີ 6 ຊໍ່ ຈະມີດອກໄມ້ທັງໝົດຈັກດອກ? "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ດອກ"}
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
                "ປຶ້ມ 1 ຫົວລາຄາ 5 ກີບ. ຖ້າຊື້ 8 ຫົວ ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u11-1">{"(1) 8 × 4"}</span>,
            <span key="u11-2">{"(2) 5 × 2"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u11-3">{"(1) 15"}</span>,
            <span key="u11-4">{"(2) 30"}</span>,
            <span key="u11-5">{"(3) 10"}</span>,
            <span key="u11-6">{"(4) 40"}</span>,
            <span key="u11-7">{"(5) 25"}</span>,
            <span key="u11-8">{"(6) 45"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u11-9">{"5 × 7 = 35, ຕອບ: 35 ໜ່ວຍ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u11-10">{"5 × 4 = 20, ຕອບ: 20 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 11",
          answers: [
            <span key="u11-s1">{"ຂໍ້ 1: (1) 20, (2) 35, (3) 5, (4) 45"}</span>,
            <span key="u11-s2">{"ຂໍ້ 2: 5 × 6 = 30, ຕອບ: 30 ດອກ"}</span>,
            <span key="u11-s3">{"ຂໍ້ 3: 5 × 8 = 40, ຕອບ: 40 ກີບ"}</span>,
          ],
        },
      ],
      advice:
        "ທ່ອງສູດຄູນບັ້ງ 5 ໃຫ້ລ່ຽນໄຫຼ! ເວລາຂຽນປະໂຫຍກສັນຍະລັກ ໃຫ້ເອົາຈຳນວນໃນ 1 ກຸ່ມຂຶ້ນກ່ອນ.",
    },
  };
