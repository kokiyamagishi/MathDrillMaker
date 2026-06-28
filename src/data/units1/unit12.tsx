import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit12Data: UnitData = {
    unitNumber: 12,
    unitTitle: "ການບວກ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການບວກເລກທີ່ມີຜົນບວກຫຼາຍກວ່າ 10 (ການບວກທີ່ມີຈື່).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 99〜110",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການບວກເລກທີ່ມີຜົນບວກກາຍ 10 ນຳກັນ. ວິທີທີ່ງ່າຍທີ່ສຸດແມ່ນ "}<strong>{"ການສ້າງໃຫ້ເປັນ 10 ກ່ອນ"}</strong>{"."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#FFF3E0", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", textAlign: "center", marginBottom: "16px" }}>{"ຕົວຢ່າງ: 9 + 4 = ?"}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FF9800", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>1</div>
                <div style={{ fontSize: "22px" }}>{"ແຍກ 4 ອອກເປັນ 1 ກັບ 3"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FF9800", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>2</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 9 ບວກກັບ 1 ເພື່ອໃຫ້ເປັນ 10"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FF9800", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>3</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 10 ມາບວກກັບ 3 ທີ່ເຫຼືອ ເທົ່າກັບ 13"}</div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
              <div className="math-illustration" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                <div style={{ fontSize: "32px", fontWeight: "bold", letterSpacing: "8px" }}>{"9 + 4"}</div>
                {/* V shape under 4 */}
                <div style={{ position: "absolute", top: "35px", right: "6px", fontSize: "22px", color: "#666" }}>/ \</div>
                <div style={{ position: "absolute", top: "50px", right: "0px", display: "flex", gap: "12px", fontSize: "22px", fontWeight: "bold" }}>
                  <span style={{ color: "#F44336" }, whiteSpace: "nowrap"}>1</span>
                  <span>3</span>
                </div>
                {/* 10 grouping */}
                <div style={{ position: "absolute", top: "70px", left: "0px", width: "70px", height: "2px", backgroundColor: "#F44336", borderBottom: "2px dashed #F44336" }}></div>
                <div style={{ position: "absolute", top: "75px", left: "20px", fontSize: "22px", color: "#F44336", fontWeight: "bold" }}>{"ລວມກັນເປັນ 10"}</div>
              </div>
            </div>
            <div style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginTop: "80px", color: "#D32F2F" }}>
              {"ດັ່ງນັ້ນ, 9 + 4 = 13"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ພະຍາຍາມຈື່ຄູ່ຂອງຕົວເລກທີ່ລວມກັນເປັນ 10 ໃຫ້ໄດ້ (ເຊັ່ນ: 9 ກັບ 1, 8 ກັບ 2, 7 ກັບ 3...) ຈະຊ່ວຍໃຫ້ບວກເລກໄວຂຶ້ນ!",
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
                <span>{"9 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(2) "}</span>
                <span>{"8 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(3) "}</span>
                <span>{"7 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(4) "}</span>
                <span>{"6 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(5) "}</span>
                <span>{"8 + 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(6) "}</span>
                <span>{"5 + 9 ="}</span>
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
            <p>{"ທ້າວຄຳ ມີໝາກບານ 7 ໜ່ວຍ. ພໍ່ຊື້ໃຫ້ຕື່ມອີກ 6 ໜ່ວຍ. ທ້າວຄຳມີໝາກບານທັງໝົດຈັກໜ່ວຍ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ໜ່ວຍ"}</p>
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
              <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ບັອກ ເພື່ອໃຫ້ຜົນບວກເທົ່າກັບຈຳນວນທີ່ກຳນົດໃຫ້: "} <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"8 +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 13"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"9 +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 15"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"+ 6 = 14"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ລອງຄິດເບິ່ງວ່າ: 8 ຕ້ອງບວກຫຍັງຈຶ່ງເປັນ 10? ຕ້ອງບວກ 2 ແມ່ນບໍ່. ຫຼັງຈາກນັ້ນ 10 ຕ້ອງບວກຫຍັງອີກຈຶ່ງເປັນ 13? ບວກອີກ 3. ສະແດງວ່າຕົວເລກນັ້ນແມ່ນ 2+3=5 ນັ້ນເອງ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                <span>{"9 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                <span>{"7 + 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                <span>{"8 + 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                <span>{"4 + 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                <span>{"5 + 7 ="}</span>
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
            <span key="1">{"(1) 14, (2) 12, (3) 13, (4) 11, (5) 15, (6) 14"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 7 + 6 = 13, ຕອບ: 13 ໜ່ວຍ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 6, (3) 8"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 15, (2) 15, (3) 16, (4) 13, (5) 12"}</span>
          ]
        }
      ],
      advice: "ວິທີສ້າງໃຫ້ເປັນ 10 ແມ່ນວິທີທີ່ໄວທີ່ສຸດ! ເມື່ອເຫັນເລກ 9 ໃຫ້ຄິດເຖິງ 1, ເຫັນ 8 ໃຫ້ຄິດເຖິງ 2. ເມື່ອຝຶກເລື້ອຍໆ ນ້ອງໆຈະສາມາດຕອບໄດ້ໃນໃຈເລີຍ."
    }
  };
