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

export const unit4Data: UnitData = {
    
    unitNumber: 4,
    unitTitle: "ຫົວໜ່ວຍ ແລະ ວິທີວັດແທກຄວາມຍາວ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບ ຊັງຕີແມັດ (cm) ແລະ ມິລິແມັດ (mm) ພ້ອມທັງວິທີນຳໃຊ້ບັນທັດວັດແທກຄວາມຍາວ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 36〜47",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.5,
              marginBottom: "8px",
            }}
          >
            {"ການວັດແທກຄວາມຍາວ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.5,
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <li>
              <strong>{"ຊັງຕີແມັດ (cm):"}</strong>{" "}
              {"ເປັນຫົວໜ່ວຍວັດແທກຄວາມຍາວ. ຄວາມຍາວ 1 ຊັງຕີແມັດ ຂຽນເປັນ "}{" "}
              <strong>{"1 cm"}</strong>
              {"."}
            </li>
            <li>
              <strong>{"ມິລິແມັດ (mm):"}</strong>{" "}
              {
                "ເປັນຫົວໜ່ວຍວັດແທກຄວາມຍາວທີ່ນ້ອຍກວ່າ cm. 1 cm ແບ່ງເປັນ 10 ສ່ວນເທົ່າກັນ, 1 ສ່ວນຍາວ 1 ມິລິແມັດ ຂຽນເປັນ "
              }{" "}
              <strong>{"1 mm"}</strong>
              {"."}
            </li>
            <li style={{ color: "#E53935", fontWeight: "bold" }}>
              {"ຄວາມສຳພັນ: 1 cm = 10 mm"}
            </li>
          </ul>

          <div
            className="math-illustration"
            style={{ marginTop: "10px", fontSize: "16px" }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "2px",
                fontSize: "16px",
              }}
            >
              {"[ຕົວຢ່າງ 1] ຄວາມຍາວຂອງສໍດຳແມ່ນຈັກ cm?"}
            </p>
            <Ruler
              measuredLength={5}
              maxLength={7}
              objectType="pencil"
              showAnswer={true}
            />
          </div>

          <div
            className="math-illustration"
            style={{ marginTop: "8px", fontSize: "16px" }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "2px",
                fontSize: "16px",
              }}
            >
              {"[ຕົວຢ່າງ 2] ຄວາມຍາວຂອງເສັ້ນຊື່ແມ່ນຈັກ cm ແລະ mm?"}
            </p>
            <Ruler
              measuredLength={3.7}
              maxLength={6}
              objectType="line"
              showAnswer={true}
            />
            <p
              style={{
                textAlign: "center",
                color: "#E53935",
                fontWeight: "bold",
                marginTop: "1px",
                fontSize: "16px",
              }}
            >
              {"3 cm ກັບ 7 mm ຫຼື ເທົ່າກັບ 37 mm"}
            </p>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາວັດແທກ, ຕ້ອງວາງຂີດ 0 ຂອງບັນທັດໃຫ້ຊື່ກັບສົ້ນເບື້ອງໜຶ່ງເດີ!",
        isBlue: true,
      },
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ marginBottom: "16px" }}>
            <p style={{ marginBottom: "8px" }}>
              {"ຈົ່ງບອກຄວາມຍາວຂອງສິ່ງຂອງຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "16px",
                marginTop: "4px",
                fontSize: "16px",
              }}
            >
              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(1) ສໍດຳ:"}
                </p>
                <Ruler measuredLength={8} maxLength={8.5} objectType="pencil" />
                <p style={{ margin: "4px 0" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "35px" }}
                  ></span>{" "}
                  {"cm"}
                </p>
              </div>
              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(2) ຢາງລົບ:"}
                </p>
                <Ruler
                  measuredLength={3.6}
                  maxLength={4.5}
                  objectType="eraser"
                />
                <p style={{ margin: "4px 0" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
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
              gap: "12px",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <p style={{ margin: "1px 0" }}>
                {"(1) 2 cm = "} <span className="answer-blank"></span> {"mm"}
              </p>
              <p style={{ margin: "1px 0" }}>
                {"(2) 48 mm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ minWidth: "30px" }}
                ></span>{" "}
                {"cm "}{" "}
                <span
                  className="answer-blank"
                  style={{ minWidth: "30px" }}
                ></span>{" "}
                {"mm"}
              </p>
              <p style={{ margin: "1px 0" }}>
                {"(3) 50 mm = "} <span className="answer-blank"></span> {"cm"}
              </p>
              <p style={{ margin: "1px 0" }}>
                {"(4) 7 cm 2 mm = "} <span className="answer-blank"></span>{" "}
                {"mm"}
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
              gap: "8px",
              marginTop: "16px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              {
                "ໂຕະໜຶ່ງມີຄວາມກວ້າງທາງນອນ 35 cm 5 mm, ທາງຕັ້ງ 20 cm. ທາງນອນຈະຍາວກວ່າທາງຕັ້ງຈັກ cm ແລະ mm? "
              }{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p style={{ margin: "1px 0" }}>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span
                className="answer-blank answer-blank--large"
                style={{ minWidth: "150px" }}
              ></span>
            </p>
            <p style={{ margin: "1px 0" }}>
              {"ຕອບ: "} <span className="answer-blank"></span> {"cm "}{" "}
              <span className="answer-blank"></span> {"mm"}
            </p>
          </div>
        ),
      },
    ],
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງບອກຄວາມຍາວຂອງສິ່ງຂອງຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "16px",
                marginTop: "8px",
                fontSize: "14px",
              }}
            >
              <div style={{ width: "32%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(1) ເສັ້ນຊື່:"}
                </p>
                <Ruler measuredLength={5.5} maxLength={7} objectType="line" />
                <p style={{ marginTop: "4px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>
              <div style={{ width: "32%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(2) ສໍດຳ:"}
                </p>
                <Ruler measuredLength={4.8} maxLength={6} objectType="pencil" />
                <p style={{ marginTop: "4px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>
              <div style={{ width: "32%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(3) ຢາງລົບ:"}
                </p>
                <Ruler measuredLength={6.2} maxLength={7} objectType="eraser" />
                <p style={{ marginTop: "4px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
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
              gap: "12px",
              marginTop: "16px",
              marginBottom: "20px",
            }}
          >
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {"ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <p>
                {"(1) 25 mm = "} <span className="answer-blank"></span> {"cm "}{" "}
                <span className="answer-blank"></span> {"mm"}
              </p>
              <p>
                {"(2) 48 mm = "} <span className="answer-blank"></span> {"cm "}{" "}
                <span className="answer-blank"></span> {"mm"}
              </p>
              <p>
                {"(3) 62 mm = "} <span className="answer-blank"></span> {"cm "}{" "}
                <span className="answer-blank"></span> {"mm"}
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
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {"ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <p>
                {"(1) 6 cm = "} <span className="answer-blank"></span> {"mm"}
              </p>
              <p>
                {"(2) 90 mm = "} <span className="answer-blank"></span> {"cm"}
              </p>
              <p>
                {"(3) 4 cm 3 mm = "} <span className="answer-blank"></span>{" "}
                {"mm"}
              </p>
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
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: "8px",
                }}
              >
                <div>
                  <span>{"(1) 7 cm + 5 cm"}</span>
                  <span style={{ marginLeft: "12px" , whiteSpace: "nowrap"}}>
                    {"="} <span className="answer-blank"></span> {"cm"}
                  </span>
                </div>
                <div>
                  <span>{"(2) 15 mm + 5 mm"}</span>
                  <span style={{ marginLeft: "12px" , whiteSpace: "nowrap"}}>
                    {"="} <span className="answer-blank"></span> {"mm = "}{" "}
                    <span className="answer-blank"></span> {"cm"}
                  </span>
                </div>
                <div>
                  <span>{"(3) 6 cm 4 mm + 5 mm"}</span>
                  <span style={{ marginLeft: "12px" , whiteSpace: "nowrap"}}>
                    {"="} <span className="answer-blank"></span> {"cm "}{" "}
                    <span className="answer-blank"></span> {"mm"}
                  </span>
                </div>
                <div>
                  <span>{"(4) 8 cm 7 mm − 3 cm"}</span>
                  <span style={{ marginLeft: "12px" , whiteSpace: "nowrap"}}>
                    {"="} <span className="answer-blank"></span> {"cm "}{" "}
                    <span className="answer-blank"></span> {"mm"}
                  </span>
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
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບັອກ "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "18px",
                    verticalAlign: "middle",
                    minWidth: "24px",
                  }}
                ></span>{" "}
                {"ໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p>
                  {"(1) 50 mm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "30px", minWidth: "30px" }}
                  ></span>{" "}
                  {"5 cm"}
                </p>
                <p>
                  {"(2) 3 cm 8 mm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "30px", minWidth: "30px" }}
                  ></span>{" "}
                  {"41 mm"}
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
                textAlign: "left",
              }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
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
                <div>
                  <p style={{ marginBottom: "8px" }}>
                    {
                      "(1) ໂບສີແດງຍາວ 9 cm 5 mm, ໂບສີຟ້າຍາວ 7 cm. ໂບສີແດງຈະຍາວກວ່າໂບສີຟ້າຈັກ cm ແລະ mm?"
                    }
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                    <span
                      className="answer-blank answer-blank--large"
                      style={{ minWidth: "150px" }}
                    ></span>
                  </p>
                  <p>
                    {"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"cm "}{" "}
                    <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"mm"}
                  </p>
                </div>
                <div>
                  <p style={{ marginBottom: "8px" }}>
                    {
                      "(2) ມີໄມ້ໄຜ່ທັງໝົດຍາວ 15 cm, ຕັດອອກໄປໃຊ້ 6 cm 5 mm. ໄມ້ໄຜ່ຈະຍັງເຫຼືອຄວາມຍາວເທົ່າໃດ?"
                    }
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                    <span
                      className="answer-blank answer-blank--large"
                      style={{ minWidth: "150px" }}
                    ></span>
                  </p>
                  <p>
                    {"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"cm "}{" "}
                    <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"mm"}
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "",
    },

    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 3 cm"}</span>,
            <span key="2">{"(2) 5 cm"}</span>,
            <span key="3">{"(3) 8 cm"}</span>,
            <span key="4">{"(4) 10 cm"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="5">{"(1) 2 cm 5 mm"}</span>,
            <span key="6">{"(2) 4 cm 8 mm"}</span>,
            <span key="7">{"(3) 6 cm 2 mm"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="8">{"(1) 60"}</span>,
            <span key="9">{"(2) 9"}</span>,
            <span key="10">{"(3) 43"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="11">{"(1) 12 cm"}</span>,
            <span key="12">{"(2) 20 mm = 2 cm"}</span>,
            <span key="13">{"(3) 6 cm 9 mm"}</span>,
            <span key="14">{"(4) 5 cm 7 mm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="15">{"(1) ="}</span>,
            <span key="16">{"(2) < (3 cm 8 mm = 38 mm)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 3",
          answers: [
            <span key="17">
              {"(1) 9 cm 5 mm − 7 cm = 2 cm 5 mm, ຕອບ: 2 cm 5 mm"}
            </span>,
            <span key="18">
              {"(2) 15 cm − 6 cm 5 mm = 8 cm 5 mm, ຕອບ: 8 cm 5 mm"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 4",
          answers: [
            <span key="s1">{"1: (1) 8 cm, (2) 3 cm 6 mm"}</span>,
            <span key="s2">{"2: (1) 20, (2) 4 cm 8 mm, (3) 5, (4) 72"}</span>,
            <span key="s3">
              {
                "3: ປະໂຫຍກສັນຍະລັກ: 35 cm 5 mm − 20 cm = 15 cm 5 mm, ຕອບ: 15 cm 5 mm"
              }
            </span>,
          ],
        },
      ],
      advice:
        "1 cm ເທົ່າກັບ 10 mm ເດີ! ເວລາບວກ ຫຼື ລົບ ຕ້ອງໄລ່ຫົວໜ່ວຍດຽວກັນ, ເຊັ່ນ cm ບວກກັບ cm, mm ບວກກັບ mm. ຖ້າໄລ່ບໍ່ພໍ ຕ້ອງປ່ຽນ cm ເປັນ mm ກ່ອນເດີ!",
    },
  };
