import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit7Data: UnitData = {
    unitNumber: 7,
    unitTitle: "ຈຳນວນທີ່ຫຼາຍກວ່າ 10",
    unitGoal: "ຮຽນຮູ້ການນັບ ແລະ ຂຽນຈຳນວນແຕ່ 11 ເຖິງ 20.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 72〜83",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ຈຳນວນທີ່ໃຫຍ່ກວ່າ 10 ນຳກັນ. 10 ໂຮມກັບຈຳນວນອື່ນ ຈະໄດ້ຈຳນວນໃໝ່!"}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px", backgroundColor: "#FFF", padding: "8px", borderRadius: "8px" }}>
                <span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span>
                <span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span>
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>10</div>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{"ກັບ"}</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px", backgroundColor: "#FFF", padding: "8px", borderRadius: "8px" }}>
                <span>🥚</span><span>🥚</span><span>🥚</span>
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>3</div>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{"ອ່ານວ່າ"}</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "#1976D2" }}>13</div>
              <div style={{ fontSize: "22px" }}>{"ສິບສາມ"}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
            <p>{"- 10 ກັບ 1 ອ່ານວ່າ 11 (ສິບເອັດ)"}</p>
            <p>{"- 10 ກັບ 5 ອ່ານວ່າ 15 (ສິບຫ້າ)"}</p>
            <p>{"- 10 ກັບ 10 ອ່ານວ່າ 20 (ຊາວ)"}</p>
          </div>
        </div>
      ),
      hint: {
        text: "ຈຳນວນແຕ່ 11 ຫາ 19 ແມ່ນເກີດຈາກ 10 ລວມກັບ 1 ຫາ 9!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກທີ່ຖືກຕ້ອງໃສ່ໃນບັອກ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(1)"}</span>
                <span>{"10 ແລະ 5 ປົນກັນແມ່ນ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(2)"}</span>
                <span>{"10 ແລະ 8 ປົນກັນແມ່ນ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(3)"}</span>
                <span>{"10 ແລະ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{" ປົນກັນແມ່ນ 12"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(4)"}</span>
                <span>{"10 ແລະ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{" ປົນກັນແມ່ນ 17"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(5)"}</span>
                <span>{"10 ແລະ 3 ປົນກັນແມ່ນ "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ (ລຳດັບຕົວເລກ): "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", fontSize: "24px", backgroundColor: "#EDE7F6", padding: "16px", borderRadius: "12px" }}>
              <span>9</span><span>→</span>
              <span>10</span><span>→</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>→</span>
              <span>12</span><span>→</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>→</span>
              <span>14</span><span>→</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>→</span>
              <span>16</span><span>→</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>→</span>
              <span>18</span><span>→</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>→</span>
              <span>20</span>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"10 + 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"10 + 7 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"12 - 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"15 - 10 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"10 + 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                  <span>{"18 - 8 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(7)"}</span>
                  <span>{"14 - 10 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(8)"}</span>
                  <span>{"10 + 9 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(9)"}</span>
                  <span>{"10 + 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(10)"}</span>
                  <span>{"17 - 7 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເລກ 10 ບວກກັບຕົວເລກໃດກໍຈະໄດ້ 10 ປົນກັບເລກນັ້ນ, ແລະ ຕົວເລກຫຼັກສິບລົບກັບຫຼັກໜ່ວຍຈະໄດ້ 10 ເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ເລກຕໍ່ໄປນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10 + 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"13 - 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"16 - 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"19 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(7)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"11 - 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(8)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10 + 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(9)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10 + 0 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(10)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"20 - 10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 15, (2) 18, (3) 2, (4) 7, (5) 13"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"11, 13, 15, 17, 19"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 13, (2) 17, (3) 10, (4) 5, (5) 15, (6) 10, (7) 4, (8) 19, (9) 12, (10) 10"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 16, (2) 11, (3) 10, (4) 6, (5) 14, (6) 10, (7) 1, (8) 18, (9) 10, (10) 10"}</span>
          ]
        }
      ],
      advice: "ຈຳນວນທີ່ຫຼາຍກວ່າ 10 ແມ່ນປະກອບດ້ວຍ 10 ກັບອີກຕົວເລກໜຶ່ງ. ຝຶກຄິດໄລ່ເລື້ອຍໆເດີ!"
    }
  };
