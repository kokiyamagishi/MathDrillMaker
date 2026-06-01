import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit38Data: UnitData = {
  unitNumber: 38,
  unitTitle: "ພາກທີ V - ບົດທີ 38: ວົງມົນ ແລະ ແຜ່ນມົນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ຝຶກທັກສະການຄິດໄລ່ຄວາມຍາວຮອບວົງມົນ L = 2πr (ຫຼື L = πd) ແລະ ເນື້ອທີ່ແຜ່ນມົນ S = πr² ພ້ອມທັງແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 168-175",
  subSections: [
    {
      title: "1. ຄວາມຍາວຮອບວົງມົນ (Circumference of a Circle)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ຄວາມຍາວຮອບວົງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມຍາວຮອບວົງມົນ L ຄິດໄລ່ໄດ້ຈາກລັດສະໝີ r ຫຼື ເສັ້ນຜ່ານສູນກາງ d:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຄິດໄລ່ຜ່ານລັດສະໝີ: "} <span className="math">{"L = 2 × π × r"}</span></div>
              <div>{"• ຄິດໄລ່ຜ່ານເສັ້ນຜ່ານສູນກາງ: "} <span className="math">{"L = π × d"}</span></div>
              <div>{"• ຕົວຢ່າງ: ລັດສະໝີ r = 5 cm ➔ L = 2 × π × 5 = 10π cm"}</div>
            </div>

            {/* Circle Dimension Guide SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດວົງມົນ: ລັດສະໝີ r ແລະ ເສັ້ນຜ່ານສູນກາງ d"}</span>
                <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "150px", height: "auto" }}>
                  {/* Circle path */}
                  <circle cx="100" cy="60" r="45" fill="none" stroke="#2E7D32" strokeWidth="2" />
                  
                  {/* Center O */}
                  <circle cx="100" cy="60" r="3" fill="#37474F" />
                  <text x="100" y="53" fill="#37474F" fontSize="8" textAnchor="middle" fontWeight="bold">{"O"}</text>

                  {/* Radius r (blue line) */}
                  <line x1="100" y1="60" x2="145" y2="60" stroke="#0288D1" strokeWidth="1.5" />
                  <text x="122" y="55" fill="#0288D1" fontSize="8" textAnchor="middle">{"r"}</text>

                  {/* Diameter d (orange dashed line) */}
                  <line x1="100" y1="60" x2="55" y2="60" stroke="#E65100" strokeWidth="1.5" strokeDasharray="2,2" />
                  <text x="77" y="55" fill="#E65100" fontSize="8" textAnchor="middle">{"r"}</text>
                  
                  {/* Overall d label arrow below */}
                  <line x1="55" y1="110" x2="145" y2="110" stroke="#757575" strokeWidth="1" />
                  <text x="100" y="105" fill="#757575" fontSize="7" textAnchor="middle">{"ເສັ້ນຜ່ານສູນກາງ d = 2r"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫົວໜ່ວຍຂອງຄວາມຍາວຮອບວົງມົນຈະແມ່ນ cm ຫຼື m, ເວລາຕອບໃຫ້ຕິດຄ່າ π ໄວ້ຕາມຄຳຖາມເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວຮອບວົງມົນ (ຕິດຄ່າ π ໃນຄຳຕອບ): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ວົງມົນມີລັດສະໝີ r = 5 cm. ຄວາມຍາວຮອບວົງມົນແມ່ນຈັກπ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"π cm"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ວົງມົນມີເສັ້ນຜ່ານສູນກາງ d = 8 cm. ຄວາມຍາວຮອບວົງມົນແມ່ນຈັກπ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"π cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ວົງມົນມີລັດສະໝີ r = 1.5 cm. ຄວາມຍາວຮອບວົງມົນແມ່ນຈັກπ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"π cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າຄວາມຍາວຮອບວົງມົນແມ່ນ 16π cm. ລັດສະໝີ r ຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າຄວາມຍາວຮອບວົງມົນແມ່ນ 20π cm. ເສັ້ນຜ່ານສູນກາງ d ຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເນື້ອທີ່ແຜ່ນມົນ (Area of a Disk)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ເນື້ອທີ່ແຜ່ນມົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເນື້ອທີ່ແຜ່ນມົນ S ແມ່ນຄິດໄລ່ຈາກລັດສະໝີ r ຍົກກຳລັງສອງ ຄູນໃຫ້ຄ່າ π:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <span className="math">{"S = π × r²"}</span><br />
              <span style={{ fontSize: "1.15rem", marginTop: "6px", display: "inline-block" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>{"ລັດສະໝີ r = 3 cm ➔ S = π × 3² = 9π cm²"}
              </span>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າໂຈດໃຫ້ເສັ້ນຜ່ານສູນກາງ d ມາ ຢ່າລືມຫານ 2 ເພື່ອຫາລັດສະໝີ r ກ່ອນແລ້ວຈຶ່ງຂຶ້ນກຳລັງສອງເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງແຜ່ນມົນລຸ່ມນີ້ (ຕິດຄ່າ π ໃນຄຳຕອບ): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ວົງມົນມີລັດສະໝີ r = 3 cm. ເນື້ອທີ່ແຜ່ນມົນແມ່ນຈັກπ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"π cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ວົງມົນມີລັດສະໝີ r = 10 cm. ເນື້ອທີ່ແຜ່ນມົນແມ່ນຈັກπ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"π cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ວົງມົນມີເສັ້ນຜ່ານສູນກາງ d = 8 cm. ເນື້ອທີ່ແຜ່ນມົນແມ່ນຈັກπ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"π cm²"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າເນື້ອທີ່ແຜ່ນມົນແມ່ນ 49π cm². ລັດສະໝີ r ຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າເນື້ອທີ່ແຜ່ນມົນແມ່ນ 64π cm². ເສັ້ນຜ່ານສູນກາງ d ຂອງມັນຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະຄວາມສຳພັນລະຫວ່າງຄວາມຍາວຮອບວົງ ແລະ ເນື້ອທີ່ແຜ່ນມົນຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຄິດໄລ່ເນື້ອທີ່ແຜ່ນມົນຈາກຄວາມຍາວຮອບວົງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຖ້າວົງມົນໜຶ່ງມີຄວາມຍາວຮອບວົງມົນແມ່ນ 12π cm. ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງແຜ່ນມົນນີ້ (ແມ່ນຈັກπ cm²). (2πr = 12π)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"π cm²"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ອັດຕາສ່ວນການປ່ຽນແປງຂອງເນື້ອທີ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຖ້າລັດສະໝີຂອງວົງມົນໜຶ່ງເພີ່ມຂຶ້ນ 2 ເທົ່າ (ຈາກ r ຫາ 2r). ຖາມວ່າເນື້ອທີ່ຂອງແຜ່ນມົນຈະເພີ່ມຂຶ້ນຈັກເທົ່າຈາກເນື້ອທີ່ເດີມ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເພີ່ມຂຶ້ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ເທົ່າ"}</span>
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
            {"ໂຈດບັນຫາເນື້ອທີ່ສວນວົງມົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ສວນດອກໄມ້ແຫ່ງໜຶ່ງເປັນຮູບວົງມົນມີເສັ້ນຜ່ານສູນກາງ 14 m (ລັດສະໝີ r = 7 m). ຖ້າໃຊ້ຄ່າປະມານ "} <span className="math">{"π ≈ "} <Fraction num="22" den="7" /></span>{", ຈົ່ງຊອກຫາເນື້ອທີ່ຂອງສວນດອກໄມ້ນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"m²"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຄວາມຍາວຮອບວົງລໍ້ລົດຖີບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ລໍ້ລົດຖີບມີລັດສະໝີ r = 35 cm. ຖ້າໃຊ້ຄ່າປະມານ "} <span className="math">{"π ≈ "} <Fraction num="22" den="7" /></span>{", ຈົ່ງຊອກຫາຄວາມຍາວຮອບວົງລໍ້ລົດຖີບນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມຍາວແມ່ນ"}</span>
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
          <span key="1">{"(1) 10 (L = 2 × π × 5 = 10π cm)"}</span>,
          <span key="2">{"(2) 8 (L = π × d = 8π cm)"}</span>,
          <span key="3">{"(3) 3 (L = 2 × π × 1.5 = 3π cm)"}</span>,
          <span key="4">{"(4) 8 (2πr = 16π ➔ r = 8 cm)"}</span>,
          <span key="5">{"(5) 20 (πd = 20π ➔ d = 20 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 9 (S = π × 3² = 9π cm²)"}</span>,
          <span key="7">{"(2) 100 (S = π × 10² = 100π cm²)"}</span>,
          <span key="8">{"(3) 16 (ລັດສະໝີ r = 4 cm ➔ S = π × 4² = 16π cm²)"}</span>,
          <span key="9">{"(4) 7 (πr² = 49π ➔ r² = 49 ➔ r = 7 cm)"}</span>,
          <span key="10">{"(5) 16 (πr² = 64π ➔ r = 8 cm ➔ d = 2 × 8 = 16 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"36 (2πr = 12π ➔ r = 6 ➔ S = π × 6² = 36π cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"4 (ເພາະວ່າ ເນື້ອທີ່ໃໝ່ = π × (2r)² = 4πr² ➔ ເພີ່ມຂຶ້ນ 4 ເທົ່າ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"154 (S = (22/7) × 7² = 22 × 7 = 154 m²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"220 (L = 2 × (22/7) × 35 = 22 × 10 = 220 cm)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການຄິດໄລ່ຄວາມຍາວຮອບວົງ ແລະ ເນື້ອທີ່ແຜ່ນມົນ ຈະຊ່ວຍໃຫ້ເຮົານຳໃຊ້ເຂົ້າໃນການແກ້ໂຈດບັນຫາຕົວຈິງໄດ້ຢ່າງຄ່ອງແຄ້ວເດີ້!"
  }
};
