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

export const unit4Data: UnitData = {
    
    unitNumber: 4,
    unitTitle: "ວົງມົນ ແລະ ໜ່ວຍມົນ",
    unitGoal: "ຮຽນຮູ້ວົງມົນ ແລະ ໜ່ວຍມົນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ວົງມົນມີຈຸດໃຈກາງ, ລັດສະໝີ ແລະ ເສັ້ນຜ່າກາງ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"4. ວົງມົນ ແລະ ໜ່ວຍມົນ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ວົງມົນແມ່ນຮູບຮ່າງແບນທີ່ມີຂອບໂຄ້ງ. ສ່ວນໜ່ວຍມົນແມ່ນຮູບຊົງສາມມິຕິ ເຊັ່ນ: ໝາກບານ. ວົງມົນມີຈຸດໃຈກາງ, ລັດສະໝີ ແລະ ເສັ້ນຜ່າກາງ."
            }
          </p>
          <div
            className="math-illustration"
            style={{
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "150px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "150px",
                    borderRadius: "50%",
                    backgroundColor: "#2196F3",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "75px",
                    height: "2px",
                    backgroundColor: "red",
                    transformOrigin: "left",
                    transform: "rotate(0deg)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </div>
              <span style={{ fontSize: "22px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                {"ລັດສະໝີ (ເຄິ່ງວົງມົນ)"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "150px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "150px",
                    borderRadius: "50%",
                    backgroundColor: "#2196F3",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    width: "100px",
                    height: "2px",
                    backgroundColor: "green",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </div>
              <span style={{ fontSize: "22px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                {"ເສັ້ນຜ່າກາງ (ລັດສະໝີ x 2)"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບວົງມົນ: "}{" "}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(1)"}
                </span>
                <span>
                  {
                    "ເສັ້ນທີ່ຂີດຜ່ານຈຸດໃຈກາງ ຈາກຂອບໜຶ່ງຫາອີກຂອບໜຶ່ງ ເອີ້ນວ່າຫຍັງ?"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(2)"}
                </span>
                <span>
                  {"ເສັ້ນທີ່ຂີດຈາກຈຸດໃຈກາງ ຫາຂອບວົງມົນ ເອີ້ນວ່າຫຍັງ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
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
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມສຳພັນ ແລະ ຮູບຊົງ: "}{" "}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(3)"}
                </span>
                <span>{"ລັດສະໝີ ມີຄວາມຍາວເປັນແນວໃດ ທຽບກັບ ເສັ້ນຜ່າກາງ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(4)"}
                </span>
                <span>{"ໝາກບານ ເປັນຕົວແທນຂອງຮູບຊົງຫຍັງ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
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
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງເສັ້ນຜ່າກາງ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }, whiteSpace: "nowrap"}>
                  {
                    "ວົງມົນໜຶ່ງມີລັດສະໝີຍາວ 4 cm. ເສັ້ນຜ່າກາງຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"
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
                  <span>{"cm"}</span>
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
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງລັດສະໝີ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }, whiteSpace: "nowrap"}>
                  {
                    "ວົງມົນໜຶ່ງມີເສັ້ນຜ່າກາງຍາວ 10 cm. ລັດສະໝີຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"
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
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ເສັ້ນຜ່າກາງ = ລັດສະໝີ x 2. ລັດສະໝີ = ເສັ້ນຜ່າກາງ ÷ 2.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(1)"}
                </span>
                <span>
                  {"ຖ້າວົງມົນມີລັດສະໝີ 15 cm, ເສັ້ນຜ່າກາງຈະແມ່ນເທົ່າໃດ cm?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
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
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>
                  {"(2)"}
                </span>
                <span>{"ຮູບຮ່າງຂອງໜ້າປັດໂມງທົ່ວໄປ ເປັນຮູບຫຍັງ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
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
          answers: [<span key="1">{"(1) ເສັ້ນຜ່າກາງ, (2) ລັດສະໝີ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">
              {
                "(3) ເປັນເຄິ່ງໜຶ່ງຂອງເສັ້ນຜ່າກາງ (ເສັ້ນຜ່າກາງ ÷ 2), (4) ໜ່ວຍມົນ (ຮູບຊົງກົມ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 8 cm (4 x 2), (2) 5 cm (10 ÷ 2)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 30 cm (15 x 2), (2) ວົງມົນ (ຮູບວົງມົນ)"}</span>,
          ],
        },
      ],
      advice:
        "ຈົ່ງຈື່ຈຳຄວາມແຕກຕ່າງລະຫວ່າງ 'ລັດສະໝີ' ແລະ 'ເສັ້ນຜ່າກາງ' ໃຫ້ດີເດີ້! ມັນມີປະໂຫຍດຫຼາຍໃນບົດຮຽນຕໍ່ໄປ.",
    },
  };
