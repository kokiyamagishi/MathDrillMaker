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

export const unit13Data: UnitData = {
    
    unitNumber: 13,
    unitTitle: "ຫົວໜ່ວຍ ແລະ ວິທີວັດແທກຄວາມຍາວ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກ ແມັດ (m) ແລະ ການປ່ຽນຫົວໜ່ວຍລະຫວ່າງ m ກັບ cm",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 176〜183",
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
            {
              "ເມື່ອເຮົາສະແດງຄວາມຍາວຂອງວັດຖຸທີ່ຍາວຫຼາຍ ເຮົາຈະໃຊ້ຫົວໜ່ວຍທີ່ເອີ້ນວ່າ "
            }
            <strong>{"ແມັດ (m)"}</strong>
          </p>
          <div
            className="math-illustration"
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              borderRadius: "8px",
              border: "2px solid #81C784",
              textAlign: "center",
              marginBottom: "24px",
              fontSize: "28px",
            }}
          >
            <p
              style={{ fontSize: "28px", fontWeight: "bold", color: "#2E7D32" }}
            >
              {"1 m = 100 cm"}
            </p>
          </div>
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
              <p>{"1 ແມັດ ເທົ່າກັບ 100 ຊັງຕີແມັດ."}</p>
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
              <p>{"ຕົວຢ່າງ: 300 cm = 3 m, 2 m = 200 cm"}</p>
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
              <p>{"ຖ້າຄວາມຍາວແມ່ນ 120 cm ກໍຈະຂຽນເປັນ 1 m 20 cm."}</p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ຈື່ໄວ້ວ່າ 1 m = 100 cm. ດັ່ງນັ້ນ 500 cm ກໍຄື 5 m!",
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
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ: "}{" "}
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
              <div>
                {"(1) 300 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" m"}
              </div>
              <div>
                {"(2) 6 m = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
              <div>
                {"(3) 2 m 50 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
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
                "ນຳໃຊ້ໄມ້ແມັດ (1m) ວັດແທກຄວາມຍາວຂອງໄມ້ລຳໜຶ່ງໄດ້ 3 ເທື່ອ. ຖາມວ່າໄມ້ລຳນັ້ນຍາວຈັກ m? "
              }{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" m"}
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
                {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
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
                  {"(1) 425 cm = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" m "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" cm"}
                </div>
                <div>
                  {"(2) 307 cm = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" m "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" cm"}
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
                  "ຈົ່ງຕື່ມຫົວໜ່ວຍວັດແທກຄວາມຍາວທີ່ເໝາະສົມ (m ຫຼື cm) ໃສ່ໃນວົງເລັບ: "
                }{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
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
                  {"(1) ລວງກວ້າງຂອງຢາງລຶບ 15 ( "}{" "}
                  <span
                    className="answer-blank"
                    style={{
                      width: "40px",
                      display: "inline-block",
                      borderBottom: "none",
                    }}
                  ></span>{" "}
                  {" )"}
                </div>
                <div>
                  {"(2) ລວງສູງຂອງຕົ້ນໄມ້ 15 ( "}{" "}
                  <span
                    className="answer-blank"
                    style={{
                      width: "40px",
                      display: "inline-block",
                      borderBottom: "none",
                    }}
                  ></span>{" "}
                  {" )"}
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "425 cm ແຍກເປັນ 400 cm ກັບ 25 cm. 400 cm ແມ່ນ 4 m ເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ: "}{" "}
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
                {"(1) 500 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" m"}
              </div>
              <div>
                {"(2) 7 m = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
              <div>
                {"(3) 2 m 5 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
              <div>
                {"(4) 340 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>{" "}
                {" m "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
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
                "ຈົ່ງຕື່ມຫົວໜ່ວຍວັດແທກຄວາມຍາວທີ່ເໝາະສົມ (m, cm ຫຼື mm) ໃສ່ໃນວົງເລັບ: "
              }{" "}
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
              <div>
                {"(1) ລວງກວ້າງຂອງປຶ້ມແບບຮຽນ 18 ( "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    width: "40px",
                    display: "inline-block",
                    borderBottom: "none",
                  }}
                ></span>{" "}
                {" )"}
              </div>
              <div>
                {"(2) ລວງກວ້າງຂອງຫ້ອງຮຽນ 6 ( "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    width: "40px",
                    display: "inline-block",
                    borderBottom: "none",
                  }}
                ></span>{" "}
                {" )"}
              </div>
              <div>
                {"(3) ຄວາມໜາຂອງປຶ້ມຂຽນ 5 ( "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    width: "40px",
                    display: "inline-block",
                    borderBottom: "none",
                  }}
                ></span>{" "}
                {" )"}
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
            <span key="u13-1">{"(1) 3"}</span>,
            <span key="u13-2">{"(2) 600"}</span>,
            <span key="u13-3">{"(3) 250"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="u13-b2-1">{"3"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u13-4">{"(1) 4 m 25 cm"}</span>,
            <span key="u13-5">{"(2) 3 m 7 cm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u13-6">{"(1) cm"}</span>,
            <span key="u13-7">{"(2) m"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 13",
          answers: [
            <span key="u13-s1">
              {"ຂໍ້ 1: (1) 5, (2) 700, (3) 205, (4) 3 m 40 cm"}
            </span>,
            <span key="u13-s2">{"ຂໍ້ 2: (1) cm, (2) m, (3) mm"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຕົວເລກຫຼາຍກວ່າ 100 cm ໃຫ້ປ່ຽນເປັນ m. ຕົວຢ່າງ: 100 cm = 1 m. ລະວັງ 2 m 5 cm ຄື 205 cm ບໍ່ແມ່ນ 250 cm ເດີ້!",
    },
  };
