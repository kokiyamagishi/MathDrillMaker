import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit15Data: UnitData = {
    unitNumber: 15,
    unitTitle: "ເງິນກີບ ແລະ ການປຽບທຽບ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເງິນລາວ (ເງິນກີບ) ແລະ ການປຽບທຽບມູນຄ່າ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 128〜129",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮູ້ຈັກກັບເງິນກີບ ທີ່ເຮົາໃຊ້ໃນຊີວິດປະຈຳວັນນຳກັນ."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#F3E5F5", padding: "24px", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "16px", border: "2px solid #9C27B0" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", textAlign: "center" }}>{"ໃບເງິນກີບທີ່ຄວນຮູ້ຈັກ:"}</p>
            
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px" }}>
              {/* 500 Kip Note */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div className="math-illustration" style={{ width: "140px", height: "70px", backgroundColor: "#E91E63", borderRadius: "4px", border: "1px solid #C2185B", position: "relative", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  <span style={{ fontSize: "28px", fontWeight: "bold" }}>500</span>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>{"ໃບ 500 ກີບ"}</span>
              </div>
              
              {/* 1000 Kip Note */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div className="math-illustration" style={{ width: "140px", height: "70px", backgroundColor: "#4CAF50", borderRadius: "4px", border: "1px solid #388E3C", position: "relative", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  <span style={{ fontSize: "28px", fontWeight: "bold" }}>1000</span>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>{"ໃບ 1,000 ກີບ"}</span>
              </div>
              
              {/* 2000 Kip Note */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div className="math-illustration" style={{ width: "140px", height: "70px", backgroundColor: "#2196F3", borderRadius: "4px", border: "1px solid #1976D2", position: "relative", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  <span style={{ fontSize: "28px", fontWeight: "bold" }}>2000</span>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>{"ໃບ 2,000 ກີບ"}</span>
              </div>
            </div>
            
            <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#FFF", borderRadius: "8px" }}>
              <p><strong>{"ການປຽບທຽບມູນຄ່າ:"}</strong></p>
              <p>{"ໃບ 1,000 ກີບ ມີຄ່າເທົ່າກັບ ໃບ 500 ກີບ ຈຳນວນ 2 ໃບ (500 + 500 = 1000)"}</p>
              <p>{"ໃບ 2,000 ກີບ ມີຄ່າເທົ່າກັບ ໃບ 1,000 ກີບ ຈຳນວນ 2 ໃບ (1000 + 1000 = 2000)"}</p>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເງິນກີບແຕ່ລະໃບມີສີແຕກຕ່າງກັນ. ຈື່ສີຂອງໃບເງິນກໍຊ່ວຍໃຫ້ຈຳແນກໄດ້ງ່າຍຂຶ້ນ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງສັງເກດຮູບໃບເງິນລຸ່ມນີ້ ແລ້ວບອກວ່າມີມູນຄ່າລວມກັນທັງໝົດເທົ່າໃດ? "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
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
              <p>{"ທ້າວບຸນ ມີເງິນ 1 ໃບ ມູນຄ່າ 2,000 ກີບ. ລາວຕ້ອງການປ່ຽນເປັນໃບ 500 ກີບ. ລາວຈະໄດ້ໃບ 500 ກີບ ທັງໝົດຈັກໃບ? "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ຕອບ: ໄດ້ໃບ 500 ກີບ ທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ໃບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຖ້າປ່ຽນເປັນໃບ 1,000 ກີບ ຈະໄດ້ທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ໃບ"}</span>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໃບ 1,000 ກີບ ປ່ຽນເປັນໃບ 500 ກີບ ໄດ້ 2 ໃບ. ແລ້ວ 2,000 ກີບເດ ຈະໄດ້ຈັກໃບນໍ?"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ນາງດາວໄປຮ້ານຄ້າ, ລາວຊື້ເຂົ້າໜົມ 1,000 ກີບ ແລະ ຊື້ນ້ຳຫວານ 2,000 ກີບ. ລາວຈ່າຍດ້ວຍໃບ 2,000 ກີບ ຈຳນວນ 2 ໃບ. ແມ່ຄ້າຕ້ອງທອນເງິນໃຫ້ນາງດາວເທົ່າໃດ? "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <span>{"ຕອບ: ແມ່ຄ້າຕ້ອງທອນເງິນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(2)"}</span>
              <span>{"ຖ້າດາວຊື້ພຽງແຕ່ເຂົ້າໜົມ 1,000 ກີບ ແມ່ຄ້າຕ້ອງທອນເງິນເທົ່າໃດ? (ຈ່າຍດ້ວຍ 2,000 ກີບ 1 ໃບ) ຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
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
            <span key="1">{"(1) 2000, (2) 3000"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: 4 ໃບ (ເພາະ 500 + 500 + 500 + 500 = 2000)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ທອນ 1000 ກີບ, (2) ທອນ 1000 ກີບ"}</span>
          ]
        }
      ],
      advice: "ເງິນແມ່ນສິ່ງສຳຄັນໃນຊີວິດປະຈຳວັນ. ຝຶກນັບເງິນແທ້ໆນຳພໍ່ແມ່ເວລາໄປຕະຫຼາດ ຈະຊ່ວຍໃຫ້ເຮົາເກັ່ງເລກຂຶ້ນຫຼາຍເລີຍ!"
    }
  };
