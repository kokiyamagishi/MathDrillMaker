import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພាកທີ VI - ບົດທີ 21: ຄວາມຖີ່ສະສົມ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີການສ້າງຕາຕະລາງແຈກແຈງຄວາມຖີ່, ການຊອກຫາຄວາມຖີ່ສະສົມ ແລະ ຄວາມຖີ່ທຽບຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 103-108",
  subSections: [
    {
      title: "1. ຄວາມຖີ່ ແລະ ຄວາມຖີ່ສະສົມ",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຕາຕະລາງຄວາມຖີ່ສະສົມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມຖີ່ (f) ແມ່ນຈຳນວນເທື່ອທີ່ຂໍ້ມູນເກີດຂຶ້ນ. ຄວາມຖີ່ສະສົມ (cf) ແມ່ນຜົນບວກຂອງຄວາມຖີ່ຕັ້ງແຕ່ເລີ່ມຕົ້ນຫາຂັ້ນຂໍ້ມູນນັ້ນ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຄວາມຖີ່ສະສົມ (cf) = ຄວາມຖີ່ຂອງຂໍ້ມູນນັ້ນ + ຄວາມຖີ່ທັງໝົດທີ່ຢູ່ກ່ອນໜ້າ."}</div>
              <div>{"• ຕົວຢ່າງ: ຂໍ້ມູນຄະແນນ 1 (ຄວາມຖີ່ 2), ຄະແນນ 2 (ຄວາມຖີ່ 3) ➔ ຄວາມຖີ່ສະສົມຮອດຄະແນນ 2 ແມ່ນ 2 + 3 = 5."}</div>
            </div>

            {/* Statistics Table SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຕາຕະລາງການເພີ່ມຂຶ້ນຂອງຄວາມຖີ່ສະສົມ"}</span>
                <svg viewBox="0 0 400 160" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Table headers */}
                  <rect x="20" y="10" width="120" height="40" fill="#2E7D32" stroke="#FFFFFF" />
                  <text x="80" y="36" fill="#FFFFFF" fontSize="16" textAnchor="middle">{"ຄະແນນ"}</text>
                  <rect x="140" y="10" width="120" height="40" fill="#2E7D32" stroke="#FFFFFF" />
                  <text x="200" y="36" fill="#FFFFFF" fontSize="16" textAnchor="middle">{"ຄວາມຖີ່ (f)"}</text>
                  <rect x="260" y="10" width="120" height="40" fill="#E65100" stroke="#FFFFFF" />
                  <text x="320" y="36" fill="#FFFFFF" fontSize="16" textAnchor="middle">{"ສະສົມ (cf)"}</text>

                  {/* Row 1 */}
                  <rect x="20" y="50" width="120" height="30" fill="#E8F5E9" stroke="#37474F" strokeWidth="1" />
                  <text x="80" y="70" fill="#37474F" fontSize="16" textAnchor="middle">{"1"}</text>
                  <rect x="140" y="50" width="120" height="30" fill="#E8F5E9" stroke="#37474F" strokeWidth="1" />
                  <text x="200" y="70" fill="#37474F" fontSize="16" textAnchor="middle">{"2"}</text>
                  <rect x="260" y="50" width="120" height="30" fill="#FFE0B2" stroke="#37474F" strokeWidth="1" />
                  <text x="320" y="70" fill="#E65100" fontSize="16" textAnchor="middle" fontWeight="bold">{"2"}</text>

                  {/* Row 2 */}
                  <rect x="20" y="80" width="120" height="30" fill="#E8F5E9" stroke="#37474F" strokeWidth="1" />
                  <text x="80" y="100" fill="#37474F" fontSize="16" textAnchor="middle">{"2"}</text>
                  <rect x="140" y="80" width="120" height="30" fill="#E8F5E9" stroke="#37474F" strokeWidth="1" />
                  <text x="200" y="100" fill="#37474F" fontSize="16" textAnchor="middle">{"3"}</text>
                  <rect x="260" y="80" width="120" height="30" fill="#FFE0B2" stroke="#37474F" strokeWidth="1" />
                  <text x="320" y="100" fill="#E65100" fontSize="16" textAnchor="middle" fontWeight="bold">{"5 (2+3)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຖີ່ສະສົມຂອງຫ້ອງສຸດທ້າຍ ຈະຕ້ອງເທົ່າກັບຈຳນວນຕົວຢ່າງທັງໝົດ (N) ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃຫ້ຄວາມຖີ່ແຕ່ລະຫ້ອງແມ່ນ ຄະແນນ 1 (ຄວາມຖີ່ 2), ຄະແນນ 2 (ຄວາມຖີ່ 3), ຄະແນນ 3 (ຄວາມຖີ່ 4), ຄະແນນ 4 (ຄວາມຖີ່ 1). ຈົ່ງຊອກຫາຄວາມຖີ່ສະສົມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຄວາມຖີ່ສະສົມຮອດຫ້ອງ ຄະແນນ 1 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຄວາມຖີ່ສະສົມຮອດຫ້ອງ ຄະແນນ 2 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຄວາມຖີ່ສະສົມຮອດຫ້ອງ ຄະແນນ 3 ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄວາມຖີ່ ຫຼື ຄວາມຖີ່ສະສົມທີ່ຫາຍໄປ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຈາກຄຳຖາມທີ 1, ຄວາມຖີ່ສະສົມຮອດຫ້ອງສຸດທ້າຍ (ຄະແນນ 4) ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຖ້າຄວາມຖີ່ສະສົມຂອງ 4 ຫ້ອງແມ່ນ 3, 7, 12, 15. ຄວາມຖີ່ສະເພາະຂອງຫ້ອງທີ 3 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄວາມຖີ່ທຽບຖານ ແລະ ເປີເຊັນ",
      keyPoint: {
        title: "ອັດຕາສ່ວນຄວາມຖີ່ ແລະ ເປີເຊັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມຖີ່ທຽບຖານ (rf) ແມ່ນອັດຕາສ່ວນລະຫວ່າງຄວາມຖີ່ຂອງຫ້ອງນັ້ນ ທຽບໃສ່ຈຳນວນຕົວຢ່າງທັງໝົດ N:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ຄວາມຖີ່ທຽບຖານ: "}
                <span className="math" style={{ marginLeft: "4px" }}>
                  {"rf = "} <Fraction num="f" den="N" />
                </span>
              </div>
              <div>{"• ເປີເຊັນ (%): "} <span className="math">{"P = rf × 100%"}</span></div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຖ້າ f = 4, N = 20 ➔ rf = 4/20 = 0.2 ➔ ເປີເຊັນແມ່ນ 0.2 × 100% = 20%."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຜົນບວກຂອງຄວາມຖີ່ທຽບຖານທຸກຫ້ອງ ຈະຕ້ອງເທົ່າກັບ 1 ສະເໝີ (ຫຼື 100% ພໍດີ) ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃຫ້ຈຳນວນຕົວຢ່າງທັງໝົດ N = 20. ຈົ່ງຄິດໄລ່ຄ່າຄວາມຖີ່ທຽບຖານ ຫຼື ເປີເຊັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຖ້າຄວາມຖີ່ແມ່ນ 4, ຄວາມຖີ່ທຽບຖານເປັນທົດສະນິຍົມແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຈາກຂໍ້ (1), ເປີເຊັນ (%) ຂອງຫ້ອງນີ້ແມ່ນຈັກເປີເຊັນ? (ຕອບສະເພາະຕົວເລກ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຖ້າຄວາມຖີ່ແມ່ນ 5, ເປີເຊັນ (%) ຂອງຫ້ອງນີ້ແມ່ນຈັກເປີເຊັນ? (ຕອບສະເພາະຕົວເລກ)"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄວາມຖີ່ທຽບຖານສະສົມ ແລະ ຜົນບວກ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຖ້າຄວາມຖີ່ທຽບຖານຂອງແຕ່ລະຫ້ອງແມ່ນ 0.15, 0.35, 0.40, 0.10. ຄວາມຖີ່ທຽບຖານສະສົມຮອດຫ້ອງທີ 2 ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "nowrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຜົນບວກຂອງຄວາມຖີ່ທຽບຖານທຸກຫ້ອງໃນຕາຕະລາງສະເໝີແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ຫານຄວາມຖີ່ໃຫ້ຈຳນວນຕົວຢ່າງທັງໝົດເພື່ອຫາຄ່າທຽບຖານ ຫຼື ຄຳນວນຜົນລົບລະຫວ່າງຄວາມຖີ່ສະສົມເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາຄວາມຖີ່ທຽບຖານຈາກການສຳຫຼວດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈາກການສຳຫຼວດວິຊາຮຽນທີ່ນັກຮຽນ 50 ຄົນມັກ, ພົບວ່ານັກຮຽນມັກວິຊາຄະນິດສາດມີ 15 ຄົນ. ຈົ່ງຊອກຫາຄວາມຖີ່ທຽບຖານ (ເປັນເລກທົດສະນິຍົມ) ຂອງວິຊາຄະນິດສາດ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄວາມຖີ່ທຽບຖານແມ່ນ"}</span>
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
              {"ການຊອກຫາຄວາມຖີ່ສະເພາະຫ້ອງຈາກຄວາມຖີ່ສະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນຕາຕະລາງຄວາມຖີ່ຂອງກຸ່ມຕົວຢ່າງ 40 ຕົວຢ່າງ, ຄວາມຖີ່ສະສົມຮອດຫ້ອງ A ແມ່ນ 18, ແລະ ຄວາມຖີ່ສະສົມຮອດຫ້ອງ B (ຫ້ອງຖັດໄປ) ແມ່ນ 30. ຈົ່ງຊອກຫາຄວາມຖີ່ສະເພາະຂອງຫ້ອງ B."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄວາມຖີ່ຫ້ອງ B ແມ່ນ"}</span>
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
            {"ໂຈດເປີເຊັນຂອງນັກຮຽນທີ່ໄດ້ເກຣດ A: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຫ້ອງຮຽນທີ່ມີນັກຮຽນ 30 ຄົນ, ມີນັກຮຽນ 6 ຄົນທີ່ໄດ້ເກຣດ A ວິຊາຄະນິດສາດ. ຈົ່ງຊອກຫາເປີເຊັນ (%) ຂອງນັກຮຽນທີ່ໄດ້ເກຣດ A ໃນຫ້ອງຮຽນນີ້. (ຕອບສະເພາະຕົວເລກ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີຈຳນວນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"%"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຊອກຫາຄວາມຖີ່ຕົວຈິງຈາກຄວາມຖີ່ທຽບຖານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຄວາມຖີ່ທຽບຖານຂອງຄະແນນໜຶ່ງແມ່ນ 0.15. ຖ້າຈຳນວນຕົວຢ່າງທັງໝົດແມ່ນ 60 ຄົນ, ຈົ່ງຊອກຫາຄວາມຖີ່ຕົວຈິງ (ຈຳນວນນັກຮຽນ) ຂອງຄະແນນນີ້."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມຖີ່ຕົວຈິງແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຄົນ"}</span>
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
          <span key="1">{"(1) 2 (ຄວາມຖີ່ສະສົມຫ້ອງທຳອິດເທົ່າກັບຄວາມຖີ່ຂອງຫ້ອງນັ້ນ)"}</span>,
          <span key="2">{"(2) 5 (ເພາະວ່າ 2 + 3 = 5)"}</span>,
          <span key="3">{"(3) 9 (ເພາະວ່າ 5 + 4 = 9)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 10 (ເພາະວ່າ 9 + 1 = 10 ເຊິ່ງເທົ່າກັບ N ທັງໝົດ)"}</span>,
          <span key="5">{"(2) 5 (ຊອກໄດ້ຈາກການລົບຄວາມຖີ່ສະສົມ ➔ 12 - 7 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"0.3 (ເພາະວ່າ ຄວາມຖີ່ທຽບຖານ rf = 15 / 50 = 0.3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"12 (ເພາະວ່າ ຄວາມຖີ່ຫ້ອງ B = cf_B - cf_A = 30 - 18 = 12)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"20 (ເພາະວ່າ (6 / 30) × 100% = 0.2 × 100% = 20%)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"9 (ເພາະວ່າ ຄວາມຖີ່ f = rf × N = 0.15 × 60 = 9 ຄົນ)"}</span>
        ]
      }
    ],
    advice: "ຄວາມຖີ່ສະສົມ ແລະ ຄວາມຖີ່ທຽບຖານຊ່ວຍໃຫ້ເຮົາສາມາດວິເຄາະ ແລະ ສະຫຼຸບຂໍ້ມູນສະຖິຕິໄດ້ຢ່າງມີປະສິດທິພາບ ໝັ່ນຝຶກຝົນເດີ້!"
  }
};
export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"0.2 (ເພາະວ່າ rf = 4 / 20 = 0.2)"}</span>,
        <span key="11">{"20 (ເພາະວ່າ P = 0.2 × 100% = 20%)"}</span>,
        <span key="12">{"25 (ເພາະວ່າ P = (5 / 20) × 100% = 25%)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"0.5 (ເພາະວ່າ ຄວາມຖີ່ທຽບຖານສະສົມ = 0.15 + 0.35 = 0.50)"}</span>,
        <span key="14">{"1 (ເພາະວ່າ ຜົນບວກຂອງຄວາມຖີ່ທຽບຖານທຸກຫ້ອງໃນຕາຕະລາງແມ່ນ 1 ສະເໝີ)"}</span>
      ]
    }
  ]
};
