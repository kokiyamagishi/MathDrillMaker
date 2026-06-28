import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit6Data: UnitData = {
  unitNumber: 6,
  unitTitle: "ພາກທີ IV - ບົດທີ 14: ລະບົບສົມຜົນຂັ້ນໜຶ່ງທີ່ມີສອງຕົວລັບ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີການແກ້ລະບົບສົມຜົນຂັ້ນໜຶ່ງທີ່ມີສອງຕົວລັບ ໂດຍວິທີບວກພຶດຊະຄະນິດ, ວິທີຄັດແທນ ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 70-75",
  subSections: [
    {
      title: "1. ການແກ້ລະບົບສົມຜົນໂດຍວິທີບວກພຶດຊະຄະນິດ",
      keyPoint: {
        title: "ຫຼັກການບວກພຶດຊະຄະນິດເພື່ອຄັດຕົວລັບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ວິທີບວກພຶດຊະຄະນິດ ແມ່ນການຄູນຕົວເລກໃສ່ສົມຜົນເພື່ອເຮັດໃຫ້ສຳປະສິດຂອງຕົວລັບໜຶ່ງເທົ່າກັນ ຫຼື ກົງກັນຂ້າມ ແລ້ວເອົາມາບວກ ຫຼື ລົບກັນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຕົວຢ່າງ: ແກ້ລະບົບສົມຜົນ: "}</div>
              <div style={{ paddingLeft: "16px", fontStyle: "italic" }}>
                {"(1) "}<i>x</i>{" + "}<i>y</i>{" = 10"}<br />
                {"(2) "}<i>x</i>{" - "}<i>y</i>{" = 4"}
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"➔ ບວກສົມຜົນ (1) ແລະ (2) ຈະໄດ້: 2"}<i>x</i>{" = 14 ➔ "}<i>x</i>{" = 7."}</div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"➔ ແທນ "}<i>x</i>{" = 7 ໃສ່ (1) ຈະໄດ້: 7 + "}<i>y</i>{" = 10 ➔ "}<i>y</i>{" = 3."}</div>
            </div>

            {/* Geometric Intersection SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ການແກ້ລະບົບສົມຜົນທາງເລຂາຄະນິດ: ຈຸດຕັດກັນ (3, 2)"}</span>
                <svg viewBox="0 0 320 320" style={{ width: "100%", maxWidth: "260px", height: "auto" }}>
                  {/* Grid and Axes */}
                  <line x1="20" y1="260" x2="300" y2="260" stroke="#37474F" strokeWidth="3" />
                  <line x1="60" y1="20" x2="60" y2="300" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Line 1: x + y = 5 (y = 5 - x) */}
                  <line x1="60" y1="60" x2="260" y2="260" stroke="#F44336" strokeWidth="4" />
                  <text x="220" y="230" fill="#F44336" fontSize="14" fontWeight="bold"><i>x</i>{"+"}<i>y</i>{"=5"}</text>

                  {/* Line 2: x - y = 1 (y = x - 1) */}
                  <line x1="60" y1="220" x2="260" y2="20" stroke="#2196F3" strokeWidth="4" />
                  <text x="220" y="50" fill="#2196F3" fontSize="14" fontWeight="bold"><i>x</i>{"-"}<i>y</i>{"=1"}</text>

                  {/* Intersection point (3, 2) -> scaled coordinate */}
                  {/* x = 3 -> 30 + 3*20 = 90, y = 2 -> 130 - 2*20 = 90 */}
                  <circle cx="180" cy="180" r="9" fill="#D32F2F" />
                  <text x="190" y="170" fill="#D32F2F" fontSize="16" fontWeight="bold">{"P(3, 2)"}</text>
                  
                  {/* Labels */}
                  <text x="290" y="250" fill="#37474F" fontSize="16"><i>x</i></text>
                  <text x="70" y="36" fill="#37474F" fontSize="16"><i>y</i></text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີບວກພຶດຊະຄະນິດ ແມ່ນສະດວກທີ່ສຸດ ເມື່ອເຮົາເຫັນຕົວລັບທີ່ມີສຳປະສິດກົງກັນຂ້າມກັນ (+y ແລະ -y) ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງແກ້ລະບົບສົມຜົນຕໍ່ໄປນີ້ໂດຍວິທີບວກພຶດຊະຄະນິດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>x</i>{" + "}<i>y</i>{" = 10"}</span> {" ແລະ "} <span className="math"><i>x</i>{" - "}<i>y</i>{" = 4"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>x</i>{"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"2"}<i>x</i>{" + "}<i>y</i>{" = 11"}</span> {" ແລະ "} <span className="math"><i>x</i>{" - "}<i>y</i>{" = 1"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>y</i>{"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກ "} <span className="math">{"3"}<i>x</i>{" + 2"}<i>y</i>{" = 12"}</span> {" ແລະ "} <span className="math"><i>x</i>{" + 2"}<i>y</i>{" = 8"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>x</i>{"?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຖືກຕ້ອງ ແລະ ສຳປະສິດຂອງສົມຜົນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄູ່ພິກັດ (3, 2) ແມ່ນໃຈຜົນຂອງລະບົບສົມຜົນ "} <span className="math"><i>x</i>{" + 2"}<i>y</i>{" = 7"}</span> {" ແລະ "} <span className="math">{"2"}<i>x</i>{" - "}<i>y</i>{" = 4"}</span> {" ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າ (2, 5) ແມ່ນໃຈຜົນຂອງ "} <span className="math">{"ax + "}<i>y</i>{" = 9"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ a?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ລະບົບສົມຜົນໂດຍວິທີຄັດແທນ",
      keyPoint: {
        title: "ຫຼັກການຄັດແທນເພື່ອປ່ຽນເປັນສົມຜົນຕົວລັບດຽວ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ວິທີຄັດແທນ ແມ່ນການຖອນເອົາຕົວລັບໜຶ່ງຈາກສົມຜົນທີໜຶ່ງ ແລ້ວເອົາໄປແທນໃສ່ສົມຜົນທີສອງ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຕົວຢ່າງ: ແກ້ລະບົບສົມຜົນ: "}</div>
              <div style={{ paddingLeft: "16px", fontStyle: "italic" }}>
                {"(1) "}<i>y</i>{" = 2"}<i>x</i><br />
                {"(2) "}<i>x</i>{" + "}<i>y</i>{" = 9"}
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"➔ ແທນ (1) ໃສ່ (2) ຈະໄດ້: "}<i>x</i>{" + 2"}<i>x</i>{" = 9 ➔ 3"}<i>x</i>{" = 9 ➔ "}<i>x</i>{" = 3."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"➔ ຄິດໄລ່ "}<i>y</i>{" ຈາກ (1): "}<i>y</i>{" = 2(3) = 6."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີຄັດແທນ ຈະເໝາະສົມທີ່ສຸດ ເມື່ອມີສົມຜົນໃດໜຶ່ງທີ່ໄດ້ຖອນຕົວລັບໄວ້ແລ້ວ ເຊັ່ນ y = ... ຫຼື x = ... ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງແກ້ລະບົບສົມຜົນຕໍ່ໄປນີ້ໂດຍວິທີຄັດແທນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>y</i>{" = 2"}<i>x</i></span> {" ແລະ "} <span className="math"><i>x</i>{" + "}<i>y</i>{" = 9"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>x</i>{"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>x</i>{" = "}<i>y</i>{" - 3"}</span> {" ແລະ "} <span className="math">{"2"}<i>x</i>{" + "}<i>y</i>{" = 12"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>y</i>{"?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຈາກ "} <span className="math"><i>y</i>{" = 3"}<i>x</i>{" - 1"}</span> {" ແລະ "} <span className="math"><i>x</i>{" + "}<i>y</i>{" = 7"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>x</i>{"?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຜົນບວກ ຫຼື ຜົນຄູນຂອງໃຈຜົນ ("}<i>x</i>{", "}<i>y</i>{"): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math"><i>x</i>{" + "}<i>y</i></span> {" ຖ້າໃຈຜົນແມ່ນ "} <span className="math"><i>x</i>{" = 10, "}<i>y</i>{" = 5"}</span> {". ຜົນບວກແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math"><i>x</i>{" × "}<i>y</i></span> {" ຖ້າໃຈຜົນແມ່ນ "} <span className="math"><i>x</i>{" = 3, "}<i>y</i>{" = 5"}</span> {". ຜົນຄູນແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດຄູນໄຂວ້ ຫຼື ກຳຈັດສ່ວນເສຍສ່ວນອອກກ່ອນ ແລ້ວຈຶ່ງຄິດໄລ່ຫາໃຈຜົນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ລະບົບສົມົນຂັ້ນສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ລະບົບສົມຜົນຕໍ່ໄປນີ້: "} <span className="math">{"2"}<i>x</i>{" + 3"}<i>y</i>{" = 13"}</span> {" ແລະ "} <span className="math">{"3"}<i>x</i>{" - "}<i>y</i>{" = 3"}</span> {". ແລ້ວຊອກຫາຄ່າຂອງ "} <span className="math"><i>x</i>{" + "}<i>y</i></span> {"."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: "}<i>x</i>{" + "}<i>y</i>{" ="}</span>
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
              {"ລະບົບສົມຜົນທີ່ມີເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງແກ້ລະບົບສົມຜົນ: "} 
              <span className="math">
                <Fraction num="x" den="2" /> {" + "} <Fraction num="y" den="3" /> {" = 4"}
              </span>
              {" ແລະ "} <span className="math"><i>x</i>{" - "}<i>y</i>{" = 3"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "}<i>x</i>{". (ຄຳແນະນຳ: ຄູນ 6 ໃສ່ສົມຜົນທຳອິດ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: "}<i>x</i>{" ="}</span>
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
            {"ໂຈດບັນຫາຊອກຫາຕົວເລກ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຜົນບວກຂອງສອງຈຳນວນແມ່ນ 20, ແລະ ຜົນລົບຂອງພວກມັນແມ່ນ 6. ຈົ່ງຊອກຫາຈຳນວນທີ່ມີຄ່າຫຼາຍກວ່າ. (ໃຫ້ສົມຜົນ "}<i>x</i>{" + "}<i>y</i>{" = 20, "}<i>x</i>{" - "}<i>y</i>{" = 6 ➔ ຊອກຫາ "}<i>x</i>{")"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນທີ່ຫຼາຍກວ່າແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາການຊື້ເຄື່ອງຂາຍເຄື່ອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ລາຄາລວມຂອງສໍດຳ 3 ກ້ານ ແລະ ປຶ້ມຂຽນ 2 ຫົວ ແມ່ນ 12,000 ກີບ. ແຕ່ລາຄາສໍດຳ 1 ກ້ານ ແລະ ປຶ້ມຂຽນ 2 ຫົວ ແມ່ນ 8,000 ກີບ. ຈົ່ງຊອກຫາລາຄາຂອງປຶ້ມຂຽນ 1 ຫົວ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ລາຄາປຶ້ມຂຽນ 1 ຫົວແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ກີບ"}</span>
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
          <span key="1">{"(1) 7 (ເພາະວ່າ 2"}<i>x</i>{" = 14 ➔ "}<i>x</i>{" = 7)"}</span>,
          <span key="2">{"(2) 3 (ເພາະວ່າລົບສົມຜົນໄດ້ "}<i>x</i>{" + 2"}<i>y</i>{" = 10 ➔ 3"}<i>x</i>{" = 15 ➔ "}<i>x</i>{" = 4 ➔ "}<i>y</i>{" = 3)"}</span>,
          <span key="3">{"(3) 2 (ເພາະວ່າລົບສົມຜົນໄດ້ 2"}<i>x</i>{" = 4 ➔ "}<i>x</i>{" = 2)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) ແມ່ນ (ເພາະວ່າ 3 + 2(2) = 7 ແລະ 2(3) - 2 = 4)"}</span>,
          <span key="5">{"(2) 2 (ເພາະວ່າ a(2) + 5 = 9 ➔ 2a = 4 ➔ a = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"5 (ເພາະວ່າ 2"}<i>x</i>{" + 3(3"}<i>x</i>{"-3) = 13 ➔ 11"}<i>x</i>{" = 22 ➔ "}<i>x</i>{" = 2 ➔ "}<i>y</i>{" = 3 ➔ "}<i>x</i>{" + "}<i>y</i>{" = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"6 (ເພາະວ່າ 3"}<i>x</i>{" + 2"}<i>y</i>{" = 24. ຍ້ອນວ່າ "}<i>y</i>{" = "}<i>x</i>{" - 3 ➔ 3"}<i>x</i>{" + 2("}<i>x</i>{"-3) = 24 ➔ 5"}<i>x</i>{" = 30 ➔ "}<i>x</i>{" = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"13 (ເພາະວ່າ 2"}<i>x</i>{" = 26 ➔ "}<i>x</i>{" = 13)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"3,000 (ໃຫ້ "}<i>x</i>{" ແມ່ນລາຄາສໍດຳ, "}<i>y</i>{" ແມ່ນລາຄາປຶ້ມ ➔ 3"}<i>x</i>{" + 2"}<i>y</i>{" = 12,000 ແລະ "}<i>x</i>{" + 2"}<i>y</i>{" = 8,000 ➔ 2"}<i>x</i>{" = 4,000 ➔ "}<i>x</i>{" = 2,000 ➔ "}<i>y</i>{" = 3,000 ກີບ)"}</span>
        ]
      }
    ],
    advice: "ການແກ້ລະບົບສົມຜົນຊ່ວຍໃຫ້ເຮົາສາມາດຄິດໄລ່ຫາຄ່າຂອງສິ່ງຂອງສອງຢ່າງທີ່ບໍ່ຮູ້ລາຄາໄດ້ຢ່າງຊັດເຈນ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
