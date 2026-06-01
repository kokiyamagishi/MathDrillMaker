import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit11Data: UnitData = {
  unitNumber: 11,
  unitTitle: "ພາກທີ II - ບົດທີ 11: ຄວາມຮັບຮູ້ກ່ຽວກັບເມັດ ແລະ ເສັ້ນຊື່",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບແນວຄວາມຄິດພື້ນຖານຂອງເລຂາຄະນິດ ເຊັ່ນ: ເມັດ, ເສັ້ນຊື່, ທ່ອນຊື່, ເຄິ່ງເສັ້ນຊື່, ຄວາມສຳພັນ ∈, ∉ ແລະ ເມັດຕັດກັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 76-80",
  subSections: [
    {
      title: "1. ເມັດ ແລະ ເສັ້ນຊື່ (Points and Lines)",
      keyPoint: {
      title: "1. ເມັດ ແລະ ເສັ້ນຊື່ (Points and Lines)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"• ເມັດ (Point) ແມ່ນສິ່ງທີ່ບໍ່ມີຂະໜາດ, ສັນຍະລັກດ້ວຍຕົວອັກສອນໃຫຍ່ ເຊັ່ນ: A, B, C..."}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"• ເສັ້ນຊື່ (Line) ບໍ່ມີຂອບເຂດຈຳກັດ, ສັນຍະລັກດ້ວຍຕົວອັກສອນນ້ອຍ ເຊັ່ນ: d, (d) ຫຼື ຂຽນຜ່ານສອງເມັດ ເຊັ່ນ: AB."}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"• ຄວາມສຳພັນລະຫວ່າງ ເມັດ ແລະ ເສັ້ນຊື່:"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{"- ເມັດ A ຢູ່ເທິງເສັ້ນຊື່ d: ຕື່ມສັນຍະລັກ "}<strong>{"A ∈ d"}</strong></div>
            <div>{"- ເມັດ B ບໍ່ຢູ່ເທິງເສັ້ນຊື່ d: ຕື່ມສັນຍະລັກ "}<strong>{"B ∉ d"}</strong></div>
          </div>
        </div>
      ),
      hint: {
        text: "ສັນຍະລັກ ∈ ໝາຍເຖິງ 'ຢູ່ໃນ' ຫຼື 'ເປັນອົງປະກອບ', ສ່ວນ ∉ ໝາຍເຖິງ 'ບໍ່ຢູ່ໃນ' ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງສັງເກດຮູບພາບ ແລ້ວຕື່ມສັນຍະລັກ "}<strong>{"∈"}</strong>{" ຫຼື "}<strong>{"∉"}</strong>{" ໃສ່ບ່ອນວ່າງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          {/* Geometric SVG 1 */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 300 100" style={{ width: "100%", height: "auto" }}>
              {/* Line d */}
              <line x1="20" y1="50" x2="280" y2="50" stroke="#333" strokeWidth="2" />
              <text x="285" y="55" style={{ fontSize: "16px", fontWeight: "bold", fill: "#333" }}>{"d"}</text>
              
              {/* Point A on line */}
              <circle cx="80" cy="50" r="4" fill="#1E88E5" />
              <text x="75" y="40" style={{ fontSize: "16px", fontWeight: "bold", fill: "#1E88E5" }}>{"A"}</text>

              {/* Point B on line */}
              <circle cx="200" cy="50" r="4" fill="#1E88E5" />
              <text x="195" y="40" style={{ fontSize: "16px", fontWeight: "bold", fill: "#1E88E5" }}>{"B"}</text>

              {/* Point C outside line */}
              <circle cx="140" cy="20" r="4" fill="#D32F2F" />
              <text x="135" y="15" style={{ fontSize: "16px", fontWeight: "bold", fill: "#D32F2F" }}>{"C"}</text>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) ເມັດ A"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ d"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ເມັດ C"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ d"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) ເມັດ B"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ d"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ເສັ້ນຊື່, ເຄິ່ງເສັ້ນຊື່ ແລະ ທ່ອນຊື່",
      keyPoint: {
      title: "2. ເສັ້ນຊື່, ເຄິ່ງເສັ້ນຊື່ ແລະ ທ່ອນຊື່",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນເລຂາຄະນິດ ມີຄວາມແຕກຕ່າງລະຫວ່າງ 3 ແນວຄິດນີ້:"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div><strong>{"• ເສັ້ນຊື່ AB (Line):"}</strong>{" ບໍ່ມີຈຸດປາຍ (ຍາວອອກໄປໄດ້ບໍ່ມີສິ້ນສຸດທັງສອງເບື້ອງ)."}</div>
            <div><strong>{"• ເຄິ່ງເສັ້ນຊື່ [Ax) (Half-line):"}</strong>{" ມີຂອບເຂດເບື້ອງ A (ຈຸດປາຍ A) ແຕ່ບໍ່ມີຂອບເຂດເບື້ອງ x."}</div>
            <div><strong>{"• ທ່ອນຊື່ [AB] (Segment):"}</strong>{" ມີຂອບເຂດຈຳກັດ (ມີ 2 ຈຸດປາຍ ຄື A ແລະ B) ຄວາມຍາວແນ່ນອນ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ທ່ອນຊື່ [AB] ສາມາດແທກລວງຍາວໄດ້ ແຕ່ເສັ້ນຊື່ ແລະ ເຄິ່ງເສັ້ນຊື່ບໍ່ສາມາດແທກລວງຍາວໄດ້ເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງເລືອກຄຳສັບທີ່ຖືກຕ້ອງ (ທ່ອນຊື່ / ເສັ້ນຊື່ / ເຄິ່ງເສັ້ນຊື່) ມາຕື່ມໃສ່ບ່ອນວ່າງ: "}{" "}
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
              <span>{"(1) ສັນຍະລັກ [AB] ໝາຍເຖິງ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສັນຍະລັກ [Ax) ໝາຍເຖິງ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ເມັດຕັດກັນຂອງສອງເສັ້ນຊື່ (Intersection)",
      keyPoint: {
      title: "3. ເມັດຕັດກັນຂອງສອງເສັ້ນຊື່ (Intersection)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຖ້າສອງເສັ້ນຊື່ d₁ ແລະ d₂ ຕັດກັນຢູ່ຈຸດໜຶ່ງ, ຈຸດນັ້ນເອີ້ນວ່າ 'ເມັດຕັດກັນ (Intersection Point)':"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"ຖ້າ d₁ ຕັດ d₂ ຢູ່ເມັດ P:"}</div>
            <div>{"• ເມັດ P ແມ່ນ ເມັດຕັດກັນ ຂອງສອງເສັ້ນຊື່."}</div>
            <div style={{ color: "#D84315", fontWeight: "bold" }}>
              {"• ດັ່ງນັ້ນ ເມັດ P ∈ d₁ ແລະ P ∈ d₂ ສະເໝີ!"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເມັດຕັດກັນແມ່ນຈຸດຮ່ວມດຽວທີ່ຢູ່ເທິງທັງສອງເສັ້ນຊື່ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຖ້າເມັດທັງໝົດນອນຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ ເຮົາເວົ້າວ່າພວກມັນ 'ຮ່ວມເສັ້ນຊື່ກັນ'. ບົດທ້າທາຍ 2: ຈຸດຕັດກັນແມ່ນຈຸດທີ່ສອງເສັ້ນຊື່ມາຕັດກັນ ດັ່ງນັ້ນຈຸດຕັດກັນ P ຈະນອນຢູ່ເທິງທັງສອງເສັ້ນຊື່!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງສັງເກດຮູບພາບ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* Geometric SVG 2 */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 300 100" style={{ width: "100%", height: "auto" }}>
                {/* Horizontal Line passing X, Y, Z */}
                <line x1="20" y1="50" x2="280" y2="50" stroke="#4CAF50" strokeWidth="2" />
                
                <circle cx="60" cy="50" r="4" fill="#2E7D32" />
                <text x="55" y="40" style={{ fontSize: "16px", fontWeight: "bold", fill: "#2E7D32" }}>{"X"}</text>

                <circle cx="150" cy="50" r="4" fill="#2E7D32" />
                <text x="145" y="40" style={{ fontSize: "16px", fontWeight: "bold", fill: "#2E7D32" }}>{"Y"}</text>

                <circle cx="240" cy="50" r="4" fill="#2E7D32" />
                <text x="235" y="40" style={{ fontSize: "16px", fontWeight: "bold", fill: "#2E7D32" }}>{"Z"}</text>

                {/* Point W off line */}
                <circle cx="150" cy="80" r="4" fill="#D32F2F" />
                <text x="145" y="75" style={{ fontSize: "16px", fontWeight: "bold", fill: "#D32F2F" }}>{"W"}</text>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span>{"(1) ຈົ່ງຂຽນຊື່ 3 ເມັດທີ່ນອນຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ (ຮ່ວມເສັ້ນຊື່):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span>{"(2) ເມັດ W ຢູ່ເທິງເສັ້ນຊື່ XY ຫຼື ບໍ່? (ຕື່ມ ຢູ່ ຫຼື ບໍ່ຢູ່):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
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
              {"ຈົ່ງສັງເກດຮູບເສັ້ນຊື່ຕັດກັນ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* Geometric SVG 3 */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 300 120" style={{ width: "100%", height: "auto" }}>
                {/* Line d1 */}
                <line x1="30" y1="20" x2="270" y2="100" stroke="#FF9800" strokeWidth="2" />
                <text x="275" y="105" style={{ fontSize: "16px", fontWeight: "bold", fill: "#FF9800" }}>{"d₁"}</text>

                {/* Line d2 */}
                <line x1="30" y1="100" x2="270" y2="20" stroke="#E040FB" strokeWidth="2" />
                <text x="275" y="25" style={{ fontSize: "16px", fontWeight: "bold", fill: "#E040FB" }}>{"d₂"}</text>

                {/* Intersection Point P */}
                <circle cx="150" cy="60" r="4" fill="#333" />
                <text x="145" y="50" style={{ fontSize: "16px", fontWeight: "bold", fill: "#333" }}>{"P"}</text>
              </svg>
            </div>
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
                <span>{"(1) ເມັດຕັດກັນ ຂອງເສັ້ນຊື່ d₁ ແລະ d₂ ແມ່ນເມັດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຕື່ມສັນຍະລັກ: P"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"d₁ ແລະ P"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"d₂ (ຕື່ມ ∈ ຫຼື ∉)"}</span>
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
            {"ຈົ່ງສັງເກດຮູບສາມແຈ ABC ທີ່ມີການຕໍ່ເສັ້ນຊື່ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          {/* Geometric SVG 4 */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 300 150" style={{ width: "100%", height: "auto" }}>
              {/* Lines formed by triangle sides */}
              {/* Line AB extended */}
              <line x1="20" y1="130" x2="220" y2="10" stroke="#9E9E9E" strokeWidth="2" strokeDasharray="2" />
              {/* Line BC extended */}
              <line x1="30" y1="120" x2="280" y2="120" stroke="#9E9E9E" strokeWidth="2" strokeDasharray="2" />
              {/* Line AC extended */}
              <line x1="220" y1="10" x2="270" y2="130" stroke="#9E9E9E" strokeWidth="2" strokeDasharray="2" />

              {/* Triangle path highlight */}
              <polygon points="50,120 200,22 250,120" fill="none" stroke="#2196F3" strokeWidth="3" />

              {/* Point A */}
              <circle cx="200" cy="22" r="5" fill="#0D47A1" />
              <text x="195" y="15" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"A"}</text>

              {/* Point B */}
              <circle cx="50" cy="120" r="5" fill="#0D47A1" />
              <text x="40" y="140" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"B"}</text>

              {/* Point C */}
              <circle cx="250" cy="120" r="5" fill="#0D47A1" />
              <text x="255" y="140" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"C"}</text>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ເມັດ A ຢູ່ເທິງເສັ້ນຊື່ BC ຫຼື ບໍ່? (ຕື່ມ ຢູ່ ຫຼື ບໍ່ຢູ່):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເມັດຕັດກັນ ຂອງເສັ້ນຊື່ AB ແລະ ເສັ້ນຊື່ AC ແມ່ນເມັດໃດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຕື່ມສັນຍະລັກ: ເມັດ B"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ BC (ตື່ມ ∈ ຫຼື ∉)"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງທ່ອນຊື່ ແລະ ເຄິ່ງເສັ້ນຊື່ຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ທ່ອນຊື່ [AB] ມີຈຸດປາຍຈັກຈຸດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ຈຸດ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເຄິ່ງເສັ້ນຊື່ [Ax) ມີຈຸດປາຍຈັກຈຸດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ຈຸດ"}</span>
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
          <span key="u11-ans-1-1">{"(1) ∈ (ເພາະເມັດ A ຢູ່ເທິງເສັ້ນຊື່ d)"}</span>,
          <span key="u11-ans-1-2">{"(2) ∉ (ເພາະເມັດ C ຢູ່ນອກເສັ້ນຊື່ d)"}</span>,
          <span key="u11-ans-1-3">{"(3) ∈"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u11-ans-2-1">{"(1) ທ່ອນຊື່ (ເພາະມີວົງເລັບຂໍປິດທັງສອງເບື້ອງ [ ])"}</span>,
          <span key="u11-ans-2-2">{"(2) ເຄິ່ງເສັ້ນຊື່ (ເພາະມີປິດເບື້ອງໜຶ່ງ ແລະ ໄຂເບື້ອງໜຶ່ງ [ ) )"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u11-ans-t1-1">{"(1) X, Y, Z (ທັງສາມເມັດຢູ່ເທິງເສັ້ນຊື່ສີຂຽວດຽວກັນ)"}</span>,
          <span key="u11-ans-t1-2">{"(2) ບໍ່ຢູ່ (ເພາະ W ຢູ່ນອກເສັ້ນຊື່ XY)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u11-ans-t2-1">{"(1) P (ຈຸດຕັດກັນຂອງສອງເສັ້ນຊື່)"}</span>,
          <span key="u11-ans-t2-2">{"(2) P ∈ d₁ ແລະ P ∈ d₂ (ເພາະຈຸດຕັດກັນຕ້ອງຢູ່ເທິງທັງສອງເສັ້ນຊື່)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u11-ans-s1-1">{"(1) ບໍ່ຢູ່ (ເພາະເມັດ A ແມ່ນຈຸດຈອມຂອງສາມແຈ, ບໍ່ນອນເທິງເສັ້ນຊື່ພື້ນ BC)"}</span>,
          <span key="u11-ans-s1-2">{"(2) A (ເພາະເສັ້ນຊື່ທັງສອງຕັດກັນຢູ່ຈຸດປາຍ A)"}</span>,
          <span key="u11-ans-s1-3">{"(3) ∈ (B ແມ່ນຈຸດປາຍໜຶ່ງຂອງເສັ້ນຊື່ BC)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u11-ans-s2-1">{"(1) 2 ຈຸດ (ຄື ຈຸດ A ແລະ B)"}</span>,
          <span key="u11-ans-s2-2">{"(2) 1 ຈຸດ (ຄື ຈຸດ A ທີ່ເປັນຈຸດເລີ່ມຕົ້ນ)"}</span>,
        ],
      },
    ],
    advice: "ໃນເລຂາຄະນິດ, ທ່ອນຊື່ [AB] ຈະມີຄວາມຍາວຈຳກັດ ແລະ ມີ 2 ຈຸດປາຍ. ຢ່າລືມວ່າຈຸດຕັດກັນຂອງສອງເສັ້ນຊື່ ຈະຕ້ອງນອນຢູ່ເທິງທັງສອງເສັ້ນຊື່ນັ້ນສະເໝີເດີ້!",
  },
};
