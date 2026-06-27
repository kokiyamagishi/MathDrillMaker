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

export const unit5Data: UnitData = {
    
    unitNumber: 5,
    unitTitle: "ການຫານທີ່ມີເສດ",
    unitGoal: "ຮຽນຮູ້ການຫານທີ່ມີເສດ ແລະ ວິທີກວດຄືນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"5. ການຫານທີ່ມີເສດ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ເມື່ອແບ່ງສິ່ງຂອງອອກເປັນກຸ່ມເທົ່າໆກັນແລ້ວຍັງມີສ່ວນທີ່ເຫຼືອ, ສ່ວນນັ້ນເອີ້ນວ່າ 'ຕົວເສດ'. ສິ່ງສຳຄັນແມ່ນ: ຕົວເສດ ຕ້ອງນ້ອຍກວ່າ ຕົວຫານ ສະເໝີ!"
            }
          </p>
          <div
            style={{
              backgroundColor: "#E8F5E9",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              className="math-illustration"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  border: "2px solid #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ກຸ່ມທີ 1"}
                </div>
                <ItemGrid item="🍬" count={4} />
              </div>
              <div
                style={{
                  border: "2px solid #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ກຸ່ມທີ 2"}
                </div>
                <ItemGrid item="🍬" count={4} />
              </div>
              <div
                style={{
                  border: "2px solid #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ກຸ່ມທີ 3"}
                </div>
                <ItemGrid item="🍬" count={4} />
              </div>
              <div
                style={{
                  border: "2px dashed #9E9E9E",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                    color: "#757575",
                    fontSize: "22px",
                  }}
                >
                  {"ຕົວເສດ"}
                </div>
                <ItemGrid item="🍬" count={2} />
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "24px" }}>
              {"ມີເຂົ້າໜົມ 14 ກ້ອນ ແບ່ງໃຫ້ 3 ກຸ່ມ ກຸ່ມລະເທົ່າກັນ."} <br />
              {"ຈະໄດ້ກຸ່ມລະ 4 ກ້ອນ ແລະ ເຫຼືອ 2 ກ້ອນ."} <br />
              <strong>{"14 ÷ 3 = 4 ເສດ 2"}</strong>
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້ ແລະ ຊອກຕົວເສດ: "}{" "}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span>{"10 ÷ 3 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສດ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>{"15 ÷ 4 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສດ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(3)"}
                </span>
                <span>{"19 ÷ 5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສດ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <div style={{  }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {"(4)"}
              </span>
              <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                {
                  "ມີໝາກກ້ວຍ 26 ໜ່ວຍ, ແບ່ງໃຫ້ລີງ 6 ໂຕເທົ່າໆກັນ. ແຕ່ລະໂຕຈະໄດ້ຈັກໜ່ວຍ ແລະ ເຫຼືອໝາກກ້ວຍຈັກໜ່ວຍ?"
                }
              </span>
              <div
                style={{
                  marginTop: "8px",
                  paddingLeft: "40px",
                  fontSize: "20px",
                }}
              >
                <span>{"ຕອບ: ໄດ້ໂຕລະ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                    margin: "0 10px",
                  }}
                ></span>
                <span>{"ໜ່ວຍ, ເສດ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                    margin: "0 10px",
                  }}
                ></span>
                <span>{"ໜ່ວຍ."}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການແບ່ງປັນ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(1)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີປຶ້ມ 25 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກຫົວ ແລະ ເຫຼືອຈັກຫົວ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຫົວ, ເຫຼືອ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຫົວ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີໄຂ່ 30 ໜ່ວຍ, ຈັດໃສ່ກ່ອງ ກ່ອງລະ 8 ໜ່ວຍ. ຈະໄດ້ຈັກກ່ອງ ແລະ ເຫຼືອໄຂ່ຈັກໜ່ວຍ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ: ໄດ້"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກ່ອງ, ເຫຼືອ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ໜ່ວຍ."}</span>
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
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາທີ່ຕ້ອງພިຈາລະນາຕົວເສດ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(3)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ນັກຮຽນ 17 ຄົນ ຕ້ອງການນັ່ງໂຕະ ໂຕະລະ 3 ຄົນ. ຕ້ອງໃຊ້ໂຕະຈັກໜ່ວຍ ຈຶ່ງຈະພອນັ່ງທຸກຄົນ? (ລະວັງ: ຕົວເສດກໍຕ້ອງນັ່ງໂຕະ)"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ: ຕ້ອງໃຊ້ໂຕະ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ໜ່ວຍ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີເງິນ 45,000 ກີບ, ຢາກຊື້ປຶ້ມຫົວລະ 6,000 ກີບ. ຈະຊື້ໄດ້ຫຼາຍທີ່ສຸດຈັກຫົວ ແລະ ເງິນທອນເຫຼືອເທົ່າໃດ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ: ຊື້ໄດ້"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຫົວ, ເງິນທອນ"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກີບ."}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ສຳລັບຂໍ້ 3, ຄົນທີ່ເຫຼືອ (ຕົວເສດ) ກໍຕ້ອງໄດ້ນັ່ງໂຕະຄືກັນ ສະນັ້ນຕ້ອງບວກໂຕະເພີ່ມອີກ 1 ໜ່ວຍ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈົ່ງຊອກຫາຄຳຕອບ: "}{" "}
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
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span>{"13 ÷ 2 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສດ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>{"20 ÷ 3 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເສດ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
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
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(3)"}
                </span>
                <span>
                  {
                    "ມີເຂົ້າໜົມ 19 ກ້ອນ ແບ່ງໃຫ້ 5 ຄົນ. ຈະໄດ້ຄົນລະເທົ່າໃດ ແລະ ເຫຼືອເທົ່າໃດ?"
                  }
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginLeft: "12px",
                  }}
                >
                  <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ກ້ອນ, ເຫຼືອ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ກ້ອນ."}</span>
                </div>
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
              {"(1) 3 ເສດ 1, (2) 3 ເສດ 3, (3) 3 ເສດ 4, (4) 4 ເສດ 2"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 6 ເສດ 1, (2) 6 ເສດ 2, (3) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"(1) 6 ເສດ 1, (2) 6 ເສດ 2, (3) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"}
            </span>,
          ],
        },
      ],
      advice:
        "ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ. ຖ້າຕົວເສດໃຫຍ່ກວ່າຕົວຫານ ສະແດງວ່າຜົນຫານຍັງໃຫຍ່ໄດ້ອີກເດີ້!",
    },
  };
