import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ພາກທີ II - ບົດທີ 14: ຕຳລາຂັ້ນສອງໃນຮູບຮ່າງ y = ax²",
  unitGoal:
    "ເຂົ້າໃຈການປ່ຽນແປງຂອງເສັ້ນສະແດງປາຣາໂບນ y = ax² ຕາມຄ່າສຳປະສິດ a (ການປິ່ນຂຶ້ນ/ລົງ ແລະ ຄວາມກວ້າງ/ແຄບ ຂອງເສັ້ນໂຄ້ງ)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 14 ໜ້າ 79-84",
  subSections: [
    {
      title: "1. ອິດທິພົນຂອງສຳປະສິດ a (Influence of Coefficient 'a')",
      keyPoint: {
      title: "1. ອິດທິພົນຂອງສຳປະສິດ a (Influence of Coefficient 'a')",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສຳປະສິດ a ຈະເປັນຕົວຊີ້ບອກທິດທາງ ແລະ ຄວາມກວ້າງຂອງເສັ້ນສະແດງປາຣາໂບນ y = ax²:"}
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
              <strong style={{ color: "#E65100" }}>{"• ທິດທາງຂອງການປິ່ນ (Direction): "}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຖ້າ a > 0: ເສັ້ນສະແດງ ປິ່ນຂຶ້ນ ເທິງ (ມີຈຸດຕ່ຳສຸດຢູ່ (0, 0))."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຖ້າ a < 0: ເສັ້ນສະແດງ ປິ່ນລົງ ລຸ່ມ (ມີຈຸດສູງສຸດຢູ່ (0, 0))."}</span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#D84315" }}>{"• ຄວາມກວ້າງ/ແຄບ (Width of Curve): "}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຖ້າຄ່າສຳບູນ |a| ຍິ່ງໃຫຍ່, ເສັ້ນສະແດງຈະຍິ່ງ ແຄບ (ຫຍັບເຂົ້າຫາແກນ y)."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- ຖ້າຄ່າສຳບູນ |a| ຍິ່ງນ້ອຍ, ເສັ້ນສະແດງຈະຍິ່ງ ກວ້າງ (ຫ່າງຈາກແກນ y)."}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ປາຣາໂບນ y = 2x² ຈະແຄບກວ່າ y = x², ແລະ y = -3x² ຈະປິ່ນລົງລຸ່ມ ແລະ ແຄບກວ່າ y = -x² ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫາຄ່າ y ຂອງຕຳລາ y = ax² ຕາມຄ່າ x ທີ່ກຳນົດ: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = 3x². ຖ້າ x = 2, ຄ່າ y ຈະແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -2x². ຖ້າ x = -3, ຄ່າ y ຈະແມ່ນເທົ່າໃດ? (⚠️ ໄລ່ກຳລັງສອງ x ກ່ອນແລ້ວຈຶ່ງຄູນ -2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ແຜນວາດການປຽບທຽບເສັ້ນສະແດງ (Graphical Comparison)",
      keyPoint: {
      title: "2. ແຜນວາດການປຽບທຽບເສັ້ນສະແດງ (Graphical Comparison)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* a > 0 comparison */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "4px" }}>{"ປິ່ນຂຶ້ນ (y=2x² vs y=0.5x²)"}</span>
              <svg viewBox="0 0 120 100" style={{ width: "120px", height: "100px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                <line x1="10" y1="80" x2="110" y2="80" stroke="#333" strokeWidth="0.8" />
                <line x1="60" y1="90" x2="60" y2="10" stroke="#333" strokeWidth="0.8" />
                {/* y = 2x^2 (narrow) */}
                <path d="M 40,20 Q 60,80 80,20" fill="none" stroke="#E91E63" strokeWidth="1.8" />
                <text x="82" y="25" fill="#E91E63" fontSize="6">{"y=2x²"}</text>
                {/* y = 0.5x^2 (wide) */}
                <path d="M 20,40 Q 60,80 100,40" fill="none" stroke="#2196F3" strokeWidth="1.8" />
                <text x="102" y="45" fill="#2196F3" fontSize="6">{"y=0.5x²"}</text>
              </svg>
            </div>
            {/* a < 0 comparison */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "4px" }}>{"ປິ່ນລົງ (y=-x²)"}</span>
              <svg viewBox="0 0 120 100" style={{ width: "120px", height: "100px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                <line x1="10" y1="30" x2="110" y2="30" stroke="#333" strokeWidth="0.8" />
                <line x1="60" y1="90" x2="60" y2="10" stroke="#333" strokeWidth="0.8" />
                {/* y = -x^2 */}
                <path d="M 30,80 Q 60,30 90,80" fill="none" stroke="#4CAF50" strokeWidth="1.8" />
                <text x="92" y="75" fill="#4CAF50" fontSize="6">{"y=-x²"}</text>
              </svg>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຈຸດຈອມຂອງທຸກໆຕຳລາໃນຮູບຮ່າງ y = ax² ແມ່ນຢູ່ O(0, 0) ຄືກັນໝົດເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງບອກທິດທາງການປິ່ນຂອງເສັ້ນສະແດງ (ຕອບ ປິ່ນຂຶ້ນ ຫຼື ປິ່ນລົງ): "}{" "}
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
              <span>{"(1) ເສັ້ນສະແດງຂອງຕຳລາ y = -5x² ຈະມີລັກສະນະແນວໃດ? (ຕອບ ປິ່ນຂຶ້ນ ຫຼື ປິ່ນລົງ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ເສັ້ນສະແດງຂອງຕຳລາ y = "} <Fraction num="1" den="3" /> {" x² ຈະມີລັກສະນະແນວໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ປຽບທຽບຄວາມກວ້າງ/ແຄບ ໂດຍເບິ່ງທີ່ຄ່າສຳບູນ |a|. ບົດທ້າທາຍ 2: ໃຫ້ຕັ້ງສົມຜົນ y = ax² ແລ້ວແທນພິກັດເມັດເພື່ອຊອກຫາຄ່າ a ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປຽບທຽບຄວາມແຄບຂອງເສັ້ນສະແດງ (Narrowness comparison): "}{" "}
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
                <span>{"(1) ລະຫວ່າງສອງຕຳລາ A: y = 3x² ແລະ B: y = x², ເສັ້ນສະແດງໃດມີລັກສະນະ ແຄບ ກວ່າ? (ຕອບ A ຫຼື B):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ລະຫວ່າງສອງຕຳລາ C: y = -0.2x² ແລະ D: y = -2x², ເສັ້ນສະແດງໃດມີລັກສະນະ ແຄບ ກວ່າ? (⚠️ ເບິ່ງຄ່າສຳບູນ |a|):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາສຳປະສິດ a ຈາກເມັດພິກັດທີ່ເສັ້ນສະແດງຜ່ານ: "}{" "}
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
                <span>{"(1) ເສັ້ນສະແດງ y = ax² ຜ່ານເມັດ P(2, 8). ຄ່າຂອງສຳປະສິດ a ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ເສັ້ນສະແດງ y = ax² ຜ່ານເມັດ Q(3, -9). ຄ່າຂອງສຳປະສິດ a ແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ບົດສັງລວມກ່ຽວກັບຄຸນລັກສະນະຂອງ y = ax²: "}{" "}
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
              <span>{"(1) ຖ້າກຳນົດ y = ax² ມີຈຸດສູງສຸດຢູ່ (0, 0), ຄ່າຂອງ a ຈະຕ້ອງເປັນຄ່າບວກ ຫຼື ຄ່າລົບ? (ຕອບ ຄ່າບວກ ຫຼື ຄ່າລົບ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າເສັ້ນສະແດງ y = ax² ແຄບກວ່າ y = -3x², ຄ່າສຳບູນ |a| ຕ້ອງໃຫຍ່ກວ່າ ຫຼື ນ້ອຍກວ່າ 3? (ຕອບ ໃຫຍ່ກວ່າ ຫຼື ນ້ອຍກວ່າ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຕົກແບບເສລີ (Free Fall Gravity Problem): "}{" "}
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
              <span>{"(1) ໄລຍະທາງຕົກ y (m) ຂອງວັດຖຸໃນເວລາ t (ວິນາທີ) ແມ່ນສະແດງດ້ວຍຕຳລາ y = 5t² (ປະມານ g/2 = 5). ຖ້າ t = 3 ວິນາທີ, ວັດຖຸຈະຕົກໄດ້ໄລຍະທາງຈັກແມັດ (m)?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າວັດຖຸຕົກໄດ້ໄລຍະທາງ y = 80 m, ຈະຕ້ອງໃຊ້ເວລາຈັກວິນາທີ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ວິນາທີ"}</span>
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
          <span key="u14-ans-1-1">{"(1) 12 (ເພາະວ່າ y = 3 × 2² = 3 × 4 = 12)"}</span>,
          <span key="u14-ans-1-2">{"(2) -18 (ເພາະວ່າ y = -2 × (-3)² = -2 × 9 = -18)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u14-ans-2-1">{"(1) ປິ່ນລົງ (ເພາະວ່າສຳປະສິດ a = -5 < 0)"}</span>,
          <span key="u14-ans-2-2">{"(2) ປິ່ນຂຶ້ນ (ເພາະວ່າສຳປະສິດ a = 1/3 > 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u14-ans-t1-1">{"(1) A (ເພາະວ່າ |3| > |1|, ດັ່ງນັ້ນ A ແຄບກວ່າ)"}</span>,
          <span key="u14-ans-t1-2">{"(2) D (ເພາະວ່າ |-2| > |-0.2|, ດັ່ງນັ້ນ D ແຄບກວ່າ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u14-ans-t2-1">{"(1) 2 (ເພາະວ່າ 8 = a × 2²  ⇒  4a = 8  ⇒  a = 2)"}</span>,
          <span key="u14-ans-t2-2">{"(2) -1 (ເພາະວ່າ -9 = a × 3²  ⇒  9a = -9  ⇒  a = -1)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u14-ans-s1-1">{"(1) ຄ່າລົບ (ເພາະວ່າປາຣາໂບນຕ້ອງປິ່ນລົງລຸ່ມ ຈຶ່ງຈະມີຈຸດຈອມເປັນຈຸດສູງສຸດ)"}</span>,
          <span key="u14-ans-s1-2">{"(2) ໃຫຍ່ກວ່າ (ເພາະວ່າເພື່ອໃຫ້ແຄບກວ່າ, ຄ່າສຳບູນ |a| ຕ້ອງໃຫຍ່ກວ່າ |-3| = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u14-ans-s2-1">{"(1) 45 (ເພາະວ່າ y = 5 × 3² = 5 × 9 = 45 m)"}</span>,
          <span key="u14-ans-s2-2">{"(2) 4 (ເພາະວ່າ 80 = 5t²  ⇒  t² = 16  ⇒  t = 4 ວິນາທີ)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ໄວ້ວ່າ ເຄື່ອງໝາຍຂອງ a ບອກທິດທາງການປິ່ນ, ສ່ວນຄ່າສຳບູນ |a| ບອກຄວາມແຄບຂອງເສັ້ນສະແດງເດີ້! ຍິ່ງ |a| ຫຼາຍ ເສັ້ນສະແດງຍິ່ງແຄບຫຍັບເຂົ້າຫາແກນ y!",
  },
};
