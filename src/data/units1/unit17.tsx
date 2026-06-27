import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit17Data: UnitData = {
    unitNumber: 17,
    unitTitle: "ຈຳນວນທີ່ຫຼາຍກວ່າ 20",
    unitGoal: "ຮຽນຮູ້ການນັບ, ການອ່ານ ແລະ ການຂຽນຈຳນວນຮອດ 100.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 136〜153",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການນັບເລກທີ່ຫຼາຍກວ່າ 20 ນຳກັນ. ວິທີນັບທີ່ງ່າຍທີ່ສຸດຄື "}<strong>{"ການມັດເປັນກຸ່ມລະ 10"}</strong>{"."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#FFF8E1", padding: "24px", borderRadius: "16px", border: "2px solid #FFC107", display: "flex", flexDirection: "column", gap: "16px", fontSize: "22px" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>{"ຕົວຢ່າງ: ມີໄມ້ດິ້ວທັງໝົດເທົ່າໃດ?"}</p>
            
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-end", flexWrap: "wrap", justifyContent: "center" }}>
              {/* Bundle of 10s */}
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ position: "relative", width: "40px", height: "80px" }}>
                    <div style={{ position: "absolute", left: "5px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "12px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "19px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "26px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", top: "35px", left: "0", width: "40px", height: "10px", backgroundColor: "#F44336", borderRadius: "5px" }}></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ position: "relative", width: "40px", height: "80px" }}>
                    <div style={{ position: "absolute", left: "5px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "12px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "19px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "26px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", top: "35px", left: "0", width: "40px", height: "10px", backgroundColor: "#F44336", borderRadius: "5px" }}></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ position: "relative", width: "40px", height: "80px" }}>
                    <div style={{ position: "absolute", left: "5px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "12px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "19px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "26px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", top: "35px", left: "0", width: "40px", height: "10px", backgroundColor: "#F44336", borderRadius: "5px" }}></div>
                  </div>
                </div>
              </div>
              
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>{"ກັບ"}</div>
              
              {/* Single ones */}
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", justifyContent: "space-around", marginTop: "16px", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "22px", color: "#F44336", fontWeight: "bold" }}>{"3 ມັດ (ກຸ່ມລະ 10)"}</p>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{"30"}</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "22px", color: "#2196F3", fontWeight: "bold" }}>{"ກັບອີກ 4 ອັນ"}</p>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{"4"}</p>
              </div>
            </div>
            
            <p style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", color: "#D32F2F", marginTop: "16px" }}>
              {"ລວມເປັນ 34 (ສາມສິບສີ່)"}
            </p>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາອ່ານ ໃຫ້ອ່ານຫຼັກສິບກ່ອນ (ເຊັ່ນ ສາມສິບ) ແລ້ວຈຶ່ງອ່ານຫຼັກຫົວໜ່ວຍ (ເຊັ່ນ ສີ່).",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"2 ກຸ່ມລະສິບ ກັບ 5 ອັນ ເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"4 ກຸ່ມລະສິບ ກັບ 8 ອັນ ເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"6 ກຸ່ມລະສິບ ກັບ 0 ອັນ ເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ຈົ່ງຕື່ມຕົວເລກທີ່ຂາດຫາຍໄປໃສ່ໃນລຳດັບ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"48, 49, "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{", 51, 52"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"75, 76, 77, "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{", 79"}</span>
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
              <p>{"ຈົ່ງອ່ານຈຳນວນແລ້ວຂຽນເປັນຕົວເລກ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເຈັດສິບເກົ້າ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ເກົ້າສິບເອັດ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຊາວສອງ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ສາມສິບຫ້າ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຄຳວ່າ 'ເອັດ' ໝາຍເຖິງເລກ 1 ເວລາມັນຢູ່ທາງຫຼັງຂອງຫຼັກສິບເດີ! (ເຊັ່ນ 21 = ຊາວເອັດ)"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ໃຫ້ຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <p>{"ຖ້າມີ 9 ກຸ່ມລະສິບ ກັບອີກ 10 ອັນ. ຈຳນວນທັງໝົດຈະແມ່ນເທົ່າໃດ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ຕອບ: ຈຳນວນທັງໝົດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
              <p>{"ຖ້າມີ 5 ກຸ່ມລະສິບ ກັບອີກ 12 ອັນ. ຈຳນວນທັງໝົດຈະແມ່ນເທົ່າໃດ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ຕອບ: ຈຳນວນທັງໝົດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
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
            <span key="1">{"(1) 25, (2) 48, (3) 60"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(1) 50, (2) 78"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 79, (2) 91, (3) 22, (4) 35"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 100, (2) 62 (ເພາະ 12 ອັນ ສາມາດແຍກອອກເປັນ 1 ກຸ່ມລະສິບ ກັບອີກ 2 ອັນ)"}</span>
          ]
        }
      ],
      advice: "ເມື່ອຈຳນວນຮອດ 10 ໃຫ້ມັດລວມກັນເປັນ 1 ກຸ່ມລະສິບ. ເມື່ອມີ 10 ກຸ່ມລະສິບ ມັນກໍຄື 100 (ໜຶ່ງຮ້ອຍ) ນັ້ນເອງ!"
    }
  };
