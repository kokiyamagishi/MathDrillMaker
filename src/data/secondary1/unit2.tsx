import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit2Data: UnitData = {
  unitNumber: 2,
  unitTitle: "ພາກທີ I - ບົດທີ 2: ຈຳນວນຖ້ວນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງຈຳນວນຖ້ວນບວກ ແລະ ຈຳນວນຖ້ວນລົບ, ການນຳໃຊ້ສັນຍະລັກກຸ່ມ (Z, Z+, Z-), ແກນຈຳນວນຖ້ວນ ແລະ ຈຳນວນກົງກັນຂ້າມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 10-15",
  subSections: [
    {
      title: "1. ຈຳນວນຖ້ວນບວກ ແລະ ຈຳນວນຖ້ວນລົບ",
      keyPoint: {
      title: "1. ຈຳນວນຖ້ວນບວກ ແລະ ຈຳນວນຖ້ວນລົບ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນຊີວິດປະຈຳວັນ, ເຮົາໃຊ້ເຄື່ອງໝາຍບວກ (+) ແລະ ລົບ (-) ເພື່ອສະແດງສິ່ງທີ່ກົງກັນຂ້າມກັນ:"}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                fontSize: "1.375rem",
              }}
            >
              <strong style={{ color: "#2E7D32" }}>{"ເຄື່ອງໝາຍບວກ (+)"}</strong>
              <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                <li>{"ໄດ້ກຳໄລ (ໄດ້ເງິນ)"}</li>
                <li>{"ຍ່າງໄປທາງໜ້າ"}</li>
                <li>{"ອຸນຫະພູມສູງກວ່າ 0°C"}</li>
              </ul>
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFEBEE",
                border: "2px solid #EF5350",
                borderRadius: "8px",
                fontSize: "1.375rem",
              }}
            >
              <strong style={{ color: "#C62828" }}>{"...ເຄື່ອງໝາຍລົບ (-)"}</strong>
              <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                <li>{"ຂາດທຶນ (ເສຍເງິນ)"}</li>
                <li>{"ຍ່າງຖອຍຫຼັງ"}</li>
                <li>{"ອຸນຫະພູມຕ່ຳກວ່າ 0°C"}</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເຄື່ອງໝາຍ + ແລະ - ຊ່ວຍໃຫ້ເຮົາບັນທຶກຂໍ້ມູນທີ່ກົງກັນຂ້າມກັນໄດ້ຢ່າງຊັດເຈນ!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງບອກວ່າຈຳນວນຕໍ່ໄປນີ້ ແມ່ນຈຳນວນຖ້ວນບວກ ຫຼື ຈຳນວນຖ້ວນລົບ ແລະ ຂຽນວິທີອ່ານ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) +5 ແມ່ນຈຳນວນຖ້ວນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{", ອ່ານວ່າ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) -12 ແມ່ນຈຳນວນຖ້ວນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{", ອ່ານວ່າ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) -7 ແມ່ນຈຳນວນຖ້ວນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{", ອ່ານວ່າ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ກຸ່ມຂອງຈຳນວນຖ້ວນ",
      keyPoint: {
      title: "2. ກຸ່ມຂອງຈຳນວນຖ້ວນ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ກຸ່ມຂອງຈຳນວນຖ້ວນ ສັນຍະລັກດ້ວຍ "}<strong>{"Z"}</strong>{" ເຊິ່ງປະກອບມີ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#F5F5F5",
              border: "2px solid #9E9E9E",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{"• "}<strong>{"Z+"}</strong>{" (ຈຳນວນຖ້ວນບວກ): {1, 2, 3, 4, ...}"}</div>
            <div>{"• "}<strong>{"Z-"}</strong>{" (ຈຳນວນຖ້ວນລົບ): {-1, -2, -3, -4, ...}"}</div>
            <div>{"• "}<strong>{"Z"}</strong>{" (ຈຳນວນຖ້ວນທັງໝົດ): {..., -2, -1, 0, 1, 2, ...}"}</div>
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0, color: "#D32F2F", fontWeight: "bold" }}>
            {"* ຈຳນວນ 0 ແມ່ນຈຳນວນຖ້ວນ ແຕ່ບໍ່ເປັນຈຳນວນຖ້ວນບວກ ແລະ ບໍ່ເປັນຈຳນວນຖ້ວນລົບ!"}
          </p>
        </div>
      ),
      hint: {
        text: "ກຸ່ມຈຳນວນທຳມະຊາດ N ແມ່ນສ່ວນໜຶ່ງຂອງກຸ່ມຈຳນວນຖ້ວນ Z (N ⊂ Z) ເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ "}<strong>{"∈"}</strong>{" ຫຼື "}<strong>{"∉"}</strong>{" ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) -4"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"Z+"}</span>
              <span style={{ marginLeft: "40px" }}>{"(2) 0"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"Z-"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) +7"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"Z"}</span>
              <span style={{ marginLeft: "40px" }}>{"(4) N"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"Z (ຕື່ມ ⊂ ຫຼື ⊄)"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ແກນຈຳນວນ ແລະ ຈຳນວນກົງກັນຂ້າມ",
      keyPoint: {
      title: "3. ແກນຈຳນວນ ແລະ ຈຳນວນກົງກັນຂ້າມ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຈຳນວນກົງກັນຂ້າມ ແມ່ນຈຳນວນທີ່ມີໄລຍະຫ່າງຈາກຈຸດເຄົ້າ 0 ເທົ່າກັນ ຢູ່ເທິງແກນຈຳນວນ:"}
          </p>
          {/* SVG Number Line representation of opposites */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "500px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 400 100" style={{ width: "100%", height: "auto" }}>
              {/* Axis line */}
              <line x1="20" y1="50" x2="380" y2="50" stroke="#333" strokeWidth="2" />
              <polygon points="380,50 372,45 372,55" fill="#333" />
              <text x="375" y="38" style={{ fontSize: "12px", fontFamily: "Inter" }}>{"+"}</text>

              {/* Tick marks and labels */}
              {[-3, -2, -1, 0, 1, 2, 3].map((val) => {
                const x = 200 + val * 50;
                return (
                  <g key={val}>
                    <line x1={x} y1="45" x2={x} y2="55" stroke="#333" strokeWidth="1.5" />
                    <text x={x} y="75" textAnchor="middle" style={{ fontSize: "14px", fontFamily: "Inter", fontWeight: val === 0 ? "bold" : "normal" }}>
                      {val === 0 ? "O (0)" : val > 0 ? `+${val}` : val}
                    </text>
                  </g>
                );
              })}

              {/* Opposites Arcs (-3 and +3) */}
              <path d="M 50,40 Q 125,5 200,40" fill="none" stroke="#E57373" strokeWidth="1.5" strokeDasharray="3,3" />
              <path d="M 200,40 Q 275,5 350,40" fill="none" stroke="#4FC3F7" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="125" y="25" textAnchor="middle" style={{ fontSize: "11px", fill: "#C62828" }}>{"ໄລຍະທາງເທົ່າກັນ"}</text>
              <text x="275" y="25" textAnchor="middle" style={{ fontSize: "11px", fill: "#0277BD" }}>{"ໄລຍະທາງເທົ່າກັນ"}</text>
            </svg>
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕົວຢ່າງ: "}<strong>{"+3"}</strong>{" ແລະ "}<strong>{"-3"}</strong>{" ແມ່ນຈຳນວນກົງກັນຂ້າມກັນ. ດັ່ງນັ້ນ, 符号の簡素化として:"}
            <br />
            <span style={{ color: "#0D47A1", fontWeight: "bold" }}>{"- ( -3 ) = +3"}</span>{" (ລົບຂອງລົບສາມ ເທົ່າກັບ ບວກສາມ)"}
          </p>
        </div>
      ),
      hint: {
        text: "ຈຳນວນກົງກັນຂ້າມຂອງ 0 ກໍ່ແມ່ນ 0 ເອງເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "📍 ສັງເກດຕຳແໜ່ງຈຸດເທິງແກນຈຳນວນ! ຈຸດທີ່ຢູ່ທາງຂວາຂອງ 0 ແມ່ນຈຳນວນບວກ (+), ທາງຊ້າຍແມ່ນຈຳນວນລົບ (-). ສ່ວນຈຳນວນກົງກັນຂ້າມໃຫ້ປ່ຽນເຄື່ອງໝາຍເດີ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງສັງເກດແກນຈຳນວນລຸ່ມນີ້ ແລ້ວຊອກຫາຕົວປະສານ (ຄ່າ) ຂອງແຕ່ລະຈຸດ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* SVG Number Line coordinates */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "500px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 400 90" style={{ width: "100%", height: "auto" }}>
                <line x1="20" y1="50" x2="380" y2="50" stroke="#333" strokeWidth="2" />
                <polygon points="380,50 372,45 372,55" fill="#333" />
                {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((val) => {
                  const x = 200 + val * 38;
                  return (
                    <g key={val}>
                      <line x1={x} y1="45" x2={x} y2="55" stroke="#333" strokeWidth="1.5" />
                      <text x={x} y="72" textAnchor="middle" style={{ fontSize: "12px", fontFamily: "Inter" }}>
                        {val === 0 ? "0" : val}
                      </text>
                    </g>
                  );
                })}
                {/* Points A at -3, B at +2 */}
                <circle cx="86" cy="50" r="5" fill="#E57373" />
                <text x="86" y="30" textAnchor="middle" style={{ fontSize: "14px", fontWeight: "bold", fill: "#C62828", fontFamily: "Inter" }}>{"A"}</text>

                <circle cx="276" cy="50" r="5" fill="#4FC3F7" />
                <text x="276" y="30" textAnchor="middle" style={{ fontSize: "14px", fontWeight: "bold", fill: "#0277BD", fontFamily: "Inter" }}>{"B"}</text>
              </svg>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ຕົວປະສານຂອງຈຸດ A ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) ຕົວປະສານຂອງຈຸດ B ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ເລກກ່ຽວກັບຈຳນວນກົງກັນຂ້າມລຸ່ມນີ້: "}{" "}
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
                <span>{"(1) ຈຳນວນກົງກັນຂ້າມຂອງ +8 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຄຳຕອບຂອງ - ( -15 ) ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
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
              <span>{"(1) -9"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"Z- (ຕື່ມ ∈ ຫຼື ∉)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) +15"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"Z- (ຕື່ມ ∈ ຫຼື ∉)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຈຳນວນກົງກັນຂ້າມຂອງ -20 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການເຄື່ອນທີ່ເທິງແກນຈຳນວນລຸ່ມນີ້: "}{" "}
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
              <span>{"(1) ຈາກຈຸດເຄົ້າ 0 ຍ່າງໄປທາງໜ້າ (ບວກ) 4 ກ້າວ ແລ້ວຍ່າງຖອຍຫຼັງ (ລົບ) 6 ກ້າວ ຈະຮອດຈຸດໃດ?"}</span>
              <br />
              <span>{"ຕອບ: ຈຸດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄ່າຂອງ - ( - ( -5 ) ) ແມ່ນ"}</span>
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
          <span key="u2-ans-1-1">{"(1) ຖ້ວນບວກ, ອ່ານວ່າ: ບວກສີບ"}</span>,
          <span key="u2-ans-1-2">{"(2) ຖ້ວນລົບ, ອ່ານວ່າ: ລົບສິບສອງ"}</span>,
          <span key="u2-ans-1-3">{"(3) ຖ້ວນລົບ, ອ່ານວ່າ: ລົບເຈັດ"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u2-ans-2-1">{"(1) ∉ (ເພາະ -4 ແມ່ນຈຳນວນລົບ)"}</span>,
          <span key="u2-ans-2-2">{"(2) ∉ (ເພາະ 0 ບໍ່ແມ່ນຈຳນວນຖ້ວນລົບ)"}</span>,
          <span key="u2-ans-2-3">{"(3) ∈ (ເພາະ +7 ແມ່ນຈຳນວນຖ້ວນ)"}</span>,
          <span key="u2-ans-2-4">{"(4) ⊂ (ເພາະ N ແມ່ນກຸ່ມຍ່ອຍຂອງ Z)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u2-ans-t1-1">{"(1) A = -3"}</span>,
          <span key="u2-ans-t1-2">{"(2) B = +2 (ຫຼື 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u2-ans-t2-1">{"(1) -8"}</span>,
          <span key="u2-ans-t2-2">{"(2) +15 (ຫຼື 15)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u2-ans-s1-1">{"(1) ∈ (ເພາະ -9 ແມ່ນຈຳນວນຖ້ວນລົບ)"}</span>,
          <span key="u2-ans-s1-2">{"(2) ∉ (ເພາະ +15 ແມ່ນຈຳນວນຖ້ວນບວກ)"}</span>,
          <span key="u2-ans-s1-3">{"(3) +20 (ຫຼື 20)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u2-ans-s2-1">{"(1) -2 (ເພາະ +4 - 6 = -2)"}</span>,
          <span key="u2-ans-s2-2">{"(2) -5 (ເພາະລົບ 3 ເທື່ອ ເປັນລົບ)"}</span>,
        ],
      },
    ],
    advice: "ຈື່ໄວ້ວ່າຈຳນວນກົງກັນຂ້າມຈະມີເຄື່ອງໝາຍຕ່າງກັນ. 0 ບໍ່ມີເຄື່ອງໝາຍບວກ ຫຼື ລົບເດີ້!",
  },
};
