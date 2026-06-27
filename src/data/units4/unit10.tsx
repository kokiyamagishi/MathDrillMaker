import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit10Data: UnitData = {
    
    unitNumber: 10,
    unitTitle: "ຄວາມສຳພັນຂອງຈຳນວນຖ້ວນ, ທົດສະນິຍົມ ແລະ ເລກສ່ວນ",
    unitGoal:
      "ເຂົ້າໃຈຄວາມສຳພັນ ແລະ ການປ່ຽນຮູບແບບລະຫວ່າງຈຳນວນຖ້ວນ, ເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 99-104",
    keyPoints: {
      hint: {
        text: "ເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມສາມາດສະແດງປະລິມານດຽວກັນໄດ້ ເຊັ່ນ: 1/10 ແມ່ນເທົ່າກັບ 0.1 ແລະ 1/2 ແມ່ນເທົ່າກັບ 0.5 ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຄວາມສຳພັນລະຫວ່າງເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມ"}
          </h3>

          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                margin: "0 0 16px 0",
                textAlign: "center",
              }}
            >
              {"ປຽບທຽບໃສ່ເສັ້ນຈຳນວນດຽວກັນ:"}
            </p>

            {/* Number Line showing Fractions & Decimals */}
            <div
              className="math-illustration"
              style={{
                position: "relative",
                height: "80px",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
                borderBottom: "4px solid #333",
              }}
            >
              {/* Left End */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "2px",
                  height: "15px",
                  backgroundColor: "#333",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"0"}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"0"}
              </div>

              {/* Ticks & Labels */}
              {[...Array(10)].map((_, i) => {
                if (i === 0) return null;
                const pos = i * 10;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: pos + "%",
                    }}
                  >
                    <div
                      style={{
                        width: "1px",
                        height: "8px",
                        backgroundColor: "#666",
                      }}
                    ></div>
                    {i === 5 && (
                      <>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-24px",
                            left: "-10px",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          {"0.5"}
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "-25px",
                            left: "-10px",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          {"1/2"}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}

              {/* Right End */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "0",
                  width: "2px",
                  height: "15px",
                  backgroundColor: "#333",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"1"}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  right: "-10px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"1"}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "35px",
                fontSize: "22px",
              }}
            >
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#FFF",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <strong>{"0.1 = 1/10"}</strong>
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#FFF",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <strong>{"0.5 = 5/10 = 1/2"}</strong>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນιຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1/2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກທົດສະນιຍົມລຸ່ມນີ້ໃຫ້ເປັນເລກສ່ວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 0.3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 0.7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນເລກທົດສະນິຍົມກ່ອນແລ້ວຈຶ່ງປຽບທຽບເດີ້! (1/2 = 0.5)",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  fontSize: "22px",
                  padding: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(1) 0.6"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"1/2"}</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span>{"(2) 3/10"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"0.3"}</span>
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
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {
                    "🥛 ນາງ ນະລິນ ມີນ້ຳນົມ 1/2 L ແລະ ນາງ ມະລິ ມີນ້ຳນົມ 0.4 L. ໃຜມີນ້ຳນົມຫຼາຍກວ່າກັນ?"
                  }
                </p>
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
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມເລກສ່ວນທີ່ຖືກຕ້ອງໃស່ບ່ອນຫວ່າງ (1) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div className="math-illustration" style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold", fontSize: "14px" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold", fontSize: "14px" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "14px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ແມ່ນເລກສ່ວນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມເລກທົດສະນιຍົມທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ (2) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "70%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ແມ່ນເລກທົດສະນιຍົມ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          answers: [<span key="1">{"(1) 0.1, (2) 0.5"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1_2">{"(3) 3/10, (4) 7/10"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) > (ຍ້ອນ 0.6 > 0.5), (2) = (ຍ້ອນ 0.3 = 0.3)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3">
              {"ນາງ ນະລິນ ຫຼາຍກວ່າ (ຍ້ອນ 1/2 = 0.5 L, 0.5 > 0.4)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"3/10"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4_2">{"0.7"}</span>],
        },
      ],
      advice:
        "ການໃຊ້ເສັ້ນຈຳນວນຈະຊ່ວຍໃຫ້ເຮົາເຫັນພາບຄວາມຍາວ ແລະ ປຽບທຽບເລກສ່ວນ ກັບເລກທົດສະນິຍົມໄດ້ຢ່າງຊັດເຈນ!",
    },
  };
