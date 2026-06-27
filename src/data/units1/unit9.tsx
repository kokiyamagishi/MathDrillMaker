import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit9Data: UnitData = {
    unitNumber: 9,
    unitTitle: "ຮູບຮ່າງຂອງສິ່ງຕ່າງໆທີ່ຢູ່ອ້ອມຕົວເຮົາ",
    unitGoal: "ສັງເກດ ແລະ ຈຳແນກຮູບຮ່າງຂອງວັດຖຸຕ່າງໆ ເຊັ່ນ: ກັບ, ທໍ່, ໜ່ວຍມົນ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 86〜89",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ສິ່ງຕ່າງໆທີ່ຢູ່ອ້ອມຕົວເຮົາມີຮູບຮ່າງແຕກຕ່າງກັນ. ມາສັງເກດເບິ່ງຮູບຮ່າງເຫຼົ່ານີ້ນຳກັນ:"}</p>
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", backgroundColor: "#E8EAF6", padding: "24px", borderRadius: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#FFCDD2", border: "2px solid #F44336", borderRadius: "8px", boxShadow: "4px 4px 0 #D32F2F" }}></div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>{"ຮູບກັບ"}</div>
              <div style={{ fontSize: "22px", color: "#666" }}>{"(ເຊັ່ນ: ກັບສະບູ)"}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "60px", height: "90px", backgroundColor: "#C8E6C9", border: "2px solid #4CAF50", borderRadius: "30px/10px", boxShadow: "4px 4px 0 #388E3C" }}></div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>{"ຮູບທໍ່"}</div>
              <div style={{ fontSize: "22px", color: "#666" }}>{"(ເຊັ່ນ: ກະປ໋ອງ)"}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#FFF9C4", border: "2px solid #FFC107", borderRadius: "50%", boxShadow: "4px 4px 0 #FFA000" }}></div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>{"ຮູບໜ່ວຍມົນ"}</div>
              <div style={{ fontSize: "22px", color: "#666" }}>{"(ເຊັ່ນ: ໝາກບານ)"}</div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຮູບກັບມີໜ້າພຽງ, ຮູບທໍ່ກິ້ງໄດ້ທາງຂ້າງແຕ່ມີໜ້າພຽງສອງເບື້ອງ, ສ່ວນໜ່ວຍມົນແມ່ນກິ້ງໄດ້ທຸກທິດທາງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກວ່າສິ່ງຂອງລຸ່ມນີ້ມີຮູບຮ່າງຄືກັບອັນໃດ (ກັບ, ທໍ່, ໜ່ວຍມົນ): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ໝາກກ້ຽງ 🍊 ມີຮູບຮ່າງເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ກ່ອງຂອງຂວັນ 🎁 ມີຮູບຮ່າງເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ຈອກນ້ຳ 🥛 ມີຮູບຮ່າງເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ຖ້າເອົາຮູບທໍ່ມາວາງນອນ, ມັນຈະສາມາດກິ້ງໄດ້ຄືກັບໜ່ວຍມົນຫຼືບໍ່? (ຕອບ ໄດ້ ຫຼື ບໍ່ໄດ້): "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "80px" }}></span></p>
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
              <p>{"ຈົ່ງສັງເກດຫຸ່ນຍົນທີ່ປະກອບຈາກຮູບຮ່າງຕ່າງໆລຸ່ມນີ້ ແລ້ວນັບຈຳນວນແຕ່ລະຮູບຮ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                <div style={{ position: "relative", width: "100px", height: "240px", padding: "16px", backgroundColor: "#F5F5F5", borderRadius: "12px" }}>
                  {/* Robot Head - ກັບ */}
                  <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", width: "40px", height: "40px", backgroundColor: "#FFCDD2", border: "2px solid #333" }}></div>
                  {/* Robot Body - ກັບ */}
                  <div style={{ position: "absolute", top: "60px", left: "50%", transform: "translateX(-50%)", width: "60px", height: "80px", backgroundColor: "#FFCDD2", border: "2px solid #333" }}></div>
                  {/* Robot Arms - ທໍ່ */}
                  <div style={{ position: "absolute", top: "70px", left: "15px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px", transform: "rotate(30deg)" }}></div>
                  <div style={{ position: "absolute", top: "70px", right: "15px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px", transform: "rotate(-30deg)" }}></div>
                  {/* Robot Legs - ທໍ່ */}
                  <div style={{ position: "absolute", top: "140px", left: "45px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px" }}></div>
                  <div style={{ position: "absolute", top: "140px", right: "45px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"(1) ມີຮູບກັບ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"ອັນ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"(2) ມີຮູບທໍ່ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"ອັນ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"(3) ມີຮູບໜ່ວຍມົນ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"ອັນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສັງເກດດີໆເດີ! ແຂນ ແລະ ຂາຂອງຫຸ່ນຍົນແມ່ນຮູບທໍ່. ສ່ວນຫົວ ແລະ ຕົນຕົວແມ່ນຮູບກັບ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງບອກຊື່ຮູບຮ່າງທີ່ສາມາດຕັ້ງຊ້ອນກັນໃຫ້ສູງໆໄດ້ດີທີ່ສຸດ ແມ່ນຮູບຮ່າງໃດ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "16px" }}>
              <span>{"ຕອບ: ຮູບ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            <span key="1">{"(1) ໜ່ວຍມົນ, (2) ກັບ, (3) ທໍ່"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ຕອບ: ໄດ້ (ເພາະຂ້າງຂອງມັນມົນ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) ຮູບກັບ 2 ອັນ, (2) ຮູບທໍ່ 4 ອັນ, (3) ຮູບໜ່ວຍມົນ 0 ອັນ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"ຕອບ: ຮູບກັບ (ເພາະມີໜ້າພຽງທຸກດ້ານ ເຮັດໃຫ້ຊ້ອນກັນໄດ້ໝັ້ນຄົງ)"}</span>
          ]
        }
      ],
      advice: "ສັງເກດສິ່ງຂອງໃນເຮືອນຂອງນ້ອງໆເບິ່ງວ່າ ອັນໃດເປັນຮູບກັບ ອັນໃດເປັນຮູບທໍ່ ແລະ ອັນໃດເປັນຮູບໜ່ວຍມົນ. ມັນຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລື່ອງຮູບຮ່າງໄດ້ດີຂຶ້ນຫຼາຍ!"
    }
  };
