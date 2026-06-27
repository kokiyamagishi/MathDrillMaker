import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit8Data: UnitData = {
    unitNumber: 8,
    unitTitle: "ເວລາ",
    unitGoal: "ຮຽນຮູ້ການອ່ານໂມງບອກເວລາ (ໂມງກົງ ແລະ ໂມງເຄິ່ງ).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 84〜85",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ວິທີການອ່ານໂມງນຳກັນ. ໂມງມີເຂັມສັ້ນ ແລະ ເຂັມຍາວ:"}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", backgroundColor: "#FFFDE7", padding: "16px", borderRadius: "12px" }}>
            <p>{"- "}<strong>{"ເຂັມສັ້ນ"}</strong>{" ຊີ້ບອກຊົ່ວໂມງ (ໂມງ)"}</p>
            <p>{"- "}<strong>{"ເຂັມຍາວ"}</strong>{" ຊີ້ບອກນາທີ"}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap", marginTop: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #1976D2", backgroundColor: "#FFF" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(210deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(0deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>12</div>
                <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>3</div>
                <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>6</div>
                <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>9</div>
              </div>
              <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center" }}>
                {"ເຂັມສັ້ນຊີ້ເລກ 7"}<br/>{"ເຂັມຍາວຊີ້ເລກ 12"}
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F44336", backgroundColor: "#FFEBEE", padding: "8px 16px", borderRadius: "8px" }}>{"7 ໂມງ"}</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #1976D2", backgroundColor: "#FFF" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(225deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(180deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>12</div>
                <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>3</div>
                <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>6</div>
                <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>9</div>
              </div>
              <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center" }}>
                {"ເຂັມສັ້ນຊີ້ລະຫວ່າງກາງ 7 ກັບ 8"}<br/>{"ເຂັມຍາວຊີ້ເລກ 6"}
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F44336", backgroundColor: "#FFEBEE", padding: "8px 16px", borderRadius: "8px" }}>{"7 ໂມງເຄິ່ງ"}</div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າເຂັມຍາວຊີ້ເລກ 12 ແມ່ນໂມງກົງ. ຖ້າເຂັມຍາວຊີ້ເລກ 6 ແມ່ນໂມງເຄິ່ງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ໂມງລຸ່ມນີ້ແມ່ນຈັກໂມງ? ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gridTemplateRows: "auto auto", gridAutoFlow: "column", gap: "24px 40px", justifyItems: "center" }}>
              
              {/* (1) 9:00 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #4CAF50", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(270deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(0deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                  <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                  <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                  <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "20px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "35px" }}></span>
                  <span>{"ໂມງ"}</span>
                </div>
              </div>

              {/* (2) 11:30 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #4CAF50", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(345deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(180deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                  <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                  <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                  <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "20px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "35px" }}></span>
                  <span>{"ໂມງເຄິ່ງ"}</span>
                </div>
              </div>

              {/* (3) 2:00 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #4CAF50", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(60deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(0deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                  <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                  <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                  <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "20px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "35px" }}></span>
                  <span>{"ໂມງ"}</span>
                </div>
              </div>

              {/* (4) 5:30 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #4CAF50", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(165deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(180deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                  <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                  <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                  <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "20px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "35px" }}></span>
                  <span>{"ໂມງເຄິ່ງ"}</span>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແຕ້ມເຂັມໂມງສັ້ນ ແລະ ເຂັມຍາວ ໃສ່ໜ້າປັດໂມງ ໃຫ້ຖືກຕ້ອງຕາມເວລາທີ່ກຳນົດໃຫ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 40px", justifyItems: "center" }}>
                
                {/* 3:00 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1) 3 ໂມງ"}</div>
                  <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FF9800", backgroundColor: "#FFF" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                    <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                    <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                    <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                    <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                  </div>
                </div>

                {/* 8:30 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2) 8 ໂມງເຄິ່ງ"}</div>
                  <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FF9800", backgroundColor: "#FFF" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                    <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                    <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                    <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                    <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                  </div>
                </div>

                {/* 1:30 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3) 1 ໂມງເຄິ່ງ"}</div>
                  <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FF9800", backgroundColor: "#FFF" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                    <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                    <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                    <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                    <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                  </div>
                </div>

                {/* 12:00 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4) 12 ໂມງ"}</div>
                  <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FF9800", backgroundColor: "#FFF" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                    <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                    <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                    <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                    <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                  </div>
                </div>

              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເຂັມສັ້ນແມ່ນເຂັມຊີ້ບອກຊົ່ວໂມງ, ສ່ວນເຂັມຍາວແມ່ນເຂັມຊີ້ບອກນາທີເດີ! ຖ້າເປັນ ໂມງເຄິ່ງ ເຂັມຍາວຈະຊີ້ໃສ່ເລກ 6 ສະເໝີ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ໃຫ້ຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>{"(1) ຕອນເຊົ້າ ທ້າວ ຄຳສອນ ຕື່ນນອນເວລາ 6 ໂມງເຄິ່ງ. ໃຫ້ຂຽນຕົວເລກເວລາຕື່ນນອນ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px" }}>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "35px" }}></span>
                <span>{"ໂມງ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "35px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <p>{"(2) ຕອນແລງ ນາງ ວັນເພັງ ກິນເຂົ້າແລງເວລາ 7 ໂມງກົງ. ໃຫ້ຂຽນຕົວເລກເວລາກິນເຂົ້າແລງ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px" }}>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "35px" }}></span>
                <span>{"ໂມງ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "35px" }}></span>
                <span>{"ນາທີ"}</span>
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
            <span key="1">{"(1) 9, (2) 11, (3) 2, (4) 5"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ເຂັມສັ້ນຊີ້ໃສ່ເລກ 3, ເຂັມຍາວຊີ້ໃສ່ເລກ 12 (3:00)"}</span>,
            <span key="3">{"(2) ເຂັມສັ້ນຊີ້ກາງລະຫວ່າງເລກ 8 ກັບເລກ 9, ເຂັມຍາວຊີ້ໃສ່ເລກ 6 (8:30)"}</span>,
            <span key="4">{"(3) ເຂັມສັ້ນຊີ້ກາງລະຫວ່າງເລກ 1 ກັບເລກ 2, ເຂັມຍາວຊີ້ໃສ່ເລກ 6 (1:30)"}</span>,
            <span key="5">{"(4) ເຂັມສັ້ນຊີ້ໃສ່ເລກ 12, ເຂັມຍາວຊີ້ໃສ່ເລກ 12 (12:00)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="6">{"(1) 6 ໂມງ 30 ນາທີ"}</span>,
            <span key="7">{"(2) 7 ໂມງ 00 ນາທີ (ຫຼື 7 ໂມງ)"}</span>
          ]
        }
      ],
      advice: "ໂມງກົງ ເຂັມຍາວຈະຊີ້ເລກ 12 ສະເໝີ, ສ່ວນ ໂມງເຄິ່ງ ເຂັມຍາວຈະຊີ້ເລກ 6 ສະເໝີ (30 ນາທີ). ຝຶກອ່ານເລື້ອຍໆເດີ!"
    }
  };
