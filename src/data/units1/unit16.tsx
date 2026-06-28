import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit16Data: UnitData = {
    unitNumber: 16,
    unitTitle: "ຮູບຮ່າງຂອງສິ່ງຕ່າງໆທີ່ຢູ່ອ້ອມຕົວເຮົາ (ຕໍ່)",
    unitGoal: "ຝຶກການຈຳແນກ ແລະ ນຳໃຊ້ຮູບຮ່າງຕ່າງໆ (ກັບ, ທໍ່, ໜ່ວຍມົນ) ໃນການແກ້ບັນຫາ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 130〜135",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາທົບທວນເລື່ອງຮູບຮ່າງ ແລະ ເບິ່ງວ່າຮູບຮ່າງເຫຼົ່ານີ້ເມື່ອເບິ່ງຈາກຫຼາຍໆດ້ານ ມັນຈະເປັນຮູບແນວໃດ."}</p>
          <div className="math-illustration" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", backgroundColor: "#E0F7FA", padding: "24px", borderRadius: "16px", border: "2px solid #00BCD4", fontSize: "22px" }}>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px", flex: 1, minWidth: "200px" }}>
              <div style={{ fontWeight: "bold", fontSize: "22px", color: "#0097A7" }}>{"ຮູບທໍ່"}</div>
              <div style={{ width: "60px", height: "90px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4", borderRadius: "30px/10px", boxShadow: "4px 4px 0 #0097A7" }}></div>
              <p style={{ textAlign: "center", fontSize: "22px" }}>{"ຖ້າເບິ່ງຈາກທາງເທິງລົງມາ ຈະເຫັນເປັນຮູບ "}<strong>{"ວົງມົນ"}</strong></p>
              <div style={{ width: "50px", height: "50px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4", borderRadius: "50%" }}></div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px", flex: 1, minWidth: "200px" }}>
              <div style={{ fontWeight: "bold", fontSize: "22px", color: "#0097A7" }}>{"ຮູບກັບ"}</div>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4", borderRadius: "8px", boxShadow: "4px 4px 0 #0097A7" }}></div>
              <p style={{ textAlign: "center", fontSize: "22px" }}>{"ຖ້າເບິ່ງຈາກທາງເທິງ ຫຼື ທາງຂ້າງ ຈະເຫັນເປັນຮູບ "}<strong>{"ຈະຕຸລັດ ຫຼື ສີ່ແຈສາກ"}</strong></p>
              <div style={{ width: "60px", height: "60px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4" }}></div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສິ່ງຂອງບາງຢ່າງ ເວລາເບິ່ງຈາກດ້ານໜ້າ ກັບ ດ້ານເທິງ ອາດຈະເຫັນເປັນຮູບຮ່າງທີ່ບໍ່ຄືກັນເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກວ່າ ຖ້າເອົາວັດຖຸລຸ່ມນີ້ມາວາງເທິງເຈ້ຍ ແລ້ວເອົາສໍດຳຂີດຕາມຂອບພື້ນຂອງມັນ, ຈະໄດ້ຮູບຮ່າງຫຍັງ? (ວົງມົນ ຫຼື ສີ່ແຈ) "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>🥫</span>
                <span>{"ກະປ໋ອງນົມ (ຮູບທໍ່) ຕັ້ງໄວ້:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>📦</span>
                <span>{"ກ່ອງເຈ້ຍ (ຮູບກັບ) ຕັ້ງໄວ້:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>⚽</span>
                <span>{"ໝາກບານ (ຮູບໜ່ວຍມົນ):"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                <span style={{ fontSize: "24px" , whiteSpace: "nowrap"}}>🧻</span>
                <span>{"ເຈ້ຍອະນາໄມ (ຮູບທໍ່) ຕັ້ງໄວ້:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              <p>{"ນາງວຽງ ແຕ້ມຮູບ ໂດຍໃຊ້ຮູບຮ່າງຕ່າງໆ. ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                <p>{"ລາວໃຊ້ຮູບສີ່ແຈ 2 ຮູບ ສຳລັບຕົວລົດ. ລາວຄວນໃຊ້ຮູບຮ່າງຫຍັງ ສຳລັບລໍ້ລົດ? (ເພື່ອໃຫ້ລົດແລ່ນໄດ້)"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຕອບ: ຄວນໃຊ້ຮູບ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                <p>{"ຖ້າລາວຕ້ອງການແຕ້ມຮູບເຮືອນ, ຫຼັງຄາເຮືອນຄວນໃຊ້ຮູບຮ່າງຫຍັງຈຶ່ງຈະເໝາະສົມ?"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຕອບ: ຄວນໃຊ້ຮູບ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ລໍ້ລົດຕ້ອງກິ້ງໄດ້ ແມ່ນບໍ່? ຮູບຮ່າງຫຍັງນໍທີ່ກິ້ງໄດ້ດີທີ່ສຸດ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງບອກຮູບຮ່າງຂອງເງົາ ຖ້າເອົາວັດຖຸລຸ່ມນີ້ໄປວາງກາງແດດ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
              <p>{"ຖ້າເອົາຮູບໜ່ວຍມົນ (ເຊັ່ນ ໝາກບານ) ມາວາງ, ເງົາຂອງມັນທີ່ຕົກໃສ່ພື້ນ ຈະເປັນຮູບຮ່າງຫຍັງ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"ຕອບ: ເປັນຮູບ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
              <p>{"ຖ້າເອົາຮູບກັບ (ເຊັ່ນ ກ່ອງເຈ້ຍ) ມາວາງ, ເງົາຂອງມັນທີ່ຕົກໃສ່ພື້ນ ຈະເປັນຮູບຮ່າງຫຍັງ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"ຕອບ: ເປັນຮູບ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            <span key="1">{"(1) ວົງມົນ, (2) ສີ່ແຈ, (3) ວົງມົນ, (4) ວົງມົນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ວົງມົນ (ເພື່ອໃຫ້ກິ້ງໄດ້), (2) ສາມແຈ (ສຳລັບຫຼັງຄາເຮືອນ)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ວົງມົນ, (2) ສີ່ແຈ"}</span>
          ]
        }
      ],
      advice: "ຮູບຮ່າງສາມມິຕິ (ກັບ, ທໍ່, ໜ່ວຍມົນ) ເມື່ອເບິ່ງແຕ່ດ້ານດຽວ ຫຼື ເບິ່ງເງົາຂອງມັນ ຈະເຫັນເປັນຮູບຮ່າງສອງມິຕິ (ສີ່ແຈ, ວົງມົນ) ນັ້ນເອງ."
    }
  };
