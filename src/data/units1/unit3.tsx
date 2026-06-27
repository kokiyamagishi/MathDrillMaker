import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit3Data: UnitData = {
    unitNumber: 3,
    unitTitle: "ລຳດັບທີ",
    unitGoal: "ຮຽນຮູ້ການບອກລຳດັບທີ (ທີໜຶ່ງ, ທີສອງ...) ແລະ ຕຳແໜ່ງ (ຊ້າຍ, ຂວາ, ໜ້າ, ຫຼັງ).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 22〜24",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ກ່ຽວກັບລຳດັບ (ທີ) ນຳກັນ. ສັງເກດເບິ່ງແຖວຂອງສັດລຸ່ມນີ້:"}</p>
          <div style={{ marginTop: "8px", padding: "12px", border: "2px dashed #FF9800", borderRadius: "12px", backgroundColor: "#FFF3E0", fontSize: "16px" }}>
            <span style={{ fontWeight: "bold", color: "#E65100", fontSize: "18px" }}>{"💡 ຕົວຢ່າງການຕອບ (ຕົວຢ່າງຂອງ 🐰 ກະຕ່າຍ):"}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px", lineHeight: "1.4" }}>
              <p>{"• ຖ້າຖາມວ່າ: "}<strong>{"\"🐰 ແມ່ນໂຕທີເທົ່າໃດຈາກຊ້າຍ?\""}</strong></p>
              <p style={{ paddingLeft: "16px", color: "#2196F3", fontWeight: "bold" }}>{"→ ຕອບ: ທີ 3 (ເພາະນັບເລີ່ມຈາກ 🐶 ໄປທາງຂວາ)"}</p>
              <p>{"• ຖ້າຖາມວ່າ: "}<strong>{"\"🐰 ແມ່ນໂຕທີເທົ່າໃດຈາກຂວາ?\""}</strong></p>
              <p style={{ paddingLeft: "16px", color: "#E91E63", fontWeight: "bold" }}>{"→ ຕອບ: ທີ 4 (ເພາະນັບເລີ່ມຈາກ 🦊 ໄປທາງຊ້າຍ)"}</p>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເບິ່ງໃຫ້ຄັກໆວ່າ ເລີ່ມນັບມາຈາກເບື້ອງຊ້າຍ ຫຼື ເບື້ອງຂວາເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້ ໂດຍສັງເກດແຖວຂອງລົດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ display: "flex", gap: "24px", justifyContent: "center", backgroundColor: "#ffffffff", padding: "16px", borderRadius: "12px", fontSize: "32px" }}>
              <span>🚗</span><span>🚙</span><span>🚓</span><span>🚕</span><span>🚒</span><span>🚌</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <p>{"(1) ລົດຄັນທີ 2 ຈາກຊ້າຍ ແມ່ນລົດສີຫຍັງ? ຕອບ: "} <span className="answer-blank"></span></p>
              <p>{"(2) ລົດຄັນທີ 3 ຈາກຂວາ ແມ່ນລົດສີຫຍັງ? ຕອບ: "} <span className="answer-blank"></span></p>
              <p>{"(3) ລົດດັບເພີງສີແດງ 🚒 ແມ່ນຄັນທີເທົ່າໃດຈາກຊ້າຍ? ຕອບ: ທີ "} <span className="answer-blank" style={{ minWidth: "40px" }}></span></p>
              <p>{"(4) ລົດຄັນທີ 1 ຈາກຂວາ ແມ່ນລົດສີຫຍັງ? ຕອບ: "} <span className="answer-blank"></span></p>
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
              <p>{"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "16px" }}>
                <div>
                  <p>{"(1) ຈົ່ງສັງເກດຮູບເດັກນ້ອຍ 6 ຄົນ ທີ່ຢືນລຽນແຖວກັນໄປທາງໜ້າ (ຕາມຮູບ). ເດັກນ້ອຍທີ່ມີວົງມົນສີແດງອ້ອມໄວ້ ແມ່ນຄົນທີເທົ່າໃດຖ້ານັບຈາກທາງໜ້າ ແລະ ທາງຫຼັງ?"}</p>
                  <div className="math-illustration" style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#ffffff", border: "2px solid #2196F3", borderRadius: "12px", margin: "12px 0", fontSize: "32px", boxSizing: "border-box", maxWidth: "100%", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "18px", fontWeight: "bold", color: "#2196F3", whiteSpace: "nowrap" }}>{"ທາງໜ້າ"}</span>
                    <span>👦</span>
                    <span>👧</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "44px", height: "44px" }}>
                      <span>🧒</span>
                      <div style={{ position: "absolute", width: "46px", height: "46px", border: "3px solid #D32F2F", borderRadius: "50%", boxSizing: "border-box" }}></div>
                    </div>
                    <span>👦</span>
                    <span>👧</span>
                    <span>👦</span>
                    <span style={{ fontSize: "18px", fontWeight: "bold", color: "#E91E63", whiteSpace: "nowrap" }}>{"ທາງຫຼັງ"}</span>
                  </div>
                  <p style={{ marginTop: "8px" }}>{"• ນັບຈາກທາງໜ້າ ແມ່ນຄົນທີ: "} <span className="answer-blank" style={{ minWidth: "150px" }}></span></p>
                  <p style={{ marginTop: "8px" }}>{"• ນັບຈາກທາງຫຼັງ ແມ່ນຄົນທີ: "} <span className="answer-blank" style={{ minWidth: "150px" }}></span></p>
                </div>
                <div>
                  <p>{"(2) ມີປຶ້ມ 6 ຫົວ ວາງລຽນກັນແຕ່ຊ້າຍຫາຂວາ (ຕາມຮູບ). ປຶ້ມຄະນິດສາດແມ່ນປຶ້ມສີແດງ 📕 ຢູ່ຊ້າຍສຸດ. ປຶ້ມພາສາລາວແມ່ນປຶ້ມສີສົ້ມ 📙. ປຶ້ມສີສົ້ມ 📙 ແມ່ນປຶ້ມຫົວທີເທົ່າໃດ ຖ້ານັບຈາກຊ້າຍ ແລະ ຈາກຂວາ?"}</p>
                  <div className="math-illustration" style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center", padding: "12px", border: "2px solid #2196F3", borderRadius: "12px", backgroundColor: "#ffffff", boxSizing: "border-box", margin: "12px auto", flexWrap: "wrap" }}>
                    <div style={{ padding: "4px 6px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#ffffff", fontSize: "18px", whiteSpace: "nowrap" }}>📕 ສີແດງ</div>
                    <div style={{ padding: "4px 6px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#ffffff", fontSize: "18px", whiteSpace: "nowrap" }}>📗 ສີຂຽວ</div>
                    <div style={{ padding: "4px 6px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#ffffff", fontSize: "18px", whiteSpace: "nowrap" }}>📘 ສີຟ້າ</div>
                    <div style={{ padding: "4px 6px", border: "3px solid #D32F2F", borderRadius: "4px", backgroundColor: "#FFEBEE", fontSize: "18px", fontWeight: "bold", whiteSpace: "nowrap" }}>📙 ສີສົ້ມ</div>
                    <div style={{ padding: "4px 6px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#ffffff", fontSize: "18px", whiteSpace: "nowrap" }}>📒 ສີເຫຼືອງ</div>
                    <div style={{ padding: "4px 6px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#ffffff", fontSize: "18px", whiteSpace: "nowrap" }}>📓 ສີມ່ວງ</div>
                    <span style={{ fontSize: "18px", fontWeight: "bold", color: "#E91E63", whiteSpace: "nowrap" }}>{"ຂວາ"}</span>
                  </div>
                  <p style={{ marginTop: "8px" }}>{"• ນັບຈາກຊ້າຍ ແມ່ນຫົວທີ: "} <span className="answer-blank" style={{ minWidth: "150px" }}></span></p>
                  <p style={{ marginTop: "8px" }}>{"• ນັບຈາກຂວາ ແມ່ນຫົວທີ: "} <span className="answer-blank" style={{ minWidth: "150px" }}></span></p>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ລອງແຕ້ມຮູບ ຫຼື ຂຽນແຜນວາດອອກມາໃສ່ເຈ້ຍເສດ ເພື່ອຊ່ວຍໃຫ້ນຶກພາບອອກໄດ້ງ່າຍຂຶ້ນເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງສັງເກດຮູບພາບແລ້ວຕອບຄຳຖາມ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <section className="math-illustration" style={{ display: "flex", gap: "24px", justifyContent: "center", backgroundColor: "#E1F5FE", padding: "16px", borderRadius: "12px", boxSizing: "border-box", flexWrap: "nowrap", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: "32px", textAlign: "center" }}>🍎</span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#0288D1", textAlign: "center", display: "block", width: "100%", whiteSpace: "nowrap" }}>ໝາກແອັບເປິ້ນ</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: "32px", textAlign: "center" }}>🍌</span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#0288D1", textAlign: "center", display: "block", width: "100%", whiteSpace: "nowrap" }}>ໝາກກ້ວຍ</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: "32px", textAlign: "center" }}>🍊</span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#0288D1", textAlign: "center", display: "block", width: "100%", whiteSpace: "nowrap" }}>ໝາກກ້ຽງ</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: "32px", textAlign: "center" }}>🍇</span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#0288D1", textAlign: "center", display: "block", width: "100%", whiteSpace: "nowrap" }}>ໝາກອະງຸ່ນ</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: "32px", textAlign: "center" }}>🍉</span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#0288D1", textAlign: "center", display: "block", width: "100%", whiteSpace: "nowrap" }}>ໝາກໂມ</span>
              </div>
            </section>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              {/* Example question (ຕົວຢ່າງ) with red answer */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
                <span style={{ fontWeight: "bold", color: "#D32F2F" }}>{"[ຕົວຢ່າງ]"}</span>
                <span>{"ໝາກກ້ວຍ 🍌 ແມ່ນໝາກໄມ້ທີເທົ່າໃດຈາກຊ້າຍ? ຕອບ: "}</span>
                <span style={{ color: "#D32F2F", borderBottom: "2px solid #D32F2F", padding: "0 8px", fontWeight: "bold" }}>{"ທີ 2"}</span>
              </div>
              
              <p>{"(1) ໝາກອະງຸ່ນ 🍇 ແມ່ນໝາກໄມ້ທີເທົ່າໃດຈາກຊ້າຍ? ຕອບ: ທີ "} <span className="answer-blank" style={{ minWidth: "40px" }}></span></p>
              <p>{"(2) ໝາກໂມ 🍉 ແມ່ນໝາກໄມ້ທີເທົ່າໃດຈາກຂວາ? ຕອບ: ທີ "} <span className="answer-blank" style={{ minWidth: "40px" }}></span></p>
              <p>{"(3) ໝາກໄມ້ທີ 3 ຈາກຊ້າຍ ແມ່ນໝາກຫຍັງ? ຕອບ: "} <span className="answer-blank"></span></p>
              <p>{"(4) ໝາກໄມ້ທີ 4 ຈາກຂວາ ແມ່ນໝາກຫຍັງ? ຕອບ: "} <span className="answer-blank"></span></p>
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
            <span key="1">{"(1) 🚙 (ຟ້າ)"}</span>,
            <span key="2">{"(2) 🚕 (ເຫຼືອງ)"}</span>,
            <span key="3">{"(3) ທີ 5"}</span>,
            <span key="4">{"(4) 🚌 (ບັດ / ສົ້ມ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="5">{"(1) ຈາກທາງໜ້າ: ທີ 3, ຈາກທາງຫຼັງ: ທີ 4"}</span>,
            <span key="6">{"(2) ຈາກຊ້າຍ: ທີ 4, ຈາກຂວາ: ທີ 3"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="7">{"(1) ທີ 4"}</span>,
            <span key="8">{"(2) ທີ 1"}</span>,
            <span key="9">{"(3) ໝາກກ້ຽງ 🍊"}</span>,
            <span key="10">{"(4) ໝາກກ້ວຍ 🍌"}</span>
          ]
        }
      ],
      advice: "ການບອກລຳດັບຕ້ອງລະວັງຈຸດເລີ່ມຕົ້ນໃຫ້ດີ! ນັບຈາກທາງຊ້າຍ ຫຼື ທາງຂວາ ຈະໄດ້ຄຳຕອບບໍ່ຄືກັນເດີ."
    }
  };
