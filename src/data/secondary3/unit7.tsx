import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ພາກທີ III - ບົດທີ 11: ການພົວພັນ ແລະ ຕຳລາ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມຂອງຕຳລາ (Functions), ການຊອກຫາຄ່າຂອງຕຳລາ f(x), ແລະ ການກຳນົດເຂດກຳນົດ (Domain) ຂອງຕຳລາເລກສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 55-60",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ການຊອກຫາຄ່າຂອງຕຳລາ (Definition and Value of a Function)",
      keyPoint: {
        title: "ຕຳລາ ແລະ ການແທນຄ່າຕົວປ່ຽນ x",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕຳລາແມ່ນການພົວພັນລະຫວ່າງຕົວປ່ຽນ x ແລະ y ໂດຍທີ່ x ແຕ່ລະຄ່າໃຫ້ y ພຽງຄ່າດຽວສະເໝີ. ເຮົາຂຽນ y = f(x):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ສູດແທນຄ່າ: f(x) = ax + b"}</div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: ໃຫ້ f(x) = 3x - 2. ຈົ່ງຊອກຫາຄ່າຂອງ f(4)?"}</div>
              <div>{"➔ ວິທີຄິດ: ແທນ x = 4 ໃສ່ຕຳລາ ➔ f(4) = 3(4) - 2 = 12 - 2 = 10."}</div>
            </div>

            {/* Relations Mapping SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດການພົວພັນແບບຕຳລາ: f(x) = 2x"}</span>
                <svg viewBox="0 0 200 90" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Domain Ellipse */}
                  <ellipse cx="50" cy="45" rx="25" ry="35" fill="none" stroke="#2E7D32" strokeWidth="1.5" />
                  <text x="50" y="87" fill="#2E7D32" fontSize="8" textAnchor="middle" fontWeight="bold">{"ເຂດກຳນົດ X"}</text>
                  <text x="50" y="25" fill="#37474F" fontSize="8" textAnchor="middle">{"1"}</text>
                  <text x="50" y="45" fill="#37474F" fontSize="8" textAnchor="middle">{"2"}</text>
                  <text x="50" y="65" fill="#37474F" fontSize="8" textAnchor="middle">{"3"}</text>

                  {/* Mapping Arrows */}
                  <path d="M 60,25 L 130,25" fill="none" stroke="#E65100" strokeWidth="1" markerEnd="url(#arrow)" />
                  <path d="M 60,45 L 130,45" fill="none" stroke="#E65100" strokeWidth="1" />
                  <path d="M 60,65 L 130,65" fill="none" stroke="#E65100" strokeWidth="1" />

                  {/* Range Ellipse */}
                  <ellipse cx="150" cy="45" rx="25" ry="35" fill="none" stroke="#1565C0" strokeWidth="1.5" />
                  <text x="150" y="87" fill="#1565C0" fontSize="8" textAnchor="middle" fontWeight="bold">{"ເຂດຄ່າ Y"}</text>
                  <text x="150" y="25" fill="#37474F" fontSize="8" textAnchor="middle">{"2"}</text>
                  <text x="150" y="45" fill="#37474F" fontSize="8" textAnchor="middle">{"4"}</text>
                  <text x="150" y="65" fill="#37474F" fontSize="8" textAnchor="middle">{"6"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຊອກຫາຄ່າ f(a) ແມ່ນພຽງແຕ່ເອົາຕົວເລກ a ໄປປ່ຽນແທນບ່ອນທີ່ມີຕົວປ່ຽນ x ທຸກບ່ອນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຄ່າຂອງຕຳລາ f(x) ຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math">{"f(x) = 3x - 2"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ f(4)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math">{"g(x) = x² + 1"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ g(-3)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math">{"h(x) = 2x + 5"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ h(0)?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ x ຈາກຄ່າຕຳລາທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math">{"f(x) = 2x"}</span> {". ຖ້າ f(x) = 8, ຈະໄດ້ x ເທົ່າກັບເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math">{"g(x) = 3x - 1"}</span> {". ຖ້າ g(x) = 14, ຈະໄດ້ x ເທົ່າກັບເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເຂດກຳນົດຂອງຕຳລາເລກສ່ວນ (Domain of Rational Functions)",
      keyPoint: {
        title: "ເງື່ອນໄຂພື້ນຖານຂອງເຂດກຳນົດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຂດກຳນົດ (Domain) ແມ່ນທຸກຄ່າຂອງ x ທີ່ເຮັດໃຫ້ຕຳລາມີຄວາມໝາຍ. ສຳລັບຕຳລາເລກສ່ວນ ຕົວສ່ວນຕ້ອງຕ່າງຈາກສູນສະເໝີ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ເງື່ອນໄຂເລກສ່ວນ: ຕຳລາ "} 
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"f(x) = "} <Fraction num="P(x)" den="Q(x)" />
                </span>
                {" ມີຄວາມໝາຍ ເມື່ອ Q(x) ≠ 0."}
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຕຳລາ f(x) = "} <span className="math"><Fraction num="5" den="x - 3" /></span> {" ➔ ເງື່ອນໄຂແມ່ນ x - 3 ≠ 0 ➔ x ≠ 3."}</div>
              <div>{"➔ ໝາຍຄວາມວ່າ ຄ່າຂອງ x ທີ່ບໍ່ຢູ່ໃນເຂດກຳນົດແມ່ນ 3."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ສະເໝີວ່າ ຕົວຫານ (ພາກສ່ວນລຸ່ມຂອງເລກສ່ວນ) ຫ້າມເປັນສູນຢ່າງເດັດຂາດເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຄ່າຂອງ x ທີ່ບໍ່ຢູ່ໃນເຂດກຳນົດ (ເຮັດໃຫ້ຕົວສ່ວນເປັນສູນ): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"f(x) = "} <Fraction num="5" den="x - 3" /></span> {". ຄ່າຂອງ x ທີ່ບໍ່ຢູ່ໃນເຂດກຳນົດແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"g(x) = "} <Fraction num="10" den="2x - 8" /></span> {". ຄ່າຂອງ x ທີ່ບໍ່ຢູ່ໃນເຂດກຳນົດແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ສຳລັບຕຳລາ "} <span className="math">{"h(x) = "} <Fraction num="1" den="x + 2" /></span> {". ຄ່າຂອງ x ທີ່ບໍ່ຢູ່ໃນເຂດກຳນົດແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄ່າຫຼາຍສຸດໃນເຂດຄ່າ (Range) ຂອງຕຳລາລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເຂດກຳນົດແມ່ນ {1, 2, 3} ສຳລັບ "} <span className="math">{"f(x) = 2x"}</span> {". ຄ່າຫຼາຍສຸດໃນເຂດຄ່າແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເຂດກຳນົດແມ່ນ {-2, 0, 2} ສຳລັບ "} <span className="math">{"g(x) = -x"}</span> {". ຄ່າຫຼາຍສຸດໃນເຂດຄ່າແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ແທນຄ່າເພື່ອຊອກຫາສຳປະສິດ ຫຼື ຕັ້ງສົມຜົນຕົວສ່ວນຕ່າງຈາກສູນຢ່າງຖືກຕ້ອງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາສຳປະສິດຈາກຄ່າຕຳລາ (Finding Coefficient from Function Value): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຕຳລາ "} <span className="math">{"f(x) = ax + 3"}</span> {". ຖ້າຫາກ f(2) = 11, ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ a."}
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
              {"ເຂດກຳນົດຂອງຕຳລາເລກສ່ວນທີ່ມີຕົວເລກຊັບຊ້ອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາຄ່າຂອງ x ທີ່ບໍ່ຢູ່ໃນເຂດກຳນົດຂອງຕຳລາ: "} 
              <span className="math">
                {"f(x) = "} <Fraction num="2x + 1" den="x - 5" />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ໂຈດບັນຫາຄ່າບໍລິການລົດເຊົ່າ (Car Rental Flat + Mileage Cost): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ບໍລິສັດລົດເຊົ່າແຫ່ງໜຶ່ງຄິດຄ່າບໍລິການເລີ່ມຕົ້ນ 50,000 ກີບ ບວກກັບ 2,000 ກີບ ຕໍ່ກິໂລແມັດ x. ຂຽນເປັນຕຳລາ f(x) = 2,000x + 50,000. ຈົ່ງຄິດໄລ່ຄ່າເຊົ່າທັງໝົດເມື່ອເດີນທາງໄດ້ 10 ກິໂລແມັດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄ່າເຊົ່າທັງໝົດແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາຕຳລາຊ້ອນຕຳລາ (Composite Function Value): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃຫ້ສອງຕຳລາ "} <span className="math">{"f(x) = 2x"}</span> {" ແລະ "} <span className="math">{"g(x) = x + 3"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "} <span className="math">{"g(f(4))"}</span> {" (ຄຳແນະນຳ: ຊອກຫາ f(4) ກ່ອນ ແລ້ວຈຶ່ງແທນຄ່າໃສ່ g)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: g(f(4)) ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1">{"(1) 10 (ເພາະວ່າ f(4) = 3(4) - 2 = 12 - 2 = 10)"}</span>,
          <span key="2">{"(2) 10 (ເພາະວ່າ g(-3) = (-3)² + 1 = 9 + 1 = 10)"}</span>,
          <span key="3">{"(3) 5 (ເພາະວ່າ h(0) = 2(0) + 5 = 5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 4 (ເພາະວ່າ 2x = 8 ➔ x = 4)"}</span>,
          <span key="5">{"(2) 5 (ເພາະວ່າ 3x - 1 = 14 ➔ 3x = 15 ➔ x = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"4 (ເພາະວ່າ f(2) = a(2) + 3 = 11 ➔ 2a = 8 ➔ a = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"5 (ຍ້ອນວ່າຕົວສ່ວນ x - 5 = 0 ➔ x = 5 ➔ ເຮັດໃຫ້ສ່ວນເປັນສູນ ດັ່ງນັ້ນ x = 5 ຈຶ່ງບໍ່ຢູ່ໃນເຂດກຳນົດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"70,000 (ເພາະວ່າ f(10) = 2,000(10) + 50,000 = 20,000 + 50,000 = 70,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"11 (ເພາະວ່າ f(4) = 2(4) = 8 ➔ g(f(4)) = g(8) = 8 + 3 = 11)"}</span>
        ]
      }
    ],
    advice: "ຕຳລາ ແລະ ການພົວພັນແມ່ນຫຼັກການທີ່ໃຊ້ຫຼາຍໃນການຂຽນໂປຣແກຣມ ຄອມພິວເຕີ, ເສດຖະສາດ ແລະ ຟີຊິກສາດ ໝັ່ນສຶກສາຢ່າງລະອຽດເດີ້!"
  }
};
