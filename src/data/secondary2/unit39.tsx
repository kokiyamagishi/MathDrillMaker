import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit39Data: UnitData = {
  unitNumber: 39,
  unitTitle: "ພາກທີ VI - ບົດທີ 39: ໜ້າພຽງຕົວປະສານ",
  unitGoal: "ຮຽນຮູ້ລະບົບເສັ້ນເຄົ້າຕົວປະສານສາກ (Cartesian Coordinate System), ການອ່ານ ແລະ ກຳນົດພິກັດຂອງເມັດ (𝑥, 𝑦) ພ້ອມທັງຄິດໄລ່ຫາໄລຍະຫ່າງພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 176-180",
  subSections: [
    {
      title: "1. ພາກສ່ວນຂອງລະບົບເສັ້ນເຄົ້າ ແລະ ການອ່ານພິກັດ (Components & Coordinate Reading)",
      keyPoint: {
        title: "ໂຄງສ້າງຂອງໜ້າພຽງຕົວປະສານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໜ້າພຽງຕົວປະສານປະກອບດ້ວຍສອງແກນຕັ້ງສາກກັນຢູ່ຈຸດ O(0,0):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ແກນນອນ Ox: ເອີ້ນວ່າ ແກນອັບຊິດ (Abscissa) ➔ ສະແດງຄ່າ 𝑥"}</div>
              <div>{"• ແກນຕັ້ງ Oy: ເອີ້ນວ່າ ແກນອໍໂດເນ (Ordinate) ➔ ສະແດງຄ່າ 𝑦"}</div>
              <div>{"• ພິກັດຂອງເມັດ P ໃດໜຶ່ງຂຽນໃນຮູບຮ່າງ: "} <span className="math">{"P(𝑥, 𝑦)"}</span></div>
            </div>

            {/* Coordinate Plane Grid SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ລະບົບເສັ້ນເຄົ້າຕົວປະສານສາກ ແລະ ເມັດ A(3, 2)"}</span>
                <svg viewBox="0 0 160 160" style={{ width: "100%", maxWidth: "150px", height: "auto" }}>
                  {/* Grid Lines */}
                  <line x1="10" y1="20" x2="150" y2="20" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="10" y1="40" x2="150" y2="40" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="10" y1="60" x2="150" y2="60" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="10" y1="100" x2="150" y2="100" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="10" y1="120" x2="150" y2="120" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="10" y1="140" x2="150" y2="140" stroke="#E0E0E0" strokeWidth="0.5" />
                  
                  <line x1="20" y1="10" x2="20" y2="150" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="40" y1="10" x2="40" y2="150" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="60" y1="10" x2="60" y2="150" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="100" y1="10" x2="100" y2="150" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="120" y1="10" x2="120" y2="150" stroke="#E0E0E0" strokeWidth="0.5" />
                  <line x1="140" y1="10" x2="140" y2="150" stroke="#E0E0E0" strokeWidth="0.5" />

                  {/* Axes */}
                  <line x1="10" y1="80" x2="150" y2="80" stroke="#37474F" strokeWidth="1.5" />
                  <line x1="80" y1="10" x2="80" y2="150" stroke="#37474F" strokeWidth="1.5" />
                  
                  {/* Origin */}
                  <circle cx="80" cy="80" r="2.5" fill="#37474F" />
                  <text x="75" y="90" fill="#37474F" fontSize="8">{"O"}</text>

                  {/* Point A(3, 2) ➔ grid spacing is 20 units per 1 coordinate unit. (3➔140, 2➔40) */}
                  <circle cx="140" cy="40" r="3.5" fill="#D32F2F" />
                  <text x="142" y="35" fill="#D32F2F" fontSize="8" fontWeight="bold">{"A(3, 2)"}</text>
                  
                  {/* Alignment dotted lines */}
                  <line x1="140" y1="40" x2="140" y2="80" stroke="#D32F2F" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="140" y1="40" x2="80" y2="40" stroke="#D32F2F" strokeWidth="1" strokeDasharray="2,2" />

                  {/* Axis labels */}
                  <text x="150" y="75" fill="#37474F" fontSize="8" fontWeight="bold" textAnchor="end">{"𝑥"}</text>
                  <text x="85" y="18" fill="#37474F" fontSize="8" fontWeight="bold">{"𝑦"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາອ່ານຕົວປະສານ ຕ້ອງອ່ານຄ່າແກນນອນ 𝑥 ກ່ອນ ແລ້ວຈຶ່ງອ່ານຄ່າແກນຕັ້ງ 𝑦 ເດີ້! ຕົວຢ່າງ: (𝑥, 𝑦)",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງອ່ານ ແລະ ກຳນົດຄ່າຕົວປະສານພື້ນຖານລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ເມັດ P(4, 5) ມີຄ່າຕົວປະສານ Ox (ແກນນອນ) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ເມັດ P(4, 5) ມີຄ່າຕົວປະສານ Oy (ແກນຕັ້ງ) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ເມັດ A(-3, 2) ມີຕົວປະສານ Ox ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ເມັດ B(2, -7) ມີຕົວປະສານ Oy ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຈຸດເຄົ້າ O ຂອງລະບົບເສັ້ນເຄົ້າຕົວປະສານສາກ ມີຕົວປະສານ 𝑥 ແລະ 𝑦 ເທົ່າກັບຈັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເມັດຢູ່ເທິງແກນຕົວປະສານ (Points on Coordinate Axes)",
      keyPoint: {
        title: "ຄຸນລັກສະນະພິເສດຂອງເມັດຢູ່ເທິງແກນ Ox ແລະ Oy",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມັດທີ່ຕັ້ງຢູ່ເທິງແກນໃດໜຶ່ງ ຈະມີຕົວປະສານອີກຟາກໜຶ່ງເປັນ 0 ສະເໝີ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              {"• ຖ້າເມັດຕັ້ງຢູ່ເທິງແກນ Ox ➔ ຄ່າຕົວປະສານ Oy (𝑦) ຈະເທົ່າກັບ 0 (ຕົວຢ່າງ: A(3, 0))"}<br />
              {"• ຖ້າເມັດຕັ້ງຢູ່ເທິງແກນ Oy ➔ ຄ່າຕົວປະສານ Ox (𝑥) ຈະເທົ່າກັບ 0 (ຕົວຢ່າງ: B(0, -5))"}
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະຫຼັບກັນ: ຢູ່ແກນ Ox ➔ 𝑦=0, ຢູ່ແກນ Oy ➔ 𝑥=0 ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາພິກັດ ຫຼື ແກນທີ່ເມັດຕັ້ງຢູ່ລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າເມັດ Q ຕັ້ງຢູ່ເທິງແກນ Ox (ແກນນອນ), ຕົວປະສານ Oy (𝑦) ຂອງມັນຈະເທົ່າກັບຈັກສະເໝີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າເມັດ R ຕັ້ງຢູ່ເທິງແກນ Oy (ແກນຕັ້ງ), ຕົວປະສານ Ox (𝑥) ຂອງມັນຈະເທົ່າກັບຈັກສະເໝີ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ເມັດ A(0, -4) ຕັ້ງຢູ່ເທິງແກນໃດ? (ຕອບ Ox ຫຼື Oy)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ເມັດ B(5, 0) ຕັ້ງຢູ່ເທິງແກນໃດ? (ຕອບ Ox ຫຼື Oy)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າເມັດ A(𝑥, 3) ຕັ້ງຢູ່ເທິງແກນ Oy, ຄ່າຂອງ 𝑥 ຈະແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຄິດໄລ່ພິກັດຂອງເມັດເຄິ່ງກາງລະຫວ່າງສອງເມັດຢ່າງລະມັດລະວັງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາຕົວປະສານ 𝑥 ຂອງເມັດເຄິ່ງກາງ M: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເມັດ A(2, 4) ແລະ B(6, 8) ມີເມັດເຄິ່ງກາງລະຫວ່າງພວກມັນແມ່ນ M(𝑥, 𝑦). ຈົ່ງຊອກຫາຕົວປະສານ 𝑥 ຂອງ M. (ສູດ: 𝑥_M = (𝑥_A + 𝑥_B) / 2)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາຕົວປະສານ 𝑦 ຂອງເມັດເຄິ່ງກາງ M: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈາກເມັດ A(2, 4) ແລະ B(6, 8) ທີ່ມີເມັດເຄິ່ງກາງ M(𝑥, 𝑦). ຈົ່ງຊອກຫາຕົວປະສານ 𝑦 ຂອງ M. (ສູດ: 𝑦_M = (𝑦_A + 𝑦_B) / 2)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑦 ="}</span>
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
            {"ຄິດໄລ່ໄລຍະຫ່າງເທິງແກນ Ox: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າເມັດ A(3, 0) ແລະ B(9, 0) ຕັ້ງຢູ່ເທິງແກນ Ox. ຈົ່ງຊອກຫາໄລຍະຫ່າງ AB ລະຫວ່າງສອງເມັດນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ໄລຍະຫ່າງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຫົວໜ່ວຍ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ໄລຍະຫ່າງເທິງແກນ Oy: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າເມັດ C(0, 5) ແລະ D(0, -2) ຕັ້ງຢູ່ເທິງແກນ Oy. ຈົ່ງຊອກຫາໄລຍະຫ່າງ CD ລະຫວ່າງສອງເມັດນີ້."}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ໄລຍະຫ່າງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຫົວໜ່ວຍ"}</span>
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
          <span key="1">{"(1) 4 (ຕົວປະສານທຳອິດໃນ P(4, 5) ສະແດງເຖິງຄ່າ 𝑥 ເທິງ Ox)"}</span>,
          <span key="2">{"(2) 5 (ຕົວປະສານທີສອງໃນ P(4, 5) ສະແດງເຖິງຄ່າ 𝑦 ເທິງ Oy)"}</span>,
          <span key="3">{"(3) -3 (ຕົວປະສານທຳອິດໃນ A(-3, 2) ແມ່ນ -3)"}</span>,
          <span key="4">{"(4) -7 (ຕົວປະສານທີສອງໃນ B(2, -7) ແມ່ນ -7)"}</span>,
          <span key="5">{"(5) 0 (ເພາະວ່າຈຸດເຄົ້າ O ມີພິກັດແມ່ນ (0, 0))"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 0 (ເພາະວ່າທຸກໆເມັດເທິງ Ox ມີ 𝑦 = 0 ສະເໝີ)"}</span>,
          <span key="7">{"(2) 0 (ເພາະວ່າທຸກໆເມັດເທິງ Oy ມີ 𝑥 = 0 ສະເໝີ)"}</span>,
          <span key="8">{"(3) Oy (ເພາະວ່າ 𝑥 = 0 ➔ ຕັ້ງຢູ່ເທິງ Oy)"}</span>,
          <span key="9">{"(4) Ox (ເພາະວ່າ 𝑦 = 0 ➔ ຕັ້ງຢູ່ເທິງ Ox)"}</span>,
          <span key="10">{"(5) 0 (ເພາະວ່າເມັດຕັ້ງຢູ່ເທິງ Oy ➔ ຕົວປະສານ 𝑥 ຕ້ອງເປັນ 0)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"4 (ເພາະວ່າ 𝑥 = (2 + 6) / 2 = 8 / 2 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"6 (ເພາະວ່າ 𝑦 = (4 + 8) / 2 = 12 / 2 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"6 (ເພາະວ່າ ໄລຍະຫ່າງ = 9 - 3 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"7 (ເພາະວ່າ ໄລຍະຫ່າງ = 5 - (-2) = 5 + 2 = 7)"}</span>
        ]
      }
    ],
    advice: "ຝຶກຝົນການອ່ານ ແລະ ກຳນົດເມັດເທິງໜ້າພຽງຕົວປະສານ ຈະຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລຂາຄະນິດວິເຄາະ ແລະ ແຕ້ມເສັ້ນສະແດງໄດ້ຢ່າງຖືກຕ້ອງເດີ້!"
  }
};
