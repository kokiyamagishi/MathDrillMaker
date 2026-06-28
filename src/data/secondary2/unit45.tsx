import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
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
              <div style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                {"• ສູດຄວາມຍາວ: MN = "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="1" den="2" /> {" BC (ຫຼື MN = "} <Fraction num="BC" den="2" /> {")"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100", display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                {"• ຕົວຢ່າງ: ຖ້າຂ້າງພື້ນ BC = 12 cm ➔ "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
                  {"MN = "} <Fraction num="12" den="2" /> {" = 6 cm."}
                </span>
              </div>
            </div>

            {/* Triangle Midpoint SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                  {"ແຜນວາດທິດສະດີເມັດເຄິ່ງກາງ: MN = "} <Fraction num="1" den="2" /> {" BC ແລະ MN // BC"}
                </span>
                <svg viewBox="0 -10 360 280" style={{ width: "100%", maxWidth: "240px", height: "auto" }}>
                  {/* Triangle ABC */}
                  <polygon points="180,30 40,200 320,200" fill="none" stroke="#2E7D32" strokeWidth="4" />
                  
                  {/* Midpoint line MN */}
                  <line x1="110" y1="115" x2="250" y2="115" stroke="#D32F2F" strokeWidth="3" />
                  
                  {/* Points */}
                  <circle cx="180" cy="30" r="5" fill="#2E7D32" />
                  <text x="175" y="20" fill="#2E7D32" fontSize="18" fontWeight="bold">{"A"}</text>

                  <circle cx="40" cy="200" r="5" fill="#2E7D32" />
                  <text x="20" y="210" fill="#2E7D32" fontSize="18" fontWeight="bold">{"B"}</text>

                  <circle cx="320" cy="200" r="5" fill="#2E7D32" />
                  <text x="325" y="210" fill="#2E7D32" fontSize="18" fontWeight="bold">{"C"}</text>

                  {/* Midpoint M */}
                  <circle cx="110" cy="115" r="5" fill="#D32F2F" />
                  <text x="85" y="120" fill="#D32F2F" fontSize="18" fontWeight="bold">{"M"}</text>
                  {/* Midpoint N */}
                  <circle cx="250" cy="115" r="5" fill="#D32F2F" />
                  <text x="260" y="120" fill="#D32F2F" fontSize="18" fontWeight="bold">{"N"}</text>

                  {/* Tick Marks for Equal Segments */}
                  {/* AM = MB */}
                  <line x1="68" y1="72" x2="80" y2="68" stroke="#757575" strokeWidth="2" />
                  <line x1="138" y1="156" x2="150" y2="152" stroke="#757575" strokeWidth="2" />
                  
                  {/* AN = NC */}
                  <line x1="210" y1="68" x2="222" y2="72" stroke="#757575" strokeWidth="2" />
                  <line x1="212" y1="74" x2="224" y2="78" stroke="#757575" strokeWidth="2" />
                  <line x1="280" y1="152" x2="292" y2="156" stroke="#757575" strokeWidth="2" />
                  <line x1="282" y1="158" x2="294" y2="162" stroke="#757575" strokeWidth="2" />

                  {/* Dimension labels */}
                  <text x="180" y="85" fill="#D32F2F" fontSize="18" textAnchor="middle">{"MN = 6 cm"}</text>
                  <text x="180" y="228" fill="#2E7D32" fontSize="18" textAnchor="middle">{"BC = 12 cm"}</text>
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
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 12 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 18 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 25 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 7 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ຖ້າຂ້າງພື້ນ BC = 48 cm ➔ ທ່ອນຊື່ MN ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 7 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 4.5 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 13 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 0.8 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ຖ້າເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ MN = 21.5 cm ➔ ຂ້າງພື້ນ BC ຈະຍາວຈັກ cm?"}</span>
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
              {"ຖ້າເສັ້ນຮອບຮູບຂອງຮູບສາມແຈ ABC ແມ່ນ 36 cm. ຖ້າ M, N, P ແມ່ນຈຸດເຄິ່ງກາງຂອງສາມຂ້າງ. ຖາມວ່າເສັ້ນຮອບຮູບຂອງຮູບສາມແຈນ້ອຍ MNP ຈະແມ່ນຈັກ cm?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ເສັ້ນຮອບຮູບ MNP ແມ່ນ"}</span>
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
              {"ການຊອກຫາຂ້າງພື້ນຈາກສົມຜົນຕົວລັບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃຫ້ MN ແມ່ນເສັ້ນເຊື່ອມຈຸດເຄິ່ງກາງ. ຖ້າ MN = 2𝑥 - 3 ແລະ BC = 3𝑥. ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥. (BC = 2 × MN ➔ 3𝑥 = 2(2𝑥 - 3))"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            {"ໂຈດບັນຫາການຫາໄລຍະຫ່າງຂ້າມບຶງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເພື່ອວັດແທກໄລຍະຫ່າງ BC ຂ້າມບຶງນ້ຳແຫ່ງໜຶ່ງ, ນາຍຊ່າງໄດ້ກຳນົດຈຸດ A ແລະ ວັດແທກຈຸດເຄິ່ງກາງ M ຂອງ AB ແລະ N ຂອງ AC ໄດ້ໄລຍະຫ່າງ MN = 45 ແມັດ. ຖາມວ່າໄລຍະຫ່າງ BC ຕົວຈິງຂ້າມບຶງແມ່ນຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ໄລຍະຫ່າງ BC ແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາຮູບສີ່ແຈຂ້າງຂະໜານ ແລະ ເມັດເຄິ່ງກາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃຫ້ຮູບສາມແຈ ABC ທີ່ມີຂ້າງພື້ນ BC = 16 cm. ຖ້າ M, N ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB, AC. P, Q ແມ່ນຈຸດເຄິ່ງກາງຂອງ AM, AN. ຈົ່ງຊອກຫາຄວາມຍາວຂອງທ່ອນຊື່ PQ. (ຄິດໄລ່ຫາ MN ກ່ອນ ແລ້ວຈຶ່ງຫາ PQ)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: PQ ="}</span>
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
          <span key="12">{"6 (ເພາະວ່າ 3𝑥 = 2(2𝑥 - 3) ➔ 3𝑥 = 4𝑥 - 6 ➔ 𝑥 = 6)"}</span>
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
