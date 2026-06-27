import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit11Data: UnitData = {
    
    unitNumber: 11,
    unitTitle: "ວິທີຈັດການຂໍ້ມູນ",
    unitGoal: "ຮຽນຮູ້ການຈັດການຂໍ້ມູນ ແລະ ການອ່ານຕາຕະລາງສອງທາງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 105-109",
    keyPoints: {
      hint: {
        text: "ຕາຕະລາງສອງທາງ ຊ່ວຍໃຫ້ເຮົາຈັດລະບຽບຂໍ້ມູນທີ່ມີສອງລັກສະນະໄດ້ງ່າຍຂຶ້ນ ແລະ ເຫັນຄວາມສຳພັນລະຫວ່າງຂໍ້ມູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຕາຕະລາງສອງທາງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ຕາຕະລາງທີ່ຈັດລະບຽບຂໍ້ມູນຕາມສອງປະເພດ (ເຊັ່ນ: ປະເພດກິລາ ແລະ ຂັ້ນຮຽນ) ເອີ້ນວ່າ ຕາຕະລາງສອງທາງ."
            }
          </p>

          <div
            style={{
              backgroundColor: "#FFF8E1",
              padding: "16px",
              borderRadius: "8px",
              border: "2px solid #FF9800",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "0 0 12px 0",
                fontSize: "22px",
              }}
            >
              {"ຕົວຢ່າງ: ກິລາທີ່ນັກຮຽນມັກ (ຄົນ)"}
            </p>
            <table
              className="math-illustration"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "22px",
                backgroundColor: "#FFF",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#FFE082" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ກິລາ / ຂັ້ນຮຽນ"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ປ.4"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ປ.5"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ລວມ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ເຕະບານ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"12"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"15"}
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"27"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ບານບ້ວງ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"8"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"10"}
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"18"}
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#ECEFF1", fontWeight: "bold" }}>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ລວມ"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"20"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"25"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"45"}
                  </td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 0.46 + 0.23 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1.57 - 0.34 ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) ມີເຊືອກຍາວ 0.85 m ຕັດອອກ 0.15 m ຈະເຫຼືອ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) ນ້ຳສົ້ມ 2.45 L ຕື່ມອີກ 1.2 L ຈະມີທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"L"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "1 ຂີດໝາຍນ້ອຍໆ ຢູ່ເທິງເສັ້ນຈຳນວນແມ່ນເທົ່າກັບ 0.01 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງອ່ານຄ່າຈາກເສັ້ນຈຳນວນລຸ່ມນີ້ ແລ້ວຂຽນໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "10px" }}>
                <div style={{ position: "relative", height: "50px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                  <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"1.2"}</div>
                  
                  <div style={{ position: "absolute", bottom: "-4px", left: "50%", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 15px)", fontWeight: "bold" }}>{"1.3"}</div>

                  <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                  <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1.4"}</div>

                  {/* Ticks */}
                  {[...Array(20)].map((_, i) => {
                    if (i === 10) return null;
                    return (
                      <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 5) + "%", width: "1px", height: i % 5 === 0 ? "10px" : "6px", backgroundColor: "#666" }}></div>
                    );
                  })}

                  <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", color: "#E91E63", fontWeight: "bold" }}>{"↓ (1)"}</div>
                  <div style={{ position: "absolute", bottom: "10px", left: "75%", transform: "translateX(-50%)", color: "#E91E63", fontWeight: "bold" }}>{"↓ (2)"}</div>
                </div>

                <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(1) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span>{"(2) ແມ່ນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  </div>
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
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບ່ອນຫວ่างໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "22px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(3) 2.45"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"2.4"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"(4) 0.08"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"0.1"}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 0.24 + 0.57 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 3.82 - 1.45 ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📘 ນາງ ສີດາ ມີນ້ຳ 1.35 L ແລະ ທ້າວ ສົມພອນ ມີນ້ຳ 0.8 L. ຖ້າເອົານ້ຳຂອງທັງສອງຄົນມາເທໃສ່ກັນ ຈະມີນ້ຳທັງໝົດຈັກ L?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"L"}</span>
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
          answers: [<span key="1">{"(1) 12 ຄົນ, (2) 10 ຄົນ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1_2">{"(3) 27 ຄົນ, (4) 18 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "ໝາກມ່ວງຍິງ: 10 ຄົນ (25-15), ໝາກກ້ວຍຊາຍ: 8 ຄົນ (20-12), ລວມຊາຍ: 23 ຄົນ, ລວມຍິງ: 22 ຄົນ"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"45 ຄົນ (23 + 22 = 45 ຄົນ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"10 ຄົນ (ໝາກມ່ວງຍິງ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"45 ຄົນ (ລວມທັງໝົດ)"}</span>],
        },
      ],
      advice:
        "ການອ່ານແຖວ ແລະ ຖັນ ໃຫ້ຕັດກັນ ຈະຊ່ວຍໃຫ້ຊອກຫາຂໍ້ມູນທີ່ຕ້ອງການໄດ້ຢ່າງວ່ອງໄວ ແລະ ຖືກຕ້ອງ!",
    },
  };
