import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit44Data: UnitData = {
  unitNumber: 44,
  unitTitle: "ພາກທີ VII - ບົດທີ 44: การສາຍຕາມລວງທີ່ໃຫ້ມາ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການສາຍຂະໜານ (Parallel Projection), ຄຸນລັກສະນະການຮັກສາອັດຕາສ່ວນຂອງທ່ອນຊື່ ແລະ ຈຸດເຄິ່ງກາງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 203-205",
  subSections: [
    {
      title: "1. ຄຸນລັກສະນະການຮັກສາຈຸດເຄິ່ງກາງ (Preservation of Midpoints)",
      keyPoint: {
        title: "ຫຼັກການສາຍຂະໜານ ແລະ ຈຸດເຄິ່ງກາງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການສາຍຂະໜານເທິງເສັ້ນຊື່ (d) ຕາມລວງ (Δ) ຮັກສາຈຸດເຄິ່ງກາງຂອງທ່ອນຊື່ສະເໝີ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຖ້າ A' ແລະ B' ແມ່ນຮູບສາຍຂອງ A ແລະ B ເທິງເສັ້ນຊື່ (d)."}</div>
              <div>{"• ຖ້າ M ແມ່ນຈຸດເຄິ່ງກາງຂອງທ່ອນຊື່ AB ➔ ຮູບສາຍ M' ຈະຕ້ອງແມ່ນຈຸດເຄິ່ງກາງຂອງ A'B' ສະເໝີ."}</div>
            </div>

            {/* Parallel Projection SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#F5F5F5", borderRadius: "8px", border: "1px solid #E0E0E0", fontSize: "1.15rem", color: "#424242" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດການສາຍຂະໜານ: ຮັກສາຈຸດເຄິ່ງກາງ M ➔ M' ແລະ ອັດຕາສ່ວນ"}</span>
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "450px", height: "auto" }}>
                  {/* Line L1 (original segment AB) */}
                  <line x1="40" y1="40" x2="360" y2="80" stroke="#1E88E5" strokeWidth="3" />
                  <text x="10" y="32" fill="#1E88E5" fontSize="18" fontWeight="bold">{"(L₁)"}</text>
                  
                  {/* Line L2 (projection line d) */}
                  <line x1="40" y1="160" x2="360" y2="160" stroke="#43A047" strokeWidth="3" />
                  <text x="10" y="170" fill="#43A047" fontSize="18" fontWeight="bold">{"(d)"}</text>

                  {/* Points on L1 */}
                  <circle cx="80" cy="45" r="5" fill="#1E88E5" />
                  <text x="72" y="30" fill="#1E88E5" fontSize="18" fontWeight="bold">{"A"}</text>
                  
                  <circle cx="200" cy="60" r="5" fill="#E65100" />
                  <text x="192" y="45" fill="#E65100" fontSize="18" fontWeight="bold">{"M"}</text>

                  <circle cx="320" cy="75" r="5" fill="#1E88E5" />
                  <text x="312" y="60" fill="#1E88E5" fontSize="18" fontWeight="bold">{"B"}</text>

                  {/* Projection rays (parallel dashed lines) */}
                  <line x1="80" y1="45" x2="100" y2="160" stroke="#757575" strokeWidth="1.5" strokeDasharray="5,5" />
                  <line x1="200" y1="60" x2="220" y2="160" stroke="#757575" strokeWidth="1.5" strokeDasharray="5,5" />
                  <line x1="320" y1="75" x2="340" y2="160" stroke="#757575" strokeWidth="1.5" strokeDasharray="5,5" />

                  {/* Points on L2 */}
                  <circle cx="100" cy="160" r="5" fill="#43A047" />
                  <text x="92" y="186" fill="#43A047" fontSize="18" fontWeight="bold">{"A'"}</text>

                  <circle cx="220" cy="160" r="5" fill="#D84315" />
                  <text x="212" y="186" fill="#D84315" fontSize="18" fontWeight="bold">{"M'"}</text>

                  <circle cx="340" cy="160" r="5" fill="#43A047" />
                  <text x="332" y="186" fill="#43A047" fontSize="18" fontWeight="bold">{"B'"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບສາຍຂອງຈຸດເຄິ່ງກາງ ຈະແມ່ນຈຸດເຄິ່ງກາງຂອງຮູບສາຍສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງຮູບສາຍຂະໜານ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span>{"ຖ້າ M ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB. ຮູບສາຍ M' ຈະແມ່ນຈຸດເຄິ່ງກາງຂອງ A'B' ຫຼື ບໍ່? (ຕອບ ແມ່ນ ຫຼື ບໍ່ແມ່ນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span>{"ຖ້າ AB = 8 cm ແລະ M ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB. ຄວາມຍາວ AM ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span>{"ຖ້າຄວາມຍາວ A'M' = 5 cm ແລະ M' ແມ່ນຈຸດເຄິ່ງກາງຂອງ A'B'. ຄວາມຍາວ A'B' ຈະແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span>{"ຖ້າ AM = MB. ຮູບສາຍ A'M' ແລະ M'B' ຈະມີຄວາມຍາວເທົ່າກັນ ຫຼື ບໍ່? (ຕອບ ເທົ່າກັນ ຫຼື ບໍ່ເທົ່າກັນ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span>{"ຖ້າທ່ອນຊື່ AB ຂະໜານກັບເສັ້ນຊື່ສາຍ (d) ແລະ ຍາວ 6 cm. ຮູບສາຍ A'B' ຈະຍາວຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຮັກສາອັດຕາສ່ວນຂອງທ່ອນຊື່ (Preservation of Segment Ratios)",
      keyPoint: {
        title: "ຫຼັກການຮັກສາອັດຕາສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການສາຍຂະໜານຮັກສາອັດຕາສ່ວນລະຫວ່າງສອງທ່ອນຊື່ທີ່ຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ (ຫຼື ເສັ້ນຊື່ຂະໜານກັນ):"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດອັດຕາສ່ວນ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  <Fraction num="AB" den="CD" /> {" = "} <Fraction num="A'B'" den="C'D'" />
                </span>
              </div>
              <div style={{ fontWeight: "bold", color: "#D84315", display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                {"• ຕົວຢ່າງ: ຖ້າ "} <Fraction num="AB" den="CD" /> {" = 2. ຄວາມຍາວ "} <Fraction num="A'B'" den="C'D'" /> {" ຈະເທົ່າກັບຈັກ?"}
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                {"➔ ວິທີຄິດ: ຍ້ອນການສາຍຮັກສາອັດຕາສ່ວນ ດັ່ງນັ້ນ "} <Fraction num="A'B'" den="C'D'" /> {" = "} <Fraction num="AB" den="CD" /> {" = 2."}
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ອັດຕາສ່ວນລະຫວ່າງທ່ອນຊື່ເດີມ ແລະ ທ່ອນຊື່ສາຍ ຈະເທົ່າກັນສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາອັດຕາສ່ວນ ຫຼື ຄວາມຍາວທ່ອນຊື່ທີ່ກຳນົດ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                    {"ຖ້າອັດຕາສ່ວນ "} <Fraction num="AB" den="BC" /> {" = "} <Fraction num="3" den="4" /> {". ອັດຕາສ່ວນ "} <Fraction num="A'B'" den="B'C'" /> {" ຈະເທົ່າກັບເທົ່າໃດ? (ຕອບເປັນເລກສ່ວນ)"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                    {"ຖ້າ AB = 3 cm, BC = 6 cm. ອັດຕາສ່ວນ "} <Fraction num="A'B'" den="B'C'" /> {" ຄິດເປັນເລກທົດສະນິຍົມແມ່ນເທົ່າໃດ?"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                    {"ຖ້າ "} <Fraction num="A'B'" den="B'C'" /> {" = 2, ແລະ ຄວາມຍາວ B'C' = 4 cm. ຄວາມຍາວ A'B' ຈະແມ່ນຈັກ cm?"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                    {"ຖ້າ "} <Fraction num="AB" den="BC" /> {" = "} <Fraction num="1" den="3" /> {", ແລະ A'B' = 3 cm. ຄວາມຍາວ B'C' ຈະແມ່ນຈັກ cm?"}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                    {"ຖ້າ AC = 12 cm, M ແມ່ນຈຸດເຄິ່ງກາງ AC. ຄວາມຍາວ "} <Fraction num="A'M'" den="M'C'" /> {" ຈະເທົ່າກັບເທົ່າໃດ?"}
                  </span>
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
    hintText: "💡 ບົດທ້າທາຍ: ໃຊ້ຫຼັກການຮັກສາອັດຕາສ່ວນ ແລະ ຕັ້ງສົມຖົນຄູນໄຂວ້ເພື່ອຊອກຫາຄ່າຂອງ 𝑥 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄວາມຍາວທ່ອນຊື່ຈາກອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                {"ໃຫ້ສາມຈຸດ A, B, C ລຽງກັນເທິງເສັ້ນຊື່ໜຶ່ງ. ຖ້າ AB = 𝑥, BC = 8 cm. ເມື່ອສາຍຂະໜານໄດ້ A'B' = 3 cm, B'C' = 6 cm. ຈົ່ງຊອກຫາ 𝑥. ("} <Fraction num="𝑥" den="8" /> {" = "} <Fraction num="3" den="6" /> {")"}
              </span>
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
              {"ການຊອກຫາຈຸດພິກັດຮູບສາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຖ້າທ່ອນຊື່ AB ຖືກແບ່ງອອກເປັນ 5 ສ່ວນເທົ່າກັນ. ຖ້າຮູບສາຍ A'B' ຍາວ 15 cm. ຖາມວ່າແຕ່ລະສ່ວນທີ່ຖືກແບ່ງໃນຮູບສາຍ A'B' ຈະຍາວຈັກ cm?"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ແຕ່ລະສ່ວນຍາວ"}</span>
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
            {"ໂຈດບັນຫາການສາຍແສງເງົາ (Shadow and Projection): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ເສົາໄມ້ສອງຕົ້ນປັກຕັ້ງສາກກັບພື້ນດິນ. ເສົາຕົ້ນທີໜຶ່ງສູງ 2 m ເຮັດໃຫ້ເກີດເງົາຍາວ 3 m. ໃນເວລາ ດຽວກັນ, ຖ້າເສົາຕົ້ນທີສອງເກີດເງົາຍາວ 9 m. ຖາມວ່າເສົາຕົ້ນທີສອງສູງຈັກ ແມັດ (m)?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ເສົາຕົ້ນທີສອງສູງ"}</span>
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
            {"ໂຈດບັນຫາອັດຕາສ່ວນຄານຊັ່ງ (Ratio Balance): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }, whiteSpace: "nowrap"}>
                {"(2) ຄານຊັ່ງອັນໜຶ່ງຍາວ AC = 60 cm, ມີຈຸດຄ້ຳໜູນ B ຢູ່ລະຫວ່າງ A ແລະ C ໂດຍມີອັດຕາສ່ວນ "} <Fraction num="AB" den="BC" /> {" = "} <Fraction num="1" den="2" /> {". ຖ້າເຮົາສາຍຄານນີ້ຂະໜານລົງພື້ນດິນໄດ້ຄວາມຍາວ A'C' = 45 cm. ຄວາມຍາວ A'B' ຈະແມ່ນຈັກ cm?"}
              </span>
            </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: A'B' ="}</span>
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
          <span key="1">{"(1) ແມ່ນ (ຍ້ອນການສາຍຂະໜານຮັກສາຈຸດເຄິ່ງກາງສະເໝີ)"}</span>,
          <span key="2">{"(2) 4 (ເພາະວ່າ AM = 8 / 2 = 4 cm)"}</span>,
          <span key="3">{"(3) 10 (ເພາະວ່າ A'B' = 2 × A'M' = 2 × 5 = 10 cm)"}</span>,
          <span key="4">{"(4) ເທົ່າກັນ (ຍ້ອນວ່າອັດຕາສ່ວນ AM/MB = A'M'/M'B' = 1)"}</span>,
          <span key="5">{"(5) 6 (ເພາະວ່າການສາຍຂະໜານເທິງເສັ້ນຊື່ທີ່ຂະໜານກັນຈະຮັກສາຄວາມຍາວເທົ່າເດີມ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 3/4 (ເພາະວ່າ A'B'/B'C' = AB/BC = 3/4)"}</span>,
          <span key="7">{"(2) 0.5 (ເພາະວ່າ AB/BC = 3/6 = 0.5 ➔ A'B'/B'C' = 0.5)"}</span>,
          <span key="8">{"(3) 8 (ເພາະວ່າ A'B' = 2 × B'C' = 2 × 4 = 8 cm)"}</span>,
          <span key="9">{"(4) 9 (ເພາະວ່າ B'C' = 3 × A'B' = 3 × 3 = 9 cm)"}</span>,
          <span key="10">{"(5) 1 (ເພາະວ່າ M' ແມ່ນຈຸດເຄິ່ງກາງ A'C' ➔ A'M' = M'C' ➔ ອັດຕາສ່ວນແມ່ນ 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"4 (ເພາະວ່າ 𝑥/8 = 3/6 = 1/2 ➔ 𝑥 = 8 / 2 = 4 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"3 (ເພາະວ່າ 15 / 5 = 3 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"6 (ເພາະວ່າອັດຕາສ່ວນຄວາມສູງ/ເງົາ ແມ່ນເທົ່າກັນ ➔ h/9 = 2/3 ➔ h = 9 × 2 / 3 = 6 m)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"15 (ເພາະວ່າ AB/BC = 1/2 ➔ A'B'/B'C' = 1/2 ➔ A'B' ແມ່ນ 1 ສ່ວນໃນ 3 ສ່ວນຂອງ A'C' ➔ A'B' = 45 / 3 = 15 cm)"}</span>
        ]
      }
    ],
    advice: "ການສາຍຂະໜານແມ່ນພື້ນຖານທີ່ດີຂອງທິດສະດີຕາເລັດ (Thales Theorem) ແລະ ການແຕ້ມແບບວິສະວະກຳສາດ ໝັ່ນສັງເກດ ແລະ ຝຶກຝົນເດີ້!"
  }
};
