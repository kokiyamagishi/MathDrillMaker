import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit10Data: UnitData = {
    unitNumber: 10,
    unitTitle: "ການຄິດໄລ່ຂອງ 3 ຈຳນວນ",
    unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບ 3 ຈຳນວນລຽນຕິດ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 90〜94",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການຄິດໄລ່ເລກທີ່ຍາວຂຶ້ນກວ່າເກົ່ານຳກັນ. ວິທີຄິດໄລ່ແມ່ນ ໃຫ້ຄິດໄລ່ຈາກຊ້າຍໄປຂວາຕາມລຳດັບ."}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#FCE4EC", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>{"3 + 2 + 4 = ?"}</div>
            
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ fontSize: "22px", color: "#666" }}>{"ຂັ້ນຕອນທີ 1: ເອົາ 3 + 2"}</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", backgroundColor: "#FFF", padding: "8px 16px", borderRadius: "8px", border: "2px solid #E91E63" }}>{"3 + 2 = 5"}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ fontSize: "22px", color: "#666" }}>{"ຂັ້ນຕອນທີ 2: ເອົາ 5 ໄປບວກ 4"}</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", backgroundColor: "#FFF", padding: "8px 16px", borderRadius: "8px", border: "2px solid #2196F3" }}>{"5 + 4 = 9"}</div>
              </div>
            </div>
            
            <div style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", marginTop: "16px", color: "#D32F2F" }}>
              {"ດັ່ງນັ້ນ, 3 + 2 + 4 = 9"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ບໍ່ວ່າຈະເປັນການບວກ ຫຼື ການລົບ, ໃຫ້ເຮັດເລກຄູ່ທຳອິດຢູ່ເບື້ອງຊ້າຍມືກ່ອນສະເໝີ!",
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
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(1)"}</span>
                <span>{"4 + 1 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(2)"}</span>
                <span>{"3 + 4 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(3)"}</span>
                <span>{"8 - 3 - 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(4)"}</span>
                <span>{"9 - 2 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(5)"}</span>
                <span>{"5 + 3 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", whiteSpace: "nowrap" }}>{"(6)"}</span>
                <span>{"7 - 4 + 5 ="}</span>
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
            <p>{"ມີນົກ 4 ໂຕ ເກາະຢູ່ຕົ້ນໄມ້. ບິນມາຕື່ມອີກ 3 ໂຕ, ຈາກນັ້ນບິນໜີໄປ 2 ໂຕ. ຈະຍັງເຫຼືອນົກຈັກໂຕຢູ່ຕົ້ນໄມ້? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ໂຕ"}</p>
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
              <p>{"ຈົ່ງຊອກຫາຕົວເລກທີ່ຫາຍໄປ ເພື່ອເຮັດໃຫ້ປະໂຫຍກສັນຍະລັກຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"2 + 4 +"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px", margin: 0 }}></span>
                    <span>{"= 9"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"10 - 2 -"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px", margin: 0 }}></span>
                    <span>{"= 5"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"6 +"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px", margin: 0 }}></span>
                    <span>{"- 1 = 8"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສຳລັບຂໍ້ (1), 2+4=6, ດັ່ງນັ້ນ 6 ບວກຫຍັງຈຶ່ງຈະເປັນ 9?"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 + 5 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"10 - 5 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"6 - 3 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"3 + 7 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"8 - 0 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
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
            <span key="1">{"(1) 7, (2) 10, (3) 4, (4) 3, (5) 6, (6) 8"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 4 + 3 - 2 = 5, ຕອບ: 5 ໂຕ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 3, (2) 3, (3) 3"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 10, (2) 3, (3) 9, (4) 6, (5) 10"}</span>
          ]
        }
      ],
      advice: "ການຄິດໄລ່ເລກ 3 ຈຳນວນ, ຖ້າຄິດໄລ່ຕາມລຳດັບຈາກຊ້າຍໄປຂວາເທື່ອລະຄູ່ ຈະບໍ່ເຮັດໃຫ້ເຮົາຫຼົງງ່າຍ. ຄ່ອຍໆເຮັດໄປເທື່ອລະຂັ້ນຕອນເດີ!"
    }
  };
