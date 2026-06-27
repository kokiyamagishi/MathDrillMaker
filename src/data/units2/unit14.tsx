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

export const unit14Data: UnitData = {
    
    unitNumber: 14,
    unitTitle: "ໂຈດບັນຫາກ່ຽວກັບການບວກ ແລະ ການລົບ (ຕໍ່)",
    unitGoal: "ແກ້ໂຈດບັນຫາການບວກ ແລະ ການລົບ ໂດຍນຳໃຊ້ແຜນວາດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 184〜189",
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
            {"ການນຳໃຊ້ແຜນວາດເຂົ້າໃນການແກ້ໂຈດບັນຫາ"}
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
              <p>{"ເວລາແກ້ໂຈດບັນຫາ ຄວນແຕ້ມແຜນວາດເພື່ອໃຫ້ເຂົ້າໃຈງ່າຍຂຶ້ນ."}</p>
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
                  "ແຜນວາດຈະສະແດງໃຫ້ເຫັນ: ຈຳນວນທຳອິດ, ຈຳນວນທີ່ປ່ຽນແປງ (ມາຕື່ມ ຫຼື ເອົາອອກ) ແລະ ຈຳນວນທັງໝົດ."
                }
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#FFF",
              borderRadius: "8px",
              border: "1px dashed #CCC",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {"ຕົວຢ່າງການນຳໃຊ້ແຜນວາດ"}
            </p>
            <p>{"ມີໝາກຫຸ່ງ 23 ໜ່ວຍ. ຂາຍໄປ 15 ໜ່ວຍ. ຍັງເຫຼືອຈັກໜ່ວຍ?"}</p>
            <TapeDiagram
              type="single"
              totalLabel="ທຳອິດມີ 23 ໜ່ວຍ"
              leftLabel="ຂາຍໄປ 15 ໜ່ວຍ"
              rightLabel="ຍັງເຫຼືອ ?"
              leftWidthPercent={65}
            />
            <p style={{ textAlign: "center", marginTop: "12px" }}>
              {"ປະໂຫຍກສັນຍະລັກ: 23 - 15 = 8. ຕອບ: 8 ໜ່ວຍ"}
            </p>
          </div>
        </>
      ),
      hint: {
        text: "ຖ້າຂາຍໄປ, ກິນໄປ ຫຼື ເອົາອອກ ໃຫ້ໃຊ້ການລົບ (-). ຖ້າມາຕື່ມ, ຊື້ເພີ່ມ ຫຼື ເອົາເຂົ້າ ໃຫ້ໃຊ້ການບວກ (+).",
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
              {
                "ມີເຈ້ຍຈຳນວນໜຶ່ງ ໃຊ້ໄປແລ້ວ 8 ໃບ, ຍັງເຫຼືອ 7 ໃບ. ຈຳນວນເຈ້ຍທີ່ມີທຳອິດແມ່ນຈັກໃບ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="single"
              totalLabel="ທຳອິດມີ ? ໃບ"
              leftLabel="ໃຊ້ໄປແລ້ວ 8 ໃບ"
              rightLabel="ຍັງເຫຼືອ 7 ໃບ"
              leftWidthPercent={50}
            />
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ໃບ"}
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
                "ມີໝາກບານ 8 ໜ່ວຍ ແລະ ໝາກກະຕໍ້ 12 ໜ່ວຍ. ອັນໃດຫຼາຍກວ່າ ແລະ ຫຼາຍກວ່າຈັກໜ່ວຍ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="compare"
              topBarLabel="ໝາກບານ"
              topBarValue="8 ໜ່ວຍ"
              topBarWidthPercent={40}
              bottomBarLabel="ໝາກກະຕໍ້"
              bottomBarValue="12 ໜ່ວຍ"
              bottomBarWidthPercent={60}
              differenceLabel="ຫຼາຍກວ່າ ? ໜ່ວຍ"
            />
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ຫຼາຍກວ່າ "}{" "}
              <span className="answer-blank"></span> {" ໜ່ວຍ"}
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
                  "ຫ້ອງຮຽນມີນັກຮຽນຍິງ 18 ຄົນ, ນັກຮຽນຊາຍໜ້ອຍກວ່ານັກຮຽນຍິງ 2 ຄົນ. ນັກຮຽນຊາຍມີຈັກຄົນ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <TapeDiagram
                type="compare"
                topBarLabel="ຍິງ"
                topBarValue="18 ຄົນ"
                topBarWidthPercent={70}
                bottomBarLabel="ຊາຍ"
                bottomBarValue="? ຄົນ"
                bottomBarWidthPercent={55}
                differenceLabel="ໜ້ອຍກວ່າ 2 ຄົນ"
              />
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
                  "ຮ້ານຂາຍໝາກໄມ້ ມີໝາກພ້າວ 7 ໜ່ວຍ, ໝາກໂມຫຼາຍກວ່າໝາກພ້າວ 9 ໜ່ວຍ. ໝາກໂມແມ່ນມີຈັກໜ່ວຍ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <TapeDiagram
                type="compare"
                topBarLabel="ໝາກພ້າວ"
                topBarValue="7 ໜ່ວຍ"
                topBarWidthPercent={30}
                bottomBarLabel="ໝາກໂມ"
                bottomBarValue="? ໜ່ວຍ"
                bottomBarWidthPercent={70}
                differenceLabel="ຫຼາຍກວ່າ 9 ໜ່ວຍ"
              />
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
      ],
      hintIndex: 0,
      hintText: "ຖ້າໜ້ອຍກວ່າໃຫ້ໃຊ້ລົບ (-), ຖ້າຫຼາຍກວ່າໃຫ້ໃຊ້ບວກ (+) ເດີ້!",
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
                "ມີແມວຈຳນວນໜຶ່ງ. ມາຕື່ມອີກ 6 ໂຕ, ທັງໝົດເປັນ 14 ໂຕ. ແມວທີ່ມີທຳອິດແມ່ນຈັກໂຕ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="single"
              totalLabel="ທັງໝົດ 14 ໂຕ"
              leftLabel="ທຳອິດມີ ? ໂຕ"
              rightLabel="ມາຕື່ມອີກ 6 ໂຕ"
              leftWidthPercent={60}
            />
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
                "ມີໄຂ່ຢູ່ເຮືອນ 8 ໜ່ວຍ ຊື້ມາຕື່ມອີກຈຳນວນໜຶ່ງ ລວມທັງໝົດເປັນ 20 ໜ່ວຍ. ໄຂ່ທີ່ຊື້ມາຕື່ມອີກແມ່ນມີຈັກໜ່ວຍ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="single"
              totalLabel="ລວມທັງໝົດເປັນ 20 ໜ່ວຍ"
              leftLabel="ມີຢູ່ເຮືອນ 8 ໜ່ວຍ"
              rightLabel="ຊື້ມາຕື່ມອີກ ? ໜ່ວຍ"
              leftWidthPercent={40}
            />
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
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="u14-1">{"8 + 7 = 15, ຕອບ: 15 ໃບ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u14-2">
              {"12 - 8 = 4, ຕອບ: ໝາກກະຕໍ້ຫຼາຍກວ່າ 4 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u14-c1">{"18 - 2 = 16, ຕອບ: 16 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u14-c2">{"7 + 9 = 16, ຕອບ: 16 ໜ່ວຍ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 14",
          answers: [
            <span key="u14-s1">{"ຂໍ້ 1: 14 - 6 = 8, ຕອບ: 8 ໂຕ"}</span>,
            <span key="u14-s2">{"ຂໍ້ 2: 20 - 8 = 12, ຕອບ: 12 ໜ່ວຍ"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຊອກຫາຈຳນວນທຳອິດກ່ອນຈະເພີ່ມຂຶ້ນ ໃຫ້ໃຊ້ການລົບ! ຕົວຢ່າງ: ມີທັງໝົດ 14 ໂຕ, ມາໃໝ່ 6 ໂຕ ໝາຍຄວາມວ່າ ທຳອິດມີ 14 - 6 = 8 ໂຕ.",
    },
  };
