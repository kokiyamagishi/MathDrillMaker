import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit11Data: UnitData = {
    unitNumber: 11,
    unitTitle: "ການປຽບທຽບຄວາມຍາວ",
    unitGoal: "ຮຽນຮູ້ວິທີປຽບທຽບຄວາມຍາວຂອງສິ່ງຂອງຕ່າງໆ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 95〜98",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ວິທີປຽບທຽບວ່າ ອັນໃດຍາວກວ່າ ຫຼື ອັນໃດສັ້ນກວ່ານຳກັນ."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#F1F8E9", padding: "24px", borderRadius: "16px", border: "2px dashed #8BC34A", fontSize: "22px" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "16px" }}>{"ວິທີການປຽບທຽບ:"}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "24px" }}>📏</span>
                <div style={{ flex: 1 }}>
                  <p>{"1. ວາງສົ້ນໜຶ່ງໃຫ້ພຽງກັນ"}</p>
                  <p>{"2. ແລ້ວສັງເກດເບິ່ງອີກສົ້ນໜຶ່ງວ່າ ອັນໃດຍື່ນອອກໄປຫຼາຍກວ່າ ແມ່ນອັນນັ້ນຍາວກວ່າ."}</p>
                </div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px", backgroundColor: "#FFF", padding: "16px", borderRadius: "8px", fontSize: "22px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "2px", height: "40px", backgroundColor: "#F44336", marginRight: "8px" }}></div>
                <div style={{ width: "100px", height: "16px", backgroundColor: "#FFC107", borderRadius: "4px", border: "1px solid #333" }}></div>
                <span style={{ marginLeft: "12px", fontSize: "22px", fontWeight: "bold" }}>{"ຍາວກວ່າ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "2px", height: "40px", backgroundColor: "#F44336", marginRight: "8px" }}></div>
                <div style={{ width: "100px", height: "16px", backgroundColor: "#4CAF50", borderRadius: "4px", border: "1px solid #333" }}></div>
                <span style={{ marginLeft: "12px", fontSize: "22px" }}>{"ສັ້ນກວ່າ"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສຳຄັນທີ່ສຸດແມ່ນຕ້ອງວາງສົ້ນເບື້ອງໜຶ່ງໃຫ້ພຽງກັນກ່ອນຈຶ່ງຈະປຽບທຽບໄດ້!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງສັງເກດສໍດຳລຸ່ມນີ້ ແລ້ວຕອບຄຳຖາມ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "12px", position: "relative" }}>
              {/* Reference line */}
              <div style={{ position: "absolute", left: "24px", top: "20px", bottom: "20px", width: "2px", backgroundColor: "#F44336", borderLeft: "2px dashed #F44336" }}></div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginLeft: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ກ."}</span>
                  <div style={{ width: "100px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ຂ."}</span>
                  <div style={{ width: "240px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ຄ."}</span>
                  <div style={{ width: "140px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ງ."}</span>
                  <div style={{ width: "100px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ສໍດຳກ້ານໃດຍາວທີ່ສຸດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ສໍດຳກ້ານໃດສັ້ນທີ່ສຸດ?"}</span>
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
              <p>{"ຈົ່ງສັງເກດເສັ້ນຊື່ 2 ເສັ້ນລຸ່ມນີ້. ເສັ້ນໃດຍາວກວ່າກັນ? (ຂຽນຊື່ເສັ້ນໃສ່ບັອກ) "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px", backgroundColor: "#FAFAFA", borderRadius: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ເສັ້ນ ກ:"}</span>
                  {/* Straight line */}
                  <div style={{ width: "100px", height: "6px", backgroundColor: "#2196F3" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ເສັ້ນ ຂ:"}</span>
                  {/* Zig-zag line but visually shorter overall length */}
                  <div style={{ width: "100px", height: "40px", position: "relative" }}>
                    <div style={{ position: "absolute", top: "20px", left: "0", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(-30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "-5px", left: "43px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "20px", left: "86px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(-30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "-5px", left: "129px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "20px", left: "172px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(-30deg)", transformOrigin: "left center" }}></div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
                <span>{"ຕອບ: ເສັ້ນທີ່ຍາວກວ່າແມ່ນ ເສັ້ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເສັ້ນຊື່ທີ່ຄົດງໍ ຖ້າຈັບຢືດອອກໃຫ້ຊື່ ມັນຈະຍາວອອກໄປອີກເດີ! ລອງຄິດພາບເບິ່ງ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ມີເຊືອກ 3 ເສັ້ນ. ເຊືອກສີແດງຍາວກວ່າເຊືອກສີຟ້າ, ແຕ່ເຊືອກສີແດງສັ້ນກວ່າເຊືອກສີເຫຼືອງ. ເຊືອກສີໃດຍາວທີ່ສຸດ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ backgroundColor: "#F9F9F9", padding: "16px", borderRadius: "8px", border: "1px dashed #CCC", display: "flex", flexDirection: "column", gap: "16px", width: "fit-content" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "80px", fontWeight: "bold" }}>{"ສີແດງ:"}</span>
                <div style={{ height: "8px", width: "100px", backgroundColor: "#F44336", borderRadius: "4px" }}></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "80px", fontWeight: "bold" }}>{"ສີຟ້າ:"}</span>
                <div style={{ height: "8px", width: "100px", backgroundColor: "#2196F3", borderRadius: "4px" }}></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "80px", fontWeight: "bold" }}>{"ສີເຫຼືອງ:"}</span>
                <div style={{ height: "8px", width: "100px", backgroundColor: "#FFEB3B", border: "1px solid #FBC02D", borderRadius: "4px" }}></div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "8px" }}>
              <span>{"ຕອບ: ເຊືອກສີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            <span key="1">{"(1) ສໍດຳ ຂ, (2) ສໍດຳ ຄ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: ເສັ້ນ ຂ (ເພາະມັນຄົດງໍ ຖ້າຢືດອອກຈະຍາວກວ່າເສັ້ນຊື່ ກ)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"ຕອບ: ເຊືອກສີເຫຼືອງ (ຍາວທີ່ສຸດ)"}</span>
          ]
        }
      ],
      advice: "ການປຽບທຽບຄວາມຍາວ ຕ້ອງວາງຈຸດເລີ່ມຕົ້ນໃຫ້ເທົ່າກັນກ່ອນ. ຖ້າເປັນເສັ້ນໂຄ້ງ ຫຼື ເສັ້ນຊິກແຊັກ, ຄວາມຍາວແທ້ຈິງຂອງມັນຈະຍາວກວ່າທີ່ຕາເຮົາເຫັນເມື່ອມັນຫົດຕົວຢູ່."
    }
  };
