import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ພាកທີ II - ບົດທີ 10: ຮູບສາມແຈ ແລະ ວົງມົນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄຸນລັກສະນະຂອງວົງມົນແນບນອກ ແລະ ວົງມົນແນບໃນ ຂອງຮູບສາມແຈ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 43-48",
  subSections: [
    {
      title: "1. ວົງມົນແນບນອກຮູບສາມແຈ",
      keyPoint: {
        title: "ໃຈກາງ ແລະ ຄຸນລັກສະນະວົງມົນແນບນອກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ວົງມົນແນບນອກແມ່ນວົງມົນທີ່ຜ່ານທັງສາມຈອມ A, B, C ຂອງຮູບສາມແຈ. ໃຈກາງ O ຂອງມັນແມ່ນຈຸດຕັດກັນຂອງເສັ້ນຕັ້ງສາກເຄິ່ງກາງຂ້າງ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຫຼັກການ: ໄລຍະຫ່າງຈາກໃຈກາງ O ຫາສາມຈອມແມ່ນເທົ່າກັນ ➔ OA = OB = OC = R (ລັດສະໝີວົງມົນແນບນອກ)."}</div>
              <div>{"• ກໍລະນີສາມແຈສາກ: ໃຈກາງ O ຈະນອນຢູ່ເຄິ່ງກາງຂອງຂ້າງກົງຊາກສະເໝີ ➔ R = ຂ້າງກົງຊາກ / 2."}</div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ສາມແຈສາກມີຂ້າງກົງຊາກແມ່ນ 10 cm ➔ ລັດສະໝີວົງມົນແນບນອກ R = 10 / 2 = 5 cm."}</div>
            </div>

            {/* Circumcircle SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສາມແຈສາກແນບໃນວົງມົນ (O ຢູ່ເຄິ່ງກາງຂ້າງກົງຊາກ)"}</span>
                <svg viewBox="0 0 400 240" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Circle */}
                  <circle cx="200" cy="120" r="90" fill="none" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Right Triangle inside */}
                  {/* Diameter: (55, 60) to (145, 60) -> length 90 */}
                  <polygon points="55,60 145,60 100,20" fill="#E8F5E9" stroke="#1565C0" strokeWidth="3" />
                  
                  {/* Right Angle Indicator at (100, 20) */}
                  <path d="M 190,50 L 200,60 L 210,50" fill="none" stroke="#1565C0" strokeWidth="2" />

                  {/* Center O */}
                  <circle cx="200" cy="120" r="5" fill="#37474F" />
                  <text x="200" y="144" fill="#37474F" fontSize="16" textAnchor="middle" fontWeight="bold">{"O"}</text>

                  {/* Vertices */}
                  <text x="90" y="126" fill="#37474F" fontSize="16">{"A"}</text>
                  <text x="300" y="126" fill="#37474F" fontSize="16">{"B"}</text>
                  <text x="200" y="28" fill="#37474F" fontSize="16">{"C (ມຸມສາກ)"}</text>
                  
                  {/* Radius indication */}
                  <text x="150" y="110" fill="#E65100" fontSize="16" fontWeight="bold">{"R"}</text>
                  <text x="240" y="110" fill="#E65100" fontSize="16" fontWeight="bold">{"R"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ ວົງມົນແນບນອກແມ່ນຢູ່ທາງນອກ ແລະ ກວມເອົາຮູບສາມແຈໄວ້ທາງໃນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາລັດສະໝີ R ຂອງວົງມົນແນບນອກຮູບສາມແຈສາກ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຮູບສາມແຈສາກມີຂ້າງຕິດຊາກແມ່ນ 6 cm ແລະ 8 cm (ຂ້າງກົງຊາກຍາວ 10 cm). ລັດສະໝີ R ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຮູບສາມແຈສາກມີຂ້າງກົງຊາກຍາວແມ່ນ "} <span className="math">{"12 cm"}</span> {". ລັດສະໝີ R ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ໃຈກາງວົງມົນແນບນອກຂອງຮູບສາມແຈສາກ ຈະຕັ້ງຢູ່ບ່ອນໃດ? (ຕອບ 'ເຄິ່ງກາງຂ້າງກົງຊາກ' ຫຼື 'ພາຍໃນຮູບສາມແຈ')"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະເສັ້ນຕັ້ງສາກເຄິ່ງກາງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ໃຈກາງວົງມົນແນບນອກແມ່ນຈຸດຕັດກັນຂອງເສັ້ນປະເພດໃດ? (ຕອບ 'ເສັ້ນຕັ້ງສາກເຄິ່ງກາງຂ້າງ' ຫຼື 'ເສັ້ນແບ່ງເຄິ່ງມຸມ')"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຖ້າໄລຍະຫ່າງຈາກໃຈກາງ O ຫາຈອມ A ແມ່ນ 7 cm, ໄລຍະຫ່າງຈາກ O ຫາຈອມ B ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ວົງມົນແນບໃນຮູບສາມແຈ",
      keyPoint: {
        title: "ໃຈກາງ ແລະ ການພົວພັນເນື້ອທີ່ກັບລັດສະໝີແນບໃນ (r)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ວົງມົນແນບໃນແມ່ນວົງມົນທີ່ສຳຜັດກັບທັງສາມຂ້າງຂອງຮູບສາມແຈ. ໃຈກາງ I ຂອງມັນແມ່ນຈຸດຕັດກັນຂອງສາມເສັ້ນແບ່ງເຄິ່ງມຸມໃນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div>{"• ສູດພົວພັນເນື້ອທີ່: "} <span className="math">{"S = r × s"}</span> {" (ໂດຍທີ່ r ແມ່ນລັດສະໝີແນບໃນ, ແລະ s ແມ່ນເຄິ່ງລວງຮອບ: s = (a+b+c)/2)"}</div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຊອກຫາ r: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"r = "} <Fraction num="S" den="s" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ສາມແຈມີເນື້ອທີ່ S = 30 cm² ແລະ ເຄິ່ງລວງຮອບ s = 15 cm ➔ r = 30 / 15 = 2 cm."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວົງມົນແນບໃນແມ່ນຢູ່ທາງໃນ ແລະ ຖືກແວດລ້ອມດ້ວຍຂ້າງທັງສາມຂອງຮູບສາມແຈເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຮູບສາມແຈໜຶ່ງມີສາມຂ້າງຍາວ 5 cm, 12 cm, 13 cm ແລະ ມີເນື້ອທີ່ S = 30 cm². ຈົ່ງຊອກຫາຄ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ເຄິ່ງລວງຮອບ s ຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ລັດສະໝີ r ຂອງວົງມົນແນບໃນ ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຮູບສາມແຈທີ່ມີເນື້ອທີ່ 24 cm² ແລະ ລວງຮອບ 24 cm. ລັດສະໝີ r ຂອງວົງມົນແນບໃນແມ່ນຈັກ cm?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະວົງມົນແນບໃນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ໃຈກາງວົງມົນແນບໃນແມ່ນຈຸດຕັດກັນຂອງເສັ້ນປະເພດໃດ? (ຕອບ 'ເສັ້ນແບ່ງເຄິ່ງມຸມ' ຫຼື 'ເສັ້ນຕັ້ງສາກເຄິ່ງກາງຂ້າງ')"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC ມີ I ເປັນໃຈກາງວົງມົນແນບໃນ. ຖ້າມຸມ A = 60° ແລະ B = 80°, ຜົນບວກເຄິ່ງມຸມ A/2 + B/2 ແມ່ນຈັກອົງສາ?"}</span>
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
    hintText: "",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ລັດສະໝີວົງມົນແນບໃນຂອງຮູບສາມແຈສະເໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສາມແຈສະເໝີໜຶ່ງມີຄວາມຍາວຂ້າງແມ່ນ 6 cm ແລະ ມີເນື້ອທີ່ S = 9√3 cm². ລັດສະໝີ r ຂອງວົງມົນແນບໃນຂຽນໃນຮູບແບບ a√3. ຈົ່ງຊອກຫາຄ່າຂອງ a."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ລັດສະໝີວົງມົນແນບໃນຮູບສາມແຈສາກຂະໜາດນ້ອຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຮູບສາມແຈສາກໜຶ່ງມີສອງຂ້າງຕິດຊາກແມ່ນ 3 cm ແລະ 4 cm (ຂ້າງກົງຊາກຍາວ 5 cm, ເນື້ອທີ່ແມ່ນ 6 cm²). ຈົ່ງຄິດໄລ່ລັດສະໝີ r ຂອງວົງມົນແນບໃນຮູບສາມແຈສາກນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: r ="}</span>
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
            {"ຜົນບວກລັດສະໝີແນບນອກ ແລະ ແນບໃນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈສາກ ABC ມີມຸມ C = 90°, AC = 8 cm, BC = 6 cm. ຈົ່ງຄິດໄລ່ຜົນບວກຂອງລັດສະໝີວົງມົນແນບນອກ R ແລະ ລັດສະໝີວົງມົນແນບໃນ r (R + r) ຂອງຮູບສາມແຈນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: R + r ="}</span>
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
            {"ການຊອກຫາລວງຮອບຈາກເນື້ອທີ່ ແລະ ລັດສະໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຮູບສາມແຈໜຶ່ງມີເນື້ອທີ່ແມ່ນ 36 cm² ແລະ ມີລັດສະໝີວົງມົນແນບໃນ r = 3 cm. ຈົ່ງຄິດໄລ່ລວງຮອບ ຂອງຮູບສາມແຈນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
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
          <span key="1">{"(1) 5 cm (ຂ້າງກົງຊາກແມ່ນ 10 cm ➔ R = ຂ້າງກົງຊາກ / 2 = 10 / 2 = 5 cm)"}</span>,
          <span key="2">{"(2) 6 cm (ຂ້າງກົງຊາກແມ່ນ 12 cm ➔ R = 12 / 2 = 6 cm)"}</span>,
          <span key="3">{"(3) ເຄິ່ງກາງຂ້າງກົງຊາກ (ໃຈກາງວົງມົນແນບນອກຂອງສາມແຈສາກ ຈະຢູ່ເຄິ່ງກາງຂ້າງກົງຊາກສະເໝີ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) ເສັ້ນຕັ້ງສາກເຄິ່ງກາງຂ້າງ (ໃຈກາງວົງມົນແນບນອກແມ່ນຈຸດຕັດກັນຂອງສາມເສັ້ນຕັ້ງສາກເຄິ່ງກາງຂ້າງ)"}</span>,
          <span key="5">{"(2) 7 cm (ຍ້ອນວ່າ OA = OB = OC = R ➔ OB = 7 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"1 (ເຄິ່ງລວງຮອບ s = (6×3) / 2 = 9 cm ➔ r = S / s = 9√3 / 9 = 1√3 cm ➔ a = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"1 cm (ເຄິ່ງລວງຮອບ s = (3+4+5) / 2 = 6 cm ➔ r = S / s = 6 / 6 = 1 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"7 cm (ຂ້າງກົງຊາກ AB = 10 cm ➔ R = 5 cm. ເຄິ່ງລວງຮອບ s = 12 cm, ເນື້ອທີ່ S = 24 cm² ➔ r = 24 / 12 = 2 cm ➔ R + r = 5 + 2 = 7 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"24 cm (ເຄິ່ງລວງຮອບ s = S / r = 36 / 3 = 12 cm ➔ ລວງຮອບ = 2 × s = 24 cm)"}</span>
        ]
      }
    ],
    advice: "ວົງມົນແນບນອກ ແລະ ແນບໃນຮູບສາມແຈເປັນຫົວຂໍ້ເລຂາຄະນິດທີ່ງົດງາມ ແລະ ມີຄວາມສຳພັນທີ່ໜ້າສົນໃຈຫຼາຍ ໝັ່ນແຕ້ມຮູບ ແລະ ສຶກສາເພີ່ມເຕີມເດີ້!"
  }
};
