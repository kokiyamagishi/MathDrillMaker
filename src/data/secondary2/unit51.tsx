import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit51Data: UnitData = {
  unitNumber: 51,
  unitTitle: "ພາກທີ VIII - ບົດທີ 51: ການສະເໜີຂໍ້ມູນດ້ວຍຮູບແຕ້ມ (ຕໍ່)",
  unitGoal: "ຮຽນຮູ້ການສະເໜີຂໍ້ມູນຄວາມຖີ່ດ້ວຍກຣາຟເສັ້ນຫັກ (Line Graph) ແລະ ວິທີການອ່ານ, ວິເຄາະແນວໂນ້ມການປ່ຽນແປງຂອງຂໍ້ມູນຕາມເວລາ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 243-247",
  subSections: [
    {
      title: "1. ການອ່ານຄ່າຈາກກຣາຟເສັ້ນ (Reading Values from a Line Graph)",
      keyPoint: {
        title: "ກຣາຟເສັ້ນ ແລະ ການປ່ຽນແປງຕາມເວລາ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກຣາຟເສັ້ນຫັກ (Line Graph) ເໝາະສົມທີ່ສຸດໃນການສະແດງການປ່ຽນແປງ ແລະ ແນວໂນ້ມ (Trend) ຂອງຂໍ້ມູນຢ່າງຕໍ່ເນື່ອງຕາມເວລາ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ແກນນອນ: ສະແດງເວລາ (ໂມງ: 08:00, 09:00, 10:00, 11:00, 12:00)."}</div>
              <div>{"• ແກນຕັ້ງ: ສະແດງອຸນຫະພູມ (°C: 22°C, 25°C, 28°C, 30°C, 26°C)."}</div>
            </div>

            {/* Standard Line Graph SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFFDE7", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#F57F17" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ກຣາຟເສັ້ນສະແດງການປ່ຽນແປງຂອງອຸນຫະພູມໃນແຕ່ລະຊົ່ວໂມງ"}</span>
                <svg viewBox="0 0 440 220" style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
                  {/* Grid Lines */}
                  <line x1="60" y1="180" x2="400" y2="180" stroke="#37474F" strokeWidth="3" />
                  <line x1="60" y1="40" x2="60" y2="180" stroke="#37474F" strokeWidth="3" />

                  {/* Horizontal Grid Guides */}
                  <line x1="60" y1="40" x2="400" y2="40" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="60" y1="75" x2="400" y2="75" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="60" y1="110" x2="400" y2="110" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="60" y1="145" x2="400" y2="145" stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Vertices and line connections */}
                  {/* Points: 08:00 (60, y=180) -> 20°C (Scaled: y=180) */}
                  {/* 08:00 ➔ 22°C (x=90, y=166) */}
                  {/* 09:00 ➔ 25°C (x=160, y=145) */}
                  {/* 10:00 ➔ 28°C (x=230, y=124) */}
                  {/* 11:00 ➔ 30°C (x=300, y=110) */}
                  {/* 12:00 ➔ 26°C (x=370, y=138) */}
                  <path d="M 90,166 L 160,145 L 230,124 L 300,110 L 370,138" fill="none" stroke="#D84315" strokeWidth="4" />
                  
                  {/* Vertices circles */}
                  <circle cx="90" cy="166" r="6" fill="#D84315" />
                  <text x="90" y="154" fill="#D84315" fontSize="14" textAnchor="middle" fontWeight="bold">{"22°"}</text>
                  <text x="90" y="200" fill="#37474F" fontSize="14" textAnchor="middle">{"08:00"}</text>

                  <circle cx="160" cy="145" r="6" fill="#D84315" />
                  <text x="160" y="133" fill="#D84315" fontSize="14" textAnchor="middle" fontWeight="bold">{"25°"}</text>
                  <text x="160" y="200" fill="#37474F" fontSize="14" textAnchor="middle">{"09:00"}</text>

                  <circle cx="230" cy="124" r="6" fill="#D84315" />
                  <text x="230" y="112" fill="#D84315" fontSize="14" textAnchor="middle" fontWeight="bold">{"28°"}</text>
                  <text x="230" y="200" fill="#37474F" fontSize="14" textAnchor="middle">{"10:00"}</text>

                  <circle cx="300" cy="110" r="6" fill="#D84315" />
                  <text x="300" y="98" fill="#D84315" fontSize="14" textAnchor="middle" fontWeight="bold">{"30°"}</text>
                  <text x="300" y="200" fill="#37474F" fontSize="14" textAnchor="middle">{"11:00"}</text>

                  <circle cx="370" cy="138" r="6" fill="#D84315" />
                  <text x="370" y="126" fill="#D84315" fontSize="14" textAnchor="middle" fontWeight="bold">{"26°"}</text>
                  <text x="370" y="200" fill="#37474F" fontSize="14" textAnchor="middle">{"12:00"}</text>

                  {/* y-axis labels */}
                  <text x="50" y="116" fill="#37474F" fontSize="14" textAnchor="end">{"30°C"}</text>
                  <text x="50" y="151" fill="#37474F" fontSize="14" textAnchor="end">{"25°C"}</text>
                  <text x="50" y="186" fill="#37474F" fontSize="14" textAnchor="end">{"20°C"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຍືດຍາດ ແລະ ຄວາມສູງ-ຕ່ຳ ຂອງເສັ້ນສະແດງ ຊ່ວຍໃຫ້ພວກເຮົາເຂົ້າໃຈເຖິງທ່າອ່ຽງແນວໂນ້ມໄດ້ງ່າຍເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ອີງຕາມກຣາຟເສັ້ນຂ້າງເທິງ, ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ - ບໍ່ຕ້ອງໃສ່ຫົວໜ່ວຍ °C)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ອຸນຫະພູມເວລາ 08:00 ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ອຸນຫະພູມເວລາ 10:00 ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ອຸນຫະພູມເວລາ 12:00 ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ອຸນຫະພູມສູງສຸດຂອງມື້ນີ້ແມ່ນຈັກອົງສາ ແລະ ປະກົດຂຶ້ນໃນເວລາຈັກໂມງ? (ຕອບສະເພາະຕົວເລກອຸນຫະພູມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ອຸນຫະພູມຕ່ຳສຸດຂອງມື້ນີ້ແມ່ນຈັກອົງສາ? (ຕອບສະເພາະຕົວເລກອຸນຫະພູມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ແນວໂນ້ມ ແລະ ຜົນຕ່າງ (Calculating Trends & Differences)",
      keyPoint: {
        title: "ການວິເຄາະທ່າອ່ຽງ ແລະ ຜົນຕ່າງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ພວກເຮົາສາມາດວິເຄາະຫາ ປະລິມານການເພີ່ມຂຶ້ນ ຫຼື ຫຼຸດລົງ ຂອງອຸນຫະພູມລະຫວ່າງແຕ່ລະຊົ່ວໂມງໄດ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ອຸນຫະພູມເພີ່ມຂຶ້ນ = ອຸນຫະພູມຫຼ້າສຸດ - ອຸນຫະພູມກ່ອນໜ້າ (ຖ້າຜົນລົບເປັນບວກ)."}</div>
              <div>{"• ອຸນຫະພູມຫຼຸດລົງ = ອຸນຫະພູມກ່ອນໜ້າ - ອຸນຫະພູມຫຼ້າສຸດ (ຖ້າຜົນລົບເປັນລົບ)."}</div>
              <div style={{ fontWeight: "bold", color: "#C62828" }}>{"• ຕົວຢ່າງ: ຈາກ 08:00 ຫາ 09:00 ອຸນຫະພູມເພີ່ມຂຶ້ນ ➔ 25°C - 22°C = 3°C."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສັງເກດລັກສະນະຄວາມຊັນຂອງເສັ້ນສະແດງ: ຖ້າເສັ້ນເນີ້ງຂຶ້ນໝາຍເຖິງເພີ່ມຂຶ້ນ ຖ້າເສັ້ນເນີ້ງລົງໝາຍເຖິງຫຼຸດລົງເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຜົນຕ່າງ ແລະ ທ່າອ່ຽງຕາມກຣາຟເສັ້ນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ - ບໍ່ຕ້ອງໃສ່ຫົວໜ່ວຍ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຈາກເວລາ 08:00 ຫາ 09:00 ອຸນຫະພູມເພີ່ມຂຶ້ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຈາກເວລາ 09:00 ຫາ 11:00 ອຸນຫະພູມເພີ່ມຂຶ້ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຈາກເວລາ 11:00 ຫາ 12:00 ອຸນຫະພູມຫຼຸດລົງຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຜົນຕ່າງລະຫວ່າງອຸນຫະພູມສູງສຸດ ແລະ ຕ່ຳສຸດຂອງມື້ນີ້ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ໃນຊ່ວງເວລາໃດທີ່ອຸນຫະພູມມີການປ່ຽນແປງຫຼຸດລົງ? (ຕອບເປັນຊ່ວງເວລາ ເຊັ່ນ 11:00-12:00)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ຫາຄ່າສະເລ່ຍໂດຍການບວກອຸນຫະພູມທັງໝົດ 5 ຄັ້ງ ແລ້ວຫານໃຫ້ 5 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຫາຄ່າສະເລ່ຍອຸນຫະພູມ (Average Temperature): "}<span className="point-label">{"(5 ຄະແນນ - ຕອບເປັນທົດສະນິຍົມ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາອຸນຫະພູມສະເລ່ຍຕັ້ງແຕ່ເວລາ 08:00 ຫາ 12:00 (ຄິດໄລ່ຈາກ 22, 25, 28, 30, 26)."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ອຸນຫະພູມສະເລ່ຍແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"°C"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການວິເຄາະຄວາມຊັນສູງສຸດ (Max Rate of Increase): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນຊ່ວງເວລາໃດທີ່ອຸນຫະພູມມີອັດຕາການເພີ່ມຂຶ້ນສູງສຸດ? (ຕອບເປັນຊ່ວງເວລາ ເຊັ່ນ 08:00-09:00)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຊ່ວງເວລາແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດບັນຫາກຣາຟເສັ້ນສະແດງການເຕີບໃຫຍ່ຂອງຕົ້ນໄມ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຕົ້ນໄມ້ຕົ້ນໜຶ່ງສູງ 10 cm ໃນເດືອນມັງກອນ, 14 cm ໃນເດືອນກຸມພາ, ແລະ 20 cm ໃນເດືອນມີນາ. ຖາມວ່າມີອັດຕາການເຕີບໃຫຍ່ສະເລ່ຍເດືອນລະຈັກ cm? (ຕັ້ງແຕ່ເດືອນ ມັງກອນ ຫາ ມີນາ)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ເຕີບໃຫຍ່ສະເລ່ຍເດືອນລະ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"cm"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການວິເຄາະຍອດຂາຍສິນຄ້າ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຈາກກຣາຟເສັ້ນສະແດງຍອດຂາຍເຄື່ອງດື່ມພົບວ່າ: ວັນຈັນຂາຍໄດ້ 50 ຈອກ, ວັນອັງຄານ 65 ຈອກ, ແລະ ວັນພຸດ 80 ຈອກ. ຖ້າແນວໂນ້ມການເຕີບໂຕຍັງຄົງທີ່, ວັນພະຫັດຈະຂາຍໄດ້ຈັກຈອກ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ວັນພະຫັດຈະຂາຍໄດ້"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຈອກ"}</span>
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
          <span key="1">{"(1) 22 (ອ່ານຄ່າຈາກກຣາຟເວລາ 08:00)"}</span>,
          <span key="2">{"(2) 28 (ອ່ານຄ່າຈາກກຣາຟເວລາ 10:00)"}</span>,
          <span key="3">{"(3) 26 (ອ່ານຄ່າຈາກກຣາຟເວລາ 12:00)"}</span>,
          <span key="4">{"(4) 30 (ອຸນຫະພູມສູງສຸດແມ່ນ 30°C ເວລາ 11:00)"}</span>,
          <span key="5">{"(5) 22 (ອຸນຫະພູມຕ່ຳສຸດແມ່ນ 22°C ເວລາ 08:00)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 3 (ເພາະວ່າ 25 - 22 = 3°C)"}</span>,
          <span key="7">{"(2) 5 (ເພາະວ່າ 30 - 25 = 5°C)"}</span>,
          <span key="8">{"(3) 4 (ເພາະວ່າ 30 - 26 = 4°C)"}</span>,
          <span key="9">{"(4) 8 (ຜົນຕ່າງແມ່ນ 30 - 22 = 8°C)"}</span>,
          <span key="10">{"(5) 11:00-12:00 (ຍ້ອນວ່າເສັ້ນສະແດງເນີ້ງລົງໃນຊ່ວງເວລານີ້)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"26.2 (ຜົນບວກ = 22 + 25 + 28 + 30 + 26 = 131 ➔ ສະເລ່ຍ = 131 / 5 = 26.2°C)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"08:00-09:00 (ອັດຕາການເພີ່ມແມ່ນ 3°C ຕໍ່ຊົ່ວໂມງ. ໝາຍເຫດ: 09:00-10:00 ກໍເພີ່ມ 3°C ຕໍ່ຊົ່ວໂມງ, ສາມາດຕອບໄດ້ທັງສອງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"5 (ການເຕີບໃຫຍ່ລວມແມ່ນ 20 - 10 = 10 cm ໃນ 2 ເດືອນ ➔ ສະເລ່ຍເດືອນລະ 10 / 2 = 5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"95 (ຍອດຂາຍເພີ່ມຂຶ້ນວັນລະ 15 ຈອກສະເໝີ ➔ ວັນພະຫັດຈະຂາຍໄດ້ 80 + 15 = 95 ຈອກ)"}</span>
        ]
      }
    ],
    advice: "ກຣາຟເສັ້ນຫັກ ຊ່ວຍໃຫ້ພວກເຮົາວິເຄາະທ່າອ່ຽງແນວໂນ້ມການປ່ຽນແປງຂອງຂໍ້ມູນໄດ້ຢ່າງມີປະສິດທິພາບສູງສຸດ ໃນການພະຍາກອນອາກາດ ແລະ ເສດຖະສາດເດີ້!"
  }
};
