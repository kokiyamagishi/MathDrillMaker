import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit4Data: UnitData = {
    unitNumber: 4,
    unitTitle: "ການແບ່ງຈຳນວນອອກເປັນສອງສ່ວນ",
    unitGoal: "ຮຽນຮູ້ການແບ່ງຈຳນວນໜຶ່ງອອກເປັນສອງຈຳນວນ (ເຊັ່ນ: 5 ແມ່ນ 2 ກັບ 3).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 25〜41",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ການແບ່ງຈຳນວນອອກເປັນສອງສ່ວນ (ການແຍກຕົວເລກ) ນຳກັນ. ຕົວຢ່າງ:"}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <div className="math-illustration" style={{ display: "flex", gap: "16px", padding: "20px 28px", border: "3px dashed #4CAF50", borderRadius: "16px", width: "fit-content", alignItems: "center", backgroundColor: "#F1F8E9" }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "#2E7D32" }}>{"5"}</div>
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#555" , whiteSpace: "nowrap"}}>{"ແມ່ນ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "4px" }}><ItemGrid item="🍎" count={2} columns={2} /></div>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#2E7D32" }}>{"2"}</div>
              </div>
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#888" , whiteSpace: "nowrap"}}>{"ແລະ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "4px" }}><ItemGrid item="🍎" count={3} columns={3} /></div>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#2E7D32" }}>{"3"}</div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", gap: "16px", padding: "20px 28px", border: "3px dashed #FF9800", borderRadius: "16px", width: "fit-content", alignItems: "center", backgroundColor: "#FFF8E1" }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "#E65100" }}>{"9"}</div>
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#555" , whiteSpace: "nowrap"}}>{"ແມ່ນ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "4px" }}><ItemGrid item="🍊" count={4} columns={4} /></div>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#E65100" }}>{"4"}</div>
              </div>
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#888" , whiteSpace: "nowrap"}}>{"ແລະ"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "4px" }}><ItemGrid item="🍊" count={5} columns={5} /></div>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#E65100" }}>{"5"}</div>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ລອງແຍກຝາກັບຂວດ ຫຼື ຝາກະຕຸກ ຕົວຈິງ ເພື່ອຝຶກການແຍກຈຳນວນເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"5"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"2"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"5"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"4"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"3"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"7"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"2"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"8"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"5"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(6) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"9"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"3"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(7) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"10"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(8) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"10"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"5"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(9) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"8"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"4"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(10) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"7"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"3"}</span>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ ໂດຍຂຽນຄຳຕອບເປັນຕົວເລກລາວ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"໔ + ໕ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"໑໐ - ໓ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"໑໕ - ໕ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"໘ + ໒ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ປ່ຽນເປັນຕົວເລກອາຣັບໃນໃຈກ່ອນ 4+5=? ແແລ້ວຈຶ່ງປ່ຽນຄຳຕອບກັບເປັນເລກລາວ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ (6 ແຍກອອກເປັນເທົ່າໃດ?): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"1"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"4"}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"3"}</span>
                <span>{"ແລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ແລະ"}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"2"}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "30px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" , whiteSpace: "nowrap"}}>{"6"}</span>
                <span>{"="}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>{"5"}</span>
                <span>{"ແລະ"}</span>
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
            <span key="1">{"(1) 3, (2) 1, (3) 3, (4) 5, (5) 3, (6) 6, (7) 4, (8) 5, (9) 4, (10) 4"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ໙, (2) ໗, (3) ໑໐, (4) ໑໐"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 2, (3) 3, (4) 4, (5) 1"}</span>
          ]
        }
      ],
      advice: "ການແຍກຈຳນວນແມ່ນພື້ນຖານທີ່ສຳຄັນຫຼາຍສຳລັບການລົບເລກໃນບົດຕໍ່ໆໄປ. ນ້ອງໆຄວນຝຶກໃຫ້ຄ່ອງແຄ້ວເດີ!"
    }
  };
