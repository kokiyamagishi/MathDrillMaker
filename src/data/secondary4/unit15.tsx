import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ພາກທີ II - ບົດທີ 15: ຕຳລາໃນຮູບຮ່າງ y = a(x - b)²",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບການຍ້າຍຂະໜານ (Translation) ຂອງເສັ້ນສະແດງປາຣາໂບນຕາມແກນ x (Horizontal translation) ແລະ ວິທີກຳນົດພິກັດຈຸດຈອມໃໝ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 15 ໜ້າ 85-90",
  keyPoints: [
    {
      title: "1. ການຍ້າຍຂະໜານຕາມແກນ x (Horizontal Shift along the x-axis)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເສັ້ນສະແດງຂອງ y = a(x - b)² ໄດ້ມາຈາກການຍ້າຍຂະໜານເສັ້ນສະແດງ y = ax² ຕາມແນວນອນ (ແກນ x) ເປັນໄລຍະ b ຫົວໜ່ວຍ:"}
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
              <strong style={{ color: "#E65100" }}>{"• ⚠️ ທິດທາງການຍ້າຍ (⚠️ ຢ່າລືມເຄື່ອງໝາຍ): "}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຖ້າ b > 0 (ໃນຮູບ y = a(x - b)²): ເສັ້ນສະແດງຈະຍ້າຍໄປທາງ ຂວາ b ຫົວໜ່ວຍ."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຖ້າ b < 0 (ໃນຮູບ y = a(x + |b|)²): ເსັ້ນສະແດງຈະຍ້າຍໄປທາງ ຊ້າຍ |b| ຫົວໜ່ວຍ."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#D84315" }}>{"• ຈຸດຈອມ ແລະ ແກນເຄິ່ງຄືໃໝ່: "}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຈຸດຈອມ (Vertex) ຍ້າຍຈາກ (0, 0) ໄປເປັນ (b, 0)."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ແກນເຄິ່ງຄື (Axis of Symmetry) ປ່ຽນຈາກ x = 0 ໄປເປັນ x = b."}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຕຳລາ y = (x - 3)² ຈະມີຈຸດຈອມແມ່ນ (3, 0) (ຍ້າຍໄປຂວາ 3), ສ່ວນ y = (x + 2)² ຈະມີຈຸດຈອມແມ່ນ (-2, 0) (ຍ້າຍໄປຊ້າຍ 2) ເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ແຜນວາດການຍ້າຍຂະໜານຕາມແນວນອນ (Horizontal Translation Graph)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ແຜນວາດສະແດງການຍ້າຍຂະໜານຈາກ y = x² ໄປຫາ y = (x - 3)²:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <svg viewBox="0 0 240 120" style={{ width: "100%", maxWidth: "240px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Grid */}
              <line x1="80" y1="10" x2="80" y2="110" stroke="#eee" strokeWidth="1" />
              <line x1="160" y1="10" x2="160" y2="110" stroke="#eee" strokeWidth="1" />
              <line x1="20" y1="90" x2="220" y2="90" stroke="#eee" strokeWidth="1" />

              {/* Axes */}
              <line x1="80" y1="10" x2="80" y2="110" stroke="#666" strokeWidth="1.2" />
              <line x1="20" y1="90" x2="220" y2="90" stroke="#666" strokeWidth="1.2" />

              {/* y = x^2 (original, dashed grey) */}
              <path d="M 40,30 Q 80,90 120,30" fill="none" stroke="#bbb" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="80" y="25" fill="#999" fontSize="7" textAnchor="middle">{"y=x²"}</text>

              {/* y = (x-3)^2 shifted to right by 3 units (scale: 1 unit = 26 pixels) */}
              {/* x-shift = 3 * 26.6 = 80 pixels. New vertex is cx = 80 + 80 = 160 */}
              <path d="M 120,30 Q 160,90 200,30" fill="none" stroke="#E91E63" strokeWidth="2.5" />
              <text x="160" y="25" fill="#E91E63" fontSize="7" textAnchor="middle" fontWeight="bold">{"y=(x-3)²"}</text>

              {/* Shift Arrow */}
              <path d="M 85,75 L 145,75" stroke="#4CAF50" strokeWidth="1.5" />
              <polygon points="145,72 150,75 145,78" fill="#4CAF50" />
              <text x="115" y="68" fill="#4CAF50" fontSize="7" textAnchor="middle" fontWeight="bold">{"ຍ້າຍຂວາ +3"}</text>
            </svg>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາເບິ່ງໃນວົງເລັບ (x - b) ໃຫ້ຈື່ໄວ້ວ່າ ຄ່າ b ຈະມີເຄື່ອງໝາຍກົງກັນຂ້າມສະເໝີເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາພິກັດຈຸດຈອມຂອງຕຳລາໃນຮູບຮ່າງ y = a(x - b)²: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = 2(x - 4)². ພິກັດຈຸດຈອມ (x, y) ແມ່ນເທົ່າໃດ? (ຕອບໃນຮູບແບບ (x, y), ຕົວຢ່າງ: (4, 0)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -(x + 5)². ພິກັດຈຸດຈອມ (x, y) ແມ່ນເທົ່າໃດ? (⚠️ ຢ່າລືມເຄື່ອງໝາຍໃນວົງເລັບ):"}</span>
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
            {"ຈົ່ງຊອກຫາສົມຜົນຂອງແກນເຄິ່ງຄື ຂອງປາຣາໂບນ: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = (x - 3)². ສົມຜົນຂອງແກນເຄິ່ງຄືແມ່ນ x ເທົ່າກັບເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -3(x + 6)². ສົມຜົນຂອງແກນເຄິ່ງຄືແມ່ນ x ເທົ່າກັບເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຄິດໄລ່ແທນຄ່າ x ໃສ່ໃນຕຳລາໃຫ້ລະອຽດ. ບົດທ້າທາຍ 2: ຊອກຫາໄລຍະຫ່າງການຍ້າຍຂະໜານລະຫວ່າງຈຸດຈອມສອງເສັ້ນສະແດງ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຄ່າ y ຂອງຕຳລາທີ່ມີວົງເລັບກຳລັງສອງ: "}{" "}
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
                <span>{"(1) ໃຫ້ຕຳລາ y = 2(x - 3)². ຖ້າ x = 5, ຄ່າ y ຈະແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ຕຳລາ y = -(x + 2)². ຖ້າ x = 1, ຄ່າ y ຈະແມ່ນເທົ່າໃດ? (⚠️ ຢ່າລືມເຄື່ອງໝາຍລົບທາງໜ້າວົງເລັບ):"}</span>
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
              {"ຈົ່ງຊອກຫາໄລຍະຫ່າງການຍ້າຍຂະໜານຕາມແນວນອນ: "}{" "}
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
                <span>{"(1) ເສັ້ນສະແດງ y = (x - 1)² ຈະຍ້າຍຂະໜານໄປທາງຂວາຈັກຫົວໜ່ວຍ ຈາກເສັ້ນສະແດງ y = x²? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຫົວໜ່ວຍ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ເພື່ອຍ້າຍເສັ້ນສະແດງ y = 2(x + 2)² ໃຫ້ກາຍເປັນ y = 2(x - 3)², ຈະຕ້ອງຍ້າຍຂະໜານໄປທາງຂວາຈັກຫົວໜ່ວຍ? (ຕອບເປັນຕົວເລກ):"}</span>
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
            {"ຈົ່ງຊອກຫາສູດຕຳລາໃໝ່ ຫຼັງຈາກການຍ້າຍຂະໜານຕາມແກນ x: "}{" "}
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
              <span>{"(1) ຍ້າຍຂະໜານເສັ້ນສະແດງ y = 3x² ໄປທາງຂວາ 2 ຫົວໜ່ວຍ ຈະໄດ້ສູດຕຳລາໃໝ່ແມ່ນ y ເທົ່າກັບເທົ່າໃດ? (ຕອບໃນຮູບແບບ a(x-b)^2, ຕົວຢ່າງ: 3(x-2)^2):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຍ້າຍຂະໜານເສັ້ນສະແດງ y = -x² ໄປທາງຊ້າຍ 4 ຫົວໜ່ວຍ ຈະໄດ້ສູດຕຳລາໃໝ່ແມ່ນ y ເທົ່າກັບເທົ່າໃດ? (ຕອບໃນຮູບແບບ - (x+b)^2, ຕົວຢ່າງ: -(x+4)^2):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບເນື້ອທີ່ຂອບທາງຍ່າງ (Path surrounding a Lawn): "}{" "}
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
              <span>{"(1) ສວນຫຍ້າຮູບສີ່ແຈມົນທົນໜຶ່ງມີເນື້ອທີ່ A = (x - 3)² (cm²) ເນື່ອງຈາກມີການຫັກເນື້ອທີ່ດິນເຮັດທາງຍ່າງ 3 cm ອ້ອມຮອບ. ຖ້າ x = 10 cm, ເນື້ອທີ່ສວນຫຍ້າ A ຈະແມ່ນຈັກ cm²?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: A ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຕ້ອງການໃຫ້ສວນຫຍ້າມີເນື້ອທີ່ A = 25 cm² ພໍດີ, ຄວາມຍາວທີ່ດິນ x ຈະຕ້ອງແມ່ນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
          <span key="u15-ans-1-1">{"(1) (4, 0) (ແມ່ນພິກັດຈຸດຈອມ ຍ້າຍຂວາ 4)"}</span>,
          <span key="u15-ans-1-2">{"(2) (-5, 0) (ແມ່ນພິກັດຈຸດຈອມ ຍ້າຍຊ້າຍ 5)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u15-ans-2-1">{"(1) 3 (ແກນເຄິ່ງຄືແມ່ນ x = 3)"}</span>,
          <span key="u15-ans-2-2">{"(2) -6 (ແກນເຄິ່ງຄືແມ່ນ x = -6)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u15-ans-t1-1">{"(1) 8 (ເພາະວ່າ y = 2 × (5 - 3)² = 2 × 2² = 2 × 4 = 8)"}</span>,
          <span key="u15-ans-t1-2">{"(2) -9 (ເພາະວ່າ y = -(1 + 2)² = -(3)² = -9)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u15-ans-t2-1">{"(1) 1 (ເພາະວ່າ b = 1, ຍ້າຍຂວາ 1 ຫົວໜ່ວຍ)"}</span>,
          <span key="u15-ans-t2-2">{"(2) 5 (ເພາະວ່າຈຸດຈອມຍ້າຍຈາກ -2 ໄປຫາ 3, ໄລຍະຫ່າງແມ່ນ 3 - (-2) = 5 ຫົວໜ່ວຍ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u15-ans-s1-1">{"(1) 3(x-2)^2 (ເພາະວ່າຍ້າຍຂວາ 2 ຫົວໜ່ວຍ ຈະແທນ x ດ້ວຍ x-2)"}</span>,
          <span key="u15-ans-s1-2">{"(2) -(x+4)^2 (ເພາະວ່າຍ້າຍຊ້າຍ 4 ຫົວໜ່ວຍ ຈະແທນ x ດ້ວຍ x+4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u15-ans-s2-1">{"(1) 49 (ເພາະວ່າ A = (10 - 3)² = 7² = 49 cm²)"}</span>,
          <span key="u15-ans-s2-2">{"(2) 8 (ເພາະວ່າ (x - 3)² = 25  ⇒  x - 3 = 5  ⇒  x = 8 cm)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງລະວັງເຄື່ອງໝາຍໃນວົງເລັບ (x - b)² ສະເໝີ! ເມື່ອວົງເລັບເປັນລົບ ຈະຍ້າຍໄປທາງຂວາ (b ບວກ), ແລະ ເມື່ອວົງເລັບເປັນບວກ ຈະຍ້າຍໄປທາງຊ້າຍ (b ລົບ) ເດີ້!",
  },
};
