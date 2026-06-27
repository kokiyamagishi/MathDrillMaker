import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit5Data: UnitData = {
    unitNumber: 5,
    unitTitle: "ການບວກ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງການບວກ, ເຄື່ອງໝາຍບວກ (+) ແລະ ເຄື່ອງໝາຍເທົ່າກັບ (=).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 42〜55",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ເມື່ອເຮົາເອົາສອງຈຳນວນມາໂຮມເຂົ້າກັນ ເອີ້ນວ່າ "}<strong>{"ການບວກ"}</strong>{"."}</p>
          <div className="math-illustration" style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#E8F5E9", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap", fontSize: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍎" count={3} columns={3} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>3</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#F44336" }}>+</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍏" count={2} columns={2} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>2</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#F44336" }}>=</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍎" count={5} columns={5} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>5</div>
            </div>
          </div>
          <p style={{ marginTop: "12px" }}>
            <strong style={{ color: "#F44336", fontSize: "24px" }}>+</strong> {" ອ່ານວ່າ ບວກ"}<br />
            <strong style={{ color: "#F44336", fontSize: "24px" }}>=</strong> {" ອ່ານວ່າ ເທົ່າກັບ"}<br />
            <span style={{ fontSize: "22px" }}>{"3 + 2 = 5 ອ່ານວ່າ 3 ບວກ 2 ເທົ່າກັບ 5"}</span>
          </p>
        </div>
      ),
      hint: {
        text: "ການບວກ ແມ່ນການເອົາຈຳນວນມາໂຮມເຂົ້າກັນເພື່ອໃຫ້ໄດ້ຫຼາຍຂຶ້ນ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"3 + 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"2 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"5 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"6 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"4 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"1 + 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ມີລົດສີແດງ 4 ຄັນ ແລະ ລົດສີຟ້າ 5 ຄັນ. ລວມມີລົດທັງໝົດຈັກຄັນ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ຄັນ"}</p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ເລກບວກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ຂໍ້ 6 ແມ່ນ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"3 + 4 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"5 + 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"6 + 0 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"1 + 8 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"2 + 6 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                  <span>{"4 + 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເລກໃດບວກກັບ 0 ກໍຈະໄດ້ເລກນັ້ນເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ເລກບວກຕໍ່ໄປນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(1)"}</span>
                <span>{"2 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(2)"}</span>
                <span>{"4 + 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(3)"}</span>
                <span>{"0 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(4)"}</span>
                <span>{"7 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(5)"}</span>
                <span>{"3 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(6)"}</span>
                <span>{"1 + 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(7)"}</span>
                <span>{"8 + 0 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(8)"}</span>
                <span>{"5 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(9)"}</span>
                <span>{"2 + 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(10)"}</span>
                <span>{"6 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 4, (2) 5, (3) 3, (4) 2, (5) 4"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 7, (2) 7, (3) 6, (4) 9, (5) 8, (6) 9"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 5, (3) 5, (4) 9, (5) 9, (6) 10, (7) 8, (8) 10, (9) 9, (10) 9"}</span>
          ]
        }
      ],
      advice: "ການບວກເລກໃຫ້ໄວຂຶ້ນ ລອງນັບຕໍ່ຈາກຕົວເລກທີ່ຫຼາຍກວ່າເດີ. ເຊັ່ນ: 5+2 ແມ່ນນັບຕໍ່ຈາກ 5 ໄປອີກ 2 ນິ້ວ!"
    }
  };
