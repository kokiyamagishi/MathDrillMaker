import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit46Data: UnitData = {
  unitNumber: 46,
  unitTitle: "ພາກທີ VII - ບົດທີ 46: ຫຼັກເກັນຕາແລັດ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກເກັນຕາແລັດ (Thales' Theorem) ເພື່ອຄິດໄລ່ຄວາມຍາວຂອງທ່ອນຊື່ໃນຮູບສາມແຈ ແລະ ຫຼັກການຄູນໄຂວ້ອັດຕາສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 211-215",
  subSections: [
    {
      title: "1. ການຊອກຫາທ່ອນຊື່ດ້ວຍຫຼັກເກັນຕາແລັດ",
      keyPoint: {
        title: "ຫຼັກເກັນຕາແລັດໃນຮູບສາມແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ທີ່ມີເສັ້ນຊື່ (MN) ຂະໜານກັບຂ້າງ (BC) (ໂດຍ M ຢູ່ເທິງ AB ແລະ N ຢູ່ເທິງ AC) ຈະໄດ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ອັດຕາສ່ວນຕາແລັດ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="AM" den="AB" /> {" = "} <Fraction num="AN" den="AC" /> {" = "} <Fraction num="MN" den="BC" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: ຖ້າ AM = 3 cm, AB = 9 cm ແລະ AN = 2 cm ➔ AC ແມ່ນຈັກ cm?"}</div>
              <div>{"➔ ວິທີຄິດ: ຕັ້ງສົມຜົນ "} <span className="math"><Fraction num="3" den="9" /> {" = "} <Fraction num="2" den="AC" /> ➔ {" AC = "} <Fraction num="9 × 2" den="3" /> {" = 6 cm."}</span></div>
            </div>

            {/* Thales Triangle SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", fontSize: "1.15rem", color: "#E65100" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດຫຼັກເກັນຕາແລັດ: MN // BC"}</span>
                <svg viewBox="0 0 360 240" style={{ width: "100%", maxWidth: "320px", height: "auto" }}>
                  {/* Triangle ABC */}
                  <polygon points="180,30 40,200 320,200" fill="none" stroke="#E65100" strokeWidth="4" />
                  
                  {/* Parallel segment MN */}
                  <line x1="96" y1="100" x2="264" y2="100" stroke="#1E88E5" strokeWidth="4" />
                  
                  {/* Parallel arrows */}
                  <path d="M 174,92 L 186,100 L 174,108" fill="none" stroke="#1E88E5" strokeWidth="3" />
                  <path d="M 174,192 L 186,200 L 174,208" fill="none" stroke="#E65100" strokeWidth="3" />

                  {/* Vertices */}
                  <circle cx="180" cy="30" r="6" fill="#E65100" />
                  <text x="175" y="18" fill="#E65100" fontSize="18" fontWeight="bold">{"A"}</text>

                  <circle cx="40" cy="200" r="6" fill="#E65100" />
                  <text x="20" y="215" fill="#E65100" fontSize="18" fontWeight="bold">{"B"}</text>

                  <circle cx="320" cy="200" r="6" fill="#E65100" />
                  <text x="330" y="215" fill="#E65100" fontSize="18" fontWeight="bold">{"C"}</text>

                  {/* Points M, N */}
                  <circle cx="96" cy="100" r="6" fill="#1E88E5" />
                  <text x="70" y="105" fill="#1E88E5" fontSize="18" fontWeight="bold">{"M"}</text>

                  <circle cx="264" cy="100" r="6" fill="#1E88E5" />
                  <text x="280" y="105" fill="#1E88E5" fontSize="18" fontWeight="bold">{"N"}</text>

                  {/* Labels */}
                  <text x="110" y="60" fill="#E65100" fontSize="16" textAnchor="end">{"AM = 3"}</text>
                  <text x="60" y="160" fill="#E65100" fontSize="16" textAnchor="end">{"MB = 6"}</text>
                  <text x="250" y="60" fill="#E65100" fontSize="16" textAnchor="start">{"AN = 2"}</text>
                  <text x="300" y="160" fill="#E65100" fontSize="16" textAnchor="start">{"NC = 4"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ອັດຕາສ່ວນລະຫວ່າງຂ້າງຂອງຮູບສາມແຈນ້ອຍ AMN ແລະ ຮູບສາມແຈໃຫຍ່ ABC ແມ່ນເທົ່າກັນສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວຂອງທ່ອນຊື່ທີ່ກຳນົດຕາມຫຼັກເກັນຕາແລັດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າ AM / AB = 1 / 3. ຖ້າ AN = 4 cm, ຄວາມຍາວ AC ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າ AM / AB = 2 / 5. ຖ້າ AC = 15 cm, ຄວາມຍາວ AN ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າ AM = 2 cm, AB = 6 cm. ຖ້າ MN = 3 cm, ຄວາມຍາວ BC ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າ AN / AC = 3 / 8. ຖ້າ BC = 24 cm, ຄວາມຍາວ MN ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າ AM / MB = 1 / 2 (ໝາຍຄວາມວ່າ AM / AB = 1 / 3). ຖ້າ AC = 30 cm, AN ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ທ່ອນຊື່ສ່ວນແບ່ງລະຫວ່າງກາງ (Calculating Sub-segment Ratios)",
      keyPoint: {
        title: "ອັດຕາສ່ວນຕາແລັດແບບສ່ວນແບ່ງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ອີງຕາມຫຼັກເກັນຕາແລັດ, ອັດຕາສ່ວນຂອງທ່ອນຊື່ສ່ວນແບ່ງເທິງສອງຂ້າງກໍເທົ່າກັນ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ອັດຕາສ່ວນສ່ວນແບ່ງ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="AM" den="MB" /> {" = "} <Fraction num="AN" den="NC" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#C62828" }}>{"• ຕົວຢ່າງ: ຖ້າ AM = 2 cm, MB = 4 cm, ແລະ AN = 3 cm ➔ NC ຈະແມ່ນຈັກ cm?"}</div>
              <div>{"➔ ວິທີຄິດ: "} <span className="math"><Fraction num="2" den="4" /> {" = "} <Fraction num="3" den="NC" /> ➔ {" NC = "} <Fraction num="4 × 3" den="2" /> {" = 6 cm."}</span></div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝັ່ນໃຊ້ຫຼັກການຄູນໄຂວ້ເພື່ອຊອກຫາຄ່າຂອງຕົວລັບໄດ້ງ່າຍຂຶ້ນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ສ່ວນແບ່ງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າ AM = 3 cm, MB = 6 cm. ຖ້າ AN = 4 cm, ຄວາມຍາວ NC ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າ AM = 5 cm, MB = 10 cm. ຖ້າ NC = 8 cm, ຄວາມຍາວ AN ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າ AM / MB = 3 / 4. ຖ້າ AN = 9 cm, ຄວາມຍາວ NC ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າ AM / MB = 2. ຖ້າ NC = 3 cm, ຄວາມຍາວ AN ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າ AM = 4 cm, AB = 12 cm (MB = 8 cm). ຖ້າ AN = 3 cm, NC ຈະແມ່ນຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ຫຼັກການແທນຄ່າ ແລະ ແກ້ສົມຜົນເພື່ອຊອກຫາຄ່າຂອງ 𝑥 ກ່ອນ ແລ້ວຈຶ່ງຕອບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການແກ້ສົມຜົນ Thales ຊອກຫາ 𝑥: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ AM = 𝑥, MB = 𝑥 + 3. AN = 4 cm, NC = 6 cm. ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥. (𝑥 / (𝑥+3) = 4 / 6 = 2 / 3)"}
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
              {"ການຄິດໄລ່ອັດຕາສ່ວນສາມຫຼ່ຽມຊ້ອນກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃຫ້ MN // BC. ຖ້າເນື້ອທີ່ຮູບສາມແຈ AMN ເທົ່າກັບ 10 cm². ຖ້າ AM / AB = 1 / 2 (MN ເປັນເສັ້ນເຄິ່ງກາງ). ເນື້ອທີ່ຮູບສາມແຈໃຫຍ່ ABC ຈະແມ່ນຈັກ cm²?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ ABC ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"cm²"}</span>
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
            {"ໂຈດບັນຫາການວັດແທກຄວາມສູງຂອງຕົ້ນໄມ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ້າວສົມພອນໃຊ້ຫຼັກເກັນຕາແລັດວັດແທກຄວາມສູງຕົ້ນໄມ້ ໂດຍປັກໄມ້ຍາວ 2 m ໄວ້ຂ້າງຕົ້ນໄມ້. ໄມ້ເກີດເງົາຍາວ 3 m. ໃນຂະນະດຽວກັນ, ເງົາຂອງຕົ້ນໄມ້ຍາວ 15 m. ຖາມວ່າຕົ້ນໄມ້ນັ້ນສູງຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຕົ້ນໄມ້ສູງ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດບັນຫາຂັ້ນໄດຂະໜານ (Parallel Rungs): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຂັ້ນໄດຮູບຊົງສາມແຈມີໄມ້ຂັ້ນຂະໜານກັນ. ຖ້າຂ້າງໄດດ້ານຊ້າຍ AB ຍາວ 120 cm ຖືກແບ່ງຢູ່ຈຸດ M ໂດຍ AM = 40 cm. ຖ້າຂ້າງໄດດ້ານຂວາ AC ມີຄວາມຍາວທັງໝົດ 150 cm ➔ ຄວາມຍາວ AN ຈະແມ່ນຈັກ cm?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: AN ="}</span>
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
          <span key="1">{"(1) 12 (ເພາະວ່າ AC = AN × 3 = 4 × 3 = 12 cm)"}</span>,
          <span key="2">{"(2) 6 (ເພາະວ່າ AN = AC × (2/5) = 15 × 0.4 = 6 cm)"}</span>,
          <span key="3">{"(3) 9 (ເພາະວ່າ BC = MN × (AB/AM) = 3 × (6/2) = 9 cm)"}</span>,
          <span key="4">{"(4) 9 (ເພາະວ່າ MN = BC × (AN/AC) = 24 × (3/8) = 9 cm)"}</span>,
          <span key="5">{"(5) 10 (ເພາະວ່າ AM/AB = 1/3 ➔ AN = AC / 3 = 30 / 3 = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 8 (ເພາະວ່າ AM/MB = 3/6 = 1/2 ➔ NC = 2 × AN = 8 cm)"}</span>,
          <span key="7">{"(2) 4 (ເພາະວ່າ AM/MB = 5/10 = 1/2 ➔ AN = NC / 2 = 8 / 2 = 4 cm)"}</span>,
          <span key="8">{"(3) 12 (ເພາະວ່າ NC = AN × (4/3) = 9 × 4 / 3 = 12 cm)"}</span>,
          <span key="9">{"(4) 6 (ເພາະວ່າ AN = NC × 2 = 3 × 2 = 6 cm)"}</span>,
          <span key="10">{"(5) 6 (ເພາະວ່າ MB = 12 - 4 = 8 cm ➔ AN/NC = AM/MB = 4/8 = 1/2 ➔ NC = 2 × AN = 6 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"6 (ເພາະວ່າ 𝑥 / (𝑥+3) = 2/3 ➔ 3𝑥 = 2𝑥 + 6 ➔ 𝑥 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"40 (ຍ້ອນວ່າອັດຕາສ່ວນຂ້າງແມ່ນ 1/2 ➔ ອັດຕາສ່ວນເນື້ອທີ່ແມ່ນ (1/2)² = 1/4 ➔ ເນື້ອທີ່ ABC = 4 × ເນື້ອທີ່ AMN = 40 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"10 (ເພາະວ່າ h/15 = 2/3 ➔ h = 15 × 2 / 3 = 10 m)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"50 (ເພາະວ່າ AM/AB = 40/120 = 1/3 ➔ AN/AC = 1/3 ➔ AN = 150 / 3 = 50 cm)"}</span>
        ]
      }
    ],
    advice: "ຫຼັກເກັນຕາແລັດແມ່ນຫຼັກການທອງຄຳໃນການແກ້ໂຈດເລຂາຄະນິດ ໝັ່ນສັງເກດອັດຕາສ່ວນຂອງທ່ອນຊື່ສະເໝີເດີ້!"
  }
};
