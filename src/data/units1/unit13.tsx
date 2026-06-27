import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit13Data: UnitData = {
    unitNumber: 13,
    unitTitle: "ການປຽບທຽບປະລິມານ",
    unitGoal: "ຮຽນຮູ້ວິທີປຽບທຽບປະລິມານນ້ຳ ຫຼື ຂອງແຫຼວອື່ນໆ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 111〜114",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p>{"ມາຮຽນຮູ້ວິທີປຽບທຽບວ່າ ພາຊະນະໃດບັນຈຸນ້ຳໄດ້ຫຼາຍກວ່າກັນ."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#E3F2FD", padding: "12px", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "22px" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>{"ວິທີປຽບທຽບມີ 2 ວິທີຫຼັກ:"}</p>
            
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div className="math-illustration" style={{ flex: 1, minWidth: "250px", backgroundColor: "#FFF", padding: "12px", borderRadius: "12px", border: "2px solid #2196F3" }}>
                <p style={{ fontWeight: "bold", color: "#1976D2", fontSize: "22px", marginBottom: "4px" }}>{"ວິທີ 1: ຖອກໃສ່ກັນ"}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "8px 0" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px" }}>🍾</div>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"ຕຸກ ກ"}</span>
                  </div>
                  <div style={{ fontSize: "28px", alignSelf: "center" }}>{"→"}</div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px" }}>🏺</div>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"ຕຸກ ຂ"}</span>
                  </div>
                </div>
                <p>{"ຖອກນ້ຳຈາກຕຸກ ກ ໃຫ້ເຕັມ, ແລ້ວຖອກນ້ຳຈາກຕຸກ ກ ໃສ່ຕຸກ ຂ ທີ່ວ່າງເປົ່າ."}</p>
                <ul style={{ paddingLeft: "20px", marginTop: "4px" }}>
                  <li>{"ຖ້ານ້ຳລົ້ນ: ກ ໃຫຍ່ກວ່າ"}</li>
                  <li>{"ຖ້ານ້ຳບໍ່ເຕັມ: ຂ ໃຫຍ່ກວ່າ"}</li>
                </ul>
              </div>
              
              <div className="math-illustration" style={{ flex: 1, minWidth: "250px", backgroundColor: "#FFF", padding: "12px", borderRadius: "12px", border: "2px solid #4CAF50" }}>
                <p style={{ fontWeight: "bold", color: "#388E3C", fontSize: "22px", marginBottom: "4px" }}>{"ວິທີ 2: ໃຊ້ຈອກນ້ອຍວັດແທກ"}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "8px 0" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px" }}>🍾</div>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"ຕຸກໜຶ່ງ"}</span>
                  </div>
                  <div style={{ fontSize: "28px", alignSelf: "center" }}>{"="}</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "24px" }}>🥛🥛🥛🥛</span>
                  </div>
                </div>
                <p>{"ຖອກນ້ຳຈາກຕຸກແຕ່ລະອັນໃສ່ຈອກນ້ອຍທີ່ມີຂະໜາດເທົ່າກັນ ແລ້ວນັບຈຳນວນຈອກ."}</p>
                <ul style={{ paddingLeft: "20px", marginTop: "4px" }}>
                  <li>{"ອັນໃດຖອກໄດ້ຈອກຫຼາຍກວ່າ ແມ່ນບັນຈຸໄດ້ຫຼາຍກວ່າ."}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການເບິ່ງດ້ວຍຕາເປົ່າອາດຈະຫຼອກເຮົາໄດ້ ຖ້າຕຸກມີຮູບຮ່າງແຕກຕ່າງກັນ. ວິທີທີ່ແນ່ນອນທີ່ສຸດແມ່ນການວັດແທກຕົວຈິງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້ ໂດຍອີງໃສ່ວິທີທີ 2 (ໃຊ້ຈອກນ້ອຍວັດແທກ): "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#FAFAFA", padding: "24px", borderRadius: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ຕຸກ ກ:"}</span>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span>
                </div>
                <span style={{ fontSize: "18px" }}>{"(ຖອກໄດ້ 5 ຈອກ)"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ຕຸກ ຂ:"}</span>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span>
                </div>
                <span style={{ fontSize: "18px" }}>{"(ຖອກໄດ້ 3 ຈອກ)"}</span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ຕຸກໃດບັນຈຸນ້ຳໄດ້ຫຼາຍກວ່າ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ຕຸກທີ່ບັນຈຸນ້ຳໄດ້ໜ້ອຍກວ່າ ແມ່ນຕຸກໃດ?"}</span>
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
              <p>{"ນາງມະນີ ເອົານ້ຳໝາກກ້ຽງຈາກກ່ອງໃຫຍ່ ຖອກໃສ່ຈອກນ້ອຍໄດ້ 8 ຈອກ. ທ້າວສອນ ເອົານ້ຳໝາກກ້ຽງຈາກຕຸກ ຖອກໃສ່ຈອກນ້ອຍຂະໜາດດຽວກັນໄດ້ 6 ຈອກ. ພາຊະນະໃດບັນຈຸນ້ຳໝາກກ້ຽງໄດ້ຫຼາຍກວ່າ? ແລະ ຫຼາຍກວ່າຈັກຈອກ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຕອບ: ພາຊະນະທີ່ບັນຈຸໄດ້ຫຼາຍກວ່າແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຫຼາຍກວ່າກັນ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{"ຈອກ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຢາກຮູ້ວ່າຫຼາຍກວ່າກັນເທົ່າໃດ ແມ່ນໃຫ້ເອົາຈຳນວນທີ່ຫຼາຍກວ່າ ມາລົບ ຈຳນວນທີ່ໜ້ອຍກວ່າເດີ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕຸກ A, B, C ສາມາດຖອກນ້ຳໃສ່ຈອກນ້ອຍຂະໜາດດຽວກັນໄດ້ 4 ຈອກ, 7 ຈອກ ແລະ 5 ຈອກ ຕາມລຳດັບ. ຈົ່ງລຽງລຳດັບຕຸກ ຈາກຕຸກທີ່ບັນຈຸນ້ຳໄດ້ໜ້ອຍທີ່ສຸດ ໄປຫາ ຕຸກທີ່ບັນຈຸນ້ຳໄດ້ຫຼາຍທີ່ສຸດ. "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#F9F9F9", padding: "16px", borderRadius: "8px", border: "1px dashed #CCC", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: "bold", color: "#1976D2" }}>{"A"}</div>
                <div style={{ fontSize: "24px" }}>🥛🥛🥛🥛</div>
                <div style={{ fontSize: "14px" }}>{"4 ຈອກ"}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: "bold", color: "#D32F2F" }}>{"B"}</div>
                <div style={{ fontSize: "24px" }}>🥛🥛🥛🥛🥛<br/>🥛🥛</div>
                <div style={{ fontSize: "14px" }}>{"7 ຈອກ"}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: "bold", color: "#388E3C" }}>{"C"}</div>
                <div style={{ fontSize: "24px" }}>🥛🥛🥛🥛🥛</div>
                <div style={{ fontSize: "14px" }}>{"5 ຈອກ"}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "16px" }}>
              <span style={{ whiteSpace: "nowrap", flexShrink: 0 }}>{"ຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              <span>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              <span>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
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
            <span key="1">{"(1) ຕຸກ ກ (ເພາະຖອກໄດ້ 5 ຈອກ), (2) ຕຸກ ຂ (ເພາະຖອກໄດ້ພຽງ 3 ຈອກ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: ກ່ອງໃຫຍ່ ບັນຈຸໄດ້ຫຼາຍກວ່າ. ຫຼາຍກວ່າກັນ 2 ຈອກ (8 - 6 = 2)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"ຕອບ: A → C → B (ເພາະ 4 < 5 < 7)"}</span>
          ]
        }
      ],
      advice: "ການໃຊ້ຈອກນ້ອຍທີ່ມີຂະໜາດເທົ່າກັນເປັນເຄື່ອງວັດແທກ ແມ່ນວິທີທີ່ດີທີ່ສຸດໃນການປຽບທຽບປະລິມານ ເພາະມັນຈະບອກເຮົາໄດ້ວ່າ ຫຼາຍກວ່າ ຫຼື ໜ້ອຍກວ່າກັນເທົ່າໃດຢ່າງຊັດເຈນ!"
    }
  };
