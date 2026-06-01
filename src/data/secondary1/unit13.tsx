import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ພາກທີ II - ບົດທີ 13: ການແຕ້ມເສັ້ນຊື່ຂະໜານ ແລະ ເສັ້ນຊື່ຕັ້ງສາກ",
  unitGoal:
    "ຮຽນຮູ້ຂັ້ນຕອນ ແລະ ວິທີການແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ແລະ ເສັ້ນຊື່ຂະໜານ ໂດຍໃຊ້ໄມ້ສາມແຈສາກ, ໄມ້ບັນທັດຊື່ ແລະ ກອມປາ ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 85-90",
  subSections: [
    {
      title: "1. ວິທີແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ໂດຍໃຊ້ໄມ້ສາມແຈສາກ (Drawing Perpendicular Lines)",
      keyPoint: {
      title: "1. ວິທີແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ໂດຍໃຊ້ໄມ້ສາມແຈສາກ (Drawing Perpendicular Lines)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຂັ້ນຕອນການແຕ້ມເສັ້ນຊື່ຕັ້ງສາກກັບ d ຜ່ານເມັດ A ຢູ່ນອກເສັ້ນຊື່:"}
          </p>
          {/* Geometric SVG Instruction 1 */}
          <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 300 120" style={{ width: "100%", height: "auto" }}>
              {/* Line d */}
              <line x1="20" y1="90" x2="280" y2="90" stroke="#333" strokeWidth="2" />
              <text x="285" y="95" style={{ fontSize: "14px" }}>{"d"}</text>

              {/* Point A */}
              <circle cx="150" cy="30" r="4" fill="#D32F2F" />
              <text x="145" y="20" style={{ fontSize: "14px", fontWeight: "bold", fill: "#D32F2F" }}>{"A"}</text>

              {/* Set Square representation (Triangle) */}
              <polygon points="150,90 150,30 230,90" fill="none" stroke="#2196F3" strokeWidth="2" strokeDasharray="3" />
              <path d="M 150,80 L 160,80 L 160,90" fill="none" stroke="#2196F3" strokeWidth="1.5" />

              {/* Arrow showing action */}
              <path d="M 200,60 L 165,60" fill="none" stroke="#4CAF50" strokeWidth="2" markerEnd="url(#arrow)" />
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#4CAF50" />
                </marker>
              </defs>
            </svg>
          </div>
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
            <div>{"1. ວາງຂ້າງໜຶ່ງຂອງມຸມສາກ ໄມ້ສາມແຈສາກ ທາບໃສ່ເສັ້ນຊື່ d."}</div>
            <div>{"2. ເລື່ອນໄມ້ສາມແຈສາກໃຫ້ຂ້າງຕັ້ງສາກອີກຂ້າງໜຶ່ງ ຜ່ານເມັດ A."}</div>
            <div>{"3. ຂີດເສັ້ນຊື່ຕາມຂ້າງນັ້ນຜ່ານເມັດ A, ເຮົາຈະໄດ້ເສັ້ນຊື່ຕັ້ງສາກທີ່ຕ້ອງການ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຕ້ອງວາງໄມ້ສາມແຈສາກໃຫ້ແນບສະໜິດກັບເສັ້ນຊື່ d ຕະຫຼອດເວລາທີ່ເລື່ອນເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງເລືອກເຄື່ອງມືທີ່ຖືກຕ້ອງທີ່ສຸດ ມາຕື່ມໃສ່ບ່ອນວ່າງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
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
              <span>{"(1) ເຄື່ອງມືທີ່ໃຊ້ແຕ້ມ ແລະ ກວດສອບມຸມສາກ (90°) ໄດ້ດີທີ່ສຸດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເຄື່ອງມືທີ່ໃຊ້ແຕ້ມເສັ້ນໂຄ້ງ ຫຼື ວົງມົນ ໃນການແຕ້ມເສັ້ນຕັ້ງສາກແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ໄມ້ບັນທັດຊື່ ມີໜ້າທີ່ຕົ້ນຕໍໃນການແຕ້ມ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ວິທີແຕ້ມເສັ້ນຊື່ຂະໜານ ໂດຍໃຊ້ໄມ້ສາມແຈສາກ ແລະ ໄມ້ບັນທັດ",
      keyPoint: {
      title: "2. ວິທີແຕ້ມເສັ້ນຊື່ຂະໜານ ໂດຍໃຊ້ໄມ້ສາມແຈສາກ ແລະ ໄມ້ບັນທັດ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຂັ້ນຕອນການແຕ້ມເສັ້ນຊື່ຂະໜານກັບ d ຜ່ານເມັດ A ຢູ່ນອກເສັ້ນຊື່:"}
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
            <div>{"1. ວາງຂ້າງໜຶ່ງຂອງໄມ້ສາມແຈສາກ ທາບໃສ່ເສັ້ນຊື່ d."}</div>
            <div>{"2. ວາງໄມ້ບັນທັດຊື່ ແນບໃສ່ຂ້າງທີສອງຂອງໄມ້ສາມແຈສາກເພື່ອເປັນແນວທາງເລື່ອນ."}</div>
            <div>{"3. ເລື່ອນໄມ້ສາມແຈສາກໄປຕາມໄມ້ບັນທັດຊື່ ຈົນຮອດເມັດ A ແລ້ວຂີດເສັ້ນຊື່."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ວິທີນີ້ຊ່ວຍໃຫ້ເສັ້ນຊື່ໃໝ່ ຂະໜານກັບເສັ້ນຊື່ເກົ່າຢ່າງສົມບູນ ຍ້ອນໄລຍະຫ່າງເທົ່າກັນຕະຫຼອດ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບກ່ຽວກັບຂັ້ນຕອນການແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ໂດຍເລືອກຄຳຕອບທີ່ຖືກຕ້ອງ: "}{" "}
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
              <span>{"(1) ຂັ້ນຕອນທຳອິດໃນການແຕ້ມເສັ້ນຕັ້ງສາກຜ່ານ A ຫາ d ແມ່ນ ວາງຂ້າງໜຶ່ງຂອງໄມ້ສາມແຈສາກທາບໃສ່"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຫຼັງຈາກເລື່ອນໄມ້ສາມແຈສາກໄປຮອດເມັດ A ແລ້ວ ເຮົາຕ້ອງແຕ້ມເສັ້ນຊື່ຜ່ານເມັດໃດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ວິທີແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ໂດຍໃຊ້ກອມປາ (Compass Drawing)",
      keyPoint: {
      title: "3. ວິທີແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ໂດຍໃຊ້ກອມປາ (Compass Drawing)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການໃຊ້ກອມປາແຕ້ມເສັ້ນຊື່ຕັ້ງສາກ ຜ່ານເມັດ A ທີ່ຢູ່ນອກເສັ້ນຊື່ d:"}
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
            <div>{"1. ເອົາສົ້ນແຫຼມຂອງກອມປາຈ້ຳໃສ່ເມັດ A, ແຕ້ມເສັ້ນໂຄ້ງຕັດເສັ້ນຊື່ d ຢູ່ 2 ເມັດ (ເອີ້ນວ່າ M ແລະ N)."}</div>
            <div>{"2. ຮັກສາລັດສະໝີເດີມ (ຫຼືປ່ຽນໃຫຍ່ຂຶ້ນເລັກໜ້ອຍ), ຈ້ຳກອມປາໃສ່ M ແລະ N ຕາມລຳດັບ ແລ້ວແຕ້ມເສັ້ນໂຄ້ງໃຫ້ຕັດກັນຢູ່ທາງລຸ່ມເສັ້ນຊື່ d (ເອີ້ນວ່າຈຸດ K)."}</div>
            <div>{"3. ຂີດເສັ້ນຊື່ຜ່ານເມັດ A ແລະ K, ເຮົາຈະໄດ້ເສັ້ນຊື່ AK ຕັ້ງສາກກັບ d."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຈຸດ K ແລະ A ຈະຢູ່ຫ່າງຈາກ M ແລະ N ເປັນໄລຍະທາງເທົ່າກັນສະເໝີ!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃນການແຕ້ມເສັ້ນຂະໜານ, ໄມ້ບັນທັດຊື່ມີບົດບາດເປັນແນວທາງໃນການເລື່ອນໄມ້ສາມແຈສາກ. ບົດທ້າທາຍ 2: ການໃຊ້ກອມປາແຕ້ມເສັ້ນໂຄ້ງຕັດເສັ້ນຊື່ d ຈະໄດ້ 2 ເມັດຕັດສະເໝີ ເຊິ່ງຢູ່ຫ່າງຈາກ A ເທົ່າກັນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມຄຳສັບທີ່ເໝາະສົມ ກ່ຽວກັບການແຕ້ມເສັ້ນຊື່ຂະໜານ ໃສ່ບ່ອນວ່າງ: "}{" "}
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
                <span>{"(1) ໃນການແຕ້ມເສັ້ນຊື່ຂະໜານ, ເຮົາໃຊ້ໄມ້ບັນທັດຊື່ເພື່ອເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
                <span>{"ໃນການເລື່ອນໄມ້ສາມແຈສາກ."}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຫຼັງຈາກເລື່ອນໄມ້ສາມແຈສາກໄປຮອດເມັດ A ແລ້ວຂີດເສັ້ນຊື່, ເສັ້ນຊື່ໃໝ່ຈະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກັບເສັ້ນຊື່ເລີ່ມຕົ້ນ d."}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະຂອງການແຕ້ມເສັ້ນຕັ້ງສາກ ໂດຍໃຊ້ກອມປາ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* Geometric SVG Compass 2 */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 300 120" style={{ width: "100%", height: "auto" }}>
                <line x1="20" y1="70" x2="280" y2="70" stroke="#333" strokeWidth="2" />
                <circle cx="150" cy="20" r="4" fill="#D32F2F" />
                <text x="145" y="15" style={{ fontSize: "14px", fill: "#D32F2F" }}>{"A"}</text>

                {/* Arc cutting line */}
                <path d="M 70,30 Q 150,110 230,30" fill="none" stroke="#FF9800" strokeWidth="1.5" strokeDasharray="3" />
                
                {/* Points M and N */}
                <circle cx="95" cy="70" r="4" fill="#333" />
                <text x="90" y="90" style={{ fontSize: "14px" }}>{"M"}</text>
                
                <circle cx="205" cy="70" r="4" fill="#333" />
                <text x="200" y="90" style={{ fontSize: "14px" }}>{"N"}</text>
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
                <span>{"(1) ການແຕ້ມເສັ້ນໂຄ້ງຕັດ d ຈາກຈຸດສູນກາງ A ຈະໄດ້ເມັດຕັດ M ແລະ N ທັງໝົດຈັກເມັດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ເມັດ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ໄລຍະຫ່າງແຕ່ເມັດ M ຫາເມັດ A ແລະ ໄລຍະຫ່າງແຕ່ເມັດ N ຫາເມັດ A ຈະເປັນແນວໃດກັນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ ແລະ ຕອບຄຳຖາມກ່ຽວກັບຄຸນລັກສະນະທາງເລຂາຄະນິດຂອງການ作図: "}{" "}
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
              <span>{"(1) ເສັ້ນຊື່ທີ່ແຕ້ມຕັ້ງສາກກັບ d ຜ່ານເມັດ A ທີ່ຢູ່ນອກເສັ້ນຊື່ ຈະມີໄດ້ທັງໝົດຈັກເສັ້ນ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ເສັ້ນ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເສັ້ນຊື່ທີ່ແຕ້ມຂະໜານກັບ d ຜ່ານເມັດ A ທີ່ຢູ່ນອກເສັ້ນຊື່ ຈະມີໄດ້ທັງໝົດຈັກເສັ້ນ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ເສັ້ນ"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ມຸມທີ່ເກີດຈາກເສັ້ນຊື່ຕັ້ງສາກກັນ ຈະມີຄ່າເທົ່າກັບຈັກອົງສາ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ອົງສາ (°)"}</span>
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
            {"ຈົ່ງປຽບທຽບຮູບພາບສອງຮູບຕໍ່ໄປນີ້ ແລ້ວເລືອກຮູບທີ່ຖືກຕ້ອງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          {/* Geometric SVG Drawing comparison */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg viewBox="0 0 160 100" style={{ width: "150px", height: "auto" }}>
                <line x1="10" y1="80" x2="150" y2="80" stroke="#333" strokeWidth="2" />
                <line x1="10" y1="30" x2="150" y2="30" stroke="#4CAF50" strokeWidth="2" />
                <circle cx="80" cy="30" r="4" fill="#D32F2F" />
                <text x="75" y="20" style={{ fontSize: "12px" }}>{"A"}</text>
              </svg>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{"ຮູບ (A)"}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg viewBox="0 0 160 100" style={{ width: "150px", height: "auto" }}>
                <line x1="10" y1="80" x2="150" y2="80" stroke="#333" strokeWidth="2" />
                {/* Incorrect skewed line */}
                <line x1="10" y1="40" x2="150" y2="20" stroke="#D32F2F" strokeWidth="2" />
                <circle cx="80" cy="30" r="4" fill="#D32F2F" />
                <text x="75" y="20" style={{ fontSize: "12px" }}>{"A"}</text>
              </svg>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{"ຮູບ (B)"}</span>
            </div>
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
              <span>{"(1) ຮູບໃດທີ່ສະແດງການແຕ້ມເສັ້ນຊື່ຂະໜານກັບ d ຜ່ານເມັດ A ທີ່ຖືກຕ້ອງ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນຮູບການແຕ້ມຂະໜານທີ່ຖືກຕ້ອງ, ໄລຍະຫ່າງລະຫວ່າງສອງເສັ້ນຊື່ຈະເປັນແນວໃດຕະຫຼອດໄປ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
          <span key="u13-ans-1-1">{"(1) ໄມ້ສາມແຈສາກ (Set Square)"}</span>,
          <span key="u13-ans-1-2">{"(2) ກອມປາ (Compass)"}</span>,
          <span key="u13-ans-1-3">{"(3) ເສັ້ນຊື່ (Line)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u13-ans-2-1">{"(1) ເສັ້ນຊື່ d (ວາງຂ້າງໜຶ່ງຂອງມຸມສາກແນບໃສ່ເສັ້ນຊື່)"}</span>,
          <span key="u13-ans-2-2">{"(2) ເມັດ A (ແຕ້ມເສັ້ນຊື່ຜ່ານເມັດ A)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u13-ans-t1-1">{"(1) ແນວທາງເລື່ອນ (ຫຼື ແນວເລື່ອນ)"}</span>,
          <span key="u13-ans-t1-2">{"(2) ຂະໜານ (ເສັ້ນຊື່ໃໝ່ຈະຂະໜານກັບ d)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u13-ans-t2-1">{"(1) 2 ເມັດ (ຈຸດ M ແລະ N ທີ່ເສັ້ນໂຄ້ງຕັດເສັ້ນຊື່ d)"}</span>,
          <span key="u13-ans-t2-2">{"(2) ເທົ່າກັນ (ເພາະແຕ້ມຈາກລັດສະໝີດຽວກັນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u13-ans-s1-1">{"(1) 1 ເສັ້ນ (ມີພຽງເສັ້ນດຽວເທົ່ານັ້ນ)"}</span>,
          <span key="u13-ans-s1-2">{"(2) 1 ເສັ້ນ (ມີພຽງເສັ້ນດຽວເທົ່ານັ້ນ)"}</span>,
          <span key="u13-ans-s1-3">{"(3) 90 ອົງສາ (90° / ມຸມສາກ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u13-ans-s2-1">{"(1) ຮູບ (A) (ເພາະຮູບ A ສະແດງໄລຍະຫ່າງເທົ່າກັນ, ສ່ວນ B ແມ່ນເສັ້ນຊື່ມີຄວາມອຽງ)"}</span>,
          <span key="u13-ans-s2-2">{"(2) ເທົ່າກັນຕະຫຼອດ (ໄລຍະຫ່າງບໍ່ປ່ຽນແປງ)"}</span>,
        ],
      },
    ],
    advice: "ໃນການແຕ້ມເສັ້ນຊື່ຂະໜານ, ໄລຍະຫ່າງລະຫວ່າງສອງເສັ້ນຊື່ຈະຕ້ອງເທົ່າກັນຕະຫຼອດ. ສ່ວນເສັ້ນຊື່ຕັ້ງສາກ ຜ່ານເມັດ A ທີ່ຢູ່ນອກ d ຈະມີໄດ້ພຽງແຕ່ 1 ເສັ້ນດຽວເທົ່ານັ້ນເດີ້!",
  },
};
