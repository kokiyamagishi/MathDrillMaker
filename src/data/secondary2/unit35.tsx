import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit35Data: UnitData = {
  unitNumber: 35,
  unitTitle: "ພាកທີ V - ບົດທີ 35: ລວງຮອບ ແລະ ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂະໜານ, ຮູບສາມແຈ ແລະ ຮູບຄາງໝູ",
  unitGoal: "ຝຶກທັກສະການຄິດໄລ່ລວງຮອບ ແລະ ເນື້ອທີ່ ຂອງຮູບສີ່ແຈຂະໜານ, ຮູບສາມແຈ ແລະ ຮູບຄາງໝູ ຢ່າງຊຳນານ ພ້ອມທັງແກ້ໂຈດບັນຫາປະຍຸກ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 156-160",
  subSections: [
    {
      title: "1. ເນື້ອທີ່ຮູບສີ່ແຈຂະໜານ ແລະ ຮູບສາມແຈ (Area of Parallelogram & Triangle)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ເນື້ອທີ່ຮູບສີ່ແຈຂະໜານ ແລະ ຮູບສາມແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມສຳພັນລະຫວ່າງເນື້ອທີ່ຮູບສີ່ແຈຂະໜານ ແລະ ຮູບສາມແຈ ທີ່ມີພື້ນ ແລະ ລວງສູງເທົ່າກັນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຮູບສີ່ແຈຂະໜານ: ເນື້ອທີ່ S = ພື້ນ × ສູງ"}</div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ຮູບສາມແຈ: ເນື້ອທີ່ S = "} <Fraction num="ພື້ນ × ສູງ" den="2" />
              </div>
              <div style={{ fontWeight: "bold", color: "#0D47A1", marginTop: "4px" }}>
                {"➔ ເນື້ອທີ່ຮູບສາມແຈ ແມ່ນເຄິ່ງໜຶ່ງຂອງເນື້ອທີ່ຮູບສີ່ແຈຂະໜານ ທີ່ມີພື້ນ ແລະ ລວງສູງດຽວກັນ."}
              </div>
            </div>

            {/* Geometry Formula Comparison Chart SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງສູດເນື້ອທີ່ (Area Formulas)"}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "600px", marginTop: "12px" }}>
                  <svg viewBox="0 0 450 60" style={{ width: "100%", height: "auto" }}>
                    {/* Parallelogram */}
                    <polygon points="55,10 105,10 95,45 45,45" fill="none" stroke="#2E7D32" strokeWidth="2" />
                    <line x1="55" y1="10" x2="55" y2="45" stroke="#E65100" strokeWidth="1.5" strokeDasharray="3,3" />
                    
                    {/* Triangle */}
                    <polygon points="225,10 255,45 195,45" fill="none" stroke="#2E7D32" strokeWidth="2" />
                    <line x1="225" y1="10" x2="225" y2="45" stroke="#E65100" strokeWidth="1.5" strokeDasharray="3,3" />

                    {/* Trapezoid */}
                    <polygon points="355,10 395,10 415,45 335,45" fill="none" stroke="#2E7D32" strokeWidth="2" />
                    <line x1="355" y1="10" x2="355" y2="45" stroke="#E65100" strokeWidth="1.5" strokeDasharray="3,3" />
                  </svg>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center", fontSize: "1.15rem", fontWeight: "bold", color: "#37474F", alignItems: "start", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span>{"ສີ່ແຈຂະໜານ:"}</span>
                      <span style={{ fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{"b×h"}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span>{"ສາມແຈ:"}</span>
                      <Fraction num="b×h" den="2" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span>{"ຄາງໝູ:"}</span>
                      <Fraction num="(a+b)×h" den="2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບສາມແຈມີສອງຂ້າງຕິດມຸມສາກ (ໃນສາມແຈສາກ) ສາມາດຖືເປັນພື້ນ ແລະ ລວງສູງໄດ້ເລີຍເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາເນື້ອທີ່ ຫຼື ຄວາມຍາວຂ້າງພື້ນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(1)\u00A0"}</span>
                  <span>{"ຮູບສາມແຈມີພື້ນ 8 cm ແລະ ເສັ້ນສູງ 5 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(2)\u00A0"}</span>
                  <span>{"ຮູບສີ່ແຈຂະໜານມີພື້ນ 8 cm ແລະ ເສັ້ນສູງ 5 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(3)\u00A0"}</span>
                  <span>{"ຮູບສາມແຈໜຶ່ງມີເນື້ອທີ່ 18 cm², ຖ້າມີເສັ້ນສູງແມ່ນ 4 cm. ຄວາມຍາວຂ້າງພື້ນຂອງມັນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(4)\u00A0"}</span>
                  <span>{"ຮູບສີ່ແຈຂະໜານໜຶ່ງມີເນື້ອທີ່ 35 cm², ຖ້າມີຂ້າງພື້ນແມ່ນ 7 cm. ເສັ້ນສູງຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(5)\u00A0"}</span>
                  <span>{"ຖ້າຮູບສາມແຈສາກໜຶ່ງມີສອງຂ້າງຕິດມຸມສາກຍາວ 6 cm ແລະ 8 cm. ເນື້ອທີ່ຂອງມັນແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເນື້ອທີ່ຮູບຄາງໝູ ແລະ ໂຈດປະຍຸກ (Trapezoid & Applied Problems)",
      keyPoint: {
        title: "ການແກ້ໂຈດບັນຫາຮູບຄາງໝູ ແລະ ລວງຮອບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການພົວພັນລະຫວ່າງເນື້ອທີ່ຮູບຄາງໝູ ແລະ ຂະໜາດພື້ນ ຫຼື ລວງສູງ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຮູບຄາງໝູມີພື້ນຂະໜານ 4 cm ແລະ 6 cm, ລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນ:"}<br />
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginTop: "6px" }}>
                {"S = "} <Fraction num="(4 + 6) × 5" den="2" /> {" = 25 cm²"}
              </span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມວ່າ ລວງຮອບຂອງຮູບສີ່ແຈຂະໜານ ຫຼື ຮູບຄາງໝູ ແມ່ນການເອົາຄວາມຍາວຂອງທຸກໆຂ້າງອ້ອມຮອບມາບວກກັນສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ໂຈດບັນຫາ ແລະ ຄິດໄລ່ຫາຄ່າທີ່ຖືກຕ້ອງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(1)\u00A0"}</span>
                  <span>{"ຮູບຄາງໝູມີພື້ນຂະໜານກັນແມ່ນ 4 cm ແລະ 6 cm, ມີລວງສູງ 5 cm. ເນື້ອທີ່ແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(2)\u00A0"}</span>
                  <span>{"ຮູບຄາງໝູມີພື້ນຂະໜານກັນແມ່ນ 8 cm ແລະ 12 cm, ມີລວງສູງ 7 cm. ເນື້ອທີ່ແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm²"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(3)\u00A0"}</span>
                  <span>{"ຖ້າຮູບຄາງໝູມີເນື້ອທີ່ 30 cm², ມີລວງສູງ 5 cm, ພື້ນນ້ອຍ = 4 cm. ພື້ນໃຫຍ່ຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(4)\u00A0"}</span>
                  <span>{"ຖ້າຮູບຄາງໝູມີເນື້ອທີ່ 40 cm², ມີພື້ນນ້ອຍ = 6 cm, ພື້ນໃຫຍ່ = 10 cm. ລວງສູງຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", whiteSpace: "nowrap" }}>{"(5)\u00A0"}</span>
                  <span>{"ຖ້າຮູບສີ່ແຈຂະໜານມີຂ້າງພື້ນ AB = 10 cm, ແລະ ຂ້າງ AD = 6 cm. ລວງຮອບຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະ ແລະ ປຽບທຽບເນື້ອທີ່ລະຫວ່າງສອງຮູບເລຂາຄະນິດ ເພື່ອຕັ້ງສົມຜົນແກ້ຫາຕົວລັບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມທຽບເນື້ອທີ່ຮູບສາມແຈ ແລະ ຮູບສີ່ແຈຂະໜານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສາມແຈໜຶ່ງມີພື້ນ 12 cm ແລະ ເສັ້ນສູງ 6 cm (ເນື້ອທີ່ = 36 cm²). ຮູບສີ່ແຈຂະໜານໜຶ່ງມີເນື້ອທີ່ເທົ່າກັບຮູບສາມແຈນີ້. ຖ້າຮູບສີ່ແຈຂະໜານມີຂ້າງພື້ນ 9 cm. ຈົ່ງຊອກຫາເສັ້ນສູງ 𝑥 ຂອງມັນ."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມທຽບເນື້ອທີ່ຮູບຈະຕຸລັດ ແລະ ຮູບຄາງໝູ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຈະຕຸລັດໜຶ່ງມີຂ້າງຍາວ 6 cm (ເນື້ອທີ່ = 36 cm²). ຮູບຄາງໝູໜຶ່ງມີເນື້ອທີ່ເທົ່າກັບຮູບຈະຕຸລັດນີ້. ຖ້າຮູບຄາງໝູມີພື້ນນ້ອຍ = 5 cm, ພື້ນໃຫຍ່ = 7 cm, ຈົ່ງຊອກຫາລວງສູງ 𝑦 ຂອງມັນ."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑦 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດບັນຫາການຂາຍດິນຮູບຄາງໝູ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ດິນຕອນໜຶ່ງເປັນຮູບຄາງໝູມີພື້ນນ້ອຍ = 10 m, ພື້ນໃຫຍ່ = 20 m, ແລະ ລວງສູງ = 12 m (ເນື້ອທີ່ = 180 m²). ຖ້າຕ້ອງການຂາຍໃນລາຄາ 50,000 ກີບຕໍ່ຕາແມັດ (m²). ຈະຂາຍດິນຕອນນີ້ໄດ້ເງິນທັງໝົດຈັກກີບ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ໄດ້ເງິນທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ຄິດໄລ່ລວງຮອບຂອງຮູບຄາງໝູ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າຮູບຄາງໝູໜຶ່ງມີພື້ນນ້ອຍ = 8 cm, ພື້ນໃຫຍ່ = 15 cm, ແລະ ສອງຂ້າງທີ່ບໍ່ຂະໜານຍາວ AD = 5 cm, BC = 6 cm. ຈົ່ງຊອກຫາລວງຮອບທັງໝົດຂອງຮູບຄາງໝູນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ລວງຮອບແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
          <span key="1">{"(1) 20 cm² (S = 8 × 5 / 2 = 20 cm²)"}</span>,
          <span key="2">{"(2) 40 cm² (S = 8 × 5 = 40 cm²)"}</span>,
          <span key="3">{"(3) 9 cm (S = b × h / 2 ➔ 18 = b × 4 / 2 ➔ 18 = 2b ➔ b = 9 cm)"}</span>,
          <span key="4">{"(4) 5 cm (S = b × h ➔ 35 = 7 × h ➔ h = 5 cm)"}</span>,
          <span key="5">{"(5) 24 cm² (S = 6 × 8 / 2 = 24 cm²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 25 cm² (S = (4 + 6) × 5 / 2 = 25 cm²)"}</span>,
          <span key="7">{"(2) 70 cm² (S = (8 + 12) × 7 / 2 = 70 cm²)"}</span>,
          <span key="8">{"(3) 8 cm (S = (a + b) × h / 2 ➔ 30 = (4 + b) × 5 / 2 ➔ 60 = (4 + b) × 5 ➔ 12 = 4 + b ➔ b = 8 cm)"}</span>,
          <span key="9">{"(4) 5 cm (S = (6 + 10) × h / 2 ➔ 40 = 16 × h / 2 ➔ 40 = 8h ➔ h = 5 cm)"}</span>,
          <span key="10">{"(5) 32 cm (P = 2 × (10 + 6) = 32 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"4 (S_tri = 12 × 6 / 2 = 36 cm² ➔ S_para = 9 × 𝑥 = 36 ➔ 𝑥 = 4 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"6 (S_sq = 6² = 36 cm² ➔ S_trap = (5 + 7) × 𝑦 / 2 = 6𝑦 = 36 ➔ 𝑦 = 6 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"9000000 (S = (10 + 20) × 12 / 2 = 180 m² ➔ ລາຄາ = 180 × 50,000 = 9,000,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"34 cm (လວງຮອບ = 8 + 15 + 5 + 6 = 34 cm)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການວິເຄາະ ແລະ ຄິດໄລ່ເນື້ອທີ່ຂອງຮູບເລຂາຄະນິດປະສົມ ຈະຊ່ວຍໃຫ້ເຮົາພັດທະນາຄວາມຄິດສ້າງສັນ ແລະ ແກ້ເລກໄດ້ຢ່າງວ່ອງໄວເດີ້!"
  }
};
