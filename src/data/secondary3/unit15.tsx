import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ພາກທີ I - ບົດທີ 7: ການແກ້ສົມຜົນຂັ້ນສອງ (ຕໍ່)",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ວິທີແກ້ສົມຜົນຂັ້ນສອງທີ່ມີຄວາມຊັບຊ້ອນ ເຊັ່ນ: ສົມຜົນປ່ຽນຕົວປ່ຽນຊ່ວຍ ແລະ ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 43-48",
  subSections: [
    {
      title: "1. ການແກ້ສົມຜົນໂດຍການປ່ຽນຕົວປ່ຽນຊ່ວຍ",
      keyPoint: {
        title: "ສົມຜົນຂັ້ນສີ່ຄູ່ ແລະ ການແກ້ໄຂ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສົມຜົນຂັ້ນສີ່ຄູ່ ຮູບຮ່າງ ax⁴ + bx² + c = 0 ສາມາດແກ້ໄດ້ໂດຍການວາງຕົວປ່ຽນຊ່ວຍ t = 𝑥² (t ≥ 0):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຫຼັກການ: ປ່ຽນ ax⁴ + bx² + c = 0 ➔ at² + bt + c = 0"}</div>
              <div>{"• ຕົວຢ່າງ: 𝑥⁴ - 5𝑥² + 4 = 0 ➔ ວາງ t = 𝑥² ➔ t² - 5t + 4 = 0"}</div>
              <div style={{ fontWeight: "bold", color: "#0D47A1", paddingLeft: "16px" }}>
                {"➔ (t - 1)(t - 4) = 0 ➔ t = 1 ຫຼື t = 4"}
              </div>
              <div style={{ fontWeight: "bold", color: "#0D47A1", paddingLeft: "16px" }}>
                {"➔ 𝑥² = 1 ➔ 𝑥 = ±1 ; ແລະ 𝑥² = 4 ➔ 𝑥 = ±2."}
              </div>
            </div>

            {/* Substitution Steps SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ແຜນວາດຂັ້ນຕອນການປ່ຽນຕົວປ່ຽນຊ່ວຍ"}</span>
                <svg viewBox="0 0 400 160" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Step 1 */}
                  <rect x="10" y="50" width="110" height="60" rx="4" fill="#4CAF50" />
                  <text x="64" y="88" fill="#FFFFFF" fontSize="16" textAnchor="middle" fontWeight="bold">{"𝑥⁴ - 5𝑥² + 4 = 0"}</text>

                  <line x1="120" y1="80" x2="140" y2="80" stroke="#37474F" strokeWidth="2" />

                  {/* Step 2 */}
                  <rect x="144" y="50" width="110" height="60" rx="4" fill="#2196F3" />
                  <text x="200" y="88" fill="#FFFFFF" fontSize="16" textAnchor="middle" fontWeight="bold">{"t² - 5t + 4 = 0"}</text>

                  <line x1="254" y1="80" x2="274" y2="80" stroke="#37474F" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="280" y="50" width="110" height="60" rx="4" fill="#FF9800" />
                  <text x="334" y="88" fill="#FFFFFF" fontSize="16" textAnchor="middle" fontWeight="bold">{"𝑥 = ±1, ±2"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາວາງ t = x² ຕ້ອງຈື່ສະເໝີວ່າ t ຈະຕ້ອງມີຄ່າຫຼາຍກວ່າ ຫຼື ເທົ່າກັບສູນ (t ≥ 0) ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາໃຈຜົນຂອງສົມຜົນຂັ້ນສີ່ຄູ່ຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ສຳລັບສົມຜົນ "} <span className="math">{"𝑥⁴ - 5𝑥² + 4 = 0"}</span> {". ຈົ່ງຊອກຫາສອງໃຈຜົນທີ່ເປັນຄ່າບວກ (ຂຽນແຍກດ້ວຍຈຸດ)?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ສຳລັບສົມຜົນດຽວກັນ, ສົມຜົນນີ້ມີຈຳນວນໃຈຜົນຈິງທັງໝົດຈັກໃຈຜົນ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ສຳລັບສົມຜົນ "} <span className="math">{"𝑥⁴ - 10𝑥² + 9 = 0"}</span> {". ຈົ່ງຊອກຫາໃຈຜົນທີ່ເປັນຄ່າບວກໃຫຍ່ທີ່ສຸດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງແກ້ສົມຜົນໂດຍການປ່ຽນຕົວປ່ຽນຊ່ວຍ t = 𝑥 - 1: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າໃຫ້ສົມຜົນ "} <span className="math">{"(𝑥 - 1)² - 4(𝑥 - 1) + 3 = 0"}</span> {" ໂດຍວາງ t = 𝑥 - 1 ຈະໄດ້ t ບວກແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈາກຄ່າ t ບວກຂ້າງເທິງ, ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ທີ່ເປັນໃຈຜົນໃຫຍ່ທີ່ສຸດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໂຈດບັນຫາເລຂາຄະນິດ ແລະ ຜົນຄູນຈຳນວນ",
      keyPoint: {
        title: "ການສ້າງ ແລະ ແກ້ສົມຜົນຈາກໂຈດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການນຳໃຊ້ສົມຜົນຂັ້ນສອງເຂົ້າໃນການແກ້ໂຈດບັນຫາຕົວຈິງ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ໂຈດສາມແຈສາກ: ນຳໃຊ້ສູດເນື້ອທີ່ S = (ກວ້າງ × ສູງ) / 2 ເພື່ອສ້າງສົມຜົນ."}</div>
              <div>{"• ໂຈດຜົນຄູນຈຳນວນ: ສອງຈຳນວນຖ້ວນຕິດຕໍ່ກັນແມ່ນ 𝑥 ແລະ 𝑥 + 1. ຜົນຄູນແມ່ນ 𝑥(𝑥 + 1) = k."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຜົນຄູນສອງຈຳນວນຕິດຕໍ່ກັນແມ່ນ 90 ➔ 𝑥(𝑥 + 1) = 90 ➔ 𝑥² + 𝑥 - 90 = 0 ➔ 𝑥 = 9."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໃນໂຈດບັນຫາຄວາມຍາວ ຫຼື ຂະໜາດ, ຄຳຕອບທີ່ເປັນຄ່າລົບ (-) ຈະບໍ່ຖືກນຳໃຊ້ເພາະຄວາມຍາວຕ້ອງເປັນຄ່າບວກສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຮູບສາມແຈສາກໜຶ່ງມີຂ້າງຕິດຊາກໜຶ່ງ ຍາວກວ່າອີກຂ້າງໜຶ່ງ 2 cm. ຖ້າເນື້ອທີ່ແມ່ນ 24 cm². ຈົ່ງຊອກຫາຄ່າຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຄວາມຍາວຂອງຂ້າງຕິດຊາກທີ່ສັ້ນກວ່າ ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຄວາມຍາວຂອງຂ້າງຕິດຊາກທີ່ຍາວກວ່າ ແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຄວາມຍາວຂອງຂ້າງກົງຊາກ ແມ່ນຈັກ cm? (ນຳໃຊ້ປີຕາກໍ)"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຈຳນວນຖ້ວນບວກຈາກໂຈດບັນຫາຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຜົນຄູນຂອງສອງຈຳນວນຖ້ວນບວກຕິດຕໍ່ກັນແມ່ນ "} <span className="math">{"90"}</span> {". ຈຳນວນທີ່ນ້ອຍກວ່າແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຜົນບວກກຳລັງສອງຂອງສອງຈຳນວນຖ້ວນບວກຕິດຕໍ່ກັນແມ່ນ "} <span className="math">{"25"}</span> {". ຈຳນວນທີ່ນ້ອຍກວ່າແມ່ນເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສ້າງສົມຜົນບໍລິມາດ ຫຼື ຄິດໄລ່ຜົນບວກຂອງຄ່າສຳບູນຂອງທຸກໆໃຈຜົນຢ່າງຮອບຄອບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຜົນບວກຄ່າສຳບູນຂອງທຸກໆໃຈຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງແກ້ສົມຜົນຂັ້ນສີ່ຄູ່ "} <span className="math">{"𝑥⁴ - 13𝑥² + 36 = 0"}</span> {". ແລ້ວຊອກຫາຜົນບວກຂອງຄ່າສຳບູນຂອງທຸກໆໃຈຜົນຈິງ (|𝑥₁| + |𝑥₂| + |𝑥₃| + |𝑥₄|)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນບວກແມ່ນ"}</span>
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
              {"ໂຈດບັນຫາການຕັດມຸມເຮັດກ່ອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ແຜ່ນເຈ້ຍແຂງຮູບຈະຕຸລັດຖືກຕັດມຸມທັງສີ່ອອກເປັນຮູບຈະຕຸລັດນ້ອຍຂະໜາດ "} <span className="math">{"2 cm × 2 cm"}</span> {" ແລ້ວພັບຂຶ້ນເປັນກ່ອງບໍ່ມີຝາ. ຖ້າກ່ອງມີບໍລິມາດແມ່ນ "} <span className="math">{"72 cm³"}</span> {". ຈົ່ງຊອກຫາຄວາມຍາວຂ້າງຂອງເຈ້ຍແຂງເລີ່ມຕົ້ນ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຄວາມຍາວຂ້າງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ໂຈດຄວາມສຳພັນລະຫວ່າງຕົວເລກ ແລະ ກຳລັງສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈຳນວນຖ້ວນບວກໜຶ່ງ ມີຄ່ານ້ອຍກວ່າກຳລັງສອງຂອງມັນເອງຢູ່ 12 ພໍດີ. ຈົ່ງຊອກຫາຈຳນວນຖ້ວນບວກນັ້ນ. (ສົມຜົນ: 𝑥 = 𝑥² - 12)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນນັ້ນແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດບັນຫາທາງຍ່າງອ້ອມສະລອຍນ້ຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ສະລອຍນ້ຳຮູບສີ່ແຈສາກຂະໜາດ "} <span className="math">{"10 m × 5 m"}</span> {" ຖືກອ້ອມຮອບດ້ວຍທາງຍ່າງທີ່ມີຄວາມກວ້າງ 𝑥 ແມັດເທົ່າກັນທຸກດ້ານ. ຖ້າເນື້ອທີ່ລວມທັງໝົດ (ສະນ້ຳ + ທາງຍ່າງ) ແມ່ນ "} <span className="math">{"84 m²"}</span> {". ຈົ່ງຊອກຫາຄວາມກວ້າງ 𝑥 ຂອງທາງຍ່າງ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມກວ້າງ 𝑥 ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ແມັດ (m)"}</span>
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
          <span key="1">{"(1) 1, 2 (ວາງ t = 𝑥² ➔ t² - 5t + 4 = 0 ➔ t = 1, 4 ➔ 𝑥² = 1, 4 ➔ ໃຈຜົນບວກແມ່ນ 1 ແລະ 2)"}</span>,
          <span key="2">{"(2) 4 (ຍ້ອນວ່າ t = 1 ➔ 𝑥 = ±1, ແລະ t = 4 ➔ 𝑥 = ±2 ➔ ໃຈຜົນຈິງທັງໝົດມີ 4 ໃຈຜົນ)"}</span>,
          <span key="3">{"(3) 3 (ວາງ t = 𝑥² ➔ t² - 10t + 9 = 0 ➔ t = 1, 9 ➔ 𝑥² = 1, 9 ➔ ໃຈຜົນບວກໃຫຍ່ສຸດແມ່ນ √9 = 3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 3 (ວາງ t = 𝑥 - 1 ➔ t² - 4t + 3 = 0 ➔ (t - 1)(t - 3) = 0 ➔ t ບວກແມ່ນ 3 ແລະ 1 ➔ ຕົວໃຫຍ່ແມ່ນ 3)"}</span>,
          <span key="5">{"(2) 4 (ຈາກ t = 3 ➔ 𝑥 - 1 = 3 ➔ 𝑥 = 4)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"10 (ວາງ t = 𝑥² ➔ t² - 13t + 36 = 0 ➔ t = 4, 9 ➔ 𝑥 = ±2, ±3 ➔ ຜົນບວກຄ່າສຳບູນ = |2| + |-2| + |3| + |-3| = 2 + 2 + 3 + 3 = 10)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"10 cm (ໃຫ້ຂ້າງເຈ້ຍຍາວ 𝑥 ➔ ຂ້າງກ່ອງຍາວ 𝑥 - 4, ສູງ 2 ➔ ບໍລິມາດ = 2 × (𝑥-4)² = 72 ➔ (𝑥-4)² = 36 ➔ 𝑥-4 = 6 ➔ 𝑥 = 10 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"4 (ຈາກສົມຜົນ 𝑥 = 𝑥² - 12 ➔ 𝑥² - 𝑥 - 12 = 0 ➔ (𝑥 - 4)(𝑥 + 3) = 0 ➔ ໃຈຜົນບວກແມ່ນ 4)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"1 m (ເນື້ອທີ່ລວມ = (10 + 2𝑥)(5 + 2𝑥) = 84 ➔ 50 + 30𝑥 + 4𝑥² = 84 ➔ 4𝑥² + 30𝑥 - 34 = 0 ➔ 2𝑥² + 15𝑥 - 17 = 0 ➔ (2𝑥 + 17)(𝑥 - 1) = 0 ➔ 𝑥 = 1 m)"}</span>
        ]
      }
    ],
    advice: "ການແກ້ສົມຜົນຂັ້ນສອງໂດຍການປ່ຽນຕົວປ່ຽນຊ່ວຍ ແລະ ການນຳໃຊ້ເຂົ້າໃນໂຈດບັນຫາຊີວິດຈິງ ຈະຊ່ວຍໃຫ້ເຮົາມີຄວາມຄິດສ້າງສັນ ແລະ ວິເຄາະບັນຫາໄດ້ຢ່າງເປັນລະບົບເດີ້!"
  }
};
