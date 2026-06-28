import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit47Data: UnitData = {
  unitNumber: 47,
  unitTitle: "ພາກທີ VII - ບົດທີ 47: ຮູບສາມແຈຄ້າຍຄືກັນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຫຼັກການຂອງຮູບສາມແຈຄ້າຍຄືກັນ (Similar Triangles), ການຊອກຫາອັດຕາສ່ວນຄ້າຍຄື k ແລະ ການຄິດໄລ່ຂ້າງທີ່ກ່ຽວຂ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 216-222",
  subSections: [
    {
      title: "1. ການຊອກຫາຂ້າງຂອງຮູບສາມແຈໃຫຍ່ (Calculating Sides of the Scaled Triangle)",
      keyPoint: {
        title: "ຫຼັກການຮູບສາມແຈຄ້າຍຄືກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສອງຮູບສາມແຈ ABC ແລະ A'B'C' ຄ້າຍຄືກັນດ້ວຍອັດຕາສ່ວນຄ້າຍຄື k (ຈາກນ້ອຍຫາໃຫຍ່) ຈະໄດ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ອັດຕາສ່ວນຄ້າຍຄື: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="A'B'" den="AB" /> {" = "} <Fraction num="B'C'" den="BC" /> {" = "} <Fraction num="C'A'" den="CA" /> {" = k"}
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#E65100" }}>{"• ສູດຊອກຂ້າງໃຫຍ່: A'B' = k × AB"}</div>
              <div>{"• ຕົວຢ່າງ: ຖ້າ k = 3, ຂ້າງ AB = 4 cm ➔ ຂ້າງ A'B' = 3 × 4 = 12 cm."}</div>
            </div>

            {/* Similar Triangles SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດຮູບສາມແຈຄ້າຍຄືກັນ (ອັດຕາສ່ວນຄ້າຍຄື k = 2)"}</span>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "24px" }}>
                  {/* Smaller Triangle ABC */}
                  <svg viewBox="0 0 80 70" style={{ width: "80px", height: "auto" }}>
                    <polygon points="40,10 10,60 70,60" fill="none" stroke="#2E7D32" strokeWidth="2" />
                    <text x="36" y="8" fill="#2E7D32" fontSize="7" fontWeight="bold">{"A"}</text>
                    <text x="3" y="65" fill="#2E7D32" fontSize="7" fontWeight="bold">{"B"}</text>
                    <text x="72" y="65" fill="#2E7D32" fontSize="7" fontWeight="bold">{"C"}</text>
                    <text x="40" y="55" fill="#2E7D32" fontSize="6" textAnchor="middle">{"BC = 3"}</text>
                    <text x="20" y="35" fill="#2E7D32" fontSize="6">{"2.5"}</text>
                    <text x="52" y="35" fill="#2E7D32" fontSize="6">{"2.5"}</text>
                  </svg>

                  {/* Larger Triangle A'B'C' */}
                  <svg viewBox="0 0 140 120" style={{ width: "80px", height: "auto" }}>
                    <polygon points="70,10 10,100 130,100" fill="none" stroke="#D32F2F" strokeWidth="2" />
                    <text x="66" y="8" fill="#D32F2F" fontSize="8" fontWeight="bold">{"A'"}</text>
                    <text x="3" y="108" fill="#D32F2F" fontSize="8" fontWeight="bold">{"B'"}</text>
                    <text x="132" y="108" fill="#D32F2F" fontSize="8" fontWeight="bold">{"C'"}</text>
                    <text x="70" y="92" fill="#D32F2F" fontSize="7" textAnchor="middle">{"B'C' = 6 (3 × 2)"}</text>
                    <text x="32" y="55" fill="#D32F2F" fontSize="7">{"5"}</text>
                    <text x="95" y="55" fill="#D32F2F" fontSize="7">{"5"}</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ທຸກໆຂ້າງຂອງຮູບສາມແຈໃຫຍ່ ຈະເທົ່າກັບຂ້າງທີ່ກົງກັນຂອງຮູບສາມແຈນ້ອຍຄູນໃຫ້ k ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງຂອງຮູບສາມແຈໃຫຍ່ A'B'C': "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າ k = 3 ແລະ ຂ້າງ AB = 4 cm ➔ ຂ້າງ A'B' ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າ k = 2.5 ແລະ ຂ້າງ BC = 8 cm ➔ ຂ້າງ B'C' ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າ k = 4 ແລະ ຂ້າງ CA = 3.5 cm ➔ ຂ້າງ C'A' ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າ k = 1.5 ແລະ ຂ້າງ AB = 10 cm ➔ ຂ້າງ A'B' ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າ k = 5 ແລະ ຂ້າງ BC = 12 cm ➔ ຂ້າງ B'C' ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຊອກຫາຂ້າງຂອງຮູບສາມແຈນ້ອຍ (Calculating Sides of the Original Triangle)",
      keyPoint: {
        title: "ການຄິດໄລ່ຂ້າງນ້ອຍຈາກຂ້າງໃຫຍ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນທາງກົງກັນຂ້າມ, ເມື່ອຮູ້ຄວາມຍາວຂ້າງໃຫຍ່ A'B' ແລະ ອັດຕາສ່ວນຄ້າຍຄື k. ເຮົາຊອກຂ້າງນ້ອຍ AB ໄດ້ໂດຍໃຊ້ສູດ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດຊອກຂ້າງນ້ອຍ: AB = "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="A'B'" den="k" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຖ້າ k = 2, ຂ້າງ A'C' = 10 cm ➔ ຂ້າງ AC = 10 / 2 = 5 cm."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫານຂ້າງຂອງຮູບສາມແຈໃຫຍ່ດ້ວຍອັດຕາສ່ວນຄ້າຍຄື k ເພື່ອຊອກຫາຂ້າງຂອງຮູບສາມແຈນ້ອຍເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງຂອງຮູບສາມແຈນ້ອຍ ABC: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span>{"ຖ້າ k = 2 ແລະ ຂ້າງ A'C' = 10 cm ➔ ຂ້າງ AC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span>{"ຖ້າ k = 3 ແລະ ຂ້າງ B'C' = 18 cm ➔ ຂ້າງ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span>{"ຖ້າ k = 4 ແລະ ຂ້າງ A'B' = 14 cm ➔ ຂ້າງ AB ຈະຍາວຈັກ cm? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span>{"ຖ້າ k = 1.5 ແລະ ຂ້າງ B'C' = 9 cm ➔ ຂ້າງ BC ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span>{"ຖ້າ k = 5 ແລະ ຂ້າງ C'A' = 35 cm ➔ ຂ້າງ CA ຈະຍາວຈັກ cm?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຢ່າລືມວ່າອັດຕາສ່ວນເສັ້ນຮອບຮູບແມ່ນເທົ່າກັບ k ແລະ ອັດຕາສ່ວນເນື້ອທີ່ແມ່ນເທົ່າກັບ k² ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ອັດຕາສ່ວນເນື້ອທີ່ຂອງຮູບສາມແຈຄ້າຍຄືກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າອັດຕາສ່ວນຄ້າຍຄືລະຫວ່າງສອງຮູບສາມແຈແມ່ນ k = 3. ຖ້າຮູບສາມແຈນ້ອຍມີເນື້ອທີ່ 8 cm². ຖາມວ່າຮູບສາມແຈໃຫຍ່ຈະມີເນື້ອທີ່ຈັກ cm²?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"cm²"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາອັດຕາສ່ວນຄ້າຍຄື k ຈາກເສັ້ນຮອບຮູບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຮູບສາມແຈ ABC ມີເສັ້ນຮອບຮູບ 18 cm, ແລະ ຮູບສາມແຈ A'B'C' ມີເສັ້ນຮອບຮູບ 54 cm. ຈົ່ງຊອກຫາອັດຕາສ່ວນຄ້າຍຄື k ຈາກ ABC ຫາ A'B'C'."}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: k ="}</span>
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
            {"ໂຈດບັນຫາການຫາໄລຍະຫ່າງດ້ວຍຮູບສາມແຈຄ້າຍຄືກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເພື່ອຫາຄວາມກວ້າງຂອງແມ່ນ້ຳ, ນັກຮຽນໄດ້ຕັ້ງຮູບສາມແຈຄ້າຍຄືກັນ ໂດຍມີອັດຕາສ່ວນ k = 5. ຖ້າຂ້າງແທກໄດ້ໃນຮູບນ້ອຍແມ່ນ 12 ແມັດ. ຖາມວ່າຄວາມກວ້າງຂອງແມ່ນ້ຳຕົວຈິງ (ຂ້າງທີ່ກົງກັນໃນຮູບໃຫຍ່) ຈະແມ່ນຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຄວາມກວ້າງແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາການຂະຫຍາຍຮູບພາບ (Photo Scaling): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຮູບສາມແຈ ABC ຖືກຂະຫຍາຍຮູບພາບໄປເປັນ A'B'C' ໂດຍໃຫ້ຂ້າງ BC = 5 cm ປ່ຽນເປັນ B'C' = 15 cm. ຖ້າຂ້າງ AC = 6 cm, ຖາມວ່າຂ້າງ A'C' ຫຼັງຂະຫຍາຍແລ້ວຈະຍາວຈັກ cm?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: A'C' ="}</span>
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
          <span key="1">{"(1) 12 (ເພາະວ່າ 3 × 4 = 12 cm)"}</span>,
          <span key="2">{"(2) 20 (ເພາະວ່າ 2.5 × 8 = 20 cm)"}</span>,
          <span key="3">{"(3) 14 (ເພາະວ່າ 4 × 3.5 = 14 cm)"}</span>,
          <span key="4">{"(4) 15 (ເພາະວ່າ 1.5 × 10 = 15 cm)"}</span>,
          <span key="5">{"(5) 60 (ເພາະວ່າ 5 × 12 = 60 cm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 5 (ເພາະວ່າ 10 / 2 = 5 cm)"}</span>,
          <span key="7">{"(2) 6 (ເພາະວ່າ 18 / 3 = 6 cm)"}</span>,
          <span key="8">{"(3) 3.5 (ເພາະວ່າ 14 / 4 = 3.5 cm)"}</span>,
          <span key="9">{"(4) 6 (ເພາະວ່າ 9 / 1.5 = 6 cm)"}</span>,
          <span key="10">{"(5) 7 (ເພາະວ່າ 35 / 5 = 7 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"72 (ອັດຕາສ່ວນເນື້ອທີ່ແມ່ນ k² = 3² = 9 ➔ ເນື້ອທີ່ໃຫຍ່ = 9 × 8 = 72 cm²)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"3 (ເພາະວ່າ k = ເສັ້ນຮອບຮູບໃຫຍ່ / ເສັ້ນຮອບຮູບນ້ອຍ = 54 / 18 = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"60 (ເພາະວ່າ ຄວາມກວ້າງແມ່ນ 12 × 5 = 60 ແມັດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"18 (ອັດຕາສ່ວນຄ້າຍຄືແມ່ນ k = 15 / 5 = 3 ➔ A'C' = 3 × 6 = 18 cm)"}</span>
        ]
      }
    ],
    advice: "ຮູບສາມແຈຄ້າຍຄືກັນແມ່ນຫຼັກການທີ່ສຳຄັນທີ່ສຸດໃນການອອກແບບ, ການຂະຫຍາຍຮູບພາບ ແລະ ການວັດແທກໄລຍະທາງໃນດາລາສາດເດີ້!"
  }
};
