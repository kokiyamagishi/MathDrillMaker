import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit48Data: UnitData = {
  unitNumber: 48,
  unitTitle: "ພາກທີ VII - ບົດທີ 48: ກໍລະນີຄ້າຍຄືຂອງຮູບສາມແຈ",
  unitGoal: "ຮຽນຮູ້ ແລະ ກໍາແໜ້ນ 3 ກໍລະນີຄ້າຍຄືກັນຂອງຮູບສາມແຈ (ມຸມ-ມຸມ, ຂ້າງ-ຂ້າງ-ຂ້າງ, ຂ້າງ-ມຸມ-ຂ້າງ) ແລະ ການແກ້ໂຈດພິສູດຄ້າຍຄື",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 223-227",
  subSections: [
    {
      title: "1. ກໍລະນີຄ້າຍຄືແບບ ມຸມ-ມຸມ (Angle-Angle Similarity Case - AA)",
      keyPoint: {
        title: "ຫຼັກການ ມຸມ-ມຸມ (AA)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າສອງມຸມຂອງຮູບສາມແຈໜຶ່ງ ເທົ່າກັບສອງມຸມຂອງອີກຮູບສາມແຈໜຶ່ງ ➔ ສອງຮູບສາມແຈນັ້ນຄ້າຍຄືກັນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຖ້າມີ ມຸມ A = ມຸມ A' ແລະ ມຸມ B = ມຸມ B' ➔ ຈະໄດ້ ΔABC ~ ΔA'B'C'."}</div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: ຮູບສາມແຈໜຶ່ງມີມຸມ 50° ແລະ 60°. ອີກຮູບໜຶ່ງມີມຸມ 50° ແລະ 70° ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່?"}</div>
              <div>{"➔ ວິທີຄິດ: ມຸມທີສາມຂອງຮູບທີສອງແມ່ນ 180° - (50° + 70°) = 60° ➔ ມຸມທັງສອງຮູບແມ່ນ 50°, 60°, 70° ຄືກັນ ➔ ຄ້າຍຄືກັນ!"}</div>
            </div>

            {/* Similarity Case AA SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດກໍລະນີຄ້າຍຄື ມຸມ-ມຸມ (AA)"}</span>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "30px" }}>
                  <svg viewBox="0 0 80 70" style={{ width: "80px", height: "auto" }}>
                    <polygon points="40,10 10,60 70,60" fill="none" stroke="#E65100" strokeWidth="2" />
                    {/* Angle B arc */}
                    <path d="M 18,60 A 8,8 0 0,1 21,48" fill="none" stroke="#2196F3" strokeWidth="1.5" />
                    {/* Angle C arc */}
                    <path d="M 62,60 A 8,8 0 0,0 60,50" fill="none" stroke="#4CAF50" strokeWidth="1.5" />
                    <text x="18" y="55" fill="#2196F3" fontSize="6">{"60°"}</text>
                    <text x="50" y="55" fill="#4CAF50" fontSize="6">{"50°"}</text>
                    <text x="40" y="66" fill="#37474F" fontSize="6" textAnchor="middle">{"ΔABC"}</text>
                  </svg>

                  <svg viewBox="0 0 110 95" style={{ width: "110px", height: "auto" }}>
                    <polygon points="55,10 10,85 95,85" fill="none" stroke="#E65100" strokeWidth="2" />
                    {/* Angle B' arc */}
                    <path d="M 21,85 A 11,11 0 0,1 25,68" fill="none" stroke="#2196F3" strokeWidth="1.5" />
                    {/* Angle C' arc */}
                    <path d="M 83,85 A 11,11 0 0,0 80,71" fill="none" stroke="#4CAF50" strokeWidth="1.5" />
                    <text x="22" y="78" fill="#2196F3" fontSize="7">{"60°"}</text>
                    <text x="70" y="78" fill="#4CAF50" fontSize="7">{"50°"}</text>
                    <text x="55" y="92" fill="#37474F" fontSize="7" textAnchor="middle">{"ΔA'B'C'"}</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກຂອງສາມມຸມໃນຮູບສາມແຈແມ່ນ 180° ສະເໝີ. ດັ່ງນັ້ນ ຖ້າຮູ້ສອງມຸມ ເຮົາກໍຮູ້ມຸມທີສາມໄດ້ສະດວກເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຄ້າຍຄືກັນແບບ ມຸມ-ມຸມ (AA): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສາມແຈທີໜຶ່ງມີມຸມ 50° ແລະ 60°, ຮູບທີສອງມີມຸມ 50° ແລະ 60° ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບສາມແຈທີໜຶ່ງມີມຸມ 45° ແລະ 75°. ມຸມທີສາມຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ ອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບສາມແຈທີໜຶ່ງມີມຸມ 80° ແລະ 40°, ຮູບທີສອງມີມຸມ 80° ແລະ 60° ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ສອງຮູບສາມແຈສາກທີ່ມີມຸມແຫຼມໜຶ່ງເທົ່າກັບ 30° ຄືກັນ ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຮູບສາມແຈ ABC ມີມຸມ A=70°, B=50°. ຮູບສາມແຈ MNP ມີມຸມ M=70°, P=60° ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ກໍລະນີຄ້າຍຄືແບບ ຂ້າງ-ຂ້າງ-ຂ້າງ (Side-Side-Side - SSS) ແລະ ຂ້າງ-ມຸມ-ຂ້າງ (SAS)",
      keyPoint: {
        title: "ຫຼັກການ SSS ແລະ SAS",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• ກໍລະນີ ຂ້າງ-ຂ້າງ-ຂ້າງ (SSS): ຖ້າສາມຂ້າງຂອງຮູບສາມແຈໜຶ່ງ ເປັນອັດຕາສ່ວນກັບສາມຂ້າງຂອງອີກຮູບໜຶ່ງ ➔ ຄ້າຍຄືກັນ."}
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• ກໍລະນີ ຂ້າງ-ມຸມ-ຂ້າງ (SAS): ຖ້າສອງຂ້າງເປັນອັດຕາສ່ວນກັນ ແລະ ມຸມລະຫວ່າງສອງຂ້າງນັ້ນເທົ່າກັນ ➔ ຄ້າຍຄືກັນ."}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold" }}>{"• ຕົວຢ່າງ SSS: ຮູບໜຶ່ງຍາວ 3, 4, 5 cm. ອີກຮູບຍາວ 6, 8, 10 cm."}</div>
              <div>{"➔ ວິທີຄິດ: 6/3 = 8/4 = 10/5 = 2 (ອັດຕາສ່ວນ k = 2 ເທົ່າກັນທຸກຂ້າງ) ➔ ຄ້າຍຄືກັນ!"}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕ້ອງກວດເບິ່ງວ່າອັດຕາສ່ວນຂອງຂ້າງທັງໝົດເທົ່າກັນ ຫຼື ບໍ່ ກ່ອນຈະສະຫຼຸບວ່າຄ້າຍຄືກັນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາອັດຕາສ່ວນຄ້າຍຄື k ຫຼື ຕອບວ່າຄ້າຍຄືກັນ ຫຼື ບໍ່: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສາມແຈ A ມີຂ້າງ 3, 4, 5 cm. ຮູບສາມແຈ B ມີຂ້າງ 9, 12, 15 cm. ອັດຕາສ່ວນຄ້າຍຄື k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບສາມແຈ A ມີຂ້າງ 4, 6 cm ແລະ ມຸມລະຫວ່າງກາງແມ່ນ 50°. ຮູບ B ມີຂ້າງ 8, 12 cm ແລະ ມຸມແມ່ນ 50° ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບສາມແຈ A ມີຂ້າງ 2, 3, 4 cm. ຮູບສາມແຈ B ມີຂ້າງ 6, 9, 10 cm ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ສອງຮູບສາມແຈສະເໝີ (Equilateral Triangles) ທີ່ມີຄວາມຍາວຂ້າງບໍ່ເທົ່າກັນ ➔ ຄ້າຍຄືກັນ ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຮູບສາມແຈ A ມີຂ້າງ 5, 5, 8 cm. ຮູບ B ມີຂ້າງ 10, 10, 16 cm. ອັດຕາສ່ວນຄ້າຍຄື k ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ຫຼັກການອັດຕາສ່ວນຂອງຂ້າງທີ່ກົງກັນຂ້າມກັບມຸມທີ່ເທົ່າກັນເພື່ອຊອກຫາຄ່າຂອງ 𝑥 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຂ້າງ 𝑥 ດ້ວຍຫຼັກການ SAS: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງຮູບສາມແຈຄ້າຍຄືກັນ. ຮູບ A ມີຂ້າງ 6 cm ແລະ 8 cm ທີ່ມີມຸມລະຫວ່າງກາງແມ່ນ 40°. ຮູບ B ມີຂ້າງ 9 cm ແລະ 𝑥 cm ທີ່ມີມຸມແມ່ນ 40° ➔ ຈົ່ງຊອກຫາ 𝑥. (9 / 6 = 𝑥 / 8)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ມຸມທີສາມຈາກຄວາມຄ້າຍຄືກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃຫ້ ΔABC ~ ΔMNP. ຖ້າມຸມ A = 40° ແລະ ມຸມ N = 85° ➔ ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ C ຕົວຈິງ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມຸມ C ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ອົງສາ (°)"}</span>
            </div>
          </div>
        )
      }
    ]
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການວັດແທກເງົາຕຶກສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ້າວວິໄຊຢາກວັດແທກຄວາມສູງຂອງຕຶກຮຽນ. ເຂົາປັກເສົາສູງ 1.5 m ໄວ້ໃກ້ຕຶກ ເຊິ່ງເກີດເງົາຍາວ 2 m. ໃນຂະນະດຽວກັນ, ຕຶກຮຽນເກີດເງົາຍາວ 16 m. ຖາມວ່າຕຶກຮຽນນີ້ສູງຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຕຶກຮຽນສູງ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"m"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຮູບສາມແຈສອງຮູບຊ້ອນກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃຫ້ຮູບສາມແຈ ABC ທີ່ມີມຸມ B = 90°. ເສັ້ນຊື່ MN ຂະໜານກັບ BC (M ຢູ່ AB, N ຢູ່ AC). ຖ້າ AB = 12 cm, BC = 9 cm, ແລະ AM = 4 cm. ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ MN."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: MN ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm"}</span>
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
          <span key="1">{"(1) ແມ່ນ (ຍ້ອນວ່າສອງມຸມເທົ່າກັນຕາມກໍລະນີ AA)"}</span>,
          <span key="2">{"(2) 60 (ເພາະວ່າ 180° - (45° + 75°) = 60°)"}</span>,
          <span key="3">{"(3) ບໍ່ແມ່ນ (ເພາະວ່າມຸມທັງສອງຮູບບໍ່ຄືກັນ)"}</span>,
          <span key="4">{"(4) ແມ່ນ (ຍ້ອນວ່າທຸກໆຮູບສາມແຈສະເໝີມີມຸມເທົ່າກັບ 60° ທັງໝົດ ➔ ເປັນໄປຕາມກໍລະນີ AA)"}</span>,
          <span key="5">{"(5) ແມ່ນ (ເພາະວ່າມຸມທີສາມຂອງ ABC ແມ່ນ 180° - (70° + 50°) = 60° ➔ ມຸມເທົ່າກັນທັງສອງຮູບ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 3 (ເພາະວ່າ 9/3 = 12/4 = 15/5 = 3)"}</span>,
          <span key="7">{"(2) ແມ່ນ (ເພາະວ່າ 8/4 = 12/6 = 2 ແລະ ມີມຸມລະຫວ່າງກາງເທົ່າກັນ 50° ตามກໍລະນີ SAS)"}</span>,
          <span key="8">{"(3) ບໍ່ແມ່ນ (ເພາະວ່າອັດຕາສ່ວນຂ້າງແມ່ນ 6/2=3, 9/3=3 ແຕ່ 10/4=2.5 ບໍ່ເທົ່າກັນ)"}</span>,
          <span key="9">{"(4) ແມ່ນ (ເພາະວ່າມຸມທຸກມຸມເທົ່າກັບ 60° ສະເໝີ ➔ ຄ້າຍຄືກັນສະເໝີ)"}</span>,
          <span key="10">{"(5) 2 (ເພາະວ່າ 10/5 = 16/8 = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"12 (ເພາະວ່າ 𝑥 = 8 × (9/6) = 12 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"55 (ຍ້ອນວ່າຄ້າຍຄືກັນ ➔ ມຸມ M=A=40°, N=B=85° ➔ ມຸມ C = 180° - (40° + 85°) = 55°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"12 (ເພາະວ່າອັດຕາສ່ວນແມ່ນ h/16 = 1.5/2 ➔ h = 16 × 1.5 / 2 = 12 m)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"3 (ເພາະວ່າ ΔAMN ~ ΔABC ➔ MN/BC = AM/AB ➔ MN/9 = 4/12 = 1/3 ➔ MN = 9 / 3 = 3 cm)"}</span>
        ]
      }
    ],
    advice: "ການຈື່ຈຳ 3 ກໍລະນີຄ້າຍຄືກັນຂອງຮູບສາມແຈ ຈະຊ່ວຍໃຫ້ເຮົາພິສູດ ແລະ ຄິດໄລ່ເລຂາຄະນິດໄດ້ຢ່າງໄວວາ ແລະ ຖືກຕ້ອງສະເໝີເດີ້!"
  }
};
