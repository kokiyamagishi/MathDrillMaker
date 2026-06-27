import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit6Data: UnitData = {
    unitNumber: 6,
    unitTitle: "ການລົບ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງການລົບ, ເຄື່ອງໝາຍລົບ (-) ແລະ ການຄິດໄລ່.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 56〜71",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ເມື່ອເຮົາເອົາຈຳນວນໜຶ່ງອອກຈາກຈຳນວນທັງໝົດ ເອີ້ນວ່າ "}<strong>{"ການລົບ"}</strong>{"."}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#FFF3E0", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍌" count={5} columns={5} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>5</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#FF9800" }}>-</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍌" count={3} columns={3} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>3</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#FF9800" }}>=</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍌" count={2} columns={2} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>2</div>
            </div>
          </div>
          <p style={{ marginTop: "12px" }}>
            <strong style={{ color: "#FF9800", fontSize: "24px" }}>-</strong> {" ອ່ານວ່າ ລົບ"}<br />
            <span style={{ fontSize: "22px" }}>{"5 - 3 = 2 ອ່ານວ່າ 5 ລົບ 3 ເທົ່າກັບ 2"}</span>
          </p>
        </div>
      ),
      hint: {
        text: "ການລົບ ແມ່ນການເອົາອອກ ຫຼື ແບ່ງອອກ ແລ້ວຊອກຫາສ່ວນທີ່ຍັງເຫຼືອ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"4 - 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"7 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"6 - 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"8 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"9 - 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"10 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <p>{"ນາງ ແກ້ວ ມີເຂົ້າໜົມ 8 ກ້ອນ, ລາວກິນໄປ 3 ກ້ອນ. ລາວຈະຍັງເຫຼືອເຂົ້າໜົມຈັກກ້ອນ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ກ້ອນ"}</p>
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
              <p>{"ຈົ່ງຄິດໄລ່ເລກລົບລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ຂໍ້ 6 ແມ່ນ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"7 - 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"5 - 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"9 - 0 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"8 - 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"6 - 4 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                  <span>{"10 - 7 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຕົວເລກດຽວກັນລົບກັນ ຈະໄດ້ 0 ສະເໝີເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ເລກລົບຕໍ່ໄປນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(1)"}</span>
                <span>{"4 - 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(2)"}</span>
                <span>{"6 - 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(3)"}</span>
                <span>{"8 - 0 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(4)"}</span>
                <span>{"5 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(5)"}</span>
                <span>{"9 - 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(6)"}</span>
                <span>{"10 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(7)"}</span>
                <span>{"7 - 0 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(8)"}</span>
                <span>{"3 - 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(9)"}</span>
                <span>{"10 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "30px" }}>{"(10)"}</span>
                <span>{"9 - 8 ="}</span>
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
            <span key="1">{"(1) 2, (2) 1, (3) 0, (4) 3, (5) 4"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 4, (2) 0, (3) 9, (4) 6, (5) 2, (6) 3"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3, (2) 0, (3) 8, (4) 3, (5) 4, (6) 6, (7) 7, (8) 0, (9) 1, (10) 1"}</span>
          ]
        }
      ],
      advice: "ການລົບອອກດ້ວຍ 0 ຈະໄດ້ຄ່າເທົ່າເດີມ, ແລະ ຕົວເລກໃດລົບຕົວມັນເອງຈະເຫຼືອ 0 ສະເໝີ!"
    }
  };
