import { Angle } from "../../components/Angle";
import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit24Data: UnitData = {
  unitNumber: 24,
  unitTitle: "ພາກທີ VII - ບົດທີ 24: ເສັ້ນສຳຜັດວົງມົນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄຸນລັກສະນະຂອງເສັ້ນສຳຜັດວົງມົນ, ຄວາມສຳພັນການຕັ້ງສາກ ແລະ ການຊອກຫາຄວາມຍາວທ່ອນສຳຜັດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 121-126",
  subSections: [
    {
      title: "1. ເສັ້ນສຳຜັດ ແລະ ລັດສະໝີວົງມົນ",
      keyPoint: {
        title: "ຫຼັກການເສັ້ນສຳຜັດຕັ້ງສາກລັດສະໝີ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນສຳຜັດວົງມົນແມ່ນເສັ້ນຊື່ທີ່ຕັດວົງມົນພຽງແຕ່ເມັດດຽວ. ມັນຈະຕັ້ງສາກກັບລັດສະໝີຢູ່ຈຸດສຳຜັດສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຫຼັກການ: ເສັ້ນສຳຜັດ PT ຕັ້ງສາກກັບລັດສະໝີ OT ຢູ່ຈຸດສຳຜັດ T ➔ <Angle>OTP</Angle> = 90°."}</div>
              <div>{"• ການນຳໃຊ້: ເຮົາສາມາດສ້າງຮູບສາມແຈສາກ OTP ແລ້ວນຳໃຊ້ປີຕາກໍ ➔ OP² = OT² + PT²."}</div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ໃຫ້ R = 5 cm, OP = 13 cm ➔ PT² = 13² - 5² = 169 - 25 = 144 ➔ PT = 12 cm."}</div>
            </div>

            {/* Tangent Line SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນສຳຜັດ PT ຕັ້ງສາກກັບລັດສະໝີ OT ຢູ່ເມັດ T"}</span>
                <svg viewBox="0 0 400 240" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Circle */}
                  <circle cx="140" cy="120" r="80" fill="none" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Center O */}
                  <circle cx="140" cy="120" r="5" fill="#37474F" />
                  <text x="132" y="104" fill="#37474F" fontSize="16" fontWeight="bold">{"O"}</text>

                  {/* Radius OT */}
                  {/* T = (70, 20) */}
                  <line x1="140" y1="120" x2="140" y2="40" stroke="#2E7D32" strokeWidth="3" />
                  <text x="148" y="80" fill="#2E7D32" fontSize="16" fontWeight="bold">{"R=5"}</text>
                  <text x="132" y="30" fill="#37474F" fontSize="16">{"T (ຈຸດສຳຜັດ)"}</text>

                  {/* Tangent PT */}
                  {/* P = (166, 20). Length = 96px */}
                  <line x1="140" y1="40" x2="332" y2="40" stroke="#E65100" strokeWidth="4" />
                  <circle cx="332" cy="40" r="6" fill="#37474F" />
                  <text x="340" y="46" fill="#37474F" fontSize="16" fontWeight="bold">{"P"}</text>
                  <text x="220" y="30" fill="#E65100" fontSize="16" fontWeight="bold">{"ທ່ອນສຳຜັດ PT = 12"}</text>

                  {/* Line OP */}
                  <line x1="140" y1="120" x2="332" y2="40" stroke="#1565C0" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="230" y="110" fill="#1565C0" fontSize="16" fontWeight="bold">{"OP = 13"}</text>

                  {/* Right Angle Indicator at T */}
                  <rect x="140" y="40" width="12" height="12" fill="none" stroke="#E65100" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເສັ້ນສຳຜັດຈະແຕະວົງມົນພຽງແຕ່ຈຸດດຽວສະເໝີ ແລະ ຫ້າມຕັດຜ່ານເຂົ້າໄປທາງໃນວົງມົນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃຫ້ວົງມົນໃຈກາງ O ມີລັດສະໝີ R = 5 cm. ເສັ້ນສຳຜັດ PT ແຕະວົງມົນຢູ່ T. ຈົ່ງຊອກຫາຄວາມຍາວຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຂະໜາດຂອງມຸມ "} <span className="math">{"<Angle>OTP</Angle>"}</span> {" ແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຖ້າຫາກໄລຍະຫ່າງ "} <span className="math">{"OP = 13 cm"}</span> {", ຄວາມຍາວຂອງທ່ອນສຳຜັດ PT ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຖ້າລັດສະໝີແມ່ນ 3 cm ແລະ ໄລຍະຫ່າງ "} <span className="math">{"OP = 5 cm"}</span> {", ຄວາມຍາວທ່ອນສຳຜັດ PT ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະເສັ້ນສຳຜັດວົງມົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ມຸມລະຫວ່າງເສັ້ນສຳຜັດ ແລະ ລັດສະໝີຢູ່ຈຸດສຳຜັດແມ່ນຈັກອົງສາສະເໝີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຖ້າເສັ້ນຊື່ໜຶ່ງມີໄລຍະຫ່າງຈາກໃຈກາງວົງມົນເທົ່າກັບລັດສະໝີ R, ເສັ້ນຊື່ນີ້ຈະມີຈຸດຮ່ວມກັບວົງມົນຈັກຈຸດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ທ່ອນສຳຜັດຈາກເມັດພາຍນອກ",
      keyPoint: {
        title: "ຄຸນລັກສະນະສອງທ່ອນສຳຜັດເທົ່າກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຂີດເສັ້ນສຳຜັດສອງເສັ້ນຈາກເມັດພາຍນອກ P ຫາວົງມົນ ແຕະວົງມົນຢູ່ A ແລະ B ຈະໄດ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຄວາມຍາວເທົ່າກັນ: ຄວາມຍາວຂອງສອງທ່ອນສຳຜັດແມ່ນເທົ່າກັນສະເໝີ ➔ PA = PB."}</div>
              <div>{"• ຜົນບວກມຸມ: ມຸມລະຫວ່າງສອງເສັ້ນສຳຜັດ (<Angle>APB</Angle>) ແລະ ມຸມໃຈກາງ (<Angle>AOB</Angle>) ບວກກັນໄດ້ 180° ➔ <Angle>APB</Angle> + <Angle>AOB</Angle> = 180°."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຖ້າມຸມລະຫວ່າງສອງເສັ້ນສຳຜັດ <Angle>APB</Angle> = 60° ➔ ມຸມໃຈກາງ <Angle>AOB</Angle> = 180° - 60° = 120°."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບສາມແຈ PAB ຈະເປັນຮູບສາມແຈທ່ຽງສະເໝີ ເພາະ PA = PB, ແລະ ຖ້າມີມຸມໜຶ່ງເປັນ 60° ມັນຈະກາຍເປັນສາມແຈສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຂີດເສັ້ນສຳຜັດ PA ແລະ PB ຈາກເມັດ P ຫາວົງມົນ. ຈົ່ງຊອກຫາຄ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຖ້າທ່ອນສຳຜັດ PA = 8 cm. ຄວາມຍາວຂອງທ່ອນສຳຜັດ PB ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ໃນຮູບຂ້າງເທິງ, ຖ້າມຸມ "} <span className="math">{"<Angle>APB</Angle> = 60°"}</span> {", ຮູບສາມແຈ PAB ແມ່ນຮູບສາມແຈປະເພດໃດ? (ຕອບ 'ສາມແຈສະເໝີ' ຫຼື 'ສາມແຈສາກ')"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຈາກຂໍ້ (2), ຖ້າ PA = 8 cm. ຄວາມຍາວຂອງຄອດ AB ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ກ່ຽວຂ້ອງກັບສອງເສັ້ນສຳຜັດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຖ້າມຸມລະຫວ່າງສອງເສັ້ນສຳຜັດ "} <span className="math">{"<Angle>APB</Angle> = 80°"}</span> {", ມຸມໃຈກາງ "} <span className="math">{"<Angle>AOB</Angle>"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຖ້າມຸມໃຈກາງ "} <span className="math">{"<Angle>AOB</Angle> = 120°"}</span> {", ມຸມລະຫວ່າງສອງເສັ້ນສຳຜັດ "} <span className="math">{"<Angle>APB</Angle>"}</span> {" ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ແບ່ງຮູບສີ່ແຈເປັນສອງສາມແຈສາກທີ່ເທົ່າກັນ ແລ້ວນຳໃຊ້ສູດເນື້ອທີ່ສາມແຈສາກເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ເນື້ອທີ່ຂອງຮູບສີ່ແຈເກີດຈາກສອງເສັ້ນສຳຜັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນສຳຜັດ PA ແລະ PB ຖືກຂີດຈາກເມັດ P ຫາວົງມົນໃຈກາງ O. ຖ້າຫາກ "} <span className="math">{"OP = 10 cm"}</span> {" ແລະ ລັດສະໝີ "} <span className="math">{"OA = 6 cm"}</span> {". ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສີ່ແຈ AOBP."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ຮູບສີ່ແຈ AOBP ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm²"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາໄລຍະຫ່າງສ່ວນທີ່ເຫຼືອເທິງເສັ້ນເຊື່ອມໃຈກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນຮູບທີ່ມີຄອດ AB ຕັ້ງສາກກັບ OP ຢູ່ເມັດ M. ຖ້າຫາກຮູ້ໄລຍະຫ່າງທັງໝົດ "} <span className="math">{"OP = 12.5 cm"}</span> {" ແລະ ໄລຍະຫ່າງ "} <span className="math">{"OM = 8 cm"}</span> {". ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ PM."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: PM ຍາວ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ໂຈດຊອກຫາລັດສະໝີ R ຂອງວົງມົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເມັດ P ຢູ່ຫ່າງຈາກໃຈກາງວົງມົນແມ່ນ 25 cm. ຄວາມຍາວຂອງທ່ອນສຳຜັດຈາກ P ຫາວົງມົນແມ່ນ 24 cm. ຈົ່ງຊອກຫາລັດສະໝີ R ຂອງວົງມົນນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລັດສະໝີ R ແມ່ນ"}</span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ມຸມລະຫວ່າງລັດສະໝີ ແລະ ຄອດຮ່ວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ສອງເສັ້ນສຳຜັດ PA ແລະ PB ຖືກຂີດຈາກ P ຫາວົງມົນໃຈກາງ O ໂດຍເຮັດມຸມ <Angle>APB</Angle> = 60°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ <Angle>OAB</Angle> ລະຫວ່າງລັດສະໝີ ແລະ ຄອດ AB."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: <Angle>OAB</Angle> ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ອົງສາ"}</span>
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
          <span key="1">{"(1) 90° (ເພາະລັດສະໝີ ແລະ ເສັ້ນສຳຜັດຈະຕັ້ງສາກກັນຢູ່ຈຸດສຳຜັດສະເໝີ)"}</span>,
          <span key="2">{"(2) 12 cm (ຈາກປີຕາກໍ: PT² = OP² - OT² = 13² - 5² = 144 ➔ PT = √144 = 12 cm)"}</span>,
          <span key="3">{"(3) 4 cm (ຈາກປີຕາກໍ: PT² = 5² - 3² = 16 ➔ PT = √16 = 4 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 90° (ເພາະລັດສະໝີ ແລະ ເສັ້ນສຳຜັດຕັ້ງສາກກັນສະເໝີ ➔ 90°)"}</span>,
          <span key="5">{"(2) 1 (ຍ້ອນວ່າເສັ້ນສຳຜັດຈະແຕະວົງມົນພຽງແຕ່ 1 ຈຸດຮ່ວມເທົ່ານັ້ນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"48 cm² (ສາມແຈສາກ OAP ມີຂ້າງ AP = √(10² - 6²) = 8 cm ➔ ເນື້ອທີ່ OAP = (6 × 8) / 2 = 24 cm² ➔ ເນື້ອທີ່ຮູບສີ່ແຈ AOBP = 2 × 24 = 48 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"4.5 cm (ເພາະວ່າ PM = OP - OM = 12.5 - 8 = 4.5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"7 cm (ຈາກປີຕາກໍ: R² = OP² - PT² = 25² - 24² = 625 - 576 = 49 ➔ R = √49 = 7 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"30° (ມຸມໃຈກາງ <Angle>AOB</Angle> = 180° - 60° = 120° ➔ ສາມແຈ OAB ເປັນສາມແຈທ່ຽງ ➔ <Angle>OAB</Angle> = (180° - 120°) / 2 = 30°)"}</span>
        ]
      }
    ],
    advice: "ຄຸນລັກສະນະຂອງເສັ້ນສຳຜັດວົງມົນມີຄວາມສຳຄັນ ແລະ ງົດງາມຫຼາຍ ມັນຖືກນຳໃຊ້ໃນການອອກແບບວົງລໍ້, ລະບົບເຟືອງເກຍ ແລະ ຟີຊິກສາດຂອງການເຄື່ອນທີ່ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"8 cm (ຄວາມຍາວຂອງສອງທ່ອນສຳຜັດຂີດຈາກເມັດດຽວກັນແມ່ນເທົ່າກັນ ➔ PB = PA = 8 cm)"}</span>,
        <span key="11">{"ສາມແຈສະເໝີ (ເພາະວ່າ PA = PB ➔ ສາມແຈ PAB ເປັນສາມແຈທ່ຽງ, ຖ້າມີມຸມຈອມ 60° ມັນຈະກາຍເປັນສາມແຈສະເໝີ)"}</span>,
        <span key="12">{"8 cm (ເພາະວ່າສາມແຈ PAB ເປັນສາມແຈສະເໝີ ➔ AB = PA = PB = 8 cm)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"100° (ເພາະວ່າມຸມ <Angle>APB</Angle> + <Angle>AOB</Angle> = 180° ➔ <Angle>AOB</Angle> = 180° - 80° = 100°)"}</span>,
        <span key="14">{"60° (ເພາະວ່າມຸມ <Angle>APB</Angle> + <Angle>AOB</Angle> = 180° ➔ <Angle>APB</Angle> = 180° - 120° = 60°)"}</span>
      ]
    }
  ]
};
