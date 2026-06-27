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

export const unit8Data: UnitData = {
    
    unitNumber: 8,
    unitTitle: "ການຄູນຕາມທາງຕັ້ງ",
    unitGoal: "ຮຽນຮູ້ການຄູນແບບຕັ້ງບັ້ງເລກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ເອົາຕົວຄູນ ຄູນກັບຫຼັກຫົວໜ່ວຍ ແລ້ວຈຶ່ງຄູນກັບຫຼັກຫົວສິບ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"8. ການຄູນຕາມທາງຕັ້ງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {"ການຄູນຈຳນວນຫຼາຍຂຶ້ນ ສາມາດໃຊ້ວິທີຕັ້ງບັ້ງເລກ. ຕົວຢ່າງ: 12 x 3"}
          </p>
          <div
            style={{
              backgroundColor: "#FFF3E0",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "120px",
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <VerticalMath
                top={12}
                bottom={3}
                operator="×"
                showAnswer={true}
                columns={3}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              <div>{"① 3 x 2 = 6 (ຫຼັກຫົວໜ່ວຍ)"}</div>
              <div>{"② 3 x 1 = 3 (ຫຼັກຫົວສິບ)"}</div>
              <div>{"ດັ່ງນັ້ນ ຄຳຕອບແມ່ນ 36"}</div>
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ບໍ່ມີຈື່): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(1)"}
                </span>
                <VerticalMath top={14} bottom={2} operator="×" columns={3} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(2)"}
                </span>
                <VerticalMath top={21} bottom={4} operator="×" columns={3} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(3)"}
                </span>
                <VerticalMath top={32} bottom={3} operator="×" columns={3} />
              </div>
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
              {"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້ (ບໍ່ມີຈື່): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(4)"}
                </span>
                <VerticalMath top={11} bottom={5} operator="×" columns={3} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(5)"}
                </span>
                <VerticalMath top={22} bottom={4} operator="×" columns={3} />
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຈຳນວນນັກຮຽນ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                  {
                    "ນັກຮຽນຊັ້ນ ປ.3 ມີ 3 ຫ້ອງ, ແຕ່ລະຫ້ອງມີ 23 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "8px",
                    paddingLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                      margin: "0 10px",
                    }}
                  ></span>
                  <span>{"ຄົນ"}</span>
                </div>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບລາຄາ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                  {
                    "ຊື້ປຶ້ມ 4 ຫົວ, ຫົວລະ 21 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "8px",
                    paddingLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                      margin: "0 10px",
                    }}
                  ></span>
                  <span>{"ພັນກີບ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ໃຊ້ການຄູນຕາມທາງຕັ້ງເພື່ອຄວາມສະດວກໃນການຄິດໄລ່ເດີ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນ 1 "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(1)"}
                </span>
                <VerticalMath top={13} bottom={3} operator="×" columns={3} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(2)"}
                </span>
                <VerticalMath top={34} bottom={2} operator="×" columns={3} />
              </div>
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
              {"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນ 2 "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(3)"}
                </span>
                <VerticalMath top={42} bottom={2} operator="×" columns={3} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(4)"}
                </span>
                <VerticalMath top={11} bottom={8} operator="×" columns={3} />
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
            <span key="1">{"(1) 28, (2) 84, (3) 96, (4) 55, (5) 88"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 69 ຄົນ (23 x 3), (2) 84 ພັນກີບ (21 x 4)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 39, (2) 68, (3) 84, (4) 88"}</span>],
        },
      ],
      advice:
        "ຖ້າຄູນແລ້ວບໍ່ມີຕົວທົດ (ຕົວຈື່) ກໍຂຽນລົງມາໄດ້ເລີຍ. ງ່າຍດາຍຫຼາຍເນາະ!",
    },
  };
