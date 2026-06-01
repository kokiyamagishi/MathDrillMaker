import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ພາກທີ II - ບົດທີ 12: ເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍ ແລະ ສັນຍະລັກຂອງເສັ້ນຊື່ຂະໜານ (//) ແລະ ເສັ້ນຊື່ຕັ້ງສາກ (⊥) ພ້ອມທັງຄຸນລັກສະນະພື້ນຖານຂອງເລຂາຄະນິດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 81-84",
  keyPoints: [
    {
      title: "1. ເສັ້ນຊື່ຕັ້ງສາກ (Perpendicular Lines)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສອງເສັ້ນຊື່ d₁ ແລະ d₂ ຕັດກັນ ແລະ ປະກອບເປັນມຸມສາກ (90°) ເອີ້ນວ່າ 'ເສັ້ນຊື່ຕັ້ງສາກກັນ':"}
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
              gap: "6px",
            }}
          >
            <div>{"• ສັນຍະລັກ: "}<strong>{"d₁ ⊥ d₂"}</strong>{" (ອ່ານວ່າ d₁ ຕັ້ງສາກກັບ d₂)"}</div>
            <div>{"• ມຸມຕັດກັນເທົ່າກັບ "}<strong>{"90°"}</strong>{" ສະເໝີ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ເຄື່ອງໝາຍ ⊥ ຈະຄ້າຍຄືກັບໂຕ T ປີ້ນ ເຊິ່ງສະແດງເຖິງການຕັ້ງສາກກັນເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ເສັ້ນຊື່ຂະໜານ (Parallel Lines)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສອງເສັ້ນຊື່ d₁ ແລະ d₂ ທີ່ນອນຢູ່ໃນໜ້າພຽງດຽວກັນ ແລະ ບໍ່ມີເມັດຕັດກັນຈັກເມັດ ເອີ້ນວ່າ 'ເສັ້ນຊື່ຂະໜານກັນ':"}
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
              gap: "6px",
            }}
          >
            <div>{"• ສັນຍະລັກ: "}<strong>{"d₁ // d₂"}</strong>{" (ອ່ານວ່າ d₁ ຂະໜານກັບ d₂)"}</div>
            <div>{"• ຈຳນວນເມັດຕັດກັນແມ່ນ "}<strong>{"0 ເມັດ"}</strong>{" (ບໍ່ມີມື້ພົບກັນ)."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ເສັ້ນຊື່ຂະໜານກັນ ຈະມີໄລຍະຫ່າງລະຫວ່າງເສັ້ນຊື່ເທົ່າກັນຕະຫຼອດໄປ!",
      },
    },
    {
      title: "3. ຄຸນລັກສະນະພື້ນຖານ (Basic Geometric Rules)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄຸນລັກສະນະສຳຄັນທີ່ນຳໃຊ້ໃນການພິສູດເລຂາຄະນິດ:"}
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
              gap: "10px",
            }}
          >
            <div>
              <strong>{"ຫຼັກເກນ 1: "}</strong>{"ຖ້າສອງເສັ້ນຊື່ຕ່າງກັນ ຫາກຕັ້ງສາກກັບເສັ້ນຊື່ດຽວກັນ, ພວກມັນຈະຂະໜານກັນ:"}
              <br />
              <span style={{ color: "#E65100", paddingLeft: "16px", fontWeight: "bold" }}>{"→ ຖ້າ x ⊥ d ແລະ y ⊥ d ດັ່ງນັ້ນ x // y"}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE0B2", paddingTop: "8px" }}>
              <strong>{"ຫຼັກເກນ 2: "}</strong>{"ຖ້າເສັ້ນຊື່ໜຶ່ງ ຫາກຕັ້ງສາກກັບເສັ້ນຊື່ໜຶ່ງໃນສອງເສັ້ນຊື່ຂະໜານກັນ, ມັນກໍ່ຈະຕັ້ງສາກກັບເສັ້ນຊື່ທີ່ເຫຼືອຄືກັນ:"}
              <br />
              <span style={{ color: "#E65100", paddingLeft: "16px", fontWeight: "bold" }}>{"→ ຖ້າ d₁ // d₂ ແລະ T ⊥ d₁ ດັ່ງນັ້ນ T ⊥ d₂"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຫຼັກເກນເຫຼົ່ານີ້ມີປະໂຫຍດຫຼາຍໃນການພິສູດຄຸນລັກສະນະຂອງຮູບເລຂາຄະນິດຕ່າງໆ!",
        isBlue: true,
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງສັງເກດຮູບພາບ ແລ້ວຕື່ມສັນຍະລັກ "}<strong>{"//"}</strong>{" ຫຼື "}<strong>{"⊥"}</strong>{" ໃສ່ບ່ອນວ່າງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          {/* Geometric SVG 1 */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 300 120" style={{ width: "100%", height: "auto" }}>
              {/* Parallel lines a and b */}
              <line x1="20" y1="30" x2="280" y2="30" stroke="#4CAF50" strokeWidth="2" />
              <text x="285" y="35" style={{ fontSize: "16px", fontWeight: "bold", fill: "#4CAF50" }}>{"a"}</text>

              <line x1="20" y1="80" x2="280" y2="80" stroke="#4CAF50" strokeWidth="2" />
              <text x="285" y="85" style={{ fontSize: "16px", fontWeight: "bold", fill: "#4CAF50" }}>{"b"}</text>

              {/* Perpendicular line c */}
              <line x1="120" y1="10" x2="120" y2="110" stroke="#2196F3" strokeWidth="2" />
              <text x="110" y="20" style={{ fontSize: "16px", fontWeight: "bold", fill: "#2196F3" }}>{"c"}</text>

              {/* Right angle symbol at c and a */}
              <path d="M 120,40 L 130,40 L 130,30" fill="none" stroke="#2196F3" strokeWidth="1.5" />
              {/* Right angle symbol at c and b */}
              <path d="M 120,90 L 130,90 L 130,80" fill="none" stroke="#2196F3" strokeWidth="1.5" />
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
              <span>{"(1) ເສັ້ນຊື່ a"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ b"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ເສັ້ນຊື່ a"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ c"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) ເສັ້ນຊື່ b"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ເສັ້ນຊື່ c"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບນິຍາມຂອງເສັ້ນຊື່ຂະໜານ ແລະ ຕັ້ງສາກ: "}{" "}
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
              <span>{"(1) ສອງເສັ້ນຊື່ຂະໜານກັນ ຈະມີເມັດຕັດກັນທັງໝົດຈັກເມັດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ເມັດ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສອງເສັ້ນຊື່ຕັ້ງສາກກັນ ຈະປະກອບເປັນມຸມຕັດກັນເທົ່າກັບຈັກອົງສາ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ອົງສາ (°)"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ນຳໃຊ້ຫຼັກເກນທີ່ວ່າ ຖ້າສອງເສັ້ນຊື່ຕັ້ງສາກກັບເສັ້ນຊື່ດຽວກັນ, ພວກມັນຈະຂະໜານກັນ. ບົດທ້າທາຍ 2: ຖ້າເສັ້ນຊື່ໜຶ່ງຕັ້ງສາກກັບເສັ້ນຊື່ໜຶ່ງໃນສອງເສັ້ນຊື່ຂະໜານກັນ, ມັນກໍ່ຈະຕັ້ງສາກກັບເສັ້ນຊື່ທີ່ເຫຼືອຄືກັນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງສັງເກດຮູບພາບ ແລ້ວຕື່ມຄຳສັບ ຫຼື ສັນຍະລັກໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* Geometric SVG 2 */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 300 120" style={{ width: "100%", height: "auto" }}>
                {/* Vertical line d */}
                <line x1="50" y1="10" x2="50" y2="110" stroke="#333" strokeWidth="2" />
                <text x="40" y="20" style={{ fontSize: "16px", fontWeight: "bold", fill: "#333" }}>{"d"}</text>

                {/* Horizontal lines x and y perpendicular to d */}
                <line x1="30" y1="40" x2="270" y2="40" stroke="#FF9800" strokeWidth="2" />
                <text x="275" y="45" style={{ fontSize: "16px", fontWeight: "bold", fill: "#FF9800" }}>{"x"}</text>

                <line x1="30" y1="80" x2="270" y2="80" stroke="#FF9800" strokeWidth="2" />
                <text x="275" y="85" style={{ fontSize: "16px", fontWeight: "bold", fill: "#FF9800" }}>{"y"}</text>

                {/* Right angle symbols */}
                <path d="M 50,50 L 60,50 L 60,40" fill="none" stroke="#FF9800" strokeWidth="1.5" />
                <path d="M 50,90 L 60,90 L 60,80" fill="none" stroke="#FF9800" strokeWidth="1.5" />
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
                <span>{"(1) ຖ້າເສັ້ນຊື່ x ⊥ d ແລະ y ⊥ d. ດັ່ງນັ້ນເສັ້ນຊື່ x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ເສັ້ນຊື່ y"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ເຫດຜົນ: ຍ້ອນສອງເສັ້ນຊື່ຕັ້ງສາກກັບເສັ້ນຊື່ດຽວກັນ ຈະເປັນເສັ້ນຊື່"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກັນ."}</span>
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
              {"ຈົ່ງສັງເກດຮູບພາບ ແລ້ວຄິດໄລ່ຄຸນລັກສະນະຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* Geometric SVG 3 */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 300 120" style={{ width: "100%", height: "auto" }}>
                {/* L1 and L2 parallel */}
                <line x1="20" y1="30" x2="280" y2="30" stroke="#E040FB" strokeWidth="2" />
                <text x="285" y="35" style={{ fontSize: "16px", fontWeight: "bold", fill: "#E040FB" }}>{"L₁"}</text>

                <line x1="20" y1="80" x2="280" y2="80" stroke="#E040FB" strokeWidth="2" />
                <text x="285" y="85" style={{ fontSize: "16px", fontWeight: "bold", fill: "#E040FB" }}>{"L₂"}</text>

                {/* Line T perpendicular to L1 */}
                <line x1="100" y1="10" x2="100" y2="110" stroke="#333" strokeWidth="2" />
                <text x="90" y="20" style={{ fontSize: "16px", fontWeight: "bold", fill: "#333" }}>{"T"}</text>

                {/* Right angle at T and L1 */}
                <path d="M 100,40 L 110,40 L 110,30" fill="none" stroke="#333" strokeWidth="1.5" />
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
                <span>{"(1) ຖ້າຮູ້ວ່າ L₁ // L₂ ແລະ ເສັ້ນຊື່ T ⊥ L₁. ດັ່ງນັ້ນ ເສັ້ນຊື່ T"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"L₂"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ມຸມທີ່ເສັ້ນຊື່ T ປະກອບກັບເສັ້ນຊື່ L₂ ຈະເປັນມຸມສາກ ເທົ່າກັບຈັກອົງສາ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ອົງສາ (°)"}</span>
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
            {"ຈົ່ງສັງເກດຮູບສີ່ແຈສາກ ABCD ແລ້ວຕື່ມສັນຍະລັກ "}<strong>{"//"}</strong>{" ຫຼື "}<strong>{"⊥"}</strong>{" ໃສ່ບ່ອນວ່າງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          {/* Geometric SVG 4 */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 300 150" style={{ width: "100%", height: "auto" }}>
              {/* Rectangle ABCD */}
              <rect x="50" y="30" width="200" height="90" fill="none" stroke="#2196F3" strokeWidth="3" />

              {/* Point Labels */}
              <text x="35" y="35" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"A"}</text>
              <text x="255" y="35" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"B"}</text>
              <text x="255" y="130" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"C"}</text>
              <text x="35" y="130" style={{ fontSize: "16px", fontWeight: "bold", fill: "#0D47A1" }}>{"D"}</text>

              {/* Corner squares to show right angles */}
              <rect x="50" y="30" width="10" height="10" fill="none" stroke="#2196F3" strokeWidth="1" />
              <rect x="240" y="30" width="10" height="10" fill="none" stroke="#2196F3" strokeWidth="1" />
              <rect x="240" y="110" width="10" height="10" fill="none" stroke="#2196F3" strokeWidth="1" />
              <rect x="50" y="110" width="10" height="10" fill="none" stroke="#2196F3" strokeWidth="1" />
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
              <span>{"(1) ຂ້າງ AB"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ຂ້າງ CD"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຂ້າງ AB"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ຂ້າງ BC"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຂ້າງ AD"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ຂ້າງ CD"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຫຼັກເກນການຂະໜານກັນຂອງ 3 ເສັ້ນຊື່ (ຄວາມຂະໜານສົ່ງຕໍ່): "}{" "}
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
              <span>{"(1) ຖ້າຮູ້ວ່າເສັ້ນຊື່ p // q ແລະ q // r. ດັ່ງນັ້ນ p"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"r (ຕື່ມສັນຍະລັກ)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເສັ້ນຊື່ p ແລະ ເսັ້ນຊື່ r ມີເມັດຕັດກັນຮ່ວມກັນ ຫຼື ບໍ່? (ຕື່ມ ມີ ຫຼື ບໍ່ມີ):"}</span>
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
          <span key="u12-ans-1-1">{"(1) // (ເສັ້ນຊື່ a ແລະ b ຂະໜານກັນ)"}</span>,
          <span key="u12-ans-1-2">{"(2) ⊥ (ເສັ້ນຊື່ a ແລະ c ຕັ້ງສາກກັນ)"}</span>,
          <span key="u12-ans-1-3">{"(3) ⊥ (ເສັ້ນຊື່ b ແລະ c ຕັ້ງສາກກັນ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u12-ans-2-1">{"(1) 0 ເມັດ (ເພາະເສັ້ນຊື່ຂະໜານກັນຈະບໍ່ມີມື້ຕັດກັນ)"}</span>,
          <span key="u12-ans-2-2">{"(2) 90° (ມຸມສາກ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u12-ans-t1-1">{"(1) // (x ແລະ y ຈະຂະໜານກັນ)"}</span>,
          <span key="u12-ans-t1-2">{"(2) ຂະໜານ (ຕາມຫຼັກເກນເລຂາຄະນິດ ມ.1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u12-ans-t2-1">{"(1) ⊥ (ເສັ້ນຊື່ T ຈະຕັ້ງສາກກັບ L₂ ຄືກັນ)"}</span>,
          <span key="u12-ans-t2-2">{"(2) 90° (ເພາະເປັນການຕັ້ງສາກກັນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u12-ans-s1-1">{"(1) // (ຂ້າງກົງກັນຂ້າມຂອງຮູບສີ່ແຈສາກຈະຂະໜານກັນ)"}</span>,
          <span key="u12-ans-s1-2">{"(2) ⊥ (ຂ້າງຕິດກັນຂອງຮູບສີ່ແຈສາກຈະຕັ້ງສາກກັນ)"}</span>,
          <span key="u12-ans-s1-3">{"(3) ⊥"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u12-ans-s2-1">{"(1) // (ຖ້າສອງເສັ້ນຊື່ຂະໜານກັບເສັ້ນຊື່ທີສາມ ພວກມັນຈະຂະໜານກັນ)"}</span>,
          <span key="u12-ans-s2-2">{"(2) ບໍ່ມີ (ເພາະພວກມັນຂະໜານກັນ ດັ່ງນັ້ນຈຶ່ງບໍ່ມີເມັດຕັດກັນ)"}</span>,
        ],
      },
    ],
    advice: "ສອງເສັ້ນຊື່ຂະໜານກັນ (//) ຈະບໍ່ມີວັນຕັດກັນ (0 ເມັດຕັດກັນ), ສ່ວນສອງເສັ້ນຊື່ຕັ້ງສາກກັນ (⊥) ຈະປະກອບເປັນມຸມ 90 ອົງສາສະເໝີເດີ້!",
  },
};
