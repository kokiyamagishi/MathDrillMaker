import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ພາກທີ II - ບົດທີ 15: ການວັດແທກລວງຍາວ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບວິທີການອ່ານຄ່າຈາກການວັດແທກ, ຄວາມຮັບຮູ້ເລື່ອງຄວາມຄາດເຄື່ອນ (e) ແລະ ຄ່າໃກ້ຄຽງທີ່ເປັນຈິງຂອງລວງຍາວ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 103-110",
  subSections: [
    {
      title: "1. ຄວາມຄາດເຄື່ອນໃນການວັດແທກ (Measurement Error)",
      keyPoint: {
      title: "1. ຄວາມຄາດເຄື່ອນໃນການວັດແທກ (Measurement Error)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ທຸກໆການວັດແທກຕົວຈິງ ຈະມີ 'ຄວາມຄາດເຄື່ອນ (e)' ສະເໝີ, ບໍ່ມີທາງຖືກຕ້ອງ 100% ຢ່າງສົມບູນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• ຄວາມຄາດເຄື່ອນສູງສຸດ ຈະບໍ່ເກີນ ເຄິ່ງໜຶ່ງ ຂອງຫົວໜ່ວຍນ້ອຍສຸດຂອງເຄື່ອງມືວັດແທກ."}</div>
            <div>{"• ຕົວຢ່າງ: ໃຊ້ໄມ້ບັນທັດທີ່ມີຫົວໜ່ວຍນ້ອຍສຸດແມ່ນ 1 mm (0.1 cm):"}</div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px", fontWeight: "bold" }}>
              {"→ ຄວາມຄາດເຄື່ອນສູງສຸດ e ≤ 0.5 mm (ຫຼື 0.05 cm)"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເຄື່ອງມືວັດແທກທີ່ມີ目盛りລະອຽດເທົ່າໃດ, ຄວາມຄາດເຄື່ອນຍິ່ງນ້ອຍລົງ ແລະ ການວັດແທກຍິ່ງຖືກຕ້ອງຫຼາຍຂຶ້ນເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງສັງເກດຮູບພາບໄມ້ບັນທັດ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          {/* Visual SVG Ruler and Pencil */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "450px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 400 130" style={{ width: "100%", height: "auto" }}>
              {/* Ruler Body */}
              <rect x="10" y="60" width="380" height="50" fill="#FFFDE7" stroke="#333" strokeWidth="2" />
              
              {/* Ruler Marks (Ticks) */}
              {/* Major ticks at 0, 1, 2, 3, 4, 5, 6, 7, 8 */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                const x = 20 + num * 44;
                return (
                  <g key={`major-${num}`}>
                    <line x1={x} y1="60" x2={x} y2="78" stroke="#333" strokeWidth="2" />
                    <text x={x - 4} y="95" style={{ fontSize: "12px", fontWeight: "bold", fill: "#333" }}>{num}</text>
                    {/* Minor ticks */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => {
                      const mx = x + m * 4.4;
                      if (mx < 380) {
                        return (
                          <line
                            key={`minor-${num}-${m}`}
                            x1={mx}
                            y1="60"
                            x2={mx}
                            y2={m === 5 ? "72" : "66"}
                            stroke="#555"
                            strokeWidth="1"
                          />
                        );
                      }
                      return null;
                    })}
                  </g>
                );
              })}

              {/* Pencil placed on ruler starting at 0 (x=20) to 7.3 cm (x=20 + 7.3*44 = 341.2) */}
              <path d="M 20,25 L 330,25 L 341.2,32.5 L 330,40 L 20,40 Z" fill="#FFEB3B" stroke="#F57F17" strokeWidth="1.5" />
              {/* Pencil Lead */}
              <polygon points="330,25 341.2,32.5 330,40" fill="#37474F" />
              {/* Pencil Eraser */}
              <rect x="20" y="25" width="20" height="15" fill="#FF8A80" />
              <line x1="40" y1="25" x2="40" y2="40" stroke="#333" strokeWidth="1.5" />

              {/* Label */}
              <text x="20" y="15" style={{ fontSize: "12px", fill: "#666" }}>{"ຊັງຕີແມັດ (cm)"}</text>
            </svg>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຈາກຮູບພາບ, ດິນສໍມີລວງຍາວປະມານຈັກ cm? (ອ່ານລະອຽດຮອດ 1 mm) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄວາມຄາດເຄື່ອນສູງສຸດ (e) ຂອງໄມ້ບັນທັດທີ່ມີຫົວໜ່ວຍນ້ອຍສຸດ 1 mm ຈະບໍ່ເກີນຈັກ mm?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"mm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຈາກຂໍ້ (2), ຄ່າຄວາມຄາດເຄື່ອນດັ່ງກ່າວ ຄິດເປັນຈັກ cm?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ຂອບເຂດຂອງຄ່າຈິງ (Range of Real Value)",
      keyPoint: {
      title: "2. ຂອບເຂດຂອງຄ່າຈິງ (Range of Real Value)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຖ້າເຮົາແທກລວງຍາວຂອງວັດຖຸໜຶ່ງໄດ້ L_measured = 15.3 cm ດ້ວຍໄມ້ບັນທັດ 1 mm, ຄ່າຈິງ (L) ຂອງມັນຈະຢູ່ໃນຂອບເຂດ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2E7D32", textAlign: "center" }}>
              {"15.3 cm - 0.05 cm ≤ L ≤ 15.3 cm + 0.05 cm"}
              <br />
              {"→ 15.25 cm ≤ L ≤ 15.35 cm"}
            </div>
            <div style={{ borderTop: "1px solid #C8E6C9", paddingTop: "8px", fontSize: "1.25rem" }}>
              {"* 15.25 cm ເອີ້ນວ່າ ຂີດຈຳກັດລຸ່ມ, ແລະ 15.35 cm ເອີ້ນວ່າ ຂີດຈຳກັດເທິງ ຂອງຄ່າຈິງເດີ້!"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຄ່າຈິງຈະຢູ່ລະຫວ່າງ (ຄ່າທີ່ແທກໄດ້ - ຄວາມຄາດເຄື່ອນ) ຫາ (ຄ່າທີ່ແທກໄດ້ + ຄວາມຄາດເຄື່ອນ) ສະເໝີ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງກຳນົດຂອບເຂດຂີດຈຳກັດຂອງຄ່າຈິງ (L) ຈາກການວັດແທກຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຖ້າແທກຄວາມຍາວໄດ້ 12.4 cm. ຂອບເຂດຄ່າຈິງແມ່ນ 12.35 cm ≤ L ≤"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າແທກຄວາມຍາວໄດ້ 8.0 cm. ຂອບເຂດຄ່າຈິງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm ≤ L ≤ 8.05 cm"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ການວັດແທກທາງອ້ອມ (Indirect Measurement)",
      keyPoint: {
      title: "3. ການວັດແທກທາງອ້ອມ (Indirect Measurement)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສຳລັບວັດຖຸທີ່ມີຂະໜາດນ້ອຍຫຼາຍ ເຊັ່ນ ຄວາມໜາຂອງເຈ້ຍ 1 ແຜ່ນ, ເຮົາຈະໃຊ້ວິທີວັດແທກທາງອ້ອມ ໂດຍການວາງຊ້ອນກັນຫຼາຍໆແຜ່ນ ແລ້ວຫານອອກ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ເຈ້ຍ 100 ແຜ່ນ ຊ້ອນກັນແທກໄດ້ໜາ 1.2 cm (12 mm):"}
            </div>
            <div style={{ color: "#E65100", paddingLeft: "16px", fontWeight: "bold" }}>
              {"• ຄວາມໜາປະມານຂອງເຈ້ຍ 1 ແຜ່ນ = 12 mm ÷ 100 = 0.12 mm"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ວິທີນີ້ຊ່ວຍຫຼຸດຜ່ອນຄວາມຄາດເຄື່ອນຂອງການວັດແທກສິ່ງຂອງທີ່ມີຂະໜາດນ້ອຍຫຼາຍໄດ້ດີທີ່ສຸດ!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຄວາມຄາດເຄື່ອນສູງສຸດຈະເທົ່າກັບເຄິ່ງໜຶ່ງຂອງຫົວໜ່ວຍນ້ອຍສຸດ. ເຄື່ອງມືທີ່ມີຄວາມຄາດເຄື່ອນນ້ອຍກວ່າ ຈະມີຄວາມລະອຽດສູງກວ່າ! ບົດທ້າທາຍ 2: ການຫາຄວາມໜາຂອງເຈ້ຍ ຫຼື ຫຼຽນ 1 ອັນ ໃຫ້ເອົາຄວາມສູງທັງໝົດ (ປ່ຽນເປັນ mm) ຫານໃຫ້ຈຳນວນອັນເດີ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຖືກຕ້ອງ ແລະ ຄວາມລະອຽດຂອງການວັດແທກ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຖ້າແທກລວງຍາວດ້ວຍໄມ້ແມັດທີ່ມີຫົວໜ່ວຍນ້ອຍສຸດແມ່ນ 1 cm. ຄວາມຄາດເຄື່ອນສູງສຸດ e ຈະບໍ່ເກີນຈັກ cm?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ລະຫວ່າງການວັດແທກໄດ້ 15 cm ແລະ 15.0 cm, ຄ່າໃດມີຄວາມລະອຽດ (ຖືກຕ້ອງ) ສູງກວ່າ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການວັດແທກທາງອ້ອມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ປຶ້ມປົກອ່ອນ 100 ແຜ່ນ ຊ້ອນກັນແທກຄວາມໜາໄດ້ 1.2 cm. ຖາມວ່າເຈ້ຍ 1 ແຜ່ນ ຈະໜາປະມານຈັກ mm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"mm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຫຼຽນໂລຫະ 20 ອັນ ວາງຊ້ອນກັນສູງ 4 cm. ຖາມວ່າຫຼຽນ 1 ອັນ ຈະໜາປະມານຈັກ mm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"mm"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ ແລະ ຕອບຄຳຖາມເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຖ້າແທກລວງຍາວໂຕະໄດ້ 120.5 cm (ຫົວໜ່ວຍນ້ອຍສຸດ 1 mm). ຄວາມຄາດເຄື່ອນສູງສຸດແມ່ນຈັກ cm?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ໄລຍະຂີດຈຳກັດເທິງ (ສູງສຸດ) ຂອງຄ່າຈິງ L ແມ່ນຈັກ cm?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຈາກຂໍ້ (1), ໄລຍະຂີດຈຳກັດລຸ່ມ (ນ້ອຍສຸດ) ຂອງຄ່າຈິງ L ແມ່ນຈັກ cm?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບການເລືອກເຄື່ອງມື ແລະ ຄວາມເປັນຈິງໃນການວັດແທກ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ເພື່ອວັດແທກລວງຍາວ ແລະ ລວງກວ້າງຂອງສະໜາມກິລາໂຮງຮຽນ, ເຄື່ອງມືໃດເໝາະສົມທີ່ສຸດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າແທກລວງຍາວໄດ້ 25.8 cm ດ້ວຍໄມ້ບັນທັດ 1 mm, ໄລຍະຄ່າຈິງແມ່ນ 25.75 cm ≤ L ≤ 25.85 cm (ຕື່ມ ຖືກ ຫຼື ຜິດ)?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u15-ans-1-1">{"(1) 7.3 cm (ຫຼື 73 mm)"}</span>,
          <span key="u15-ans-1-2">{"(2) 0.5 mm (ເຄິ່ງໜຶ່ງ ຂອງ 1 mm)"}</span>,
          <span key="u15-ans-1-3">{"(3) 0.05 cm (0.5 mm = 0.05 cm)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u15-ans-2-1">{"(1) 12.45 cm (12.4 + 0.05 = 12.45)"}</span>,
          <span key="u15-ans-2-2">{"(2) 7.95 cm (8.0 - 0.05 = 7.95)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u15-ans-t1-1">{"(1) 0.5 cm (ເຄິ່ງໜຶ່ງ ຂອງ 1 cm)"}</span>,
          <span key="u15-ans-t1-2">{"(2) 15.0 cm (ເພາະເຄື່ອງມືມີຄວາມລະອຽດຮອດຫຼັກທົດສະນິຍົມ 1 ຕຳແໜ່ງ / e = 0.05 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u15-ans-t2-1">{"(1) 0.12 mm (1.2 cm = 12 mm; 12 ÷ 100 = 0.12 mm)"}</span>,
          <span key="u15-ans-t2-2">{"(2) 2 mm (4 cm = 40 mm; 40 ÷ 20 = 2 mm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u15-ans-s1-1">{"(1) 0.05 cm (ເຄິ່ງໜຶ່ງຂອງ 1 mm = 0.5 mm = 0.05 cm)"}</span>,
          <span key="u15-ans-s1-2">{"(2) 120.55 cm (120.5 + 0.05 = 120.55)"}</span>,
          <span key="u15-ans-s1-3">{"(3) 120.45 cm (120.5 - 0.05 = 120.45)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u15-ans-s2-1">{"(1) ສາຍແມັດຍາວ (Tape Measure)"}</span>,
          <span key="u15-ans-s2-2">{"(2) ຖືກ (ຕາມຫຼັກການຂອບເຂດຄວາມຄາດເຄື່ອນ e ≤ 0.05 cm)"}</span>,
        ],
      },
    ],
    advice: "ທຸກການວັດແທກຈະມີຄວາມຄາດເຄື່ອນສະເໝີ ໂດຍບໍ່ເກີນເຄິ່ງໜຶ່ງຂອງຫົວໜ່ວຍນ້ອຍສຸດ. ການວັດແທກທາງອ້ອມ ໂດຍການວາງຊ້ອນກັນຈະຊ່ວຍໃຫ້ວັດແທກສິ່ງຂອງທີ່ນ້ອຍຫຼາຍໄດ້ຢ່າງລະອຽດເດີ້!",
  },
};
