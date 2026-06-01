import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ພາກທີ II - ບົດທີ 16: ຕຳລາໃນຮູບຮ່າງ y = a(x - p)² + q",
  unitGoal:
    "ຮຽນຮູ້ການຍ້າຍຂະໜານປາຣาໂບນທັງຕາມແນວນອນ (ແກນ x) ແລະ ແນວຕັ້ງ (ແກນ y) ພ້ອມທັງຊອກຫາພິກັດຈຸດຈອມ (p, q) ໄດ້ຢ່າງວ່ອງໄວ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 16 ໜ້າ 91-96",
  keyPoints: [
    {
      title: "1. ການຍ້າຍຂະໜານສອງແກນປະສົມ (Combined Horizontal and Vertical Shift)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕຳລາໃນຮູບຮ່າງ y = a(x - p)² + q ໄດ້ມາຈາກການຍ້າຍຂະໜານ y = ax² ຕາມແກນ x ເປັນໄລຍະ p ແລະ ຕາມແກນ y ເປັນໄລຍະ q:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ພິກັດຈຸດຈອມໃໝ່ (Vertex Coordinate): "}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"ຈຸດຈອມ (Vertex) ແມ່ນມີພິກັດ (p, q) ສະເໝີ!"}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"- ⚠️ ຂໍ້ຄວນລະວັງ: ເຄື່ອງໝາຍຂອງ p ຈະກົງກັນຂ້າມກັບໃນວົງເລັບ, ສ່ວນເຄື່ອງໝາຍຂອງ q ຈະຄືເກົ່າ."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ແກນເຄິ່ງຄື (Axis of Symmetry): "}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"ແມ່ນເສັ້ນຊື່ແນວຕັ້ງ: x = p."}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: y = 2(x - 3)² + 5  ⇒  ຈຸດຈອມແມ່ນ (3, 5), ແກນເຄິ່ງຄືແມ່ນ x = 3. ສ່ວນ y = -(x + 4)² - 2  ⇒  ຈຸດຈອມແມ່ນ (-4, -2) ເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ແຜນວາດການຍ້າຍຂະໜານສອງແກນ (Two-Dimensional Translation Graph)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ແຜນວາດສະແດງການຍ້າຍຈຸດຈອມຈາກ (0, 0) ໄປຫາ (3, 2) ຂອງ y = (x - 3)² + 2:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <svg viewBox="0 0 240 130" style={{ width: "100%", maxWidth: "240px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Grid */}
              <line x1="60" y1="10" x2="60" y2="120" stroke="#eee" strokeWidth="1" />
              <line x1="140" y1="10" x2="140" y2="120" stroke="#eee" strokeWidth="1" />
              <line x1="20" y1="100" x2="220" y2="100" stroke="#eee" strokeWidth="1" />
              <line x1="20" y1="60" x2="220" y2="60" stroke="#eee" strokeWidth="1" />

              {/* Axes */}
              <line x1="60" y1="10" x2="60" y2="120" stroke="#666" strokeWidth="1.2" />
              <line x1="20" y1="100" x2="220" y2="100" stroke="#666" strokeWidth="1.2" />

              {/* Original y = x^2 (dashed) */}
              <path d="M 20,40 Q 60,100 100,40" fill="none" stroke="#bbb" strokeWidth="1.5" strokeDasharray="3,3" />

              {/* Shifted y = (x-3)^2 + 2 */}
              {/* Shifted right by 3 units (3*26.6 = 80 pixels) to cx = 140 */}
              {/* Shifted up by 2 units (2*20 = 40 pixels) to cy = 60 */}
              <path d="M 100,20 Q 140,60 180,20" fill="none" stroke="#E91E63" strokeWidth="2.5" />
              <circle cx="140" cy="60" r="3" fill="#E91E63" />
              <text x="140" y="52" fill="#E91E63" fontSize="7" textAnchor="middle" fontWeight="bold">{"(3, 2)"}</text>

              {/* Path Arrow */}
              <path d="M 60,100 L 140,100 L 140,65" fill="none" stroke="#4CAF50" strokeWidth="1.2" strokeDasharray="2,2" />
              <polygon points="137,65 140,60 143,65" fill="#4CAF50" />
              <text x="100" y="94" fill="#4CAF50" fontSize="7" textAnchor="middle">{"ຍ້າຍຂວາ +3"}</text>
              <text x="162" y="80" fill="#4CAF50" fontSize="7" textAnchor="middle">{"ຍ້າຍຂຶ້ນ +2"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ພຽງແຕ່ຊອກຫາຈຸດຈອມ (p, q) ໃຫ້ຖືກຕ້ອງ ເຮົາກໍຈະແຕ້ມປາຣາໂບນໄດ້ຢ່າງງ່າຍດາຍທັນທີເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາພິກັດຈຸດຈອມ (p, q) ຂອງຕຳລາຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = 2(x - 3)² + 5. ພິກັດຈຸດຈອມ (p, q) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (3, 5)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -(x + 4)² - 2. ພິກັດຈຸດຈອມ (p, q) ແມ່ນເທົ່າໃດ? (⚠️ ສັງເກດເຄື່ອງໝາຍໃຫ້ດີ):"}</span>
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
            {"ຈົ່ງບອກສົມຜົນຂອງແກນເຄິ່ງຄື ແລະ ຄ່າສູງສຸດ/ຕ່ຳສຸດ: "}{" "}
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
              <span>{"(1) ຈາກຕຳລາຂໍ້ 1.(1) y = 2(x - 3)² + 5, ສົມຜົນຂອງແກນເຄິ່ງຄືແມ່ນ x ເທົ່າກັບເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຕຳລາຂໍ້ 1.(2) y = -(x + 4)² - 2, ຕຳລານີ້ມີຄ່າສູງສຸດ y ເທົ່າກັບເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຄິດໄລ່ແທນຄ່າ x ເຂົ້າໃນຕຳລາໃຫ້ລະອຽດ. ບົດທ້າທາຍ 2: ຊອກຫາໄລຍະຫ່າງການຍ້າຍຂະໜານລະຫວ່າງສອງເມັດຈຸດຈອມ (p, q) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຄ່າ y ຂອງຕຳລາທີ່ມີການເຄື່ອນຍ້າຍສອງມິຕິ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໃຫ້ຕຳລາ y = 3(x - 2)² + 1. ຖ້າ x = 4, ຄ່າ y ຈະແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ຕຳລາ y = -(x + 1)² + 6. ຖ້າ x = 1, ຄ່າ y ຈະແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາໄລຍະຫ່າງການຍ້າຍຂະໜານຕາມແກນ y (Vertical translation): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ເພື່ອຍ້າຍເສັ້ນສະແດງ y = x² + 3 ໃຫ້ກາຍເປັນ y = x² - 2, ຈະຕ້ອງຍ້າຍຂະໜານລົງລຸ່ມຈັກຫົວໜ່ວຍ? (ຕອບເປັນຕົວເລກບວກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຫົວໜ່ວຍ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ເພື່ອຍ້າຍເສັ້ນສະແດງ y = (x - 1)² - 4 ໃຫ້ກາຍເປັນ y = (x - 1)² + 3, ຈະຕ້ອງຍ້າຍຂະໜານຂຶ້ນເທິງຈັກຫົວໜ່ວຍ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຫົວໜ່ວຍ"}</span>
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
            {"ຈົ່ງຊອກຫາສູດຕຳລາໃໝ່ ຫຼັງຈາກການຍ້າຍຂະໜານສອງທິດທາງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ຍ້າຍຂະໜານເສັ້ນສະແດງ y = 2x² ໄປທາງຂວາ 3 ຫົວໜ່ວຍ ແລະ ຂຶ້ນເທິງ 4 ຫົວໜ່ວຍ ຈະໄດ້ສູດຕຳລາໃໝ່ແມ່ນຫຍັງ? (ຕອບແບບ a(x-p)^2+q, ຕົວຢ່າງ: 2(x-3)^2+4):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຍ້າຍຂະໜານເສັ້ນສະແດງ y = -x² ໄປທາງຊ້າຍ 1 ຫົວໜ່ວຍ ແລະ ລົງລຸ່ມ 5 ຫົວໜ່ວຍ ຈະໄດ້ສູດຕຳລາໃໝ່ແມ່ນຫຍັງ? (ຕອບແບບ -(x+p)^2-q, ຕົວຢ່າງ: -(x+1)^2-5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການອອກແບບຂົວແຂວນ (Suspension Bridge Cable Design): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ສາຍເຄເບິລຂອງຂົວແຂວນໜຶ່ງມີຮູບຮ່າງເປັນປາຣາໂບນ y = 0.01(x - 50)² + 5 (m) ເຊິ່ງ x ແມ່ນໄລຍະທາງຈາກສົ້ນຂົວ. ຈົ່ງຊອກຫາຄວາມສູງຕ່ຳສຸດຂອງສາຍເຄເບິລນີ້ (m) (ຄຳແນະນຳ: ຄວາມສູງຕ່ຳສຸດແມ່ນຄ່າ q ຢູ່ຈຸດຈອມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຕ່ຳສຸດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄວາມສູງຕ່ຳສຸດຂອງສາຍເຄເບິລນັ້ນ ຢູ່ຫ່າງຈາກສົ້ນຂົວເບື້ອງຕົ້ນ x ເປັນໄລຍະທາງຈັກແມັດ (m)? (ຄຳແນະນຳ: ແມ່ນຄ່າ p ຢູ່ຈຸດຈອມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
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
          <span key="u16-ans-1-1">{"(1) (3, 5) (ແມ່ນພິກັດຈຸດຈອມ p=3, q=5)"}</span>,
          <span key="u16-ans-1-2">{"(2) (-4, -2) (⚠️ p=-4, q=-2 ຍ້ອນວ່າໃນວົງເລັບເປັນ x+4)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u16-ans-2-1">{"(1) 3 (ແກນເຄິ່ງຄືແມ່ນ x = 3)"}</span>,
          <span key="u16-ans-2-2">{"(2) -2 (ຍ້ອນວ່າ a = -1 < 0, ດັ່ງນັ້ນມີຈຸດຈອມເປັນຈຸດສູງສຸດ ເຊິ່ງມີຄ່າ y = -2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u16-ans-t1-1">{"(1) 13 (ເພາະວ່າ y = 3 × (4 - 2)² + 1 = 3 × 4 + 1 = 13)"}</span>,
          <span key="u16-ans-t1-2">{"(2) 2 (ເພາະວ່າ y = -(1 + 1)² + 6 = -4 + 6 = 2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u16-ans-t2-1">{"(1) 5 (ເພາະວ່າຍ້າຍລົງລຸ່ມຈາກ 3 ໄປຫາ -2, ໄລຍະຫ່າງແມ່ນ 3 - (-2) = 5 ຫົວໜ່ວຍ)"}</span>,
          <span key="u16-ans-t2-2">{"(2) 7 (ເພາະວ່າຍ້າຍຂຶ້ນເທິງຈາກ -4 ໄປຫາ 3, ໄລຍະຫ່າງແມ່ນ 3 - (-4) = 7 ຫົວໜ່ວຍ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u16-ans-s1-1">{"(1) 2(x-3)^2+4 (ເພາະວ່າຍ້າຍຂວາ 3 ⇒ x-3, ແລະ ຍ້າຍຂຶ້ນ 4 ⇒ +4)"}</span>,
          <span key="u16-ans-s1-2">{"(2) -(x+1)^2-5 (ເພາະວ່າຍ້າຍຊ້າຍ 1 ⇒ x+1, ແລະ ຍ້າຍລົງ 5 ⇒ -5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u16-ans-s2-1">{"(1) 5 (ເພາະວ່າຄວາມສູງຕ່ຳສຸດຢູ່ຈຸດຈອມ q = 5 m)"}</span>,
          <span key="u16-ans-s2-2">{"(2) 50 (ເພາະວ່າຈຸດຈອມຢູ່ຫ່າງຈາກສົ້ນຂົວ p = 50 m)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ໄວ້ສະເໝີວ່າ ຕຳລາຂັ້ນສອງ y = a(x - p)² + q ຈະມີຈຸດຈອມຢູ່ (p, q) ແລະ ແກນເຄິ່ງຄືແມ່ນ x = p! ມັນຄືຮູບຮ່າງມາດຕະຖານທີ່ສຳຄັນທີ່ສຸດເດີ້!",
  },
};
