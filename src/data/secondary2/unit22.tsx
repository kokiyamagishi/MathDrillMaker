import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit22Data: UnitData = {
  unitNumber: 22,
  unitTitle: "ພາກທີ IV - ບົດທີ 22: ການແກ້ໂຈດກ່ຽວກັບສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
  unitGoal: "ຮຽນຮູ້ ແລະ ຝຶກທັກສະການປ່ຽນໂຈດບັນຫາຊີວິດປະຈຳວັນໃຫ້ເປັນສົມຜົນ ແລະ ດຳເນີນການແກ້ຫາຄຳຕອບຢ່າງເປັນລະບົບ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 91-95",
  subSections: [
    {
      title: "1. ຂັ້ນຕອນການແກ້ໂຈດບັນຫາສົມຜົນ (Steps to Solve Algebraic Word Problems)",
      keyPoint: {
        title: "4 ຂັ້ນຕອນຫຼັກໃນການແກ້ໂຈດບັນຫາ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ໂຈດບັນຫາຊີວິດປະຈຳວັນດ້ວຍສົມຜົນ ມີຂັ້ນຕອນທີ່ເປັນລະບົບດັ່ງນີ້:"}
            </p>
            
            {/* Steps block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <span>{"• "}<strong>{"ຂັ້ນຕອນ 1:"}</strong> {"ກຳນົດຕົວລັບ 𝑥 (ສິ່ງທີ່ໂຈດຕ້ອງການໃຫ້ຊອກຫາ)."}</span>
                <span>{"• "}<strong>{"ຂັ້ນຕອນ 2:"}</strong> {"ສ້າງສົມຜົນຕາມເງື່ອນໄຂຂອງໂຈດ."}</span>
                <span>{"• "}<strong>{"ຂັ້ນຕອນ 3:"}</strong> {"ແກ້ສົມຜົນເພື່ອຊອກຫາຄ່າຂອງ 𝑥."}</span>
                <span>{"• "}<strong>{"ຂັ້ນຕອນ 4:"}</strong> {"ກວດຄືນຄຳຕອບກັບເງື່ອນໄຂໂຈດ."}</span>
              </div>
            </div>

            {/* Steps flow SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ແຜນວາດຂັ້ນຕອນການແກ້ໂຈດ (Word Problem Solver Flow)"}</span>
                <svg viewBox="0 0 240 40" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Step 1 */}
                  <rect x="5" y="10" width="45" height="20" rx="3" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1" />
                  <text x="27.5" y="23" fill="#E65100" fontSize="8" fontWeight="bold" textAnchor="middle">{"1. ຕັ້ງ 𝑥"}</text>
                  
                  <path d="M 50 20 L 60 20" stroke="#37474F" strokeWidth="1" markerEnd="url(#arrow)" />
                  
                  {/* Step 2 */}
                  <rect x="65" y="10" width="45" height="20" rx="3" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="1" />
                  <text x="87.5" y="23" fill="#F57F17" fontSize="8" fontWeight="bold" textAnchor="middle">{"2. ຕັ້ງສົມຜົນ"}</text>
                  
                  <path d="M 110 20 L 120 20" stroke="#37474F" strokeWidth="1" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="125" y="10" width="45" height="20" rx="3" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
                  <text x="147.5" y="23" fill="#2E7D32" fontSize="8" fontWeight="bold" textAnchor="middle">{"3. ແກ້ສົມຜົນ"}</text>
                  
                  <path d="M 170 20 L 180 20" stroke="#37474F" strokeWidth="1" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <rect x="185" y="10" width="50" height="20" rx="3" fill="#E1F5FE" stroke="#03A9F4" strokeWidth="1" />
                  <text x="210" y="23" fill="#0288D1" fontSize="8" fontWeight="bold" textAnchor="middle">{"4. ກວດຄືນ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕັ້ງໃຈອ່ານໂຈດໃຫ້ລະອຽດ ແລະ ຈຳແນກສິ່ງທີ່ຮູ້ແລ້ວ ກັບສິ່ງທີ່ຕ້ອງການຊອກຫາເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ໂຈດບັນຫາສົມຜົນພື້ນຖານລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ສອງເທື່ອຂອງຈຳນວນໜຶ່ງ ບວກກັບ 5 ເທົ່າກັບ 15. ຈຳນວນນັ້ນແມ່ນເທົ່າໃດ? (ສົມຜົນ: 2𝑥 + 5 = 15) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ສາມເທື່ອຂອງຈຳນວນໜຶ່ງ ລົບອອກ 4 ເທົ່າກັບ 14. ຈຳນວນນັ້ນແມ່ນເທົ່າໃດ? (ສົມຜົນ: 3𝑥 - 4 = 14) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຫ້າເທື່ອຂອງຈຳນວນໜຶ່ງ ບວກກັບ 12 ເທົ່າກັບ 2. ຈຳນວນນັ້ນແມ່ນເທົ່າໃດ? (ສົມຜົນ: 5𝑥 + 12 = 2) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ເຄິ່ງໜຶ່ງຂອງຈຳນວນໜຶ່ງ ບວກກັບ 3 ເທົ່າກັບ 8. ຈຳນວນນັ້ນແມ່ນເທົ່າໃດ? (ສົມຜົນ: 𝑥/2 + 3 = 8) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຜົນບວກຂອງສາມຈຳນວນຖ້ວນລຽນຕິດກັນເທົ່າກັບ 24. ຈຳນວນນ້ອຍສຸດແມ່ນເທົ່າໃດ? (ສົມຜົນ: 𝑥 + (𝑥+1) + (𝑥+2) = 24) "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໂຈດບັນຫາຊີວິດປະຈຳວັນ (Applied Real-World Equations)",
      keyPoint: {
        title: "ການປະຍຸກໃຊ້ສົມຜົນໃນຊີວິດປະຈຳວັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສົມຜົນຊ່ວຍແກ້ບັນຫາກ່ຽວກັບອາຍຸ, ລາຄາສິນຄ້າ, ແລະ ສ່ວນແບ່ງປັນຕ່າງໆຢ່າງວ່ອງໄວ:"}
            </p>
            
            {/* Real World Example Box */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #4CAF50", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <strong>{"ໂຈດຕົວຢ່າງ: "}</strong>
                <span>{"ພໍ່ມີອາຍຸເປັນ 3 ເທື່ອຂອງລູກ. ຖ້າພໍ່ມີອາຍຸ 45 ປີ, ລູກຈະມີອາຍຸຈັກປີ?"}</span>
                <span>{"• ຕັ້ງ 𝑥 ແມ່ນອາຍຸລູກ ➔ ສົມຜົນ: 3𝑥 = 45"}</span>
                <span>{"➔ ແກ້ສົມຜົນ: 𝑥 = 45 ÷ 3 = 15 ປີ."}</span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການປ່ຽນປະໂຫຍກຄຳເວົ້າໃຫ້ເປັນສັນຍາລັກຄະນິດສາດ ເປັນຂັ້ນຕອນທີ່ສຳຄັນທີ່ສຸດເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ໂຈດບັນຫາປະຍຸກລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ພໍ່ມີອາຍຸເປັນ 3 ເທື່ອຂອງລູກ. ຖ້າພໍ່ອາຍຸ 45 ປີ, ລູກຈະມີອາຍຸຈັກປີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"ປີ"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຊື້ປຶ້ມ 3 ຫົວ ແລະ ບິກ 1 ກ້ານ ລາຄາ 2,000 ກີບ ລວມເປັນ 17,000 ກີບ. ປຶ້ມ 1 ຫົວ ລາຄາຈັກກີບ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ມີເນື້ອທີ່ດິນ 120 ຕາແມັດ, ແບ່ງໃຫ້ລູກສອງຄົນ ໂດຍຜູ້ໃຫຍ່ໄດ້ຫຼາຍກວ່າຜູ້ຫຼ້າ 20 ຕາແມັດ. ຜູ້ຫຼ້າໄດ້ຈັກຕາແມັດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"ຕາແມັດ"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຮູບສີ່ແຈສາກມີລວງຍາວເປັນ 2 ເທື່ອຂອງລວງກວ້າງ, ລວງຮອບແມ່ນ 60 cm. ລວງກວ້າງແມ່ນຈັກ cm? (ສົມຜົນ: 2(2𝑥 + 𝑥) = 60)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ແບ່ງເຂົ້າໜົມ 30 ກ້ອນ ໃຫ້ເດັກ 3 ຄົນ ໂດຍຄົນຕໍ່ໄປໄດ້ຫຼາຍກວ່າຄົນກ່ອນ 2 ກ້ອນ. ຄົນໄດ້ໜ້ອຍສຸດໄດ້ຈັກກ້ອນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"ກ້ອນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະໂຈດສົມຜົນລະດັບສູງທີ່ມີອັດຕາສ່ວນ ແລະ ຄວາມໄວຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາລົດແລ່ນສວນທາງກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ລົດ A ແລ່ນດ້ວຍຄວາມໄວ 60 km/h ແລະ ລົດ B ແລ່ນດ້ວຍຄວາມໄວ 40 km/h ອອກເດີນທາງພ້ອມກັນຈາກສອງຕົວເມືອງທີ່ຫ່າງກັນ 200 km. ຖາມວ່າອີກຈັກຊົ່ວໂມງ (𝑥 ຊົ່ວໂມງ) ລົດທັງສອງຈຶ່ງຈະແລ່ນສວນທາງກັນພໍດີ? (ສົມຜົນ: 60𝑥 + 40𝑥 = 200)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈະສວນທາງກັນໃນອີກ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຊົ່ວໂມງ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດອັດຕາສ່ວນປະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຫ້ອງຮຽນໜຶ່ງມີອັດຕາສ່ວນລະຫວ່າງ ນັກຮຽນຍິງ ແລະ ນັກຮຽນຊາຍ ແມ່ນ 3:2. ຖ້ານັກຮຽນຍິງມີຫຼາຍກວ່ານັກຮຽນຊາຍ 6 ຄົນ. ຈົ່ງຊອກຫາຈຳນວນນັກຮຽນຊາຍທັງໝົດ. (ສົມຜົນ: 3𝑥 - 2𝑥 = 6 ➔ 𝑥 = 6)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຈຳນວນນັກຮຽນຊາຍແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຄົນ"}</span>
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
            {"ໂຈດບັນຫາເງິນສະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ນາງ ແດງ ມີເງິນຫຼາຍກວ່ານາງ ດຳ 15,000 ກີບ, ຜົນລວມເງິນຂອງທັງສອງແມ່ນ 65,000 ກີບ. ຖາມວ່ານາງ ດຳ ມີເງິນຈັກກີບ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ນາງ ດຳ ມີເງິນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ກີບ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາລວງຮອບຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈທ່ຽງໜຶ່ງມີລວງຮອບ 32 cm. ຂ້າງພື້ນຍາວ 12 cm, ຈົ່ງຊອກຫາລວງຍາວຂອງຂ້າງທ່ຽງແຕ່ລະຂ້າງ (𝑥 cm). (ສົມຜົນ: 2𝑥 + 12 = 32)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຂ້າງທ່ຽງຍາວ"}</span>
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
          <span key="1-1">{"(1) 5 (ຄິດໄລ່: 2𝑥 = 10 ➔ 𝑥 = 5)"}</span>,
          <span key="1-2">{"(2) 6 (ຄິດໄລ່: 3𝑥 = 18 ➔ 𝑥 = 6)"}</span>,
          <span key="1-3">{"(3) -2 (ຄິດໄລ່: 5𝑥 = -10 ➔ 𝑥 = -2)"}</span>,
          <span key="1-4">{"(4) 10 (ຄິດໄລ່: 𝑥/2 = 5 ➔ 𝑥 = 10)"}</span>,
          <span key="1-5">{"(5) 7 (ຄິດໄລ່: 3𝑥 + 3 = 24 ➔ 3𝑥 = 21 ➔ 𝑥 = 7)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 15 ປີ (ຄິດໄລ່: 3𝑥 = 45 ➔ 𝑥 = 15)"}</span>,
          <span key="2-2">{"(2) 5,000 ກີບ (ຄິດໄລ່: 3𝑥 = 15000 ➔ 𝑥 = 5000)"}</span>,
          <span key="2-3">{"(3) 50 ຕາແມັດ (ຄິດໄລ່: (𝑥 + 20) + 𝑥 = 120 ➔ 2𝑥 = 100 ➔ 𝑥 = 50)"}</span>,
          <span key="2-4">{"(4) 10 cm (ຄິດໄລ່: 6𝑥 = 60 ➔ 𝑥 = 10)"}</span>,
          <span key="2-5">{"(5) 8 ກ້ອນ (ຄິດໄລ່: 𝑥 + (𝑥+2) + (𝑥+4) = 30 ➔ 3𝑥 + 6 = 30 ➔ 3𝑥 = 24 ➔ 𝑥 = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 2 ຊົ່ວໂມງ (ຄິດໄລ່: 100𝑥 = 200 ➔ 𝑥 = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) 12 ຄົນ (ຄິດໄລ່: ຍິງ 3𝑥 = 18, ຊາຍ 2𝑥 = 12, ຜົນຕ່າງ 18 - 12 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 25,000 ກີບ (ຄິດໄລ່: (𝑥 + 15000) + 𝑥 = 65000 ➔ 2𝑥 = 50000 ➔ 𝑥 = 25000)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 10 cm (ຄິດໄລ່: 2𝑥 = 20 ➔ 𝑥 = 10)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ການແກ້ໂຈດສົມຜົນ ເປັນຄວາມຮູ້ພຶດຊະຄະນິດພື້ນຖານທີ່ນຳໃຊ້ໃນການແກ້ໄຂບັນຫາຕົວຈິງໄດ້ດີທີ່ສຸດ. ຝຶກຝົນຕໍ່ໄປເພື່ອໃຫ້ເກັ່ງຂຶ້ນສະເໝີເດີ້!"
  }
};
