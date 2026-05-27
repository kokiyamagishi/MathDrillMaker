import React from "react";
import { UnitData } from "./units2";
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
export const unitsData3: UnitData[] = [
  {
    unitNumber: 1,
    unitTitle: "ການຄູນ",
    unitGoal: "ຮຽນຮູ້ການຄູນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ການຄູນແມ່ນການບວກຈຳນວນດຽວກັນຫຼາຍໆເທື່ອ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຄູນ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການຄູນແມ່ນການບວກຈຳນວນດຽວກັນຫຼາຍໆເທື່ອ. ຕົວຢ່າງ: ມີໝາກໂປມ 3 ກຸ່ມ, ກຸ່ມລະ 4 ໜ່ວຍ, ລວມທັງໝົດມີເທົ່າໃດ?"
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
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
                  border: "2px dashed #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ItemGrid item="🍎" count={4} />
              </div>
              <div
                style={{
                  border: "2px dashed #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ItemGrid item="🍎" count={4} />
              </div>
              <div
                style={{
                  border: "2px dashed #4CAF50",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ItemGrid item="🍎" count={4} />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              {"4 + 4 + 4 = 12"} <br />
              {"ເຊິ່ງຂຽນເປັນບັ້ງເລກຄູນໄດ້: 4 x 3 = 12"}
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { n: "(1)", q: "3 x 2 =" },
                { n: "(2)", q: "4 x 5 =" },
                { n: "(3)", q: "6 x 3 =" },
                { n: "(4)", q: "7 x 4 =" },
                { n: "(5)", q: "8 x 6 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
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
              <div style={{ fontSize: "20px" }}>
                <span>
                  {
                    "(6) ມີໝາກກ້ຽງ 4 ຖົງ, ຖົງລະ 5 ໜ່ວຍ. ລວມທັງໝົດມີໝາກກ້ຽງຈັກໜ່ວຍ?"
                  }
                </span>
                <div
                  style={{
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ໜ່ວຍ"}</span>
                </div>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບສິ່ງຂອງ: "}{" "}
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
                      "ມີກ່ອງສໍສີ 5 ກ່ອງ, ແຕ່ລະກ່ອງມີສໍສີ 12 ກ້ານ. ລວມທັງໝົດມີສໍສີຈັກກ້ານ?"
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
                    <span>{"ກ້ານ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ຊື້ເຂົ້າໜົມ 6 ຖົງ, ຖົງລະ 5 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄົນ: "}{" "}
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
                      "ນັກຮຽນຊັ້ນ ປ.3 ມີ 4 ຫ້ອງ, ແຕ່ລະຫ້ອງມີນັກຮຽນ 30 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"
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
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ອ່ານໂຈດໃຫ້ເຂົ້າໃຈວ່າ ແຕ່ລະກຸ່ມມີຈັກອັນ ແລະ ມີຈັກກຸ່ມ. ແລ້ວເອົາຈຳນວນມາຄູນກັນ.",
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
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
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
                { n: "(1)", q: "10 x 5 =" },
                { n: "(2)", q: "20 x 4 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.n}
                  </span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{  }}>
              <div style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ marginLeft: "12px" }}>
                  {"ມີປຶ້ມ 3 ແຖວ, ແຖວລະ 100 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ?"}
                </span>
                <div
                  style={{
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຫົວ"}</span>
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
              {"(1) 6, (2) 20, (3) 18, (4) 28, (5) 48, (6) 20 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 60 ກ້ານ, (2) 30 ພັນກີບ, (3) 120 ຄົນ, (4) 90 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 50, (2) 80, (3) 300 ຫົວ"}</span>],
        },
      ],
      advice:
        "ການທ່ອງບັ້ງສູດໃຫ້ໄດ້ ແມ່ນສຳຄັນຫຼາຍສຳລັບການຄູນ. ນ້ອງໆຄວນຝຶກທ່ອງບັ້ງສູດທຸກໆມື້ເດີ!",
    },
  },
  {
    unitNumber: 2,
    unitTitle: "ເວລາ ແລະ ໄລຍະເວລາ",
    unitGoal: "ຮຽນຮູ້ເວລາ, ໄລຍະເວລາ ແລະ ວິນາທີ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 ນາທີມີ 60 ວິນາທີ. 1 ຊົ່ວໂມງມີ 60 ນາທີ." },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"2. ເວລາ ແລະ ໄລຍະເວລາ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ພວກເຮົາໃຊ້ໂມງເພື່ອບອກເວລາ. ໜຶ່ງວັນມີ 24 ຊົ່ວໂມງ. ໜຶ່ງຊົ່ວໂມງມີ 60 ນາທີ. ແລະ ໜຶ່ງນາທີມີ 60 ວິນາທີ (ວິນາທີແມ່ນຫົວໜ່ວຍທີ່ນ້ອຍທີ່ສຸດທີ່ເຂັມນ້ອຍໆຍ່າງໄວໆນັ້ນເອງ)."
            }
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                backgroundColor: "#E8F5E9",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #4CAF50",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2E7D32",
                }}
              >
                {"1 ມື້ (ວັນ) = 24 ຊົ່ວໂມງ"}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#E3F2FD",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #2196F3",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#1565C0",
                }}
              >
                {"1 ຊົ່ວໂມງ = 60 ນາທີ"}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#FFF3E0",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #FF9800",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#E65100",
                }}
              >
                {"1 ນາທີ = 60 ວິນາທີ"}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#FFF9C4",
              padding: "20px",
              borderRadius: "12px",
              flexWrap: "wrap",
              marginTop: "12px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "60px" }}>🕐</div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"1:00"}
              </div>
              <div>{"ໜຶ່ງໂມງຕົງ"}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "60px" }}>🕒</div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"3:00"}
              </div>
              <div>{"ສາມໂມງຕົງ"}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "60px" }}>🕝</div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"2:30"}
              </div>
              <div>{"ສອງໂມງເຄິ່ງ (30 ນາທີ)"}</div>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍເວລາລຸ່ມນີ້: "}{" "}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>{"1 ນາທີ = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ວິນາທີ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(3)"}
                </span>
                <span>{"1 ມື້ (1 ວັນ) = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(4)"}
                </span>
                <span>{"1 ຊົ່ວໂມງເຄິ່ງ (1 ຊົ່ວໂມງ 30 ນາທີ) = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ນາທີ"}</span>
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
              {"ຈົ່ງຄິດໄລ່ການບວກລົບເວລາລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(5)"}
                </span>
                <span>{"10 ນາທີ + 20 ນາທີ = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(6)"}
                </span>
                <span>{"30 ນາທີ + 30 ນາທີ = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ fontSize: "20px" }}>
                <span>
                  {"(7) ນາງນ້ອຍໃຊ້ເວລາເຮັດວຽກບ້ານ 60 ນາທີ. ເທົ່າກັບຈັກຊົ່ວໂມງ?"}
                </span>
                <div
                  style={{
                    marginTop: "12px",
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{"ຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
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
                {"ຈົ່ງແກ້ໂຈດກ່ຽວກັບໄລຍະເວລາ: "}{" "}
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
                      "ນາງດາວເລີ່ມອ່ານປຶ້ມເວລາ 8:00 ໂມງ ແລະ ອ່ານແລ້ວເວລາ 9:30 ໂມງ. ລາວໃຊ້ເວລາອ່ານປຶ້ມດົນປານໃດ?"
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
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ລົດເມອອກຈາກຄິວລົດເວລາ 10:00 ໂມງ. ໃຊ້ເວລາເດີນທາງ 2 ຊົ່ວໂມງ. ລົດເມຈະໄປຮອດສະຖານີປາຍທາງເວລາຈັກໂມງ?"
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
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
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
                {"ຈົ່ງແກ້ໂຈດກ່ຽວກັບວິນາທີ ແລະ ການບວກລົບເວລາ: "}{" "}
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
                      "ທ້າວຄຳແລ່ນແຂ່ງຂັນໃຊ້ເວລາ 1 ນາທີ 20 ວິນາທີ. ຖ້າປ່ຽນເປັນວິນາທີທັງໝົດ ຈະເທົ່າກັບຈັກວິນາທີ?"
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
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ວິນາທີ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ພັກຜ່ອນຕອນທ່ຽງ 60 ນາທີ. ຖ້າກິນເຂົ້າໃຊ້ເວລາ 20 ນາທີ, ຈະເຫຼືອເວລາຫລິ້ນຈັກນາທີ?"
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
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ນາທີ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ໄລຍະເວລາ = ເວລາສິ້ນສຸດ - ເວລາເລີ່ມຕົ້ນ. 1 ນາທີ = 60 ວິນາທີ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຄວາມຮູ້ກ່ຽວກັບເວລາ "}{" "}
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span>{"1 ຊົ່ວໂມງ ມີຈັກນາທີ?"}</span>
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>{"1 ນາທີ ມີຈັກວິນາທີ?"}</span>
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
              {"ທົດສອບປະຈຳບົດ: ການຄິດໄລ່ເວລາ "}{" "}
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(3)"}
                </span>
                <span>{"15 ນາທີ + 15 ນາທີ = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "22px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(4)"}
                </span>
                <span>{"50 ວິນາທີ - 20 ວິນາທີ = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ວິນາທີ"}</span>
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
          answers: [<span key="1">{"(1) 60, (2) 60, (3) 24, (4) 90"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(5) 30, (6) 60"}</span>],
        },
        {
          questionNumber: 3,
          answers: [<span key="3">{"(7) 1 ຊົ່ວໂມງ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="4">{"(1) 1 ຊົ່ວໂມງ 30 ນາທີ, (2) 12:00 ໂມງ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="5">{"(3) 80 ວິນາທີ, (4) 40 ນາທີ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="6">{"(1) 60 ນາທີ, (2) 60 ວິນາທີ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="7">{"(3) 30 ນາທີ, (4) 30 ວິນາທີ"}</span>],
        },
      ],
      advice:
        "ການຮູ້ເວລາຊ່ວຍໃຫ້ນ້ອງໆເປັນຄົນກົງຕໍ່ເວລາ. 1 ນາທີ ມີ 60 ວິນາທີ ຢ່າລືມເດີ້!",
    },
  },
  {
    unitNumber: 3,
    unitTitle: "ການຫານ",
    unitGoal: "ຮຽນຮູ້ການຫານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ການແບ່ງຈຳນວນອອກເປັນກຸ່ມຍ່ອຍ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"3. ການຫານ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການຫານແມ່ນການແບ່ງຈຳນວນອອກເປັນກຸ່ມຍ່ອຍ ທີ່ແຕ່ລະກຸ່ມມີຈຳນວນເທົ່າກັນ. ຕົວຢ່າງ: ມີໝາກກ້ຽງ 12 ໜ່ວຍ ແບ່ງໃຫ້ 3 ຄົນ, ແຕ່ລະຄົນຈະໄດ້ຈັກໜ່ວຍ?"
            }
          </p>
          <div
            style={{
              backgroundColor: "#FCE4EC",
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
                  border: "2px solid #E91E63",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ຄົນທີ 1"}
                </div>
                <ItemGrid item="🍊" count={4} />
              </div>
              <div
                style={{
                  border: "2px solid #E91E63",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ຄົນທີ 2"}
                </div>
                <ItemGrid item="🍊" count={4} />
              </div>
              <div
                style={{
                  border: "2px solid #E91E63",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "22px" }}>
                  {"ຄົນທີ 3"}
                </div>
                <ItemGrid item="🍊" count={4} />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              {"12 ÷ 3 = 4"} <br />
              {"ຕອບ: ໄດ້ຄົນລະ 4 ໜ່ວຍ"}
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
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { n: "(1)", q: "8 ÷ 2 =" },
                { n: "(2)", q: "10 ÷ 5 =" },
                { n: "(3)", q: "15 ÷ 3 =" },
                { n: "(4)", q: "20 ÷ 4 =" },
                { n: "(5)", q: "18 ÷ 6 =" },
                { n: "(6)", q: "24 ÷ 8 =" },
                { n: "(7)", q: "14 ÷ 7 =" },
                { n: "(8)", q: "30 ÷ 5 =" },
                { n: "(9)", q: "36 ÷ 6 =" },
                { n: "(10)", q: "81 ÷ 9 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຫານ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}
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
                      "ມີປຶ້ມ 20 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ປຶ້ມຈັກຫົວ?"
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
                    <span>{"ຫົວ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ຄູມີສໍດຳ 30 ກ້ານ, ຢາກຈັດໃສ່ກ່ອງ ກ່ອງລະ 5 ກ້ານ. ຈະຕ້ອງໃຊ້ຈັກກ່ອງ?"
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
                    <span>{"ກ່ອງ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(3)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີດອກໄມ້ 42 ດອກ, ມັດເປັນຊໍ່ ຊໍ່ລະ 7 ດອກ. ຈະໄດ້ດອກໄມ້ທັງໝົດຈັກຊໍ່?"
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
                    <span>{"ຊໍ່"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ເງິນ 50,000 ກີບ ແບ່ງໃຫ້ເດັກນ້ອຍ 5 ຄົນ. ແຕ່ລະຄົນຈະໄດ້ເງິນເທົ່າໃດ?"
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
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກີບ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ການຫານ ແມ່ນກົງກັນຂ້າມກັບການຄູນ. ລອງຄິດເບິ່ງວ່າ ຫຍັງຄູນກັນແລ້ວອອກຈຳນວນນັ້ນ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}{" "}
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
                <span>{"4 x"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"= 24  ດັ່ງນັ້ນ, 24 ÷ 4 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
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
                <span>{"5 x"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"= 35  ດັ່ງນັ້ນ, 35 ÷ 5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
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
                <span>{"7 x"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{"= 49  ດັ່ງນັ້ນ, 49 ÷ 7 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
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
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span>
                    {
                      "ມີເຊືອກຍາວ 12 ແມັດ. ຖ້າຕັດແບ່ງເປັນທ່ອນລະ 3 ແມັດ, ຈະໄດ້ເຊືອກທັງໝົດຈັກທ່ອນ?"
                    }
                  </span>
                </div>
                <TapeDiagram
                  type="single"
                  totalLabel="ເຊືອກທັງໝົດ 12 ແມັດ"
                  leftLabel="3 ແມັດ"
                  rightLabel="ສ່ວນທີ່ເຫຼືອ?"
                  leftWidthPercent={25}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                    marginTop: "8px",
                  }}
                >
                  <span>{"ປະໂຫຍກສັນຍາລັກ: 12 ÷ 3 = "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span style={{ marginLeft: "16px" }}>{"ຕອບ: "}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ທ່ອນ"}</span>
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
              {
                "(1) 4, (2) 2, (3) 5, (4) 5, (5) 3, (6) 3, (7) 2, (8) 6, (9) 6, (10) 9"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 5 ຫົວ, (2) 6 ກ່ອງ, (3) 6 ຊໍ່, (4) 10,000 ກີບ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ແລະ 6, (2) 7 ແລະ 7, (3) 7 ແລະ 7"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4">{"(4) 4, 4 ທ່ອນ"}</span>],
        },
      ],
      advice:
        "ຖ້ານ້ອງໆທ່ອງບັ້ງສູດໄດ້ໄວ, ການຫານກໍຈະງ່າຍຂຶ້ນຫຼາຍ. ພະຍາຍາມຝຶກຄິດໃນໃຈເບິ່ງເດີ.",
    },
  },
  {
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
                  width: "150px",
                  height: "150px",
                }}
              >
                <div
                  style={{
                    width: "150px",
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
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>
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
                  width: "150px",
                  height: "150px",
                }}
              >
                <div
                  style={{
                    width: "150px",
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
                    width: "150px",
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
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
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
                    width: "120px",
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>
                  {"ເສັ້ນທີ່ຂີດຈາກຈຸດໃຈກາງ ຫາຂອບວົງມົນ ເອີ້ນວ່າຫຍັງ?"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(3)"}
                </span>
                <span>{"ລັດສະໝີ ມີຄວາມຍາວເປັນແນວໃດ ທຽບກັບ ເສັ້ນຜ່າກາງ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(4)"}
                </span>
                <span>{"ໝາກບານ ເປັນຕົວແທນຂອງຮູບຊົງຫຍັງ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span>{"ຮູບຮ່າງຂອງໜ້າປັດໂມງທົ່ວໄປ ເປັນຮູບຫຍັງ?"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
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
  },
  {
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
  },
  {
    unitNumber: 6,
    unitTitle: "ຈຳນວນຫຼາຍ ແລະ ການຄິດໄລ່",
    unitGoal: "ຮຽນຮູ້ຈຳນວນເຖິງ 10000, ວິທີສະແດງການບວກ ແລະ ການລົບຈຳນວນຫຼາຍ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: [
      {
        hint: {
          text: "ຈຳນວນຫຼາຍສາມາດແບ່ງເປັນ ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ.",
        },
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
              {"6. ຈຳນວນຫຼາຍ (ຮອດ 10000) ແລະ ການຄິດໄລ່ (ພາກທີ 1)"}
            </h3>

            <div
              style={{
                backgroundColor: "#FFF3E0",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#E65100",
                }}
              >
                {
                  "1. ການແບ່ງຈຳນວນຕາມຫຼັກ (ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ)"
                }
              </div>
              <p style={{ fontSize: "22px", margin: 0 }}>
                {"ຕົວຢ່າງ: 3240 ແບ່ງອອກເປັນແຕ່ລະຫຼັກໄດ້ດັ່ງນີ້:"}
              </p>
              <NumberCards thousands={3} hundreds={2} tens={4} ones={0} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                {"3240 = 3000 + 200 + 40 + 0"}
              </div>
              <div style={{ fontSize: "22px", color: "#E65100" }}>
                {
                  "* ໝາຍເຫດ: 0 ຢູ່ຫຼັກໜ່ວຍ ໝາຍຄວາມວ່າບໍ່ມີບັດ 1. ການຮູ້ຈັກຫຼັກໜ່ວຍ (1), ຫຼັກສິບ (10), ຫຼັກຮ້ອຍ (100), ຫຼັກພັນ (1000) ແມ່ນສຳຄັນຫຼາຍ!"
                }
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#E3F2FD",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#1565C0",
                }}
              >
                {"2. ການອ່ານເສັ້ນສະແດງຈຳນວນ (Number Line)"}
              </div>
              <NumberLine
                min={0}
                max={10000}
                step={1000}
                minorStep={500}
                arrows={[
                  {
                    value: 3000,
                    label: "(1)",
                    color: "#E53935",
                    showAnswer: true,
                  },
                  {
                    value: 6500,
                    label: "(2)",
                    color: "#E53935",
                    showAnswer: true,
                  },
                ]}
                width={700}
              />
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginTop: "8px",
                }}
              >
                {"ຄຳຕອບ: (1) ແມ່ນ 3000, (2) ແມ່ນ 6500"}
              </div>
            </div>
          </div>
        ),
      },
      {
        hint: {
          text: "ການບວກລົບເລກຫຼາຍຫຼັກ ແມ່ນໃຫ້ຕັ້ງຫຼັກໃຫ້ຊື່ກັນ. ຢ່າລືມການຈື່ ແລະ ຢືມ.",
        },
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
              {"6. ຈຳນວນຫຼາຍ ແລະ ການຄິດໄລ່ (ພາກທີ 2)"}
            </h3>

            <div
              style={{
                backgroundColor: "#E8F5E9",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#2E7D32",
                }}
              >
                {"3. ການບວກ ແລະ ການລົບເລກ 3 ຫຼັກ (ມີຕົວຈື່ ແລະ ຕົວຢືມ)"}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  marginTop: "16px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "22px",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {"ການບວກ (ມີຕົວຈື່)"}
                  </p>
                  <div
                    style={{
                      border: "2px dashed #4CAF50",
                      padding: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      display: "inline-block",
                    }}
                  >
                    <VerticalMath
                      top={358}
                      bottom={246}
                      operator="+"
                      columns={4}
                      showAnswer={true}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      maxWidth: "250px",
                      marginTop: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <p style={{ margin: "4px 0" }}>
                      {"① ຫຼັກໜ່ວຍ: 8 + 6 = 14. ຂຽນ 4 ແລ້ວຈື່ 1 ໃສ່ຫຼັກສິບ"}
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {
                        "② ຫຼັກສິບ: 5 + 4 + 1(ຈື່) = 10. ຂຽນ 0 ຈື່ 1 ໃສ່ຫຼັກຮ້ອຍ"
                      }
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {"③ ຫຼັກຮ້ອຍ: 3 + 2 + 1(ຈື່) = 6."}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "22px",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {"ການລົບ (ມີຕົວຢືມ)"}
                  </p>
                  <div
                    style={{
                      border: "2px dashed #F44336",
                      padding: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      display: "inline-block",
                    }}
                  >
                    <VerticalMath
                      top={732}
                      bottom={456}
                      operator="-"
                      columns={4}
                      showAnswer={true}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      maxWidth: "250px",
                      marginTop: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <p style={{ margin: "4px 0" }}>
                      {
                        "① ຫຼັກໜ່ວຍ: 2 - 6 ບໍ່ໄດ້, ຢືມ 10 ຈາກຫຼັກສິບມາເປັນ 12. 12 - 6 = 6."
                      }
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {
                        "② ຫຼັກສິບ: ຖືກຢືມໄປເຫຼືお 2. 2 - 5 ບໍ່ໄດ້ ຢືມຮ້ອຍມາເປັນ 12. 12 - 5 = 7."
                      }
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {"③ ຫຼັກຮ້ອຍ: ຖືກຢືມໄປເຫຼືອ 6. 6 - 4 = 2."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <p>
                {"ຈົ່ງບອກຈຳນວນທີ່ລູກສອນຊີ້ໃສ່ໃນເສັ້ນສະແດງຈຳນວນ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}
                </span>
              </p>
              <NumberLine
                min={0}
                max={1000}
                step={100}
                minorStep={50}
                arrows={[
                  {
                    value: 400,
                    label: "(1)",
                    color: "#1976D2",
                    showAnswer: false,
                  },
                  {
                    value: 850,
                    label: "(2)",
                    color: "#4CAF50",
                    showAnswer: false,
                  },
                ]}
                width={700}
              />
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "16px",
                }}
              >
                <div style={{ fontSize: "20px" }}>
                  {"(1) "}
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
                <div style={{ fontSize: "20px" }}>
                  {"(2) "}
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
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div>
            <p>
              {"ຈົ່ງປະກອບບັດລຸ່ມນີ້ໃຫ້ເປັນຈຳນວນ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <NumberCards thousands={2} hundreds={1} tens={5} ones={2} />
              </div>
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span>{" = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div>
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກບວກລຸ່ມນີ້ (ມີຕົວຈື່): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
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
                <VerticalMath top={352} bottom={468} operator="+" columns={4} />
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
                <VerticalMath top={579} bottom={246} operator="+" columns={4} />
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
                  {"(6)"}
                </span>
                <VerticalMath top={895} bottom={145} operator="+" columns={4} />
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 4,
        content: (
          <div>
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກລົບລຸ່ມນີ້ (ມີຕົວຢືມ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
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
                  {"(7)"}
                </span>
                <VerticalMath top={752} bottom={426} operator="-" columns={4} />
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
                  {"(8)"}
                </span>
                <VerticalMath top={815} bottom={347} operator="-" columns={4} />
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
                  {"(9)"}
                </span>
                <VerticalMath top={603} bottom={258} operator="-" columns={4} />
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
                {"ຈົ່ງປຽບທຽບຈຳນວນ ໂດຍໃຊ້ເຄື່ອງໝາຍ > ຫຼື < ໃສ່ບ່ອນວ່າງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}
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
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(1)"}
                  </span>
                  <span>{"4320"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"4302"}</span>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span>{"8999"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"9000"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການບວກລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
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
                      "ໂຮງຮຽນມີນັກຮຽນຍິງ 345 ຄົນ ແລະ ນັກຮຽນຊາຍ 386 ຄົນ. ລວມທັງໝົດມີນັກຮຽນຈັກຄົນ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <VerticalMath
                      top={345}
                      bottom={386}
                      operator="+"
                      columns={4}
                    />
                    <div>
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
              </div>
            </div>
          ),
        },
        {
          number: 3,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການລົບລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
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
                    {"(4)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີເງິນ 850 ພັນກີບ. ຊື້ເຄື່ອງໄປ 475 ພັນກີບ. ຈະເຫຼືອເງິນເທົ່າໃດ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <VerticalMath
                      top={850}
                      bottom={475}
                      operator="-"
                      columns={4}
                    />
                    <div>
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
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ຢ່າລືມການຈື່ສຳລັບການບວກ ແລະ ການຢືມສຳລັບການລົບ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈຳນວນແລະການປຽບທຽບ "}{" "}
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
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <span>
                  {
                    "ຈຳນວນທີ່ປະກອບດ້ວຍ ຫຼັກພັນ 6, ຫຼັກຮ້ອຍ 0, ຫຼັກສິບ 5, ຫຼັກໜ່ວຍ 3 ແມ່ນ:"
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
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຈົ່ງໃສ່ເຄື່ອງໝາຍປຽບທຽບ (<, >): 5010 "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{" 5100"}</span>
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
              {"ຈົ່ງຕັ້ງບັ້ງເລກບວກ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
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
                <VerticalMath top={678} bottom={254} operator="+" columns={4} />
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
                <VerticalMath top={496} bottom={135} operator="+" columns={4} />
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
                <VerticalMath top={782} bottom={349} operator="+" columns={4} />
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກລົບ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
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
                  {"(6)"}
                </span>
                <VerticalMath top={892} bottom={555} operator="-" columns={4} />
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
                  {"(7)"}
                </span>
                <VerticalMath top={624} bottom={378} operator="-" columns={4} />
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
                  {"(8)"}
                </span>
                <VerticalMath top={405} bottom={169} operator="-" columns={4} />
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
              {
                "(1) 400, (2) 850, (3) 2152, (4) 820, (5) 825, (6) 1040, (7) 326, (8) 468, (9) 345"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) >, (2) <, (3) 666 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 6053, (2) <, (3) 789, (4) 344"}</span>],
        },
      ],
      advice:
        "ການອ່ານເສັ້ນສະແດງຈຳນວນ ຕ້ອງສັງເກດເບິ່ງວ່າ 1 ຕາກະໂຣນ້ອຍໆມີຄ່າເທົ່າໃດກ່ອນເດີ!",
    },
  },
  {
    unitNumber: 7,
    unitTitle: "ຄວາມຍາວ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກຄວາມຍາວ m, cm, mm",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 m = 100 cm, 1 cm = 10 mm" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"7. ຄວາມຍາວ (m, cm, mm)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການວັດແທກຄວາມຍາວ ໃຊ້ຫົວໜ່ວຍ ແມັດ (m), ຊັງຕີແມັດ (cm), ແລະ ມິນລີແມັດ (mm)."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F1F8E9",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "120px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E8F5E9",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #4CAF50",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  {"1 m"}
                </span>
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#4CAF50",
                }}
              >
                {"="}
              </div>
              <div
                style={{
                  backgroundColor: "#E8F5E9",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #4CAF50",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  {"100 cm"}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFF3E0",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #FF9800",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  {"1 cm"}
                </span>
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#FF9800",
                }}
              >
                {"="}
              </div>
              <div
                style={{
                  backgroundColor: "#FFF3E0",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #FF9800",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  {"10 mm"}
                </span>
              </div>
            </div>
            <div
              style={{
                overflowX: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Ruler
                measuredLength={10}
                maxLength={15}
                objectType="pencil"
                showAnswer={true}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {"10 cm = 100 mm"}
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                <span>{"1 m ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm"}</span>
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
                <span>{"2 cm ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"mm"}</span>
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
                <span>{"100 cm ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"m"}</span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                  {"(4)"}
                </span>
                <span>{"50 mm ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm"}</span>
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
                  {"(5)"}
                </span>
                <span>{"3 m ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມຍາວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                  {
                    "ໄມ້ທ່ອນໜຶ່ງຍາວ 1 m 20 cm. ຖ້າປ່ຽນເປັນ cm ທັງໝົດ ຈະເທົ່າກັບຈັກ cm?"
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການຕໍ່ຄວາມຍາວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                  {
                    "ເຊືອກເສັ້ນໜຶ່ງຍາວ 50 cm. ຖ້າເອົາ 2 ເສັ້ນມາຕໍ່ກັນ ຈະຍາວເທົ່າໃດ m?"
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
                  <span>{"m"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "1 m = 100 cm. ດັ່ງນັ້ນ 1 m 20 cm = 100 cm + 20 cm.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                {" 4 cm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" mm"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                {" 200 cm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" m"}
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
              {"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍປະສົມ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                {" 1 m 50 cm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" cm"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                {" 30 mm = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" cm"}
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
            <span key="1">{"(1) 100, (2) 20, (3) 1, (4) 5, (5) 300"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 120 cm (100 + 20), (2) 1 m (50 + 50 = 100 cm = 1 m)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 40, (2) 2, (3) 150, (4) 3"}</span>],
        },
      ],
      advice:
        "ຫົວໜ່ວຍຄວາມຍາວມັກຈະໃຊ້ໃນຊີວິດປະຈຳວັນ. ລອງເອົາໄມ້ບັນທັດມາວັດແທກສິ່ງຂອງຕ່າງໆເບິ່ງເດີ!",
    },
  },
  {
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
  },
  {
    unitNumber: 9,
    unitTitle: "ວິທີຊັ່ງ ແລະ ຫົວໜ່ວຍຂອງນ້ຳໜັກ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກນ້ຳໜັກ kg, g",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 ກິໂລກຣາມ (kg) = 1000 ກຣາມ (g)" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"9. ວິທີຊັ່ງ ແລະ ຫົວໜ່ວຍຂອງນ້ຳໜັກ (kg, g)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ພວກເຮົາໃຊ້ນ້ຳໜັກເພື່ອບອກວ່າສິ່ງຂອງໜັກເທົ່າໃດ. ຫົວໜ່ວຍທີ່ໃຊ້ຫຼາຍແມ່ນ ກິໂລກຣາມ (kg) ແລະ ກຣາມ (g)."
            }
          </p>
          <div
            style={{
              backgroundColor: "#FCE4EC",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "10px" }}>{"⚖️"}</div>
            <div
              style={{ fontSize: "28px", fontWeight: "bold", color: "#E91E63" }}
            >
              {"1 kg = 1000 g"}
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກເປັນກຣາມ (g): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                <span>{"1 kg ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
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
                <span>{"2 kg ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
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
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                <span>{"1000 g ="}</span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(4)"}
                </span>
                <span>{"5000 g ="}</span>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(5)"}
                </span>
                <span>{"1 kg ເຄິ່ງ ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການລວມນ້ຳໜັກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                  {
                    "ໝາກໂມໜ່ວຍໜຶ່ງໜັກ 2 kg, ໝາກຫຸ່ງໜ່ວຍໜຶ່ງໜັກ 500 g. ທັງສອງໜ່ວຍລວມກັນໜັກເທົ່າໃດ g?"
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
                  <span>{"g"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການລົບນ້ຳໜັກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{  }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                  {"ຊີ້ນໝູ 1 kg. ຖ້າແບ່ງອອກໄປ 300 g ຈະເຫຼືອຊີ້ນໝູເທົ່າໃດ g?"}
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
                  <span>{"g"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນກຣາມ (g) ກ່ອນແລ້ວຈຶ່ງບວກ ຫຼື ລົບເດີ. (1 kg = 1000 g)",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                {" 3 kg = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" g"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                {" 4000 g = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" kg"}
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
              {"ທົດສອບປະຈຳບົດ: ນ້ຳໜັກປະສົມ ແລະ ການເລືອກຫົວໜ່ວຍ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                {" 1 kg 200 g = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                {" g"}
              </div>
              <div style={{ fontSize: "24px" }}>
                <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                {" ນ້ຳໜັກຄົນເຮົາຄວນໃຊ້ຫົວໜ່ວຍອັນໃດ? (kg ຫຼື g) = "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
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
          answers: [
            <span key="1">{"(1) 3000 g, (2) 4 kg, (3) 1200 g, (4) kg"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 2500 g, (2) 700 g"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3000 g, (2) 4 kg, (3) 1200 g, (4) kg"}</span>,
          ],
        },
      ],
      advice:
        "ເວັບຊັ່ງນ້ຳໜັກເຄື່ອງຢູ່ຕະຫຼາດ ແມ່ຄ້າຈະມັກໃຊ້ 'ກິໂລ' (kg) ແລະ 'ຂີດ'. (1 ຂີດ = 100 g)",
    },
  },
  {
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(1)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
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
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {"(2)"}
                </span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
                    alignSelf: "flex-start",
                  }}
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
  },
  {
    unitNumber: 11,
    unitTitle: "ຮູບສາມແຈ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຮູບສາມແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ! ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດ！",
      },
      content: (
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              flex: 1,
              minWidth: "250px",
            }}
          >
            <Shape type="triangle" color="#2196F3" size={120} />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {"ຮູບສາມແຈທ່ຽງ"}
            </p>
            <p>{"ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈທ່ຽງ."}</p>
          </div>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              flex: 1,
              minWidth: "250px",
            }}
          >
            <Shape type="triangle" color="#4CAF50" size={120} />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {"ຮູບສາມແຈສະເໝີ"}
            </p>
            <p>{"ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈສະເໝີ."}</p>
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
              {"ຈົ່ງບອກຊື່ຂອງຮູບສາມແຈລຸ່ມນີ້: "}{" "}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <Shape type="triangle" color="#FF9800" size={80} />
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <Shape
                  type="triangle"
                  color="#9C27B0"
                  size={80}
                  rotation={90}
                />
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <Shape type="triangle" color="#00BCD4" size={80} />
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                <Shape
                  type="triangle"
                  color="#E91E63"
                  size={80}
                  rotation={180}
                />
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຍາວຂອງຂ້າງ: "}{" "}
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
                  "(5) ຮູບສາມແຈສະເໝີຮູບໜຶ່ງ ມີຄວາມຍາວຂ້າງໜຶ່ງແມ່ນ 6cm. ຂ້າງອື່ນໆຈະຍາວຈັກ cm?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm"}</span>
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
                {"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "}{" "}
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
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "22px", margin: 0 }}>
                    {"(1) ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "150px",
                        height: "40px",
                      }}
                    ></span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "22px", margin: 0 }}>
                    {"(2) ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "150px",
                        height: "40px",
                      }}
                    ></span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມຍາວຮອບຮູບ: "}{" "}
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
                    "(3) ຮູບສາມແຈສະເໝີຮູບໜຶ່ງ ມີຄວາມຍາວຂ້າງລະ 5cm. ຄວາມຍາວຮອບຮູບທັງໝົດແມ່ນຈັກ cm?"
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
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບສາມແຈ: "}{" "}
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p style={{ fontSize: "20px", margin: 0 }}>
                  {
                    "(1) ຮູບສາມແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ 4cm, 4cm ແລະ 4cm ແມ່ນຮູບສາມແຈຊະນິດໃດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "200px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p style={{ fontSize: "20px", margin: 0 }}>
                  {
                    "(2) ຮູບສາມແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ 3cm, 5cm ແລະ 5cm ແມ່ນຮູບສາມແຈຊະນິດໃດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "200px",
                      height: "40px",
                    }}
                  ></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວຮອບຮູບສາມແຈທ່ຽງ: "}{" "}
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
                  "(3) ມີຮູບສາມແຈທ່ຽງຮູບໜຶ່ງ ເຊິ່ງມີສອງຂ້າງຍາວ 7cm ແລະ ຂ້າງທີ່ເຫຼືອຍາວ 4cm. ຄວາມຍາວຮອບຮູບແມ່ນຈັກ cm?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"cm"}</span>
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
              {
                "(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) ຮູບສາມແຈສະເໝີ, (4) ຮູບສາມແຈທ່ຽງ, (5) 6cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) 15cm (5 x 3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) 18cm (7 + 7 + 4)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ!",
    },
  },
  {
    unitNumber: 12,
    unitTitle: "ການຫານຕາມທາງຕັ້ງ",
    unitGoal: "ຮຽນຮູ້ການຫານຕາມທາງຕັ້ງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຫານເລກຫຼາຍຫຼັກຕ້ອງເລີ່ມຈາກຫຼັກທີ່ໃຫຍ່ທີ່ສຸດ (ຊ້າຍຫາຂວາ) ສະເໝີ! ຢ່າລືມຂັ້ນຕອນ: ຫານ -> ຄູນ -> ລົບ -> ຊັກລົງມາ.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"12. ວິທີຄິດໄລ່ການຫານຕາມທາງຕັ້ງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ຕົວຢ່າງ: 76 ÷ 3. ພວກເຮົາເລີ່ມຫານຈາກຫຼັກສິບ (ຫຼັກໃຫຍ່ສຸດ) ແລ້ວຈຶ່ງຫານຫຼັກໜ່ວຍ."
            }
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                border: "2px dashed #4CAF50",
                padding: "24px",
                borderRadius: "12px",
                backgroundColor: "#F1F8E9",
              }}
            >
              <table
                className="math-illustration"
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "var(--font-number)",
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"76"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"3"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"6 "}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        borderTop: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"25"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"16"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"15"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {" 1"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                </tbody>
              </table>
              <span
                style={{
                  color: "#D32F2F",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"ຄຳຕອບ: 25 ເສດ 1"}
              </span>
            </div>
            <div
              style={{ fontSize: "22px", maxWidth: "450px", lineHeight: "1.6" }}
            >
              <p
                style={{
                  margin: "4px 0",
                  fontWeight: "bold",
                  color: "#1976D2",
                }}
              >
                {"ຂັ້ນຕອນການຄິດໄລ່ 76 ÷ 3 ຕາມທາງຕັ້ງ:"}
              </p>
              <p style={{ margin: "4px 0" }}>{"① ຫຼັກສິບ (ຫານຫຼັກສິບກ່ອນ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຫານ: 7 ÷ 3 = 2. ຂຽນ '2' ໃສ່ຫຼັກສິບຂອງຄຳຕອບ."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຄູນ: 3 x 2 = 6. ຂຽນ '6' ໄວ້ກ້ອງເລກ 7."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ລົບ: 7 - 6 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 6."}
              </p>

              <p style={{ margin: "8px 0 4px 0" }}>
                {"② ຫຼັກໜ່ວຍ (ຊັກເລກຫຼັກໜ່ວຍລົງມາ):"}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຊັກລົງມາ: ຊັກເລກ '6' ລົງມາໃສ່ທາງຂ້າງເລກ 1 ຈະໄດ້ '16'."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຫານ: 16 ÷ 3 = 5. ຂຽນ '5' ໃສ່ຫຼັກໜ່ວຍຂອງຄຳຕອບ."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຄູນ: 3 x 5 = 15. ຂຽນ '15' ໄວ້ກ້ອງເລກ 16."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ລົບ: 16 - 15 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 15 (ຕົວເສດ)."}
              </p>

              <p
                style={{
                  margin: "8px 0 0 0",
                  fontWeight: "bold",
                  color: "#D32F2F",
                }}
              >
                {"③ ຜົນຫານແມ່ນ 25, ເສດ 1."}
              </p>
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
              {"ຈົ່ງຄິດໄລ່ການຫານລຸ່ມນີ້ (ແນວຕັ້ງ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
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
                { n: "(1)", q: "48 ÷ 2 =" },
                { n: "(2)", q: "69 ÷ 3 =" },
                { n: "(3)", q: "84 ÷ 4 =" },
                { n: "(4)", q: "55 ÷ 5 =" },
                { n: "(5)", q: "72 ÷ 6 =" },
                { n: "(6)", q: "96 ÷ 8 =" },
                { n: "(7)", q: "85 ÷ 5 =" },
                { n: "(8)", q: "91 ÷ 7 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການຫານ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
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
                  "(9) ມີໝາກກ້ຽງ 84 ໜ່ວຍ, ແບ່ງໃຫ້ 4 ຄົນເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກໜ່ວຍ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ໜ່ວຍ"}</span>
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
                {"ຈົ່ງຄິດໄລ່ການຫານ (ມີຕົວເສດ): "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
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
                  { n: "(1)", q: "37 ÷ 3 =" },
                  { n: "(2)", q: "58 ÷ 4 =" },
                  { n: "(3)", q: "79 ÷ 5 =" },
                  { n: "(4)", q: "86 ÷ 6 =" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "24px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      {item.n}
                    </span>
                    <span>{item.q}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "120px",
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການຫານທີ່ມີເສດ: "}{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
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
                    "(5) ມີປຶ້ມຂຽນ 76 ຫົວ, ຢາກຢາຍໃຫ້ 3 ຄົນເທົ່າໆກັນ. ຈະໄດ້ຄົນລະຈັກຫົວ ແລະ ຈະເຫຼືອຈັກຫົວ?"
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
                  <span>{"ຄຳຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຫົວ, ເຫຼືອ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຫົວ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ຝຶກຫານເທື່ອລະຫຼັກ ແລ້ວຊັກຕົວເລກຖັດໄປລົງມາເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ການຫານຕໍ່ໄປນີ້ຕາມທາງຕັ້ງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
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
                { n: "(1)", q: "87 ÷ 3 =" },
                { n: "(2)", q: "95 ÷ 4 =" },
                { n: "(3)", q: "68 ÷ 5 =" },
                { n: "(4)", q: "99 ÷ 9 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
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
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ບ່ອນວ່າງໃນການກວດຄືນການຫານ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
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
                  "(5) ຈາກບັ້ງເລກ 47 ÷ 3 = 15 ເສດ 2. ຈົ່ງຕື່ມຕົວເລກກວດຄືນໃຫ້ຖືກຕ້ອງ:"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "22px",
                }}
              >
                <span>{"3 x "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{" + "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{" = 47"}</span>
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
              {
                "(1) 24, (2) 23, (3) 21, (4) 11, (5) 12, (6) 12, (7) 17, (8) 13, (9) 21 ໜ່ວຍ (84 ÷ 4)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "(1) 12 ເສດ 1, (2) 14 ເສດ 2, (3) 15 ເສດ 4, (4) 14 ເສດ 2, (5) ໄດ້ຄົນລະ 25 ຫົວ, ເຫຼືອ 1 ຫົວ (76 ÷ 3 = 25 ເສດ 1)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 29, (2) 23 ເສດ 3, (3) 13 ເສດ 3, (4) 11, (5) 3 x 15 + 2 = 47"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຖ້າຕົວເສດໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບຕົວຫານ, ສະແດງວ່າເຮົາຄິດໄລ່ຜິດເດີ! ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະεໝີ.",
    },
  },
  {
    unitNumber: 13,
    unitTitle: "ການຫານ ແລະ ຄຳນວນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳພັນລະຫວ່າງການຄູນ ແລະ ການຫານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"13. ຄວາມສຳພັນລະຫວ່າງການຄູນ ແລະ ການຫານ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ການປຽບທຽບວ່າຄວາມຍາວໜຶ່ງໃຫຍ່ກວ່າອີກຄວາມຍາວໜຶ່ງຈັກເທົ່າ, ເຮົາໃຊ້ການຫານ."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{ fontSize: "22px", fontWeight: "bold", width: "120px" }}
              >
                {"ແຖບສີແດງ:"}
              </span>
              <div
                style={{
                  height: "30px",
                  width: "100px",
                  backgroundColor: "#E53935",
                  borderRadius: "4px",
                }}
              ></div>
              <span style={{ fontSize: "22px" }}>{"2 m"}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  width: "120px",
                  paddingTop: "34px",
                }}
              >
                {"ແຖບສີຟ້າ:"}
              </span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      height: "24px",
                      width: "100px",
                      borderLeft: "2px dashed #E53935",
                      borderRight: "2px dashed #E53935",
                      borderTop: "2px dashed #E53935",
                      backgroundColor: "#FFCDD2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#C62828",
                      boxSizing: "border-box",
                    }}
                  >
                    {"2 m"}
                  </div>
                  <div
                    style={{
                      height: "24px",
                      width: "100px",
                      borderRight: "2px dashed #E53935",
                      borderTop: "2px dashed #E53935",
                      backgroundColor: "#FFCDD2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#C62828",
                      boxSizing: "border-box",
                    }}
                  >
                    {"2 m"}
                  </div>
                  <div
                    style={{
                      height: "24px",
                      width: "100px",
                      borderRight: "2px dashed #E53935",
                      borderTop: "2px dashed #E53935",
                      backgroundColor: "#FFCDD2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#C62828",
                      boxSizing: "border-box",
                    }}
                  >
                    {"2 m"}
                  </div>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "300px",
                    backgroundColor: "#1E88E5",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  {"6 m"}
                </div>
              </div>
              <span style={{ fontSize: "22px", paddingTop: "34px" }}>
                {"(ໃຫຍ່ກວ່າ 3 ເທື່ອ)"}
              </span>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {"6 ÷ 2 = 3 (ເທື່ອ)"}
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຈຳນວນເທື່ອລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                {
                  n: "(1)",
                  q: "ເຊືອກຍາວ 15 ແມັດ ຍາວເປັນຈັກເທື່ອຂອງເຊືອກ 3 ແມັດ?",
                },
                {
                  n: "(2)",
                  q: "ປຶ້ມ 24 ຫົວ ມີຈຳນວນເປັນຈັກເທື່ອຂອງປຶ້ມ 6 ຫົວ?",
                },
                {
                  n: "(3)",
                  q: "ນ້ຳ 32 ລິດ ມີປະລິມານເປັນຈັກເທື່ອຂອງນ້ຳ 4 ລິດ?",
                },
                {
                  n: "(4)",
                  q: "ເງິນ 50 ພັນກີບ ມີຄ່າເປັນຈັກເທື່ອຂອງເງິນ 10 ພັນກີບ?",
                },
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
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ເທື່ອ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
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
                  "(5) ເຊືອກເສັ້ນໜຶ່ງຍາວ 24 ແມັດ, ເຊິ່ງຍາວເປັນ 3 ເທື່ອຂອງເຊືອກສີແດງ. ເຊືອກສີແດງຍາວຈັກແມັດ?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ແມັດ"}</span>
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
                {"ຈົ່ງຄິດໄລ່ເພື່ອຊອກຫາຄຳຕອບ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
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
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "22px", margin: 0 }}>
                    {
                      "(1) ຖ້າຮູ້ວ່າແຖບສີແດງຍາວ 4m ແລະ ແຖບສີຟ້າຍາວເປັນ 5 ເທື່ອຂອງແຖບສີແດງ. ແຖບສີຟ້າຍາວຈັກແມັດ?"
                    }
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span>{"ຄຳຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "120px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{"ແມັດ"}</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ fontSize: "22px", margin: 0 }}>
                    {
                      "(2) ຖ້າຮູ້ວ່າແຖບສີເyellowືອງຍາວ 15m, ເຊິ່ງຍາວເປັນ 3 ເທື່ອຂອງແຖບສີຂຽວ. ແຖບສີຂຽວຍາວຈັກແມັດ?"
                    }
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span>{"ຄຳຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "120px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{"ແມັດ"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວຂອງໄມ້ບັນທັດ: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
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
                    "(3) ໄມ້ບັນທັດອັນໜຶ່ງຍາວ 30cm, ໄມ້ບັນທັດອັນທີສອງຍາວເປັນ 2 ເທື່ອຂອງອັນທຳອິດ. ໄມ້ບັນທັດອັນທີສອງຍາວຈັກ cm?"
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
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ໃຊ້ການຫານເພື່ອຊອກຫາຈຳນວນເທື່ອເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
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
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p style={{ fontSize: "22px", margin: 0 }}>
                  {
                    "(1) ມີແຖບເຈ້ຍສີຟ້າຍາວ 18 ແມັດ. ແຖບເຈ້ຍສີແດງຍາວ 6 ແມັດ. ແຖບເຈ້ຍສີຟ້າຍາວເປັນຈັກເທື່ອຂອງສີແດງ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ເທື່ອ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມສູງຂອງຕົ້ນໄມ້: "}{" "}
              <span className="point-label">{"(5 - ຄະແນນ)"}</span>
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
                  "(2) ຕົ້ນໄມ້ A ສູງ 12 ແມັດ, ຕົ້ນໄມ້ B ສູງ 4 ແມັດ. ຕົ້ນໄມ້ A ສູງເປັນຈັກເທື່ອຂອງຕົ້ນໄມ້ B?"
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
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເທື່ອ"}</span>
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
              {
                "(1) 5 ເທື່ອ, (2) 4 ເທື່ອ, (3) 8 ເທື່ອ, (4) 5 ເທື່ອ, (5) 8 ແມັດ (24 ÷ 3)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 20 ແມັດ (4 x 5), (2) 5 ແມັດ (15 ÷ 3), (3) 60cm (30 x 2)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3 ເທື່ອ (18 ÷ 6), (2) 3 ເທື່ອ (12 ÷ 4)"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!",
    },
  },
  {
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
                      width: "120px",
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
                    width: "120px",
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
  },
  {
    unitNumber: 15,
    unitTitle: "ກຣາບເສົາ ແລະ ຕາຕະລາງ",
    unitGoal: "ອ່ານ ແລະ ສ້າງກຣາບເສົາພື້ນຖານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ! ພະຍາຍາມອ່ານຄວາມສູງຂອງເສົາໃຫ້ລະອຽດເດີ້.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"15. ກຣາບເສົາ ແລະ ຕາຕະລາງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {"ກຣາບເສົາຊ່ວຍໃຫ້ເຮົາປຽບທຽບຂໍ້ມູນໄດ້ຢ່າງຈະແຈ້ງ ແລະ ວ່ອງໄວ."}
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Picture Graph (Tally) */}
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "500px",
                border: "1px solid #E0E0E0",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "12px",
                  fontSize: "22px",
                }}
              >
                {"ໝາກໄມ້ທີ່ແຕ່ລະຄົນມັກ"}
              </p>
              <div
                className="math-illustration"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "80px", fontWeight: "bold" }}>
                    {"ໝາກໂປມ:"}
                  </span>{" "}
                  <span style={{ fontSize: "24px", letterSpacing: "4px" }}>
                    {"🍎🍎🍎🍎🍎"}
                  </span>{" "}
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    {"5 ຄົນ"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "80px", fontWeight: "bold" }}>
                    {"ກ້ວຍ:"}
                  </span>{" "}
                  <span style={{ fontSize: "24px", letterSpacing: "4px" }}>
                    {"🍌🍌🍌"}
                  </span>{" "}
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    {"3 ຄົນ"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "80px", fontWeight: "bold" }}>
                    {"ໝາກມ່ວງ:"}
                  </span>{" "}
                  <span style={{ fontSize: "24px", letterSpacing: "4px" }}>
                    {"🥭🥭🥭🥭🥭🥭"}
                  </span>{" "}
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    {"6 ຄົນ"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bar Graph (Grid-based) */}
            <div className="math-illustration" style={{ width: "400px" }}>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: "0 0 16px 0",
                }}
              >
                {"ກຣາບເສົາສະແດງຈຳນວນຄົນທີ່ມັກໝາກໄມ້"}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* Y-axis */}
                <div
                  style={{
                    position: "relative",
                    height: "180px",
                    width: "20px",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <span
                      key={n}
                      style={{
                        position: "absolute",
                        bottom: `${n * 30 - 7}px`,
                        right: 0,
                      }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
                {/* Graph Area */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "180px",
                    width: "100%",
                    borderLeft: "2px solid #000",
                    borderBottom: "2px solid #000",
                    gap: "30px",
                    padding: "0 20px",
                  }}
                >
                  {/* Apple Bar */}
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`apple-${i}`}
                        style={{
                          height: "30px",
                          width: "50px",
                          backgroundColor: "#FFCDD2",
                          borderTop: "1px solid #D32F2F",
                          borderLeft: "1px solid #D32F2F",
                          borderRight: "1px solid #D32F2F",
                          borderBottom: i === 0 ? "none" : "1px solid #D32F2F",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Banana Bar */}
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`banana-${i}`}
                        style={{
                          height: "30px",
                          width: "50px",
                          backgroundColor: "#FFE082",
                          borderTop: "1px solid #FFA000",
                          borderLeft: "1px solid #FFA000",
                          borderRight: "1px solid #FFA000",
                          borderBottom: i === 0 ? "none" : "1px solid #FFA000",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Mango Bar */}
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`mango-${i}`}
                        style={{
                          height: "30px",
                          width: "50px",
                          backgroundColor: "#C8E6C9",
                          borderTop: "1px solid #388E3C",
                          borderLeft: "1px solid #388E3C",
                          borderRight: "1px solid #388E3C",
                          borderBottom: i === 0 ? "none" : "1px solid #388E3C",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              {/* X-axis labels */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  gap: "30px",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {"🍎"}
                </div>
                <div
                  style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {"🍌"}
                </div>
                <div
                  style={{
                    width: "50px",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {"🥭"}
                </div>
              </div>
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
              {"ເບິ່ງກຣາບເສົາແລ້ວຕອບຄຳຖາມ (ສີທີ່ນັກຮຽນມັກ):"}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {/* Bar Graph here */}
              <div
                style={{
                  width: "300px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Y-axis */}
                  <div
                    style={{
                      position: "relative",
                      height: "160px",
                      width: "20px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        style={{
                          position: "absolute",
                          bottom: `${n * 20 - 6}px`,
                          right: 0,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  {/* Graph Area */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "160px",
                      width: "100%",
                      borderLeft: "2px solid #000",
                      borderBottom: "2px solid #000",
                      gap: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Red: 6 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`r-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#FFCDD2",
                            borderTop: "1px solid #D32F2F",
                            borderLeft: "1px solid #D32F2F",
                            borderRight: "1px solid #D32F2F",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #D32F2F",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Blue: 8 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`b-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#BBDEFB",
                            borderTop: "1px solid #1976D2",
                            borderLeft: "1px solid #1976D2",
                            borderRight: "1px solid #1976D2",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #1976D2",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Green: 4 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={`g-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C8E6C9",
                            borderTop: "1px solid #388E3C",
                            borderLeft: "1px solid #388E3C",
                            borderRight: "1px solid #388E3C",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #388E3C",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* X-axis labels */}
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "30px",
                    gap: "20px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສີແດງ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສີຟ້າ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ສີຂຽວ"}
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  flex: 1,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ marginLeft: "8px", fontSize: "18px" }}>
                    {"ສີໃດມີຄົນມັກຫຼາຍທີ່ສຸດ ແລະ ມີຈັກຄົນ?"}
                  </span>
                  <div style={{ marginTop: "8px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "40px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span>{","}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ marginLeft: "8px", fontSize: "18px" }}>
                    {"ລວມທັງໝົດມີນັກຮຽນຈັກຄົນ?"}
                  </span>
                  <div style={{ marginTop: "8px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span>{"ຄົນ"}</span>
                  </div>
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
              {"ຈົ່ງເບິ່ງຕາຕະລາງ (ສັດລ້ຽງທີ່ມັກ) ແລ້ວລະບາຍສີໃສ່ກຣາບເສົາ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div style={{ display: "flex", gap: "40px" }}>
              {/* Table */}
              <div style={{ width: "220px" }}>
                <table
                  className="math-illustration"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "2px solid #000",
                    fontSize: "16px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ສັດ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ໝາ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ແມວ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ໄກ່"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ຈຳນວນ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"5"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"7"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"4"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                    <span style={{ marginLeft: "8px", fontSize: "16px" }}>
                      {"ສັດຊະນິດໃດມີຄົນມັກໜ້ອຍທີ່ສຸດ?"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span>{"ຕອບ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                          margin: "0 8px",
                        }}
                      ></span>
                    </div>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                    <span style={{ marginLeft: "8px", fontSize: "16px" }}>
                      {"ໝາມີຄົນມັກຫຼາຍກວ່າໄກ່ຈັກຄົນ?"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span>{"ຕອບ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                          margin: "0 8px",
                        }}
                      ></span>
                      <span>{"ຄົນ"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blank Graph for coloring */}
              <div
                className="math-illustration"
                style={{
                  padding: "10px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  fontSize: "14px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#666",
                    margin: "0 0 8px 0",
                  }}
                >
                  {"ລະບາຍສີໃສ່ກຣາບເສົາ"}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "160px",
                      width: "20px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        style={{
                          position: "absolute",
                          bottom: `${n * 20 - 6}px`,
                          right: 0,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "160px",
                      width: "100%",
                      borderLeft: "2px solid #000",
                      borderBottom: "2px solid #000",
                      gap: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Dog Bar (empty grid) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`d-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            border: "1px dashed #999",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Cat Bar (empty grid) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`c-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            border: "1px dashed #999",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Bird Bar (empty grid) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`b-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            border: "1px dashed #999",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "30px",
                    gap: "20px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໝາ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ແມວ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ໄກ່"}
                  </div>
                </div>
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
                {"ນຳເອົາຂໍ້ມູນລຸ່ມນີ້ມາຂຽນໃສ່ຕາຕະລາງ ແລະ ລະບາຍສີໃສ່ກຣາບເສົາ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p>
                  {
                    "ມີເດັກນ້ອຍ 20 ຄົນ. ມັກສີແດງ 8 ຄົນ, ມັກສີຟ້າ 7 ຄົນ, ມັກສີຂຽວ 5 ຄົນ."
                  }
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Table */}
                  <div style={{ width: "240px" }}>
                    <table
                      className="math-illustration"
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "2px solid #000",
                        fontSize: "16px",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              fontWeight: "bold",
                              textAlign: "center",
                              backgroundColor: "#E0F7FA",
                            }}
                          >
                            {"ສີທີ່ມັກ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {"ສີແດງ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {"ສີຟ້າ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {"ສີຂຽວ"}
                          </td>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            {"ລວມ"}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              fontWeight: "bold",
                              textAlign: "center",
                              backgroundColor: "#E0F7FA",
                            }}
                          >
                            {"ຈຳນວນ"}
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                          <td
                            style={{ border: "1px solid #000", padding: "8px" }}
                          >
                            <span
                              className="answer-blank"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                height: "24px",
                              }}
                            ></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Blank Graph for coloring */}
                  <div
                    className="math-illustration"
                    style={{
                      padding: "10px",
                      border: "1px dashed #ccc",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      fontSize: "14px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#666",
                        margin: "0 0 8px 0",
                      }}
                    >
                      {"ລະບາຍສີໃສ່ກຣາບເສົາ"}
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          position: "relative",
                          height: "160px",
                          width: "20px",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <span
                            key={n}
                            style={{
                              position: "absolute",
                              bottom: `${n * 20 - 6}px`,
                              right: 0,
                            }}
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          height: "160px",
                          width: "100%",
                          borderLeft: "2px solid #000",
                          borderBottom: "2px solid #000",
                          gap: "20px",
                          padding: "0 10px",
                        }}
                      >
                        {/* Red Bar (empty grid) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`r-${i}`}
                              style={{
                                height: "20px",
                                width: "40px",
                                border: "1px dashed #999",
                                boxSizing: "border-box",
                              }}
                            ></div>
                          ))}
                        </div>
                        {/* Blue Bar (empty grid) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`b-${i}`}
                              style={{
                                height: "20px",
                                width: "40px",
                                border: "1px dashed #999",
                                boxSizing: "border-box",
                              }}
                            ></div>
                          ))}
                        </div>
                        {/* Green Bar (empty grid) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`g-${i}`}
                              style={{
                                height: "20px",
                                width: "40px",
                                border: "1px dashed #999",
                                boxSizing: "border-box",
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        paddingLeft: "30px",
                        gap: "20px",
                        marginTop: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {"ສີແດງ"}
                      </div>
                      <div
                        style={{
                          width: "40px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {"ສີຟ້າ"}
                      </div>
                      <div
                        style={{
                          width: "40px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {"ສີຂຽວ"}
                      </div>
                    </div>
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
                {"ຈົ່ງຕອບຄຳຖາມຈາກຂໍ້ມູນຂ້າງເທິງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "18px",
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ marginLeft: "8px" }}>
                    {"ສີໃດທີ່ມີຄົນມັກໜ້ອຍທີ່ສຸດ ແລະ ມີຈັກຄົນ?"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    <span>{"ຄຳຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{", ຈຳນວນ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "60px",
                        height: "40px",
                      }}
                    ></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ marginLeft: "8px" }}>
                    {"ສີແດງມີຄົນມັກຫຼາຍກວ່າສີຂຽວຈັກຄົນ?"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      marginTop: "8px",
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
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText:
        "ອ່ານຂໍ້ມູນຈາກໂຈດແລ້ວນຳມາຕື່ມໃສ່ຕາຕະລາງແຕ່ລະຊ່ອງໃຫ້ຖືກຕ້ອງເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງເບິ່ງກຣາບເສົາແລ້ວຕື່ມຈຳນວນໃສ່ຕາຕະລາງໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                alignItems: "flex-start",
              }}
            >
              {/* Graph Area */}
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "0 0 8px 0",
                  }}
                >
                  {"ກິລາທີ່ມັກ"}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Y-axis */}
                  <div
                    style={{
                      position: "relative",
                      height: "160px",
                      width: "20px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        style={{
                          position: "absolute",
                          bottom: `${n * 20 - 6}px`,
                          right: 0,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "160px",
                      width: "100%",
                      borderLeft: "2px solid #000",
                      borderBottom: "2px solid #000",
                      gap: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Football: 7 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={`f-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#81C784",
                            borderTop: "1px solid #388E3C",
                            borderLeft: "1px solid #388E3C",
                            borderRight: "1px solid #388E3C",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #388E3C",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Volleyball: 5 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={`v-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#FFB74D",
                            borderTop: "1px solid #F57C00",
                            borderLeft: "1px solid #F57C00",
                            borderRight: "1px solid #F57C00",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #F57C00",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                    {/* Running: 3 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={`r-${i}`}
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#64B5F6",
                            borderTop: "1px solid #1976D2",
                            borderLeft: "1px solid #1976D2",
                            borderRight: "1px solid #1976D2",
                            borderBottom:
                              i === 0 ? "none" : "1px solid #1976D2",
                            boxSizing: "border-box",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "30px",
                    gap: "20px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ບານເຕະ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ບານສົ່ງ"}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {"ແລ່ນ"}
                  </div>
                </div>
              </div>

              {/* Table */}
              <div style={{ width: "240px", marginTop: "40px" }}>
                <table
                  className="math-illustration"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "2px solid #000",
                    fontSize: "16px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ກິລາ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ບານເຕະ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ບານສົ່ງ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        {"ແລ່ນ"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #000",
                          padding: "8px",
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {"ຈຳນວນ"}
                      </td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>
                        <span
                          className="answer-blank"
                          style={{
                            display: "inline-block",
                            width: "100%",
                            height: "24px",
                          }}
                        ></span>
                      </td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>
                        <span
                          className="answer-blank"
                          style={{
                            display: "inline-block",
                            width: "100%",
                            height: "24px",
                          }}
                        ></span>
                      </td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>
                        <span
                          className="answer-blank"
                          style={{
                            display: "inline-block",
                            width: "100%",
                            height: "24px",
                          }}
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              {"ຈົ່ງຕອບຄຳຖາມຈາກກຣາບເສົາຂ້າງເທິງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
              }}
            >
              <div>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ marginLeft: "8px" }}>
                  {"ກິລາປະເພດໃດມີຄົນມັກຫຼາຍທີ່ສຸດ?"}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ marginLeft: "8px" }}>
                  {"ບານເຕະມີຄົນມັກຫຼາຍກວ່າແລ່ນຈັກຄົນ?"}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginTop: "8px",
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
                  <span>{"ຄົນ"}</span>
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
              {"(1) ສີຟ້າ, 8 ຄົນ, (2) 18 ຄົນ, (3) ໄກ່, (4) 1 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ສີແດງ: 8, ສີຟ້າ: 7, ສີຂຽວ: 5, ລວມ: 20, (1) ສີຂຽວ, 5 ຄົນ, (2) 3 ຄົນ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {"ບານເຕະ: 7, ບານສົ່ງ: 5, ແລ່ນ: 3, (1) ບານເຕະ, (2) 4 ຄົນ"}
            </span>,
          ],
        },
      ],
      advice: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ!",
    },
  },
  {
    unitNumber: 16,
    unitTitle: "ເລກສ່ວນ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງ (ຈຳນວນພູດ) ມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມ (ພູດ) ຮັກສາໄວ້ຄືເກົ່າເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"16. ເލກສ່ວນ (ຕໍ່)"}
          </h3>
          <p style={{ fontSize: "22px", lineHeight: "1.5" }}>
            {
              "ການບວກເລກສ່ວນທີ່ມີພູດ (ຕົວລຸ່ມ) ຄືກັນ, ໃຫ້ເອົາຈຳນວນພູດ (ຕົວເທິງ) ບວກກັນເລີຍ. ພູດຍັງຄືເກົ່າ."
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
              gap: "16px",
            }}
          >
            {/* Fraction Math Expression */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#1976D2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    borderBottom: "3px solid #1976D2",
                    padding: "0 8px",
                  }}
                >
                  {"1"}
                </span>
                <span style={{ padding: "0 8px" }}>{"4"}</span>
              </div>
              <span>{"+"}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    borderBottom: "3px solid #1976D2",
                    padding: "0 8px",
                  }}
                >
                  {"2"}
                </span>
                <span style={{ padding: "0 8px" }}>{"4"}</span>
              </div>
              <span>{"="}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    borderBottom: "3px solid #1976D2",
                    padding: "0 8px",
                  }}
                >
                  {"3"}
                </span>
                <span style={{ padding: "0 8px" }}>{"4"}</span>
              </div>
            </div>

            {/* Tape Diagram */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {/* 1/4 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "160px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#64B5F6",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </div>
              <span>{"+"}</span>
              {/* 2/4 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "160px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </div>
              <span>{"="}</span>
              {/* 3/4 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "160px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#64B5F6",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#81C784",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "22px",
                color: "#555",
                margin: 0,
                textAlign: "center",
              }}
            >
              {"ແບ່ງເປັນ 4 ສ່ວນເທົ່າກັນ (ພູດຍັງເປັນ 4)."} <br />
              {"ເອົາ 1 ສ່ວນ ບວກກັບ 2 ສ່ວນ ຈະໄດ້ທັງໝົດ 3 ສ່ວນ."}
            </p>
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
              {"ຈົ່ງເບິ່ງຮູບແລ້ວຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຄິດໄລ່: "}{" "}
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
              {/* Problem (1) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(1)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "200px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFCDD2",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFCDD2",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#BBDEFB",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"5"}
                    </span>
                  </div>
                  <span>{"+"}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"5"}
                    </span>
                  </div>
                  <span>{"="}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"5"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Problem (2) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(2)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "240px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#C8E6C9",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#C8E6C9",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#C8E6C9",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF9C4",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF9C4",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"6"}
                    </span>
                  </div>
                  <span>{"+"}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"6"}
                    </span>
                  </div>
                  <span>{"="}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "30px",
                      }}
                    ></span>
                    <span
                      style={{
                        borderTop: "2px solid #000",
                        width: "40px",
                        textAlign: "center",
                        paddingTop: "8px",
                        height: "30px",
                      }}
                    >
                      {"6"}
                    </span>
                  </div>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນ (ການບວກ): "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "20px",
              }}
            >
              <p>
                {
                  "(3) ນ້ຳໃນຈອກທີໜຶ່ງມີ 2/5 ລິດ ແລະ ໃນຈອກທີສອງມີ 1/5 ລິດ. ລວມທັງໝົດມີນ້ຳຈັກລິດ?"
                }
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-end",
                  margin: "10px 0",
                }}
              >
                {/* Beaker 1 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "100px",
                      border: "2px solid #000",
                      borderTop: "none",
                      position: "relative",
                      backgroundColor: "#fff",
                    }}
                  >
                    {/* Tick marks */}
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          bottom: `${i * 20}px`,
                          left: 0,
                          width: "10px",
                          height: "1px",
                          backgroundColor: "#000",
                        }}
                      ></div>
                    ))}
                    {/* Water 2/5 */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#64B5F6",
                      }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "16px", marginTop: "8px" }}>
                    {"2/5 ລິດ"}
                  </span>
                </div>
                <span style={{ fontSize: "32px", paddingBottom: "30px" }}>
                  {"+"}
                </span>
                {/* Beaker 2 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "100px",
                      border: "2px solid #000",
                      borderTop: "none",
                      position: "relative",
                      backgroundColor: "#fff",
                    }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          bottom: `${i * 20}px`,
                          left: 0,
                          width: "10px",
                          height: "1px",
                          backgroundColor: "#000",
                        }}
                      ></div>
                    ))}
                    {/* Water 1/5 */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: "20px",
                        backgroundColor: "#64B5F6",
                      }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "16px", marginTop: "8px" }}>
                    {"1/5 ລິດ"}
                  </span>
                </div>
              </div>

              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງເບິ່ງຮູບແລ້ວຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຄິດໄລ່ການລົບ: "}{" "}
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
                {/* Problem (1): 4/5 - 1/5 */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {"(1)"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #000",
                      height: "40px",
                      width: "200px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#64B5F6",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#64B5F6",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#64B5F6",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"5"}
                      </span>
                    </div>
                    <span>{"-"}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"5"}
                      </span>
                    </div>
                    <span>{"="}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"5"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Problem (2): 7/8 - 3/8 */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {"(2)"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #000",
                      height: "40px",
                      width: "240px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#81C784",
                        borderRight: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"8"}
                      </span>
                    </div>
                    <span>{"-"}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"8"}
                      </span>
                    </div>
                    <span>{"="}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "30px",
                        }}
                      ></span>
                      <span
                        style={{
                          borderTop: "2px solid #000",
                          width: "40px",
                          textAlign: "center",
                          paddingTop: "8px",
                          height: "30px",
                        }}
                      >
                        {"8"}
                      </span>
                    </div>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນ (ການລົບ): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <p>
                  {
                    "(3) ເຊືອກເສັ້ນໜຶ່ງຍາວ 5/6 ແມັດ, ຕັດອອກໄປ 2/6 ແມັດ. ຈະເຫຼືອເຊືອກຈັກແມັດ?"
                  }
                </p>

                {/* Rope Tape Diagram */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    margin: "10px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #8D6E63",
                      height: "30px",
                      width: "300px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#D7CCC8",
                        borderRight: "2px dashed #8D6E63",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#D7CCC8",
                        borderRight: "2px dashed #8D6E63",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#D7CCC8",
                        borderRight: "2px dashed #8D6E63",
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px dashed #8D6E63",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#B0BEC5",
                        borderRight: "2px dashed #8D6E63",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {"X"}
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <span style={{ fontSize: "16px" }}>{"← ຕັດອອກ"}</span>
                </div>

                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "150px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ແມັດ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText:
        "ຕົວເລກພູດທາງລຸ່ມບໍ່ຕ້ອງລົບກັນເດີ້, ຮັກສາໄວ້ຄືເກົ່າ ແລ້ວເອົາທາງເທິງລົບກັນ!",
    },
    summaryProblems: [
      {
        number: 1,
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
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p style={{ fontSize: "22px", margin: 0 }}>
                  {
                    "(1) ມີໂບເສັ້ນໜຶ່ງ. ນາງ ໄມ ຕັດເອົາໄປ 2/5 ແມັດ. ທ້າວ ສົມ ຕັດເອົາໄປ 1/5 ແມັດ. ສອງຄົນຕັດເອົາໄປທັງໝົດຈັກແມັດ?"
                  }
                </p>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "150px",
                      height: "40px",
                    }}
                  ></span>
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
              {"ຈົ່ງຂຽນເລກສ່ວນສະແດງສ່ວນທີ່ທາສີ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "20px",
              }}
            >
              {/* Problem (2) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(2)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "200px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF176",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF176",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFF176",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <span>{"="}</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    lineHeight: "1.2",
                    fontSize: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
                  <span
                    style={{
                      borderTop: "2px solid #000",
                      width: "40px",
                      textAlign: "center",
                    }}
                  ></span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
                </div>
              </div>

              {/* Problem (3) */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {"(3)"}
                </span>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #000",
                    height: "40px",
                    width: "280px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#9575CD",
                      borderRight: "2px solid #000",
                    }}
                  ></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1, borderRight: "2px solid #000" }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
                <span>{"="}</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    lineHeight: "1.2",
                    fontSize: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
                  <span
                    style={{
                      borderTop: "2px solid #000",
                      width: "40px",
                      textAlign: "center",
                    }}
                  ></span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "30px",
                    }}
                  ></span>
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
          answers: [<span key="1">{"(1) 3/5, (2) 5/6, (3) 3/5 ລິດ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 3/5, (2) 4/8, (3) 3/6 ແມັດ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 3/5 ແມັດ, (2) 3/5, (3) 4/7"}</span>],
        },
      ],
      advice:
        "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງ (ຈຳນວນພູດ) ມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມ (ພູດ) ຮັກສາໄວ້ຄືເກົ່າເດີ!",
    },
  },
  {
    unitNumber: 17,
    unitTitle: "ທະນະບັດ (ເງິນກີບ)",
    unitGoal: "ຮູ້ຈັກ ແລະ ຄິດໄລ່ເງິນກີບ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"17. ທະນະບັດ (ເງິນກີບ)"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ເງິນທີ່ເຮົາໃຊ້ແມ່ນມີຫຼາຍໃບ ເຊັ່ນ: ໃບ 10,000 ກີບ, ໃບ 20,000 ກີບ, ໃບ 50,000 ກີບ, ໃບ 100,000 ກີບ."
            }
          </p>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[10000, 20000, 50000, 100000].map((amount, idx) => {
              let color = "#2196F3";
              if (amount === 20000) color = "#F44336";
              if (amount === 50000) color = "#FF9800";
              if (amount === 100000) color = "#4CAF50";
              return (
                <div
                  key={idx}
                  className="math-illustration"
                  style={{
                    width: "140px",
                    height: "70px",
                    border: `2px solid ${color}`,
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${color}1A`,
                    fontWeight: "bold",
                    color: color,
                    fontSize: "22px",
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{amount.toLocaleString()} ₭</span>
                </div>
              );
            })}
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
              {"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນທັງໝົດລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", bills: [10000, 10000, 10000, 10000, 10000] },
                { n: "(2)", bills: [20000, 20000, 20000] },
                { n: "(3)", bills: [50000, 50000] },
                { n: "(4)", bills: [100000] },
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
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                      width: "400px",
                    }}
                  >
                    {item.bills.map((amount, bIdx) => {
                      let color = "#2196F3";
                      if (amount === 20000) color = "#F44336";
                      if (amount === 50000) color = "#FF9800";
                      if (amount === 100000) color = "#4CAF50";
                      return (
                        <div
                          key={bIdx}
                          className="math-illustration"
                          style={{
                            width: "80px",
                            height: "40px",
                            border: `2px solid ${color}`,
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: `${color}1A`,
                            fontWeight: "bold",
                            color: color,
                            fontSize: "12px",
                            boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                          }}
                        >
                          <span style={{ fontSize: "12px" }}>{amount.toLocaleString()} ₭</span>
                        </div>
                      );
                    })}
                  </div>
                  <span>{"="}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "120px",
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
              {"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {[20000, 20000, 10000].map((amount, bIdx) => {
                    let color = "#2196F3";
                    if (amount === 20000) color = "#F44336";
                    return (
                      <div
                        key={bIdx}
                        className="math-illustration"
                        style={{
                          width: "80px",
                          height: "40px",
                          border: `2px solid ${color}`,
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: `${color}1A`,
                          fontWeight: "bold",
                          color: color,
                          fontSize: "12px",
                          boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span style={{ fontSize: "12px" }}>{amount.toLocaleString()} ₭</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບລວມ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ກີບ"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* 1 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"(1) ຊື້ປຶ້ມຫົວໜຶ່ງລາຄາ 35,000 ກີບ."}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                    }}
                  >
                    {/* Item */}
                    <div
                      className="math-illustration"
                      style={{
                        padding: "10px",
                        border: "2px dashed #9E9E9E",
                        borderRadius: "8px",
                        textAlign: "center",
                        width: "120px",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                        {"📘"}
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E0E0E0",
                          padding: "4px",
                          borderRadius: "4px",
                          fontSize: "16px",
                        }}
                      >
                        {"35,000 ₭"}
                      </div>
                    </div>
                    {/* Pay with */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{"ຈ່າຍເງິນ:"}</span>
                      <div
                        className="math-illustration"
                        style={{
                          width: "100px",
                          height: "50px",
                          border: "2px solid #FF9800",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#FF98001A",
                          fontWeight: "bold",
                          color: "#FF9800",
                          fontSize: "14px",
                          boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>{"50,000 ₭"}</span>
                      </div>
                    </div>
                    {/* Change */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{"ເງິນທອນ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "120px",
                          height: "40px",
                        }}
                      ></span>
                      <span>{"ກີບ"}</span>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {"(2) ຊື້ກະເປົາລາຄາ 75,000 ກີບ."}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                    }}
                  >
                    {/* Item */}
                    <div
                      className="math-illustration"
                      style={{
                        padding: "10px",
                        border: "2px dashed #9E9E9E",
                        borderRadius: "8px",
                        textAlign: "center",
                        width: "120px",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                        {"🎒"}
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E0E0E0",
                          padding: "4px",
                          borderRadius: "4px",
                          fontSize: "16px",
                        }}
                      >
                        {"75,000 ₭"}
                      </div>
                    </div>
                    {/* Pay with */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{"ຈ່າຍເງິນ:"}</span>
                      <div
                        className="math-illustration"
                        style={{
                          width: "100px",
                          height: "50px",
                          border: "2px solid #4CAF50",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#4CAF501A",
                          fontWeight: "bold",
                          color: "#4CAF50",
                          fontSize: "14px",
                          boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>{"100,000 ₭"}</span>
                      </div>
                    </div>
                    {/* Change */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{"ເງິນທອນ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "120px",
                          height: "40px",
                        }}
                      ></span>
                      <span>{"ກີບ"}</span>
                    </div>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການຊື້ເຄື່ອງ ແລະ ທອນເງິນ: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {"(3) ຊື້ປຶ້ມຂຽນ ແລະ ປາກກາ."}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    className="math-illustration"
                    style={{
                      padding: "8px",
                      border: "2px dashed #9E9E9E",
                      borderRadius: "8px",
                      textAlign: "center",
                      width: "100px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>{"📓"}</div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {"12,000 ₭"}
                    </div>
                  </div>
                  <span style={{ fontSize: "24px" }}>{"+"}</span>
                  <div
                    className="math-illustration"
                    style={{
                      padding: "8px",
                      border: "2px dashed #9E9E9E",
                      borderRadius: "8px",
                      textAlign: "center",
                      width: "100px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>{"🖊️"}</div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {"8,000 ₭"}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      marginLeft: "30px",
                    }}
                  >
                    <span>{"ຈ່າຍເງິນ:"}</span>
                    <div
                      className="math-illustration"
                      style={{
                        width: "90px",
                        height: "40px",
                        border: "2px solid #FF9800",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FF98001A",
                        fontWeight: "bold",
                        color: "#FF9800",
                        fontSize: "12px",
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "12px" }}>{"50,000 ₭"}</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ເງິນທອນ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "150px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ໃຊ້ການລົບເພື່ອຊອກຫາເງິນທອນເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມທັງໝົດ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                {"(1) ມີເງິນທັງໝົດຈັກກີບ?"}
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  padding: "16px",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px",
                }}
              >
                {[100000, 50000, 10000, 10000, 10000].map((amount, idx) => {
                  let color = "#2196F3";
                  if (amount === 50000) color = "#FF9800";
                  if (amount === 100000) color = "#4CAF50";
                  return (
                    <div
                      key={idx}
                      className="math-illustration"
                      style={{
                        width: "100px",
                        height: "50px",
                        border: `2px solid ${color}`,
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${color}1A`,
                        fontWeight: "bold",
                        color: color,
                        fontSize: "14px",
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>{amount.toLocaleString()} ₭</span>
                    </div>
                  );
                })}
              </div>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
                <span style={{ fontSize: "20px" }}>{"ກີບ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການຊື້ກະເປົາ: "}{" "}
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
              <span style={{ fontWeight: "bold" }}>
                {"(2) ຕ້ອງການຊື້ກະເປົາລາຄາ 180,000 ກີບ. ປັດຈຸບັນມີເງິນດັ່ງນີ້:"}
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  padding: "16px",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px",
                  width: "fit-content",
                }}
              >
                {[50000, 50000, 50000, 20000].map((amount, idx) => {
                  let color = "#F44336";
                  if (amount === 50000) color = "#FF9800";
                  return (
                    <div
                      key={idx}
                      className="math-illustration"
                      style={{
                        width: "90px",
                        height: "45px",
                        border: `2px solid ${color}`,
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${color}1A`,
                        fontWeight: "bold",
                        color: color,
                        fontSize: "14px",
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>{amount.toLocaleString()} ₭</span>
                    </div>
                  );
                })}
              </div>
              <p style={{ margin: "8px 0" }}>
                {"ເງິນພໍຊື້ຫຼືບໍ່ ແລະ ຍັງຂາດອີກຈັກກີບ?"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span>{"ຄຳຕອບ: ເງິນພໍຫຼືບໍ່:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "40px",
                  }}
                ></span>
                <span>{", ຍັງຂາດອີກ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ກີບ"}</span>
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
              {
                "(1) 50,000 ກີບ, (2) 60,000 ກີບ, (3) 100,000 ກີບ, (4) 100,000 ກີບ, (5) 50,000 ກີບ (20,000 x 2 + 10,000)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "(1) 15,000 ກີບ, (2) 25,000 ກີບ, (3) 30,000 ກີບ [50,000 - (12,000 + 8,000)]"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 180,000 ກີບ, (2) ບໍ່ພໍ, ຍັງຂາດອີກ 10,000 ກີບ (ມີທັງໝົດ 170,000 ກີບ, ຂາດອີກ 180,000 - 170,000 = 10,000)"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!",
    },
  },
];
