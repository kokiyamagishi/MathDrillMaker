import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit25Data: UnitData = {
  unitNumber: 25,
  unitTitle: "ພາກທີ IV - ບົດທີ 25: ການແກ້ໂຈດກ່ຽວກັບອະສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
  unitGoal: "ຮຽນຮູ້ການວິເຄາະໂຈດບັນຫາໃນຊີວິດປະຈຳວັນ, ການກຳນົດຕົວລັບ, ການຕັ້ງອະສົມຜົນ ແລະ ຊອກຫາຂອບເຂດໃຈຜົນທີ່ຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 106-110",
  subSections: [
    {
      title: "1. ໂຈດບັນຫາກ່ຽວກັບເງິນ ແລະ ງົບປະມານ (Money & Budget Problems)",
      keyPoint: {
        title: "ຂັ້ນຕອນການຕັ້ງອະສົມຜົນຈາກໂຈດບັນຫາເງິນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ໂຈດບັນຫາອະສົມຜົນມີ 3 ຂັ້ນຕອນຫຼັກ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              {"1. ວາງຕົວລັບ "} <span className="math">{"𝑥"}</span> {" ແທນສິ່ງທີ່ຕ້ອງການຊອກຫາ."}<br />
              {"2. ຕັ້ງອະສົມຜົນຕາມເງື່ອນໄຂ (ເຊັ່ນ: 'ບໍ່ເກີນ' ➔ ≤, 'ຢ່າງໜ້ອຍ' ➔ ≥, 'ຫຼາຍກວ່າ' ➔ >)."}<br />
              {"3. ແກ້ອະສົມຜົນ ແລະ ສະຫຼຸບຄຳຕອບທີ່ເປັນຈຳນວນຖ້ວນ ຫຼື ຈຳນວນຈິງຕາມເງື່ອນໄຂ."}
            </div>

            {/* Visual Budget Meter SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດງົບປະມານ: ຄ່າໃຊ້ຈ່າຍທັງໝົດ ≤ ງົບປະມານ"}</span>
                <svg viewBox="0 0 300 50" style={{ width: "100%", maxWidth: "260px", height: "auto" }}>
                  {/* Total budget bar */}
                  <rect x="10" y="15" width="280" height="20" rx="4" fill="#E0E0E0" />
                  {/* Expense bar */}
                  <rect x="10" y="15" width="180" height="20" rx="4" fill="#4CAF50" />
                  {/* Indicator / Limit line */}
                  <line x1="240" y1="10" x2="240" y2="40" stroke="#D32F2F" strokeWidth="2" strokeDasharray="3,3" />
                  <text x="240" y="8" fill="#D32F2F" fontSize="8" textAnchor="middle">{"ງົບປະມານສູງສຸດ"}</text>
                  <text x="90" y="28" fill="#FFFFFF" fontSize="9" textAnchor="middle" fontWeight="bold">{"ຄ່າໃຊ້ຈ່າຍ (8,000𝑥)"}</text>
                  <text x="280" y="47" fill="#757575" fontSize="8" textAnchor="end">{"50,000 ກີບ"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອໂຈດຖາມຫາ 'ຫຼາຍສຸດຈັກຫົວ' ແລະ ຜົນໄດ້ຮັບເປັນເລກທົດສະນິຍົມ ເຮົາຕ້ອງເລືອກຈຳນວນຖ້ວນທີ່ໜ້ອຍກວ່າຄ່ານັ້ນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງວິເຄາະ ແລະ ແກ້ໂຈດບັນຫາລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແනນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ທ້າວ ສົມພອນ ມີເງິນ 50,000 ກີບ. ລາວຊື້ປຶ້ມຫົວລະ 8,000 ກີບ. ລາວຈະຊື້ປຶ້ມໄດ້ຫຼາຍສຸດຈັກຫົວ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຫົວ"}</span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ນາງ ມະລີ ມີເງິນ 100,000 ກີບ. ລາວຊື້ກະເປົາໜຶ່ງໃບລາຄາ 40,000 ກີບ ແລະ ຢາກຊື້ປາກກາຫົວລະ 12,000 ກີບ. ລາວຈະຊື້ປາກກາໄດ້ຫຼາຍສຸດຈັກກ້ານ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ກ້ານ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຫ້ອງຮຽນໜຶ່ງມີງົບປະມານບໍ່ເກີນ 80,000 ກີບ ເພື່ອຊື້ດອກໄມ້ປະດັບລາຄາ 15,000 ກີບຕໍ່ກະຖາງ. ພວກເຂົາຈະຊື້ໄດ້ຫຼາຍສຸດຈັກກະຖາງ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ກະຖາງ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ທ້າວ ແດງ ມີເງິນ 60,000 ກີບ. ລາວຕ້ອງການຊື້ເຂົ້າໜົມຫໍ່ລະ 7,000 ກີບ ແລະ ໃຫ້ຍັງເຫຼືອເງິນຢ່າງໜ້ອຍ 10,000 ກີບ. ລາວຈະຊື້ເຂົ້າໜົມໄດ້ຫຼາຍສຸດຈັກຫໍ່?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຫໍ່"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span>{"ຄອບຄົວໜຶ່ງມີເງິນ 150,000 ກີບ. ພວກເຂົາຊື້ຊີ້ນໝູລາຄາ 90,000 ກີບ ແລະ ຢາກຊື້ຜັກກາດມັດລະ 12,000 ກີບ. ພວກເຂົາຈະຊື້ຜັກກາດໄດ້ຫຼາຍສຸດຈັກມັດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ມັດ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໂຈດບັນຫາກ່ຽວກັບຄະແນນເສຍ ແລະ ຄ່າສະເລ່ຍ (Averages & Target Scores)",
      keyPoint: {
        title: "ຫຼັກການຕັ້ງອະສົມຜົນເພື່ອຫາຄ່າສະເລ່ຍເປົ້າໝາຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຊອກຫາຄະແນນສະເລ່ຍ ແມ່ນການເອົາຄະແນນທັງໝົດມາບວກກັນ ແລ້ວຫານໃຫ້ຈຳນວນຄັ້ງການເສັງ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄະແນນ 3 ຄັ້ງແມ່ນ 7, 8, 8. ຕ້ອງການສະເລ່ຍ 4 ຄັ້ງໃຫ້ໄດ້ຢ່າງໜ້ອຍ 8 ຫຼັກ."}<br />
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginTop: "8px" }}>
                {"➔ ຕັ້ງອະສົມຜົນ: "}
                <Fraction num="7 + 8 + 8 + 𝑥" den="4" /> {" ≥ 8"}
              </span>
              <div style={{ paddingLeft: "12px", borderLeft: "3px solid #FBC02D", marginTop: "6px", color: "#37474F" }}>
                {"• ບວກເລກທາງເທິງ: 23 + 𝑥 ≥ 32 (ຄູນ 4 ຂຶ້ນໄປຂວາ)"}<br />
                {"• ຍ້າຍພົດ: 𝑥 ≥ 32 - 23 ➔ 𝑥 ≥ 9"}
              </div>
            </div>

            {/* Average target visualization SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7", fontSize: "1.15rem", color: "#4A148C" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ຄະແນນສະເລ່ຍເປົ້າໝາຍ ≥ 8"}</span>
                <svg viewBox="0 0 200 40" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                  <line x1="10" y1="20" x2="190" y2="20" stroke="#4A148C" strokeWidth="1.5" />
                  <circle cx="120" cy="20" r="4" fill="#8E24AA" />
                  <text x="120" y="35" fill="#4A148C" fontSize="8" textAnchor="middle">{"ເປົ້າໝາຍ: 8"}</text>
                  
                  {/* Shading right side (Target achieved) */}
                  <rect x="120" y="18" width="70" height="4" fill="#8E24AA" opacity="0.4" />
                  
                  {/* Ticks for actual scores */}
                  <circle cx="90" cy="20" r="2" fill="#757575" />
                  <text x="90" y="12" fill="#757575" fontSize="7" textAnchor="middle">{"7"}</text>
                  <circle cx="120" cy="20" r="2" fill="#757575" />
                  <text x="105" y="12" fill="#757575" fontSize="7" textAnchor="middle">{"8, 8"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມຄູນຈຳນວນຄັ້ງທັງໝົດ (ຕົວສ່ວນ) ໄປໃສ່ຟາກຂວາກ່ອນ ແລ້ວຈຶ່ງຍ້າຍຕົວເລກໄປລົບເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄະແນນເປົ້າໝາຍທີ່ຕ້ອງການໃນແຕ່ລະຂໍ້ລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ຄະແນນເສັງ 3 ຄັ້ງທຳອິດຂອງ ທ້າວ ນ້ອຍ ແມ່ນ 7, 8, 8. ລາວຕ້ອງໄດ້ຄັ້ງທີ 4 ຢ່າງໜ້ອຍເທົ່າໃດ ເພື່ອໃຫ້ຄ່າສະເລ່ຍຢ່າງໜ້ອຍ 8 ຫຼັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄະແນນ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ຄະແນນເສັງ 2 ຄັ້ງທຳອິດແມ່ນ 6 ແລະ 7. ຕ້ອງໄດ້ຄັ້ງທີ 3 ຢ່າງໜ້ອຍເທົ່າໃດ ເພື່ອໃຫ້ໄດ້ຄະແນນສະເລ່ຍຢ່າງໜ້ອຍ 7 ຫຼັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄະແນນ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ຄະແນນເສັງ 3 ຄັ້ງທຳອິດແມ່ນ 15, 18, 16. ລາວຕ້ອງໄດ້ຄັ້ງທີ 4 ຢ່າງໜ້ອຍເທົ່າໃດ ເພື່ອໃຫ້ຄ່າສະເລ່ຍທັງໝົດຢ່າງໜ້ອຍ 17 ຄະແນນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄະແນນ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ຄະແນນເສັງ 3 ຄັ້ງທຳອິດແມ່ນ 8, 9, 7. ລາວຕ້ອງໄດ້ຄັ້ງທີ 4 ຢ່າງໜ້ອຍເທົ່າໃດ ເພື່ອໃຫ້ໄດ້ຄະແນນສະເລ່ยຢ່າງໜ້ອຍ 8.5 ຫຼັກ? (ຕອບເປັນທົດສະນິຍົມ)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄະແນນ"}</span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" , whiteSpace: "nowrap"}}>{"(5) "}</span>
                  <span>{"ນາງ ດີ ມີຄະແນນສະເລ່ຍ 4 ວິຊາແມ່ນ 8.25. ຖ້າເສັງວິຊາທີ 5, ລາວຕ້ອງໄດ້ຢ່າງໜ້ອຍເທົ່າໃດ ເພື່ອໃຫ້ຄະແນນສະເລ່ຍທັງໝົດຂຶ້ນຮອດ 8.5 ຫຼັກ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄະແນນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະເງື່ອນໄຂສົມທຽບລະຫວ່າງສອງທາງເລືອກຢ່າງລະອຽດ ເພື່ອຕັ້ງອະສົມຜົນທີ່ຖືກຕ້ອງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການເລືອກເຊົ່າລົດຕູ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ບໍລິສັດ A ຄິດຄ່າເຊົ່າຄົງທີ່ 200,000 ກີບ ແລະ ບວກຕື່ມ 5,000 ກີບຕໍ່ກິໂລແມັດ. ບໍລິສັດ B ຄິດຄ່າເຊົ່າຄົງທີ່ 100,000 ກີບ ແລະ ບວກຕື່ມ 7,000 ກີບຕໍ່ກິໂລແມັດ. ຖ້າຢາກໃຫ້ບໍລິສັດ A ຖືກກວ່າບໍລິສັດ B, ໄລຍະທາງເດີນທາງຕ້ອງຫຼາຍກວ່າຈັກກິໂລແມັດ? (ຕັ້ງອະສົມຜົນ: 200000 + 5000𝑥 < 100000 + 7000𝑥)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຕ້ອງເດີນທາງຫຼາຍກວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ກິໂລແມັດ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາລວງຮອບຂອງຮູບສາມແຈສະເໝີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສາມແຈສະເໝີໜຶ່ງມີຄວາມຍາວຂ້າງແມ່ນ "} <span className="math">{"𝑥"}</span> {" ຊັງຕີແມັດ. ຖ້າລວງຮອບຂອງຮູບສາມແຈນີ້ບໍ່ເກີນ 48 ຊັງຕີແມັດ, ແລ້ວຄວາມຍາວຂ້າງສູງສຸດຂອງມັນຈະແມ່ນເທົ່າໃດ? (ລວງຮອບ = 3𝑥)"}
            </p>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ຂ້າງສູງສຸດແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາການສົ່ງເຄື່ອງດ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຄ່າບໍລິການສົ່ງເຄື່ອງແມ່ນ 15,000 ກີບ ສຳລັບ 1 ກິໂລກຣາມທຳອິດ ແລະ ບວກຕື່ມ 5,000 ກີບ ສຳລັບແຕ່ລະກິໂລກຣາມຖັດໄປ. ຖ້ານັກຮຽນມີງົບປະມານສົ່ງເຄື່ອງບໍ່ເກີນ 45,000 ກີບ. ຖາມວ່ານ້ຳໜັກເຄື່ອງຫຼາຍສຸດທີ່ສາມາດສົ່ງໄດ້ຈະແມ່ນຈັກກິໂລກຣາມ? (ສົມຜົນ: 15000 + 5000(𝑥 - 1) ≤ 45000, ສໍາລັບ 𝑥 ≥ 1)"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ນ້ຳໜັກຫຼາຍສຸດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ກິໂລກຣາມ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາຄະແນນສະເລ່ຍທຶນການສຶກສາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ທ້າວ ພອນ ຕ້ອງການເສັງໃຫ້ໄດ້ຄະແນນສະເລ່ຍ 5 ວິຊາ ຢ່າງໜ້ອຍ 9.0 ເພື່ອຮັບທຶນການສຶກສາ. ປັດຈຸບັນລາວເສັງແລ້ວ 4 ວິຊາ ໄດ້ຄະແນນ: 9.5, 8.5, 9.0, 8.8. ຖາມວ່າວິຊາທີ 5 ລາວຕ້ອງໄດ້ຄະແນນຢ່າງໜ້ອຍເທົ່າໃດ?"}
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: ຢ່າງໜ້ອຍຕ້ອງໄດ້"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            <span>{"ຄະແນນ"}</span>
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
          <span key="1">{"(1) 6 ຫົວ (ເພາະວ່າ 8,000 × 6 = 48,000 ≤ 50,000)"}</span>,
          <span key="2">{"(2) 5 ກ້ານ (ເພາະວ່າ 40,000 + 12,000 × 5 = 100,000 ≤ 100,000)"}</span>,
          <span key="3">{"(3) 5 ກະຖາງ (ເພາະວ່າ 15,000 × 5 = 75,000 ≤ 80,000)"}</span>,
          <span key="4">{"(4) 7 ຫໍ່ (ເພາະວ່າ 60,000 - 7,000 × 7 = 11,000 ≥ 10,000)"}</span>,
          <span key="5">{"(5) 5 ມັດ (ເພາະວ່າ 90,000 + 12,000 × 5 = 150,000 ≤ 150,000)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="6">{"(1) 9 ຄະແນນ (ເພາະວ່າ 7 + 8 + 8 + 9 = 32, ແລະ 32 / 4 = 8)"}</span>,
          <span key="7">{"(2) 8 ຄະແນນ (ເພາະວ່າ 6 + 7 + 8 = 21, ແລະ 21 / 3 = 7)"}</span>,
          <span key="8">{"(3) 19 ຄະແນນ (ເພາະວ່າ 15 + 18 + 16 + 19 = 68, ແລະ 68 / 4 = 17)"}</span>,
          <span key="9">{"(4) 10 ຄະແນນ (ເພາະວ່າ 8 + 9 + 7 + 10 = 34, ແລະ 34 / 4 = 8.5)"}</span>,
          <span key="10">{"(5) 9.5 ຄະແນນ (ເພາະວ່າ 8.25 × 4 + 9.5 = 42.5, ແລະ 42.5 / 5 = 8.5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="11">{"50 ກິໂລແມັດ (ເພາະວ່າ 200,000 + 5,000𝑥 < 100,000 + 7,000𝑥 ➔ 100,000 < 2,000𝑥 ➔ 𝑥 > 50)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="12">{"16 cm (ເພາະວ່າ 3𝑥 ≤ 48 ➔ 𝑥 ≤ 16)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="13">{"7 ກິໂລກຣາມ (ເພາະວ່າ 15,000 + 5,000(𝑥 - 1) ≤ 45,000 ➔ 5,000(𝑥 - 1) ≤ 30,000 ➔ 𝑥 - 1 ≤ 6 ➔ 𝑥 ≤ 7)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="14">{"9.2 ຄະແນນ (ເພາະວ່າ 9.5 + 8.5 + 9.0 + 8.8 + 𝑥 ≥ 45.0 ➔ 35.8 + 𝑥 ≥ 45 ➔ 𝑥 ≥ 9.2)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນຝຶກຝົນການຕັ້ງສົມຜົນ ແລະ ວິເຄາະໂຈດບັນຫາເລື້ອຍໆ ຈະຊ່ວຍໃຫ້ເຮົາພັດທະນາຄວາມສາມາດໃນການແກ້ເລກໄດ້ໄວຂຶ້ນເດີ້!"
  }
};
