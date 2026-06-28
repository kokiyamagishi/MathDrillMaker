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

export const unit10Data: UnitData = {
    
    unitNumber: 10,
    unitTitle: "ການຄູນຕາມທາງຕັ້ງ ຕໍ່",
    unitGoal: "ຮຽນຮູ້ການຄູນແບບຕັ້ງບັ້ງເລກ ທີ່ມີຕົວຈື່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ຖ້າຄູນແລ້ວເກີນ 10 ຕ້ອງຈື່ (ທົດ) ໄປຫຼັກຖັດໄປ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"10. ການຄູນຕາມທາງຕັ້ງ ຕໍ່ (ມີຕົວຈື່)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ບາງຄັ້ງ ເວລາຄູນຫຼັກຫົວໜ່ວຍອາດຈະໄດ້ຜົນຫຼາຍກວ່າ 10, ເຮົາຕ້ອງ 'ຈື່' ແລ້ວເອົາໄປບວກໃສ່ຫຼັກຖັດໄປ. ຕົວຢ່າງ: 14 x 3"
            }
          </p>
          <div
            style={{
              backgroundColor: "#E8F5E9",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "120px",
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <VerticalMath
              top={14}
              bottom={3}
              operator="×"
              showAnswer={true}
              columns={3}
            />
            <div
              style={{ fontSize: "22px", maxWidth: "400px", lineHeight: "1.6" }}
            >
              <p style={{ margin: "4px 0" }}>
                {
                  "① ຫຼັກໜ່ວຍ: 4 x 3 = 12. ຂຽນ 2 ໃສ່ຫຼັກໜ່ວຍ ແລ້ວຈື່ 1 ໃສ່ຫຼັກສິບ (ຂຽນ 1 ແດງນ້ອຍໆໄວ້ເທິງຫຼັກສິບ)."
                }
              </p>
              <p style={{ margin: "4px 0" }}>
                {
                  "② ຫຼັກສິບ: 1 x 3 = 3. ເອົາ 3 ບວກກັບ 1 (ຈື່) = 4. ຂຽນ 4 ໃສ່ຫຼັກສິບ."
                }
              </p>
              <p style={{ margin: "4px 0" }}>{"③ ຜົນຄູນທັງໝົດແມ່ນ 42."}</p>
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ມີຕົວຈື່): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(1)"}
                </span>
                <VerticalMath top={15} bottom={3} operator="×" columns={3} />
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(2)"}
                </span>
                <VerticalMath top={24} bottom={4} operator="×" columns={3} />
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(3)"}
                </span>
                <VerticalMath top={16} bottom={5} operator="×" columns={3} />
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
              {"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້ (ມີຕົວຈື່): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(4)"}
                </span>
                <VerticalMath top={38} bottom={2} operator="×" columns={3} />
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(5)"}
                </span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບໄຂ່: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" , whiteSpace: "nowrap"}}>
                  {"ມີໄຂ່ 4 ແຕະ, ແຕ່ລະແຕະມີ 24 ໜ່ວຍ. ລວມທັງໝົດມີໄຂ່ຈັກໜ່ວຍ?"}
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
                  <span>{"ໜ່ວຍ"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຈ່າຍເງິນ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" , whiteSpace: "nowrap"}}>
                  {"ຊື້ເຂົ້າໜົມ 5 ຖົງ, ຖົງລະ 15 ພັນກີບ. ຕ້ອງຈ່າຍເງິນເທົ່າໃດ?"}
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
      hintText: "ຢ່າລືມເອົາຕົວຈື່ໄປບວກໃສ່ຫຼັງຈາກຄູນຫຼັກຫົວສິບແລ້ວ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນມີຈື່ 1 "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(1)"}
                </span>
                <VerticalMath top={17} bottom={4} operator="×" columns={3} />
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(2)"}
                </span>
                <VerticalMath top={28} bottom={3} operator="×" columns={3} />
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
              {"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນມີຈື່ 2 "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(3)"}
                </span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
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
                    alignSelf: "flex-start", whiteSpace: "nowrap"}}
                >
                  {"(4)"}
                </span>
                <VerticalMath top={19} bottom={5} operator="×" columns={3} />
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
            <span key="1">{"(1) 45, (2) 96, (3) 80, (4) 76, (5) 90"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 96 ໜ່ວຍ (24 x 4), (2) 75 ພັນກີບ (15 x 5)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 68, (2) 84, (3) 90, (4) 95"}</span>],
        },
      ],
      advice:
        "ການຈື່ (ການທົດ) ຕົວເລກ ເປັນຈຸດທີ່ນັກຮຽນມັກຫຼົງລືມ. ພະຍາຍາມຂຽນຕົວຈື່ນ້ອຍໆໄວ້ເທິງຫົວເລກຈະຊ່ວຍໄດ້ເດີ!",
    },
  };
