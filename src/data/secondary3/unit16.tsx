import { Angle } from "../../components/Angle";
import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ພາກທີ II - ບົດທີ 8: ມຸມໃນຂອງຮູບສາມແຈ ແລະ ຮູບສີ່ແຈຂະໜານ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຄຸນລັກສະນະຜົນບວກມຸມໃນຂອງຮູບສາມແຈ (180°) ແລະ ຮູບສີ່ແຈຂະໜານ (360°) ໃນການຊອກຫາຂະໜາດມຸມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 49-54",
  subSections: [
    {
      title: "1. ມຸມໃນຂອງຮູບສາມແຈ ແລະ ມຸມນອກ",
      keyPoint: {
        title: "ຫຼັກການມຸມໃນ ແລະ ມຸມນອກຂອງສາມແຈ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮຽນຮູ້ສອງຄຸນລັກສະນະທີ່ສຳຄັນຂອງມຸມໃນຮູບສາມແຈ:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຜົນບວກມຸມໃນ: ມຸມໃນທັງສາມຂອງຮູບສາມແຈບວກກັນເທົ່າກັບ 180° ສະເໝີ (A + B + C = 180°)."}</div>
              <div>{"• ມຸມນອກຮູບສາມແຈ: ເທົ່າກັບຜົນບວກຂອງສອງມຸມໃນທີ່ບໍ່ຕິດກັບມັນ."}</div>
              <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ຖ້າ A = 50°, B = 60° ➔ ມຸມນອກຢູ່ຈອມ C ຈະເທົ່າກັບ 50° + 60° = 110°."}</div>
            </div>

            {/* Triangle Angles SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສາມແຈ ແລະ ມຸມນອກຢູ່ຈອມ C"}</span>
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Triangle with extended base */}
                  <polygon points="50,20 30,80 130,80" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="4" />
                  <line x1="260" y1="160" x2="360" y2="160" stroke="#2E7D32" strokeWidth="4" strokeDasharray="3,3" />

                  {/* Vertices */}
                  <text x="96" y="30" fill="#37474F" fontSize="16" fontWeight="bold">{"A (50°)"}</text>
                  <text x="36" y="170" fill="#37474F" fontSize="16" fontWeight="bold">{"B (60°)"}</text>
                  <text x="240" y="150" fill="#37474F" fontSize="16" fontWeight="bold">{"C"}</text>

                  {/* Exterior angle arc indicator */}
                  <path d="M 260,160 A 30,30 0 0,0 286,140" fill="none" stroke="#E65100" strokeWidth="3" />
                  <text x="290" y="150" fill="#E65100" fontSize="16" fontWeight="bold">{"ມຸມນອກ (110°)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ມຸມນອກ ແລະ ມຸມໃນທີ່ຢູ່ຕິດກັນ ຈະບວກກັນເທົ່າກັບ 180° (ເປັນມຸມພຽງ) ສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມໃນຮູບສາມແຈທີ່ເຫຼືອ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສາມແຈໜຶ່ງມີສອງມຸມໃນແມ່ນ "} <span className="math">{"50°"}</span> {" ແລະ "} <span className="math">{"70°"}</span> {". ມຸມທີສາມມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບສາມແຈສາກໜຶ່ງມີມຸມແຫຼມໜຶ່ງແມ່ນ "} <span className="math">{"35°"}</span> {". ມຸມແຫຼມທີ່ເຫຼືອມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບສາມແຈທ່ຽງໜຶ່ງມີມຸມຈອມແມ່ນ "} <span className="math">{"40°"}</span> {". ມຸມຢູ່ພື້ນແຕ່ລະມຸມມີຂະໜາດຈັກອົງສາ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຫາຂະໜາດຂອງມຸມນອກ ແລະ ມຸມໃນກົງກັນຂ້າມ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃນຮູບສາມແຈ ABC, ມີ "} <span className="math">{"<Angle>A</Angle> = 50°"}</span> {" ແລະ "} <span className="math">{"<Angle>B</Angle> = 60°"}</span> {". ມຸມນອກຢູ່ຈອມ C ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າມຸມນອກຂອງຮູບສາມແຈໜຶ່ງແມ່ນ "} <span className="math">{"120°"}</span> {" ແລະ ມີມຸມໃນກົງກັນຂ້າມໜຶ່ງແມ່ນ "} <span className="math">{"45°"}</span> {". ມຸມໃນກົງກັນຂ້າມອີກມຸມແມ່ນຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ມຸມໃນຂອງຮູບສີ່ແຈຂະໜານ",
      keyPoint: {
        title: "ຄຸນລັກສະນະມຸມຂອງຮູບສີ່ແຈຂະໜານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບສີ່ແຈຂະໜານມີຄຸນລັກສະນະມຸມທີ່ສຳຄັນດັ່ງນີ້:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• ຜົນບວກມຸມໃນ: ມຸມໃນທັງສີ່ບວກກັນເທົ່າກັບ 360° ສະເໝີ."}</div>
              <div>{"• ມຸມກົງກັນຂ້າມ: ມີຂະໜາດເທົ່າກັນສະເໝີ (A = C ແລະ B = D)."}</div>
              <div>{"• ມຸມຖັດກັນ (ມຸມຂ້າງດຽວກັນ): ບວກກັນເທົ່າກັບ 180° ສະເໝີ (A + B = 180°)."}</div>
            </div>

            {/* Parallelogram SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ຮູບສີ່ແຈຂະໜານ ABCD"}</span>
                <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: "360px", height: "auto" }}>
                  {/* Parallelogram shape */}
                  <polygon points="50,20 170,20 150,80 30,80" fill="#FFE0B2" stroke="#E65100" strokeWidth="4" />

                  {/* Labels */}
                  <text x="90" y="64" fill="#E65100" fontSize="18" fontWeight="bold">{"A (70°)"}</text>
                  <text x="310" y="64" fill="#37474F" fontSize="18" fontWeight="bold">{"B (110°)"}</text>
                  <text x="270" y="148" fill="#E65100" fontSize="18" fontWeight="bold">{"C (70°)"}</text>
                  <text x="70" y="148" fill="#37474F" fontSize="18" fontWeight="bold">{"D (110°)"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຮູບສີ່ແຈຂະໜານ, ຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຮູບດອກຈັນ ລ້ວນແຕ່ມີຄຸນລັກສະນະມຸມກົງກັນຂ້າມເທົ່າກັນເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ໃນຮູບສີ່ແຈຂະໜານ ABCD, ມີມຸມ A = 70°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ມຸມກົງກັນຂ້າມ "} <span className="math">{"<Angle>C</Angle>"}</span> {" ມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ມຸມຖັດກັນ "} <span className="math">{"<Angle>B</Angle>"}</span> {" ມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ມຸມກົງກັນຂ້າມ "} <span className="math">{"<Angle>D</Angle>"}</span> {" ມີຂະໜາດຈັກອົງສາ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຂະໜາດມຸມໃນຮູບສີ່ແຈທົ່ວໄປ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບສີ່ແຈໜຶ່ງມີສາມມຸມໃນແມ່ນ "} <span className="math">{"80°, 100°, 90°"}</span> {". ມຸມທີສີ່ມີຂະໜາດຈັກອົງສາ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບດອກຈັນໜຶ່ງມີມຸມແຫຼມໜຶ່ງແມ່ນ "} <span className="math">{"50°"}</span> {". ມຸມປ້ານຂອງມັນມີຂະໜາດຈັກອົງສາ?"}</span>
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
    hintText: "💡 ບົດທ้าທາຍ: ນຳໃຊ້ອັດຕາສ່ວນເພື່ອຊອກຫາຄ່າຂອງ k ຫຼື ຕັ້ງສົມຜົນຜົນບວກມຸມຂ້າງດຽວກັນເທົ່າກັບ 180° ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ອັດຕາສ່ວນມຸມໃນຮູບສາມແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສາມມຸມໃນຂອງຮູບສາມແຈໜຶ່ງມີອັດຕາສ່ວນແມ່ນ "} <span className="math">{"2 : 3 : 5"}</span> {". ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ໃຫຍ່ທີ່ສຸດໃນຮູບສາມແຈນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມຸມທີ່ໃຫຍ່ທີ່ສຸດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ອົງສາ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ສົມຜົນມຸມໃນຮູບສີ່ແຈຂະໜານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໃນຮູບສີ່ແຈຂະໜານ ABCD, ມີສອງມຸມຖັດກັນແມ່ນ "} <span className="math">{"<Angle>A</Angle> = 2x + 10"}</span> {" ແລະ "} <span className="math">{"<Angle>B</Angle> = 3x - 20"}</span> {" (ອົງສາ). ຈົ່ງຊອກຫາຄ່າຂອງ x."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: x ="}</span>
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
            {"ໂຈດມຸມໃນຮູບສາມແຈທ່ຽງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈທ່ຽງ ABC ມີ AB = AC. ມຸມນອກຢູ່ຈອມ A ມີຂະໜາດແມ່ນ 110°. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມຢູ່ພື້ນ <Angle>B</Angle>."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: <Angle>B</Angle> ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ອົງສາ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດຜົນບວກມຸມໃນຮູບສີ່ແຈທົ່ວໄປ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ສີ່ຄ່າມຸມໃນຂອງຮູບສີ່ແຈໜຶ່ງແມ່ນ x, 2x, 3x, 4x. ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມທີ່ໃຫຍ່ທີ່ສຸດ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມຸມທີ່ໃຫຍ່ທີ່ສຸດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ອົງສາ"}</span>
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
          <span key="1">{"(1) 60° (ເພາະວ່າ ມຸມທີສາມ = 180° - (50° + 70°) = 180° - 120° = 60°)"}</span>,
          <span key="2">{"(2) 55° (ເພາະວ່າ ມຸມທີສາມ = 180° - (90° + 35°) = 90° - 35° = 55°)"}</span>,
          <span key="3">{"(3) 70° (ເພາະວ່າມຸມພື້ນສອງມຸມເທົ່າກັນ ➔ (180° - 40°) / 2 = 140° / 2 = 70°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 110° (ເພາະວ່າມຸມນອກ = ຜົນບວກສອງມຸມໃນກົງກັນຂ້າມ = 50° + 60° = 110°)"}</span>,
          <span key="5">{"(2) 75° (ເພາະວ່າມຸມນອກ 120° = 45° + x ➔ x = 120° - 45° = 75°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"90° (ໃຫ້ມຸມແມ່ນ 2k, 3k, 5k ➔ 2k + 3k + 5k = 180° ➔ 10k = 180° ➔ k = 18 ➔ ມຸມໃຫຍ່ສຸດ 5k = 5×18 = 90°)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"38 (ສອງມຸມຖັດກັນບວກກັນໄດ້ 180° ➔ (2x + 10) + (3x - 20) = 180 ➔ 5x - 10 = 180 ➔ 5x = 190 ➔ x = 38)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"55° (ມຸມໃນ <Angle>A</Angle> = 180° - 110° = 70° ➔ ສາມແຈທ່ຽງ AB = AC ➔ <Angle>B</Angle> = <Angle>C</Angle> = (180° - 70°) / 2 = 55°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"144° (ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 360° ➔ x + 2x + 3x + 4x = 360 ➔ 10x = 360 ➔ x = 36° ➔ ມຸມໃຫຍ່ສຸດ 4x = 4×36 = 144°)"}</span>
        ]
      }
    ],
    advice: "ຄຸນລັກສະນະຜົນບວກມຸມໃນຮູບເລຂາຄະນິດເປັນຫຼັກການພື້ນຖານຂອງການອອກແບບ, ການວັດແທກທີ່ດິນ ແລະ ຟີຊິກສາດຂອງແສງ ໝັ່ນຝຶກຝົນແກ້ໂຈດເປັນປະຈຳເດີ້!"
  }
};
