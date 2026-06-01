import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit45Data: UnitData = {
  unitNumber: 45,
  unitTitle: "ພາກທີ VII - ບົດທີ 45: ເສັ້ນຊື່ຜ່ານເມັດເຄິ່ງກາງຂອງສອງຂ້າງຂອງຮູບສາມແຈ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ທິດສະດີເສັ້ນຊື່ເຊື່ອມຕໍ່ຈຸດກາງຂອງສອງຂ້າງ (Midpoint Theorem) ເຊິ່ງຂະໜານກັບຂ້າງທີສາມ ແລະ ເທົ່າເຄິ່ງໜຶ່ງຂອງມັນສະເໝີ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 206-210",
  subSections: [
    {
      title: "1. ການຊອກຫາຄວາມຍາວທ່ອນຊື່ເຊື່ອມຈຸດເຄິ່ງກາງ (Finding the Midpoint Segment MN)",
      keyPoint: {
        title: "ທິດສະດີເມັດເຄິ່ງກາງໃນຮູບສາມແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ຖ້າ M ແລະ N ແມ່ນຈຸດເຄິ່ງກາງຂອງຂ້າງ AB ແລະ AC ຕາມລໍາດັບ ຈະໄດ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold" }}>{"• ສາຍພົວພັນຂະໜານ: MN // BC"}</div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຄວາມຍາວ: MN = "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="1" den="2" /> {" BC (ຫຼື MN = BC / 2)"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ຕົວຢ່າງ: ຖ້າຂ້າງພື້ນ BC = 12 cm ➔ MN = 12 / 2 = 6 cm."}</div>
            </div>

            {/* Triangle Midpoint SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດທິດສະດີເມັດເຄິ່ງກາງ: MN = 1/2 BC ແລະ MN // BC"}</span>
                <svg viewBox="0 0 180 120" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  {/* Triangle ABC */}
                  <polygon points="90,15 20,100 160,100" fill="none" stroke="#2E7D32" strokeWidth="2.5" />
                  
                  {/* Midpoint line MN */}
                  <line x1="55" y1="57.5" x2="125" y2="57.5" stroke="#D32F2F" strokeWidth="2" />
                  
                  {/* Points */}
                  <circle cx="90" cy="15" r="3" fill="#2E7D32" />
                  <text x="86" y="9" fill="#2E7D32" fontSize="9" fontWeight="bold">{"A"}</text>

                  <circle cx="20" cy="100" r="3" fill="#2E7D32" />
                  <text x="10" y="105" fill="#2E7D32" fontSize="9" fontWeight="bold">{"B"}</text>

                  <circle cx="160" cy="100" r="3" fill="#2E7D32" />
                  <text x="164" y="105" fill="#2E7D32" fontSize="9" fontWeight="bold">{"C"}</text>

                  {/* Midpoint M */}
                  <circle cx="55" cy="57.5" r="3" fill="#D32F2F" />
                  <text x="42" y="58" fill="#D32F2F" fontSize="8" fontWeight="bold">{"M"}</text>
                  {/* Midpoint N */}
                  <circle cx="125" cy="57.5" r="3" fill="#D32F2F" />
                  <text x="130" y="58" fill="#D32F2F" fontSize="8" fontWeight="bold">{"N"}</text>

                  {/* Tick Marks for Equal Segments */}
                  {/* AM = MB */}
                  <line x1="34" y1="36" x2="40" y2="34" stroke="#757575" strokeWidth="1" />
                  <line x1="69" y1="78" x2="75" y2="76" stroke="#757575" strokeWidth="1" />
                  
                  {/* AN = NC */}
                  <line x1="105" y1="34" x2="111" y2="36" stroke="#757575" strokeWidth="1" />
                  <line x1="106" y1="37" x2="112" y2="39" stroke="#757575" strokeWidth="1" />
                  <line x1="140" y1="76" x2="146" y2="78" stroke="#757575" strokeWidth="1" />
                  <line x1="141" y1="79" x2="147" y2="81" stroke="#757575" strokeWidth="1" />

                  {/* Dimension labels */}
                  <text x="90" y="52" fill="#D32F2F" fontSize="8" textAnchor="middle">{"MN = 6 cm"}</text>
                  <text x="90" y="112" fill="#2E7D32" fontSize="8" textAnchor="middle">{"BC = 12 cm"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ທ່ອນຊື່ MN ທີ່ເຊື່ອມຕໍ່ຈຸດເຄິ່ງກາງ ຈະຂະໜານກັບຂ້າງພື້ນ BC ແລະ ຍາວເທົ່າເຄິ່ງໜຶ່ງຂອງ BC ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ MN ທີ່ເຊື່ອມຕໍ່ຈຸດເຄິ່ງກາງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 12 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 18 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 25 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 7 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 48 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຊອກຫາຄວາມຍາວຂອງຂ້າງພື້ນ (Finding the Base Segment BC)",
      keyPoint: {
        title: "ການຄິດໄລ່ຂ້າງພື້ນຈາກເສັ້ນເຄິ່ງກາງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນທາງກົງກັນຂ້າມ, ເມື່ອຮູ້ຄວາມຍາວຂອງເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN. ເຮົາຊອກຂ້າງພື້ນ BC ໄດ້ໂດຍໃຊ້ສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "bold" }}>{"• ສູດຄິດໄລ່: BC = 2 × MN"}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຖ້າ MN = 5 cm ➔ BC = 2 × 5 = 10 cm."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂ້າງພື້ນ BC ຈະຍາວເປັນສອງເທົ່າຂອງເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN ສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງພື້ນ BC ຈາກເງື່ອນໄຂທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 7 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 4.5 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 13 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 0.8 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 21.5 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຢ່າລືມວ່າເສັ້ນຮອບຮູບຂອງຮູບສາມແຈນ້ອຍ AMN ຈະເທົ່າກັບເຄິ່ງໜຶ່ງຂອງເສັ້ນຮອບຮູບຂອງຮູບສາມແຈໃຫຍ່ ABC ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການພົວພັນເສັ້ນຮອບຮູບ (Perimeter Relation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຖ້າເສັ້ນຮອບຮູບຂອງຮູບສາມແຈ ABC ແມ່ນ 36 cm. ຖ້າ M, N, P ແມ່ນຈຸດເຄິ່ງກາງຂອງສາມຂ້າງ. ຖາມວ່າເສັ້ນຮອບຮູບຂອງຮູບສາມແຈນ້ອຍ MNP ຈະແມ່ນຈັກ cm?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເສັ້ນຮອບຮູບ MNP ແມ່ນ"}</span>
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
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຂ້າງພື້ນຈາກສົມຜົນຕົວລັບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃຫ້ MN ແມ່ນເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ. ຖ້າ MN = 2x - 3 ແລະ BC = 3x. ຈົ່ງຊອກຫາຄ່າຂອງ x. (BC = 2 × MN ➔ 3x = 2(2x - 3))"}
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
            {"ໂຈດບັນຫາການຫາໄລຍະຫ່າງຂ້າມບຶງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ເພື່ອວັດແທກໄລຍະຫ່າງ BC ຂ້າມບຶງນ້ຳແຫ່ງໜຶ່ງ, ນາຍຊ່າງໄດ້ກຳນົດຈຸດ A ແລະ ວັດແທກຈຸດເຄິ່ງກາງ M ຂອງ AB ແລະ N ຂອງ AC ໄດ້ໄລຍະຫ່າງ MN = 45 ແມັດ. ຖາມວ່າໄລຍະຫ່າງ BC ຕົວຈິງຂ້າມບຶງແມ່ນຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄລຍະຫ່າງ BC ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ໂຈດບັນຫາຮູບສີ່ແຈຂ້າງຂະໜານ ແລະ ເມັດເຄິ່ງກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃຫ້ຮູບສາມແຈ ABC ທີ່ມີຂ້າງພື້ນ BC = 16 cm. ຖ້າ M, N ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB, AC. P, Q ແມ່ນຈຸດເຄິ່ງກາງຂອງ AM, AN. ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ PQ. (ຄິດໄລ່ຫາ MN ກ່ອນ ແລ້ວຈຶ່ງຫາ PQ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: PQ ="}</span>
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
          <span key="1">{"(1) 6 (ເພາະວ່າ MN = 12 / 2 = 6 cm)"}</span>,
          <span key="2">{"(2) 9 (ເພາະວ່າ MN = 18 / 2 = 9 cm)"}</span>,
          <span key="3">{"(3) 12.5 (ເພາະວ່າ MN = 25 / 2 = 12.5 cm)"}</span>,
          <span key="4">{"(4) 3.5 (ເພາະວ່າ MN = 7 / 2 = 3.5 cm)"}</span>,
          <span key="5">{"(5) 24 (ເພາະວ່າ MN = 48 / 2 = 24 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 14 (ເພາະວ່າ BC = 2 × 7 = 14 cm)"}</span>,
          <span key="7">{"(2) 9 (ເພາະວ່າ BC = 2 × 4.5 = 9 cm)"}</span>,
          <span key="8">{"(3) 26 (ເພາະວ່າ BC = 2 × 13 = 26 cm)"}</span>,
          <span key="9">{"(4) 1.6 (ເພາະວ່າ BC = 2 × 0.8 = 1.6 cm)"}</span>,
          <span key="10">{"(5) 43 (ເພາະວ່າ BC = 2 × 21.5 = 43 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"18 (ເພາະວ່າແຕ່ລະຂ້າງຂອງ MNP ເທົ່າເຄິ່ງໜຶ່ງຂອງ ABC ➔ ເສັ້ນຮອບຮູບກໍເທົ່າເຄິ່ງໜຶ່ງ ➔ 36 / 2 = 18 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"6 (ເພາະວ່າ 3x = 2(2x - 3) ➔ 3x = 4x - 6 ➔ x = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"90 (ເພາະວ່າ BC = 2 × MN = 2 × 45 = 90 ແມັດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"4 (ເພາະວ່າ MN = 16 / 2 = 8 cm ➔ PQ = MN / 2 = 8 / 2 = 4 cm)"}</span>
        ]
      }
    ],
    advice: "ທິດສະດີເມັດເຄິ່ງກາງຂອງຮູບສາມແຈ ຊ່ວຍໃຫ້ເຮົາສາມາດແກ້ໄຂໂຈດວັດແທກຕົວຈິງໃນຊີວິດປະຈຳວັນໄດ້ຢ່າງສະດວກສະບາຍເດີ້!"
  }
};
