import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit14Data: UnitData = {
    unitNumber: 14,
    unitTitle: "ການລົບ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການລົບເລກທີ່ມີຕົວຕັ້ງລົບຫຼາຍກວ່າ 10 (ການລົບແບບຢືມ).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 115〜127",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການລົບເລກທີ່ຕົວຕັ້ງລົບຫຼາຍກວ່າ 10 ນຳກັນ. ວິທີທີ່ງ່າຍທີ່ສຸດແມ່ນ "}<strong>{"ແບ່ງອອກເປັນ 10 ກັບຈຳນວນທີ່ເຫຼືອ"}</strong>{"."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#E8F5E9", padding: "16px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", textAlign: "center", marginBottom: "8px" }}>{"ຕົວຢ່າງ: 13 - 9 = ?"}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4CAF50", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>1</div>
                <div style={{ fontSize: "22px" }}>{"ແຍກ 13 ອອກເປັນ 10 ກັບ 3"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4CAF50", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>2</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 10 ມາລົບອອກ 9 ເຫຼືອ 1"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4CAF50", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>3</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 1 ທີ່ໄດ້ ມາບວກກັບ 3 ທີ່ແຍກໄວ້ຕອນທຳອິດ ເທົ່າກັບ 4"}</div>
              </div>
            </div>
            
            {/* Line Diagram for visual explanation */}
            <div className="math-illustration" style={{ marginTop: "16px", padding: "12px", backgroundColor: "#FFF", borderRadius: "12px", border: "2px solid #8BC34A" }}>
              <p style={{ fontWeight: "bold", textAlign: "center", marginBottom: "8px", fontSize: "22px" }}>{"ແຜນວາດເສັ້ນ (ເສັ້ນສະແດງຈຳນວນ)"}</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {/* Total 13 */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "80px", textAlign: "right", paddingRight: "8px", fontSize: "22px" }}>{"ທັງໝົດ 13:"}</div>
                  <div style={{ display: "flex", width: "100%", height: "28px" }}>
                    <div style={{ width: "76.9%", height: "100%", backgroundColor: "#2196F3", border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>10</div>
                    <div style={{ width: "23.1%", height: "100%", backgroundColor: "#FF9800", border: "1px solid #000", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>3</div>
                  </div>
                </div>
                
                {/* Minus 9 */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "80px", textAlign: "right", paddingRight: "8px", fontSize: "22px" }}>{"ເອົາອອກ 9:"}</div>
                  <div style={{ display: "flex", width: "100%", height: "28px" }}>
                    <div style={{ width: "69.2%", height: "100%", backgroundColor: "#F44336", border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>{"ລົບອອກ 9"}</div>
                    <div style={{ width: "7.7%", height: "100%", backgroundColor: "#4CAF50", border: "1px solid #000", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>1</div>
                    <div style={{ width: "23.1%", height: "100%", backgroundColor: "transparent" }}></div>
                  </div>
                </div>
                
                {/* Remaining */}
                <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                  <div style={{ width: "80px", textAlign: "right", paddingRight: "8px", fontSize: "22px" }}>{"ສ່ວນທີ່ເຫຼືອ:"}</div>
                  <div style={{ display: "flex", width: "100%", height: "28px" }}>
                    <div style={{ width: "69.2%", height: "100%", backgroundColor: "transparent" }}></div>
                    <div style={{ width: "7.7%", height: "100%", backgroundColor: "#4CAF50", border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>1</div>
                    <div style={{ width: "23.1%", height: "100%", backgroundColor: "#FF9800", border: "1px solid #000", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>3</div>
                  </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "4px", fontWeight: "bold", color: "#4CAF50", fontSize: "22px" }}>{"1 + 3 = 4"}</div>
              </div>
            </div>
            
            <div style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginTop: "16px", color: "#D32F2F" }}>
              {"ດັ່ງນັ້ນ, 13 - 9 = 4"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ແຍກ 10 ອອກມາກ່ອນ ແລ້ວເອົາ 10 ໄປລົບໃຫ້ຕົວລົບ ຈະເຮັດໃຫ້ຄິດໄລ່ໄດ້ງ່າຍຂຶ້ນ!",
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
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(1) "}</span>
                <span>{"12 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(2) "}</span>
                <span>{"15 - 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(3) "}</span>
                <span>{"11 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(4) "}</span>
                <span>{"14 - 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(5) "}</span>
                <span>{"16 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(6) "}</span>
                <span>{"13 - 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ນາງໃຈ ມີເຂົ້າໜົມ 15 ກ້ອນ. ລາວແບ່ງໃຫ້ນ້ອງ 7 ກ້ອນ. ນາງໃຈຈະເຫຼືອເຂົ້າໜົມຈັກກ້ອນ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ padding: "24px", backgroundColor: "#F9F9F9", borderRadius: "12px", border: "2px dashed #CCC", margin: "16px 0" }}>
              {/* Simple Line Diagram for the problem */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "100px", textAlign: "right", paddingRight: "16px", fontSize: "18px", fontWeight: "bold" }}>{"ທັງໝົດ:"}</div>
                  <div style={{ display: "flex", flex: 1, height: "40px", maxWidth: "400px" }}>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#FFCDD2", border: "2px solid #333", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", fontWeight: "bold" }}>{"15 ກ້ອນ"}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "100px", textAlign: "right", paddingRight: "16px", fontSize: "18px", fontWeight: "bold" }}>{"ແບ່ງໃຫ້:"}</div>
                  <div style={{ display: "flex", flex: 1, height: "40px", maxWidth: "400px" }}>
                    <div style={{ width: "46.6%", height: "100%", backgroundColor: "#F44336", border: "2px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "18px", fontWeight: "bold" }}>{"7 ກ້ອນ"}</div>
                    <div style={{ width: "53.4%", height: "100%", backgroundColor: "#C8E6C9", border: "2px solid #333", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", fontWeight: "bold" }}>{"? ເຫຼືອ"}</div>
                  </div>
                </div>
              </div>
            </div>
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
              <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ບັອກ ເພື່ອໃຫ້ປະໂຫຍກສັນຍະລັກຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"14 -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 9"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"12 -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 4"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"- 8 = 7"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"- 5 = 6"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຂໍ້ (3) ຕົວຕັ້ງລົບລົບອອກ 8 ແລ້ວເຫຼືອ 7. ສະແດງວ່າຖ້າເອົາ 8 ມາບວກກັບ 7 ກໍຈະໄດ້ຕົວຕັ້ງລົບນັ້ນເອງ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(1) "}</span>
                <span>{"17 - 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(2) "}</span>
                <span>{"11 - 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(3) "}</span>
                <span>{"15 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(4) "}</span>
                <span>{"13 - 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", width: "fit-content" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(5) "}</span>
                <span>{"18 - 9 ="}</span>
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
            <span key="1">{"(1) 3, (2) 7, (3) 7, (4) 7, (5) 7, (6) 7"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 15 - 7 = 8, ຕອບ: 8 ກ້ອນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 8, (3) 15, (4) 11"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 9, (2) 5, (3) 6, (4) 8, (5) 9"}</span>
          ]
        }
      ],
      advice: "ການໃຊ້ແຜນວາດເສັ້ນ (ເສັ້ນສະແດງຈຳນວນ) ຈະຊ່ວຍໃຫ້ເຮົາເຫັນພາບການລົບໄດ້ຊັດເຈນຂຶ້ນ. ເວລາແກ້ໂຈດບັນຫາ ລອງແຕ້ມເສັ້ນສະແດງແບບງ່າຍໆເບິ່ງເດີ!"
    }
  };
