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

export const unit15Data: UnitData = {
    
    unitNumber: 15,
    unitTitle: "ທະນະບັດ",
    unitGoal: "ຮຽນຮູ້ທະນະບັດຂອງລາວ ແລະ ການຄິດໄລ່ເງິນທອນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 190〜195",
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
            {"ທະນະບັດຂອງລາວທີ່ໃຊ້ໃນປະຈຸບັນ"}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>
                {"ຫົວໜ່ວຍຂອງເງິນລາວ ແມ່ນ "}
                <strong>{"ກີບ"}</strong>
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>
                {
                  "ທະນະບັດທີ່ພົບເລື້ອຍໆ: 500 ກີບ, 1000 ກີບ, 2000 ກີບ, 5000 ກີບ, 10000 ກີບ"
                }
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "8px",
              }}
            >
              <LaoBanknote amount={500} width={80} />
              <LaoBanknote amount={1000} width={80} />
              <LaoBanknote amount={2000} width={80} />
              <LaoBanknote amount={5000} width={80} />
              <LaoBanknote amount={10000} width={80} />
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
              {"ວິທີການຄິດໄລ່ເງິນ"}
            </p>
            <p>
              {
                "ໃບ 1000 ກີບ 2 ໃບ ແລະ 500 ກີບ 1 ໃບ ເທົ່າກັບ 2500 ກີບ (ສອງພັນຫ້າຮ້ອຍກີບ)"
              }
            </p>
            <p
              style={{ marginTop: "8px", color: "#E53935", fontWeight: "bold" }}
            >
              {"ເງິນທອນ = ເງິນທີ່ຈ່າຍໄປ - ລາຄາເຄື່ອງ"}
            </p>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາຊື້ເຄື່ອງ ຖ້າເຮົາຈ່າຍເງິນຫຼາຍກວ່າລາຄາເຄື່ອງ ເຮົາຈະໄດ້ເງິນທອນຄືນເດີ້!",
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
              {"ຈົ່ງບອກວ່າເງິນທັງໝົດລວມເປັນຈັກກີບ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "16px",
              }}
            >
              <div style={{ fontSize: "16px" }}>
                <p style={{ fontSize: "16px" }}>
                  {"(1) ໃບ 1000 ກີບ 3 ໃບ ແລະ ໃບ 500 ກີບ 1 ໃບ = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "60px", display: "inline-block" }}
                  ></span>{" "}
                  {" ກີບ"}
                </p>
                <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
                  <LaoBanknote amount={1000} count={3} />
                  <LaoBanknote amount={500} count={1} />
                </div>
              </div>
              <div style={{ fontSize: "16px" }}>
                <p style={{ fontSize: "16px" }}>
                  {"(2) ໃບ 2000 ກີບ 2 ໃບ ແລະ ໃບ 5000 ກີບ 1 ໃບ = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "60px", display: "inline-block" }}
                  ></span>{" "}
                  {" ກີບ"}
                </p>
                <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
                  <LaoBanknote amount={2000} count={2} />
                  <LaoBanknote amount={5000} count={1} />
                </div>
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
                "ຢາງລຶບລາຄາ 5500 ກີບ. ຖ້າບໍ່ຢາກໃຫ້ມີເງິນທອນ ຕ້ອງຈ່າຍໃບ 1000 ກີບ ຈັກໃບ ແລະ ໃບ 500 ກີບ ຈັກໃບ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <LaoBanknote amount={1000} count={1} />
              {" ? ໃບ, "}
              <LaoBanknote amount={500} count={1} />
              {" ? ໃບ"}
            </div>
            <p>
              {"ຕອບ: ໃບ 1000 ກີບ "} <span className="answer-blank"></span>{" "}
              {" ໃບ ແລະ ໃບ 500 ກີບ "} <span className="answer-blank"></span>{" "}
              {" ໃບ"}
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
                {
                  "ໃຊ້ເງິນໃບ 5000 ກີບ ຊື້ສໍສີລາຄາ 3000 ກີບ. ຈະໄດ້ເງິນທອນເທົ່າໃດ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ margin: "8px 0" }}>
                <LaoBanknote amount={5000} count={1} />
              </div>
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
                  "ໃຊ້ເງິນໃບ 10000 ກີບ ຊື້ເຂົ້າຈີ່ລາຄາ 7000 ກີບ. ຈະໄດ້ເງິນທອນເທົ່າໃດ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ margin: "8px 0" }}>
                <LaoBanknote amount={10000} count={1} />
              </div>
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
      hintText: "ເງິນທອນ = ເງິນທີ່ຈ່າຍ (5000) - ລາຄາເຄື່ອງ (3000)",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ໃຊ້ເງິນໃບ 10000 ກີບ ຊື້ປຶ້ມຂຽນ 3000 ກີບ ແລະ ສໍດຳ 1000 ກີບ. ຈະໄດ້ເງິນທອນເທົ່າໃດ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ margin: "8px 0" }}>
              <LaoBanknote amount={10000} count={1} />
            </div>
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
                "ມີໃບ 5000 ກີບ 1 ໃບ, ໃບ 2000 ກີບ 2 ໃບ ແລະ ໃບ 1000 ກີບ 1 ໃບ. ລວມທັງໝົດມີເງິນຈັກກີບ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "8px",
                flexWrap: "wrap",
                fontSize: "16px",
              }}
            >
              <LaoBanknote amount={5000} count={1} />
              <LaoBanknote amount={2000} count={2} />
              <LaoBanknote amount={1000} count={1} />
            </div>
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
          answers: [<span key="u15-1">{"(1) 3500, (2) 9000"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u15-2">{"ໃບ 1000 ກີບ 5 ໃບ, ໃບ 500 ກີບ 1 ໃບ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u15-c1">{"5000 - 3000 = 2000, ຕອບ: 2000 ກີບ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u15-c2">{"10000 - 7000 = 3000, ຕອບ: 3000 ກີບ"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 15",
          answers: [
            <span key="u15-s1">
              {"ຂໍ້ 1: 10000 - (3000 + 1000) = 6000, ຕອບ: 6000 ກີບ"}
            </span>,
            <span key="u15-s2">
              {"ຂໍ້ 2: 5000 + 4000 + 1000 = 10000, ຕອບ: 10000 ກີບ"}
            </span>,
          ],
        },
      ],
      advice:
        "ເວລາຄິດໄລ່ເງິນ ຖ້າຕົວເລກຫຼາຍເກີນໄປ ໃຫ້ຕັດເລກສູນ 3 ໂຕອອກແລ້ວຄິດໄລ່ກໍໄດ້ (ຕົວຢ່າງ: 5000-3000 ກໍຄື 5-3 = 2 ພັນ)",
    },
  };
