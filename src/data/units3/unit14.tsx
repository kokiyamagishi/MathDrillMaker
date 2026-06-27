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

export const unit14Data: UnitData = {
    
    unitNumber: 14,
    unitTitle: "ຈຳນວນທົດສະນິຍົມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທົດສະນິຍົມ, ການບວກ ແລະ ການລົບທົດສະນິຍົມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ! 10 ເທື່ອຂອງ 0.1 ແມ່ນ 1.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"14. ຈຳນວນທົດສະນິຍົມ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ຖ້າແບ່ງ 1 ອອກເປັນ 10 ສ່ວນເທົ່າໆກັນ, 1 ສ່ວນນັ້ນຂຽນເປັນ 0.1 (ສູນຈຸດໜຶ່ງ)."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <NumberLine
              min={0}
              max={1}
              step={0.1}
              showLabels={true}
              width={600}
            />
            <div style={{ display: "flex", gap: "40px" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#E53935",
                }}
              >
                {"10 ເທື່ອຂອງ 0.1 ແມ່ນ 1"}
              </span>
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
              {"ຈົ່ງຂຽນຈຳນວນທົດສະນິຍົມທີ່ກົງກັບຈຳນວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", q: "0.1 ມີ 8 ເທື່ອ" },
                { n: "(2)", q: "0.1 ມີ 15 ເທື່ອ" },
                { n: "(3)", q: "0.1 ມີ 23 ເທື່ອ" },
                { n: "(4)", q: "0.1 ມີ 3 ເທື່ອ" },
                { n: "(5)", q: "0.1 ມີ 30 ເທື່ອ" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "20px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span>{"= "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຢ່າງງ່າຍ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
              }}
            >
              {[
                { n: "(6)", q: "0.3 + 0.4 = " },
                { n: "(7)", q: "1.5 - 0.7 = " },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "22px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
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
                {"ຈົ່ງຄິດໄລ່ເລກບວກ ແລະ ລົບທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                }}
              >
                {[
                  { n: "(1)", q: "0.4 + 0.3 = " },
                  { n: "(2)", q: "1.2 + 0.5 = " },
                  { n: "(3)", q: "0.8 - 0.2 = " },
                  { n: "(4)", q: "2.5 - 1.2 = " },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      fontSize: "22px",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                      }}
                    ></span>
                  </div>
                ))}
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກທົດສະນິຍົມ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p>
                  {
                    "(5) ນ້ຳໃນຕຸກມີ 0.8 ລິດ, ນາງ ຄຳດີ ດື່ມໄປ 0.3 ລິດ. ຈະເຫຼືອນ້ຳໃນຕຸກຈັກລິດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ລິດ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ບວກລົບເລກທົດສະນິຍົມໃຫ້ເອົາຕົວເລກຫຼັງຈຸດມາບວກລົບກັນເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງປຽບທຽບຈຳນວນທົດສະນິຍົມ ໂດຍໃຊ້ເຄື່ອງໝາຍ >, < ຫຼື =: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", a: "0.6", b: "0.8" },
                { n: "(2)", a: "1.5", b: "1.2" },
                { n: "(3)", a: "2.0", b: "2" },
                { n: "(4)", a: "3.4", b: "4.3" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.a}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{item.b}</span>
                </div>
              ))}
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
              {"ຈົ່ງປຽບທຽບນ້ຳໜັກຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p>
                {
                  "(5) ສົ້ມໜັກ 1.2 kg ແລະ ໝາກມ່ວງໜັກ 0.9 kg. ໝາກໄມ້ໃດໜັກກວ່າກັນ ແລະ ໜັກກວ່າຈັກ kg?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ໜັກກວ່າ,"}</span>
                <span>{"ໜັກກວ່າຈັກ kg:"}</span>
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
            <span key="1">
              {"(1) 0.8, (2) 1.5, (3) 2.3, (4) 0.3, (5) 3.0, (6) 0.7, (7) 0.8"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 0.7, (2) 1.7, (3) 0.6, (4) 1.3, (5) 0.5 ລິດ (0.8 - 0.3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) <, (2) >, (3) =, (4) <, (5) ສົ້ມໜັກກວ່າ, ໜັກກວ່າ 0.3 kg (1.2 - 0.9)"
              }
            </span>,
          ],
        },
      ],
      advice: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ!",
    },
  };
