import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit18Data: UnitData = {
    unitNumber: 18,
    unitTitle: "ເລກລາວ",
    unitGoal: "ຮຽນຮູ້ການອ່ານ ແລະ ການຂຽນຕົວເລກລາວ (໑, ໒, ໓...).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 154〜161",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ນອກຈາກຕົວເລກອາຣັບ (1, 2, 3) ທີ່ເຮົາໃຊ້ແລ້ວ, ປະເທດເຮົາຍັງມີຕົວເລກລາວອີກດ້ວຍ. ມາຮູ້ຈັກນຳກັນ:"}</p>
          <div className="math-illustration" style={{ backgroundColor: "#FCE4EC", padding: "24px", borderRadius: "16px", border: "2px solid #E91E63", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"1"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໑"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"6"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໖"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"2"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໒"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"7"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໗"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"3"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໓"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"8"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໘"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"4"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໔"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"9"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໙"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"5"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໕"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"0"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໐"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສັງເກດດີໆເດີ! ເລກ ໒ (2) ກັບ ເລກ ໓ (3) ຂຽນຄ້າຍຄືກັນແຕ່ ໓ ມີຫາງຍາວກວ່າ.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຕົວເລກອາຣັບລຸ່ມນີ້ ໃຫ້ເປັນຕົວເລກລາວ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"4"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"7"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"5"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"25"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"8"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(7)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"9"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(8)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"12"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(9)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"20"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(10)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"50"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      }
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
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"໔ + ໕ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"໑໐ - ໓ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"໑໕ - ໕ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"໘ + ໒ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ປ່ຽນເປັນຕົວເລກອາຣັບໃນໃຈກ່ອນ 4+5=? ແລ້ວຈຶ່ງປ່ຽນຄຳຕອບກັບເປັນເລກລາວ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ໃຫ້ຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <p>{"ຈົ່ງຂຽນປີປັດຈຸບັນ (ຕົວຢ່າງ: 2024) ເປັນຕົວເລກລາວ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ປີ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
              <p>{"ຈົ່ງຂຽນອາຍຸຂອງນ້ອງເອງ ເປັນຕົວເລກລາວ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ອາຍຸ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ປີ"}</span>
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
            <span key="1">{"(1) ໔, (2) ໗, (3) ໕, (4) ໑໐, (5) ໒໕, (6) ໘, (7) ໙, (8) ໑໒, (9) ໒໐, (10) ໕໐"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ໙ (4+5=9), (2) ໗ (10-3=7), (3) ໑໐ (15-5=10), (4) ໑໐ (8+2=10)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ໒໐໒໔ (ຫຼື ຕາມປີປັດຈຸບັນ), (2) ຂຽນອາຍຸເປັນຕົວເລກລາວ (ເຊັ່ນ ໖ ປີ ຫຼື ໗ ປີ)"}</span>
          ]
        }
      ],
      advice: "ຕົວເລກລາວເປັນເອກະລັກຂອງຊາດລາວເຮົາ. ນ້ອງໆຄວນຝຶກຂຽນໃຫ້ງາມໆ ແລະ ຈື່ໃຫ້ໄດ້ທຸກຕົວເດີ!"
    }
  };
