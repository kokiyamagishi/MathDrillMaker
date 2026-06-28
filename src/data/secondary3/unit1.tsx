import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit1Data: UnitData = {
  unitNumber: 1,
  unitTitle: "ພາກທີ I - ບົດທີ 1: ເລກກຳລັງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມ, ຄຸນລັກສະນະພື້ນຖານຂອງເລກກຳລັງ, ເລກກຳລັງທີ່ມີຕົວຊີ້ບອກເປັນຈຳນວນຖ້ວນລົບ ແລະ ຖ້ວນບວກ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 1-6",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະພື້ນຖານຂອງເລກກຳລັງ",
      keyPoint: {
        title: "ນິຍາມ ແລະ ສູດຄຸນລັກສະນະເລກກຳລັງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເລກກຳລັງແມ່ນການຄູນຕົວເລກດຽວກັນຊ້ຳໆ. ໃຫ້ a ແລະ b ແມ່ນຈຳນວນຈິງ, m ແລະ n ແມ່ນຈຳນວນຖ້ວນ ຈະໄດ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຜົນຄູນ: "} <span className="math">{"aᵐ × aⁿ = aᵐ⁺ⁿ"}</span></div>
              <div>{"• ຜົນຫານ: "} <span className="math">{"aᵐ ÷ aⁿ = "} <Fraction num="aᵐ" den="aⁿ" /> {" = aᵐ⁻ⁿ (a ≠ 0)"}</span></div>
              <div>{"• ກຳລັງຊ້ອນ: "} <span className="math">{"(aᵐ)ⁿ = aᵐⁿ"}</span></div>
              <div>{"• ກຳລັງຂອງຜົນຄູນ: "} <span className="math">{"(a × b)ⁿ = aⁿ × bⁿ"}</span></div>
              <div>{"• ກຳລັງສູນ: "} <span className="math">{"a⁰ = 1 (a ≠ 0)"}</span></div>
            </div>

            {/* Exponent Visualization SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດສະແດງການເພີ່ມຂຶ້ນແບບທະວີຄູນ: 2ⁿ"}</span>
                <svg viewBox="0 0 400 180" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Grid Lines */}
                  <line x1="40" y1="160" x2="360" y2="160" stroke="#37474F" strokeWidth="3" />
                  <line x1="40" y1="20" x2="40" y2="160" stroke="#37474F" strokeWidth="3" />
                  
                  {/* Graph line representing 2^n */}
                  <path d="M 40,156 Q 160,150 280,110 T 360,30" fill="none" stroke="#E65100" strokeWidth="5" />
                  
                  {/* Nodes */}
                  <circle cx="40" cy="156" r="6" fill="#D32F2F" />
                  <text x="50" y="150" fill="#37474F" fontSize="16">{"2⁰ = 1"}</text>

                  <circle cx="160" cy="146" r="6" fill="#D32F2F" />
                  <text x="170" y="140" fill="#37474F" fontSize="16">{"2¹ = 2"}</text>

                  <circle cx="280" cy="110" r="6" fill="#D32F2F" />
                  <text x="290" y="100" fill="#37474F" fontSize="16">{"2² = 4"}</text>

                  <circle cx="360" cy="30" r="6" fill="#D32F2F" />
                  <text x="340" y="20" fill="#37474F" fontSize="16">{"2³ = 8"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ ຕົວເລກໃດກໍຕາມກຳລັງ 0 ຈະເທົ່າກັບ 1 ສະເໝີ (ຍົກເວັ້ນ 0⁰ ບໍ່ກຳນົດເດີ້!)",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ ແລະ ເຮັດໃຫ້ງ່າຍດາຍ ເລກກຳລັງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຜົນຄູນຂອງ "} <span className="math">{"3² × 3⁴"}</span> {" ຈະເທົ່າກັບ 3 ຍົກກຳລັງເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຜົນຫານຂອງ "} <span className="math">{"5⁶ ÷ 5²"}</span> {" ຈະເທົ່າກັບ 5 ຍົກກຳລັງເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຜົນຄິດໄລ່ຂອງ "} <span className="math">{"(2³)⁴"}</span> {" ຈະເທົ່າກັບ 2 ຍົກກຳລັງເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຄ່າຕົວຈິງຂອງສຳນວນເລກກຳລັງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"(2 × 3)³"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຄ່າຂອງ "} <span className="math">{"99⁰ + 1¹⁰"}</span> {" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເລກກຳລັງທີ່ມີຕົວຊີ້ບອກເປັນຈຳນວນຖ້ວນລົບ",
      keyPoint: {
        title: "ເລກກຳລັງກຳລັງລົບ ແລະ ຫານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຕົວຊີ້ບອກ (ກຳລັງ) ເປັນຈຳນວນຖ້ວນລົບ ມັນຈະປ່ຽນເປັນສ່ວນຫານສະເໝີ ຕາມສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ກຳລັງລົບ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"a⁻ⁿ = "} <Fraction num="1" den="aⁿ" /> {" (a ≠ 0)"}
                </span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ເລກສ່ວນກຳລັງລົບ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"("} <Fraction num="a" den="b" /> {")⁻ⁿ = ("} <Fraction num="b" den="a" /> {")ⁿ"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: 2⁻³ = "} <span className="math"><Fraction num="1" den="2³" /> {" = "} <Fraction num="1" den="8" /></span></div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຖ້າກຳລັງຍ້າຍຈາກເທິງລົງລຸ່ມ ຫຼື ລຸ່ມຂຶ້ນເທິງ ເຄື່ອງໝາຍຂອງກຳລັງຈະປ່ຽນເປັນກົງກັນຂ້າມເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງປ່ຽນເລກກຳລັງລຸ່ມນີ້ໃຫ້ເປັນສ່ວນສ່ວນທີ່ມີກຳລັງບວກ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ປ່ຽນ "} <span className="math">{"5⁻²"}</span> {" ໃຫ້ເປັນເລກສ່ວນ (ຈຳນວນພູດ = 1) ຈະໄດ້ພູດແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ປ່ຽນ "} <span className="math">{"10⁻³"}</span> {" ໃຫ້ເປັນເລກທົດສະນິຍົມ ຈະໄດ້ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ປ່ຽນ "} <span className="math">{"("} <Fraction num="2" den="3" /> {")⁻²"}</span> {" ໃຫ້ເປັນເລກສ່ວນປົກກະຕິ ຈະໄດ້ຄ່າສຸດທ້າຍແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຫາຄ່າສຸດທ້າຍຂອງສຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"2³ × 2⁻⁵"}</span> {" ຈະໄດ້ເລກສ່ວນແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຄິດໄລ່ຄ່າຂອງ "} <span className="math">{"3² ÷ 3⁻¹"}</span> {" ຈະໄດ້ຄ່າສຸດທ້າຍແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຈັດກຸ່ມຕົວເລກຖານດຽວກັນ ແລ້ວນຳໃຊ້ສູດບວກລົບກຳລັງໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການເຮັດໃຫ້ສຳນວນເລກກຳລັງງ່າຍຂຶ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງເຮັດໃຫ້ສຳນວນຕໍ່ໄປນີ້ງ່າຍດາຍທີ່ສຸດ: "} 
              <span className="math">
                <Fraction num="𝑥⁴ × 𝑦⁻²" den="𝑥⁻¹ × 𝑦³" />
              </span>
              {" (ຂຽນຄຳຕອບໃນຮູບແບບ 𝑥ᵃ 𝑦ᵇ ໂດຍຫາຄ່າຂອງ a + b)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a + b ="}</span>
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
              {"ການແກ້ສົມຜົນເລກກຳລັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນເລກກຳລັງ: "} 
              <span className="math">{"3²ˣ⁺¹ = 27"}</span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: 𝑥 ="}</span>
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
            {"ໂຈດບັນຫາວິທະຍາສາດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໄລຍະຫ່າງຈາກໂລກຫາສະໝຸດແມ່ນປະມານ 150,000,000 ກິໂລແມັດ. ຈົ່ງຂຽນໄລຍະຫ່າງນີ້ໃນຮູບແບບມາດຕະຖານວິທະຍາສາດ (a × 10ⁿ) ໂດຍໃຫ້ຊອກຫາຄ່າຂອງ n."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: n ="}</span>
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
            {"ໂຈດບັນຫາຈຸລິນຊີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຂະໜາດຂອງເຊື້ອແບັກທີເຣຍຊະນິດໜຶ່ງແມ່ນ 0.000004 ແມັດ. ຈົ່ງຂຽນຂະໜາດນີ້ໃນຮູບແບບມາດຕະຖານວິທະຍາສາດ (4 × 10ⁿ) ໂດຍໃຫ້ຊອກຫາຄ່າຂອງ n."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: n ="}</span>
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
          <span key="1">{"(1) 6 (ເພາະວ່າ 3² × 3⁴ = 3²⁺⁴ = 3⁶)"}</span>,
          <span key="2">{"(2) 4 (ເພາະວ່າ 5⁶ ÷ 5² = 5⁶⁻² = 5⁴)"}</span>,
          <span key="3">{"(3) 12 (ເພາະວ່າ (2³)⁴ = 2³ˣ⁴ = 2¹²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 216 (ເພາະວ່າ (2×3)³ = 6³ = 216)"}</span>,
          <span key="5">{"(2) 2 (ເພາະວ່າ 99⁰ = 1 ແລະ 1¹⁰ = 1 ➔ 1 + 1 = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"0 (ເພາະວ່າ 𝑥⁴/𝑥⁻¹ = 𝑥⁴⁻⁽⁻¹⁾ = 𝑥⁵, ແລະ 𝑦⁻²/𝑦³ = 𝑦⁻²⁻³ = 𝑦⁻⁵ ➔ ໄດ້ 𝑥⁵ 𝑦⁻⁵ ➔ a = 5, b = -5 ➔ a + b = 5 + (-5) = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"1 (ເພາະວ່າ 27 = 3³ ➔ 2𝑥 + 1 = 3 ➔ 2𝑥 = 2 ➔ 𝑥 = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"8 (ເພາະວ່າ 150,000,000 = 1.5 × 10⁸ ➔ n = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"-6 (ເພາະວ່າ 0.000004 = 4 × 10⁻⁶ ➔ n = -6)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນຄິດໄລ່ກຳລັງລົບ ແລະ ສັນຍະລັກວິທະຍາສາດ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດແກ້ໄຂໂຈດລະດັບສູງໃນຟີຊິກສາດ ແລະ ເຄມີສາດໄດ້ຢ່າງງ່າຍດາຍເດີ້!"
  }
};
